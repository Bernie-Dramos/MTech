"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { Target, Eye } from "lucide-react"

export default function About() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Target,
      title: t("ourMission"),
      description: t("missionText"),
    },
    {
      icon: Eye,
      title: t("ourVision"),
      description: t("visionText"),
    },
  ]

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("aboutTitle")}</h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">{t("aboutDescription")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mx-auto mb-6 p-4 bg-cyan-500/20 rounded-full w-fit">
                  <IconComponent className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
