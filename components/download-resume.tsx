"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DownloadResume() {
  const handleDownload = () => {
    // Create a dummy PDF download - in real implementation, this would link to your actual resume
    const link = document.createElement("a")
    link.href = "/resume.pdf" // You would replace this with your actual resume file
    link.download = "Shashank_Panjeti_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button onClick={handleDownload} className="gap-2">
      <Download className="h-4 w-4" />
      Download Resume
    </Button>
  )
}
