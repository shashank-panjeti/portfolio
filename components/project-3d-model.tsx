"use client"

import { GLTFModelViewer } from "./gltf-model-viewer"

interface Project3DModelProps {
  modelPath: string
  className?: string
}

export function Project3DModel({ modelPath, className = "" }: Project3DModelProps) {
  if (!modelPath) {
    return (
      <div
        className={`w-full h-full ${className} relative overflow-hidden rounded-lg bg-none flex items-center justify-center`}
        style={{ minHeight: "400px" }}
      >
        <div className="text-center space-y-2">
          <div className="w-16 h-16 mx-auto bg-none rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-none rounded-sm transform rotate-45" />
          </div>
          <p className="text-sm text-muted-foreground">3D Model Preview</p>
          <p className="text-xs text-muted-foreground/60">Add modelPath to display 3D model</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`w-full h-full ${className} rounded-lg overflow-hidden`}>
      <GLTFModelViewer modelPath={modelPath} cameraPosition={[0, 0, 5]} />
    </div>
  )
}
