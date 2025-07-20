"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { Code, Smartphone, Brain, Cloud, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const iconMap = {
  Code,
  Smartphone,
  Brain,
  Cloud,
  TrendingUp,
  Users,
}

export function ServicesTeaser() {
  const { t } = useLanguage()

  const services = [
    {
      title: t("webDevelopment"),
      description: t("webDevDescription"),
      icon: "Code",
    },
    {
      title: t("mobileDevelopment"),
      description: t("mobileDevDescription"),
      icon: "Smartphone",
    },
    {
      title: t("aiSolutions"),
      description: t("aiDescription"),
      icon: "Brain",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("servicesTitle")}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
