"use client"

import { useState } from "react"
import Image from "next/image"
import { div } from "three/src/nodes/TSL.js"

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
    if (hoveredIndex === index) return "85%"
    return "5%"
  }

  return (
    <div className="overflow-hidden scale-y-[0.8] origin-center">
      <div className="relative w-full aspect-video flex overflow-hidden rounded-lg lg:rounded-xl">
        {displayImages.map((image, index) => {
          const isHovered = hoveredIndex === index
          const isFirst = index === 0
          const isLast = index === displayImages.length - 1
          const showCaption = hoveredIndex === null || isHovered

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
              className={`relative transition-all duration-500 ease-out cursor-pointer overflow-hidden 
                ${isFirst ? "rounded-l-lg" : ""} 
                ${isLast ? "rounded-r-lg" : ""}`}
            >
              {/* Keep image fixed inside its panel */}
              <div className="inset-0 overflow-hidden pointer-events-none"
                style={{
                  // Position from the left edge of the accordion container
                  left: `${-index * 25}%`,
                  // Each image spans 100% of the accordion width
                  width: "400%",
                }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover scale-y-[1.25] -translate-y-[7%] w-full"
                  // Keep position fixed (no drifting with panel width changes)
                  style={{ objectPosition: `${(index / (displayImages.length - 1)) * 100}% center` }}
                />
              </div>

              {image.caption && (
                <div
                  className={`absolute bottom-2 sm:bottom-4 text-black text-center transition-all duration-800 z-10 pointer-events-none scale-y-[1.25] ${ isHovered ? "left-2 sm:left-4 right-2 sm:right-4" : "left-1/2 -translate-x-1/2"
                  } ${showCaption ? "opacity-100" : "opacity-0"}`}
                >
                  <p className="text-xs sm:text-sm font-medium bg-white/40 px-2 sm:px-3 py-1 sm:py-2 rounded-lg backdrop-blur-sm whitespace-nowrap">
                    {image.caption}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

























// "use client"

// import { useState } from "react"
// import Image from "next/image"

// interface ImageAccordionProps {
//   images: Array<{
//     src: string
//     alt: string
//     caption?: string
//     positioning?: {
//       objectPosition?: {
//         default?: string
//         hover?: string
//       }
//       leftOffset?: {
//         default?: string
//         hover?: string
//       }
//     }
//   }>
// }

// export function ImageAccordion({ images }: ImageAccordionProps) {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

//   // Limit to 4 images
//   const displayImages = images.slice(0, 4)

//   const getFlexBasis = (index: number) => {
//     if (hoveredIndex === null) return "25%"
//     if (hoveredIndex === index) return "85%"
//     return "5%"
//   }

//   const getImagePosition = (index: number, image: (typeof displayImages)[0]) => {
//     const isHovered = hoveredIndex === index
//     const positioning = image.positioning

//     // Default object position calculation if not specified
//     const defaultObjectPosition = `${(index / (displayImages.length - 1)) * 100}% center`

//     // Get object position
//     const objectPosition = positioning?.objectPosition
//       ? isHovered
//         ? positioning.objectPosition.hover || positioning.objectPosition.default || defaultObjectPosition
//         : positioning.objectPosition.default || defaultObjectPosition
//       : defaultObjectPosition

//     // Default left offset calculation if not specified
//     const defaultLeftOffset = `${-(index * 100)}%`

//     // Get left offset
//     const leftOffset = positioning?.leftOffset
//       ? isHovered
//         ? positioning.leftOffset.hover || positioning.leftOffset.default || defaultLeftOffset
//         : positioning.leftOffset.default || defaultLeftOffset
//       : defaultLeftOffset

//     return { objectPosition, leftOffset }
//   }

//   return (
//     <div className="relative w-full aspect-video flex overflow-hidden">
//       {displayImages.map((image, index) => {
//         const isHovered = hoveredIndex === index
//         const isFirst = index === 0
//         const isLast = index === displayImages.length - 1
//         const showCaption = hoveredIndex === null || isHovered

//         const { objectPosition, leftOffset } = getImagePosition(index, image)
       
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
//               className="absolute inset-0 overflow-hidden transition-all duration-500"
//               style={{
//                 left: leftOffset,
//                 width: "400%",
//               }}
//             >
//               <Image
//                 src={image.src || "/placeholder.svg"}
//                 alt={image.alt}
//                 fill
//                 className="object-cover transition-all duration-500"
//                 style={{ objectPosition }}
//               />
//             </div>

//             {image.caption && (
//               <div
//                 className={`absolute bottom-4 text-black text-center transition-all duration-500 z-10 ${ isHovered ? "" : "left-1/2 -translate-x-1/2"
//                 } ${showCaption ? "opacity-100" : "opacity-0"}`}
//               >
//                 <p className="text-sm font-medium bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm whitespace-nowrap">
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

