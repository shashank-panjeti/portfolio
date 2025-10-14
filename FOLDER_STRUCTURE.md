# Portfolio Website - Folder Structure Guide

## 3D Models & Assets Organization

### Main Public Directory Structure

\`\`\`
public/
├── models/                    # All 3D models (GLTF/GLB files)
│   ├── README.md             # Documentation for 3D models
│   ├── projects/             # Models used in project showcases
│   │   ├── iphone14.glb
│   │   ├── safemilo-home-iphone.glb
│   │   ├── house.glb
│   │   └── finalcam.glb
│   └── contact/              # Models for contact page (optional)
│       └── particles.glb
│
├── images/                   # Static images
│   ├── projects/            # Project screenshots
│   └── general/             # General site images
│
└── assets/                  # Other assets (fonts, icons, etc.)
\`\`\`

## Where to Place Your Files

### 3D Models (GLTF/GLB)

**Location**: `public/models/projects/`

**For Project Showcases**:
1. Place your `.glb` or `.gltf` file in `public/models/projects/`
2. Update `lib/project-data.ts`:
   \`\`\`typescript
   {
     id: "your-project",
     title: "Your Project",
     modelPath: "/models/projects/your-model.glb",
     // ... other fields
   }
   \`\`\`

**For Contact Page Particles**:
- Currently using procedural Three.js particles
- To use custom models: place in `public/models/contact/`
- Update `components/particle-system-3d.tsx`

### Images

**Location**: `public/images/projects/`

\`\`\`typescript
{
  id: "your-project",
  image: "/images/projects/your-screenshot.jpg",
  // ...
}
\`\`\`

## Component Architecture

### 3D Model Components

\`\`\`
components/
├── gltf-model-viewer.tsx      # Main GLTF loader with React Three Fiber
├── project-3d-model.tsx       # Wrapper for project 3D models
├── particle-system-3d.tsx     # 3D particle system for contact page
└── particle-contact-animation.tsx  # Contact page animation wrapper
\`\`\`

### How Components Work Together

1. **GLTFModelViewer** - Core component that loads and displays GLTF models
   - Uses React Three Fiber and Three.js
   - Handles lighting, camera, and controls
   - Provides loading fallback

2. **Project3DModel** - Wraps GLTFModelViewer for project cards
   - Adds error handling
   - Shows fallback UI if model missing
   - Used in project cards and detail pages

3. **ParticleSystem3D** - Creates animated particle effects
   - Procedural particle generation
   - Used in contact page background

## File Naming Conventions

### 3D Models
- Use lowercase with hyphens: `iphone-14.glb`
- Be descriptive: `modern-house-exterior.glb`
- Prefer `.glb` over `.gltf` for smaller file size

### Images
- Use lowercase with hyphens: `project-screenshot.jpg`
- Include context: `health-app-mobile-interface.png`

## Quick Reference

| Asset Type | Location | Reference In Code |
|------------|----------|-------------------|
| Project 3D Models | `public/models/projects/` | `modelPath: "/models/projects/file.glb"` |
| Contact Particles | `public/models/contact/` | Update `particle-system-3d.tsx` |
| Project Images | `public/images/projects/` | `image: "/images/projects/file.jpg"` |
| General Images | `public/images/` | `src="/images/file.jpg"` |

## Adding a New Project with 3D Model

1. **Add your 3D model**:
   \`\`\`bash
   # Place file in:
   public/models/projects/your-model.glb
   \`\`\`

2. **Add project data** in `lib/project-data.ts`:
   \`\`\`typescript
   {
     id: "unique-id",
     title: "Project Title",
     category: "ux-ui", // or "architecture", "interior", "3d", "photography"
     description: "Brief description",
     year: "2024",
     tags: ["Tag1", "Tag2"],
     image: "/images/projects/screenshot.jpg",
     modelPath: "/models/projects/your-model.glb",
     featured: true, // optional
   }
   \`\`\`

3. **Test your model**:
   - Navigate to the projects page
   - Click on your project
   - Verify the 3D model loads and rotates

## Optimization Tips

- **Model Size**: Keep GLB files under 5MB
- **Textures**: Compress textures before embedding
- **Geometry**: Reduce polygon count for web use
- **Format**: Use `.glb` (binary) instead of `.gltf` (JSON)

## Troubleshooting

**Model doesn't appear?**
- Check file path matches exactly
- Verify file is in `public/models/projects/`
- Check browser console for errors
- Test model in [GLTF Viewer](https://gltf-viewer.donmccurdy.com/)

**Performance issues?**
- Reduce model polygon count
- Compress textures
- Use `.glb` format
- Check file size (should be < 5MB)

## Important Notes

**Models are Optional**: The website works perfectly without actual GLB files. It will show animated wireframe placeholders until you add real models.

**No Errors**: The site is designed to never crash from missing models - it gracefully falls back to placeholders.

**Upload in v0**: You can upload GLB files directly in the v0 chat by clicking the paperclip icon and asking me to place them in the correct folder.
