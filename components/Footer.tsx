"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Top Section - Brand and Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-8 lg:mb-10 pb-8 lg:pb-10 border-b border-gray-700">
          <div className="text-center lg:text-left">
            <h3 className="text-3xl sm:text-4xl font-black text-white italic mb-3 sm:mb-4">
              Ashentrix
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 max-w-md mx-auto lg:mx-0">
              Leading the future of business process outsourcing with
              innovation, excellence, and transformative solutions.
            </p>
          </div>

          <div className="text-center lg:text-left">
            <h4 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
              Stay Updated
            </h4>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
              Subscribe to our newsletter for the latest insights, case studies,
              and industry trends.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#280b57] text-white placeholder-gray-500 text-sm sm:text-base"
              />
              <button className="bg-[#280b57] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-[#1f0944] transition-all whitespace-nowrap text-sm sm:text-base">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Links Section - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-8 lg:mb-12">
          {/* About */}
          <div className="mb-6 sm:mb-0">
            <h4 className="font-bold text-base sm:text-lg mb-4 text-white">
              About
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#9b87f5] transition-colors"
                >
                  About Ashentrix
                </Link>
              </li>
              <li>
                <Link
                  href="/about/vision-mission"
                  className="hover:text-[#9b87f5] transition-colors"
                >
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/leadership"
                  className="hover:text-[#9b87f5] transition-colors"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/about/awards"
                  className="hover:text-[#9b87f5] transition-colors"
                >
                  Awards & Recognition
                </Link>
              </li>
              <li>
                <Link
                  href="/about/news-media"
                  className="hover:text-[#9b87f5] transition-colors"
                >
                  News & Media
                </Link>
              </li>
              <li>
                <Link
                  href="/about/investors-partners"
                  className="hover:text-[#9b87f5] transition-colors"
                >
                  Investors & Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Careers */}
          <div className="mb-6 sm:mb-0">
            <h4 className="font-bold text-base sm:text-lg mb-4 text-white">
              Careers
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href="/careers/life-at-ashentrix"
                  className="hover:text-[#9b87f5] transition-colors"
                >
                  Life at Ashentrix
                </Link>
              </li>
              <li>
                <Link
                  href="/careers/current-openings"
                  className="hover:text-[#9b87f5] transition-colors"
                >
                  Current Openings
                </Link>
              </li>
              <li>
                <Link
                  href="/careers/internship"
                  className="hover:text-[#9b87f5] transition-colors"
                >
                  Internship Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/careers/apply"
                  className="hover:text-[#9b87f5] transition-colors"
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mb-6 sm:mb-0">
            <h4 className="font-bold text-base sm:text-lg mb-4 text-white">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#9b87f5] transition-colors"
                >
                  Contact Form
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/locations"
                  className="hover:text-[#9b87f5] transition-colors"
                >
                  Office Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/partner"
                  className="hover:text-[#9b87f5] transition-colors"
                >
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="mb-6 sm:mb-0">
            <h4 className="font-bold text-base sm:text-lg mb-4 text-white">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-[#9b87f5] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/data_security_compliance"
                  className="hover:text-[#9b87f5] transition-colors"
                >
                  Data Security & Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/legal"
                  className="hover:text-[#9b87f5] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="hover:text-[#9b87f5] transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Premium Information Card (Distinct Corporate Layout) */}
        <div className="bg-[#0F172A]/80 border border-gray-700/50 rounded-2xl p-5 sm:p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Headquarters */}
            <div className="flex gap-4 items-start">
              {/* Map Icon with Hover Effect */}
              <a
                href="https://maps.app.goo.gl/dUGQXaC57fm5eXQi9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/80 p-3 rounded-lg text-gray-300 shrink-0 hover:bg-[#280b57] hover:text-white transition-all hover:scale-105 group"
                aria-label="View Ashentrix Solutions on Google Maps"
              >
                <svg
                  className="w-5 h-5 group-hover:animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </a>

              <div>
                <h4 className="font-bold text-white mb-1.5">Headquarters</h4>

                {/* Clickable Address Text */}
                <p className="text-gray-400 text-sm leading-relaxed mb-2">
                  <a
                    href="https://maps.app.goo.gl/dUGQXaC57fm5eXQi9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#9b87f5] transition-colors"
                  >
                    A-22, 1st Floor, Sector 4, Noida,
                    <br />
                    Gautam Buddha Nagar, Uttar Pradesh,
                    <br />
                    India - 201301
                  </a>
                </p>

                {/* Website Link */}
                <a
                  href="https://www.ashentrix.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-white hover:text-[#9b87f5] transition-colors"
                >
                  www.ashentrix.com
                </a>
              </div>
            </div>

            {/* Reach Us */}
            <div className="flex gap-4 items-start">
              <div className="bg-gray-800/80 p-3 rounded-lg text-gray-300 shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-white mb-1.5">Reach us</h4>
                <div className="space-y-3 text-sm text-gray-400">
                  {/* Email */}
                  <p className="flex items-center gap-2.5">
                    <svg
                      className="w-5 h-5 text-gray-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href="mailto:service@ashentrix.com"
                      className="text-white hover:text-[#9b87f5] transition-colors"
                    >
                      service@ashentrix.com
                    </a>
                  </p>

                  {/* Phone */}
                  <p className="flex items-center gap-2.5">
                    <svg
                      className="w-5 h-5 text-gray-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a
                      href="tel:+919711179821"
                      className="text-white hover:text-[#9b87f5] transition-colors"
                    >
                      +91-971 117 9821
                    </a>
                  </p>

                  {/* WhatsApp */}
                  <p className="flex items-center gap-2.5">
                    <svg
                      className="w-5 h-5 text-gray-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63" />
                    </svg>
                    <a
                      href="https://wa.me/919711179821"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#9b87f5] transition-colors"
                    >
                      +91-971 117 9821
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex gap-4 items-start">
              <div className="bg-gray-800/80 p-3 rounded-lg text-gray-300 shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-white mb-1.5">Business Hours</h4>
                <div className="space-y-1.5 text-sm text-gray-400">
                  <p>
                    Mon to Sat:{" "}
                    <span className="text-white">10 AM to 8 PM</span>
                  </p>
                  <p>
                    Sun: <span className="text-white">Closed</span>
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 bg-[#280b57]/30 text-purple-200 px-3 py-1 rounded-full text-xs font-medium border border-[#280b57]/50">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    24/7 Support Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-6 text-xs sm:text-sm text-gray-400 pt-8 mt-4 border-t border-gray-800">
          {/* Copyright text - Goes Bottom on Mobile, Left on Desktop */}
          <p className="text-center lg:text-left">
            © 2026 Ashentrix. All rights reserved worldwide.
          </p>

          {/* Social Icons - Goes Top on Mobile, Right on Desktop */}
          <div className="flex gap-3 sm:gap-4 justify-center lg:justify-end">
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
      </div>
    </footer>
  );
}
