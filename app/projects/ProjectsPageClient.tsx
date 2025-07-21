"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Filter } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ProjectsPageClient() {
  const { t } = useLanguage()
  const [selectedFilter, setSelectedFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: t("ecommerceProject"),
      description: t("ecommerceProjectDesc"),
      image: "/placeholder.svg?height=300&width=400&text=E-Commerce+Platform",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      status: t("completed"),
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: t("bankingProject"),
      description: t("bankingProjectDesc"),
      image: "/placeholder.svg?height=300&width=400&text=Banking+App",
      technologies: ["React Native", "Firebase", "JWT"],
      category: "mobile",
      status: t("completed"),
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: t("restaurantProject"),
      description: t("restaurantProjectDesc"),
      image: "/placeholder.svg?height=300&width=400&text=Restaurant+System",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      category: "web",
      status: t("completed"),
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Healthcare Management",
      description: "Comprehensive healthcare management system for clinics and hospitals",
      image: "/placeholder.svg?height=300&width=400&text=Healthcare+System",
      technologies: ["React", "Express", "PostgreSQL"],
      category: "web",
      status: t("completed"),
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Fitness Tracker App",
      description: "Mobile fitness tracking application with workout plans and progress monitoring",
      image: "/placeholder.svg?height=300&width=400&text=Fitness+App",
      technologies: ["Flutter", "Firebase", "Charts"],
      category: "mobile",
      status: t("inProgress"),
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Real Estate Portal",
      description: "Property listing and management platform with advanced search features",
      image: "/placeholder.svg?height=300&width=400&text=Real+Estate+Portal",
      technologies: ["Next.js", "Prisma", "PostgreSQL"],
      category: "web",
      status: t("completed"),
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const filters = [
    { id: "all", label: t("allProjects") },
    { id: "web", label: t("webDevelopment") },
    { id: "mobile", label: t("mobileDevelopment") },
  ]

  const filteredProjects =
    selectedFilter === "all" ? projects : projects.filter((project) => project.category === selectedFilter)

  return (
    <div className="min-h-screen bg-gray-50 pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("projects")}</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">{t("projectsSubtitle")}</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? "default" : "outline"}
              onClick={() => setSelectedFilter(filter.id)}
              className="transition-all duration-200 hover:scale-105"
            >
              <Filter className="h-4 w-4 mr-2" />
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
                    <Badge variant={project.status === t("completed") ? "default" : "secondary"} className="text-xs">
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm sm:text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
