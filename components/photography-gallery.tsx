"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

const photographyImages = [
  {
    id: 1,
    src: "/natural-light-portrait.png",
    alt: "Portrait photography with natural light",
    title: "Natural Light Portrait",
  },
  {
    id: 2,
    src: "/modern-building-architecture.png",
    alt: "Architectural photography of modern building",
    title: "Modern Architecture",
  },
  {
    id: 3,
    src: "/urban-street-scene.png",
    alt: "Street photography urban scene",
    title: "Urban Life",
  },
  {
    id: 4,
    src: "/landscape-photography-golden-hour.jpg",
    alt: "Landscape photography during golden hour",
    title: "Golden Hour",
  },
  {
    id: 5,
    src: "/minimalist-product-shot.png",
    alt: "Minimalist product photography",
    title: "Product Study",
  },
  {
    id: 6,
    src: "/interior-photography-modern-space.jpg",
    alt: "Interior photography of modern space",
    title: "Interior Space",
  },
  {
    id: 7,
    src: "/fashion-photography-studio.jpg",
    alt: "Fashion photography in studio",
    title: "Studio Fashion",
  },
  {
    id: 8,
    src: "/nature-photography-macro-detail.jpg",
    alt: "Nature photography macro detail",
    title: "Natural Details",
  },
]

export function PhotographyGallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof photographyImages)[0] | null>(null)

  return (
    <>
      <div className="mt-16">
        <h3 className="text-2xl font-light text-foreground mb-8 text-center">Photography Gallery</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {photographyImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-[3/4] bg-muted/20 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="relative aspect-auto max-h-[80vh]">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="object-contain max-h-full w-auto"
              />
            </div>

            <div className="text-center mt-4">
              <p className="text-white text-lg font-medium">{selectedImage.title}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
