import Link from "next/link"
import Image from "next/image"
import type { Project } from "@/lib/project-data"

interface ProjectGridCardProps {
  project: Project
}

export function ProjectGridCard({ project }: ProjectGridCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="group block">
      <div className="space-y-4">
        <div className="relative aspect-[4/3] bg-muted/20 rounded-lg overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-medium text-foreground group-hover:text-muted-foreground transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>

          <div className="flex flex-wrap gap-1 pt-1">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                {tag}
              </span>
            ))}
          </div>

          <div className="text-xs text-muted-foreground">{project.year}</div>
        </div>
      </div>
    </Link>
  )
}
