"use client"

import { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

// Configuration
const MORPH_SPEED = 0.005
const WAIT_TIME = 2000
const SCATTER_STRENGTH = 5.0
const POINT_SIZE = 0.005
// const POINT_COLOR = 0x777777
const CAMERA_DISTANCE = 2.5


// Using Theme Colors
  function useThemedThreeColor(lightHex = "#2c2c2c", darkHex = "#dedede") {
  const [color, setColor] = useState(new THREE.Color(lightHex))

  useEffect(() => {
    const pick = () =>
      new THREE.Color(
        document.documentElement.classList.contains("dark") ? darkHex : lightHex
      )

    setColor(pick())

    // update whenever `.dark` class flips
    const obs = new MutationObserver(() => setColor(pick()))
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    return () => obs.disconnect()
  }, [lightHex, darkHex])

  return color
}


const CUSTOM_MODEL_PATHS = [
  // Uncomment and add your model paths here:
  "/models/contact/camera.glb",
  // "/models/contact/house.glb",
  // Example: "/models/contact/logo.glb",
  // INSTRUCTIONS:
  // 1. Place your .glb files in: public/models/contact/
  // 2. Uncomment the lines above and replace with your actual filenames
  // 3. The animation will morph between default shapes AND your custom models
]

function createProceduralGeometries() {
  const targetSize = 10

  // Sphere
  const sphereGeom = new THREE.IcosahedronGeometry(targetSize / 2, 4)

  // Cube
  const cubeGeom = new THREE.BoxGeometry(targetSize * 0.6, targetSize * 0.6, targetSize * 0.6, 20, 20, 20)

  // Torus
  const torusGeom = new THREE.TorusGeometry(targetSize * 0.35, targetSize * 0.15, 30, 100)

  return [sphereGeom, cubeGeom, torusGeom]
}

function useCustomModels(modelPaths: string[]) {
  const [models, setModels] = useState<THREE.BufferGeometry[]>([])

  useEffect(() => {
    if (modelPaths.length === 0) return

    const loader = new GLTFLoader()
    const loadedGeometries: THREE.BufferGeometry[] = []

    const loadModels = async () => {
      for (const path of modelPaths) {
        try {
          const gltf = await new Promise<any>((resolve, reject) => {
            loader.load(path, resolve, undefined, reject)
          })

          console.log("Loaded model:", path)

          // Extract all meshes from the GLTF scene
          gltf.scene.traverse((child: any) => {
            if (child instanceof THREE.Mesh && child.geometry) {
              const geom = child.geometry.clone()

              // Apply world transform to get correct positions
              child.updateWorldMatrix(true, false)
              geom.applyMatrix4(child.matrixWorld)

              loadedGeometries.push(geom)
            }
          })
        } catch (error) {
          console.log("Failed to load model:", path, error)
        }
      }

      if (loadedGeometries.length > 0) {
        setModels(loadedGeometries)
        console.log("Successfully loaded", loadedGeometries.length, "custom geometries")
      }
    }

    loadModels()
  }, [modelPaths])

  return models
}

function MorphingParticles({ customModelPaths }: { customModelPaths: string[] }) {
  const POINT_COLOR = useThemedThreeColor("#2c2c2c", "#dedede")
  const pointsRef = useRef<THREE.Points>(null!)
  const { camera } = useThree()
  const [isMobile, setIsMobile] = useState(false)

  const customGeometries = useCustomModels(customModelPaths)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Mouse tracking
  const mouseRef = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = event.clientX / window.innerWidth
      mouseRef.current.y = event.clientY / window.innerHeight
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const { positions, scatterDirections, maxCount } = useMemo(() => {
    const proceduralGeoms = createProceduralGeometries()
    const allGeoms = [...proceduralGeoms, ...customGeometries]

    console.log(" Total geometries in morph cycle:", allGeoms.length)

    const maxCount = Math.max(...allGeoms.map((g) => g.attributes.position.count))

    // Normalize all models to same vertex count
    const positions = allGeoms.map((geom) => {
      const arr = new Float32Array(maxCount * 3)
      for (let i = 0; i < maxCount; i++) {
        const idx = i % geom.attributes.position.count
        arr[i * 3] = geom.attributes.position.getX(idx)
        arr[i * 3 + 1] = geom.attributes.position.getY(idx)
        arr[i * 3 + 2] = geom.attributes.position.getZ(idx)
      }
      return arr
    })

    // Precompute scatter directions
    const scatterDirections = new Float32Array(maxCount * 3)
    for (let i = 0; i < maxCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      scatterDirections[i * 3] = Math.sin(phi) * Math.cos(theta)
      scatterDirections[i * 3 + 1] = Math.sin(phi) * Math.sin(theta)
      scatterDirections[i * 3 + 2] = Math.cos(phi)
    }

    return { positions, scatterDirections, maxCount }
  }, [customGeometries])

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry()
    const positionAttribute = new THREE.BufferAttribute(positions[0], 3)
    geom.setAttribute("position", positionAttribute)
    return geom
  }, [positions])

  // Animation state
  const animationState = useRef({
    morphProgress: 0,
    currentModelIndex: 0,
    nextModelIndex: 1,
    direction: 1,
    waitTimer: 0,
  })

  // Fit camera to object
  useEffect(() => {
    if (pointsRef.current && camera) {
      const boundingBox = new THREE.Box3().setFromObject(pointsRef.current)
      const size = new THREE.Vector3()
      boundingBox.getSize(size)

      const maxDim = Math.max(size.x, size.y, size.z)
      const fov = (camera as THREE.PerspectiveCamera).fov * (Math.PI / 180)
      const cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * CAMERA_DISTANCE

      camera.position.z = cameraZ
      camera.updateProjectionMatrix()
    }
  }, [camera])

  useFrame((state, delta) => {
    if (!pointsRef.current || positions.length < 2) return

    const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array
    const state_anim = animationState.current
    const posA = positions[state_anim.currentModelIndex]
    const posB = positions[state_anim.nextModelIndex]

    // Update morph progress
    if (state_anim.direction === 1) {
      state_anim.morphProgress += MORPH_SPEED
      if (state_anim.morphProgress > 1) state_anim.morphProgress = 1
    }

    if (state_anim.morphProgress >= 1 && state_anim.direction === 1) {
      state_anim.direction = 0 // pause

      // Resume after wait time
      setTimeout(() => {
        state_anim.currentModelIndex = state_anim.nextModelIndex
        state_anim.nextModelIndex = (state_anim.nextModelIndex + 1) % positions.length
        state_anim.morphProgress = 0
        state_anim.direction = 1
      }, WAIT_TIME)
    }

    // Smooth easing
    const t = state_anim.morphProgress
    const easedT = t * t * (3 - 2 * t) // smoothstep
    const scatter = Math.sin(easedT * Math.PI)

    // Interpolate positions with scatter effect
    for (let i = 0; i < posArray.length; i += 3) {
      const baseX = THREE.MathUtils.lerp(posA[i], posB[i], easedT)
      const baseY = THREE.MathUtils.lerp(posA[i + 1], posB[i + 1], easedT)
      const baseZ = THREE.MathUtils.lerp(posA[i + 2], posB[i + 2], easedT)

      const dirX = scatterDirections[i]
      const dirY = scatterDirections[i + 1]
      const dirZ = scatterDirections[i + 2]

      posArray[i] = baseX + dirX * scatter * SCATTER_STRENGTH
      posArray[i + 1] = baseY + dirY * scatter * SCATTER_STRENGTH
      posArray[i + 2] = baseZ + dirZ * scatter * SCATTER_STRENGTH
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true

    // Mobile: shift up, Desktop: shift left
    if (isMobile) {
      pointsRef.current.position.y = 8
      pointsRef.current.position.x = 0
    } else {
      pointsRef.current.position.x = -10
      pointsRef.current.position.y = 0
    }

    // Mouse tilt
    const targetY = -0.3 + mouseRef.current.x * 0.4
    const targetX = -0.15 + mouseRef.current.y * 0.3
    pointsRef.current.rotation.y += (targetY - pointsRef.current.rotation.y) * 0.05
    pointsRef.current.rotation.x += (targetX - pointsRef.current.rotation.x) * 0.05
  })

  return (
    <points ref={pointsRef} geometry={geometry}>
      {/* Point Color with CSS */}
      <pointsMaterial size={POINT_SIZE} color={POINT_COLOR} /> 
    </points>
  )
}

export function ParticleMorphAnimation() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
        className="w-full h-full"
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 5, 3]} intensity={0.8} />
        <MorphingParticles customModelPaths={CUSTOM_MODEL_PATHS} />
      </Canvas>
    </div>
  )
}
