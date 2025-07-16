"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useLanguage } from "@/contexts/language-context"
import { projects } from "@/data/mock-data"
import Image from "next/image"

export default function ProjectsClientPage() {
  const { language, t } = useLanguage()
  const [selectedFilter, setSelectedFilter] = useState("all")

  const filters = [
    { id: "all", label: t("all") },
    { id: "software", label: t("software") },
    { id: "training", label: t("training") },
    { id: "infrastructure", label: t("infrastructure") },
  ]

  const filteredProjects =
    selectedFilter === "all" ? projects : projects.filter((project) => project.category === selectedFilter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("projects")}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">{t("projectsDescription")}</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? "default" : "outline"}
              onClick={() => setSelectedFilter(filter.id)}
              className={`${
                selectedFilter === filter.id
                  ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                  : "border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
              } transition-all duration-300`}
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title[language]}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                      {t(project.category)}
                    </Badge>
                  </div>
                  <CardTitle className="text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title[language]}
                  </CardTitle>
                  <CardDescription className="text-slate-300 mb-4">{project.description[language]}</CardDescription>
                  <p className="text-sm text-slate-400 mb-4">
                    <span className="font-semibold">{t("client")}:</span> {project.client[language]}
                  </p>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">{t("viewDetails")}</Button>
                    </DialogTrigger>
                    <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-cyan-400 text-xl">{project.title[language]}</DialogTitle>
                        <DialogDescription className="text-slate-300">
                          {project.fullDescription[language]}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-cyan-400 mb-2">{t("technologiesUsed")}:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <Badge key={i} variant="outline" className="border-cyan-500/30 text-cyan-400">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-cyan-400 mb-2">{t("impact")}:</h4>
                          <p className="text-slate-300">{project.impact[language]}</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
