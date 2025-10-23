"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DownloadResume() {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
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


export function DownloadSafemiloProjectProposal() {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/ux-ui-safemilo/safemilo-proposal.pdf"
    link.download = "SafeMilo_Project_Proposal.pdf"
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