import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { SectionHeading } from "@/components/section-heading"
import { ServiceCard } from "@/components/service-card"
import { Button } from "@/components/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | Arkit Print Solution",
  description:
    "Explore our comprehensive printing services including visiting cards, flex printing, banners, digital printing, offset printing, and more.",
}

export default function Services() {
  const allServices = [
    {
      title: "Visiting Card Printing",
      description: "Professional visiting cards that make a lasting impression with premium cardstock and finishes",
      image: "/placeholder.svg?key=visit001",
    },
    {
      title: "Flex Printing",
      description: "High-quality flexible vinyl banners perfect for outdoor displays and storefront advertising",
      image: "/placeholder.svg?key=flex001",
    },
    {
      title: "Banner Printing",
      description: "Eye-catching banners for promotions, events, and announcements in various sizes",
      image: "/placeholder.svg?key=banner001",
    },
    {
      title: "Digital Printing",
      description: "Fast and cost-effective printing for small to medium runs with vibrant colors",
      image: "/placeholder.svg?key=digital001",
    },
    {
      title: "Offset Printing",
      description: "Premium quality printing for large volume orders with exceptional color accuracy",
      image: "/placeholder.svg?key=offset001",
    },
    {
      title: "Brochure & Flyer Printing",
      description: "Professional brochures and flyers to promote your business effectively",
      image: "/placeholder.svg?key=broch001",
    },
    {
      title: "Mug Printing",
      description: "Personalized ceramic mugs with custom designs for branding or gifts",
      image: "/placeholder.svg?key=mug001",
    },
    {
      title: "T-Shirt Printing",
      description: "High-quality custom t-shirt printing for events, teams, or merchandise",
      image: "/placeholder.svg?key=tshirt001",
    },
    {
      title: "Custom Packaging",
      description: "Bespoke packaging solutions that protect your products and elevate your brand",
      image: "/placeholder.svg?key=pack001",
    },
  ]

  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 px-4 md:px-0 mb-20">
        <Hero
          title="Our Printing Services"
          subtitle="Comprehensive solutions for all your printing needs in Mumbai"
          backgroundImage="/placeholder.svg?key=heroserv"
        />
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <SectionHeading title="What We Offer" subtitle="Explore our full range of professional printing services" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <div key={index}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </section>

      {/* Service Details */}
      <section className="bg-secondary py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Why Our Services Stand Out" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cutting-Edge Technology",
                description:
                  "We invest in the latest printing equipment to ensure superior quality and faster turnaround times.",
              },
              {
                title: "Expert Team",
                description:
                  "Our experienced professionals bring years of expertise to every project, ensuring perfection.",
              },
              {
                title: "Custom Solutions",
                description:
                  "Every project is unique. We work closely with you to create customized printing solutions.",
              },
              {
                title: "Quality Assurance",
                description: "Rigorous quality checks at every stage ensure your prints meet the highest standards.",
              },
              {
                title: "Competitive Pricing",
                description: "Best prices without compromising on quality. We offer transparent, affordable rates.",
              },
              {
                title: "Fast Delivery",
                description: "Quick turnaround times combined with reliable delivery to meet your deadlines.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 fade-in-up"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <SectionHeading title="Flexible Pricing Options" subtitle="Choose the plan that works best for your needs" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Starter",
              price: "Custom",
              items: ["Small print runs", "Quick turnaround", "Basic design support", "Competitive rates"],
            },
            {
              name: "Professional",
              price: "Custom",
              items: ["Medium volume orders", "Fast delivery", "Professional design", "Premium quality"],
              highlighted: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              items: ["Large volume orders", "Bulk discounts", "Dedicated support", "Customized solutions"],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 shadow-md transition-all duration-300 fade-in-up ${
                plan.highlighted ? "bg-primary text-primary-foreground scale-105" : "bg-card text-foreground"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-3 mb-8">
                {plan.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-xl">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant={plan.highlighted ? "secondary" : "outline"} className="w-full">
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4 my-20 rounded-2xl mx-4 md:mx-0 max-w-7xl md:mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl">
            Contact us today for a free consultation and custom quote for your project
          </p>
          <Button variant="secondary" size="lg">
            Request a Quote
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
