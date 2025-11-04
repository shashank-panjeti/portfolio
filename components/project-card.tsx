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
      <div className="w-full flex items-center justify-center pt-8 sm:pt-12 md:pt-16 lg:pt-20">
        <div className="container mx-auto px-4 sm:px-6 bg-muted/20 rounded-2xl xl:px-[8%]">
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center"> */}
          {/* sm:[grid-template-columns:minmax(0,1fr)_minmax(200px,350px)]  */}
          <div className="grid grid-cols-1 
          md:[grid-template-columns:minmax(0,1fr)_minmax(300px,400px)] 
          lg:[grid-template-columns:minmax(0,1fr)_minmax(400px,500px)] 
          gap-8 sm:gap-12 lg:gap-20 items-center">
            {/* Project Info */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1 pb-4 sm:pb-6 md:pb-0">
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
            </div>

            {/* 3D Model or Image */}
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square  rounded-lg overflow-hidden order-1 md:order-2">
              {project.modelPath ? (
                <Project3DModel modelPath={project.modelPath} className="w-full h-full" />
              ) : (
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500
                  py-4 sm:py-6 md:p-8 md:pr-2 lg:p-10 rounded-lg"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

