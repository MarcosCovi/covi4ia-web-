import Navbar               from '@/components/Navbar'
import SectionNavPanel      from '@/components/SectionNavPanel'
import Hero                 from '@/components/Hero'
import Stats                from '@/components/Stats'
import Services             from '@/components/Services'
import Process              from '@/components/Process'
import WhyCovi              from '@/components/WhyCovi'
import CasosDeUso           from '@/components/CasosDeUso'
import Audience             from '@/components/Audience'
import Team                 from '@/components/Team'
import CovicoinAlphaPromo   from '@/components/CovicoinAlphaPromo'
import FAQ                  from '@/components/FAQ'
import CTASection           from '@/components/CTASection'
import Footer               from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <SectionNavPanel />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Process />
        <WhyCovi />
        <CasosDeUso />
        <Audience />
        <Team />
        <CovicoinAlphaPromo />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
