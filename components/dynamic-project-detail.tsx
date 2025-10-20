"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Project3DModel } from "./project-3d-model"
import { InteriorGallery } from "./interior-gallery"
import { InteriorComparison } from "./interior-comparison"
import type { Project, ContentSection } from "@/lib/project-data"

interface DynamicProjectDetailProps {
  project: Project
}

export function DynamicProjectDetail({ project }: DynamicProjectDetailProps) {
  const [activeSection, setActiveSection] = useState<string>("")
  const [hoveredSection, setHoveredSection] = useState<string>("")
  const [isNavCentered, setIsNavCentered] = useState(false)
  const contentStartRef = useRef<HTMLDivElement>(null)

  const heroSection = project.content?.find((section) => section.type === "hero")
  const caseStudySections =
    project.content?.filter(
      (section): section is Extract<ContentSection, { type: "case-study-section" | "spotlight" }> =>
        section.type === "case-study-section" || section.type === "spotlight",
    ) || []
  const otherSections = project.content?.filter(
    (section) => section.type !== "hero" && section.type !== "case-study-section" && section.type !== "spotlight",
  )

  const hasCaseStudyNav = caseStudySections.length > 0 && project.category !== "interior"

  useEffect(() => {
    if (!hasCaseStudyNav) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      },
    )

    caseStudySections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [hasCaseStudyNav, caseStudySections])

  useEffect(() => {
    if (!hasCaseStudyNav || !contentStartRef.current) return

    const handleScroll = () => {
      if (contentStartRef.current) {
        const rect = contentStartRef.current.getBoundingClientRect()
        setIsNavCentered(rect.top < 100)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [hasCaseStudyNav])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      })
    }
  }

  if (!project.content || project.content.length === 0) {
    return (
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl lg:text-5xl font-light">{project.title}</h1>
          <p className="text-lg text-muted-foreground">{project.description}</p>
        </div>
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
          <ContentSectionRenderer section={heroSection} />
        </div>
      )}

      {hasCaseStudyNav ? (
        <div ref={contentStartRef} className="max-w-[1400px] mx-auto">
          <div className="flex gap-4 items-start">
            <nav
              className={`hidden md:block w-56 shrink-0 sticky transition-all duration-300 ${
                isNavCentered ? "top-1/2 -translate-y-1/2" : "top-24"
              }`}
            >
              <ul className="space-y-4">
                {caseStudySections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      onMouseEnter={() => setHoveredSection(section.id)}
                      onMouseLeave={() => setHoveredSection("")}
                      className={`text-base font-medium transition-all text-left w-full relative overflow-hidden h-6 ${
                        activeSection === section.id ? "text-primary scale-110" : "text-muted-foreground"
                      }`}
                    >
                      <span
                        className={`absolute inset-0 transition-transform duration-300 ${
                          hoveredSection === section.id ? "-translate-y-full" : "translate-y-0"
                        }`}
                      >
                        {section.navLabel}
                      </span>
                      <span
                        className={`absolute inset-0 transition-transform duration-300 ${
                          hoveredSection === section.id ? "translate-y-0" : "translate-y-full"
                        }`}
                      >
                        {section.navFullLabel}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex-1 min-w-0 space-y-16">
              {caseStudySections.map((section, index) => (
                <ContentSectionRenderer key={index} section={section} project={project} />
              ))}
              {otherSections?.map((section, index) => (
                <ContentSectionRenderer key={`other-${index}`} section={section} project={project} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-[1400px] mx-auto space-y-16">
          {project.content
            .filter((section) => section.type !== "hero")
            .map((section, index) => (
              <ContentSectionRenderer key={index} section={section} project={project} />
            ))}
        </div>
      )}
    </div>
  )
}

function ContentSectionRenderer({ section, project }: { section: ContentSection; project?: Project }) {
  switch (section.type) {
    case "hero":
      return <HeroSection section={section} />
    case "case-study-section":
      return <CaseStudySection section={section} project={project} />
    case "spotlight":
      return <SpotlightSection section={section} />
    case "comparison":
      return <ComparisonSection section={section} />
    case "text":
      return <TextSection section={section} />
    case "text-with-sidebar":
      return <TextWithSidebarSection section={section} />
    case "image":
      return <ImageSection section={section} />
    case "image-grid":
      return <ImageGridSection section={section} />
    case "two-column-text-image":
      return <TwoColumnTextImageSection section={section} />
    case "metrics":
      return <MetricsSection section={section} />
    case "grid-features":
      return <GridFeaturesSection section={section} />
    default:
      return null
  }
}

function HeroSection({ section }: { section: Extract<ContentSection, { type: "hero" }> }) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div className="space-y-6">
        <div className="space-y-2">
          {section.subtitle && (
            <span className="text-sm text-muted-foreground uppercase tracking-wider">{section.subtitle}</span>
          )}
          <h1 className="text-4xl lg:text-5xl font-light text-foreground">{section.title}</h1>
          <p className="text-lg text-muted-foreground">{section.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {section.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>{section.team}</span>
          <span>•</span>
          <span>{section.timeline}</span>
          <span>•</span>
          <span>{section.year}</span>
        </div>
      </div>

      <div className="relative aspect-square bg-muted/20 rounded-lg overflow-hidden max-w-[100%]">
        {/* <div className="relative w-full bg-muted/20 rounded-lg overflow-hidden"> */}
        {section.modelPath ? (
          <Project3DModel modelPath={section.modelPath} className="w-full h-full" />
        ) : section.image ? (
          <Image
            src={section.image || "/placeholder.svg"}
            alt={section.title}
            // fill
            width={800}
            height={800}
            className="object-contain w-full h-auto"
          />
        ) : null}
      </div>
    </section>
  )
}

function TextSection({ section }: { section: Extract<ContentSection, { type: "text" }> }) {
  const content = Array.isArray(section.content) ? section.content : [section.content]
  const isTwoColumn = section.layout === "two-column"

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-light text-foreground">{section.heading}</h2>
      <div className={isTwoColumn ? "grid grid-cols-1 lg:grid-cols-2 gap-8" : "space-y-4"}>
        {content.map((paragraph, index) => (
          <p key={index} className="text-lg text-muted-foreground leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}

function TextWithSidebarSection({ section }: { section: Extract<ContentSection, { type: "text-with-sidebar" }> }) {
  const content = Array.isArray(section.content) ? section.content : [section.content]

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-light text-foreground">{section.heading}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {content.map((paragraph, index) => (
            <p key={index} className="text-lg text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="bg-muted/20 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-foreground mb-4">{section.sidebar.title}</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {section.sidebar.items.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function ImageSection({ section }: { section: Extract<ContentSection, { type: "image" }> }) {
  return (
    <section className="space-y-4">
      <div className="relative w-full bg-muted/20 rounded-lg overflow-hidden">
        <Image
          src={section.src || "/placeholder.svg"}
          alt={section.alt}
          width={1200}
          height={800}
          className="object-contain w-full h-auto"
        />
      </div>
      {section.caption && <p className="text-sm text-muted-foreground text-center">{section.caption}</p>}
    </section>
  )
}

function ImageGridSection({ section }: { section: Extract<ContentSection, { type: "image-grid" }> }) {
  const columns = section.columns || 2
  const gridClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }[columns]

  return (
    <section className="space-y-8">
      {section.heading && <h2 className="text-3xl font-light text-foreground">{section.heading}</h2>}
      <div className={`grid ${gridClass} gap-6`}>
        {section.images.map((image, index) => (
          <div key={index} className="space-y-2">
            <div className="relative w-full bg-muted/20 rounded-lg overflow-hidden">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={600}
                height={450}
                className="object-contain w-full h-auto"
              />
            </div>
            {image.caption && <p className="text-sm text-muted-foreground">{image.caption}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

function TwoColumnTextImageSection({
  section,
}: {
  section: Extract<ContentSection, { type: "two-column-text-image" }>
}) {
  const content = Array.isArray(section.content) ? section.content : [section.content]
  const imageOnLeft = section.imagePosition === "left"

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-light text-foreground">{section.heading}</h2>
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${imageOnLeft ? "lg:flex-row-reverse" : ""}`}>
        <div className={`space-y-4 ${imageOnLeft ? "lg:order-2" : ""}`}>
          {content.map((paragraph, index) => (
            <p key={index} className="text-lg text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        <div className={`relative w-full bg-muted/20 rounded-lg overflow-hidden ${imageOnLeft ? "lg:order-1" : ""}`}>
          <Image
            src={section.image.src || "/placeholder.svg"}
            alt={section.image.alt}
            width={800}
            height={600}
            className="object-contain w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

function MetricsSection({ section }: { section: Extract<ContentSection, { type: "metrics" }> }) {
  const hasBackground = section.background !== false

  return (
    <section className={hasBackground ? "bg-muted/20 p-8 lg:p-12 rounded-lg" : ""}>
      {section.heading && <h2 className="text-3xl font-light text-foreground mb-8">{section.heading}</h2>}
      <div className={`grid grid-cols-1 md:grid-cols-${Math.min(section.metrics.length, 3)} gap-8`}>
        {section.metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-light text-primary mb-2">{metric.value}</div>
            <div className="text-sm text-muted-foreground">{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function GridFeaturesSection({ section }: { section: Extract<ContentSection, { type: "grid-features" }> }) {
  const columns = section.columns || 2
  const gridClass = columns === 3 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-2"

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-light text-foreground">{section.heading}</h2>
      <div className={`grid ${gridClass} gap-8`}>
        {section.features.map((feature, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-xl font-medium text-foreground">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
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
  const hasBlocks = section.blocks && section.blocks.length > 0
  const isInteriorGallery = project?.category === "interior" && section.id === "gallery"

  if (isInteriorGallery && hasBlocks && section.blocks?.[0]?.images) {
    return (
      <section id={section.id} className="scroll-mt-24 space-y-8">
        <h2 className="text-3xl font-light text-foreground">{section.heading}</h2>
        {section.blocks[0].content && (
          <div className="space-y-4">
            {(Array.isArray(section.blocks[0].content) ? section.blocks[0].content : [section.blocks[0].content]).map(
              (paragraph, index) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ),
            )}
          </div>
        )}
        <InteriorGallery images={section.blocks[0].images} />
      </section>
    )
  }

  if (!hasBlocks) {
    const content = Array.isArray(section.content) ? section.content : section.content ? [section.content] : []
    const imagePosition = section.image?.position || "below"
    const hasImage = !!section.image
    const hasModel = !!section.modelPath
    const hasFigma = !!section.figmaUrl

    return (
      <section id={section.id} className="scroll-mt-24 space-y-8">
        <h2 className="text-3xl font-light text-foreground">{section.heading}</h2>

        {imagePosition === "left" && (hasImage || hasModel) && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="relative w-full bg-muted/20 rounded-lg overflow-hidden">
              {hasModel && section.modelPath ? (
                <Project3DModel modelPath={section.modelPath} className="w-full h-full" />
              ) : section.image ? (
                <Image
                  src={section.image.src || "/placeholder.svg"}
                  alt={section.image.alt}
                  width={800}
                  height={600}
                  className="object-contain w-full h-auto"
                />
              ) : null}
            </div>
            <div className="space-y-4">
              {content.map((paragraph, index) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}

        {imagePosition === "right" && (hasImage || hasModel) && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              {content.map((paragraph, index) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="relative w-full bg-muted/20 rounded-lg overflow-hidden">
              {hasModel && section.modelPath ? (
                <Project3DModel modelPath={section.modelPath} className="w-full h-full" />
              ) : section.image ? (
                <Image
                  src={section.image.src || "/placeholder.svg"}
                  alt={section.image.alt}
                  width={800}
                  height={600}
                  className="object-contain w-full h-auto"
                />
              ) : null}
            </div>
          </div>
        )}

        {(!hasImage && !hasModel) || imagePosition === "below" ? (
          <>
            <div className="space-y-4">
              {content.map((paragraph, index) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            {hasFigma && section.figmaUrl && (
              <div className="relative w-full aspect-[16/10] bg-muted/20 rounded-lg overflow-hidden border border-border">
                <iframe src={section.figmaUrl} className="w-full h-full" allowFullScreen title="Figma Prototype" />
              </div>
            )}
            {(hasImage || hasModel) && !hasFigma && (
              <div className="relative w-full bg-muted/20 rounded-lg overflow-hidden">
                {hasModel && section.modelPath ? (
                  <Project3DModel modelPath={section.modelPath} className="w-full h-full" />
                ) : section.image ? (
                  <Image
                    src={section.image.src || "/placeholder.svg"}
                    alt={section.image.alt}
                    width={1200}
                    height={800}
                    className="object-contain w-full h-auto"
                  />
                ) : null}
              </div>
            )}
            {hasImage && section.image?.caption && (
              <p className="text-sm text-muted-foreground text-center">{section.image.caption}</p>
            )}
          </>
        ) : null}
      </section>
    )
  }

  return (
    <section id={section.id} className="scroll-mt-24 space-y-8">
      <h2 className="text-3xl font-light text-foreground">{section.heading}</h2>

      {section.blocks?.map((block, blockIndex) => {
        const content = Array.isArray(block.content) ? block.content : block.content ? [block.content] : []
        const subheadings = block.subheading || []
        const imagePosition = block.image?.position || "below"
        const hasImage = !!block.image
        const hasModel = !!block.modelPath
        const hasFigma = !!block.figmaUrl
        const hasContent = content.length > 0
        const hasMultipleImages = !!block.images && block.images.length > 0
        const imageLayout = block.imageLayout || "grid-2"

        return (
          <div key={blockIndex} className="space-y-3">
            {subheadings.length > 0 && (
              <div className="space-y-3">
                {subheadings.map((subheading, index) => (
                  <h3 key={index} className="text-xl font-medium text-foreground">
                    {subheading}
                  </h3>
                ))}
              </div>
            )}

            {hasMultipleImages && (
              <>
                {hasContent && (
                  <div className="space-y-3">
                    {content.map((paragraph, index) => (
                      <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
                <div
                  className={`grid gap-6 ${
                    imageLayout === "grid-2"
                      ? "grid-cols-1 md:grid-cols-2"
                      : imageLayout === "grid-3"
                        ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                        : "grid-cols-1"
                  }`}
                >
                  {block.images?.map((img, imgIndex) => (
                    <div key={imgIndex} className="space-y-2">
                      <div className="relative w-full bg-muted/20 rounded-lg overflow-hidden">
                        <Image
                          src={img.src || "/placeholder.svg"}
                          alt={img.alt}
                          width={600}
                          height={450}
                          className="object-contain w-full h-auto"
                        />
                      </div>
                      {img.caption && <p className="text-sm text-muted-foreground text-center">{img.caption}</p>}
                    </div>
                  ))}
                </div>
              </>
            )}

            {!hasMultipleImages && imagePosition === "left" && (hasImage || hasModel) && hasContent && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="relative w-full bg-muted/20 rounded-lg overflow-hidden">
                  {hasModel && block.modelPath ? (
                    <Project3DModel modelPath={block.modelPath} className="w-full h-full" />
                  ) : block.image ? (
                    <Image
                      src={block.image.src || "/placeholder.svg"}
                      alt={block.image.alt}
                      width={800}
                      height={600}
                      className="object-contain w-full h-auto"
                    />
                  ) : null}
                </div>
                <div className="space-y-4">
                  {content.map((paragraph, index) => (
                    <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {!hasMultipleImages && imagePosition === "right" && (hasImage || hasModel) && hasContent && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-4">
                  {content.map((paragraph, index) => (
                    <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="relative w-full bg-muted/20 rounded-lg overflow-hidden">
                  {hasModel && block.modelPath ? (
                    <Project3DModel modelPath={block.modelPath} className="w-full h-full" />
                  ) : block.image ? (
                    <Image
                      src={block.image.src || "/placeholder.svg"}
                      alt={block.image.alt}
                      width={800}
                      height={600}
                      className="object-contain w-full h-auto"
                    />
                  ) : null}
                </div>
              </div>
            )}

            {!hasMultipleImages && (imagePosition === "below" || !hasContent || (!hasImage && !hasModel)) && (
              <>
                {hasContent && (
                  <div className="space-y-4">
                    {content.map((paragraph, index) => (
                      <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {hasFigma && block.figmaUrl && (
                  <div className="relative w-full aspect-[16/10] bg-muted/20 rounded-lg overflow-hidden border border-border">
                    <iframe src={block.figmaUrl} className="w-full h-full" allowFullScreen title="Figma Prototype" />
                  </div>
                )}

                {(hasImage || hasModel) && !hasFigma && (
                  <div className="relative w-full bg-muted/20 rounded-lg overflow-hidden">
                    {hasModel && block.modelPath ? (
                      <Project3DModel modelPath={block.modelPath} className="w-full h-full" />
                    ) : block.image ? (
                      <Image
                        src={block.image.src || "/placeholder.svg"}
                        alt={block.image.alt}
                        width={1200}
                        height={800}
                        className="object-contain w-full h-auto"
                      />
                    ) : null}
                  </div>
                )}

                {hasImage && block.image?.caption && (
                  <p className="text-sm text-muted-foreground text-center">{block.image.caption}</p>
                )}
              </>
            )}
          </div>
        )
      })}
    </section>
  )
}

function SpotlightSection({ section }: { section: Extract<ContentSection, { type: "spotlight" }> }) {
  return (
    <section id={section.id} className="scroll-mt-24 space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-light text-foreground">{section.heading}</h2>
        {section.description && <p className="text-lg text-muted-foreground leading-relaxed">{section.description}</p>}
      </div>

      {section.image && (
        <div className="relative w-full bg-muted/20 rounded-lg overflow-hidden border border-border/50">
          <Image
            src={section.image || "/placeholder.svg"}
            alt="Award certificate"
            width={1200}
            height={800}
            className="object-contain w-full h-auto"
          />
        </div>
      )}
    </section>
  )
}

function ComparisonSection({ section }: { section: Extract<ContentSection, { type: "comparison" }> }) {
  return (
    <section id={section.id} className="scroll-mt-24">
      <InteriorComparison images={section.images} heading={section.heading} description={section.description} />
    </section>
  )
}
