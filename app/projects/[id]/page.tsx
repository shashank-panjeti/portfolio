import { notFound } from "next/navigation"
import { projects } from "@/lib/project-data"
import { ProjectNavigation } from "@/components/project-navigation"
import { UXUICaseStudy } from "@/components/ux-ui-case-study"
import { ArchitectureProject } from "@/components/architecture-project"
import { PhotographyProject } from "@/components/photography-project"
import { DynamicProjectDetail } from "@/components/dynamic-project-detail"
import { ScrollToTop } from "@/components/scroll-to-top"

interface ProjectPageProps {
  params: Promise<{ id: string }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  const renderProjectContent = () => {
    if (project.content && project.content.length > 0) {
      return <DynamicProjectDetail project={project} />
    }

    switch (project.category) {
      case "ux-ui":
        return <UXUICaseStudy project={project} />
      case "architecture":
        return <ArchitectureProject project={project} />
      case "photography":
        return <PhotographyProject project={project} />
      case "interior":
        return <ArchitectureProject project={project} />
      case "3d":
        return <UXUICaseStudy project={project} />
      default:
        return <UXUICaseStudy project={project} />
    }
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6">
        {renderProjectContent()}
        <ProjectNavigation currentProjectId={project.id} />
      </div>

      <ScrollToTop />
    </div>
  )
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}
