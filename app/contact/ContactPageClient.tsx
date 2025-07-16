"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPageClient() {
  const { toast } = useToast()
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: t("contactFormSuccessTitle"),
          description: t("contactFormSuccessMessage"),
          variant: "default",
        })
        event.currentTarget.reset()
      } else {
        const errorData = await response.json()
        toast({
          title: t("contactFormErrorTitle"),
          description: errorData.message || t("contactFormErrorMessage"),
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Failed to submit form:", error)
      toast({
        title: t("contactFormErrorTitle"),
        description: t("contactFormErrorMessage"),
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-cyan-400">
              {t("contactTitle")}
            </h2>
            <p className="text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("contactDescription")}
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-cyan-400" />
                <a
                  href="mailto:info@moztechsolutions.com"
                  className="text-slate-200 hover:text-cyan-400 transition-colors"
                >
                  info@moztechsolutions.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-cyan-400" />
                <a href="tel:+258841234567" className="text-slate-200 hover:text-cyan-400 transition-colors">
                  +258 84 123 4567
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                <p className="text-slate-200">
                  {t("contactAddressLine1")}
                  <br />
                  {t("contactAddressLine2")}
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-400">{t("contactFormTitle")}</CardTitle>
                <CardDescription className="text-slate-400">{t("contactFormDescription")}</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4" onSubmit={handleSubmit}>
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-slate-300">
                      {t("contactFormNameLabel")}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={t("contactFormNamePlaceholder")}
                      required
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-500"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-slate-300">
                      {t("contactFormEmailLabel")}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t("contactFormEmailPlaceholder")}
                      required
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-500"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-slate-300">
                      {t("contactFormMessageLabel")}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t("contactFormMessagePlaceholder")}
                      required
                      rows={5}
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t("submitting") : t("contactFormSubmitButton")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
