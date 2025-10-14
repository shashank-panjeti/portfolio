"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full pl-3">
          <div className="flex items-center justify-between pl-3 pt-5 py-4">
            <Link href="/" className="text-xl font-bold" onClick={() => setOpen(false)}>
              Portfolio
            </Link>
          </div>

          <nav className="flex flex-col space-y-4 pl-3 mt-8">
            {menuItems.map((item) => (
              <Link
              key={item.href}
              href={item.href}
              className="text-lg font-medium hover:text-primary transition-colors py-2"
              onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
            <div className="flex flex-row w-4 pt-6 pl-1">
              <ThemeToggle />
            </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
