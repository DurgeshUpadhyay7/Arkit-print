import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { SectionHeading } from "@/components/section-heading"
import { ServiceCard } from "@/components/service-card"
import { Button } from "@/components/button"

export default function Home() {
  const whyChooseUs = [
    {
      title: "Expert Quality",
      description: "Premium printing with professional-grade equipment and experienced staff",
      icon: "✓",
    },
    {
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality",
      icon: "⚡",
    },
    {
      title: "Affordable Pricing",
      description: "Competitive rates offering the best value for your investment",
      icon: "💰",
    },
    {
      title: "Custom Solutions",
      description: "Tailored printing solutions designed for your unique business needs",
      icon: "🎯",
    },
  ]

  const services = [
    {
      title: "Visiting Card Printing",
      description: "Professional visiting cards that make a lasting impression",
      image: "/business-visiting-card-design-print.jpg",
    },
    {
      title: "Flex Printing",
      description: "High-quality flexible banner printing for outdoor displays",
      image: "/flex-banner-printing-store-front.jpg",
    },
    {
      title: "Banner Printing",
      description: "Eye-catching banners for promotions and events",
      image: "/large-format-banner-printing.jpg",
    },
    {
      title: "Brochure Printing",
      description: "Professional brochures that showcase your business effectively",
      image: "/brochure-pamphlet-design-print.jpg",
    },
  ]

  const printingProcess = [
    {
      step: "01",
      title: "Consultation",
      description: "We discuss your requirements and vision for the project",
    },
    {
      step: "02",
      title: "Design",
      description: "Professional design or approval of your existing designs",
    },
    {
      step: "03",
      title: "Printing",
      description: "State-of-the-art printing technology for perfect results",
    },
    {
      step: "04",
      title: "Delivery",
      description: "Timely delivery of your finished printed materials",
    },
  ]

  const testimonials = [
    {
      name: "Rahul Singh",
      company: "Tech Startup",
      text: "Arkit Print provided excellent service with premium quality. Highly recommended for all printing needs!",
    },
    {
      name: "Priya Sharma",
      company: "Fashion Boutique",
      text: "The team is professional, responsive, and delivers on time. Great printing quality at affordable prices.",
    },
    {
      name: "Arjun Kumar",
      company: "Restaurant Chain",
      text: "Outstanding service! They understood our vision perfectly and delivered exactly what we needed.",
    },
  ]

  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 px-4 md:px-0 mb-20">
        <Hero
          title="Professional Printing Services in Mumbai"
          subtitle="Arkit Print Solution – Your trusted partner for quality prints and creative solutions"
          backgroundImage="/professional-printing-office-with-modern-equipment.jpg"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" className="shadow-lg">
              Get a Quote
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20 bg-transparent">
              View Services
            </Button>
          </div>
        </Hero>
      </section>

      {/* Services Preview */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <SectionHeading
          title="Our Services"
          subtitle="We offer comprehensive printing solutions tailored to your business needs"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Why Choose Arkit Print Solution?"
            subtitle="Excellence, reliability, and customer satisfaction in every print"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 fade-in-up hover:scale-105"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Printing Process */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <SectionHeading
          title="Our Printing Process"
          subtitle="Simple, transparent, and efficient workflow from start to finish"
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {printingProcess.map((item, index) => (
            <div key={index} className="relative fade-in-up">
              <div className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 text-center h-full">
                <div className="text-5xl font-bold text-primary mb-4 opacity-20">{item.step}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
              {index < printingProcess.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-0.5 bg-primary/20" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Don't just take our word for it – hear from our satisfied customers"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 fade-in-up"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4 my-20 rounded-2xl mx-4 md:mx-0 max-w-7xl md:mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-pretty">Ready to Print Your Vision?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl">
            Get in touch with us today for a free consultation and quote
          </p>
          <Button variant="secondary" size="lg" className="shadow-lg">
            Contact Us Now
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
