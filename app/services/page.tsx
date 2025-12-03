"use client";

import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/button";
import { Phone, MessageCircle, CheckCircle, Clock, Shield, Truck } from "lucide-react";
import { useEffect } from "react";

const WHATSAPP_NUMBER = "7400450031";

export default function Services() {
  // Set metadata on client side
  useEffect(() => {
    document.title = "Professional Printing Services Mumbai | Arkit Print Solution";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Premium printing services in Mumbai: visiting cards, flex banners, digital & offset printing, packaging, and custom merchandise. Get instant WhatsApp quotes.'
    );

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      'content',
      'printing services Mumbai, visiting cards, flex banners, digital printing, offset printing, custom packaging'
    );
  }, []);

  const allServices = [
    {
      title: "Visiting Card Printing",
      description: "Premium quality visiting cards with spot UV, foil stamping, and embossing options",
      image: "/images/visiting-card.jpg",
      features: ["250/300 GSM", "Spot UV", "Foil Stamping", "24Hr Delivery"],
    },
    {
      title: "Flex Printing",
      description: "Durable flex banners for outdoor advertising with vibrant UV-resistant prints",
      image: "/images/flex-banner.jpg",
      features: ["Waterproof", "Sun Resistant", "Grommet Fitted", "All Sizes"],
    },
    {
      title: "Banner Printing",
      description: "Vinyl banners for events, promotions with hemming & eyelet finishing",
      image: "/images/vinyl-banner.jpg",
      features: ["Vinyl Fabric", "Indoor/Outdoor", "Custom Sizes", "Fast Setup"],
    },
    {
      title: "Digital Printing",
      description: "High-speed digital printing for short runs with exceptional color accuracy",
      image: "/images/large-format.jpg",
      features: ["Short Runs", "Color Matching", "Variable Data", "Quick Turnaround"],
    },
    {
      title: "Offset Printing",
      description: "Commercial offset printing for bulk orders with consistent quality",
      image: "/images/offset-printing.jpg",
      features: ["Bulk Orders", "Pantone Colors", "Cost Effective", "Premium Paper"],
    },
    {
      title: "Brochure & Flyer",
      description: "Marketing collaterals designed to attract and inform your customers",
      image: "/images/brochure-printing.jpg",
      features: ["A4/A5 Sizes", "Gloss/Matte", "Trifold/Bifold", "Bulk Discounts"],
    },
    {
      title: "Mug Printing",
      description: "Full-color sublimation printing on ceramic mugs, dishwasher safe",
      image: "/images/mug-printing.jpg",
      features: ["360° Print", "Dishwasher Safe", "Microwave Safe", "Custom Designs"],
    },
    {
      title: "T-Shirt Printing",
      description: "Screen printing & DTF for custom t-shirts with vibrant colors",
      image: "/images/tshirt-printing.jpg",
      features: ["DTF/Screen Print", "All Sizes", "Color Fast", "Bulk Orders"],
    },
    {
      title: "Custom Packaging",
      description: "Branded packaging boxes with printing, foiling, and special finishes",
      image: "/images/packaging-box.jpg",
      features: ["Corrugated Box", "Cardboard", "Window Cutout", "Custom Shapes"],
    },
  ];

  const handleWhatsAppClick = (serviceName: string) => {
    const message = `Hello! I'm interested in ${serviceName} service. Please share more details and pricing.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleGeneralInquiry = () => {
    const message = "Hello! I'd like to inquire about your printing services. Can you help me with pricing?";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-white to-background/50">
      <Navbar />

      {/* Hero Section - Fixed without Hero component */}
      <section className="pt-16 md:pt-20">
        <div className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden rounded-2xl">
          <div className="absolute inset-0">
            <img
              src="/services-hero.jpg"
              alt="Printing Services Hero"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute inset-0 bg-black/50" />
          
          <div className="relative container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Premium Printing Services in Mumbai
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Professional printing solutions with fast delivery and competitive pricing. Get instant quotes on WhatsApp!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button 
                size="lg" 
                className="gap-2 bg-green-600 hover:bg-green-700"
                onClick={handleGeneralInquiry}
              >
                <MessageCircle size={20} />
                WhatsApp for Instant Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 border-white text-white hover:bg-white/10"
              >
                <Phone size={20} />
                Call: +91 {WHATSAPP_NUMBER}
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Truck />, value: "1000+", label: "Projects Delivered" },
              { icon: <Clock />, value: "24-48Hrs", label: "Fast Delivery" },
              { icon: <Shield />, value: "100%", label: "Quality Guarantee" },
              { icon: <CheckCircle />, value: "500+", label: "Happy Clients" },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-lg border text-center">
                <div className="flex justify-center text-primary mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid with WhatsApp */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <SectionHeading 
          title="Our Printing Services" 
          subtitle="Click any service to get instant pricing on WhatsApp"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {allServices.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <ServiceCard {...service} />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white/95 via-white/80 to-transparent">
                <button
                  onClick={() => handleWhatsAppClick(service.title)}
                  className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all group-hover:scale-[1.02]"
                >
                  <MessageCircle size={18} />
                  Get Price on WhatsApp
                </button>
              </div>
              
              <div className="p-4 pt-0 mt-2">
                <button
                  onClick={() => {
                    const message = `Quick inquiry about ${service.title}`;
                    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
                  }}
                  className="text-sm text-primary hover:text-primary/80 font-medium"
                >
                  Need quick info? Click here →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-br from-primary/5 via-transparent to-primary/5 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading 
            title="Why Choose Arkit Print?" 
            subtitle="We deliver excellence in every print"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "WhatsApp Support",
                description: "Instant quotes and support via WhatsApp. Send us your design and get pricing within minutes.",
                icon: "💬",
                color: "bg-green-50 border-green-100"
              },
              {
                title: "Same Day Delivery",
                description: "Urgent orders? We offer same-day delivery in Mumbai for selected services.",
                icon: "⚡",
                color: "bg-blue-50 border-blue-100"
              },
              {
                title: "Free Sample",
                description: "Not sure about quality? Request a free sample of our printing before bulk orders.",
                icon: "🎁",
                color: "bg-purple-50 border-purple-100"
              },
              {
                title: "Design Assistance",
                description: "Need design help? Our creative team will assist you with professional designs.",
                icon: "🎨",
                color: "bg-pink-50 border-pink-100"
              },
              {
                title: "Bulk Discounts",
                description: "Special pricing for bulk orders and corporate clients with volume discounts.",
                icon: "💰",
                color: "bg-amber-50 border-amber-100"
              },
              {
                title: "Quality Check",
                description: "Every print goes through 3-stage quality check before delivery.",
                icon: "🔍",
                color: "bg-red-50 border-red-100"
              },
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`${feature.color} border rounded-2xl p-6 hover:shadow-lg transition-shadow`}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Fixed Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleGeneralInquiry}
          className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-xl hover:shadow-2xl transition-all animate-pulse hover:animate-none"
        >
          <MessageCircle size={24} />
          <div className="text-left">
            <div className="text-sm">Get Instant Quote</div>
            <div className="text-xs opacity-90">Click to WhatsApp</div>
          </div>
        </button>
      </div>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <SectionHeading 
          title="Flexible Pricing Plans" 
          subtitle="Transparent pricing with no hidden charges"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Basic",
              price: "₹999+",
              description: "For startups & small businesses",
              items: ["Upto 500 Prints", "Basic Design", "Standard Paper", "3-5 Days Delivery"],
              buttonText: "WhatsApp for Quote",
            },
            {
              name: "Professional",
              price: "₹2,999+",
              description: "Most popular for businesses",
              items: ["1000-5000 Prints", "Premium Design", "Choice of Paper", "1-3 Days Delivery"],
              highlighted: true,
              buttonText: "Get Professional Quote",
            },
            {
              name: "Enterprise",
              price: "Custom",
              description: "For corporates & bulk orders",
              items: ["5000+ Prints", "Custom Design", "Premium Materials", "Priority Delivery"],
              buttonText: "Call for Enterprise Quote",
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 border shadow-lg transition-transform hover:scale-[1.02] ${
                plan.highlighted 
                  ? "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground border-primary" 
                  : "bg-card text-foreground border-border"
              }`}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="opacity-80">{plan.description}</p>
                <div className="text-4xl font-bold mt-4">{plan.price}</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <Button
                variant={plan.highlighted ? "secondary" : "primary"}
                className="w-full gap-2"
                size="lg"
                onClick={() => {
                  const message = `Interested in ${plan.name} plan: ${plan.description}`;
                  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
                }}
              >
                <MessageCircle size={18} />
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-white overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Printing Project Today!</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Send us your design on WhatsApp for instant pricing and expert consultation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2"
                onClick={handleGeneralInquiry}
              >
                <MessageCircle size={20} />
                Send Design on WhatsApp
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-white text-white hover:bg-white/20"
              >
                <Phone size={20} />
                Call: +91 {WHATSAPP_NUMBER}
              </Button>
            </div>
            
            <p className="mt-6 text-sm opacity-75">
              Response within 5 minutes • Free consultation • No obligation quote
            </p>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 text-6xl opacity-10">🖨️</div>
          <div className="absolute bottom-4 left-4 text-6xl opacity-10">📱</div>
        </div>
      </section>

      <Footer />
    </main>
  );
}