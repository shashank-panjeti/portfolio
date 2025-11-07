"use client"

import Link from "next/link"
import { Linkedin, Mail, Instagram } from "lucide-react"
// import { usePathname } from "next/navigation"
import React from "react"
import { CopyEmailIcon } from "@/components/email-copy"


export function Footer() {
  const year = new Date().getFullYear()
  const IconBox = ({ children }: { children: React.ReactNode }) => (
    <span className={[
      "inline-flex h-7 w-7 items-center justify-center z-10", 
      "rounded-md bg-foreground/5 backdrop-blur-sm border-b", 
      "hover:bg-foreground group-hover:text-background transition-all duration-300",
    ].join(" ")}
    >
      {children}
    </span>
  )

  const linkBase =
    "group inline-flex items-center gap-2 hover:text-foreground transition-colors"

  return (
    <footer className="mt-5 bg-background text-foreground/90 border-t border-foreground/10 z-50 ">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 text-center space-y-6">
        {/* Social row */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm">
          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/shashank-panjeti"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn: in/shashank-panjeti"
            className={linkBase}
          >
            <IconBox>
              <Linkedin className="h-4 w-4" />
            </IconBox>
            {/* <Label>in/shashankpanjeti</Label> */}
          </Link>

          {/* Behance (inline SVG) */}
          <Link
            href="https://www.behance.net/shashankpanjeti"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance: shashankpanjeti"
            className={linkBase}
          >
            <IconBox>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
              </svg>
            </IconBox>
            {/* <Label>shashankpanjeti</Label> */}
          </Link>

          {/* Email */}
          <CopyEmailIcon />
          {/* <a
            href="mailto:shashankpanjeti@gmail.com"
            aria-label="Email: shashankpanjeti@gmail.com"
            className={linkBase}
          >
            <IconBox>
              <Mail className="h-4 w-4" />
            </IconBox> */}
            {/* <Label>shashankpanjeti@gmail.com</Label> */}
          {/* </a> */}

          {/* Instagram */}
          <Link
            href="https://instagram.com/shashu_73"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram: shashu_73"
            className={linkBase}
          >
            <IconBox>
              <Instagram className="h-4 w-4" />
            </IconBox>
            {/* <Label>shashu_73</Label> */}
          </Link>
        </div>

        {/* Credit line */}
        <p className="text-xs tracking-wide">
          Designed and Developed by Shashank Panjeti © {year}. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
