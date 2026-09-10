import Image from "next/image";

export default function AboutTeam() {
  const founders = [
    {
      name: "Ashish Kumar Jha",
      role: "Founder & Managing Director",
      image: "/ashishjha.jpg",
      description:
        "Visionary leader driving business strategy and market expansion with focus on innovation and client success.",
    },
    {
      name: "Priya Jha",
      role: "Co-Founder & Operations Head",
      image: "/priyajha.jpg",
      description:
        "Operations expert focused on building scalable processes and ensuring exceptional service delivery.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet our founding team - Ashish Kumar Jha and Priya Jha - who are
            building Ashentrix Solutions to deliver exceptional business process
            outsourcing services.
          </p>
        </div>

        {/* Founding Team Photos */}
        <div className="grid grid-cols-1 gap-6 mb-16 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-white p-6 flex gap-6 items-center border border-gray-200"
            >
              <div className="relative w-52 h-64 shrink-0">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {founder.name}
                </h3>
                <p className="text-[#280b57] font-medium mb-3">
                  {founder.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {founder.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 text-center border border-gray-200">
            <div className="w-20 h-20 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">2</h3>
            <p className="text-[#280b57] font-medium mb-4">Founding Members</p>
            <p className="text-gray-600 text-sm">
              Ashish Kumar Jha & Priya Jha leading the vision and operations
            </p>
          </div>

          <div className="bg-white p-8 text-center border border-gray-200">
            <div className="w-20 h-20 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Growing
            </h3>
            <p className="text-[#280b57] font-medium mb-4">Team Size</p>
            <p className="text-gray-600 text-sm">
              Building our team with industry expertise and certifications
            </p>
          </div>

          <div className="bg-white p-8 text-center border border-gray-200">
            <div className="w-20 h-20 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">15+</h3>
            <p className="text-[#280b57] font-medium mb-4">Years Experience</p>
            <p className="text-gray-600 text-sm">
              Average experience across leadership and senior team members
            </p>
          </div>
        </div>

        <div className="bg-white p-12 border border-gray-200 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Join Our Team
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We are always looking for talented individuals who share our passion
            for excellence and want to make a meaningful impact in the world of
            business transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#280b57] text-white px-8 py-3 font-semibold hover:bg-[#280b57]/90 transition-colors">
              View Open Positions
            </button>
            <button className="border-2 border-[#280b57] text-[#280b57] px-8 py-3 font-semibold hover:bg-[#280b57] hover:text-white transition-colors">
              Learn About Our Culture
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
