import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/sections/hero-section"
import { HowItWorks } from "@/components/sections/how-it-works"
import { WhySprout } from "@/components/sections/why-sprout"
import { SignupCTA } from "@/components/sections/signup-cta"
import { SproutTestimonials } from "@/components/sprout-testimonials"

export default function EnhancedPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0D1117] text-white">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <HowItWorks />
        <SproutTestimonials />
        <WhySprout />
        <SignupCTA />
      </main>
    </div>
  )
}