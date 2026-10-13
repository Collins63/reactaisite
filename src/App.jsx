import { Routes, Route } from 'react-router-dom'
import ComponentsPage from './pages/ComponentsPage'
import AboutPage from './pages/AboutPage'
import ButtonGradient from './assets/svg/ButtonGradient'
import AuroraHero from './components/AuroraHero'
import BackgroundBeamsDemo from './components/BackgroundBeams'
import Benefits from './components/Benefits'
import { Button } from './components/Button'
import { Certificates } from './components/Certificates'
import Collaboration from './components/Collaboration'
import { FloatingDockBottom } from './components/design/FloatingDock'
import { ExpandableCard } from './components/ExpandableCard'
import { Experience } from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Roadmap from './components/Roadmap'
import Services from './components/Services'
import { AnimatedTestimonialsDemo } from './components/Testimonials'


const Home = () => {
  return (
    <>
      <div className='overflow-hidden'>
      {/* <Header /> */}
      <FloatingDockBottom />
      {/* <AuroraHero /> */}
      <BackgroundBeamsDemo />
      <Collaboration />
      <Experience />
      <Certificates />
      <Pricing />
      <Roadmap />
      {/* <AnimatedTestimonialsDemo /> */}
      <Footer />  
      </div>
      <ButtonGradient/>
   </>
  )
}

const App = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/components' element={<ComponentsPage />} />
    <Route path='/about' element={<AboutPage />} />
  </Routes>
)

export default App
 