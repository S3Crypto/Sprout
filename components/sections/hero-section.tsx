import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TimerDemo } from "@/components/timer-demo"
import { TerminalAnimation } from "@/components/terminal-animation"

export function HeroSection() {
    return (
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
    )
}