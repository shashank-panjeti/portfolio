"use client"

import { useEffect, useState } from "react"

interface BackgroundElement {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  speed: number
  color: string
}

interface AnimatedBackgroundProps {
  className?: string
  elementCount?: number
}

export function AnimatedBackground({ className = "", elementCount = 30 }: AnimatedBackgroundProps) {
  const [elements, setElements] = useState<BackgroundElement[]>([])

  useEffect(() => {
    const colors = ["hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--muted))"]

    const initialElements: BackgroundElement[] = Array.from({ length: elementCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 5,
      opacity: Math.random() * 0.3 + 0.1,
      speed: Math.random() * 0.5 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))

    setElements(initialElements)

    const interval = setInterval(() => {
      setElements((prev) =>
        prev.map((element) => ({
          ...element,
          y: (element.y + element.speed) % 110,
          opacity: 0.1 + Math.abs(Math.sin(Date.now() * 0.001 + element.id)) * 0.2,
        })),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [elementCount])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute rounded-full blur-sm transition-opacity duration-1000"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            backgroundColor: element.color,
            opacity: element.opacity,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  )
}
