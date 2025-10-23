"use client"

import { useState, useMemo } from "react"
import { CategoryFilter } from "@/components/category-filter"
import { ProjectGridCard } from "@/components/project-grid-card"
import { PhotographyGallery } from "@/components/photography-gallery"
import { projects } from "@/lib/project-data"

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("ux-ui")

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") {
      return projects
    }
    return projects.filter((project) => project.category === selectedCategory)
  }, [selectedCategory])

  const showPhotographyGallery = selectedCategory === "photography"

  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-4 text-balance">Projects</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A collection of my work across various disciplines including UX/UI design, architecture, interior design, 3D
            visualization, and photography.
          </p>
        </div>

        {/* Category Filter */}
        <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {filteredProjects.map((project) => (
            <ProjectGridCard key={project.id} project={project} />
          ))}
        </div>

        {/* Photography Gallery - Only shown when photography category is selected */}
        {showPhotographyGallery && <PhotographyGallery />}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <p className="text-base sm:text-lg text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
