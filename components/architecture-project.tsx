"use client"

import Image from "next/image"
import { Project3DModel } from "./project-3d-model"
import type { Project, ContentSection } from "@/lib/project-data"

interface ArchitectureProjectDetailProps {
  project: Project
}

export function ArchitectureProjectDetail({ project }: ArchitectureProjectDetailProps) {
  const content = project.content || []

  // Pick out architecture-specific sections by type
  const heroSection = content.find(
    (section): section is Extract<ContentSection, { type: "architecture-hero" }> =>
      section.type === "architecture-hero",
  )

  const conceptSection = content.find(
    (section): section is Extract<ContentSection, { type: "architecture-concept" }> =>
      section.type === "architecture-concept",
  )

  const floorPlansSection = content.find(
    (section): section is Extract<ContentSection, { type: "architecture-floor-plans" }> =>
      section.type === "architecture-floor-plans",
  )

  const materialsSection = content.find(
    (section): section is Extract<ContentSection, { type: "architecture-materials" }> =>
      section.type === "architecture-materials",
  )

  const gallerySection = content.find(
    (section): section is Extract<ContentSection, { type: "architecture-gallery" }> =>
      section.type === "architecture-gallery",
  )

  // Optional: any extra generic sections (text, image-grid, etc.) after main layout
  const otherSections = content.filter(
    (section) =>
      ![
        "architecture-hero",
        "architecture-concept",
        "architecture-floor-plans",
        "architecture-materials",
        "architecture-gallery",
      ].includes(section.type),
  )

  // Fallback if no structured content
  if (content.length === 0 || !heroSection) {
    return (
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl lg:text-5xl font-light">{project.title}</h1>
          <p className="text-lg text-muted-foreground">{project.description}</p>
        </div>
        <div className="relative aspect-video bg-muted/20 rounded-lg overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-16">
      <ArchitectureHeroSection section={heroSection} project={project} />

      {conceptSection && <ArchitectureConceptSection section={conceptSection} />}

      {floorPlansSection && <ArchitectureFloorPlansSection section={floorPlansSection} />}

      {materialsSection && <ArchitectureMaterialsSection section={materialsSection} />}

      {gallerySection && <ArchitectureGallerySection section={gallerySection} project={project} />}

      {/* Optional extra sections after the main architecture layout */}
      {otherSections.length > 0 && (
        <div className="space-y-16">
          {otherSections.map((section, index) => (
            <GenericArchitectureSection key={index} section={section} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}

/* ---------- SECTION RENDERERS ---------- */

function ArchitectureHeroSection({
  section,
  project,
}: {
  section: Extract<ContentSection, { type: "architecture-hero" }>
  project: Project
}) {
  const meta = section.meta || {}

  const year = meta.year ?? project.year
  const type = meta.type ?? "Architecture"
  const area = meta.area
  const location = meta.location

  const modelPath = section.modelPath || project.modelPath
  const heroImage = section.image || project.image || "/placeholder.svg"

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">
            {section.subtitle || "Architecture Project"}
          </span>
          <h1 className="text-4xl lg:text-5xl font-light text-foreground">
            {section.title || project.title}
          </h1>
          {section.description && (
            <p className="text-lg text-muted-foreground">{section.description}</p>
          )}
        </div>

        {(year || type || area || location) && (
          <div className="grid grid-cols-2 gap-4 text-sm">
            {year && (
              <div>
                <span className="text-muted-foreground">Year:</span>
                <div className="font-medium">{year}</div>
              </div>
            )}
            {type && (
              <div>
                <span className="text-muted-foreground">Type:</span>
                <div className="font-medium">{type}</div>
              </div>
            )}
            {area && (
              <div>
                <span className="text-muted-foreground">Area:</span>
                <div className="font-medium">{area}</div>
              </div>
            )}
            {location && (
              <div>
                <span className="text-muted-foreground">Location:</span>
                <div className="font-medium">{location}</div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="relative aspect-square bg-muted/20 rounded-lg overflow-hidden">
        {modelPath ? (
          <Project3DModel modelPath={modelPath} className="w-full h-full" />
        ) : (
          <Image src={heroImage} alt={section.title || project.title} fill className="object-cover" />
        )}
      </div>
    </section>
  )
}

function ArchitectureConceptSection({
  section,
}: {
  section: Extract<ContentSection, { type: "architecture-concept" }>
}) {
  const content = Array.isArray(section.content) ? section.content : [section.content]

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-light text-foreground">
        {section.heading || "Design Concept"}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {content.map((paragraph, index) => (
            <p key={index} className="text-lg text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        {section.sidebar && (
          <div className="bg-muted/20 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-foreground mb-4">
              {section.sidebar.title}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {section.sidebar.items.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

function ArchitectureFloorPlansSection({
  section,
}: {
  section: Extract<ContentSection, { type: "architecture-floor-plans" }>
}) {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-light text-foreground">
        {section.heading || "Floor Plans"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {section.plans.map((plan, index) => (
          <div key={index} className="space-y-4">
            {plan.title && (
              <h3 className="text-xl font-medium text-foreground">{plan.title}</h3>
            )}
            <div className="relative aspect-[4/3] bg-muted/20 rounded-lg overflow-hidden">
              <Image
                src={plan.image || "/placeholder.svg"}
                alt={plan.alt || plan.title || "Floor plan"}
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ArchitectureMaterialsSection({
  section,
}: {
  section: Extract<ContentSection, { type: "architecture-materials" }>
}) {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-light text-foreground">
        {section.heading || "Materials & Sustainability"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {section.groups.map((group, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">{group.title}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {group.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function ArchitectureGallerySection({
  section,
  project,
}: {
  section: Extract<ContentSection, { type: "architecture-gallery" }>
  project: Project
}) {
  const fallbackImage = project.image || "/placeholder.svg"
  const images = section.images.length > 0 ? section.images : [{ src: fallbackImage, alt: project.title }]

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-light text-foreground">
        {section.heading || "Project Gallery"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-[4/3] bg-muted/20 rounded-lg overflow-hidden">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt || `Project image ${index + 1}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

/**
 * Optional: generic fallback renderer for extra sections
 * (you can replace this with your existing ContentSectionRenderer if you export it)
 */
function GenericArchitectureSection({
  section,
  project,
}: {
  section: ContentSection
  project: Project
}) {
  // Minimal example – you can expand this to match your DynamicProjectDetail renderer
  if (section.type === "text") {
    const content = Array.isArray(section.content) ? section.content : [section.content]
    return (
      <section className="space-y-8">
        {section.heading && (
          <h2 className="text-3xl font-light text-foreground">{section.heading}</h2>
        )}
        <div className="space-y-4">
          {content.map((paragraph, index) => (
            <p key={index} className="text-lg text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    )
  }

  if (section.type === "image") {
    return (
      <section className="space-y-4">
        <div className="relative w-full bg-muted/20 rounded-lg overflow-hidden">
          <Image
            src={section.src || "/placeholder.svg"}
            alt={section.alt || project.title}
            width={1200}
            height={800}
            className="object-contain w-full h-auto"
          />
        </div>
        {section.caption && (
          <p className="text-sm text-muted-foreground text-center">{section.caption}</p>
        )}
      </section>
    )
  }

  // If you export your full ContentSectionRenderer from DynamicProjectDetail,
  // you can just delegate to it here instead of this minimal switch.
  return null
}
