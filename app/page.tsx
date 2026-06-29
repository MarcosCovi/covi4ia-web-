import Navbar      from '@/components/Navbar'
import Hero        from '@/components/Hero'
import Services    from '@/components/Services'
import WhyCovi     from '@/components/WhyCovi'
import Audience    from '@/components/Audience'
import CTASection  from '@/components/CTASection'
import Footer      from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyCovi />
        <Audience />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
