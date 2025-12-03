"use client";

import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/button";
import { MessageCircle, Phone, Award, Users, Target, Heart, CheckCircle, Star, Clock, Truck } from "lucide-react";
import { useEffect } from "react";

const WHATSAPP_NUMBER = "7400450031";

export default function About() {
  useEffect(() => {
    document.title = "About Us | Arkit Print Solution";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Learn about Arkit Print Solution - our mission, vision, and team dedicated to providing premium printing services in Mumbai.'
    );
  }, []);

  const handleWhatsAppClick = (message = "Hello! I'd like to know more about your printing services.") => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const team = [
    {
      name: "Ashwin Yadav",
      role: "Founder & CEO",
      icon: "👨‍💼",
      bio: "With 10+ years of experience in printing industry, Ashwin leads Arkit Print with vision and expertise.",
      expertise: ["Business Strategy", "Client Relations", "Quality Control"]
    },
    {
      name: "Design Team",
      role: "Creative Experts",
      icon: "🎨",
      bio: "Our creative designers are passionate about bringing client visions to life through innovative designs.",
      expertise: ["Graphic Design", "Brand Identity", "Creative Solutions"]
    },
    {
      name: "Operations Team",
      role: "Production Specialists",
      icon: "⚙️",
      bio: "Ensures timely delivery and quality control across all printing projects with precision.",
      expertise: ["Print Production", "Quality Assurance", "Timely Delivery"]
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Navbar />
{/* Hero Section */}
<section className="pt-16 md:pt-20">
  <div className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
    
    {/* Background Image */}
    <div className="absolute inset-0">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/about-hero.jpg')" }}

      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
    </div>
    
    {/* Content */}
    <div className="relative container mx-auto px-4 text-white text-center">
      <div className="max-w-4xl mx-auto">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-8">
          <div className="h-20 w-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <span className="text-3xl font-bold">🖨️</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent">
            About Arkit Print
          </span>
          <br />
          <span className="text-primary">Solution</span>
        </h1>

        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>

        <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed font-light">
          Your trusted partner for premium printing solutions in Mumbai.
          Excellence in every print since 2015.
        </p>

        {/* Stats Line */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium">10+ Years Experience</span>
          </div>
          <div className="hidden sm:block text-white/40">•</div>
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="font-medium">500+ Happy Clients</span>
          </div>
          <div className="hidden sm:block text-white/40">•</div>
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 bg-yellow-500 rounded-full animate-pulse"></div>
            <span className="font-medium">100% Quality Guarantee</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => handleWhatsAppClick()}
            className="group flex items-center justify-center gap-3 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
            <span>WhatsApp for Quote</span>
            <span className="opacity-70 group-hover:translate-x-1 transition-transform">→</span>
          </button>

          <button
            onClick={() => window.open(`tel:+91${WHATSAPP_NUMBER}`, "_self")}
            className="group flex items-center justify-center gap-3 px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 hover:border-white/50 transition-all duration-300"
          >
            <Phone size={22} className="group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="font-bold">+91 {WHATSAPP_NUMBER}</div>
              <div className="text-sm opacity-80">Call Now</div>
            </div>
          </button>
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


      {/* Company Introduction */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Beginning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Arkit Print Solution was founded with a simple mission: to provide professional, high-quality printing 
                  services accessible to businesses of all sizes in Mumbai and surrounding areas.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Growth</h3>
                <p className="text-gray-600 leading-relaxed">
                  Starting from a small printing setup, we've grown into a trusted partner for hundreds of businesses, 
                  thanks to our commitment to quality, innovation, and customer satisfaction.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Today</h3>
                <p className="text-gray-600 leading-relaxed">
                  Today, we operate with state-of-the-art printing processes and a dedicated team passionate about 
                  delivering exceptional results for every project.
                </p>
              </div>
            </div>
          </div>
          
          {/* Achievements */}
          <div className="space-y-6">
            {[
              { icon: <Award className="h-8 w-8" />, title: "10+ Years Experience", desc: "Industry expertise" },
              { icon: <Users className="h-8 w-8" />, title: "500+ Clients", desc: "Trusted by businesses" },
              { icon: <CheckCircle className="h-8 w-8" />, title: "100% Quality", desc: "Guarantee on all prints" },
              { icon: <Truck className="h-8 w-8" />, title: "Fast Delivery", desc: "Across Mumbai" },
            ].map((achievement, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  {achievement.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{achievement.title}</h4>
                  <p className="text-gray-600">{achievement.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-primary/5 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading 
            title="Our Mission & Vision" 
            subtitle="The driving force behind everything we do"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="h-14 w-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver exceptional printing solutions that exceed customer expectations through innovative 
                technology, skilled craftsmanship, and unwavering commitment to quality. We aim to be the most reliable 
                printing partner for businesses in Mumbai.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="h-14 w-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                <Star className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the leading printing service provider in Mumbai region, known for innovation, reliability, and 
                customer-centric approach. We envision a future where quality printing is accessible and affordable for 
                all businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <SectionHeading 
          title="Our Team" 
          subtitle="Talented professionals dedicated to printing excellence"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4 text-center">{member.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{member.name}</h3>
              <p className="text-primary font-semibold text-center mb-4">{member.role}</p>
              <p className="text-gray-600 leading-relaxed text-center mb-6">{member.bio}</p>
              
              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-primary/5 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading 
            title="Our Core Values" 
            subtitle="Principles that guide everything we do"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Quality Excellence", 
                desc: "Excellence in every print we produce",
                icon: "⭐",
                color: "bg-blue-50 border-blue-100"
              },
              { 
                title: "Integrity", 
                desc: "Honest and transparent business practices",
                icon: "🤝",
                color: "bg-green-50 border-green-100"
              },
              { 
                title: "Innovation", 
                desc: "Continuous improvement and modern solutions",
                icon: "💡",
                color: "bg-purple-50 border-purple-100"
              },
              { 
                title: "Customer Focus", 
                desc: "Your satisfaction is our top priority",
                icon: "❤️",
                color: "bg-red-50 border-red-100"
              },
            ].map((value, index) => (
              <div
                key={index}
                className={`${value.color} border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow`}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-center text-white overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get a free consultation and discover how we can help with your printing needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 bg-white text-primary hover:bg-white/90"
                onClick={() => handleWhatsAppClick("I'd like to discuss a printing project")}
              >
                <MessageCircle size={20} />
                Start a Project
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-white text-white hover:bg-white/10"
                onClick={() => window.open(`tel:+91${WHATSAPP_NUMBER}`, "_self")}
              >
                <Phone size={20} />
                Call for Consultation
              </Button>
            </div>
            
            <p className="mt-6 text-sm opacity-75">
              ✓ Free Quote ✓ Expert Advice ✓ Quick Response
            </p>
          </div>
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
            <div className="text-sm">Need Help?</div>
            <div className="text-xs opacity-90">WhatsApp Now</div>
          </div>
        </button>
      </div>

      <Footer />
    </main>
  );
}