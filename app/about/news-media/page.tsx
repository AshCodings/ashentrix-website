export default function NewsMediaPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* News & Media Hero */}
      <section className="bg-linear-to-br from-[#1a1625] to-[#280b57] py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <h1 className="text-5xl font-black text-white mb-6">
              News & Media
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest news, press releases, and media
              coverage about Ashentrix and our industry leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Latest News
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Recent announcements, company updates, and industry insights from
              Ashentrix.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-linear-to-br from-[#280b57]/5 to-[#280b57]/10 rounded-2xl overflow-hidden">
              <div className="p-8">
                <div className="text-sm text-[#280b57] font-semibold mb-4">
                  October 25, 2025
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Ashentrix Expands Global Operations with New European Hub
                </h3>
                <p className="text-gray-700 mb-6">
                  Strategic expansion into European markets to better serve our
                  growing international client base with localized expertise and
                  24/7 support.
                </p>
                <button className="text-[#280b57] font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>

            <div className="bg-linear-to-br from-[#280b57]/5 to-[#280b57]/10 rounded-2xl overflow-hidden">
              <div className="p-8">
                <div className="text-sm text-[#280b57] font-semibold mb-4">
                  October 20, 2025
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  AI-Powered Customer Support Platform Launches
                </h3>
                <p className="text-gray-700 mb-6">
                  Revolutionary AI integration enhances customer support
                  capabilities, delivering faster resolution times and improved
                  satisfaction rates.
                </p>
                <button className="text-[#280b57] font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>

            <div className="bg-linear-to-br from-[#280b57]/5 to-[#280b57]/10 rounded-2xl overflow-hidden">
              <div className="p-8">
                <div className="text-sm text-[#280b57] font-semibold mb-4">
                  October 15, 2025
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Partnership with Leading Technology Companies
                </h3>
                <p className="text-gray-700 mb-6">
                  Strategic partnerships strengthen our technology stack and
                  expand service offerings for enhanced client value delivery.
                </p>
                <button className="text-[#280b57] font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Press Releases
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Official press releases and corporate announcements from
              Ashentrix.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="text-sm text-[#280b57] font-semibold mb-2">
                    Press Release | October 30, 2025
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Ashentrix Reports Record Q3 Growth and Client Expansion
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Company achieves 45% year-over-year growth driven by
                    increased demand for digital transformation services and
                    expansion into new market segments.
                  </p>
                  <button className="text-[#280b57] font-semibold hover:underline">
                    Download Full Release →
                  </button>
                </div>
                <div className="lg:w-48">
                  <div className="bg-linear-to-br from-[#280b57]/10 to-[#280b57]/20 p-6 rounded-xl">
                    <div className="text-3xl font-bold text-[#280b57] mb-2">
                      45%
                    </div>
                    <div className="text-sm text-gray-700">YoY Growth</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="text-sm text-[#280b57] font-semibold mb-2">
                    Press Release | September 28, 2025
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    New Sustainability Initiative Launches Across Global
                    Operations
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Comprehensive environmental sustainability program aims to
                    achieve carbon neutrality by 2027 through innovative green
                    technologies and practices.
                  </p>
                  <button className="text-[#280b57] font-semibold hover:underline">
                    Download Full Release →
                  </button>
                </div>
                <div className="lg:w-48">
                  <div className="bg-linear-to-br from-green-100 to-green-200 p-6 rounded-xl">
                    <div className="text-3xl font-bold text-green-700 mb-2">
                      2027
                    </div>
                    <div className="text-sm text-gray-700">
                      Carbon Neutral Goal
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Media Coverage
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Featured stories and mentions in leading industry publications and
              media outlets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-linear-to-br from-[#280b57]/5 to-[#280b57]/10 rounded-2xl">
              <div className="mb-6">
                <div className="text-lg font-semibold text-gray-900">
                  Forbes
                </div>
                <div className="text-sm text-gray-600">October 2025</div>
              </div>
              <p className="text-gray-700 mb-4">
                &quot;Top 50 Companies Revolutionizing Business Process
                Outsourcing&quot;
              </p>
              <button className="text-[#280b57] font-semibold hover:underline text-sm">
                View Article →
              </button>
            </div>

            <div className="text-center p-8 bg-linear-to-br from-[#280b57]/5 to-[#280b57]/10 rounded-2xl">
              <div className="mb-6">
                <div className="text-lg font-semibold text-gray-900">
                  TechCrunch
                </div>
                <div className="text-sm text-gray-600">September 2025</div>
              </div>
              <p className="text-gray-700 mb-4">
                &quot;AI Integration in Customer Support: How Ashentrix Leads
                the Way&quot;
              </p>
              <button className="text-[#280b57] font-semibold hover:underline text-sm">
                View Article →
              </button>
            </div>

            <div className="text-center p-8 bg-linear-to-br from-[#280b57]/5 to-[#280b57]/10 rounded-2xl">
              <div className="mb-6">
                <div className="text-lg font-semibold text-gray-900">
                  Harvard Business Review
                </div>
                <div className="text-sm text-gray-600">August 2025</div>
              </div>
              <p className="text-gray-700 mb-4">
                &quot;The Future of Work: Digital Transformation in BPO
                Services&quot;
              </p>
              <button className="text-[#280b57] font-semibold hover:underline text-sm">
                View Article →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Media Contact
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            For press inquiries, media kits, or interview requests, please
            contact our media relations team.
          </p>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Press Inquiries
                </h3>
                <p className="text-gray-700 mb-2">Email: press@ashentrix.com</p>
                <p className="text-gray-700 mb-2">Phone: +1 (888) 555-PRESS</p>
                <p className="text-gray-700">
                  Available 24/7 for urgent media requests
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Media Resources
                </h3>
                <div className="space-y-2">
                  <button className="block text-[#280b57] font-semibold hover:underline">
                    Download Media Kit →
                  </button>
                  <button className="block text-[#280b57] font-semibold hover:underline">
                    High-Resolution Logos →
                  </button>
                  <button className="block text-[#280b57] font-semibold hover:underline">
                    Executive Bios →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
