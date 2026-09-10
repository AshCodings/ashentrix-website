import Link from "next/link";

export default function ITHardwarePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#280b57] to-[#1a0a3e] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">IT Hardware Solutions</h1>
            <p className="text-xl text-gray-200 mb-8">
              Comprehensive BPO services for IT hardware companies, from
              technical support to supply chain management, helping you deliver
              superior products and exceptional customer experiences.
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
                IT Hardware Industry Excellence
              </h2>
              <p className="text-gray-600 mb-6">
                Our IT hardware-focused services support the entire technology
                lifecycle. From product support to supply chain optimization, we
                help hardware companies improve efficiency and deliver
                exceptional customer experiences.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Technical Support & Troubleshooting
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Supply Chain Management
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Product Data Management
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Quality Assurance Support
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">
                IT Hardware Operations Visualization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IT Hardware Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              IT Hardware BPO Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive support services for IT hardware manufacturers and
              suppliers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Technical Support</h3>
              <p className="text-gray-600">
                Multi-level technical support and hardware troubleshooting
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Product Support</h3>
              <p className="text-gray-600">
                Installation assistance, configuration, and maintenance support
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Inventory Management
              </h3>
              <p className="text-gray-600">
                Parts tracking, stock management, and supply chain coordination
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Warranty Services</h3>
              <p className="text-gray-600">
                Warranty claims processing and RMA management services
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Management</h3>
              <p className="text-gray-600">
                Product specifications, technical documentation, and data entry
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                Testing coordination, quality control, and compliance
                verification
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hardware Categories We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized expertise across various IT hardware segments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Servers & Storage</h3>
              <p className="text-gray-600 text-sm">
                Enterprise servers, storage systems, and data center hardware
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                Networking Equipment
              </h3>
              <p className="text-gray-600 text-sm">
                Routers, switches, firewalls, and network infrastructure
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Computer Hardware</h3>
              <p className="text-gray-600 text-sm">
                Desktops, laptops, workstations, and PC components
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Mobile Devices</h3>
              <p className="text-gray-600 text-sm">
                Smartphones, tablets, and mobile computing devices
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Peripherals</h3>
              <p className="text-gray-600 text-sm">
                Printers, monitors, keyboards, and input devices
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Embedded Systems</h3>
              <p className="text-gray-600 text-sm">
                IoT devices, embedded controllers, and specialized hardware
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Gaming Hardware</h3>
              <p className="text-gray-600 text-sm">
                Gaming consoles, graphics cards, and gaming accessories
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                Audio/Video Equipment
              </h3>
              <p className="text-gray-600 text-sm">
                Professional AV equipment and consumer electronics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Levels */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Multi-Level Hardware Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive tiered support structure for hardware issues
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                L1
              </div>
              <h3 className="text-lg font-semibold mb-2">Level 1 Support</h3>
              <p className="text-gray-600">
                Basic troubleshooting, initial diagnostics, and issue triage
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                L2
              </div>
              <h3 className="text-lg font-semibold mb-2">Level 2 Support</h3>
              <p className="text-gray-600">
                Advanced troubleshooting and hardware configuration support
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                L3
              </div>
              <h3 className="text-lg font-semibold mb-2">Level 3 Support</h3>
              <p className="text-gray-600">
                Expert-level technical support and complex issue resolution
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                RMA
              </div>
              <h3 className="text-lg font-semibold mb-2">RMA Processing</h3>
              <p className="text-gray-600">
                Return merchandise authorization and replacement coordination
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
              Hardware Technology Integration
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Seamless integration with leading hardware management platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  🔧
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Service Desk Platforms
                  </h3>
                  <p className="text-gray-600">
                    Integration with ITSM and service desk management systems.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  📦
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Inventory Systems
                  </h3>
                  <p className="text-gray-600">
                    Real-time inventory tracking and parts management
                    integration.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  🔍
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Diagnostic Tools
                  </h3>
                  <p className="text-gray-600">
                    Hardware diagnostic and monitoring tool integration.
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
                    Performance analytics and reporting system integration.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  🌐
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Remote Monitoring
                  </h3>
                  <p className="text-gray-600">
                    Remote hardware monitoring and management capabilities.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  📱
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Mobile Support Apps
                  </h3>
                  <p className="text-gray-600">
                    Mobile application integration for field support services.
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
              Hardware Support Performance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">92%</div>
              <h3 className="text-lg font-semibold mb-2">
                First Call Resolution
              </h3>
              <p className="text-gray-600">
                Hardware issues resolved on the first contact attempt
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">
                15min
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Average Response Time
              </h3>
              <p className="text-gray-600">
                Average response time for technical support requests
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">
                99.8%
              </div>
              <h3 className="text-lg font-semibold mb-2">System Uptime</h3>
              <p className="text-gray-600">
                Support system availability and operational uptime
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">
                48hrs
              </div>
              <h3 className="text-lg font-semibold mb-2">RMA Processing</h3>
              <p className="text-gray-600">
                Average time for RMA processing and authorization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Optimize Your Hardware Operations
          </h2>
          <p className="text-gray-600 mb-8">
            Partner with us to enhance hardware support efficiency and deliver
            superior customer experiences in the IT hardware industry.
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
