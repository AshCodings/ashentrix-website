"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative">
      <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-full mx-auto">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/ashentrix.jpeg"
                  alt="Ashentrix Solutions Logo"
                  width={180}
                  height={60}
                  className="h-12 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Main Navigation */}
            <nav className="hidden lg:flex items-center gap-0 text-sm font-medium">
              {/* About */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("about")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-gray-300 hover:text-white hover:bg-gray-800 transition-all px-4 py-3 flex items-center gap-1">
                  About
                  <svg
                    className="w-3 h-3"
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
                onMouseEnter={() => setActiveDropdown("industries")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-gray-300 hover:text-white hover:bg-gray-800 transition-all px-4 py-3 flex items-center gap-1">
                  Industries
                  <svg
                    className="w-3 h-3"
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
                onMouseEnter={() => setActiveDropdown("solutions")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-gray-300 hover:text-white hover:bg-gray-800 transition-all px-4 py-3 flex items-center gap-1">
                  Services
                  <svg
                    className="w-3 h-3"
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
                onMouseEnter={() => setActiveDropdown("careers")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-gray-300 hover:text-white hover:bg-gray-800 transition-all px-4 py-3 flex items-center gap-1">
                  Careers
                  <svg
                    className="w-3 h-3"
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
                className="text-gray-300 hover:text-white hover:bg-gray-800 transition-all px-4 py-3"
              >
                Contact
              </Link>
            </nav>

            {/* Right Side Items - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Sign in */}
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium px-3 py-2"
              >
                Sign in
              </Link>

              {/* WhatsApp Link */}
              <Link
                href="https://wa.me/919711179821"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-colors p-2 flex items-center gap-2"
                title="Join us on WhatsApp"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63" />
                </svg>
                <span className="text-sm hidden xl:inline">WhatsApp</span>
              </Link>

              {/* Search */}
              <button className="text-gray-300 hover:text-white transition-colors p-2">
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
              <div className="flex items-center gap-2 text-gray-300">
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
                <span className="text-sm font-medium">IND</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white hover:text-gray-300 transition-colors p-3 rounded-md hover:bg-gray-800 z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mega Menu Dropdowns */}
      {activeDropdown && (
        <div
          className="absolute top-full left-0 right-0 w-full bg-white shadow-2xl border-b border-gray-200 z-60"
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Services Mega Menu */}
            {activeDropdown === "solutions" && (
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-6">
                    Support Services →
                  </h3>
                  <div className="space-y-2 text-sm max-h-48 overflow-y-auto">
                    <Link
                      href="/services/customer-support"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Customer Support (Voice / Chat / Email)
                    </Link>
                    <Link
                      href="/services/technical-support"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Technical Support
                    </Link>
                    <Link
                      href="/services/technical-helpdesk"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Technical Helpdesk Services
                    </Link>
                    <Link
                      href="/services/ticketing-management"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Ticketing Management
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Business Operations
                  </h3>
                  <div className="space-y-2 text-sm max-h-48 overflow-y-auto">
                    <Link
                      href="/services/back-office"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Back Office Operations
                    </Link>
                    <Link
                      href="/services/operations-management"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Operations Management
                    </Link>
                    <Link
                      href="/services/collections"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Collections Process
                    </Link>
                    <Link
                      href="/services/recruitment"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Recruitment & Talent Support
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Data & Technology
                  </h3>
                  <div className="space-y-2 text-sm max-h-48 overflow-y-auto">
                    <Link
                      href="/services/data-processing"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Data Processing & Data Services
                    </Link>
                    <Link
                      href="/services/analytics-reporting"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Analytics & Reporting
                    </Link>
                    <Link
                      href="/services/web-development"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Apps and Web Development
                    </Link>
                    <Link
                      href="/services/graphic-design"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Graphic Design & Printing Solutions
                    </Link>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    FEATURED SOLUTIONS
                  </h4>
                  <div className="space-y-6">
                    <div className="flex gap-3">
                      <div className="w-16 h-12 bg-blue-100 rounded shrink-0"></div>
                      <div>
                        <h5 className="font-medium text-gray-900 text-sm mb-1">
                          24/7 Multilingual Support
                        </h5>
                        <p className="text-xs text-gray-600">
                          Round-the-clock customer service across voice, chat,
                          and email channels
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-16 h-12 bg-purple-100 rounded shrink-0"></div>
                      <div>
                        <h5 className="font-medium text-gray-900 text-sm mb-1">
                          AI-Powered Analytics
                        </h5>
                        <p className="text-xs text-gray-600">
                          Advanced data insights and business intelligence
                          solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* About Us Mega Menu */}
            {activeDropdown === "about" && (
              <div className="grid grid-cols-3 gap-12">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    About Ashentrix
                  </h3>
                  <div className="space-y-4">
                    <Link
                      href="/about"
                      className="block text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      About Ashentrix
                    </Link>
                    <Link
                      href="/about/vision-mission"
                      className="block text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      Vision & Mission
                    </Link>
                    <Link
                      href="/leadership"
                      className="block text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      Leadership
                    </Link>
                    <Link
                      href="/about/awards"
                      className="block text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      Awards & Recognition
                    </Link>
                    <Link
                      href="/about/news-media"
                      className="block text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      News & Media
                    </Link>
                    <Link
                      href="/about/investors-partners"
                      className="block text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      Investors & Partners
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Company
                  </h3>
                  <div className="space-y-4">
                    <Link
                      href="/careers"
                      className="block text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      Careers
                    </Link>
                    <Link
                      href="/sustainability"
                      className="block text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      Sustainability
                    </Link>
                    <Link
                      href="/contact"
                      className="block text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Quick Facts
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium">Founded:</span> 2025
                    </div>
                    <div>
                      <span className="font-medium">Headquarters:</span> Delhi
                      NCR, India
                    </div>
                    <div>
                      <span className="font-medium">Team:</span> Growing
                    </div>
                    <div>
                      <span className="font-medium">Focus:</span> New
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Core Industries
                  </h3>
                  <div className="space-y-3 text-sm">
                    <Link
                      href="/industries/insurance"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Insurance
                    </Link>
                    <Link
                      href="/industries/healthcare"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Healthcare
                    </Link>
                    <Link
                      href="/industries/telecom"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Telecom
                    </Link>
                    <Link
                      href="/industries/ecommerce"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      E-commerce
                    </Link>
                    <Link
                      href="/industries/finance"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Finance & Accounting
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Specialized Sectors
                  </h3>
                  <div className="space-y-3 text-sm">
                    <Link
                      href="/industries/logistics"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Logistics & Supply Chain
                    </Link>
                    <Link
                      href="/industries/travel"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Travel, Hospitality & Cargo
                    </Link>
                    <Link
                      href="/industries/entertainment"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Entertainment & Social Platforms
                    </Link>
                    <Link
                      href="/industries/it-hardware"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      IT, Hardware & IoT
                    </Link>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Industry Expertise
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Deep domain knowledge across 9+ industries, helping
                    businesses transform and scale operations efficiently.
                  </p>
                  <div className="space-y-2 text-xs text-gray-500">
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Join Our Team
                  </h3>
                  <div className="space-y-3 text-sm">
                    <Link
                      href="/careers/life-at-ashentrix"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Life at Ashentrix
                    </Link>
                    <Link
                      href="/careers/current-openings"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Current Openings
                    </Link>
                    <Link
                      href="/careers/internship"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Internship Programs
                    </Link>
                    <Link
                      href="/careers/apply"
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
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

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    We&apos;re Hiring!
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Be part of our founding team as we build the future of
                    business process outsourcing from Delhi NCR.
                  </p>
                  <Link
                    href="/careers/apply"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
                  >
                    View Open Positions →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Full Screen Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="relative h-full bg-gradient-to-b from-[#0a0a0a] via-[#1a1625] to-[#280b57] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div className="flex items-center">
                <Image
                  src="/ashentrix.jpeg"
                  alt="Ashentrix Solutions"
                  width={140}
                  height={45}
                  className="h-10 w-auto"
                />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-gray-300 p-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-6 space-y-2">
              {/* Home */}
              <Link
                href="/"
                className="block text-white text-lg font-medium py-4 px-4 hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* About Section */}
              <div>
                <button
                  className="w-full flex items-center justify-between text-white text-lg font-medium py-4 px-4 hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "about" ? null : "about"
                    )
                  }
                >
                  About
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      activeDropdown === "about" ? "rotate-180" : ""
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
                {activeDropdown === "about" && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link
                      href="/about"
                      className="block text-gray-300 text-base py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About Ashentrix
                    </Link>
                    <Link
                      href="/leadership"
                      className="block text-gray-300 text-base py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Leadership
                    </Link>
                    <Link
                      href="/about/vision-mission"
                      className="block text-gray-300 text-base py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Vision & Mission
                    </Link>
                  </div>
                )}
              </div>

              {/* Industries Section */}
              <div>
                <button
                  className="w-full flex items-center justify-between text-white text-lg font-medium py-4 px-4 hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "industries" ? null : "industries"
                    )
                  }
                >
                  Industries
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      activeDropdown === "industries" ? "rotate-180" : ""
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
                {activeDropdown === "industries" && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link
                      href="/industries"
                      className="block text-gray-300 text-base py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      All Industries
                    </Link>
                    <Link
                      href="/industries/insurance"
                      className="block text-gray-300 text-base py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Insurance
                    </Link>
                    <Link
                      href="/industries/healthcare"
                      className="block text-gray-300 text-base py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Healthcare
                    </Link>
                    <Link
                      href="/industries/telecom"
                      className="block text-gray-300 text-base py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Telecom
                    </Link>
                    <Link
                      href="/industries/finance"
                      className="block text-gray-300 text-base py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Banking & Finance
                    </Link>
                    <Link
                      href="/industries/ecommerce"
                      className="block text-gray-300 text-base py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      E-commerce & Retail
                    </Link>
                  </div>
                )}
              </div>

              {/* Services Section */}
              <div>
                <button
                  className="w-full flex items-center justify-between text-white text-lg font-medium py-4 px-4 hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "services" ? null : "services"
                    )
                  }
                >
                  Services
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      activeDropdown === "services" ? "rotate-180" : ""
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
                {activeDropdown === "services" && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link
                      href="/services"
                      className="block text-gray-300 text-base py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      All Services
                    </Link>
                    <Link
                      href="/services/customer-support"
                      className="block text-gray-300 text-base py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Customer Support
                    </Link>
                    <Link
                      href="/services/technical-support"
                      className="block text-gray-300 text-base py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Technical Support
                    </Link>
                    <Link
                      href="/services/back-office"
                      className="block text-gray-300 text-base py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Back Office Operations
                    </Link>
                    <Link
                      href="/services/data-processing"
                      className="block text-gray-300 text-base py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Data Processing
                    </Link>
                  </div>
                )}
              </div>

              {/* Careers Section */}
              <div>
                <button
                  className="w-full flex items-center justify-between text-white text-lg font-medium py-4 px-4 hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "careers" ? null : "careers"
                    )
                  }
                >
                  Careers
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      activeDropdown === "careers" ? "rotate-180" : ""
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
                {activeDropdown === "careers" && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link
                      href="/careers"
                      className="block text-gray-300 text-base py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Job Opportunities
                    </Link>
                    <Link
                      href="/careers/culture"
                      className="block text-gray-300 text-base py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Company Culture
                    </Link>
                    <Link
                      href="/careers/apply"
                      className="block text-gray-300 text-base py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Apply Now
                    </Link>
                  </div>
                )}
              </div>

              {/* Contact */}
              <Link
                href="/contact"
                className="block text-white text-lg font-medium py-4 px-4 hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Divider */}
              <div className="border-t border-gray-600 my-6"></div>

              {/* Additional Links */}
              <Link
                href="/insights"
                className="block text-gray-300 text-base py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Insights
              </Link>

              {/* WhatsApp */}
              <Link
                href="https://wa.me/919711179821"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-green-400 text-base py-3 px-4 hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63" />
                </svg>
                Connect on WhatsApp
              </Link>

              {/* Sign In */}
              <Link
                href="#"
                className="block text-gray-300 text-base py-3 px-4 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            </nav>

            {/* Footer */}
            <div className="p-6 border-t border-gray-700 mt-8">
              <p className="text-gray-400 text-sm text-center">
                © 2025 Ashentrix Solutions. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
