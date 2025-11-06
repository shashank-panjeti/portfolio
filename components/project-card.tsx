"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef } from "react"
import type { Project } from "@/lib/project-data"
import { Project3DModel } from "./project-3d-model"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    const grid = gridRef.current
    const text = textRef.current
    const media = mediaRef.current
    if (!card || !grid || !text || !media) return

    const mediaQuery = window.matchMedia("(min-width: 768px)")

    const setupAnimation = () => {
      let raf = 0

      const computeStartOffsets = () => {
        const gridH = grid.clientHeight || 0
        const textH = text.clientHeight || 0
        const mediaH = media.clientHeight || 0
        const textStart = -(gridH / 2 - textH / 2)
        const mediaStart = -(gridH / 2 - mediaH / 2)
        return { textStart, mediaStart }
      }

      let { textStart, mediaStart } = computeStartOffsets()
      text.style.transform = `translateY(${textStart}px)`
      media.style.transform = `translateY(${mediaStart}px)`
      grid.style.opacity = "0.85"

      const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n))
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t

      const update = () => {
        const rect = card.getBoundingClientRect()
        const vh = window.innerHeight
        const cardCenter = rect.top + rect.height / 2
        const startPx = vh * 0.98
        const endPx = vh * 0.75
        const t = clamp((startPx - cardCenter) / (startPx - endPx), 0, 1)
        const yText = lerp(textStart, 0, t)
        const yMedia = lerp(mediaStart, 0, t)
        const opac = lerp(0.85, 1, t)

        text.style.transform = `translateY(${yText}px)`
        media.style.transform = `translateY(${yMedia}px)`
        grid.style.opacity = String(opac)
        raf = requestAnimationFrame(update)
      }

      raf = requestAnimationFrame(update)
      const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
      const onResize = () => {
        const o = computeStartOffsets()
        textStart = o.textStart
        mediaStart = o.mediaStart
        if (!raf) raf = requestAnimationFrame(update)
      }

      const ro = new ResizeObserver(() => onResize())
      ro.observe(grid)
      ro.observe(text)
      ro.observe(media)

      window.addEventListener("scroll", onScroll, { passive: true })
      window.addEventListener("resize", onResize)

      return () => {
        cancelAnimationFrame(raf)
        ro.disconnect()
        window.removeEventListener("scroll", onScroll)
        window.removeEventListener("resize", onResize)
      }
    }

    let cleanup: (() => void) | null = null
    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        cleanup = setupAnimation()
      } else {
        cleanup?.()
        text.style.transform = "translateY(0)"
        media.style.transform = "translateY(0)"
        grid.style.opacity = "1"
      }
    }

    handleMediaChange(mediaQuery)
    mediaQuery.addEventListener("change", handleMediaChange)

    return () => {
      cleanup?.()
      mediaQuery.removeEventListener("change", handleMediaChange)
    }
  }, [])

  return (
    <Link href={`/projects/${project.id}`} className="group block">
      <div
        ref={cardRef}
        className="w-full flex items-center justify-center pt-2 pb-6 sm:pt-3 sm:pb-9 md:pt-4 md:pb-12 lg:pt-5 lg:pb-15"
      >
        <div className="container mx-auto px-4 sm:px-6 bg-muted/20 rounded-2xl xl:px-[8%]">
          <div
            ref={gridRef}
            className="
              grid grid-cols-1
              md:[grid-template-columns:minmax(0,1fr)_clamp(20rem,30vw,28rem)]
              gap-8 sm:gap-12 lg:gap-20
              items-start
            "
          >
            {/* Text */}
            <div
              ref={textRef}
              className="space-y-4 sm:space-y-6 order-2 lg:order-1 place-self-center w-full will-change-transform
              py-4 sm:py-6 md:py-8 lg:py-10"
            >
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-foreground group-hover:text-muted-foreground transition-colors text-balance">
                  {project.title}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground text-pretty">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Image / 3D */}
            <div
              ref={mediaRef}
              className="
              relative w-full aspect-square md:aspect-square lg:aspect-square
              rounded-lg overflow-hidden
              order-1 md:order-2
              md:sticky md:top-24 md:self-start
              "
            >
              {project.modelPath ? (
                <Project3DModel modelPath={project.modelPath} className="w-full h-full" />
              ) : (
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500
                  py-4 sm:py-6 md:p-8 md:pr-2 lg:p-10"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
