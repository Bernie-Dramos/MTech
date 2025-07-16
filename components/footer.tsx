"use client"

import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full py-8 bg-slate-900 text-white border-t border-slate-700"
    >
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} MozTech Solutions. {t("allRightsReserved")}
          </p>
        </div>
        <nav className="flex gap-6 text-sm">
          <Link className="text-slate-300 hover:text-cyan-400 transition-colors" href="#">
            {t("privacyPolicy")}
          </Link>
          <Link className="text-slate-300 hover:text-cyan-400 transition-colors" href="#">
            {t("termsOfService")}
          </Link>
        </nav>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
