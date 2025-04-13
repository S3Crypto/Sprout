import Link from "next/link"
import { ArrowRight, Github, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TimerDemo } from "@/components/timer-demo"
import { TerminalAnimation } from "@/components/terminal-animation"

export default function EnhancedPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0D1117] text-white">
      {/* Header */}
      <header className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#2E7D32]">🌱</span>
          <span className="font-mono text-xl font-bold">Sprout</span>
        </div>
        <nav className="hidden space-x-6 md:flex">
          <Link href="#how-it-works" className="text-sm hover:text-[#4FC3F7]">
            How It Works
          </Link>
          <Link href="#why-sprout" className="text-sm hover:text-[#4FC3F7]">
            Why Sprout
          </Link>
          <Link href="#concept" className="text-sm hover:text-[#4FC3F7]">
            Concept
          </Link>
        </nav>
        <Button className="hidden bg-[#4FC3F7] text-white hover:bg-[#4FC3F7]/90 md:inline-flex">Join Waitlist</Button>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-16 md:py-32">
          <div className="text-center">
            <h1 className="font-mono text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Grow your <span className="text-[#4FC3F7]">Flow.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
              A mindful productivity companion for developers that grows as you focus.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button className="group w-full bg-[#4FC3F7] text-white hover:bg-[#4FC3F7]/90 sm:w-auto">
                <span>Join the Waitlist</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="w-full border-[#FFF176] text-[#FFF176] hover:bg-[#FFF176]/10 sm:w-auto"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg border border-gray-800 bg-[#1A1E24] p-6">
              <h3 className="mb-4 font-mono text-lg font-medium text-[#4FC3F7]">Flow Timer</h3>
              <TimerDemo />
            </div>
            <div className="overflow-hidden rounded-lg border border-gray-800 bg-[#1A1E24] p-6">
              <h3 className="mb-4 font-mono text-lg font-medium text-[#FFF176]">Terminal Experience</h3>
              <TerminalAnimation />
              <div className="mt-6">
                <p className="text-sm text-gray-400">
                  Sprout integrates seamlessly with your development workflow, providing gentle reminders without
                  breaking your concentration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-[#263238] py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-center font-sans text-3xl font-medium md:text-4xl">How Sprout Works</h2>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "🌱",
                  title: "Set your goal",
                  description: "Define what you want to accomplish during your focus session.",
                },
                {
                  icon: "⏱️",
                  title: "Start your flow timer",
                  description: "Begin your focused work session with our mindful timer.",
                },
                {
                  icon: "💧",
                  title: "Hydrate, stretch, breathe",
                  description: "Take mindful breaks to maintain your energy and focus.",
                },
                {
                  icon: "🌸",
                  title: "Grow your plant",
                  description: "Watch your digital plant grow as you maintain consistent focus.",
                },
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0D1117] text-3xl">
                    {step.icon}
                  </div>
                  <h3 className="mt-4 font-sans text-xl font-medium">{step.title}</h3>
                  <p className="mt-2 text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Sprout Section */}
        <section id="why-sprout" className="bg-white py-16 text-[#263238] md:py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h2 className="font-sans text-3xl font-medium md:text-4xl">Why Sprout</h2>
                <div className="mt-8 space-y-6">
                  {[
                    {
                      icon: "🎯",
                      title: "Focus-first, not feature-bloated",
                      description: "Clean, minimal interface designed to keep you in flow, not distract you.",
                    },
                    {
                      icon: "📊",
                      title: "Minimal tracking, max clarity",
                      description: "We track just enough to help you improve, without overwhelming you with metrics.",
                    },
                    {
                      icon: "🌿",
                      title: "Grows with you as you build habits",
                      description: "Your digital plant evolves as you develop consistent focus habits.",
                    },
                    {
                      icon: "💻",
                      title: "Built for devs",
                      description: "VS Code + Local App coming soon for seamless integration into your workflow.",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#FFF176] text-xl">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-sans text-lg font-medium">{feature.title}</h3>
                        <p className="mt-1 text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl">🌱</div>
                      <p className="mt-4 font-mono text-sm text-gray-400">Illustration placeholder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Signup CTA Section */}
        <section className="bg-[#2E7D32] py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-sans text-3xl font-medium text-white md:text-4xl">Be the first to try Sprout</h2>
              <p className="mt-4 text-lg text-white/80">Help shape the future of mindful coding.</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <div className="w-full max-w-md">
                  <div className="flex w-full max-w-md items-center space-x-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="border-white/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:ring-white/30"
                    />
                    <Button className="bg-[#FFF176] text-[#263238] hover:bg-[#FFF176]/90">Join Waitlist</Button>
                  </div>
                  <p className="mt-2 text-sm text-white/60">No spam. Just growth.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-[#0D1117] py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-[#2E7D32]">🌱</span>
                <span className="font-mono text-xl font-bold">Sprout</span>
              </div>
              <div className="mt-4 flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Contact</span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end">
              <p className="text-sm text-gray-400">Built with 💚 for mindful devs.</p>
              <div className="mt-2 space-x-4">
                <Link href="#" className="text-xs text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-xs text-gray-400 hover:text-white">
                  Open Source
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
