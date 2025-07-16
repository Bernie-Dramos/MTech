"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

export default function LoadingAnimation() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="w-16 h-16 border-4 border-t-4 border-cyan-500 border-t-transparent rounded-full"
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="mt-4 text-lg"
      >
        {t("loadingMessage")}
      </motion.p>
    </div>
  )
}
