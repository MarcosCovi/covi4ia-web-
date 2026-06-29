import Navbar      from '@/components/Navbar'
import Hero        from '@/components/Hero'
import Stats       from '@/components/Stats'
import Services    from '@/components/Services'
import Process     from '@/components/Process'
import WhyCovi     from '@/components/WhyCovi'
import CasosDeUso  from '@/components/CasosDeUso'
import Audience    from '@/components/Audience'
import Team        from '@/components/Team'
import FAQ         from '@/components/FAQ'
import CTASection  from '@/components/CTASection'
import Footer      from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Process />
        <WhyCovi />
        <CasosDeUso />
        <Audience />
        <Team />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
