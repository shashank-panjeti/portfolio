import Image from "next/image"
import { SkillBadge } from "@/components/skill-badge"
import { DownloadResume } from "@/components/download-resume"

const skills = {
  design: [
    { name: "UI/UX Design", level: "expert" as const },
    { name: "Figma", level: "expert" as const },
    { name: "Adobe Creative Suite", level: "advanced" as const },
    { name: "Prototyping", level: "advanced" as const },
    { name: "Design Systems", level: "expert" as const },
    { name: "User Research", level: "advanced" as const },
  ],
  development: [
    { name: "React", level: "advanced" as const },
    { name: "TypeScript", level: "advanced" as const },
    { name: "Next.js", level: "advanced" as const },
    { name: "Tailwind CSS", level: "expert" as const },
    { name: "Three.js", level: "intermediate" as const },
    { name: "Node.js", level: "intermediate" as const },
  ],
  architecture: [
    { name: "AutoCAD", level: "expert" as const },
    { name: "SketchUp", level: "advanced" as const },
    { name: "Revit", level: "advanced" as const },
    { name: "Rhino", level: "intermediate" as const },
    { name: "V-Ray", level: "advanced" as const },
  ],
  creative: [
    { name: "Photography", level: "advanced" as const },
    { name: "Blender", level: "intermediate" as const },
    { name: "Cinema 4D", level: "intermediate" as const },
    { name: "After Effects", level: "advanced" as const },
  ],
}

const experience = [
  {
    period: "2024 — Present",
    role: "Senior Designer & Developer",
    company: "Freelance",
    description:
      "Working with startups and established companies to create digital products that blend beautiful design with robust engineering. Specializing in design systems, user experience, and front-end development.",
    skills: ["React", "TypeScript", "Figma", "Design Systems"],
  },
  {
    period: "2022 — 2024",
    role: "Lead Product Designer",
    company: "Tech Startup",
    description:
      "Led design for a B2B SaaS platform, growing the user base from 1K to 50K users. Built and maintained the design system, conducted user research, and collaborated closely with engineering teams.",
    skills: ["Product Design", "User Research", "Design Systems", "Leadership"],
  },
  {
    period: "2020 — 2022",
    role: "UX/UI Designer",
    company: "Digital Agency",
    description:
      "Designed digital experiences for clients across various industries including healthcare, fintech, and e-commerce. Worked on both web and mobile applications with a focus on accessibility and performance.",
    skills: ["UI/UX Design", "Mobile Design", "Accessibility", "Client Management"],
  },
]

const education = [
  {
    period: "2016 — 2020",
    degree: "Bachelor of Architecture",
    school: "University of Design",
    description:
      "Focused on sustainable design, spatial planning, and digital fabrication. Graduated Magna Cum Laude with a thesis on adaptive reuse in urban environments.",
  },
  {
    period: "2021",
    degree: "UX Design Certificate",
    school: "Google UX Design Professional Certificate",
    description:
      "Comprehensive program covering user research, wireframing, prototyping, and usability testing methodologies.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <section className="mb-16 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground text-balance">About Me</h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
                  I'm a multidisciplinary designer and developer passionate about creating meaningful digital
                  experiences. With a background in architecture and a love for technology, I bring a unique perspective
                  to every project.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
                  My work spans across UX/UI design, architectural visualization, interior design, 3D modeling, and
                  photography. I believe in the power of good design to solve complex problems and create positive
                  impact.
                </p>
              </div>
              <DownloadResume />
            </div>

            {/* Profile Image or 3D Model */}
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square bg-muted/20 rounded-lg overflow-hidden order-1 lg:order-2">
              <Image src="/professional-portrait.png" alt="Professional portrait" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Skills & Expertise */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-light text-foreground mb-8 sm:mb-12">Skills & Expertise</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-foreground mb-3 sm:mb-4">Design</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.design.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-medium text-foreground mb-3 sm:mb-4">Development</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.development.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-foreground mb-3 sm:mb-4">Architecture & 3D</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.architecture.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-medium text-foreground mb-3 sm:mb-4">Creative</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.creative.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-light text-foreground mb-8 sm:mb-12">Experience</h2>

          <div className="space-y-8 sm:space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="border-l-2 border-border pl-4 sm:pl-6 relative">
                <div className="absolute -left-2 top-0 w-3 h-3 bg-primary rounded-full"></div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                    <h3 className="text-lg sm:text-xl font-medium text-foreground">{job.role}</h3>
                    <span className="text-sm text-muted-foreground">{job.period}</span>
                  </div>
                  <p className="text-base sm:text-lg text-primary font-medium">{job.company}</p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{job.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {job.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-light text-foreground mb-8 sm:mb-12">Education</h2>

          <div className="space-y-6 sm:space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-border pl-4 sm:pl-6 relative">
                <div className="absolute -left-2 top-0 w-3 h-3 bg-accent rounded-full"></div>
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                    <h3 className="text-lg sm:text-xl font-medium text-foreground">{edu.degree}</h3>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="text-base sm:text-lg text-primary font-medium">{edu.school}</p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Personal Note */}
        <section className="bg-muted/20 rounded-lg p-6 sm:p-8 lg:p-12">
          <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-light text-foreground">Beyond Work</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
              When I'm not designing or coding, you'll find me exploring new cities with my camera, experimenting with
              3D art, or reading about the latest developments in sustainable architecture. I believe that diverse
              experiences and curiosity fuel creativity.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
              I'm always excited to collaborate on projects that challenge conventional thinking and create positive
              impact. Let's build something amazing together.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
