export default function CaseStudyGrid() {
  const caseStudies = [
    {
      title: "Banking Digital Transformation Framework",
      industry: "Banking & Finance",
      challenge: "Legacy systems causing customer drop-off",
      solution: "AI-powered omnichannel support platform methodology",
      results: [
        "Target: 67% response time reduction",
        "Goal: 89% customer satisfaction",
        "Aim: Significant cost savings",
      ],
      image: "💰",
      color: "from-blue-600 to-blue-800",
    },
    {
      title: "SaaS Scaling Strategy Blueprint",
      industry: "Technology & SaaS",
      challenge: "Infrastructure scalability for rapid growth",
      solution: "Cloud-native scalable support architecture",
      results: [
        "Target: 99.99% uptime",
        "Goal: 10x user base support",
        "Aim: 50% faster deployment",
      ],
      image: "💻",
      color: "from-purple-600 to-purple-800",
    },
    {
      title: "Retail Giant Optimizes Peak Season",
      industry: "Retail & E-commerce",
      challenge: "System crashes during Black Friday sales",
      solution: "Load-balanced global support network",
      results: [
        "Zero downtime events",
        "300% traffic handling",
        "45% increase in conversions",
      ],
      image: "🛒",
      color: "from-green-600 to-green-800",
    },
    {
      title: "Healthcare Provider Ensures Compliance",
      industry: "Healthcare",
      challenge: "HIPAA compliance gaps in patient data",
      solution: "Secure, compliant data management system",
      results: [
        "100% HIPAA compliance",
        "60% faster processing",
        "Zero security incidents",
      ],
      image: "🏥",
      color: "from-red-600 to-red-800",
    },
    {
      title: "Manufacturing Supply Chain Blueprint",
      industry: "Manufacturing",
      challenge: "Supply chain visibility and coordination needs",
      solution: "Real-time tracking and automation platform framework",
      results: [
        "Target: 40% inventory reduction",
        "Goal: 25% faster delivery",
        "Aim: Major cost optimization",
      ],
      image: "🏭",
      color: "from-orange-600 to-orange-800",
    },
    {
      title: "Real Estate Operations Framework",
      industry: "Real Estate",
      challenge: "Manual processes affecting client service",
      solution: "Automated workflow and CRM integration strategy",
      results: [
        "Target: 70% process automation",
        "Goal: 3x faster response",
        "Aim: 85% client satisfaction",
      ],
      image: "🏢",
      color: "from-indigo-600 to-indigo-800",
    },
  ];

  return (
    <section className="bg-[#0a0a0a] text-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Strategic Blueprints,
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#280b57] to-purple-400">
              {" "}
              Future Impact
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every partnership will be unique. Here&apos;s how we&apos;re ready
            to deliver transformational results across different industries and
            challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#1a1625] to-[#280b57]/10 p-8 border border-[#280b57]/20 hover:border-[#280b57]/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl">{study.image}</div>
                <span className="px-3 py-1 bg-[#280b57]/20 text-[#280b57] text-xs font-semibold rounded-full uppercase tracking-wider">
                  {study.industry}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-[#280b57] transition-colors">
                {study.title}
              </h3>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">
                  Challenge:
                </h4>
                <p className="text-gray-300 text-sm">{study.challenge}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">
                  Solution:
                </h4>
                <p className="text-gray-300 text-sm">{study.solution}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">
                  Results:
                </h4>
                <div className="space-y-2">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                      <span className="text-sm text-gray-300">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-[#280b57]/20 text-[#280b57] py-3 font-semibold hover:bg-[#280b57] hover:text-white transition-all duration-300 uppercase tracking-wider text-sm">
                Read Full Case Study
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-[#280b57] text-white px-8 py-4 text-lg font-semibold hover:bg-[#1f0944] transition-all duration-300 uppercase tracking-wider border-2 border-[#280b57] hover:border-[#1f0944]">
            View More Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}
