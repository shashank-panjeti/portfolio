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
      <section className="min-h-150 flex items-center justify-center px-4  sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-60">
          {/* <div className="absolute top-[2%] left-[10%] sm:top-[2%] sm:left-[10%] opacity-30 w-full max-w-[300px] sm:max-w-md lg:max-w-3xl aspect-square pointer-event-none grayscale "> */}
          <div className="absolute top-[4%] align-center sm:top-[0%] sm:left-[8%] opacity-30 w-full max-w-[290px] sm:max-w-[420px] lg:max-w-[600px] aspect-square pointer-event-none grayscale ">
            <Orb hue={270} hoverIntensity={1.8} rotateOnHover={true} forceHoverState={false} />
          </div>
        </div>

        {/* <div className="container top-4 sm:top-0 mx-auto text-center space-y-4 sm:space-y-6 lg:space-y-8 relative z-10"> */}
        <div className="container top-4 sm:top-0 mx-auto text-center relative z-10">
          {/* <div className="space-y-1 sm:space-y-1"> */}
          <div className="pb-12">
            {/* <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-muted-foreground uppercase tracking-wider">Hi I'm</p> */}
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-muted-foreground uppercase tracking-wider">Hi I'm</p>
            {/* <h1 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-foreground text-balance"> */}
            <div className="relative flex flex-col justify-between
            max-h-9 h-9
            sm:max-h-12 sm:h-12
            md:max-h-15 md:h-15
            lg:max-h-18 lg:h-18
            xl:max-h-24 xl:h-24">
              <h1 className="absolute inset-0 flex items-center justify-center 
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
              font-light text-foreground 
              peer transition-opacity duration-500 sm:hover:opacity-0">
                SHASHANK PANJETI
              </h1>
              <h1 className="telugu
              absolute inset-0 flex justify-center
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
              top-[19%]
              font-light text-foreground opacity-0 
              transition-opacity duration-500 sm:peer-hover:opacity-100">
                శశాంక్ పంజేటి
              </h1>
            </div>
            <JumbleText />
          </div>
          <div className="max-w-[75%] mx-auto text-center space-y-4 sm:space-y-6 lg:space-y-8 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6">
            <h3 className="text-left text-xl sm:text-2xl lg:text-3xl font-light text-foreground grid col-span-1">About</h3>
            <p className="text-left text-md sm:text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty grid sm:col-span-3 md:col-span-5">
              I'm passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies in design, creating experiences that not only look great but are meticulously built for performance and usability.
            </p>
          </div>
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
      {/*<section className="py-12 sm:py-16 lg:py-20 bg-muted/20 relative z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 lg:space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground">About</h2>
            <p className="text-base sm:text-md lg:text-lg text-muted-foreground leading-relaxed text-pretty">
              I'm passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies in design, creating experiences that not only look great but are meticulously built for performance and usability.
            </p>
             <p className="text-base sm:text-md lg:text-lg text-muted-foreground leading-relaxed text-pretty">
              Currently, I work across various settings  from advertising agencies and large corporations to start-ups
              and small digital product studios. I also released a comprehensive video course a few years ago, guiding
              learners through building modern web applications.
            </p> 
            <Button asChild variant="outline" className="mt-4 sm:mt-6 lg:mt-8 bg-transparent">
              <Link href="/about">More About Me</Link>
            </Button>
          </div>
        </div>
      </section>*/}

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
        </div>
      </section>
    </div>
  )
}
