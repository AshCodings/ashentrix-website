import Link from "next/link";

export default function EntertainmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#280b57] to-[#1a0a3e] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Entertainment & Media Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Specialized BPO services for entertainment and media companies,
              from content management to audience support, helping you deliver
              engaging experiences and streamline creative operations.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#280b57] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/industries"
                className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-[#280b57] transition-colors"
              >
                All Industries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Entertainment Industry Excellence
              </h2>
              <p className="text-gray-600 mb-6">
                Our entertainment-focused services support the entire media
                ecosystem. From content operations to fan engagement, we help
                entertainment companies enhance audience experiences and
                optimize creative workflows.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Content Management & Curation
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Fan Support & Community Management
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Event Coordination & Ticketing
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Digital Marketing Support
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">
                Entertainment Operations Visualization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Entertainment Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Entertainment BPO Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive support services for entertainment and media
              operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🎬</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Content Management</h3>
              <p className="text-gray-600">
                Digital content curation, metadata management, and distribution
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🎭</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Event Support</h3>
              <p className="text-gray-600">
                Event planning, coordination, and ticket management services
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Community Management
              </h3>
              <p className="text-gray-600">
                Social media management and fan community engagement
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Fan Support</h3>
              <p className="text-gray-600">
                Fan inquiries, merchandise support, and customer service
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Analytics & Reporting
              </h3>
              <p className="text-gray-600">
                Audience analytics, engagement metrics, and performance
                reporting
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🎟️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Ticketing Operations
              </h3>
              <p className="text-gray-600">
                Ticket sales management, booking support, and event logistics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Entertainment Segments */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Entertainment Segments We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized expertise across various entertainment and media
              sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                Streaming Platforms
              </h3>
              <p className="text-gray-600 text-sm">
                Content management and subscriber support services
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Music Industry</h3>
              <p className="text-gray-600 text-sm">
                Artist management and music distribution support
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Gaming Companies</h3>
              <p className="text-gray-600 text-sm">
                Player support and community management services
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Film & TV</h3>
              <p className="text-gray-600 text-sm">
                Production support and distribution coordination
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                Sports Organizations
              </h3>
              <p className="text-gray-600 text-sm">
                Fan engagement and event management support
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Live Events</h3>
              <p className="text-gray-600 text-sm">
                Concert and event coordination services
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Digital Media</h3>
              <p className="text-gray-600 text-sm">
                Online content and social media management
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Publishing</h3>
              <p className="text-gray-600 text-sm">
                Editorial support and publication management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Lifecycle */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Content Lifecycle Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Supporting entertainment content from creation to audience
              engagement
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Creation</h3>
              <p className="text-gray-600">
                Content planning and production coordination support
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Curation</h3>
              <p className="text-gray-600">
                Content organization, tagging, and metadata management
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Distribution</h3>
              <p className="text-gray-600">
                Multi-platform content distribution and scheduling
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Engagement</h3>
              <p className="text-gray-600">
                Audience interaction and community management
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold mb-2">Analytics</h3>
              <p className="text-gray-600">
                Performance tracking and audience insights analysis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Entertainment Technology Integration
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Seamless integration with leading entertainment and media
              platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  🎥
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">CMS Platforms</h3>
                  <p className="text-gray-600">
                    Content Management System integration for digital assets.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  📱
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Social Media APIs
                  </h3>
                  <p className="text-gray-600">
                    Social platform integration for community management.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  🎟️
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Ticketing Systems
                  </h3>
                  <p className="text-gray-600">
                    Event ticketing platform integration and management.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  📊
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Analytics Tools
                  </h3>
                  <p className="text-gray-600">
                    Audience analytics and engagement tracking systems.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  🎮
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Gaming Platforms
                  </h3>
                  <p className="text-gray-600">
                    Gaming platform integration for player support services.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  📺
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Streaming Services
                  </h3>
                  <p className="text-gray-600">
                    Video streaming platform integration and content delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Entertainment Service Performance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">95%</div>
              <h3 className="text-lg font-semibold mb-2">Fan Satisfaction</h3>
              <p className="text-gray-600">
                Fan and audience satisfaction rate across all touchpoints
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">5min</div>
              <h3 className="text-lg font-semibold mb-2">Response Time</h3>
              <p className="text-gray-600">
                Average response time for fan inquiries and support
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">25%</div>
              <h3 className="text-lg font-semibold mb-2">
                Engagement Increase
              </h3>
              <p className="text-gray-600">
                Average increase in audience engagement through our services
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">99%</div>
              <h3 className="text-lg font-semibold mb-2">Content Accuracy</h3>
              <p className="text-gray-600">
                Accuracy rate for content management and distribution
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Amplify Your Entertainment Operations
          </h2>
          <p className="text-gray-600 mb-8">
            Partner with us to enhance audience experiences and streamline your
            entertainment and media operations.
          </p>
          <Link
            href="/contact"
            className="bg-[#280b57] text-white px-8 py-4 font-semibold hover:bg-[#280b57]/90 transition-colors text-lg"
          >
            Start Your Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
