"use client";

import Link from "next/link";
import { useState } from "react";

export default function IITMadrasPage() {
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
            <span className="text-[#f3f4f6] font-medium">IIT Madras</span>
          </nav>

          {/* College Header */}
          <div className="flex items-start gap-8 animate-fade-in-delay">
            {/* Logo */}
            <div className="hidden md:block flex-shrink-0">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#1f2937] to-[#111827] border border-[#374151] flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-bold bg-gradient-to-br from-[#f3f4f6] to-[#9ca3af] bg-clip-text text-transparent">
                  IITM
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
                  🏆 NIRF #1 (Overall)
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  🌍 India's 1st Multinational Uni
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#f3f4f6] via-[#e5e7eb] to-[#9ca3af] bg-clip-text text-transparent mb-4">
                Indian Institute of Technology Madras
              </h1>

              <p className="text-[#9ca3af] text-lg leading-relaxed max-w-3xl mb-6">
                India's #1 ranked institution for six consecutive years. IIT Madras is a global leader in 
                engineering education, research, and innovation. Known for its strong startup ecosystem, 
                international campuses, and academic excellence, it is the first IIT to establish foreign campuses (Zanzibar & Tanzania) [citation:5][citation:9].
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.iitm.ac.in/" 
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
              <div className="text-xs text-[#9ca3af] mt-1">Overall & Engineering [citation:1][citation:6]</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">1959</div>
              <div className="text-xs text-[#9ca3af] mt-1">Established [citation:8]</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">₹1.31Cr+</div>
              <div className="text-xs text-[#9ca3af] mt-1">Highest Package [citation:2]</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">620 Acres</div>
              <div className="text-xs text-[#9ca3af] mt-1">Campus Size [citation:8]</div>
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
                { label: "Location", value: "Chennai, Tamil Nadu", icon: "📍" },
                { label: "Established", value: "1959", icon: "📅" },
                { label: "Institute Type", value: "Government (IIT)", icon: "🏛️" },
                { label: "NIRF Rank 2024", value: "#1 (Overall & Engg) [citation:1]", icon: "🏆" },
                { label: "Global Rank", value: "#180 (QS World) [citation:9]", icon: "🌍" },
                { label: "Total Students", value: "10,000+", icon: "👥" },
                { label: "Faculty", value: "650+ Professors", icon: "👨‍🏫" },
                { label: "Campus Area", value: "620 Acres", icon: "🌳" }
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
                About IIT Madras
              </h2>
              <div className="space-y-4 text-[#d1d5db] leading-relaxed">
                <p>
                  Indian Institute of Technology Madras (IIT Madras) is India's premier institute for engineering, technology, and research. Consistently ranked #1 in the NIRF rankings for the Overall and Engineering categories, IIT Madras is renowned for its academic rigor, vibrant campus life, and world-class faculty [citation:1][citation:6].
                </p>
                <p>
                  Located in the serene neighborhood of Guindy, Chennai, the 620-acre campus is known for its lush greenery, diverse wildlife, and state-of-the-art infrastructure. IIT Madras is a pioneer in internationalization, being the first IIT to establish foreign campuses (Zanzibar and Tanzania) with a vision to become the world's first multinational university [citation:5][citation:9].
                </p>
                <p>
                  The institute boasts a strong entrepreneurial culture, housing one of India's most successful startup ecosystems. It is also home to the prestigious IIT Madras Research Park, India's first university-based research park, fostering deep industry-academia collaboration.
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
                  To be a global leader in technology and science education, research, and innovation, and to be the first multinational university in the world, making quality Indian education accessible globally [citation:9].
                </p>
              </div>
              <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  Mission
                </h3>
                <p className="text-[#d1d5db] leading-relaxed">
                  To create and sustain an ecosystem of excellence that produces leaders, innovators, and entrepreneurs capable of solving the grand challenges of the nation and the world through cutting-edge research and deep-tech startups.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Academics Tab */}
        {activeTab === "academics" && (
          <div className="space-y-8 animate-fade-in">
            {/* Programs Offered */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🎓</span>
                Academic Programs
              </h2>
              
              {/* B.Tech Programs */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">B.Tech (4 Years)</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Aerospace Engineering",
                    "Chemical Engineering",
                    "Civil Engineering",
                    "Computer Science and Engineering",
                    "Electrical Engineering",
                    "Engineering Physics",
                    "Mechanical Engineering",
                    "Metallurgical and Materials Engineering",
                    "Naval Architecture and Ocean Engineering"
                  ].map((program, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#4f46e5]" />
                      <span className="text-[#d1d5db]">{program}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dual Degree Programs */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Dual Degree (B.Tech + M.Tech)</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Computer Science and Engineering",
                    "Electrical Engineering",
                    "Mechanical Engineering",
                    "Biological Engineering",
                    "Aerospace Engineering"
                  ].map((program, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#7c3aed]" />
                      <span className="text-[#d1d5db]">{program}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Programs */}
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#4f46e5]">M.Tech</h3>
                  <p className="text-sm text-[#9ca3af]">20+ specializations</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#4f46e5]">M.Sc</h3>
                  <p className="text-sm text-[#9ca3af]">Physics, Chemistry, Mathematics</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#4f46e5]">MBA</h3>
                  <p className="text-sm text-[#9ca3af]">2-year full time [citation:8]</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#4f46e5]">Ph.D</h3>
                  <p className="text-sm text-[#9ca3af]">All departments</p>
                </div>
              </div>
            </div>

            {/* Departments */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏢</span>
                Departments & Schools
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "Aerospace Engineering",
                  "Applied Mechanics",
                  "Biotechnology",
                  "Chemical Engineering",
                  "Chemistry",
                  "Civil Engineering",
                  "Computer Science & Engg.",
                  "Electrical Engineering",
                  "Engineering Design",
                  "Humanities & Social Sciences",
                  "Management Studies",
                  "Mathematics",
                  "Mechanical Engineering",
                  "Metallurgical & Materials Engg.",
                  "Ocean Engineering",
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
          </div>
        )}

        {/* Admissions Tab */}
        {activeTab === "admissions" && (
          <div className="space-y-8 animate-fade-in">
            {/* Admission Process */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📝</span>
                Admission Process
              </h2>
              
              <div className="space-y-6">
                {/* B.Tech Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">B.Tech Admissions (JEE Advanced)</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">1</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">Appear for JEE Main</div>
                        <div className="text-sm text-[#9ca3af]">Qualify JEE Main to become eligible for JEE Advanced.</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">2</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">Clear JEE Advanced</div>
                        <div className="text-sm text-[#9ca3af]">Secure a top rank in JEE Advanced.</div>
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
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">M.Tech Admissions (GATE)</h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db] mb-3">Admission through GATE score followed by COAP counselling. Minimum 60% in bachelor's degree [citation:3].</p>
                  </div>
                </div>

                {/* MBA Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">MBA Admissions (CAT)</h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db]">Valid CAT score, followed by Group Discussion and Personal Interview.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fees Structure - Verified from search results */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">💰</span>
                Fee Structure (Approx.) [citation:8]
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">B.Tech / Dual Degree</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Tuition Fee (per year)</span>
                      <span className="text-[#f3f4f6] font-semibold">₹2,00,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Hostel + Mess (year)</span>
                      <span className="text-[#f3f4f6] font-semibold">₹88,400</span>
                    </div>
                    <div className="border-t border-[#374151] pt-2 mt-2 flex justify-between">
                      <span className="text-[#f3f4f6] font-semibold">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold text-lg">₹8.5L - ₹10.5L</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">MBA</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Tuition Fee (total)</span>
                      <span className="text-[#f3f4f6] font-semibold">₹13.8 Lakhs</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Duration</span>
                      <span className="text-[#f3f4f6] font-semibold">2 Years</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">M.Tech</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Total Program Fee</span>
                      <span className="text-[#f3f4f6] font-semibold">₹1.1L - ₹1.5L</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">Ph.D</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Total Program Fee</span>
                      <span className="text-[#f3f4f6] font-semibold">₹1.2L - ₹1.9L</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#9ca3af] mt-4">* SC/ST/PwD exempted from tuition fees [citation:3].</p>
            </div>
          </div>
        )}

        {/* Placements Tab */}
        {activeTab === "placements" && (
          <div className="space-y-8 animate-fade-in">
            {/* Placement Highlights - 2024 Data */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">💼</span>
                Placement Highlights 2023-24 [citation:2][citation:7]
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {[
                  { label: "Highest Package (2023)", value: "₹1.31 Cr", icon: "🎯" },
                  { label: "Avg Package (BTech)", value: "₹22 L", icon: "📊" },
                  { label: "Median Package", value: "₹19.6 L", icon: "📈" },
                  { label: "International Offers", value: "44+", icon: "🌍" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center hover:border-[#4f46e5]/50 transition-all duration-300">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-[#4f46e5] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Key Stats */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <div className="text-xl font-bold text-[#f3f4f6]">1,091</div>
                  <div className="text-xs text-[#9ca3af]">Students Placed (2023-24)</div>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <div className="text-xl font-bold text-[#f3f4f6]">407</div>
                  <div className="text-xs text-[#9ca3af]">Pre-Placement Offers</div>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <div className="text-xl font-bold text-[#f3f4f6]">256</div>
                  <div className="text-xs text-[#9ca3af]">Companies Participated</div>
                </div>
              </div>

              {/* Sector-wise Placement */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Sector-wise Distribution [citation:7]</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { sector: "Core Engineering", percentage: "43%" },
                    { sector: "Software/IT", percentage: "20%" },
                    { sector: "Analytics/Finance/Consulting", percentage: "<10%" },
                    { sector: "Data Science", percentage: "<10%" }
                  ].map((item, index) => (
                    <div key={index} className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[#d1d5db]">{item.sector}</span>
                        <span className="text-[#4f46e5] font-semibold">{item.percentage}</span>
                      </div>
                      <div className="w-full bg-[#374151] rounded-full h-2">
                        <div className="bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] h-2 rounded-full" style={{ width: item.percentage }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Recruiters */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Top Recruiters [citation:2][citation:8]</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    "Microsoft", "Google", "Amazon", "Goldman Sachs", "Intel", "Qualcomm",
                    "McKinsey & Co", "BCG", "American Express", "Morgan Stanley", 
                    "SAP Labs", "Texas Instruments", "Deloitte", "P&G", "Accenture", 
                    "Bank of America", "Cogoport", "Linecraft AI"
                  ].map((company, index) => (
                    <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300 text-center text-sm text-[#d1d5db]">
                      {company}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* MBA Placement */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📊</span>
                MBA Placements 2024 [citation:2]
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                  <div className="text-2xl font-bold text-[#4f46e5]">₹29.65 L</div>
                  <div className="text-xs text-[#9ca3af]">Highest CTC</div>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                  <div className="text-2xl font-bold text-[#4f46e5]">₹16.93 L</div>
                  <div className="text-xs text-[#9ca3af]">Average CTC</div>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                  <div className="text-2xl font-bold text-[#4f46e5]">100%</div>
                  <div className="text-xs text-[#9ca3af]">Placement Percentage</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Campus Life Tab */}
        {activeTab === "campus" && (
          <div className="space-y-8 animate-fade-in">
            {/* Campus Facilities */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏛️</span>
                Campus Facilities
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: "Central Library", desc: "Extensive collection of books and e-resources", icon: "📚" },
                  { name: "Olympic Pool", desc: "Olympic-standard swimming pool", icon: "🏊" },
                  { name: "Sports Complex", desc: "Cricket, Hockey, Football fields with floodlights", icon: "⚽" },
                  { name: "Hostels", desc: "Well-furnished accommodation with mess", icon: "🏠" },
                  { name: "Hospital", desc: "24/7 medical facility", icon: "🏥" },
                  { name: "Research Park", desc: "India's first university research park", icon: "🏢" }
                ].map((facility, index) => (
                  <div key={index} className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30 hover:border-[#4f46e5]/50 transition-all duration-300">
                    <div className="text-4xl mb-3">{facility.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-[#f3f4f6]">{facility.name}</h3>
                    <p className="text-sm text-[#9ca3af]">{facility.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sports Excellence - Detailed from official source [citation:10] */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏆</span>
                Sports & Athletics
              </h2>
              <p className="text-[#d1d5db] mb-4">
                IIT Madras is a powerhouse in the Inter IIT Sports Meet, having won the General Championship 19 times in 51 meets, including 11 consecutive wins [citation:10].
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#4f46e5]">World-Class Facilities</h3>
                  <ul className="space-y-2 text-sm text-[#9ca3af]">
                    <li className="flex items-center gap-2">✓ Olympic-standard swimming pool</li>
                    <li className="flex items-center gap-2">✓ K.S Narayanan Centre for Cricketing Excellence</li>
                    <li className="flex items-center gap-2">✓ Four synthetic tennis courts</li>
                    <li className="flex items-center gap-2">✓ Wood-floored multipurpose indoor stadium</li>
                    <li className="flex items-center gap-2">✓ Two world-class squash courts</li>
                    <li className="flex items-center gap-2">✓ Skating rink & athletics stadium</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#4f46e5]">Sporting Clubs</h3>
                  <ul className="space-y-2 text-sm text-[#9ca3af]">
                    <li className="flex items-center gap-2">✓ Cricket, Football, Hockey</li>
                    <li className="flex items-center gap-2">✓ Badminton, Tennis, Squash</li>
                    <li className="flex items-center gap-2">✓ Aquatics, Athletics</li>
                    <li className="flex items-center gap-2">✓ Bridge, Table Tennis</li>
                    <li className="flex items-center gap-2">✓ Volleyball, Weightlifting</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Global Campuses */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🌍</span>
                International Presence
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="text-lg font-semibold text-[#f3f4f6] mb-2">IIT Madras Zanzibar</h3>
                  <p className="text-sm text-[#9ca3af]">First IIT campus abroad. Offers MTech in Data Science & AI. Hosted its first Degree Distribution Ceremony in 2025 [citation:5].</p>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="text-lg font-semibold text-[#f3f4f6] mb-2">IITM Global (Malaysia)</h3>
                  <p className="text-sm text-[#9ca3af]">Strategic partnerships for semiconductor design, research, and startup scaling [citation:9].</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Research Tab */}
        {activeTab === "research" && (
          <div className="space-y-8 animate-fade-in">
            {/* Research Infrastructure */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🔬</span>
                Research Ecosystem [citation:9]
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-6">
                {[
                  { label: "Academic Depts", value: "18", icon: "🏛️" },
                  { label: "Centres of Excellence", value: "15", icon: "🎯" },
                  { label: "Research Centres", value: "23", icon: "🔬" },
                  { label: "Advanced Labs", value: "100+", icon: "🧪" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-[#4f46e5] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Major Research Centers */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Key Research Centers</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "IIT Madras Research Park (IITMRP)",
                    "National Centre for Combustion R&D",
                    "Centre for Industrial Consultancy & Sponsored Research",
                    "Robert Bosch Centre for Data Science and AI",
                    "Bhupat and Jyoti Mehta School of Biosciences",
                    "National Centre for Flexible Electronics",
                    "Centre for Memory Studies",
                    "IITM Global Research Foundation"
                  ].map((center, index) => (
                    <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-sm text-[#d1d5db]">
                      {center}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* International Collaborations */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🤝</span>
                Global Collaborations
              </h2>
              <p className="text-[#9ca3af] mb-6">
                IIT Madras is the only IIT with operational foreign campuses and is actively expanding its global footprint through the IITM Global initiative [citation:4][citation:9].
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  "MIT, USA",
                  "Stanford University",
                  "UC Berkeley",
                  "NUS Singapore",
                  "TU Munich",
                  "KAIST, South Korea",
                  "University of Malaya",
                  "ASEM (Malaysia)"
                ].map((collab, index) => (
                  <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-sm text-[#d1d5db] text-center">
                    {collab}
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
            <h2 className="text-3xl font-bold mb-4">Ready to Join India's #1 Institute?</h2>
            <p className="text-[#9ca3af] mb-8 max-w-2xl mx-auto">
              Begin your journey at IIT Madras and be part of a legacy of excellence, innovation, and global impact.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://www.iitm.ac.in/admissions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#4f46e5] border border-[#4f46e5] rounded-xl text-white font-medium hover:bg-[#6366f1] transition-all duration-300"
              >
                Admission Information
              </a>
              <a 
                href="https://www.iitm.ac.in/" 
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