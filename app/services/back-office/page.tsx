import Link from "next/link";
import Image from "next/image";

export default function BackOfficePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#280b57] to-[#1a0a3e] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Back Office Operations
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Streamlined processing and documentation services for improved
                efficiency. Comprehensive back office support to optimize your
                administrative operations.
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
                  src="/images/services/backofficeoperations.jpg"
                  alt="Back Office Operations"
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
                Efficient Administrative Support
              </h2>
              <p className="text-gray-600 mb-6">
                Our back office services handle the essential administrative
                tasks that keep your business running smoothly. From data
                management to document processing, we ensure accuracy and
                efficiency in all operations.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Document Management & Processing
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Data Entry & Verification
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Administrative Task Automation
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Compliance & Audit Support
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">
                Back Office Operations Visualization
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
              Back Office Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive administrative support services designed to optimize
              your operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📄</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Document Processing
              </h3>
              <p className="text-gray-600">
                Efficient handling, digitization, and organization of business
                documents
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">⌨️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Entry</h3>
              <p className="text-gray-600">
                Accurate and timely data entry services with quality assurance
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🏦</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Financial Processing
              </h3>
              <p className="text-gray-600">
                Invoice processing, accounts management, and financial data
                handling
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">HR Administration</h3>
              <p className="text-gray-600">
                Employee records management, payroll support, and HR
                documentation
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                Multi-level quality checks to ensure accuracy and compliance
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Reporting & Analytics
              </h3>
              <p className="text-gray-600">
                Regular reporting and performance analytics for operational
                insights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Back Office Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Structured approach to ensure efficient and accurate back office
              operations
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Requirements Analysis
              </h3>
              <p className="text-gray-600">
                Understanding your specific back office needs and requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Process Setup</h3>
              <p className="text-gray-600">
                Establishing workflows, quality standards, and security
                protocols
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600">
                Executing back office operations with continuous monitoring
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Optimization</h3>
              <p className="text-gray-600">
                Continuous improvement and optimization of processes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Streamline Your Back Office Operations
          </h2>
          <p className="text-gray-600 mb-8">
            Let us handle your administrative tasks so you can focus on growing
            your business.
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
