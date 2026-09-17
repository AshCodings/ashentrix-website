import Link from "next/link";

export default function LogisticsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#280b57] to-[#1a0a3e] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Logistics & Supply Chain Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Comprehensive BPO services tailored for freight forwarders, 3PL providers, 
              and shipping companies, helping you optimize operations, track shipments, 
              and deliver exceptional service.
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
                Supply Chain Excellence
              </h2>
              <p className="text-gray-600 mb-6">
                Our logistics-focused services support the complex web of global supply chains. 
                From real-time track and trace to complex freight auditing and dispatch 
                coordination, we help you reduce operational overhead and maintain seamless 
                freight movement.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Real-time Track & Trace Operations
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Dispatch & Fleet Coordination
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Freight Audit & Payment Processing
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Customs Documentation & Compliance
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">
                Logistics Operations Visualization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Logistics BPO Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end operational and back-office support for the transportation sector
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Track & Trace</h3>
              <p className="text-gray-600">
                24/7 monitoring of shipments, updating portals, and proactively communicating delays to shippers and receivers.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Dispatch Support</h3>
              <p className="text-gray-600">
                Coordinating with drivers, scheduling pickups/deliveries, and managing routing logistics efficiently.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🧾</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Freight Audit & Billing
              </h3>
              <p className="text-gray-600">
                Validating carrier invoices, resolving rate disputes, generating bills of lading, and processing payments.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
              <p className="text-gray-600">
                Omnichannel support for quote requests, booking assistance, and general logistics inquiries.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📄</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Customs Documentation
              </h3>
              <p className="text-gray-600">
                Preparing and verifying import/export documents, commercial invoices, and compliance paperwork.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Inventory Management</h3>
              <p className="text-gray-600">
                Data entry for warehouse management systems, stock reconciliation, and order processing.
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
              Logistics Segments We Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expertise across various transportation and supply chain niches
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">3PL & 4PL Providers</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive back-office support for third-party logistics
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Freight Forwarding</h3>
              <p className="text-gray-600 text-sm">
                International shipping coordination and documentation
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Last-Mile Delivery</h3>
              <p className="text-gray-600 text-sm">
                Routing, customer updates, and final delivery confirmation
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">E-commerce Logistics</h3>
              <p className="text-gray-600 text-sm">
                Order fulfillment tracking and reverse logistics (returns)
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Maritime & Ocean</h3>
              <p className="text-gray-600 text-sm">
                Vessel tracking, port coordination, and bill of lading generation
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Aviation & Air Cargo</h3>
              <p className="text-gray-600 text-sm">
                Air waybill processing and expedited shipment tracking
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Cold Chain</h3>
              <p className="text-gray-600 text-sm">
                Temperature-controlled transit monitoring and compliance
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Warehousing</h3>
              <p className="text-gray-600 text-sm">
                WMS data entry, stock auditing, and vendor coordination
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain Lifecycle Support */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Shipment Lifecycle Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Managing the flow of goods and information from origin to destination
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Booking</h3>
              <p className="text-gray-600">
                Order entry, quoting, and carrier selection for new shipments
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Dispatch</h3>
              <p className="text-gray-600">
                Assigning loads, driver coordination, and scheduling pickups
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Transit</h3>
              <p className="text-gray-600">
                Continuous track & trace, check calls, and exception management
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Delivery</h3>
              <p className="text-gray-600">
                Proof of Delivery (POD) retrieval, verification, and uploading
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold mb-2">Settlement</h3>
              <p className="text-gray-600">
                Freight auditing, invoice generation, and final payment processing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Logistics Operational Metrics
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">24/7</div>
              <h3 className="text-lg font-semibold mb-2">Visibility</h3>
              <p className="text-gray-600">
                Round-the-clock tracking and dispatch support
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">99%</div>
              <h3 className="text-lg font-semibold mb-2">Audit Accuracy</h3>
              <p className="text-gray-600">
                High precision in freight bill auditing and data entry
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">30%</div>
              <h3 className="text-lg font-semibold mb-2">Cost Reduction</h3>
              <p className="text-gray-600">
                Average operational savings for logistics providers
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">&lt; 5m</div>
              <h3 className="text-lg font-semibold mb-2">
                Response Time
              </h3>
              <p className="text-gray-600">
                Rapid handling of critical shipment exceptions and delays
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Optimize Your Supply Chain
          </h2>
          <p className="text-gray-600 mb-8">
            Partner with us to streamline your logistics back-office, enhance shipment 
            visibility, and scale your transportation operations efficiently.
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
