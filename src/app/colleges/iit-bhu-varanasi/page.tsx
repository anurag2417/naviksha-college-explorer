"use client";

import Link from "next/link";
import { useState } from "react";

export default function IITBHUPage() {
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
            <span className="text-[#f3f4f6] font-medium">IIT (BHU) Varanasi</span>
          </nav>

          {/* College Header */}
          <div className="flex items-start gap-8 animate-fade-in-delay">
            {/* Logo */}
            <div className="hidden md:block flex-shrink-0">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#1f2937] to-[#111827] border border-[#374151] flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-bold bg-gradient-to-br from-[#f3f4f6] to-[#9ca3af] bg-clip-text text-transparent">
                  IITBHU
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
                  🏆 NIRF #10 (Engineering 2025)
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  🌟 Heritage Campus Since 1919
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#f3f4f6] via-[#e5e7eb] to-[#9ca3af] bg-clip-text text-transparent mb-4">
                Indian Institute of Technology (BHU) Varanasi
              </h1>

              <p className="text-[#9ca3af] text-lg leading-relaxed max-w-3xl mb-6">
                Established in 1919 as the Banaras Engineering College, IIT (BHU) Varanasi is one of India's oldest 
                engineering institutions, seamlessly blending rich heritage with modern technological education. 
                Located within the 1,300+ acre BHU campus, it ranks 10th in NIRF Engineering 2025 and offers a unique 
                cultural and academic experience on the banks of the Ganges .
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.iitbhu.ac.in/" 
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
              <div className="text-2xl font-bold text-[#4f46e5]">NIRF #10</div>
              <div className="text-xs text-[#9ca3af] mt-1">Engineering 2025 </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">1919</div>
              <div className="text-xs text-[#9ca3af] mt-1">Established</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">1,416</div>
              <div className="text-xs text-[#9ca3af] mt-1">Placement Offers 2025 </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">₹2.2 Cr</div>
              <div className="text-xs text-[#9ca3af] mt-1">Highest Package </div>
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
                { label: "Location", value: "Varanasi, Uttar Pradesh", icon: "📍" },
                { label: "Established", value: "1919", icon: "📅" },
                { label: "Institute Type", value: "IIT (Institute of National Importance)", icon: "🏛️" },
                { label: "NIRF Rank 2025", value: "#10 (Engineering) ", icon: "🏆" },
                { label: "Campus Area", value: "1,300+ Acres (with BHU) ", icon: "🌳" },
                { label: "Total Students", value: "~8,000+", icon: "👥" },
                { label: "Hostels", value: "17 ", icon: "🏘️" },
                { label: "B.Tech Placement 2025", value: "92.33% ", icon: "📊" }
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
                About IIT (BHU) Varanasi
              </h2>
              <div className="space-y-4 text-[#d1d5db] leading-relaxed">
                <p>
                  Indian Institute of Technology (Banaras Hindu University) Varanasi, commonly known as IIT (BHU) Varanasi, is one of the oldest engineering institutions in India. Its history dates back to 1919 with the establishment of the Banaras Engineering College. It became a part of Banaras Hindu University in 1968 and was converted to an IIT in 2012, receiving the status of an Institute of National Importance .
                </p>
                <p>
                  Located within the historic 1,300+ acre campus of Banaras Hindu University in Varanasi, the institute offers a unique blend of traditional academic heritage and modern technological education. The campus is approximately 3 km inside from the main gate of BHU and about 10 km from Varanasi Cantt. Railway Station .
                </p>
                <p>
                  IIT (BHU) has consistently ranked among the top engineering colleges in India, securing the 10th position in NIRF Engineering Rankings 2025 . The institute is known for its excellent placement record, with 1,416 offers received in 2024-25 and a highest package of ₹2.2 crore .
                </p>
              </div>
            </div>

            {/* Vision & Leadership */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  Vision
                </h3>
                <p className="text-[#d1d5db] leading-relaxed">
                  To be a global leader in technology education and research, fostering innovation and entrepreneurship while preserving the rich cultural heritage of Varanasi and contributing to nation-building.
                </p>
              </div>
              <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">👨‍🏫</span>
                  Director's Message
                </h3>
                <p className="text-[#d1d5db] leading-relaxed">
                  "IIT (BHU)'s excellent placement results are a testament to the innovative capabilities, analytical thinking, and leadership qualities of our students. We are continuously strengthening collaborations with national and international organizations to enable students to make leading contributions in science, technology, and management." – Prof. Amit Patra, Director .
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Academics Tab */}
        {activeTab === "academics" && (
          <div className="space-y-8 animate-fade-in">
            {/* Academic Structure */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🎓</span>
                Academic Structure
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {[
                  { label: "Departments", value: "14+", icon: "🏛️" },
                  { label: "Schools", value: "3+", icon: "📚" },
                  { label: "Interdisciplinary Schools", value: "3", icon: "🔄" }
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
                  "Biochemical Engineering",
                  "Biomedical Engineering",
                  "Ceramic Engineering",
                  "Chemical Engineering",
                  "Civil Engineering",
                  "Computer Science and Engineering",
                  "Electrical Engineering",
                  "Electronics Engineering",
                  "Engineering Physics",
                  "Industrial Chemistry",
                  "Materials Science and Technology",
                  "Mechanical Engineering",
                  "Metallurgical Engineering",
                  "Mining Engineering",
                  "Pharmaceutical Engineering"
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

            {/* Dual Degree Programs */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🔄</span>
                Dual Degree Programs
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "B.Tech + M.Tech (Biochemical Engineering)",
                  "B.Tech + M.Tech (Ceramic Engineering)",
                  "B.Tech + M.Tech (Industrial Chemistry)",
                  "B.Tech + M.Tech (Materials Science and Technology)",
                  "B.Tech + M.Tech (Metallurgical Engineering)",
                  "B.Tech + M.Tech (Mining Engineering)",
                  "B.Tech + M.Tech (Pharmaceutical Engineering)"
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
                Postgraduate Programs
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">M.Tech</h3>
                  <p className="text-sm text-[#9ca3af]">Multiple specializations across all departments</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">M.Arch</h3>
                  <p className="text-sm text-[#9ca3af]">Advanced architecture programs</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">M.Sc</h3>
                  <p className="text-sm text-[#9ca3af]">Physics, Chemistry, Mathematics</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">MBA</h3>
                  <p className="text-sm text-[#9ca3af]">Department of Management Studies</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">MS (Research)</h3>
                  <p className="text-sm text-[#9ca3af]">Research-oriented master's program</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">PhD</h3>
                  <p className="text-sm text-[#9ca3af]">Doctoral programs in all departments</p>
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
                        <div className="font-semibold text-[#f3f4f6] mb-1">JEE Advanced Score</div>
                        <div className="text-sm text-[#9ca3af]">Admission based on JEE Advanced rank </div>
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
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">M.Tech Admissions</h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db]">Valid GATE score with minimum 60% marks in bachelor's degree, followed by CCMT counselling.</p>
                  </div>
                </div>

                {/* M.Sc Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">M.Sc Admissions</h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db]">Valid IIT JAM score followed by JAM counselling.</p>
                  </div>
                </div>

                {/* MBA Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">MBA Admissions</h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db]">Valid CAT score with selection based on academic record, work experience, and personal interview.</p>
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
                  <h3 className="font-semibold text-lg mb-4">B.Tech (4 Years) - General/OBC</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">1st Semester Fees</span>
                      <span className="text-[#f3f4f6] font-semibold">₹1,21,600 </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Mess Advance</span>
                      <span className="text-[#f3f4f6] font-semibold">₹16,500 </span>
                    </div>
                    <div className="border-t border-[#374151] pt-2 mt-2 flex justify-between">
                      <span className="text-[#f3f4f6] font-semibold">Total 1st Year (approx.)</span>
                      <span className="text-[#4f46e5] font-bold">₹2.14 Lakhs </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">B.Tech (4 Years) - SC/ST</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">1st Semester Fees</span>
                      <span className="text-[#f3f4f6] font-semibold">₹21,300 </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Mess Advance</span>
                      <span className="text-[#f3f4f6] font-semibold">₹16,500 </span>
                    </div>
                    <div className="border-t border-[#374151] pt-2 mt-2 flex justify-between">
                      <span className="text-[#f3f4f6] font-semibold">Total 1st Year (approx.)</span>
                      <span className="text-[#4f46e5] font-bold">₹37,800 </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                <h3 className="font-semibold text-lg mb-2">Tuition Fee Exemption</h3>
                <div className="space-y-2 text-sm text-[#9ca3af]">
                  <div className="flex items-start gap-2">• <span className="text-[#d1d5db]">Students with family income less than ₹1 lakh: Full tuition fee exemption </span></div>
                  <div className="flex items-start gap-2">• <span className="text-[#d1d5db]">Students with family income between ₹1-5 lakhs: 2/3 tuition fee exemption </span></div>
                </div>
              </div>
              <div className="mt-4 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                <h3 className="font-semibold text-lg mb-2">Foreign Nationals</h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#9ca3af]">SAARC Countries</span>
                    <span className="text-[#f3f4f6]">US $1,000 per semester</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9ca3af]">Other Countries</span>
                    <span className="text-[#f3f4f6]">US $2,000 per semester</span>
                  </div>
                </div>
              </div>
            </div>

            {/* JEE Advanced Cutoff */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📊</span>
                JEE Advanced Cutoff 2025 (Closing Ranks - General) 
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { program: "Computer Science and Engineering", rank: "~1500" },
                  { program: "Electronics Engineering", rank: "~2500" },
                  { program: "Electrical Engineering", rank: "~3500" },
                  { program: "Mechanical Engineering", rank: "~5000" }
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
            {/* Placement Highlights 2024-25 */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">💼</span>
                Placement Highlights 2024-25 
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {[
                  { label: "Total Offers", value: "1,416", icon: "🎯" },
                  { label: "B.Tech Placement %", value: "92.33%", icon: "📊" },
                  { label: "Pre-Placement Offers", value: "297", icon: "📋" },
                  { label: "Internship Opportunities", value: "502", icon: "💻" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center hover:border-[#4f46e5]/50 transition-all duration-300">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-[#4f46e5] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Salary Details */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Salary Packages 2024-25 </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                    <div className="text-sm text-[#9ca3af]">Highest Package (Overall)</div>
                    <div className="text-2xl font-bold text-[#4f46e5]">₹2.20 Cr</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                    <div className="text-sm text-[#9ca3af]">Average Package (Overall)</div>
                    <div className="text-2xl font-bold text-[#4f46e5]">₹24.49 LPA</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                    <div className="text-sm text-[#9ca3af]">Average Package (B.Tech)</div>
                    <div className="text-2xl font-bold text-[#4f46e5]">₹23.49 LPA</div>
                  </div>
                </div>
              </div>

              {/* Phase I Performance 2025 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Placement Phase I 2025 (as of Dec 2) </h3>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { label: "Participating Companies", value: "116" },
                    { label: "Total Offers", value: "555" },
                    { label: "PPOs", value: "280" },
                    { label: "Paid Internships", value: "443" }
                  ].map((item, index) => (
                    <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                      <div className="text-xl font-bold text-[#4f46e5]">{item.value}</div>
                      <div className="text-xs text-[#9ca3af]">{item.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="text-sm text-[#9ca3af]">Day 1 (Slot 0 & 1)</div>
                    <div className="text-lg font-bold text-[#f3f4f6]">209 offers from 55 profiles</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="text-sm text-[#9ca3af]">Day 2</div>
                    <div className="text-lg font-bold text-[#f3f4f6]">227 offers from 56 profiles</div>
                  </div>
                </div>
              </div>

              {/* Top Recruiters 2025 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Top Recruiters 2025 </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    "Google", "Microsoft", "Amazon", "Cisco", "Uber", "NVIDIA",
                    "Goldman Sachs", "J.P. Morgan Chase", "D.E. Shaw", "Mastercard", "McKinsey", "ZS Associates",
                    "Deutsche Bank", "Wells Fargo", "Databricks", "Square Point", "Pesstock", "Rubrik",
                    "Flipkart", "Groww", "Bajaj", "Piramal Finance", "Commonwealth Bank", "Samsung",
                    "Accenture", "American Express", "Barclays", "Razorpay", "Sprinklr", "Warner Bros. Discovery",
                    "Visa", "Ola Electric", "Urban Company", "Media.net", "Applied Materials", "Jindal Steel",
                    "Postman", "Qure.ai", "EXL", "Teradata", "ThoughtSpot", "Texas Instruments"
                  ].map((company, index) => (
                    <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300 text-center text-sm text-[#d1d5db]">
                      {company}
                    </div>
                  ))}
                </div>
              </div>

              {/* Recruitment Domains */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Recruitment Domains </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Software Development", "AI/ML", "Applied Science", "Fintech Engineering", 
                    "Data Science", "Analytics", "Consulting", "Core Engineering", "Product Management"
                  ].map((domain, index) => (
                    <span key={index} className="px-3 py-1 rounded-full bg-[#1f2937]/50 border border-[#374151] text-sm text-[#d1d5db]">
                      {domain}
                    </span>
                  ))}
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
                The IIT (BHU) Campus
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-[#4f46e5] mb-2">1,300+ Acres</div>
                  <p className="text-[#9ca3af]">Located within the historic Banaras Hindu University campus, approximately 3 km inside from the main gate and 10 km from Varanasi Cantt. Railway Station .</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#4f46e5] mb-2">Heritage</div>
                  <p className="text-[#9ca3af]">Established in 1919, the campus blends colonial-era architecture with modern state-of-the-art facilities on the banks of the Ganges .</p>
                </div>
              </div>
            </div>

            {/* Hostel Facilities */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏘️</span>
                World-Class Hostels 
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#4f46e5]">Key Features</h3>
                  <ul className="space-y-2 text-sm text-[#9ca3af]">
                    <li className="flex items-start gap-2">• <span className="text-[#d1d5db]">17 hostels with modern amenities </span></li>
                    <li className="flex items-start gap-2">• <span className="text-[#d1d5db]">FSSAI-certified kitchens with hygienic and nutritious meals </span></li>
                    <li className="flex items-start gap-2">• <span className="text-[#d1d5db]">IoT-enabled washing machines with mobile notifications </span></li>
                    <li className="flex items-start gap-2">• <span className="text-[#d1d5db]">First in India to install sanitary pad vending machines in girls' hostels </span></li>
                    <li className="flex items-start gap-2">• <span className="text-[#d1d5db]">AC common rooms, vending machines for snacks and beverages </span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#4f46e5]">Notable Hostels</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 bg-[#1f2937]/30 rounded text-xs text-[#9ca3af]">Prafulla Chandra Ray (Boys)</div>
                    <div className="p-2 bg-[#1f2937]/30 rounded text-xs text-[#9ca3af]">Gandhi Smriti (Girls)</div>
                    <div className="p-2 bg-[#1f2937]/30 rounded text-xs text-[#9ca3af]">Vishwakarma</div>
                    <div className="p-2 bg-[#1f2937]/30 rounded text-xs text-[#9ca3af]">Ramanujan</div>
                    <div className="p-2 bg-[#1f2937]/30 rounded text-xs text-[#9ca3af]">Aryabhatta</div>
                    <div className="p-2 bg-[#1f2937]/30 rounded text-xs text-[#9ca3af]">Dhanvantari</div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#d1d5db] mt-2">"Our goal is to create a dynamic and inclusive campus that attracts a diverse student body from across the globe." – Prof. Amit Patra, Director </p>
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
                  { name: "Sports Complex", desc: "Cricket, football, tennis, basketball, swimming pool", icon: "⚽" },
                  { name: "Computer Center", desc: "High-performance computing with 1Gbps backbone", icon: "💻" },
                  { name: "Health Center", desc: "24/7 medical facility for students and staff", icon: "🏥" },
                  { name: "Auditoriums", desc: "Multiple venues for conferences and cultural events", icon: "🎭" },
                  { name: "Banking", desc: "SBI branch and ATMs within campus", icon: "🏦" },
                  { name: "Cafeterias", desc: "Multiple canteens and food outlets", icon: "☕" },
                  { name: "Shopping Complex", desc: "Stationery, bookstores, and convenience stores", icon: "🛍️" }
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
                    name: "Kashiyatra",
                    type: "Cultural Festival",
                    desc: "Annual cultural extravaganza with performances, competitions, and celebrity nights",
                    icon: "🎭"
                  },
                  {
                    name: "Technex",
                    type: "Technical Festival",
                    desc: "Annual techno-management festival with competitions, workshops, and talks",
                    icon: "🔧"
                  },
                  {
                    name: "Spardha",
                    type: "Sports Festival",
                    desc: "Annual sports competition with multiple disciplines",
                    icon: "🏆"
                  },
                  {
                    name: "Inter IIT Sports Meet",
                    type: "Sports Competition",
                    desc: "Representation in the annual sports meet among all IITs",
                    icon: "🏅"
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
                IIT (BHU) Varanasi is at the forefront of cutting-edge research with major collaborations in cloud computing, defence technology, and interdisciplinary sciences. The institute focuses on research that addresses national priorities and global challenges.
              </p>
            </div>

            {/* Akashganga Cloud Initiative */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">☁️</span>
                Akashganga Cloud Research Initiative 
              </h2>
              <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                <p className="text-[#d1d5db] mb-4">
                  In January 2026, IIT (BHU) launched 'Akashganga Cloud', a multi-year visionary cloud research initiative in collaboration with Amazon Web Services (AWS), Synchron, and the IIT (BHU) Alumni Foundation USA .
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-[#f3f4f6]">Meaning Behind the Name</h3>
                    <ul className="space-y-2 text-sm text-[#9ca3af]">
                      <li className="flex items-start gap-2">• <span><span className="text-[#d1d5db]">Akash:</span> Symbolizes the boundless possibilities of the cloud</span></li>
                      <li className="flex items-start gap-2">• <span><span className="text-[#d1d5db]">Ganga:</span> Represents continuous flow, connectivity, and constant exchange of knowledge</span></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-[#f3f4f6]">Collaborators</h3>
                    <ul className="space-y-2 text-sm text-[#9ca3af]">
                      <li className="flex items-start gap-2">• Amazon Web Services (AWS)</li>
                      <li className="flex items-start gap-2">• Synchron</li>
                      <li className="flex items-start gap-2">• IIT (BHU) Alumni Foundation USA</li>
                    </ul>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-[#f3f4f6] mt-4">Objectives</h3>
                <ul className="space-y-2 text-sm text-[#9ca3af]">
                  <li className="flex items-start gap-2">• Strengthen cloud computing infrastructure at IIT (BHU)</li>
                  <li className="flex items-start gap-2">• Accelerate advanced research and innovation across disciplines</li>
                  <li className="flex items-start gap-2">• Foster industry-academia collaboration</li>
                  <li className="flex items-start gap-2">• Enable next-generation cloud-enabled solutions</li>
                </ul>
              </div>
            </div>

            {/* Defence Research Collaboration */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🛡️</span>
                Defence Research - MoU with 39 Gorkha Training Centre 
              </h2>
              <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                <p className="text-[#d1d5db] mb-4">
                  In October 2025, IIT (BHU) signed an MoU with 39 Gorkha Training Centre (39 GTC), Varanasi, to promote mutual cooperation, knowledge exchange, and joint initiatives of national importance .
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-[#f3f4f6] mb-2">Key Areas of Collaboration:</h4>
                    <ul className="space-y-1 text-sm text-[#9ca3af]">
                      <li>• Site visits, demonstrations, and trials</li>
                      <li>• Project design and development</li>
                      <li>• Motivational visits for students</li>
                      <li>• Exchange of expertise at technical festivals</li>
                      <li>• Faculty Development Programs (QIPs)</li>
                      <li>• Short-term courses and workshops</li>
                      <li>• Startup incubation</li>
                      <li>• Environmental and social initiatives</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#f3f4f6] mb-2">Quotes</h4>
                    <p className="text-sm text-[#d1d5db] mb-2">
                      "This partnership reflects our commitment to contributing to the nation's strategic and technological progress." – Prof. Amit Patra, Director
                    </p>
                    <p className="text-sm text-[#d1d5db]">
                      "This collaboration will help strengthen the nation's indigenous capabilities and accelerate the vision of a self-reliant India." – Major General Amit Singh Sohal
                    </p>
                  </div>
                </div>
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
                    area: "Cloud Computing",
                    desc: "Akashganga Cloud initiative with AWS for advanced cloud research ",
                    icon: "☁️"
                  },
                  {
                    area: "Defence Technology",
                    desc: "Collaboration with 39 GTC for national security research ",
                    icon: "🛡️"
                  },
                  {
                    area: "Ceramic Engineering",
                    desc: "Advanced ceramics, refractories, and high-temperature materials",
                    icon: "🏺"
                  },
                  {
                    area: "Pharmaceutical Engineering",
                    desc: "Drug development, formulation, and delivery systems ",
                    icon: "💊"
                  },
                  {
                    area: "Metallurgical Engineering",
                    desc: "Advanced alloys, materials processing, and characterization",
                    icon: "⚙️"
                  },
                  {
                    area: "Mining Engineering",
                    desc: "Sustainable mining, safety, and mineral processing",
                    icon: "⛏️"
                  },
                  {
                    area: "Biochemical Engineering",
                    desc: "Bioprocess technology, fermentation, and enzyme engineering",
                    icon: "🧬"
                  },
                  {
                    area: "Artificial Intelligence",
                    desc: "AI applications in engineering and healthcare",
                    icon: "🤖"
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
            <h2 className="text-3xl font-bold mb-4">Join a Legacy of Excellence Since 1919</h2>
            <p className="text-[#9ca3af] mb-8 max-w-2xl mx-auto">
              Experience the perfect blend of heritage and modernity at IIT (BHU) Varanasi, ranked #10 in India with 92% placements and a ₹2.2 crore highest package.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://www.iitbhu.ac.in/admissions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#4f46e5] border border-[#4f46e5] rounded-xl text-white font-medium hover:bg-[#6366f1] transition-all duration-300"
              >
                Admission Information
              </a>
              <a 
                href="https://www.iitbhu.ac.in/" 
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