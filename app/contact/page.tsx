import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact Us - MakambaTech",
  description:
    "Get in touch with MakambaTech for your web and mobile development needs. Contact us today to discuss your project.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactPageClient />
      <Footer />
    </>
  )
}
