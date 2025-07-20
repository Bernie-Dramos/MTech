import Script from "next/script"

const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MozTech Solutions",
  description:
    "Leading technology company in Mozambique providing web development, mobile apps, AI solutions, and digital transformation services.",
  url: "https://moztech-solutions.vercel.app",
  logo: "https://moztech-solutions.vercel.app/placeholder-logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+258-84-123-4567",
    contactType: "customer service",
    availableLanguage: ["English", "Portuguese"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Julius Nyerere",
    addressLocality: "Maputo",
    addressCountry: "MZ",
  },
  sameAs: [
    "https://facebook.com/moztechsolutions",
    "https://twitter.com/moztechsolutions",
    "https://linkedin.com/company/moztechsolutions",
  ],
}

const websiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MozTech Solutions",
  url: "https://moztech-solutions.vercel.app",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://moztech-solutions.vercel.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}

export function MozTechSolutionsStructuredData() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
    </>
  )
}
