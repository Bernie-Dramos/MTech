"use client"

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MakambaTech",
    description: "Leading technology company in Mozambique specializing in web and mobile development",
    url: "https://makambatech.vercel.app",
    logo: "https://makambatech.vercel.app/makambatech-logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+258-84-123-4567",
      contactType: "customer service",
      email: "info@makambatech.com",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Maputo",
      addressCountry: "MZ",
    },
    sameAs: [
      "https://facebook.com/makambatech",
      "https://twitter.com/makambatech",
      "https://linkedin.com/company/makambatech",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
