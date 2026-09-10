export default function AboutHistory() {
  const milestones = [
    {
      year: "2025",
      title: "Company Launch",
      description:
        "Ashentrix Solutions is established in Delhi NCR, India with a vision to redefine outsourcing by blending human potential with intelligent systems for seamless global advantage.",
      achievement: "Fresh start, new opportunities",
    },
    {
      year: "Q1 2025",
      title: "Foundation Building",
      description:
        "Setting up our core team, establishing operational processes, and preparing comprehensive service offerings for the market.",
      achievement: "Team assembly phase",
    },
    {
      year: "Q2 2025",
      title: "Market Entry",
      description:
        "Beginning client acquisition, establishing partnerships, and launching our professional outsourcing services across multiple industries.",
      achievement: "Ready for business",
    },
    {
      year: "Future",
      title: "Growth Trajectory",
      description:
        "Planning strategic expansion, technology integration, and building long-term client relationships based on excellence and innovation.",
      achievement: "Scaling operations",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
            Our Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From a startup with a bold vision to a global leader in business
            transformation, our journey reflects our commitment to innovation,
            excellence, and client success.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-[#280b57]/20"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-[#280b57] border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-[#F8FAFC] p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-[#280b57] text-white px-3 py-1 text-sm font-bold">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {milestone.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#280b57]"></div>
                      <span className="text-sm font-medium text-[#280b57]">
                        {milestone.achievement}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Year Display for larger screens */}
                <div className="hidden md:block w-2/12"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[#280b57] text-white p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Looking Forward</h3>
            <p className="text-gray-200 mb-6">
              Our journey continues as we shape the future of business
              operations through innovation, sustainability, and unwavering
              commitment to client success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">2025</div>
                <p className="text-sm text-gray-200">New Beginning</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Ready</div>
                <p className="text-sm text-gray-200">For Growth</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Future</div>
                <p className="text-sm text-gray-200">Focused Vision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
