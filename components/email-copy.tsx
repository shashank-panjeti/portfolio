"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"



export function CopyEmailButton() {
  const [copied, setCopied] = useState(false)
  const [hovered, setHovered] = useState(false)

  const email = "shashankpanjeti@gmail.com"

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // Reset after 2s
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  return (
    <Button
      variant="ghostoutline"
      size="sm"
      onClick={handleCopy}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="transition-all duration-300 w-[207.61px]"
    >
      {copied ? "copied to clipboard!" : hovered ? "click to copy email" : email}
    </Button>
  )
}






export function CopyEmailIcon() {
  const [copied, setCopied] = useState(false)
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const hideTimer = useRef<number | null>(null)

  const email = "shashankpanjeti@gmail.com"


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

const handleCopy = async (e?: React.MouseEvent | React.KeyboardEvent) => {
    try {
      if ("clipboard" in navigator && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email)
      } else {
        // Fallback
        const ta = document.createElement("textarea")
        ta.value = email
        ta.style.position = "fixed"
        ta.style.opacity = "0"
        document.body.appendChild(ta)
        ta.select()
        document.execCommand("copy")
        document.body.removeChild(ta)
      }

      // Position the popup near the cursor (or the icon if keyboard)
      if (e && "clientX" in e) {
        const offset = 12
        setPos({ x: e.clientX + offset, y: e.clientY + offset })
      } else {
        // Keyboard activation: place near the icon
        const el = document.getElementById("copy-email-icon")
        if (el) {
          const r = el.getBoundingClientRect()
          setPos({ x: r.right + 12, y: r.top + r.height / 2 })
        }
      }

      setCopied(true)
      if (hideTimer.current) window.clearTimeout(hideTimer.current)
      hideTimer.current = window.setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }


  return (
    <>
        <div
        onClick={handleCopy}
        onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            handleCopy()
            }
        }}
        aria-label={copied ? "Copied!" : `Copy email ${email}`}
        className="group inline-flex items-center gap-2 transition-colors cursor-pointer"
        >
        <IconBox>
            <Mail className="h-4 w-4" />
        </IconBox>
        </div>
        
        {/* Floating popup near cursor */}
        {copied && (
        <div
          role="status"
          aria-live="polite"
          className={[
            "fixed z-[9999] pointer-events-none select-none",
            "px-2 py-1 rounded-md text-xs",
            " bg-background/80 text-foreground shadow-lg border border-background",
            "animate-in fade-in zoom-in-95 duration-150",
          ].join(" ")}
          style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
        >
          email copied!
        </div>
        )}
    </>
  )
}
