interface SectionHeadingProps {
  title: string
  subtitle?: string
  alignment?: "left" | "center"
}

export function SectionHeading({ title, subtitle, alignment = "center" }: SectionHeadingProps) {
  const alignClass = alignment === "center" ? "text-center" : "text-left"

  return (
    <div className={`mb-12 fade-in-up ${alignClass}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}
