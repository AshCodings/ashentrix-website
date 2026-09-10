import Link from "next/link";

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#280b57] to-[#1a0a3e] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Insurance Industry Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Specialized BPO services designed for insurance companies, from
              policy administration to claims processing, helping you enhance
              customer experience while reducing operational costs.
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
                Insurance Expertise
              </h2>
              <p className="text-gray-600 mb-6">
                Our deep understanding of insurance operations, regulatory
                requirements, and industry challenges enables us to provide
                targeted solutions that drive efficiency and improve customer
                satisfaction across all insurance sectors.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Policy Administration & Management
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Claims Processing & Investigation
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Underwriting Support Services
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Customer Service & Support
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">
                Insurance Operations Visualization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Insurance */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Insurance BPO Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive support services tailored for the insurance industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Policy Administration
              </h3>
              <p className="text-gray-600">
                End-to-end policy lifecycle management from issuance to renewal
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Claims Processing</h3>
              <p className="text-gray-600">
                Efficient claims handling, investigation, and settlement
                processing
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Underwriting Support
              </h3>
              <p className="text-gray-600">
                Risk assessment, application review, and underwriting assistance
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
              <p className="text-gray-600">
                24/7 customer support for policyholders and agents
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
                Business intelligence and regulatory reporting solutions
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Compliance Management
              </h3>
              <p className="text-gray-600">
                Regulatory compliance monitoring and audit support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Insurance Sectors We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized expertise across all major insurance categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Life Insurance</h3>
              <p className="text-gray-600 text-sm">
                Policy administration, claims, and customer service
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Health Insurance</h3>
              <p className="text-gray-600 text-sm">
                Medical claims processing and member services
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Auto Insurance</h3>
              <p className="text-gray-600 text-sm">
                Vehicle claims, policy management, and support
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Property Insurance</h3>
              <p className="text-gray-600 text-sm">
                Home and commercial property claims processing
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                Workers Compensation
              </h3>
              <p className="text-gray-600 text-sm">
                Workplace injury claims and case management
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                Commercial Insurance
              </h3>
              <p className="text-gray-600 text-sm">
                Business insurance policy and claims support
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Travel Insurance</h3>
              <p className="text-gray-600 text-sm">
                Travel claims processing and assistance services
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                Specialty Insurance
              </h3>
              <p className="text-gray-600 text-sm">
                Niche insurance products and customized solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Insurance Industry Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Measurable improvements for insurance operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">40%</div>
              <h3 className="text-lg font-semibold mb-2">
                Faster Claims Processing
              </h3>
              <p className="text-gray-600">
                Reduction in average claim processing time
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">30%</div>
              <h3 className="text-lg font-semibold mb-2">Cost Reduction</h3>
              <p className="text-gray-600">
                Lower operational costs through process optimization
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">95%</div>
              <h3 className="text-lg font-semibold mb-2">Accuracy Rate</h3>
              <p className="text-gray-600">
                High accuracy in data processing and claims handling
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">24/7</div>
              <h3 className="text-lg font-semibold mb-2">
                Support Availability
              </h3>
              <p className="text-gray-600">
                Round-the-clock customer service and support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Transform Your Insurance Operations
          </h2>
          <p className="text-gray-600 mb-8">
            Partner with us to streamline your insurance processes and enhance
            customer satisfaction.
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
