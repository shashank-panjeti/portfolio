// "use client"

// // import { useState } from "react"
// import { useState, useRef, useEffect } from "react"
// import Image from "next/image"

// interface ImageAccordionProps {
//   images: Array<{
//     src: string
//     alt: string
//     caption?: string
//   }>
// }

// export function ImageAccordion({ images }: ImageAccordionProps) {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
//   const containerRef = useRef<HTMLDivElement>(null)
//   const [containerWidth, setContainerWidth] = useState(0)

//   useEffect(() => {
//     if (!containerRef.current) return

//     const updateWidth = () => {
//       if (containerRef.current) {
//         setContainerWidth(containerRef.current.offsetWidth)
//       }
//     }

//     updateWidth()
//     window.addEventListener("resize", updateWidth)
//     return () => window.removeEventListener("resize", updateWidth)
//   }, [])

//   // Limit to 4 images
//   const displayImages = images.slice(0, 4)
  
//   // const nonHoveredWidth = "w-8" // 2rem
//   const getFlexBasis = (index: number) => {
//     if (hoveredIndex === null) return "25%" // Equal distribution when nothing hovered
//     if (hoveredIndex === index) return "calc(100% - 12rem)" // Hovered takes most space (minus 3 * 2rem)
//     return "4rem" // Non-hovered sections are 2rem
//   }

//   return (
//     <div ref={containerRef} className="relative w-full aspect-video flex overflow-hidden">
//       {displayImages.map((image, index) => {
//         const isHovered = hoveredIndex === index
//         const isFirst = index === 0
//         const isLast = index === displayImages.length - 1

//         const imageLeftOffset = -((containerWidth * index) / displayImages.length)

//         return (
//           <div
//             key={index}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             style={{
//               flexBasis: getFlexBasis(index),
//               flexShrink: 0,
//               flexGrow: 0,
//             }}
//             className={`relative h-full transition-all duration-500 ease-out cursor-pointer overflow-hidden 
//               ${isFirst ? "rounded-l-lg" : ""} 
//               ${isLast ? "rounded-r-lg" : ""}`}
//           >
//             <div 
//               className="absolute inset-0 overflow-hidden"
//               style={{
//                 left: imageLeftOffset,
//                 width: containerWidth
//               }}
//             >
//             <Image
//               src={image.src || "/placeholder.svg"}
//               alt={image.alt}
//               fill
//               className="object-cover"
//               style={{
//                 objectPosition: `${(index / (displayImages.length - 1)) * 100}% center`,
//                 // objectPosition: "center center",
//               }}
//             />
//           </div>  
//             {/* Overlay gradient */}
//             {/* <div
//               className={`absolute inset-0 transition-opacity duration-5 ${
//                 isHovered ? "opacity-0" : "opacity-100"
//               }`}
//             /> */}
//             {/* Caption */}
//             {image.caption && (
//               <div
//                 className={`absolute bottom-4 left-4 right-4 text-white transition-opacity duration-500 z-10 ${
//                   isHovered ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 <p className="text-sm font-medium bg-black/50 px-3 py-2 rounded-lg backdrop-blur-sm">
//                   {image.caption}
//                 </p>
//               </div>
//             )}
//           </div>
//         )
//       })}
//     </div>
//   )
// }







"use client"

import { useState } from "react"
import Image from "next/image"

interface ImageAccordionProps {
  images: Array<{
    src: string
    alt: string
    caption?: string
  }>
}

export function ImageAccordion({ images }: ImageAccordionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Limit to 4 images
  const displayImages = images.slice(0, 4)

  const getFlexBasis = (index: number) => {
    if (hoveredIndex === null) return "25%"
    if (hoveredIndex === index) return "calc(100% - 12rem)"
    return "4rem"
  }

  return (
    <div className="relative w-full aspect-video flex overflow-hidden">
      {displayImages.map((image, index) => {
        const isHovered = hoveredIndex === index
        const isFirst = index === 0
        const isLast = index === displayImages.length - 1

        return (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              flexBasis: getFlexBasis(index),
              flexShrink: 0,
              flexGrow: 0,
            }}
            className={`relative h-full transition-all duration-500 ease-out cursor-pointer overflow-hidden 
              ${isFirst ? "rounded-l-lg" : ""} 
              ${isLast ? "rounded-r-lg" : ""}`}
          >
            {/* Keep image fixed inside its panel */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                // Keep position fixed (no drifting with panel width changes)
                style={{ objectPosition: `${(index / (displayImages.length - 1)) * 100}% center`, }}
              />
            </div>

            {image.caption && (
              <div
                className={`absolute bottom-4 left-4 right-4 text-white transition-opacity duration-500 z-10 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-sm font-medium bg-black/50 px-3 py-2 rounded-lg backdrop-blur-sm">
                  {image.caption}
                </p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
