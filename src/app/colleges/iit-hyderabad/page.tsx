"use client";

import Link from "next/link";
import { useState } from "react";

export default function IITHyderabadPage() {
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
            <span className="text-[#f3f4f6] font-medium">IIT Hyderabad</span>
          </nav>

          {/* College Header */}
          <div className="flex items-start gap-8 animate-fade-in-delay">
            {/* Logo */}
            <div className="hidden md:block flex-shrink-0">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#1f2937] to-[#111827] border border-[#374151] flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-bold bg-gradient-to-br from-[#f3f4f6] to-[#9ca3af] bg-clip-text text-transparent">
                  IITH
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
                  🏆 NIRF #7 (Engineering 2025)
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  🌟 Fastest-Growing IIT
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#f3f4f6] via-[#e5e7eb] to-[#9ca3af] bg-clip-text text-transparent mb-4">
                Indian Institute of Technology Hyderabad
              </h1>

              <p className="text-[#9ca3af] text-lg leading-relaxed max-w-3xl mb-6">
                Established in 2008, IIT Hyderabad is one of the fastest-growing IITs in India, known for its 
                innovative curriculum, interdisciplinary research, and strong industry connections. It has rapidly 
                climbed the rankings to secure the 7th position in NIRF Engineering 2025, overtaking several older 
                IITs [citation:1][citation:6].
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.iith.ac.in/" 
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
              <div className="text-2xl font-bold text-[#4f46e5]">NIRF #7</div>
              <div className="text-xs text-[#9ca3af] mt-1">Engineering 2025 [citation:1]</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">2008</div>
              <div className="text-xs text-[#9ca3af] mt-1">Established</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">576+</div>
              <div className="text-xs text-[#9ca3af] mt-1">Acres Campus [citation:8]</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">1,100+</div>
              <div className="text-xs text-[#9ca3af] mt-1">Students [citation:2]</div>
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
                { label: "Location", value: "Hyderabad, Telangana", icon: "📍" },
                { label: "Established", value: "2008", icon: "📅" },
                { label: "Institute Type", value: "Government (IIT)", icon: "🏛️" },
                { label: "NIRF Rank 2025", value: "#7 (Engineering) [citation:1]", icon: "🏆" },
                { label: "Campus Area", value: "576+ Acres [citation:8]", icon: "🌳" },
                { label: "Total Students", value: "~1,100+ [citation:2]", icon: "👥" },
                { label: "Departments", value: "14+", icon: "🏢" },
                { label: "International Offers 2025", value: "53 [citation:2]", icon: "🌍" }
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
                About IIT Hyderabad
              </h2>
              <div className="space-y-4 text-[#d1d5db] leading-relaxed">
                <p>
                  Indian Institute of Technology Hyderabad (IIT Hyderabad) is one of the second-generation IITs established in 2008. It has rapidly emerged as a premier institution known for its innovative academic structure, interdisciplinary approach, and cutting-edge research [citation:8].
                </p>
                <p>
                  Located in Kandi, Sangareddy district, the campus spans over 576 acres and features state-of-the-art infrastructure, including academic blocks designed with Japanese collaboration, hostels with radiant cooling technology, and world-class research facilities [citation:4][citation:8][citation:9].
                </p>
                <p>
                  IIT Hyderabad has achieved remarkable growth in rankings, securing the 7th position in NIRF Engineering 2025, overtaking several older IITs. The institute is known for its strong placement record, with the highest domestic package of ₹2.5 crore in 2025-26 and 53 international offers [citation:1][citation:2].
                </p>
              </div>
            </div>

            {/* Vision & Achievements */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  Vision
                </h3>
                <p className="text-[#d1d5db] leading-relaxed">
                  To be a global leader in technology education and research, fostering innovation, entrepreneurship, and interdisciplinary collaboration to address societal challenges.
                </p>
              </div>
              <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  Notable Achievements
                </h3>
                <ul className="space-y-2 text-sm text-[#d1d5db]">
                  <li className="flex items-start gap-2">• <span className="text-[#4f46e5]">NIRF #7</span> Engineering 2025, overtaking older IITs [citation:1]</li>
                  <li className="flex items-start gap-2">• <span className="text-[#4f46e5]">₹2.5 Cr</span> highest domestic package 2025-26 [citation:2]</li>
                  <li className="flex items-start gap-2">• <span className="text-[#4f46e5]">53 international offers</span> in Phase I 2025 [citation:2]</li>
                  <li className="flex items-start gap-2">• <span className="text-[#4f46e5]">₹60 Cr</span> DST-SATHI grant for microscopy centre [citation:5]</li>
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
                Academic Structure
              </h2>
              <p className="text-[#d1d5db] mb-6">
                IIT Hyderabad offers a wide range of undergraduate, postgraduate, and doctoral programs across engineering, design, sciences, humanities, and management [citation:8].
              </p>
            </div>

            {/* B.Tech Programs */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📋</span>
                B.Tech Programs
              </h2>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  "Artificial Intelligence",
                  "Biotechnology and Bioinformatics",
                  "Chemical Engineering",
                  "Civil Engineering",
                  "Computer Science and Engineering",
                  "Computational Engineering",
                  "Electrical Engineering",
                  "Engineering Physics",
                  "Mechanical Engineering",
                  "Materials Science and Metallurgical Engineering"
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
                B.Des Program [citation:8]
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Bachelor of Design (4 Years)"
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

            {/* Departments */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏢</span>
                Academic Departments
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "Biotechnology",
                  "Chemical Engineering",
                  "Chemistry",
                  "Civil Engineering",
                  "Climate Change",
                  "Computer Science & Engineering",
                  "Design",
                  "Electrical Engineering",
                  "Humanities & Social Sciences",
                  "Liberal Arts",
                  "Management Studies",
                  "Materials Science & Metallurgical Engg.",
                  "Mathematics",
                  "Mechanical & Aerospace Engineering",
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

            {/* Other Programs */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📚</span>
                Postgraduate & Doctoral Programs
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { name: "M.Tech", duration: "2 years" },
                  { name: "M.Des", duration: "2 years" },
                  { name: "M.Sc", duration: "2 years" },
                  { name: "M.A.", duration: "2 years" },
                  { name: "MBA", duration: "2 years [citation:8]" },
                  { name: "M.Sc + Ph.D.", duration: "Integrated" },
                  { name: "Ph.D.", duration: "3-5 years [citation:8]" },
                  { name: "Executive M.Tech", duration: "Part-time [citation:8]" }
                ].map((program, index) => (
                  <div key={index} className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                    <div className="font-semibold text-[#f3f4f6]">{program.name}</div>
                    <div className="text-xs text-[#9ca3af] mt-1">{program.duration}</div>
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
                Admission Process 2025
              </h2>
              
              <div className="space-y-6">
                {/* B.Tech / B.Des Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">B.Tech / B.Des Admissions [citation:8]</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">1</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">Minimum 75% in 10+2 with PCM</div>
                        <div className="text-sm text-[#9ca3af]">Eligibility criteria for undergraduate programs. B.Des accepts UCEED scores.</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">2</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">JEE Advanced / UCEED</div>
                        <div className="text-sm text-[#9ca3af]">B.Tech through JEE Advanced; B.Des through UCEED [citation:8]</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">3</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">JoSAA Counselling</div>
                        <div className="text-sm text-[#9ca3af]">Participate in JoSAA for seat allotment [citation:8]</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* M.Tech Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">M.Tech Admissions [citation:8]</h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db]">Valid GATE score with minimum 60% marks in bachelor's degree, followed by COAP counselling.</p>
                  </div>
                </div>

                {/* MBA Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">MBA Admissions [citation:8]</h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db]">Valid CAT score with selection based on academic record, work experience, and personal interview.</p>
                  </div>
                </div>

                {/* M.Sc Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">M.Sc Admissions [citation:8]</h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db]">Valid IIT JAM score followed by JAM counselling.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fees Structure */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">💰</span>
                Fee Structure 2025 (Approx.) [citation:3][citation:8]
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">B.Tech / B.Des</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">1st Year Fees (Gen/OBC)</span>
                      <span className="text-[#f3f4f6] font-semibold">₹1,66,858 [citation:8]</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">1st Year Fees (SC/ST)</span>
                      <span className="text-[#f3f4f6] font-semibold">₹66,858 [citation:8]</span>
                    </div>
                    <div className="border-t border-[#374151] pt-2 mt-2 flex justify-between">
                      <span className="text-[#f3f4f6] font-semibold">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold">₹8,00,000 [citation:3]</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">M.Tech</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Per Semester (Gen)</span>
                      <span className="text-[#f3f4f6] font-semibold">₹83,408 [citation:8]</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Per Semester (SC/ST)</span>
                      <span className="text-[#f3f4f6] font-semibold">₹71,408 [citation:8]</span>
                    </div>
                    <div className="border-t border-[#374151] pt-2 mt-2 flex justify-between">
                      <span className="text-[#f3f4f6] font-semibold">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold">₹5,72,000 [citation:3]</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">MBA</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold">₹6,00,000 [citation:8]</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">M.Sc / MA</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold">₹24,000 [citation:3]</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                <h3 className="font-semibold text-lg mb-2">Hostel Fees (Per Semester) [citation:8]</h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#9ca3af]">Basic Hostel Charges</span>
                    <span className="text-[#f3f4f6]">₹16,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9ca3af]">Mess Charges (Approx.)</span>
                    <span className="text-[#f3f4f6]">₹15,470</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9ca3af]">Refundable Deposit</span>
                    <span className="text-[#f3f4f6]">₹6,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scholarships */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🎓</span>
                Scholarships & Financial Aid [citation:8]
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: "Merit-cum-Means (MCM)", benefit: "Full tuition + ₹1,000/month (family income < ₹8L)" },
                  { name: "SC/ST Scholarships", benefit: "Tuition waiver + hostel rent waiver + ₹250/month" },
                  { name: "Institute Fellowships", benefit: "₹12,400/month for MTech, ₹31,000-35,000/month for PhD" },
                  { name: "External Scholarships", benefit: "AICTE Pragati (girls), Saksham (disabilities)" }
                ].map((scholarship, index) => (
                  <div key={index} className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="font-semibold text-[#f3f4f6] mb-1">{scholarship.name}</div>
                    <div className="text-sm text-[#9ca3af]">{scholarship.benefit}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* JEE Advanced Cutoff */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📊</span>
                JEE Advanced Cutoff (Approx.) [citation:8]
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { program: "Computer Science and Artificial Intelligence", rank: "650-850" },
                  { program: "Computer Science and Engineering", rank: "1000-1200" },
                  { program: "Electrical Engineering", rank: "2000-2500" },
                  { program: "Mechanical Engineering", rank: "3000-3500" }
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
                Placement Highlights 2025-26 (Phase I) [citation:2]
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {[
                  { label: "Highest Domestic Package", value: "₹2.50 Cr", icon: "🎯" },
                  { label: "Second Highest", value: "₹1.58 Cr", icon: "📊" },
                  { label: "Average CTC", value: "₹36.21 L", icon: "📈" },
                  { label: "International Offers", value: "53", icon: "🌍" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center hover:border-[#4f46e5]/50 transition-all duration-300">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-[#4f46e5] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Top Offers */}
              <div className="mb-8 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-[#9ca3af]">Top International Offer</div>
                    <div className="text-xl font-bold text-[#f3f4f6]">Optiver (Netherlands) [citation:2]</div>
                    <div className="text-lg text-[#4f46e5]">₹2.50 Cr</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#9ca3af]">Top Domestic Offer</div>
                    <div className="text-xl font-bold text-[#f3f4f6]">Databricks [citation:2]</div>
                    <div className="text-lg text-[#4f46e5]">₹1.58 Cr</div>
                  </div>
                </div>
              </div>

              {/* Placement Statistics */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Phase I Statistics [citation:2]</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                    <div className="text-2xl font-bold text-[#f3f4f6]">487</div>
                    <div className="text-xs text-[#9ca3af]">UG Students Registered</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                    <div className="text-2xl font-bold text-[#f3f4f6]">62%</div>
                    <div className="text-xs text-[#9ca3af]">Placed in Phase I</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                    <div className="text-2xl font-bold text-[#f3f4f6]">90-95%</div>
                    <div className="text-xs text-[#9ca3af]">Expected by Phase II</div>
                  </div>
                </div>
              </div>

              {/* Branch-wise Performance */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Branch-wise Placements [citation:2]</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#1f2937]/50">
                        <th className="p-3 text-left text-sm font-semibold text-[#f3f4f6]">Branch</th>
                        <th className="p-3 text-left text-sm font-semibold text-[#f3f4f6]">Placed/Registered</th>
                        <th className="p-3 text-left text-sm font-semibold text-[#f3f4f6]">Placement %</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { branch: "Computer Engineering", placed: "14/15", percentage: "93.3%" },
                        { branch: "Artificial Intelligence", placed: "25/30", percentage: "83.33%" },
                        { branch: "Computer Science and Engineering", placed: "49/59", percentage: "83.05%" }
                      ].map((item, index) => (
                        <tr key={index} className="border-b border-[#374151]">
                          <td className="p-3 text-sm text-[#d1d5db]">{item.branch}</td>
                          <td className="p-3 text-sm text-[#d1d5db]">{item.placed}</td>
                          <td className="p-3 text-sm text-[#4f46e5] font-semibold">{item.percentage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Top Recruiters 2025 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Top Recruiters 2025-26 [citation:2]</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    "Optiver", "Databricks", "Uber", "Oracle", "D E Shaw", 
                    "Accenture", "Microsoft", "Google", "Amazon", "Goldman Sachs",
                    "Qualcomm", "Intel", "Adobe", "Flipkart", "TSMC",
                    "Samsung", "Texas Instruments", "Cisco", "IBM", "Deloitte",
                    "JP Morgan", "American Express", "NVIDIA", "Airbus"
                  ].map((company, index) => (
                    <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300 text-center text-sm text-[#d1d5db]">
                      {company}
                    </div>
                  ))}
                </div>
              </div>

              {/* International Opportunities */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Global Opportunities [citation:2]</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="font-semibold text-[#f3f4f6] mb-2">International Offers</div>
                    <div className="text-2xl font-bold text-[#4f46e5] mb-2">53</div>
                    <div className="text-sm text-[#9ca3af]">Countries: Japan, Netherlands, USA, Europe</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="font-semibold text-[#f3f4f6] mb-2">International Internships</div>
                    <div className="text-2xl font-bold text-[#4f46e5] mb-2">15</div>
                    <div className="text-sm text-[#9ca3af]">Through global collaborations</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Placement History */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📊</span>
                Placement History [citation:7]
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                  <div className="text-sm text-[#9ca3af]">Year</div>
                  <div className="text-lg font-bold text-[#f3f4f6]">2023</div>
                  <div className="text-sm text-[#9ca3af]">Average Package</div>
                  <div className="text-xl font-bold text-[#4f46e5]">₹20.07 L</div>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                  <div className="text-sm text-[#9ca3af]">Year</div>
                  <div className="text-lg font-bold text-[#f3f4f6]">2022</div>
                  <div className="text-sm text-[#9ca3af]">Average Package</div>
                  <div className="text-xl font-bold text-[#4f46e5]">₹20.73 L</div>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                  <div className="text-sm text-[#9ca3af]">Year</div>
                  <div className="text-lg font-bold text-[#f3f4f6]">2021</div>
                  <div className="text-sm text-[#9ca3af]">Average Package</div>
                  <div className="text-xl font-bold text-[#4f46e5]">₹15.41 L</div>
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
                The IIT Hyderabad Campus
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-[#4f46e5] mb-2">576+ Acres [citation:8]</div>
                  <p className="text-[#9ca3af]">Located in Kandi, Sangareddy district, featuring lush green lawns, well-maintained gardens, and water bodies [citation:4].</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#4f46e5] mb-2">Japanese Design</div>
                  <p className="text-[#9ca3af]">Academic blocks designed with Japanese collaboration, spacious air-conditioned classrooms, and a large auditorium [citation:9].</p>
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
                  { name: "Library", desc: "20,000+ books, 10,000+ periodicals, internal repository", icon: "📚" },
                  { name: "Hostels", desc: "10 hostels with radiant cooling, single rooms for all students", icon: "🏠" },
                  { name: "Sports Complex", desc: "Swimming pool, cricket/football grounds, tennis/badminton courts", icon: "⚽" },
                  { name: "Medical Facility", desc: "24/7 clinic with Apollo partnership, Tesla diagnostics", icon: "🏥" },
                  { name: "Gymnasium", desc: "Well-equipped gym with physical trainer, separate mini-gym for girls", icon: "💪" },
                  { name: "IT Infrastructure", desc: "Wi-Fi campus, 1:2 PC-to-student ratio, 1Gbps backbone", icon: "💻" },
                  { name: "Cafeterias", desc: "Shiru Cafe (first outside Japan), multiple canteens", icon: "☕" },
                  { name: "Banking", desc: "SBI, Canara, ICICI, HDFC ATMs on campus", icon: "🏦" },
                  { name: "Convenience Store", desc: "Stationery shop, photocopying services", icon: "🛍️" }
                ].map((facility, index) => (
                  <div key={index} className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30 hover:border-[#4f46e5]/50 transition-all duration-300">
                    <div className="text-4xl mb-3">{facility.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-[#f3f4f6]">{facility.name}</h3>
                    <p className="text-sm text-[#9ca3af]">{facility.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hostels */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏘️</span>
                Hostels at IIT Hyderabad [citation:4][citation:9]
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#4f46e5]">Key Features</h3>
                  <ul className="space-y-2 text-sm text-[#9ca3af]">
                    <li className="flex items-start gap-2">• <span className="text-[#d1d5db]">Radiant cooling technology to beat summer heat</span></li>
                    <li className="flex items-start gap-2">• <span className="text-[#d1d5db]">Single rooms for all students</span></li>
                    <li className="flex items-start gap-2">• <span className="text-[#d1d5db]">24/7 internet connectivity</span></li>
                    <li className="flex items-start gap-2">• <span className="text-[#d1d5db]">Mess with home-style Indian food</span></li>
                    <li className="flex items-start gap-2">• <span className="text-[#d1d5db]">Indoor games, study rooms, recreation areas</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#4f46e5]">Hostel Names</h3>
                  <p className="text-sm text-[#d1d5db] mb-2">Named after Indian mathematicians and scientists:</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="p-2 bg-[#1f2937]/30 rounded text-[#9ca3af]">Srinivasa Ramanujan</div>
                    <div className="p-2 bg-[#1f2937]/30 rounded text-[#9ca3af]">Homi Bhabha</div>
                    <div className="p-2 bg-[#1f2937]/30 rounded text-[#9ca3af]">CV Raman</div>
                    <div className="p-2 bg-[#1f2937]/30 rounded text-[#9ca3af]">Vikram Sarabhai</div>
                  </div>
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
                      "AI Club"
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
                    name: "Elan & ηVision",
                    type: "Techno-Cultural Festival",
                    desc: "Annual techno-cultural extravaganza combining Elan (tech) and ηVision (cultural)",
                    icon: "🎭"
                  },
                  {
                    name: "Tarang",
                    type: "Tech Fest",
                    desc: "Technical festival showcasing innovation and research",
                    icon: "🔧"
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
                IIT Hyderabad is at the forefront of cutting-edge research with major government grants and industry collaborations. The institute focuses on interdisciplinary research spanning materials science, biotechnology, artificial intelligence, and sustainable technologies.
              </p>
            </div>

            {/* SATHI Centre of Excellence */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🔬</span>
                SATHI Centre for In-Situ and Correlative Microscopy [citation:5][citation:10]
              </h2>
              <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#4f46e5]/20 text-[#4f46e5] rounded-full text-xs font-semibold">DST-SATHI Scheme</span>
                  <span className="inline-block px-3 py-1 bg-[#1f2937] ml-2 rounded-full text-xs">₹60 Crore Grant</span>
                </div>
                <p className="text-[#d1d5db] mb-4">
                  IIT Hyderabad was awarded a ₹60 crore grant by the Department of Science and Technology (DST) under the Sophisticated Analytical & Technical Help Institutes (SATHI) scheme in 2023. It is one of three clusters selected nationwide [citation:5].
                </p>
                <h3 className="text-lg font-semibold mb-3 text-[#f3f4f6]">Centre Details:</h3>
                <ul className="space-y-2 text-sm text-[#9ca3af] mb-4">
                  <li className="flex items-start gap-2">• <span><span className="text-[#d1d5db]">Name:</span> Centre for In-Situ and Correlative Microscopy (SATHI-CISCoM)</span></li>
                  <li className="flex items-start gap-2">• <span><span className="text-[#d1d5db]">Lead:</span> Prof. B.S. Murty (Director) & Dr. Sai Rama Krishna Malladi (PI) [citation:5]</span></li>
                  <li className="flex items-start gap-2">• <span><span className="text-[#d1d5db]">Duration:</span> 2024-2028 [citation:10]</span></li>
                  <li className="flex items-start gap-2">• <span><span className="text-[#d1d5db]">Partner Support:</span> ₹20 crore from 17 academic, research, and industrial organizations [citation:5]</span></li>
                </ul>

                <h3 className="text-lg font-semibold mb-3 text-[#f3f4f6]">Partner Organizations [citation:5]</h3>
                <div className="grid md:grid-cols-3 gap-2 mb-4">
                  {[
                    "University of Hyderabad", "CCMB", "ARCI", "IICT Hyderabad",
                    "CBIT Hyderabad", "Sri Vishnu Educational Society", "VNIT Nagpur",
                    "NIT Raipur", "NIT Warangal", "TGCHE", "NIT Andhra Pradesh",
                    "LV Prasad Eye Institute", "Amara Raja Group", "Dr. Reddy's Labs",
                    "Bharat Biotech", "TATA Steel", "Veltech University"
                  ].map((partner, index) => (
                    <div key={index} className="p-2 bg-[#1f2937]/50 rounded text-xs text-[#d1d5db]">
                      {partner}
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-3 text-[#f3f4f6]">Equipment [citation:10]</h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {[
                    "Transmission Electron Microscope",
                    "3D-Atom Probe Tomography",
                    "High vacuum SPM with holders",
                    "AFM with TERS",
                    "Super resolution optical microscope",
                    "Micro-FTIR",
                    "Magneto Optic Kerr Effect Microscopy",
                    "Optical microscope with Rheometry",
                    "Specimen preparation tools",
                    "Ion mill, Vit-robot"
                  ].map((equipment, index) => (
                    <div key={index} className="p-2 bg-[#1f2937]/30 rounded text-xs text-[#9ca3af]">
                      {equipment}
                    </div>
                  ))}
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
                    area: "Materials Science",
                    desc: "In-situ microscopy, atom probe tomography, nanomaterials [citation:10]",
                    icon: "⚛️"
                  },
                  {
                    area: "Biotechnology",
                    desc: "Cellular biology, medical devices, pharmaceuticals [citation:5]",
                    icon: "🧬"
                  },
                  {
                    area: "Life Sciences",
                    desc: "Eye research, cancer biology, vaccine development [citation:5]",
                    icon: "🔬"
                  },
                  {
                    area: "Chemical Science",
                    desc: "Catalysis, polymers, drug discovery [citation:10]",
                    icon: "🧪"
                  },
                  {
                    area: "Artificial Intelligence",
                    desc: "AI for microscopy, computational techniques [citation:10]",
                    icon: "🤖"
                  },
                  {
                    area: "Energy & Sustainability",
                    desc: "Clean energy, battery research, sustainable materials",
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

            {/* Industry Collaboration */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🤝</span>
                Industry Collaboration
              </h2>
              <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                <p className="text-[#d1d5db] mb-4">
                  IIT Hyderabad has strong industry linkages, as evidenced by the SATHI consortium which includes major industrial partners like Dr. Reddy's Labs, Bharat Biotech, Amara Raja Group, and TATA Steel [citation:5].
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="text-center p-3 bg-[#1f2937]/50 rounded">
                    <div className="text-lg font-bold text-[#4f46e5]">17</div>
                    <div className="text-xs text-[#9ca3af]">Industry & Academic Partners</div>
                  </div>
                  <div className="text-center p-3 bg-[#1f2937]/50 rounded">
                    <div className="text-lg font-bold text-[#4f46e5]">₹20 Cr</div>
                    <div className="text-xs text-[#9ca3af]">Partner Contribution</div>
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
            <h2 className="text-3xl font-bold mb-4">Join India's Fastest-Growing IIT</h2>
            <p className="text-[#9ca3af] mb-8 max-w-2xl mx-auto">
              Experience world-class education, cutting-edge research, and exceptional placements at IIT Hyderabad, now ranked #7 in India.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://www.iith.ac.in/academics/admissions/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#4f46e5] border border-[#4f46e5] rounded-xl text-white font-medium hover:bg-[#6366f1] transition-all duration-300"
              >
                Admission Information
              </a>
              <a 
                href="https://www.iith.ac.in/" 
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