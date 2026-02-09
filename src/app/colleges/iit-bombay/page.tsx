"use client";

import Link from "next/link";
import { useState } from "react";

export default function IITBombayPage() {
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
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#050505] text-[#f3f4f6] selection:bg-[#dc2626] selection:text-white">
      {/* Hero Section with Background Pattern */}
      <div className="relative overflow-hidden border-b border-[#1f2937]">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#dc2626]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ef4444]/5 rounded-full blur-3xl" />
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
            <span className="text-[#f3f4f6] font-medium">IIT Bombay</span>
          </nav>

          {/* College Header */}
          <div className="flex items-start gap-8 animate-fade-in-delay">
            {/* Logo */}
            <div className="hidden md:block flex-shrink-0">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#1f2937] to-[#111827] border border-[#374151] flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-bold bg-gradient-to-br from-[#f3f4f6] to-[#ef4444] bg-clip-text text-transparent">
                  IIT-B
                </span>
              </div>
            </div>

            {/* Title & Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-green-500/10 border border-green-500/30 text-green-400">
                  ✓ Verified
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-red-500/10 border border-red-500/30 text-red-400">
                  🏆 #1 Ranked
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  🌟 Premium Institute
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#f3f4f6] via-[#e5e7eb] to-[#ef4444] bg-clip-text text-transparent mb-4">
                Indian Institute of Technology Bombay
              </h1>

              <p className="text-[#9ca3af] text-lg leading-relaxed max-w-3xl mb-6">
                Consistently ranked as India's premier engineering institution, IIT Bombay leads in academic excellence, 
                research innovation, and industry partnerships. Located in Mumbai, it's renowned for producing leaders 
                in technology, entrepreneurship, and research.
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.iitb.ac.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#dc2626] border border-[#dc2626] rounded-xl text-white font-medium hover:bg-[#ef4444] transition-all duration-300 flex items-center gap-2"
                >
                  <span>Visit Website</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <button className="px-6 py-3 bg-[#1f2937] border border-[#374151] rounded-xl text-[#f3f4f6] hover:bg-[#374151] hover:border-[#dc2626]/50 transition-all duration-300 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span>Share</span>
                </button>
                <button className="px-6 py-3 bg-[#1f2937] border border-[#374151] rounded-xl text-[#f3f4f6] hover:bg-[#374151] hover:border-[#dc2626]/50 transition-all duration-300 flex items-center gap-2">
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
              <div className="text-2xl font-bold text-[#dc2626]">NIRF #1</div>
              <div className="text-xs text-[#9ca3af] mt-1">Engineering Rank</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#dc2626]">1958</div>
              <div className="text-xs text-[#9ca3af] mt-1">Established</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#dc2626]">₹48.2L</div>
              <div className="text-xs text-[#9ca3af] mt-1">Avg Package</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#dc2626]">550 Acres</div>
              <div className="text-xs text-[#9ca3af] mt-1">Campus Size</div>
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
                    ? "border-[#dc2626] text-[#f3f4f6]"
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
                { label: "Location", value: "Powai, Mumbai", icon: "📍" },
                { label: "Established", value: "1958", icon: "📅" },
                { label: "Institute Type", value: "Government (IIT)", icon: "🏛️" },
                { label: "NIRF Rank 2024", value: "#1 (Engineering)", icon: "🏆" },
                { label: "Accreditation", value: "NAAC A++, NBA", icon: "✓" },
                { label: "Total Students", value: "~12,500+", icon: "👥" },
                { label: "Faculty", value: "650+ Professors", icon: "👨‍🏫" },
                { label: "Campus Area", value: "550 Acres", icon: "🌳" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-6 hover:border-[#dc2626]/50 hover:bg-[#1a1a1a] transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#dc2626]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                About IIT Bombay
              </h2>
              <div className="space-y-4 text-[#d1d5db] leading-relaxed">
                <p>
                  Indian Institute of Technology Bombay (IIT Bombay) is the top-ranked engineering institution in India and among the best in Asia. Founded in 1958 with assistance from UNESCO and the Soviet Union, it has grown to become a beacon of excellence in technical education and research.
                </p>
                <p>
                  Located in the Powai area of Mumbai, IIT Bombay's 550-acre campus is home to state-of-the-art facilities, vibrant student life, and groundbreaking research. The institute has produced numerous distinguished alumni who have made significant contributions across the globe in technology, business, academia, and public service.
                </p>
                <p>
                  Known for its rigorous academic programs, entrepreneurial ecosystem (especially through the Society for Innovation and Entrepreneurship - SINE), and strong industry connections, IIT Bombay consistently leads in placements, research output, and innovation.
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
                  To be a world-class institution leading in the creation, dissemination and translation of knowledge, and development of human capital for the advancement of society.
                </p>
              </div>
              <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  Mission
                </h3>
                <p className="text-[#d1d5db] leading-relaxed">
                  To create an ambience in which new ideas, research and scholarship flourish, and from which the leaders and innovators of tomorrow emerge, while serving as a valuable resource for industry and society.
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
                <h3 className="text-xl font-semibold mb-4 text-[#dc2626]">B.Tech (4 Years)</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Aerospace Engineering",
                    "Chemical Engineering",
                    "Civil Engineering",
                    "Computer Science and Engineering",
                    "Electrical Engineering",
                    "Engineering Physics",
                    "Mechanical Engineering",
                    "Metallurgical Engineering and Materials Science",
                    "Chemistry",
                    "Mathematics and Computing",
                    "Earth Sciences",
                    "Biosciences and Bioengineering",
                    "Energy Engineering"
                  ].map((program, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#dc2626]/50 transition-all duration-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#dc2626]" />
                      <span className="text-[#d1d5db]">{program}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dual Degree Programs */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#dc2626]">Dual Degree (B.Tech + M.Tech)</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Computer Science and Engineering",
                    "Electrical Engineering",
                    "Mechanical Engineering",
                    "Chemical Engineering",
                    "Aerospace Engineering"
                  ].map((program, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#dc2626]/50 transition-all duration-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#ef4444]" />
                      <span className="text-[#d1d5db]">{program}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Programs */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#dc2626]">M.Tech Programs</h3>
                  <p className="text-sm text-[#9ca3af]">45+ specializations with industry collaboration</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#dc2626]">M.Sc Programs</h3>
                  <p className="text-sm text-[#9ca3af]">Physics, Chemistry, Mathematics, Environmental Science & Earth Sciences</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#dc2626]">MBA Program</h3>
                  <p className="text-sm text-[#9ca3af]">Shailesh J. Mehta School of Management (SJMSOM)</p>
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
                  "Biosciences and Bioengineering",
                  "Chemical Engineering",
                  "Chemistry",
                  "Civil Engineering",
                  "Computer Science & Engineering",
                  "Earth Sciences",
                  "Electrical Engineering",
                  "Energy Science and Engineering",
                  "Humanities & Social Sciences",
                  "Industrial Design Centre",
                  "Mathematics",
                  "Mechanical Engineering",
                  "Metallurgical Engg. & Materials Science",
                  "Physics",
                  "Shailesh J. Mehta School of Management",
                  "Centre for Environmental Science and Engineering",
                  "Centre for Technology Alternatives for Rural Areas"
                ].map((dept, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#dc2626]/50 transition-all duration-300 text-[#d1d5db] text-sm"
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
                  <h3 className="text-xl font-semibold mb-4 text-[#dc2626]">B.Tech Admissions (JEE Advanced)</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#dc2626] flex items-center justify-center text-white font-bold text-sm">1</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">Qualify JEE Main</div>
                        <div className="text-sm text-[#9ca3af]">Secure required percentile in JEE Main to become eligible for JEE Advanced</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#dc2626] flex items-center justify-center text-white font-bold text-sm">2</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">Clear JEE Advanced</div>
                        <div className="text-sm text-[#9ca3af]">Achieve competitive rank in JEE Advanced. IIT Bombay typically requires ranks under 100 for popular branches</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#dc2626] flex items-center justify-center text-white font-bold text-sm">3</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">JoSAA Counselling</div>
                        <div className="text-sm text-[#9ca3af]">Participate in 6 rounds of counselling for seat allocation based on rank and preference</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#dc2626] flex items-center justify-center text-white font-bold text-sm">4</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">Reporting to Institute</div>
                        <div className="text-sm text-[#9ca3af]">Complete registration, document verification, and fee payment at IIT Bombay campus</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* M.Tech Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#dc2626]">M.Tech Admissions (GATE)</h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db] mb-3">Admission primarily through GATE score followed by written test and/or interview for shortlisted candidates.</p>
                    <ul className="space-y-2 text-sm text-[#9ca3af]">
                      <li className="flex items-center gap-2">
                        <span className="text-[#dc2626]">✓</span>
                        Minimum GATE score: 650+ (General category)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#dc2626]">✓</span>
                        Bachelor's degree with 60% aggregate
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#dc2626]">✓</span>
                        COAP portal for centralized counselling
                      </li>
                    </ul>
                  </div>
                </div>

                {/* MBA Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#dc2626]">MBA Admissions (SJMSOM)</h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db] mb-3">Admission through CAT score followed by Written Ability Test (WAT) and Personal Interview (PI).</p>
                    <ul className="space-y-2 text-sm text-[#9ca3af]">
                      <li className="flex items-center gap-2">
                        <span className="text-[#dc2626]">✓</span>
                        CAT percentile: 99+ typically required
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#dc2626]">✓</span>
                        Bachelor's degree with 60% aggregate
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#dc2626]">✓</span>
                        Work experience preferred but not mandatory
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Fees Structure */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">💰</span>
                Fee Structure (Approx.)
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">B.Tech / Dual Degree</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Tuition Fee (per semester)</span>
                      <span className="text-[#f3f4f6] font-semibold">₹1,30,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">One-time fees</span>
                      <span className="text-[#f3f4f6] font-semibold">₹8,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Hostel (per semester)</span>
                      <span className="text-[#f3f4f6] font-semibold">₹9,000 - ₹12,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Mess Charges (per month)</span>
                      <span className="text-[#f3f4f6] font-semibold">₹6,000</span>
                    </div>
                    <div className="border-t border-[#374151] pt-2 mt-2 flex justify-between">
                      <span className="text-[#f3f4f6] font-semibold">Total (1st year approx.)</span>
                      <span className="text-[#dc2626] font-bold text-lg">₹3,00,000</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">M.Tech</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Tuition Fee (per semester)</span>
                      <span className="text-[#f3f4f6] font-semibold">₹55,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">One-time fees</span>
                      <span className="text-[#f3f4f6] font-semibold">₹6,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Hostel (per semester)</span>
                      <span className="text-[#f3f4f6] font-semibold">₹9,000 - ₹12,000</span>
                    </div>
                    <div className="border-t border-[#374151] pt-2 mt-2 flex justify-between">
                      <span className="text-[#f3f4f6] font-semibold">Total (1st year approx.)</span>
                      <span className="text-[#dc2626] font-bold text-lg">₹1,40,000</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#9ca3af] mt-4">* Financial assistance available through scholarships. MBA program fees are separate (~₹10 lakhs total).</p>
            </div>

            {/* Important Dates */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📅</span>
                Important Dates (Tentative)
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { event: "JEE Advanced Registration", date: "April-May 2024" },
                  { event: "JEE Advanced Exam", date: "May 2024" },
                  { event: "Results Declaration", date: "June 2024" },
                  { event: "JoSAA Counselling Begins", date: "June 2024" },
                  { event: "GATE Exam", date: "February 2024" },
                  { event: "M.Tech Admissions", date: "March-May 2024" },
                  { event: "CAT Exam", date: "November 2024" },
                  { event: "MBA Admissions (WAT-PI)", date: "February-March 2025" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <span className="text-[#d1d5db]">{item.event}</span>
                    <span className="text-[#dc2626] font-semibold text-sm">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Placements Tab */}
        {activeTab === "placements" && (
          <div className="space-y-8 animate-fade-in">
            {/* Placement Highlights */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">💼</span>
                Placement Highlights 2023-24
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {[
                  { label: "Highest Package", value: "₹3.67 Cr", icon: "🎯" },
                  { label: "Average Package", value: "₹48.2 L", icon: "📊" },
                  { label: "Median Package", value: "₹35 L", icon: "📈" },
                  { label: "Placement Rate", value: "97%+", icon: "✓" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center hover:border-[#dc2626]/50 transition-all duration-300">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-[#dc2626] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Top Recruiters */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#dc2626]">Top Recruiters</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    "Google", "Microsoft", "Amazon", "Apple", "Meta", "Netflix",
                    "Goldman Sachs", "Morgan Stanley", "JP Morgan", "McKinsey",
                    "Boston Consulting", "Bain & Company", "Tower Research",
                    "Quantbox", "WorldQuant", "Jane Street", "Optiver",
                    "Texas Instruments", "Qualcomm", "NVIDIA", "AMD", "Intel",
                    "Samsung", "Uber", "Salesforce", "Oracle", "Adobe"
                  ].map((company, index) => (
                    <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#dc2626]/50 transition-all duration-300 text-center text-sm text-[#d1d5db]">
                      {company}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sector-wise Placement */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#dc2626]">Sector-wise Distribution</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { sector: "Software & IT", percentage: "42%" },
                    { sector: "Finance & Quant", percentage: "25%" },
                    { sector: "Consulting", percentage: "18%" },
                    { sector: "Core Engineering", percentage: "10%" },
                    { sector: "Research & Analytics", percentage: "5%" }
                  ].map((item, index) => (
                    <div key={index} className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[#d1d5db]">{item.sector}</span>
                        <span className="text-[#dc2626] font-semibold">{item.percentage}</span>
                      </div>
                      <div className="w-full bg-[#374151] rounded-full h-2">
                        <div className="bg-gradient-to-r from-[#dc2626] to-[#ef4444] h-2 rounded-full" style={{ width: item.percentage }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Career Development Cell */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🚀</span>
                Career Development & Support
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Placement Cell",
                    description: "One of India's most active placement cells with 300+ companies visiting annually",
                    icon: "💼"
                  },
                  {
                    title: "Internship Program",
                    description: "Summer internships at top global companies with average stipend of ₹2-3 lakhs",
                    icon: "🌍"
                  },
                  {
                    title: "Entrepreneurship (SINE)",
                    description: "Strong startup ecosystem with 100+ startups incubated and ₹500+ Cr funding raised",
                    icon: "💡"
                  }
                ].map((item, index) => (
                  <div key={index} className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30 hover:border-[#dc2626]/50 transition-all duration-300">
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
            {/* Campus Facilities */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏛️</span>
                Campus Facilities
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: "Central Library", desc: "5 lakh+ books, 2500+ journals, digital resources", icon: "📚" },
                  { name: "Sports Facilities", desc: "Olympic pool, gymkhana, multiple stadiums and courts", icon: "⚽" },
                  { name: "Hostels", desc: "17 hostels (including 2 for girls) with modern amenities", icon: "🏠" },
                  { name: "Medical Center", desc: "Fully equipped hospital with 24/7 emergency services", icon: "🏥" },
                  { name: "Convocation Hall", desc: "3000+ capacity main auditorium", icon: "🎭" },
                  { name: "Research Labs", desc: "200+ advanced laboratories across departments", icon: "🔬" },
                  { name: "Computer Center", desc: "High-performance computing with 24/7 access", icon: "💻" },
                  { name: "Shopping Complex", desc: "Banks, ATMs, post office, stores, food courts", icon: "🛍️" },
                  { name: "Student Activity Center", desc: "Dedicated space for clubs and cultural activities", icon: "🎵" }
                ].map((facility, index) => (
                  <div key={index} className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30 hover:border-[#dc2626]/50 transition-all duration-300">
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
                Student Activities & Clubs
              </h2>
              
              <div className="space-y-6">
                {/* Technical Clubs */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#dc2626]">Technical Clubs</h3>
                  <div className="grid md:grid-cols-3 gap-3">
                    {[
                      "Programming and Algorithms Club",
                      "Robotics Club",
                      "Electronics Club",
                      "Aeromodelling Club",
                      "Finance and Economics Club",
                      "Consulting Club",
                      "Astronomy Club",
                      "Blockchain Club",
                      "AI/ML Club"
                    ].map((club, index) => (
                      <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-sm text-[#d1d5db]">
                        {club}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cultural Clubs */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#dc2626]">Cultural & Arts</h3>
                  <div className="grid md:grid-cols-3 gap-3">
                    {[
                      "Dramatics Club (Mood Indigo)",
                      "Music Club",
                      "Dance Club",
                      "Fine Arts Club",
                      "Photography Club",
                      "Film Club",
                      "Literary Arts Club",
                      "Quiz Club",
                      "Debate Club"
                    ].map((club, index) => (
                      <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-sm text-[#d1d5db]">
                        {club}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sports Teams */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#dc2626]">Sports Teams</h3>
                  <div className="grid md:grid-cols-3 gap-3">
                    {[
                      "Cricket Team",
                      "Football Team",
                      "Basketball Team",
                      "Hockey Team",
                      "Badminton Team",
                      "Tennis Team",
                      "Swimming Team",
                      "Athletics Team",
                      "Table Tennis Team"
                    ].map((team, index) => (
                      <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-sm text-[#d1d5db]">
                        {team}
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
                    name: "Mood Indigo",
                    type: "Asia's Largest Cultural Festival",
                    desc: "4-day cultural extravaganza with international artists, performances, and competitions",
                    icon: "🎭"
                  },
                  {
                    name: "Techfest",
                    type: "Asia's Largest Tech Festival",
                    desc: "International technology festival with competitions, exhibitions, and lectures",
                    icon: "🔧"
                  },
                  {
                    name: "E-Summit",
                    type: "Entrepreneurship Summit",
                    desc: "National entrepreneurship summit with startup competitions and investor meets",
                    icon: "💼"
                  },
                  {
                    name: "Sports Festival",
                    type: "Inter-college Sports Meet",
                    desc: "Annual sports competition with 100+ colleges participating",
                    icon: "⚽"
                  }
                ].map((event, index) => (
                  <div key={index} className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30 hover:border-[#dc2626]/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{event.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#f3f4f6] mb-1">{event.name}</h3>
                        <div className="text-sm text-[#dc2626] mb-2">{event.type}</div>
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
                IIT Bombay is a research powerhouse with over 550+ ongoing research projects, 40+ interdisciplinary research centers, and collaborations with leading global institutions. The institute consistently ranks #1 in India for research output and innovation.
              </p>
              
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { label: "Research Publications", value: "4000+/year", icon: "📄" },
                  { label: "Patents Granted", value: "600+", icon: "⚖️" },
                  { label: "Research Centers", value: "45+", icon: "🏢" },
                  { label: "Sponsored Projects", value: "₹500+ Cr", icon: "💰" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-[#dc2626] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Centers */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏛️</span>
                Major Research Centers
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Centre for Research in Nanotechnology & Science (CRNTS)",
                  "Industrial Design Centre (IDC)",
                  "Centre for Environmental Science and Engineering (CESE)",
                  "Centre for Technology Alternatives for Rural Areas (CTARA)",
                  "National Centre for Aerospace Innovation and Research (NCAIR)",
                  "Centre for Formal Design and Verification of Software (CFDVS)",
                  "Centre for Urban Science and Engineering (CUSE)",
                  "National Centre for Photovoltaic Research and Education (NCPRE)",
                  "Centre of Studies in Resources Engineering (CSRE)",
                  "Society for Innovation and Entrepreneurship (SINE)",
                  "Centre for Machine Intelligence and Data Science (CMInDS)",
                  "Centre of Excellence in Nanoelectronics (CEN)"
                ].map((center, index) => (
                  <div key={index} className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#dc2626]/50 transition-all duration-300 text-sm text-[#d1d5db]">
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
                    area: "Artificial Intelligence & Data Science",
                    desc: "Deep learning, computer vision, NLP, big data analytics",
                    icon: "🤖"
                  },
                  {
                    area: "Sustainable Energy",
                    desc: "Solar cells, battery technology, smart grids, energy storage",
                    icon: "⚡"
                  },
                  {
                    area: "Nanotechnology & Materials",
                    desc: "Nanomaterials, 2D materials, quantum dots, nanocomposites",
                    icon: "🔬"
                  },
                  {
                    area: "Biotechnology & Healthcare",
                    desc: "Drug delivery, medical devices, bioinformatics, synthetic biology",
                    icon: "🧬"
                  },
                  {
                    area: "Quantum Computing",
                    desc: "Quantum algorithms, quantum cryptography, quantum materials",
                    icon: "⚛️"
                  },
                  {
                    area: "Smart Infrastructure",
                    desc: "Smart cities, IoT, urban planning, transportation systems",
                    icon: "🏙️"
                  }
                ].map((focus, index) => (
                  <div key={index} className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30 hover:border-[#dc2626]/50 transition-all duration-300">
                    <div className="text-4xl mb-3">{focus.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-[#f3f4f6]">{focus.area}</h3>
                    <p className="text-sm text-[#9ca3af]">{focus.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Collaborations */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🤝</span>
                International Collaborations
              </h2>
              <p className="text-[#9ca3af] mb-6">
                IIT Bombay has active collaborations with 200+ international universities and research institutions for student exchange, joint research, and faculty development programs.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  "MIT, USA",
                  "Stanford University",
                  "UC Berkeley",
                  "Caltech",
                  "Cambridge University",
                  "Oxford University",
                  "ETH Zurich",
                  "EPFL, Switzerland",
                  "National University of Singapore",
                  "University of Tokyo",
                  "KAIST, South Korea",
                  "TU Delft, Netherlands"
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
            <h2 className="text-3xl font-bold mb-4">Ready to Apply to India's #1 Engineering College?</h2>
            <p className="text-[#9ca3af] mb-8 max-w-2xl mx-auto">
              Join the legacy of excellence at IIT Bombay and become part of India's most prestigious engineering community.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://www.iitb.ac.in/en/education/admissions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#dc2626] border border-[#dc2626] rounded-xl text-white font-medium hover:bg-[#ef4444] transition-all duration-300"
              >
                Admission Information
              </a>
              <a 
                href="https://www.iitb.ac.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#1f2937] border border-[#374151] rounded-xl text-[#f3f4f6] hover:bg-[#374151] hover:border-[#dc2626]/50 transition-all duration-300"
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