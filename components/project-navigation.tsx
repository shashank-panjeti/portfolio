"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/project-data"

interface ProjectNavigationProps {
  currentProjectId: string
}

export function ProjectNavigation({ currentProjectId }: ProjectNavigationProps) {
  const currentIndex = projects.findIndex((p) => p.id === currentProjectId)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <div className="flex items-center justify-between py-8 border-t border-border">
      <div className="flex-1">
        {prevProject && (
          <Button asChild variant="ghost" className="gap-2">
            <Link href={`/projects/${prevProject.id}`}>
              <ArrowLeft className="h-4 w-4" />
              <div className="text-left">
                <div className="flex flex-row gap-2">
                  <div className="text-xs text-muted-foreground">Previous</div>
                  <div className="text-xs text-muted-foreground capitalize">{prevProject.category} Project</div>
                </div>
                <div className="text-sm font-medium">{prevProject.title}</div>
              </div>
            </Link>
          </Button>
        )}
      </div>

      <Button asChild variant="outline">
        <Link href="/projects">All Projects</Link>
      </Button>

      <div className="flex-1 flex justify-end">
        {nextProject && (
          <Button asChild variant="ghost" className="gap-2">
            <Link href={`/projects/${nextProject.id}`}>
              <div className="text-right">
                <div className="flex flex-row-reverse gap-2">
                  <div className="text-xs text-muted-foreground">Next</div>
                  <div className="text-xs text-muted-foreground capitalize">{nextProject.category} Project</div>
                </div>
                <div className="text-sm font-medium">{nextProject.title}</div>
              </div>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}
