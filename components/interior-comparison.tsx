"use client"

import { ImageAccordion } from "./image-accordion"

interface ComparisonImage {
  src: string
  alt: string
  caption?: string
}

interface InteriorComparisonProps {
  images: ComparisonImage[]
  heading?: string
  description?: string
}

export function InteriorComparison({ images, heading, description }: InteriorComparisonProps) {
  return (
    <div className="space-y-6">
      {heading && <h3 className="text-2xl font-light text-foreground">{heading}</h3>}
      {description && <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>}
      <ImageAccordion images={images.slice(0, 4)} />
    </div>
  )
}
