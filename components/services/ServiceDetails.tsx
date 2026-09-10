export default function ServiceDetails() {
  const detailedServices = [
    {
      category: "Customer Support (Voice / Chat / Email)",
      description:
        "Personalized, multilingual assistance to enhance customer satisfaction and retention.",
      features: [
        "24/7 Multi-channel Support",
        "Multilingual Customer Service",
        "Personalized Customer Interactions",
        "Customer Satisfaction Enhancement",
        "Customer Retention Programs",
        "Quality Assurance & Monitoring",
      ],
      benefits: "Enhanced customer satisfaction and improved retention rates",
    },
    {
      category: "Technical Support",
      description:
        "End-to-end troubleshooting and product support powered by skilled professionals.",
      features: [
        "Comprehensive Troubleshooting",
        "Product Support Services",
        "Skilled Technical Professionals",
        "End-to-end Resolution",
        "Remote Technical Assistance",
        "Product Knowledge Management",
      ],
      benefits: "Faster issue resolution with expert technical guidance",
    },
    {
      category: "Analytics & Reporting",
      description:
        "Actionable insights through real-time data monitoring and performance analysis.",
      features: [
        "Real-time Data Monitoring",
        "Performance Analysis",
        "Actionable Business Insights",
        "Custom Report Generation",
        "Data Visualization",
        "KPI Dashboard Development",
      ],
      benefits:
        "Data-driven decision making with improved business performance",
    },
    {
      category: "Collections Process",
      description:
        "Efficient, compliant, and customer-friendly debt recovery solutions.",
      features: [
        "Compliant Debt Recovery",
        "Customer-friendly Approaches",
        "Efficient Collection Strategies",
        "Legal Compliance Management",
        "Payment Plan Negotiations",
        "Recovery Rate Optimization",
      ],
      benefits:
        "Improved recovery rates while maintaining customer relationships",
    },
    {
      category: "Recruitment & Talent Support",
      description:
        "Scalable hiring solutions to meet your workforce and project demands.",
      features: [
        "Scalable Hiring Solutions",
        "Talent Acquisition Services",
        "Workforce Planning",
        "Project-based Staffing",
        "Candidate Screening & Assessment",
        "Recruitment Process Optimization",
      ],
      benefits: "Faster hiring with quality talent acquisition",
    },
    {
      category: "Back Office Operations",
      description:
        "Streamlined processing and documentation services for improved efficiency.",
      features: [
        "Document Processing",
        "Administrative Support",
        "Process Streamlining",
        "Workflow Optimization",
        "Quality Control Systems",
        "Efficiency Improvements",
      ],
      benefits: "Improved operational efficiency with reduced processing time",
    },
    {
      category: "Data Processing & Data Services",
      description:
        "Secure data management and transformation for business intelligence.",
      features: [
        "Secure Data Management",
        "Data Transformation Services",
        "Business Intelligence Solutions",
        "Data Quality Assurance",
        "Database Administration",
        "Data Migration Services",
      ],
      benefits: "Enhanced data accuracy and business intelligence capabilities",
    },
    {
      category: "Operations Management",
      description:
        "Process optimization and workflow monitoring for consistent results.",
      features: [
        "Process Optimization",
        "Workflow Monitoring",
        "Performance Tracking",
        "Quality Management",
        "Resource Allocation",
        "Continuous Improvement",
      ],
      benefits: "Consistent operational results with optimized processes",
    },
    {
      category: "Graphic Design & Printing Solutions",
      description:
        "Creative design and print support for branding and communication needs.",
      features: [
        "Brand Design Services",
        "Marketing Materials Design",
        "Print Production Management",
        "Creative Consultation",
        "Brand Guidelines Development",
        "Multi-format Design Solutions",
      ],
      benefits: "Professional branding with comprehensive design support",
    },
    {
      category: "Apps & Web Development",
      description:
        "Custom web and app solutions built for performance, scalability, and user engagement.",
      features: [
        "Custom Web Development",
        "Mobile App Development",
        "Performance Optimization",
        "Scalable Architecture",
        "User Experience Design",
        "Cross-platform Solutions",
      ],
      benefits:
        "High-performance digital solutions with enhanced user engagement",
    },
    {
      category: "Technical Helpdesk Services",
      description:
        "Centralized ticket resolution and 24/7 tech support for seamless business continuity.",
      features: [
        "24/7 Technical Support",
        "Centralized Ticket System",
        "Multi-level Support Escalation",
        "Remote Assistance",
        "System Monitoring",
        "Business Continuity Support",
      ],
      benefits:
        "Seamless business operations with round-the-clock technical support",
    },
    {
      category: "Ticketing Management",
      description:
        "Organized and SLA-driven issue tracking to ensure timely resolutions and customer satisfaction.",
      features: [
        "SLA-driven Issue Tracking",
        "Organized Ticket Management",
        "Priority-based Resolution",
        "Customer Communication",
        "Performance Metrics",
        "Resolution Time Optimization",
      ],
      benefits:
        "Timely issue resolution with improved customer satisfaction metrics",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
            Our Core Service Offerings
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Deep dive into our comprehensive service capabilities with detailed
            features and benefits that demonstrate how we transform your
            specific business functions through advanced technology and human
            expertise.
          </p>
        </div>

        <div className="space-y-12">
          {detailedServices.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="bg-[#280b57] text-white p-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    {service.category}
                  </h3>
                  <p className="text-gray-200 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="bg-white/10 p-4 border border-white/20">
                    <p className="font-semibold mb-1">Key Benefit:</p>
                    <p className="text-sm text-gray-200">{service.benefits}</p>
                  </div>
                </div>

                <div className="lg:col-span-2 p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-6">
                    Service Features & Capabilities
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-[#280b57] mt-2"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex gap-4">
                    <button className="bg-[#280b57] text-white px-6 py-2 font-semibold hover:bg-[#280b57]/90 transition-colors">
                      Get Quote
                    </button>
                    <button className="border border-[#280b57] text-[#280b57] px-6 py-2 font-semibold hover:bg-[#280b57] hover:text-white transition-colors">
                      Case Study
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
