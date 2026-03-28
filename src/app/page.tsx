import Header from '@/components/sections/Header'
import HeroSection from '@/components/sections/HeroSection'
import TrustIndicatorsSection from '@/components/sections/TrustIndicatorsSection'
import CyberServicesSection from '@/components/sections/CyberServicesSection'
import OTProblemsSection from '@/components/sections/OTProblemsSection'
import ComplianceSection from '@/components/sections/ComplianceSection'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import ROICalculatorSection from '@/components/sections/ROICalculatorSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-pa-black">
      <Header />
      <main>
        <HeroSection />
        <TrustIndicatorsSection />
        <OTProblemsSection />
        <CyberServicesSection />
        <CaseStudiesSection />
        <ComplianceSection />
        <ROICalculatorSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
