"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./button"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 fade-in-up">
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          placeholder="+91 7400450031"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
          placeholder="Tell us about your printing needs..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        {submitted ? "Message Sent!" : "Send Message"}
      </Button>

      {submitted && (
        <div className="p-4 bg-green-50 text-green-800 rounded-lg text-center font-medium fade-in">
          Thank you! We'll get back to you soon.
        </div>
      )}
    </form>
  )
}
