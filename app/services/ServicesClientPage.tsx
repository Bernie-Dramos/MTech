"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useLanguage } from "@/contexts/language-context"
import { services } from "@/data/mock-data"
import Link from "next/link"
import { ArrowRight, Code, Users, Zap, HeadphonesIcon, Shield, Smartphone } from "lucide-react"

const iconMap = {
  Code,
  Users,
  Zap,
  HeadphonesIcon,
  Shield,
  Smartphone,
}

export default function ServicesClientPage() {
  const { language, t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("services")}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">{t("servicesDescription")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 bg-cyan-500/20 rounded-full w-fit group-hover:bg-cyan-500/30 transition-colors">
                      <IconComponent className="h-8 w-8 text-cyan-400" />
                    </div>
                    <CardTitle className="text-white group-hover:text-cyan-400 transition-colors text-xl">
                      {service.title[language]}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-slate-300 text-center">
                      {service.description[language]}
                    </CardDescription>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-cyan-400 text-sm">{t("keyFeatures")}:</h4>
                      <ul className="space-y-2">
                        {service.features[language].map((feature, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-start">
                            <ArrowRight className="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 space-y-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
                          >
                            {t("learnMore")}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="text-cyan-400 text-xl flex items-center gap-3">
                              <IconComponent className="h-6 w-6" />
                              {service.title[language]}
                            </DialogTitle>
                            <DialogDescription className="text-slate-300">
                              {service.fullDescription[language]}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-cyan-400 mb-2">{t("process")}:</h4>
                              <ol className="space-y-2">
                                {service.process[language].map((step, i) => (
                                  <li key={i} className="text-slate-300 flex items-start">
                                    <span className="bg-cyan-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                                      {i + 1}
                                    </span>
                                    {step}
                                  </li>
                                ))}
                              </ol>
                            </div>
                            <div>
                              <h4 className="font-semibold text-cyan-400 mb-2">{t("benefits")}:</h4>
                              <ul className="space-y-2">
                                {service.benefits[language].map((benefit, i) => (
                                  <li key={i} className="text-slate-300 flex items-start">
                                    <ArrowRight className="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>

                      <Link href="/contact">
                        <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">{t("contactUs")}</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
