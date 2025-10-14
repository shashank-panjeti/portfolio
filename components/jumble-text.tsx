"use client"

import React from "react"

const occupations = [
  " UX UI DESIGNER ",
  "GRAPHIC DESIGNER",
  "  PHOTOGRAPHER   ",
  "    ARCHITECT    ",
  "INTERIOR DESIGNER",
  "  3D VISUALIZER  ",
  " DIGITAL ARTIST ",
]
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ "

export default function JumbleText() {
  const [text, setText] = React.useState("")
  const idx = React.useRef(0)

  React.useEffect(() => {
    let stop = false
    const jumbleEffect = (word: string, cb: () => void) => {
      let iterations = 0
      const maxIterations = word.length // Reveal one character at a time
      const id = setInterval(() => {
        let display = ""
        for (let i = 0; i < word.length; i++) {
          if (i < iterations) {
            // Character is revealed
            display += word[i]
          } else {
            // Character is still jumbling
            display += chars[Math.floor(Math.random() * chars.length)]
          }
        }
        setText(display)
        iterations++

        if (iterations > maxIterations) {
          clearInterval(id)
          cb()
        }
      }, 40) // Smoother timing
    }

    const loop = () => {
      if (stop) return
      const word = occupations[idx.current]
      setText(word)
      setTimeout(() => {
        idx.current = (idx.current + 1) % occupations.length
        jumbleEffect(occupations[idx.current], () => {
          setTimeout(loop, 2000) // Slightly longer pause between words
        })
      }, 2000)
    }
    loop()
    return () => {
      stop = true
    }
  }, [])

  return (
    <p id="jumbleText" className="text-6xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wider pb-16">
      {text}
    </p>
  )
}
