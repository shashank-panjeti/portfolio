import { ParticleMorphAnimation } from "@/components/particle-morph-animation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CopyEmailButton } from "@/components/email-copy"

export default function ContactPage() {
  const year = new Date().getFullYear()

  return (
    <div className="min-h-screen py-12 sm:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none">
        <ParticleMorphAnimation />
      </div>

      {/* Page content (same pattern as ProjectsPage) */}
      <div className="container lg:grid lg:grid-cols-2 mx-auto">
        <div></div>
        <div className=" mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-balance mb-4 sm:mb-6">
                Let&apos;s Create Something
                <span className="text-primary block">Amazing Together</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Ready to bring your vision to life? I&apos;d love to hear about your project and explore how we can
                collaborate.
              </p>

              <div className="flex gap-8 mt-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/shashankpanjeti"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghostoutline" size="sm">
                    LinkedIn
                  </Button>
                </a>

                <div className="flex gap-1 items-center">
                  mailto:
                  <CopyEmailButton />
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="grid gap-8 sm:gap-12">
              <Card className="backdrop-blur-sm bg-background/60 border-border/50">
                <CardContent className="p-8">
                  <div className="text-center space-y-4 sm:space-y-6">
                    <h3 className="text-xl font-semibold mb-4">Beyond Work</h3>
                    <p className="text-muted-foreground mb-3">
                      When I&apos;m not designing or coding, you&apos;ll find me exploring new cities with my camera,
                      experimenting with 3D art, or reading about the latest developments in sustainable architecture. I
                      believe that diverse experiences and curiosity fuel creativity.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      I&apos;m always excited to collaborate on projects that challenge conventional thinking and create
                      positive impact. Let&apos;s build something amazing together.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-background/60 border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-2">Let&apos;s Connect</h3>
                  <p className="text-muted-foreground">
                    Follow my work and connect with me on social media for the latest updates and behind-the-scenes
                    content.
                  </p>
                  {/* social buttons can go here later if you re-enable them */}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}