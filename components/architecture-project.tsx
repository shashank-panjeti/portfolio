import Image from "next/image"
import { Project3DModel } from "./project-3d-model"
import type { Project } from "@/lib/project-data"

interface ArchitectureProjectProps {
  project: Project
}

export function ArchitectureProject({ project }: ArchitectureProjectProps) {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Architecture Project</span>
            <h1 className="text-4xl lg:text-5xl font-light text-foreground">{project.title}</h1>
            <p className="text-lg text-muted-foreground">{project.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Year:</span>
              <div className="font-medium">{project.year}</div>
            </div>
            <div>
              <span className="text-muted-foreground">Type:</span>
              <div className="font-medium">Residential</div>
            </div>
            <div>
              <span className="text-muted-foreground">Area:</span>
              <div className="font-medium">2,400 sq ft</div>
            </div>
            <div>
              <span className="text-muted-foreground">Location:</span>
              <div className="font-medium">California, USA</div>
            </div>
          </div>
        </div>

        <div className="relative aspect-square bg-muted/20 rounded-lg overflow-hidden">
          {project.modelPath ? (
            <Project3DModel modelPath={project.modelPath} className="w-full h-full" />
          ) : (
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          )}
        </div>
      </section>

      {/* Concept */}
      <section className="space-y-8">
        <h2 className="text-3xl font-light text-foreground">Design Concept</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              This modern residence explores the relationship between interior and exterior spaces through strategic use
              of natural light, sustainable materials, and open floor plans that blur the boundaries between inside and
              outside.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The design prioritizes energy efficiency and environmental responsibility while creating comfortable,
              livable spaces that respond to the natural landscape and climate conditions.
            </p>
          </div>
          <div className="bg-muted/20 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-foreground mb-4">Key Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Passive solar design</li>
              <li>• Natural ventilation</li>
              <li>• Sustainable materials</li>
              <li>• Open floor plan</li>
              <li>• Large glazed openings</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Floor Plans */}
      <section className="space-y-8">
        <h2 className="text-3xl font-light text-foreground">Floor Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-foreground">Ground Floor</h3>
            <div className="relative aspect-[4/3] bg-muted/20 rounded-lg">
              <Image src="/ground-floor-plan.png" alt="Ground floor plan" fill className="object-contain p-4" />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-foreground">Second Floor</h3>
            <div className="relative aspect-[4/3] bg-muted/20 rounded-lg">
              <Image src="/second-floor-plan.png" alt="Second floor plan" fill className="object-contain p-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Sustainability */}
      <section className="space-y-8">
        <h2 className="text-3xl font-light text-foreground">Materials & Sustainability</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Exterior</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Reclaimed wood siding</li>
              <li>• Low-E glazing</li>
              <li>• Metal roofing</li>
              <li>• Natural stone accents</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Interior</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Bamboo flooring</li>
              <li>• Recycled steel beams</li>
              <li>• Natural plaster walls</li>
              <li>• Cork insulation</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Systems</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Solar panel array</li>
              <li>• Rainwater collection</li>
              <li>• Geothermal heating</li>
              <li>• Smart home automation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="space-y-8">
        <h2 className="text-3xl font-light text-foreground">Project Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-[4/3] bg-muted/20 rounded-lg">
            <Image
              src={project.image || "/placeholder.svg"}
              alt="Exterior view"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-[4/3] bg-muted/20 rounded-lg">
            <Image
              src="/interior-living-space.jpg"
              alt="Interior living space"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
