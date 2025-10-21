// "use client"

// import Link from "next/link"
// import { Linkedin, Mail, Instagram } from "lucide-react"

// export function Footer() {
//   const year = new Date().getFullYear()

//   return (
//     <footer className="mt-20 bg-background text-white/90 border-t border-white/10">
//       <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 text-center space-y-6">
//         {/* Social row */}
//         <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm">
//           {/* LinkedIn */}
//           <Link
//             href="https://www.linkedin.com/in/shashankpanjeti"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group inline-flex items-center gap-2 hover:text-white"
//           >
//             <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/10">
//               <Linkedin className="h-4 w-4" />
//             </span>
//             <span className="font-medium md:hidden ">in/shashankpanjeti</span>
//           </Link>

//           {/* Behance (custom SVG icon) */}
//           <Link
//             href="https://www.behance.net/shashankpanjeti"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group inline-flex items-center gap-2 hover:text-white"
//           >
//             <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/10">
//               {/* Behance logo */}
//               <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
//                 <path d="M14.75 7h4.5v1.25h-4.5V7zM8.7 7.02C11 7.02 12 8.2 12 9.66c0 .9-.43 1.6-1.1 2.03.94.38 1.54 1.17 1.54 2.36 0 1.79-1.33 3.05-3.73 3.05H3V7.26h5.7zm-3.5 1.98v2.16h2.21c1 0 1.55-.4 1.55-1.08 0-.7-.5-1.08-1.52-1.08H5.2zm0 3.7v2.36h2.53c1.04 0 1.6-.44 1.6-1.18 0-.76-.57-1.18-1.65-1.18H5.2zM20.98 12.9h-5.03c.13 1.02.82 1.64 1.85 1.64.76 0 1.36-.34 1.62-.93h1.47c-.36 1.36-1.6 2.2-3.15 2.2-2.13 0-3.44-1.4-3.44-3.54 0-2.12 1.33-3.56 3.43-3.56 2.16 0 3.4 1.52 3.4 3.6 0 .2-.02.41-.05.59zm-5-1.18h3.52c-.14-.95-.74-1.55-1.73-1.55-1 0-1.63.58-1.79 1.55z"/>
//               </svg>
//             </span>
//             <span className="font-medium">shashankpanjeti</span>
//           </Link>

//           {/* Email */}
//           <a
//             href="mailto:shashankpanjeti@outlook.com"
//             className="group inline-flex items-center gap-2 hover:text-white"
//           >
//             <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/10">
//               <Mail className="h-4 w-4" />
//             </span>
//             <span className="font-medium">shashankpanjeti@outlook.com</span>
//           </a>

//           {/* Instagram */}
//           <Link
//             href="https://instagram.com/shashu_73"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group inline-flex items-center gap-2 hover:text-white"
//           >
//             <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/10">
//               <Instagram className="h-4 w-4" />
//             </span>
//             <span className="font-medium">shashu_73</span>
//           </Link>
//         </div>

//         {/* Credit line */}
//         <p className="text-sm sm:text-base tracking-wide">
//           Designed and Developed by Shashank Panjeti © {year}. All Rights Reserved.
//         </p>
//       </div>
//     </footer>
//   )
// }




"use client"

import Link from "next/link"
import { Linkedin, Mail, Instagram } from "lucide-react"
import { usePathname } from "next/navigation"
import React from "react"


export function Footer() {
  const year = new Date().getFullYear()
  const pathname = usePathname()
  if (pathname === "/" || pathname === "/contact") return null

  // helper: shared pill/icon box
  const IconBox = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/10">
      {children}
    </span>
  )

  // helper: label that is always visible on mobile/tablet,
  // but hidden on desktop until hover
  const Label = ({ children }: { children: React.ReactNode }) => (
    <span
      className={[
        // base
        "font-medium transition-all duration-300",
        // mobile/tablet: visible normally
        "lg:ml-0",
        // desktop default: hidden/collapsed
        "lg:max-w-0 lg:opacity-0 lg:translate-x-2 lg:overflow-hidden",
        // desktop on hover (via parent .group): reveal
        "lg:group-hover:max-w-[240px] lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-hover:ml-2",
      ].join(" ")}
    >
      {children}
    </span>
  )

  const linkBase =
    "group inline-flex items-center gap-2 hover:text-white transition-colors"

  return (
    <footer className="mt-20 bg-background text-white/90 border-t border-white/10">
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
            <Label>in/shashankpanjeti</Label>
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
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M14.75 7h4.5v1.25h-4.5V7zM8.7 7.02C11 7.02 12 8.2 12 9.66c0 .9-.43 1.6-1.1 2.03.94.38 1.54 1.17 1.54 2.36 0 1.79-1.33 3.05-3.73 3.05H3V7.26h5.7zm-3.5 1.98v2.16h2.21c1 0 1.55-.4 1.55-1.08 0-.7-.5-1.08-1.52-1.08H5.2zm0 3.7v2.36h2.53c1.04 0 1.6-.44 1.6-1.18 0-.76-.57-1.18-1.65-1.18H5.2zM20.98 12.9h-5.03c.13 1.02.82 1.64 1.85 1.64.76 0 1.36-.34 1.62-.93h1.47c-.36 1.36-1.6 2.2-3.15 2.2-2.13 0-3.44-1.4-3.44-3.54 0-2.12 1.33-3.56 3.43-3.56 2.16 0 3.4 1.52 3.4 3.6 0 .2-.02.41-.05.59zm-5-1.18h3.52c-.14-.95-.74-1.55-1.73-1.55-1 0-1.63.58-1.79 1.55z"/>
              </svg>
            </IconBox>
            <Label>shashankpanjeti</Label>
          </Link>

          {/* Email */}
          <a
            href="mailto:shashankpanjeti@outlook.com"
            aria-label="Email: shashankpanjeti@outlook.com"
            className={linkBase}
          >
            <IconBox>
              <Mail className="h-4 w-4" />
            </IconBox>
            <Label>shashankpanjeti@outlook.com</Label>
          </a>

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
            <Label>shashu_73</Label>
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
