import ButtonGradient from './assets/svg/ButtonGradient'
import AuroraHero from './components/AuroraHero'
import BackgroundBeamsDemo from './components/BackgroundBeams'
import Benefits from './components/Benefits'
import { Button } from './components/Button'
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


const App = () => {
  return (
    <>
      <div className='overflow-hidden'>
      {/* <Header /> */}
      <FloatingDockBottom />
      {/* <AuroraHero /> */}
      <BackgroundBeamsDemo />
      <Collaboration />
      <Experience />
      <Pricing />
      <Roadmap />
      <AnimatedTestimonialsDemo />
      <Footer />  
      </div>
      <ButtonGradient/>
   </>
  )
}

export default App
 