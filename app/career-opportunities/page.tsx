"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  MapPin, 
  Briefcase, 
  ArrowRight, 
  Search 
} from "lucide-react";

// Job Listing Data
const jobOpenings = [
  
  {
    id: 1,
    title: "Sales Executive",
    department: "Sales & Marketing",
    location: "Noida, UP (On-site)",
    type: "Full-Time",
    experience: "5+ Years",
    description: "Drive business growth by pitching our services to potential B2B clients.",
  }
];

export default function CareerOpportunities() {
  const [activeTab, setActiveTab] = useState("All");
  
  // Get unique departments for tabs
  const departments = ["All", ...Array.from(new Set(jobOpenings.map(job => job.department)))];

  // Filter jobs based on active tab
  const filteredJobs = activeTab === "All" 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-32">
      
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-[400px] overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-20 w-[600px] h-[600px] rounded-full bg-purple-100/60 blur-[100px]" />
        <div className="absolute top-20 -left-20 w-[400px] h-[400px] rounded-full bg-blue-50/60 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-purple-100 text-[#280b57] font-bold text-sm tracking-wide mb-4">
            JOIN ASHENTRIX
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Build Your Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#280b57] to-purple-500">With Us</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are always looking for passionate, driven individuals to join our team. Explore our open positions and discover how you can make an impact.
          </p>
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {[
            {
              title: "Growth Opportunities",
              desc: "Continuous learning and clear career progression paths.",
              icon: <TrendingUp className="w-6 h-6" />
            },
            {
              title: "Great Work Culture",
              desc: "Inclusive, collaborative, and supportive environment.",
              icon: <Users className="w-6 h-6" />
            },
            {
              title: "Competitive Benefits",
              desc: "Attractive compensation packages and health benefits.",
              icon: <ShieldCheck className="w-6 h-6" />
            }
          ].map((benefit, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-[#280b57] mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-500">{benefit.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Current Openings Section */}
        <div id="openings" className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Openings</h2>
          
          {/* Department Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setActiveTab(dept)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === dept 
                    ? "bg-[#280b57] text-white shadow-md" 
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Jobs List */}
          <div className="space-y-4">
            {filteredJobs.map((job, index) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-200 transition-all group flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#280b57] bg-purple-50 px-3 py-1 rounded-full">
                      {job.department}
                    </span>
                    <span className="flex items-center text-xs text-gray-500 font-medium">
                      <Briefcase className="w-4 h-4 mr-1.5" />
                      {job.type}
                    </span>
                    <span className="flex items-center text-xs text-gray-500 font-medium">
                      <MapPin className="w-4 h-4 mr-1.5" />
                      {job.location}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#280b57] transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 sm:mb-0 max-w-2xl line-clamp-2">
                    {job.description}
                  </p>
                </div>
                
                <div className="w-full sm:w-auto">
                  <Link 
                    href={`/contact?job=${encodeURIComponent(job.title)}`}
                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-[#280b57] transition-colors gap-2"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}

            {filteredJobs.length === 0 && (
              <div className="text-center py-12 bg-white rounded-2xl border border-gray-200 border-dashed">
                <Search className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">No open positions found in this department at the moment.</p>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action for Spontaneous Application */}
        <div className="bg-[#280b57] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden mt-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Don&apos;t see a perfect fit?
            </h3>
            <p className="text-purple-200 mb-8 max-w-2xl mx-auto">
              We are always on the lookout for talented individuals. Send us your resume and we&apos;ll keep you in mind for future opportunities.
            </p>
            <Link 
              href="/contact?job=General Application"
              className="inline-block bg-white text-[#280b57] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg shadow-black/10"
            >
              Submit General Application
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
