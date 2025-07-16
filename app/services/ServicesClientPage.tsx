"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { servicesData } from "@/data/mock-data"
import { useLanguage } from "@/contexts/language-context"

export default function ServicesClientPage() {
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
            {t("servicesPageTitle")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[900px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            {t("servicesPageDescription")}
          </motion.p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mx-auto grid gap-6 py-12 lg:grid-cols-3 xl:grid-cols-3"
        >
          {servicesData.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card className="flex flex-col items-center justify-center p-6 text-center bg-slate-800 border-slate-700 hover:border-cyan-500 transition-all duration-300 ease-in-out group">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <service.icon className="h-12 w-12 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {t(service.title)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{t(service.description)}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
