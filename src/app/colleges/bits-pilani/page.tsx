"use client";

import Link from "next/link";
import { useState } from "react";

export default function BITSPilaniPage() {
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
            <Link href="/colleges?stream=engineering&type=private" className="text-[#9ca3af] hover:text-[#f3f4f6] transition-colors">
              Private Colleges
            </Link>
            <span className="text-[#4b5563]">/</span>
            <span className="text-[#f3f4f6] font-medium">BITS Pilani</span>
          </nav>

          {/* College Header */}
          <div className="flex items-start gap-8 animate-fade-in-delay">
            {/* Logo */}
            <div className="hidden md:block flex-shrink-0">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#1f2937] to-[#111827] border border-[#374151] flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-bold bg-gradient-to-br from-[#f3f4f6] to-[#9ca3af] bg-clip-text text-transparent">
                  BITS
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
                  🏆 Institute of Eminence
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  🌟 NAAC A+ Grade
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#f3f4f6] via-[#e5e7eb] to-[#9ca3af] bg-clip-text text-transparent mb-4">
                Birla Institute of Technology and Science, Pilani
              </h1>

              <p className="text-[#9ca3af] text-lg leading-relaxed max-w-3xl mb-6">
                Established in 1964, BITS Pilani is India's premier private university and one of only ten private 
                institutions recognized as an Institute of Eminence by the Government of India. With a sprawling 328-acre 
                main campus in Pilani, Rajasthan, and additional campuses in Goa, Hyderabad, and Dubai, BITS Pilani is 
                renowned for its academic excellence, innovative Practice School program, and record-breaking placements .
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.bits-pilani.ac.in/" 
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
              <div className="text-xs text-[#9ca3af] mt-1">Pharmacy 2025 </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">1964</div>
              <div className="text-xs text-[#9ca3af] mt-1">Established</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">2,379</div>
              <div className="text-xs text-[#9ca3af] mt-1">Placement Offers 2025 </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4f46e5]">₹22L</div>
              <div className="text-xs text-[#9ca3af] mt-1">Average Package 2025 </div>
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
                { label: "Location", value: "Pilani, Rajasthan", icon: "📍" },
                { label: "Established", value: "1964", icon: "📅" },
                { label: "Institute Type", value: "Private - Institute of Eminence", icon: "🏛️" },
                { label: "NIRF Rank 2025", value: "#2 (Pharmacy) ", icon: "🏆" },
                { label: "Campus Area", value: "328 Acres (Main) ", icon: "🌳" },
                { label: "Total Students", value: "14,553+ ", icon: "👥" },
                { label: "Faculty", value: "688+ ", icon: "👨‍🏫" },
                { label: "Placement % 2024", value: "98.14% ", icon: "📊" }
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
                About BITS Pilani
              </h2>
              <div className="space-y-4 text-[#d1d5db] leading-relaxed">
                <p>
                  Birla Institute of Technology and Science, Pilani (BITS Pilani) was established in 1964 by the renowned industrialist and philanthropist Shri G.D. Birla. It is one of only ten private universities in India recognized as an "Institute of Eminence" by the Ministry of Education, Government of India, and is accredited with an 'A+' grade by NAAC . With over 60 years of academic excellence, BITS Pilani has emerged as India's premier private university for engineering, sciences, pharmacy, and management .
                </p>
                <p>
                  The institute operates four campuses across India and the UAE: the main campus in Pilani (Rajasthan) spanning 328 acres, and additional campuses in Goa, Hyderabad, and Dubai. All campuses follow the same academic curriculum and standards, providing equal opportunities in academics and placements . The institute welcomes over 30,000 students across its campuses, with nearly 5,000 new students joining the university each year for a Bachelor of Engineering degree .
                </p>
                <p>
                  BITS Pilani is renowned for its unique "Practice School" program, which integrates industry internships into the curriculum, its flexible choice-based credit system, and its strong alumni network of over 165,000 successful engineers, scientists, entrepreneurs, and industry leaders worldwide . Approximately one-quarter of India's unicorn startups have been founded by BITS Pilani graduates .
                </p>
              </div>
            </div>

            {/* Rankings & Recognitions */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">🏆</span>
                  NIRF Rankings 2024-25
                </h3>
                <ul className="space-y-3 text-sm text-[#d1d5db]">
                  <li className="flex items-center justify-between p-2 rounded-lg bg-[#1f2937]/30">
                    <span className="text-[#9ca3af]">Pharmacy 2025</span>
                    <span className="text-[#4f46e5] font-semibold">#2 </span>
                  </li>
                  <li className="flex items-center justify-between p-2 rounded-lg bg-[#1f2937]/30">
                    <span className="text-[#9ca3af]">Pharmacy 2024</span>
                    <span className="text-[#4f46e5] font-semibold">#3 </span>
                  </li>
                  <li className="flex items-center justify-between p-2 rounded-lg bg-[#1f2937]/30">
                    <span className="text-[#9ca3af]">Engineering 2024</span>
                    <span className="text-[#4f46e5] font-semibold">#20 </span>
                  </li>
                  <li className="flex items-center justify-between p-2 rounded-lg bg-[#1f2937]/30">
                    <span className="text-[#9ca3af]">Overall 2024</span>
                    <span className="text-[#4f46e5] font-semibold">#23 </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">🌍</span>
                  Global Rankings
                </h3>
                <ul className="space-y-3 text-sm text-[#d1d5db]">
                  <li className="flex items-center justify-between p-2 rounded-lg bg-[#1f2937]/30">
                    <span className="text-[#9ca3af]">QS World University 2026</span>
                    <span className="text-[#4f46e5] font-semibold">#801-850 </span>
                  </li>
                  <li className="flex items-center justify-between p-2 rounded-lg bg-[#1f2937]/30">
                    <span className="text-[#9ca3af]">QS Sustainability 2024</span>
                    <span className="text-[#4f46e5] font-semibold">#1 in India </span>
                  </li>
                  <li className="flex items-center justify-between p-2 rounded-lg bg-[#1f2937]/30">
                    <span className="text-[#9ca3af]">QS Pharmacy & Pharmacology 2025</span>
                    <span className="text-[#4f46e5] font-semibold">#84 Global </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Institute Status */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                Institute of Eminence Status
              </h3>
              <p className="text-[#d1d5db] leading-relaxed">
                BITS Pilani is one of only ten private universities in India to be conferred the prestigious "Institute of Eminence" (IoE) status by the Ministry of Education, Government of India. This recognition places BITS Pilani among the elite institutions in the country, enabling greater autonomy and fostering world-class research and education .
              </p>
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
                  { label: "Students", value: "14,553+", icon: "👥" },
                  { label: "Faculty", value: "688+", icon: "👨‍🏫" },
                  { label: "Alumni Network", value: "1,65,000+", icon: "🌍" },
                  { label: "Campuses", value: "4", icon: "🏛️" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-[#4f46e5] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* B.E./B.Tech Programs */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">⚙️</span>
                B.E./B.Tech Programs (4 Years) 
              </h2>
              <p className="text-[#9ca3af] mb-4">Duration: 4 Years | Entrance: BITSAT | Annual Fee: ₹2.2-2.7 Lakhs </p>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  "Computer Science",
                  "Electronics & Communication",
                  "Electrical & Electronics",
                  "Mechanical Engineering",
                  "Chemical Engineering",
                  "Civil Engineering",
                  "Manufacturing Engineering",
                  "Electronics & Instrumentation"
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

            {/* B.Pharm Program */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">💊</span>
                B.Pharm (Hons.) Program 
              </h2>
              <div className="grid md:grid-cols-1 gap-3">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <div className="w-2 h-2 rounded-full bg-[#7c3aed]" />
                  <span className="text-[#d1d5db] text-sm">Bachelor of Pharmacy (Hons.) - 4 Years | BITSAT | Ranked #2 in India (NIRF 2025) </span>
                </div>
              </div>
            </div>

            {/* M.Sc. (Hons.) Programs */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🔬</span>
                M.Sc. (Hons.) Programs (2 Years) 
              </h2>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  "Biological Sciences",
                  "Chemistry",
                  "Economics",
                  "Mathematics",
                  "Physics"
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
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">M.E./M.Tech</h3>
                  <p className="text-sm text-[#9ca3af]">Embedded Systems, CS, Biotech, Chemical, Civil, Mechanical, Microelectronics, Power Electronics </p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">MBA</h3>
                  <p className="text-sm text-[#9ca3af]">Business Analytics, General Management </p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">M.Pharm</h3>
                  <p className="text-sm text-[#9ca3af]">Pharmaceutical Sciences </p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">PhD</h3>
                  <p className="text-sm text-[#9ca3af]">Doctoral programs in all disciplines </p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">WILP Programs</h3>
                  <p className="text-sm text-[#9ca3af]">Work-Integrated Learning for professionals </p>
                </div>
              </div>
            </div>

            {/* International Collaboration - CentraleSupélec */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🌍</span>
                International Dual Degree with CentraleSupélec 
              </h2>
              <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                <p className="text-[#d1d5db] mb-4">
                  In August 2025, BITS Pilani launched a 4-year English-taught Bachelor's program in Computer Science & AI in collaboration with CentraleSupélec (France). Students from Pilani and Goa campuses spend the first two years in India and the final two years at the Paris-Saclay campus in France .
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-3 bg-[#1f2937]/50 rounded">
                    <span className="text-[#4f46e5] font-semibold">~60 seats</span>
                    <p className="text-xs text-[#9ca3af]">First batch (2025)</p>
                  </div>
                  <div className="p-3 bg-[#1f2937]/50 rounded">
                    <span className="text-[#4f46e5] font-semibold">Top 2%</span>
                    <p className="text-xs text-[#9ca3af]">Students recruited from top BITSAT performers</p>
                  </div>
                </div>
                <p className="text-sm text-[#9ca3af] mt-4">Future specializations planned: Electronics & Telecommunications, Biotechnology, Mechanical Engineering & Aerospace </p>
              </div>
            </div>

            {/* Online Programs */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">💻</span>
                Online Degree Programs
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">B.Sc. in Computer Science</h3>
                  <p className="text-sm text-[#9ca3af]">3-year degree with flexible exit options (Diploma after 2 years) | ₹3.1 Lakhs total </p>
                  <p className="text-xs text-[#d1d5db] mt-2">Specializations: Full Stack, Computing Systems, Databases & Analytics, Algorithmics </p>
                </div>
                <div className="p-4 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">B.Sc. (Hons.) in CS</h3>
                  <p className="text-sm text-[#9ca3af]">4-year degree with specializations in AI/ML, Cloud Computing, Full Stack </p>
                </div>
                <div className="p-4 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">B.S. in Data Science & AI</h3>
                  <p className="text-sm text-[#9ca3af]">4-year online degree | ₹32,445 per trimester | Flexible exit options </p>
                </div>
                <div className="p-4 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="text-lg font-semibold mb-2 text-[#4f46e5]">Google Certification Credits</h3>
                  <p className="text-sm text-[#9ca3af]">3 credits recognized for Google Cybersecurity Professional Certificate </p>
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
                {/* B.E./B.Tech Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">B.E./B.Tech & B.Pharm Admissions </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">1</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">Minimum 75% in 10+2 with PCM</div>
                        <div className="text-sm text-[#9ca3af]">Eligibility criteria for undergraduate programs </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">2</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">BITSAT 2025</div>
                        <div className="text-sm text-[#9ca3af]">Appear for BITSAT (Birla Institute of Technology and Science Admission Test) </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center text-white font-bold text-sm">3</div>
                      <div>
                        <div className="font-semibold text-[#f3f4f6] mb-1">Counselling & Seat Allocation</div>
                        <div className="text-sm text-[#9ca3af]">Based on BITSAT rank and branch preference </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[#9ca3af] mt-2">Direct admission available for board exam toppers (PCM stream) </p>
                </div>

                {/* PG Admissions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Postgraduate Admissions </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <span className="text-[#4f46e5] font-semibold">M.E./M.Tech:</span> <span className="text-[#d1d5db]">GATE or BITS HD </span>
                    </div>
                    <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <span className="text-[#4f46e5] font-semibold">MBA:</span> <span className="text-[#d1d5db]">CAT / XAT / GMAT + BAAT </span>
                    </div>
                    <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <span className="text-[#4f46e5] font-semibold">M.Sc.:</span> <span className="text-[#d1d5db]">BITSAT </span>
                    </div>
                    <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                      <span className="text-[#4f46e5] font-semibold">PhD:</span> <span className="text-[#d1d5db]">Institute test / NET-JRF </span>
                    </div>
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
                  <h3 className="font-semibold text-lg mb-4">B.E./B.Tech / B.Pharm</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Annual Tuition</span>
                      <span className="text-[#f3f4f6] font-semibold">₹2.2-2.7 Lakhs</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold">₹19-22 Lakhs </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">Hostel & Mess (Annual)</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Hostel Fees</span>
                      <span className="text-[#f3f4f6] font-semibold">₹90,000-1,10,000 </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Per Semester Hostel</span>
                      <span className="text-[#f3f4f6]">~₹20,100 </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">M.E./M.Tech / MBA</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Annual Fees</span>
                      <span className="text-[#f3f4f6] font-semibold">₹2.4-3.5 Lakhs </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                  <h3 className="font-semibold text-lg mb-4">Online B.Sc. CS</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Total Program Fee</span>
                      <span className="text-[#4f46e5] font-bold">₹3.1 Lakhs </span>
                    </div>
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
              <p className="text-sm text-[#9ca3af] mb-4">Approximately 25% of BITS Pilani students receive some form of scholarship or concession </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: "Merit Scholarships (BITSAT)", benefit: "Up to 100% fee waiver for top BITSAT scorers " },
                  { name: "Need-Based Scholarships", benefit: "Tuition waivers for economically weaker sections " },
                  { name: "Board Topper Scholarships", benefit: "10-50% fee waiver based on 10+2 performance " },
                  { name: "Sibling Concession", benefit: "Fee concession for siblings studying at BITS " },
                  { name: "Sports Scholarships", benefit: "For outstanding athletes " },
                  { name: "Physically Challenged Concession", benefit: "Special concessions for students with disabilities " }
                ].map((scholarship, index) => (
                  <div key={index} className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <div className="font-semibold text-[#f3f4f6] mb-1">{scholarship.name}</div>
                    <div className="text-sm text-[#9ca3af]">{scholarship.benefit}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cutoff Trends */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📊</span>
                BITSAT Cutoff Trends (out of 390) 
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { program: "B.E. Computer Science", rank2024: "327", rank2023: "331" },
                  { program: "B.E. Electronics & Comm.", rank2024: "314", rank2023: "296" },
                  { program: "B.E. Electrical & Electronics", rank2024: "292", rank2023: "272" },
                  { program: "B.E. Mechanical", rank2024: "266", rank2023: "244" },
                  { program: "M.Sc. Economics", rank2024: "271", rank2023: "257" },
                  { program: "B.Pharm", rank2024: "165", rank2023: "153" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                    <span className="text-[#d1d5db] text-sm">{item.program}</span>
                    <div className="flex gap-3">
                      <span className="text-[#4f46e5] font-semibold">{item.rank2024}</span>
                      <span className="text-[#9ca3af] text-xs">(2024)</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#9ca3af] mt-2">Acceptance rate: ~2-3% – BITS Pilani is one of the most competitive private universities in India </p>
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
                  { label: "Total Offers (2025)", value: "2,379+", icon: "🎯" },
                  { label: "Placement % (2024)", value: "98.14%", icon: "📊" },
                  { label: "Average Package 2025", value: "₹22 LPA", icon: "📈" },
                  { label: "Median Package 2025", value: "₹19.4 LPA", icon: "💰" }
                ].map((stat, index) => (
                  <div key={index} className="p-6 rounded-xl border border-[#374151] bg-[#1f2937]/30 text-center hover:border-[#4f46e5]/50 transition-all duration-300">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-[#4f46e5] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#9ca3af]">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Key Highlights 2025 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Placement Growth 2025 </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                    <div className="text-lg font-bold text-[#4f46e5]">+11%</div>
                    <div className="text-xs text-[#9ca3af]">Year-on-Year Growth</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                    <div className="text-lg font-bold text-[#4f46e5]">+14%</div>
                    <div className="text-xs text-[#9ca3af]">Median Salary Growth</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                    <div className="text-lg font-bold text-[#4f46e5]">+44%</div>
                    <div className="text-xs text-[#9ca3af]">Top Offer Growth (HFT)</div>
                  </div>
                </div>
              </div>

              {/* Top Recruiters 2025 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Top Recruiters 2025 </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    "Microsoft", "Google", "Amazon", "Adobe", "Nvidia", "Qualcomm",
                    "Goldman Sachs", "Wells Fargo", "BCG", "Kearney", "Tower Research", "Quadeye",
                    "Micron", "Texas Instruments", "IBM", "TCS", "Infosys", "Swiggy",
                    "ICICI Bank", "Tata Auto", "IndiaMart", "Astera Labs", "Tenstorrent", "Whatfix"
                  ].map((company, index) => (
                    <div key={index} className="p-3 rounded-lg bg-[#1f2937]/30 border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300 text-center text-sm text-[#d1d5db]">
                      {company}
                    </div>
                  ))}
                </div>
              </div>

              {/* Semiconductor Boom */}
              <div className="mb-8 p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                <h3 className="text-lg font-semibold text-[#f3f4f6] mb-2">India Semiconductor Mission Impact </h3>
                <p className="text-sm text-[#9ca3af]">
                  <span className="text-[#4f46e5] font-semibold">Micron:</span> 51 students hired from BITS Pilani in 2025. Aggressive recruitment by semiconductor companies including Micron, Texas Instruments, and Qualcomm .
                </p>
              </div>

              {/* PhD Placements */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">PhD Placements 2025 </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                    <div className="text-2xl font-bold text-[#4f46e5]">100</div>
                    <div className="text-xs text-[#9ca3af]">Total PhD Scholars Placed</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                    <div className="text-2xl font-bold text-[#4f46e5]">42</div>
                    <div className="text-xs text-[#9ca3af]">Industry Roles</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151] text-center">
                    <div className="text-2xl font-bold text-[#4f46e5]">58</div>
                    <div className="text-xs text-[#9ca3af]">Academic Institutions</div>
                  </div>
                </div>
              </div>

              {/* Practice School Model */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Practice School Program </h3>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <p className="text-sm text-[#9ca3af]">
                    BITS Pilani's unique "Practice School" internship model converts internships into pre-placement offers (PPOs), significantly contributing to the high placement rate .
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
                  <div className="text-xl font-bold text-[#4f46e5] mb-2">Pilani Campus</div>
                  <div className="text-sm text-[#9ca3af]">328 acres • Rajasthan</div>
                  <div className="text-xs text-[#d1d5db] mt-2">Main campus, established 1964 </div>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <div className="text-xl font-bold text-[#4f46e5] mb-2">Goa Campus</div>
                  <div className="text-sm text-[#9ca3af]">• Zuarinagar</div>
                  <div className="text-xs text-[#d1d5db] mt-2">Scenic coastal campus</div>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <div className="text-xl font-bold text-[#4f46e5] mb-2">Hyderabad Campus</div>
                  <div className="text-sm text-[#9ca3af]">• Telangana</div>
                  <div className="text-xs text-[#d1d5db] mt-2">Modern facilities</div>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <div className="text-xl font-bold text-[#4f46e5] mb-2">Dubai Campus</div>
                  <div className="text-sm text-[#9ca3af]">• UAE</div>
                  <div className="text-xs text-[#d1d5db] mt-2">International campus</div>
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
                  { name: "Central Library", desc: "Extensive collection of books, journals, and e-resources", icon: "📚" },
                  { name: "Modern Classrooms", desc: "Air-conditioned, fully Wi-Fi enabled classrooms ", icon: "🏫" },
                  { name: "Advanced Labs", desc: "State-of-the-art research and teaching laboratories", icon: "🔬" },
                  { name: "Hostels", desc: "Well-maintained hostels with medical and recreational facilities", icon: "🏠" },
                  { name: "Medical Centre", desc: "24/7 medical support for students and staff", icon: "🏥" },
                  { name: "Sports Complex", desc: "Cricket, football, tennis, basketball, swimming pool", icon: "⚽" },
                  { name: "Cafeterias", desc: "Multiple dining options across campus", icon: "☕" },
                  { name: "Wi-Fi Campus", desc: "High-speed internet across all academic and residential areas", icon: "📶" }
                ].map((facility, index) => (
                  <div key={index} className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30 hover:border-[#4f46e5]/50 transition-all duration-300">
                    <div className="text-4xl mb-3">{facility.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-[#f3f4f6]">{facility.name}</h3>
                    <p className="text-sm text-[#9ca3af]">{facility.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Life */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🎨</span>
                Student Life & Clubs
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
                    name: "BITS Pilani Campus Fest",
                    type: "Cultural Festival",
                    desc: "Annual cultural extravaganza with performances and competitions",
                    icon: "🎭"
                  },
                  {
                    name: "Quark",
                    type: "Technical Festival",
                    desc: "Annual techno-management fest",
                    icon: "🔧"
                  },
                  {
                    name: "BITS Open Sports Meet",
                    type: "Sports Competition",
                    desc: "Inter-college sports competition",
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
                BITS Pilani is recognized as an Institute of Eminence for its strong research output, international collaborations, and innovation ecosystem. Over 85% of the faculty at BITS are PhDs actively involved in cutting-edge research .
              </p>
            </div>

            {/* Pharmacy Research */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">💊</span>
                Department of Pharmacy - Global Recognition 
              </h2>
              <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="p-3 bg-[#1f2937]/50 rounded text-center">
                    <div className="text-2xl font-bold text-[#4f46e5]">#2</div>
                    <div className="text-xs text-[#9ca3af]">NIRF 2025 </div>
                  </div>
                  <div className="p-3 bg-[#1f2937]/50 rounded text-center">
                    <div className="text-2xl font-bold text-[#4f46e5]">#84</div>
                    <div className="text-xs text-[#9ca3af]">QS World (Pharmacy) 2025 </div>
                  </div>
                </div>
                <p className="text-sm text-[#9ca3af]">
                  The Department of Pharmacy has achieved global recognition through its focus on drug discovery, start-up incubation, and tie-ups with global pharma giants .
                </p>
              </div>
            </div>

            {/* PIEDS Incubation */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">💡</span>
                PIEDS - Technology Business Incubator
              </h2>
              <div className="p-6 rounded-lg border border-[#374151] bg-[#1f2937]/30">
                <p className="text-[#d1d5db] mb-4">
                  The Pilani Innovation & Entrepreneurship Development Society (PIEDS) is the technology business incubator of BITS Pilani, providing incubation support and entrepreneurial guidance to students and alumni .
                </p>
                <p className="text-sm text-[#9ca3af]">
                  PIEDS has been instrumental in fostering India's startup ecosystem, with approximately one-quarter of India's unicorn startups founded by BITS Pilani graduates .
                </p>
              </div>
            </div>

            {/* International Research Collaborations */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🌍</span>
                International Research Collaborations
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="font-semibold text-[#f3f4f6] mb-2">CentraleSupélec, France</h3>
                  <p className="text-sm text-[#9ca3af]">Joint Bachelor's program in CS & AI with research pathways </p>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <h3 className="font-semibold text-[#f3f4f6] mb-2">QS Sustainability Rankings</h3>
                  <p className="text-sm text-[#9ca3af]">Ranked #1 in India for sustainability research 2024 </p>
                </div>
              </div>
            </div>

            {/* Faculty Research */}
            <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">👨‍🏫</span>
                Faculty Excellence
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <div className="text-2xl font-bold text-[#4f46e5]">85%+</div>
                  <div className="text-sm text-[#9ca3af]">Faculty with PhDs </div>
                </div>
                <div className="p-4 rounded-lg bg-[#1f2937]/30 border border-[#374151]">
                  <div className="text-2xl font-bold text-[#4f46e5]">688+</div>
                  <div className="text-sm text-[#9ca3af]">Total Faculty </div>
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
            <h2 className="text-3xl font-bold mb-4">Join India's Premier Private University</h2>
            <p className="text-[#9ca3af] mb-8 max-w-2xl mx-auto">
              Experience academic excellence with 98% placements, ₹22 LPA average packages, and a 165,000+ strong global alumni network across four world-class campuses.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://www.bits-pilani.ac.in/admissions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#4f46e5] border border-[#4f46e5] rounded-xl text-white font-medium hover:bg-[#6366f1] transition-all duration-300"
              >
                Admission Information
              </a>
              <a 
                href="https://www.bits-pilani.ac.in/" 
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