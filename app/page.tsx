"use client"
import TypewriterText from "@/components/TypeWriter/TypeWriterText"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Clock, CheckCircle, Menu, X } from "lucide-react"
import { useState } from "react"
import { WorldMap } from "@/components/ui/world-map"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import PageWrapper from "../app/page-wrapper"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <PageWrapper>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Navigation */}

        <div className="relative z-50">
          <button
            onClick={toggleMenu}
            className="fixed top-4 left-4 z-50 p-2 bg-orange-600 rounded-md hover:bg-orange-700 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={toggleMenu}
          ></div>

          <div
            className={`fixed top-0 left-0 h-full w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-5">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-orange-600">Netcall Services</h2>
                <button onClick={toggleMenu} className="text-gray-400 hover:text-orange-500">
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="py-2 px-4 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  href="/latest-news"
                  className="py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
                  onClick={toggleMenu}
                >
                  Latest News
                </Link>
                <Link
                  href="/vacancies"
                  className="py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
                  onClick={toggleMenu}
                >
                  Vacancies
                </Link>
                <Link
                  href="/contact-us"
                  className="py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
                  onClick={toggleMenu}
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 relative">
          {/* Animated Logo */}
          <div className="absolute top-0 right-10 w-48 h-48">
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Netcall Services Logo"
                className="w-full h-full object-contain bg-black mt-20 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                style={{
                  animation: "float 3s ease-in-out infinite, pulse 2s ease-in-out infinite",
                }}
              />
              <style jsx>{`
                @keyframes float {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-10px); }
                }
                @keyframes pulse {
                  0% { box-shadow: 0 0 0 0 rgba(255, 102, 0, 0.7); }
                  70% { box-shadow: 0 0 0 15px rgba(255, 102, 0, 0); }
                  100% { box-shadow: 0 0 0 0 rgba(255, 102, 0, 0); }
                }
              `}</style>
            </div>
          </div>

          {/* Hero Section */}
          <div className="container mx-auto px-4 py-10 text-center">
            <h1 className="text-7xl font-bold text-orange-600 mt-20 mb-10">Netcall Services</h1>
            <span className="mb-10 pb-10">
              <TypewriterText />
            </span>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-20 mt-10">
              <Link href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://x.com/services72506"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Call-to-action buttons */}
        <div className="flex justify-center gap-4 mb-20">
          <Link
            href="/contact-us"
            className="bg-teal-500 text-white py-3 px-8 rounded-md hover:bg-teal-600 transition-colors font-medium"
          >
            Get Started
          </Link>
          <Link
            href="/services"
            className="bg-white text-teal-500 border border-teal-500 py-3 px-8 rounded-md hover:bg-gray-100 transition-colors font-medium"
          >
            Our Services
          </Link>
        </div>

        {/* Futuristic Animated Divider */}
        <div className="relative h-64 overflow-hidden bg-gray-900">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              {/* Animated grid lines */}
              <div className="absolute inset-0 grid-animation">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={`h-line-${i}`}
                    className="absolute h-px bg-teal-500/20"
                    style={{
                      top: `${i * 10}%`,
                      left: 0,
                      right: 0,
                      animation: `pulseWidth 8s infinite ${i * 0.2}s`,
                    }}
                  ></div>
                ))}
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={`v-line-${i}`}
                    className="absolute w-px bg-purple-500/20"
                    style={{
                      left: `${i * 5}%`,
                      top: 0,
                      bottom: 0,
                      animation: `pulseHeight 6s infinite ${i * 0.1}s`,
                    }}
                  ></div>
                ))}
              </div>

              {/* Animated particles */}
              <div className="absolute inset-0">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div
                    key={`particle-${i}`}
                    className="absolute w-1 h-1 rounded-full bg-teal-400"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.8 + 0.2,
                      animation: `float ${Math.random() * 10 + 10}s infinite linear ${Math.random() * 5}s`,
                    }}
                  ></div>
                ))}
              </div>

              {/* Animated glowing orbs */}
              <div className="absolute inset-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={`orb-${i}`}
                    className="absolute rounded-full"
                    style={{
                      width: `${Math.random() * 100 + 50}px`,
                      height: `${Math.random() * 100 + 50}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      background: `radial-gradient(circle, ${
                        i % 2 === 0 ? "rgba(45, 212, 191, 0.3)" : "rgba(147, 51, 234, 0.3)"
                      } 0%, transparent 70%)`,
                      animation: `pulse ${Math.random() * 4 + 3}s infinite ease-in-out ${Math.random() * 2}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Digital circuit lines */}
          <svg className="absolute bottom-0 left-0 w-full" height="40" viewBox="0 0 1440 40" preserveAspectRatio="none">
            <path
              d="M0,20 L120,20 L140,0 L160,40 L180,20 L240,20 L260,0 L280,40 L300,20 L420,20 L440,0 L460,40 L480,20 L540,20 L560,0 L580,40 L600,20 L720,20 L740,0 L760,40 L780,20 L840,20 L860,0 L880,40 L900,20 L1020,20 L1040,0 L1060,40 L1080,20 L1140,20 L1160,0 L1180,40 L1200,20 L1320,20 L1340,0 L1360,40 L1380,20 L1440,20"
              stroke="rgba(45, 212, 191, 0.5)"
              strokeWidth="1"
              fill="none"
              className="circuit-path"
            />
          </svg>

          {/* Animated text content */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 animate-text-reveal">
                <span className="inline-block">Ready</span> <span className="inline-block">to</span>{" "}
                <span className="inline-block">Transform</span> <span className="inline-block">Your</span>{" "}
                <span className="inline-block">Communications?</span>
              </h2>
              <p className="text-teal-300 animate-fade-in-up">
                Discover how Netcall Services can help your business grow
              </p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block bg-orange-100 rounded-full p-4 mb-4">
              <span className="text-2xl text-orange-600">?</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">WHO WE ARE AND WHY CHOOSE US</h2>
            <p className="max-w-3xl mx-auto text-gray-700 mb-4">
              Netcall Services is an international telecommunications company, established in 2013, that provides
              various telecommunications services and solutions.
            </p>
            <p className="max-w-3xl mx-auto text-gray-700 mb-10">
              Netcall Services is driven by a mission to give the possibility to everyone to reach out and connect with
              the world.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-orange-600 text-center mb-12">Event Timeline</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-500"></div>

              <div className="grid grid-cols-1 gap-8">
                <div className="flex justify-end md:justify-start md:pl-0 md:pr-20 relative md:ml-1/2">
                  <div className="w-full md:w-auto">
                    <div className="bg-white p-6 rounded-lg shadow-md relative">
                      <div className="absolute top-6 -right-10 md:-left-10 w-8 h-8 bg-orange-500 rounded-full border-4 border-white z-10"></div>
                      <h3 className="text-xl font-semibold mb-2">2013</h3>
                      <p className="text-gray-600">
                        Netcall Services was founded with a mission to revolutionize telecommunications.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-start md:justify-end md:pr-0 md:pl-20 relative md:mr-1/2">
                  <div className="w-full md:w-auto">
                    <div className="bg-white p-6 rounded-lg shadow-md relative">
                      <div className="absolute top-6 -left-10 md:-right-10 w-8 h-8 bg-orange-500 rounded-full border-4 border-white z-10"></div>
                      <h3 className="text-xl font-semibold mb-2">2015</h3>
                      <p className="text-gray-600">
                        Expanded operations to 10 countries and launched our enterprise solutions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end md:justify-start md:pl-0 md:pr-20 relative md:ml-1/2">
                  <div className="w-full md:w-auto">
                    <div className="bg-white p-6 rounded-lg shadow-md relative">
                      <div className="absolute top-6 -right-10 md:-left-10 w-8 h-8 bg-orange-500 rounded-full border-4 border-white z-10"></div>
                      <h3 className="text-xl font-semibold mb-2">2018</h3>
                      <p className="text-gray-600">
                        Introduced our innovative messaging platform and reached 1 million customers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-start md:justify-end md:pr-0 md:pl-20 relative md:mr-1/2">
                  <div className="w-full md:w-auto">
                    <div className="bg-white p-6 rounded-lg shadow-md relative">
                      <div className="absolute top-6 -left-10 md:-right-10 w-8 h-8 bg-orange-500 rounded-full border-4 border-white z-10"></div>
                      <h3 className="text-xl font-semibold mb-2">2021</h3>
                      <p className="text-gray-600">
                        Launched our cloud-based communication solutions and expanded to 30+ countries.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end md:justify-start md:pl-0 md:pr-20 relative md:ml-1/2">
                  <div className="w-full md:w-auto">
                    <div className="bg-white p-6 rounded-lg shadow-md relative">
                      <div className="absolute top-6 -right-10 md:-left-10 w-8 h-8 bg-orange-500 rounded-full border-4 border-white z-10"></div>
                      <h3 className="text-xl font-semibold mb-2">2023</h3>
                      <p className="text-gray-600">
                        Celebrated 10 years of excellence and introduced AI-powered communication tools.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-orange-600 text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-orange-500/20 transition-shadow">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Voice Solutions</h3>
                <p className="text-gray-600 text-center">
                  High-quality voice services with global coverage and competitive rates for businesses of all sizes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-orange-500/20 transition-shadow">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Messaging Services</h3>
                <p className="text-gray-600 text-center">
                  Reliable SMS and messaging solutions for effective communication with your customers.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-orange-500/20 transition-shadow">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Enterprise Solutions</h3>
                <p className="text-gray-600 text-center">
                  Custom telecommunications solutions designed specifically for enterprise-level requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-orange-600 text-center mb-12">Why Choose Netcall Services</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
                  <p className="text-gray-600">
                    Our services extend across the globe, ensuring you can connect with anyone, anywhere, at any time.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Reliable Infrastructure</h3>
                  <p className="text-gray-600">
                    Our robust infrastructure ensures high uptime and reliability for all your communication needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
                  <p className="text-gray-600">
                    We offer some of the most competitive rates in the industry without compromising on quality.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                  <p className="text-gray-600">
                    Our dedicated support team is available around the clock to assist you with any issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AnimatedTestimonials
          testimonials={[
            {
              name: "Prasana Nandakumar",
              position: "CEO, Netcall Services",
              message: "Netcall Services transformed our communications. Their support is top-notch!",
              avatar: "/avatars/alice.jpg",
              quote: "Netcall Services transformed our communications. Their support is top-notch!",
              designation: "CEO, TechCorp",
              src: "/avatars/alice.jpg",
            },
            {
              name: "Barsha Roy Prasana",
              position: "CFO, Telkomin Services",
              message: "Reliable, scalable, and affordable. Highly recommended for any business.",
              avatar: "/avatars/bob.jpg",
              quote: "Reliable, scalable, and affordable. Highly recommended for any business.",
              designation: "IT Manager, GlobalBiz",
              src: "/avatars/bob.jpg",
            },
            {
              name: "Abhisekh Jha",
              position: "Manager",
              message: "Their messaging platform helped us reach more customers than ever before.",
              avatar: "/avatars/carol.jpg",
              quote: "Their messaging platform helped us reach more customers than ever before.",
              designation: "Founder, StartupX",
              src: "/avatars/carol.jpg",
            },
            {
              name: "Rahul Mukherjee",
              position: "Developer",
              message: "Their messaging platform helped us reach more customers than ever before.",
              avatar: "/avatars/rahul.jpg",
              quote: "Their messaging platform helped us reach more customers than ever before.",
              designation: "Developer, Netcall Services",
              src: "/avatars/rahul.jpg",
            },
          ]}
        />
        {/* 
        <PinContainer>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl font-bold">Our Global Presence</h3>
            <p className="text-sm text-gray-600">Serving clients worldwide with reliable communication solutions</p>
          </div>
        </PinContainer> */}

        {/* Latest News Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-orange-600 text-center mb-12">Latest News</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-orange-500/20 transition-shadow">
                <div className="h-48 bg-gray-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500">News Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-orange-500 w-2 h-2 rounded-full mr-2"></span>
                    <span>April 15, 2023</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Netcall Services Expands to Asia Pacific Region</h3>
                  <p className="text-gray-600 mb-4">
                    We're excited to announce our expansion into the Asia Pacific market.
                  </p>
                  <Link
                    href="/latest-news"
                    className="text-orange-600 font-medium hover:text-orange-700 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-gray-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500">News Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-teal-400 w-2 h-2 rounded-full mr-2"></span>
                    <span>March 22, 2023</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">New Enterprise Communication Platform Launched</h3>
                  <p className="text-gray-600 mb-4">
                    Our new enterprise communication platform offers seamless integration with existing systems and
                    enhanced security features.
                  </p>
                  <Link href="/latest-news" className="text-teal-500 font-medium hover:text-teal-600 transition-colors">
                    Read More →
                  </Link>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-gray-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500">News Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-teal-400 w-2 h-2 rounded-full mr-2"></span>
                    <span>February 8, 2023</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Netcall Services Partners with Global Tech Leader</h3>
                  <p className="text-gray-600 mb-4">
                    We're proud to announce our strategic partnership with a leading global technology provider to
                    enhance our service offerings.
                  </p>
                  <Link href="/latest-news" className="text-teal-500 font-medium hover:text-teal-600 transition-colors">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}

        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-orange-600 text-center mb-12">Get In Touch</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-orange-500/20 transition-shadow">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">+973 177902024</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">info@netcallservices.com</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600">123 Business Ave, Suite 100, New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
        <WorldMap></WorldMap>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-orange-600">Netcall Services</h3>
                <p className="text-gray-400 mb-4">
                  Connecting the world through innovative telecommunications solutions since 2013.
                </p>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    <Facebook size={20} />
                  </Link>
                  <Link href="https://x.com/services72506" className="text-gray-400 hover:text-orange-500 transition-colors">
                    <Twitter size={20} />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    <Linkedin size={20} />
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-orange-500 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-teal-400 transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-gray-400 hover:text-teal-400 transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us" className="text-gray-400 hover:text-teal-400 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                      Voice Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                      Messaging Services
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                      Enterprise Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                      API Integration
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <MapPin className="text-orange-500 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-400">
                      NetCall Technology & Services 7627, W 54th Ave, Arvada, CO 80002, USA
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="text-teal-400 mr-2 flex-shrink-0" size={18} />
                    <span className="text-gray-400">+1 (555) 123-4567</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="text-teal-400 mr-2 flex-shrink-0" size={18} />
                    <span className="text-gray-400">info@netcallservices.com</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="text-teal-400 mr-2 flex-shrink-0" size={18} />
                    <span className="text-gray-400">Mon-Fri: 9AM - 5PM</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Netcall Services. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </PageWrapper>
  )
}
