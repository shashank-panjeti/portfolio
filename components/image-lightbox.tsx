// "use client"

// import { useState, useEffect, useCallback } from "react"
// import Image from "next/image"
// import { X, ChevronLeft, ChevronRight } from "lucide-react"

// interface ImageData {
//   src: string
//   alt: string
//   caption?: string
// }

// interface ImageLightboxProps {
//   images: ImageData[]
//   initialIndex: number
//   isOpen: boolean
//   onClose: () => void
// }

// export function ImageLightbox({ images, initialIndex, isOpen, onClose }: ImageLightboxProps) {
//   const [currentIndex, setCurrentIndex] = useState(initialIndex)

//   // Reset index when lightbox opens
//   useEffect(() => {
//     setCurrentIndex(initialIndex)
//   }, [initialIndex, isOpen])

//   const goToPrevious = useCallback(() => {
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
//   }, [images.length])

//   const goToNext = useCallback(() => {
//     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
//   }, [images.length])

//   // Keyboard navigation
//   useEffect(() => {
//     if (!isOpen) return

//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose()
//       if (e.key === "ArrowLeft") goToPrevious()
//       if (e.key === "ArrowRight") goToNext()
//     }

//     window.addEventListener("keydown", handleKeyDown)
//     return () => window.removeEventListener("keydown", handleKeyDown)
//   }, [isOpen, onClose, goToPrevious, goToNext])

//   // Touch/swipe handling
//   useEffect(() => {
//     if (!isOpen) return

//     let touchStartX = 0
//     let touchEndX = 0

//     const handleTouchStart = (e: TouchEvent) => {
//       touchStartX = e.changedTouches[0].screenX
//     }

//     const handleTouchEnd = (e: TouchEvent) => {
//       touchEndX = e.changedTouches[0].screenX
//       handleSwipe()
//     }

//     const handleSwipe = () => {
//       const swipeThreshold = 50
//       if (touchStartX - touchEndX > swipeThreshold) {
//         goToNext()
//       }
//       if (touchEndX - touchStartX > swipeThreshold) {
//         goToPrevious()
//       }
//     }

//     window.addEventListener("touchstart", handleTouchStart)
//     window.addEventListener("touchend", handleTouchEnd)

//     return () => {
//       window.removeEventListener("touchstart", handleTouchStart)
//       window.removeEventListener("touchend", handleTouchEnd)
//     }
//   }, [isOpen, goToPrevious, goToNext])

//   // Prevent body scroll when lightbox is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden"
//     } else {
//       document.body.style.overflow = "unset"
//     }
//     return () => {
//       document.body.style.overflow = "unset"
//     }
//   }, [isOpen])

//   if (!isOpen || !images || images.length === 0) return null

//   const currentImage = images[currentIndex]

//   // Additional safety check for currentImage
//   if (!currentImage) return null

//   const showNavigation = images.length > 1

//   return (
//     <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
//       {/* Close button */}
//       <button
//         onClick={onClose}
//         className="absolute top-4 right-4 z-10 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
//         aria-label="Close lightbox"
//       >
//         <X className="w-6 h-6" />
//       </button>

//       {/* Previous button */}
//       {showNavigation && (
//         <button
//           onClick={goToPrevious}
//           className="absolute left-4 z-10 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
//           aria-label="Previous image"
//         >
//           <ChevronLeft className="w-8 h-8" />
//         </button>
//       )}

//       {/* Image container */}
//       <div className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-8">
//         <div className="relative w-full h-full max-w-7xl max-h-[85vh]">
//           <Image
//             src={currentImage.src || "/placeholder.svg"}
//             alt={currentImage.alt || "Project image"}
//             fill
//             className="object-contain"
//             sizes="100vw"
//             priority
//           />
//         </div>

//         {/* Caption and counter */}
//         <div className="absolute bottom-4 left-0 right-0 text-center space-y-2">
//           {currentImage.caption && <p className="text-white/90 text-sm md:text-base px-4">{currentImage.caption}</p>}
//           {showNavigation && (
//             <p className="text-white/60 text-sm">
//               {currentIndex + 1} / {images.length}
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Next button */}
//       {showNavigation && (
//         <button
//           onClick={goToNext}
//           className="absolute right-4 z-10 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
//           aria-label="Next image"
//         >
//           <ChevronRight className="w-8 h-8" />
//         </button>
//       )}
//     </div>
//   )
// }
