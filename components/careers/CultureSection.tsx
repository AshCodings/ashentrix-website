export default function CultureSection() {
  const benefits = [
    {
      title: "Competitive Compensation",
      description:
        "Market-leading salaries, equity participation, and performance bonuses.",
      icon: "💰",
    },
    {
      title: "Health & Wellness",
      description:
        "Comprehensive medical, dental, vision coverage plus wellness programs.",
      icon: "🏥",
    },
    {
      title: "Flexible Work",
      description:
        "Remote-first culture with flexible schedules and unlimited PTO.",
      icon: "🏡",
    },
    {
      title: "Learning & Development",
      description:
        "Annual learning budget, conferences, certifications, and mentorship.",
      icon: "📚",
    },
    {
      title: "Global Opportunities",
      description:
        "Work with international teams and travel opportunities across offices.",
      icon: "✈️",
    },
    {
      title: "Innovation Time",
      description:
        "20% time for passion projects and exploring new technologies.",
      icon: "💡",
    },
  ];

  const values = [
    {
      title: "Excellence in Everything",
      description:
        "We hold ourselves to the highest standards and never settle for mediocrity.",
      stat: "99.2% Client Satisfaction",
    },
    {
      title: "Collaborative Spirit",
      description:
        "We believe the best results come from diverse perspectives working together.",
      stat: "50+ Nationalities",
    },
    {
      title: "Continuous Growth",
      description:
        "We invest in our people&apos;s development and celebrate their success.",
      stat: "$5K Learning Budget",
    },
    {
      title: "Innovation Focus",
      description:
        "We embrace new technologies and methodologies to stay ahead of the curve.",
      stat: "12 Patents Filed",
    },
  ];

  return (
    <section className="bg-linear-to-br from-[#1a1625] to-[#0a0a0a] text-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Culture Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#280b57]/20 text-[#ffffff] text-sm font-semibold rounded-full border border-[#280b57]/30 mb-6 uppercase tracking-wider">
            Our Culture
          </span>
          <h2 className="text-5xl font-bold mb-6">More Than Just a Job</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We&apos;ve built a culture where talented individuals can do their
            best work, grow their careers, and make a meaningful impact on the
            world.
          </p>
        </div>

        {/* Company Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a]/50 p-8 border border-[#280b57]/20 hover:border-[#280b57]/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{value.title}</h3>
                <span className="text-2xl font-bold text-[#280b57]">
                  {value.stat}
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Benefits &
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#280b57] to-purple-400">
              {" "}
              Perks
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We believe in taking care of our people so they can focus on
            delivering exceptional results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a]/50 p-8 border border-[#280b57]/20 hover:border-[#280b57]/40 transition-all duration-300 text-center group"
            >
              <div className="text-4xl mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#280b57] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-[#0a0a0a]/50 p-12 border border-[#280b57]/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6">What Our Team Says</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">👩‍💼</div>
              <blockquote className="text-lg text-gray-300 mb-4 italic">
                &quot;The learning opportunities here are incredible. I&apos;ve
                grown more in 2 years than I did in the previous 5 years of my
                career.&quot;
              </blockquote>
              <p className="font-semibold text-[#280b57]">Sarah Kim</p>
              <p className="text-sm text-gray-400">Senior Consultant</p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">👨‍💻</div>
              <blockquote className="text-lg text-gray-300 mb-4 italic">
                &quot;The work-life balance is amazing. I can be productive
                while still having time for my family and personal
                interests.&quot;
              </blockquote>
              <p className="font-semibold text-[#280b57]">Marcus Rodriguez</p>
              <p className="text-sm text-gray-400">Software Engineer</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Make an Impact?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our team of exceptional professionals who are passionate about
            transforming businesses and shaping the future of operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#280b57] text-white px-8 py-4 text-lg font-semibold hover:bg-[#1f0944] transition-all duration-300 uppercase tracking-wider border-2 border-[#280b57] hover:border-[#1f0944]">
              Browse Open Positions
            </button>
            <button className="border-2 border-[#280b57] text-[#280b57] px-8 py-4 text-lg font-semibold hover:bg-[#280b57] hover:text-white transition-all duration-300 uppercase tracking-wider">
              Meet the Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
