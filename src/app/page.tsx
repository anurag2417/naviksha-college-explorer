"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#050505] text-[#f3f4f6] px-6 py-20 selection:bg-[#4f46e5] selection:text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#4f46e5]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Header with animated entrance - Two Column Layout */}
      <div className="relative max-w-7xl mx-auto mb-20 animate-fade-in">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center md:text-left">
            <div className="inline-block">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-[#f3f4f6] via-[#e5e7eb] to-[#9ca3af] bg-clip-text text-transparent animate-gradient-x">
                College Compass
              </h1>
              <div className="h-1 w-3/4 mx-auto md:mx-0 mt-4 bg-gradient-to-r from-transparent via-[#4f46e5] to-transparent rounded-full animate-shimmer" />
            </div>
            <p className="mt-6 text-[#9ca3af] text-xl font-light tracking-wide animate-fade-in-delay">
              Your Gateway to India's Premier Educational Institutions
            </p>
            <p className="mt-4 text-[#6b7280] text-base leading-relaxed">
              Discover, compare, and explore top colleges across India with comprehensive information on admissions, placements, rankings, and campus life.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#streams"
                className="px-8 py-4 bg-[#4f46e5] border border-[#4f46e5] rounded-xl text-white font-medium hover:bg-[#6366f1] transition-all duration-300 flex items-center gap-2"
              >
                <span>Get Started</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="#about"
                className="px-8 py-4 bg-[#1f2937] border border-[#374151] rounded-xl text-[#f3f4f6] hover:bg-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Column - Hero Image/Illustration */}
          <div className="relative animate-fade-in-delay">
            <div className="relative rounded-2xl overflow-hidden border border-[#1f2937] bg-gradient-to-br from-[#1f2937] to-[#111827] p-1">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#4f46e5]/20 via-[#7c3aed]/20 to-[#4f46e5]/20 rounded-2xl blur-xl" />
              
              <div className="relative rounded-xl overflow-hidden bg-[#0f0f0f] aspect-[4/3]">
                {/* Collage of college-related imagery */}
                <div className="grid grid-cols-2 gap-2 p-2 h-full">
                  {/* Top Left - Main Featured */}
                  <div className="col-span-2 relative rounded-lg overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/20 group">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="text-6xl mb-3">🎓</div>
                        <h3 className="text-xl font-bold text-white mb-2">Premier Institutions</h3>
                        <p className="text-sm text-[#9ca3af]">IITs • NITs • AIIMS • Top Colleges</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
                    {/* Animated glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Bottom Left */}
                  <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 group">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                      <div className="text-4xl mb-2">📚</div>
                      <p className="text-xs font-semibold text-white text-center">Comprehensive Guides</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Bottom Right */}
                  <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-green-500/20 to-emerald-500/20 group">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                      <div className="text-4xl mb-2">🎯</div>
                      <p className="text-xs font-semibold text-white text-center">Smart Filtering</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-[#4f46e5]/20 rounded-full blur-2xl animate-pulse" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-[#7c3aed]/20 rounded-full blur-2xl animate-pulse delay-1000" />
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 px-4 py-2 bg-[#4f46e5] rounded-full text-white text-sm font-semibold shadow-lg shadow-[#4f46e5]/50 animate-float">
              500+ Colleges
            </div>
            <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] rounded-full text-white text-sm font-semibold shadow-lg shadow-[#7c3aed]/50 animate-float delay-500">
              Trusted by 10K+ Students
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="relative max-w-6xl mx-auto mb-20 animate-fade-in-delay">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#4f46e5]" />
            <h2 className="text-sm font-semibold text-[#4f46e5] tracking-wider uppercase">How It Works</h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#4f46e5]" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#f3f4f6] mb-3">
            Find Your Perfect College in 3 Simple Steps
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Choose Your Stream",
              desc: "Select from Engineering, Medical, CUET, or other academic streams based on your interest and career goals.",
              icon: "🎯"
            },
            {
              step: "02",
              title: "Filter by Type",
              desc: "Narrow down your search by selecting Government, Semi-Government, Private, or New-Age institutions.",
              icon: "🔍"
            },
            {
              step: "03",
              title: "Explore & Compare",
              desc: "Access detailed information on admissions, fees, placements, rankings, and campus facilities to make an informed decision.",
              icon: "📊"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="relative group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8 hover:border-[#4f46e5]/50 transition-all duration-300 h-full">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] flex items-center justify-center text-white font-bold shadow-lg shadow-[#4f46e5]/50">
                  {item.step}
                </div>
                
                <div className="text-5xl mb-4 mt-4">{item.icon}</div>
                <h4 className="text-xl font-semibold text-[#f3f4f6] mb-3">{item.title}</h4>
                <p className="text-[#9ca3af] text-sm leading-relaxed">{item.desc}</p>
              </div>
              
              {/* Connector line (except last item) */}
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#4f46e5]/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* About Section with College Showcase */}
      <div id="about" className="relative max-w-6xl mx-auto mb-20 animate-fade-in-delay scroll-mt-20">
        <div className="rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-8 md:p-12 overflow-hidden">
          {/* Gradient accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#4f46e5]/10 to-transparent rounded-full blur-3xl" />
          
          <div className="relative">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#4f46e5]" />
              <h2 className="text-sm font-semibold text-[#4f46e5] tracking-wider uppercase">About College Compass</h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#4f46e5]" />
            </div>
            
            <p className="text-center text-[#d1d5db] leading-relaxed text-lg max-w-3xl mx-auto mb-8">
              College Compass is your comprehensive guide to discovering and exploring India's top educational institutions. 
              We provide detailed information about premier colleges across engineering, medical, CUET, and other streams, 
              helping students make informed decisions about their academic future.
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  icon: "🎯",
                  title: "Curated Information",
                  desc: "Comprehensive details about admissions, placements, and campus life"
                },
                {
                  icon: "🏆",
                  title: "Top Institutions",
                  desc: "Featuring IITs, NITs, AIIMS, and other premier colleges"
                },
                {
                  icon: "📊",
                  title: "Smart Filtering",
                  desc: "Find colleges by stream, type, location, and rankings"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-6 rounded-xl bg-[#1f2937]/30 border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-[#f3f4f6] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#9ca3af] leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* College Photos Showcase */}
            <div className="space-y-4">
              <h3 className="text-center text-xl font-semibold text-[#f3f4f6] mb-6">Featured Institutions</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "IIT Delhi", emoji: "🏛️", color: "from-blue-500/20 to-cyan-500/20" },
                  { name: "IIT Bombay", emoji: "🎓", color: "from-purple-500/20 to-pink-500/20" },
                  { name: "AIIMS Delhi", emoji: "🏥", color: "from-red-500/20 to-orange-500/20" },
                  { name: "NIT Trichy", emoji: "⚡", color: "from-green-500/20 to-emerald-500/20" },
                  { name: "IIT Madras", emoji: "🔬", color: "from-indigo-500/20 to-blue-500/20" },
                  { name: "BITS Pilani", emoji: "💡", color: "from-yellow-500/20 to-orange-500/20" },
                  { name: "IIT Kharagpur", emoji: "🌟", color: "from-pink-500/20 to-rose-500/20" },
                  { name: "NIT Warangal", emoji: "🚀", color: "from-teal-500/20 to-cyan-500/20" }
                ].map((college, index) => (
                  <div 
                    key={index} 
                    className="group relative overflow-hidden rounded-xl border border-[#374151] hover:border-[#4f46e5]/50 transition-all duration-300 hover:scale-105 animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className={`aspect-[4/3] bg-gradient-to-br ${college.color} relative overflow-hidden`}>
                      {/* Background pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1f2937] to-[#111827]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 z-10" />
                      
                      {/* College icon */}
                      <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30 z-5">
                        {college.emoji}
                      </div>
                      
                      {/* College name overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
                        <p className="text-xs font-semibold text-white text-center">{college.name}</p>
                      </div>

                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/20 to-[#7c3aed]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-15" />
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-[#1f2937]">
                {[
                  { label: "Colleges Listed", value: "500+" },
                  { label: "Streams Covered", value: "4" },
                  { label: "College Types", value: "4" },
                  { label: "Success Stories", value: "10K+" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#9ca3af] uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="relative max-w-6xl mx-auto mb-20 animate-fade-in-delay-long">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#4f46e5]" />
            <h2 className="text-sm font-semibold text-[#4f46e5] tracking-wider uppercase">Why Choose College Compass</h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#4f46e5]" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#f3f4f6]">
            Your Trusted Partner in College Selection
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: "✓",
              title: "Verified Information",
              desc: "All college data is verified from official sources including NIRF rankings, JEE Advanced, and institutional websites."
            },
            {
              icon: "📈",
              title: "Latest Rankings & Stats",
              desc: "Updated NIRF rankings, placement statistics, cutoff trends, and admission criteria for informed decision-making."
            },
            {
              icon: "🎓",
              title: "Complete Admission Guide",
              desc: "Step-by-step admission process, eligibility criteria, important dates, and application procedures."
            },
            {
              icon: "💼",
              title: "Placement Insights",
              desc: "Detailed placement records, top recruiters, salary packages, and sector-wise distribution data."
            },
            {
              icon: "🏛️",
              title: "Campus Life Details",
              desc: "Information about facilities, hostels, clubs, events, sports, and student activities."
            },
            {
              icon: "🔬",
              title: "Research & Faculty",
              desc: "Research centers, faculty profiles, publications, and academic collaborations."
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex gap-4 p-6 rounded-xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm hover:border-[#4f46e5]/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#4f46e5]/20 to-[#7c3aed]/20 flex items-center justify-center border border-[#4f46e5]/30">
                <span className="text-2xl">{item.icon}</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#f3f4f6] mb-2">{item.title}</h4>
                <p className="text-sm text-[#9ca3af] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative max-w-6xl mx-auto mb-20 animate-fade-in-delay-long">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#4f46e5]" />
            <h2 className="text-sm font-semibold text-[#4f46e5] tracking-wider uppercase">Student Testimonials</h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#4f46e5]" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#f3f4f6]">
            What Students Say About Us
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Priya Sharma",
              college: "IIT Delhi, B.Tech CSE",
              text: "College Compass helped me make an informed decision. The detailed information about placements and campus life was incredibly helpful!",
              rating: 5
            },
            {
              name: "Rahul Verma",
              college: "AIIMS Delhi, MBBS",
              text: "The admission guide and fee structure details were exactly what I needed. Highly recommend this platform to all aspiring students.",
              rating: 5
            },
            {
              name: "Ananya Patel",
              college: "NIT Trichy, B.Tech ECE",
              text: "Found everything in one place - rankings, cutoffs, facilities. Made my college search so much easier. Thank you College Compass!",
              rating: 5
            }
          ].map((testimonial, index) => (
            <div 
              key={index} 
              className="rounded-xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-6 hover:border-[#4f46e5]/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#d1d5db] text-sm leading-relaxed mb-4 italic">"{testimonial.text}"</p>
              <div className="border-t border-[#1f2937] pt-4">
                <p className="font-semibold text-[#f3f4f6]">{testimonial.name}</p>
                <p className="text-xs text-[#9ca3af] mt-1">{testimonial.college}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stream Selection Header */}
      <div id="streams" className="text-center mb-12 animate-fade-in-delay-long scroll-mt-20">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#4f46e5]" />
          <h2 className="text-sm font-semibold text-[#4f46e5] tracking-wider uppercase">Start Your Journey</h2>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#4f46e5]" />
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-[#f3f4f6] mb-3">
          Choose Your Stream
        </h3>
        <p className="text-[#9ca3af]">
          Select your area of interest to explore relevant colleges
        </p>
      </div>

      {/* Stream cards grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
        {[
          { name: "Engineering", slug: "engineering", delay: "0ms", gradient: "from-blue-500/10 to-cyan-500/10" },
          { name: "Medical", slug: "medical", delay: "100ms", gradient: "from-red-500/10 to-pink-500/10" },
          { name: "CUET", slug: "cuet", delay: "200ms", gradient: "from-purple-500/10 to-indigo-500/10" },
          { name: "Others", slug: "others", delay: "300ms", gradient: "from-green-500/10 to-emerald-500/10" },
        ].map((stream, index) => (
          <a
            key={stream.slug}
            href={`/college-type?stream=${stream.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-[#1f2937] bg-[#0f0f0f]/80 backdrop-blur-sm p-10 transition-all duration-500 hover:border-[#4f46e5]/50 hover:bg-[#1a1a1a] hover:shadow-2xl hover:shadow-[#4f46e5]/10 hover:-translate-y-1 animate-slide-up"
            style={{ animationDelay: stream.delay }}
          >
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stream.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#4f46e5]/0 via-[#4f46e5]/30 to-[#4f46e5]/0 animate-border-flow" />
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#4f46e5]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />

            <div className="relative flex flex-col items-center justify-center space-y-4">
              {/* Icon placeholder */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#1f2937] to-[#111827] flex items-center justify-center border border-[#374151] group-hover:border-[#4f46e5]/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <span className="text-2xl font-bold text-[#4f46e5] group-hover:text-[#6366f1] transition-colors">
                  {stream.name.charAt(0)}
                </span>
              </div>

              <span className="text-2xl font-semibold tracking-wide group-hover:text-[#e5e7eb] transition-all duration-300">
                {stream.name}
              </span>

              {/* Hover arrow indicator */}
              <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-sm text-[#9ca3af] font-medium">Explore</span>
                <svg 
                  className="w-4 h-4 text-[#4f46e5] animate-bounce-right" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
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

      {/* Final CTA Section */}
      <div className="relative max-w-4xl mx-auto mb-12">
        <div className="rounded-2xl border border-[#1f2937] bg-gradient-to-br from-[#4f46e5]/10 via-[#0f0f0f]/80 to-[#7c3aed]/10 backdrop-blur-sm p-12 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#4f46e5]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#7c3aed]/10 rounded-full blur-3xl" />
          
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold text-[#f3f4f6] mb-4">
              Ready to Find Your Dream College?
            </h3>
            <p className="text-[#9ca3af] text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of students who have successfully found their perfect college match using College Compass.
            </p>
            <a 
              href="#streams"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#4f46e5] border border-[#4f46e5] rounded-xl text-white font-semibold hover:bg-[#6366f1] transition-all duration-300 shadow-lg shadow-[#4f46e5]/50"
            >
              <span>Start Exploring Now</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer tagline */}
      <div className="relative text-center mt-20 animate-fade-in-delay-long">
        <p className="text-sm text-[#6b7280] font-light tracking-widest uppercase mb-2">
          Your journey begins here
        </p>
        <p className="text-xs text-[#4b5563]">
          © 2024 College Compass. Empowering students to make informed decisions.
        </p>
      </div>
    </main>
  );
}