import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import LoadingAnimation from "@/components/loading-animation"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "MozTech Solutions - Impulsionando o Futuro Digital de Moçambique",
    template: "%s | MozTech Solutions",
  },
  description:
    "Empresa de tecnologia moçambicana dedicada a fortalecer a era digital através de desenvolvimento de software, formação tecnológica e transformação digital. Capacitamos indivíduos e empresas em Moçambique.",
  keywords: [
    "tecnologia Moçambique",
    "desenvolvimento software Maputo",
    "formação tecnológica",
    "transformação digital",
    "consultoria TI Moçambique",
    "programação Moçambique",
    "MozTech Solutions",
    "empresa tecnologia Maputo",
  ],
  authors: [{ name: "MozTech Solutions" }],
  creator: "MozTech Solutions",
  publisher: "MozTech Solutions",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_MZ",
    alternateLocale: ["en_US"],
    siteName: "MozTech Solutions",
    title: "MozTech Solutions - Impulsionando o Futuro Digital de Moçambique",
    description:
      "Empresa de tecnologia moçambicana dedicada a fortalecer a era digital através de desenvolvimento de software, formação tecnológica e transformação digital.",
    images: [
      {
        url: "/maputo-skyline.jpg",
        width: 1200,
        height: 800,
        alt: "Maputo skyline at dusk - MozTech Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MozTech Solutions - Impulsionando o Futuro Digital de Moçambique",
    description:
      "Empresa de tecnologia moçambicana dedicada a fortalecer a era digital através de desenvolvimento de software, formação tecnológica e transformação digital.",
    images: ["/maputo-skyline.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <LanguageProvider>
          <LoadingAnimation />
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
