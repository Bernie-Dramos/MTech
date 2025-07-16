"use client"

import Script from "next/script"
import { useLanguage } from "@/contexts/language-context"

interface StructuredDataProps {
  data: Record<string, any>
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id={`structured-data-${data["@type"]}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Example usage of the updated component
export function MakambaTechStructuredData() {
  const { language } = useLanguage()

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MakambaTech",
    alternateName: "Makamba",
    url: "https://makambatech.vercel.app",
    logo: "https://makambatech.vercel.app/logo.png",
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
      email: "info@makambatech.co.mz",
      availableLanguage: ["Portuguese", "English"],
    },
    sameAs: ["https://linkedin.com/company/makambatech", "https://twitter.com/makambatech"],
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
    name: "MakambaTech",
    url: "https://makambatech.vercel.app",
    description:
      language === "pt"
        ? "Website oficial da MakambaTech - empresa líder em tecnologia em Moçambique"
        : "Official website of MakambaTech - leading technology company in Mozambique",
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
      target: "https://makambatech.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://makambatech.vercel.app/#organization",
    name: "MakambaTech",
    image: "https://makambatech.vercel.app/logo.png",
    telephone: "+258-21-123-456",
    email: "info@makambatech.co.mz",
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
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={localBusinessSchema} />
    </>
  )
}
