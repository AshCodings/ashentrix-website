import Link from "next/link";
import Image from "next/image";

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#280b57] to-[#1a0a3e] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Collections Process
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Efficient, compliant, and customer-friendly debt recovery
                solutions. Professional collection services that maintain
                relationships while maximizing recovery rates.
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
                  src="/images/services/process.jpg"
                  alt="Collections Process Management"
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
                Ethical Collection Solutions
              </h2>
              <p className="text-gray-600 mb-6">
                Our collections team combines advanced technology with
                compassionate communication to achieve optimal recovery rates
                while preserving customer relationships and ensuring full
                regulatory compliance.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  First Party Collections
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Early Stage Intervention
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Payment Plan Management
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Compliance & Regulatory Adherence
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">Collections Process Visualization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Collection Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive debt recovery solutions with focus on customer
              retention
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Outbound Collections
              </h3>
              <p className="text-gray-600">
                Professional outbound calling campaigns with skilled collection
                specialists
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📧</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Digital Collections
              </h3>
              <p className="text-gray-600">
                Email campaigns, SMS reminders, and online payment portals
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Payment Processing</h3>
              <p className="text-gray-600">
                Secure payment processing and flexible payment plan arrangements
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Compliance Management
              </h3>
              <p className="text-gray-600">
                Full compliance with FDCPA, TCPA, and other regulatory
                requirements
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
                Detailed performance reporting and collection analytics
                dashboards
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Customer Relations</h3>
              <p className="text-gray-600">
                Compassionate approach focused on maintaining customer
                relationships
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Collection Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach to debt recovery that prioritizes ethical
              practices
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Account Analysis</h3>
              <p className="text-gray-600">
                Comprehensive review of account history and debtor information
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Contact Strategy</h3>
              <p className="text-gray-600">
                Develop personalized contact approach based on debtor profile
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Engagement</h3>
              <p className="text-gray-600">
                Professional communication to understand situation and negotiate
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Resolution</h3>
              <p className="text-gray-600">
                Secure payment or arrangement while maintaining relationship
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Performance Metrics
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry-leading collection results with ethical practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">85%</div>
              <h3 className="text-lg font-semibold mb-2">Contact Rate</h3>
              <p className="text-gray-600">
                Successful debtor contact within first 30 days
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">65%</div>
              <h3 className="text-lg font-semibold mb-2">Resolution Rate</h3>
              <p className="text-gray-600">
                Accounts resolved through payment or arrangement
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">15</div>
              <h3 className="text-lg font-semibold mb-2">Average Days</h3>
              <p className="text-gray-600">
                Average time to first payment collection
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">98%</div>
              <h3 className="text-lg font-semibold mb-2">Compliance Rate</h3>
              <p className="text-gray-600">
                Adherence to all regulatory requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Improve Your Collection Results
          </h2>
          <p className="text-gray-600 mb-8">
            Partner with us for ethical, effective debt collection services that
            protect your brand reputation.
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
