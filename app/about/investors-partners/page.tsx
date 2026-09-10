export default function InvestorsPartnersPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Investors & Partners Hero */}
      <section className="bg-linear-to-br from-[#1a1625] to-[#280b57] py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <h1 className="text-5xl font-black text-white mb-6">
              Investors & Partners
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building strategic relationships that drive innovation, growth,
              and exceptional value for our stakeholders and clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Investor Relations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Investor Relations
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Transparent communication and strong financial performance drive
              our commitment to delivering value to our investors.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-linear-to-br from-[#280b57]/5 to-[#280b57]/10 rounded-2xl">
              <div className="text-4xl font-bold text-[#280b57] mb-4">
                $2.8B
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Annual Revenue
              </h3>
              <p className="text-gray-700">
                Consistent growth trajectory with strong financial fundamentals
              </p>
            </div>

            <div className="text-center p-8 bg-linear-to-br from-[#280b57]/5 to-[#280b57]/10 rounded-2xl">
              <div className="text-4xl font-bold text-[#280b57] mb-4">45%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                YoY Growth
              </h3>
              <p className="text-gray-700">
                Accelerating growth driven by digital transformation demand
              </p>
            </div>

            <div className="text-center p-8 bg-linear-to-br from-[#280b57]/5 to-[#280b57]/10 rounded-2xl">
              <div className="text-4xl font-bold text-[#280b57] mb-4">New</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Market Entry
              </h3>
              <p className="text-gray-700">
                Building partnerships for future growth opportunities
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Financial Highlights
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="text-gray-700">Market Cap</span>
                  <span className="font-semibold text-gray-900">$12.5B</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="text-gray-700">EBITDA Margin</span>
                  <span className="font-semibold text-gray-900">28.5%</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="text-gray-700">Return on Equity</span>
                  <span className="font-semibold text-gray-900">32.1%</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="text-gray-700">Debt-to-Equity</span>
                  <span className="font-semibold text-gray-900">0.15</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Investor Resources
              </h3>
              <div className="space-y-4">
                <button className="w-full text-left p-4 bg-linear-to-br from-[#280b57]/5 to-[#280b57]/10 rounded-lg hover:from-[#280b57]/10 hover:to-[#280b57]/20 transition-colors">
                  <div className="font-semibold text-gray-900 mb-2">
                    Annual Report 2024
                  </div>
                  <div className="text-sm text-gray-600">
                    Comprehensive financial and operational overview
                  </div>
                </button>
                <button className="w-full text-left p-4 bg-linear-to-br from-[#280b57]/5 to-[#280b57]/10 rounded-lg hover:from-[#280b57]/10 hover:to-[#280b57]/20 transition-colors">
                  <div className="font-semibold text-gray-900 mb-2">
                    Quarterly Earnings
                  </div>
                  <div className="text-sm text-gray-600">
                    Latest financial results and investor call recordings
                  </div>
                </button>
                <button className="w-full text-left p-4 bg-linear-to-br from-[#280b57]/5 to-[#280b57]/10 rounded-lg hover:from-[#280b57]/10 hover:to-[#280b57]/20 transition-colors">
                  <div className="font-semibold text-gray-900 mb-2">
                    SEC Filings
                  </div>
                  <div className="text-sm text-gray-600">
                    10-K, 10-Q, 8-K, and proxy statements
                  </div>
                </button>
                <button className="w-full text-left p-4 bg-linear-to-br from-[#280b57]/5 to-[#280b57]/10 rounded-lg hover:from-[#280b57]/10 hover:to-[#280b57]/20 transition-colors">
                  <div className="font-semibold text-gray-900 mb-2">
                    ESG Report
                  </div>
                  <div className="text-sm text-gray-600">
                    Environmental, Social, and Governance initiatives
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Strategic Partners
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Collaborating with industry leaders to deliver innovative
              solutions and enhanced value to our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#280b57] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Technology Partners
              </h3>
              <p className="text-gray-700">
                Leading cloud platforms, AI/ML providers, and enterprise
                software companies enabling cutting-edge solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#280b57] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Industry Partners
              </h3>
              <p className="text-gray-700">
                Strategic alliances with domain experts across banking,
                healthcare, retail, and manufacturing sectors.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#280b57] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
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
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Global Partners
              </h3>
              <p className="text-gray-700">
                International partnerships providing local market expertise and
                global service delivery capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Partnership Benefits
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Why leading organizations choose to partner with Ashentrix for
              mutual growth and success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-[#280b57] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Accelerated Innovation
                    </h3>
                    <p className="text-gray-700">
                      Joint R&D initiatives and shared technology roadmaps to
                      stay ahead of market trends.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-[#280b57] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Market Expansion
                    </h3>
                    <p className="text-gray-700">
                      Access to new markets, customer segments, and geographic
                      regions through strategic partnerships.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-[#280b57] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Risk Mitigation
                    </h3>
                    <p className="text-gray-700">
                      Shared expertise and resources to reduce operational risks
                      and ensure business continuity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-[#280b57]/5 to-[#280b57]/10 p-12 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Become a Partner
              </h3>
              <p className="text-gray-700 mb-8">
                Join our ecosystem of partners and unlock new opportunities for
                growth, innovation, and market leadership.
              </p>
              <div className="space-y-4">
                <button className="w-full bg-[#280b57] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1f0944] transition-colors">
                  Technology Partnership
                </button>
                <button className="w-full bg-white text-[#280b57] border-2 border-[#280b57] px-6 py-3 rounded-lg font-semibold hover:bg-[#280b57] hover:text-white transition-colors">
                  Channel Partnership
                </button>
                <button className="w-full bg-white text-[#280b57] border-2 border-[#280b57] px-6 py-3 rounded-lg font-semibold hover:bg-[#280b57] hover:text-white transition-colors">
                  Strategic Alliance
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Investor & Partner Contact
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Connect with our investor relations and partnership teams for more
            information.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Investor Relations
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>Email: service@ashentrix.com</p>
                <p>Phone: +91-971 117 9821</p>
                <p>
                  Address: Delhi NCR
                  <br />
                  India
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Partnership Inquiries
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>Email: service@ashentrix.com</p>
                <p>Phone: +91-971 117 9821</p>
                <p>
                  Address: Delhi NCR
                  <br />
                  India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
