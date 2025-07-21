"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Code,
      title: t("webDevelopment"),
      description: t("webDevelopmentDesc"),
      features: [t("responsiveDesign"), t("ecommerceFeature"), t("cmsFeature"), t("pwaFeature")],
    },
    {
      icon: Smartphone,
      title: t("mobileDevelopment"),
      description: t("mobileDevelopmentDesc"),
      features: [t("iosAndroidFeature"), t("crossPlatformFeature"), t("appOptimizationFeature"), t("mobileUxFeature")],
    },
  ]

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("servicesTitle")}</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">{t("servicesSubtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-semibold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center px-4 sm:px-6">
                  <CardDescription className="text-gray-600 leading-relaxed mb-6 text-base sm:text-lg">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center justify-center text-gray-700 text-sm sm:text-base"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-center">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
