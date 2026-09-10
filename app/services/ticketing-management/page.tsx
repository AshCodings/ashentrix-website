import Link from "next/link";

export default function TicketingManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#280b57] to-[#1a0a3e] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Ticketing Management Systems
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Streamlined ticketing and issue management solutions that ensure
              efficient tracking, prioritization, and resolution of customer
              requests and support issues.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#280b57] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-[#280b57] transition-colors"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Advanced Ticket Management
              </h2>
              <p className="text-gray-600 mb-6">
                Our comprehensive ticketing management system ensures no request
                goes unnoticed. From initial submission to final resolution, we
                maintain complete visibility and control over your support
                workflow.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Automated Ticket Routing
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Priority-Based Queue Management
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Real-Time Status Tracking
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Performance Analytics & Reporting
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">
                Ticketing Management Visualization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ticketing Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive ticketing management capabilities for efficient
              support operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🎫</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Smart Ticket Creation
              </h3>
              <p className="text-gray-600">
                Automated ticket creation from multiple channels with
                intelligent categorization
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Priority Management
              </h3>
              <p className="text-gray-600">
                Automated priority assignment based on urgency and business
                impact
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Workflow Automation
              </h3>
              <p className="text-gray-600">
                Streamlined workflows with automated escalation and routing
                rules
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Real-Time Dashboard
              </h3>
              <p className="text-gray-600">
                Comprehensive visibility into ticket status, agent performance,
                and trends
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">System Integration</h3>
              <p className="text-gray-600">
                Seamless integration with existing CRM and business applications
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Analytics & Reports
              </h3>
              <p className="text-gray-600">
                Detailed reporting on resolution times, satisfaction, and
                performance metrics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Ticketing Management?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Improved Efficiency
                  </h3>
                  <p className="text-gray-600">
                    Reduce resolution times by up to 40% with automated
                    workflows and intelligent routing.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Enhanced Visibility
                  </h3>
                  <p className="text-gray-600">
                    Complete transparency into support operations with real-time
                    dashboards and reporting.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Better Customer Experience
                  </h3>
                  <p className="text-gray-600">
                    Faster response times and consistent service quality improve
                    customer satisfaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Scalable Solution
                  </h3>
                  <p className="text-gray-600">
                    Easily scale operations as your business grows without
                    compromising service quality.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold text-lg">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Cost Optimization
                  </h3>
                  <p className="text-gray-600">
                    Reduce operational costs through automation and efficient
                    resource allocation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold text-lg">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Compliance Ready
                  </h3>
                  <p className="text-gray-600">
                    Built-in compliance features ensure adherence to industry
                    standards and regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Transform Your Support Operations
          </h2>
          <p className="text-gray-600 mb-8">
            Implement our advanced ticketing management system and experience
            the difference in support efficiency.
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
