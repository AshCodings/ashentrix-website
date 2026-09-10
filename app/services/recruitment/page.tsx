import Link from "next/link";
import Image from "next/image";

export default function RecruitmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#280b57] to-[#1a0a3e] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Recruitment & Talent Support
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Scalable hiring solutions to meet your workforce and project
                demands. Comprehensive talent acquisition and management
                services.
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
                  src="/images/services/talentsupport.jpg"
                  alt="Recruitment & Talent Support Team"
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
                Strategic Talent Acquisition
              </h2>
              <p className="text-gray-600 mb-6">
                Our recruitment experts leverage advanced sourcing techniques,
                comprehensive screening processes, and industry insights to
                connect you with top-tier talent that aligns with your
                organizational culture and objectives.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Executive & Leadership Recruitment
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Technical & Specialized Roles
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Volume Recruitment Solutions
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Talent Pipeline Development
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">Recruitment Process Visualization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Recruitment Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end recruitment services designed to meet your specific
              hiring needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Talent Sourcing</h3>
              <p className="text-gray-600">
                Advanced sourcing strategies using multiple channels and
                networks
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Candidate Screening
              </h3>
              <p className="text-gray-600">
                Comprehensive screening including skills, background, and
                cultural fit
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Executive Search</h3>
              <p className="text-gray-600">
                Specialized executive recruitment for senior leadership
                positions
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Temporary Staffing</h3>
              <p className="text-gray-600">
                Flexible staffing solutions for short-term and project-based
                needs
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">RPO Services</h3>
              <p className="text-gray-600">
                Recruitment Process Outsourcing for scalable hiring solutions
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Market Intelligence
              </h3>
              <p className="text-gray-600">
                Salary benchmarking and market insights for competitive
                positioning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized recruitment knowledge across key industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Technology</h3>
              <p className="text-gray-600 text-sm">
                Software developers, data scientists, IT specialists
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Healthcare</h3>
              <p className="text-gray-600 text-sm">
                Medical professionals, healthcare administrators
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Finance</h3>
              <p className="text-gray-600 text-sm">
                Banking professionals, financial analysts, accountants
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Manufacturing</h3>
              <p className="text-gray-600 text-sm">
                Operations managers, engineers, production staff
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Sales & Marketing</h3>
              <p className="text-gray-600 text-sm">
                Sales representatives, marketing specialists
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
              <p className="text-gray-600 text-sm">
                Support representatives, call center agents
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Administrative</h3>
              <p className="text-gray-600 text-sm">
                Office managers, executive assistants
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Logistics</h3>
              <p className="text-gray-600 text-sm">
                Supply chain professionals, warehouse staff
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Recruitment Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach to finding the right talent for your
              organization
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Needs Analysis</h3>
              <p className="text-gray-600">
                Understanding role requirements and cultural fit
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Sourcing</h3>
              <p className="text-gray-600">
                Multi-channel talent sourcing and attraction
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Screening</h3>
              <p className="text-gray-600">
                Comprehensive candidate evaluation process
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Interview</h3>
              <p className="text-gray-600">
                Structured interviews and assessment coordination
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold mb-2">Placement</h3>
              <p className="text-gray-600">
                Final selection and onboarding support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Find Top Talent?
          </h2>
          <p className="text-gray-600 mb-8">
            Partner with us to access exceptional candidates and streamline your
            recruitment process.
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
