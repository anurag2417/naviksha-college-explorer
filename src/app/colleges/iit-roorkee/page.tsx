"use client";

import Link from "next/link";
import { useState } from "react";
// 
export default function IITRoorkeePage() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: "📖" },
    { id: "academics", label: "Academics", icon: "🎓" },
    { id: "admissions", label: "Admissions", icon: "📝" },
    { id: "placements", label: "Placements", icon: "💼" },
    { id: "campus", label: "Campus Life", icon: "🏛️" },
    { id: "research", label: "Research", icon: "🔬" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#050505] text-[#f3f4f6] selection:bg-[#4f46e5] selection:text-white">
      {/* Hero Section with Background Pattern */}
      <div className="relative overflow-hidden border-b border-[#1f2937]">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#4f46e5]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm mb-8 animate-fade-in">
            <Link href="/" className="text-[#9ca3af] hover:text-[#f3f4f6] transition-colors">
              Streams
            </Link>
            <span className="text-[#4b5563]">/</span>
            <Link href="/college-type?stream=engineering" className="text-[#9ca3af] hover:text-[#f3f4f6] transition-colors">
              College Type
            </Link>
            <span className="text-[#4b5563]">/</span>
            <Link href="/colleges?stream=engineering&type=government" className="text-[#9ca3af] hover:text-[#f3f4f6] transition-colors">
              Colleges
            </Link>
            <span className="text-[#4b5563]">/</span>
            <span className="text-[#f3f4f6] font-medium">IIT Roorkee</span>
          </nav>

          {/* College Header */}
          <div className="flex items-start gap-8 animate-fade-in-delay">
            {/* Logo */}
            <div className="hidden md:block flex-shrink-0">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#1f2937] to-[#111827] border border-[#374151] flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-bold bg-gradient-to-br from-[#f3f4f6] to-[#9ca3af] bg-clip-text text-transparent">
                  IITR
                </span>
              </div>
            </div>

            {/* Title & Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-green-500/10 border border-green-500/30 text-green-400">
                  ✓ Verified
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-blue-500/10 border border-blue-500/30 text-blue-400">
                  🏆 NIRF #1 (Architecture & Planning)
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  🌟 Est. 1847 (Oldest IIT)
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#f3f4f6] via-[#e5e7eb] to-[#9ca3af] bg-clip-text text-transparent mb-4">
                Indian Institute of Technology Roorkee
              </h1>

              <p className="text-[#9ca3af] text-lg leading-relaxed max-w-3xl mb-6">
                Established in 1847, IIT Roorkee is the oldest engineering institution in India, with a rich heritage 
                spanning over 175 years. It is a global leader in engineering, architecture, and research, consistently 
                ranked #1 in Architecture and Planning by NIRF for five consecutive years [citation:1][citation:6].
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.iitr.ac.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#4f46e5] border border-[#4f46e5] rounded-xl text-white font-medium hover:bg-[#6366f1] transition-all duration-300 flex items-center gap-2"
                >
                  <span>Visit Website</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <button className="px-6 py-3 bg-[#1f2937] border border-[#374151] rounded-xl text-[#f3f4f6] hover:bg-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span>Share</span>
                </button>
                <button className="px-6 py-3 bg-[#1f2937] border border-[#374151] rounded-xl text-[#f3f4f6] hover:bg-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="border-b border-[#1f2937] bg-[#0a0a0a]/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">NIRF #1</div>
              <div className="text-xs text-[#9ca3af] mt-1">Architecture & Planning [citation:1][citation:6]</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">1847</div>
              <div className="text-xs text-[#9ca3af] mt-1">Established [citation:9]</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">358+</div>
              <div className="text-xs text-[#9ca3af] mt-1">Acres (Main Campus) [citation:4]</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">21</div>
              <div className="text-xs text-[#9ca3af] mt-1">Academic Departments [citation:4]</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-[#1f2937] bg-[#0a0a0a]/50 backdrop-blur-sm sticky top-[73px] z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-300 ${
                  activeTab === tab.id
                    ? "border-[#4f46e5] text-[#f3f4f6]"
                    : "border-transparent text-[#9ca3af] hover:text-[#f3f4f6] hover:border-[#374151]"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-fade-in">
            {/* Key Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Location", value: "Roorkee, Uttarakhand", icon: "📍" },
                { label: "Established", value: "1847", icon: "📅" },
                { label: "Institute Type", value: "Government (IIT)", icon: "🏛️" },
                { label: "NIRF Rank 2025", value: "#1 (Architecture) [citation:1]", icon: "🏆" },
                { label: "Campuses", value: "Roorkee, Saharanpur, Noida [citation:4]", icon: "🏛️" },
                { label: "Total Students", value: "9,000+", icon: "👥" },
                { label: "Faculty", value: "600+", icon: "👨‍🏫" },
                { label: "Academic Units", value: "21 Depts + 30+ Centres [citation:4]", icon: "🏢" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-6 hover:border-[#4f46e5]/50 hover:bg-[#1a1a1a] transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="text-xs text-[#9ca3af] mb-1">{item.label}</div>
                    <div className="text-lg font-semibold text-[#f3f4f6]">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* About Section */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">📖</span>
                About IIT Roorkee
              </h2>
              <div className="space-y-4 text-[#d1d5db] leading-relaxed">
                <p>
                  The Indian Institute of Technology Roorkee (IIT Roorkee) is the oldest engineering institution in India, founded in 1847 as the Thomason College of Civil Engineering. It was established to train personnel for the construction of the Ganga Canal and aqueducts, for which the city of Roorkee is famous [citation:4]. It became an IIT in 2001 and is recognized as an Institute of National Importance.
                </p>
                <p>
                  Located in the Haridwar district of Uttarakhand, the main campus spans 358.5 acres [citation:4]. The institute has expanded to two additional campuses at Saharanpur (25 acres) and Greater Noida (10 acres) to accommodate growing academic demands [citation:4]. IIT Roorkee is renowned for its rich heritage, academic excellence, and leadership in architecture, planning, and engineering education.
                </p>
                <p>
                  The institute hosts 21 academic departments, 1 academic centre, 3 centres of excellence, 5 academic service centres, and 3 supporting units [citation:4]. It offers a diverse range of programs including bachelor's degrees in 10 engineering and architecture disciplines and postgraduate degrees in 55 disciplines covering engineering, applied science, architecture, and planning [citation:3].
                </p>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  Vision
                </h3>
                <p className="text-[#d1d5db] leading-relaxed">
                  To be a global leader in technology, science, and architecture education, fostering innovation and research that addresses national and global challenges while preserving its rich heritage of excellence.
                </p>
              </div>
              <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  Mission
                </h3>
                <p className="text-[#d1d5db] leading-relaxed">
                  To provide world-class education, conduct cutting-edge research, and foster industry-academia collaboration while ensuring that innovations benefit society and industry through technology transfer and entrepreneurial initiatives [citation:5].
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Academics Tab */}
        {activeTab === "academics" && (
          <div className="space-y-8 animate-fade-in">
            {/* Academic Overview */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🎓</span>
                Academic Structure [citation:4]
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {[
                  { label: "Departments", value: "21", icon: "🏛️" },
                  { label: "Centres of Excellence", value: "3", icon: "🎯" },
                  { label: "Academic Centres", value: "5+", icon: "📚" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-[#4f46e5] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* B.Tech Programs */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📋</span>
                B.Tech Programs [citation:3]
              </h2>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  "Biosciences and Bioengineering",
                  "Chemical Engineering",
                  "Civil Engineering",
                  "Computer Science and Engineering",
                  "Data Science and Artificial Intelligence",
                  "Electrical Engineering",
                  "Electronics and Communication Engineering",
                  "Energy Engineering",
                  "Engineering Physics",
                  "Mechanical Engineering",
                  "Metallurgical and Materials Engineering",
                  "Production and Industrial Engineering"
                ].map((program, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#4f46e5]" />
                    <span className="text-[#d1d5db] text-sm">{program}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture & Planning */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏛️</span>
                Architecture & Planning [citation:1][citation:6]
              </h2>
              <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151] mb-4">
                <p className="text-[#d1d5db]">
                  IIT Roorkee has been ranked #1 in Architecture and Planning by NIRF for five consecutive years (2021-2025), with a score of 83.95 in 2025 [citation:1][citation:6].
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "B.Arch (5 Years)",
                  "M.Arch Programs",
                  "M.U.R.P (Master of Urban and Regional Planning)",
                  "Ph.D. in Architecture and Planning"
                ].map((program, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#7c3aed]" />
                    <span className="text-[#d1d5db] text-sm">{program}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Integrated & Dual Degree Programs */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🔄</span>
                Integrated & Dual Degree Programs [citation:3]
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "BS + MS Chemical Sciences",
                  "BS + MS Economics",
                  "BS + MS Mathematics & Computing",
                  "BS + MS Physics",
                  "Integrated M.Tech Geological Technology",
                  "Integrated M.Tech Geophysical Technology"
                ].map((program, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#4f46e5]" />
                    <span className="text-[#d1d5db] text-sm">{program}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Postgraduate Programs */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📚</span>
                Postgraduate Programs [citation:3]
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">M.Tech</h3>
                  <p className="text-sm text-[#9ca3af]">55+ specializations across engineering disciplines</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">MBA</h3>
                  <p className="text-sm text-[#9ca3af]">2-year full-time program at DoMS</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">M.Sc</h3>
                  <p className="text-sm text-[#9ca3af]">Physics, Chemistry, Mathematics, etc.</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">M.Arch / M.Des</h3>
                  <p className="text-sm text-[#9ca3af]">Advanced architecture and design programs</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">MIM</h3>
                  <p className="text-sm text-[#9ca3af]">Master in International Management</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">Ph.D</h3>
                  <p className="text-sm text-[#9ca3af]">Research programs in all departments</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Admissions Tab */}
        {activeTab === "admissions" && (
          <div className="space-y-8 animate-fade-in">
            {/* Admission Process */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📝</span>
                Admission Process 2025 [citation:3]
              </h2>
              
              <div className="space-y-6">
                {/* B.Tech / B.Arch Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">B.Tech / B.Arch Admissions</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">1</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">Minimum 75% in 10+2 with PCM</div>
                        <div className="text-sm text-[#9ca3af]">Eligibility criteria for undergraduate programs.</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">2</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">JEE Advanced Score</div>
                        <div className="text-sm text-[#9ca3af]">Admission based on JEE Advanced rank.</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">3</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">JoSAA Counselling</div>
                        <div className="text-sm text-[#9ca3af]">Participate in JoSAA for seat allotment.</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* M.Tech Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">M.Tech Admissions</h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db] mb-2">Valid GATE score with minimum 60% marks in bachelor's degree, followed by COAP counselling [citation:3].</p>
                  </div>
                </div>

                {/* MBA Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">MBA Admissions [citation:3][citation:7]</h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db] mb-2">Valid CAT/GATE score with minimum 60% marks in graduation, followed by group discussion and personal interview.</p>
                    <p className="text-sm text-[#9ca3af]">Batch size: ~80 students | Diverse backgrounds accepted.</p>
                  </div>
                </div>

                {/* M.Sc Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">M.Sc Admissions</h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db]">Valid IIT JAM score with minimum 60% marks in bachelor's degree [citation:3].</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fees Structure */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">💰</span>
                Fee Structure 2025-26 [citation:3][citation:8]
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">B.Tech / B.Arch / B.Sc</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">1st Year Fees</span>
                      <span className="text-[#f3f4f6] font-semibold">₹2.91 Lakhs</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">M.Tech / M.Arch / M.Des</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Total Program Fee</span>
                      <span className="text-[#f3f4f6] font-semibold">₹2.1 Lakhs</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">MBA / MIM</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Total Program Fee</span>
                      <span className="text-[#f3f4f6] font-semibold">₹9.68 Lakhs</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">M.Sc</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Total Program Fee</span>
                      <span className="text-[#f3f4f6] font-semibold">₹2.1 Lakhs</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#9ca3af] mt-4">* Hostel and mess charges are additional. Scholarships available including Merit Cum Means (MCM), James Thomason scholarship, and INSPIRE She scheme [citation:3].</p>
            </div>

            {/* JEE Advanced Cutoff 2024 */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📊</span>
                JEE Advanced Cutoff 2024 (Closing Ranks) [citation:3]
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { program: "Computer Science and Engineering", rank: "481" },
                  { program: "Data Science and Artificial Intelligence", rank: "680" },
                  { program: "Electronics and Communication Engineering", rank: "1424" },
                  { program: "Electrical Engineering", rank: "2033" },
                  { program: "Mathematics & Computing (Dual)", rank: "1512" },
                  { program: "Mechanical Engineering", rank: "3672" },
                  { program: "Chemical Engineering", rank: "4689" },
                  { program: "Civil Engineering", rank: "6293" },
                  { program: "Architecture (B.Arch)", rank: "19885" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <span className="text-[#d1d5db] text-sm">{item.program}</span>
                    <span className="text-[#4f46e5] font-semibold">{item.rank}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Placements Tab */}
        {activeTab === "placements" && (
          <div className="space-y-8 animate-fade-in">
            {/* Placement Highlights 2025-26 */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">💼</span>
                Placement Highlights 2025-26 [citation:2]
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {[
                  { label: "Total Offers (Day 1-2)", value: "555+", icon: "🎯" },
                  { label: "International Offers", value: "8", icon: "🌍" },
                  { label: "Companies Participated", value: "116", icon: "🏢" },
                  { label: "Day 1 Domestic Offers", value: "428", icon: "📊" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center hover:border-[#4f46e5]/50 transition-all duration-300">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-[#4f46e5] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Day-wise Performance */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Placement Momentum [citation:2]</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="font-semibold text-[#f3f4f6] mb-2">Day 1 (Dec 1, 2025)</div>
                    <div className="text-sm text-[#9ca3af]">8 international offers + 428 domestic offers secured in Slot 1.1</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="font-semibold text-[#f3f4f6] mb-2">Day 2 (Dec 2, 2025)</div>
                    <div className="text-sm text-[#9ca3af]">42 companies visited across Slots 1.2 to 2.1; total offers crossed 550+ including PPOs</div>
                  </div>
                </div>
              </div>

              {/* Key Day 1 Recruiters */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Day 1 Recruiters [citation:2]</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    "Amazon", "Google", "Microsoft", "NVIDIA", "Qualcomm", 
                    "Texas Instruments", "Oracle", "Rubrik India", "SAP Labs", "SLB",
                    "iRageCapital", "Squarepoint Capital", "Databricks", "D.E. Shaw", 
                    "Mastercard", "Petronet LNG", "Meesho", "Flipkart", "NatWest Group",
                    "Zomato", "BEL", "HPCL", "BPCL", "Bajaj Auto"
                  ].map((company, index) => (
                    <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300 text-center text-sm text-[#d1d5db]">
                      {company}
                    </div>
                  ))}
                </div>
              </div>

              {/* Day 2 Recruiters */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Day 2 Recruiters [citation:2]</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    "Accenture", "Accenture Japan", "American Express", "Applied Materials",
                    "Barclays", "Commonwealth Bank of Australia", "Deutsche Bank", "InfoEdge",
                    "InMobi", "MathWorks", "Media.net", "McKinsey & Company", "Pathlock",
                    "Postman", "Qure.ai", "Razorpay", "OLA Electric", "Sprinklr", "Teradata",
                    "ThoughtSpot", "Urban Company", "VISA", "Warner Bros. Discovery", "Wex Fintech"
                  ].map((company, index) => (
                    <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300 text-center text-sm text-[#d1d5db]">
                      {company}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hiring Domains */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Hiring Domains [citation:2]</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Software Engineering", "AI/ML", "Product Development", "Deep-Tech Research",
                    "Fintech", "Data Science", "Business Analytics", "Consulting", "Healthcare-Tech",
                    "Semiconductor", "Sustainability", "Core Engineering"
                  ].map((domain, index) => (
                    <span key={index} className="px-3 py-1 rounded-full bg-[#1f2937]/50 border border-[#374151] text-sm text-[#d1d5db]">
                      {domain}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* MBA Placement 2025 */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📊</span>
                MBA Placement 2025 [citation:7]
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { label: "Average CTC", value: "₹17.91 L", icon: "📊" },
                  { label: "Highest CTC", value: "₹24.00 L", icon: "🎯" },
                  { label: "Median CTC", value: "₹17.64 L", icon: "📈" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-[#4f46e5] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Domain-wise MBA Placements */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { domain: "Marketing", avgCTC: "₹21.33 L", participation: "27% recruiters" },
                  { domain: "Operations, IT & Analytics", avgCTC: "₹17.88 L", participation: "54% recruiters" },
                  { domain: "Human Resources", avgCTC: "₹19.00 L", participation: "6% recruiters" },
                  { domain: "Finance", avgCTC: "₹15.09 L", participation: "13% recruiters" }
                ].map((item, index) => (
                  <div key={index} className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="font-semibold text-[#f3f4f6] mb-1">{item.domain}</div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#9ca3af]">Average CTC:</span>
                      <span className="text-[#4f46e5] font-semibold">{item.avgCTC}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#9ca3af]">Recruiter Participation:</span>
                      <span className="text-[#f3f4f6]">{item.participation}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* MBA Batch Profile */}
              <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                <h3 className="text-lg font-semibold mb-3 text-[#f3f4f6]">MBA Batch Profile 2025 [citation:7]</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div><span className="text-[#9ca3af]">Total Students:</span> <span className="text-[#f3f4f6]">80</span></div>
                  <div><span className="text-[#9ca3af]">Freshers:</span> <span className="text-[#f3f4f6]">49%</span></div>
                  <div><span className="text-[#9ca3af]">Engineers:</span> <span className="text-[#f3f4f6]">67.5%</span></div>
                  <div><span className="text-[#9ca3af]">Non-Engineers:</span> <span className="text-[#f3f4f6]">32.5%</span></div>
                  <div><span className="text-[#9ca3af]">Female Students:</span> <span className="text-[#f3f4f6]">7.5%</span></div>
                  <div><span className="text-[#9ca3af]">States Represented:</span> <span className="text-[#f3f4f6]">18</span></div>
                </div>
              </div>

              {/* MBA Top Recruiters */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3 text-[#f3f4f6]">MBA Top Recruiters [citation:7]</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Accenture", "Deloitte", "EY", "Bank of America", "ICICI Bank",
                    "Adani", "Bharat Electronics", "Hyundai", "IndianOil", "GAIL",
                    "Coca-Cola", "Mother Dairy", "Reliance Retail", "Wipro", "Vedanta",
                    "Frost & Sullivan", "Euromonitor", "C-DOT"
                  ].map((company, index) => (
                    <div key={index} className="p-2 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center text-xs text-[#d1d5db]">
                      {company}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Campus Life Tab */}
        {activeTab === "campus" && (
          <div className="space-y-8 animate-fade-in">
            {/* Multi-Campus System */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏞️</span>
                Multi-Campus System [citation:4]
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <div className="text-xl font-bold text-[#4f46e5] mb-2">Roorkee</div>
                  <div className="text-sm text-[#9ca3af]">Main Campus • 358.5 acres</div>
                  <div className="text-xs text-[#d1d5db] mt-2">Historic campus on Grand Trunk Road, established 1847</div>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <div className="text-xl font-bold text-[#4f46e5] mb-2">Saharanpur</div>
                  <div className="text-sm text-[#9ca3af]">25 acres • 30 km from Roorkee</div>
                  <div className="text-xs text-[#d1d5db] mt-2">Specializes in Pulp & Paper Technology, Packing Technology</div>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <div className="text-xl font-bold text-[#4f46e5] mb-2">Greater Noida</div>
                  <div className="text-sm text-[#9ca3af]">10 acres • Near Delhi</div>
                  <div className="text-xs text-[#d1d5db] mt-2">Centre for Urban Design and other Centres of Excellence</div>
                </div>
              </div>
            </div>

            {/* Campus Facilities */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏛️</span>
                Campus Facilities [citation:4][citation:9]
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: "Mahatma Gandhi Central Library", desc: "Vast collection of books, magazines, and 2M+ e-resources", icon: "📚" },
                  { name: "Sports Infrastructure", desc: "Olympic-size pool, athletics track, cricket/football/hockey fields", icon: "⚽" },
                  { name: "Hostels", desc: "10 boys hostels, 3 girls hostels, 6 hostels for married students", icon: "🏠" },
                  { name: "Wellness Centre", desc: "Comprehensive medical support for students and staff", icon: "🏥" },
                  { name: "Banking & Post Office", desc: "SBI, PNB, ATMs, and Post Office within campus", icon: "🏦" },
                  { name: "Community Facilities", desc: "Temple, Mosque, Church, Community Centre, Milk Dairy", icon: "🛍️" },
                  { name: "Wi-Fi Campus", desc: "High-speed connectivity across academic and residential areas", icon: "📶" },
                  { name: "Guest Houses", desc: "4 fully furnished guest houses + 1 visitors hostel", icon: "🏨" },
                  { name: "Indoor Games", desc: "Table tennis, squash courts, professional gymnasium", icon: "🎯" }
                ].map((facility, index) => (
                  <div key={index} className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30 hover:border-[#4f46e5]/50 transition-all duration-300">
                    <div className="text-4xl mb-3">{facility.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-[#f3f4f6]">{facility.name}</h3>
                    <p className="text-sm text-[#9ca3af]">{facility.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Activities */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🎨</span>
                Student Clubs & Activities
              </h2>
              
              <div className="space-y-6">
                {/* Technical Clubs */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Technical Clubs</h3>
                  <div className="grid md:grid-cols-3 gap-3">
                    {[
                      "Robotics Club",
                      "Programming Club",
                      "Electronics Club",
                      "Aeromodelling Club",
                      "Astronomy Club",
                      "Energy Club"
                    ].map((club, index) => (
                      <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-sm text-[#d1d5db]">
                        {club}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cultural Clubs */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Cultural Clubs</h3>
                  <div className="grid md:grid-cols-3 gap-3">
                    {[
                      "Dramatics Club",
                      "Music Club",
                      "Fine Arts Club",
                      "Photography Club",
                      "Literary Society",
                      "Quiz Club"
                    ].map((club, index) => (
                      <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-sm text-[#d1d5db]">
                        {club}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Major Events */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🎉</span>
                Major Annual Events
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Cognizance",
                    type: "Technical Festival",
                    desc: "Annual techno-management festival",
                    icon: "🔧"
                  },
                  {
                    name: "Thomso",
                    type: "Cultural Festival",
                    desc: "Annual cultural festival named after Thomason College",
                    icon: "🎭"
                  },
                  {
                    name: "Inter IIT Sports Meet",
                    type: "Sports Competition",
                    desc: "Annual sports competition among all IITs",
                    icon: "🏆"
                  }
                ].map((event, index) => (
                  <div key={index} className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30 hover:border-[#4f46e5]/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{event.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#f3f4f6] mb-1">{event.name}</h3>
                        <div className="text-sm text-[#4f46e5] mb-2">{event.type}</div>
                        <p className="text-sm text-[#9ca3af]">{event.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Research Tab */}
        {activeTab === "research" && (
          <div className="space-y-8 animate-fade-in">
            {/* Research Overview */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🔬</span>
                Research Excellence
              </h2>
              <p className="text-[#d1d5db] leading-relaxed mb-6">
                IIT Roorkee is a leader in cutting-edge research across multiple domains, with a strong focus on technology transfer and industry collaboration. The institute is committed to making research benefit society and industry through innovation and entrepreneurship [citation:5].
              </p>
              
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { label: "Academic Departments", value: "21", icon: "🏛️" },
                  { label: "Centres of Excellence", value: "3+", icon: "🎯" },
                  { label: "Research Centres", value: "30+", icon: "🔬" },
                  { label: "Technology Transfers", value: "Active", icon: "🤝" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-[#4f46e5] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* C-DOT Centre of Excellence */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📡</span>
                C-DOT Centre of Excellence [citation:10]
              </h2>
              <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                <p className="text-[#d1d5db] mb-4">
                  In November 2025, C-DOT (Centre for Development of Telematics) established a Centre of Excellence at IIT Roorkee to accelerate indigenous research in advanced communication technologies [citation:10].
                </p>
                <h3 className="text-lg font-semibold mb-3 text-[#f3f4f6]">Focus Areas:</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "5G/6G Technologies",
                    "RF-Sub-THz Integrated Circuits",
                    "Millimeter Wave Beamforming Antennas",
                    "V2X Communication",
                    "Quantum Technologies",
                    "Cybersecurity",
                    "AI-based Applications",
                    "Energy Efficiency"
                  ].map((area, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-[#1f2937]/50">
                      <span className="text-[#4f46e5]">✓</span>
                      <span className="text-sm text-[#d1d5db]">{area}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#9ca3af] mt-4">
                  The CoE supports start-ups, develops intellectual property, and enables knowledge exchange through workshops and training programs [citation:10].
                </p>
              </div>
            </div>

            {/* RIS Technology Transfer */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🔄</span>
                RIS Technology Transfer [citation:5]
              </h2>
              <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                <p className="text-[#d1d5db] mb-4">
                  In September 2025, IIT Roorkee signed a technology transfer agreement for next-generation Reconfigurable Intelligent Surface (RIS) technology with IIITB COMET Foundation, IIIT Bangalore, and Mantiswave Networks [citation:5].
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-[#f3f4f6] mb-2">Technology Applications:</h4>
                    <ul className="space-y-2 text-sm text-[#9ca3af]">
                      <li className="flex items-center gap-2">• 6G Networks</li>
                      <li className="flex items-center gap-2">• Intelligent Sensing Systems</li>
                      <li className="flex items-center gap-2">• Next-gen Wireless Communication</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#f3f4f6] mb-2">Research Team:</h4>
                    <ul className="space-y-2 text-sm text-[#9ca3af]">
                      <li className="flex items-center gap-2">• Prof. Ekant Sharma (IIT Roorkee)</li>
                      <li className="flex items-center gap-2">• Prof. Prem Singh (IIIT Bangalore)</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-[#9ca3af] mt-4">
                  This achievement supports the Government of India's vision for Atmanirbhar Bharat and Digital India [citation:5].
                </p>
              </div>
            </div>

            {/* Research Focus Areas */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🎯</span>
                Key Research Focus Areas
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    area: "Telecom & 6G",
                    desc: "Advanced communication technologies, quantum communications [citation:10]",
                    icon: "📡"
                  },
                  {
                    area: "Cybersecurity",
                    desc: "Network security, quantum-safe cryptography [citation:10]",
                    icon: "🔒"
                  },
                  {
                    area: "Semiconductors",
                    desc: "RF-Sub-THz integrated circuits, sensors [citation:10]",
                    icon: "💻"
                  },
                  {
                    area: "Wireless Systems",
                    desc: "RIS technology, beamforming, V2X communication [citation:5][citation:10]",
                    icon: "📶"
                  },
                  {
                    area: "AI & Data Science",
                    desc: "AI-based applications, data-driven wireless technologies [citation:10]",
                    icon: "🤖"
                  },
                  {
                    area: "Sustainable Energy",
                    desc: "Energy efficiency, renewable energy systems",
                    icon: "⚡"
                  }
                ].map((focus, index) => (
                  <div key={index} className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30 hover:border-[#4f46e5]/50 transition-all duration-300">
                    <div className="text-4xl mb-3">{focus.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-[#f3f4f6]">{focus.area}</h3>
                    <p className="text-sm text-[#9ca3af]">{focus.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="border-t border-[#1f2937] bg-[#0a0a0a]/50 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Begin Your Journey at India's Oldest IIT</h2>
            <p className="text-[#9ca3af] mb-8 max-w-2xl mx-auto">
              Join an institution with over 175 years of legacy, academic excellence, and cutting-edge research that shapes India's technological future.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://www.iitr.ac.in/admissions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#4f46e5] border border-[#4f46e5] rounded-xl text-white font-medium hover:bg-[#6366f1] transition-all duration-300"
              >
                Admission Information
              </a>
              <a 
                href="https://www.iitr.ac.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#1f2937] border border-[#374151] rounded-xl text-[#f3f4f6] hover:bg-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300"
              >
                Official Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}