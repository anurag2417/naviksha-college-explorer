'use client';

import { useSearchParams } from "next/navigation";

export default function CollegeTypeContent() {
  const searchParams = useSearchParams();
  const stream = searchParams.get("stream");

  if (!stream) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#050505] text-[#f3f4f6] px-6 py-20 flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
            <svg className="w-10 h-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-red-400 mb-3">
            Stream Not Selected
          </h2>
          <p className="text-[#9ca3af] mb-6">
            Please go back and choose a stream to continue.
          </p>
          <a
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[#1f2937] border border-[#374151] rounded-xl text-[#f3f4f6] hover:bg-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Home</span>
          </a>
        </div>
      </main>
    );
  }

  const collegeTypes = [
    {
      name: "Government",
      slug: "government",
      description: "Established public institutions funded by state or central government",
      icon: "🏛️",
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconBg: "from-blue-500/20 to-cyan-500/20",
      delay: "0ms",
      features: ["Lower tuition fees", "Established reputation", "Strong alumni network", "Research-focused"],
      stats: "Avg. Fee: ₹10K - ₹50K/year"
    },
    {
      name: "Semi-Government",
      slug: "semi",
      description: "Aided & autonomous colleges with partial government funding",
      icon: "🏢",
      gradient: "from-purple-500/10 to-pink-500/10",
      iconBg: "from-purple-500/20 to-pink-500/20",
      delay: "100ms",
      features: ["Balanced autonomy", "Industry partnerships", "Modern curriculum", "Mixed funding"],
      stats: "Avg. Fee: ₹30K - ₹1L/year"
    },
    {
      name: "Private",
      slug: "private",
      description: "Independent institutions with modern infrastructure and placements",
      icon: "🎓",
      gradient: "from-green-500/10 to-emerald-500/10",
      iconBg: "from-green-500/20 to-emerald-500/20",
      delay: "200ms",
      features: ["Modern infrastructure", "Strong placement records", "Industry-oriented", "Flexible curriculum"],
      stats: "Avg. Fee: ₹1L - ₹5L/year"
    },
    {
      name: "New-Age",
      slug: "new-age",
      description: "Modern innovative colleges with cutting-edge technology focus",
      icon: "⚡",
      gradient: "from-orange-500/10 to-red-500/10",
      iconBg: "from-orange-500/20 to-red-500/20",
      delay: "300ms",
      features: ["Tech-driven learning", "Startup ecosystem", "Global exposure", "Interdisciplinary"],
      stats: "Avg. Fee: ₹2L - ₹8L/year"
    }
  ];

  const streamDetails: Record<string, { 
    name: string; 
    description: string; 
    icon: string; 
    popularColleges: string[] 
  }> = {
    engineering: {
      name: "Engineering",
      description: "Bachelor of Technology (B.Tech) & Engineering programs",
      icon: "⚙️",
      popularColleges: ["IITs", "NITs", "BITS", "IIITs", "State Universities"]
    },
    medical: {
      name: "Medical",
      description: "MBBS, BDS & Allied Health Sciences programs",
      icon: "🏥",
      popularColleges: ["AIIMS", "CMC Vellore", "Manipal", "AFMC", "State Medical Colleges"]
    },
    cuet: {
      name: "CUET",
      description: "Central Universities & Undergraduate programs",
      icon: "📚",
      popularColleges: ["DU", "JNU", "BHU", "JMI", "Central Universities"]
    },
    others: {
      name: "Other Streams",
      description: "Commerce, Arts, Law, Management & other programs",
      icon: "🌟",
      popularColleges: ["Top Liberal Arts", "Law Schools", "Business Schools", "Design Colleges"]
    }
  };

  const currentStream = streamDetails[stream] || {
    name: stream.charAt(0).toUpperCase() + stream.slice(1),
    description: "Higher education programs",
    icon: "🎓",
    popularColleges: ["Leading Institutions"]
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#050505] text-[#f3f4f6] px-6 py-20 selection:bg-[#4f46e5] selection:text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#4f46e5]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-[#10b981]/3 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Back button with stream info */}
      <div className="relative max-w-6xl mx-auto mb-8 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <a
              href="/"
              className="inline-flex items-center space-x-2 text-[#9ca3af] hover:text-[#f3f4f6] transition-colors duration-300 group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm font-medium">Back to Streams</span>
            </a>
            <div className="hidden md:block h-4 w-px bg-[#374151]" />
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{currentStream.icon}</span>
              <div>
                <h2 className="text-sm font-semibold text-[#e5e7eb]">{currentStream.name}</h2>
                <p className="text-xs text-[#9ca3af]">{currentStream.description}</p>
              </div>
            </div>
          </div>
          
          {/* Quick stats */}
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <div className="text-sm text-[#9ca3af]">Recommended</div>
              <div className="text-lg font-semibold text-[#e5e7eb]">Based on your stream</div>
            </div>
          </div>
        </div>
      </div>

      {/* Header with enhanced info */}
      <div className="relative text-center mb-12 animate-fade-in">
        <div className="inline-flex items-center mb-4 space-x-3">
          <div className="px-4 py-2 rounded-full bg-[#1f2937] border border-[#374151] text-[#9ca3af] text-sm font-medium">
            {currentStream.name}
          </div>
          <div className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
          <div className="text-sm text-[#9ca3af]">Step 2 of 3</div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#f3f4f6] via-[#e5e7eb] to-[#9ca3af] bg-clip-text text-transparent animate-gradient-x">
          Select College Type
        </h1>
        <div className="h-1 w-48 mx-auto mt-4 bg-gradient-to-r from-transparent via-[#4f46e5] to-transparent rounded-full animate-shimmer" />
        <p className="mt-6 text-[#9ca3af] text-lg font-light animate-fade-in-delay max-w-2xl mx-auto leading-relaxed">
          Choose the institution category that aligns with your academic goals, budget, and career aspirations. 
          Each type offers unique advantages for {currentStream.name.toLowerCase()} education.
        </p>
      </div>

      {/* Popular colleges preview */}
      <div className="relative max-w-6xl mx-auto mb-16 animate-fade-in">
        <div className="bg-[#0f0f0f]/60 backdrop-blur-sm border border-[#1f2937] rounded-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-[#e5e7eb]">Popular {currentStream.name} Colleges</h3>
              <p className="text-sm text-[#9ca3af] mt-1">Leading institutions in your selected stream</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-[#4f46e5] animate-pulse" />
              <span className="text-sm text-[#4f46e5] font-medium">Live Rankings</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {currentStream.popularColleges.map((college, index) => (
              <div 
                key={college}
                className="group relative overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#374151] p-4 hover:border-[#4f46e5]/50 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0f0f0f] border border-[#374151] flex items-center justify-center group-hover:border-[#4f46e5]/30 transition-colors">
                    <span className="text-lg">🏆</span>
                  </div>
                  <span className="text-sm font-medium text-[#e5e7eb] truncate">{college}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* College Type Grid with enhanced details */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-20">
        {collegeTypes.map((type) => (
          <a
            key={type.slug}
            href={`/colleges?stream=${stream}&type=${type.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8 transition-all duration-500 hover:border-[#4f46e5]/50 hover:bg-[#1a1a1a] hover:shadow-2xl hover:shadow-[#4f46e5]/10 hover:-translate-y-2 animate-slide-up"
            style={{ animationDelay: type.delay }}
          >
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#4f46e5]/0 via-[#4f46e5]/30 to-[#4f46e5]/0 animate-border-flow" />
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#4f46e5]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />

            <div className="relative">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${type.iconBg} flex items-center justify-center border border-[#374151] group-hover:border-[#4f46e5]/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <span className="text-2xl">{type.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-1 group-hover:text-[#e5e7eb] transition-colors duration-300">
                      {type.name}
                    </h3>
                    <p className="text-sm text-[#9ca3af]">{type.stats}</p>
                  </div>
                </div>
                
                {/* Quick info badge */}
                <div className="hidden md:block px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#374151] text-xs text-[#9ca3af] group-hover:border-[#4f46e5]/30 transition-colors">
                  {currentStream.name} ✓
                </div>
              </div>

              {/* Description */}
              <p className="text-[#9ca3af] text-sm mb-6 leading-relaxed">
                {type.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-[#e5e7eb] mb-3">Key Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {type.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-2 text-xs text-[#9ca3af] group-hover:text-[#d1d5db] transition-colors"
                    >
                      <svg className="w-3 h-3 text-[#4f46e5] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action area */}
              <div className="flex items-center justify-between pt-6 border-t border-[#374151]/50">
                <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-sm text-[#9ca3af] font-medium">Explore colleges</span>
                  <svg 
                    className="w-4 h-4 text-[#4f46e5] animate-bounce-right" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                
                {/* Preview count */}
                <div className="text-xs text-[#6b7280] font-medium">
                  <span className="text-[#4f46e5] font-semibold">50+</span> colleges available
                </div>
              </div>
            </div>

            {/* Subtle particle effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#4f46e5] rounded-full animate-float" />
              <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#7c3aed] rounded-full animate-float delay-300" />
              <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-[#6366f1] rounded-full animate-float delay-500" />
            </div>
          </a>
        ))}
      </div>

      {/* Comparison Guide */}
      <div className="relative max-w-6xl mx-auto mb-16 animate-fade-in-delay-long">
        <div className="bg-[#0f0f0f]/60 backdrop-blur-sm border border-[#1f2937] rounded-2xl p-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4f46e5]/10 to-[#7c3aed]/10 border border-[#4f46e5]/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#4f46e5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#e5e7eb]">Choosing Guidance</h3>
              <p className="text-sm text-[#9ca3af]">Key factors to consider when selecting college type</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-[#1a1a1a] border border-[#374151] hover:border-[#4f46e5]/30 transition-colors">
              <div className="text-[#4f46e5] font-semibold mb-2">Budget & Fees</div>
              <p className="text-sm text-[#9ca3af]">Consider tuition fees, accommodation costs, and available scholarships.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#1a1a1a] border border-[#374151] hover:border-[#4f46e5]/30 transition-colors">
              <div className="text-[#4f46e5] font-semibold mb-2">Placement Records</div>
              <p className="text-sm text-[#9ca3af]">Check average packages, recruiters, and career support services.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#1a1a1a] border border-[#374151] hover:border-[#4f46e5]/30 transition-colors">
              <div className="text-[#4f46e5] font-semibold mb-2">Infrastructure</div>
              <p className="text-sm text-[#9ca3af]">Evaluate labs, libraries, sports facilities, and campus amenities.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with enhanced info */}
      <div className="relative text-center animate-fade-in-delay-long">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-[#0f0f0f]/50 to-[#1a1a1a]/50 border border-[#374151]">
          <div className="text-left mb-4 md:mb-0">
            <h4 className="text-lg font-semibold text-[#e5e7eb] mb-2">Need Assistance?</h4>
            <p className="text-sm text-[#9ca3af]">
              Our admission counselors can help you choose the right college type
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="#" 
              className="px-6 py-3 bg-[#1f2937] border border-[#374151] rounded-xl text-[#f3f4f6] hover:bg-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300 font-medium"
            >
              Compare All Types
            </a>
            <a 
              href="#" 
              className="px-6 py-3 bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] border border-[#4f46e5] rounded-xl text-white hover:from-[#6366f1] hover:to-[#8b5cf6] transition-all duration-300 font-medium"
            >
              Talk to Expert
            </a>
          </div>
        </div>
        
        <p className="mt-8 text-sm text-[#6b7280] font-light">
          All data is updated for the 2024-25 academic year •{" "}
          <a href="#" className="text-[#4f46e5] hover:text-[#6366f1] transition-colors underline underline-offset-4">
            View admission timeline
          </a>
          {" • "}
          <a href="#" className="text-[#4f46e5] hover:text-[#6366f1] transition-colors underline underline-offset-4">
            Download brochure
          </a>
        </p>
      </div>
    </main>
  );
}