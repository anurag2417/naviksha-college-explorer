"use client";

import Link from "next/link";
import { useState } from "react";

export default function JadavpurUniversityPage() {
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
            <span className="text-[#f3f4f6] font-medium">Jadavpur University</span>
          </nav>

          {/* College Header */}
          <div className="flex items-start gap-8 animate-fade-in-delay">
            {/* Logo */}
            <div className="hidden md:block flex-shrink-0">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#1f2937] to-[#111827] border border-[#374151] flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-bold bg-gradient-to-br from-[#f3f4f6] to-[#9ca3af] bg-clip-text text-transparent">
                  JU
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
                  🏆 NIRF #1 State Public University 2025
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  🌟 NAAC A+ Grade
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#f3f4f6] via-[#e5e7eb] to-[#9ca3af] bg-clip-text text-transparent mb-4">
                Jadavpur University
              </h1>

              <p className="text-[#9ca3af] text-lg leading-relaxed max-w-3xl mb-6">
                Established in 1906 as Bengal Technical Institute, Jadavpur University is India's premier state-funded 
                technical and research university. Located in Kolkata, it is the top-ranked state public university in India 
                (NIRF 2025), known for its academic excellence, affordable education, and strong research output across 
                engineering, science, and humanities .
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://jadavpuruniversity.in/" 
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
              <div className="text-xs text-[#9ca3af] mt-1">State Public University </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">1906</div>
              <div className="text-xs text-[#9ca3af] mt-1">Established</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">88+</div>
              <div className="text-xs text-[#9ca3af] mt-1">Acres Campus </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">13,351</div>
              <div className="text-xs text-[#9ca3af] mt-1">Students </div>
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
                { label: "Location", value: "Kolkata, West Bengal", icon: "📍" },
                { label: "Established", value: "1906", icon: "📅" },
                { label: "Institute Type", value: "State Public University", icon: "🏛️" },
                { label: "NIRF Rank 2025", value: "#9 (Universities) ", icon: "🏆" },
                { label: "Campus Area", value: "88+ Acres ", icon: "🌳" },
                { label: "Total Students", value: "13,351 ", icon: "👥" },
                { label: "Academic Staff", value: "934 ", icon: "👨‍🏫" },
                { label: "Budget 2025-26", value: "₹347 Cr ", icon: "💰" }
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
                About Jadavpur University
              </h2>
              <div className="space-y-4 text-[#d1d5db] leading-relaxed">
                <p>
                  Jadavpur University traces its origins to 1906 when the Bengal Technical Institute was founded by the Society for the Promotion of Technical Education during the Swadeshi Movement. It stands as a proud symbol of India's early struggle for educational self-reliance. In 1955, it was officially established as Jadavpur University by the Government of West Bengal [citation:1].
                </p>
                <p>
                  Today, JU is a premier public research university with multiple campuses in Kolkata. It has been recognized by the UGC as an institution with "Potential for Excellence" and accredited with an "A+" grade by NAAC [citation:1]. The university is particularly renowned for its engineering programs, which consistently rank among the top in India, as well as its strong humanities and science faculties.
                </p>
                <p>
                  Jadavpur University made history in 2025 by becoming the top-ranked State Public University in India according to NIRF, overtaking Anna University with a score of 76.08. It is the only state university to feature in the top 10 of the overall university category, securing the 9th position nationally [citation:2].
                </p>
              </div>
            </div>

            {/* Vision & Recognition */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  Vision
                </h3>
                <p className="text-[#d1d5db] leading-relaxed">
                  To Know Is To Grow – the university's motto reflects its commitment to fostering knowledge creation, interdisciplinary learning, and research excellence while maintaining affordable and inclusive education.
                </p>
              </div>
              <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">🏆</span>
                  Key Recognitions
                </h3>
                <ul className="space-y-2 text-sm text-[#d1d5db]">
                  <li className="flex items-start gap-2">• <span className="text-[#4f46e5]">NIRF 2025:</span> #1 State Public University </li>
                  <li className="flex items-start gap-2">• <span className="text-[#4f46e5]">Nature Index:</span> #1 among Indian Universities in research output (2023-24) </li>
                  <li className="flex items-start gap-2">• <span className="text-[#4f46e5]">NAAC Grade:</span> A+ </li>
                  <li className="flex items-start gap-2">• <span className="text-[#4f46e5]">UGC Status:</span> Potential for Excellence </li>
                </ul>
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
              <div className="grid md:grid-cols-4 gap-6 mb-6">
                {[
                  { label: "Departments", value: "37", icon: "🏛️" },
                  { label: "Interdisciplinary Schools", value: "21", icon: "🔄" },
                  { label: "Centres for Studies", value: "50+", icon: "🔬" },
                  { label: "UG Programs", value: "39+", icon: "📚" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-[#4f46e5] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Departments */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">⚙️</span>
                Faculty of Engineering & Technology
              </h2>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  "Architecture",
                  "Chemical Engineering",
                  "Civil Engineering",
                  "Computer Science & Engineering",
                  "Construction Engineering",
                  "Electrical Engineering",
                  "Electronics & Telecommunication Engg.",
                  "Food Technology & Biochemical Engg.",
                  "Information Technology",
                  "Instrumentation & Electronics Engg.",
                  "Mechanical Engineering",
                  "Metallurgical & Material Engineering",
                  "Pharmaceutical Technology",
                  "Power Engineering",
                  "Printing Engineering",
                  "Production Engineering"
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

            {/* Science Departments */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🧪</span>
                Faculty of Science
              </h2>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  "Chemistry",
                  "Geography",
                  "Geological Sciences",
                  "Instrumentation Science",
                  "Life Science & Biotechnology",
                  "Mathematics",
                  "Physics"
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

            {/* Arts Departments */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🎨</span>
                Faculty of Arts
              </h2>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  "Bengali",
                  "Comparative Literature",
                  "Economics",
                  "Education",
                  "English",
                  "Film Studies",
                  "History",
                  "International Relations",
                  "Library & Information Science",
                  "Philosophy",
                  "Physical Education",
                  "Sanskrit",
                  "Sociology"
                ].map((program, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                    <span className="text-[#d1d5db] text-sm">{program}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interdisciplinary Schools */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🔄</span>
                Interdisciplinary Schools (Selected)
              </h2>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  "School of Energy Studies",
                  "School of Environmental Studies",
                  "School of Materials Science & Nanotechnology",
                  "School of Cognitive Science",
                  "School of International Relations & Strategic Studies",
                  "School of Media Communication & Culture",
                  "School of Water Resource Engineering",
                  "School of Laser Science & Engineering",
                  "School of Mobile Computing & Communication",
                  "School of Illumination Science & Design"
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
          </div>
        )}

        {/* Admissions Tab */}
        {activeTab === "admissions" && (
          <div className="space-y-8 animate-fade-in">
            {/* Admission Process */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📝</span>
                Admission Process 2025-26
              </h2>
              
              <div className="space-y-6">
                {/* B.Tech Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">B.Tech / B.Arch / B.Pharma Admissions </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">1</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">Minimum 45-75% in 10+2 with PCM/PCB</div>
                        <div className="text-sm text-[#9ca3af]">Eligibility criteria for undergraduate programs. B.Tech seats: 1333 </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">2</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">WBJEE Score</div>
                        <div className="text-sm text-[#9ca3af]">Admission through West Bengal Joint Entrance Examination </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">3</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">Counseling & Document Verification</div>
                        <div className="text-sm text-[#9ca3af]">Seat allotment based on WBJEE rank followed by document verification</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* M.Tech Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">M.Tech / M.E. Admissions </h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db]">Valid GATE score or university entrance exam. Total M.Tech seats: 669 </p>
                  </div>
                </div>

                {/* MA Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">MA Admissions </h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db]">Graduation with 50% marks + CUET PG score. Application dates: Dec 2025 - Jan 2026 for 2026 cycle </p>
                    <p className="text-sm text-[#9ca3af] mt-2">Total MA seats: 665 across 15 specializations including English (60), Economics (65), History (65), International Relations (70) </p>
                  </div>
                </div>

                {/* Lateral Entry */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">B.E. Lateral Entry (Diploma Holders) </h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db]">Diploma with 45% + JELET score. Application typically in December </p>
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
                  <h3 className="font-semibold text-lg mb-4">B.Tech / B.E.</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Annual Tuition</span>
                      <span className="text-[#f3f4f6] font-semibold">₹2,400 - 9,600 </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold">~₹85,460 </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">MA Programs</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Total Fees (General)</span>
                      <span className="text-[#f3f4f6] font-semibold">₹1,800 - 26,200 </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">SC/ST Fees</span>
                      <span className="text-[#f3f4f6] font-semibold">₹10,500 </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">M.Tech</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold">~₹2.35 Lakhs </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">Hostel Fees</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Annual Hostel</span>
                      <span className="text-[#f3f4f6] font-semibold">₹6,000 - 9,000 </span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#9ca3af] mt-4">* JU is known for its highly affordable fees. Tuition fee waivers and scholarships available through SVMCM, MCM, and category-based schemes [citation:4].</p>
            </div>

            {/* Scholarships */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🎓</span>
                Scholarships & Financial Aid
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: "SVMCM (Swami Vivekananda)", benefit: "₹24,000 - 60,000 per annum [citation:4]" },
                  { name: "Free Studentship", benefit: "Full tuition fee waiver for deserving students [citation:4]" },
                  { name: "SC/ST Scholarships", benefit: "₹10,000 per annum + fee concession [citation:4]" },
                  { name: "Kanyashree Prakalpa", benefit: "₹24,000 - 25,000 per annum for female students [citation:4]" },
                  { name: "AICTE GATE Scholarship", benefit: "₹12,400 per month for GATE-qualified M.Tech students [citation:4]" },
                  { name: "DST-INSPIRE", benefit: "₹60,000 per annum for science students [citation:4]" }
                ].map((scholarship, index) => (
                  <div key={index} className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="font-semibold text-[#f3f4f6] mb-1">{scholarship.name}</div>
                    <div className="text-sm text-[#9ca3af]">{scholarship.benefit}</div>
                  </div>
                ))}
              </div>
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
                  { label: "Highest Package (CSE)", value: "₹1.8 Cr", icon: "🎯" },
                  { label: "Core Branches Placement", value: "95%+", icon: "📊" },
                  { label: "CSE Average Package", value: "₹21 LPA", icon: "📈" },
                  { label: "Median Salary (Overall)", value: "₹9.1 LPA", icon: "💰" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center hover:border-[#4f46e5]/50 transition-all duration-300">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-[#4f46e5] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Recent Placement Update */}
              <div className="mb-8 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                <h3 className="text-lg font-semibold text-[#f3f4f6] mb-2">Recent Placement 2025</h3>
                <p className="text-[#d1d5db]">Garba Goswami and Abhishikta Biswas from the Department of Chemical Engineering secured offers at <span className="text-[#4f46e5] font-semibold">ITC Limited</span> as Graduate Engineer Trainees [citation:8].</p>
              </div>

              {/* Top Recruiters */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Top Recruiters</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    "Google", "Microsoft", "Amazon", "Adobe", "TCS", "Infosys",
                    "ITC Limited", "HSBC", "Deloitte", "PwC", "Accenture", "Cognizant",
                    "L&T", "Tata Motors", "Cisco", "Intel", "Texas Instruments", "Wipro",
                    "ICICI Bank", "HDFC Bank", "Bajaj", "Mahindra", "Reliance", "BPCL"
                  ].map((company, index) => (
                    <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300 text-center text-sm text-[#d1d5db]">
                      {company}
                    </div>
                  ))}
                </div>
              </div>

              {/* Arts & Science Placements */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Arts & Science Placements</h3>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <p className="text-sm text-[#9ca3af]">
                    About 20% placement in arts and science streams, with average packages around ₹10 LPA. 
                    Companies like Google, Microsoft, and HSBC recruit from humanities programs as well. 
                    Internship stipends range from ₹15,000 - 20,000 per month [citation:4].
                  </p>
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
                <span className="text-3xl">🏛️</span>
                Multi-Campus System
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <div className="text-xl font-bold text-[#4f46e5] mb-2">Main Campus</div>
                  <div className="text-sm text-[#9ca3af]">Jadavpur • 60 acres</div>
                  <div className="text-xs text-[#d1d5db] mt-2">Major engineering, arts & science departments [citation:1]</div>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <div className="text-xl font-bold text-[#4f46e5] mb-2">Salt Lake Campus</div>
                  <div className="text-sm text-[#9ca3af]">Bidhannagar • 26 acres</div>
                  <div className="text-xs text-[#d1d5db] mt-2">5 departments: Construction, Instrumentation, Printing, IT, Power Engineering [citation:1]</div>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <div className="text-xl font-bold text-[#4f46e5] mb-2">West Annexe</div>
                  <div className="text-sm text-[#9ca3af]">Jadavpur • 7.6 acres</div>
                  <div className="text-xs text-[#d1d5db] mt-2">Research hub with DRDO, CSIR, JCBCAT collaboration [citation:1]</div>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <div className="text-xl font-bold text-[#4f46e5] mb-2">New Town Campus</div>
                  <div className="text-sm text-[#9ca3af]">5 acres (planned)</div>
                  <div className="text-xs text-[#d1d5db] mt-2">State-of-the-art labs, convention centre, AI lab (under development) [citation:1]</div>
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
                  { name: "Central Library", desc: "6.46 lakh books, 80,700 journals, 13,000 theses. 3rd largest in West Bengal [citation:1]", icon: "📚" },
                  { name: "Auditoriums", desc: "7 auditoriums including H.L. Roy, Triguna Sen, K.P. Basu Memorial Hall", icon: "🎭" },
                  { name: "Open Air Theatre", desc: "Seating capacity of 3,000 for cultural events [citation:1]", icon: "🎪" },
                  { name: "Sports Complex", desc: "6 acres with badminton, tennis, kabaddi courts, cricket & football grounds [citation:1]", icon: "⚽" },
                  { name: "Health Centre", desc: "Medical facility for students and staff", icon: "🏥" },
                  { name: "Cafeterias", desc: "Six canteens across campus [citation:1]", icon: "☕" },
                  { name: "Banking & Post Office", desc: "SBI branch and post office on campus", icon: "🏦" },
                  { name: "Gymnasium", desc: "Well-equipped fitness center", icon: "💪" }
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
                    name: "Technovation",
                    type: "Technical Festival",
                    desc: "Annual technical fest showcasing innovation and research",
                    icon: "🔧"
                  },
                  {
                    name: "Criterion",
                    type: "Cultural Festival",
                    desc: "Annual cultural extravaganza with performances and competitions",
                    icon: "🎭"
                  },
                  {
                    name: "Department Symposia",
                    type: "Academic Events",
                    desc: "Individual department symposiums throughout the year",
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
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {[
                  { label: "Nature Index Ranking", value: "#1 in India", icon: "🏆" },
                  { label: "Research Output", value: "Top 2% globally", icon: "📊" },
                  { label: "Ph.D. Students", value: "2,535 ", icon: "👨‍🔬" },
                  { label: "Research Centres", value: "50+", icon: "🔬" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-[#4f46e5] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-[#d1d5db]">
                According to the Nature Index (2023-2024), Jadavpur University ranks #1 among all universities in India 
                and 22nd overall in India in terms of research output [citation:1]. Stanford University's 2025 list of 
                top 2% global scientists includes multiple JU faculty members [citation:1].
              </p>
            </div>

            {/* DRDO Collaboration */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🛡️</span>
                DRDO Collaboration - West Annexe Campus
              </h2>
              <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                <p className="text-[#d1d5db] mb-4">
                  In 2009, Jadavpur University took over National Instruments Limited on a 297-year lease, establishing the 
                  West Annexe Campus as a research hub. 40% of the space is leased to DRDO on a long-term basis [citation:1].
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-[#f3f4f6] mb-2">JCBCAT</h4>
                    <p className="text-sm text-[#9ca3af]">Jagadish Chandra Bose Centre for Advanced Technology established through JU-DRDO collaboration [citation:1]</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#f3f4f6] mb-2">CSIR Operations</h4>
                    <p className="text-sm text-[#9ca3af]">CSIR also operates research facilities from the West Annexe Campus [citation:1]</p>
                  </div>
                </div>
              </div>
            </div>

            {/* International Collaborations */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🌍</span>
                International Collaborations
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="font-semibold text-[#f3f4f6] mb-2">Erasmus Mundus Partnership</h3>
                  <p className="text-sm text-[#9ca3af]">Students from European universities can get grants to study at Jadavpur University through Erasmus Mundus [citation:5]</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="font-semibold text-[#f3f4f6] mb-2">Nippon Foundation Accreditation</h3>
                  <p className="text-sm text-[#9ca3af]">First Indian university accredited by Japanese Nippon Foundation for social sciences and humanities research [citation:5]</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="font-semibold text-[#f3f4f6] mb-2">World Bank TEQIP Support</h3>
                  <p className="text-sm text-[#9ca3af]">Among 127 institutions selected for World Bank's Technical Education Quality Improvement Programme [citation:5]</p>
                </div>
              </div>
            </div>

            {/* PhD Collaborations */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🎓</span>
                PhD Collaborations with National Institutes
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Saha Institute of Nuclear Physics",
                  "School of Tropical Medicine, Kolkata",
                  "VECC (Bhabha Atomic Research Centre)",
                  "Indian Institute of Chemical Biology",
                  "Central Glass and Ceramic Research Institute",
                  "Bose Institute",
                  "Jute Technological Research Laboratory",
                  "Chittaranjan National Cancer Research Centre",
                  "S. N. Bose National Centre for Basic Sciences"
                ].map((institute, index) => (
                  <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-sm text-[#d1d5db]">
                    {institute}
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
            <h2 className="text-3xl font-bold mb-4">Join India's #1 State Public University</h2>
            <p className="text-[#9ca3af] mb-8 max-w-2xl mx-auto">
              Experience world-class education at affordable fees with 95% placements, ₹1.8 crore highest package, and research excellence that ranks #1 in India.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://jadavpuruniversity.in/admissions/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#4f46e5] border border-[#4f46e5] rounded-xl text-white font-medium hover:bg-[#6366f1] transition-all duration-300"
              >
                Admission Information
              </a>
              <a 
                href="https://jadavpuruniversity.in/" 
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