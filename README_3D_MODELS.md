# 3D Models Setup Guide

## Quick Start

Your portfolio website is now fully configured for 3D models using Three.js and React Three Fiber!

## Folder Structure for 3D Models

\`\`\`
public/
├── models/
│   ├── projects/              # 3D models for project showcases
│   │   ├── safemilo-home-iphone.glb
│   │   ├── iphone14.glb
│   │   ├── house.glb
│   │   └── finalcam.glb
│   └── README.md
\`\`\`

## How to Add Your 3D Models

### Option 1: In v0 (Recommended)
1. Click the paperclip icon (📎) in the chat
2. Upload your `.glb` or `.gltf` files
3. Tell me: "Place these models in public/models/projects/"
4. I'll add them to the correct location

### Option 2: After Downloading Project
1. Download the project ZIP
2. Extract it
3. Create the folder: `public/models/projects/`
4. Copy your GLB files into that folder
5. Make sure the filenames match what's in `lib/project-data.ts`

## Current Model References

Your project is configured to load these models:

| Project | Model Path | Location |
|---------|-----------|----------|
| SafeMilo Home | `/models/projects/safemilo-home-iphone.glb` | Projects page |
| Van Rental App | `/models/projects/iphone14.glb` | Projects page |
| Residential Architecture | `/models/projects/house.glb` | Projects page |
| Interior Design | `/models/projects/finalcam.glb` | Projects page |

## File Format Recommendations

- **Use GLB format** (binary GLTF) - it's more compact and loads faster
- **Optimize your models** before uploading:
  - Keep polygon count reasonable (under 100k triangles)
  - Compress textures (1024x1024 or 2048x2048 max)
  - Use tools like [gltf-transform](https://gltf-transform.donmccurdy.com/) to optimize

## What Happens Without Models?

Don't worry! The website works perfectly without the actual model files:
- Shows animated wireframe placeholders
- No errors or crashes
- Still looks professional
- Replace with real models anytime

## Updating Model Paths

To change which models are displayed, edit `lib/project-data.ts`:

\`\`\`typescript
export const projects = [
  {
    id: "safemilo-home",
    title: "SafeMilo Home",
    modelPath: "/models/projects/your-model-name.glb", // Change this
    // ... other properties
  },
]
\`\`\`

## Testing Your Models

1. Add your GLB file to `public/models/projects/`
2. Refresh the page
3. The model should load automatically
4. Use mouse to rotate, scroll to zoom

## Troubleshooting

**Model not loading?**
- Check the filename matches exactly (case-sensitive)
- Verify the file is in `public/models/projects/`
- Check browser console for errors
- Try opening the GLB file in a 3D viewer to verify it's valid

**Model too big/small?**
- Models are auto-scaled to fit the viewport
- You can adjust scale in the component if needed

**Model looks dark?**
- The scene has automatic lighting
- Check if your model has materials/textures

## Contact Page Particles

The contact page uses procedural 3D particles (no model file needed):
- 800 animated particles
- Automatic rotation and pulsing
- Falls back to CSS animation if Three.js fails

## Need Help?

Just ask me in the chat! I can:
- Help you add models
- Adjust camera positions
- Change lighting
- Modify animations
- Debug loading issues
