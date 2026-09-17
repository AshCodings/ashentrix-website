import Link from "next/link";

export default function RealEstatePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#280b57] to-[#1a0a3e] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Real Estate & Property Management
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Comprehensive BPO services tailored for real estate agencies, property 
              management firms, and PropTech platforms, helping you streamline leasing, 
              manage tenant requests, and close more deals.
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
                Elevating Property Operations
              </h2>
              <p className="text-gray-600 mb-6">
                Our real estate support services handle the time-consuming administrative 
                and operational tasks so your agents and property managers can focus on 
                building relationships and closing sales. From rapid lead response to 
                24/7 maintenance dispatch, we cover your entire portfolio.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Lead Qualification & Appointment Setting
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Tenant Screening & Lease Administration
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  24/7 Maintenance Coordination
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Real Estate Virtual Assistants (ISAs)
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">
                Real Estate Operations Visualization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Estate BPO Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end back-office and customer support for the real estate lifecycle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Inside Sales (ISA)</h3>
              <p className="text-gray-600">
                Rapid response to inbound inquiries, lead nurturing, and booking property tours for your agents.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Lease Administration</h3>
              <p className="text-gray-600">
                Drafting lease agreements, managing renewals, processing move-in/move-out paperwork, and compliance checks.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Maintenance Dispatch
              </h3>
              <p className="text-gray-600">
                24/7 handling of tenant maintenance requests, prioritizing emergencies, and coordinating with vendors.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Tenant Screening</h3>
              <p className="text-gray-600">
                Processing rental applications, conducting background/credit checks, and verifying employment references.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Property Accounting
              </h3>
              <p className="text-gray-600">
                Rent collection tracking, vendor invoice processing, CAM reconciliations, and financial reporting.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Listing Management</h3>
              <p className="text-gray-600">
                Uploading property details, editing photos, and maintaining accurate listings across MLS and rental portals.
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
              Property Segments We Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expertise across various real estate markets and property types
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Residential Real Estate</h3>
              <p className="text-gray-600 text-sm">
                Brokerages handling single-family homes and condo sales
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Commercial Properties</h3>
              <p className="text-gray-600 text-sm">
                Office spaces, retail centers, and industrial real estate
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Property Management</h3>
              <p className="text-gray-600 text-sm">
                Firms managing multi-family units and HOA communities
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">PropTech Platforms</h3>
              <p className="text-gray-600 text-sm">
                Technical support and customer service for real estate software
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Short-Term Rentals</h3>
              <p className="text-gray-600 text-sm">
                Booking support and guest communications for vacation rentals
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Co-working Spaces</h3>
              <p className="text-gray-600 text-sm">
                Membership management and facility coordination
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Real Estate Investors</h3>
              <p className="text-gray-600 text-sm">
                Lead generation and data entry for REITs and private investors
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Title & Escrow</h3>
              <p className="text-gray-600 text-sm">
                Document preparation and back-office administrative support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey Support */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Tenant & Buyer Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Supporting your clients seamlessly from their first property search to move-in day
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Inquiry</h3>
              <p className="text-gray-600">
                Capturing online leads instantly and answering initial property questions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Viewing</h3>
              <p className="text-gray-600">
                Scheduling open houses, coordinating virtual tours, and following up
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Application</h3>
              <p className="text-gray-600">
                Collecting documents, verifying credit/income, and preparing contracts
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Move-In</h3>
              <p className="text-gray-600">
                Facilitating key handovers, deposit processing, and welcome packets
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold mb-2">Tenancy</h3>
              <p className="text-gray-600">
                Handling 24/7 maintenance calls, rent collection, and lease renewals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Estate Performance Metrics
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">&lt; 5m</div>
              <h3 className="text-lg font-semibold mb-2">Lead Response Time</h3>
              <p className="text-gray-600">
                Instant contact with online inquiries to maximize conversion rates
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">99%</div>
              <h3 className="text-lg font-semibold mb-2">Compliance Accuracy</h3>
              <p className="text-gray-600">
                Strict adherence to Fair Housing laws and lease documentation standards
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">24/7</div>
              <h3 className="text-lg font-semibold mb-2">Support Availability</h3>
              <p className="text-gray-600">
                Round-the-clock coverage for emergency property maintenance issues
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">35%</div>
              <h3 className="text-lg font-semibold mb-2">
                Operational Savings
              </h3>
              <p className="text-gray-600">
                Average reduction in administrative costs for brokerages and PMs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Scale Your Real Estate Business
          </h2>
          <p className="text-gray-600 mb-8">
            Partner with us to eliminate back-office bottlenecks, improve tenant satisfaction, 
            and free up your agents to focus on revenue-generating activities.
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
