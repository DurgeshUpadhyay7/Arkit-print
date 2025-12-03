import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { SectionHeading } from "@/components/section-heading"
import { GalleryGrid } from "@/components/gallery-grid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery | Arkit Print Solution",
  description: "View photos of our office, printing facilities, team, and printing machines at Arkit Print Solution.",
}

export default function Gallery() {
  const galleryItems = [
    {
      id: "1",
      category: "Office",
      title: "Reception Area",
      image: "/placeholder.svg?key=office_recep",
    },
    {
      id: "2",
      category: "Machines",
      title: "Printing Machines",
      image: "/placeholder.svg?key=machines_001",
    },
    {
      id: "3",
      category: "Team",
      title: "Team at Work",
      image: "/placeholder.svg?key=team_work_001",
    },
    {
      id: "4",
      category: "Store",
      title: "Store Display",
      image: "/placeholder.svg?key=store_disp_001",
    },
    {
      id: "5",
      category: "Office",
      title: "Office Interior",
      image: "/placeholder.svg?key=office_interior_001",
    },
    {
      id: "6",
      category: "Machines",
      title: "Production Area",
      image: "/placeholder.svg?key=production_001",
    },
    {
      id: "7",
      category: "Team",
      title: "Team Meeting",
      image: "/placeholder.svg?key=team_meet_001",
    },
    {
      id: "8",
      category: "Store",
      title: "Storefront",
      image: "/placeholder.svg?key=storefront_001",
    },
    {
      id: "9",
      category: "Office",
      title: "Office Space",
      image: "/placeholder.svg?key=office_space_001",
    },
  ]

  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 px-4 md:px-0 mb-20">
        <Hero
          title="Office Gallery"
          subtitle="Take a closer look at our facilities, team, and work environment"
          backgroundImage="/placeholder.svg?key=gallery_hero"
        />
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <SectionHeading
          title="Inside Arkit Print Solution"
          subtitle="Explore our state-of-the-art facilities and team"
        />
        <GalleryGrid items={galleryItems} columns={3} />
      </section>

      {/* About Facilities */}
      <section className="bg-secondary py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Our Facilities" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Equipment",
                description: "Latest digital and offset printing machines for superior quality output",
              },
              {
                title: "Experienced Team",
                description: "Skilled professionals with years of experience in the printing industry",
              },
              {
                title: "Quality Control",
                description: "Strict quality checks ensure every print meets our high standards",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 fade-in-up"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
