"use client"

import * as THREE from "three"
import { useMemo, useState } from "react"
import { createPortal, useFrame } from "@react-three/fiber"
import { useFBO } from "@react-three/drei"

interface ParticlesProps {
  speed: number
  fov: number
  aperture: number
  focus: number
  curl: number
  size?: number
}

function getPoint(v: THREE.Vector3, size: number, data: Float32Array, offset: number) {
  v.set(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1)
  if (v.length() > 1) return getPoint(v, size, data, offset)
  return v.normalize().multiplyScalar(size).toArray(data, offset)
}

function getSphere(count: number, size: number) {
  const data = new Float32Array(count * 4)
  const p = new THREE.Vector3()
  for (let i = 0; i < count * 4; i += 4) {
    getPoint(p, size, data, i)
  }
  return data
}

export function Particles({ speed, fov, aperture, focus, curl, size = 512 }: ParticlesProps) {
  const simulationMaterial = useMemo(() => {
    const positionsTexture = new THREE.DataTexture(
      getSphere(size * size, 128),
      size,
      size,
      THREE.RGBAFormat,
      THREE.FloatType,
    )
    positionsTexture.needsUpdate = true

    return new THREE.ShaderMaterial({
      uniforms: {
        positions: { value: positionsTexture },
        uTime: { value: 0 },
        uCurlFreq: { value: 0.25 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D positions;
        uniform float uTime;
        uniform float uCurlFreq;
        varying vec2 vUv;
        
        vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
        vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

        float snoise(vec3 v){ 
          const vec2  C = vec2(1.0/6.0, 1.0/3.0);
          const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
          vec3 i  = floor(v + dot(v, C.yyy));
          vec3 x0 =   v - i + dot(i, C.xxx);
          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min(g.xyz, l.zxy);
          vec3 i2 = max(g.xyz, l.zxy);
          vec3 x1 = x0 - i1 + 1.0 * C.xxx;
          vec3 x2 = x0 - i2 + 2.0 * C.xxx;
          vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
          i = mod(i, 289.0);
          vec4 p = permute(permute(permute(
                   i.z + vec4(0.0, i1.z, i2.z, 1.0))
                 + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                 + i.x + vec4(0.0, i1.x, i2.x, 1.0));
          float n_ = 1.0/7.0;
          vec3  ns = n_ * D.wyz - D.xzx;
          vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_);
          vec4 x = x_ * ns.x + ns.yyyy;
          vec4 y = y_ * ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);
          vec4 b0 = vec4(x.xy, y.xy);
          vec4 b1 = vec4(x.zw, y.zw);
          vec4 s0 = floor(b0) * 2.0 + 1.0;
          vec4 s1 = floor(b1) * 2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));
          vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
          vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
          vec3 p0 = vec3(a0.xy, h.x);
          vec3 p1 = vec3(a0.zw, h.y);
          vec3 p2 = vec3(a1.xy, h.z);
          vec3 p3 = vec3(a1.zw, h.w);
          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
          p0 *= norm.x;
          p1 *= norm.y;
          p2 *= norm.z;
          p3 *= norm.w;
          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
        }
        
        vec3 curl(vec3 p) {
          const float e = 0.1;
          vec3 dx = vec3(e, 0.0, 0.0);
          vec3 dy = vec3(0.0, e, 0.0);
          vec3 dz = vec3(0.0, 0.0, e);

          vec3 p_x0 = snoise(p - dx) * vec3(1.0);
          vec3 p_x1 = snoise(p + dx) * vec3(1.0);
          vec3 p_y0 = snoise(p - dy) * vec3(1.0);
          vec3 p_y1 = snoise(p + dy) * vec3(1.0);
          vec3 p_z0 = snoise(p - dz) * vec3(1.0);
          vec3 p_z1 = snoise(p + dz) * vec3(1.0);

          float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
          float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
          float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;

          return normalize(vec3(x, y, z));
        }
        
        void main() {
          float t = uTime * 0.015;
          vec3 pos = texture2D(positions, vUv).rgb;
          vec3 curlPos = texture2D(positions, vUv).rgb;
          
          pos = curl(pos * uCurlFreq + t);
          curlPos = curl(curlPos * uCurlFreq + t);
          curlPos += curl(curlPos * uCurlFreq * 2.0) * 0.5;
          curlPos += curl(curlPos * uCurlFreq * 4.0) * 0.25;
          curlPos += curl(curlPos * uCurlFreq * 8.0) * 0.125;
          curlPos += curl(pos * uCurlFreq * 16.0) * 0.0625;
          
          gl_FragColor = vec4(mix(pos, curlPos, snoise(pos + t)), 1.0);
        }
      `,
    })
  }, [size])

  const renderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        positions: { value: null },
        uTime: { value: 0 },
        uFocus: { value: 5.1 },
        uFov: { value: 50 },
        uBlur: { value: 30 },
      },
      vertexShader: `
        uniform sampler2D positions;
        uniform float uTime;
        uniform float uFocus;
        uniform float uFov;
        uniform float uBlur;
        varying float vDistance;
        
        void main() { 
          vec3 pos = texture2D(positions, position.xy).xyz;
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          vDistance = abs(uFocus - -mvPosition.z);
          gl_PointSize = max(2.0, (step(1.0 - (1.0 / uFov), position.x)) * vDistance * uBlur * 0.1);
        }
      `,
      fragmentShader: `
        varying float vDistance;
        
        void main() {
          vec2 cxy = 2.0 * gl_PointCoord - 1.0;
          if (dot(cxy, cxy) > 1.0) discard;
          gl_FragColor = vec4(vec3(1.0), 0.8);
        }
      `,
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false,
    })
  }, [])

  // Set up FBO
  const [scene] = useState(() => new THREE.Scene())
  const [camera] = useState(() => new THREE.OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1))

  const fboGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0])
    const uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0])

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2))

    return geometry
  }, [])

  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const length = size * size
    const particles = new Float32Array(length * 3)

    for (let i = 0; i < length; i++) {
      const i3 = i * 3
      particles[i3 + 0] = (i % size) / size
      particles[i3 + 1] = i / size / size
      particles[i3 + 2] = 0
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(particles, 3))

    return geometry
  }, [size])

  const target = useFBO(size, size, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBAFormat,
    type: THREE.FloatType,
  })

  useFrame((state) => {
    state.gl.setRenderTarget(target)
    state.gl.clear()
    state.gl.render(scene, camera)
    state.gl.setRenderTarget(null)

    renderMaterial.uniforms.positions.value = target.texture
    renderMaterial.uniforms.uTime.value = state.clock.elapsedTime
    renderMaterial.uniforms.uFocus.value = THREE.MathUtils.lerp(renderMaterial.uniforms.uFocus.value, focus, 0.1)
    renderMaterial.uniforms.uFov.value = THREE.MathUtils.lerp(renderMaterial.uniforms.uFov.value, fov, 0.1)
    renderMaterial.uniforms.uBlur.value = THREE.MathUtils.lerp(
      renderMaterial.uniforms.uBlur.value,
      (5.6 - aperture) * 9,
      0.1,
    )

    simulationMaterial.uniforms.uTime.value = state.clock.elapsedTime * speed
    simulationMaterial.uniforms.uCurlFreq.value = THREE.MathUtils.lerp(
      simulationMaterial.uniforms.uCurlFreq.value,
      curl,
      0.1,
    )

    if (state.clock.elapsedTime < 0.1) {
      console.log("[v0] FBO texture:", target.texture)
      console.log("[v0] Particle count:", particlesGeometry.attributes.position.count)
    }
  })

  return (
    <>
      {createPortal(<mesh geometry={fboGeometry} material={simulationMaterial} />, scene)}
      <points geometry={particlesGeometry} material={renderMaterial} />
    </>
  )
}
