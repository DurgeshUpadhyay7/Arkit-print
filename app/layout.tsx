import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arkit Print Solution | Professional Printing Services Mumbai",
  description:
    "Professional printing services in Mumbai. Visiting cards, flex banners, brochures, digital printing & more. Expert print solutions for your business.",
  keywords:
    "printing services Mumbai, visiting cards, flex printing, banner printing, digital printing, offset printing",
  authors: [{ name: "Ashwin Yadav" }],
  openGraph: {
    title: "Arkit Print Solution | Professional Printing Services",
    description: "Professional printing services in Thane, Mumbai",
    type: "website",
    locale: "en_IN",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
