"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="relative">
      <div className="flex items-center bg-slate-800 rounded-full p-1 border border-slate-700">
        <button
          onClick={() => setLanguage("pt")}
          className={`relative px-3 py-1 text-sm font-medium rounded-full transition-colors ${
            language === "pt" ? "text-white" : "text-slate-400 hover:text-slate-300"
          }`}
        >
          PT
          {language === "pt" && (
            <motion.div
              layoutId="language-indicator"
              className="absolute inset-0 bg-cyan-500 rounded-full -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`relative px-3 py-1 text-sm font-medium rounded-full transition-colors ${
            language === "en" ? "text-white" : "text-slate-400 hover:text-slate-300"
          }`}
        >
          EN
          {language === "en" && (
            <motion.div
              layoutId="language-indicator"
              className="absolute inset-0 bg-cyan-500 rounded-full -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
      </div>
    </div>
  )
}
