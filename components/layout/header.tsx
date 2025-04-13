"use client"

import { Home, Book, Leaf, Info } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { Button } from "@/components/ui/button"

export function Header() {
    const navItems = [
        { name: 'Concept', url: '#concept', icon: Info },
        { name: 'How It Works', url: '#how-it-works', icon: Book },
        { name: 'Why Sprout', url: '#why-sprout', icon: Leaf }
    ]

    return (
        <>
            <header className="relative h-20">
                <div className="container mx-auto flex max-w-7xl items-center justify-between h-full px-4">
                    {/* Logo on the left */}
                    <div className="flex items-center gap-2 z-10">
                        <span className="text-2xl font-bold text-[#2E7D32]">🌱</span>
                        <span className="font-mono text-xl font-bold">Sprout</span>
                    </div>

                    {/* CTA Button on the right */}
                    <div className="z-10">
                        <Button className="hidden bg-[#4FC3F7] text-white hover:bg-[#4FC3F7]/90 md:inline-flex">
                            Join Waitlist
                        </Button>
                    </div>
                </div>
            </header>

            {/* Separate NavBar component that will be fixed */}
            <NavBar items={navItems} />
        </>
    )
}