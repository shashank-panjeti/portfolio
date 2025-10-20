import Image from "next/image"
import { SkillBadge } from "@/components/skill-badge"
import { DownloadResume } from "@/components/download-resume"

const skills = {
  designSkills: [
    { name: "UI/UX Design", level: "expert" as const },
    { name: "Design Systems", level: "expert" as const },
    { name: "User Research", level: "advanced" as const },
    { name: "Prototyping", level: "expert" as const },
  ],
  designTools: [
    { name: "Figma", level: "expert" as const },
    { name: "Adobe Photoshop", level: "advanced" as const },
    { name: "Adobe Illustrator", level: "advanced" as const },
    { name: "After Effects", level: "advanced" as const },
  ],
  architecture: [
    { name: "AutoCAD", level: "expert" as const },
    { name: "Blender", level: "intermediate" as const },
    { name: "Revit", level: "advanced" as const },
    { name: "Rhino", level: "intermediate" as const },
    { name: "SketchUp", level: "expert" as const },
    { name: "V-Ray", level: "advanced" as const },
  ],
  creative: [
    { name: "Photography", level: "advanced" as const },
    { name: "Architecture Scale Modelling", level: "expert" as const },
    { name: "Sketching", level: "intermediate" as const },
  ],
}

const experience = [
  {
    period: "Sept 2024 - Present",
    role: "Senior Designer & Developer",
    company: "Freelance",
    description:[
      "•  Evaluated student projects in 3D design, UI/UX design, and prototyping with attention to technical accuracy and design feasibility.",
      "•  Provided feedback on workflow, design clarity, and construction logic, improving students’ practical design understanding.",
      "•  Assisted instructors with grading assignments, mid-terms, and final exams.",
    ],
    // skills: ["React", "TypeScript", "Figma", "Design Systems"],
  },
  {
    period: "Mar 2021 - Present",
    role: "Designer & Artist",
    company: "Freelance",
    description:[
      "•  Created graphic design works for multiple clients.",
      "•  Provided high-quality rendering services to clients, ensuring market-ready products.",
      "•  Delivered creative solutions tailored to meet specific client needs, including animations.",
      "•  Utilized Photoshop for design and paint details for various projects.",
    ],
    // skills: ["Product Design", "User Research", "Design Systems", "Leadership"],
  },
  {
    period: "Sept 2022 - Jun 2023",
    role: "Junior Architect",
    company: "Stapit Architects, Hyderabad, India",
    description:[
      "•  Assisted in preparing design and construction drawings in AutoCAD for residential, commercial, and institutional projects.",
      "•  Reviewed building codes and compliance requirements to ensure projects adhered to local regulations.",
      "•  Supported the preparation of tender documents, specifications, and contract drawings for bidding processes.",
      "•  Prepared cost estimates for materials and labour in collaboration with senior architects.",
      "•  Conducted site visits to review construction progress and resolve design/technical issues.",
      "•  Coordinated with engineers, contractors, and consultants to ensure adherence to project timelines and specifications.",
    ],
    // skills: ["UI/UX Design", "Mobile Design", "Accessibility", "Client Management"],
  },
  {
    period: "Mar 2022 - Aug 2022",
    role: "Intern Architect",
    company: "Stapit Architects, Hyderabad, India",
    description:[
      "•  Assisted senior architects in the development of architectural plans and visual representations for various projects.",
      "•  Contributed to the design and presentation of client-facing materials.",      "•  Gained practical experience in applying design principles to real-world projects, including reading and understanding architectural plans and layouts.",
      "•  Prepared architectural and environmental models using SketchUp and AutoCAD",
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
                  {skills.designSkills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-medium text-foreground mb-3 sm:mb-4">Design Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.designTools.map((skill) => (
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
                  <div className="space-y-0">
                    {job.description.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                  {/* Skills under Experience */}
                  {/* <div className="flex flex-wrap gap-2 pt-2">
                    {job.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                        {skill}
                      </span>
                    ))}
                  </div> */}
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
