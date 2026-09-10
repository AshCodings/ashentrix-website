import {
  Shield,
  Heart,
  Radio,
  ShoppingCart,
  DollarSign,
  Truck,
  Plane,
  Film,
  Computer,
} from "lucide-react";

export default function ClientLogosSection() {
  const industries = [
    { name: "Insurance Partnership", icon: Shield, industry: "Insurance" },
    { name: "Healthcare Solutions", icon: Heart, industry: "Healthcare" },
    { name: "Telecom Services", icon: Radio, industry: "Telecom" },
    { name: "E-commerce Growth", icon: ShoppingCart, industry: "E-commerce" },
    {
      name: "Finance & Accounting",
      icon: DollarSign,
      industry: "Finance & Accounting",
    },
    {
      name: "Logistics & Supply Chain",
      icon: Truck,
      industry: "Logistics & Supply Chain",
    },
    {
      name: "Travel & Hospitality",
      icon: Plane,
      industry: "Travel, Hospitality & Cargo",
    },
    {
      name: "Entertainment & Social",
      icon: Film,
      industry: "Entertainment & Social Platforms",
    },
    {
      name: "IT, Hardware & IoT",
      icon: Computer,
      industry: "IT, Hardware & IoT",
    },
  ];

  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
            Ready for New Partnerships
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re excited to partner with forward-thinking organizations
            across industries to drive operational excellence and sustainable
            growth
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-6 items-center opacity-70">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-16 h-16 bg-linear-to-br from-gray-100 to-gray-200 border border-gray-300 flex items-center justify-center mb-3 group-hover:from-[#280b57]/10 group-hover:to-[#280b57]/20 group-hover:border-[#280b57]/30 transition-all duration-300 rounded-lg">
                <industry.icon
                  size={24}
                  className="text-gray-600 group-hover:text-[#280b57] group-hover:scale-110 transition-all duration-300"
                />
              </div>
              <p className="text-xs text-gray-500 text-center font-medium leading-tight">
                {industry.industry}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">
            Target industries for partnerships - Building our client base
          </p>
          <div className="flex justify-center items-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Compliance Ready
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Security Focused
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Growth Oriented
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
