"use client"

import { motion } from "framer-motion"
import { statsData } from "@/data/mock-data"
import { useLanguage } from "@/contexts/language-context"

export default function Stats() {
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-cyan-400"
          >
            {t("statsTitle")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[900px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            {t("statsDescription")}
          </motion.p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4"
        >
          {statsData.map((stat) => (
            <motion.div key={stat.id} variants={itemVariants} className="flex flex-col items-center space-y-2">
              <div className="text-5xl font-bold text-cyan-400">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-slate-200">{t(stat.label)}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
