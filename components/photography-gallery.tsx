// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { ChevronLeft, ChevronRight, X } from "lucide-react"
// import { Button } from "@/components/ui/button"

// type photographyImages = {
//   id: number;
//   src: string;
//   alt: string;
//   title?: string;
//   caption?: string;
// }

// const Photography: photographyImages[] = [
//   { 
//     id: 1, 
//     src: "/photography/sree/01.jpg", 
//     alt: "Maternity Photoshoot", 
//     title: "Maternity Photoshoot" 
//   },
//   { 
//     id: 2, 
//     src: "/photography/sree/02.jpg", 
//     alt: "Maternity Photoshoot", 
//     title: "Maternity Photoshoot" 
//   },
//   { 
//     id: 3, 
//     src: "/photography/sree/03.jpg", 
//     alt: "Maternity Photoshoot", 
//     title: "Maternity Photoshoot" 
//   },
//   { 
//     id: 4, 
//     src: "/photography/sree/04.jpg", 
//     alt: "Maternity Photoshoot", 
//     title: "Maternity Photoshoot" 
//   },
//   { 
//     id: 5, 
//     src: "/photography/sree/05.jpg", 
//     alt: "Maternity Photoshoot", 
//     title: "Maternity Photoshoot" 
//   },
//   { 
//     id: 6, 
//     src: "/photography/sree/06.jpg", 
//     alt: "Maternity Photoshoot", 
//     title: "Maternity Photoshoot" 
//   },
//   { 
//     id: 7, 
//     src: "/photography/sree/07.jpg", 
//     alt: "Maternity Photoshoot", 
//     title: "Maternity Photoshoot" 
//   },
//   { 
//     id: 8, 
//     src: "/photography/sree/08.jpg", 
//     alt: "Maternity Photoshoot", 
//     title: "Maternity Photoshoot" 
//   },
//   { 
//     id: 9, 
//     src: "/photography/sree/09.jpg", 
//     alt: "Maternity Photoshoot", 
//     title: "Maternity Photoshoot" 
//   },
// ]


// interface PhotographyGalleryProps {
//   images: photographyImages[]
//   columns?: 2 | 3 | 4
// }

// export function PhotographyGallery({ images=Photography, columns = 4 }: PhotographyGalleryProps) {
//   const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

//   const openLightbox = (index: number) => {
//     setSelectedIndex(index)
//     document.body.classList.add("lightbox-open")
//   }

//   const closeLightbox = () => {
//     setSelectedIndex(null)
//     document.body.classList.remove("lightbox-open")
//   }

//   const goToPrevious = () => {
//     if (selectedIndex !== null) {
//       setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
//     }
//   }

//   const goToNext = () => {
//     if (selectedIndex !== null) {
//       setSelectedIndex((selectedIndex + 1) % images.length)
//     }
//   }

//   const gridCols = {
//     2: "grid-cols-1 sm:grid-cols-2",
//     3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
//     4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
//   } as const
  
//   useEffect(() => {
//     if (selectedIndex === null) return

//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         closeLightbox()
//       } else if (e.key === "ArrowLeft") {
//         goToPrevious()
//       } else if (e.key === "ArrowRight") {
//         goToNext()
//       }
//     }

//     window.addEventListener("keydown", handleKeyDown)
//     return () => window.removeEventListener("keydown", handleKeyDown)
//   }, [selectedIndex])


//   return (
//     <>
//       <div className="mt-16">
//         <h3 className="text-2xl font-light text-foreground mb-8 text-center">Photography Gallery</h3>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//           {images.map((image, index) => (
//             <div
//               key={image.id}
//               className="group relative aspect-[3/4] bg-muted/20 rounded-lg overflow-hidden cursor-pointer"
//               onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             onClick={() => openLightbox(index)}
//             >
//               <Image
//                 src={image.src || "/placeholder.svg"}
//                 alt={image.alt}
//                 fill
//                 className="object-cover group-hover:scale-105 transition-transform duration-500"
//               />
              
//               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
//               <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-white text-sm font-medium">{image.title}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Lightbox */}
//       {selectedIndex !== null && (
//         <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
//           {/* Close */}
//           <Button
//             variant="ghost"
//             size="icon"
//             className="absolute top-5 right-5 sm:top-10 sm:right-10 text-white hover:bg-white/10"
//             onClick={closeLightbox}
//           >
//             <X className="h-6 w-6" />
//           </Button>

//           {/* Prev */}
//           <Button
//             variant="ghost"
//             size="icon"
//             className="absolute left-5 sm:left-10 text-white hover:bg-white/10"
//             onClick={goToPrevious}
//           >
//             <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
//           </Button>

//           {/* Image*/}
//           <div className="max-w-7xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center p-6 sm:p-10">
//             <div className="flex w-full justify-between items-baseline px-3">
//               {/* Caption */}
//               <p className="text-white text-sm sm:text-base lg:text-lg">
//                 {images[selectedIndex].title}
//               </p>

//               {/* Image Counter */}
//               <p className="text-white/60 text-sm mt-2">
//                 {selectedIndex + 1} / {images.length}
//               </p>
//             </div>

//             <div className="relative w-full h-full">
//               <Image
//                 src={images[selectedIndex].src || "/placeholder.svg"}
//                 alt={images[selectedIndex].alt}
//                 fill
//                 className="object-contain"
//               />
//             </div>
//           </div>

//           {/* Next */}
//           <Button
//             variant="ghost"
//             size="icon"
//             className="absolute right-5 sm:right-10 text-white hover:bg-white/10"
//             onClick={goToNext}
//           >
//             <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
//           </Button>
//         </div>
//       )}
//     </>
//   )
// }







"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

type photographyImages = {
  id: number;
  src: string;
  alt: string;
  title?: string;
  caption?: string;
}

const photographyImages = [
  { 
    id: 1, 
    src: "/photography/sree/01.jpg", 
    alt: "Maternity Photoshoot", 
    title: "Maternity Photoshoot" 
  },
  { 
    id: 2, 
    src: "/photography/sree/02.jpg", 
    alt: "Maternity Photoshoot", 
    title: "Maternity Photoshoot" 
  },
  { 
    id: 3, 
    src: "/photography/sree/03.jpg", 
    alt: "Maternity Photoshoot", 
    title: "Maternity Photoshoot" 
  },
  { 
    id: 4, 
    src: "/photography/sree/04.jpg", 
    alt: "Maternity Photoshoot", 
    title: "Maternity Photoshoot" 
  },
  { 
    id: 5, 
    src: "/photography/sree/05.jpg", 
    alt: "Maternity Photoshoot", 
    title: "Maternity Photoshoot" 
  },
  { 
    id: 6, 
    src: "/photography/sree/06.jpg", 
    alt: "Maternity Photoshoot", 
    title: "Maternity Photoshoot" 
  },
  { 
    id: 7, 
    src: "/photography/sree/07.jpg", 
    alt: "Maternity Photoshoot", 
    title: "Maternity Photoshoot" 
  },
  { 
    id: 8, 
    src: "/photography/sree/08.jpg", 
    alt: "Maternity Photoshoot", 
    title: "Maternity Photoshoot" 
  },
  { 
    id: 9, 
    src: "/photography/sree/09.jpg", 
    alt: "Maternity Photoshoot", 
    title: "Maternity Photoshoot" 
  },
]


interface PhotographyGalleryProps {
  images: photographyImages[]
  columns?: 2 | 3 | 4
}

export function PhotographyGallery({ images=photographyImages, columns = 4 }: PhotographyGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedIndex(index)
    document.body.classList.add("lightbox-open")
  }

  const closeLightbox = () => {
    setSelectedIndex(null)
    document.body.classList.remove("lightbox-open")
  }

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
    }
  }

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length)
    }
  }

  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  } as const
  
  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox()
      } else if (e.key === "ArrowLeft") {
        goToPrevious()
      } else if (e.key === "ArrowRight") {
        goToNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedIndex])


  return (
    <>
      <div className="mt-16">
        <h3 className="text-2xl font-light text-foreground mb-8 text-center">Photography Gallery</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-[3/4] bg-muted/20 rounded-lg overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => openLightbox(index)}
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

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-200 bg-black/95 flex items-center justify-center">
          {/* Close */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-5 right-5 sm:top-10 sm:right-10 text-white hover:bg-white/10"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Prev */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-5 sm:left-10 text-white hover:bg-white/10"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
          </Button>

          {/* Image*/}
          <div className="max-w-7xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center p-6 sm:p-10">
            <div className="flex w-full justify-between items-baseline px-3">
              {/* Caption */}
              <p className="text-white text-sm sm:text-base lg:text-lg">
                {images[selectedIndex].title}
              </p>

              {/* Image Counter */}
              <p className="text-white/60 text-sm mt-2">
                {selectedIndex + 1} / {images.length}
              </p>
            </div>

            <div className="relative w-full h-full">
              <Image
                src={images[selectedIndex].src || "/placeholder.svg"}
                alt={images[selectedIndex].alt}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Next */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-5 sm:right-10 text-white hover:bg-white/10"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
          </Button>
        </div>
      )}
    </>
  )
}
