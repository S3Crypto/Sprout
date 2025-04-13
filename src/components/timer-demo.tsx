"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Play, Pause, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedPlant } from "@/components/animated-plant"

export function TimerDemo() {
  const [isRunning, setIsRunning] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [plantGrowth, setPlantGrowth] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    let interval: NodeJS.Timeout

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1)
        if (seconds % 5 === 0 && seconds > 0) {
          setPlantGrowth((prev) => Math.min(prev + 5, 100))
        }
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isRunning, seconds])

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60)
    const remainingSeconds = totalSeconds % 60
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  const handleReset = () => {
    setIsRunning(false)
    setSeconds(0)
    setPlantGrowth(0)
  }

  // Only render animations on the client
  if (!isMounted) {
    return (
      <div className="flex flex-col items-center rounded-lg border border-gray-800 bg-[#1A1E24] p-6">
        <div className="mb-4 font-mono text-4xl font-bold text-[#4FC3F7]">00:00</div>
        <div className="h-48 w-full"></div>
        <div className="mt-6 flex gap-4">
          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full border-[#4FC3F7] text-[#4FC3F7]">
            <Play className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full border-gray-600 text-gray-400">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-4 w-full">
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-800">
            <div className="h-full w-0 bg-[#2E7D32]"></div>
          </div>
          <div className="mt-2 text-center text-xs text-gray-400">Plant Growth: 0%</div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center rounded-lg border border-gray-800 bg-[#1A1E24] p-6">
      <div className="mb-4 font-mono text-4xl font-bold text-[#4FC3F7]">{formatTime(seconds)}</div>

      <div className="h-48 w-full">
        <AnimatedPlant />
      </div>

      <div className="mt-6 flex gap-4">
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full border-[#4FC3F7] text-[#4FC3F7]"
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full border-gray-600 text-gray-400"
          onClick={handleReset}
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-4 w-full">
        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-800">
          <motion.div
            className="h-full bg-[#2E7D32]"
            initial={{ width: "0%" }}
            animate={{ width: `${plantGrowth}%` }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </div>
        <div className="mt-2 text-center text-xs text-gray-400">Plant Growth: {plantGrowth}%</div>
      </div>
    </div>
  )
}
