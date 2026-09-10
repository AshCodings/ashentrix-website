import Link from "next/link";

export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#280b57] to-[#1a0a3e] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              E-commerce Industry Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Comprehensive BPO services tailored for e-commerce businesses,
              from customer service to order fulfillment, helping you scale
              operations and deliver exceptional shopping experiences.
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
                E-commerce Excellence
              </h2>
              <p className="text-gray-600 mb-6">
                Our e-commerce specialized services support every aspect of
                online retail operations. From pre-sales support to
                post-purchase care, we help you deliver seamless customer
                experiences that drive growth and loyalty.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Customer Service & Live Chat Support
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Order Processing & Management
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Inventory Management & Updates
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Digital Marketing Support
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">
                E-commerce Operations Visualization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              E-commerce BPO Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end support services for online retail businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🛒</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
              <p className="text-gray-600">
                24/7 multichannel customer support for pre and post-purchase
                assistance
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Order Management</h3>
              <p className="text-gray-600">
                Complete order processing from placement to fulfillment and
                delivery
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Inventory Management
              </h3>
              <p className="text-gray-600">
                Real-time inventory tracking, updates, and stock level
                management
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Live Chat Support</h3>
              <p className="text-gray-600">
                Real-time chat assistance for website visitors and customers
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Returns & Exchanges
              </h3>
              <p className="text-gray-600">
                Streamlined return processing and customer refund management
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Digital Marketing</h3>
              <p className="text-gray-600">
                SEO, content management, and social media marketing support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Platforms */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              E-commerce Platforms We Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expertise across major e-commerce platforms and marketplaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Shopify</h3>
              <p className="text-gray-600 text-sm">
                Store management, app integration, and optimization
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">WooCommerce</h3>
              <p className="text-gray-600 text-sm">
                WordPress e-commerce setup and maintenance
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Magento</h3>
              <p className="text-gray-600 text-sm">
                Enterprise e-commerce platform management
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Amazon</h3>
              <p className="text-gray-600 text-sm">
                Marketplace management and FBA support
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">eBay</h3>
              <p className="text-gray-600 text-sm">
                Listing management and seller support
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">BigCommerce</h3>
              <p className="text-gray-600 text-sm">
                Store optimization and performance management
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Etsy</h3>
              <p className="text-gray-600 text-sm">
                Handmade and creative product marketplace support
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Custom Platforms</h3>
              <p className="text-gray-600 text-sm">
                Bespoke e-commerce solution management
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
              Complete Customer Journey Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Supporting customers at every stage of their shopping experience
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Pre-Sale</h3>
              <p className="text-gray-600">
                Product information, recommendations, and purchase guidance
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Purchase</h3>
              <p className="text-gray-600">
                Order assistance, payment support, and checkout optimization
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Fulfillment</h3>
              <p className="text-gray-600">
                Order processing, tracking updates, and delivery coordination
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Post-Sale</h3>
              <p className="text-gray-600">
                Delivery confirmation, usage support, and satisfaction surveys
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold mb-2">Retention</h3>
              <p className="text-gray-600">
                Loyalty programs, repeat purchase campaigns, and feedback
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              E-commerce Performance Metrics
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">30s</div>
              <h3 className="text-lg font-semibold mb-2">Response Time</h3>
              <p className="text-gray-600">
                Average live chat and email response time
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">98%</div>
              <h3 className="text-lg font-semibold mb-2">Order Accuracy</h3>
              <p className="text-gray-600">
                Accurate order processing and fulfillment rate
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">25%</div>
              <h3 className="text-lg font-semibold mb-2">Conversion Boost</h3>
              <p className="text-gray-600">
                Average improvement in conversion rates with support
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">90%</div>
              <h3 className="text-lg font-semibold mb-2">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600">
                High satisfaction scores from e-commerce customers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Scale Your E-commerce Business
          </h2>
          <p className="text-gray-600 mb-8">
            Partner with us to enhance customer experience and accelerate your
            online retail growth.
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
