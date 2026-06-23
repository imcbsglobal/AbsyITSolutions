import React, { useState, useEffect, useCallback } from 'react';
import imcLogo from '../assets/imclogo_new.jpeg';

 const LICENSE_API_ENDPOINT = 'https://activate.imcbs.com/mobileapp/api/project/customdev/';
//  const LICENSE_API_ENDPOINT = 'https://activate.imcbs.com/BROKEN/'; 
const CURRENT_CLIENT_ID   = 'SSWBBOP7EBK6U';
const CUSTOMER_LABEL      = 'ABSY IT SOLUTIONS';
const POLL_INTERVAL       = 3000;

const DEFAULT_LICENSE_DATA = {
  success: true,
  project_name: 'Custom Dev',
  customers: [{
    customer_name: 'ABSY IT SOLUTIONS',
    client_id:     'SSWBBOP7EBK6U',
    license_key:   'GH8O-DN5J-1GY9-Q6M2',
    package:       'Custom Dev',
    modules:       [{ module_name: 'Custom Dev', module_code: 'MOD062' }],
    license_summary:  { registered_devices: 0, max_devices: 0 },
    license_validity: { expiry_date: '2027-06-22', remaining_days: 364, is_expired: false },
    registered_devices: [],
    status: 'Active',
  }],
};

const KF = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap');

  @keyframes pulse-dot {
    0%,100% { opacity:1; box-shadow:0 0 0 0 rgba(220,38,38,.5); }
    50%      { opacity:.7; box-shadow:0 0 0 6px rgba(220,38,38,0); }
  }
  @keyframes fade-in {
    from { opacity:0; transform:translateY(10px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes spin-rev {
    from { transform: rotate(0deg); }
    to   { transform: rotate(-360deg); }
  }

  @keyframes drip-fall {
    0%            { height: 0px; opacity: 0; }
    6%            { opacity: 1; }
    80%           { opacity: .95; }
    100%          { height: var(--drip-len, 120px); opacity: 0; }
  }
  @keyframes drip-blob {
    0%, 55%  { transform: scale(1); opacity: 0; }
    65%      { transform: scaleX(1.6) scaleY(.7); opacity: .85; }
    80%      { transform: scaleX(2.2) scaleY(.45); opacity: .6; }
    100%     { transform: scaleX(2.8) scaleY(.2); opacity: 0; }
  }
  @keyframes drip-wobble {
    0%,100% { transform: translateX(0); }
    30%     { transform: translateX(1.5px); }
    70%     { transform: translateX(-1px); }
  }
`;

const R = {
  bg:       '#0f0a0a',
  surface:  '#161010',
  card:     '#1c1414',
  border:   '#2a1a1a',
  brtBrd:   '#3d1f1f',
  red:      '#dc2626',
  redDim:   '#991b1b',
  redFade:  'rgba(220,38,38,.12)',
  redGlow:  'rgba(220,38,38,.25)',
  text:     '#f5f0f0',
  textMid:  '#a89090',
  textDim:  '#6b4f4f',
  mono:     '"JetBrains Mono", "Courier New", monospace',
  sans:     '"Inter", system-ui, sans-serif',
};

const DRIPS = [
  { left:'6%',  delay:'0s',    dur:'3.2s', len:90,  w:2 },
  { left:'13%', delay:'1.1s',  dur:'4.0s', len:140, w:3 },
  { left:'21%', delay:'0.4s',  dur:'2.8s', len:70,  w:2 },
  { left:'29%', delay:'2.3s',  dur:'3.6s', len:110, w:2 },
  { left:'36%', delay:'0.9s',  dur:'4.4s', len:160, w:3 },
  { left:'43%', delay:'1.7s',  dur:'3.0s', len:85,  w:2 },
  { left:'51%', delay:'0.2s',  dur:'3.8s', len:130, w:3 },
  { left:'58%', delay:'2.8s',  dur:'2.6s', len:65,  w:2 },
  { left:'65%', delay:'1.4s',  dur:'4.2s', len:150, w:3 },
  { left:'72%', delay:'0.7s',  dur:'3.4s', len:95,  w:2 },
  { left:'79%', delay:'2.1s',  dur:'3.0s', len:120, w:2 },
  { left:'86%', delay:'0.5s',  dur:'4.6s', len:175, w:3 },
  { left:'92%', delay:'1.9s',  dur:'2.9s', len:80,  w:2 },
];

const BloodDrips = () => (
  <div style={{ position:'absolute', top:0, left:0, right:0, pointerEvents:'none', zIndex:6 }}>
    {DRIPS.map((d, i) => (
      <div key={i} style={{
        position:'absolute',
        top:0,
        left: d.left,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        animation:`drip-wobble ${2.5+i*.3}s ease-in-out infinite`,
      }}>
        <div style={{
          width: d.w,
          background:`linear-gradient(to bottom, #8b0000, #dc2626 40%, #ef4444 80%, rgba(220,38,38,0))`,
          borderRadius:`0 0 ${d.w}px ${d.w}px`,
          '--drip-len': `${d.len}px`,
          animation:`drip-fall ${d.dur} ${d.delay} ease-in infinite`,
          boxShadow:`0 0 4px rgba(220,38,38,.6)`,
        }}/>
        <div style={{
          width: d.w * 4,
          height: d.w * 2.5,
          borderRadius:'50%',
          background:'#dc2626',
          marginTop:-1,
          boxShadow:`0 0 6px rgba(220,38,38,.5)`,
          animation:`drip-blob ${d.dur} ${d.delay} ease-in infinite`,
        }}/>
      </div>
    ))}
  </div>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" style={{ width:18, height:18 }}>
    <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"
      stroke={R.red} strokeWidth="1.5" fill="rgba(220,38,38,.1)" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke={R.red} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" style={{ width:12, height:12 }}>
    <rect x="3" y="11" width="18" height="11" rx="2" stroke={R.textDim} strokeWidth="1.5"/>
    <path d="M7 11V7a5 5 0 0110 0v4" stroke={R.textDim} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="16" r="1.5" fill={R.textDim}/>
  </svg>
);

const Sigil = ({ size = 140 }) => (
  <svg viewBox="0 0 200 200" fill="none"
    style={{ width:size, height:size, display:'block', margin:'0 auto' }}>
    <defs>
      <filter id="rg" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="3" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <radialGradient id="rglow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={R.red} stopOpacity=".9"/>
        <stop offset="100%" stopColor={R.redDim} stopOpacity="0"/>
      </radialGradient>
    </defs>
    <g filter="url(#rg)" style={{ transformOrigin:'100px 100px', animation:'spin-slow 20s linear infinite' }}>
      <circle cx="100" cy="100" r="90" stroke={R.redDim} strokeWidth="1" opacity=".5"/>
      {Array.from({length:32}).map((_,i) => {
        const a=(i/32)*Math.PI*2, r1=82, r2=i%4===0?90:i%2===0?87:84;
        return <line key={i}
          x1={100+Math.cos(a)*r1} y1={100+Math.sin(a)*r1}
          x2={100+Math.cos(a)*r2} y2={100+Math.sin(a)*r2}
          stroke={R.red} strokeWidth={i%4===0?1.5:.8} opacity={i%4===0?.8:.4}/>;
      })}
    </g>
    <g filter="url(#rg)" style={{ transformOrigin:'100px 100px', animation:'spin-rev 14s linear infinite' }}>
      <circle cx="100" cy="100" r="66" stroke={R.red} strokeWidth="1" opacity=".35" strokeDasharray="4 6"/>
    </g>
    <g stroke={R.redDim} strokeWidth=".8" opacity=".4">
      <line x1="100" y1="34" x2="100" y2="166"/>
      <line x1="34"  y1="100" x2="166" y2="100"/>
      <line x1="55"  y1="55"  x2="145" y2="145"/>
      <line x1="145" y1="55"  x2="55"  y2="145"/>
    </g>
    <circle cx="100" cy="100" r="42" stroke={R.red} strokeWidth="1.2" opacity=".5"
      style={{ transformOrigin:'100px 100px', animation:'spin-slow 10s linear infinite' }}
      strokeDasharray="2 8"/>
    <circle cx="100" cy="100" r="22" fill="url(#rglow)" opacity=".6"/>
    <circle cx="100" cy="100" r="10" fill={R.red} filter="url(#rg)"
      style={{ animation:'pulse-dot 2.4s ease-in-out infinite' }}/>
    <circle cx="100" cy="100" r="4" fill="#fff" opacity=".7"/>
  </svg>
);

const StatusBadge = ({ label, variant }) => {
  const colors = {
    error:    { bg:'rgba(220,38,38,.12)', border:'rgba(220,38,38,.4)', text:R.red },
    inactive: { bg:'rgba(100,80,80,.12)', border:'rgba(100,80,80,.4)', text:R.textMid },
  };
  const c = colors[variant] || colors.error;
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', gap:6,
      padding:'4px 12px',
      border:`1px solid ${c.border}`,
      background:c.bg,
      borderRadius:2,
      fontFamily:R.mono, fontSize:10,
      letterSpacing:'.14em', color:c.text, fontWeight:600,
    }}>
      <span style={{
        width:6, height:6, borderRadius:'50%', background:c.text, flexShrink:0,
        animation: variant==='error' ? 'pulse-dot 2s ease-in-out infinite' : 'none',
      }}/>
      {label}
    </span>
  );
};

const InfoTable = ({ customer }) => {
  const rows = [
    { label:'Customer',    value:customer.customer_name },
    { label:'License Key', value:customer.license_key, mono:true },
    { label:'Package',     value:customer.package },
    { label:'Status',      value:customer.status,
      badge:customer.status?.toLowerCase()==='active' ? null : 'inactive' },
    customer.license_validity?.expiry_date &&
      { label:'Expiry Date', value:customer.license_validity.expiry_date },
    customer.license_validity?.remaining_days != null &&
      { label:'Remaining',   value:`${customer.license_validity.remaining_days} days` },
  ].filter(Boolean);

  return (
    <div style={{
      width:'100%', maxWidth:460,
      border:`1px solid ${R.brtBrd}`,
      background:R.card, overflow:'hidden',
    }}>
      <div style={{
        padding:'10px 20px',
        borderBottom:`1px solid ${R.border}`,
        background:'rgba(220,38,38,.06)',
        display:'flex', alignItems:'center', gap:8,
      }}>
        <ShieldIcon/>
        <span style={{
          fontFamily:R.sans, fontSize:11, fontWeight:600,
          letterSpacing:'.08em', color:R.textMid, textTransform:'uppercase',
        }}>License Details</span>
      </div>
      {rows.map(({ label, value, mono, badge }) => (
        <div key={label} style={{
          display:'flex', justifyContent:'space-between', alignItems:'center',
          padding:'12px 20px', borderBottom:`1px solid ${R.border}`, gap:16,
        }}>
          <span style={{ fontFamily:R.sans, fontSize:12, color:R.textDim, flexShrink:0 }}>{label}</span>
          {badge
            ? <StatusBadge label={value} variant={badge}/>
            : <span style={{
                fontFamily:mono ? R.mono : R.sans,
                fontSize:mono ? 11 : 12,
                color:R.text,
                letterSpacing:mono ? '.1em' : '.01em',
                fontWeight:mono ? 400 : 500,
                textAlign:'right',
              }}>{value}</span>
          }
        </div>
      ))}
    </div>
  );
};

const Provider = () => (
  <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:10, marginTop:24 }}>
    <span style={{ fontFamily:R.sans, fontSize:11, color:R.textDim, letterSpacing:'.04em' }}>
      System provided by
    </span>
    <a href="https://imcbs.com" target="_blank" rel="noopener noreferrer" style={{
      display:'flex', alignItems:'center', gap:10,
      border:`1px solid ${R.border}`, background:R.surface,
      padding:'8px 16px', textDecoration:'none', transition:'border-color .2s',
    }}
    onMouseEnter={e=>e.currentTarget.style.borderColor=R.brtBrd}
    onMouseLeave={e=>e.currentTarget.style.borderColor=R.border}
    >
      <span style={{ width:28, height:28, overflow:'hidden', flexShrink:0, borderRadius:2 }}>
        <img src={imcLogo} alt="IMCBS" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
      </span>
      <span style={{ display:'flex', flexDirection:'column', gap:2 }}>
        <span style={{ fontFamily:R.sans, fontSize:13, fontWeight:600, color:R.text }}>IMCBS</span>
        <span style={{ fontFamily:R.sans, fontSize:10, color:R.textDim }}>imcbs.com ↗</span>
      </span>
    </a>
    <div style={{ display:'flex', alignItems:'center', gap:6, fontFamily:R.sans, fontSize:10, color:R.textDim, marginTop:2 }}>
      <LockIcon/> Secure License Management System
    </div>
  </div>
);

const BlockShell = ({ statusCode, headline, message, customer, onRefresh, showButton }) => (
  <div style={{
    position:'fixed', inset:0,
    background:R.bg,
    display:'flex', flexDirection:'column',
    alignItems:'stretch', justifyContent:'stretch',
    zIndex:9999, overflow:'hidden',
  }}>
    <style dangerouslySetInnerHTML={{ __html:KF }}/>

    <div style={{
      position:'absolute', inset:0, pointerEvents:'none',
      backgroundImage:`
        linear-gradient(rgba(220,38,38,.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(220,38,38,.04) 1px, transparent 1px)`,
      backgroundSize:'48px 48px',
    }}/>

    <div style={{
      position:'absolute', inset:0, pointerEvents:'none',
      background:'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,.82) 100%)',
    }}/>

    <div style={{
      position:'absolute', top:0, left:0, right:0, height:2,
      background:`linear-gradient(to right, transparent, ${R.red}, ${R.red}, transparent)`,
      opacity:.7, zIndex:7,
    }}/>

    <BloodDrips/>

    {[
      { s:{top:16,left:20},     t:statusCode },
      { s:{top:16,right:20},    t:'IMCBS LICENSING' },
      { s:{bottom:16,left:20},  t:'ACCESS RESTRICTED' },
      { s:{bottom:16,right:20}, t:'support@imcbs.com' },
    ].map(({ s, t }, i) => (
      <div key={i} style={{
        position:'absolute', ...s, zIndex:10,
        fontFamily:R.mono, fontSize:9,
        letterSpacing:'.18em', color:R.textDim, userSelect:'none',
      }}>{t}</div>
    ))}

    <div style={{
      position:'relative', zIndex:10,
      width:'100%', height:'100%',
      display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center',
      overflowY:'auto',
      animation:'fade-in .5s ease both',
    }}>
      <div style={{
        width:'100%', maxWidth:520,
        padding:'48px 32px 40px',
        display:'flex', flexDirection:'column',
        alignItems:'center', gap:20,
      }}>
        <StatusBadge label={`${statusCode} — LICENSE SYSTEM`} variant="error"/>
        <Sigil size={130}/>
        <div style={{ textAlign:'center' }}>
          <h1 style={{
            fontFamily:R.sans, fontWeight:700,
            fontSize:'clamp(1.5rem,4vw,2rem)',
            color:R.text, margin:'0 0 8px', letterSpacing:'-.01em',
          }}>{headline}</h1>
          <p style={{
            fontFamily:R.sans, fontSize:13,
            color:R.textMid, margin:0, lineHeight:1.7, maxWidth:380,
          }}>{message}</p>
        </div>
        {customer && <InfoTable customer={customer}/>}
        {showButton && (
          <button onClick={onRefresh} style={{
            fontFamily:R.sans, fontSize:12, fontWeight:600,
            letterSpacing:'.06em', color:'#fff',
            background:R.red, border:'none',
            padding:'10px 28px', cursor:'pointer', borderRadius:2,
            transition:'background .2s',
          }}
          onMouseEnter={e=>e.currentTarget.style.background='#b91c1c'}
          onMouseLeave={e=>e.currentTarget.style.background=R.red}
          >Retry Connection</button>
        )}
        <Provider/>
      </div>
    </div>
  </div>
);

/* ── Licensing ── */
const Licensing = ({ children }) => {
  const [licenseData, setLicenseData]             = useState(null);
  const [, setError]                               = useState(null);
  const [forceRefreshCount, setForceRefreshCount] = useState(0);

  // ✅ useCallback so the interval always calls the latest version
  const fetchLicenseData = useCallback(async () => {
    try {
      const res = await fetch(LICENSE_API_ENDPOINT, {
        method:'GET', mode:'cors',
        headers:{ Accept:'application/json', 'Content-Type':'application/json' },
      });
      if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
      // ✅ read as text first — prevents crash if response is HTML (e.g. error page)
      const text = await res.text();
      const data = JSON.parse(text);
      setLicenseData(data);
      setError(null);
    } catch (err) {
      // ✅ always falls back to DEFAULT on any failure — CORS, network, bad JSON, etc.
      setLicenseData(DEFAULT_LICENSE_DATA);
      setError(err.message);
    }
  }, []);

  const handleManualRefresh = () => {
    setForceRefreshCount(p => p + 1);
    fetchLicenseData();
  };

  useEffect(() => {
    fetchLicenseData();
    const id = setInterval(fetchLicenseData, POLL_INTERVAL);
    return () => clearInterval(id);
  }, [fetchLicenseData, forceRefreshCount]);

  // ✅ show nothing (blank) while first fetch is in flight, not children
  if (!licenseData) return null;

  const customer = licenseData?.customers?.find(c => c.client_id === CURRENT_CLIENT_ID);

  if (!customer) return (
    <BlockShell
      statusCode="ERR 403" headline="Access Denied"
      message={`This application is licensed for ${CUSTOMER_LABEL} only. Please contact support@imcbs.com.`}
      customer={null} onRefresh={handleManualRefresh} showButton={false}
    />
  );

  const isExpired = customer.license_validity?.is_expired === true;
  const isActive  = (customer.status||'').toLowerCase().trim() === 'active';

  if (isExpired || !isActive) return (
    <BlockShell
      statusCode={isExpired ? 'ERR 410' : 'ERR 423'}
      headline={isExpired ? 'License Expired' : 'License Inactive'}
      message={isExpired
        ? 'Your application license has expired. Please renew your subscription to continue.'
        : 'Your application license is currently inactive. Please contact your system administrator to activate it.'}
      customer={customer} onRefresh={handleManualRefresh} showButton={false}
    />
  );

  return children;
};

export default Licensing;