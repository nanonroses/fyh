import Header from '@/components/sections/Header'
import HeroSection from '@/components/sections/HeroSection'
import TrustIndicatorsSection from '@/components/sections/TrustIndicatorsSection'
import ROICalculatorSection from '@/components/sections/ROICalculatorSection'
import CyberServicesSection from '@/components/sections/CyberServicesSection'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import ComplianceSection from '@/components/sections/ComplianceSection'
import AboutSection from '@/components/sections/AboutSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export default function Home() {
  return (
    <div className="min-h-screen bg-light-ghost">
      <Header />
      <main>
        <HeroSection />
        <TrustIndicatorsSection />
        <ROICalculatorSection />
        <CyberServicesSection />
        <CaseStudiesSection />
        <ComplianceSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
