import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SignupCTA() {
    return (
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
    )
}