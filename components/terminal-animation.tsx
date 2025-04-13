"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function TerminalAnimation() {
  const [text, setText] = useState("")
  const [isMounted, setIsMounted] = useState(false)
  const fullText = "> flow --start\n> Growing plant...\n> Focus session active\n> Stay in the zone"

  useEffect(() => {
    setIsMounted(true)

    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.substring(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Server-side rendering or initial client render
  if (!isMounted) {
    return (
      <div className="rounded-md bg-[#1A1E24] p-4 font-mono text-sm text-green-400">
        <pre className="whitespace-pre-wrap"></pre>
      </div>
    )
  }

  // Client-side render after component has mounted
  return (
    <div className="rounded-md bg-[#1A1E24] p-4 font-mono text-sm text-green-400">
      <pre className="whitespace-pre-wrap">{text}</pre>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
        className="inline-block h-4 w-2 bg-green-400"
      ></motion.span>
    </div>
  )
}