"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "pt" : "en")}
      className="text-sm"
    >
      {language === "en" ? "PT" : "EN"}
    </Button>
  )
}
