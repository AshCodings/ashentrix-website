import Image from "next/image";

export default function ExecutiveTeam() {
  const executives = [
    {
      name: "Ashish Kumar Jha",
      role: "Founder & Managing Director",
      bio: "Visionary leader and founder of Ashentrix Solutions, dedicated to transforming business process outsourcing with innovative solutions and exceptional service delivery.",
      image: "/ashishjha.jpg",
      linkedin: "#",
      achievements: [
        "Business Strategy",
        "Market Leadership",
        "Innovation Focus",
      ],
    },
    {
      name: "Priya Jha",
      role: "Co-Founder & Operations Head",
      bio: "Co-founder and operational excellence expert focused on building scalable processes and ensuring seamless service delivery for global clients.",
      image: "/priyajha.jpg",
      linkedin: "#",
      achievements: [
        "Operations Excellence",
        "Process Optimization",
        "Client Relations",
      ],
    },
  ];

  return (
    <section className="bg-[#0a0a0a] text-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Executive
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#280b57] to-purple-400">
              {" "}
              Leadership
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our founding leadership team is ready to build world-class
            outsourcing solutions for businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {executives.map((executive, index) => (
            <div
              key={index}
              className="group bg-linear-to-br from-[#1a1625] to-[#280b57]/10 p-6 hover:shadow-lg transition-all duration-300 flex gap-6 items-center"
            >
              <div className="relative w-52 h-64 shrink-0">
                <Image
                  src={executive.image}
                  alt={executive.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex-1 text-left">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-[#280b57] transition-colors">
                  {executive.name}
                </h3>

                <p className="text-[#280b57] font-semibold mb-4 uppercase tracking-wider text-sm">
                  {executive.role}
                </p>

                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {executive.bio}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">
                    Key Achievements:
                  </h4>
                  <div className="space-y-2">
                    {executive.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-center gap-2"
                      >
                        <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                        <span className="text-sm text-gray-300">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={executive.linkedin}
                  className="inline-flex items-center gap-2 text-[#280b57] font-semibold hover:text-white transition-colors"
                >
                  Connect on LinkedIn
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
