import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactPageClient } from "./ContactPageClient"
import { MozTechSolutionsStructuredData } from "@/components/structured-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - MozTech Solutions",
  description:
    "Get in touch with MozTech Solutions for your technology needs. We're here to help with web development, mobile apps, and AI solutions.",
}

export default function ContactPage() {
  return (
    <>
      <MozTechSolutionsStructuredData />
      <Header />
      <ContactPageClient />
      <Footer />
    </>
  )
}
