export default function TeamValues() {
  const values = [
    {
      title: "Excellence First",
      description:
        "We set the highest standards and never compromise on quality or integrity in our delivery.",
      icon: "⭐",
    },
    {
      title: "Client Partnership",
      description:
        "Your success is our success. We work as an extension of your team, not just a vendor.",
      icon: "🤝",
    },
    {
      title: "Innovation Drive",
      description:
        "We continuously invest in emerging technologies and methodologies to stay ahead of the curve.",
      icon: "🚀",
    },
    {
      title: "Global Mindset",
      description:
        "We think globally while acting locally, bringing worldwide best practices to every engagement.",
      icon: "🌍",
    },
    {
      title: "Continuous Learning",
      description:
        "We foster a culture of growth where every team member is empowered to learn and develop.",
      icon: "📚",
    },
    {
      title: "Ethical Leadership",
      description:
        "We lead by example with transparency, accountability, and ethical business practices.",
      icon: "⚖️",
    },
  ];

  return (
    <section className="bg-linear-to-br from-[#1a1625] to-[#0a0a0a] text-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#280b57]/20 text-[#ffffff] text-sm font-semibold rounded-full border border-[#280b57]/30 mb-6 uppercase tracking-wider">
            Our Values
          </span>
          <h2 className="text-5xl font-bold mb-6">What Drives Us Forward</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our core values shape every decision we make and every relationship
            we build. They&apos;re not just words on a wall - they&apos;re the
            foundation of our culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-[#0a0a0a]/50 p-8 border border-[#280b57]/20 hover:border-[#280b57]/40 transition-all duration-300 text-center hover:bg-[#280b57]/5"
            >
              <div className="text-5xl mb-6">{value.icon}</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#280b57] transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-[#0a0a0a]/50 p-12 border border-[#280b57]/20">
            <h3 className="text-3xl font-bold mb-6">Join Our Mission</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for exceptional individuals who share
              our values and passion for delivering transformational results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#280b57] text-white px-8 py-4 text-lg font-semibold hover:bg-[#1f0944] transition-all duration-300 uppercase tracking-wider border-2 border-[#280b57] hover:border-[#1f0944]">
                View Career Opportunities
              </button>
              <button className="border-2 border-[#280b57] text-[#280b57] px-8 py-4 text-lg font-semibold hover:bg-[#280b57] hover:text-white transition-all duration-300 uppercase tracking-wider">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
