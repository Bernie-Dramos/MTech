import Hero from "@/components/hero"
import About from "@/components/about"
import ServicesTeaser from "@/components/services-teaser"
import FeaturedProjects from "@/components/featured-projects"
import Testimonials from "@/components/testimonials"
import Stats from "@/components/stats"
import CallToAction from "@/components/call-to-action"
import StructuredData from "@/components/structured-data"

export default function Home() {
  // In a Server Component, you don't use hooks like useLanguage directly.
  // Translations for static content should be passed down or fetched.
  // For dynamic content, client components will handle their own translations.

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MozTech Solutions",
    url: "https://moztechsolutions.com",
    logo: "https://moztechsolutions.com/placeholder-logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+258841234567",
      contactType: "customer service",
      email: "info@moztechsolutions.com",
    },
    sameAs: [
      "https://facebook.com/moztechsolutions",
      "https://twitter.com/moztechsolutions",
      "https://linkedin.com/company/moztechsolutions",
    ],
  }

  return (
    <>
      <StructuredData data={structuredData} />
      <Hero />
      <About />
      <ServicesTeaser />
      <FeaturedProjects />
      <Stats />
      <Testimonials />
      <CallToAction />
    </>
  )
}
