import React,{useEffect} from 'react'
import Navbar from './Navbar'
import about from "../assets/about.png"
import { TiTick } from "react-icons/ti";
import team1 from "../assets/team1.jpg"
import team2 from "../assets/team2.jpg"
import team3 from "../assets/team3.jpg"
import team4 from "../assets/team4.jpg"
import team5 from "../assets/team5.jpg"
import team6 from "../assets/team6.jpg"
import Footer from './Footer';
import waveline from "../assets/waveline.jpg"
import bg3 from "../assets/bg3.png"
import Line from "../assets/orange-lines.png"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import banner2 from "../assets/about2.jpg"
import blue from "../assets/blue1.png"
import bottompng from "../assets/bottompng.png"
import whatsapp from "../assets/whatsapp.png"



const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true });
  const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: true });
  const { ref: ref7, inView: inView7 } = useInView({ triggerOnce: true });
  const { ref: ref8, inView: inView8 } = useInView({ triggerOnce: true });
  const { ref: ref9, inView: inView9 } = useInView({ triggerOnce: true });
  const { ref: ref10, inView: inView10 } = useInView({ triggerOnce: true });
  const { ref: ref11, inView: inView11 } = useInView({ triggerOnce: true });
  const { ref: ref12, inView: inView12 } = useInView({ triggerOnce: true });
  const { ref: ref13, inView: inView13 } = useInView({ triggerOnce: true });
  const { ref: ref14, inView: inView14 } = useInView({ triggerOnce: true });
  const { ref: ref15, inView: inView15 } = useInView({ triggerOnce: true });
  const { ref: ref16, inView: inView16 } = useInView({ triggerOnce: true });
  const { ref: ref17, inView: inView17 } = useInView({ triggerOnce: true });
  const { ref: ref18, inView: inView18 } = useInView({ triggerOnce: true });
  const { ref: ref19, inView: inView19 } = useInView({ triggerOnce: true });
  const { ref: ref20, inView: inView20 } = useInView({ triggerOnce: true });
  const { ref: ref21, inView: inView21 } = useInView({ triggerOnce: true });
  const { ref: ref22, inView: inView22 } = useInView({ triggerOnce: true });
  const { ref: ref23, inView: inView23 } = useInView({ triggerOnce: true });
  const { ref: ref24, inView: inView24 } = useInView({ triggerOnce: true });
  return (
    <div className='mt-20 lg:mt-28'>
      <div className=' fixed h-full right-0 z-40 flex justify-end items-center'>
        <div className=' mr-10 mt-[400px]'>
            <a href=""><img src={whatsapp} className='w-auto h-[60px] lg:h-[70px] cursor-pointer' alt="" /></a>
        </div>
      </div>
      {/* Line */}
      <div className=' absolute -z-20 md:hidden'>
        <img src={Line} className=' mix-blend-multiply opacity-15' alt="" />
      </div>
      {/* Wave Line */}
      <div className='-z-10 absolute hidden'>
        <img className=' mix-blend-multiply opacity-30' src={bg3} alt="" />
      </div>
      {/* Bg */}
      <div className=' -z-30 blur-[20px] absolute w-full h-[950px] md:h-[700px] lg:h-[600px] hidden bg-[#606a1561]'>

      </div>
      <div className='relative mt-20 w-full h-[500px] lg:h-[650px] flex justify-center items-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${banner2})`, backgroundPosition: 'top' }}>
        <div className='w-full h-full'>
          <img src={blue} className=' w-full h-full' alt="" />
        </div>
        <div className='absolute z-10 text-[52px] font-bold text-[#ffa200] text-center md:top-32'>
          About Us
          <span className='block text-sm text-center text-[#ffffff] md:px-20 lg:text-[16px] lg:px-56 lg:max-w-[1200px] lg:mx-auto'>
          Absy IT Solutions delivers innovative software and hardware solutions tailored to modern business needs. Our expert team leverages cutting-edge technology to enhance efficiency and drive growth. We prioritize customer satisfaction and long-term partnerships, ensuring exceptional value and support.
          </span>
        </div>
        <div className=' absolute z-10 bottom-0'>
          <img src={bottompng} alt="" />
        </div>
      </div>

      {/* Sub About */}
      <section className='section md:px-10 mt-10 lg:mt-0'>
        <div className='mb-10 lg:flex lg:justify-center max-w-[1200px] lg:mx-auto lg:items-center'>
          <div>
            <motion.div 
              ref={ref17}
              initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
              animate={inView17 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
              transition={{ duration: 2, ease: "easeInOut" }}
              className=' text-center text-xl leading-normal lg:text-[42px] font-bold mb-5 text-[#291770]'>Redefining Possibilities <span className='block'>with Precision Technology</span></motion.div>
            <motion.div 
            ref={ref18}
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
            animate={inView18 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
            transition={{ duration: 2, ease: "easeInOut" }}
            className=' text-center text-[#6b6b6b] mb-10 lg:px-56'>Absy IT Solutions is a dynamic team of industry experts committed to providing innovative software and hardware solutions. We harness the power of advanced technologies to meet the evolving demands of today’s businesses, delivering end-to-end solutions that enhance productivity and foster growth across diverse sectors.
            </motion.div>

            {/* Sub - About Contents */}
            <motion.div
            ref={ref19}
            initial={{ opacity: 0, scale:0 }} 
            animate={inView19 ? { opacity: 1, scale:1 } : {}} 
            transition={{ duration: 1, ease: "backInOut" }}
            className=' grid place-items-center grid-cols-1 gap-5 mb-10 md:flex md:justify-center md:items-center md:gap-10 lg:gap-20'>

              <div className=' flex justify-center items-center gap-2'>
                <div className='text-[42px] font-bold outlineText lg:text-[60px]'>15+</div>
                <div className='font-bold text-[#291770] lg:text-lg'>Years of <span className='block '>Experience</span></div>
              </div>

              <div className='flex justify-center items-center gap-2'>
                <div className='outlineText text-[42px] font-bold lg:text-[60px]'>20+</div>
                <div className='font-bold text-[#291770] lg:text-lg'>Skilled <span className='block'>Professionals</span></div>
              </div>

              <div className='flex justify-center items-center gap-2'>
                <div className='outlineText text-[42px] font-bold lg:text-[60px]'>300+</div>
                <div className='font-bold text-[#291770] lg:text-lg'>Projects <span className='block'>World Wide</span></div>
              </div>

              <div className='flex justify-center items-center gap-2'>
                <div className='outlineText text-[42px] font-extrabold lg:text-[60px]'>2000+</div>
                <div className='font-bold text-[#291770] lg:text-lg'>Satisfied <span className='block'>Clients</span></div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      <section className='section md:px-10 lg:mt-0'>
          <div className=' mb-10 lg:flex lg:justify-center max-w-[1200px] lg:mx-auto lg:items-center'>
            <div className=' lg:w-[60%]'>
              <div>
                <motion.img
                ref={ref1}
                initial={{opacity:0,scale:0,x:-50}}
                animate={inView1 ? {opacity:1,scale:1,x:0} : {}}
                transition={{duration:1,delay:1,ease:'backInOut'}}
                src={about} className=' drop-shadow-lg' alt="" />
              </div>
            </div>
            <div className=' lg:w-[40%]'>
              <motion.div
              ref={ref2}
              initial={{opacity:0}}
              animate={inView2 ? {opacity:1} : {}}
              transition={{duration:1,delay:1}}
              className=' text-[#e87817] mb-7 lg:text-[18px] font-bold'>- About Absy IT Solutions -</motion.div>
              <motion.div
              ref={ref3}
              initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
              animate={inView3 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
              transition={{ duration: 2, ease: "easeInOut" }}
              className=' text-xl md:leading-[42px] lg:text-[42px] font-bold mb-5 text-[#291770]'>We are Focused on <span className=' block'>Exceptional Service and Innovation</span></motion.div>
              <motion.div
              ref={ref4}
              initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
              animate={inView4 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
              transition={{ duration: 2.2, ease: "easeInOut" }}
              className='mb-7 text-[#6b6b6b]'>Absy IT Solutions is a team of forward-thinking professionals dedicated to delivering cutting-edge software 
              and hardware solutions. We leverage the latest technologies to address every aspect of modern business needs, 
              offering comprehensive solutions that drive innovation and efficiency across various industries.
              </motion.div>
              <div className=' flex flex-col gap-4 mb-7'>
                <div className=' flex items-center gap-3'>
                  <div className=' text-[#e87817]'><TiTick/></div>
                  <motion.div
                  ref={ref5}
                  initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
                  animate={inView5 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
                  transition={{ duration: 2.4, ease: "easeInOut" }}
                  className=' font-semibold'>Expert Technical Architects</motion.div>
                </div>
                <motion.div
                ref={ref6}
                initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
                animate={inView6 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className=' flex items-center gap-3'>
                  <div className=' text-[#e87817]'><TiTick/></div>
                  <div className=' font-semibold'>Scalable Software Solutions</div>
                </motion.div>
                <motion.div
                ref={ref7}
                initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
                animate={inView7 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
                transition={{ duration: 2.6, ease: "easeInOut" }}
                className=' flex items-center gap-3'>
                  <div className=' text-[#e87817]'><TiTick/></div>
                  <div className=' font-semibold'>Advanced Mobility Solutions</div>
                </motion.div>
              </div>
              <motion.div
              ref={ref8}
              initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
              animate={inView8 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' }: {}} 
              transition={{ duration: 2.8, ease: "easeInOut" }}
              className='text-[#6b6b6b]'>
              At Absy IT Solutions, we specialize in providing advanced software and hardware solutions designed 
              to optimize business operations. Our offerings include versatile business software for financial management, 
              hospital administration, pharmacy operations, restaurant and hotel management, educational systems, and more. 
              We combine innovative technology with tailored features to enhance efficiency, streamline processes, 
              and support the diverse needs of modern enterprises.
              </motion.div>
            </div>
          </div>
          <div className='-z-10 absolute right-10'>
        <img className=' mix-blend-multiply opacity-30' src={bg3} alt="" />
      </div>
      </section>

      <section className='section md:px-10 lg:mt-10'>
        <div>
            <motion.div
            ref={ref9}
            initial={{opacity:0}}
            animate={inView9 ? {opacity:1} : {}}
            transition={{duration:1,delay:1}}
            className=' text-xl font-bold mb-5 md:text-center text-center text-[#291770] lg:text-[42px]'>Meet Our Team</motion.div>
            <motion.div
            ref={ref10}
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
            animate={inView10 ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
            transition={{ duration: 2, ease: "easeInOut" }}
            className='mb-7 md:text-center md:px-10 lg:px-20 2lg:px-40 text-center text-[#6b6b6b]'>our team is made up of passionate and experienced professionals committed to excellence. 
            We bring together a blend of skills and expertise to ensure top-quality solutions and exceptional results for our clients.</motion.div>
            {/* Team Members */}
            <div className=' grid grid-cols-1 place-items-center gap-10 md:grid-cols-2 max-w-[1200px] 2lg:grid-cols-3 lg:mx-auto'>
              <motion.div
              ref={ref11}
              initial={{y:-100, opacity:0}}
              animate={inView11 ? {y:0, opacity:1} : {}}
              transition={{duration:1,delay:1, ease:'backInOut'}}
              className='ScaleUpImg w-full h-[400px] lg:h-[450px] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                  <div className='w-full h-[330px] lg:h-[380px] rounded-xl'><img className='w-full h-full object-cover rounded-xl' src={team1} alt="" /></div>
                  <div className=' text-center py-2'>
                    <div className=' font-semibold text-xl'>Full Name</div>
                    <div>Designation</div>
                  </div>
              </motion.div>
              <motion.div
              ref={ref12}
              initial={{y:-100, opacity:0}}
              animate={inView12 ? {y:0, opacity:1} : {}}
              transition={{duration:1,delay:1, ease:'backInOut'}}
              className='ScaleUpImg w-full h-[400px] lg:h-[450px] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                  <div className='w-full h-[330px] lg:h-[380px] rounded-xl'><img className='w-full h-full object-cover rounded-xl' src={team2} alt="" /></div>
                  <div className=' text-center py-2'>
                    <div className=' font-semibold text-xl'>Full Name</div>
                    <div>Designation</div>
                  </div>
              </motion.div>
              <motion.div
              ref={ref13}
              initial={{y:-100, opacity:0}}
              animate={inView13 ? {y:0, opacity:1} : {}}
              transition={{duration:1,delay:1, ease:'backInOut'}}
              className='ScaleUpImg w-full h-[400px] lg:h-[450px]  rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                  <div className='w-full h-[330px] lg:h-[380px] rounded-xl'><img className='w-full h-full object-cover rounded-xl' src={team3} alt="" /></div>
                  <div className=' text-center py-2'>
                    <div className=' font-semibold text-xl'>Full Name</div>
                    <div>Designation</div>
                  </div>
              </motion.div>
              <motion.div
              ref={ref14}
              initial={{y:-100, opacity:0}}
              animate={inView14 ? {y:0, opacity:1} : {}}
              transition={{duration:1,delay:1, ease:'backInOut'}}
              className='ScaleUpImg w-full h-[400px] lg:h-[450px] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                  <div className='w-full h-[330px] lg:h-[380px] rounded-xl'><img className='w-full h-full object-cover rounded-xl' src={team4} alt="" /></div>
                  <div className=' text-center py-2'>
                    <div className=' font-semibold text-xl'>Full Name</div>
                    <div>Designation</div>
                  </div>
              </motion.div>
              <motion.div
              ref={ref15}
              initial={{y:-100, opacity:0}}
              animate={inView15 ? {y:0, opacity:1} : {}}
              transition={{duration:1,delay:1, ease:'backInOut'}}
              className='ScaleUpImg w-full h-[400px] lg:h-[450px] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                  <div className='w-full h-[330px] lg:h-[380px] rounded-xl'><img className='w-full h-full object-cover rounded-xl' src={team5} alt="" /></div>
                  <div className=' text-center py-2'>
                    <div className=' font-semibold text-xl'>Full Name</div>
                    <div>Designation</div>
                  </div>
              </motion.div>
              <motion.div
              ref={ref16}
              initial={{y:-100, opacity:0}}
              animate={inView16 ? {y:0, opacity:1} : {}}
              transition={{duration:1,delay:1, ease:'backInOut'}}
              className='ScaleUpImg w-full h-[400px] lg:h-[450px] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                  <div className='w-full h-[330px] lg:h-[380px] rounded-xl'><img className='w-full h-full object-cover rounded-xl' src={team6} alt="" /></div>
                  <div className=' text-center py-2'>
                    <div className=' font-semibold text-xl'>Full Name</div>
                    <div>Designation</div>
                  </div>
              </motion.div>
            </div>
        </div>
      </section>

      <section className=' mt-10'>
        <Footer/>
      </section>
    </div>
  )
}

export default About
