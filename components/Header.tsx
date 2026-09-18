"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Solid White Header (No Transparency) */}
      <header className="bg-white border-b border-gray-200 transition-all duration-300 relative z-50">
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

            {/* Main Navigation - Premium Hover Pills  */}
            <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
              {/* About */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-gray-600 hover:text-white hover:bg-[#280b57] rounded-full transition-all duration-300 px-4 py-2.5 flex items-center gap-1.5">
                  About
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      activeDropdown === "about"
                        ? "rotate-180 text-white"
                        : "text-gray-400 group-hover:text-white"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              {/* Industries */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("industries")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-gray-600 hover:text-white hover:bg-[#280b57] rounded-full transition-all duration-300 px-4 py-2.5 flex items-center gap-1.5">
                  Industries
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      activeDropdown === "industries"
                        ? "rotate-180 text-white"
                        : "text-gray-400 group-hover:text-white"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              {/* Services */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("solutions")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-gray-600 hover:text-white hover:bg-[#280b57] rounded-full transition-all duration-300 px-4 py-2.5 flex items-center gap-1.5">
                  Services
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      activeDropdown === "solutions"
                        ? "rotate-180 text-white"
                        : "text-gray-400 group-hover:text-white"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              {/* Careers */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("careers")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-gray-600 hover:text-white hover:bg-[#280b57] rounded-full transition-all duration-300 px-4 py-2.5 flex items-center gap-1.5">
                  Careers
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      activeDropdown === "careers"
                        ? "rotate-180 text-white"
                        : "text-gray-400 group-hover:text-white"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              {/* Contact */}
              <Link
                href="/contact"
                className="text-gray-600 hover:text-white hover:bg-[#280b57] rounded-full transition-all duration-300 px-4 py-2.5"
              >
                Contact
              </Link>
            </nav>

            {/* Right Side Items - Desktop */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Sign in - Outlined Premium Pill */}
              <Link
                href="#"
                className="text-[#280b57] border border-[#280b57]/20 hover:bg-[#280b57] hover:border-[#280b57] hover:text-white transition-all text-sm font-semibold px-5 py-2 rounded-full mr-2"
              >
                Sign in
              </Link>

              {/* WhatsApp Link */}
              <Link
                href="https://wa.me/919711179821"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-600 hover:bg-green-50 transition-all p-2 rounded-full flex items-center gap-2"
                title="Join us on WhatsApp"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63" />
                </svg>
              </Link>

              {/* Search */}
              <button className="text-gray-500 hover:text-[#280b57] hover:bg-gray-100/80 rounded-full transition-colors p-2.5">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Language Selector */}
              <div className="flex items-center gap-1.5 text-gray-500 hover:text-[#280b57] hover:bg-gray-100/80 rounded-full cursor-pointer px-3 py-2 transition-all">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                  />
                </svg>
                <span className="text-sm font-semibold">IND</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-800 hover:text-[#280b57] transition-colors p-2 rounded-full hover:bg-gray-100 z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
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
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 w-full bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border-b border-gray-200 z-40"
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-6 py-10">
              {/* Services Mega Menu */}
              {activeDropdown === "solutions" && (
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-sm font-bold text-[#280b57] mb-6 tracking-widest uppercase">
                      Support Services
                    </h3>
                    <div className="space-y-1 text-sm max-h-48 overflow-y-auto">
                      <Link
                        href="/services/customer-support"
                        className="block text-gray-600 hover:text-[#280b57]  hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Customer Support (Voice / Chat / Email)
                      </Link>
                      <Link
                        href="/services/technical-support"
                        className="block text-gray-600 hover:text-[#280b57] hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Technical Support
                      </Link>
                      <Link
                        href="/services/technical-helpdesk"
                        className="block text-gray-600 hover:text-[#280b57]  hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Technical Helpdesk Services
                      </Link>
                      <Link
                        href="/services/ticketing-management"
                        className="block text-gray-600 hover:text-[#280b57] hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Ticketing Management
                      </Link>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-6 tracking-widest uppercase">
                      Business Operations
                    </h3>
                    <div className="space-y-1 text-sm max-h-48 overflow-y-auto">
                      <Link
                        href="/services/back-office"
                        className="block text-gray-600 hover:text-[#280b57]  hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Back Office Operations
                      </Link>
                      <Link
                        href="/services/operations-management"
                        className="block text-gray-600 hover:text-[#280b57] hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Operations Management
                      </Link>
                      <Link
                        href="/services/collections"
                        className="block text-gray-600 hover:text-[#280b57] hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Collections Process
                      </Link>
                      <Link
                        href="/services/recruitment"
                        className="block text-gray-600 hover:text-[#280b57] hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Recruitment & Talent Support
                      </Link>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-6 tracking-widest uppercase">
                      Data & Technology
                    </h3>
                    <div className="space-y-1 text-sm max-h-48 overflow-y-auto">
                      <Link
                        href="/services/data-processing"
                        className="block text-gray-600 hover:text-[#280b57]  hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Data Processing & Data Services
                      </Link>
                      <Link
                        href="/services/analytics-reporting"
                        className="block text-gray-600 hover:text-[#280b57]  hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Analytics & Reporting
                      </Link>
                      <Link
                        href="/services/web-development"
                        className="block text-gray-600 hover:text-[#280b57] hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Apps and Web Development
                      </Link>
                      <Link
                        href="/services/graphic-design"
                        className="block text-gray-600 hover:text-[#280b57] hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Graphic Design & Printing Solutions
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* About Us Mega Menu */}
              {activeDropdown === "about" && (
                <div className="grid grid-cols-3 gap-12">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-6 tracking-widest uppercase">
                      About Ashentrix
                    </h3>
                    <div className="space-y-1">
                      <Link
                        href="/about"
                        className="block text-gray-600 hover:text-[#280b57]  hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        About Ashentrix
                      </Link>
                      <Link
                        href="/about/vision-mission"
                        className="block text-gray-600 hover:text-[#280b57] hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Vision & Mission
                      </Link>
                      <Link
                        href="/leadership"
                        className="block text-gray-600 hover:text-[#280b57] hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Leadership
                      </Link>
                      <Link
                        href="/about/awards"
                        className="block text-gray-600 hover:text-[#280b57] hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Awards & Recognition
                      </Link>
                      <Link
                        href="/about/news-media"
                        className="block text-gray-600 hover:text-[#280b57] hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        News & Media
                      </Link>
                      <Link
                        href="/about/investors-partners"
                        className="block text-gray-600 hover:text-[#280b57] hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Investors & Partners
                      </Link>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-6 tracking-widest uppercase">
                      Company
                    </h3>
                    <div className="space-y-1">
                      <Link
                        href="/careers"
                        className="block text-gray-600 hover:text-[#280b57]  hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Careers
                      </Link>
                      <Link
                        href="/sustainability"
                        className="block text-gray-600 hover:text-[#280b57]  hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Sustainability
                      </Link>
                      <Link
                        href="/contact"
                        className="block text-gray-600 hover:text-[#280b57] hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4">
                      Quick Facts
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-semibold">Founded:</span> 2025
                      </div>
                      <div>
                        <span className="font-semibold">Headquarters:</span>{" "}
                        Noida Uttar Pradesh, India
                      </div>
                      <div>
                        <span className="font-semibold">Team:</span> 50 to 100
                      </div>
                      <div>
                        <span className="font-semibold">Focus:</span> New
                        Partnerships
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Industries Mega Menu */}
              {activeDropdown === "industries" && (
                <div className="grid grid-cols-3 gap-12">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-6 tracking-widest uppercase">
                      Core Industries
                    </h3>
                    <div className="space-y-1 text-sm">
                      <Link
                        href="/industries/insurance"
                        className="block text-gray-600 hover:text-[#280b57]  hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Insurance
                      </Link>
                      <Link
                        href="/industries/healthcare"
                        className="block text-gray-600 hover:text-[#280b57]  hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Healthcare
                      </Link>
                      <Link
                        href="/industries/telecom"
                        className="block text-gray-600 hover:text-[#280b57] hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Telecom
                      </Link>
                      <Link
                        href="/industries/ecommerce"
                        className="block text-gray-600 hover:text-[#280b57]  hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        E-commerce
                      </Link>
                      <Link
                        href="/industries/finance"
                        className="block text-gray-600 hover:text-[#280b57] hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Finance & Accounting
                      </Link>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-6 tracking-widest uppercase">
                      Specialized Sectors
                    </h3>
                    <div className="space-y-1 text-sm">
                      <Link
                        href="/industries/logistics"
                        className="block text-gray-600 hover:text-[#280b57] hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Logistics & Supply Chain
                      </Link>
                      <Link
                        href="/industries/travel"
                        className="block text-gray-600 hover:text-[#280b57] hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Travel, Hospitality & Cargo
                      </Link>
                      <Link
                        href="/industries/entertainment"
                        className="block text-gray-600 hover:text-[#280b57]  hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Entertainment & Social Platforms
                      </Link>
                      <Link
                        href="/industries/it-hardware"
                        className="block text-gray-600 hover:text-[#280b57]  hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        IT, Hardware & IoT
                      </Link>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4">
                      Industry Expertise
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Deep domain knowledge across 9+ industries, helping
                      businesses transform and scale operations efficiently.
                    </p>
                    <div className="space-y-2 text-xs text-gray-500 font-medium">
                      <div>✓ Regulatory Compliance</div>
                      <div>✓ Industry-specific Workflows</div>
                      <div>✓ Domain Expert Teams</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Careers Mega Menu */}
              {activeDropdown === "careers" && (
                <div className="grid grid-cols-3 gap-12">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-6 tracking-widest uppercase">
                      Join Our Team
                    </h3>
                    <div className="space-y-1 text-sm">
                      <Link
                        href="/careers/life-at-ashentrix"
                        className="block text-gray-600 hover:text-[#280b57] hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Life at Ashentrix
                      </Link>
                      <Link
                        href="/career-opportunities"
                        className="block text-gray-600 hover:text-[#280b57]  hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Current Openings
                      </Link>
                      <Link
                        href="/careers/internship"
                        className="block text-gray-600 hover:text-[#280b57] hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Internship Programs
                      </Link>
                      <Link
                        href="/careers/apply"
                        className="block text-gray-600 hover:text-[#280b57] hover:bg-purple-100 px-3 py-2 rounded-lg transition-all"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-6 tracking-widest uppercase">
                      Why Choose Us
                    </h3>
                    <div className="space-y-3 text-sm text-gray-600">
                      <div>• Global work opportunities</div>
                      <div>• Continuous learning & development</div>
                      <div>• Competitive compensation</div>
                      <div>• Work-life balance</div>
                      <div>• Innovation-driven culture</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col justify-center items-start">
                    <h4 className="font-bold text-gray-900 mb-3">
                      We&apos;re Hiring!
                    </h4>
                    <p className="text-sm text-gray-600 mb-5">
                      Be part of our founding team as we build the future of
                      business process outsourcing from Delhi NCR.
                    </p>
                    <Link
                      href="/career-opportunities"
                      onClick={() => setActiveDropdown(null)}
                      className="inline-block bg-[#280b57] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-purple-900 transition-colors shadow-md shadow-purple-900/20"
                    >
                      View Open Positions
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
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Light Slide-out Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl overflow-y-auto flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <Image
                  src="/ashentrix.jpeg"
                  alt="Ashentrix Solutions"
                  width={140}
                  height={45}
                  className="h-10 w-auto"
                />
              </div>

              {/* Navigation */}
              <nav className="p-4 space-y-1 flex-grow">
                <Link
                  href="/"
                  className="block text-gray-900 text-lg font-semibold py-3 px-4  hover:bg-purple-100 hover:text-[#280b57] rounded-xl transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>

                {/* About Section */}
                <div>
                  <button
                    className="w-full flex items-center justify-between text-gray-900 text-lg font-semibold py-3 px-4 hover:bg-purple-100 hover:text-[#280b57] rounded-xl transition-colors"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "about" ? null : "about",
                      )
                    }
                  >
                    About
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        activeDropdown === "about"
                          ? "rotate-180 text-[#280b57]"
                          : "text-gray-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "about" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden ml-4 mb-2 space-y-1"
                      >
                        <Link
                          href="/about"
                          className="block text-gray-600 text-base py-2.5 px-4 hover:bg-purple-100 hover:text-[#280b57] rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          About Ashentrix
                        </Link>
                        <Link
                          href="/leadership"
                          className="block text-gray-600 text-base py-2.5 px-4 hover:bg-purple-100 hover:text-[#280b57] rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Leadership
                        </Link>
                        <Link
                          href="/about/vision-mission"
                          className="block text-gray-600 text-base py-2.5 px-4 hover:bg-purple-100 hover:text-[#280b57] rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Vision & Mission
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Industries Section */}
                <div>
                  <button
                    className="w-full flex items-center justify-between text-gray-900 text-lg font-semibold py-3 px-4  hover:bg-purple-100 hover:text-[#280b57] rounded-xl transition-colors"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "industries" ? null : "industries",
                      )
                    }
                  >
                    Industries
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        activeDropdown === "industries"
                          ? "rotate-180 text-[#280b57]"
                          : "text-gray-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "industries" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden ml-4 mb-2 space-y-1"
                      >
                        <Link
                          href="/industries"
                          className="block text-gray-600 text-base py-2.5 px-4 hover:bg-purple-100 hover:text-[#280b57] rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          All Industries
                        </Link>
                        <Link
                          href="/industries/insurance"
                          className="block text-gray-600 text-base py-2.5 px-4 hover:bg-purple-100 hover:text-[#280b57] rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Insurance
                        </Link>
                        <Link
                          href="/industries/healthcare"
                          className="block text-gray-600 text-base py-2.5 px-4 hover:bg-purple-100 hover:text-[#280b57] rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Healthcare
                        </Link>
                        <Link
                          href="/industries/telecom"
                          className="block text-gray-600 text-base py-2.5 px-4 hover:bg-purple-100 hover:text-[#280b57] rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Telecom
                        </Link>
                        <Link
                          href="/industries/finance"
                          className="block text-gray-600 text-base py-2.5 px-4 hover:bg-purple-100 hover:text-[#280b57] rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Banking & Finance
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Services Section */}
                <div>
                  <button
                    className="w-full flex items-center justify-between text-gray-900 text-lg font-semibold py-3 px-4 hover:bg-purple-100 hover:text-[#280b57] rounded-xl transition-colors"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "services" ? null : "services",
                      )
                    }
                  >
                    Services
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        activeDropdown === "services"
                          ? "rotate-180 text-[#280b57]"
                          : "text-gray-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "services" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden ml-4 mb-2 space-y-1"
                      >
                        <Link
                          href="/services/customer-support"
                          className="block text-gray-600 text-base py-2.5 px-4 hover:bg-purple-100 hover:text-[#280b57] rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Customer Support
                        </Link>
                        <Link
                          href="/services/technical-support"
                          className="block text-gray-600 text-base py-2.5 px-4 hover:bg-purple-100 hover:text-[#280b57] rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Technical Support
                        </Link>
                        <Link
                          href="/services/back-office"
                          className="block text-gray-600 text-base py-2.5 px-4 hover:bg-purple-100 hover:text-[#280b57] rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Back Office Operations
                        </Link>
                        <Link
                          href="/services/data-processing"
                          className="block text-gray-600 text-base py-2.5 px-4 hover:bg-purple-100 hover:text-[#280b57] rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Data Processing
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Careers Section */}
                <div>
                  <button
                    className="w-full flex items-center justify-between text-gray-900 text-lg font-semibold py-3 px-4 hover:bg-purple-100 hover:text-[#280b57] rounded-xl transition-colors"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "careers" ? null : "careers",
                      )
                    }
                  >
                    Careers
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        activeDropdown === "careers"
                          ? "rotate-180 text-[#280b57]"
                          : "text-gray-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "careers" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden ml-4 mb-2 space-y-1"
                      >
                        <Link
                          href="/careers"
                          className="block text-gray-600 text-base py-2.5 px-4 hover:bg-purple-100 hover:text-[#280b57] rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Job Opportunities
                        </Link>
                        <Link
                          href="/careers/culture"
                          className="block text-gray-600 text-base py-2.5 px-4 hover:bg-purple-100 hover:text-[#280b57] rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Company Culture
                        </Link>
                        <Link
                          href="/careers/apply"
                          className="block text-gray-600 text-base py-2.5 px-4 hover:bg-purple-100 hover:text-[#280b57] rounded-lg transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Apply Now
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/contact"
                  className="block text-gray-900 text-lg font-semibold py-3 px-4 hover:bg-purple-100 hover:text-[#280b57] rounded-xl transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                <div className="border-t border-gray-100 my-4 mx-4"></div>

                {/* Additional Tools */}
                <Link
                  href="https://wa.me/919711179821"
                  target="_blank"
                  className="flex items-center gap-3 text-green-600 font-semibold text-base py-3 px-4 hover:bg-green-50 rounded-xl transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347..." />
                  </svg>
                  WhatsApp Support
                </Link>

                <Link
                  href="#"
                  className="block text-center bg-gray-900 text-white font-semibold text-base py-3.5 px-4 hover:bg-[#280b57] rounded-xl transition-colors mt-6 mx-2 shadow-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
              </nav>

              {/* Mobile Footer */}
              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <p className="text-gray-500 text-xs text-center font-medium">
                  © 2026 Ashentrix Solutions.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
