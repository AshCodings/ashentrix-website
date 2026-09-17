import Link from "next/link";

export default function EnergyUtilityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#280b57] to-[#1a0a3e] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Energy & Utility Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Comprehensive BPO services tailored for energy providers, utility
              companies, and green energy startups, helping you streamline
              operations and enhance customer experience.
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
                Powering Operational Excellence
              </h2>
              <p className="text-gray-600 mb-6">
                Our energy and utility-focused services support the complete
                customer lifecycle. From billing inquiries and outage reporting
                to smart meter technical support, we help you deliver reliable,
                round-the-clock service to your consumers.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Customer Service & Outage Reporting
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Billing & Payment Processing
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Smart Meter & Technical Support
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Compliance & Data Management
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">
                Energy Operations Visualization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Utility BPO Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end support services for water, gas, electricity, and renewable energy providers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
              <p className="text-gray-600">
                24/7 omnichannel assistance for general inquiries, plan changes, and account management
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Billing & Collections</h3>
              <p className="text-gray-600">
                Invoice management, payment processing, dispute resolution, and debt recovery services
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔌</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Outage Management
              </h3>
              <p className="text-gray-600">
                Emergency response handling, outage tracking, and proactive customer communication
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Metering Support</h3>
              <p className="text-gray-600">
                Smart meter reading assistance, data validation, and technical troubleshooting
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Contract Management
              </h3>
              <p className="text-gray-600">
                Customer onboarding, tariff plan changes, renewals, and compliance documentation
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Green Energy Support</h3>
              <p className="text-gray-600">
                Consultation support for renewable energy adoption, solar panel inquiries, and rebates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Segments We Support */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Utility Segments We Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expertise across various energy and utility sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Electricity Distribution</h3>
              <p className="text-gray-600 text-sm">
                Support for regional power grids and electricity providers
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Water & Wastewater</h3>
              <p className="text-gray-600 text-sm">
                Customer service for municipal and private water utilities
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Natural Gas</h3>
              <p className="text-gray-600 text-sm">
                Safety compliance, billing, and distribution support
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Renewable Energy</h3>
              <p className="text-gray-600 text-sm">
                Solar, wind, and green energy retail support
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Retail Energy</h3>
              <p className="text-gray-600 text-sm">
                Customer acquisition and retention for competitive markets
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Smart Grid Solutions</h3>
              <p className="text-gray-600 text-sm">
                Technical helpdesk for smart home energy systems
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Power Generation</h3>
              <p className="text-gray-600 text-sm">
                B2B support for large-scale energy producers
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Waste Management</h3>
              <p className="text-gray-600 text-sm">
                Scheduling, billing, and customer service for sanitation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey Support */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Utility Customer Lifecycle Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Supporting consumers seamlessly from connection to ongoing usage
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Onboarding</h3>
              <p className="text-gray-600">
                Account setup, credit checks, and tariff plan selection
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Consumption</h3>
              <p className="text-gray-600">
                Usage monitoring, smart meter queries, and energy efficiency advice
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Billing</h3>
              <p className="text-gray-600">
                Invoice generation, payment collection, and dispute management
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Support</h3>
              <p className="text-gray-600">
                Technical helpdesk, outage reporting, and emergency dispatch
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold mb-2">Retention</h3>
              <p className="text-gray-600">
                Contract renewals, moving services, and loyalty management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Operational Performance Metrics
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">&lt; 1m</div>
              <h3 className="text-lg font-semibold mb-2">Emergency Response</h3>
              <p className="text-gray-600">
                Rapid response time for outage and emergency reporting
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">99%</div>
              <h3 className="text-lg font-semibold mb-2">Billing Accuracy</h3>
              <p className="text-gray-600">
                High precision in invoice generation and payment processing
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">24/7</div>
              <h3 className="text-lg font-semibold mb-2">Support Availability</h3>
              <p className="text-gray-600">
                Continuous operations for critical utility infrastructure
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">40%</div>
              <h3 className="text-lg font-semibold mb-2">
                Cost Reduction
              </h3>
              <p className="text-gray-600">
                Average reduction in operational customer service costs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Optimize Your Utility Operations
          </h2>
          <p className="text-gray-600 mb-8">
            Partner with us to enhance customer satisfaction, improve billing efficiency, 
            and streamline your energy support operations.
          </p>
          <Link
            href="/contact"
            className="bg-[#280b57] text-white px-8 py-4 font-semibold hover:bg-[#280b57]/90 transition-colors text-lg inline-block"
          >
            Start Your Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
