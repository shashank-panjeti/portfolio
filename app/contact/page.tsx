import { ParticleMorphAnimation } from "@/components/particle-morph-animation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const year = new Date().getFullYear()
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-auto">
        <ParticleMorphAnimation />
      </div>

      <div className="flex flex-col mt-60 sm:mt-0 lg:flex-row min-h-screen relative">
        {/* Right Half: Contact Content (Desktop/Tablet) */}
        {/* Bottom: Content (Mobile) */}
        <div className="relative w-full lg:w-1/2 lg:ml-[50%] z-10 py-12 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-4 sm:mb-6">
                Let's Create Something
                <span className="text-primary block">Amazing Together</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Ready to bring your vision to life? I'd love to hear about your project and explore how we can
                collaborate.
              </p>
            </div>

            <div className="grid gap-8 sm:gap-12 max-w-3xl mx-auto">
              {/* Contact Form */}
              {/* <Card">
              </Card> */}

              {/* Contact Information */}
              <Card className="backdrop-blur-sm bg-background/60 border-border/50">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">shashankpanjeti@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">+1 (672) 338-2305</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">Greater Vancouver, BC</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-background/60 border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
                  <p className="text-muted-foreground mb-6">
                    Follow my work and connect with me on social media for the latest updates and behind-the-scenes
                    content.
                  </p>
                  <div className="flex gap-4">
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
                </CardContent>
              </Card>

              {/* Credit line */}
              <Card className="backdrop-blur-sm bg-background/60 border-border/50">
                <CardContent className="">
                  <p className="text-xs text-muted-foreground">
                    Designed and Developed by Shashank Panjeti © {year}. All Rights Reserved.
                  </p>
                </CardContent>
              </Card>

              {/* <Card className="backdrop-blur-sm bg-background/90 border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Response Time</h3>
                  <p className="text-muted-foreground">
                    I typically respond to all inquiries within 24 hours. For urgent projects, feel free to call
                    directly.
                  </p>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}









{/* Contact Form */}
  {/* <Card className="backdrop-blur-sm bg-background/90 border-border/50">
    <CardContent className="p-6 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Send a Message</h2>
      <form className="space-y-4 sm:space-y-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <Input id="name" placeholder="Your name" className="bg-background/50" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input id="email" type="email" placeholder="your@email.com" className="bg-background/50" />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject
          </label>
          <Input id="subject" placeholder="Project inquiry" className="bg-background/50" />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Tell me about your project..."
            rows={6}
            className="bg-background/50"
          />
        </div>

        <Button type="submit" className="w-full" size="lg">
          <Send className="w-4 h-4 mr-2" />
          Send Message
        </Button>
      </form>
    </CardContent>
  </Card> */}