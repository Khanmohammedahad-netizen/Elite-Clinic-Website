import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import About from '@/components/About'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import Doctors from '@/components/Doctors'
import Testimonials from '@/components/Testimonials'
import Appointment from '@/components/Appointment'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Stats />
      <Doctors />
      <Testimonials />
      <Appointment />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
