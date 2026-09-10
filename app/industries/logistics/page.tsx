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
              Streamlined BPO services for logistics companies, from freight
              coordination to customer service, helping you optimize supply
              chain operations and deliver exceptional shipping experiences.
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
                Logistics Excellence
              </h2>
              <p className="text-gray-600 mb-6">
                Our logistics-focused services support the entire supply chain
                ecosystem. From shipment tracking to customer communications, we
                help logistics companies improve operational efficiency and
                customer satisfaction.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Freight Coordination & Tracking
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Customer Service & Support
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Documentation & Compliance
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Data Entry & Processing
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
              Comprehensive support services for logistics and supply chain
              operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Freight Management</h3>
              <p className="text-gray-600">
                Shipment coordination, carrier selection, and freight
                optimization
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Order Processing</h3>
              <p className="text-gray-600">
                Order entry, fulfillment tracking, and delivery coordination
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Tracking & Updates</h3>
              <p className="text-gray-600">
                Real-time shipment tracking and customer communication services
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
              <p className="text-gray-600">
                24/7 customer support for shipping inquiries and issue
                resolution
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📄</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Documentation</h3>
              <p className="text-gray-600">
                Customs documentation, bills of lading, and compliance paperwork
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
                Supply chain analytics, performance reporting, and KPI tracking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Segments */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Logistics Segments We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized expertise across various logistics and transportation
              sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Freight Forwarding</h3>
              <p className="text-gray-600 text-sm">
                International shipping and customs clearance services
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">3PL Providers</h3>
              <p className="text-gray-600 text-sm">
                Third-party logistics and warehousing operations
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                E-commerce Fulfillment
              </h3>
              <p className="text-gray-600 text-sm">
                Online retail order fulfillment and distribution
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Last-Mile Delivery</h3>
              <p className="text-gray-600 text-sm">
                Final mile delivery services and customer coordination
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                Cold Chain Logistics
              </h3>
              <p className="text-gray-600 text-sm">
                Temperature-controlled transportation and storage
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                Automotive Logistics
              </h3>
              <p className="text-gray-600 text-sm">
                Vehicle transportation and parts distribution
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Air Cargo</h3>
              <p className="text-gray-600 text-sm">
                Air freight operations and cargo handling
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Ocean Freight</h3>
              <p className="text-gray-600 text-sm">
                Maritime shipping and container logistics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain Process */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              End-to-End Supply Chain Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Supporting every stage of the supply chain process
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Planning</h3>
              <p className="text-gray-600">
                Demand forecasting and route optimization planning
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Sourcing</h3>
              <p className="text-gray-600">
                Supplier coordination and procurement support
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Manufacturing</h3>
              <p className="text-gray-600">
                Production planning and inventory management
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Delivery</h3>
              <p className="text-gray-600">
                Transportation coordination and tracking services
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold mb-2">Returns</h3>
              <p className="text-gray-600">
                Reverse logistics and return processing management
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
              Technology Integration
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Seamless integration with leading logistics and supply chain
              platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  📱
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    TMS Integration
                  </h3>
                  <p className="text-gray-600">
                    Transportation Management System connectivity and data
                    synchronization.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  📦
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    WMS Integration
                  </h3>
                  <p className="text-gray-600">
                    Warehouse Management System integration for inventory
                    tracking.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  🔗
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    API Connectivity
                  </h3>
                  <p className="text-gray-600">
                    Real-time API connections with carrier and shipping
                    platforms.
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
                    Analytics Platforms
                  </h3>
                  <p className="text-gray-600">
                    Integration with business intelligence and analytics tools.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  🌐
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    IoT Connectivity
                  </h3>
                  <p className="text-gray-600">
                    Internet of Things device integration for real-time
                    monitoring.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  📲
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Mobile Solutions
                  </h3>
                  <p className="text-gray-600">
                    Mobile app integration for driver and customer
                    communications.
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
              Logistics Performance Metrics
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">
                99.5%
              </div>
              <h3 className="text-lg font-semibold mb-2">On-Time Delivery</h3>
              <p className="text-gray-600">
                High rate of shipments delivered within promised timeframes
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">15%</div>
              <h3 className="text-lg font-semibold mb-2">Cost Reduction</h3>
              <p className="text-gray-600">
                Average shipping cost reduction through optimization
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">2hrs</div>
              <h3 className="text-lg font-semibold mb-2">Response Time</h3>
              <p className="text-gray-600">
                Average response time for customer inquiries and issues
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">98%</div>
              <h3 className="text-lg font-semibold mb-2">Accuracy Rate</h3>
              <p className="text-gray-600">
                Data entry and documentation accuracy rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Optimize Your Supply Chain Operations
          </h2>
          <p className="text-gray-600 mb-8">
            Partner with us to streamline logistics processes and enhance
            customer satisfaction across your supply chain.
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
