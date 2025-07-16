"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { stats } from "@/data/mock-data"
import { useEffect, useState } from "react"

function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}</span>
}

export default function Stats() {
  const { language } = useLanguage()

  return (
    <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                <AnimatedCounter end={stat.number} />
                {stat.number >= 100 && "+"}
              </div>
              <p className="text-slate-300 font-medium">{stat.label[language]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
