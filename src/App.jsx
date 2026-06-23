import About from "./components/About"
import Clients from "./components/Clients"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Services from "./components/Services"
import Softwares from "./components/Softwares"
import Navbar from "./components/Navbar"
import Licensing from "./components/licensing"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {

  return (
    <Licensing>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/softwares" element={<Softwares/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/clients" element={<Clients/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </Licensing>
  )
}

export default App