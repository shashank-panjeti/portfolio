"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

interface CSS3DCardProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

export function CSS3DCard({ children, className = "", intensity = 0.1 }: CSS3DCardProps) {
  const [transform, setTransform] = useState("")
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) * intensity
      const rotateY = (centerX - x) * intensity

      setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`)
    }

    const handleMouseLeave = () => {
      setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)")
    }

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [intensity])

  return (
    <div ref={cardRef} className={`transition-transform duration-200 ease-out ${className}`} style={{ transform }}>
      {children}
    </div>
  )
}
