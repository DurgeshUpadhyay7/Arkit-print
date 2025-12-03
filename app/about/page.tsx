import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { SectionHeading } from "@/components/section-heading"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Arkit Print Solution",
  description:
    "Learn about Arkit Print Solution - our mission, vision, and team dedicated to providing premium printing services in Mumbai.",
}

export default function About() {
  const team = [
    {
      name: "Ashwin Yadav",
      role: "Founder & CEO",
      image: "/placeholder.svg?key=ash123",
      bio: "With 10+ years of experience in printing industry, Ashwin leads Arkit Print with vision and expertise.",
    },
    {
      name: "Priya Desai",
      role: "Design Lead",
      image: "/placeholder.svg?key=des456",
      bio: "Creative designer passionate about bringing client visions to life through innovative designs.",
    },
    {
      name: "Vikram Singh",
      role: "Operations Manager",
      image: "/placeholder.svg?key=vik789",
      bio: "Ensures timely delivery and quality control across all printing projects with precision.",
    },
  ]

  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 px-4 md:px-0 mb-20">
        <Hero
          title="About Arkit Print Solution"
          subtitle="Committed to delivering excellence in printing services since our founding"
          backgroundImage="/placeholder.svg?key=offi001"
        />
      </section>

      {/* Company Introduction */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Arkit Print Solution was founded with a simple mission: to provide professional, high-quality printing
              services accessible to businesses of all sizes in Mumbai and surrounding areas.
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Starting from a small printing shop, we've grown into a trusted partner for hundreds of businesses, thanks
              to our commitment to quality, innovation, and customer satisfaction.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we operate state-of-the-art printing facilities with a dedicated team passionate about delivering
              exceptional results for every project.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg fade-in-up">
            <Image src="/placeholder.svg?key=shop001" alt="Arkit Print Solution Office" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Our Mission & Vision" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 fade-in-up">
              <h3 className="text-2xl font-bold text-foreground mb-4">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional printing solutions that exceed customer expectations through innovative
                technology, skilled craftsmanship, and unwavering commitment to quality. We aim to be the most reliable
                printing partner for businesses in Mumbai.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 fade-in-up">
              <h3 className="text-2xl font-bold text-foreground mb-4">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading printing service provider in Mumbai region, known for innovation, reliability, and
                customer-centric approach. We envision a future where quality printing is accessible and affordable for
                all businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <SectionHeading title="Meet Our Team" subtitle="Talented professionals dedicated to printing excellence" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 fade-in-up group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Office Gallery */}
      <section className="bg-secondary py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Our Facilities" subtitle="State-of-the-art printing equipment and workspace" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg fade-in-up">
              <Image src="/placeholder.svg?key=facil001" alt="Office space" fill className="object-cover" />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg fade-in-up">
              <Image src="/placeholder.svg?key=facil002" alt="Printing machines" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <SectionHeading title="Our Core Values" subtitle="Principles that guide everything we do" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "Quality", desc: "Excellence in every print" },
            { title: "Integrity", desc: "Honest and transparent business" },
            { title: "Innovation", desc: "Continuous improvement" },
            { title: "Customer Focus", desc: "Your satisfaction is our priority" },
          ].map((value, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-secondary hover:bg-card shadow-sm hover:shadow-md transition-all duration-300 fade-in-up"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
