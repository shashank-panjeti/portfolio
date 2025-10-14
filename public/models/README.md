# 3D Models Directory

This folder contains all GLTF/GLB 3D models used throughout the portfolio website.

## Folder Structure

\`\`\`
public/
  └── models/
      ├── README.md (this file)
      └── projects/          # Models for project showcases
          ├── iphone14.glb
          ├── safemilo-home-iphone.glb
          ├── house.glb
          └── finalcam.glb
\`\`\`

## How to Add Your Models

### For Project Models:
1. Export your 3D model as `.glb` (preferred) or `.gltf` format
2. Place the file in `public/models/projects/`
3. Update the `modelPath` in `lib/project-data.ts`:
   \`\`\`typescript
   modelPath: "/models/projects/your-model-name.glb"
   \`\`\`

### For Contact Page Particles:
The contact page uses a procedurally generated 3D particle system - no model files needed!

## File Format Guidelines

- **Preferred Format**: `.glb` (binary GLTF - smaller file size)
- **Alternative**: `.gltf` (JSON format - easier to debug)
- **Recommended File Size**: Keep models under 5MB for optimal loading
- **Optimization**: Use tools like [gltf-pipeline](https://github.com/CesiumGS/gltf-pipeline) to compress models

## Model Requirements

- **Scale**: Models should be reasonably scaled (around 1-2 units)
- **Origin**: Center your model at the origin (0,0,0) before export
- **Materials**: PBR materials work best with the lighting setup
- **Textures**: Embed textures in GLB or keep them in the same directory for GLTF

## Current Models Needed

| File Name | Used In | Description |
|-----------|---------|-------------|
| `iphone14.glb` | Siesta Campers project | iPhone 14 model for mobile app showcase |
| `safemilo-home-iphone.glb` | Timeline app project | iPhone with health app interface |
| `house.glb` | Architectural Residence | Modern house exterior model |
| `finalcam.glb` | Product Visualization | Camera product render |

**Note**: Until you add these files, the website shows beautiful animated wireframe placeholders.

## Troubleshooting

If your model doesn't appear:
1. Check the file path is correct in `project-data.ts`
2. Ensure the file is in `public/models/projects/` directory
3. Verify the model loads in a GLTF viewer first
4. Check browser console for loading errors
5. Make sure the file size isn't too large (>10MB may cause issues)

## Resources

- [GLTF Viewer](https://gltf-viewer.donmccurdy.com/) - Test your models
- [Blender](https://www.blender.org/) - Free 3D modeling software
- [Sketchfab](https://sketchfab.com/) - Download free 3D models
- [glTF Sample Models](https://github.com/KhronosGroup/glTF-Sample-Models) - Test models
