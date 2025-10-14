import "./style.css"
import * as THREE from "three"
import * as dat from "dat.gui"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { BufferGeometryUtils } from "three/examples/jsm/utils/BufferGeometryUtils.js"

const gltfLoader = new GLTFLoader()

// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector("canvas.webgl")

// Scene
const scene = new THREE.Scene()

// Mouse Tracking
let mouseX = window.innerWidth / 2
let mouseY = window.innerHeight / 2

window.addEventListener("mousemove", (event) => {
  mouseX = event.clientX
  mouseY = event.clientY
})

const morphSpeed = 0.008 // speed of morph transition
const waitTime = 2000 // pause after each morph (ms)
const scatterStrength = 4.0 // how far particles scatter outward
const pointSize = 0.005 // size of particles
const pointColor = 0xaaaaaa // color of particles
const cameraDistance = 2 // distance of camera from model

// Global Reference
let pointsModel
let modelsPositions = []
let scatterDirections
let morphProgress = 0
let currentModelIndex = 0
let nextModelIndex = 1
let direction = 1

// Extract merged geometry from gltf
function getMergedGeometry(gltf) {
  const model = gltf.scene
  const geometries = []

  model.traverse((child) => {
    if (child.isMesh) {
      child.updateWorldMatrix(true, false)
      const geom = child.geometry.clone()
      geom.applyMatrix4(child.matrixWorld)

      // Ensure attribute consistency
      if (geom.getAttribute("uv")) geom.deleteAttribute("uv")
      if (geom.getAttribute("uv2")) geom.deleteAttribute("uv2")

      geometries.push(geom)
    }
  })

  return BufferGeometryUtils.mergeBufferGeometries(geometries, false)
}

// Normalize all models to same bounding box size
function normalizeGeometry(geom, targetSize = 10) {
  geom.computeBoundingBox()
  const box = geom.boundingBox
  const size = new THREE.Vector3()
  box.getSize(size)

  const maxDim = Math.max(size.x, size.y, size.z)
  const scale = targetSize / maxDim

  const matrix = new THREE.Matrix4().makeScale(scale, scale, scale)
  geom.applyMatrix4(matrix)

  geom.computeBoundingBox()
  return geom
}

// Fit camera to object
function fitCameraToObject(camera, object, offset = cameraDistance) {
  const boundingBox = new THREE.Box3().setFromObject(object)
  const size = new THREE.Vector3()
  boundingBox.getSize(size)

  const maxDim = Math.max(size.x, size.y, size.z)
  const fov = camera.fov * (Math.PI / 180)
  const cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * offset

  camera.position.z = cameraZ
  camera.updateProjectionMatrix()
}

// Load Models here
const modelPaths = ["/finalcam.gltf", "/house.gltf", "/iphone14.gltf"]

Promise.all(modelPaths.map((path) => new Promise((resolve) => gltfLoader.load(path, resolve)))).then((gltfs) => {
  // Extract geometries
  // const geoms = gltfs.map(g => getMergedGeometry(g))
  const geoms = gltfs.map((g) => normalizeGeometry(getMergedGeometry(g)))

  // Find max vertex count
  const maxCount = Math.max(...geoms.map((g) => g.attributes.position.count))

  // Normalize all models to the same vertex count
  modelsPositions = geoms.map((geom) => {
    const arr = new Float32Array(maxCount * 3)
    for (let i = 0; i < maxCount; i++) {
      const idx = i % geom.attributes.position.count
      arr[i * 3] = geom.attributes.position.getX(idx)
      arr[i * 3 + 1] = geom.attributes.position.getY(idx)
      arr[i * 3 + 2] = geom.attributes.position.getZ(idx)
    }
    return arr
  })

  // Precompute scatter directions (from first model)
  scatterDirections = new Float32Array(maxCount * 3)
  for (let i = 0; i < maxCount; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    scatterDirections[i * 3] = Math.sin(phi) * Math.cos(theta)
    scatterDirections[i * 3 + 1] = Math.sin(phi) * Math.sin(theta)
    scatterDirections[i * 3 + 2] = Math.cos(phi)
  }

  // Create initial points
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute("position", new THREE.BufferAttribute(modelsPositions[0].slice(), 3))

  const material = new THREE.PointsMaterial({
    color: pointColor,
    size: pointSize,
  })

  pointsModel = new THREE.Points(geometry, material)
  scene.add(pointsModel)

  // Fit camera to object
  fitCameraToObject(camera, pointsModel, cameraDistance)
})

// Lights

const ambientLight = new THREE.AmbientLight(0xffffff, 1.2)
ambientLight.position.set(2, 3, 4)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
directionalLight.position.set(2, 5, 3)
directionalLight.target.position.set(0, 0, 0)
directionalLight.castShadow = true
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Refit camera
  if (pointsModel) fitCameraToObject(camera, pointsModel)
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 0, 15)

scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: canvas,
  alpha: true,
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap

/**
 * Animate
 */

function animate() {
  requestAnimationFrame(animate)

  if (pointsModel && modelsPositions.length > 1) {
    const positions = pointsModel.geometry.attributes.position.array
    const posA = modelsPositions[currentModelIndex]
    const posB = modelsPositions[nextModelIndex]

    // Update morph progress
    if (direction === 1) {
      morphProgress += morphSpeed
      if (morphProgress > 1) morphProgress = 1
    }

    if (morphProgress >= 1 && direction === 1) {
      direction = 0 // pause morph

      // resume after wait time mentioned above
      setTimeout(() => {
        currentModelIndex = nextModelIndex
        nextModelIndex = (nextModelIndex + 1) % modelsPositions.length
        morphProgress = 0
        direction = 1
      }, waitTime)
    }

    // easein-out morph progress
    const t = morphProgress
    const easedT = t * t * (3 - 2 * t) // smoothstep

    const scatter = Math.sin(easedT * Math.PI)

    for (let i = 0; i < positions.length; i += 3) {
      const baseX = THREE.MathUtils.lerp(posA[i], posB[i], easedT)
      const baseY = THREE.MathUtils.lerp(posA[i + 1], posB[i + 1], easedT)
      const baseZ = THREE.MathUtils.lerp(posA[i + 2], posB[i + 2], easedT)

      // Outward explosion
      const dirX = scatterDirections[i]
      const dirY = scatterDirections[i + 1]
      const dirZ = scatterDirections[i + 2]

      positions[i] = baseX + dirX * scatter * scatterStrength
      positions[i + 1] = baseY + dirY * scatter * scatterStrength
      positions[i + 2] = baseZ + dirZ * scatter * scatterStrength
    }

    pointsModel.geometry.attributes.position.needsUpdate = true

    // Mouse tilt
    const targetY = -0.3 + (mouseX / window.innerWidth) * 0.4
    const targetX = -0.15 + (mouseY / window.innerHeight) * 0.3
    pointsModel.rotation.y += (targetY - pointsModel.rotation.y) * 0.05
    pointsModel.rotation.x += (targetX - pointsModel.rotation.x) * 0.05
  }

  renderer.render(scene, camera)
}

animate()
