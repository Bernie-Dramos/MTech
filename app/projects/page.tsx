import ProjectsClientPage from "./ProjectsClientPage"
import StructuredData from "@/components/structured-data"

export default function ProjectsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Our Projects - MozTech Solutions",
    url: "https://moztechsolutions.com/projects",
    description: "Explore the innovative and successful projects developed by MozTech Solutions.",
  }

  return (
    <>
      <StructuredData data={structuredData} />
      <ProjectsClientPage />
    </>
  )
}
