"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-6xl font-bold text-cyan-400 mb-4"
      >
        404
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl font-bold text-white mb-4"
      >
        {t("pageNotFoundTitle")}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-slate-300 mb-8 max-w-md"
      >
        {t("pageNotFoundDescription")}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link href="/" passHref>
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 text-lg">
            {t("pageNotFoundGoHome")}
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}
