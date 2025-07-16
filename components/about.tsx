"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import SeoOptimizedImage from "./seo-optimized-image"

export default function About() {
  const { t } = useLanguage()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-cyan-400">
              {t("aboutTitle")}
            </h2>
            <p className="text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("aboutDescription")}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <SeoOptimizedImage
              src="/mozambique-skyline.png"
              width={600}
              height={400}
              alt="Mozambique Skyline"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
