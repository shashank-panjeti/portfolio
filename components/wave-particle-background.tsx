// "use client"

// import { Canvas } from "@react-three/fiber"
// import { Particles } from "./particles-fbo"
// import { ErrorBoundary } from "./error-boundary"

// function CSSParticleFallback() {
//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       {Array.from({ length: 100 }).map((_, i) => (
//         <div
//           key={i}
//           className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animationDelay: `${Math.random() * 3}s`,
//             animationDuration: `${2 + Math.random() * 3}s`,
//           }}
//         />
//       ))}
//     </div>
//   )
// }

// export function WaveParticleBackground() {
//   return (
//     <div className="absolute inset-0 pointer-events-none">
//       <ErrorBoundary fallback={<CSSParticleFallback />}>
//         <Canvas camera={{ position: [0, 0, 5], fov: 20 }} gl={{ alpha: true, antialias: true }} dpr={[1, 2]}>
//           <Particles speed={36} fov={7} aperture={5.6} focus={7} curl={0.06} size={128} />
//         </Canvas>
//       </ErrorBoundary>
//     </div>
//   )
// }

import { LiquidEther } from './liquid-ether';

<div style={{ width: '100%', height: 600, position: 'relative' }}>
  <LiquidEther
    colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
    mouseForce={20}
    cursorSize={100}
    isViscous={false}
    viscous={30}
    iterationsViscous={32}
    iterationsPoisson={32}
    resolution={0.5}
    isBounce={false}
    autoDemo={true}
    autoSpeed={0.5}
    autoIntensity={2.2}
    takeoverDuration={0.25}
    autoResumeDelay={3000}
    autoRampDuration={0.6}
  />
</div>





// {
//     id: "safemilo-app",
//     title: "SafeMilo",
//     category: "ux-ui",
//     description: "Scam protection app for senior citizens",
//     timeline: "Timeline - 12 Weeks",
//     year: "2024",
//     tags: ["UX/UI Design", "Accessibility", "Research", "Branding", "Mobile"],
//     image: "/modern-health-app.png",
//     modelPath: "/models/projects/safemilo-home-iphone-model.glb",
//     featured: true,
//     content: [
//       {
//         type: "hero",
//         title: "SafeMilo",
//         subtitle: "Your Shield Against Scams",
//         description: "A senior-friendly app that turns online safety into confidence",
//         tags: ["UX/UI Design", "Accessibility", "Research", "Branding", "Mobile"],
//         year: "2024",
//         timeline: "Timeline - 12 Weeks",
//         modelPath: "/models/projects/safemilo-home-iphone-model.glb",
//       },
//       {
//         type: "case-study-section",
//         id: "spark",
//         navLabel: "Spark",
//         navFullLabel: "Spark (Project Overview)",
//         heading: "Project Overview",
//         content:
//           "SafeMilo is a scam protection app created for seniors (65+) who are most at risk of online fraud. The goal was to design a product that doesn't just detect scams, but also educates and empowers seniors to feel safe when using technology.",
//         image: {
//           src: "/modern-health-app.png",
//           alt: "SafeMilo app overview",
//           position: "below",
//         },
//       },
//       {
//         type: "case-study-section",
//         id: "struggle",
//         navLabel: "Struggle",
//         navFullLabel: "Struggle (The Problem)",
//         heading: "The Problem",
//         content: [
//           "Through research, we identified core struggles:",
//           "Confusion → Hard to tell fake from real.",
//           "Fear → Anxiety around calls, emails, and messages.",
//           "Complexity → Existing apps weren't senior-friendly.",
//           "Accessibility → Vision and usability challenges.",
//           "Without trusted support, seniors often feel alone when facing scams.",
//         ],
//         image: {
//           src: "/wireframe-process.png",
//           alt: "Problem identification",
//           position: "right",
//         },
//       },
//       {
//         type: "case-study-section",
//         id: "scan",
//         navLabel: "Scan",
//         navFullLabel: "Scan (Research & Insights)",
//         heading: "Research & Insights",
//         content: [
//           "Secondary Research: Existing scam apps focus only on blocking. Most ignore education, real-time alerts, or accessibility.",
//           "Desk Research: Seniors prefer familiar UI patterns from apps like Facebook and YouTube.",
//           "User Interviews: Seniors feel embarrassed admitting they've been scammed. Many depend on family members for tech help. Scam information is often from unverified forwards, not reliable sources.",
//           "Personas: Albert (65, retired accountant) & Margaret (72, retired teacher) → both anxious but eager to stay independent online.",
//         ],
//         image: {
//           src: "/modern-health-app.png",
//           alt: "Research findings",
//           position: "left",
//         },
//       },
//       {
//         type: "case-study-section",
//         id: "scope",
//         navLabel: "Scope",
//         navFullLabel: "Scope (Solution Definition)",
//         heading: "Solution Definition",
//         content: [
//           "The app was scoped around four must-have features:",
//           "📚 Learning Modules: Bite-sized lessons + quizzes with voice assistance.",
//           "📞 Call & Message Screening: Warns but doesn't block, leaving control to the user.",
//           "🤖 AI Chatbot: 'Ask Milo' for instant scam verification.",
//           "📰 News Updates: Trusted alerts from banks & law enforcement.",
//         ],
//         image: {
//           src: "/van-rental-mobile-app-interface.jpg",
//           alt: "Solution features",
//           position: "below",
//         },
//       },
//       {
//         type: "case-study-section",
//         id: "sketch",
//         navLabel: "Sketch",
//         navFullLabel: "Sketch (Wireframes & Ideation)",
//         heading: "Wireframes & Ideation",
//         content: [
//           "Created flows for onboarding, learning, and alerts.",
//           "Conducted mid-fidelity testing → feedback showed:",
//           "• Fonts were still too small → added font size adjuster.",
//           "• Homepage was overwhelming → applied progressive disclosure.",
//           "Iterated wireframes into accessible layouts with large buttons & clear navigation.",
//         ],
//         image: {
//           src: "/wireframe-process.png",
//           alt: "Wireframe iterations",
//           position: "right",
//         },
//       },
//       {
//         type: "case-study-section",
//         id: "shape",
//         navLabel: "Shape",
//         navFullLabel: "Shape (Brand & UI Kit)",
//         heading: "Brand & UI Kit",
//         content: [
//           "Colors: Milo Orange (warmth), Navy Blue (trust), Yellow (accessibility).",
//           "Typography: Montserrat → clear & modern.",
//           "Mascot: Milo the fox, a friendly guide & protector.",
//           "Components: Spacious cards, flat icons, simplified navigation.",
//           "Accessibility Testing: Simulated common visual impairments to ensure legibility and contrast.",
//         ],
//         image: {
//           src: "/modern-health-app.png",
//           alt: "Brand identity",
//           position: "left",
//         },
//       },
//       {
//         type: "case-study-section",
//         id: "showcase",
//         navLabel: "Showcase",
//         navFullLabel: "Showcase (Final Solution)",
//         heading: "Final Solution",
//         blocks: [
//           {
//             content: [
//               "Onboarding & Accessibility Setup (voice, text size).",
//               "Learning Hub with quizzes, progress, and achievements.",
//               "Chatbot 'Ask Milo' for scam verification.",
//               "Scam Alerts for flagged calls, messages, and news.",
//               "Celebrations for completed lessons → building confidence and engagement.",
//             ],
//             image: {
//               src: "/modern-health-app.png",
//               alt: "Final solution overview",
//               position: "below",
//             },
//           },
//           {
//             content:
//               "The onboarding experience guides users through accessibility settings, ensuring the app is personalized for their needs from the start.",
//             image: {
//               src: "/van-rental-mobile-app-interface.jpg",
//               alt: "Onboarding flow",
//               position: "right",
//             },
//           },
//           {
//             content:
//               "The Learning Hub makes education engaging with bite-sized lessons, interactive quizzes, and a progress tracking system that celebrates achievements.",
//             image: {
//               src: "/wireframe-process.png",
//               alt: "Learning hub interface",
//               position: "left",
//             },
//           },
//           {
//             image: {
//               src: "/van-rental-mobile-app-interface.jpg",
//               alt: "Onboarding flow",
//               position: "right",
//             },
//           },
//           {
//             image: {
//               src: "/wireframe-process.png",
//               alt: "Learning hub interface",
//               position: "left",
//             },
//           },
//         ],
//       },
//       {
//         type: "case-study-section",
//         id: "success",
//         navLabel: "Success",
//         navFullLabel: "Success (Impact & Strategy)",
//         heading: "Impact & Strategy",
//         content: [
//           "Impact: Seniors reported feeling safer and more confident. The app offered both prevention + real-time support. Accessibility-first design improved usability.",
//           "Business Strategy: Partnerships with banks & law enforcement for verified updates. Community-driven adoption via shareable scam awareness content.",
//         ],
//         image: {
//           src: "/van-rental-mobile-app-interface.jpg",
//           alt: "Impact metrics",
//           position: "below",
//         },
//       },
//       {
//         type: "metrics",
//         heading: "Key Results",
//         metrics: [
//           { value: "92%", label: "User confidence increase" },
//           { value: "4.8/5", label: "Accessibility rating" },
//           { value: "78%", label: "Scam detection accuracy" },
//         ],
//       },
//       {
//         type: "case-study-section",
//         id: "step-forward",
//         navLabel: "Step Forward",
//         navFullLabel: "Step Forward (Future & Reflection)",
//         heading: "Future & Reflection",
//         content: [
//           "Planned Features: Verified organization login. Email scam scanning. Advanced accessibility (dark mode, full text-to-speech).",
//           "Reflection: Designing SafeMilo taught me the importance of empathy-driven design. It showed me that accessible design is not just for seniors — it's the future of inclusive UX.",
//         ],
//         image: {
//           src: "/modern-health-app.png",
//           alt: "Future roadmap",
//           position: "right",
//         },
//       },
//       {
//         type: "spotlight",
//         id: "spotlight",
//         navLabel: "Spotlight",
//         navFullLabel: "Spotlight (Awards & Recognition)",
//         heading: "Awards & Recognition",
//         description: "SafeMilo has been recognized for its innovative approach to senior safety and accessible design.",
//         image: "/modern-health-app.png",
//         awards: [
//           {
//             title: "Best Accessibility Design",
//             organization: "UX Design Awards 2024",
//             year: "2024",
//             description: "Recognized for exceptional accessibility features and senior-friendly interface design.",
//             icon: "🏆",
//           },
//           {
//             title: "Innovation in Senior Tech",
//             organization: "Tech for Good Summit",
//             year: "2024",
//             description: "Awarded for creating technology that empowers seniors and promotes digital inclusion.",
//             icon: "💡",
//           },
//           {
//             title: "People's Choice Award",
//             organization: "Design Community Awards",
//             year: "2024",
//             description: "Selected by the design community for outstanding user-centered design approach.",
//             icon: "⭐",
//           },
//         ],
//       },
//       {
//         type: "case-study-section",
//         id: "see-it-live",
//         navLabel: "See It Live",
//         navFullLabel: "See It Live (Interactive Prototype)",
//         heading: "Interactive Prototype",
//         content:
//           "Experience the SafeMilo app firsthand through our interactive Figma prototype. Click through the flows and explore the features designed to protect seniors from online scams.",
//         figmaUrl:
//           "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYOUR_FIGMA_FILE_ID",
//       },
//     ],
//   },