"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { SectionHeading } from "@/components/section-heading"
import { GalleryGrid } from "@/components/gallery-grid"

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All")

  const portfolioItems = [
    {
      id: "1",
      category: "Visiting Cards",
      title: "Corporate Visiting Cards",
      image: "/placeholder.svg?key=visit_card_001",
    },
    {
      id: "2",
      category: "Banners",
      title: "Promotional Banner Design",
      image: "/placeholder.svg?key=banner_design_001",
    },
    {
      id: "3",
      category: "Flex",
      title: "Flex Banner Print",
      image: "/placeholder.svg?key=flex_print_001",
    },
    {
      id: "4",
      category: "Packaging",
      title: "Custom Box Packaging",
      image: "/placeholder.svg?key=package_001",
    },
    {
      id: "5",
      category: "Visiting Cards",
      title: "Premium Business Cards",
      image: "/placeholder.svg?key=visit_card_002",
    },
    {
      id: "6",
      category: "Banners",
      title: "Event Banner",
      image: "/placeholder.svg?key=banner_event_001",
    },
    {
      id: "7",
      category: "Flex",
      title: "Store Flex Print",
      image: "/placeholder.svg?key=flex_store_001",
    },
    {
      id: "8",
      category: "Packaging",
      title: "Product Packaging Design",
      image: "/placeholder.svg?key=package_002",
    },
    {
      id: "9",
      category: "Brochures",
      title: "Tri-fold Brochure",
      image: "/placeholder.svg?key=brochure_001",
    },
  ]

  const filters = ["All", "Visiting Cards", "Banners", "Flex", "Packaging", "Brochures"]

  const filteredItems =
    activeFilter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 px-4 md:px-0 mb-20">
        <Hero
          title="Our Portfolio"
          subtitle="Showcase of our finest printing projects and creative solutions"
          backgroundImage="/placeholder.svg?key=portfolio_hero"
        />
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 mb-12">
        <SectionHeading
          title="Featured Projects"
          subtitle="Browse through our recent works across different categories"
        />

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 fade-in-up ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card border border-border text-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <GalleryGrid items={filteredItems} columns={3} />
      </section>

      {/* Stats Section */}
      <section className="bg-secondary py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "300+", label: "Happy Clients" },
              { number: "15+", label: "Years Experience" },
              { number: "100%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center fade-in-up">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
