import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
    return (
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
            <Button className="hidden bg-[#4FC3F7] text-white hover:bg-[#4FC3F7]/90 md:inline-flex">
                Join Waitlist
            </Button>
        </header>
    )
}