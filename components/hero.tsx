import Image from "next/image"
import type { ReactNode } from "react"

interface HeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  children?: ReactNode
}

export function Hero({ title, subtitle, backgroundImage, children }: HeroProps) {
  return (
    <section className="relative w-full h-screen md:h-96 overflow-hidden rounded-2xl">
      {backgroundImage && (
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 fade-in-up text-balance text-pretty">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl mb-8 fade-in-up max-w-2xl text-pretty">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
