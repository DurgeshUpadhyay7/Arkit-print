"use client"

import Image from "next/image"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export default function Footer() {
  const services = [
    "Visiting Card Printing",
    "Flex & Banner Printing",
    "Brochure & Flyer Printing",
    "Digital Printing",
    "Offset Printing",
    "Mug Printing",
    "T-Shirt Printing",
    "Packaging Printing",
    "Corporate Printing Solutions",
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ]

  const handleWhatsAppClick = () => {
    const phone = "917400450031"
    const msg = "Hello! I want to know more about your printing services."
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank")
  }

  return (
    <footer className="bg-gray-100 text-gray-900 py-16 px-6 border-t border-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/arkit-logo.jpg"
              alt="Arkit Print Solution Logo"
              width={55}
              height={55}
              className="rounded-lg shadow-sm object-contain"
            />
            <div>
              <h2 className="text-2xl font-bold">Arkit Print Solution</h2>
              <p className="text-sm text-gray-600">Premium Printing Services</p>
            </div>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            High-quality printing services in Mumbai including visiting cards,
            flex, banners, brochures, packaging & more.
          </p>

          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Chat
          </button>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-900">Our Services</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            {services.map((s, i) => (
              <li key={i} className="hover:text-black transition">{s}</li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-900">Quick Links</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            {quickLinks.map((l, i) => (
              <li key={i}>
                <a href={l.href} className="hover:text-black transition">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-900">Contact Info</h3>

          <div className="space-y-3">

            <p className="flex items-center gap-2 text-gray-700 text-sm">
              <Phone className="w-4 h-4 text-orange-500" />
              +91 7400450031
            </p>

            <p className="flex items-center gap-2 text-gray-700 text-sm">
              <Mail className="w-4 h-4 text-orange-500" />
              <span>ashwinyadav88@gmail.com</span>
            </p>

            <div className="flex items-start gap-2 text-gray-700 text-sm">
              <MapPin className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                Thane, Mumbai, Maharashtra  
                <br />
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  className="text-orange-500 underline mt-1 inline-block hover:text-orange-600"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom – TechPotli (UNCHANGED – EXACT YOU WANTED) */}
      <div className="border-t border-gray-300 mt-12 pt-8 text-center">
        <p className="text-gray-500 text-xs">Website Designed & Developed by</p>

        <a
          href="https://techpotli.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3"
        >
          <img
            src="/New_Techpotli_Logo.png"
            alt="TechPotli"
            className="h-12 mx-auto opacity-80 hover:opacity-100 transition"
          />
        </a>

        <p className="text-gray-400 text-xs mt-3">
          💼 Professional business solutions & digital excellence
        </p>
      </div>
    </footer>
  )
}
