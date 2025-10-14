// "use client"

// import { useRef, useMemo } from "react"
// import { Canvas, useFrame } from "@react-three/fiber"
// import * as THREE from "three"
// import { ErrorBoundary } from "./error-boundary"

// interface ParticleSystemProps {
//   count?: number
// }

// function Particles({ count = 1000 }: ParticleSystemProps) {
//   const pointsRef = useRef<THREE.Points>(null)

//   // Generate random particle positions
//   const positions = useMemo(() => {
//     const pos = new Float32Array(count * 3)
//     for (let i = 0; i < count * 3; i += 3) {
//       pos[i] = (Math.random() - 0.5) * 20
//       pos[i + 1] = (Math.random() - 0.5) * 20
//       pos[i + 2] = (Math.random() - 0.5) * 20
//     }
//     return pos
//   }, [count])

//   // Animate particles
//   useFrame((state) => {
//     if (pointsRef.current) {
//       pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
//       pointsRef.current.rotation.x = state.clock.elapsedTime * 0.03

//       // Pulse effect
//       const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
//       pointsRef.current.scale.set(scale, scale, scale)
//     }
//   })

//   return (
//     <points ref={pointsRef}>
//       <bufferGeometry>
//         <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
//       </bufferGeometry>
//       <pointsMaterial
//         size={0.05}
//         color="#6366f1"
//         transparent
//         opacity={0.6}
//         sizeAttenuation
//         blending={THREE.AdditiveBlending}
//       />
//     </points>
//   )
// }

// function CSSParticleFallback() {
//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       {Array.from({ length: 50 }).map((_, i) => (
//         <div
//           key={i}
//           className="absolute w-1 h-1 bg-primary/40 rounded-full animate-pulse"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animationDelay: `${Math.random() * 2}s`,
//             animationDuration: `${2 + Math.random() * 2}s`,
//           }}
//         />
//       ))}
//     </div>
//   )
// }

// export function ParticleSystem3D({ count = 1000 }: ParticleSystemProps) {
//   return (
//     <div className="absolute inset-0 pointer-events-none">
//       <ErrorBoundary fallback={<CSSParticleFallback />}>
//         <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
//           <ambientLight intensity={0.5} />
//           <Particles count={count} />
//         </Canvas>
//       </ErrorBoundary>
//     </div>
//   )
// }
