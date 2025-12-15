"use client"

import Image from "next/image"
import { Project3DModel } from "./project-3d-model"
import { InteriorGallery } from "./interior-gallery"
import { InteriorComparison } from "./interior-comparison"
import type { Project, ContentSection } from "@/lib/project-data"

interface InteriorProjectDetailProps {
  project: Project
}

export function InteriorProjectDetail({ project }: InteriorProjectDetailProps) {
  const heroSection = project.content?.find(
    (section): section is Extract<ContentSection, { type: "interior-hero" }> =>
      section.type === "interior-hero",
  )

  const orderedContent = project.content?.filter(
    (section) => section.type !== "interior-hero",
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
    case "interior-overview":
      return <InteriorOverviewSection section={section} />

    case "comparison":
      return <ComparisonSection section={section} />

    case "case-study-section":
      return <CaseStudySection section={section} project={project} />

    case "spotlight":
      return <SpotlightSection section={section} />

    default:
      return null
  }
}




  function InteriorHeroSection({ section }: { section: Extract<ContentSection, { type: "interior-hero" }> }) {
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
              <div className="hidden sm:flex flex-wrap gap-2 pt-2">
                {section.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm bg-white/20 backdrop-blur-sm text-white rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }


  

function InteriorOverviewSection({ section }: { section: Extract<ContentSection, { type: "interior-overview" }> }) {

  const contribution = section.contribution ?? []
  const hasContribution = contribution.length > 0

  return (
    <section className="bg-background py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-foreground mb-8">{section.heading || "Project Overview"}</h2>

        <div className="gap-y-4">
          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            <div className="flex gap-4">
              <span className="text-muted-foreground min-w-[140px]">Project Name</span>
              {section.projectName}
            </div>

            <div className="flex gap-4">
              <span className="text-muted-foreground min-w-[140px]">Location</span>
              {section.location}
            </div>

            <div className="flex gap-4">
              <span className="text-muted-foreground min-w-[140px]">Project type</span>
              {section.projectType}
            </div>

            <div className="flex gap-4">
              <span className="text-muted-foreground min-w-[140px]">Work Duration</span>
              {section.workDuration}
            </div>

            <div className="flex gap-4 md:col-span-2">
              <span className="text-muted-foreground min-w-[140px] shrink-0">Software Used</span>
              {section.softwareUsed}
            </div>
          </div>

          {/* My Contribution */}
          {hasContribution &&(
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <span className="text-muted-foreground min-w-[140px] shrink-0">My Contribution</span>
              <div className="space-y-4">
                {contribution.map((paragraph, index) => (
                  <p key={index} className="text-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}  
        </div>
      </div>
    </section>
  )
}


function ComparisonSection({ section }: { section: Extract<ContentSection, { type: "comparison" }> }) {
  return (
    <section id={section.id} className="scroll-mt-24 ">
      <InteriorComparison images={section.images} heading={section.heading} description={section.description} />
    </section>
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
    (project?.category === "interior" || project?.category === "3d") &&
    section.id === "gallery" &&
    section.blocks?.[0]?.images

  if (isGallery) {
    const block = section.blocks![0]
    return (
      <section className="space-y-8">
        <h2 className="text-3xl font-light">{section.heading}</h2>
        {block.content && <p className="text-lg text-muted-foreground">{block.content}</p>}
        <InteriorGallery images={block.images!} />
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



function SpotlightSection({ section }: { section: Extract<ContentSection, { type: "spotlight" }> }) {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-light">{section.heading}</h2>
      {section.description && <p className="text-lg text-muted-foreground">{section.description}</p>}
      {section.image && (
        <Image
          src={section.image}
          alt="Spotlight"
          width={1200}
          height={800}
          className="rounded-lg"
        />
      )}
    </section>
  )
}
