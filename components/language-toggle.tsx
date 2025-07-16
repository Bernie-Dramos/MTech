"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Globe } from "lucide-react"

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === "pt" ? "English" : "Portuguese"}`}
    >
      <Globe className="h-6 w-6 text-white" />
      <span className="sr-only">Toggle language</span>
    </Button>
  )
}
