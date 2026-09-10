export default function TechSaaS() {
  return (
    <section
      id="tech-saas"
      className="bg-gradient-to-br from-[#1a1625] to-[#0a0a0a] text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-[#0a0a0a]/50 p-6 border border-[#280b57]/20">
              <h3 className="text-xl font-bold mb-3">
                Scalable Infrastructure
              </h3>
              <p className="text-gray-300">
                Cloud-native solutions that grow with your user base and handle
                traffic spikes seamlessly.
              </p>
            </div>
            <div className="bg-[#0a0a0a]/50 p-6 border border-[#280b57]/20">
              <h3 className="text-xl font-bold mb-3">API Integration</h3>
              <p className="text-gray-300">
                Seamless integration with your existing tech stack through
                robust APIs and webhooks.
              </p>
            </div>
            <div className="bg-[#0a0a0a]/50 p-6 border border-[#280b57]/20">
              <h3 className="text-xl font-bold mb-3">DevOps Support</h3>
              <p className="text-gray-300">
                24/7 technical support and incident response to keep your
                applications running smoothly.
              </p>
            </div>
          </div>

          <div>
            <span className="inline-block px-4 py-2 bg-[#280b57]/20 text-[#ffffff] text-sm font-semibold rounded-full border border-[#280b57]/30 mb-6 uppercase tracking-wider">
              Technology & SaaS
            </span>
            <h2 className="text-5xl font-bold mb-6">
              Scale Your
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#280b57] to-purple-400 block">
                Tech Business
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From startups to enterprise SaaS companies, we provide the
              technical expertise and support infrastructure you need to focus
              on innovation.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-2xl font-bold text-[#280b57] mb-2">
                  Ready
                </h4>
                <p className="text-gray-400">For Tech Partnerships</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#280b57] mb-2">
                  Target
                </h4>
                <p className="text-gray-400">99.95% Uptime</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#280b57] mb-2">
                  Growing
                </h4>
                <p className="text-gray-400">Integration Network</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#280b57] mb-2">24/7</h4>
                <p className="text-gray-400">Commitment</p>
              </div>
            </div>

            <button className="bg-[#280b57] text-white px-8 py-4 text-lg font-semibold hover:bg-[#1f0944] transition-all duration-300 uppercase tracking-wider border-2 border-[#280b57] hover:border-[#1f0944]">
              See Tech Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
