export default function NewsGrid() {
  const articles = [
    {
      title: "The Future of AI in Customer Support: 2025 Predictions",
      category: "Technology Trends",
      date: "October 28, 2025",
      readTime: "8 min read",
      excerpt:
        "Exploring how artificial intelligence will reshape customer support operations and what businesses need to prepare for.",
      image: "🤖",
      author: "Sarah Chen, CEO",
    },
    {
      title: "Building Resilient Operations in Uncertain Times",
      category: "Strategic Planning",
      date: "October 25, 2025",
      readTime: "12 min read",
      excerpt:
        "A comprehensive guide to creating operational frameworks that can withstand market volatility and unexpected disruptions.",
      image: "🛡️",
      author: "Michael Rodriguez, CTO",
    },
    {
      title: "The ROI of Process Automation: Real Numbers from 2025",
      category: "Process Optimization",
      date: "October 22, 2025",
      readTime: "6 min read",
      excerpt:
        "Data-driven insights into the measurable benefits companies are seeing from intelligent process automation initiatives.",
      image: "📊",
      author: "Emily Johnson, COO",
    },
    {
      title: "Global Workforce Management: Best Practices Guide",
      category: "Human Resources",
      date: "October 19, 2025",
      readTime: "10 min read",
      excerpt:
        "Strategies for managing distributed teams effectively while maintaining productivity and company culture.",
      image: "🌍",
      author: "Lisa Thompson, CPO",
    },
    {
      title: "Cybersecurity in the Age of Remote Operations",
      category: "Security",
      date: "October 16, 2025",
      readTime: "9 min read",
      excerpt:
        "Essential security measures and frameworks for protecting business operations in a distributed work environment.",
      image: "🔒",
      author: "David Park, CFO",
    },
    {
      title: "Customer Experience Trends Shaping 2025",
      category: "Customer Success",
      date: "October 13, 2025",
      readTime: "7 min read",
      excerpt:
        "Emerging trends in customer experience management and how forward-thinking companies are adapting.",
      image: "💫",
      author: "James Wilson, CSO",
    },
  ];

  const categories = [
    "All",
    "Technology Trends",
    "Strategic Planning",
    "Process Optimization",
    "Human Resources",
    "Security",
    "Customer Success",
  ];

  return (
    <section className="bg-[#0a0a0a] text-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Latest
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#280b57] to-purple-400">
              {" "}
              Insights
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert perspectives on industry trends, emerging technologies, and
            strategic insights to help you stay ahead in today&apos;s rapidly
            evolving business landscape.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 text-sm font-semibold transition-all duration-300 uppercase tracking-wider ${
                index === 0
                  ? "bg-[#280b57] text-white border-2 border-[#280b57]"
                  : "border-2 border-[#280b57]/30 text-gray-300 hover:border-[#280b57] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group bg-linear-to-br from-[#1a1625] to-[#280b57]/10 border border-[#280b57]/20 hover:border-[#280b57]/40 transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{article.image}</div>
                  <span className="px-3 py-1 bg-[#280b57]/20 text-[#280b57] text-xs font-semibold rounded-full uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-[#280b57] transition-colors leading-tight">
                  {article.title}
                </h3>

                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">By {article.author}</p>
                  <button className="inline-flex items-center gap-2 text-[#280b57] font-semibold hover:text-white transition-colors">
                    Read More
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
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-[#280b57] text-white px-8 py-4 text-lg font-semibold hover:bg-[#1f0944] transition-all duration-300 uppercase tracking-wider border-2 border-[#280b57] hover:border-[#1f0944]">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
