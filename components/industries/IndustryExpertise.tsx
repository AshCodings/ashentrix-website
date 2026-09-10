export default function IndustryExpertise() {
  const industries = [
    {
      title: "Insurance",
      description: "Comprehensive insurance support and claims processing",
      icon: "🛡️",
      stats: ["Claims Processing", "Policy Management", "Risk Assessment"],
      link: "#insurance",
    },
    {
      title: "Telecom",
      description: "Advanced telecommunications support and customer service",
      icon: "📡",
      stats: ["Network Support", "24/7 Service", "Technical Expertise"],
      link: "#telecom",
    },
    {
      title: "Healthcare",
      description: "HIPAA-compliant healthcare support services",
      icon: "🏥",
      stats: ["HIPAA Certified", "Medical Expertise", "Emergency Support"],
      link: "#healthcare",
    },
    {
      title: "E-commerce & Retail",
      description: "Omnichannel customer experience solutions",
      icon: "🛒",
      stats: ["Peak Season Ready", "Global Coverage", "Real-time Analytics"],
      link: "#retail-ecommerce",
    },
    {
      title: "Banking & Finance",
      description: "Secure, compliant solutions for financial institutions",
      icon: "💰",
      stats: ["99.9% Uptime", "SOX Compliant", "24/7 Support"],
      link: "#banking-finance",
    },
    {
      title: "IT & Software Development",
      description: "Scalable support for high-growth tech companies",
      icon: "💻",
      stats: ["Ready for Tech Clients", "Multi-lingual", "API Integration"],
      link: "#tech-saas",
    },
    {
      title: "Travel & Hospitality",
      description: "Guest experience and reservation management solutions",
      icon: "✈️",
      stats: ["Booking Support", "Guest Services", "Multi-platform"],
      link: "#travel-hospitality",
    },
    {
      title: "Automobiles",
      description: "Automotive industry support and customer service",
      icon: "🚗",
      stats: ["Technical Support", "Parts Management", "Service Coordination"],
      link: "#automobiles",
    },
    {
      title: "Education",
      description: "Educational institution support and student services",
      icon: "�",
      stats: ["Student Support", "Administrative Help", "Learning Management"],
      link: "#education",
    },
    {
      title: "Hardware & IoT",
      description: "Hardware and IoT device support services",
      icon: "⚙️",
      stats: ["Device Support", "IoT Management", "Technical Help"],
      link: "#hardware-iot",
    },
    {
      title: "Entertainment",
      description: "Media and entertainment industry solutions",
      icon: "�",
      stats: ["Content Support", "User Engagement", "Platform Management"],
      link: "#entertainment",
    },
    {
      title: "Real Estate",
      description: "Property management and client relationship solutions",
      icon: "🏢",
      stats: ["CRM Integration", "Lead Management", "Market Analysis"],
      link: "#real-estate",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#1a1625] to-[#0a0a0a] text-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#280b57]/20 text-[#ffffff] text-sm font-semibold rounded-full border border-[#280b57]/30 mb-6 uppercase tracking-wider">
            Our Expertise
          </span>
          <h2 className="text-5xl font-bold mb-6">Industries We Transform</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to serve companies of all sizes with industry-specific
            solutions that drive growth and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-[#0a0a0a]/50 p-8 border border-[#280b57]/20 hover:border-[#280b57]/40 transition-all duration-300 hover:bg-[#280b57]/5 cursor-pointer"
            >
              <div className="text-4xl mb-6">{industry.icon}</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#280b57] transition-colors">
                {industry.title}
              </h3>
              <p className="text-gray-300 mb-6">{industry.description}</p>
              <div className="space-y-2 mb-6">
                {industry.stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                    <span className="text-sm text-gray-400">{stat}</span>
                  </div>
                ))}
              </div>
              <a
                href={industry.link}
                className="inline-flex items-center gap-2 text-[#280b57] font-semibold hover:text-white transition-colors"
              >
                Learn More
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
