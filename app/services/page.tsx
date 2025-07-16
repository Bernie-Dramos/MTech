import ServicesClientPage from "./ServicesClientPage"
import StructuredData from "@/components/structured-data"

export default function ServicesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Our Services - MozTech Solutions",
    url: "https://moztechsolutions.com/services",
    description: "Discover the comprehensive range of technology services offered by MozTech Solutions.",
  }

  return (
    <>
      <StructuredData data={structuredData} />
      <ServicesClientPage />
    </>
  )
}
