export default function ServiceOverview() {
  const serviceCategories = [
    {
      title: "Customer & Technical Support",
      description:
        "Personalized, multilingual assistance and end-to-end technical solutions",
      services: [
        "Multilingual Customer Support (Voice / Chat / Email)",
        "End-to-end Technical Troubleshooting",
        "24/7 Technical Helpdesk Services",
        "SLA-driven Ticketing Management",
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Business Operations",
      description: "Streamlined operations and scalable workforce solutions",
      services: [
        "Streamlined Back Office Operations",
        "Process Optimization & Workflow Monitoring",
        "Compliant & Customer-friendly Collections",
        "Scalable Recruitment & Talent Solutions",
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
      title: "Data & Technology Services",
      description:
        "Secure data management and custom digital solutions for performance & scalability",
      services: [
        "Secure Data Management & Business Intelligence",
        "Real-time Analytics & Performance Insights",
        "Custom Web & App Development Solutions",
        "Creative Design & Print Support Services",
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a3.5 3.5 0 10-3.256-4.891L9 8.5 7.756 8.109A3.5 3.5 0 002 9.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
            Our Core Service Offerings
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            At Ashentrix Solutions, we combine advanced technology with human
            expertise to deliver scalable, multilingual, and industry-ready
            outsourcing solutions designed to adapt to your business goals,
            enhance customer engagement, and create measurable long-term value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#F8FAFC] p-8 border border-gray-200 group hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#280b57] text-white flex items-center justify-center mb-4 group-hover:bg-[#280b57]/90 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#280b57]"></div>
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <button className="text-[#280b57] font-semibold hover:text-[#280b57]/80 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#280b57] text-white p-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Custom Solutions for Every Business
          </h3>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Every organization is unique. We work closely with you to design and
            implement tailored solutions that address your specific challenges
            and objectives.
          </p>
          <button className="bg-white text-[#280b57] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors">
            Discuss Your Requirements
          </button>
        </div>
      </div>
    </section>
  );
}
