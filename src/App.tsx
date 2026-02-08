import { Navigation } from './components/Navigation'
import { AnimatedBackground } from './components/AnimatedBackground'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { PhotoGallery } from './components/PhotoGallery'
import { HowItWorks } from './components/HowItWorks'
import { CoachingPrograms } from './components/CoachingPrograms'
import { Testimonials } from './components/Testimonials'
import { WhyChooseMe } from './components/WhyChooseMe'
import { LeadMagnet } from './components/LeadMagnet'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen text-slate relative">
      <AnimatedBackground />
      <Navigation />
      <main>
        <Hero />
        <About />
        <PhotoGallery />
        <HowItWorks />
        <CoachingPrograms />
        <Testimonials />
        <WhyChooseMe />
        <LeadMagnet />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
