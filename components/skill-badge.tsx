interface SkillBadgeProps {
  skill: string
  level?: "beginner" | "intermediate" | "advanced" | "expert"
}

export function SkillBadge({ skill, level = "advanced" }: SkillBadgeProps) {
  const levelColors = {
    beginner: "bg-muted text-muted-foreground",
    intermediate: "bg-accent text-accent-foreground",
    advanced: "bg-primary/10 text-primary",
    expert: "bg-primary text-primary-foreground",
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${levelColors[level]}`}>
      {skill}
    </span>
  )
}
