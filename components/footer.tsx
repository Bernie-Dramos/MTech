"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { MapPin, Phone, Mail, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold">
                <span className="text-white">Moz</span>
                <span className="text-cyan-400">Tech</span>
              </div>
              <span className="text-slate-300 text-sm">Solutions</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{t("footerDescription")}</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  {t("projects")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("services")}</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Desenvolvimento de Software</li>
              <li>Formação em Tecnologia</li>
              <li>Transformação Digital</li>
              <li>Consultoria em TI</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("contactInfo")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400 text-sm">
                  Avenida Julius Nyerere, 123
                  <br />
                  Maputo, Moçambique
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">+258 21 123 456</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">info@moztech.co.mz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} MozTech Solutions. {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  )
}
