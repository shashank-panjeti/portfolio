import Image from "next/image"
import type { Project } from "@/lib/project-data"

interface PhotographyProjectProps {
  project: Project
}

export function PhotographyProject({ project }: PhotographyProjectProps) {
  const galleryImages = [
    { src: project.image, alt: `${project.title} - Image 1` },
    { src: "/natural-light-portrait.png", alt: `${project.title} - Image 2` },
    { src: "/urban-street-scene.png", alt: `${project.title} - Image 3` },
    { src: "/minimalist-product-shot.png", alt: `${project.title} - Image 4` },
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <div className="space-y-4">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">Photography Series</span>
          <h1 className="text-4xl lg:text-5xl font-light text-foreground">{project.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Image */}
      <section>
        <div className="relative aspect-[3/2] bg-muted/20 rounded-lg overflow-hidden">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        </div>
      </section>

      {/* Project Description */}
      <section className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-light text-foreground">About This Series</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          This photography series explores the interplay between natural light and human emotion, capturing authentic
          moments that reveal the beauty in everyday life. Each image tells a story of connection, solitude, and the
          quiet poetry found in ordinary moments.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Shot entirely with natural light using minimal equipment, the series emphasizes the importance of timing,
          patience, and understanding the subtle qualities of light throughout the day.
        </p>
      </section>

      {/* Technical Details */}
      <section className="bg-muted/20 p-8 lg:p-12 rounded-lg">
        <h2 className="text-2xl font-light text-foreground mb-8 text-center">Technical Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-lg font-medium text-foreground mb-2">Equipment</h3>
            <p className="text-sm text-muted-foreground">Canon EOS R5</p>
            <p className="text-sm text-muted-foreground">85mm f/1.4 lens</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-medium text-foreground mb-2">Technique</h3>
            <p className="text-sm text-muted-foreground">Natural light only</p>
            <p className="text-sm text-muted-foreground">Minimal post-processing</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-medium text-foreground mb-2">Year</h3>
            <p className="text-sm text-muted-foreground">{project.year}</p>
            <p className="text-sm text-muted-foreground">12 images total</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="space-y-8">
        <h2 className="text-3xl font-light text-foreground text-center">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative aspect-[4/5] bg-muted/20 rounded-lg overflow-hidden">
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
