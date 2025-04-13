"use client"

import Link from "next/link"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Header() {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    })

    return (
        <header className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
            <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-[#2E7D32]">🌱</span>
                <span className="font-mono text-xl font-bold">Sprout</span>
            </div>

            <nav className="hidden md:block">
                <ul
                    className="relative flex w-fit rounded-full border border-gray-700 bg-[#1A1E24] p-1"
                    onMouseLeave={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}
                >
                    <NavItem href="#how-it-works" setPosition={setPosition}>How It Works</NavItem>
                    <NavItem href="#why-sprout" setPosition={setPosition}>Why Sprout</NavItem>
                    <NavItem href="#concept" setPosition={setPosition}>Concept</NavItem>

                    <Cursor position={position} />
                </ul>
            </nav>

            <Button className="hidden bg-[#4FC3F7] text-white hover:bg-[#4FC3F7]/90 md:inline-flex">
                Join Waitlist
            </Button>
        </header>
    )
}

const NavItem = ({
    children,
    setPosition,
    href,
}: {
    children: React.ReactNode
    setPosition: React.Dispatch<React.SetStateAction<{
        left: number
        width: number
        opacity: number
    }>>
    href: string
}) => {
    const ref = useRef<HTMLLIElement>(null)

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref.current) return

                const { width } = ref.current.getBoundingClientRect()
                setPosition({
                    width,
                    opacity: 1,
                    left: ref.current.offsetLeft,
                })
            }}
            className="relative z-10 block cursor-pointer px-4 py-2 text-sm text-white mix-blend-difference"
        >
            <Link href={href}>{children}</Link>
        </li>
    )
}

const Cursor = ({ position }: { position: { left: number; width: number; opacity: number } }) => {
    return (
        <motion.li
            animate={position}
            className="absolute z-0 h-8 rounded-full bg-[#4FC3F7]"
        />
    )
}