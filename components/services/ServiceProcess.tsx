export default function ServiceProcess() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Assessment",
      description:
        "Comprehensive analysis of current processes and identification of optimization opportunities",
      activities: [
        "Process Mapping",
        "Gap Analysis",
        "Technology Assessment",
        "Risk Evaluation",
      ],
    },
    {
      number: "02",
      title: "Solution Design",
      description:
        "Custom solution architecture designed to meet your specific business requirements",
      activities: [
        "Solution Blueprint",
        "Integration Planning",
        "Resource Allocation",
        "Timeline Development",
      ],
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "Systematic deployment with minimal business disruption and comprehensive testing",
      activities: [
        "Phased Rollout",
        "System Integration",
        "User Training",
        "Quality Assurance",
      ],
    },
    {
      number: "04",
      title: "Optimization",
      description:
        "Continuous monitoring and improvement to ensure sustained performance excellence",
      activities: [
        "Performance Monitoring",
        "Process Refinement",
        "Reporting Analytics",
        "Ongoing Support",
      ],
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
            Our Proven Methodology
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A systematic approach refined through hundreds of successful
            implementations across diverse industries and business functions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-200 transform translate-x-4 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#280b57]"></div>
                </div>
              )}

              <div className="bg-[#F8FAFC] p-8 border border-gray-200 group-hover:shadow-lg transition-all duration-300 relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[#280b57] text-white flex items-center justify-center mb-4 font-bold text-xl">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                    Key Activities
                  </p>
                  {step.activities.map((activity, activityIndex) => (
                    <div
                      key={activityIndex}
                      className="flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-[#280b57]"></div>
                      <span className="text-sm text-gray-600">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[#F8FAFC] p-8 max-w-4xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Let&apos;s discuss how our proven methodology can be tailored to
              your specific business needs and objectives.
            </p>
            <button className="bg-[#280b57] text-white px-8 py-3 font-semibold hover:bg-[#280b57]/90 transition-colors">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
