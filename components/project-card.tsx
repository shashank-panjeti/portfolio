"use client"

import Link from "next/link"
import Image from "next/image"
import type { Project } from "@/lib/project-data"
import { Project3DModel } from "./project-3d-model"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="group block">
      <div className="w-full min-h-screen flex items-center justify-center py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            {/* Project Info */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-foreground group-hover:text-muted-foreground transition-colors text-balance">
                  {project.title}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground text-pretty">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{project.timeline}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
            </div>

            {/* 3D Model or Image */}
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square  rounded-lg overflow-hidden order-1 lg:order-2">
              {project.modelPath ? (
                <Project3DModel modelPath={project.modelPath} className="w-full h-full" />
              ) : (
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
