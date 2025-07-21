import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MakambaTech - Leading Technology Company in Mozambique",
  description: "MakambaTech provides cutting-edge web development and mobile app development services in Mozambique.",
  keywords: "web development, mobile apps, technology, Mozambique, software development",
  authors: [{ name: "MakambaTech" }],
  creator: "MakambaTech",
  publisher: "MakambaTech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://makambatech.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "pt-PT": "/pt-PT",
    },
  },
  openGraph: {
    title: "MakambaTech - Leading Technology Company in Mozambique",
    description: "MakambaTech provides cutting-edge web development and mobile app development services in Mozambique.",
    url: "https://makambatech.vercel.app",
    siteName: "MakambaTech",
    images: [
      {
        url: "/makambatech-logo.png",
        width: 800,
        height: 600,
        alt: "MakambaTech Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MakambaTech - Leading Technology Company in Mozambique",
    description: "MakambaTech provides cutting-edge web development and mobile app development services in Mozambique.",
    images: ["/makambatech-logo.png"],
    creator: "@makambatech",
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
