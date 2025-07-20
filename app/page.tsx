import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { ServicesTeaser } from "@/components/services-teaser"
import { Stats } from "@/components/stats"
import { FeaturedProjects } from "@/components/featured-projects"
import { Testimonials } from "@/components/testimonials"
import { CallToAction } from "@/components/call-to-action"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MozTechSolutionsStructuredData } from "@/components/structured-data"

export default function Home() {
  return (
    <>
      <MozTechSolutionsStructuredData />
      <Header />
      <main>
        <Hero />
        <About />
        <ServicesTeaser />
        <Stats />
        <FeaturedProjects />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
