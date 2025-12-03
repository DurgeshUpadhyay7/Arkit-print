"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, MessageCircle, Phone } from "lucide-react"

const WHATSAPP_NUMBER = "7400450031"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-lg text-lg font-bold">
            AP
          </div>
          <span className="font-bold text-gray-800 text-lg">

            Arkit Print Solution
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-primary font-medium"
            >
              {link.label}
            </Link>
          ))}

          {/* WhatsApp Button */}
          <button
            onClick={() =>
              window.open(
                `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20I%20need%20printing%20details`,
                "_blank"
              )
            }
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            <MessageCircle size={18} /> WhatsApp
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-gray-700"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold">Menu</span>
            <button onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>
          </div>

          <div className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-lg font-medium text-gray-800"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Bottom buttons */}
          <div className="mt-8 space-y-3">
            <button
              onClick={() =>
                window.open(`tel:+91${WHATSAPP_NUMBER}`, "_self")
              }
              className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-white rounded-lg"
            >
              <Phone size={18} /> Call Us
            </button>

            <button
              onClick={() =>
                window.open(
                  `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20I%20need%20printing%20details`,
                  "_blank"
                )
              }
              className="w-full flex items-center justify-center gap-2 py-3 bg-green-600 text-white rounded-lg"
            >
              <MessageCircle size={18} /> WhatsApp
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
