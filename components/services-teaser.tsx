"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { services } from "@/data/mock-data"
import { Code, Users, Zap } from "lucide-react"
import Link from "next/link"

const iconMap = {
  Code,
  Users,
  Zap,
}

export default function ServicesTeaser() {
  const { language, t } = useLanguage()
  const featuredServices = services.slice(0, 3)

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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("servicesTitle")}</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">{t("servicesDescription")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/20 h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 bg-cyan-500/20 rounded-full w-fit group-hover:bg-cyan-500/30 transition-colors">
                      <IconComponent className="h-8 w-8 text-cyan-400" />
                    </div>
                    <CardTitle className="text-white group-hover:text-cyan-400 transition-colors">
                      {service.title[language]}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-slate-300 mb-6">{service.description[language]}</CardDescription>
                    <ul className="text-sm text-slate-400 space-y-2 mb-6">
                      {service.features[language].slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center justify-center">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/services">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3">
              Ver Todos os Serviços
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
