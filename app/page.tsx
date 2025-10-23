import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/project-data"
import JumbleText from "@/components/jumble-text"
import Orb from "@/components/orb"

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured)
  const projectsExceptLast = featuredProjects.slice(0, -1)
  const lastProject = featuredProjects[featuredProjects.length - 1]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-68px)] flex items-center justify-center px-4  sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-60">
          {/* <div className="absolute top-[2%] left-[10%] sm:top-[2%] sm:left-[10%] opacity-30 w-full max-w-[300px] sm:max-w-md lg:max-w-3xl aspect-square pointer-event-none grayscale "> */}
          <div className="absolute top-[15%] align-center sm:top-[2%] sm:left-[10%] opacity-30 w-full max-w-[300px] sm:max-w-md lg:max-w-3xl aspect-square pointer-event-none grayscale ">
            <Orb hue={270} hoverIntensity={1.8} rotateOnHover={true} forceHoverState={false} />
          </div>
        </div>

        <div className="container mx-auto text-center space-y-4 sm:space-y-6 lg:space-y-8 relative z-10">
          <div className="space-y-3 sm:space-y-4">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-muted-foreground uppercase tracking-wider">Hi I'm</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-foreground text-balance">
              SHASHANK PANJETI
            </h1>
            <JumbleText />
            {/* <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              While design is my primary focus, I regularly work with code, believing that understanding the technical
              foundations leads to more thoughtful designs.
            </p> */}
            {/* {featuredProjects[0] && (
              <p className="text-sm text-muted-foreground pt-4">
                Latest: {featuredProjects[0].title} • {featuredProjects[0].timeline}
              </p>
            )} */}
          
          </div>

          {/* <div className="pt-6 sm:pt-8">
            <p className="text-sm text-muted-foreground mb-4">Information</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Button asChild variant="outline" className="w-full sm:w-auto bg-transparent">
                <Link href="/about">About Me</Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto bg-transparent">
                <Link href="/projects">View All Work</Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto bg-transparent">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div> */}
        </div>
      </section>

      {/* Selected Projects Section - Sticky until last project */}
      <section className="relative">
        {/* Sticky container for all projects except the last one */}
        <div className="relative">
          <div className="sticky top-16 z-20 bg-background/80 backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                <h2 className="text-xl sm:text-xl lg:text-2xl font-light text-foreground">Selected work</h2>
                <Link
                  href="/projects"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  View all projects →
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-0 pt-2 sm:pt-4">
            {projectsExceptLast.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Last project outside sticky container */}
        {lastProject && (
          <div className="relative z-30">
            <ProjectCard project={lastProject} />
          </div>
        )}
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/20 relative z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 lg:space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground">About</h2>
            <p className="text-base sm:text-md lg:text-lg text-muted-foreground leading-relaxed text-pretty">
              I'm passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies in design, creating experiences that not only look great but are meticulously built for performance and usability.
            </p>
            {/* <p className="text-base sm:text-md lg:text-lg text-muted-foreground leading-relaxed text-pretty">
              Currently, I work across various settings  from advertising agencies and large corporations to start-ups
              and small digital product studios. I also released a comprehensive video course a few years ago, guiding
              learners through building modern web applications.
            </p> */}
            <Button asChild variant="outline" className="mt-4 sm:mt-6 lg:mt-8 bg-transparent">
              <Link href="/about">More About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6 lg:space-y-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground">Let's work together</h2>
          <p className="text-base sm:text-md lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            If you would like to discuss a project or just say hi, I'm always down to chat.
          </p>
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/contact">Contact</Link>
          </Button>
          <div className="flex gap-4 center justify-center">
            <a 
            href="https://www.linkedin.com/in/shashankpanjeti"
            target="_blank" 
            rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                LinkedIn
              </Button>
            </a>
            {/* <a 
            href="https://www.linkedin.com/in/shashankpanjeti"
            target="_blank" 
            rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                Dribbble
              </Button>
            </a> */}
            <a 
            href="https://www.behance.net/shashankpanjeti"
            target="_blank" 
            rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                Behance
              </Button>
            </a>
            <a 
            href="https://www.instagram.com/shashu_73/"
            target="_blank" 
            rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                Instagram
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
