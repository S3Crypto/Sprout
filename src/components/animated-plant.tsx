"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function AnimatedPlant() {
  const [growth, setGrowth] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const interval = setInterval(() => {
      setGrowth((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Only render animations on the client
  if (!isMounted) {
    return (
      <div className="relative h-64 w-full">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <div className="relative">
            {/* Pot */}
            <div className="h-12 w-16 rounded-b-lg rounded-t-sm bg-[#263238]"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-64 w-full">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <div className="relative">
          {/* Pot */}
          <div className="h-12 w-16 rounded-b-lg rounded-t-sm bg-[#263238]"></div>

          {/* Stem */}
          <motion.div
            className="absolute bottom-10 left-1/2 w-1 -translate-x-1/2 bg-[#2E7D32]"
            initial={{ height: 0 }}
            animate={{ height: growth * 0.5 }}
            transition={{ duration: 0.5 }}
          ></motion.div>

          {/* Leaves */}
          {growth > 20 && (
            <motion.div
              className="absolute bottom-20 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-4 w-4 rotate-45 rounded-tl-full bg-[#2E7D32]"></div>
            </motion.div>
          )}

          {growth > 40 && (
            <motion.div
              className="absolute bottom-30 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-4 w-4 -rotate-45 rounded-tr-full bg-[#2E7D32]"></div>
            </motion.div>
          )}

          {growth > 60 && (
            <motion.div
              className="absolute bottom-40 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-5 w-5 rotate-45 rounded-tl-full bg-[#2E7D32]"></div>
            </motion.div>
          )}

          {growth > 80 && (
            <motion.div
              className="absolute bottom-50 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-6 w-6 -rotate-45 rounded-tr-full bg-[#2E7D32]"></div>
            </motion.div>
          )}

          {growth === 100 && (
            <motion.div
              className="absolute bottom-60 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-2xl">🌸</div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
