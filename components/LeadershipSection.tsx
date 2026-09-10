"use client";

import Image from "next/image";

interface LeadershipMember {
  name: string;
  position: string;
  description: string;
  image: string;
  expertise: string[];
}

export default function LeadershipSection() {
  const leaders: LeadershipMember[] = [
    {
      name: "Ashish Kumar Jha",
      position: "Founder & Managing Director",
      description:
        "Visionary leader and founder of Ashentrix Solutions, dedicated to transforming business process outsourcing with innovative solutions and exceptional service delivery.",
      image: "/ashishjha.jpg",
      expertise: ["Business Strategy", "Market Leadership", "Innovation Focus"],
    },
    {
      name: "Priya Jha",
      position: "Co-Founder & Executive Director",
      description:
        "Co-founder and operational excellence expert focused on building scalable processes and ensuring seamless service delivery for global clients.",
      image: "/priyajha.jpg",
      expertise: [
        "Operations Excellence",
        "Process Optimization",
        "Client Relations",
      ],
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-3 sm:mb-4 tracking-tight">
            Leadership Excellence
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Meet the experienced leaders driving innovation and delivering
            exceptional results for our clients
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6">
                <div className="relative w-full sm:w-48 lg:w-52 h-64 sm:h-64 shrink-0 mx-auto sm:mx-0">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-contain rounded-lg sm:rounded-none"
                  />
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-[#280b57] font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                    {leader.position}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {leader.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                      Expertise
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                      {leader.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 sm:px-3 py-1 bg-[#280b57]/10 text-[#280b57] text-xs font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 lg:mt-12">
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base px-4 sm:px-0">
            Join our team of industry experts and shape the future of business
            operations
          </p>
          <button className="bg-[#280b57] text-white px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold hover:bg-[#280b57]/90 transition-colors rounded-lg">
            View Career Opportunities
          </button>
        </div>
      </div>
    </section>
  );
}
