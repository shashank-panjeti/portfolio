import { string } from "three/src/nodes/TSL.js"

export type ContentSection =
  | {
      type: "hero"
      title: string
      subtitle?: string
      description: string
      tags: string[]
      year: string
      timeline: string
      team?: string
      image?: string
      modelPath?: string
    }
  | {
      type: "interior-hero"
      title: string
      subtitle: string
      heroImage: string
      tags: string[]
      timeline: string
      year: string
      overview?: {
        projectName: string
        location: string
        projectType: string
        workDuration: string
        softwareUsed: string
        contribution: string[]
      }
    }
  | {
      type: "interior-overview"
      heading?: string
      projectName: string
      location: string
      projectType: string
      workDuration: string
      softwareUsed: string
      contribution: string[]
    }
  | {
      type: "case-study-section"
      id: string // For scroll spy and navigation
      navLabel: string // Short label for side nav (e.g., "Spark")
      navFullLabel: string // Full label shown on hover (e.g., "Spark (Project Overview)")
      heading: string // Actual heading displayed in content
      blocks?: Array<{
        subheading?: string[]
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
        imageLayout?: "grid-2" | "grid-3" | "grid-4" | "stack" // Layout for multiple images
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
      type: "comparison"
      id: string
      heading?: string
      description?: string
      images: Array<{
        src: string
        alt: string
        caption?: string
      }>
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
    image: "/ux-ui-safemilo/safemilo-cover-photo.png",
    modelPath: "/ux-ui-safemilo/safemilo-home-iphone-model.glb",
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
        team: "5 Designers and 4 Developers",
        modelPath: "/ux-ui-safemilo/safemilo-home-iphone-model.glb",
      },
      {
        type: "case-study-section",
        id: "spark",
        navLabel: "Spark",
        navFullLabel: "Spark (Project Overview)",
        heading: "Project Overview",
        content:
          "SafeMilo is a mobile app built to protect seniors from online scams through education, alerts, and support. The app screens suspicious calls or messages, delivers bite-sized learning modules, verified scam news, and a 24/7 AI chatbot, all wrapped in a warm, senior-friendly interface. The goal was to design a product that doesn't just detect scams, but also educates and empowers seniors to feel safe when using technology.",
        image: {
          src: "/ux-ui-safemilo/safemilo-hero-photo.png",
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
          "In today’s digital world, seniors (65+) are among the most targeted by scammers. Many feel anxious or ashamed after falling for fake calls, messages, or phishing links.",
          "They struggle with:",
          "•  Small text, cluttered layouts, and complex navigation.",
          "•  Doubt in verifying legitimate messages or calls.",
          "•  Lack of trustworthy, real-time scam updates.",
          "•  Fear of using technology without guidance.",
          "SafeMilo tackles this by combining education, real-time protection, and emotional reassurance, not just stopping scams, but building confidence.",
        ],
        image: {
          src: "/ux-ui-safemilo/safemilo-problem.png",
          alt: "Safemilo Problem identification",
          position: "below",
        },
      },
      {
        type: "case-study-section",
        id: "scan",
        navLabel: "Scan",
        navFullLabel: "Scan (Research & Insights)",
        heading: "Research & Insights",
        blocks: [
          {
            subheading: ["Primary Research: User Interviews and Personas"],
            content: [
              "Our research goal is to understand how seniors recognize and respond to scams, and identify the design patterns, content formats, and support features that make a mobile app intuitive, accessible, and effective for scam prevention and education. We combined primary interviews with seniors and secondary research on apps like Scam Shield, GranPad, and MediSafe.",
              "Two participant cohorts were interviewed: seniors (60+) and adults (18–60) who regularly support seniors with technology.",
            ],
          },
          { 
            subheading: ["Key Insights"],
            content: [
              "•  Topic sensitivity. Many seniors feel embarrassed or ashamed after a scam incident, which reduces help-seeking and disclosure.",
              "•  Information reliability. Scam awareness often comes from forwarded messages and social media, sources that are rarely verified and can amplify fear or misinformation.",
              "•  Technology dependence. Seniors frequently rely on family or friends for basic digital tasks, slowing their ability to verify threats and respond promptly.",
              "These findings directly informed SafeMilo’s emphasis on plain language, verified news, voice/large-type interfaces, and just-in-time guidance through an AI assistant.",
            ],
            images: [
              {
                src: "/ux-ui-safemilo/safemilo-user-persona-01.png",
                alt: "Safemilo User Persona 01",
              },
              {
                src: "/ux-ui-safemilo/safemilo-user-persona-02.png",
                alt: "Safemilo User Persona 02",
              },
            ],
          },
          {
            subheading: ["Secondary Research: Competitor Analysis"],
            content: [
              "This comparison highlights that SafeMilo is the only solution to combine all four senior-critical capabilities: a structured learning module, 24/7 AI assistance, call/message screening, and verified scam news. Competing tools typically emphasize screening, while lacking guided education and a trusted information channel. As a result, SafeMilo not only mitigates immediate risk but also builds long-term user confidence and digital literacy.",
            ],
            image: {
              src: "/ux-ui-safemilo/safemilo-competitor-analysis.png",
              alt: "Safemilo Competitor Analysis",
              position: "below",
            },
          },
        ],
      },
      {
        type: "case-study-section",
        id: "scope",
        navLabel: "Scope",
        navFullLabel: "Scope (Solution Definition)",
        heading: "Solution Definition",
        blocks: [
          {
            content: [
              "SafeMilo is a digital companion, not just a filter.",
              "It teaches seniors to recognize and avoid scams while keeping them informed in real time.",
            ],
          },
          {
            subheading: ["Core Features"],
            content: [
              "•  Learning Modules: Bite-sized, voice-assisted lessons with quizzes and videos.",
              "•  Call & Message Screening: Detects suspicious content and warns before answering.",
              "•  AI Chatbot: 24/7 instant scam-check assistant.",
              "•  Verified News Feed: Updates from banks and law enforcement.",
            ],
            image: {
              src: "/ux-ui-safemilo/safemilo-features.png",
              alt: "Safemilo Features",
              position: "below",
            },
          },
        ],
      },
      {
        type: "case-study-section",
        id: "sketch",
        navLabel: "Sketch",
        navFullLabel: "Sketch (Wireframes)",
        heading: "Wireframes & Ideation",
        blocks: [
          {
            subheading: ["Information Architecture"],
            content: [
              "We structured SafeMilo around the senior user’s mental model of “learn, check, protect,” which informed five top-level areas: Home, Learn, Ask Milo, User Profile, and Notifications.",
              "•  Home surfaces only what’s “actionable now”: recent scam alerts, call/message screening status, and a gentle prompt to learn.",
              "•  Learn contains courses, scam categories, and achievements—organized by task, not by content type—to reduce cognitive load.",
              "•  Ask Milo is a single-purpose space for type/voice questions with clear system feedback (“Milo Answers”).",
              "•  User Profile centralizes Accessibility Settings (text size, voice, contrast) and App Permissions, so assistive adjustments are always one tap away.",
              "•  Notifications is separated from Home to avoid clutter and keep alerts reviewable later.",
            ],
            image: {
              src: "/ux-ui-safemilo/safemilo-information-architecture.png",
              alt: "Safemilo Information Architecture",
              position: "below",
            },
          },
          {
            subheading: ["Wireframes"],
            content: [
              "We conducted moderated usability sessions with mid-fidelity prototypes. Two key findings informed the next iteration",
              "•  Legibility: Base typography was insufficient for some participants. We introduced an in-app text-size control and increased base size/line height to improve readability.",
              "•  Information density: The Home screen created initial overwhelm. We applied progressive disclosure, prioritizing primary actions and moving secondary details behind concise cards and drill-downs.",
            ],
            image: {
              src: "/ux-ui-safemilo/safemilo-wireframes.png",
              alt: "Safemilo Wireframes",
              position: "below",
            },
          },
        ],
      },
      {
        type: "case-study-section",
        id: "style",
        navLabel: "Style",
        navFullLabel: "Style (Brand & UI Kit)",
        heading: "Brand & UI Kit",
        blocks: [
          {
            subheading: ["Mascot"],
            content: [
              "Our primary challenge was creating an experience that felt welcoming to seniors, especially those less comfortable with technology. We introduced Milo the Fox as a friendly, familiar guide to reduce anxiety and support first-time use. At the same time, because SafeMilo is a scam-protection product, we balanced Milo’s warmth with protective cues and clear system messaging, striking the right balance between approachable and trustworthy.",
            ],
            image: {
              src: "/ux-ui-safemilo/safemilo-mascot.gif",
              alt: "Safemilo Fox Mascot",
              position: "right",
            },
          },
          {
            subheading: ["Color System"],
            content: [
              "We selected a palette that communicates trust, warmth, and safety for seniors. High contrast supports readability, while Milo Orange and Deep Navy create a calm, protective atmosphere. The result is an accessible, user-friendly visual system that feels both welcoming and reliable.",
              "The palette was tested for contrast to support WCAG AA/AAA on critical states.",
            ],
          },
          {
            subheading: ["Typography"],
            content: [
              "Montserrat was chosen for the UI and core content due to its clean geometry, open forms, and consistent legibility across sizes, critical for senior audiences. It delivers a modern, orderly rhythm that keeps labels, buttons, and body copy easy to scan and read.",
              "Alpino is used in brand and narrative elements to introduce a subtle humanist warmth. Its clean, slightly decorative forms maintain clarity while adding personality, reinforcing SafeMilo’s approachable voice without compromising readability.",
            ],
            image: {
              src: "/ux-ui-safemilo/safemilo-color-typography.png",
              alt: "Safemilo Color & Typography",
              position: "below",
            },
          },
          {
            subheading: ["Logo"],
            content: [
              "Our logo unites Milo the Fox with a shield, Milo conveys warmth and approachability, while the shield signals protection and security. Together, they express SafeMilo’s promise: a friendly companion that keeps seniors safe.",
            ],
            image: {
              src: "/ux-ui-safemilo/safemilo-logo.png",
              alt: "Safemilo Logo",
              position: "below",
            },
          },
          {
            subheading: ["UI Kit"],
            content: [
              "Our component library adopts rounded corners and a clean layout, pairing confident brand colors with ample white space and subtle dividers. Simple line-style illustrations add character without distraction. All interactive elements such as buttons, icons, headings, and touch targets are intentionally sized larger to support seniors’ motor and visual needs, resulting in an interface that is functional, inviting, and effortless to use.",
            ],
            image: {
              src: "/ux-ui-safemilo/safemilo-ui-kit.png",
              alt: "Safemilo UI Kit",
              position: "below",
            },
          },
          {
            subheading: ["Accessibility"],
            content: [
              "We selected a color palette that remains effective across common age-related visual impairments. It meets WCAG AA for text and icons, with AAA contrast on critical alerts, ensuring information stays distinguishable regardless of color perception. SafeMilo also includes in-app text-size controls and generous line spacing, so seniors can personalize readability without disrupting their flow. Together, these choices deliver a calm, highly legible experience for a wide range of visual needs.",
            ],
            image: {
              src: "/ux-ui-safemilo/safemilo-accissibility-screens.gif",
              alt: "Safemilo Accissibility Gif",
              position: "right",
            },
          },
          {
            image: {
              src: "/ux-ui-safemilo/safemilo-accissibility.png",
              alt: "Safemilo Accissibility",
              position: "below",
            },
          },
        ],
      },
      {
        type: "case-study-section",
        id: "showcase",
        navLabel: "Showcase",
        navFullLabel: "Showcase (Final Solution)",
        heading: "Final Solution",
        blocks: [
          {
            subheading: ["Onboarding with Mascot Guidance & Feature Walk through"],
            content: [
              "Milo, our friendly mascot, welcomes first-time users and offers an optional guided tour that explains benefits and permissions in plain language.",
            ],
            image: {
              src: "/ux-ui-safemilo/safemilo-screens-onboarding.png",
              alt: "Safemilo Onboarding Screens",
              position: "below",
            },
          },
          {
            subheading: ["Call & Message Screening"],
            content: [
              "With user consent, SafeMilo flags suspicious calls and texts and provides clear, non-technical warnings and keeping seniors informed and in control of how to respond.",
            ],
            image: {
              src: "/ux-ui-safemilo/safemilo-screens-calls.png",
              alt: "Safemilo Calling Screens",
              position: "below",
            },
          },
          {
            subheading: ["Learning Modules"],
            content: [
              "Bite-sized, accessible lessons with short videos and simple quizzes teach common scam patterns.",
            ],
            image: {
              src: "/ux-ui-safemilo/safemilo-screens-learn.png",
              alt: "Safemilo Learning Screens",
              position: "below",
            },
          },
          {
            content: ["Progress is acknowledged with gentle celebrations that build confidence over time."],
            image: {
              src: "/ux-ui-safemilo/safemilo-screens-achievement.png",
              alt: "Safemilo Achievement Screens",
              position: "below",
            },
          },
          {
            subheading: ["Verified Scam News"],
            content: [
              "A dedicated feed of updates from trusted organizations (banks, insurers, law enforcement) keeps users current on emerging scams, source-first and time-stamped for trust.",
            ],
            image: {
              src: "/ux-ui-safemilo/safemilo-screens-news.png",
              alt: "Safemilo News Screens",
              position: "below",
            },
          },
          {
            subheading: ["AI Chatbot (Ask Milo)"],
            content: [
              "Available 24/7 to answer scam-related questions via text or voice. Users can check links, messages, or scenarios and get instant, empathetic guidance.",
            ],
            image: {
              src: "/ux-ui-safemilo/safemilo-screens-aichat.png",
              alt: "Safemilo AI Chat Screens",
              position: "below",
            },
          },
        ],
      },
      {
        type: "case-study-section",
        id: "step-forward",
        navLabel: "Step Forward",
        navFullLabel: "Step Forward (Future Features)",
        heading: "Future Features",
        content: [
          "•  Verified Organization Access. We will gate the organization portal behind vetted admin credentials so only trusted partners (banks, insurers, law enforcement) can publish alerts. This reduces misinformation risk, strengthens content integrity, and increases user trust in every notification.",
          "•  Deeper Accessibility. Next, We will expand accessibility with dark mode, app-wide text-to-speech, adjustable text sizes, and high-contrast themes. These options let seniors personalize readability and comfort in real time, improving sustained engagement without sacrificing clarity.",
          "•  Email Scam Detection. Finally, We will extend screening beyond calls and SMS to include email. The system will flag suspicious senders, risky links, and scam keywords warning users before they open a message, so SafeMilo protects across the most common attack surfaces.",
        ],
        // image: {
        //   src: "/modern-health-app.png",
        //   alt: "Future roadmap",
        //   position: "right",
        // },
      },
      {
        type: "spotlight",
        id: "spotlight",
        navLabel: "Spotlight",
        navFullLabel: "Spotlight (Awards & Recognition)",
        heading: "Awards & Recognition",
        description: "SafeMilo has been recognized for its innovative approach to senior safety and accessible design.",
        image: "/ux-ui-safemilo/safemilo-award.png",
      },
      {
        type: "case-study-section",
        id: "see-it-live",
        navLabel: "See It Live",
        navFullLabel: "See It Live (Prototype)",
        heading: "Interactive Prototype",
        content:
          "Experience the SafeMilo app firsthand through our interactive Figma prototype. Click through the flows and explore the features designed to protect seniors from online scams.",
        figmaUrl:
          "https://embed.figma.com/proto/UitX28hFMxBpbAStnN3NTB/High-Fed?page-id=84%3A249&node-id=4727-24370&p=f&viewport=232%2C483%2C0.03&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4727%3A24370&embed-host=share",
      },
    ],
  },

  {
    id: "togathr-webapp",
    title: "Togathr",
    category: "ux-ui",
    description: "AI based event planning platform",
    timeline: "Timeline - 12 Weeks",
    year: "2024",
    tags: ["UX/UI Design", "Event Planning", "Research", "Branding", "Web"],
    image: "/ux-ui-togathr/togathr-cover-photo.png",
    modelPath: "/ux-ui-togathr/togathr-laptop-model.glb",
    featured: true,
    content: [
      {
        type: "hero",
        title: "Togathr",
        subtitle: "One-Stop Solution for Event Planning",
        description: "AI based event planning platform",
        tags: ["UX/UI Design", "Accessibility", "Research", "Branding", "Mobile"],
        year: "2024",
        timeline: "Timeline - 12 Weeks",
        team: "5 Designers and 4 Developers",
        modelPath: "/ux-ui-togathr/togathr-laptop-model.glb",
      },
      {
        type: "case-study-section",
        id: "spark",
        navLabel: "Spark",
        navFullLabel: "Spark (Project Overview)",
        heading: "Project Overview",
        content:
          "ToGathr is a web platform that centralizes every aspect of event planning, vendors and venues, guest RSVPs, budget tracking, and team collaboration and supported by an AI assistant that jump-starts tasks and keeps work moving. The product was delivered in 12 weeks by a cross-functional team (5 designers, 4 developers) operating in an Agile workflow.",
        image: {
          src: "/ux-ui-togathr/togathr-hero-photo.png",
          alt: "ToGathr app overview",
          position: "below",
        },
      },
      {
        type: "case-study-section",
        id: "struggle",
        navLabel: "Struggle",
        navFullLabel: "Struggle (The Problem)",
        heading: "The Problem",
        content:
          "Planning even a small event is fragmented: people juggle separate tools for budgets, guest lists, vendor search, and communication, often relying on unverified reviews or word of mouth. This creates duplication, missed details, and decision fatigue. ToGathr addresses the fragmentation with a single, organized workspace.",
        image: {
          src: "/ux-ui-togathr/togathr-problem.png",
          alt: "ToGathr Problem identification",
          position: "below",
        },
      },
      {
        type: "case-study-section",
        id: "scan",
        navLabel: "Scan",
        navFullLabel: "Scan (Research & Insights)",
        heading: "Research & Insights",
        blocks: [
          {
            subheading: ["Primary Research: User Interviews and Personas"],
            content: [
              "To ground ToGathr in real planning needs, we paired competitor analysis (Eventbrite, Zola, Cvent) with primary interviews of individual planners and coordinators, then synthesized insights through personas, card sorting, and user-flow mapping.",
              "This mixed-methods approach clarified pain points.",
            ],
          },
          { 
            subheading: ["Key Insights"],
            content: [
              "•  Tool fragmentation. Planners juggle separate apps for vendors, budgets, RSVPs, and communication. Often creating duplicate work, missed details, and decision fatigue.",
              "•  Trust gap in vendors. Reliance on word-of-mouth and inconsistent reviews makes it hard to compare options or validate quality against the event budget.",
              "•  Coordination friction. Guest management and task handoffs often break down, slowing progress and causing errors.",
              "•  Budget blindness. Costs aren’t visible at decision time, leading to overages and last-minute compromises.",
              "These findings shaped ToGathr’s unified dashboard, verified vendor model, budget-aware flows, simplified navigation (persistent left sidebar, clear confirmations), and an AI assistant that generates starter task lists and nudges next steps.",
            ],
            images: [
              {
                src: "/ux-ui-togathr/togathr-user-persona-01.png",
                alt: "ToGathr User Persona 01",
              },
              {
                src: "/ux-ui-togathr/togathr-user-persona-02.png",
                alt: "ToGathr User Persona 02",
              },
            ],
          },
          {
            subheading: ["Secondary Research: Competitor Analysis"],
            content: [
              "This comparison shows that ToGathr is the only platform to unify the full planning workflow. Competing tools tend to cover only parts of the journey and lack integrated collaboration or AI support. As a result, ToGathr not only streamlines execution end-to-end but also improves planning quality, confidence, and on-time delivery.",
            ],
            image: {
              src: "/ux-ui-togathr/togathr-competitor-analysis.png",
              alt: "ToGathr Competitor Analysis",
              position: "below",
            },
          },
        ],
      },
      {
        type: "case-study-section",
        id: "scope",
        navLabel: "Scope",
        navFullLabel: "Scope (Solution Definition)",
        heading: "Solution Definition",
        blocks: [
          {
            content: [
              "The goal is to create a planning clear, collaborative, and data-driven platform for event organization/managment.",
              "A unified dashboard that ties together vendor discovery.",
            ],
          },
          {
            subheading: ["Core Features"],
            content: [
              "•  Vendor Booking: Find, compare, and book verified vendors and venues in one place.",
              "•  Budget Tracking: Set a budget, track spend by category, and see over/under in real time.",
              "•  Manage Guests: Send invites, collect RSVPs, and handle check-ins without spreadsheets.",
              "•  Collaboration Hub: Add teammates, assign tasks, and keep everyone aligned on one dashboard.",
            ],
            image: {
              src: "/ux-ui-togathr/togathr-features.png",
              alt: "Safemilo Features",
              position: "below",
            },
          },
        ],
      },
      {
        type: "case-study-section",
        id: "sketch",
        navLabel: "Sketch",
        navFullLabel: "Sketch (Wireframes)",
        heading: "Wireframes & Ideation",
        blocks: [
          {
            subheading: ["Information Architecture"],
            image: {
              src: "/ux-ui-togathr/togathr-information-architecture.png",
              alt: "Safemilo Information Architecture",
              position: "below",
            },
          },
          {
            subheading: ["Wireframes"],
            content:
              "Mid-fidelity testing revealed that a collapsed side navigation significantly hurt feature discoverability. In the next iteration, we replaced the collapsible pattern with a persistent, always-open sidebar, which improved wayfinding and reduced navigation friction across core tasks.",
            image: {
              src: "/ux-ui-togathr/togathr-wireframes.png",
              alt: "Safemilo Wireframes",
              position: "below",
            },
          },
        ],
      },
      {
        type: "case-study-section",
        id: "style",
        navLabel: "Style",
        navFullLabel: "Style (Brand & UI Kit)",
        heading: "Brand & UI Kit",
        blocks: [
          {
            subheading: ["Color System"],
            content: [
              "We chose a palette that communicates clarity, momentum, and collaboration. A vivid Violet primary drives focus, with Mint accents for highlights and status.",
              "High contrast supports readability across dashboards and reports, and the system is tested to meet WCAG AA, with AAA applied to critical alerts and confirmations.",
              "The result is an accessible, energetic visual language that scales from personal parties to professional events.",
            ],
          },
          {
            subheading: ["Typography"],
            content: [
              "Meta Pro is used for headings to provide structure and personality, creating clear sectioning across dense planning screens.",
              "Noto Sans handles body copy and UI labels thanks to its even rhythm and excellent legibility across sizes and devices. Together they keep tables, forms, and cards easy to scan while maintaining a confident, modern tone.",
            ],
            image: {
              src: "/ux-ui-togathr/togathr-color-typography.png",
              alt: "Safemilo Color & Typography",
              position: "below",
            },
          },
          {
            subheading: ["Logo"],
            content: [
              "Our mark blends an abstract celebration motif with the T and G letterforms, signaling people coming together.",
              "It remains recognizable in full color or monochrome, across small favicon sizes to large event screens, reinforcing ToGathr’s promise of simple, coordinated planning.",
            ],
            image: {
              src: "/ux-ui-togathr/togathr-logo.png",
              alt: "Safemilo Logo",
              position: "below",
            },
          },
          {
            subheading: ["UI Kit"],
            content: [
              "The component library uses rounded cards, ample white space, and subtle dividers to reduce cognitive load. Flat, readable iconography and accessible button states ensure clarity under time pressure. Vendor cards are designed for quick comparison; budget and RSVP components include built-in chart styles for at-a-glance status. Interactive elements are sized for comfortable clicking and tap targets across breakpoints, resulting in an interface that feels organized, responsive, and effortless to use.",
            ],
            image: {
              src: "/ux-ui-togathr/togathr-ui-kit.png",
              alt: "Safemilo UI Kit",
              position: "below",
            },
          },
        ],
      },
      {
        type: "case-study-section",
        id: "showcase",
        navLabel: "Showcase",
        navFullLabel: "Showcase (Final Solution)",
        heading: "Final Solution",
        blocks: [
          {
            subheading: ["Event Creation"],
            content: [
              "A guided, first-time flow that helps users set goals, dates, budgets, and priorities, making setup fast and approachable.",
            ],
            image: {
              src: "/ux-ui-togathr/togathr-event-creation.png",
              alt: "ToGathr Event Creation",
              position: "below",
            },
          },
          {
            subheading: ["Event Overview Dashboard"],
            content: [
              "A single dashboard snapshot of budget, vendors, RSVPs, and tasks. An AI-generated task list based on event type gives users a head start.",
            ],
            image: {
              src: "/ux-ui-togathr/togathr-overview-dashboard.png",
              alt: "ToGathr Overview Dashboard",
              position: "below",
            },
          },
          {
            subheading: ["Vendors"],
            content: [
              "Browse and compare verified options with clear pricing and packages. Save favorites and book directly from the dashboard.",
            ],
            image: {
              src: "/ux-ui-togathr/togathr-vendors.png",
              alt: "ToGathr Vendors",
              position: "below",
            },
          },
          {
            subheading: ["Budget Tracking"],
            content: ["Browse and compare verified options with clear pricing and packages. Save favorites and book directly from the dashboard."],
            image: {
              src: "/ux-ui-togathr/togathr-budget.png",
              alt: "ToGathr Budget",
              position: "below",
            },
          },
          {
            subheading: ["Collaboration"],
            content: [
              "Invite teammates to co-plan, assign tasks, and keep decisions in one place. Send invites, collect RSVPs, and manage check-ins without spreadsheets.",
            ],
            image: {
              src: "/ux-ui-togathr/togathr-collaboration.png",
              alt: "ToGathr Collaboration",
              position: "below",
            },
          },
        ],
      },
      {
        type: "case-study-section",
        id: "step-forward",
        navLabel: "Step Forward",
        navFullLabel: "Step Forward (Future Features)",
        heading: "Future Features",
        content: [
          "•  In-app collaborator chat to keep decisions and context in one place.",
          "•  Integrated payments for vendor booking inside the platform.",
          "•  Food-waste reduction flow—connect leftover catering to local charities.",
        ],
      },
      {
        type: "case-study-section",
        id: "see-it-live",
        navLabel: "See It Live",
        navFullLabel: "See It Live (Prototype)",
        heading: "Interactive Prototype",
        content: [
          // "Visit the project site: togathr.ca",
          "Experience the ToGathr web-app firsthand through our interactive Figma prototype. Click through the high-fidelity flows and explore the features designed to plan a perfect event. From Event Planning: Budget, Vendors, RSVPs, Collaboration, and Dashboard.",
        ],
        figmaUrl:
          "https://embed.figma.com/proto/tDNwI24nvg5z5sKRvmJSCb/High-Fidelity-Wireframes?page-id=1627%3A71035&node-id=1627-72926&p=f&viewport=524%2C376%2C0.03&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1627%3A72926&show-proto-sidebar=1&embed-host=share",
      },
    ],
  },
  {
    id: "gnwshop-website",
    title: "GNW Shop",
    category: "ux-ui",
    description: "Website Redesign",
    timeline: "Timeline - 12 Weeks",
    year: "2024",
    tags: ["UX/UI Design", "Event Planning", "Research", "Branding", "Web"],
    image: "/ux-ui-gnw/gnw-cover-photo.png",
    modelPath: "/ux-ui-gnw/gnw-laptop-model.glb",
    featured: true,
    content: [
      {
        type: "hero",
        title: "GNW Shop",
        description: "Website Redesign",
        tags: ["UX/UI Design", "Accessibility", "Research", "Branding", "Mobile"],
        year: "2024",
        timeline: "Timeline - 12 Weeks",
        team: "5 Designers and 4 Developers",
        modelPath: "/models/projects/togathr-home-desktop-model.glb",
      },
      {
        type: "case-study-section",
        id: "spark",
        navLabel: "Spark",
        navFullLabel: "Spark (Project Overview)",
        heading: "Project Overview",
        content:
          "GNW is a Vancouver-based scene shop known for custom fabrication across museums, public art, film, and live events. The goal is to redesign a professional, distinctive website that showcases craft and credibility, avoids template patterns, and helps prospects contact GNW and request the portfolio with ease.",
        image: {
          src: "/ux-ui-gnw/gnw-hero-photo.png",
          alt: "GNW Intro Image",
          position: "below",
        },
      },
      {
        type: "case-study-section",
        id: "struggle",
        navLabel: "Struggle",
        navFullLabel: "Struggle (The Problem)",
        heading: "The Problem",
        content:[
          "•  Generic structure & long scrolls: information was scattered; repeated sections reduced impact.",
          "•  Low CTA visibility: “Request Portfolio” and “Contact” weren’t consistently prominent.",
          "•  Unclear client pathways: Not-for-Profit (NFP) offering, gallery, and client lists lacked a clear narrative.",
          "•  Brand underplayed: the bold, industrial character of GNW’s craft didn’t come through in layout or tone.",
        ],
        image: {
          src: "/ux-ui-gnw/gnw-exsisting-design.jpeg",
          alt: "GNW-Current-Design",
          position: "right",
        },
      },
      // {
      //   type: "case-study-section",
      //   id: "scan",
      //   navLabel: "Scan",
      //   navFullLabel: "Scan (Research & Insights)",
      //   heading: "Research & Insights",
      //   blocks: [
      //     {
      //       subheading: ["Primary Research: User Interviews and Personas"],
      //       content: [
      //         "To ground ToGathr in real planning needs, we paired competitor analysis (Eventbrite, Zola, Cvent) with primary interviews of individual planners and coordinators, then synthesized insights through personas, card sorting, and user-flow mapping.",
      //         "This mixed-methods approach clarified pain points.",
      //       ],
      //     },
      //     { 
      //       subheading: ["Key Insights"],
      //       content: [
      //         "•  Tool fragmentation. Planners juggle separate apps for vendors, budgets, RSVPs, and communication. Often creating duplicate work, missed details, and decision fatigue.",
      //         "•  Trust gap in vendors. Reliance on word-of-mouth and inconsistent reviews makes it hard to compare options or validate quality against the event budget.",
      //         "•  Coordination friction. Guest management and task handoffs often break down, slowing progress and causing errors.",
      //         "•  Budget blindness. Costs aren’t visible at decision time, leading to overages and last-minute compromises.",
      //         "These findings shaped ToGathr’s unified dashboard, verified vendor model, budget-aware flows, simplified navigation (persistent left sidebar, clear confirmations), and an AI assistant that generates starter task lists and nudges next steps.",
      //       ],
      //       images: [
      //         {
      //           src: "/ux-ui-togathr/togathr-user-persona-01.png",
      //           alt: "ToGathr User Persona 01",
      //         },
      //         {
      //           src: "/ux-ui-togathr/togathr-user-persona-02.png",
      //           alt: "ToGathr User Persona 02",
      //         },
      //       ],
      //     },
      //     {
      //       subheading: ["Secondary Research: Competitor Analysis"],
      //       content: [
      //         "This comparison shows that ToGathr is the only platform to unify the full planning workflow. Competing tools tend to cover only parts of the journey and lack integrated collaboration or AI support. As a result, ToGathr not only streamlines execution end-to-end but also improves planning quality, confidence, and on-time delivery.",
      //       ],
      //       image: {
      //         src: "/ux-ui-togathr/togathr-competitor-analysis.png",
      //         alt: "ToGathr Competitor Analysis",
      //         position: "below",
      //       },
      //     },
      //   ],
      // },
      // {
      //   type: "case-study-section",
      //   id: "scope",
      //   navLabel: "Scope",
      //   navFullLabel: "Scope (Solution Definition)",
      //   heading: "Solution Definition",
      //   blocks: [
      //     {
      //       content: [
      //         "The goal is to create a planning clear, collaborative, and data-driven platform for event organization/managment.",
      //         "A unified dashboard that ties together vendor discovery.",
      //       ],
      //     },
      //     {
      //       subheading: ["Core Features"],
      //       content: [
      //         "•  Vendor Booking: Find, compare, and book verified vendors and venues in one place.",
      //         "•  Budget Tracking: Set a budget, track spend by category, and see over/under in real time.",
      //         "•  Manage Guests: Send invites, collect RSVPs, and handle check-ins without spreadsheets.",
      //         "•  Collaboration Hub: Add teammates, assign tasks, and keep everyone aligned on one dashboard.",
      //       ],
      //       image: {
      //         src: "/ux-ui-togathr/togathr-features.png",
      //         alt: "Safemilo Features",
      //         position: "below",
      //       },
      //     },
      //   ],
      // },
      {
        type: "case-study-section",
        id: "sketch",
        navLabel: "Sketch",
        navFullLabel: "Sketch (Wireframes)",
        heading: "Wireframes & Ideation",
        blocks: [
          {
            subheading: ["Information Architecture - Wireframes"],
            content:[
              "•  Landing (short + decisive): Who GNW is, what they build, Explore GNW, Request Portfolio, Contact.",
              "•  GNW Works: Capabilities and process of GNW representing through their tagline “If you can imagine it, we can build it.",
              "•  Not-for-Profit: GNW’s community commitment with clear outreach path.",
              "•  Gallery: Project categories with fast visual scanning (Shop, Galleries & Museums, Public Art, Trade Shows & Conferences).",
              "•  Our Clients: Sector-grouped logos/names to reinforce trust at a glance.",
              "•  Contact: Single, distraction-free panel with form and direct contact details.",
            ],
            image: {
              src: "/ux-ui-gnw/gnw-ia-wireframes.png",
              alt: "GNW Wireframes",
              position: "below",
            },
          },
        ],
      },
      {
        type: "case-study-section",
        id: "style",
        navLabel: "Style",
        navFullLabel: "Style (Brand & UI Kit)",
        heading: "Brand & UI Kit",
        blocks: [
          {
            content: [
              "A strict requirement was to retain the existing brand during the redesign.",
              "Using Poppins and orange as the centerpiece while elevating the overall experience.",
            ],
          },
          {
            subheading: ["Color System"],
            content: [
              "A dark, bold, industrial base (near-black) with GNW Orange as the action and highlight color; white for content surfaces and contrast accents.",
            ],
          },
          {
            subheading: ["Typography"],
            content: [
              "Poppins forclean, confident, and consistent with the brand; tight scale for headlines, generous line height for body.",
            ],
          },
          {
            subheading: ["Components"],
            content: [
              "Rounded-corner blocks inspired by fabrication jig forms",
              "A sticky side-navigation for subpages", 
              "Consistent CTA styling",
              "Continuous image scrolling cards with crisp captions in gallery",
            ],
          },
        ],
      },
      {
        type: "case-study-section",
        id: "showcase",
        navLabel: "Showcase",
        navFullLabel: "Showcase (Final Solution)",
        heading: "Final Solution - The Redesign",
        blocks: [
          {
            subheading: ["Landing"],
            content: [
              "From long, generic scrolling to a short, high-impact entry with bold statement, facility stats, and immediate CTAs",
            ],
            image: {
              src: "/ux-ui-gnw/gnw-home.png",
              alt: "GNW Landing Page",
              position: "below",
            },
          },
          {
            subheading: ["Navigation"],
            content: [
              "From mixed/duplicative sections to a clean primary nav and left rail on interior pages for quick orientation.",
            ],
            image: {
              src: "/ux-ui-gnw/gnw-works.png",
              alt: "GNW Works",
              position: "below",
            },
          },
          {
            subheading: ["Not for Profit"],
            content: [
              "Dedicated section with purpose statement and a friendly contact pathway—not intimidating for nonprofit partners.",
            ],
            image: {
              src: "/ux-ui-gnw/gnw-nfp.png",
              alt: "GNW Not for Profit",
              position: "below",
            },
          },
          {
            subheading: ["Gallery"],
            content: [
              "Grid of practice areas with large imagery; skim-friendly and quickly scannable.",
              "A continuous image scrolling cards with crisp captions.",
            ],
            image: {
              src: "/ux-ui-gnw/gnw-gallery-animation.gif",
              alt: "GNW Gallery",
              position: "below",
            },
          },
          {
            subheading: ["Ourclients"],
            content: [
              "Sectorized lists that project scale and trust (“Visual Arts, Performing Arts, Exhibitions & Events, Activations & Media, Retail & Commercial”).",
              "Added custom illustrations to enhance visual appeal and clearly convey the nature of work in each category.",
            ],
            image: {
              src: "/ux-ui-gnw/gnw-clients-page-animation.gif",
              alt: "GNW Clients Page Animation",
              position: "below",
            },
          },
        ],
      },
      {
        type: "case-study-section",
        id: "see-it-live",
        navLabel: "See It Live",
        navFullLabel: "See It Live (Prototype)",
        heading: "Interactive Prototype",
        content: [
          // "Visit the project site: togathr.ca",
          "The experience is driven by purposeful motion and micro-interactions that guide attention, reinforce hierarchy, and keep users engaged throughout the site.",
        ],
        figmaUrl:
          "https://embed.figma.com/proto/9BbltEafBs47fcgbaOAF9O/GNW?page-id=0%3A1&node-id=8-727&viewport=512%2C496%2C0.05&scaling=scale-down&content-scaling=responsive&starting-point-node-id=8%3A727&embed-host=share",
      },
    ],
  },
   {
    id: "atdd-webapp",
    title: "Anytime Dock and Door",
    category: "ux-ui",
    description: "",
    timeline: "Timeline - 12 Weeks",
    year: "2024",
    tags: ["UX/UI Design", "Event Planning", "Research", "Branding", "Web"],
    image: "/ux-ui-atdd/atdd-cover-photo.png",
    modelPath: "/models/projects/togathr-home-desktop-model.glb",
    featured: true,
    content: [
      {
        type: "hero",
        title: "Anytime Dock and Door",
        subtitle: "",
        description: "",
        tags: ["UX/UI Design", "Accessibility", "Research", "Branding", "Mobile"],
        year: "2024",
        timeline: "Timeline - 12 Weeks",
        modelPath: "/models/projects/togathr-home-desktop-model.glb",
      },
      {
        type: "case-study-section",
        id: "spark",
        navLabel: "Spark",
        navFullLabel: "Spark (Project Overview)",
        heading: "Project Overview",
        // content:
        //   "ToGathr is a web platform that centralizes every aspect of event planning, vendors and venues, guest RSVPs, budget tracking, and team collaboration and supported by an AI assistant that jump-starts tasks and keeps work moving. The product was delivered in 12 weeks by a cross-functional team (5 designers, 4 developers) operating in an Agile workflow.",
        image: {
          src: "/ux-ui-atdd/atdd-hero-photo.png",
          alt: "Anytime Dock and Door app overview",
          position: "below",
        },
      },
    //   {
    //     type: "case-study-section",
    //     id: "struggle",
    //     navLabel: "Struggle",
    //     navFullLabel: "Struggle (The Problem)",
    //     heading: "The Problem",
    //     content:
    //       "Planning even a small event is fragmented: people juggle separate tools for budgets, guest lists, vendor search, and communication, often relying on unverified reviews or word of mouth. This creates duplication, missed details, and decision fatigue. ToGathr addresses the fragmentation with a single, organized workspace.",
    //     image: {
    //       src: "/ux-ui-togathr/togathr-problem.png",
    //       alt: "ToGathr Problem identification",
    //       position: "below",
    //     },
    //   },
    //   {
    //     type: "case-study-section",
    //     id: "scan",
    //     navLabel: "Scan",
    //     navFullLabel: "Scan (Research & Insights)",
    //     heading: "Research & Insights",
    //     blocks: [
    //       {
    //         subheading: ["Primary Research: User Interviews and Personas"],
    //         content: [
    //           "To ground ToGathr in real planning needs, we paired competitor analysis (Eventbrite, Zola, Cvent) with primary interviews of individual planners and coordinators, then synthesized insights through personas, card sorting, and user-flow mapping.",
    //           "This mixed-methods approach clarified pain points.",
    //         ],
    //       },
    //       { 
    //         subheading: ["Key Insights"],
    //         content: [
    //           "•  Tool fragmentation. Planners juggle separate apps for vendors, budgets, RSVPs, and communication. Often creating duplicate work, missed details, and decision fatigue.",
    //           "•  Trust gap in vendors. Reliance on word-of-mouth and inconsistent reviews makes it hard to compare options or validate quality against the event budget.",
    //           "•  Coordination friction. Guest management and task handoffs often break down, slowing progress and causing errors.",
    //           "•  Budget blindness. Costs aren’t visible at decision time, leading to overages and last-minute compromises.",
    //           "These findings shaped ToGathr’s unified dashboard, verified vendor model, budget-aware flows, simplified navigation (persistent left sidebar, clear confirmations), and an AI assistant that generates starter task lists and nudges next steps.",
    //         ],
    //         images: [
    //           {
    //             src: "/ux-ui-togathr/togathr-user-persona-01.png",
    //             alt: "ToGathr User Persona 01",
    //           },
    //           {
    //             src: "/ux-ui-togathr/togathr-user-persona-02.png",
    //             alt: "ToGathr User Persona 02",
    //           },
    //         ],
    //       },
    //       {
    //         subheading: ["Secondary Research: Competitor Analysis"],
    //         content: [
    //           "This comparison shows that ToGathr is the only platform to unify the full planning workflow. Competing tools tend to cover only parts of the journey and lack integrated collaboration or AI support. As a result, ToGathr not only streamlines execution end-to-end but also improves planning quality, confidence, and on-time delivery.",
    //         ],
    //         image: {
    //           src: "/ux-ui-togathr/togathr-competitor-analysis.png",
    //           alt: "ToGathr Competitor Analysis",
    //           position: "below",
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     type: "case-study-section",
    //     id: "scope",
    //     navLabel: "Scope",
    //     navFullLabel: "Scope (Solution Definition)",
    //     heading: "Solution Definition",
    //     blocks: [
    //       {
    //         content: [
    //           "The goal is to create a planning clear, collaborative, and data-driven platform for event organization/managment.",
    //           "A unified dashboard that ties together vendor discovery.",
    //         ],
    //       },
    //       {
    //         subheading: ["Core Features"],
    //         content: [
    //           "•  Vendor Booking: Find, compare, and book verified vendors and venues in one place.",
    //           "•  Budget Tracking: Set a budget, track spend by category, and see over/under in real time.",
    //           "•  Manage Guests: Send invites, collect RSVPs, and handle check-ins without spreadsheets.",
    //           "•  Collaboration Hub: Add teammates, assign tasks, and keep everyone aligned on one dashboard.",
    //         ],
    //         image: {
    //           src: "/ux-ui-togathr/togathr-features.png",
    //           alt: "Safemilo Features",
    //           position: "below",
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     type: "case-study-section",
    //     id: "sketch",
    //     navLabel: "Sketch",
    //     navFullLabel: "Sketch (Wireframes)",
    //     heading: "Wireframes & Ideation",
    //     blocks: [
    //       {
    //         subheading: ["Information Architecture"],
    //         image: {
    //           src: "/ux-ui-togathr/togathr-information-architecture.png",
    //           alt: "Safemilo Information Architecture",
    //           position: "below",
    //         },
    //       },
    //       {
    //         subheading: ["Wireframes"],
    //         content:
    //           "Mid-fidelity testing revealed that a collapsed side navigation significantly hurt feature discoverability. In the next iteration, we replaced the collapsible pattern with a persistent, always-open sidebar, which improved wayfinding and reduced navigation friction across core tasks.",
    //         image: {
    //           src: "/ux-ui-togathr/togathr-wireframes.png",
    //           alt: "Safemilo Wireframes",
    //           position: "below",
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     type: "case-study-section",
    //     id: "style",
    //     navLabel: "Style",
    //     navFullLabel: "Style (Brand & UI Kit)",
    //     heading: "Brand & UI Kit",
    //     blocks: [
    //       {
    //         subheading: ["Color System"],
    //         content: [
    //           "We chose a palette that communicates clarity, momentum, and collaboration. A vivid Violet primary drives focus, with Mint accents for highlights and status.",
    //           "High contrast supports readability across dashboards and reports, and the system is tested to meet WCAG AA, with AAA applied to critical alerts and confirmations.",
    //           "The result is an accessible, energetic visual language that scales from personal parties to professional events.",
    //         ],
    //       },
    //       {
    //         subheading: ["Typography"],
    //         content: [
    //           "Meta Pro is used for headings to provide structure and personality, creating clear sectioning across dense planning screens.",
    //           "Noto Sans handles body copy and UI labels thanks to its even rhythm and excellent legibility across sizes and devices. Together they keep tables, forms, and cards easy to scan while maintaining a confident, modern tone.",
    //         ],
    //         image: {
    //           src: "/ux-ui-togathr/togathr-color-typography.png",
    //           alt: "Safemilo Color & Typography",
    //           position: "below",
    //         },
    //       },
    //       {
    //         subheading: ["Logo"],
    //         content: [
    //           "Our mark blends an abstract celebration motif with the T and G letterforms, signaling people coming together.",
    //           "It remains recognizable in full color or monochrome, across small favicon sizes to large event screens, reinforcing ToGathr’s promise of simple, coordinated planning.",
    //         ],
    //         image: {
    //           src: "/ux-ui-togathr/togathr-logo.png",
    //           alt: "Safemilo Logo",
    //           position: "below",
    //         },
    //       },
    //       {
    //         subheading: ["UI Kit"],
    //         content: [
    //           "The component library uses rounded cards, ample white space, and subtle dividers to reduce cognitive load. Flat, readable iconography and accessible button states ensure clarity under time pressure. Vendor cards are designed for quick comparison; budget and RSVP components include built-in chart styles for at-a-glance status. Interactive elements are sized for comfortable clicking and tap targets across breakpoints, resulting in an interface that feels organized, responsive, and effortless to use.",
    //         ],
    //         image: {
    //           src: "/ux-ui-togathr/togathr-ui-kit.png",
    //           alt: "Safemilo UI Kit",
    //           position: "below",
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     type: "case-study-section",
    //     id: "showcase",
    //     navLabel: "Showcase",
    //     navFullLabel: "Showcase (Final Solution)",
    //     heading: "Final Solution",
    //     blocks: [
    //       {
    //         subheading: ["Event Creation"],
    //         content: [
    //           "A guided, first-time flow that helps users set goals, dates, budgets, and priorities, making setup fast and approachable.",
    //         ],
    //         image: {
    //           src: "/ux-ui-togathr/togathr-event-creation.png",
    //           alt: "ToGathr Event Creation",
    //           position: "below",
    //         },
    //       },
    //       {
    //         subheading: ["Event Overview Dashboard"],
    //         content: [
    //           "A single dashboard snapshot of budget, vendors, RSVPs, and tasks. An AI-generated task list based on event type gives users a head start.",
    //         ],
    //         image: {
    //           src: "/ux-ui-togathr/togathr-overview-dashboard.png",
    //           alt: "ToGathr Overview Dashboard",
    //           position: "below",
    //         },
    //       },
    //       {
    //         subheading: ["Vendors"],
    //         content: [
    //           "Browse and compare verified options with clear pricing and packages. Save favorites and book directly from the dashboard.",
    //         ],
    //         image: {
    //           src: "/ux-ui-togathr/togathr-vendors.png",
    //           alt: "ToGathr Vendors",
    //           position: "below",
    //         },
    //       },
    //       {
    //         subheading: ["Budget Tracking"],
    //         content: ["Browse and compare verified options with clear pricing and packages. Save favorites and book directly from the dashboard."],
    //         image: {
    //           src: "/ux-ui-togathr/togathr-budget.png",
    //           alt: "ToGathr Budget",
    //           position: "below",
    //         },
    //       },
    //       {
    //         subheading: ["Collaboration"],
    //         content: [
    //           "Invite teammates to co-plan, assign tasks, and keep decisions in one place. Send invites, collect RSVPs, and manage check-ins without spreadsheets.",
    //         ],
    //         image: {
    //           src: "/ux-ui-togathr/togathr-collaboration.png",
    //           alt: "ToGathr Collaboration",
    //           position: "below",
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     type: "case-study-section",
    //     id: "step-forward",
    //     navLabel: "Step Forward",
    //     navFullLabel: "Step Forward (Future Features)",
    //     heading: "Future Features",
    //     content: [
    //       "•  In-app collaborator chat to keep decisions and context in one place.",
    //       "•  Integrated payments for vendor booking inside the platform.",
    //       "•  Food-waste reduction flow—connect leftover catering to local charities.",
    //     ],
    //   },
    //   {
    //     type: "case-study-section",
    //     id: "see-it-live",
    //     navLabel: "See It Live",
    //     navFullLabel: "See It Live (Prototype)",
    //     heading: "Interactive Prototype",
    //     content: [
    //       // "Visit the project site: togathr.ca",
    //       "Experience the ToGathr web-app firsthand through our interactive Figma prototype. Click through the high-fidelity flows and explore the features designed to plan a perfect event. From Event Planning: Budget, Vendors, RSVPs, Collaboration, and Dashboard.",
    //     ],
    //     figmaUrl:
    //       "https://embed.figma.com/proto/tDNwI24nvg5z5sKRvmJSCb/High-Fidelity-Wireframes?page-id=1627%3A71035&node-id=1627-72926&p=f&viewport=524%2C376%2C0.03&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1627%3A72926&show-proto-sidebar=1&embed-host=share",
    //   },
    ],
  },







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




    {
    id: "wesley-chapel",
    title: "Wesley Chapel Residence",
    category: "interior",
    description: "Modern luxury interior design with contemporary aesthetics",
    timeline: "Timeline - 8 Days",
    year: "2024",
    tags: ["Interior Design", "Residential", "Modern", "Luxury"],
    image: "/interior-wesleychappel/9.1imp.jpg",
    featured: true,
    content: [
      {
        type: "interior-hero",
        title: "Wesley Chapel Residence",
        subtitle: "3D Rendering Project - Architecture",
        heroImage: "/interior-wesleychappel/9.1imp.jpg",
        tags: ["Interior Design", "Residential", "Modern", "Luxury"],
        timeline: "Timeline - 8 Days",
        year: "2024",
      },
      {
        type: "interior-overview",
        heading: "Project Overview",
        projectName: "Singh Residence",
        location: "Wesley Chapel, Florida, US",
        projectType: "Residential",
        workDuration: "8 days",
        softwareUsed: "SketchUp, Lumion, Photoshop, Aftereffects",
        contribution: [
          "I was provided with a comprehensive set of architectural construction drawings by the project's real estate developer. My primary responsibility was to interpret these technical documents and translate them into photorealistic architectural visualizations that accurately reflect the design intent.",
          "The process began with an in-depth review of the architectural, structural, and interior detailing to ensure precision in spatial proportions and materiality. Using SketchUp, I developed a detailed 3D model that captured the architectural language and volumetric articulation of the structure. To achieve real-time rendering performance without compromising quality, the model was seamlessly imported into Lumion.",
          "A curated selection of physically-based rendering (PBR) materials was applied, with careful consideration of surface properties such as roughness, reflectivity, and albedo, to align with both the visual style and material specifications indicated in the construction documents.",
          "To further enhance the realism, I exported multiple render passes including lighting maps, reflection/specular maps, and shadow overlays from Lumion. These were composited and refined in Adobe Photoshop, allowing for greater control over atmospheric conditions, depth, and photorealistic enhancement.",
          "The final visualizations are not just renders. They are a visual narrative that communicates the project's design ethos, spatial qualities, and material textures with clarity and realism.",
        ],
      },
      {
        type: "comparison",
        id: "comparison",
        heading: "Design Evolution",
        description: "Explore the transformation of key spaces through our interactive comparison view.",
        images: [
          { src: "/interior-wesleychappel/Autocad.png", alt: "2d-drawing-autocad", caption: "2d Drawing" },
          { src: "/interior-wesleychappel/Sketchup Model.png", alt: "3d-model-wireframe", caption: "3d Model" },
          { src: "/interior-wesleychappel/Lumion.png", alt: "real-time-render", caption: "Render" },
          { src: "/interior-wesleychappel/final.png", alt: "final-image", caption: "Final Image" },
        ],
      },
      {
        type: "case-study-section",
        id: "gallery",
        navLabel: "Gallery",
        navFullLabel: "Gallery (Project Images)",
        heading: "Project Gallery",
        blocks: [
          {
            content:
              "Explore the complete transformation of this modern residence through our curated gallery of interior spaces.",
            images: [
              { src: "/interior-wesleychappel/1.1.jpg", alt: "Exterior Elevation 1", caption: "Exterior Elevation 1" },
              { src: "/interior-wesleychappel/2.1.jpg", alt: "Exterior Elevation 2", caption: "Exterior Elevation 2" },
              { src: "/interior-wesleychappel/3.1.jpg", alt: "Swimming Pool", caption: "Swimming Pool" },
              { src: "/interior-wesleychappel/4.1.jpg", alt: "Swimming Pool", caption: "Swimming Pool" },
              // { src: "/interior-wesleychappel/5.1.jpg", alt: "Aeriel View", caption: "Aeriel View" },
              { src: "/interior-wesleychappel/6.1.jpg", alt: "Garden", caption: "Garden" },
              { src: "/interior-wesleychappel/7.1.jpg", alt: "Back-yard Seating", caption: "Back-yard Seating" },
              { src: "/interior-wesleychappel/8.1.jpg", alt: "Elevation with Fountain", caption: "Elevation with Fountain" },
              { src: "/interior-wesleychappel/9.1imp.jpg", alt: "Front Elevation", caption: "Front Elevation" },
              { src: "/interior-wesleychappel/10.1.jpg", alt: "Exterior Elevation 3", caption: "Exterior Elevation 3" },
              { src: "/interior-wesleychappel/11.1.jpg", alt: "Exterior Elevation 4", caption: "Exterior Elevation 4" },
              { src: "/interior-wesleychappel/12.1.jpg", alt: "Aeriel View", caption: "Aeriel View" },
              { src: "/interior-wesleychappel/13.1.jpg", alt: "Patio", caption: "Patio" },

            ],
            imageLayout: "grid-4",
          },
        ],
      },
    ],
  },


  // {
  //   id: "ashok-narsing",
  //   title: "Ashok Narsing Apartment",
  //   category: "interior",
  //   description: "Contemporary urban living with minimalist design principles",
  //   timeline: "Timeline - 6 Weeks",
  //   year: "2024",
  //   tags: ["Interior Design", "Apartment", "Minimalist", "Urban"],
  //   image: "/minimalist-apartment-interior.jpg",
  //   featured: true,
  //   content: [
  //     {
  //       type: "hero",
  //       title: "Ashok Narsing Apartment",
  //       subtitle: "Contemporary Urban Living",
  //       description: "Clean lines and functional spaces define this modern apartment",
  //       tags: ["Interior Design", "Apartment", "Minimalist", "Urban"],
  //       year: "2024",
  //       timeline: "Timeline - 6 Weeks",
  //       image: "/minimalist-apartment-interior.jpg",
  //     },
  //     {
  //       type: "case-study-section",
  //       id: "gallery",
  //       navLabel: "Gallery",
  //       navFullLabel: "Gallery (Project Images)",
  //       heading: "Project Gallery",
  //       blocks: [
  //         {
  //           content: "Discover the minimalist elegance and functional beauty of this urban apartment.",
  //           images: [
  //             { src: "/minimalist-apartment-interior.jpg", alt: "Minimalist living space", caption: "Living Space" },
  //             { src: "/minimalist-bedroom.png", alt: "Minimalist bedroom", caption: "Bedroom" },
  //             { src: "/modern-kitchen-minimalist.jpg", alt: "Modern kitchen", caption: "Kitchen" },
  //             { src: "/minimalist-bathroom.jpg", alt: "Minimalist bathroom", caption: "Bathroom" },
  //             { src: "/minimalist-dining.jpg", alt: "Dining area", caption: "Dining Area" },
  //             { src: "/minimalist-workspace.png", alt: "Workspace", caption: "Workspace" },
  //           ],
  //           imageLayout: "grid-3",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: "sandeep-residence",
  //   title: "Sandeep Residence",
  //   category: "interior",
  //   description: "Warm and inviting family home with traditional touches",
  //   timeline: "Timeline - 10 Weeks",
  //   year: "2023",
  //   tags: ["Interior Design", "Residential", "Traditional", "Family Home"],
  //   image: "/traditional-family-home-interior.jpg",
  //   featured: false,
  //   content: [
  //     {
  //       type: "hero",
  //       title: "Sandeep Residence",
  //       subtitle: "Traditional Family Home",
  //       description: "A warm and welcoming space that celebrates family living",
  //       tags: ["Interior Design", "Residential", "Traditional", "Family Home"],
  //       year: "2023",
  //       timeline: "Timeline - 10 Weeks",
  //       image: "/traditional-family-home-interior.jpg",
  //     },
  //     {
  //       type: "case-study-section",
  //       id: "gallery",
  //       navLabel: "Gallery",
  //       navFullLabel: "Gallery (Project Images)",
  //       heading: "Project Gallery",
  //       blocks: [
  //         {
  //           content: "Experience the warmth and character of this beautifully designed family residence.",
  //           images: [
  //             { src: "/traditional-family-home-interior.jpg", alt: "Traditional living room", caption: "Living Room" },
  //             { src: "/traditional-bedroom.jpg", alt: "Traditional bedroom", caption: "Bedroom" },
  //             { src: "/traditional-kitchen.png", alt: "Traditional kitchen", caption: "Kitchen" },
  //             { src: "/family-dining-room.jpg", alt: "Dining room", caption: "Dining Room" },
  //             { src: "/traditional-bathroom.jpg", alt: "Bathroom", caption: "Bathroom" },
  //             { src: "/kids-room.jpg", alt: "Kids room", caption: "Kids Room" },
  //           ],
  //           imageLayout: "grid-3",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: "oxygen-park",
  //   title: "Oxygen Park Villa",
  //   category: "interior",
  //   description: "Biophilic design integrating nature with modern living",
  //   timeline: "Timeline - 12 Weeks",
  //   year: "2023",
  //   tags: ["Interior Design", "Villa", "Biophilic", "Sustainable"],
  //   image: "/biophilic-villa-interior-with-plants.jpg",
  //   featured: false,
  //   content: [
  //     {
  //       type: "hero",
  //       title: "Oxygen Park Villa",
  //       subtitle: "Biophilic Design",
  //       description: "Where nature meets modern luxury in perfect harmony",
  //       tags: ["Interior Design", "Villa", "Biophilic", "Sustainable"],
  //       year: "2023",
  //       timeline: "Timeline - 12 Weeks",
  //       image: "/biophilic-villa-interior-with-plants.jpg",
  //     },
  //     {
  //       type: "case-study-section",
  //       id: "gallery",
  //       navLabel: "Gallery",
  //       navFullLabel: "Gallery (Project Images)",
  //       heading: "Project Gallery",
  //       blocks: [
  //         {
  //           content: "Immerse yourself in the natural beauty and sustainable design of this unique villa.",
  //           images: [
  //             {
  //               src: "/biophilic-villa-interior-with-plants.jpg",
  //               alt: "Biophilic living space",
  //               caption: "Living Space with Plants",
  //             },
  //             { src: "/biophilic-bedroom-plants.jpg", alt: "Bedroom with plants", caption: "Bedroom" },
  //             { src: "/green-kitchen.jpg", alt: "Green kitchen", caption: "Kitchen" },
  //             { src: "/bathroom-plants.jpg", alt: "Bathroom with plants", caption: "Bathroom" },
  //             { src: "/indoor-garden.jpg", alt: "Indoor garden", caption: "Indoor Garden" },
  //             { src: "/green-dining-room.jpg", alt: "Dining room", caption: "Dining Room" },
  //           ],
  //           imageLayout: "grid-3",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: "urban-habitite",
  //   title: "Urban Habitite Loft",
  //   category: "interior",
  //   description: "Industrial-chic loft conversion with modern amenities",
  //   timeline: "Timeline - 9 Weeks",
  //   year: "2023",
  //   tags: ["Interior Design", "Loft", "Industrial", "Modern"],
  //   image: "/industrial-loft-interior.jpg",
  //   featured: false,
  //   content: [
  //     {
  //       type: "hero",
  //       title: "Urban Habitite Loft",
  //       subtitle: "Industrial-Chic Living",
  //       description: "Raw materials and refined design create an urban sanctuary",
  //       tags: ["Interior Design", "Loft", "Industrial", "Modern"],
  //       year: "2023",
  //       timeline: "Timeline - 9 Weeks",
  //       image: "/industrial-loft-interior.jpg",
  //     },
  //     {
  //       type: "case-study-section",
  //       id: "gallery",
  //       navLabel: "Gallery",
  //       navFullLabel: "Gallery (Project Images)",
  //       heading: "Project Gallery",
  //       blocks: [
  //         {
  //           content: "Explore the industrial elegance and modern functionality of this converted loft space.",
  //           images: [
  //             { src: "/industrial-loft-interior.jpg", alt: "Industrial loft living area", caption: "Living Area" },
  //             { src: "/industrial-bedroom.jpg", alt: "Industrial bedroom", caption: "Bedroom" },
  //             { src: "/industrial-kitchen.png", alt: "Industrial kitchen", caption: "Kitchen" },
  //             { src: "/industrial-bathroom.jpg", alt: "Industrial bathroom", caption: "Bathroom" },
  //             { src: "/loft-workspace.jpg", alt: "Workspace", caption: "Workspace" },
  //             { src: "/placeholder.svg?height=600&width=800", alt: "Dining area", caption: "Dining Area" },
  //           ],
  //           imageLayout: "grid-3",
  //         },
  //       ],
  //     },
  //   ],
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
