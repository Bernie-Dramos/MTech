"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center space-x-1 sm:space-x-2 transition-all duration-200 hover:scale-105 px-2 sm:px-3"
    >
      <Globe className="h-4 w-4" />
      <span className="text-xs sm:text-sm font-medium">{language === "en" ? "PT" : "EN"}</span>
    </Button>
  )
}
