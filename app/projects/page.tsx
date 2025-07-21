import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import ProjectsPageClient from "./ProjectsPageClient"

export const metadata: Metadata = {
  title: "Projects - MakambaTech",
  description: "Explore our portfolio of successful web development and mobile app projects in Mozambique.",
}

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <ProjectsPageClient />
      </main>
      <Footer />
    </>
  )
}
