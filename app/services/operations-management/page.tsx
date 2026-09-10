import Link from "next/link";
import Image from "next/image";

export default function OperationsManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#280b57] to-[#1a0a3e] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Operations Management
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Process optimization and workflow monitoring for consistent
                results. Comprehensive operations management to drive efficiency
                and growth.
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
                  src="/images/services/operations.jpg"
                  alt="Operations Management Dashboard"
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
                Strategic Operations Excellence
              </h2>
              <p className="text-gray-600 mb-6">
                Our operations management expertise helps organizations
                streamline processes, reduce costs, and enhance productivity. We
                focus on creating sustainable operational improvements that
                drive long-term business success.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Process Optimization & Redesign
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Performance Management & KPIs
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Quality Management Systems
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Change Management & Implementation
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">
                Operations Management Visualization
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
              Operations Management Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive operational solutions designed to drive efficiency
              and growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Process Optimization
              </h3>
              <p className="text-gray-600">
                Analyze and improve existing processes to eliminate waste and
                increase efficiency
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Performance Management
              </h3>
              <p className="text-gray-600">
                Implement KPIs, dashboards, and performance tracking systems
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Management</h3>
              <p className="text-gray-600">
                Establish quality standards and continuous improvement
                frameworks
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Analytics</h3>
              <p className="text-gray-600">
                Leverage data insights to make informed operational decisions
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Change Management</h3>
              <p className="text-gray-600">
                Guide organizational change initiatives for smooth transitions
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Project Management</h3>
              <p className="text-gray-600">
                End-to-end project management for operational initiatives
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
              Operational Excellence Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transform your operations with measurable improvements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">30%</div>
              <h3 className="text-lg font-semibold mb-2">Cost Reduction</h3>
              <p className="text-gray-600">
                Average cost savings through process optimization
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">50%</div>
              <h3 className="text-lg font-semibold mb-2">Efficiency Gain</h3>
              <p className="text-gray-600">
                Improvement in operational efficiency metrics
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">25%</div>
              <h3 className="text-lg font-semibold mb-2">Time Savings</h3>
              <p className="text-gray-600">
                Reduction in process completion times
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">40%</div>
              <h3 className="text-lg font-semibold mb-2">
                Quality Improvement
              </h3>
              <p className="text-gray-600">
                Enhancement in quality metrics and customer satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Implementation Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our systematic approach to operational transformation
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Assessment</h3>
              <p className="text-gray-600">
                Comprehensive analysis of current operations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Strategy</h3>
              <p className="text-gray-600">
                Development of optimization roadmap
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Design</h3>
              <p className="text-gray-600">
                Process redesign and solution architecture
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600">Execution with change management</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold mb-2">Optimization</h3>
              <p className="text-gray-600">
                Continuous improvement and monitoring
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Optimize Your Operations?
          </h2>
          <p className="text-gray-600 mb-8">
            Transform your business operations with our proven management
            expertise and methodologies.
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
