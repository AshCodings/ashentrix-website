export default function ServiceBenefits() {
  const benefits = [
    {
      title: "Cost Optimization",
      description:
        "Reduce operational costs by up to 45% through process optimization and automation",
      metrics: [
        "30-45% Cost Reduction",
        "ROI within 6-12 months",
        "Predictable pricing models",
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Enhanced Efficiency",
      description:
        "Streamline operations with intelligent automation and optimized workflows",
      metrics: [
        "50% Process Acceleration",
        "99.5% Accuracy Rate",
        "24/7 Operations",
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Scalable Growth",
      description:
        "Build flexible operations that scale seamlessly with your business expansion",
      metrics: ["Flexible Capacity", "Global Reach", "Rapid Scaling"],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Risk Management",
      description:
        "Comprehensive security, compliance, and risk mitigation frameworks",
      metrics: ["ISO 27001 Certified", "SOC 2 Compliant", "99.9% Uptime SLA"],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
            Measurable Business Benefits
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our services deliver quantifiable results that directly impact your
            bottom line and competitive advantage in the marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 border border-gray-200 group hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#280b57] text-white flex items-center justify-center group-hover:bg-[#280b57]/90 transition-colors flex-shrink-0">
                  {benefit.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {benefit.description}
                  </p>

                  <div className="space-y-2">
                    {benefit.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#280b57]"></div>
                        <span className="text-sm font-medium text-gray-700">
                          {metric}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#280b57] text-white p-12 text-center">
          <h3 className="text-3xl font-semibold mb-6">
            Ready to Transform Your Operations?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join 200+ companies that have already transformed their operations
            with Ashentrix. Let&apos;s discuss how we can deliver measurable
            results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#280b57] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors">
              Get Free Assessment
            </button>
            <button className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-[#280b57] transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
