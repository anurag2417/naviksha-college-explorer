"use client";

import Link from "next/link";
import { useState } from "react";

export default function DTUPage() {
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
            <span className="text-[#f3f4f6] font-medium">Delhi Technological University</span>
          </nav>

          {/* College Header */}
          <div className="flex items-start gap-8 animate-fade-in-delay">
            {/* Logo */}
            <div className="hidden md:block flex-shrink-0">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#1f2937] to-[#111827] border border-[#374151] flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-bold bg-gradient-to-br from-[#f3f4f6] to-[#9ca3af] bg-clip-text text-transparent">
                  DTU
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
                  🏆 NIRF #27 (Engineering 2024)
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  🌟 Delhi's Premier State University
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#f3f4f6] via-[#e5e7eb] to-[#9ca3af] bg-clip-text text-transparent mb-4">
                Delhi Technological University
              </h1>

              <p className="text-[#9ca3af] text-lg leading-relaxed max-w-3xl mb-6">
                Formerly Delhi College of Engineering (established 1941), DTU is one of India's premier government 
                engineering universities. Located on a 164-acre campus in Rohini, New Delhi, it offers a diverse range 
                of programs with a 70% outstation student body and exceptional placement records rivaling top IITs for 
                CSE branches .
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.dtu.ac.in/" 
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
              <div className="text-2xl font-bold text-[#4f46e5]">NIRF #27</div>
              <div className="text-xs text-[#9ca3af] mt-1">Engineering 2024 </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">1941</div>
              <div className="text-xs text-[#9ca3af] mt-1">Established</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">164</div>
              <div className="text-xs text-[#9ca3af] mt-1">Acres Campus </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">₹1.8 Cr</div>
              <div className="text-xs text-[#9ca3af] mt-1">Highest Package 2025 </div>
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
                { label: "Location", value: "Rohini, New Delhi", icon: "📍" },
                { label: "Established", value: "1941 (as DCE)", icon: "📅" },
                { label: "Institute Type", value: "Government (State University)", icon: "🏛️" },
                { label: "NIRF Rank 2024", value: "#27 (Engineering)", icon: "🏆" },
                { label: "Campus Area", value: "164 Acres ", icon: "🌳" },
                { label: "Student Strength", value: "12,850+ ", icon: "👥" },
                { label: "Faculty", value: "306 ", icon: "👨‍🏫" },
                { label: "Students from Outside Delhi", value: "70% ", icon: "🌍" }
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
                About Delhi Technological University
              </h2>
              <div className="space-y-4 text-[#d1d5db] leading-relaxed">
                <p>
                  Delhi Technological University (DTU) traces its origins to 1941 when it was established as the Delhi Polytechnic. It later became the Delhi College of Engineering (DCE) and was granted university status in 2009. With a legacy spanning over 80 years, DTU has produced more than 64,885 engineering graduates since its first batch in 1945 .
                </p>
                <p>
                  Located on a sprawling 164-acre campus in Rohini, North-West Delhi, DTU is recognized by UGC, AICTE, and accredited with NAAC A+ grade (CGPA 3.22) . The university is known for its strong academic programs, modern infrastructure, and exceptional placement records that rival those of top IITs, particularly for Computer Science and IT branches .
                </p>
                <p>
                  DTU is one of the most sought-after government engineering institutions in India, with over 70% of its students coming from outside Delhi . The university offers a vibrant, diverse campus environment with students from across the country and 115 international students enrolled in 2024-25 .
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
                  "DTU's mission is to serve the nation through technological contributions. Our vision is rooted in enabling sustainable growth, fostering research, and building meaningful industry and global partnerships." – Prof. Prateek Sharma, Vice-Chancellor .
                </p>
              </div>
              <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">🏆</span>
                  Key Recognitions
                </h3>
                <ul className="space-y-2 text-sm text-[#d1d5db]">
                  <li className="flex items-start gap-2">• <span className="text-[#4f46e5]">NAAC Grade:</span> A+ (CGPA 3.22) </li>
                  <li className="flex items-start gap-2">• <span className="text-[#4f46e5]">NBA Accreditation:</span> All eligible programs </li>
                  <li className="flex items-start gap-2">• <span className="text-[#4f46e5]">QUAD-STEM Selection:</span> Among 8 Indian institutions chosen by ICCR </li>
                  <li className="flex items-start gap-2">• <span className="text-[#4f46e5]">TLR Score:</span> 73.10 (NIRF 2024) </li>
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
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {[
                  { label: "UG Programs", value: "21 B.Tech + B.Des + BBA + BA", icon: "📚" },
                  { label: "PG Programs", value: "M.Tech, M.Des, M.Sc, MBA", icon: "📖" },
                  { label: "Doctoral Programs", value: "PhD in all departments", icon: "🔬" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-lg font-bold text-[#4f46e5] mb-1">{stat.label}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* B.Tech Programs */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">⚙️</span>
                B.Tech Programs - 21 Specializations
              </h2>
              <p className="text-[#9ca3af] mb-4">Total Seats: 2,435 | Entrance: JEE Main (through JAC Delhi) </p>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  "Computer Science & Engineering",
                  "Information Technology",
                  "Electronics & Communication Engg.",
                  "Electrical Engineering",
                  "Mechanical Engineering",
                  "Civil Engineering",
                  "Biotechnology",
                  "Chemical Engineering",
                  "Production & Industrial Engg.",
                  "Environmental Engineering",
                  "Polymer Science & Chemical Tech.",
                  "Mathematics & Computing",
                  "Engineering Physics",
                  "Software Engineering",
                  "Data Science and Analytics (New 2025) ",
                  "Cybersecurity (New 2025) ",
                  "VLSI Design and Technology (New 2025) "
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

            {/* B.Des Program */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🎨</span>
                B.Des Program
              </h2>
              <div className="grid md:grid-cols-1 gap-3">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <div className="w-2 h-2 rounded-full bg-[#7c3aed]" />
                  <span className="text-[#d1d5db] text-sm">Bachelor of Design (4 Years) - 90 seats | Entrance: UCEED </span>
                </div>
              </div>
            </div>

            {/* Other UG Programs */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📋</span>
                Other Undergraduate Programs
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "BBA (3 Years) - 180 seats | 12th Merit",
                  "BA Economics (Hons) (3 Years) | 12th with Maths"
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
                  <p className="text-sm text-[#9ca3af]">2 years | GATE | 25-30 seats per specialization</p>
                  <p className="text-xs text-[#d1d5db] mt-2">New: MTech in Cybersecurity, MTech by Research in ESG (with ICSI), Renewable Energy (with NISE) </p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">M.Des</h3>
                  <p className="text-sm text-[#9ca3af]">2 years | CEED | 45 seats </p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">M.Sc</h3>
                  <p className="text-sm text-[#9ca3af]">2 years | CUET PG</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">MBA</h3>
                  <p className="text-sm text-[#9ca3af]">2 years | CAT </p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">Executive MBA</h3>
                  <p className="text-sm text-[#9ca3af]">3 years </p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">MA Economics</h3>
                  <p className="text-sm text-[#9ca3af]">2 years | Fees: ₹50,000/year </p>
                </div>
              </div>
            </div>

            {/* New Departments */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🆕</span>
                New Academic Initiatives 2025
              </h2>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="font-semibold text-[#f3f4f6] mb-2">Department of Geospatial Science and Technology</h3>
                  <p className="text-sm text-[#9ca3af]">Supporting advanced research in disaster management, environmental monitoring, and urban planning </p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="font-semibold text-[#f3f4f6] mb-2">New BTech Programs (2025-26)</h3>
                  <p className="text-sm text-[#9ca3af]">Data Science and Analytics | Cybersecurity | VLSI Design and Technology </p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="font-semibold text-[#f3f4f6] mb-2">New MTech Programs</h3>
                  <p className="text-sm text-[#9ca3af]">Cybersecurity | MTech by Research in ESG (with ICSI) | MTech by Research in Renewable Energy (with NISE) </p>
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
                Admission Process 2025-26
              </h2>
              
              <div className="space-y-6">
                {/* B.Tech Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">B.Tech Admissions </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">1</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">Minimum 60% in 10+2 with PCM</div>
                        <div className="text-sm text-[#9ca3af]">Eligibility criteria </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">2</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">JEE Main Score</div>
                        <div className="text-sm text-[#9ca3af]">Valid JEE Main rank </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">3</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">JAC Delhi Counselling</div>
                        <div className="text-sm text-[#9ca3af]">Register on JAC Delhi portal for seat allotment </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Other UG Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">B.Des / BBA / BA Economics </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <span className="text-[#4f46e5] font-semibold">B.Des:</span> <span className="text-[#d1d5db]">UCEED score + 10+2 with 55% </span>
                    </div>
                    <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <span className="text-[#4f46e5] font-semibold">BBA / BA Eco:</span> <span className="text-[#d1d5db]">10+2 merit with English/Mathematics </span>
                    </div>
                  </div>
                </div>

                {/* PG Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Postgraduate Admissions </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <span className="text-[#4f46e5] font-semibold">M.Tech:</span> <span className="text-[#d1d5db]">GATE + Bachelor's with 60% </span>
                    </div>
                    <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <span className="text-[#4f46e5] font-semibold">M.Des:</span> <span className="text-[#d1d5db]">CEED </span>
                    </div>
                    <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <span className="text-[#4f46e5] font-semibold">M.Sc:</span> <span className="text-[#d1d5db]">CUET PG </span>
                    </div>
                    <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <span className="text-[#4f46e5] font-semibold">MBA:</span> <span className="text-[#d1d5db]">CAT </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fee Structure 2025-26 - Updated with fee hike data */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">💰</span>
                Fee Structure 2025-26 (with recent hike) 
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">B.Tech / B.Des</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Annual Tuition 2025-26</span>
                      <span className="text-[#f3f4f6] font-semibold">₹2,47,700 </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Previous Year (2023-24)</span>
                      <span className="text-[#f3f4f6]">₹2,29,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af] text-green-400">Increase</span>
                      <span className="text-green-400 font-semibold">+8%</span>
                    </div>
                    <div className="border-t border-[#374151] pt-2 mt-2 flex justify-between">
                      <span className="text-[#f3f4f6] font-semibold">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold">₹9,90,800</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">BBA / BA Economics (Hons)</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Annual Tuition 2025-26</span>
                      <span className="text-[#f3f4f6] font-semibold">₹1,17,200 </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Previous Year (2023-24)</span>
                      <span className="text-[#f3f4f6]">₹1,05,700</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af] text-green-400">Increase</span>
                      <span className="text-green-400 font-semibold">+11.4%</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">MBA / M.Des</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Annual Tuition 2025-26</span>
                      <span className="text-[#f3f4f6] font-semibold">₹2,37,700 </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Previous Year (2023-24)</span>
                      <span className="text-[#f3f4f6]">₹2,29,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af] text-green-400">Increase</span>
                      <span className="text-green-400 font-semibold">+3.8%</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">MA Economics</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Annual Tuition 2025-26</span>
                      <span className="text-[#f3f4f6] font-semibold">₹50,000 </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Previous Year (2023-24)</span>
                      <span className="text-[#f3f4f6]">₹42,200</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af] text-green-400">Increase</span>
                      <span className="text-green-400 font-semibold">+18.4%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                <h3 className="font-semibold text-lg mb-2">Additional Charges</h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#9ca3af]">Alumni Association Life Membership (One-time)</span>
                    <span className="text-[#f3f4f6]">₹1,000 </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9ca3af]">Hostel Fees (Annual)</span>
                    <span className="text-[#f3f4f6]">~₹30,000-40,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scholarships */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🎓</span>
                Scholarships & Financial Aid
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: "Top Class Education Scheme", benefit: "For SC/ST students, tuition fee reimbursement" },
                  { name: "Central Sector Scholarship Scheme", benefit: "For meritorious students with family income < ₹8 LPA" },
                  { name: "Scholarships for Disabilities", benefit: "Support for students with disabilities" },
                  { name: "DTU Merit Scholarships", benefit: "Based on academic performance" }
                ].map((scholarship, index) => (
                  <div key={index} className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="font-semibold text-[#f3f4f6] mb-1">{scholarship.name}</div>
                    <div className="text-sm text-[#9ca3af]">{scholarship.benefit}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* JEE Main Cutoff Trends */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📊</span>
                JEE Main Cutoff Trends (General - Approx.)
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { program: "Computer Science Engineering", rank: "1,400 - 2,500 " },
                  { program: "Information Technology", rank: "2,500 - 4,000 " },
                  { program: "Electronics & Communication Engg.", rank: "4,500 - 6,000 " },
                  { program: "Electrical Engineering", rank: "6,500 - 8,000 " }
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
            {/* Placement Highlights 2025 */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">💼</span>
                Placement Highlights 2025
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {[
                  { label: "Highest International", value: "₹1.8 Cr", icon: "🌍" },
                  { label: "Highest Domestic", value: "₹85.3 LPA", icon: "🎯" },
                  { label: "Average CTC (CSE)", value: "₹22-24 LPA", icon: "📊" },
                  { label: "Overall Average", value: "₹15-16 LPA", icon: "📈" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center hover:border-[#4f46e5]/50 transition-all duration-300">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-[#4f46e5] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Top Packages 2025 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Top Packages 2025 </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="text-lg font-bold text-[#4f46e5]">Atlassian</div>
                    <div className="text-sm text-[#d1d5db]">₹85.3 LPA</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="text-lg font-bold text-[#4f46e5]">Apple</div>
                    <div className="text-sm text-[#d1d5db]">₹64.23 LPA</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="text-lg font-bold text-[#4f46e5]">Microsoft</div>
                    <div className="text-sm text-[#d1d5db]">₹52 LPA</div>
                  </div>
                </div>
              </div>

              {/* Branch-wise Early Placement 2025 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Branch-wise Early Placement (as of Feb 2025) </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#1f2937]/50">
                        <th className="p-3 text-left text-sm font-semibold text-[#f3f4f6]">Branch</th>
                        <th className="p-3 text-left text-sm font-semibold text-[#f3f4f6]">Early Placement Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { branch: "CSE / IT", percentage: "50-55%" },
                        { branch: "ECE / Mechanical", percentage: "40-45%" },
                        { branch: "Electrical / Biotech", percentage: "30-40%" }
                      ].map((item, index) => (
                        <tr key={index} className="border-b border-[#374151]">
                          <td className="p-3 text-sm text-[#d1d5db]">{item.branch}</td>
                          <td className="p-3 text-sm text-[#4f46e5] font-semibold">{item.percentage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-[#9ca3af] mt-2">Overall final placement expected: 80-90% by end of 2025 </p>
              </div>

              {/* PPO Statistics */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">PPO Conversion Rates </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                    <div className="text-2xl font-bold text-[#4f46e5]">28%</div>
                    <div className="text-xs text-[#9ca3af]">Overall PPO Rate</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                    <div className="text-2xl font-bold text-[#4f46e5]">42%</div>
                    <div className="text-xs text-[#9ca3af]">CSE PPO Rate</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                    <div className="text-2xl font-bold text-[#4f46e5]">30%</div>
                    <div className="text-xs text-[#9ca3af]">ECE PPO Rate</div>
                  </div>
                </div>
              </div>

              {/* Top Recruiters */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Top Recruiters 2025 </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    "Google", "Microsoft", "Amazon", "Apple", "Atlassian", "Uber",
                    "Goldman Sachs", "J.P. Morgan", "D.E. Shaw", "Sprinklr", "Flipkart", "Walmart",
                    "Intel", "Qualcomm", "Texas Instruments", "Cisco", "Adobe", "Oracle",
                    "Accenture", "Deloitte", "PwC", "TCS", "Infosys", "Wipro"
                  ].map((company, index) => (
                    <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300 text-center text-sm text-[#d1d5db]">
                      {company}
                    </div>
                  ))}
                </div>
              </div>

              {/* Historical Placement Data */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Historical Placement Data </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="text-sm text-[#9ca3af]">2022-23 B.Tech Graduates</div>
                    <div className="text-lg font-bold text-[#f3f4f6]">1,965 placed out of 2,220</div>
                    <div className="text-sm text-[#4f46e5]">Median: ₹14.10 LPA </div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="text-sm text-[#9ca3af]">2024-25 Placement (300 graduated)</div>
                    <div className="text-lg font-bold text-[#f3f4f6]">100% placement </div>
                    <div className="text-sm text-[#4f46e5]">Median: ₹13 LPA (21% increase) </div>
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
                The DTU Campus
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-[#4f46e5] mb-2">164 Acres</div>
                  <p className="text-[#9ca3af]">Located on Bawana Road, Rohini, North-West Delhi. A fully residential campus with modern infrastructure and lush green surroundings .</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#4f46e5] mb-2">70% Outstation</div>
                  <p className="text-[#9ca3af]">Students from across India, creating a diverse and inclusive community. 115 international students enrolled in 2024-25 .</p>
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
                  { name: "Central Library", desc: "Digitized resources with Virtual Library and Knowledge Centre ", icon: "📚" },
                  { name: "Hostels", desc: "9 boys hostels (1,284 capacity) + 6 girls hostels (334 capacity) ", icon: "🏠" },
                  { name: "Medical Centre", desc: "20-bed hospital with specialists for ENT, eye, dental care ", icon: "🏥" },
                  { name: "Gymnasium", desc: "Ultra-modern with digital electronic treadmills ", icon: "💪" },
                  { name: "Sports Complex", desc: "450m track, football, cricket, hockey, tennis, basketball, volleyball, badminton courts ", icon: "⚽" },
                  { name: "IT Infrastructure", desc: "200+ Dell i5 systems, 15+ servers, 95 Wi-Fi access points ", icon: "💻" },
                  { name: "Banking", desc: "SBI branch and ATMs within campus ", icon: "🏦" },
                  { name: "Post Office", desc: "Indian Post office on campus ", icon: "📬" },
                  { name: "Auditorium", desc: "500-seat capacity for events and talks ", icon: "🎭" }
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
                      "AI/ML Club",
                      "Cybersecurity Club"
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
                    name: "Invicta",
                    type: "Cultural Festival",
                    desc: "Annual cultural extravaganza with performances and competitions",
                    icon: "🎭"
                  },
                  {
                    name: "Engineer",
                    type: "Technical Festival",
                    desc: "Annual techno-management fest showcasing innovation",
                    icon: "🔧"
                  },
                  {
                    name: "Arena",
                    type: "Sports Festival",
                    desc: "Large-scale sports competition organized by Sports Council ",
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
                DTU is committed to serving the nation through technological contributions, with a strong focus on research, innovation, and industry collaboration. The university has established numerous partnerships with national and international organizations .
              </p>
            </div>

            {/* DTU Innovation & Incubation Foundation */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">💡</span>
                DTU Innovation & Incubation Foundation (DTU-IIF)
              </h2>
              <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="p-3 bg-[#1f2937]/50 rounded text-center">
                    <div className="text-2xl font-bold text-[#4f46e5]">100+</div>
                    <div className="text-xs text-[#9ca3af]">Startups Supported</div>
                  </div>
                  <div className="p-3 bg-[#1f2937]/50 rounded text-center">
                    <div className="text-2xl font-bold text-[#4f46e5]">₹700 Cr+</div>
                    <div className="text-xs text-[#9ca3af]">Collective Valuation</div>
                  </div>
                  <div className="p-3 bg-[#1f2937]/50 rounded text-center">
                    <div className="text-2xl font-bold text-[#4f46e5]">1,000+</div>
                    <div className="text-xs text-[#9ca3af]">Jobs Created</div>
                  </div>
                </div>
                <p className="text-sm text-[#9ca3af]">
                  DTU's Innovation and Incubation Foundation has fostered a thriving startup ecosystem, supporting over 100 startups with collective valuation exceeding ₹700 crore and creating more than 1,000 jobs .
                </p>
              </div>
            </div>

            {/* Indian Army Collaboration */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🛡️</span>
                Indian Army - DTU MoU (Oct 2025) 
              </h2>
              <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                <p className="text-[#d1d5db] mb-4">
                  In October 2025, the Indian Army signed a landmark MoU with DTU to promote research and offer courses for military personnel in key domains, advancing Atmanirbhar Bharat through innovation and Military-Civil synergy .
                </p>
                <h3 className="text-lg font-semibold mb-3 text-[#f3f4f6]">Focus Areas</h3>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    "Defence Technology",
                    "Artificial Intelligence",
                    "Robotics",
                    "Cyber Security",
                    "Geoinformatics",
                    "Data Analytics",
                    "Soldier Upskilling"
                  ].map((area, index) => (
                    <div key={index} className="p-2 bg-[#1f2937]/30 rounded text-sm text-[#d1d5db]">
                      {area}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#4f46e5] mt-4">"Bridging operational experience with academic excellence to build a future-ready force." – Indian Army </p>
              </div>
            </div>

            {/* International Collaborations */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🌍</span>
                International Partnerships
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="font-semibold text-[#f3f4f6] mb-2">QUAD-STEM Programme</h3>
                  <p className="text-sm text-[#9ca3af]">DTU selected among just 8 institutions nationwide from 130+ applicants by ICCR </p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="font-semibold text-[#f3f4f6] mb-2">US University MoUs</h3>
                  <p className="text-sm text-[#9ca3af]">Student exchange and joint programs with University of Houston, Wright State University, Bradley University </p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="font-semibold text-[#f3f4f6] mb-2">South Asian University Collaboration</h3>
                  <p className="text-sm text-[#9ca3af]">MoU for PhD students to take interdisciplinary courses across institutions </p>
                </div>
              </div>
            </div>

            {/* Industry Partnerships */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🤝</span>
                Industry Collaborations
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { partner: "DRDO", focus: "Defence research" },
                  { partner: "GRID-India", focus: "Power grid research" },
                  { partner: "Siddharth Grease and Lubes", focus: "Skill Development Centre for Tribology" },
                  { partner: "Institute of Company Secretaries of India", focus: "MTech by Research in ESG" },
                  { partner: "National Institute of Solar Energy", focus: "Renewable Energy Research" }
                ].map((item, index) => (
                  <div key={index} className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="font-semibold text-[#f3f4f6]">{item.partner}</div>
                    <div className="text-sm text-[#9ca3af]">{item.focus}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Endowment Fund */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">💰</span>
                DTU Endowment Fund
              </h2>
              <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                <p className="text-[#d1d5db]">
                  DTU has launched an Endowment Fund to enable contributions from its global alumni network and institutional partners towards campus development and academic initiatives, fostering long-term growth and sustainability .
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
            <h2 className="text-3xl font-bold mb-4">Join Delhi's Premier Engineering University</h2>
            <p className="text-[#9ca3af] mb-8 max-w-2xl mx-auto">
              Experience 80+ years of academic excellence with ₹1.8 crore highest packages, 100% placements, and a diverse campus of 12,850+ students from across India and 115 countries.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://www.dtu.ac.in/Web/Admission/admission.php" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#4f46e5] border border-[#4f46e5] rounded-xl text-white font-medium hover:bg-[#6366f1] transition-all duration-300"
              >
                Admission Information
              </a>
              <a 
                href="https://www.dtu.ac.in/" 
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