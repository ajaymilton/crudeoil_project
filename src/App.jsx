import About from "./components/About"
import Clients from "./components/Clients"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Landing from "./components/Landing"
import MissionVision from "./components/MissionVision"
import Navbar from "./components/Navbar"
import OurTeam from "./components/OurTeam"

function App() {
 
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <MissionVision />
      <OurTeam />
      <Clients />
      <Contact />
      <Footer />
    </>
  )
}

export default App
