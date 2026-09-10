export default function ThoughtLeadership() {
  const resources = [
    {
      type: "White Paper",
      title: "The State of Business Process Automation 2025",
      description:
        "Comprehensive analysis of automation trends, ROI metrics, and implementation strategies for modern enterprises.",
      downloadCount: "Coming Soon",
      pages: 45,
      icon: "📋",
    },
    {
      type: "Research Report",
      title: "Global Remote Work Operations Study",
      description:
        "In-depth research on remote work effectiveness, productivity metrics, and best practices from leading organizations worldwide.",
      downloadCount: "Coming Soon",
      pages: 62,
      icon: "🔍",
    },
    {
      type: "Industry Guide",
      title: "Financial Services Digital Transformation Playbook",
      description:
        "Step-by-step guide for financial institutions navigating regulatory compliance while embracing digital innovation.",
      downloadCount: "Coming Soon",
      pages: 38,
      icon: "📚",
    },
    {
      type: "Webinar Series",
      title: "Future of Customer Experience",
      description:
        "4-part webinar series featuring industry experts discussing emerging CX trends, technologies, and implementation strategies.",
      downloadCount: "Coming Soon",
      pages: "4 Sessions",
      icon: "🎥",
    },
  ];

  return (
    <section className="bg-linear-to-br from-[#1a1625] to-[#0a0a0a] text-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-[#280b57]/20 text-[#ffffff] text-sm font-semibold rounded-full border border-[#280b57]/30 mb-6 uppercase tracking-wider">
              Thought Leadership
            </span>
            <h2 className="text-5xl font-bold mb-6">
              Deep Insights for
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#280b57] to-purple-400 block">
                Strategic Decisions
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Access our comprehensive research, industry reports, and expert
              analysis to make informed decisions about your business
              transformation initiatives.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-2xl font-bold text-[#280b57] mb-2">New</h4>
                <p className="text-gray-400">Research Initiatives</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#280b57] mb-2">
                  Fresh
                </h4>
                <p className="text-gray-400">Insights Coming</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#280b57] mb-2">2025</h4>
                <p className="text-gray-400">Target Goals</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#280b57] mb-2">
                  Ready
                </h4>
                <p className="text-gray-400">For Innovation</p>
              </div>
            </div>

            <button className="bg-[#280b57] text-white px-8 py-4 text-lg font-semibold hover:bg-[#1f0944] transition-all duration-300 uppercase tracking-wider border-2 border-[#280b57] hover:border-[#1f0944]">
              Access All Resources
            </button>
          </div>

          <div className="space-y-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-[#0a0a0a]/50 p-6 border border-[#280b57]/20 hover:border-[#280b57]/40 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{resource.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-[#280b57]/20 text-[#280b57] text-xs font-semibold rounded-full uppercase tracking-wider">
                        {resource.type}
                      </span>
                      <span className="text-sm text-gray-400">
                        {resource.downloadCount} downloads
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-[#280b57] transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        {resource.pages} pages
                      </span>
                      <button className="inline-flex items-center gap-2 text-[#280b57] font-semibold hover:text-white transition-colors text-sm">
                        Download
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-[#0a0a0a]/50 p-12 border border-[#280b57]/20 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Stay Informed with Our Newsletter
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get weekly insights, industry updates, and exclusive research
            delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-[#1a1625] border border-[#280b57]/30 text-white placeholder-gray-400 focus:outline-none focus:border-[#280b57]"
            />
            <button className="bg-[#280b57] text-white px-8 py-4 font-semibold hover:bg-[#1f0944] transition-all duration-300 uppercase tracking-wider whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
