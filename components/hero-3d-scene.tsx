"use client"

import { useEffect, useState } from "react"

export function Hero3DScene() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, 
            hsl(var(--primary)) 0%, 
            transparent 50%),
            radial-gradient(circle at ${30 - mousePosition.x}% ${70 - mousePosition.y}%, 
            hsl(var(--accent)) 0%, 
            transparent 50%)`,
        }}
      />

      {/* Floating geometric elements */}
      <div
        className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rotate-45 animate-spin"
        style={{
          transform: `rotate(45deg) translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          animationDuration: "20s",
        }}
      />

      <div
        className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent/10 rounded-full animate-pulse"
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
        }}
      />

      <div
        className="absolute bottom-1/4 left-1/2 w-16 h-16 bg-primary/10 transform rotate-12 animate-bounce"
        style={{
          transform: `rotate(12deg) translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
        }}
      />
    </div>
  )
}
