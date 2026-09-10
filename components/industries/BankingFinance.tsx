export default function BankingFinance() {
  return (
    <section id="banking-finance" className="bg-[#0a0a0a] text-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-[#280b57]/20 text-[#ffffff] text-sm font-semibold rounded-full border border-[#280b57]/30 mb-6 uppercase tracking-wider">
              Banking & Finance
            </span>
            <h2 className="text-5xl font-bold mb-6">
              Secure Financial
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#280b57] to-purple-400 block">
                Operations
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Navigate complex regulatory landscapes with confidence. Our
              financial services solutions ensure compliance, security, and
              exceptional customer experiences.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-2xl font-bold text-[#280b57] mb-2">
                  99.9%
                </h4>
                <p className="text-gray-400">System Uptime</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#280b57] mb-2">SOX</h4>
                <p className="text-gray-400">Compliant Operations</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#280b57] mb-2">24/7</h4>
                <p className="text-gray-400">Security Monitoring</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#280b57] mb-2">150+</h4>
                <p className="text-gray-400">Financial Institutions</p>
              </div>
            </div>

            <button className="bg-[#280b57] text-white px-8 py-4 text-lg font-semibold hover:bg-[#1f0944] transition-all duration-300 uppercase tracking-wider border-2 border-[#280b57] hover:border-[#1f0944]">
              View Case Studies
            </button>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#1a1625] to-[#280b57]/10 p-6 border border-[#280b57]/20">
              <h3 className="text-xl font-bold mb-3">Regulatory Compliance</h3>
              <p className="text-gray-300">
                Stay ahead of changing regulations with automated compliance
                monitoring and reporting systems.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1a1625] to-[#280b57]/10 p-6 border border-[#280b57]/20">
              <h3 className="text-xl font-bold mb-3">Risk Management</h3>
              <p className="text-gray-300">
                Advanced analytics and AI-powered risk assessment tools to
                protect your institution and customers.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1a1625] to-[#280b57]/10 p-6 border border-[#280b57]/20">
              <h3 className="text-xl font-bold mb-3">Customer Experience</h3>
              <p className="text-gray-300">
                Personalized banking experiences with secure, efficient customer
                support across all channels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
