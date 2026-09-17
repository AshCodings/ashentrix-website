import Link from "next/link";

export default function HardwareIoTPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#280b57] to-[#1a0a3e] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Hardware & IoT Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Comprehensive technical support and BPO services tailored for consumer 
              electronics, enterprise hardware, and the expanding Internet of Things (IoT) ecosystem.
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
                Connected Device Excellence
              </h2>
              <p className="text-gray-600 mb-6">
                Our specialized technical teams support the complete lifecycle of hardware 
                and smart devices. From initial setup and configuration to advanced L1/L2 
                troubleshooting and warranty management, we ensure your customers get the 
                most out of their technology.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  L1/L2/L3 Technical Helpdesk
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  RMA & Warranty Processing
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Smart Home & IoT Device Setup
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Remote Diagnostics & Troubleshooting
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">
                Hardware Operations Visualization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware & IoT Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hardware & IoT BPO Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end technical and operational support for device manufacturers and connected ecosystems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🖥️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Technical Helpdesk</h3>
              <p className="text-gray-600">
                Tiered technical support (L1/L2/L3) to resolve hardware glitches, software bugs, and connectivity issues.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">RMA & Warranty</h3>
              <p className="text-gray-600">
                Seamless management of Return Merchandise Authorizations, warranty claims, and replacement dispatching.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                IoT Monitoring
              </h3>
              <p className="text-gray-600">
                Proactive monitoring of connected networks, smart sensors, and IoT infrastructure to prevent downtime.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Setup & Configuration</h3>
              <p className="text-gray-600">
                Guiding customers through unboxing, network pairing, app integration, and initial device setup.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Field Service Support
              </h3>
              <p className="text-gray-600">
                Coordinating with field technicians, scheduling repairs, and managing spare parts inventory.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🛒</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Pre-Sales & Upgrades</h3>
              <p className="text-gray-600">
                Answering product queries, advising on compatibility, and managing device trade-in or upgrade programs.
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
              Device Segments We Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expertise across consumer gadgets, enterprise tech, and smart ecosystems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Consumer Electronics</h3>
              <p className="text-gray-600 text-sm">
                Smartphones, laptops, audio gear, and home appliances
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Smart Home (IoT)</h3>
              <p className="text-gray-600 text-sm">
                Security cameras, smart thermostats, and voice assistants
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Wearable Tech</h3>
              <p className="text-gray-600 text-sm">
                Smartwatches, fitness trackers, and AR/VR headsets
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Enterprise Hardware</h3>
              <p className="text-gray-600 text-sm">
                Servers, POS systems, and commercial printing equipment
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Networking Gear</h3>
              <p className="text-gray-600 text-sm">
                Routers, switches, and enterprise Wi-Fi solutions
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Industrial IoT (IIoT)</h3>
              <p className="text-gray-600 text-sm">
                Smart manufacturing sensors and logistics tracking devices
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Medical Devices</h3>
              <p className="text-gray-600 text-sm">
                Connected health monitors and telehealth hardware support
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Connected Vehicles</h3>
              <p className="text-gray-600 text-sm">
                Telematics, GPS systems, and smart dashboard support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Device Lifecycle Support */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Device Lifecycle Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ensuring a flawless technology experience from box opening to device recycling
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Setup</h3>
              <p className="text-gray-600">
                Guiding users through unboxing, assembly, and initial device pairing
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Usage</h3>
              <p className="text-gray-600">
                Feature education, software update assistance, and integration help
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Diagnostics</h3>
              <p className="text-gray-600">
                Remote troubleshooting, error code reading, and connectivity testing
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Resolution</h3>
              <p className="text-gray-600">
                Fixing issues remotely or issuing RMAs for physical repairs/replacements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold mb-2">Renewal</h3>
              <p className="text-gray-600">
                Extended warranty sales, trade-in processing, and end-of-life recycling
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
              Hardware Support Metrics
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">85%</div>
              <h3 className="text-lg font-semibold mb-2">First Call Resolution</h3>
              <p className="text-gray-600">
                High rate of technical issues solved without needing escalation
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">&lt; 2m</div>
              <h3 className="text-lg font-semibold mb-2">Average Speed to Answer</h3>
              <p className="text-gray-600">
                Rapid response times to minimize customer frustration
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">99%</div>
              <h3 className="text-lg font-semibold mb-2">RMA Accuracy</h3>
              <p className="text-gray-600">
                Precise handling of warranties, returns, and replacement logistics
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">24/7</div>
              <h3 className="text-lg font-semibold mb-2">
                IoT Monitoring
              </h3>
              <p className="text-gray-600">
                Continuous network and device monitoring for enterprise hardware
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Scale Your Tech Support
          </h2>
          <p className="text-gray-600 mb-8">
            Partner with us to provide world-class technical support, reduce return rates, 
            and build lasting loyalty for your hardware brand.
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
