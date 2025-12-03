"use client"

import { useState } from "react"
import Image from "next/image"

interface GalleryItem {
  id: string
  image: string
  title: string
  category: string
}

interface GalleryGridProps {
  items: GalleryItem[]
  columns?: 2 | 3 | 4
}

export function GalleryGrid({ items, columns = 3 }: GalleryGridProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const colsClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  }[columns]

  return (
    <>
      <div className={`grid grid-cols-1 gap-4 ${colsClass}`}>
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-xl cursor-pointer fade-in-up"
            onClick={() => setSelectedId(item.id)}
          >
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              width={400}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
              <div className="p-4 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm opacity-90">{item.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
