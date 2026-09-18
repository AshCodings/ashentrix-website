"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (dropdownName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  // Framer Motion Variants for Type-Safe Animations
  const megaMenuVariants: Variants = {
    hidden: { opacity: 0, y: -15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.3, ease: "easeOut" } 
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      transition: { duration: 0.2, ease: "easeIn" } 
    }
  };

  const mobileDrawerVariants: Variants = {
    hidden: { x: "100%" },
    visible: { 
      x: 0, 
      transition: { type: "spring", damping: 25, stiffness: 200 } 
    },
    exit: { 
      x: "100%", 
      transition: { type: "spring", damping: 25, stiffness: 200 } 
    }
  };

  const mobileMenuAccordionVariants: Variants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    exit: { 
      height: 0, 
      opacity: 0,
      transition: { duration: 0.2, ease: "easeInOut" }
    }
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Solid White Header with Premium Shadow */}
      <header className="bg-white border-b border-gray-100 shadow-sm transition-all duration-300 relative z-50">
        <div className="max-w-full mx-auto">
          <div className="flex items-center justify-between px-6 py-2">
            
            {/* Logo Section */}
            <div className="flex items-center">
              <Link
                href="/"
                className="group relative flex items-center justify-start h-12 w-[150px] overflow-hidden"
              >
                <Image
                  src="/logo-only.jpeg"
                  alt="Ashentrix Solutions Logo"
                  width={180}
                  height={60}
                  className="h-12 w-auto object-contain object-left transition-all duration-500 ease-in-out group-hover:scale-50 group-hover:opacity-0"
                  priority
                />

                <Image
                  src="/ashentrix-hover.jpeg"
                  alt="Ashentrix Solutions Hover Logo"
                  width={180}
                  height={60}
                  className="absolute inset-0 h-12 w-full object-contain object-left opacity-0 translate-y-full transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
                />
              </Link>
            </div>

            {/* Main Navigation - Premium Hover Pills */}
            <nav className="hidden lg:flex items-center gap-1.5 text-sm font-semibold">
              {/* About */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`rounded-full transition-all duration-300 px-5 py-2.5 flex items-center gap-2 ${activeDropdown === "about" ? "bg-[#280b57] text-white shadow-md shadow-purple-900/20" : "text-gray-600 hover:text-white hover:bg-[#280b57] hover:shadow-md hover:shadow-purple-900/20"}`}>
                  About
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      activeDropdown === "about" ? "rotate-180 text-white" : "text-gray-400 group-hover:text-white"
                    }`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Industries */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("industries")}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`rounded-full transition-all duration-300 px-5 py-2.5 flex items-center gap-2 ${activeDropdown === "industries" ? "bg-[#280b57] text-white shadow-md shadow-purple-900/20" : "text-gray-600 hover:text-white hover:bg-[#280b57] hover:shadow-md hover:shadow-purple-900/20"}`}>
                  Industries
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      activeDropdown === "industries" ? "rotate-180 text-white" : "text-gray-400 group-hover:text-white"
                    }`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Services */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("solutions")}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`rounded-full transition-all duration-300 px-5 py-2.5 flex items-center gap-2 ${activeDropdown === "solutions" ? "bg-[#280b57] text-white shadow-md shadow-purple-900/20" : "text-gray-600 hover:text-white hover:bg-[#280b57] hover:shadow-md hover:shadow-purple-900/20"}`}>
                  Services
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      activeDropdown === "solutions" ? "rotate-180 text-white" : "text-gray-400 group-hover:text-white"
                    }`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Careers */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("careers")}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`rounded-full transition-all duration-300 px-5 py-2.5 flex items-center gap-2 ${activeDropdown === "careers" ? "bg-[#280b57] text-white shadow-md shadow-purple-900/20" : "text-gray-600 hover:text-white hover:bg-[#280b57] hover:shadow-md hover:shadow-purple-900/20"}`}>
                  Careers
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      activeDropdown === "careers" ? "rotate-180 text-white" : "text-gray-400 group-hover:text-white"
                    }`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Contact */}
              <Link
                href="/contact"
                className="text-gray-600 hover:text-white hover:bg-[#280b57] hover:shadow-md hover:shadow-purple-900/20 rounded-full transition-all duration-300 px-5 py-2.5"
              >
                Contact
              </Link>
            </nav>

            {/* Right Side Items - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Sign in - Outlined Premium Pill */}
              <Link
                href="#"
                className="text-[#280b57] border-2 border-[#280b57]/20 hover:bg-[#280b57] hover:border-[#280b57] hover:text-white transition-all duration-300 text-sm font-bold px-6 py-2 rounded-full mr-1 hover:shadow-lg hover:shadow-purple-900/20"
              >
                Sign in
              </Link>

              {/* WhatsApp Link */}
              <Link
                href="https://wa.me/919711179821"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-white hover:bg-green-500 transition-all p-2.5 rounded-full flex items-center gap-2 bg-green-50 hover:shadow-md hover:shadow-green-500/20"
                title="Join us on WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63" />
                </svg>
              </Link>

              {/* Search */}
              <button className="text-gray-500 hover:text-white hover:bg-[#280b57] rounded-full transition-all duration-300 p-2.5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Language Selector */}
              <div className="flex items-center gap-1.5 text-gray-500 hover:text-white hover:bg-[#280b57] rounded-full cursor-pointer px-4 py-2 transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
                <span className="text-sm font-bold">IND</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-[#280b57] bg-purple-50 hover:bg-[#280b57] hover:text-white transition-all duration-300 p-2.5 rounded-xl z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mega Menu Dropdowns with Smooth Framer Motion Slide */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            variants={megaMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-0 right-0 w-full bg-white shadow-[0_30px_60px_-15px_rgba(40,11,87,0.1)] border-b border-gray-100 z-40 rounded-b-[2.5rem] overflow-hidden"
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
            }}
            onMouseLeave={handleMouseLeave}
          >
            {/* Top decorative gradient line */}
            <div className="h-1 w-full bg-gradient-to-r from-purple-100 via-[#280b57]/20 to-purple-100" />
            
            <div className="max-w-7xl mx-auto px-8 py-12">
              {/* Services Mega Menu */}
              {activeDropdown === "solutions" && (
                <div className="grid grid-cols-3 gap-10">
                  <div>
                    <h3 className="text-xs font-black text-purple-400 mb-6 tracking-widest uppercase flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#280b57]"></span>
                      Support Services
                    </h3>
                    <div className="space-y-1 text-sm font-semibold max-h-48 overflow-y-auto pr-4">
                      {[
                        { title: "Customer Support (Voice / Chat / Email)", href: "/services/customer-support" },
                        { title: "Technical Support", href: "/services/technical-support" },
                        { title: "Technical Helpdesk Services", href: "/services/technical-helpdesk" },
                        { title: "Ticketing Management", href: "/services/ticketing-management" },
                      ].map((item, idx) => (
                        <Link key={idx} href={item.href} className="flex items-center gap-3 text-gray-600 hover:text-[#280b57] hover:bg-purple-50 px-4 py-3 rounded-xl transition-all duration-300 group" onClick={() => setActiveDropdown(null)}>
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#280b57] transition-colors" />
                          <span className="group-hover:translate-x-1 transition-transform">{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-black text-purple-400 mb-6 tracking-widest uppercase flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#280b57]"></span>
                      Business Operations
                    </h3>
                    <div className="space-y-1 text-sm font-semibold max-h-48 overflow-y-auto pr-4">
                      {[
                        { title: "Back Office Operations", href: "/services/back-office" },
                        { title: "Operations Management", href: "/services/operations-management" },
                        { title: "Collections Process", href: "/services/collections" },
                        { title: "Recruitment & Talent Support", href: "/services/recruitment" },
                      ].map((item, idx) => (
                        <Link key={idx} href={item.href} className="flex items-center gap-3 text-gray-600 hover:text-[#280b57] hover:bg-purple-50 px-4 py-3 rounded-xl transition-all duration-300 group" onClick={() => setActiveDropdown(null)}>
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#280b57] transition-colors" />
                          <span className="group-hover:translate-x-1 transition-transform">{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-black text-purple-400 mb-6 tracking-widest uppercase flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#280b57]"></span>
                      Data & Technology
                    </h3>
                    <div className="space-y-1 text-sm font-semibold max-h-48 overflow-y-auto pr-4">
                      {[
                        { title: "Data Processing & Data Services", href: "/services/data-processing" },
                        { title: "Analytics & Reporting", href: "/services/analytics-reporting" },
                        { title: "Apps and Web Development", href: "/services/web-development" },
                        { title: "Graphic Design & Printing Solutions", href: "/services/graphic-design" },
                      ].map((item, idx) => (
                        <Link key={idx} href={item.href} className="flex items-center gap-3 text-gray-600 hover:text-[#280b57] hover:bg-purple-50 px-4 py-3 rounded-xl transition-all duration-300 group" onClick={() => setActiveDropdown(null)}>
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#280b57] transition-colors" />
                          <span className="group-hover:translate-x-1 transition-transform">{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* About Us Mega Menu */}
              {activeDropdown === "about" && (
                <div className="grid grid-cols-3 gap-12">
                  <div>
                    <h3 className="text-xs font-black text-purple-400 mb-6 tracking-widest uppercase flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#280b57]"></span>
                      About Ashentrix
                    </h3>
                    <div className="space-y-1 text-sm font-semibold">
                      {[
                        { title: "About Ashentrix", href: "/about" },
                        { title: "Vision & Mission", href: "/about/vision-mission" },
                        { title: "Leadership", href: "/leadership" },
                        { title: "Awards & Recognition", href: "/about/awards" },
                        { title: "News & Media", href: "/about/news-media" },
                        { title: "Investors & Partners", href: "/about/investors-partners" },
                      ].map((item, idx) => (
                        <Link key={idx} href={item.href} className="flex items-center gap-3 text-gray-600 hover:text-[#280b57] hover:bg-purple-50 px-4 py-3 rounded-xl transition-all duration-300 group" onClick={() => setActiveDropdown(null)}>
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#280b57] transition-colors" />
                          <span className="group-hover:translate-x-1 transition-transform">{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-black text-purple-400 mb-6 tracking-widest uppercase flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#280b57]"></span>
                      Company
                    </h3>
                    <div className="space-y-1 text-sm font-semibold">
                      {[
                        { title: "Careers", href: "/careers" },
                        { title: "Sustainability", href: "/sustainability" },
                        { title: "Contact Us", href: "/contact" },
                      ].map((item, idx) => (
                        <Link key={idx} href={item.href} className="flex items-center gap-3 text-gray-600 hover:text-[#280b57] hover:bg-purple-50 px-4 py-3 rounded-xl transition-all duration-300 group" onClick={() => setActiveDropdown(null)}>
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#280b57] transition-colors" />
                          <span className="group-hover:translate-x-1 transition-transform">{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-purple-50/50 p-8 rounded-3xl border border-purple-100/50 relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-200/40 blur-3xl rounded-full" />
                    <h4 className="font-extrabold text-[#0F172A] mb-5 text-lg relative z-10">
                      Quick Facts
                    </h4>
                    <div className="space-y-4 text-sm relative z-10">
                      <div className="flex flex-col"><span className="text-purple-400 font-bold uppercase text-[10px] tracking-widest">Founded</span> <span className="font-bold text-gray-800">2025</span></div>
                      <div className="flex flex-col"><span className="text-purple-400 font-bold uppercase text-[10px] tracking-widest">Headquarters</span> <span className="font-bold text-gray-800">Noida, Uttar Pradesh, India</span></div>
                      <div className="flex flex-col"><span className="text-purple-400 font-bold uppercase text-[10px] tracking-widest">Team</span> <span className="font-bold text-gray-800">50 to 100 Experts</span></div>
                      <div className="flex flex-col"><span className="text-purple-400 font-bold uppercase text-[10px] tracking-widest">Focus</span> <span className="font-bold text-gray-800">New Global Partnerships</span></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Industries Mega Menu */}
              {activeDropdown === "industries" && (
                <div className="grid grid-cols-3 gap-12">
                  <div>
                    <h3 className="text-xs font-black text-purple-400 mb-6 tracking-widest uppercase flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#280b57]"></span>
                      Core Industries
                    </h3>
                    <div className="space-y-1 text-sm font-semibold">
                      {[
                        { title: "Insurance", href: "/industries/insurance" },
                        { title: "Healthcare", href: "/industries/healthcare" },
                        { title: "Telecom", href: "/industries/telecom" },
                        { title: "E-commerce", href: "/industries/ecommerce" },
                        { title: "Finance & Accounting", href: "/industries/finance" },
                      ].map((item, idx) => (
                        <Link key={idx} href={item.href} className="flex items-center gap-3 text-gray-600 hover:text-[#280b57] hover:bg-purple-50 px-4 py-3 rounded-xl transition-all duration-300 group" onClick={() => setActiveDropdown(null)}>
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#280b57] transition-colors" />
                          <span className="group-hover:translate-x-1 transition-transform">{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-black text-purple-400 mb-6 tracking-widest uppercase flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#280b57]"></span>
                      Specialized Sectors
                    </h3>
                    <div className="space-y-1 text-sm font-semibold">
                      {[
                        { title: "Logistics & Supply Chain", href: "/industries/logistics" },
                        { title: "Travel, Hospitality & Cargo", href: "/industries/travel" },
                        { title: "Entertainment & Social Platforms", href: "/industries/entertainment" },
                        { title: "IT, Hardware & IoT", href: "/industries/it-hardware" },
                      ].map((item, idx) => (
                        <Link key={idx} href={item.href} className="flex items-center gap-3 text-gray-600 hover:text-[#280b57] hover:bg-purple-50 px-4 py-3 rounded-xl transition-all duration-300 group" onClick={() => setActiveDropdown(null)}>
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#280b57] transition-colors" />
                          <span className="group-hover:translate-x-1 transition-transform">{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#280b57] to-purple-900 p-8 rounded-3xl border border-purple-800 relative overflow-hidden shadow-xl shadow-purple-900/20">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-2xl rounded-full" />
                    <h4 className="font-extrabold text-white mb-4 text-lg relative z-10">
                      Industry Expertise
                    </h4>
                    <p className="text-sm text-purple-200 mb-6 font-medium leading-relaxed relative z-10">
                      Deep domain knowledge across 9+ industries, helping
                      businesses transform and scale operations efficiently.
                    </p>
                    <div className="space-y-3 text-sm text-white font-bold relative z-10">
                      <div className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">✓</div> Regulatory Compliance</div>
                      <div className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">✓</div> Industry-specific Workflows</div>
                      <div className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">✓</div> Domain Expert Teams</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Careers Mega Menu */}
              {activeDropdown === "careers" && (
                <div className="grid grid-cols-3 gap-12">
                  <div>
                    <h3 className="text-xs font-black text-purple-400 mb-6 tracking-widest uppercase flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#280b57]"></span>
                      Join Our Team
                    </h3>
                    <div className="space-y-1 text-sm font-semibold">
                      {[
                        { title: "Life at Ashentrix", href: "/careers/life-at-ashentrix" },
                        { title: "Current Openings", href: "/careers/current-openings" },
                        { title: "Internship Programs", href: "/careers/internship" },
                        { title: "Apply Now", href: "/careers/apply" },
                      ].map((item, idx) => (
                        <Link key={idx} href={item.href} className="flex items-center gap-3 text-gray-600 hover:text-[#280b57] hover:bg-purple-50 px-4 py-3 rounded-xl transition-all duration-300 group" onClick={() => setActiveDropdown(null)}>
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#280b57] transition-colors" />
                          <span className="group-hover:translate-x-1 transition-transform">{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-black text-purple-400 mb-6 tracking-widest uppercase flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#280b57]"></span>
                      Why Choose Us
                    </h3>
                    <div className="space-y-3 text-sm font-semibold text-gray-600 bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                      <div className="flex items-center gap-3"><span className="text-purple-400">•</span> Global work opportunities</div>
                      <div className="flex items-center gap-3"><span className="text-purple-400">•</span> Continuous learning & development</div>
                      <div className="flex items-center gap-3"><span className="text-purple-400">•</span> Competitive compensation</div>
                      <div className="flex items-center gap-3"><span className="text-purple-400">•</span> Work-life balance</div>
                      <div className="flex items-center gap-3"><span className="text-purple-400">•</span> Innovation-driven culture</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-3xl border border-purple-100 flex flex-col justify-center items-start relative overflow-hidden shadow-lg shadow-purple-900/5">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-200/50 blur-3xl rounded-full" />
                    <h4 className="font-extrabold text-2xl text-[#280b57] mb-3 relative z-10">
                      We&apos;re Hiring!
                    </h4>
                    <p className="text-sm text-gray-600 font-medium mb-6 leading-relaxed relative z-10">
                      Be part of our founding team as we build the future of
                      business process outsourcing from Delhi NCR.
                    </p>
                    <Link
                      href="/careers/apply"
                      onClick={() => setActiveDropdown(null)}
                      className="inline-flex items-center gap-2 bg-[#280b57] text-white px-6 py-3.5 rounded-full text-sm font-bold hover:bg-purple-900 hover:-translate-y-1 transition-all duration-300 shadow-md shadow-purple-900/20 relative z-10"
                    >
                      View Open Positions
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modern Slide-out Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            {/* Dark blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Light Slide-out Drawer */}
            <motion.div
              variants={mobileDrawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl overflow-y-auto flex flex-col rounded-l-3xl border-l border-white/20"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
                <Image
                  src="/ashentrix.jpeg"
                  alt="Ashentrix Solutions"
                  width={140}
                  height={45}
                  className="h-10 w-auto"
                />
              </div>

              {/* Navigation */}
              <nav className="p-5 space-y-2 flex-grow">
                <Link
                  href="/"
                  className="block text-gray-900 text-lg font-bold py-3.5 px-5 hover:bg-purple-50 hover:text-[#280b57] rounded-2xl transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>

                {/* About Section */}
                <div className="rounded-2xl overflow-hidden">
                  <button
                    className={`w-full flex items-center justify-between text-lg font-bold py-3.5 px-5 transition-colors ${activeDropdown === "about" ? "bg-[#280b57] text-white" : "text-gray-900 hover:bg-purple-50 hover:text-[#280b57]"}`}
                    onClick={() => setActiveDropdown(activeDropdown === "about" ? null : "about")}
                  >
                    About
                    <svg className={`w-5 h-5 transform transition-transform ${activeDropdown === "about" ? "rotate-180 text-white" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "about" && (
                      <motion.div variants={mobileMenuAccordionVariants} initial="hidden" animate="visible" exit="exit" className="bg-gray-50 border-x border-b border-gray-100 rounded-b-2xl">
                        <div className="p-3 space-y-1">
                          {[
                            { title: "About Ashentrix", href: "/about" },
                            { title: "Leadership", href: "/leadership" },
                            { title: "Vision & Mission", href: "/about/vision-mission" }
                          ].map((item, idx) => (
                            <Link key={idx} href={item.href} className="block text-gray-600 font-semibold text-base py-3 px-4 hover:bg-white hover:text-[#280b57] rounded-xl transition-all shadow-sm" onClick={() => setIsMobileMenuOpen(false)}>
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Industries Section */}
                <div className="rounded-2xl overflow-hidden">
                  <button
                    className={`w-full flex items-center justify-between text-lg font-bold py-3.5 px-5 transition-colors ${activeDropdown === "industries" ? "bg-[#280b57] text-white" : "text-gray-900 hover:bg-purple-50 hover:text-[#280b57]"}`}
                    onClick={() => setActiveDropdown(activeDropdown === "industries" ? null : "industries")}
                  >
                    Industries
                    <svg className={`w-5 h-5 transform transition-transform ${activeDropdown === "industries" ? "rotate-180 text-white" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "industries" && (
                      <motion.div variants={mobileMenuAccordionVariants} initial="hidden" animate="visible" exit="exit" className="bg-gray-50 border-x border-b border-gray-100 rounded-b-2xl">
                        <div className="p-3 space-y-1">
                          {[
                            { title: "All Industries", href: "/industries" },
                            { title: "Insurance", href: "/industries/insurance" },
                            { title: "Healthcare", href: "/industries/healthcare" },
                            { title: "Telecom", href: "/industries/telecom" },
                            { title: "Banking & Finance", href: "/industries/finance" }
                          ].map((item, idx) => (
                            <Link key={idx} href={item.href} className="block text-gray-600 font-semibold text-base py-3 px-4 hover:bg-white hover:text-[#280b57] rounded-xl transition-all shadow-sm" onClick={() => setIsMobileMenuOpen(false)}>
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Services Section */}
                <div className="rounded-2xl overflow-hidden">
                  <button
                    className={`w-full flex items-center justify-between text-lg font-bold py-3.5 px-5 transition-colors ${activeDropdown === "services" ? "bg-[#280b57] text-white" : "text-gray-900 hover:bg-purple-50 hover:text-[#280b57]"}`}
                    onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
                  >
                    Services
                    <svg className={`w-5 h-5 transform transition-transform ${activeDropdown === "services" ? "rotate-180 text-white" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "services" && (
                      <motion.div variants={mobileMenuAccordionVariants} initial="hidden" animate="visible" exit="exit" className="bg-gray-50 border-x border-b border-gray-100 rounded-b-2xl">
                        <div className="p-3 space-y-1">
                          {[
                            { title: "Customer Support", href: "/services/customer-support" },
                            { title: "Technical Support", href: "/services/technical-support" },
                            { title: "Back Office Operations", href: "/services/back-office" },
                            { title: "Data Processing", href: "/services/data-processing" }
                          ].map((item, idx) => (
                            <Link key={idx} href={item.href} className="block text-gray-600 font-semibold text-base py-3 px-4 hover:bg-white hover:text-[#280b57] rounded-xl transition-all shadow-sm" onClick={() => setIsMobileMenuOpen(false)}>
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Careers Section */}
                <div className="rounded-2xl overflow-hidden">
                  <button
                    className={`w-full flex items-center justify-between text-lg font-bold py-3.5 px-5 transition-colors ${activeDropdown === "careers" ? "bg-[#280b57] text-white" : "text-gray-900 hover:bg-purple-50 hover:text-[#280b57]"}`}
                    onClick={() => setActiveDropdown(activeDropdown === "careers" ? null : "careers")}
                  >
                    Careers
                    <svg className={`w-5 h-5 transform transition-transform ${activeDropdown === "careers" ? "rotate-180 text-white" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "careers" && (
                      <motion.div variants={mobileMenuAccordionVariants} initial="hidden" animate="visible" exit="exit" className="bg-gray-50 border-x border-b border-gray-100 rounded-b-2xl">
                        <div className="p-3 space-y-1">
                          {[
                            { title: "Job Opportunities", href: "/careers" },
                            { title: "Company Culture", href: "/careers/culture" },
                            { title: "Apply Now", href: "/careers/apply" }
                          ].map((item, idx) => (
                            <Link key={idx} href={item.href} className="block text-gray-600 font-semibold text-base py-3 px-4 hover:bg-white hover:text-[#280b57] rounded-xl transition-all shadow-sm" onClick={() => setIsMobileMenuOpen(false)}>
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/contact"
                  className="block text-gray-900 text-lg font-bold py-3.5 px-5 hover:bg-purple-50 hover:text-[#280b57] rounded-2xl transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                <div className="border-t border-gray-200 my-6 mx-2"></div>

                {/* Additional Tools */}
                <Link
                  href="https://wa.me/919711179821"
                  target="_blank"
                  className="flex items-center justify-center gap-3 bg-green-50 text-green-700 font-bold text-base py-4 px-4 hover:bg-green-100 rounded-2xl transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347..." />
                  </svg>
                  WhatsApp Support
                </Link>

                <Link
                  href="#"
                  className="flex items-center justify-center bg-[#280b57] text-white font-bold text-base py-4 px-4 hover:bg-purple-900 rounded-2xl transition-colors mt-4 shadow-lg shadow-purple-900/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In Portal
                </Link>
              </nav>

              {/* Mobile Footer */}
              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <p className="text-gray-500 text-xs text-center font-bold uppercase tracking-widest">
                  © 2026 Ashentrix Solutions
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
