"use client"

import { Component, type ReactNode } from "react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    console.log("[v0] Error boundary caught:", error.message)
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.log("[v0] Error details:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="w-full h-full flex items-center justify-center bg-muted/20 rounded-lg">
            <div className="text-center space-y-2 p-6">
              <div className="w-12 h-12 mx-auto bg-destructive/10 rounded-full flex items-center justify-center">
                <span className="text-destructive text-xl">⚠</span>
              </div>
              <p className="text-sm text-muted-foreground">Unable to load 3D content</p>
              <p className="text-xs text-muted-foreground/60">Showing placeholder instead</p>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
}
