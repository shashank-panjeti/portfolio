"use client"

import type React from "react"

import { Suspense, useRef, useEffect, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { PerspectiveCamera, useGLTF } from "@react-three/drei"
import type * as THREE from "three"

let mouseX = 0
let mouseY = 0

if (typeof window !== "undefined") {
  window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX
    mouseY = event.clientY
  })
}

function ModelWithErrorBoundary({ modelPath }: { modelPath: string }) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return <PlaceholderScene />
  }

  return (
    <ErrorBoundary onError={() => setHasError(true)}>
      <Model modelPath={modelPath} />
    </ErrorBoundary>
  )
}

function ErrorBoundary({ children, onError }: { children: React.ReactNode; onError: () => void }) {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (event.message.includes("Could not load") || event.message.includes("<!DOCTYPE")) {
        event.preventDefault()
        onError()
      }
    }
    window.addEventListener("error", handleError)
    return () => window.removeEventListener("error", handleError)
  }, [onError])

  return <>{children}</>
}

function Model({ modelPath }: { modelPath: string }) {
  const modelRef = useRef<THREE.Group>(null)
  const { size } = useThree()
  const gltf = useGLTF(modelPath)
  const scene: THREE.Group | null = gltf.scene

  useEffect(() => {
    if (scene) {
      scene.scale.set(0.3, 0.3, 0.3)
      scene.position.set(0, 0, 0)
      scene.rotation.set(0, 0, 0)

      // Enable shadows
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          child.castShadow = true
          child.receiveShadow = true
        }
      })
    }
  }, [scene])

  useFrame(() => {
    if (modelRef.current && size.width > 0) {
      const targetY = -0.2 + (mouseX / size.width) * 0.15
      const targetX = -0.15 + (mouseY / size.height) * 0.3

      modelRef.current.rotation.y += (targetY - modelRef.current.rotation.y) * 0.1
      modelRef.current.rotation.x += (targetX - modelRef.current.rotation.x) * 0.1
    }
  })

  if (!scene) {
    return <PlaceholderScene />
  }

  return <primitive ref={modelRef} object={scene} />
}

function PlaceholderScene() {
  const meshRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <group>
      <mesh ref={meshRef}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#6366f1" wireframe />
      </mesh>
      <mesh ref={ringRef} position={[0, 0, 0]}>
        <torusGeometry args={[2, 0.1, 16, 100]} />
        <meshStandardMaterial color="#8b5cf6" wireframe />
      </mesh>
      <mesh position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[3, 32]} />
        <meshStandardMaterial color="#334155" opacity={0.3} transparent />
      </mesh>
    </group>
  )
}

interface GLTFModelViewerProps {
  modelPath: string
  className?: string
  cameraPosition?: [number, number, number]
}

export function GLTFModelViewer({ modelPath, className = "", cameraPosition = [0, 0, 5] }: GLTFModelViewerProps) {
  const hasValidModel = modelPath && modelPath.trim() !== ""

  return (
    <div className={`w-full h-full ${className}`} style={{ minHeight: "400px" }}>
      <Canvas shadows gl={{ alpha: true, antialias: true }}>
        <PerspectiveCamera makeDefault position={cameraPosition} fov={20} />

        <ambientLight intensity={1.2} position={[2, 3, 4]} />
        <directionalLight position={[0, 2, 2]} intensity={0.8} castShadow />
        <directionalLight position={[0, 0, -2]} intensity={0.2} castShadow />

        <Suspense fallback={<PlaceholderScene />}>
          {hasValidModel ? <ModelWithErrorBoundary modelPath={modelPath} /> : <PlaceholderScene />}
        </Suspense>
      </Canvas>
    </div>
  )
}
