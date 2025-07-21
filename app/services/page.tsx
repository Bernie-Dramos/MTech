import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import ServicesClientPage from "./ServicesClientPage"

export const metadata: Metadata = {
  title: "Our Services - MakambaTech",
  description:
    "Discover MakambaTech's comprehensive technology services including web development, mobile apps, AI solutions, and digital transformation.",
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <ServicesClientPage />
      </main>
      <Footer />
    </>
  )
}
