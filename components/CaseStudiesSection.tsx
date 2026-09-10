interface CaseStudy {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

export default function CaseStudiesSection() {
  const caseStudies: CaseStudy[] = [
    {
      title: "Manufacturing Digital Transformation",
      client: "Manufacturing Industry Focus",
      industry: "Manufacturing",
      challenge: "Legacy systems creating operational inefficiencies",
      solution: "AI-driven automation and process optimization framework",
      results: [
        "Target: 40% efficiency increase",
        "Goal: 60% cost reduction",
        "Aim: 99% accuracy improvement",
      ],
      image: "/images/pro1.jpg",
    },
    {
      title: "Financial Services Modernization",
      client: "Banking & Finance Sector",
      industry: "Banking & Finance",
      challenge: "Manual processes slowing customer operations",
      solution:
        "Automated workflow systems and intelligent document processing",
      results: [
        "Target: 5x faster processing",
        "Goal: 85% error reduction",
        "Aim: 90% customer satisfaction",
      ],
      image: "/images/pro2.jpg",
    },
    {
      title: "Supply Chain Optimization Blueprint",
      client: "Retail & E-commerce Sector",
      industry: "Retail & E-commerce",
      challenge: "Inventory management inefficiencies",
      solution: "Predictive analytics and real-time tracking systems",
      results: [
        "Target: 95% inventory accuracy",
        "Goal: Significant cost savings",
        "Aim: 30% faster delivery",
      ],
      image: "/images/pro3.jpg",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
            Transformation Blueprints
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our strategic approach to operational excellence. See the
            transformation methodologies we&apos;re ready to implement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#280b57] to-[#1a0a3e] flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <div className="w-16 h-16 bg-white/20 mx-auto mb-4 flex items-center justify-center">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold">{study.industry}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <span className="text-xs font-semibold text-[#280b57] uppercase tracking-wide">
                    Case Study
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-1 mb-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 font-medium">{study.client}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">
                      Challenge
                    </h4>
                    <p className="text-sm text-gray-600">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">
                      Solution
                    </h4>
                    <p className="text-sm text-gray-600">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Key Results
                    </h4>
                    <div className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <div
                          key={resultIndex}
                          className="flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-[#280b57]"></div>
                          <span className="text-sm font-medium text-gray-800">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className="text-[#280b57] font-semibold text-sm hover:text-[#280b57]/80 transition-colors">
                    Read Full Case Study →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#280b57] text-white px-8 py-3 font-semibold hover:bg-[#280b57]/90 transition-colors">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}
