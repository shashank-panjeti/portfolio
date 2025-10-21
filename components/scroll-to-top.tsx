"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

export function ScrollToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 120)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  /**
   * Align to the same inner edge as your `.container.mx-auto.px-6`
   * - Right inset = max(24px, (viewport - 1400px)/2 + 24px)
   *   so on wide screens it sits just inside the container edge;
   *   on smaller screens it keeps a 24px gutter.
   */
  const rightInset = "calc(max(1.5rem, (100vw - 1400px) / 2 + 1.5rem))"

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollTop}
      style={{ right: rightInset }}
      className={[
        "fixed z-70 bottom-6",
        "h-12 w-12 rounded-full",
        "flex justify-center", 
        "bg-primary/50 text-primary-foreground shadow-lg",
        "hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary/40",
        "transition-all duration-300",
        show ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none",
        // small nudge so it doesn't clip on ultra-small screens
        "md:bottom-8",
      ].join(" ")}
    >
      <div className="text-xs w-10 flex  content-center items-center justify-center">Scroll To Top</div>
    </button>
  )
}
