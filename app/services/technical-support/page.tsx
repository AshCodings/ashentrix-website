import Link from "next/link";
import Image from "next/image";

export default function TechnicalSupportPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#280b57] to-[#1a0a3e] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Technical Support
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                End-to-end troubleshooting and product support powered by
                skilled professionals. Expert solutions for complex technical
                challenges with rapid resolution times.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-[#280b57] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors text-center rounded-lg"
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-[#280b57] transition-colors text-center rounded-lg"
                >
                  All Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-80 lg:h-96 w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/technicalsupport.jpg"
                  alt="Technical Support Specialist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
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
                Advanced Technical Expertise
              </h2>
              <p className="text-gray-600 mb-6">
                Our technical support team provides specialized assistance for
                complex technical issues, ensuring minimal downtime and optimal
                system performance for your business operations.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Level 1, 2 & 3 Technical Support
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Remote Troubleshooting
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  System Monitoring & Maintenance
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Technical Documentation
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">Technical Support Visualization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive technical support covering all aspects of technology
              infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Hardware Support</h3>
              <p className="text-gray-600">
                Comprehensive hardware troubleshooting and maintenance services
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Software Support</h3>
              <p className="text-gray-600">
                Expert software installation, configuration, and troubleshooting
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Network Support</h3>
              <p className="text-gray-600">
                Network configuration, monitoring, and security management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Need Expert Technical Support?
          </h2>
          <p className="text-gray-600 mb-8">
            Let our technical experts handle your complex technical challenges
            with precision and efficiency.
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
