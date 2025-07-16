"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import SeoOptimizedImage from "./seo-optimized-image"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative w-full h-[calc(100vh-6rem)] flex items-center justify-center text-center text-white overflow-hidden">
      <SeoOptimizedImage
        src="/maputo-skyline.png"
        alt="Maputo Skyline"
        fill
        style={{ objectFit: "cover" }}
        priority
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 space-y-6 px-4 md:px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-cyan-400 drop-shadow-lg"
        >
          {t("heroTitle")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl text-slate-200 drop-shadow-md"
        >
          {t("heroSubtitle")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/contact" passHref>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg shadow-lg hover:shadow-cyan-500/40 transition-all duration-300">
              {t("heroCta")}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
