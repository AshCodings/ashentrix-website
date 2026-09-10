import Link from "next/link";
import Image from "next/image";

export default function AnalyticsReportingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#280b57] to-[#1a0a3e] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Analytics & Reporting
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Actionable insights through real-time data monitoring and
                performance analysis. Transform your business data into
                strategic intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-[#280b57] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors text-center rounded-lg"
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-[#280b57] transition-colors text-center rounded-lg"
                >
                  All Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-80 lg:h-96 w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/reporting.jpg"
                  alt="Analytics & Reporting Dashboard"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Data-Driven Intelligence
              </h2>
              <p className="text-gray-600 mb-6">
                Our analytics and reporting services convert complex data into
                clear, actionable insights. We provide comprehensive business
                intelligence solutions that empower your organization to make
                informed strategic decisions.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Business Intelligence Dashboards
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Performance Analytics & KPIs
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Predictive Analytics & Forecasting
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Custom Report Development
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">Analytics Dashboard Visualization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Analytics Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive analytics and reporting capabilities for every
              business need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Performance Analytics
              </h3>
              <p className="text-gray-600">
                Track KPIs, monitor performance trends, and identify
                optimization opportunities
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔮</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Predictive Analytics
              </h3>
              <p className="text-gray-600">
                Forecast trends, predict outcomes, and plan strategic
                initiatives
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Interactive Dashboards
              </h3>
              <p className="text-gray-600">
                Real-time dashboards with drill-down capabilities and
                customizable views
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Custom Reports</h3>
              <p className="text-gray-600">
                Tailored reports designed to meet specific business requirements
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Automated Reporting
              </h3>
              <p className="text-gray-600">
                Scheduled report generation and distribution to stakeholders
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Business Intelligence
              </h3>
              <p className="text-gray-600">
                Comprehensive BI solutions for strategic decision-making
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Analytics Domains
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized analytics solutions across key business areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                Financial Analytics
              </h3>
              <p className="text-gray-600 text-sm">
                Revenue analysis, cost optimization, profitability metrics
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Customer Analytics</h3>
              <p className="text-gray-600 text-sm">
                Customer behavior, satisfaction, lifetime value analysis
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                Operational Analytics
              </h3>
              <p className="text-gray-600 text-sm">
                Process efficiency, resource utilization, workflow optimization
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Sales Analytics</h3>
              <p className="text-gray-600 text-sm">
                Sales performance, pipeline analysis, territory optimization
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                Marketing Analytics
              </h3>
              <p className="text-gray-600 text-sm">
                Campaign performance, ROI analysis, attribution modeling
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">HR Analytics</h3>
              <p className="text-gray-600 text-sm">
                Employee performance, retention analysis, workforce planning
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">
                Supply Chain Analytics
              </h3>
              <p className="text-gray-600 text-sm">
                Inventory optimization, demand forecasting, logistics efficiency
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Risk Analytics</h3>
              <p className="text-gray-600 text-sm">
                Risk assessment, compliance monitoring, fraud detection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting Capabilities */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Reporting Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advanced reporting capabilities to meet all your business
              requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  📱
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Mobile-Ready Reports
                  </h3>
                  <p className="text-gray-600">
                    Responsive reports accessible on any device, anywhere,
                    anytime.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  🔄
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Real-Time Updates
                  </h3>
                  <p className="text-gray-600">
                    Live data synchronization for up-to-the-minute insights.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  🎨
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Visual Analytics
                  </h3>
                  <p className="text-gray-600">
                    Interactive charts, graphs, and visualizations for better
                    understanding.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  📧
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Automated Distribution
                  </h3>
                  <p className="text-gray-600">
                    Scheduled email delivery to stakeholders with customized
                    formats.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  🔍
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Drill-Down Analysis
                  </h3>
                  <p className="text-gray-600">
                    Deep-dive capabilities to explore data at granular levels.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#280b57] text-white flex items-center justify-center font-bold">
                  📤
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Multiple Export Formats
                  </h3>
                  <p className="text-gray-600">
                    Export reports in PDF, Excel, PowerPoint, and other formats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Analytics Impact
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Measurable business improvements through data-driven insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">35%</div>
              <h3 className="text-lg font-semibold mb-2">Faster Decisions</h3>
              <p className="text-gray-600">
                Reduction in decision-making time with real-time insights
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">60%</div>
              <h3 className="text-lg font-semibold mb-2">Report Automation</h3>
              <p className="text-gray-600">
                Time saved through automated report generation
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">45%</div>
              <h3 className="text-lg font-semibold mb-2">Better Accuracy</h3>
              <p className="text-gray-600">
                Improvement in data accuracy and reliability
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">25%</div>
              <h3 className="text-lg font-semibold mb-2">Cost Savings</h3>
              <p className="text-gray-600">
                Operational cost reduction through data-driven optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Unlock Your Data&apos;s Potential
          </h2>
          <p className="text-gray-600 mb-8">
            Transform raw data into strategic advantages with our comprehensive
            analytics and reporting solutions.
          </p>
          <Link
            href="/contact"
            className="bg-[#280b57] text-white px-8 py-4 font-semibold hover:bg-[#280b57]/90 transition-colors text-lg"
          >
            Start Your Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
