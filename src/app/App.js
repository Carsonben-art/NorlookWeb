import React from 'react'
import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import Vision from '../components/Vision.jsx'
import PurposeSection from '../components/PurposeSection.jsx'
import Mission from '../components/Mission.jsx'
import Services from '../components/Services.jsx'
import About from '../components/About.jsx'
import ConstructionProgress from '../components/ConstructionProgress.jsx'
import EquipmentNeeds from '../components/EquipmentNeeds.jsx'
import Doctors from '../components/Doctors.jsx'
import AcknowledgementSection from '../components/Acknowledgments.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Vision />
      <PurposeSection />
      <Mission />
      <Services />
      <About />
      <ConstructionProgress />
      <EquipmentNeeds />
      <Doctors />
      <AcknowledgementSection />
      <Contact />
      <Footer />
      
    </div>
  )
}

export default App
