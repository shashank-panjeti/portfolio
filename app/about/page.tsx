import Image from "next/image"
import { SkillBadge } from "@/components/skill-badge"
import { DownloadResume } from "@/components/download-documents"
import { Button } from "@/components/ui/button"

const skills = {
  designSkills: [
    { name: "UI/UX Design"},
    { name: "Design Systems"},
    { name: "User Research"},
    { name: "Prototyping"},
  ],
  designTools: [
    { name: "Figma"},
    { name: "Adobe Photoshop"},
    { name: "Adobe Illustrator"},
    { name: "After Effects"},
  ],
  architecture: [
    { name: "AutoCAD"},
    { name: "Blender"},
    { name: "Revit"},
    { name: "Rhino"},
    { name: "SketchUp"},
    { name: "V-Ray"},
  ],
  creative: [
    { name: "Photography"},
    { name: "Architecture Scale Modelling"},
    { name: "Sketching"},
  ],
}

const experience = [
  {
    period: "Sept 2024 - Present",
    role: "Product Designer (UX/UI)",
    company: "Pieoneers Software Inc.",
    description:[
      "Designed end-to-end UX flows and high-fidelity Figma prototypes for 3+ client-facing web and mobile applications across healthcare, logistics, and retail - conducting moderated usability testing via Hotjar and UserTesting that improved average task completion rates by 30% and reduced post-launch support tickets by 28%.",
      "Developed and maintained a scalable Figma component library and design system with 120+ WCAG 2.1 AAcompliant components and design tokens, reducing designer-to-developer handoff time by 40% and ensuring visual consistency across all active client engagements.",
      "Analyzed competitive UX landscape and facilitated discovery workshops across 4 engagements, delivering prioritized redesign roadmaps adopted into Agile product backlogs that contributed directly to securing 2 new client contracts.",
      "Implemented pixel-accurate design handoff workflows using Zeplin and Storybook in collaboration with front-end engineers, establishing annotation standards that reduced implementation inconsistencies by 45% and accelerated Agile sprint delivery velocity.",
    ],
    // skills: ["React", "TypeScript", "Figma", "Design Systems"],
  },
  {
    period: "Sept 2022 - Aug 2023",
    role: "UI/UX Designer",
    company: "Zoho Corporation",
    description:[
      "Designed user interfaces and interaction flow for Zoho CRM and Zoho Books serving 80M+ global users - creating wireframes, user flows, and high-fidelity Figma prototypes for new dashboard and reporting features that reduced CRM-related support tickets by 30% post-launch.",
      "Developed persona frameworks and customer journey maps from 50+ stakeholder interviews, aligning product design with real-world SMB and enterprise workflows and reducing feature abandonment rates by 20%.",
      "Implemented responsive, mobile-first design specifications across 5 Zoho product modules using Figma and Adobe XD, improving mobile session duration by 25% and reducing bounce rate by 18% within 3 months of release.",
      "Optimized onboarding UI flows and empty-state patterns for Zoho Books, improving feature discoverability scores by 33% and reducing first-week customer support contact rates by 22%. ",
    ],
    // skills: ["Product Design", "User Research", "Design Systems", "Leadership"],
  },
  {
    period: "Oct 2021 - Aug 2022",
    role: "Intern Architect",
    company: "SEP Architects, Hyderabad, India",
    description:[
      "Led pre-design research - including site analysis, case studies, and material exploration - to deliver user-centered design solutions aligned with client requirements and project context, supporting informed decision-making and reducing design revision cycles by 25% across 5+ residential and commercial projects.",
      "Designed and developed detailed architectural drawings and 3D visual models using AutoCAD, Revit, and SketchUp for 5+ projects, enabling early client visualization that streamlined structured design review processes and cut revision rounds by 25%.",
      "Collaborated with senior architects and civil engineers to translate complex client briefs into buildable design solutions, applying spatial reasoning and systems-thinking methodologies now directly applied to UX information architecture and user flow design.",
      "Developed client-facing presentation decks and structured design documentation for 3 project pitches, improving stakeholder sign-off speed by 30% through clear visual communication and narrative-driven design storytelling.",
    ],
    // skills: ["UI/UX Design", "Mobile Design", "Accessibility", "Client Management"],
  },
]

const education = [
  {
    period: "2023 - 2025",
    degree: "Web and Mobile App Design",
    school: "Langara College",
    description:
      " ",
  },
  {
    period: "2017 - 2022",
    degree: "Bachelor of Architecture",
    school: "Sri Venkateshwara College of Architecture",
    description:
      " ",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen py-8 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground text-balance">About Me</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-x-32 lg:gap-y-4">

          {/* Hero Section */}
          <section className="mt-8 mb-16 sm:mb-20 lg:col-start-1">
            <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-6">
              {/* Profile Image or 3D Model */}
              <div className="relative float-left mb-6 aspect-square w-60 max-w-60 rounded-full overflow-hidden"
              style={{
                shapeOutside: "circle(50%)",
                clipPath: "circle(50%)",
              }}
              >
                <Image src="/professional-portrait.png" alt="Professional portrait" fill className="object-cover" />
              </div>
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
                  I'm SHASHANK PANJETI, a multidisciplinary designer based in Vancouver. I'm passionate about creating meaningful digital experiences. With a background in architecture and a love for technology, I bring a unique perspective to every project.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
                  My work spans across UX/UI design, architectural visualization, interior design, 3D modeling, and photography. I believe in the power of good design to solve complex problems and create positive impact.
                </p>
                <a 
                  href="https://www.linkedin.com/in/shashankpanjeti"
                  target="_blank" 
                  rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      LinkedIn
                    </Button>
                </a>
              </div>
            </div>
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center"> */}
               {/* Profile Image or 3D Model */}
              {/* <div className="relative aspect-square w-60 bg-muted/20 rounded-full overflow-hidden">
                <Image src="/professional-portrait.png" alt="Professional portrait" fill className="object-cover" />
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
                    I'm a multidisciplinary designer based in Vancouver. I'm passionate about creating meaningful digital experiences. With a background in architecture and a love for technology, I bring a unique perspective to every project.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
                    My work spans across UX/UI design, architectural visualization, interior design, 3D modeling, and photography. I believe in the power of good design to solve complex problems and create positive impact.
                  </p>
                </div>
                <div>
                  <DownloadResume />
                </div>
              </div>
             </div> */}
          </section>

          {/* Skills & Expertise */}
          <section className="mb-16 sm:mb-20 lg:col-start-1">
            <h2 className="text-2xl sm:text-3xl font-light text-foreground mb-8 sm:mb-12">Skills & Expertise</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-foreground mb-3 sm:mb-4">Design</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.designSkills.map((skill) => (
                      <SkillBadge key={skill.name} skill={skill.name} />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-foreground mb-3 sm:mb-4">Design Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.designTools.map((skill) => (
                      <SkillBadge key={skill.name} skill={skill.name} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-foreground mb-3 sm:mb-4">Architecture & 3D</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.architecture.map((skill) => (
                      <SkillBadge key={skill.name} skill={skill.name} />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-foreground mb-3 sm:mb-4">Creative</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.creative.map((skill) => (
                      <SkillBadge key={skill.name} skill={skill.name} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-16 sm:mb-20 lg:col-start-2 lg:row-start-1 lg:row-span-3">
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
                    <ul className="list-disc list-outside text-sm sm:text-base text-muted-foreground leading-relaxed pl-5">
                      {job.description.map((line, lineIndex) => (
                        <li key={lineIndex}>{line.replace(/^•\s*/, "")}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-16 sm:mb-20 lg:col-start-1">
            <h2 className="text-2xl sm:text-3xl font-light text-foreground mb-8 sm:mb-12">Education</h2>

            <div className="space-y-6 sm:space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-border pl-4 sm:pl-6 relative">
                  <div className="absolute -left-2 top-0 w-3 h-3 bg-accent rounded-full"></div>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                      <h3 className="text-lg sm:text-xl font-medium text-foreground">{edu.school}</h3>
                      <span className="text-sm text-muted-foreground">{edu.period}</span>
                    </div>
                    <p className="text-base sm:text-lg text-primary font-medium">{edu.degree}</p>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Personal Note */}
        
      </div>
    </div>
  )
}
