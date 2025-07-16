import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/sonner"
import { ParticleBackground } from "@/components/particle-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "MakambaTech - Soluções Tecnológicas Inovadoras em Moçambique",
    template: "%s | MakambaTech",
  },
  description:
    "MakambaTech é uma empresa líder em tecnologia em Moçambique, oferecendo desenvolvimento de software, formação tecnológica, transformação digital e consultoria em TI. Impulsionando o futuro digital.",
  metadataBase: new URL("https://makambatech.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "pt-MZ": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "MakambaTech - Inovação e Tecnologia em Moçambique",
    description:
      "Parceiro tecnológico de confiança em Moçambique para desenvolvimento de software, formação e transformação digital.",
    url: "https://makambatech.vercel.app",
    siteName: "MakambaTech",
    images: [
      {
        url: "/og-image.jpg", // Default OG image
        width: 1200,
        height: 630,
        alt: "MakambaTech - Soluções Tecnológicas",
      },
    ],
    locale: "pt_MZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MakambaTech - Soluções Tecnológicas Inovadoras em Moçambique",
    description:
      "MakambaTech é uma empresa líder em tecnologia em Moçambique, oferecendo desenvolvimento de software, formação tecnológica, transformação digital e consultoria em TI. Impulsionando o futuro digital.",
    images: ["/twitter-image.jpg"], // Default Twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <ParticleBackground />
            <div className="relative z-10 flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
