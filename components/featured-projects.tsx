"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function FeaturedProjects() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t("ecommerceProject"),
      description: t("ecommerceProjectDesc"),
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Node.js", "MongoDB"],
      status: t("completed"),
    },
    {
      title: t("bankingProject"),
      description: t("bankingProjectDesc"),
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React Native", "Firebase", "Stripe"],
      status: t("inProgress"),
    },
    {
      title: t("restaurantProject"),
      description: t("restaurantProjectDesc"),
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      status: t("completed"),
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("featuredProjects")}</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">{t("featuredProjectsDesc")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent text-xs sm:text-sm">
                      <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      {t("viewProject")}
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent text-xs sm:text-sm">
                      <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      {t("viewCode")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="transition-all duration-200 hover:scale-105 bg-transparent"
          >
            <Link href="/projects">{t("viewAllProjects")}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
