"use client";

import Link from "next/link";
import { useState } from "react";

export default function IITDelhiPage() {
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
            <span className="text-[#f3f4f6] font-medium">IIT Delhi</span>
          </nav>

          {/* College Header */}
          <div className="flex items-start gap-8 animate-fade-in-delay">
            {/* Logo */}
            <div className="hidden md:block flex-shrink-0">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#1f2937] to-[#111827] border border-[#374151] flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-bold bg-gradient-to-br from-[#f3f4f6] to-[#9ca3af] bg-clip-text text-transparent">
                  IIT
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
                  🏆 Top Ranked
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  🌟 Premium Institute
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#f3f4f6] via-[#e5e7eb] to-[#9ca3af] bg-clip-text text-transparent mb-4">
                Indian Institute of Technology Delhi
              </h1>

              <p className="text-[#9ca3af] text-lg leading-relaxed max-w-3xl mb-6">
                One of India's premier government engineering institutions, renowned for academic excellence, 
                research innovation, and strong global reputation. IIT Delhi consistently ranks among the top 
                engineering colleges in India and Asia.
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://home.iitd.ac.in/" 
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
              <div className="text-2xl font-bold text-[#4f46e5]">NIRF #2</div>
              <div className="text-xs text-[#9ca3af] mt-1">Engineering Rank</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">1961</div>
              <div className="text-xs text-[#9ca3af] mt-1">Established</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">₹45L+</div>
              <div className="text-xs text-[#9ca3af] mt-1">Avg Package</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">320 Acres</div>
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
                { label: "Location", value: "New Delhi, India", icon: "📍" },
                { label: "Established", value: "1961", icon: "📅" },
                { label: "Institute Type", value: "Government (IIT)", icon: "🏛️" },
                { label: "NIRF Rank 2024", value: "#2 (Engineering)", icon: "🏆" },
                { label: "Accreditation", value: "NAAC A++, NBA", icon: "✓" },
                { label: "Total Students", value: "~11,000+", icon: "👥" },
                { label: "Faculty", value: "600+ Professors", icon: "👨‍🏫" },
                { label: "Campus Area", value: "320 Acres", icon: "🌳" }
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
                About IIT Delhi
              </h2>
              <div className="space-y-4 text-[#d1d5db] leading-relaxed">
                <p>
                  The Indian Institute of Technology Delhi (IIT Delhi) is one of the 23 IITs created to be Centres of Excellence for training, research and development in science, engineering and technology in India. Established in 1961, IIT Delhi has been a major force in the Indian education system, producing world-class engineers and scientists.
                </p>
                <p>
                  Located in Hauz Khas, South Delhi, the institute offers undergraduate, postgraduate, and doctoral programs across various engineering, science, and interdisciplinary domains. With a sprawling 320-acre campus, state-of-the-art facilities, and a vibrant student community, IIT Delhi provides an ideal environment for academic and personal growth.
                </p>
                <p>
                  The institute is known for its strong industry connections, excellent placement records, vibrant startup ecosystem, and cutting-edge research initiatives. IIT Delhi alumni have made significant contributions globally in academia, industry, entrepreneurship, and public service.
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
                  To be a global leader in knowledge creation and dissemination, and to serve as a valuable resource for industry and society through excellence in education, research, innovation, and entrepreneurship.
                </p>
              </div>
              <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  Mission
                </h3>
                <p className="text-[#d1d5db] leading-relaxed">
                  To generate new knowledge by engaging in cutting-edge research and to promote academic growth by offering state-of-the-art undergraduate, postgraduate and doctoral programs while nurturing innovation and entrepreneurship.
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
                    "Biotechnology and Biochemical Engineering",
                    "Chemical Engineering",
                    "Civil Engineering",
                    "Computer Science and Engineering",
                    "Electrical Engineering",
                    "Engineering Physics",
                    "Materials Engineering",
                    "Mathematics and Computing",
                    "Mechanical Engineering",
                    "Production and Industrial Engineering",
                    "Textile Technology",
                    "Energy Engineering"
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
                    "Mathematics and Computing",
                    "Engineering and Computational Mechanics"
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
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#4f46e5]">M.Tech Programs</h3>
                  <p className="text-sm text-[#9ca3af]">40+ specializations across all engineering departments</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#4f46e5]">M.Sc Programs</h3>
                  <p className="text-sm text-[#9ca3af]">Physics, Chemistry, Mathematics, Economics & more</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#4f46e5]">Ph.D Programs</h3>
                  <p className="text-sm text-[#9ca3af]">Research programs in all departments and interdisciplinary areas</p>
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
                  "Applied Mechanics",
                  "Biochemical Engg. & Biotechnology",
                  "Chemical Engineering",
                  "Chemistry",
                  "Civil Engineering",
                  "Computer Science & Engineering",
                  "Electrical Engineering",
                  "Humanities & Social Sciences",
                  "Management Studies",
                  "Mathematics",
                  "Mechanical Engineering",
                  "Physics",
                  "Textile & Fibre Engineering",
                  "Energy Science & Engineering",
                  "Design",
                  "Public Policy",
                  "Biological Sciences",
                  "Materials Science & Engineering"
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
                        <div className="text-sm text-[#9ca3af]">Qualify JEE Main to become eligible for JEE Advanced. Top 2.5 lakh candidates (approx) from JEE Main qualify.</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">2</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">Clear JEE Advanced</div>
                        <div className="text-sm text-[#9ca3af]">Score competitive rank in JEE Advanced exam conducted by IITs. Paper 1 & Paper 2 are compulsory.</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">3</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">JoSAA Counselling</div>
                        <div className="text-sm text-[#9ca3af]">Participate in Joint Seat Allocation Authority (JoSAA) counselling for seat allotment based on rank and preference.</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">4</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">Document Verification & Admission</div>
                        <div className="text-sm text-[#9ca3af]">Complete document verification and fee payment to confirm admission.</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* M.Tech Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">M.Tech Admissions (GATE)</h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db] mb-3">Admission through GATE (Graduate Aptitude Test in Engineering) score followed by COAP (Common Offer Acceptance Portal) counselling.</p>
                    <ul className="space-y-2 text-sm text-[#9ca3af]">
                      <li className="flex items-center gap-2">
                        <span className="text-[#4f46e5]">✓</span>
                        Valid GATE score in relevant discipline
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#4f46e5]">✓</span>
                        Minimum qualifying marks as per category
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#4f46e5]">✓</span>
                        Online application and counselling process
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Ph.D Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Ph.D Admissions</h3>
                  <div className="p-6 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <p className="text-[#d1d5db] mb-3">Admission through GATE/NET scores or written test followed by interview.</p>
                    <ul className="space-y-2 text-sm text-[#9ca3af]">
                      <li className="flex items-center gap-2">
                        <span className="text-[#4f46e5]">✓</span>
                        GATE/NET qualified candidates get direct interview
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#4f46e5]">✓</span>
                        Others need to clear written test
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#4f46e5]">✓</span>
                        Research proposal and interview evaluation
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
                      <span className="text-[#f3f4f6] font-semibold">₹1,25,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">One-time fees</span>
                      <span className="text-[#f3f4f6] font-semibold">₹7,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Hostel (per semester)</span>
                      <span className="text-[#f3f4f6] font-semibold">₹8,000 - ₹10,000</span>
                    </div>
                    <div className="border-t border-[#374151] pt-2 mt-2 flex justify-between">
                      <span className="text-[#f3f4f6] font-semibold">Total (1st year approx.)</span>
                      <span className="text-[#4f46e5] font-bold text-lg">₹2,77,000</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">M.Tech</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Tuition Fee (per semester)</span>
                      <span className="text-[#f3f4f6] font-semibold">₹50,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">One-time fees</span>
                      <span className="text-[#f3f4f6] font-semibold">₹5,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Hostel (per semester)</span>
                      <span className="text-[#f3f4f6] font-semibold">₹8,000 - ₹10,000</span>
                    </div>
                    <div className="border-t border-[#374151] pt-2 mt-2 flex justify-between">
                      <span className="text-[#f3f4f6] font-semibold">Total (1st year approx.)</span>
                      <span className="text-[#4f46e5] font-bold text-lg">₹1,26,000</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#9ca3af] mt-4">* Mess charges, books, and other miscellaneous expenses are additional. Financial assistance available for economically weaker sections.</p>
            </div>

            {/* Important Dates */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📅</span>
                Important Dates (Tentative)
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { event: "JEE Advanced Registration", date: "May 2024" },
                  { event: "JEE Advanced Exam", date: "May 2024" },
                  { event: "JEE Advanced Results", date: "June 2024" },
                  { event: "JoSAA Counselling", date: "June-July 2024" },
                  { event: "GATE Exam", date: "February 2024" },
                  { event: "M.Tech Admissions", date: "March-May 2024" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <span className="text-[#d1d5db]">{item.event}</span>
                    <span className="text-[#4f46e5] font-semibold text-sm">{item.date}</span>
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
                  { label: "Highest Package", value: "₹2.05 Cr", icon: "🎯" },
                  { label: "Average Package", value: "₹45.8 L", icon: "📊" },
                  { label: "Median Package", value: "₹32 L", icon: "📈" },
                  { label: "Placement Rate", value: "95%+", icon: "✓" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center hover:border-[#4f46e5]/50 transition-all duration-300">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-[#4f46e5] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Top Recruiters */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Top Recruiters</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    "Google", "Microsoft", "Amazon", "Apple", "Meta",
                    "Goldman Sachs", "Morgan Stanley", "JP Morgan", "Uber",
                    "Samsung", "Intel", "Qualcomm", "Texas Instruments",
                    "McKinsey", "BCG", "Bain & Company", "Deloitte",
                    "American Express", "Visa", "MasterCard", "Flipkart",
                    "Adobe", "Salesforce", "Oracle"
                  ].map((company, index) => (
                    <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300 text-center text-sm text-[#d1d5db]">
                      {company}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sector-wise Placement */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Sector-wise Distribution</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { sector: "Software & IT", percentage: "45%" },
                    { sector: "Consulting", percentage: "20%" },
                    { sector: "Core Engineering", percentage: "15%" },
                    { sector: "Finance & Banking", percentage: "12%" },
                    { sector: "Analytics & Data Science", percentage: "8%" }
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
                    title: "Training Programs",
                    description: "Soft skills, technical training, mock interviews, and aptitude preparation",
                    icon: "📚"
                  },
                  {
                    title: "Internship Support",
                    description: "Summer internships with top companies and research institutions globally",
                    icon: "🌍"
                  },
                  {
                    title: "Entrepreneurship",
                    description: "Strong startup ecosystem with funding support and mentorship programs",
                    icon: "💡"
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
            {/* Campus Facilities */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏛️</span>
                Campus Facilities
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: "Central Library", desc: "4 lakh+ books, 2000+ journals, 24/7 access", icon: "📚" },
                  { name: "Sports Complex", desc: "Olympic-size pool, cricket, football, tennis courts", icon: "⚽" },
                  { name: "Hostels", desc: "14 hostels with modern amenities and mess facilities", icon: "🏠" },
                  { name: "Hospital", desc: "24/7 medical facility with emergency services", icon: "🏥" },
                  { name: "Auditoriums", desc: "State-of-the-art auditoriums for events and lectures", icon: "🎭" },
                  { name: "Research Labs", desc: "Advanced labs for cutting-edge research", icon: "🔬" },
                  { name: "Computing Center", desc: "High-performance computing facilities", icon: "💻" },
                  { name: "Shopping Complex", desc: "Banks, shops, cafeterias within campus", icon: "🛍️" },
                  { name: "Recreation", desc: "Gyms, music rooms, hobby clubs", icon: "🎵" }
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
                Student Activities & Clubs
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
                      "Data Science Club",
                      "AI/ML Society",
                      "Aeromodelling Club"
                    ].map((club, index) => (
                      <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-sm text-[#d1d5db]">
                        {club}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cultural Clubs */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Cultural & Arts</h3>
                  <div className="grid md:grid-cols-3 gap-3">
                    {[
                      "Dance Society",
                      "Music Society",
                      "Drama Club",
                      "Photography Club",
                      "Fine Arts Club",
                      "Literary Society"
                    ].map((club, index) => (
                      <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-sm text-[#d1d5db]">
                        {club}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sports Teams */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Sports Teams</h3>
                  <div className="grid md:grid-cols-3 gap-3">
                    {[
                      "Cricket Team",
                      "Football Team",
                      "Basketball Team",
                      "Volleyball Team",
                      "Tennis Team",
                      "Athletics Team"
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
                    name: "Rendezvous",
                    type: "Cultural Festival",
                    desc: "Annual cultural fest with performances, competitions, and celebrity nights",
                    icon: "🎭"
                  },
                  {
                    name: "Tryst",
                    type: "Technical Festival",
                    desc: "Asia's largest technical fest with competitions, workshops, and talks",
                    icon: "🔧"
                  },
                  {
                    name: "Antardhvani",
                    type: "Music Festival",
                    desc: "Inter-hostel music competition showcasing talent",
                    icon: "🎵"
                  },
                  {
                    name: "Literati",
                    type: "Literary Festival",
                    desc: "Literature, debates, quizzing, and creative writing events",
                    icon: "📖"
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
                IIT Delhi is at the forefront of research and innovation in India. The institute has established numerous Centers of Excellence and research groups focusing on cutting-edge areas of technology and science.
              </p>
              
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { label: "Research Publications", value: "3000+/year", icon: "📄" },
                  { label: "Patents Filed", value: "500+", icon: "⚖️" },
                  { label: "Research Centers", value: "40+", icon: "🏢" },
                  { label: "Industry Projects", value: "200+", icon: "🤝" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-[#4f46e5] mb-1">{stat.value}</div>
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
                  "Centre for Automotive Research and Tribology (CART)",
                  "Bharti School of Telecom Technology and Management",
                  "Centre for Applied Research in Electronics (CARE)",
                  "Centre for Biomedical Engineering (CBME)",
                  "Centre for Energy Studies (CES)",
                  "Kusuma School of Biological Sciences",
                  "Centre for Atmospheric Sciences (CAS)",
                  "Nanoscale Research Facility (NRF)",
                  "Advanced Manufacturing Research Centre",
                  "Artificial Intelligence and Machine Learning Centre",
                  "Centre for Rural Development and Technology",
                  "Water Resources Development and Management"
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
                    area: "Artificial Intelligence & Machine Learning",
                    desc: "Deep learning, computer vision, NLP, robotics",
                    icon: "🤖"
                  },
                  {
                    area: "Renewable Energy",
                    desc: "Solar energy, energy storage, smart grids",
                    icon: "⚡"
                  },
                  {
                    area: "Nanotechnology",
                    desc: "Nanomaterials, nanoelectronics, nanomedicine",
                    icon: "🔬"
                  },
                  {
                    area: "Biotechnology",
                    desc: "Genetic engineering, biomedical devices, biofuels",
                    icon: "🧬"
                  },
                  {
                    area: "Quantum Computing",
                    desc: "Quantum algorithms, quantum cryptography",
                    icon: "⚛️"
                  },
                  {
                    area: "Smart Cities & IoT",
                    desc: "Urban planning, sensor networks, automation",
                    icon: "🌆"
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

            {/* Collaborations */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🤝</span>
                International Collaborations
              </h2>
              <p className="text-[#9ca3af] mb-6">
                IIT Delhi has partnerships with leading universities and research institutions worldwide for collaborative research, student exchange programs, and joint degree programs.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  "MIT, USA",
                  "Stanford University",
                  "UC Berkeley",
                  "Cambridge University",
                  "Oxford University",
                  "ETH Zurich",
                  "NUS Singapore",
                  "TU Munich",
                  "University of Tokyo",
                  "KAIST, South Korea",
                  "TU Delft",
                  "Imperial College London"
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
            <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-[#9ca3af] mb-8 max-w-2xl mx-auto">
              Start your journey at IIT Delhi, one of India's most prestigious engineering institutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://home.iitd.ac.in/admissions.php" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#4f46e5] border border-[#4f46e5] rounded-xl text-white font-medium hover:bg-[#6366f1] transition-all duration-300"
              >
                Admission Information
              </a>
              <a 
                href="https://home.iitd.ac.in/" 
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