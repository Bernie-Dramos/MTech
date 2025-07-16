"use client"

import { useLanguage } from "@/contexts/language-context"

export default function StructuredData() {
  const { language } = useLanguage()

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MozTech Solutions",
    alternateName: "MozTech",
    url: "https://moztech-solutions.vercel.app",
    logo: "https://moztech-solutions.vercel.app/logo.png",
    description:
      language === "pt"
        ? "Empresa de tecnologia moçambicana dedicada a fortalecer a era digital através de desenvolvimento de software, formação tecnológica e transformação digital."
        : "Mozambican technology company dedicated to strengthening the digital era through software development, technology training, and digital transformation.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avenida Julius Nyerere, 123",
      addressLocality: "Maputo",
      addressCountry: "MZ",
      postalCode: "1100",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+258-21-123-456",
      contactType: "customer service",
      email: "info@moztech.co.mz",
      availableLanguage: ["Portuguese", "English"],
    },
    sameAs: ["https://linkedin.com/company/moztech-solutions", "https://twitter.com/moztechsolutions"],
    foundingDate: "2019",
    foundingLocation: {
      "@type": "Place",
      name: "Maputo, Mozambique",
    },
    areaServed: {
      "@type": "Country",
      name: "Mozambique",
    },
    knowsAbout: [
      "Software Development",
      "Web Development",
      "Mobile App Development",
      "Technology Training",
      "Digital Transformation",
      "IT Consulting",
      "Cybersecurity",
    ],
    serviceType: [
      "Software Development",
      "Technology Training",
      "Digital Transformation",
      "IT Consulting",
      "Cybersecurity",
      "Mobile Development",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MozTech Solutions",
    url: "https://moztech-solutions.vercel.app",
    description:
      language === "pt"
        ? "Website oficial da MozTech Solutions - empresa líder em tecnologia em Moçambique"
        : "Official website of MozTech Solutions - leading technology company in Mozambique",
    inLanguage: [
      {
        "@type": "Language",
        name: "Portuguese",
        alternateName: "pt",
      },
      {
        "@type": "Language",
        name: "English",
        alternateName: "en",
      },
    ],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://moztech-solutions.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://moztech-solutions.vercel.app/#organization",
    name: "MozTech Solutions",
    image: "https://moztech-solutions.vercel.app/logo.png",
    telephone: "+258-21-123-456",
    email: "info@moztech.co.mz",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avenida Julius Nyerere, 123",
      addressLocality: "Maputo",
      addressCountry: "MZ",
      postalCode: "1100",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.9692,
      longitude: 32.5732,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "MZN, USD",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </>
  )
}
