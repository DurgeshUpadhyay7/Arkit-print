import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { SectionHeading } from "@/components/section-heading"
import { ContactForm } from "@/components/contact-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Arkit Print Solution",
  description: "Get in touch with Arkit Print Solution. Contact details, inquiry form, location, and business hours.",
}

export default function Contact() {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 px-4 md:px-0 mb-20">
        <Hero
          title="Get in Touch"
          subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
          backgroundImage="/placeholder.svg?key=contact_hero"
        />
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 fade-in-up">
            <div className="space-y-8">
              {/* Phone */}
              <div className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Phone</h3>
                    <a href="tel:7400450031" className="text-primary hover:underline font-semibold">
                      7400450031
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Mon-Sat: 9AM - 6PM</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-accent-foreground flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:ashwinyadav88@gmail.com"
                      className="text-primary hover:underline font-semibold break-all"
                    >
                      ashwinyadav88@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Response within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Location</h3>
                    <p className="text-foreground font-semibold">Thane, Mumbai</p>
                    <p className="text-sm text-muted-foreground mt-1">Maharashtra, India</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-accent-foreground flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Business Hours</h3>
                    <p className="text-sm text-muted-foreground">Monday - Saturday</p>
                    <p className="text-foreground font-semibold">9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-muted-foreground mt-2">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl p-8 shadow-md">
              <SectionHeading
                title="Send us a Message"
                subtitle="Fill out the form below and we'll get back to you shortly"
                alignment="left"
              />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-secondary py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Visit Us" subtitle="Located in Thane, Mumbai – Easy access from all areas" />
          <div className="bg-muted rounded-2xl overflow-hidden shadow-lg h-96">
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={64} className="mx-auto mb-4 text-primary opacity-50" />
                <p className="text-xl text-muted-foreground">Map integration coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <SectionHeading title="Frequently Asked Questions" subtitle="Quick answers to common questions" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "What is your delivery timeline?",
              a: "We typically deliver orders within 3-7 business days depending on the project complexity and volume.",
            },
            {
              q: "Do you offer custom design services?",
              a: "Yes! Our expert team can help design custom layouts for your printing projects.",
            },
            {
              q: "What payment methods do you accept?",
              a: "We accept cash, bank transfers, digital payments, and credit/debit cards.",
            },
            {
              q: "Can you handle large bulk orders?",
              a: "We specialize in bulk orders and offer competitive pricing for large volumes.",
            },
            {
              q: "Do you provide samples before final printing?",
              a: "Yes, we provide digital proofs for approval before proceeding with printing.",
            },
            {
              q: "What file formats do you accept?",
              a: "We accept PDF, AI, PSD, CorelDRAW, and other standard design formats.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 fade-in-up"
            >
              <h3 className="text-lg font-bold text-foreground mb-2">{item.q}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
