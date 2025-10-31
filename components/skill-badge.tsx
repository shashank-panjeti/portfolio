interface SkillBadgeProps {
  skill: string
  level?: "beginner" | "intermediate" | "advanced" | "expert"
}

export function SkillBadge({ skill, level = "advanced" }: SkillBadgeProps) {
  const levelColors = {
    beginner: "text-foreground",
    intermediate: "text-foreground",
    advanced: "text-foreground",
    expert: "text-foreground",
  }

  return (
    <span className={`inline-flex items-center pr-5 py-1 text-sm ${levelColors[level]}`}>
      {skill}
    </span>
  )
}
