"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function CallToAction() {
  const { t } = useLanguage()

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">{t("ctaTitle")}</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            {t("ctaDescription")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-3 transition-all duration-200 hover:scale-105"
            >
              <Link href="/contact" className="flex items-center justify-center space-x-2">
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>{t("startProject")}</span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600 text-base sm:text-lg px-6 sm:px-8 py-3 transition-all duration-200 hover:scale-105 bg-transparent"
            >
              <Link href="/projects" className="flex items-center justify-center space-x-2">
                <span>{t("viewOurWork")}</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
