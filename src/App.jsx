import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Nosotros from './components/Nosotros'
import PorQueElegirnos from './components/PorQueElegirnos'
import Portafolio from './components/Portafolio'
import Testimonios from './components/Testimonios'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gray-950">
      <Navbar />
      <Hero />
      <Servicios />
      <Nosotros />
      <PorQueElegirnos />
      <Portafolio />
      <Testimonios />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App