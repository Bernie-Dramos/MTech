"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Brain, Zap } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function ServicesTeaser() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Code,
      title: t("webDevelopment"),
      description: t("webDevelopmentDesc"),
    },
    {
      icon: Smartphone,
      title: t("mobileDevelopment"),
      description: t("mobileDevelopmentDesc"),
    },
    {
      icon: Brain,
      title: t("aiSolutions"),
      description: t("aiSolutionsDesc"),
    },
    {
      icon: Zap,
      title: t("digitalTransformation"),
      description: t("digitalTransformationDesc"),
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("servicesTitle")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("servicesSubtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
