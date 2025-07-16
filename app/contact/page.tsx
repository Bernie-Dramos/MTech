import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contato - Entre em Contato com a MozTech Solutions",
  description:
    "Entre em contato com a MozTech Solutions em Maputo, Moçambique. Solicite orçamentos para desenvolvimento de software, formação tecnológica e consultoria em TI. Telefone: +258 21 123 456",
  keywords: [
    "contato MozTech Solutions",
    "empresa tecnologia Maputo",
    "orçamento desenvolvimento software",
    "consultoria TI Moçambique",
    "formação tecnológica contato",
    "Avenida Julius Nyerere Maputo",
  ],
  openGraph: {
    title: "Contato MozTech Solutions - Fale Conosco",
    description:
      "Entre em contato para discutir seu projeto tecnológico. Estamos localizados em Maputo e prontos para transformar suas ideias em realidade digital.",
    url: "https://moztech-solutions.vercel.app/contact",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contato MozTech Solutions Maputo",
      },
    ],
  },
  alternates: {
    canonical: "https://moztech-solutions.vercel.app/contact",
    languages: {
      "pt-MZ": "https://moztech-solutions.vercel.app/contact",
      "en-US": "https://moztech-solutions.vercel.app/en/contact",
    },
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
