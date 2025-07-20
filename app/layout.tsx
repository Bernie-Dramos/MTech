import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MozTech Solutions - Leading Technology Company in Mozambique",
  description:
    "MozTech Solutions provides cutting-edge web development, mobile apps, AI solutions, and digital transformation services in Mozambique.",
  keywords: "web development, mobile apps, AI solutions, digital transformation, Mozambique, technology",
  authors: [{ name: "MozTech Solutions" }],
  creator: "MozTech Solutions",
  publisher: "MozTech Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://moztech-solutions.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "pt-PT": "/pt-PT",
    },
  },
  openGraph: {
    title: "MozTech Solutions - Leading Technology Company in Mozambique",
    description:
      "MozTech Solutions provides cutting-edge web development, mobile apps, AI solutions, and digital transformation services in Mozambique.",
    url: "https://moztech-solutions.vercel.app",
    siteName: "MozTech Solutions",
    images: [
      {
        url: "/placeholder-logo.png",
        width: 800,
        height: 600,
        alt: "MozTech Solutions Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MozTech Solutions - Leading Technology Company in Mozambique",
    description:
      "MozTech Solutions provides cutting-edge web development, mobile apps, AI solutions, and digital transformation services in Mozambique.",
    images: ["/placeholder-logo.png"],
    creator: "@moztechsolutions",
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
