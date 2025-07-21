import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { ServicesSection } from "@/components/services-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { Testimonials } from "@/components/testimonials"
import { CallToAction } from "@/components/call-to-action"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ServicesSection />
        <FeaturedProjects />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
