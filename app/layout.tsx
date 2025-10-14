import type React from "react"
import type { Metadata } from "next"
// import { GeistSans } from "geist/font/sans"
// import { GeistMono } from "geist/font/mono"
// import { Analytics } from "@vercel/analytics/next"
import { Lora } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Suspense } from "react"
import "./globals.css"
import LiquidEther from "@/components/liquid-ether"

export const metadata: Metadata = {
  title: "Portfolio - Designer & Developer",
  description: "Creative portfolio showcasing UX/UI, Architecture, Interior Design, 3D work, and Photography",
  generator: "v0.app",
}

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${lora.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="fixed inset-0 z-0 pointer-events-none">
            <LiquidEther
              colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
              mouseForce={25}
              cursorSize={120}
              isViscous={true}
              viscous={40}
              iterationsViscous={32}
              iterationsPoisson={32}
              resolution={0.5}
              isBounce={false}
              autoDemo={true}
              autoSpeed={0}
              autoIntensity={0}
              takeoverDuration={0.15}
              autoResumeDelay={999999}
              autoRampDuration={0}
            />
          </div>
          <Suspense fallback={null}>
            <Navigation />
            <main className="pt-16 relative z-10">{children}</main>
          </Suspense>
        </ThemeProvider>
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
