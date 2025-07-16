"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useCallback } from "react"
import { translations } from "@/data/translations"

type Language = "pt" | "en"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  useEffect(() => {
    // Attempt to load language from localStorage or detect browser preference
    const storedLanguage = localStorage.getItem("language") as Language
    if (storedLanguage && (storedLanguage === "pt" || storedLanguage === "en")) {
      setLanguage(storedLanguage)
    } else if (typeof navigator !== "undefined") {
      const browserLanguage = navigator.language.split("-")[0]
      if (browserLanguage === "en") {
        setLanguage("en")
      } else {
        setLanguage("pt") // Default to Portuguese if not English
      }
    }
  }, [])

  const toggleLanguage = useCallback(() => {
    setLanguage((prevLang) => {
      const newLang = prevLang === "pt" ? "en" : "pt"
      localStorage.setItem("language", newLang)
      return newLang
    })
  }, [])

  const t = useCallback(
    (key: string): string => {
      const currentTranslations = translations[language]
      return currentTranslations[key] || key // Fallback to key if translation not found
    },
    [language],
  )

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
