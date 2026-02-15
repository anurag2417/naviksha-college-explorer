"use client";

import Link from "next/link";
import { useState } from "react";

export default function IITKanpurPage() {
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
            <span className="text-[#f3f4f6] font-medium">IIT Kanpur</span>
          </nav>

          {/* College Header */}
          <div className="flex items-start gap-8 animate-fade-in-delay">
            {/* Logo */}
            <div className="hidden md:block flex-shrink-0">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#1f2937] to-[#111827] border border-[#374151] flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-bold bg-gradient-to-br from-[#f3f4f6] to-[#9ca3af] bg-clip-text text-transparent">
                  IITK
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
                  🏆 NIRF #5 (Overall) [citation:1]
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  🌟 Institute of National Importance
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#f3f4f6] via-[#e5e7eb] to-[#9ca3af] bg-clip-text text-transparent mb-4">
                Indian Institute of Technology Kanpur
              </h1>

              <p className="text-[#9ca3af] text-lg leading-relaxed max-w-3xl mb-6">
                Established in 1959, IIT Kanpur is a premier institute recognized for its rich academic tradition, 
                cutting-edge research, and sprawling 1,050-acre campus. Known for pioneering computer science education 
                in India, it is a leader in innovation and interdisciplinary studies [citation:3].
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.iitk.ac.in/" 
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
              <div className="text-2xl font-bold text-[#4f46e5]">NIRF #5</div>
              <div className="text-xs text-[#9ca3af] mt-1">Overall Rank 2025 [citation:1]</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">1959</div>
              <div className="text-xs text-[#9ca3af] mt-1">Established [citation:3]</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">1,050+</div>
              <div className="text-xs text-[#9ca3af] mt-1">Acres Campus [citation:3]</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">9,500+</div>
              <div className="text-xs text-[#9ca3af] mt-1">Students [citation:3]</div>
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
                { label: "Location", value: "Kanpur, Uttar Pradesh", icon: "📍" },
                { label: "Established", value: "1959", icon: "📅" },
                { label: "Institute Type", value: "Government (IIT)", icon: "🏛️" },
                { label: "NIRF Rank 2025", value: "#5 (Overall) [citation:1]", icon: "🏆" },
                { label: "Accreditation", value: "Institute of National Importance", icon: "✓" },
                { label: "Total Students", value: "9,500+ [citation:3]", icon: "👥" },
                { label: "Faculty", value: "570+ Professors [citation:3]", icon: "👨‍🏫" },
                { label: "Campus Area", value: "1,050 Acres [citation:3]", icon: "🌳" }
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
                About IIT Kanpur
              </h2>
              <div className="space-y-4 text-[#d1d5db] leading-relaxed">
                <p>
                  The Indian Institute of Technology Kanpur (IIT Kanpur) is recognized as an Institute of National Importance by the Government of India. Established in 1959, it was the first IIT to offer Computer Science education and has since been a pioneer in research and development across science and engineering disciplines [citation:3].
                </p>
                <p>
                  Located on the Grand Trunk Road, 15 km west of Kanpur city, the campus is one of the largest among IITs, spanning 1,050 acres of lush, green landscape. The institute comprises 20 departments, 27 centres, three interdisciplinary programs, and three specialized schools across engineering, science, design, humanities, and management [citation:3][citation:4].
                </p>
                <p>
                  IIT Kanpur is renowned for its flexible academic programs, strong emphasis on research, and vibrant campus life. It has made significant contributions to India's academic and technological landscape, with alumni who are leaders in academia, industry, and entrepreneurship worldwide.
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
                  To be a globally acclaimed institute of higher learning that builds on a culture of excellence in research and teaching, and fosters leadership, innovation, and entrepreneurship.
                </p>
              </div>
              <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  Mission
                </h3>
                <p className="text-[#d1d5db] leading-relaxed">
                  To create and sustain an environment of scholarship that leads to the creation of new knowledge, to offer world-class education, and to nurture future leaders who can address the complex challenges of society.
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
                  { label: "Departments", value: "20", icon: "🏛️" },
                  { label: "Centres", value: "27", icon: "🎯" },
                  { label: "Schools", value: "3", icon: "📚" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-[#4f46e5] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Programs Offered */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📋</span>
                Programs Offered
              </h2>
              
              {/* B.Tech Programs */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">B.Tech (4 Years) [citation:7]</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Aerospace Engineering",
                    "Biological Sciences and Bioengineering",
                    "Chemical Engineering",
                    "Civil Engineering",
                    "Computer Science and Engineering",
                    "Electrical Engineering",
                    "Materials Science and Engineering",
                    "Mechanical Engineering",
                    "Physics (Engineering Physics)"
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

              {/* Postgraduate Programs */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#4f46e5]">M.Tech</h3>
                  <p className="text-sm text-[#9ca3af] mb-2">Specializations in all engineering disciplines including Structural Engg, Data Science, etc. [citation:7]</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#4f46e5]">M.Sc</h3>
                  <p className="text-sm text-[#9ca3af] mb-2">Chemistry, Physics, Mathematics, Statistics, Economics</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#4f46e5]">MBA</h3>
                  <p className="text-sm text-[#9ca3af] mb-2">2-year full-time program [citation:7]</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#4f46e5]">PhD</h3>
                  <p className="text-sm text-[#9ca3af] mb-2">Research programs in all departments [citation:7]</p>
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
                  "Biological Sciences & Bioengineering",
                  "Chemical Engineering",
                  "Chemistry",
                  "Civil Engineering",
                  "Computer Science & Engineering",
                  "Design",
                  "Economic Sciences",
                  "Electrical Engineering",
                  "Humanities & Social Sciences",
                  "Management Studies",
                  "Materials Science & Engineering",
                  "Mathematics & Statistics",
                  "Mechanical Engineering",
                  "Physics",
                  "Sustainable Energy Engineering"
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
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">B.Tech Admissions (JEE Advanced) [citation:7]</h3>
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
                        <div className="text-sm text-[#9ca3af]">Secure a competitive rank in JEE Advanced.</div>
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
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">M.Tech Admissions (GATE) [citation:7]</h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db]">Valid GATE score followed by COAP counselling. Minimum 55% marks or 5.5 CPI in qualifying degree.</p>
                  </div>
                </div>

                {/* MBA Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">MBA Admissions (CAT) [citation:7]</h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db]">Valid CAT score (85+ percentile typically), followed by Group Discussion and Personal Interview. Minimum 65% marks in bachelor's degree.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fees Structure */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">💰</span>
                Fee Structure 2025 (Approx.) [citation:7]
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">B.Tech Programs</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Tuition Fee (per year)</span>
                      <span className="text-[#f3f4f6] font-semibold">₹2,00,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Hostel (double sharing)</span>
                      <span className="text-[#f3f4f6] font-semibold">₹40,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Mess Charges (annual)</span>
                      <span className="text-[#f3f4f6] font-semibold">₹30,000</span>
                    </div>
                    <div className="border-t border-[#374151] pt-2 mt-2 flex justify-between">
                      <span className="text-[#f3f4f6] font-semibold">Total (1st year)</span>
                      <span className="text-[#4f46e5] font-bold text-lg">₹2,78,000</span>
                    </div>
                    <div className="border-t border-[#374151] pt-2 mt-2 flex justify-between">
                      <span className="text-[#f3f4f6] font-semibold">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold text-lg">₹8.38 Lakhs</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">M.Tech Programs</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Tuition Fee (per year)</span>
                      <span className="text-[#f3f4f6] font-semibold">₹1,50,000</span>
                    </div>
                    <div className="border-t border-[#374151] pt-2 mt-2 flex justify-between">
                      <span className="text-[#f3f4f6] font-semibold">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold text-lg">₹3.00 Lakhs</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">MBA</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Tuition Fee (per year)</span>
                      <span className="text-[#f3f4f6] font-semibold">₹3,00,000</span>
                    </div>
                    <div className="border-t border-[#374151] pt-2 mt-2 flex justify-between">
                      <span className="text-[#f3f4f6] font-semibold">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold text-lg">₹6.00 Lakhs</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">M.Sc Programs</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold text-lg">₹1.21 Lakhs</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#9ca3af] mt-4">* Additional one-time fees (application, exam) approx ₹2,000 - ₹5,000. Hostel options: Single (₹65,000), Triple (₹30,000). Scholarships and assistantships available.</p>
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
                Placement Highlights 2025-26 [citation:3][citation:8]
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {[
                  { label: "Total Offers (Phase I)", value: "1,202", icon: "🎯" },
                  { label: "Students Placed", value: "1,079+", icon: "👥" },
                  { label: "PPOs Received", value: "253", icon: "📋" },
                  { label: "International Offers", value: "15+", icon: "🌍" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center hover:border-[#4f46e5]/50 transition-all duration-300">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-[#4f46e5] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Day-1 Performance */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Day-1 Placement Record [citation:8]</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                    <div className="text-xl font-bold text-[#f3f4f6]">672</div>
                    <div className="text-xs text-[#9ca3af]">Job Offers (16% increase)</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                    <div className="text-xl font-bold text-[#f3f4f6]">627</div>
                    <div className="text-xs text-[#9ca3af]">Students Placed (20% increase)</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                    <div className="text-xl font-bold text-[#f3f4f6]">27%</div>
                    <div className="text-xs text-[#9ca3af]">PPO Growth</div>
                  </div>
                </div>
              </div>

              {/* Top Recruiters */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Top Recruiters [citation:3][citation:8]</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    "Accenture", "Airbus", "American Express", "BlackRock", "Boeing", 
                    "Databricks", "Deutsche Bank", "Goldman Sachs", "HSBC", "ICICI Bank", 
                    "InMobi", "Mastercard", "Meesho", "Microsoft", "Navi", "PwC", 
                    "Qualcomm", "Samsung", "SAP", "Square Point Capital", "BPCL", "BEL"
                  ].map((company, index) => (
                    <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300 text-center text-sm text-[#d1d5db]">
                      {company}
                    </div>
                  ))}
                </div>
              </div>

              {/* International Recruiters */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Global Opportunities [citation:3]</h3>
                <p className="text-[#9ca3af] mb-3">Students secured international offers from companies based in:</p>
                <div className="flex flex-wrap gap-3">
                  {["Europe", "Japan", "South Korea", "United States"].map((region, index) => (
                    <span key={index} className="px-3 py-1 rounded-full bg-[#1f2937]/50 border border-[#374151] text-sm text-[#d1d5db]">
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Career Development */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🚀</span>
                Students' Placement Office (SPO)
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "250+ Companies",
                    description: "Participated in Phase I placements with hybrid hiring modes [citation:3]",
                    icon: "🏢"
                  },
                  {
                    title: "Flexible Hiring",
                    description: "On-campus, virtual, and hybrid modes for maximum accessibility",
                    icon: "💻"
                  },
                  {
                    title: "PSU Participation",
                    description: "Active recruitment by Public Sector Undertakings [citation:3]",
                    icon: "⚙️"
                  }
                ].map((item, index) => (
                  <div key={index} className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30 hover:border-[#4f46e5]/50 transition-all duration-300">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-[#f3f4f6]">{item.title}</h3>
                    <p className="text-sm text-[#9ca3af]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Campus Life Tab */}
        {activeTab === "campus" && (
          <div className="space-y-8 animate-fade-in">
            {/* Campus Size and Location */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏞️</span>
                The IIT Kanpur Campus
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-[#4f46e5] mb-2">1,050 Acres</div>
                  <p className="text-[#9ca3af]">Sprawling campus located on the Grand Trunk Road, 15 km west of Kanpur city [citation:3][citation:4]</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#4f46e5] mb-2">108+ Buildings</div>
                  <p className="text-[#9ca3af]">State-of-the-art academic blocks, hostels, and recreational facilities [citation:9]</p>
                </div>
              </div>
            </div>

            {/* Campus Facilities */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏛️</span>
                Campus Facilities [citation:9]
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: "P.K. Kelkar Library", desc: "Central air-conditioned library with diverse books, journals, and reading rooms", icon: "📚" },
                  { name: "Sports Complex", desc: "Cricket, football, basketball, volleyball, squash, swimming pool, and gym", icon: "⚽" },
                  { name: "Hostels", desc: "Spacious rooms with mess, reading rooms, computer rooms, and visitor areas", icon: "🏠" },
                  { name: "Health Center", desc: "Full-fledged medical facility for students, faculty, and staff", icon: "🏥" },
                  { name: "Computer Centre", desc: "24x7 fully air-conditioned facility with high-performance computing", icon: "💻" },
                  { name: "Cafeterias", desc: "Multiple eateries including CCD, Domino's, and the famous 'Chocolate Room'", icon: "☕" },
                  { name: "Wi-Fi Campus", desc: "High-speed internet connectivity across classrooms, hostels, and library", icon: "📶" },
                  { name: "Auditoriums", desc: "Well-equipped halls for conferences, seminars, and cultural events", icon: "🎭" },
                  { name: "Shopping Complex", desc: "Convenience stores and essential services within campus", icon: "🛍️" }
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
                      "Programming Club (P Club)",
                      "Electronics Club",
                      "Aeromodelling Club",
                      "Astronomy Club",
                      "Finance and Economics Club"
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
                      "Dramatics Club (D Club)",
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
                    name: "Techkriti",
                    type: "Technical Festival",
                    desc: "Asia's largest technical and entrepreneurial festival",
                    icon: "🔧"
                  },
                  {
                    name: "Antaragni",
                    type: "Cultural Festival",
                    desc: "One of India's largest college cultural festivals",
                    icon: "🎭"
                  },
                  {
                    name: "Udghosh",
                    type: "Sports Festival",
                    desc: "Annual inter-college sports extravaganza",
                    icon: "🏆"
                  },
                  {
                    name: "E-Summit",
                    type: "Entrepreneurship Summit",
                    desc: "Platform for startups, investors, and innovators",
                    icon: "💡"
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
                IIT Kanpur is at the forefront of research with numerous centres, interdisciplinary programs, and collaborations. The institute is known for its contributions to cybersecurity, aerospace, sustainable energy, and MedTech [citation:5][citation:10].
              </p>
              
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { label: "Research Centres", value: "27+", icon: "🏢" },
                  { label: "Departments", value: "20", icon: "🔬" },
                  { label: "Interdisciplinary Programs", value: "3", icon: "🔄" },
                  { label: "Faculty", value: "570+", icon: "👨‍🔬" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-[#4f46e5] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Major Research Centers */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏛️</span>
                Key Research Centers [citation:5][citation:10]
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "C3iHub (Cybersecurity Technology Innovation Hub)",
                  "Gangwal School of Medical Sciences and Technology",
                  "Kotak School of Sustainability",
                  "National Centre for Combustion Research and Development",
                  "Advanced Centre for Materials Science",
                  "Centre for Environmental Science and Engineering",
                  "Design Programme",
                  "Programme for Advanced Research in Electronics",
                  "Centre for Laser and Photonics",
                  "Space Technology Cell"
                ].map((center, index) => (
                  <div key={index} className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300 text-sm text-[#d1d5db]">
                    {center}
                  </div>
                ))}
              </div>
            </div>

            {/* Focus Areas */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🎯</span>
                Key Research Focus Areas
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    area: "Cybersecurity",
                    desc: "Automotive security, network security, cryptography [citation:10]",
                    icon: "🔒"
                  },
                  {
                    area: "MedTech & Health",
                    desc: "Medical devices, digital health, biomedical engineering [citation:5]",
                    icon: "🏥"
                  },
                  {
                    area: "Sustainability",
                    desc: "Renewable energy, climate change, sustainable engineering [citation:5]",
                    icon: "🌱"
                  },
                  {
                    area: "Data Sciences & AI",
                    desc: "Machine learning, deep learning, big data analytics",
                    icon: "🤖"
                  },
                  {
                    area: "Aerospace",
                    desc: "Space technology, propulsion, aerodynamics",
                    icon: "🚀"
                  },
                  {
                    area: "Materials Science",
                    desc: "Nanomaterials, advanced manufacturing, metallurgy",
                    icon: "⚛️"
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

            {/* International Collaborations */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🤝</span>
                International Collaborations [citation:5]
              </h2>
              <p className="text-[#9ca3af] mb-6">
                IIT Kanpur has partnerships with leading global universities for research, student exchange, and joint programs.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  "University of Manitoba, Canada",
                  "University of Birmingham, UK",
                  "University of California, USA",
                  "Technical University of Munich, Germany",
                  "University of Tokyo, Japan",
                  "KAIST, South Korea",
                  "NUS, Singapore",
                  "University of Melbourne, Australia"
                ].map((collab, index) => (
                  <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-sm text-[#d1d5db] text-center">
                    {collab}
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                <p className="text-sm text-[#d1d5db]">
                  <span className="font-semibold text-[#4f46e5]">Recent MoU:</span> Signed with University of Manitoba, Canada for collaboration in global public health, digital technologies, data sciences, AI, and MedTech [citation:5].
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
            <h2 className="text-3xl font-bold mb-4">Ready to Join the Land of Opportunities?</h2>
            <p className="text-[#9ca3af] mb-8 max-w-2xl mx-auto">
              Begin your journey at IIT Kanpur, where academic rigor meets expansive campus life and global research impact.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://www.iitk.ac.in/doaa/admissions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#4f46e5] border border-[#4f46e5] rounded-xl text-white font-medium hover:bg-[#6366f1] transition-all duration-300"
              >
                Admission Information
              </a>
              <a 
                href="https://www.iitk.ac.in/" 
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