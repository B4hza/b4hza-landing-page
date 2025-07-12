'use client'

import HeroSection from "@/components/hero-section"
import HowItWorks from "@/components/HowItWorks"
import TestimonialsPage from "@/components/testimonials"
import FaqSection from "@/components/faq"
import SupportSection from "@/components/SupportSection"
import Footer from "@/components/Footer"
import TeamSection from "@/components/TeamSection"

const Home = function () {
  return (
    <main>
      <HeroSection />
      <HowItWorks />
      <TestimonialsPage />
      <FaqSection />
      <TeamSection />
      <SupportSection />
    </main>
  )
}  

export default Home