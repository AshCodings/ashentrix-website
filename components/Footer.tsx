"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Top Section - Brand and Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-16 pb-12 lg:pb-16 border-b border-gray-700">
          <div className="text-center lg:text-left">
            <h3 className="text-3xl sm:text-4xl font-black text-white italic mb-4 sm:mb-6">
              Ashentrix
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
              Leading the future of business process outsourcing with
              innovation, excellence, and transformative solutions.
            </p>
            <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/company/ashentrix/"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#280b57] transition-all hover:scale-110"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://x.com/AshentrixS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#280b57] transition-all hover:scale-110"
                aria-label="Follow us on X (formerly Twitter)"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1G9RXYRy3V/"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#280b57] transition-all hover:scale-110"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ashentrixsolutions?stkn=MTBuMzZvc2UwaWo0cQ=="
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#280b57] transition-all hover:scale-110"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h4 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              Stay Updated
            </h4>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Subscribe to our newsletter for the latest insights, case studies,
              and industry trends.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#280b57] text-white placeholder-gray-500 text-sm sm:text-base"
              />
              <button className="bg-[#280b57] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#1f0944] transition-all whitespace-nowrap text-sm sm:text-base">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Links Section - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {/* Services */}
          <div className="mb-8 sm:mb-0">
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-white">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-400 max-h-48 overflow-y-auto">
              <li>
                <Link
                  href="/services/customer-support"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Customer Support (Voice / Chat / Email)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/technical-support"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Technical Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services/analytics-reporting"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Analytics & Reporting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/collections"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Collections Process
                </Link>
              </li>
              <li>
                <Link
                  href="/services/recruitment"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Recruitment & Talent Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services/back-office"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Back Office Operations
                </Link>
              </li>
              <li>
                <Link
                  href="/services/data-processing"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Data Processing & Data Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/operations-management"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Operations Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/graphic-design"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Graphic Design & Printing Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-development"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Apps and Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/technical-helpdesk"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Technical Helpdesk Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ticketing-management"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Ticketing Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="mb-8 sm:mb-0">
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-white">
              Industries
            </h4>
            <ul className="space-y-2 text-sm text-gray-400 max-h-48 overflow-y-auto">
              <li>
                <Link
                  href="/industries/insurance"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/telecom"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Telecom
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/healthcare"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/automobiles"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Automobiles
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/ecommerce"
                  className="hover:text-[#280b57] transition-colors"
                >
                  E-commerce & Retail
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/it-software"
                  className="hover:text-[#280b57] transition-colors"
                >
                  IT & Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/education"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/hardware-iot"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Hardware & IoT
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/entertainment"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Entertainment
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/real-estate"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Real Estate
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/social-platforms"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Social Platforms
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/finance"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Finance & Accounting
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/logistics"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Logistics & Supply Chain
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/banking"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Banking
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/travel-hospitality"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Travel & Hospitality
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/government"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Govt. & Public Sector
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/energy-utility"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Energy & Utility
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/media-communications"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Media & Communications
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="mb-8 sm:mb-0">
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-white">
              About
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#280b57] transition-colors"
                >
                  About Ashentrix
                </Link>
              </li>
              <li>
                <Link
                  href="/about/vision-mission"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/leadership"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/about/awards"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Awards & Recognition
                </Link>
              </li>
              <li>
                <Link
                  href="/about/news-media"
                  className="hover:text-[#280b57] transition-colors"
                >
                  News & Media
                </Link>
              </li>
              <li>
                <Link
                  href="/about/investors-partners"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Investors & Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="mb-8 sm:mb-0">
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-white">
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href="/resources/whitepapers"
                  className="hover:text-[#280b57] transition-colors"
                >
                  White Papers
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/case-studies"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/webinars"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Webinars
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/downloads"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Downloads
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/roi-calculator"
                  className="hover:text-[#280b57] transition-colors"
                >
                  ROI Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/blog"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="mb-8 sm:mb-0">
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-white">
              Support
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#280b57] transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#280b57] transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#280b57] transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#280b57] transition-colors">
                  System Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#280b57] transition-colors">
                  Community Forum
                </a>
              </li>
            </ul>
          </div>

          {/* Careers */}
          <div className="mb-8 sm:mb-0">
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-white">
              Careers
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 mb-6 sm:mb-8">
              <li>
                <Link
                  href="/careers/life-at-ashentrix"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Life at Ashentrix
                </Link>
              </li>
              <li>
                <Link
                  href="/careers/current-openings"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Current Openings
                </Link>
              </li>
              <li>
                <Link
                  href="/careers/internship"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Internship Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/careers/apply"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mb-8 sm:mb-0">
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-white">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Contact Form
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/locations"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Office Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/partner"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="mb-8 sm:mb-0">
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-white">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href="/legal/privacy"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/security"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Data Security & Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/terms"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/disclaimer"
                  className="hover:text-[#280b57] transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 lg:mb-16 pb-12 lg:pb-16 border-b border-gray-700">
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-white">
              Headquarters
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              A-22, 1st Floor, Sector 4, Noida,
              <br />
              Gautam Buddha Nagar, Uttar Pradesh,
              <br />
              India - 201301
              <br />
              <br />
              <a
                href="https://www.ashentrix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                www.ashentrix.com
              </a>
            </p>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-white">
              Reach us
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Email:{" "}
              <a
                href="mailto:service@ashentrix.com"
                className="text-white hover:text-gray-300 transition-colors break-all"
              >
                service@ashentrix.com
              </a>
              <br />
              Phone:{" "}
              <a
                href="tel:+919711179821"
                className="text-white hover:text-gray-300 transition-colors"
              >
                +91-971 117 9821
              </a>
              <br />
              WhatsApp:{" "}
              <a
                href="https://wa.me/919711179821"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                +91-971 117 9821
              </a>
            </p>
          </div>
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-white">
              Business Hours
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mon to Sat: 10 AM to 6 PM
              <br />
              Sun: Closed
              <br />
              <span className="text-white">24/7 Support Available</span>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6 text-xs sm:text-sm text-gray-400">
          <p className="text-center lg:text-left">
            © 2025 Ashentrix. All rights reserved worldwide.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-end">
            <Link
              href="#"
              className="hover:text-[#280b57] transition-colors whitespace-nowrap"
            >
              Investors
            </Link>
            <Link
              href="#"
              className="hover:text-[#280b57] transition-colors whitespace-nowrap"
            >
              Partners
            </Link>
            <Link
              href="#"
              className="hover:text-[#280b57] transition-colors whitespace-nowrap"
            >
              Global Clients
            </Link>
            <Link
              href="#"
              className="hover:text-[#280b57] transition-colors whitespace-nowrap"
            >
              Legal
            </Link>
            <Link
              href="/privacy"
              className="hover:text-[#280b57] transition-colors whitespace-nowrap"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-[#280b57] transition-colors whitespace-nowrap"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="hover:text-[#280b57] transition-colors whitespace-nowrap"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
