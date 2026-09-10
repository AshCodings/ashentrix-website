import Link from "next/link";

export default function TravelPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#280b57] to-[#1a0a3e] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Travel & Tourism Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Dedicated BPO services for the travel industry, from booking
              support to customer service, helping you deliver exceptional
              travel experiences and operational excellence.
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
                Travel Industry Excellence
              </h2>
              <p className="text-gray-600 mb-6">
                Our travel-focused services support the entire tourism
                ecosystem. From reservation management to customer support, we
                help travel companies enhance guest experiences and streamline
                operations.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Reservation & Booking Management
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  24/7 Customer Support
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Travel Documentation Support
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Loyalty Program Management
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">Travel Operations Visualization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Travel BPO Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive support services for travel and hospitality
              operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">✈️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Booking Support</h3>
              <p className="text-gray-600">
                Flight, hotel, and tour booking assistance and management
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🏨</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Reservation Management
              </h3>
              <p className="text-gray-600">
                Hotel reservations, modifications, and cancellation processing
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
              <p className="text-gray-600">
                24/7 travel support and emergency assistance services
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🎫</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Ticketing Services</h3>
              <p className="text-gray-600">
                E-ticket generation, modifications, and refund processing
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Payment Processing</h3>
              <p className="text-gray-600">
                Secure payment handling and billing support services
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Loyalty Programs</h3>
              <p className="text-gray-600">
                Loyalty program management and reward point processing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Segments */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Travel Segments We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized expertise across various travel and tourism sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Airlines</h3>
              <p className="text-gray-600 text-sm">
                Flight booking, check-in, and passenger services
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Hotels & Resorts</h3>
              <p className="text-gray-600 text-sm">
                Reservation management and guest services
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Travel Agencies</h3>
              <p className="text-gray-600 text-sm">
                Tour planning and travel booking assistance
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Cruise Lines</h3>
              <p className="text-gray-600 text-sm">
                Cruise booking and passenger support services
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Car Rentals</h3>
              <p className="text-gray-600 text-sm">
                Vehicle reservation and rental support
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Tour Operators</h3>
              <p className="text-gray-600 text-sm">
                Package tour management and coordination
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Travel Insurance</h3>
              <p className="text-gray-600 text-sm">
                Policy management and claims processing
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Corporate Travel</h3>
              <p className="text-gray-600 text-sm">
                Business travel coordination and expense management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Support Process */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Travel Support Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Supporting travelers throughout their entire journey experience
            </p>
          </div>

          <div className="grid md:grid-cols-6 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Planning</h3>
              <p className="text-gray-600">
                Travel planning assistance and destination guidance
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Booking</h3>
              <p className="text-gray-600">
                Reservation management and confirmation services
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Pre-Travel</h3>
              <p className="text-gray-600">
                Check-in assistance and travel documentation support
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">During Travel</h3>
              <p className="text-gray-600">
                24/7 support and emergency assistance services
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold mb-2">Post-Travel</h3>
              <p className="text-gray-600">
                Feedback collection and loyalty program management
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                6
              </div>
              <h3 className="text-lg font-semibold mb-2">Follow-up</h3>
              <p className="text-gray-600">
                Relationship management and future travel planning
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
              Travel Technology Integration
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Seamless integration with leading travel and hospitality platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  🎯
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">GDS Systems</h3>
                  <p className="text-gray-600">
                    Global Distribution System integration for booking and
                    inventory.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  🏨
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    PMS Integration
                  </h3>
                  <p className="text-gray-600">
                    Property Management System connectivity for hotel
                    operations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  💳
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Payment Gateways
                  </h3>
                  <p className="text-gray-600">
                    Secure payment processing and merchant services integration.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  📱
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
                  <p className="text-gray-600">
                    Travel mobile application support and integration services.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  🌐
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    API Connectivity
                  </h3>
                  <p className="text-gray-600">
                    Real-time API connections with travel service providers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  📊
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">CRM Systems</h3>
                  <p className="text-gray-600">
                    Customer relationship management and loyalty program
                    integration.
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
              Travel Service Performance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">96%</div>
              <h3 className="text-lg font-semibold mb-2">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600">
                Travel customer satisfaction rate across all services
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">
                30sec
              </div>
              <h3 className="text-lg font-semibold mb-2">Average Response</h3>
              <p className="text-gray-600">
                Average response time for customer inquiries
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">24/7</div>
              <h3 className="text-lg font-semibold mb-2">
                Support Availability
              </h3>
              <p className="text-gray-600">
                Round-the-clock support for travel emergencies
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">99%</div>
              <h3 className="text-lg font-semibold mb-2">Booking Accuracy</h3>
              <p className="text-gray-600">
                Accurate booking processing and confirmation rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Enhance Your Travel Operations
          </h2>
          <p className="text-gray-600 mb-8">
            Partner with us to deliver exceptional travel experiences and
            streamline your hospitality operations.
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
