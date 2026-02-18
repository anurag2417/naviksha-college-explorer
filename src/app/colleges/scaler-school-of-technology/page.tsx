"use client";

import Link from "next/link";
import { useState } from "react";

export default function ScalerSchoolPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: "📖" },
    { id: "academics", label: "Academics", icon: "🎓" },
    { id: "admissions", label: "Admissions", icon: "📝" },
    { id: "placements", label: "Placements", icon: "💼" },
    { id: "campus", label: "Campus Life", icon: "🏛️" },
    { id: "research", label: "Innovation", icon: "🔬" }
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
            <Link href="/colleges?stream=engineering&type=private" className="text-[#9ca3af] hover:text-[#f3f4f6] transition-colors">
              Private Colleges
            </Link>
            <span className="text-[#4b5563]">/</span>
            <span className="text-[#f3f4f6] font-medium">Scaler School of Technology</span>
          </nav>

          {/* College Header */}
          <div className="flex items-start gap-8 animate-fade-in-delay">
            {/* Logo */}
            <div className="hidden md:block flex-shrink-0">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#1f2937] to-[#111827] border border-[#374151] flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-bold bg-gradient-to-br from-[#f3f4f6] to-[#9ca3af] bg-clip-text text-transparent">
                  SST
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
                  🏆 India's First Ivy-League Style CS School
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  🌟 Founded 2023
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#f3f4f6] via-[#e5e7eb] to-[#9ca3af] bg-clip-text text-transparent mb-4">
                Scaler School of Technology
              </h1>

              <p className="text-[#9ca3af] text-lg leading-relaxed max-w-3xl mb-6">
                Founded in 2023, Scaler School of Technology (SST) is a first-of-its-kind, fully-residential undergraduate 
                institution in Bangalore offering a 4-year program in Computer Science and AI. Designed by industry experts 
                from Google, Meta, and Amazon, SST focuses on hands-on learning, a one-year compulsory internship, and 
                producing "production-ready" engineers [citation:4][citation:8].
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.scaler.com/school-of-technology/" 
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
              <div className="text-2xl font-bold text-[#4f46e5]">3.8%</div>
              <div className="text-xs text-[#9ca3af] mt-1">Selection Rate [citation:1]</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">2023</div>
              <div className="text-xs text-[#9ca3af] mt-1">Founded [citation:8]</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">₹1.7 Cr</div>
              <div className="text-xs text-[#9ca3af] mt-1">Highest Package [citation:1]</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">1,200+</div>
              <div className="text-xs text-[#9ca3af] mt-1">Hiring Partners [citation:1]</div>
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
                { label: "Location", value: "Electronic City, Bangalore", icon: "📍" },
                { label: "Program", value: "4-Year UG in CS & AI", icon: "💻" },
                { label: "Institute Type", value: "Private (Scaler)", icon: "🏛️" },
                { label: "Degree Partner", value: "BITS Pilani, Woolf", icon: "🎓" },
                { label: "Selection Rate", value: "3.8% (Ivy League Level)", icon: "🎯" },
                { label: "Total Students (2025)", value: "600+", icon: "👥" },
                { label: "Curriculum Designed By", value: "100+ Industry Experts", icon: "👨‍🏫" },
                { label: "Avg. Scaler Package", value: "₹21.6 LPA", icon: "📊" }
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
                About Scaler School of Technology
              </h2>
              <div className="space-y-4 text-[#d1d5db] leading-relaxed">
                <p>
                  Scaler School of Technology (SST) was founded in 2023 by Anshuman Singh (Co-founder of Scaler & former Tech Lead at Facebook Messenger) and the Scaler team to address the critical gap between traditional engineering education and the practical skills demanded by the tech industry [citation:8]. Inspired by the medical residency model where students learn by practicing under experts, SST offers a "new-age" engineering blueprint [citation:4].
                </p>
                <p>
                  Located in the heart of India's tech capital, Electronic City, Bangalore, SST is a fully residential campus designed to immerse students in a high-performance environment. The curriculum, built in collaboration with over 100 leaders from Google, Meta, Amazon, and Flipkart, focuses on real-world product development, ensuring students are "production-ready" by graduation [citation:1][citation:4].
                </p>
                <p>
                  SST's unique value proposition includes a mandatory one-year industry internship, mentorship from "Super Mentors" like Rajan Anandan (Peak XV) and Kunal Shah (CRED), and the opportunity to earn a B.Sc. in Computer Science from BITS Pilani, making it a compelling alternative to legacy institutions [citation:1][citation:8].
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
                  "To create builders, not just graduates." SST aims to produce graduates who are at the level of a Senior Software Engineer (SDE II) by the time they complete their four-year program, capable of building products and solving real-world engineering challenges from day one [citation:4][citation:8].
                </p>
              </div>
              <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">👨‍🏫</span>
                  Key Leadership
                </h3>
                <ul className="space-y-2 text-sm text-[#d1d5db]">
                  <li className="flex items-start gap-2">• <span><span className="text-[#4f46e5]">Anshuman Singh:</span> Co-founder & Dean, Ex-Tech Lead, Facebook Messenger [citation:6]</span></li>
                  <li className="flex items-start gap-2">• <span><span className="text-[#4f46e5]">Abhimanyu Saxena:</span> Co-founder of Scaler [citation:6]</span></li>
                  <li className="flex items-start gap-2">• <span><span className="text-[#4f46e5]">Yash Kumar:</span> Programme & Tech Lead at OpenAI, Mentor [citation:6]</span></li>
                  <li className="flex items-start gap-2">• <span><span className="text-[#4f46e5]">Naman Bhalla:</span> Instructor, Ex-Google [citation:8]</span></li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Academics Tab */}
        {activeTab === "academics" && (
          <div className="space-y-8 animate-fade-in">
            {/* 3-Phase Curriculum */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🔄</span>
                The Unique 3-Phase "2+1+1" Curriculum [citation:1][citation:8]
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30 hover:border-[#4f46e5]/50 transition-all duration-300">
                  <div className="text-3xl mb-2">📚</div>
                  <h3 className="text-xl font-semibold mb-2 text-[#4f46e5]">Phase 1: Learn</h3>
                  <div className="text-sm text-[#9ca3af] mb-2">Duration: 24 Months</div>
                  <p className="text-sm text-[#d1d5db]">Build a strong foundation in programming, DSA, system design, and full-stack development by building projects like web servers and e-commerce sites.</p>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30 hover:border-[#4f46e5]/50 transition-all duration-300">
                  <div className="text-3xl mb-2">💼</div>
                  <h3 className="text-xl font-semibold mb-2 text-[#4f46e5]">Phase 2: Experience</h3>
                  <div className="text-sm text-[#9ca3af] mb-2">Duration: 12 Months</div>
                  <p className="text-sm text-[#d1d5db]">A compulsory, year-long paid industry internship. Students get real-world experience, with guidance from mentors, leading to high stipends (up to ₹2L/month) [citation:5].</p>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30 hover:border-[#4f46e5]/50 transition-all duration-300">
                  <div className="text-3xl mb-2">🚀</div>
                  <h3 className="text-xl font-semibold mb-2 text-[#4f46e5]">Phase 3: Specialize</h3>
                  <div className="text-sm text-[#9ca3af] mb-2">Duration: 12 Months</div>
                  <p className="text-sm text-[#d1d5db]">Choose two specializations: Engineering Leadership, MAANG (DSA), Algo Trading, or AI/ML, to become a top 1% engineer [citation:1].</p>
                </div>
              </div>
            </div>

            {/* Degree Programs */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🎓</span>
                Accredited Degree Programs
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">Bachelor of Science (B.Sc.)</h3>
                  <p className="text-sm text-[#9ca3af]">In Computer Science, awarded by the prestigious <span className="text-[#f3f4f6]">Birla Institute of Technology and Science (BITS) Pilani</span>. UGC-recognized [citation:9].</p>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">Master of Science (M.Sc.)</h3>
                  <p className="text-sm text-[#9ca3af]">In Computer Science, awarded by <span className="text-[#f3f4f6]">Woolf University</span>. This European Credit Transfer System (ECTS) degree allows students to carry credits forward to UK universities [citation:1].</p>
                </div>
              </div>
              <p className="text-sm text-[#9ca3af] mt-4">Students can also pursue a BS in Data Science from IIT Madras concurrently [citation:2][citation:7].</p>
            </div>

            {/* Example Projects */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🛠️</span>
                Real-World Projects Students Build
              </h2>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  "Web server handling 100k+ concurrent requests",
                  "Online Excel sheet with 1M+ rows",
                  "E-commerce website with payment gateway",
                  "Implement HTTPS & RSA encryption",
                  "Speech-to-speech translation app",
                  "Gesture-controlled gaming interface",
                  "AI-powered skincare assistant (CareCanvas)",
                  "AI voice agent for B2B (Varia)"
                ].map((project, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#4f46e5]" />
                    <span className="text-[#d1d5db] text-sm">{project}</span>
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
                Admission Process 2025 [citation:3][citation:8]
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Selection Criteria (3.8% Acceptance Rate)</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">1</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">Scaler NSET (National Scholarship & Entrance Test)</div>
                        <div className="text-sm text-[#9ca3af]">A 2-hour online proctored exam focusing on mathematics, logic, and learning ability. No chemistry or biology. [citation:8]</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">2</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">Personal Interview</div>
                        <div className="text-sm text-[#9ca3af]">Shortlisted candidates face an interview to assess their profile, projects, extracurriculars, and overall potential [citation:8].</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">3</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">Class 12th Requirement</div>
                        <div className="text-sm text-[#9ca3af]">Minimum 60% aggregate with Mathematics. Candidates must be under 20 years of age as of July 1, 2025 [citation:7].</div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[#9ca3af]">The 2025 cycle saw a 240% surge in applications, with 600+ students selected from ~20,000 aspirants [citation:6].</p>
              </div>
            </div>

            {/* Fee Structure */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">💰</span>
                Fee Structure (4-Year Program)
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">Tuition Fee [citation:5][citation:7]</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Scaler Tuition</span>
                      <span className="text-[#f3f4f6] font-semibold">₹13.83 Lakhs</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">BITS Tuition</span>
                      <span className="text-[#f3f4f6] font-semibold">₹3.13 Lakhs</span>
                    </div>
                    <div className="border-t border-[#374151] pt-2 mt-2 flex justify-between">
                      <span className="text-[#f3f4f6] font-semibold">Total Tuition</span>
                      <span className="text-[#4f46e5] font-bold">₹16.96 Lakhs - ₹17 Lakhs</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">Hostel & Other Fees [citation:5]</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Hostel (Year 1)</span>
                      <span className="text-[#f3f4f6]">₹1.43 Lakhs</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Hostel (Year 2)</span>
                      <span className="text-[#f3f4f6]">₹1.63 Lakhs</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Hostel (Year 4)</span>
                      <span className="text-[#f3f4f6]">₹1.87 Lakhs</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">One-time Admission</span>
                      <span className="text-[#f3f4f6]">₹75,000 [citation:7]</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scholarships */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🎓</span>
                Scholarships (20% to 100% Tuition Fee) [citation:9]
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: "Brightest Minds Scholarship", benefit: "For top performers in JEE Main, CBSE, KVPY, NTSE." },
                  { name: "The Young Coding Enthusiast", benefit: "For demonstrated coding proficiency through competitions or projects." },
                  { name: "Women in Code Scholarship", benefit: "For exceptional female candidates with a passion for coding." },
                  { name: "Brighter Future Scholarship", benefit: "Need-based scholarship for families with annual income < ₹8 Lakhs." }
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
            {/* Placement Highlights */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">💼</span>
                Scaler Outcomes & SST Internships
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {[
                  { label: "Highest Salary (Scaler)", value: "₹1.7 Cr", icon: "🎯" },
                  { label: "Avg. Salary (Scaler)", value: "21.6 LPA", icon: "📊" },
                  { label: "Total Learners Placed", value: "4100+", icon: "👥" },
                  { label: "Career Partners", value: "1200+", icon: "🏢" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center hover:border-[#4f46e5]/50 transition-all duration-300">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-[#4f46e5] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Internship Stipends */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Student Internship Stipends (2025) [citation:5]</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="text-lg font-bold text-[#4f46e5]">₹2.5 Lakhs</div>
                    <div className="text-sm text-[#9ca3af]">Highest stipend (German company)</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="text-lg font-bold text-[#4f46e5]">₹2 Lakhs</div>
                    <div className="text-sm text-[#9ca3af]">Top stipend (senior batch)</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="text-lg font-bold text-[#4f46e5]">₹35,000</div>
                    <div className="text-sm text-[#9ca3af]">Average stipend</div>
                  </div>
                </div>
              </div>

              {/* Top Recruiters */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Top Recruiters [citation:1][citation:5]</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    "Google", "Microsoft", "Amazon", "Adobe", "Apple", "Meta",
                    "Zomato", "Swiggy", "Flipkart", "Uber", "Atlassian", "Goldman Sachs",
                    "D.E. Shaw", "Sprinklr", "Walmart", "Myntra", "Dukaan", "NVIDIA",
                    "Cisco", "Intel", "Texas Instruments", "Accenture", "Deloitte", "PwC"
                  ].map((company, index) => (
                    <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300 text-center text-sm text-[#d1d5db]">
                      {company}
                    </div>
                  ))}
                </div>
              </div>

              {/* Placeholder Note */}
              <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                <p className="text-sm text-[#9ca3af]">*Note: As SST is a new institution (founded 2023), formal placement records for the first graduating batch are yet to be published. The above data reflects the proven track record of Scaler's online programs, which SST inherits, and current internship achievements [citation:1][citation:5].</p>
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
                <span className="text-3xl">🏙️</span>
                The SST Campus: "Bangalore is Our Campus" [citation:5]
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-[#9ca3af] leading-relaxed">
                    Located in <span className="text-[#f3f4f6]">Electronic City, Phase 1, Bangalore</span>, SST's Macro Campus offers a modern, office-like aesthetic rather than a traditional lush-green campus [citation:5][citation:6]. Students embrace the "Bangalore is our campus" philosophy, leveraging the city's tech hub status.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="font-semibold text-[#f3f4f6] mb-2">Location Advantages</h3>
                  <p className="text-sm text-[#9ca3af]">Close to major tech parks, with easy access to Zudio, Westside, gyms, and cafes. Metro connectivity coming soon [citation:5]. Kempegowda International Airport is ~50 km away [citation:9].</p>
                </div>
              </div>
            </div>

            {/* Facilities */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏛️</span>
                Campus Facilities [citation:2][citation:5][citation:9]
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: "Innovation Lab", desc: "Dedicated space for deep-tech startups and product building [citation:4].", icon: "💡" },
                  { name: "Drone & Mac Labs", desc: "Specialized labs for advanced tech exploration [citation:2].", icon: "🖥️" },
                  { name: "Hostels", desc: "Triple/ double sharing with attached washrooms, washing machines, and common areas [citation:5].", icon: "🏠" },
                  { name: "Sports Arena", desc: "Facilities for football, cricket, basketball, and badminton [citation:8].", icon: "⚽" },
                  { name: "Gym Membership", desc: "Every student gets a Cult gym membership [citation:8].", icon: "💪" },
                  { name: "Cafeteria & Library", desc: "24/7 library and cafeteria serving diverse food [citation:5][citation:9].", icon: "☕" }
                ].map((facility, index) => (
                  <div key={index} className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30 hover:border-[#4f46e5]/50 transition-all duration-300">
                    <div className="text-4xl mb-3">{facility.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-[#f3f4f6]">{facility.name}</h3>
                    <p className="text-sm text-[#9ca3af]">{facility.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Clubs & Life */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🎨</span>
                Student Life & Clubs
              </h2>
              
              <div className="space-y-6">
                {/* Clubs */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Student-Led Clubs [citation:8]</h3>
                  <div className="grid md:grid-cols-3 gap-3">
                    {[
                      "Coding Club",
                      "Open Source Club",
                      "Cultural Club",
                      "Media Club",
                      "Ted Talk Tribe",
                      "E-cell (Entrepreneurship)"
                    ].map((club, index) => (
                      <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-sm text-[#d1d5db]">
                        {club}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Orientation 2025 */}
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="font-semibold text-[#f3f4f6] mb-2">Orientation 2025 Highlights [citation:6]</h3>
                  <p className="text-sm text-[#9ca3af]">The Class of 2025 orientation featured talks from Yash Kumar (OpenAI), Nikhil Mittal (CTO, Zepto), and Akhilesh Yede (CTO, Microsoft). Students took the official SST Oath based on core values: Respect, Integrity, Curiosity, Excellence (RICE).</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Innovation Tab */}
        {activeTab === "research" && (
          <div className="space-y-8 animate-fade-in">
            {/* Innovation Overview */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">💡</span>
                Innovation & Entrepreneurship Ecosystem
              </h2>
              <p className="text-[#d1d5db] leading-relaxed mb-6">
                SST is designed to be a launchpad for builders and founders. Through its Innovation Lab, mentorship from "Super Mentors," and access to funding, the institution fosters a culture of deep-tech entrepreneurship from year one [citation:1][citation:4].
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: "Innovation Lab", value: "Dedicated Space", icon: "🔬" },
                  { label: "Super Mentors", value: "Industry Titans", icon: "👨‍🏫" },
                  { label: "Funding Access", value: "Sequoia, Lightrock", icon: "💰" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-lg font-bold text-[#4f46e5] mb-1">{stat.label}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Achievements */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🏆</span>
                Student Achievements & Projects
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="font-semibold text-[#f3f4f6] mb-2">First-Year Team qualifies for ICPC [citation:8]</h3>
                  <p className="text-sm text-[#9ca3af]">A team of first-year students qualified for the International Collegiate Programming Contest (ICPC), outperforming teams from IITs and BITS.</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="font-semibold text-[#f3f4f6] mb-2">App for Government of India [citation:8]</h3>
                  <p className="text-sm text-[#9ca3af]">Students developed an app for India's Bhashini Project, which was showcased by the Prime Minister at the G20 Summit.</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="font-semibold text-[#f3f4f6] mb-2">Sauhard Gupta selected for GSoC 2025 [citation:4]</h3>
                  <p className="text-sm text-[#9ca3af]">Selected for Google Summer of Code (GSoC) 2025, a highly competitive global program. His project is under review by the Chromium team.</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="font-semibold text-[#f3f4f6] mb-2">Four students selected for HPAIR Conference [citation:4]</h3>
                  <p className="text-sm text-[#9ca3af]">Chosen to attend the prestigious Harvard Project for Asian and International Relations (HPAIR) Conference in Tokyo.</p>
                </div>
              </div>
            </div>

            {/* Super Mentors */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🤝</span>
                Super Mentors & Industry Leaders [citation:1]
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Rajan Anandan (Peak XV)",
                  "Binny Bansal (Flipkart)",
                  "Deepinder Goyal (Zomato)",
                  "Kunal Shah (CRED)",
                  "Amrish Rau (Pine Labs)",
                  "Prasanna Sankar (Rippling)",
                  "Apurva Dalal (Ex-X)",
                  "Ajey Gore (Peak XV)"
                ].map((mentor, index) => (
                  <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-sm text-[#d1d5db] text-center">
                    {mentor}
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
            <h2 className="text-3xl font-bold mb-4">Join India's Most Innovative CS School</h2>
            <p className="text-[#9ca3af] mb-8 max-w-2xl mx-auto">
              Be part of the first batch of builders, entrepreneurs, and engineers. Admissions for the 4-year CS & AI program are closing soon.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://www.scaler.com/school-of-technology/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#4f46e5] border border-[#4f46e5] rounded-xl text-white font-medium hover:bg-[#6366f1] transition-all duration-300"
              >
                Apply Now
              </a>
              <a 
                href="https://www.scaler.com/event/interact-live-with-ssts-leadership-team/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#1f2937] border border-[#374151] rounded-xl text-[#f3f4f6] hover:bg-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300"
              >
                Attend Live Q&A
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}