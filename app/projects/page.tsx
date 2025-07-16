import type { Metadata } from "next"
import ProjectsClientPage from "./ProjectsClientPage"

export const metadata: Metadata = {
  title: "Projetos - Portfolio de Soluções Tecnológicas",
  description:
    "Explore nosso portfolio de projetos tecnológicos em Moçambique. Sistemas de gestão, aplicações móveis, plataformas e-commerce e soluções de telemedicina desenvolvidas pela MozTech Solutions.",
  keywords: [
    "projetos tecnologia Moçambique",
    "portfolio desenvolvimento software",
    "sistemas gestão Maputo",
    "aplicações móveis Moçambique",
    "e-commerce Moçambique",
    "telemedicina digital",
  ],
  openGraph: {
    title: "Projetos MozTech Solutions - Inovação Tecnológica em Moçambique",
    description:
      "Descubra projetos que transformaram empresas e organizações em Moçambique através de soluções tecnológicas inovadoras.",
    url: "https://moztech-solutions.vercel.app/projects",
    images: [
      {
        url: "/og-projects.jpg",
        width: 1200,
        height: 630,
        alt: "Projetos tecnológicos da MozTech Solutions",
      },
    ],
  },
  alternates: {
    canonical: "https://moztech-solutions.vercel.app/projects",
    languages: {
      "pt-MZ": "https://moztech-solutions.vercel.app/projects",
      "en-US": "https://moztech-solutions.vercel.app/en/projects",
    },
  },
}

export default function ProjectsPage() {
  return <ProjectsClientPage />
}
