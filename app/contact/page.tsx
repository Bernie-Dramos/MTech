import ContactPageClient from "./ContactPageClient"
import StructuredData from "@/components/structured-data"

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact MozTech Solutions",
    url: "https://moztechsolutions.com/contact",
    description: "Get in touch with MozTech Solutions for innovative technology solutions.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+258841234567",
      contactType: "customer service",
      email: "info@moztechsolutions.com",
    },
  }

  return (
    <>
      <StructuredData data={structuredData} />
      <ContactPageClient />
    </>
  )
}
