"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { testimonialsData } from "@/data/mock-data"
import { useLanguage } from "@/contexts/language-context"

export default function Testimonials() {
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
            {t("testimonialsTitle")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[900px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            {t("testimonialsDescription")}
          </motion.p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3"
        >
          {testimonialsData.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Card className="bg-slate-800 border-slate-700 text-white p-6 shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300">
                <CardContent className="flex flex-col items-center text-center">
                  <Avatar className="h-20 w-20 mb-4 border-2 border-cyan-500">
                    <AvatarImage src={testimonial.image || "/placeholder.png"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-lg italic mb-4 text-slate-200">"{t(testimonial.quote)}"</p>
                  <h3 className="font-bold text-cyan-400">{testimonial.name}</h3>
                  <p className="text-sm text-slate-400">{t(testimonial.title)}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
