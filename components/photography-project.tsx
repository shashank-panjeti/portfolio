"use client"

import Image from "next/image"
import { Project3DModel } from "./project-3d-model"
import { InteriorGallery } from "./interior-gallery"
import { PhotographyGallery } from "./photo-gallery"
import type { Project, ContentSection } from "@/lib/project-data"

interface PhotographyProjectProps {
  project: Project
}

export function PhotographyProject({ project }: PhotographyProjectProps) {
  const heroSection = project.content?.find(
    (section): section is Extract<ContentSection, { type: "photography-hero" }> =>
      section.type === "photography-hero",
  )

  const orderedContent = project.content?.filter(
    (section) => section.type !== "photography-hero",
  )

  if (!project.content || project.content.length === 0) {
    return (
      <div className="space-y-8">
        <h1 className="text-4xl lg:text-5xl font-light">{project.title}</h1>
        <div className="relative aspect-video bg-muted/20 rounded-lg overflow-hidden">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-16">
      {heroSection && (
        <div className="max-w-[1400px] mx-auto max-h-[650px] overflow-hidden">
          <InteriorHeroSection section={heroSection} />
        </div>
      )}

      
      <div className="max-w-[1400px] mx-auto space-y-16">
        {orderedContent?.map((section, index) => (
          <ContentSectionRenderer key={index} section={section} project={project} />
        ))}
      </div>
    </div>
  )
}



function ContentSectionRenderer({ section, project }: { section: ContentSection; project?: Project }) {
  switch (section.type) {
    case "case-study-section":
      return <CaseStudySection section={section} project={project} />

    default:
      return null
  }
}




  function InteriorHeroSection({ section }: { section: Extract<ContentSection, { type: "photography-hero" }> }) {
    return (
      // <div className="relative w-full sm:h-[35vh] md:h-[50vh] lg:h-[65vh] min-h-[250px] overflow-hidden">
      <div className="relative w-full sm:min-h-[35vh] md:min-h-[40vh] lg:min-h-[45vh] min-h-[250px] overflow-hidden">
        <Image
          src={section.heroImage || "/placeholder.svg"}
          alt={section.title}
          fill
          // className="w-full h-full object-cover object-center"
          className="object-cover object-center lg:top-[-20%]"
          priority
        />
        <div className="absolute inset-0 z-10 flex flex-col justify-end max-w-[1400px] mx-auto w-full">
          <div className="space-y-4 text-white bg-black/50 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-light m-0">{section.title}</h1>
            <div className="inset-0 flex flex-row w-full justify-between items-baseline ">
              <p className="text-md md:text-xl text-white/90">{section.subtitle}</p>
              {/* <div className="hidden sm:flex flex-wrap gap-2 pt-2">
                {section.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm bg-white/20 backdrop-blur-sm text-white rounded-full">
                    {tag}
                  </span>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    )
  }



function CaseStudySection({
  section,
  project,
}: {
  section: Extract<ContentSection, { type: "case-study-section" }>
  project?: Project
}) {
  const isGallery =
    (project?.category === "photography") &&
    section.id === "gallery" &&
    section.blocks?.[0]?.images

  if (isGallery) {
    const block = section.blocks![0]
    return (
      <section className="space-y-8">
        <h2 className="text-3xl font-light">{section.heading}</h2>
        {block.content && <p className="text-lg text-muted-foreground">{block.content}</p>}
        <PhotographyGallery images={block.images!} />
        {/* <InteriorGallery images={block.images!} /> */}
      </section>
    )
  }

  const content = Array.isArray(section.content) ? section.content : section.content ? [section.content] : []

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-light">{section.heading}</h2>

      {content.map((p, i) => (
        <p key={i} className="text-lg text-muted-foreground leading-relaxed">
          {p}
        </p>
      ))}

      {section.modelPath && <Project3DModel modelPath={section.modelPath} />}
    </section>
  )
}
