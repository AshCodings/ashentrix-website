import Link from "next/link";

export default function MediaCommunicationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#280b57] to-[#1a0a3e] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Media & Communications Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Comprehensive BPO services tailored for telecom operators, ISPs, 
              broadcasters, and media agencies, helping you enhance subscriber 
              experiences and streamline complex back-office operations.
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
                Connecting the Digital World
              </h2>
              <p className="text-gray-600 mb-6">
                Our media and communications services support the fast-paced, always-on 
                connectivity sector. From subscriber onboarding and strict KYC compliance 
                to broadband technical helpdesks, we ensure your customers stay connected 
                without interruption.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Subscriber Onboarding & Activation
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Telecom Billing & Dispute Resolution
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Broadband & ISP Technical Support
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Churn Management & Retention Campaigns
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">
                Communications Operations Visualization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Communications BPO Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end operational and customer support for telecommunications and media brands
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
              <p className="text-gray-600">
                Multichannel assistance for general inquiries, plan details, data usage queries, and roaming support.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Billing & Payments</h3>
              <p className="text-gray-600">
                Invoice explanations, secure payment processing, late fee disputes, and customized payment arrangements.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Technical Helpdesk
              </h3>
              <p className="text-gray-600">
                L1/L2 technical support for network outages, router configuration, and slow connectivity troubleshooting.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Provisioning & KYC</h3>
              <p className="text-gray-600">
                SIM activations, broadband provisioning, number portability processing, and strict KYC verification.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Retention Services
              </h3>
              <p className="text-gray-600">
                Proactive churn management, tailored retention offers, contract renewals, and win-back campaigns.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Sales & Upselling</h3>
              <p className="text-gray-600">
                Outbound campaigns for plan upgrades, value-added services (VAS), fiber-optic migration, and device sales.
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
              Industry Segments We Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expertise across various communication networks and media verticals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Telecom Operators</h3>
              <p className="text-gray-600 text-sm">
                Mobile network operators (MNOs) and virtual networks (MVNOs)
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Internet Providers</h3>
              <p className="text-gray-600 text-sm">
                Broadband, fiber-optic, and satellite internet service providers (ISPs)
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Broadcasting</h3>
              <p className="text-gray-600 text-sm">
                Television, radio, and satellite broadcasting networks
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Digital Publishers</h3>
              <p className="text-gray-600 text-sm">
                News portals, online magazines, and digital content aggregators
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Media Agencies</h3>
              <p className="text-gray-600 text-sm">
                Advertising, public relations, and digital marketing agencies
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Cable & Pay TV</h3>
              <p className="text-gray-600 text-sm">
                Direct-to-home (DTH) providers and regional cable television networks
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Unified Comms</h3>
              <p className="text-gray-600 text-sm">
                VoIP, UCaaS platforms, and enterprise communication tools
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Print Media</h3>
              <p className="text-gray-600 text-sm">
                Newspapers, traditional magazines, and subscription publishing houses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscriber Lifecycle Support */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Subscriber Lifecycle
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Managing the user journey from initial inquiry to long-term loyalty
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Acquisition</h3>
              <p className="text-gray-600">
                Handling inbound inquiries, plan recommendations, and sales conversions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Activation</h3>
              <p className="text-gray-600">
                Document collection, KYC verification, and rapid service provisioning
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Support</h3>
              <p className="text-gray-600">
                Resolving connectivity glitches, billing disputes, and general account queries
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Upgrades</h3>
              <p className="text-gray-600">
                Proposing higher-tier data plans, family bundles, and premium add-ons
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold mb-2">Retention</h3>
              <p className="text-gray-600">
                Minimizing churn through proactive interventions and exclusive loyalty offers
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
              Telecom Operational Metrics
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">&lt; 60s</div>
              <h3 className="text-lg font-semibold mb-2">Speed to Answer</h3>
              <p className="text-gray-600">
                Rapid response times for network emergencies and technical issues
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">85%</div>
              <h3 className="text-lg font-semibold mb-2">First Call Resolution</h3>
              <p className="text-gray-600">
                High success rate in resolving billing and basic technical queries instantly
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">99.9%</div>
              <h3 className="text-lg font-semibold mb-2">KYC Accuracy</h3>
              <p className="text-gray-600">
                Strict adherence to telecom regulations and data compliance standards
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">25%</div>
              <h3 className="text-lg font-semibold mb-2">
                Retention Boost
              </h3>
              <p className="text-gray-600">
                Average improvement in subscriber retention through proactive outreach
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Transform Your Subscriber Experience
          </h2>
          <p className="text-gray-600 mb-8">
            Partner with us to reduce operational costs, boost subscriber retention, 
            and deliver seamless technical support across your communication networks.
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
