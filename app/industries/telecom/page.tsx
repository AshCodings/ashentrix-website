import Link from "next/link";

export default function TelecomPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#280b57] to-[#1a0a3e] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Telecom Industry Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Specialized BPO services for telecommunications companies, from
              customer service to network operations support, helping you
              deliver exceptional connectivity experiences to your customers.
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
                Telecom Expertise
              </h2>
              <p className="text-gray-600 mb-6">
                Our telecom-focused services support the full customer
                lifecycle, from acquisition and onboarding to technical support
                and retention. We understand the complexities of
                telecommunications operations and regulatory requirements.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Customer Service & Technical Support
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Billing & Revenue Management
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Network Operations Support
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Sales & Lead Generation
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">Telecom Operations Visualization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Telecom Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Telecom BPO Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive support services for telecommunications operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
              <p className="text-gray-600">
                24/7 multilingual customer service for voice, data, and internet
                services
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Technical Support</h3>
              <p className="text-gray-600">
                Level 1-3 technical support for network issues and service
                troubleshooting
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Billing Support</h3>
              <p className="text-gray-600">
                Billing inquiries, payment processing, and account management
                services
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Network Monitoring</h3>
              <p className="text-gray-600">
                Network operations center support and performance monitoring
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Sales Support</h3>
              <p className="text-gray-600">
                Inbound/outbound sales, lead generation, and customer
                acquisition
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Order Management</h3>
              <p className="text-gray-600">
                Service provisioning, order tracking, and fulfillment processing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Telecom Segments */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Telecom Segments We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized support across all telecommunications sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Mobile Operators</h3>
              <p className="text-gray-600 text-sm">
                Cellular networks, 5G services, and mobile plans
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                Internet Service Providers
              </h3>
              <p className="text-gray-600 text-sm">
                Broadband, fiber, and wireless internet services
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Cable Companies</h3>
              <p className="text-gray-600 text-sm">
                Cable TV, internet bundles, and streaming services
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">VoIP Providers</h3>
              <p className="text-gray-600 text-sm">
                Voice over IP services and cloud communications
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                Satellite Communications
              </h3>
              <p className="text-gray-600 text-sm">
                Satellite internet, TV, and communication services
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                Enterprise Solutions
              </h3>
              <p className="text-gray-600 text-sm">
                Business communications and managed services
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Equipment Vendors</h3>
              <p className="text-gray-600 text-sm">
                Network equipment and infrastructure support
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Digital Services</h3>
              <p className="text-gray-600 text-sm">
                Cloud services, IoT, and digital transformation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Levels */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Multi-Level Support Structure
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tiered support model ensuring efficient resolution of customer
              issues
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-l-4 border-[#280b57]">
              <h3 className="text-2xl font-bold text-[#280b57] mb-4">
                Level 1 Support
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Basic troubleshooting</li>
                <li>• Account information</li>
                <li>• Service activation</li>
                <li>• Bill payment assistance</li>
                <li>• General inquiries</li>
              </ul>
            </div>

            <div className="bg-white p-8 border-l-4 border-[#280b57]">
              <h3 className="text-2xl font-bold text-[#280b57] mb-4">
                Level 2 Support
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Advanced troubleshooting</li>
                <li>• Network diagnostics</li>
                <li>• Service configuration</li>
                <li>• Equipment replacement</li>
                <li>• Technical escalations</li>
              </ul>
            </div>

            <div className="bg-white p-8 border-l-4 border-[#280b57]">
              <h3 className="text-2xl font-bold text-[#280b57] mb-4">
                Level 3 Support
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Complex technical issues</li>
                <li>• Network engineering</li>
                <li>• System integration</li>
                <li>• Performance optimization</li>
                <li>• Specialized expertise</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Telecom Industry Performance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">20s</div>
              <h3 className="text-lg font-semibold mb-2">
                Average Response Time
              </h3>
              <p className="text-gray-600">
                Quick response to customer inquiries and technical issues
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">95%</div>
              <h3 className="text-lg font-semibold mb-2">
                First Call Resolution
              </h3>
              <p className="text-gray-600">
                High rate of issues resolved on the first contact
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">24/7</div>
              <h3 className="text-lg font-semibold mb-2">
                Service Availability
              </h3>
              <p className="text-gray-600">
                Round-the-clock support for critical telecom operations
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">40%</div>
              <h3 className="text-lg font-semibold mb-2">Cost Reduction</h3>
              <p className="text-gray-600">
                Average operational cost savings through outsourcing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Accelerate Your Telecom Operations
          </h2>
          <p className="text-gray-600 mb-8">
            Partner with us to enhance customer experience and optimize your
            telecommunications operations.
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
