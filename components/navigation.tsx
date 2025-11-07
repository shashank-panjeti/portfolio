"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import { MobileMenu } from "./mobile-menu"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex gap-2 sm:gap-3 items-center group">
          <img src="/logo.png" alt="Logo" className="aspect-square h-7 w-7 border border-foreground/50 rounded-md opacity-90 group-hover:opacity-100 group-hover:border-foreground " />
          <h2 className="text-lg font-medium text-foreground group-hover:font-semibold transition-font">
            Shashank Panjeti
          </h2>
        </Link>

        <div className="flex items-center gap-4 sm:gap-8">
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative inline-flex h-6 items-center group transition-colors overflow-hidden",
                  pathname === item.href ? "text-foreground" : "text-muted-foreground"
                )}
              >
                <span className="invisible pointer-events-none select-none text-sm font-medium">
                  {item.name}
                </span>

                <span
                  className={cn(
                    "absolute inset-0 flex items-center text-sm font-medium text-muted-foreground",
                    "transition-transform duration-200",
                    "group-hover:-translate-y-full"
                  )}
                >
                  {item.name}
                </span>

                <span
                  className={cn(
                    "absolute inset-0 flex items-center text-sm font-medium text-foreground",
                    "transition-transform duration-200 translate-y-full",
                    "group-hover:translate-y-0"
                  )}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          <MobileMenu />
        </div>
      </nav>
    </header>
  )
}
