"use client";

import Link from "next/link";
import { useState } from "react";

export default function IITGuwahatiPage() {
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
            <span className="text-[#f3f4f6] font-medium">IIT Guwahati</span>
          </nav>

          {/* College Header */}
          <div className="flex items-start gap-8 animate-fade-in-delay">
            {/* Logo */}
            <div className="hidden md:block flex-shrink-0">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#1f2937] to-[#111827] border border-[#374151] flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-bold bg-gradient-to-br from-[#f3f4f6] to-[#9ca3af] bg-clip-text text-transparent">
                  IITG
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
                  🏆 NIRF #8 (Engineering)
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  🌟 India's Youngest Top IIT
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#f3f4f6] via-[#e5e7eb] to-[#9ca3af] bg-clip-text text-transparent mb-4">
                Indian Institute of Technology Guwahati
              </h1>

              <p className="text-[#9ca3af] text-lg leading-relaxed max-w-3xl mb-6">
                Established in 1994, IIT Guwahati is the sixth Indian Institute of Technology and the fastest-growing 
                IIT in India. Located on the banks of the Brahmaputra River, it is renowned for its scenic 700-acre 
                campus, academic excellence, and global research impact. It is the only Indian institution ranked in 
                the top 100 global universities under 50 years of age [citation:2].
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.iitg.ac.in/" 
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
              <div className="text-2xl font-bold text-[#4f46e5]">NIRF #8</div>
              <div className="text-xs text-[#9ca3af] mt-1">Engineering 2025 [citation:1][citation:2]</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">1994</div>
              <div className="text-xs text-[#9ca3af] mt-1">Established [citation:2]</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">700+</div>
              <div className="text-xs text-[#9ca3af] mt-1">Acres Campus [citation:7]</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">7,849+</div>
              <div className="text-xs text-[#9ca3af] mt-1">Students [citation:7]</div>
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
                { label: "Location", value: "Guwahati, Assam", icon: "📍" },
                { label: "Established", value: "1994", icon: "📅" },
                { label: "Institute Type", value: "Government (IIT)", icon: "🏛️" },
                { label: "NIRF Rank 2025", value: "#8 (Engineering)", icon: "🏆" },
                { label: "QS Asia Rank 2026", value: "#115", icon: "🌏" },
                { label: "Total Students", value: "7,849+ [citation:7]", icon: "👥" },
                { label: "Faculty", value: "539+ [citation:7]", icon: "👨‍🏫" },
                { label: "Campus Area", value: "700+ Acres [citation:7]", icon: "🌳" }
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
                About IIT Guwahati
              </h2>
              <div className="space-y-4 text-[#d1d5db] leading-relaxed">
                <p>
                  The Indian Institute of Technology Guwahati (IIT Guwahati) is the sixth Indian Institute of Technology established in India, founded in 1994. Its academic program commenced in 1995, making it the first IIT in the northeastern region. It is recognized as an Institute of National Importance by the Government of India [citation:7].
                </p>
                <p>
                  Located on the northern bank of the Brahmaputra River in Amingaon, North Guwahati, the campus spans over 700 acres of scenic beauty with the river on one side and hills on the other. It is a fully residential campus where all students live in hostels named after rivers and tributaries of Northeast India [citation:7].
                </p>
                <p>
                  IIT Guwahati stands out as the sole educational institution in India to secure a position within the top 100 global universities under 50 years of age, according to Times Higher Education rankings [citation:2]. The institute is known for its cutting-edge research, strong placement record, and vibrant student life with major festivals like Alcheringa and Techniche.
                </p>
              </div>
            </div>

            {/* Global Rankings & Achievements */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">🏆</span>
                  Global Recognition
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#1f2937]/30">
                    <span className="text-[#d1d5db]">QS World University 2025</span>
                    <span className="text-[#4f46e5] font-semibold">#364 [citation:2]</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#1f2937]/30">
                    <span className="text-[#d1d5db]">QS Asia University 2026</span>
                    <span className="text-[#4f46e5] font-semibold">#115 [citation:2]</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#1f2937]/30">
                    <span className="text-[#d1d5db]">THE Impact 2024 (Industry)</span>
                    <span className="text-[#4f46e5] font-semibold">#87 [citation:2]</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#1f2937]/30">
                    <span className="text-[#d1d5db]">THE Impact 2023 (Clean Energy)</span>
                    <span className="text-[#4f46e5] font-semibold">#6 [citation:2]</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-[#1f2937]/30">
                    <span className="text-[#d1d5db]">Research Citations per Faculty (QS)</span>
                    <span className="text-[#4f46e5] font-semibold">#32 [citation:2]</span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">⚡</span>
                  Notable Achievements
                </h3>
                <ul className="space-y-3 text-[#d1d5db]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#4f46e5]">•</span>
                    <span><span className="text-[#f3f4f6]">Top University for IT Developers</span> in Asia-Pacific (HackerRank 2019) [citation:2]</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4f46e5]">•</span>
                    <span><span className="text-[#f3f4f6]">#2 in Swachhata Ranking</span> by Government of India [citation:2]</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4f46e5]">•</span>
                    <span><span className="text-[#f3f4f6]">Top 100 Global Universities</span> under 50 years (THE 2014) – only Indian institution [citation:2]</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4f46e5]">•</span>
                    <span><span className="text-[#f3f4f6]">Employer Reputation Score:</span> 93.7 (QS Asia 2026) [citation:2]</span>
                  </li>
                </ul>
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
                Academic Structure [citation:7]
              </h2>
              <div className="grid md:grid-cols-4 gap-6 mb-6">
                {[
                  { label: "Departments", value: "13+", icon: "🏛️" },
                  { label: "Academic Centres", value: "9", icon: "🎯" },
                  { label: "Schools", value: "6", icon: "📚" },
                  { label: "Faculty", value: "539+", icon: "👨‍🏫" }
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
                B.Tech Programs [citation:2][citation:7]
              </h2>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  "Biosciences and Bioengineering",
                  "Chemical Engineering",
                  "Civil Engineering",
                  "Computer Science and Engineering",
                  "Data Science and Artificial Intelligence",
                  "Electronics and Electrical Engineering",
                  "Electronics and Communication Engineering",
                  "Mechanical Engineering",
                  "Engineering Physics"
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

            {/* Departments */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏢</span>
                Academic Departments [citation:7]
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "Biosciences and Bioengineering",
                  "Data Science and Artificial Intelligence",
                  "Chemical Engineering",
                  "Chemistry",
                  "Civil Engineering",
                  "Computer Science and Engineering",
                  "Design",
                  "Electronics & Electrical Engineering",
                  "Humanities and Social Sciences",
                  "Mathematics",
                  "Mechanical Engineering",
                  "Physics"
                ].map((dept, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300 text-[#d1d5db] text-sm"
                  >
                    {dept}
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Schools */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏫</span>
                Academic Schools [citation:7]
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "School of Agro and Rural Technology",
                  "School of Business",
                  "Mehta Family School of Data Science and Artificial Intelligence",
                  "School of Energy Sciences and Engineering",
                  "School of Health Science & Technology",
                  "School of Humanities & Social Sciences"
                ].map((school, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300 text-[#d1d5db] text-sm"
                  >
                    {school}
                  </div>
                ))}
              </div>
            </div>

            {/* Research Centres */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🔬</span>
                Academic Centres [citation:7]
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Centre for Disaster Management and Research",
                  "Centre for Drone Technology",
                  "Centre for the Environment",
                  "Centre for Indian Knowledge Systems",
                  "Centre for Intelligent Cyber-Physical Systems",
                  "Centre for Linguistic Science and Technology",
                  "Centre for Nanotechnology",
                  "Centre for Rural Technology",
                  "Centre for Sustainable Polymers",
                  "Centre for Sustainable Water Research"
                ].map((centre, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300 text-[#d1d5db] text-sm"
                  >
                    {centre}
                  </div>
                ))}
              </div>
            </div>

            {/* Other Programs */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📚</span>
                Other Programs Offered [citation:2]
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">B.Des</h3>
                  <p className="text-sm text-[#9ca3af]">4-year Bachelor of Design</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">M.Tech</h3>
                  <p className="text-sm text-[#9ca3af]">2-year program, multiple specializations</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">M.Des</h3>
                  <p className="text-sm text-[#9ca3af]">2-year Master of Design</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">M.Sc</h3>
                  <p className="text-sm text-[#9ca3af]">2-year program in various sciences</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">MBA</h3>
                  <p className="text-sm text-[#9ca3af]">2-year full-time program</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">MA</h3>
                  <p className="text-sm text-[#9ca3af]">Master of Arts programs</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">MS(R)</h3>
                  <p className="text-sm text-[#9ca3af]">Master of Science (Research)</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">PhD</h3>
                  <p className="text-sm text-[#9ca3af]">Doctoral programs in all disciplines</p>
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
                Admission Process 2025 [citation:2]
              </h2>
              
              <div className="space-y-6">
                {/* B.Tech / B.Des Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">B.Tech / B.Des Admissions</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">1</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">Minimum 75% in 10+2 with PCM</div>
                        <div className="text-sm text-[#9ca3af]">Eligibility criteria for undergraduate programs [citation:4]</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">2</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">JEE Advanced / UCEED</div>
                        <div className="text-sm text-[#9ca3af]">B.Tech through JEE Advanced; B.Des through UCEED [citation:2]</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">3</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">JoSAA Counselling</div>
                        <div className="text-sm text-[#9ca3af]">Participate in JoSAA for seat allotment [citation:2]</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* M.Tech Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">M.Tech Admissions</h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db] mb-2">Valid GATE score with minimum 60% marks in bachelor's degree, followed by COAP counselling and Personal Interview [citation:2].</p>
                  </div>
                </div>

                {/* MBA Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">MBA Admissions [citation:9]</h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db] mb-2">Valid CAT score with minimum 50% aggregate marks in bachelor's degree (any discipline). Selection based on CAT score, group discussion, and personal interview. Work experience not mandatory but advantageous.</p>
                  </div>
                </div>

                {/* M.Sc Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">M.Sc Admissions</h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db]">Valid IIT JAM score followed by JAM counselling [citation:2].</p>
                  </div>
                </div>

                {/* PhD Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">PhD Admissions [citation:2]</h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db] mb-2">Master's degree with minimum 60% marks OR four-year bachelor's degree with minimum 70% marks. Selection through entrance exam and personal interview.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fees Structure */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">💰</span>
                Fee Structure 2025 (Approx.) [citation:2][citation:4][citation:9]
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">B.Tech / B.Des</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">1st Year Fees</span>
                      <span className="text-[#f3f4f6] font-semibold">₹2,77,150</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Year 2-4 Fees</span>
                      <span className="text-[#f3f4f6] font-semibold">₹2,52,600/year</span>
                    </div>
                    <div className="border-t border-[#374151] pt-2 mt-2 flex justify-between">
                      <span className="text-[#f3f4f6] font-semibold">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold">~₹10.35 Lakhs</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">MBA</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Year 1 Fees</span>
                      <span className="text-[#f3f4f6] font-semibold">₹5,07,350</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Year 2 Fees</span>
                      <span className="text-[#f3f4f6] font-semibold">₹4,62,200</span>
                    </div>
                    <div className="border-t border-[#374151] pt-2 mt-2 flex justify-between">
                      <span className="text-[#f3f4f6] font-semibold">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold">₹9,69,550</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">M.Tech / M.Des / MS(R)</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold">₹57,150</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">M.Sc / MA</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold">₹55,150</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">PhD / Dual PhD</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold">₹56,150</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#9ca3af] mt-4">* SC/ST/PwD categories have reduced fees. Hostel and mess charges are additional.</p>
            </div>

            {/* JEE Advanced Cutoff 2023 */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📊</span>
                JEE Advanced Cutoff 2023 (Closing Ranks) [citation:2]
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { program: "Computer Science and Engineering", rank: "654" },
                  { program: "Data Science and AI", rank: "N/A" },
                  { program: "Electronics and Communication Engineering", rank: "1698" },
                  { program: "Mathematics and Computing", rank: "N/A" },
                  { program: "Electrical Engineering", rank: "N/A" },
                  { program: "Mechanical Engineering", rank: "4754" },
                  { program: "Chemical Engineering", rank: "5959" },
                  { program: "Civil Engineering", rank: "8453" }
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
                Placement Highlights 2024-25 [citation:3]
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {[
                  { label: "BTech Students Placed", value: "637/842", icon: "👥" },
                  { label: "Overall BTech Placement %", value: "75.65%", icon: "📊" },
                  { label: "Pre-Placement Offers", value: "193", icon: "📋" },
                  { label: "PPOs to Female Students", value: "26%", icon: "👩‍🎓" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center hover:border-[#4f46e5]/50 transition-all duration-300">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-[#4f46e5] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Top Performing Disciplines */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Top Performing Disciplines 2024-25 [citation:3]</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#1f2937]/50">
                        <th className="p-3 text-left text-sm font-semibold text-[#f3f4f6]">Discipline</th>
                        <th className="p-3 text-left text-sm font-semibold text-[#f3f4f6]">Registered</th>
                        <th className="p-3 text-left text-sm font-semibold text-[#f3f4f6]">Placed</th>
                        <th className="p-3 text-left text-sm font-semibold text-[#f3f4f6]">Placement %</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { discipline: "Data Science and AI", registered: 22, placed: 20, percentage: "90.91%" },
                        { discipline: "Mathematics and Computing", registered: 76, placed: 69, percentage: "90.79%" },
                        { discipline: "Computer Science and Engineering", registered: 118, placed: 107, percentage: "90.68%" },
                        { discipline: "Electronics and Communication Engg.", registered: 112, placed: 96, percentage: "85.71%" },
                        { discipline: "Electronics and Electrical Engg.", registered: 63, placed: 49, percentage: "77.78%" }
                      ].map((item, index) => (
                        <tr key={index} className="border-b border-[#374151]">
                          <td className="p-3 text-sm text-[#d1d5db]">{item.discipline}</td>
                          <td className="p-3 text-sm text-[#d1d5db]">{item.registered}</td>
                          <td className="p-3 text-sm text-[#d1d5db]">{item.placed}</td>
                          <td className="p-3 text-sm text-[#4f46e5] font-semibold">{item.percentage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Salary Trends */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Salary Trends 2024-25 [citation:3]</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#1f2937]/50">
                        <th className="p-3 text-left text-sm font-semibold text-[#f3f4f6]">Discipline</th>
                        <th className="p-3 text-left text-sm font-semibold text-[#f3f4f6]">Median (LPA)</th>
                        <th className="p-3 text-left text-sm font-semibold text-[#f3f4f6]">Average (LPA)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { discipline: "Computer Science and Engineering", median: "34.10", average: "36.94" },
                        { discipline: "Data Science and AI", median: "25.00", average: "33.98" },
                        { discipline: "Mathematics and Computing", median: "25.00", average: "33.14" },
                        { discipline: "Electronics and Communication Engg.", median: "23.43", average: "24.82" },
                        { discipline: "Electronics and Electrical Engg.", median: "21.20", average: "24.38" },
                        { discipline: "Civil Engineering", median: "17.00", average: "20.57" },
                        { discipline: "Mechanical Engineering", median: "17.00", average: "18.19" },
                        { discipline: "Chemical Engineering", median: "15.00", average: "17.14" },
                        { discipline: "Overall BTech", median: "20.44", average: "25.21" }
                      ].map((item, index) => (
                        <tr key={index} className="border-b border-[#374151]">
                          <td className="p-3 text-sm text-[#d1d5db]">{item.discipline}</td>
                          <td className="p-3 text-sm text-[#4f46e5] font-semibold">₹{item.median} L</td>
                          <td className="p-3 text-sm text-[#4f46e5] font-semibold">₹{item.average} L</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Top Recruiters */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Top Recruiters [citation:4][citation:8][citation:9]</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    "Google", "Microsoft", "Amazon", "Adobe", "Cisco", "Qualcomm",
                    "Goldman Sachs", "Deloitte", "McKinsey", "Texas Instruments", "Intel",
                    "Airbus", "Boeing", "Samsung", "Flipkart", "D.E. Shaw",
                    "American Express", "Cognizant", "Infosys", "TCS", "Accenture",
                    "DRDO", "BEL", "BPCL", "HPCL", "Cummins", "Dell", "IBM",
                    "Oracle", "NVIDIA", "Citrix", "Directi", "EXL Services"
                  ].map((company, index) => (
                    <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300 text-center text-sm text-[#d1d5db]">
                      {company}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sector-wise Recruitment */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Recruitment Sectors [citation:3]</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { sector: "IT & Software", roles: "SDE, Member Technical Staff, Design, R&D, Data Science" },
                    { sector: "Finance", roles: "Quant, Algorithmic Trader" },
                    { sector: "Core Engineering", roles: "Graduate Engineer Trainee, Post Graduate Trainee" },
                    { sector: "Non-Technical", roles: "Business Analyst, Product Manager, Marketing Manager" },
                    { sector: "Education", roles: "Teaching positions" },
                    { sector: "Design", roles: "Product Designer, Graphic Designer, UX/UI" }
                  ].map((item, index) => (
                    <div key={index} className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="font-semibold text-[#f3f4f6] mb-1">{item.sector}</div>
                      <div className="text-sm text-[#9ca3af]">{item.roles}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#9ca3af] mt-4">* In 2023-24, 102 students secured packages of ₹50 LPA or above, with the highest salary reaching ₹2.05 Crore [citation:3].</p>
              </div>
            </div>

            {/* Historical Packages */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏆</span>
                Historical Placement Packages [citation:8]
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                  <div className="text-sm text-[#9ca3af] mb-1">Highest Package 2025</div>
                  <div className="text-2xl font-bold text-[#4f46e5]">₹2.5 Cr</div>
                </div>
                <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                  <div className="text-sm text-[#9ca3af] mb-1">Average Package 2025</div>
                  <div className="text-2xl font-bold text-[#4f46e5]">~₹30 LPA</div>
                </div>
                <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                  <div className="text-sm text-[#9ca3af] mb-1">Highest Package 2023</div>
                  <div className="text-2xl font-bold text-[#4f46e5]">₹2.4 Cr (CSE)</div>
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
                The IIT Guwahati Campus [citation:7]
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-[#4f46e5] mb-2">700+ Acres</div>
                  <p className="text-[#9ca3af]">Located on the northern bank of the Brahmaputra River in Amingaon, North Guwahati. Features scenic views with the river on one side and hills on the other.</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#4f46e5] mb-2">Fully Residential</div>
                  <p className="text-[#9ca3af]">All students live in hostels named after rivers and tributaries of Northeast India. Each hostel has mess, canteen, library, TV room, sports room, and 24-hour internet.</p>
                </div>
              </div>
            </div>

            {/* Campus Facilities */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏛️</span>
                Campus Facilities [citation:7]
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: "Param Ishan Supercomputer", desc: "Fastest supercomputer in northeastern, eastern, and southern India", icon: "💻" },
                  { name: "Central Library", desc: "Vast collection of books, journals, and e-resources", icon: "📚" },
                  { name: "Hostels", desc: "Manas, Dihing, Kapili, Siang, Kameng, Barak, Subansiri, Umiam, Brahmaputra, Dhansiri, Lohit, Disang, Gaurang", icon: "🏠" },
                  { name: "Sports Facilities", desc: "Indoor and outdoor sports facilities across hostels", icon: "⚽" },
                  { name: "Health Center", desc: "Medical facility for students and staff", icon: "🏥" },
                  { name: "Central Instruments Facility", desc: "Advanced research instrumentation", icon: "🔬" },
                  { name: "Wi-Fi Campus", desc: "24-hour internet connectivity in all hostels", icon: "📶" },
                  { name: "Cafeterias", desc: "Multiple dining options including hostel messes and canteens", icon: "☕" },
                  { name: "Student Activity Center", desc: "Hub for student clubs and organizations", icon: "🎭" }
                ].map((facility, index) => (
                  <div key={index} className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30 hover:border-[#4f46e5]/50 transition-all duration-300">
                    <div className="text-4xl mb-3">{facility.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-[#f3f4f6]">{facility.name}</h3>
                    <p className="text-sm text-[#9ca3af]">{facility.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Clubs */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🎨</span>
                Student Clubs & Activities [citation:7]
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
                Major Annual Events [citation:7]
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Alcheringa",
                    type: "Cultural Festival",
                    desc: "Annual cultural extravaganza, 3 days and 4 nights, 1,00,000+ footfall in 2018",
                    icon: "🎭"
                  },
                  {
                    name: "Techniche",
                    type: "Techno-Management Festival",
                    desc: "Annual techno-management festival held in September, hosts Technothlon for school students",
                    icon: "🔧"
                  },
                  {
                    name: "Udgam",
                    type: "Entrepreneurship Summit",
                    desc: "Annual entrepreneurship summit",
                    icon: "💡"
                  },
                  {
                    name: "Research Conclave",
                    type: "Research Festival",
                    desc: "Platform for research showcase and collaboration",
                    icon: "🔬"
                  },
                  {
                    name: "Inter IIT Sports Meet",
                    type: "Sports Competition",
                    desc: "Annual sports competition among all IITs",
                    icon: "🏆"
                  },
                  {
                    name: "General Championship",
                    type: "Inter-Hostel Competition",
                    desc: "Kriti (Tech), Manthan (Cultural), Spardha (Sports)",
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

            {/* Hostel Details */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏘️</span>
                Hostels of IIT Guwahati [citation:7]
              </h2>
              <p className="text-[#d1d5db] mb-4">Hostels are named after rivers and tributaries of Northeast India:</p>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  "Manas", "Dihing", "Kapili", "Siang", "Kameng", "Barak",
                  "Subansiri (Girls)", "Umiam", "Brahmaputra (Largest)", "Dhansiri (Girls)",
                  "Lohit", "Disang (Co-ed)", "Gaurang (Boys)", "Dibang", "Married Scholars Hostel"
                ].map((hostel, index) => (
                  <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-sm text-[#d1d5db]">
                    {hostel}
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
                IIT Guwahati is a leader in cutting-edge research across multiple domains, with a strong focus on sustainable technologies, defence research, and international collaboration. The institute has secured top global rankings in research citations and clean energy research [citation:2][citation:5][citation:10].
              </p>
              
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { label: "QS Research Citations", value: "#32", icon: "📄" },
                  { label: "THE Impact (Clean Energy)", value: "#6", icon: "⚡" },
                  { label: "Research Centres", value: "10+", icon: "🏢" },
                  { label: "PhD Scholars", value: "2,171+", icon: "👨‍🔬" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-[#4f46e5] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Manekshaw Centre for Defence Research */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🛡️</span>
                Manekshaw Centre for Defence Research [citation:10]
              </h2>
              <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                <p className="text-[#d1d5db] mb-4">
                  Established in March 2025 under the Ministry of Education, IIT Guwahati leads the "Manekshaw Centre" for Defence and National Security Research, uniting IITs, IISc, IIITs, and NITs on a collaborative platform.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-[#f3f4f6]">Leadership</h3>
                    <ul className="space-y-2 text-sm text-[#9ca3af]">
                      <li>• Prof. Devendra Jalihal, Director IITG – Chief Patron</li>
                      <li>• Prof. Manindra Agrawal, Director IITK – Dy. Chief Patron</li>
                      <li>• Lt Gen Dr. Subrata Saha (Retd.) – Executive Chairman</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-[#f3f4f6]">Objectives</h3>
                    <ul className="space-y-2 text-sm text-[#9ca3af]">
                      <li>• Bridge gap between Defence Forces and Academia</li>
                      <li>• Create new-age security industrial complex</li>
                      <li>• Indian solutions for Indian Armed Forces</li>
                      <li>• Collaborate with startups and industry</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-[#4f46e5] mt-4">Participating IITs: Guwahati, Madras, Kanpur, Jodhpur, Dharwad, Delhi, Bombay, Kharagpur, BHU, ISM-Dhanbad + IIIT Delhi</p>
              </div>
            </div>

            {/* Indo-Danish Research Centre */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🇩🇰</span>
                Indo-Danish Centre of Excellence [citation:5]
              </h2>
              <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                <p className="text-[#d1d5db] mb-4">
                  In June 2025, IIT Guwahati signed an MoU with the University of Southern Denmark (SDU) to establish an Indo-Danish Centre of Excellence for research, innovation, and academic exchange.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-[#f3f4f6]">Key Highlights</h3>
                    <ul className="space-y-2 text-sm text-[#9ca3af]">
                      <li>• Joint Master's and PhD programmes with co-supervision</li>
                      <li>• Mutual credit recognition</li>
                      <li>• Student and faculty exchange programmes</li>
                      <li>• Industry collaboration with Danfoss</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-[#f3f4f6]">Focus Areas</h3>
                    <ul className="space-y-2 text-sm text-[#9ca3af]">
                      <li>• Sustainable technologies</li>
                      <li>• Energy efficiency</li>
                      <li>• Climate technologies</li>
                    </ul>
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
                    area: "Sustainable Energy",
                    desc: "Global #6 in THE Impact Rankings for Affordable and Clean Energy (SDG 7) [citation:2]",
                    icon: "⚡"
                  },
                  {
                    area: "Defence & Security",
                    desc: "Manekshaw Centre leading national defence research collaboration [citation:10]",
                    icon: "🛡️"
                  },
                  {
                    area: "Nanotechnology",
                    desc: "Advanced research through Centre for Nanotechnology [citation:7]",
                    icon: "🔬"
                  },
                  {
                    area: "Disaster Management",
                    desc: "Centre for Disaster Management and Research [citation:7]",
                    icon: "🌊"
                  },
                  {
                    area: "Drone Technology",
                    desc: "Centre for Drone Technology for advanced aerial systems [citation:7]",
                    icon: "🚁"
                  },
                  {
                    area: "Cyber-Physical Systems",
                    desc: "Centre for Intelligent Cyber-Physical Systems [citation:7]",
                    icon: "🤖"
                  },
                  {
                    area: "Sustainable Polymers",
                    desc: "Centre of Excellence for Sustainable Polymers [citation:7]",
                    icon: "🧪"
                  },
                  {
                    area: "Rural Technology",
                    desc: "Centre for Rural Technology serving local communities [citation:7]",
                    icon: "🌱"
                  },
                  {
                    area: "Linguistic Science",
                    desc: "Centre for Linguistic Science and Technology for Northeast languages [citation:7]",
                    icon: "🗣️"
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

            {/* Supercomputing Facility */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🖥️</span>
                Param Ishan Supercomputer [citation:7]
              </h2>
              <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                <p className="text-[#d1d5db]">
                  IIT Guwahati hosts Param-Ishan, the fastest and most powerful supercomputer in northeastern, eastern, and southern regions of India, enabling cutting-edge computational research across disciplines.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="border-t border-[#1f2937] bg-[#0a0a0a]/50 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Begin Your Journey at India's Youngest Top IIT</h2>
            <p className="text-[#9ca3af] mb-8 max-w-2xl mx-auto">
              Join the fastest-growing IIT with a scenic campus on the Brahmaputra, world-class research, and placement records that rival the oldest institutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://www.iitg.ac.in/acad/admission/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#4f46e5] border border-[#4f46e5] rounded-xl text-white font-medium hover:bg-[#6366f1] transition-all duration-300"
              >
                Admission Information
              </a>
              <a 
                href="https://www.iitg.ac.in/" 
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