"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { projectsData } from "@/data/mock-data"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import SeoOptimizedImage from "@/components/seo-optimized-image"

export default function ProjectsClientPage() {
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-cyan-400"
          >
            {t("projectsPageTitle")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[900px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            {t("projectsPageDescription")}
          </motion.p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mx-auto grid gap-6 py-12 lg:grid-cols-2 xl:grid-cols-3"
        >
          {projectsData.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="bg-slate-800 border-slate-700 text-white overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300">
                <SeoOptimizedImage
                  src={project.image}
                  alt={t(project.title)}
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-cyan-400">{t(project.title)}</CardTitle>
                  <CardDescription className="text-slate-300">{t(project.description)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={project.url} passHref>
                    <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                      {t("viewProject")} {/* Assuming you'll add this translation key */}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
