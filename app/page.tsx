import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import FeaturedProjects from "@/components/featured-projects"
import ServicesTeaser from "@/components/services-teaser"
import Stats from "@/components/stats"
import Testimonials from "@/components/testimonials"
import CallToAction from "@/components/call-to-action"
import StructuredData from "@/components/structured-data"

export const metadata: Metadata = {
  title: "MozTech Solutions - Impulsionando o Futuro Digital de Moçambique",
  description:
    "Empresa líder em tecnologia em Moçambique. Oferecemos desenvolvimento de software, formação tecnológica, transformação digital e consultoria em TI. Capacitamos indivíduos e empresas para o futuro digital.",
  keywords: [
    "empresa tecnologia Moçambique",
    "desenvolvimento software Maputo",
    "formação programação",
    "transformação digital empresas",
    "consultoria TI Moçambique",
    "MozTech Solutions",
    "tecnologia Maputo",
  ],
  openGraph: {
    title: "MozTech Solutions - Líder em Tecnologia em Moçambique",
    description:
      "Transformamos o futuro digital de Moçambique através de soluções tecnológicas inovadoras, formação especializada e consultoria estratégica.",
    url: "https://moztech-solutions.vercel.app",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "MozTech Solutions - Skyline de Maputo com tecnologia",
      },
    ],
  },
  alternates: {
    canonical: "https://moztech-solutions.vercel.app",
    languages: {
      "pt-MZ": "https://moztech-solutions.vercel.app",
      "en-US": "https://moztech-solutions.vercel.app/en",
    },
  },
}

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Hero />
      <About />
      <FeaturedProjects />
      <ServicesTeaser />
      <Stats />
      <Testimonials />
      <CallToAction />
    </>
  )
}
