"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { statsData } from "@/data/mock-data"

export function Stats() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                {stat.number}+
              </motion.div>
              <div className="text-blue-100 text-sm md:text-base">
                {t(stat.label.toLowerCase().replace(/\s+/g, ""))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
