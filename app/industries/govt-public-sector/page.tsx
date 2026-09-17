import Link from "next/link";

export default function GovernmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#280b57] to-[#1a0a3e] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Govt. & Public Sector Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Secure, scalable, and citizen-centric BPO services designed to support 
              public administration, enhance civic engagement, and streamline 
              e-governance operations.
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
                Public Service Excellence
              </h2>
              <p className="text-gray-600 mb-6">
                Our public sector services are built on the pillars of security, compliance, 
                and accessibility. We help government departments and civic bodies deliver 
                transparent, multilingual, and efficient services to citizens across the nation.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Citizen Helplines & Information Centers
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Grievance Redressal Management
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Secure Data & Document Processing
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Compliance & Public Safety Support
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">
                Public Sector Operations Visualization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Government Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Public Sector BPO Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end operational support for government bodies, civic departments, and public welfare programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Citizen Helpdesk</h3>
              <p className="text-gray-600">
                Multilingual 24/7 contact centers providing information on government schemes, policies, and services.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Grievance Redressal</h3>
              <p className="text-gray-600">
                Registering, routing, and tracking citizen complaints to ensure timely resolution by civic authorities.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📄</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Document Processing
              </h3>
              <p className="text-gray-600">
                Secure verification, digitization, and management of sensitive public records and applications.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🚨</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Emergency Response</h3>
              <p className="text-gray-600">
                Handling critical public safety calls, disaster management coordination, and rapid response dispatch.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                E-Governance Support
              </h3>
              <p className="text-gray-600">
                Technical assistance for citizens navigating government portals, tax filing, and digital identity platforms.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🗣️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Public Outreach</h3>
              <p className="text-gray-600">
                Awareness campaigns, public health surveys, and outbound communication for civic initiatives.
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
              Public Segments We Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expertise across various civic departments and administrative bodies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Municipalities</h3>
              <p className="text-gray-600 text-sm">
                Civic amenities, local tax support, and waste management helplines
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Public Health</h3>
              <p className="text-gray-600 text-sm">
                Medical helplines, vaccination scheduling, and awareness drives
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Tax & Revenue</h3>
              <p className="text-gray-600 text-sm">
                Taxpayer assistance, portal navigation, and compliance support
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Public Transport</h3>
              <p className="text-gray-600 text-sm">
                Transit information, ticketing support, and commuter grievances
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Social Welfare</h3>
              <p className="text-gray-600 text-sm">
                Pension, subsidy, and community welfare scheme information
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Law Enforcement</h3>
              <p className="text-gray-600 text-sm">
                Non-emergency dispatch, traffic fine inquiries, and citizen safety
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">E-Identity</h3>
              <p className="text-gray-600 text-sm">
                Passport, Aadhaar, and national ID application support
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Electoral Services</h3>
              <p className="text-gray-600 text-sm">
                Voter registration assistance and election helplines
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Citizen Journey Support */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Citizen Service Lifecycle
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ensuring a seamless, transparent, and respectful experience for every citizen
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Information</h3>
              <p className="text-gray-600">
                Providing accurate details regarding policies, procedures, and civic rights
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Application</h3>
              <p className="text-gray-600">
                Guiding citizens through online forms, e-portal usage, and submissions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Processing</h3>
              <p className="text-gray-600">
                Backend verification, data entry, and seamless cross-department routing
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Resolution</h3>
              <p className="text-gray-600">
                Closing grievance tickets, dispatching services, and public reporting
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold mb-2">Feedback</h3>
              <p className="text-gray-600">
                Collecting citizen satisfaction surveys to improve public administration
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
              Public Sector Performance Metrics
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">24/7</div>
              <h3 className="text-lg font-semibold mb-2">Citizen Access</h3>
              <p className="text-gray-600">
                Round-the-clock availability for critical public services and emergencies
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">&lt; 24h</div>
              <h3 className="text-lg font-semibold mb-2">Grievance Routing</h3>
              <p className="text-gray-600">
                Rapid escalation of civic complaints to relevant nodal officers
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">99.9%</div>
              <h3 className="text-lg font-semibold mb-2">Data Security</h3>
              <p className="text-gray-600">
                Strict compliance with public data protection and privacy regulations
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">15+</div>
              <h3 className="text-lg font-semibold mb-2">
                Languages Supported
              </h3>
              <p className="text-gray-600">
                Vernacular language support to serve diverse regional demographics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Modernize Your Public Services
          </h2>
          <p className="text-gray-600 mb-8">
            Partner with us to enhance citizen engagement, improve operational efficiency, 
            and build a more responsive public administration system.
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
