export default function RetailEcommerce() {
  return (
    <section id="retail-ecommerce" className="bg-[#0a0a0a] text-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-[#280b57]/20 text-[#ffffff] text-sm font-semibold rounded-full border border-[#280b57]/30 mb-6 uppercase tracking-wider">
              Retail & E-commerce
            </span>
            <h2 className="text-5xl font-bold mb-6">
              Seamless Customer
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#280b57] to-purple-400 block">
                Experiences
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Deliver exceptional omnichannel experiences that drive sales and
              build customer loyalty across all touchpoints.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-2xl font-bold text-[#280b57] mb-2">300+</h4>
                <p className="text-gray-400">Retail Brands</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#280b57] mb-2">Peak</h4>
                <p className="text-gray-400">Season Ready</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#280b57] mb-2">
                  Global
                </h4>
                <p className="text-gray-400">Coverage</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#280b57] mb-2">
                  Real-time
                </h4>
                <p className="text-gray-400">Analytics</p>
              </div>
            </div>

            <button className="bg-[#280b57] text-white px-8 py-4 text-lg font-semibold hover:bg-[#1f0944] transition-all duration-300 uppercase tracking-wider border-2 border-[#280b57] hover:border-[#1f0944]">
              Explore Solutions
            </button>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#1a1625] to-[#280b57]/10 p-6 border border-[#280b57]/20">
              <h3 className="text-xl font-bold mb-3">Omnichannel Support</h3>
              <p className="text-gray-300">
                Unified customer experience across web, mobile, social media,
                and in-store interactions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1a1625] to-[#280b57]/10 p-6 border border-[#280b57]/20">
              <h3 className="text-xl font-bold mb-3">Order Management</h3>
              <p className="text-gray-300">
                End-to-end order processing, inventory management, and
                fulfillment optimization services.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1a1625] to-[#280b57]/10 p-6 border border-[#280b57]/20">
              <h3 className="text-xl font-bold mb-3">Customer Analytics</h3>
              <p className="text-gray-300">
                Data-driven insights into customer behavior, preferences, and
                purchasing patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
