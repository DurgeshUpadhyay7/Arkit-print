"use client";

import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/button";
import { MessageCircle, Phone, Star, Truck, Clock, Shield, Award, Zap, CheckCircle, ChevronRight } from "lucide-react";
import { useEffect } from "react";

const WHATSAPP_NUMBER = "7400450031";

export default function Home() {
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
  }, []);

  const handleWhatsAppClick = (serviceName?: string) => {
    const message = serviceName 
      ? `Hello! I'm interested in ${serviceName} service. Please share more details and pricing.`
      : "Hello! I'd like to inquire about your printing services. Can you help me with pricing?";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const whyChooseUs = [
    {
      title: "Expert Quality",
      description: "Premium printing with professional-grade equipment and experienced staff",
      icon: <Award className="h-8 w-8" />,
    },
    {
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality",
      icon: <Truck className="h-8 w-8" />,
    },
    {
      title: "Affordable Pricing",
      description: "Competitive rates offering the best value for your investment",
      icon: <Shield className="h-8 w-8" />,
    },
    {
      title: "Custom Solutions",
      description: "Tailored printing solutions designed for your unique business needs",
      icon: <Zap className="h-8 w-8" />,
    },
  ];

  const services = [
    {
      title: "Visiting Card Printing",
      description: "Professional visiting cards that make a lasting impression",
      image: "/business-visiting-card-design-print.jpg",
      features: ["250-300 GSM", "Spot UV", "24Hr Delivery"],
    },
    {
      title: "Flex Printing",
      description: "High-quality flexible banner printing for outdoor displays",
      image: "/flex-banner-printing-store-front.jpg",
      features: ["Waterproof", "All Sizes", "Fast Setup"],
    },
    {
      title: "Banner Printing",
      description: "Eye-catching banners for promotions and events",
      image: "/large-format-banner-printing.jpg",
      features: ["Vinyl Material", "Custom Sizes", "Quick Delivery"],
    },
    {
      title: "Brochure Printing",
      description: "Professional brochures that showcase your business effectively",
      image: "/brochure-pamphlet-design-print.jpg",
      features: ["A4/A5 Size", "Gloss/Matte", "Bulk Discounts"],
    },
  ];

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
  ];

  const testimonials = [
    {
      name: "Rahul Singh",
      company: "Tech Startup",
      text: "Arkit Print provided excellent service with premium quality. Highly recommended for all printing needs!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      company: "Fashion Boutique",
      text: "The team is professional, responsive, and delivers on time. Great printing quality at affordable prices.",
      rating: 5,
    },
    {
      name: "Arjun Kumar",
      company: "Restaurant Chain",
      text: "Outstanding service! They understood our vision perfectly and delivered exactly what we needed.",
      rating: 5,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Navbar />

      {/* Hero Section - Improved */}
      <section className="pt-16 md:pt-20">
        <div className="relative w-full min-h-[80vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Parallax Effect */}
          <div className="absolute inset-0">
            <img
              src="/professional-printing-office-with-modern-equipment.jpg"
              alt="Professional Printing Office"
              className="w-full h-full object-cover scale-105"
            />
          </div>
          
          {/* Gradient Overlay with Directional Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
          
          {/* Animated Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[length:40px_40px]"></div>
          </div>
          
          {/* Content */}
          <div className="relative container mx-auto px-4 text-white">
            <div className="max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm font-medium">Premium Printing Services Since 2015</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent">
                  Professional Printing
                </span>
                <br />
                <span className="text-primary">Services in Mumbai</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl leading-relaxed">
                Arkit Print Solution – Your trusted partner for quality prints and creative solutions. 
                <span className="block mt-2 font-semibold text-primary-200">
                  Get instant quotes on WhatsApp within minutes!
                </span>
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  onClick={() => handleWhatsAppClick()}
                >
                  <MessageCircle size={22} />
                  <span className="font-bold">WhatsApp for Instant Quote</span>
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="gap-3 border-2 border-white/50 text-white hover:bg-white/10 hover:border-white backdrop-blur-sm"
                  onClick={() => window.open(`tel:+91${WHATSAPP_NUMBER}`, "_self")}
                >
                  <Phone size={22} />
                  <div className="text-left">
                    <div className="font-bold">Call: +91 {WHATSAPP_NUMBER}</div>
                    <div className="text-xs opacity-80">Available 9AM - 6PM</div>
                  </div>
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/20">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">100% Quality</div>
                    <div className="text-sm opacity-80">Guarantee</div>
                  </div>
                </div>
                
                <div className="hidden md:block h-6 w-px bg-white/30"></div>
                
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">24-48 Hours</div>
                    <div className="text-sm opacity-80">Fast Delivery</div>
                  </div>
                </div>
                
                <div className="hidden md:block h-6 w-px bg-white/30"></div>
                
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">500+</div>
                    <div className="text-sm opacity-80">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <div className="h-8 w-px bg-white/50 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <SectionHeading
          title="Our Popular Services"
          subtitle="Get instant pricing on WhatsApp for any service"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <ServiceCard {...service} />
              <button
                onClick={() => handleWhatsAppClick(service.title)}
                className="absolute bottom-4 left-4 right-4 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 shadow-lg"
              >
                Get Price on WhatsApp
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-b from-primary/5 via-white to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Why Choose Arkit Print Solution?"
            subtitle="Excellence, reliability, and customer satisfaction in every print"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Printing Process */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <SectionHeading
          title="Our Simple Process"
          subtitle="Easy steps from idea to delivery"
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {printingProcess.map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 hover:border-primary/20">
                <div className="text-5xl font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
              {index < printingProcess.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-0.5 bg-primary/20" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-primary/5 via-white to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Don't just take our word for it – hear from our satisfied customers"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-800 mb-6 leading-relaxed italic text-lg">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Banner */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h3 className="text-2xl font-bold">Need a Quick Quote?</h3>
              <p className="text-white/90">Send us your design on WhatsApp for instant pricing</p>
            </div>
            <Button
              variant="secondary"
              size="lg"
              className="gap-2 bg-white text-green-700 hover:bg-white/90"
              onClick={() => handleWhatsAppClick()}
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-center text-white overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Printing Project Today!</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get a free consultation and quote within minutes
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 bg-white text-primary hover:bg-white/90"
                onClick={() => handleWhatsAppClick()}
              >
                <MessageCircle size={20} />
                Get Instant Quote on WhatsApp
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-white text-white hover:bg-white/10"
                onClick={() => window.open(`tel:+91${WHATSAPP_NUMBER}`, "_self")}
              >
                <Phone size={20} />
                Call: +91 {WHATSAPP_NUMBER}
              </Button>
            </div>
            
            <p className="mt-6 text-sm opacity-75">
              ✓ Free Design Consultation ✓ Instant Pricing ✓ Professional Advice
            </p>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 text-6xl opacity-10">🖨️</div>
          <div className="absolute bottom-4 left-4 text-6xl opacity-10">📱</div>
        </div>
      </section>

      {/* WhatsApp Fixed Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => handleWhatsAppClick()}
          className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-xl hover:shadow-2xl transition-all animate-pulse hover:animate-none"
        >
          <MessageCircle size={24} />
          <div className="text-left">
            <div className="text-sm">WhatsApp Now</div>
            <div className="text-xs opacity-90">Instant Quote</div>
          </div>
        </button>
      </div>

      <Footer />
    </main>
  );
}