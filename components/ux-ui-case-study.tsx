import Image from "next/image"
import { Project3DModel } from "./project-3d-model"
import type { Project } from "@/lib/project-data"

interface UXUICaseStudyProps {
  project: Project
}

export function UXUICaseStudy({ project }: UXUICaseStudyProps) {
  return (
    <div className="space-y-16">
      {/* Hero Section with 3D Model */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm text-muted-foreground uppercase tracking-wider">UX/UI Case Study</span>
            <h1 className="text-4xl lg:text-5xl font-light text-foreground">{project.title}</h1>
            <p className="text-lg text-muted-foreground">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="text-sm text-muted-foreground">Year: {project.year}</div>
        </div>

        <div className="relative aspect-square bg-muted/20 rounded-lg overflow-hidden">
          {project.modelPath ? (
            <Project3DModel modelPath={project.modelPath} className="w-full h-full" />
          ) : (
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          )}
        </div>
      </section>

      {/* Problem Statement */}
      <section className="space-y-8">
        <h2 className="text-3xl font-light text-foreground">The Challenge</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The existing mobile application suffered from poor user engagement and high abandonment rates. Users
              struggled to navigate the complex interface and complete essential tasks efficiently.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our goal was to redesign the entire user experience, focusing on simplicity, accessibility, and user
              delight while maintaining all core functionality.
            </p>
          </div>
          <div className="bg-muted/20 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-foreground mb-4">Key Metrics</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• 65% user drop-off rate</li>
              <li>• 2.1/5 app store rating</li>
              <li>• 45% task completion rate</li>
              <li>• 8.5s average load time</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Research & Discovery */}
      <section className="space-y-8">
        <h2 className="text-3xl font-light text-foreground">Research & Discovery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-foreground">User Interviews</h3>
            <p className="text-muted-foreground">
              Conducted 15 in-depth interviews with existing users to understand pain points, motivations, and desired
              outcomes.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-foreground">Competitive Analysis</h3>
            <p className="text-muted-foreground">
              Analyzed 8 competing products to identify industry standards, best practices, and opportunities for
              differentiation.
            </p>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="space-y-8">
        <h2 className="text-3xl font-light text-foreground">Design Process</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-foreground">Wireframing</h3>
              <p className="text-muted-foreground">
                Started with low-fidelity wireframes to establish information architecture and user flow without getting
                distracted by visual design.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-foreground">Prototyping</h3>
              <p className="text-muted-foreground">
                Created interactive prototypes to test key user journeys and validate design decisions before moving to
                high-fidelity designs.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] bg-muted/20 rounded-lg">
            <Image
              src="/wireframe-process.png"
              alt="Design process wireframes"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Final Solution */}
      <section className="space-y-8">
        <h2 className="text-3xl font-light text-foreground">Final Solution</h2>
        <div className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-foreground">Simplified Navigation</h3>
              <p className="text-muted-foreground">
                Redesigned the navigation structure with clear visual hierarchy and intuitive iconography, reducing
                cognitive load and improving task completion rates.
              </p>
            </div>
            <div className="relative aspect-[3/4] bg-muted/20 rounded-lg">
              <Image
                src={project.image || "/placeholder.svg"}
                alt="Final design"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-muted/20 p-8 lg:p-12 rounded-lg">
        <h2 className="text-3xl font-light text-foreground mb-8">Results & Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-light text-primary mb-2">85%</div>
            <div className="text-sm text-muted-foreground">Increase in task completion</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-primary mb-2">4.6/5</div>
            <div className="text-sm text-muted-foreground">New app store rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-primary mb-2">40%</div>
            <div className="text-sm text-muted-foreground">Reduction in support tickets</div>
          </div>
        </div>
      </section>
    </div>
  )
}
