"use client";

import Link from "next/link";
import { useState } from "react";

export default function IITKharagpurPage() {
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
            <span className="text-[#f3f4f6] font-medium">IIT Kharagpur</span>
          </nav>

          {/* College Header */}
          <div className="flex items-start gap-8 animate-fade-in-delay">
            {/* Logo */}
            <div className="hidden md:block flex-shrink-0">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#1f2937] to-[#111827] border border-[#374151] flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-bold bg-gradient-to-br from-[#f3f4f6] to-[#9ca3af] bg-clip-text text-transparent">
                  IITKGP
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
                  🏆 India's 1st IIT
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  🌟 Largest IIT Campus
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#f3f4f6] via-[#e5e7eb] to-[#9ca3af] bg-clip-text text-transparent mb-4">
                Indian Institute of Technology Kharagpur
              </h1>

              <p className="text-[#9ca3af] text-lg leading-relaxed max-w-3xl mb-6">
                Established in 1951, IIT Kharagpur is the first Indian Institute of Technology, founded to serve as 
                the cradle of technical education in independent India. It is the largest IIT by campus size and 
                student enrollment, renowned for its rich heritage, academic diversity, and global impact [citation:4][citation:9].
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.iitkgp.ac.in/" 
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
              <div className="text-2xl font-bold text-[#4f46e5]">NIRF #6</div>
              <div className="text-xs text-[#9ca3af] mt-1">Overall Rank 2025 [citation:6]</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">1951</div>
              <div className="text-xs text-[#9ca3af] mt-1">Established [citation:4]</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">2,100</div>
              <div className="text-xs text-[#9ca3af] mt-1">Acres Campus [citation:9]</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">9,100+</div>
              <div className="text-xs text-[#9ca3af] mt-1">Students [citation:4]</div>
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
                { label: "Location", value: "Kharagpur, West Bengal", icon: "📍" },
                { label: "Established", value: "1951", icon: "📅" },
                { label: "Institute Type", value: "Government (IIT)", icon: "🏛️" },
                { label: "NIRF Rank 2025", value: "#6 (Overall) [citation:6]", icon: "🏆" },
                { label: "Architecture Rank", value: "#3 (NIRF 2025) [citation:1]", icon: "🏛️" },
                { label: "Departments", value: "19+ [citation:4]", icon: "🏢" },
                { label: "Faculty", value: "~700+", icon: "👨‍🏫" },
                { label: "Campus Area", value: "2,100 Acres [citation:9]", icon: "🌳" }
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
                About IIT Kharagpur
              </h2>
              <div className="space-y-4 text-[#d1d5db] leading-relaxed">
                <p>
                  The Indian Institute of Technology Kharagpur (IIT KGP) is the first IIT established in India, founded in 1951. It is recognized as an Institute of National Importance and is one of the most prestigious engineering institutions in the country [citation:4][citation:9].
                </p>
                <p>
                  Located 116 km west of Kolkata, the institute occupies a historic 2,100-acre campus, the largest among all IITs. It is fully residential and houses over 15,000 inhabitants, including students, faculty, and staff. The campus uniquely sits on the site of the former Hijli Detention Camp, where freedom fighters were once imprisoned, adding a profound historical significance [citation:4][citation:9].
                </p>
                <p>
                  IIT Kharagpur offers a wide range of undergraduate, postgraduate, and doctoral programs across engineering, science, design, management, and law. It is home to the Vinod Gupta School of Management (the first management school in the IIT system) and the Rajiv Gandhi School of Intellectual Property Law, showcasing its academic diversity [citation:9].
                </p>
                <p>
                  The institute's motto is "योग कर्मसु कौशलम्" (Yoga Karmasu Kaushalam), which translates to "Excellence in action is yoga," emphasizing dedication and skill in one's work [citation:4][citation:9].
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
                  To be a global leader in technology and science education, research, and innovation, fostering interdisciplinary learning and creating knowledge that serves humanity.
                </p>
              </div>
              <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  Mission
                </h3>
                <p className="text-[#d1d5db] leading-relaxed">
                  To provide world-class education, push the frontiers of research, and foster an environment of innovation and entrepreneurship while maintaining a deep commitment to society and national development.
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
              <div className="grid md:grid-cols-4 gap-6 mb-6">
                {[
                  { label: "Departments", value: "19+ [citation:4]", icon: "🏛️" },
                  { label: "Centres of Excellence", value: "20+", icon: "🎯" },
                  { label: "Schools", value: "4+", icon: "📚" },
                  { label: "Programs Offered", value: "100+", icon: "📋" }
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
                  "Aerospace Engineering",
                  "Agricultural and Food Engineering",
                  "Biotechnology and Biochemical Engineering",
                  "Chemical Engineering",
                  "Civil Engineering",
                  "Computer Science and Engineering",
                  "Electrical Engineering",
                  "Electronics and Electrical Comm. Engg.",
                  "Industrial and Systems Engineering",
                  "Instrumentation Engineering",
                  "Manufacturing Science and Engineering",
                  "Mechanical Engineering",
                  "Metallurgical and Materials Engineering",
                  "Mining Engineering",
                  "Ocean Engineering and Naval Architecture"
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

            {/* BS Programs */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🔬</span>
                BS & Integrated Programs [citation:3]
              </h2>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  "Applied Geology",
                  "Chemistry",
                  "Economics",
                  "Exploration Geophysics",
                  "Mathematics and Computing",
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

            {/* Other Programs */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏛️</span>
                Other Academic Offerings [citation:3][citation:8][citation:9]
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">B.Arch</h3>
                  <p className="text-sm text-[#9ca3af]">5-year program</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">LLB / LLM</h3>
                  <p className="text-sm text-[#9ca3af]">Rajiv Gandhi School of IP Law [citation:8]</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">MBA</h3>
                  <p className="text-sm text-[#9ca3af]">Vinod Gupta School of Management [citation:9]</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">EMBA</h3>
                  <p className="text-sm text-[#9ca3af]">3-year program</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">PGDBA</h3>
                  <p className="text-sm text-[#9ca3af]">Post Graduate Diploma in Business Analytics</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">M.Sc / PhD</h3>
                  <p className="text-sm text-[#9ca3af]">All departments</p>
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
                Admission Process [citation:3]
              </h2>
              
              <div className="space-y-6">
                {/* B.Tech Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">B.Tech / B.Arch / BS Admissions</h3>
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
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">M.Tech Admissions</h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db]">Valid GATE score with minimum 60% marks (6.5 CGPA) in bachelor's degree, followed by COAP counselling [citation:3].</p>
                  </div>
                </div>

                {/* MBA Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">MBA Admissions [citation:3]</h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db] mb-2">Valid CAT score, followed by Group Discussion and Personal Interview.</p>
                    <p className="text-sm text-[#9ca3af]">Eligibility: Bachelor's degree in Engineering/Technology/Architecture/Pharmacy/B.Sc Agri with minimum 60% marks, OR Master's degree in Sciences/Commerce/Economics with 60% marks.</p>
                  </div>
                </div>

                {/* M.Sc Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">M.Sc Admissions</h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db]">Valid IIT JAM score with minimum 55% aggregate marks in bachelor's degree [citation:3].</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fees Structure */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">💰</span>
                Fee Structure 2025 (Approx.) [citation:3]
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">B.Tech / B.Arch</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">1st Year Fees</span>
                      <span className="text-[#f3f4f6] font-semibold">₹2.2 Lakhs</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold">₹8 Lakhs</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">Dual Degree (B.Tech + M.Tech)</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold">₹10 Lakhs</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">M.Tech</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold">₹45,000</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">MBA</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold">₹10 Lakhs</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">M.Sc</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold">₹12,000</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">PGDBA</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold">₹20 Lakhs</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#9ca3af] mt-4">* Hostel and mess charges are additional. Application fees for Law programs: ₹3,000-4,000 (General), ₹1,500-2,000 (Reserved) [citation:8].</p>
            </div>

            {/* JEE Advanced Cutoff */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📊</span>
                JEE Advanced Cutoff 2024 (Closing Ranks) [citation:3]
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { program: "Computer Science and Engineering", rank: "415" },
                  { program: "Artificial Intelligence", rank: "898" },
                  { program: "Electronics and Electrical Comm. Engg.", rank: "1448" },
                  { program: "Electrical Engineering", rank: "2016" },
                  { program: "Mathematics and Computing", rank: "1329" },
                  { program: "Aerospace Engineering", rank: "4745" },
                  { program: "Mechanical Engineering", rank: "3613" },
                  { program: "Civil Engineering", rank: "6992" }
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
                Placement Highlights 2025-26 [citation:2][citation:7]
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {[
                  { label: "Highest Package", value: "₹2.44 Cr", icon: "🎯" },
                  { label: "Total Offers (Phase I)", value: "1,501", icon: "📊" },
                  { label: "Pre-Placement Offers", value: "457", icon: "📋" },
                  { label: "International Offers", value: "15+", icon: "🌍" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center hover:border-[#4f46e5]/50 transition-all duration-300">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-[#4f46e5] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Historic Achievement */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Historic Achievement</h3>
                <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                  <div className="text-3xl font-bold text-[#f3f4f6] mb-2">1,000+ Offers in a Single Day</div>
                  <p className="text-[#9ca3af]">IIT Kharagpur crossed 1,000 job offers on day two of Phase I placements at 8 AM [citation:2][citation:7]</p>
                </div>
              </div>

              {/* Top Recruiters */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Top Recruiters [citation:2][citation:7]</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    "Apple", "Tesla", "Google", "Microsoft", "Nvidia", 
                    "Airbus", "Boeing", "Mercedes", "Qualcomm", "Siemens",
                    "Amazon", "Walmart", "Goldman Sachs", "McKinsey", "Databricks",
                    "JP Morgan Chase", "Accenture", "American Express", "Samsung Korea",
                    "Texas Instruments", "ExxonMobil", "Caterpillar", "Schlumberger",
                    "L&T Finance", "Tata Group"
                  ].map((company, index) => (
                    <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300 text-center text-sm text-[#d1d5db]">
                      {company}
                    </div>
                  ))}
                </div>
              </div>

              {/* Placement Details */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Placement Details</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="font-semibold text-[#f3f4f6] mb-1">Phase I Period</div>
                    <div className="text-sm text-[#9ca3af]">December 1, 2025 - January 3, 2026 [citation:2]</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="font-semibold text-[#f3f4f6] mb-1">Phase II Start</div>
                    <div className="text-sm text-[#9ca3af]">January 16, 2026 [citation:2]</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="font-semibold text-[#f3f4f6] mb-1">Recruitment Sectors</div>
                    <div className="text-sm text-[#9ca3af]">Technology, Core Engineering, Finance, Consulting, Analytics, Manufacturing [citation:2]</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="font-semibold text-[#f3f4f6] mb-1">Professor's Remarks</div>
                    <div className="text-sm text-[#9ca3af]">"Exceptional outcomes underscore strength of collaborative model despite challenging job market" - Prof. Sanjay Gupta, CDC Chairperson [citation:7]</div>
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
                The IIT Kharagpur Campus [citation:4][citation:9]
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="col-span-2">
                  <div className="text-4xl font-bold text-[#4f46e5] mb-2">2,100 Acres</div>
                  <p className="text-[#9ca3af]">Largest IIT campus, located 116 km west of Kolkata. A self-contained township with over 15,000 inhabitants [citation:4][citation:9].</p>
                </div>
                <div className="bg-[#1f2937]/30 p-4 rounded-lg border border-[#374151]">
                  <div className="font-semibold text-[#f3f4f6] mb-2">Historical Significance</div>
                  <p className="text-xs text-[#9ca3af]">Built on the site of the Hijli Detention Camp, where freedom fighters were once imprisoned [citation:4][citation:9].</p>
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
                  { name: "Central Library", desc: "Largest technical library in Asia with 350,000+ books, 1,600+ journals", icon: "📚" },
                  { name: "Sports Complex", desc: "Extensive facilities for cricket, football, athletics, swimming, and more", icon: "⚽" },
                  { name: "Hostels", desc: "Fully residential campus with halls of residence", icon: "🏠" },
                  { name: "Hospital", desc: "Medical facility serving students and local community", icon: "🏥" },
                  { name: "Banking & Post Office", desc: "Nationalized banks, railway reservation counter on campus", icon: "🏦" },
                  { name: "Shopping Complex", desc: "Markets, restaurants, and convenience stores", icon: "🛍️" }
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
                      "Dramatics Society",
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
                Major Annual Events [citation:9]
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Kshitij",
                    type: "Techno-Management Festival",
                    desc: "Asia's largest techno-management festival with ₹50 lakh+ budget",
                    icon: "🔧"
                  },
                  {
                    name: "Spring Fest",
                    type: "Cultural Festival",
                    desc: "One of India's largest college cultural festivals",
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

            {/* Community Integration */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🤝</span>
                Community Engagement [citation:9]
              </h2>
              <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                <p className="text-[#d1d5db]">IIT Kharagpur maintains an open campus policy, allowing local community access to amenities like the hospital, banks, and markets. The Rural Development Council (RDC) coordinates community service activities and develops customized technologies for local communities.</p>
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
                IIT Kharagpur is a leader in research and innovation, with a dedicated Sponsored Research and Industrial Consultancy (SRIC) cell handling numerous projects and industrial assignments. Research projects are a major source of revenue for the institute [citation:9].
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: "Research Centres", value: "20+", icon: "🏢" },
                  { label: "Departments", value: "19", icon: "🔬" },
                  { label: "SRIC Cell", value: "Active", icon: "🤝" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-[#4f46e5] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Collaborations */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🤝</span>
                Recent Collaborations
              </h2>
              
              <div className="space-y-4">
                {/* Swansea University MoU */}
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="text-lg font-semibold text-[#f3f4f6] mb-2">Swansea University, Wales [citation:5]</h3>
                  <p className="text-sm text-[#9ca3af] mb-3">MoU signed for research partnerships in advanced manufacturing and materials engineering. Includes knowledge transfer in AI-driven manufacturing, joint industry-funded projects, and student exchange programs.</p>
                  <p className="text-xs text-[#4f46e5]">Collaboration facilitated by Tata Steel UK | Signed: June 2025</p>
                </div>

                {/* Medical Sciences Collaboration */}
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="text-lg font-semibold text-[#f3f4f6] mb-2">MSc in Nuclear Medicine & Medical Physics [citation:10]</h3>
                  <p className="text-sm text-[#9ca3af] mb-3">Tripartite MoU with Variable Energy Cyclotron Centre (VECC) and Chittaranjan National Cancer Institute (CNCI) to launch MSc programs in nuclear medicine and medical physics. Starting academic session 2026-27 through IIT JAM.</p>
                  <p className="text-xs text-[#4f46e5]">Signed: January 2026 | Partners: VECC, CNCI (all Institutes of National Importance)</p>
                </div>
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
                    area: "Advanced Manufacturing",
                    desc: "AI-driven manufacturing, smart materials, Industry 4.0 [citation:5]",
                    icon: "⚙️"
                  },
                  {
                    area: "Medical Science & Technology",
                    desc: "Nuclear medicine, medical physics, cancer research [citation:10]",
                    icon: "🏥"
                  },
                  {
                    area: "Materials Engineering",
                    desc: "Advanced materials, metallurgy, nanomaterials",
                    icon: "🧪"
                  },
                  {
                    area: "Artificial Intelligence",
                    desc: "AI applications in manufacturing, healthcare, and core engineering",
                    icon: "🤖"
                  },
                  {
                    area: "Energy & Sustainability",
                    desc: "Renewable energy, sustainable engineering",
                    icon: "⚡"
                  },
                  {
                    area: "Rural Technology",
                    desc: "Customized technologies for local communities through RDC [citation:9]",
                    icon: "🌱"
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

            {/* Sponsored Research */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">💰</span>
                Sponsored Research & Industrial Consultancy [citation:9]
              </h2>
              <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                <p className="text-[#d1d5db] mb-3">IIT Kharagpur has a dedicated SRIC cell to handle research projects and industrial assignments. Research projects serve as a major revenue source for the institute.</p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-[#4f46e5]">Industry-Funded Projects</div>
                    <div className="text-sm text-[#9ca3af]">Active collaborations with Tata Steel, Siemens, and more</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-[#4f46e5]">Consultancy Services</div>
                    <div className="text-sm text-[#9ca3af]">Technical consultancy to industries and government</div>
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
            <h2 className="text-3xl font-bold mb-4">Begin Your Legacy at India's First IIT</h2>
            <p className="text-[#9ca3af] mb-8 max-w-2xl mx-auto">
              Join the institution that started it all. IIT Kharagpur offers a unique blend of heritage, academic diversity, and global research impact.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://www.iitkgp.ac.in/admissions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#4f46e5] border border-[#4f46e5] rounded-xl text-white font-medium hover:bg-[#6366f1] transition-all duration-300"
              >
                Admission Information
              </a>
              <a 
                href="https://www.iitkgp.ac.in/" 
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