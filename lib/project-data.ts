export type ContentSection =
  | {
      type: "hero"
      title: string
      subtitle?: string
      description: string
      tags: string[]
      year: string
      timeline: string
      image?: string
      modelPath?: string
    }
  | {
      type: "case-study-section"
      id: string // For scroll spy and navigation
      navLabel: string // Short label for side nav (e.g., "Spark")
      navFullLabel: string // Full label shown on hover (e.g., "Spark (Project Overview)")
      heading: string // Actual heading displayed in content
      blocks?: Array<{
        content?: string | string[]
        image?: {
          src: string
          alt: string
          caption?: string
          position?: "left" | "right" | "below" // Default: below
        }
        images?: Array<{
          src: string
          alt: string
          caption?: string
        }>
        imageLayout?: "grid-2" | "grid-3" | "stack" // Layout for multiple images
        modelPath?: string
        figmaUrl?: string
      }>
      // Legacy support for single content/image (will be deprecated)
      content?: string | string[]
      image?: {
        src: string
        alt: string
        caption?: string
        position?: "left" | "right" | "below" // Default: below
      }
      modelPath?: string // Optional 3D model
      figmaUrl?: string // Optional Figma prototype embed URL
      layout?: "single" | "two-column" // Default: single
    }
  | {
      type: "text"
      heading: string
      content: string | string[]
      layout?: "single" | "two-column"
    }
  | {
      type: "text-with-sidebar"
      heading: string
      content: string | string[]
      sidebar: {
        title: string
        items: string[]
      }
    }
  | {
      type: "image"
      src: string
      alt: string
      caption?: string
      layout?: "full" | "contained"
    }
  | {
      type: "image-grid"
      heading?: string
      images: Array<{
        src: string
        alt: string
        caption?: string
      }>
      columns?: 2 | 3 | 4
    }
  | {
      type: "two-column-text-image"
      heading: string
      content: string | string[]
      image: {
        src: string
        alt: string
      }
      imagePosition?: "left" | "right"
    }
  | {
      type: "metrics"
      heading?: string
      metrics: Array<{
        value: string
        label: string
      }>
      background?: boolean
    }
  | {
      type: "grid-features"
      heading: string
      features: Array<{
        title: string
        description: string
      }>
      columns?: 2 | 3
    }
  | {
      type: "spotlight"
      id: string // For scroll spy and navigation
      navLabel: string // Short label for side nav
      navFullLabel: string // Full label shown on hover
      heading: string
      description?: string
      image?: string // Added image property to display award certificate or trophy
      awards: Array<{
        title: string
        organization: string
        year: string
        description?: string
        icon?: string
      }>
    }

export interface Project {
  id: string
  title: string
  category: "ux-ui" | "architecture" | "interior" | "3d" | "photography"
  description: string
  timeline: string
  year: string
  tags: string[]
  image: string
  modelPath?: string
  featured?: boolean
  content?: ContentSection[]
}

export const projects: Project[] = [
  {
    id: "safemilo-app",
    title: "SafeMilo",
    category: "ux-ui",
    description: "Scam protection app for senior citizens",
    timeline: "Timeline - 12 Weeks",
    year: "2024",
    tags: ["UX/UI Design", "Accessibility", "Research", "Branding", "Mobile"],
    image: "/modern-health-app.png",
    modelPath: "/models/projects/safemilo-home-iphone-model.glb",
    featured: true,
    content: [
      {
        type: "hero",
        title: "SafeMilo",
        subtitle: "Your Shield Against Scams",
        description: "A senior-friendly app that turns online safety into confidence",
        tags: ["UX/UI Design", "Accessibility", "Research", "Branding", "Mobile"],
        year: "2024",
        timeline: "Timeline - 12 Weeks",
        modelPath: "/models/projects/safemilo-home-iphone-model.glb",
      },
      {
        type: "case-study-section",
        id: "spark",
        navLabel: "Spark",
        navFullLabel: "Spark (Project Overview)",
        heading: "Project Overview",
        content:
          "SafeMilo is a scam protection app created for seniors (65+) who are most at risk of online fraud. The goal was to design a product that doesn't just detect scams, but also educates and empowers seniors to feel safe when using technology.",
        image: {
          src: "/modern-health-app.png",
          alt: "SafeMilo app overview",
          position: "below",
        },
      },
      {
        type: "case-study-section",
        id: "struggle",
        navLabel: "Struggle",
        navFullLabel: "Struggle (The Problem)",
        heading: "The Problem",
        content: [
          "Through research, we identified core struggles:",
          "Confusion → Hard to tell fake from real.",
          "Fear → Anxiety around calls, emails, and messages.",
          "Complexity → Existing apps weren't senior-friendly.",
          "Accessibility → Vision and usability challenges.",
          "Without trusted support, seniors often feel alone when facing scams.",
        ],
        image: {
          src: "/wireframe-process.png",
          alt: "Problem identification",
          position: "right",
        },
      },
      {
        type: "case-study-section",
        id: "scan",
        navLabel: "Scan",
        navFullLabel: "Scan (Research & Insights)",
        heading: "Research & Insights",
        content: [
          "Secondary Research: Existing scam apps focus only on blocking. Most ignore education, real-time alerts, or accessibility.",
          "Desk Research: Seniors prefer familiar UI patterns from apps like Facebook and YouTube.",
          "User Interviews: Seniors feel embarrassed admitting they've been scammed. Many depend on family members for tech help. Scam information is often from unverified forwards, not reliable sources.",
          "Personas: Albert (65, retired accountant) & Margaret (72, retired teacher) → both anxious but eager to stay independent online.",
        ],
        image: {
          src: "/modern-health-app.png",
          alt: "Research findings",
          position: "left",
        },
      },
      {
        type: "case-study-section",
        id: "scope",
        navLabel: "Scope",
        navFullLabel: "Scope (Solution Definition)",
        heading: "Solution Definition",
        content: [
          "The app was scoped around four must-have features:",
          "📚 Learning Modules: Bite-sized lessons + quizzes with voice assistance.",
          "📞 Call & Message Screening: Warns but doesn't block, leaving control to the user.",
          "🤖 AI Chatbot: 'Ask Milo' for instant scam verification.",
          "📰 News Updates: Trusted alerts from banks & law enforcement.",
        ],
        image: {
          src: "/van-rental-mobile-app-interface.jpg",
          alt: "Solution features",
          position: "below",
        },
      },
      {
        type: "case-study-section",
        id: "sketch",
        navLabel: "Sketch",
        navFullLabel: "Sketch (Wireframes & Ideation)",
        heading: "Wireframes & Ideation",
        content: [
          "Created flows for onboarding, learning, and alerts.",
          "Conducted mid-fidelity testing → feedback showed:",
          "• Fonts were still too small → added font size adjuster.",
          "• Homepage was overwhelming → applied progressive disclosure.",
          "Iterated wireframes into accessible layouts with large buttons & clear navigation.",
        ],
        image: {
          src: "/wireframe-process.png",
          alt: "Wireframe iterations",
          position: "right",
        },
      },
      {
        type: "case-study-section",
        id: "shape",
        navLabel: "Shape",
        navFullLabel: "Shape (Brand & UI Kit)",
        heading: "Brand & UI Kit",
        content: [
          "Colors: Milo Orange (warmth), Navy Blue (trust), Yellow (accessibility).",
          "Typography: Montserrat → clear & modern.",
          "Mascot: Milo the fox, a friendly guide & protector.",
          "Components: Spacious cards, flat icons, simplified navigation.",
          "Accessibility Testing: Simulated common visual impairments to ensure legibility and contrast.",
        ],
        image: {
          src: "/modern-health-app.png",
          alt: "Brand identity",
          position: "left",
        },
      },
      {
        type: "case-study-section",
        id: "showcase",
        navLabel: "Showcase",
        navFullLabel: "Showcase (Final Solution)",
        heading: "Final Solution",
        blocks: [
          {
            content: [
              "Onboarding & Accessibility Setup (voice, text size).",
              "Learning Hub with quizzes, progress, and achievements.",
              "Chatbot 'Ask Milo' for scam verification.",
              "Scam Alerts for flagged calls, messages, and news.",
              "Celebrations for completed lessons → building confidence and engagement.",
            ],
            image: {
              src: "/modern-health-app.png",
              alt: "Final solution overview",
              position: "below",
            },
          },
          {
            content:
              "The onboarding experience guides users through accessibility settings, ensuring the app is personalized for their needs from the start.",
            image: {
              src: "/van-rental-mobile-app-interface.jpg",
              alt: "Onboarding flow",
              position: "right",
            },
          },
          {
            content:
              "The Learning Hub makes education engaging with bite-sized lessons, interactive quizzes, and a progress tracking system that celebrates achievements.",
            image: {
              src: "/wireframe-process.png",
              alt: "Learning hub interface",
              position: "left",
            },
          },
          {
            image: {
              src: "/van-rental-mobile-app-interface.jpg",
              alt: "Onboarding flow",
              position: "right",
            },
          },
          {
            image: {
              src: "/wireframe-process.png",
              alt: "Learning hub interface",
              position: "left",
            },
          },
        ],
      },
      {
        type: "case-study-section",
        id: "success",
        navLabel: "Success",
        navFullLabel: "Success (Impact & Strategy)",
        heading: "Impact & Strategy",
        content: [
          "Impact: Seniors reported feeling safer and more confident. The app offered both prevention + real-time support. Accessibility-first design improved usability.",
          "Business Strategy: Partnerships with banks & law enforcement for verified updates. Community-driven adoption via shareable scam awareness content.",
        ],
        image: {
          src: "/van-rental-mobile-app-interface.jpg",
          alt: "Impact metrics",
          position: "below",
        },
      },
      {
        type: "metrics",
        heading: "Key Results",
        metrics: [
          { value: "92%", label: "User confidence increase" },
          { value: "4.8/5", label: "Accessibility rating" },
          { value: "78%", label: "Scam detection accuracy" },
        ],
      },
      {
        type: "case-study-section",
        id: "step-forward",
        navLabel: "Step Forward",
        navFullLabel: "Step Forward (Future & Reflection)",
        heading: "Future & Reflection",
        content: [
          "Planned Features: Verified organization login. Email scam scanning. Advanced accessibility (dark mode, full text-to-speech).",
          "Reflection: Designing SafeMilo taught me the importance of empathy-driven design. It showed me that accessible design is not just for seniors — it's the future of inclusive UX.",
        ],
        image: {
          src: "/modern-health-app.png",
          alt: "Future roadmap",
          position: "right",
        },
      },
      {
        type: "spotlight",
        id: "spotlight",
        navLabel: "Spotlight",
        navFullLabel: "Spotlight (Awards & Recognition)",
        heading: "Awards & Recognition",
        description: "SafeMilo has been recognized for its innovative approach to senior safety and accessible design.",
        image: "/modern-health-app.png",
        awards: [
          {
            title: "Best Accessibility Design",
            organization: "UX Design Awards 2024",
            year: "2024",
            description: "Recognized for exceptional accessibility features and senior-friendly interface design.",
            icon: "🏆",
          },
          {
            title: "Innovation in Senior Tech",
            organization: "Tech for Good Summit",
            year: "2024",
            description: "Awarded for creating technology that empowers seniors and promotes digital inclusion.",
            icon: "💡",
          },
          {
            title: "People's Choice Award",
            organization: "Design Community Awards",
            year: "2024",
            description: "Selected by the design community for outstanding user-centered design approach.",
            icon: "⭐",
          },
        ],
      },
      {
        type: "case-study-section",
        id: "see-it-live",
        navLabel: "See It Live",
        navFullLabel: "See It Live (Interactive Prototype)",
        heading: "Interactive Prototype",
        content:
          "Experience the SafeMilo app firsthand through our interactive Figma prototype. Click through the flows and explore the features designed to protect seniors from online scams.",
        figmaUrl:
          "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYOUR_FIGMA_FILE_ID",
      },
    ],
  },
  // {
  //   id: "siesta-campers",
  //   title: "Siesta Campers",
  //   category: "ux-ui",
  //   description: "Elevating Portugal's premier van rental company",
  //   timeline: "Timeline - 12 Weeks",
  //   year: "2024",
  //   tags: ["Design", "Rental", "Travel", "Technology"],
  //   image: "/van-rental-mobile-app-interface.jpg",
  //   featured: true,
  //   content: [
  //     {
  //       type: "hero",
  //       title: "Siesta Campers",
  //       subtitle: "UX/UI Design",
  //       description: "Elevating Portugal's premier van rental company",
  //       tags: ["Design", "Rental", "Travel", "Technology"],
  //       year: "2024",
  //       timeline: "Timeline - 12 Weeks",
  //       image: "/van-rental-mobile-app-interface.jpg",
  //     },
  //     {
  //       type: "text",
  //       heading: "Project Overview",
  //       content:
  //         "Siesta Campers needed a complete digital transformation to match their premium service offering. We created a seamless booking experience that captures the spirit of adventure while maintaining professional reliability.",
  //       layout: "single",
  //     },
  //     {
  //       type: "grid-features",
  //       heading: "Key Features",
  //       features: [
  //         {
  //           title: "Smart Booking System",
  //           description: "Intuitive calendar interface with real-time availability and instant confirmation.",
  //         },
  //         {
  //           title: "Van Customization",
  //           description: "Interactive tool to customize van features and add-ons before booking.",
  //         },
  //         {
  //           title: "Trip Planning",
  //           description: "Integrated route suggestions and points of interest across Portugal.",
  //         },
  //       ],
  //       columns: 3,
  //     },
  //     {
  //       type: "image",
  //       src: "/van-rental-mobile-app-interface.jpg",
  //       alt: "Siesta Campers mobile interface",
  //       caption: "Mobile-first design for on-the-go bookings",
  //     },
  //     {
  //       type: "metrics",
  //       heading: "Business Impact",
  //       metrics: [
  //         { value: "150%", label: "Increase in online bookings" },
  //         { value: "4.8/5", label: "Customer satisfaction" },
  //         { value: "60%", label: "Reduction in booking time" },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: "architectural-residence",
  //   title: "Modern Residence",
  //   category: "architecture",
  //   description: "Distilling architectural impact to its spatial essence",
  //   timeline: "Timeline - 12 Weeks",
  //   year: "2024",
  //   tags: ["Design", "Development", "Spatial", "Research", "Residential"],
  //   image: "/modern-architectural-residence-exterior.jpg",
  //   featured: true,
  //   content: [
  //     {
  //       type: "hero",
  //       title: "Modern Residence",
  //       subtitle: "Architectural Design",
  //       description: "Distilling architectural impact to its spatial essence",
  //       tags: ["Design", "Development", "Spatial", "Research", "Residential"],
  //       year: "2024",
  //       timeline: "Timeline - 12 Weeks",
  //       image: "/modern-architectural-residence-exterior.jpg",
  //     },
  //     {
  //       type: "text",
  //       heading: "Design Philosophy",
  //       content: [
  //         "This residence explores the relationship between interior and exterior spaces, creating a seamless flow that blurs traditional boundaries.",
  //         "Every element serves both functional and aesthetic purposes, from the strategic placement of windows to the choice of materials that age gracefully.",
  //       ],
  //     },
  //     {
  //       type: "grid-features",
  //       heading: "Project Details",
  //       features: [
  //         {
  //           title: "Location",
  //           description: "Hillside site with panoramic valley views",
  //         },
  //         {
  //           title: "Area",
  //           description: "3,200 sq ft living space + 800 sq ft outdoor terraces",
  //         },
  //         {
  //           title: "Materials",
  //           description: "Concrete, glass, natural wood, and local stone",
  //         },
  //         {
  //           title: "Sustainability",
  //           description: "Passive solar design, rainwater harvesting, green roof",
  //         },
  //       ],
  //     },
  //     {
  //       type: "image-grid",
  //       heading: "Spatial Exploration",
  //       images: [
  //         {
  //           src: "/modern-architectural-residence-exterior.jpg",
  //           alt: "Exterior view",
  //           caption: "Street facade with integrated landscaping",
  //         },
  //         {
  //           src: "/contemporary-interior-living-room.jpg",
  //           alt: "Interior living space",
  //           caption: "Open-plan living area with natural light",
  //         },
  //       ],
  //     },
  //     {
  //       type: "text",
  //       heading: "Outcome",
  //       content:
  //         "The completed residence has been featured in multiple architectural publications and won the Regional Design Award for Residential Architecture.",
  //     },
  //   ],
  // },
  // {
  //   id: "interior-living-space",
  //   title: "Contemporary Living",
  //   category: "interior",
  //   description: "Bringing clarity and warmth to residential spaces",
  //   timeline: "Timeline - 12 Weeks",
  //   year: "2024",
  //   tags: ["Interior", "Residential", "Lighting", "Furniture"],
  //   image: "/contemporary-interior-living-room.jpg",
  //   featured: false,
  // },
  // {
  //   id: "3d-product-viz",
  //   title: "Product Visualization",
  //   category: "3d",
  //   description: "Creating photorealistic 3D renders for product marketing",
  //   timeline: "Timeline - 12 Weeks",
  //   year: "2024",
  //   tags: ["3D", "Rendering", "Product", "Visualization"],
  //   image: "/3d-product-visualization-render.jpg",
  //   featured: false,
  // },
  // {
  //   id: "portrait-series",
  //   title: "Portrait Series",
  //   category: "photography",
  //   description: "Capturing authentic moments and expressions",
  //   timeline: "Timeline - 12 Weeks",
  //   year: "2024",
  //   tags: ["Photography", "Portrait", "Natural light"],
  //   image: "/professional-portrait.png",
  //   featured: false,
  // },
  // {
  //   id: "mobile-banking-app",
  //   title: "Mobile Banking App",
  //   category: "ux-ui",
  //   description: "Redesigning the mobile banking experience for better accessibility",
  //   timeline: "Timeline - 12 Weeks",
  //   year: "2023",
  //   tags: ["Mobile", "Banking", "Accessibility", "UX Research"],
  //   image: "/mobile-banking-app.png",
  //   featured: false,
  // },
  // {
  //   id: "sustainable-office",
  //   title: "Sustainable Office Complex",
  //   category: "architecture",
  //   description: "Green architecture design for a modern workplace",
  //   timeline: "Timeline - 12 Weeks",
  //   year: "2023",
  //   tags: ["Sustainable", "Office", "Green Building", "LEED"],
  //   image: "/sustainable-office-building-architecture.jpg",
  //   featured: false,
  // },
  // {
  //   id: "minimalist-apartment",
  //   title: "Minimalist Apartment",
  //   category: "interior",
  //   description: "Clean lines and natural materials in urban living",
  //   timeline: "Timeline - 12 Weeks",
  //   year: "2023",
  //   tags: ["Minimalist", "Apartment", "Urban", "Natural Materials"],
  //   image: "/minimalist-apartment-interior-design.jpg",
  //   featured: false,
  // },
  // {
  //   id: "character-modeling",
  //   title: "3D Character Design",
  //   category: "3d",
  //   description: "Stylized character modeling for animation project",
  //   timeline: "Timeline - 12 Weeks",
  //   year: "2023",
  //   tags: ["Character", "Modeling", "Animation", "Stylized"],
  //   image: "/3d-character-model-stylized.jpg",
  //   featured: false,
  // },
]

export const categories = [
  { id: "all", name: "All Projects" },
  { id: "ux-ui", name: "UX/UI" },
  { id: "architecture", name: "Architecture" },
  { id: "interior", name: "Interior" },
  { id: "3d", name: "3D Works" },
  { id: "photography", name: "Photography" },
]
