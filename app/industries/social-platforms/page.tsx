import Link from "next/link";

export default function SocialPlatformsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#280b57] to-[#1a0a3e] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Social Platforms & Community Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Comprehensive BPO services tailored for social networks, dating apps, 
              community forums, and creator platforms to ensure user safety, drive 
              engagement, and moderate content 24/7.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#280b57] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/industries"
                className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-[#280b57] transition-colors"
              >
                All Industries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Protecting Digital Communities
              </h2>
              <p className="text-gray-600 mb-6">
                Our social platform services are designed to protect brand reputation 
                while fostering healthy digital interactions. From rapid content moderation 
                to resolving user disputes and supporting content creators, we provide the 
                human touch needed to keep your community safe and thriving.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Trust, Safety & Policy Enforcement
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  UGC Content Moderation (Text, Image, Video)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Creator & Influencer Concierge Support
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#280b57] rounded-full"></div>
                  Account Recovery & Fraud Prevention
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <p className="text-gray-500">
                Community Operations Visualization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Platform Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Social Media BPO Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end operational and moderation support for global digital communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Trust & Safety</h3>
              <p className="text-gray-600">
                Enforcing community guidelines, removing hate speech, preventing cyberbullying, and handling escalated user reports.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">👁️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Content Moderation</h3>
              <p className="text-gray-600">
                24/7 manual and AI-assisted review of user-generated content (UGC) including text, images, audio, and live video.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                User Support
              </h3>
              <p className="text-gray-600">
                Omnichannel helpdesk for account recovery, password resets, premium subscription billing, and bug reporting.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Creator Support</h3>
              <p className="text-gray-600">
                Dedicated VIP concierge for influencers, handling monetization queries, verification badges, and profile management.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Fraud & Spam Detection
              </h3>
              <p className="text-gray-600">
                Identifying and removing fake profiles, bot networks, phishing links, and romance scams to protect genuine users.
              </p>
            </div>

            <div className="bg-white p-8 text-center">
              <div className="w-16 h-16 bg-[#280b57] mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Community Engagement</h3>
              <p className="text-gray-600">
                Actively participating in forums, managing brand pages, responding to comments, and driving positive interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Segments We Support */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Platform Segments We Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expertise across a wide spectrum of digital connectivity platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Social Networks</h3>
              <p className="text-gray-600 text-sm">
                Global platforms for networking, sharing, and micro-blogging
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Dating Apps</h3>
              <p className="text-gray-600 text-sm">
                Profile verification, scam prevention, and user safety monitoring
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Creator Platforms</h3>
              <p className="text-gray-600 text-sm">
                Monetization support for fan-funding and subscription networks
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Video Sharing</h3>
              <p className="text-gray-600 text-sm">
                Short-form video moderation, copyright checks, and live stream monitoring
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Professional Networks</h3>
              <p className="text-gray-600 text-sm">
                B2B community management, job board support, and credential verification
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Forums & Q&A</h3>
              <p className="text-gray-600 text-sm">
                Discussion moderation, spam removal, and topic management
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Gaming Communities</h3>
              <p className="text-gray-600 text-sm">
                In-game chat moderation, Discord management, and esports support
              </p>
            </div>

            <div className="bg-gray-50 p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Review Platforms</h3>
              <p className="text-gray-600 text-sm">
                Validating user reviews, combating fake ratings, and business support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Journey Support */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete User Lifecycle Support
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guiding users from profile creation to becoming active, safe community members
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Onboarding</h3>
              <p className="text-gray-600">
                Account creation, age verification, and initial profile moderation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Engagement</h3>
              <p className="text-gray-600">
                Feature education, notification support, and driving initial interactions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Moderation</h3>
              <p className="text-gray-600">
                Continuous scanning of posts, DMs, and media to ensure policy compliance
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Resolution</h3>
              <p className="text-gray-600">
                Handling flagged content appeals, account bans, and user disputes gracefully
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#280b57] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-semibold mb-2">Retention</h3>
              <p className="text-gray-600">
                Managing premium subscriptions, addressing churn, and reactivating users
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trust & Safety Metrics
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">&lt; 3s</div>
              <h3 className="text-lg font-semibold mb-2">Review Time</h3>
              <p className="text-gray-600">
                Rapid turnaround for high-priority flagged content and live streams
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">99.9%</div>
              <h3 className="text-lg font-semibold mb-2">Moderation Quality</h3>
              <p className="text-gray-600">
                High accuracy in enforcing complex and nuanced community guidelines
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">24/7</div>
              <h3 className="text-lg font-semibold mb-2">Global Coverage</h3>
              <p className="text-gray-600">
                Round-the-clock moderation across multiple languages and time zones
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#280b57] mb-2">10M+</div>
              <h3 className="text-lg font-semibold mb-2">
                Actions Scalability
              </h3>
              <p className="text-gray-600">
                Ability to scale rapidly during viral events or platform traffic surges
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Protect Your Digital Community
          </h2>
          <p className="text-gray-600 mb-8">
            Partner with us to scale your moderation efforts, keep your users safe, 
            and build a thriving, positive digital ecosystem.
          </p>
          <Link
            href="/contact"
            className="bg-[#280b57] text-white px-8 py-4 font-semibold hover:bg-[#280b57]/90 transition-colors text-lg inline-block"
          >
            Start Your Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
