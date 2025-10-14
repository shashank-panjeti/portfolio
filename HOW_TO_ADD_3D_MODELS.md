# How to Add 3D Models to Your Portfolio

## Quick Start

Your 3D models are currently showing placeholder wireframes because the actual model files haven't been added yet. Here's how to add them:

## Step 1: Prepare Your 3D Models

1. **Export your models** as `.glb` (recommended) or `.gltf` format
2. **Optimize them** for web:
   - Keep file size under 5MB
   - Reduce polygon count if needed
   - Compress textures

## Step 2: Add Models to Your Project

### Option A: Using the v0 Interface (Recommended)

1. Click the **paperclip icon** (📎) in the v0 chat
2. Upload your `.glb` or `.gltf` files
3. Ask me to place them in the correct location:
   \`\`\`
   "Place these models in public/models/projects/"
   \`\`\`

### Option B: After Downloading the Project

1. Download your project (click three dots → Download ZIP)
2. Create the folder structure:
   \`\`\`
   public/
     └── models/
         └── projects/
             ├── house.glb
             ├── iphone14.glb
             ├── safemilo-home-iphone.glb
             └── finalcam.glb
   \`\`\`
3. Copy your `.glb` files into `public/models/projects/`

## Step 3: Update Model Paths (Already Done!)

The model paths are already configured in `lib/project-data.ts`:

\`\`\`typescript
{
  id: "timeline-app",
  modelPath: "/models/projects/safemilo-home-iphone.glb",
  // ...
}
\`\`\`

## Current Model Requirements

Based on your `project-data.ts`, you need these models:

| Project | Expected File | Location |
|---------|--------------|----------|
| Timeline App | `safemilo-home-iphone.glb` | `public/models/projects/` |
| Siesta Campers | `iphone14.glb` | `public/models/projects/` |
| Modern Residence | `house.glb` | `public/models/projects/` |
| Product Visualization | `finalcam.glb` | `public/models/projects/` |

## What's Happening Now?

Currently, the website shows **animated wireframe placeholders** because the actual model files don't exist yet. This is intentional - the site won't crash, it just shows a placeholder until you add the real models.

## Where to Get 3D Models

If you don't have models yet, you can:

1. **Create your own** in Blender, Maya, or other 3D software
2. **Download free models** from:
   - [Sketchfab](https://sketchfab.com/feed) (many free models)
   - [Poly Pizza](https://poly.pizza/) (free low-poly models)
   - [glTF Sample Models](https://github.com/KhronosGroup/glTF-Sample-Models)

3. **Use placeholder models** temporarily:
   - Download sample iPhone/house models from Sketchfab
   - Rename them to match the expected filenames

## Testing Your Models

Before adding to the project:

1. Test in [GLTF Viewer](https://gltf-viewer.donmccurdy.com/)
2. Check file size (should be < 5MB)
3. Verify the model is centered at origin (0,0,0)
4. Ensure proper scale (not too large or small)

## Need Help?

Just ask me:
- "Help me add a 3D model to my project"
- "How do I optimize my GLB file?"
- "Can you update the model path for [project name]?"

## Current Status

✅ Three.js and React Three Fiber are installed and working
✅ 3D viewer components are ready
✅ Model paths are configured
✅ Error handling shows placeholders for missing models
⏳ **Waiting for you to add the actual .glb/.gltf files**

Once you add the model files, they will automatically load and display!
