"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import LanguageToggle from "./language-toggle"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import SeoOptimizedImage from "./seo-optimized-image"

export default function Header() {
  const { t } = useLanguage()
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700 text-white py-4"
    >
      <div className="container flex h-14 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center gap-2" href="/">
          <SeoOptimizedImage
            src="/placeholder-logo.png"
            alt="MozTech Solutions Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="text-xl font-bold text-cyan-400">MozTech Solutions</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link className="text-slate-300 hover:text-cyan-400 transition-colors" href="/">
            {t("home")}
          </Link>
          <Link className="text-slate-300 hover:text-cyan-400 transition-colors" href="/#about">
            {t("about")}
          </Link>
          <Link className="text-slate-300 hover:text-cyan-400 transition-colors" href="/services">
            {t("services")}
          </Link>
          <Link className="text-slate-300 hover:text-cyan-400 transition-colors" href="/projects">
            {t("projects")}
          </Link>
          <Link className="text-slate-300 hover:text-cyan-400 transition-colors" href="/contact">
            {t("contact")}
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <LanguageToggle />
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? (
              <Sun className="h-6 w-6 text-yellow-400" />
            ) : (
              <Moon className="h-6 w-6 text-blue-400" />
            )}
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button className="md:hidden" size="icon" variant="ghost">
                <Menu className="h-6 w-6 text-white" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-900 text-white border-l border-slate-700">
              <Link className="flex items-center gap-2 py-4" href="/" onClick={() => setIsSheetOpen(false)}>
                <SeoOptimizedImage
                  src="/placeholder-logo.png"
                  alt="MozTech Solutions Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <span className="text-xl font-bold text-cyan-400">MozTech Solutions</span>
              </Link>
              <div className="grid gap-4 py-6">
                <Link
                  className="flex w-full items-center py-2 text-lg font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
                  href="/"
                  onClick={() => setIsSheetOpen(false)}
                >
                  {t("home")}
                </Link>
                <Link
                  className="flex w-full items-center py-2 text-lg font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
                  href="/#about"
                  onClick={() => setIsSheetOpen(false)}
                >
                  {t("about")}
                </Link>
                <Link
                  className="flex w-full items-center py-2 text-lg font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
                  href="/services"
                  onClick={() => setIsSheetOpen(false)}
                >
                  {t("services")}
                </Link>
                <Link
                  className="flex w-full items-center py-2 text-lg font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
                  href="/projects"
                  onClick={() => setIsSheetOpen(false)}
                >
                  {t("projects")}
                </Link>
                <Link
                  className="flex w-full items-center py-2 text-lg font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
                  href="/contact"
                  onClick={() => setIsSheetOpen(false)}
                >
                  {t("contact")}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
