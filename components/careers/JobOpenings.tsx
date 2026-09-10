export default function JobOpenings() {
  const departments = [
    {
      name: "Engineering & Technology",
      openings: 12,
      jobs: [
        {
          title: "Senior Software Engineer",
          location: "New York, NY / Remote",
          type: "Full-time",
          experience: "5+ years",
          description:
            "Build scalable systems that power our global operations platform.",
        },
        {
          title: "DevOps Engineer",
          location: "London, UK / Remote",
          type: "Full-time",
          experience: "3+ years",
          description:
            "Optimize our cloud infrastructure and deployment pipelines.",
        },
        {
          title: "Data Scientist",
          location: "Singapore / Remote",
          type: "Full-time",
          experience: "4+ years",
          description:
            "Extract insights from complex datasets to drive business decisions.",
        },
      ],
    },
    {
      name: "Operations & Consulting",
      openings: 8,
      jobs: [
        {
          title: "Senior Business Consultant",
          location: "Toronto, CA",
          type: "Full-time",
          experience: "6+ years",
          description:
            "Lead client engagements and drive transformational initiatives.",
        },
        {
          title: "Process Optimization Specialist",
          location: "Sydney, AU",
          type: "Full-time",
          experience: "4+ years",
          description:
            "Design and implement process improvements for client operations.",
        },
        {
          title: "Project Manager",
          location: "Multiple Locations",
          type: "Full-time",
          experience: "5+ years",
          description:
            "Manage complex client projects from initiation to successful delivery.",
        },
      ],
    },
    {
      name: "Sales & Marketing",
      openings: 6,
      jobs: [
        {
          title: "Enterprise Sales Director",
          location: "New York, NY",
          type: "Full-time",
          experience: "8+ years",
          description:
            "Drive revenue growth through strategic enterprise partnerships.",
        },
        {
          title: "Marketing Manager",
          location: "London, UK / Remote",
          type: "Full-time",
          experience: "4+ years",
          description:
            "Develop and execute marketing strategies to drive brand awareness.",
        },
        {
          title: "Business Development Representative",
          location: "Multiple Locations",
          type: "Full-time",
          experience: "2+ years",
          description:
            "Generate qualified leads and support the sales pipeline.",
        },
      ],
    },
  ];

  return (
    <section className="bg-[#0a0a0a] text-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Current
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#280b57] to-purple-400">
              {" "}
              Opportunities
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We&apos;re growing rapidly and looking for talented individuals to
            join our mission of transforming business operations worldwide.
          </p>

          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#280b57] mb-2">
                Growing
              </h3>
              <p className="text-gray-400">Team Size</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#280b57] mb-2">1</h3>
              <p className="text-gray-400">Primary Location</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#280b57] mb-2">Global</h3>
              <p className="text-gray-400">Vision</p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {departments.map((dept, deptIndex) => (
            <div
              key={deptIndex}
              className="bg-linear-to-br from-[#1a1625] to-[#280b57]/10 p-8 border border-[#280b57]/20"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold">{dept.name}</h3>
                <span className="px-4 py-2 bg-[#280b57]/20 text-[#280b57] font-semibold rounded-full">
                  {dept.openings} open positions
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dept.jobs.map((job, jobIndex) => (
                  <div
                    key={jobIndex}
                    className="bg-[#0a0a0a]/50 p-6 border border-[#280b57]/20 hover:border-[#280b57]/40 transition-all duration-300 group"
                  >
                    <h4 className="text-xl font-bold mb-3 group-hover:text-[#280b57] transition-colors">
                      {job.title}
                    </h4>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-[#280b57]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                        </svg>
                        <span className="text-sm text-gray-300">
                          {job.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-[#280b57]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-sm text-gray-300">
                          {job.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-[#280b57]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-sm text-gray-300">
                          {job.experience}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    <button className="w-full bg-[#280b57]/20 text-[#280b57] py-3 font-semibold hover:bg-[#280b57] hover:text-white transition-all duration-300 uppercase tracking-wider text-sm">
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button className="text-[#280b57] font-semibold hover:text-white transition-colors">
                  View All {dept.name} Positions →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-linear-to-br from-[#1a1625] to-[#280b57]/10 p-12 border border-[#280b57]/20">
            <h3 className="text-3xl font-bold mb-6">
              Don&apos;t See Your Dream Role?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for exceptional talent. Send us your
              resume and tell us how you&apos;d like to contribute to our
              mission.
            </p>
            <button className="bg-[#280b57] text-white px-8 py-4 text-lg font-semibold hover:bg-[#1f0944] transition-all duration-300 uppercase tracking-wider border-2 border-[#280b57] hover:border-[#1f0944]">
              Submit General Application
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
