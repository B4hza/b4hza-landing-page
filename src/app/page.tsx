'use client'

import HeroSection from "@/components/hero-section"
import HowItWorks from "@/components/HowItWorks"
import TestimonialsPage from "@/components/testimonials"
import FaqSection from "@/components/faq"
import SupportSection from "@/components/SupportSection"
import { AudienceSection } from "@/components/AudienceSection"
import { DemandSection } from "@/components/DemandSection"
import { ExpansionSection } from "@/components/ExpansionSection"
import TeamSection from "@/components/TeamSection"

const Home = function () {
  return (
    <main>
      <HeroSection />
      <AudienceSection />
      <HowItWorks />
      <ExpansionSection />
      <DemandSection />
      <TestimonialsPage />
      <FaqSection />
      <SupportSection />
    </main>
  )
}  

export default Home