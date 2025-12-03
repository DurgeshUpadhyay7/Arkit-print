"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/section-heading"
import { ContactForm } from "@/components/contact-form"
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, Headphones, Truck } from "lucide-react"
import { useState } from "react"

const WHATSAPP_NUMBER = "7400450031"

export default function Contact() {
  const [activeTab, setActiveTab] = useState("inquiry")

  const handleWhatsApp = (subject = "General Inquiry") => {
    const message = `Hello! I'd like to inquire about: ${subject}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Contact <span className="text-primary">Arkit Print</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get in touch with Mumbai's leading printing service provider. We're here to help with all your printing needs.
            </p>
            
            {/* Quick Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => handleWhatsApp("Instant Quote")}
                className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors shadow-md"
              >
                <MessageCircle size={20} />
                Get Instant Quote on WhatsApp
              </button>
              <button
                onClick={() => window.open(`tel:+91${WHATSAPP_NUMBER}`, "_self")}
                className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors shadow-md"
              >
                <Phone size={20} />
                Call Now
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: <Headphones />, value: "24/7 Support", label: "WhatsApp Response" },
              { icon: <Truck />, value: "Same Day", label: "Fast Delivery" },
              { icon: <CheckCircle />, value: "100%", label: "Quality Guarantee" },
              { icon: <Clock />, value: "9AM-6PM", label: "Business Hours" },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-sm border text-center">
                <div className="flex justify-center text-primary mb-2">{stat.icon}</div>
                <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Tabs */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button
            onClick={() => setActiveTab("inquiry")}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${activeTab === "inquiry" ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            Send Inquiry
          </button>
          <button
            onClick={() => setActiveTab("whatsapp")}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${activeTab === "whatsapp" ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            Quick WhatsApp
          </button>
          <button
            onClick={() => setActiveTab("call")}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${activeTab === "call" ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            Call Directly
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information - Always Visible */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Phone className="text-primary" />
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone Number</h4>
                    <a href={`tel:+91${WHATSAPP_NUMBER}`} className="text-lg font-bold text-primary hover:underline block mt-1">
                      +91 {WHATSAPP_NUMBER}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Available 9AM - 6PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email Address</h4>
                    <a href="mailto:ashwinyadav88@gmail.com" className="text-lg font-bold text-primary hover:underline block mt-1">
                      ashwinyadav88@gmail.com
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-lg font-bold text-gray-900 mt-1">Thane, Mumbai</p>
                    <p className="text-sm text-gray-600 mt-1">Maharashtra, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Hours</h4>
                    <p className="text-lg font-bold text-gray-900 mt-1">Mon-Sat: 9AM - 6PM</p>
                    <p className="text-sm text-gray-600 mt-1">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Actions */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MessageCircle className="text-green-600" />
                Quick WhatsApp Actions
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Get Quote", subject: "Instant Quote" },
                  { label: "Design Help", subject: "Design Assistance" },
                  { label: "Track Order", subject: "Order Status" },
                  { label: "Urgent Work", subject: "Urgent Printing" },
                ].map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleWhatsApp(action.subject)}
                    className="w-full flex items-center justify-between p-3 bg-white hover:bg-green-50 rounded-lg border transition-colors group"
                  >
                    <span className="font-medium text-gray-700">{action.label}</span>
                    <MessageCircle size={18} className="text-green-600 group-hover:scale-110 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {activeTab === "inquiry" && (
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border">
                <SectionHeading
                  title="Send Detailed Inquiry"
                  subtitle="Fill the form below for comprehensive service quotes"
                  alignment="left"
                />
                <ContactForm />
              </div>
            )}

            {activeTab === "whatsapp" && (
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border">
                <SectionHeading
                  title="Quick WhatsApp Inquiry"
                  subtitle="Select your service for instant response"
                  alignment="left"
                />
                <div className="space-y-4">
                  {[
                    "Visiting Card Printing",
                    "Flex Banner Printing",
                    "Digital Printing",
                    "Offset Printing",
                    "Brochure & Flyer",
                    "Custom Packaging",
                    "Mug & T-Shirt Printing",
                    "Bulk Order Inquiry",
                  ].map((service, index) => (
                    <button
                      key={index}
                      onClick={() => handleWhatsApp(service)}
                      className="w-full flex items-center justify-between p-4 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors group"
                    >
                      <span className="font-medium text-gray-800">{service}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Click to chat</span>
                        <MessageCircle size={18} className="text-green-600" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "call" && (
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border">
                <SectionHeading
                  title="Call Us Directly"
                  subtitle="Speak with our printing experts"
                  alignment="left"
                />
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
                    <Phone size={32} className="text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Direct Helpline</h3>
                  <a href={`tel:+91${WHATSAPP_NUMBER}`} className="text-3xl md:text-4xl font-bold text-primary hover:underline block mb-4">
                    +91 {WHATSAPP_NUMBER}
                  </a>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Call us directly for urgent inquiries, custom quotes, or to speak with our printing specialists.
                  </p>
                  <button
                    onClick={() => window.open(`tel:+91${WHATSAPP_NUMBER}`, "_self")}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-lg transition-colors shadow-lg"
                  >
                    <Phone size={24} />
                    Tap to Call Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <SectionHeading 
          title="Frequently Asked Questions" 
          subtitle="Quick answers to common questions"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "What's your response time?",
              a: "We respond to WhatsApp messages within 5 minutes and emails within 24 hours.",
            },
            {
              q: "Do you offer same-day delivery?",
              a: "Yes! We offer same-day delivery for urgent orders in Mumbai (additional charges may apply).",
            },
            {
              q: "Can I get a sample before bulk order?",
              a: "Absolutely! We provide free samples for most printing services upon request.",
            },
            {
              q: "What payment methods do you accept?",
              a: "We accept cash, bank transfer, UPI, and all major credit/debit cards.",
            },
            {
              q: "How do I send my design files?",
              a: "You can send files via WhatsApp, Email, or through our online form. We accept PDF, AI, PSD formats.",
            },
            {
              q: "What's your minimum order quantity?",
              a: "No minimum quantity! We handle both small and bulk orders with equal dedication.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">{item.q}</h3>
              <p className="text-gray-600 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-center text-white overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Printing Project Today!</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get a free consultation and instant quote via WhatsApp
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleWhatsApp("Project Consultation")}
                className="flex items-center justify-center gap-2 px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition-colors"
              >
                <MessageCircle size={20} />
                WhatsApp for Quote
              </button>
              
              <button
                onClick={() => window.open(`tel:+91${WHATSAPP_NUMBER}`, "_self")}
                className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
              >
                <Phone size={20} />
                Call Now
              </button>
            </div>
            
            <p className="mt-6 text-sm opacity-75">
              ✓ Free Design Consultation ✓ Instant Pricing ✓ Professional Advice
            </p>
          </div>
        </div>
      </section>

      {/* WhatsApp Fixed Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => handleWhatsApp("General Inquiry")}
          className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-xl hover:shadow-2xl transition-all animate-pulse hover:animate-none"
        >
          <MessageCircle size={24} />
          <div className="text-left">
            <div className="text-sm">Need Help?</div>
            <div className="text-xs opacity-90">WhatsApp Now</div>
          </div>
        </button>
      </div>

      <Footer />
    </main>
  )
}