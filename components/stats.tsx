"use client"

import { useEffect, useState } from "react"

export function Stats() {
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    satisfaction: 0,
  })

  const finalCounts = {
    projects: 50,
    clients: 30,
    years: 5,
    satisfaction: 100,
  }

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounts({
        projects: Math.floor(finalCounts.projects * progress),
        clients: Math.floor(finalCounts.clients * progress),
        years: Math.floor(finalCounts.years * progress),
        satisfaction: Math.floor(finalCounts.satisfaction * progress),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounts(finalCounts)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [])

  const stats = [
    {
      number: counts.projects,
      suffix: "+",
      label: "Projects Completed",
    },
    {
      number: counts.clients,
      suffix: "+",
      label: "Happy Clients",
    },
    {
      number: counts.years,
      suffix: "+",
      label: "Years Experience",
    },
    {
      number: counts.satisfaction,
      suffix: "%",
      label: "Client Satisfaction",
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.number}
                {stat.suffix}
              </div>
              <div className="text-blue-100 text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
