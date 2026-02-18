"use client";

import Link from "next/link";
import { useState } from "react";

export default function NITTrichyPage() {
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
            <span className="text-[#f3f4f6] font-medium">NIT Trichy</span>
          </nav>

          {/* College Header */}
          <div className="flex items-start gap-8 animate-fade-in-delay">
            {/* Logo */}
            <div className="hidden md:block flex-shrink-0">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#1f2937] to-[#111827] border border-[#374151] flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-bold bg-gradient-to-br from-[#f3f4f6] to-[#9ca3af] bg-clip-text text-transparent">
                  NITT
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
                  🏆 NIRF #9 (Overall)
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  🌟 Top-Ranked NIT in India
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#f3f4f6] via-[#e5e7eb] to-[#9ca3af] bg-clip-text text-transparent mb-4">
                National Institute of Technology Tiruchirappalli
              </h1>

              <p className="text-[#9ca3af] text-lg leading-relaxed max-w-3xl mb-6">
                Established in 1964, NIT Trichy is the oldest and most prestigious among the 31 National Institutes 
                of Technology in India. It is the only non-IIT institution to feature in the top 10 of NIRF Engineering 
                Rankings 2025, ranked 9th overall, making it the #1 NIT in India .
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.nitt.edu/" 
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
              <div className="text-2xl font-bold text-[#4f46e5]">NIRF #9</div>
              <div className="text-xs text-[#9ca3af] mt-1">Overall 2025 </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">1964</div>
              <div className="text-xs text-[#9ca3af] mt-1">Established</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">800</div>
              <div className="text-xs text-[#9ca3af] mt-1">Acres Campus </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">1,322</div>
              <div className="text-xs text-[#9ca3af] mt-1">Jobs Offered 2025 </div>
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
                { label: "Location", value: "Tiruchirappalli, Tamil Nadu", icon: "📍" },
                { label: "Established", value: "1964", icon: "📅" },
                { label: "Institute Type", value: "Institution of National Importance", icon: "🏛️" },
                { label: "NIRF Rank 2025", value: "#9 (Overall) ", icon: "🏆" },
                { label: "Campus Area", value: "800 Acres ", icon: "🌳" },
                { label: "Total Students", value: "~9,000+", icon: "👥" },
                { label: "Faculty", value: "~600+", icon: "👨‍🏫" },
                { label: "Companies 2025", value: "286+ ", icon: "🏢" }
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
                About NIT Trichy
              </h2>
              <div className="space-y-4 text-[#d1d5db] leading-relaxed">
                <p>
                  The National Institute of Technology Tiruchirappalli (NIT Trichy) was founded in 1964 as the Regional Engineering College (REC) Tiruchirappalli, a joint venture of the Government of India and the Government of Tamil Nadu. It was conferred autonomy in financial and administrative matters in 2003, granted Deemed University status, and renamed NIT Trichy. In 2007, it became an Institution of National Importance by an Act of Parliament .
                </p>
                <p>
                  Located on the banks of the river Cauvery in Thuvakudi, the campus spans 800 acres and is one of the most picturesque technical education campuses in India. It features a distinctive clock tower in the administrative building and a decommissioned MIG-23 military aircraft near the architecture building, symbolizing its engineering heritage .
                </p>
                <p>
                  NIT Trichy is the only non-IIT institution to break into the top 10 of the NIRF Engineering Rankings 2025, securing the 9th position overall. It offers 10 undergraduate and 28 graduate programs, with a strong focus on research, industry collaboration, and holistic student development .
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
                  To be a globally acclaimed institution of higher learning that builds on a culture of excellence in research and teaching, and fosters leadership, innovation, and entrepreneurship.
                </p>
              </div>
              <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  Mission
                </h3>
                <p className="text-[#d1d5db] leading-relaxed">
                  To provide valuable resources for industry and society through excellence in technology and research, while creating an environment that nurtures creativity, innovation, and ethical values .
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
                Academic Structure 
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {[
                  { label: "UG Programs", value: "10", icon: "📚" },
                  { label: "PG Programs", value: "28+", icon: "📖" },
                  { label: "Doctoral Programs", value: "All Depts", icon: "🔬" }
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
                B.Tech Programs 
              </h2>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  "Computer Science and Engineering",
                  "Electronics and Communication Engineering",
                  "Electrical and Electronics Engineering",
                  "Mechanical Engineering",
                  "Civil Engineering",
                  "Chemical Engineering",
                  "Production Engineering",
                  "Metallurgical and Materials Engineering",
                  "Instrumentation and Control Engineering",
                  "Biotechnology"
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

            {/* B.Arch Program */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏛️</span>
                B.Arch Program 
              </h2>
              <div className="grid md:grid-cols-1 gap-3">
                <div
                  className="flex items-center gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-[#7c3aed]" />
                  <span className="text-[#d1d5db] text-sm">Bachelor of Architecture (5 Years)</span>
                </div>
              </div>
            </div>

            {/* Postgraduate Programs */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📚</span>
                Postgraduate Programs 
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">M.Tech</h3>
                  <p className="text-sm text-[#9ca3af]">21+ specializations including CSE, VLSI, Structural, Thermal, Industrial Safety </p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">M.Arch</h3>
                  <p className="text-sm text-[#9ca3af]">Advanced architecture programs</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">MBA</h3>
                  <p className="text-sm text-[#9ca3af]">Department of Management Studies (DoMS) </p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">MCA</h3>
                  <p className="text-sm text-[#9ca3af]">Master of Computer Applications </p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">M.Sc</h3>
                  <p className="text-sm text-[#9ca3af]">Chemistry, Physics, Mathematics</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">MS (Research) & PhD</h3>
                  <p className="text-sm text-[#9ca3af]">Research programs in all departments</p>
                </div>
              </div>
            </div>

            {/* New Program - ITEP */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">👨‍🏫</span>
                New Initiative: Integrated Teacher Education Programme (ITEP) 
              </h2>
              <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                <p className="text-[#d1d5db] mb-4">
                  Launched in October 2024, NIT Trichy is one of 61 institutions selected for the second phase of the Integrated Teacher Education Programme. A cohort of 50 students is enrolled in this 4-year B.Sc. B.Ed course, approved by the National Council for Teacher Education, training teachers for Classes XI and XII in Physics, Chemistry, and Mathematics .
                </p>
                <p className="text-sm text-[#9ca3af]">
                  This initiative utilizes NIT-T's facilities and faculty to raise the quality of STEM education at the school level .
                </p>
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
                Admission Process 2025 
              </h2>
              
              <div className="space-y-6">
                {/* B.Tech / B.Arch Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">B.Tech / B.Arch Admissions </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">1</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">Minimum 75% in 10+2 with PCM</div>
                        <div className="text-sm text-[#9ca3af]">Eligibility criteria for undergraduate programs </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">2</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">JEE Main Score</div>
                        <div className="text-sm text-[#9ca3af]">Admission based on JEE Main rank </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">3</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">JoSAA Counselling</div>
                        <div className="text-sm text-[#9ca3af]">Participate in JoSAA for seat allotment </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* M.Tech Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">M.Tech Admissions </h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db]">Valid GATE score with minimum 60% marks in bachelor's degree, followed by CCMT counselling .</p>
                  </div>
                </div>

                {/* MBA Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">MBA Admissions </h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db]">Valid CAT score followed by group discussion and personal interview .</p>
                  </div>
                </div>

                {/* MCA Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">MCA Admissions </h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db]">Valid NIMCET score through centralized counselling .</p>
                  </div>
                </div>

                {/* M.Sc Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">M.Sc Admissions </h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db]">Valid IIT JAM score with minimum 55% marks in bachelor's degree .</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fee Structure */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">💰</span>
                Fee Structure 2025-26 
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">B.Tech / B.Arch</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">1st Year Fees</span>
                      <span className="text-[#f3f4f6] font-semibold">₹1,44,200 </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Annual Fees (2nd-4th Year)</span>
                      <span className="text-[#f3f4f6] font-semibold">₹1,44,200/year </span>
                    </div>
                    <div className="border-t border-[#374151] pt-2 mt-2 flex justify-between">
                      <span className="text-[#f3f4f6] font-semibold">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold">₹6,86,050 </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">M.Tech</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold">₹2.35 Lakhs </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">MBA</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold">₹6.0 Lakhs (Approx.)</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">M.Sc / MCA</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold">₹55,000 - ₹1,00,000</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                <h3 className="font-semibold text-lg mb-2">Hostel Fees (Per Year) </h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#9ca3af]">Hostel Charges</span>
                    <span className="text-[#f3f4f6]">₹31,250 (Year 1) / ₹26,000 (Years 2-4)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* JEE Main Cutoff */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📊</span>
                JEE Main Cutoff 2024 (Closing Ranks - General) 
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { program: "Computer Science and Engineering", rank: "~1000" },
                  { program: "Electronics and Communication Engg.", rank: "~2000" },
                  { program: "Electrical and Electronics Engg.", rank: "~3000" },
                  { program: "Mechanical Engineering", rank: "~5000" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <span className="text-[#d1d5db] text-sm">{item.program}</span>
                    <span className="text-[#4f46e5] font-semibold">{item.rank}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#9ca3af] mt-4">* NIT Trichy attracts the highest cutoffs among all NITs, often closing under rank 1000 for CSE .</p>
            </div>
          </div>
        )}

        {/* Placements Tab */}
        {activeTab === "placements" && (
          <div className="space-y-8 animate-fade-in">
            {/* Placement Highlights 2025 */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">💼</span>
                Placement Highlights 2025 
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {[
                  { label: "Overall Placement", value: "87%", icon: "📊" },
                  { label: "Total Job Offers", value: "1,322", icon: "🎯" },
                  { label: "Companies Participated", value: "286+", icon: "🏢" },
                  { label: "UG Placement Rate", value: "88.9%", icon: "👥" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center hover:border-[#4f46e5]/50 transition-all duration-300">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-[#4f46e5] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Highest Packages */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Highest Packages 2025 </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                    <div className="text-sm text-[#9ca3af]">CSE / ECE</div>
                    <div className="text-2xl font-bold text-[#4f46e5]">₹52.89 LPA</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                    <div className="text-sm text-[#9ca3af]">Mechanical / Chemical</div>
                    <div className="text-2xl font-bold text-[#4f46e5]">₹33.00 LPA</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                    <div className="text-sm text-[#9ca3af]">Production</div>
                    <div className="text-2xl font-bold text-[#4f46e5]">₹38.03 LPA</div>
                  </div>
                </div>
              </div>

              {/* Branch-wise Placement Details */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Branch-wise Placement Details 2025 </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#1f2937]/50">
                        <th className="p-3 text-left text-sm font-semibold text-[#f3f4f6]">Branch</th>
                        <th className="p-3 text-left text-sm font-semibold text-[#f3f4f6]">Placement %</th>
                        <th className="p-3 text-left text-sm font-semibold text-[#f3f4f6]">Average Package</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { branch: "Computer Science and Engineering", percentage: "95.6%", average: "₹27.20 LPA" },
                        { branch: "Electronics and Communication Engg.", percentage: "97.6%", average: "₹23.00 LPA" },
                        { branch: "Electrical and Electronics Engg.", percentage: "97.3%", average: "₹19.30 LPA" },
                        { branch: "Chemical Engineering", percentage: "92.6%", average: "₹12.50 LPA" },
                        { branch: "Mechanical Engineering", percentage: "90.1%", average: "₹13.55 LPA" },
                        { branch: "Production Engineering", percentage: "85.9%", average: "₹13.20 LPA" },
                        { branch: "Civil Engineering", percentage: "79.8%", average: "₹12.90 LPA" },
                        { branch: "MCA", percentage: "91.1%", average: "₹8-12 LPA" },
                        { branch: "MBA", percentage: "72.8%", average: "₹8.70 LPA (Median)" }
                      ].map((item, index) => (
                        <tr key={index} className="border-b border-[#374151]">
                          <td className="p-3 text-sm text-[#d1d5db]">{item.branch}</td>
                          <td className="p-3 text-sm text-[#4f46e5] font-semibold">{item.percentage}</td>
                          <td className="p-3 text-sm text-[#4f46e5] font-semibold">{item.average}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* PG Placement Details */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Postgraduate Placements 2024 </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="font-semibold text-[#f3f4f6]">M.Tech CSE</div>
                    <div className="text-sm text-[#9ca3af]">100% placements</div>
                    <div className="text-sm text-[#4f46e5]">Median: ₹9.5 LPA</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="font-semibold text-[#f3f4f6]">M.Tech (Overall)</div>
                    <div className="text-sm text-[#9ca3af]">89% placements</div>
                    <div className="text-sm text-[#4f46e5]">Median: ₹9.5 LPA </div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="font-semibold text-[#f3f4f6]">M.Arch</div>
                    <div className="text-sm text-[#9ca3af]">23 placed</div>
                    <div className="text-sm text-[#4f46e5]">Median: ₹6.5 LPA </div>
                  </div>
                </div>
              </div>

              {/* Top Recruiters */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Top Recruiters 2025 </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    "Google", "Microsoft", "Amazon", "Goldman Sachs", "Qualcomm", "Texas Instruments",
                    "Deloitte", "Infosys", "TCS", "Accenture", "PhonePe", "Adani",
                    "ICICI Bank", "Genpact", "Intel", "Honeywell", "ITC", "Reliance",
                    "L&T", "Cognizant", "Oracle", "Cisco", "Adobe", "VMware",
                    "Hindustan Petroleum", "Indian Oil", "BPCL", "Essar Group", "Volvo"
                  ].map((company, index) => (
                    <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300 text-center text-sm text-[#d1d5db]">
                      {company}
                    </div>
                  ))}
                </div>
              </div>

              {/* Salary Trends */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Salary Package Range 2025 </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="font-semibold text-[#f3f4f6] mb-2">CSE</div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#9ca3af]">Range:</span>
                      <span className="text-[#d1d5db]">₹7 LPA - ₹52.89 LPA</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="font-semibold text-[#f3f4f6] mb-2">ECE</div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#9ca3af]">Range:</span>
                      <span className="text-[#d1d5db]">₹6.5 LPA - ₹52.89 LPA</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="font-semibold text-[#f3f4f6] mb-2">Mechanical</div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#9ca3af]">Range:</span>
                      <span className="text-[#d1d5db]">₹6 LPA - ₹33 LPA</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="font-semibold text-[#f3f4f6] mb-2">Civil</div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#9ca3af]">Range:</span>
                      <span className="text-[#d1d5db]">₹3.75 LPA - ₹33 LPA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Campus Life Tab */}
        {activeTab === "campus" && (
          <div className="space-y-8 animate-fade-in">
            {/* Campus Overview */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏞️</span>
                The NIT Trichy Campus 
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-[#4f46e5] mb-2">800 Acres</div>
                  <p className="text-[#9ca3af]">Located in Thuvakudi on the Trichy-Thanjavur National Highway, 17 km from Trichy Railway Junction, on the banks of the river Cauvery .</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#4f46e5] mb-2">Iconic Landmarks</div>
                  <p className="text-[#9ca3af]">Famous clock tower and a decommissioned MIG-23 military aircraft near the architecture building .</p>
                </div>
              </div>
            </div>

            {/* Campus Facilities */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏛️</span>
                Campus Facilities 
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: "Central Library", desc: "Vast collection of books, journals, and e-resources", icon: "📚" },
                  { name: "The Octagon", desc: "CAD/CAM Lab, Local Area Network, High-Speed Internet", icon: "🖥️" },
                  { name: "Hostels", desc: "Separate hostels for boys and girls with modern amenities", icon: "🏠" },
                  { name: "Hospital", desc: "24/7 medical facility for students and staff", icon: "🏥" },
                  { name: "Sports Complex", desc: "Swimming pool, cricket/football grounds, tennis/badminton courts", icon: "⚽" },
                  { name: "Banking", desc: "Fully computerized SBI branch with ATM facility", icon: "🏦" },
                  { name: "Post & Telegraph", desc: "Post office and telecom center on campus", icon: "📬" },
                  { name: "Canteen & Stores", desc: "Multiple canteens, bookstall, and reprographic center", icon: "☕" },
                  { name: "Transport", desc: "Battery vehicles for internal transport (paid service)", icon: "🚌" }
                ].map((facility, index) => (
                  <div key={index} className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30 hover:border-[#4f46e5]/50 transition-all duration-300">
                    <div className="text-4xl mb-3">{facility.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-[#f3f4f6]">{facility.name}</h3>
                    <p className="text-sm text-[#9ca3af]">{facility.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Campus Updates */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🆕</span>
                Recent Campus Updates 
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="font-semibold text-[#f3f4f6] mb-2">Security Enhancements</h3>
                  <p className="text-sm text-[#9ca3af]">Increased security personnel, data collection of all entrants, and monitored movement of workers in repair sites .</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="font-semibold text-[#f3f4f6] mb-2">Internal Transport</h3>
                  <p className="text-sm text-[#9ca3af]">Two battery vehicles introduced as paid service for students and faculty; two more planned due to high demand .</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="font-semibold text-[#f3f4f6] mb-2">Mental Health Support</h3>
                  <p className="text-sm text-[#9ca3af]">Online counselling service YourDOST available; utilized by 1,700 students and faculty in 2025 .</p>
                </div>
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
                      "SAE Club"
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
                    name: "Festember",
                    type: "Cultural Festival",
                    desc: "Started in 1975, attracts students from 500+ colleges across India. 4-day event with themes like 'Arabian Odyssey' ",
                    icon: "🎭"
                  },
                  {
                    name: "Pragyan",
                    type: "Technical Festival",
                    desc: "Annual techno-management festival",
                    icon: "🔧"
                  },
                  {
                    name: "NITTfest",
                    type: "Inter-Department Fest",
                    desc: "Cultural festival for departments",
                    icon: "🏅"
                  },
                  {
                    name: "Department Symposia",
                    type: "Academic Events",
                    desc: "Each department conducts annual symposiums",
                    icon: "📚"
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

            {/* International Exchange */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🌍</span>
                International Student Exchange 
              </h2>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <p className="text-sm text-[#d1d5db]">
                    <span className="font-semibold text-[#f3f4f6]">ICCR Programme:</span> 7 foreign students applied under Indian Cultural Exchange Programme .
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <p className="text-sm text-[#d1d5db]">
                    <span className="font-semibold text-[#f3f4f6]">Study in India:</span> 6 students from Afghanistan, Bangladesh, Nepal, Sri Lanka, and USA .
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <p className="text-sm text-[#d1d5db]">
                    <span className="font-semibold text-[#f3f4f6]">Illinois Tech MoU:</span> 15-20 students from Illinois Institute of Technology, Chicago will study at NIT-T's Department of Architecture for one semester .
                  </p>
                </div>
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
                NIT Trichy is a lead institution under the government's Technical Education Quality Improvement Programme (TEQIP) and has strong research collaborations with international universities including Loughborough University and University of Leicester .
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: "Research Departments", value: "15+", icon: "🏛️" },
                  { label: "International Partners", value: "3+", icon: "🌍" },
                  { label: "NPTEL Courses 2025", value: "160", icon: "📚" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-[#4f46e5] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chemistry Department Research */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🧪</span>
                Department of Chemistry - DST-FIST Sponsored 
              </h2>
              <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                <p className="text-[#d1d5db] mb-4">
                  Established in 1971, the Department of Chemistry is DST-FIST sponsored with excellent facilities including 5 laboratories: B.E/B.Tech lab, PG lab, Instrumentation lab, Computer lab, and Research lab .
                </p>
                
                <h3 className="text-lg font-semibold mb-3 text-[#f3f4f6]">International Collaborations </h3>
                <div className="grid md:grid-cols-2 gap-3 mb-4">
                  <div className="p-3 bg-[#1f2937]/50 rounded text-sm">
                    University of Melbourne, Australia
                  </div>
                  <div className="p-3 bg-[#1f2937]/50 rounded text-sm">
                    Kaohsiung Medical University, Taiwan
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-3 text-[#f3f4f6]">Research Focus Areas </h3>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    "Photochemistry",
                    "Nanomaterials",
                    "Solar Energy",
                    "Sensors",
                    "Surface Chemistry",
                    "Coordination Chemistry",
                    "Organic Chemistry",
                    "Electrochemistry",
                    "Supercapacitors"
                  ].map((area, index) => (
                    <div key={index} className="p-2 bg-[#1f2937]/30 rounded text-xs text-[#9ca3af]">
                      {area}
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-3 text-[#f3f4f6] mt-4">Rural Impact </h3>
                <p className="text-sm text-[#9ca3af]">
                  The department focuses on developing cost-effective appropriate technology for providing drinking water to rural masses and ecofriendly solutions for environmental problems .
                </p>
              </div>
            </div>

            {/* Environmental Engineering Lab */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🌊</span>
                Environmental Engineering Laboratory 
              </h2>
              <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                <p className="text-[#d1d5db] mb-4">
                  Established in 1989 under IIT-REC Network Scheme, this state-of-the-art laboratory serves the Civil Engineering Department with five specialized labs for B.Tech and M.Tech programs .
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-[#f3f4f6] mb-2">Laboratories:</h4>
                    <ul className="space-y-1 text-sm text-[#9ca3af]">
                      <li>• Environmental Engineering Laboratory</li>
                      <li>• Environmental Quality Measurements Lab</li>
                      <li>• Environmental Microbiology Lab</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#f3f4f6] mb-2">Features:</h4>
                    <ul className="space-y-1 text-sm text-[#9ca3af]">
                      <li>• Latest technological aids</li>
                      <li>• Full-time power backup</li>
                      <li>• Adequate safety precautions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Credit System */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📊</span>
                Academic Bank of Credits (ABC) 
              </h2>
              <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                <p className="text-[#d1d5db] mb-4">
                  In line with NEP 2020, NIT Trichy has implemented a flexible curriculum with multiple entry and exit options at both undergraduate and postgraduate levels .
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-3 bg-[#1f2937]/50 rounded text-center">
                    <div className="text-xl font-bold text-[#4f46e5]">160</div>
                    <div className="text-xs text-[#9ca3af]">NPTEL Courses 2025</div>
                  </div>
                  <div className="p-3 bg-[#1f2937]/50 rounded text-center">
                    <div className="text-xl font-bold text-[#4f46e5]">9,933</div>
                    <div className="text-xs text-[#9ca3af]">Credits Transferred</div>
                  </div>
                  <div className="p-3 bg-[#1f2937]/50 rounded text-center">
                    <div className="text-xl font-bold text-[#4f46e5]">9,809</div>
                    <div className="text-xs text-[#9ca3af]">Students with ABC IDs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="border-t border-[#1f2937] bg-[#0a0a0a]/50 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Join India's #1 NIT</h2>
            <p className="text-[#9ca3af] mb-8 max-w-2xl mx-auto">
              Experience the prestige of the top-ranked NIT with 800 acres of scenic campus, 87% placements, and a legacy of excellence since 1964.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://www.nitt.edu/home/admissions/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#4f46e5] border border-[#4f46e5] rounded-xl text-white font-medium hover:bg-[#6366f1] transition-all duration-300"
              >
                Admission Information
              </a>
              <a 
                href="https://www.nitt.edu/" 
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