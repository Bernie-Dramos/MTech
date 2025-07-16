import type { Metadata } from "next"
import ServicesClientPage from "./ServicesClientPage"

export const metadata: Metadata = {
  title: "Serviços - Soluções Tecnológicas Completas",
  description:
    "Serviços especializados em tecnologia: desenvolvimento de software, formação tecnológica, transformação digital, consultoria TI, segurança cibernética e desenvolvimento mobile em Moçambique.",
  keywords: [
    "serviços tecnologia Moçambique",
    "desenvolvimento software personalizado",
    "formação programação Maputo",
    "transformação digital empresas",
    "consultoria TI Moçambique",
    "segurança cibernética",
    "desenvolvimento aplicações móveis",
  ],
  openGraph: {
    title: "Serviços MozTech Solutions - Transformação Digital Completa",
    description:
      "Oferecemos soluções tecnológicas completas para empresas em Moçambique: desde desenvolvimento de software até formação especializada.",
    url: "https://moztech-solutions.vercel.app/services",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Serviços tecnológicos da MozTech Solutions",
      },
    ],
  },
  alternates: {
    canonical: "https://moztech-solutions.vercel.app/services",
    languages: {
      "pt-MZ": "https://moztech-solutions.vercel.app/services",
      "en-US": "https://moztech-solutions.vercel.app/en/services",
    },
  },
}

export default function ServicesPage() {
  return <ServicesClientPage />
}
