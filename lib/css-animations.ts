// CSS-based animation utilities to replace Three.js functionality

export interface AnimationConfig {
  duration?: number
  delay?: number
  easing?: string
}

export const createFloatingAnimation = (config: AnimationConfig = {}) => {
  const { duration = 6, delay = 0, easing = "ease-in-out" } = config

  return {
    animation: `float ${duration}s ${easing} ${delay}s infinite`,
    "@keyframes float": {
      "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
      "50%": { transform: "translateY(-20px) rotate(180deg)" },
    },
  }
}

export const createParticleSystem = (count = 50) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    size: Math.random() * 4 + 1,
    opacity: Math.random() * 0.5 + 0.1,
    delay: Math.random() * 2,
  }))
}

export const createMouseFollowEffect = (element: HTMLElement, intensity = 0.1) => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * intensity
    const y = (e.clientY - rect.top - rect.height / 2) * intensity

    element.style.transform = `translate(${x}px, ${y}px)`
  }

  element.addEventListener("mousemove", handleMouseMove)

  return () => element.removeEventListener("mousemove", handleMouseMove)
}

export const createPulseAnimation = (config: AnimationConfig = {}) => {
  const { duration = 2, delay = 0 } = config

  return {
    animation: `pulse ${duration}s ease-in-out ${delay}s infinite`,
  }
}
