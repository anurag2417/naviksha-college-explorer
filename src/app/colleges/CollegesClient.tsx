"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { College, colleges } from "@/data/colleges";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";

export default function Colleges() {
  const searchParams = useSearchParams();
  const stream = searchParams.get("stream");
  const type = searchParams.get("type");
  const [sortBy, setSortBy] = useState("ranking");

  // Filter colleges with proper validation
  const filteredColleges = colleges
    .filter((college) => {
      if (!college) return false;

      if (stream && college.stream !== stream) return false;
      if (type && college.type !== type) return false;
      return true;
    })
    .sort((a, b) => {
      // Safely get values with fallbacks
      const getValue = (college: College, key: string) => {
        switch (key) {
          case "ranking":
            return college.ranking || 9999;
          case "fees-low":
            return college.fees?.annual || 99999999;
          case "fees-high":
            return -(college.fees?.annual || 0);
          case "rating":
            return -(college.rating || 0);
          case "placement":
            return -(college.placement?.averagePackage || 0);
          default:
            return college.ranking || 9999;
        }
      };

      return getValue(a, sortBy) - getValue(b, sortBy);
    });

  // Helper functions with fallbacks
  // Helper functions with proper typing and error handling
  const getSafeValue = (college: any, path: string, defaultValue = 0) => {
    if (!college) return defaultValue;

    const keys = path.split(".");
    let value = college;

    for (const key of keys) {
      if (value && typeof value === "object" && key in value) {
        value = value[key];
      } else {
        return defaultValue;
      }
    }

    return value !== undefined && value !== null ? value : defaultValue;
  };

  const calculateAverage = (colleges: any[], path: string) => {
    if (!colleges || !colleges.length) return 0;

    const validColleges = colleges.filter(
      (college) => getSafeValue(college, path, 0) !== 0,
    );

    if (!validColleges.length) return 0;

    const sum = validColleges.reduce(
      (acc, college) => acc + getSafeValue(college, path, 0),
      0,
    );

    return sum / validColleges.length;
  };

  const formatCurrency = (amount: number) => {
    if (amount === null || amount === undefined) return "N/A";
    if (amount === 0) return "₹0";
    if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)} Cr`;
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)} L`;
    return `₹${amount.toLocaleString()}`;
  };

  const getRatingColor = (rating: number) => {
    if (!rating && rating !== 0) return "text-gray-400";
    if (rating >= 4.5) return "text-green-400";
    if (rating >= 4.0) return "text-emerald-400";
    if (rating >= 3.5) return "text-yellow-400";
    return "text-orange-400";
  };

  const getRankingBadge = (ranking: number) => {
    if (!ranking)
      return "bg-gradient-to-r from-gray-500/20 to-gray-700/20 text-gray-400";
    if (ranking <= 10)
      return "bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-400";
    if (ranking <= 50)
      return "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400";
    if (ranking <= 100)
      return "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400";
    return "bg-gradient-to-r from-gray-500/20 to-gray-700/20 text-gray-400";
  };

  const streamDisplayNames: Record<string, string> = {
    engineering: "Engineering",
    medical: "Medical",
    cuet: "CUET",
    others: "Others",
  };

  const typeDisplayNames: Record<string, string> = {
    government: "Government",
    semi: "Semi-Government",
    private: "Private",
    "new-age": "New-Age",
  };

  const getCollegeInitials = (name: string) => {
    if (!name) return "CO";
    return name
      .split(" ")
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  const getGradientForIndex = (index: number) => {
    const gradients = [
      "from-blue-500/20 via-blue-500/10 to-cyan-500/20",
      "from-purple-500/20 via-purple-500/10 to-pink-500/20",
      "from-green-500/20 via-green-500/10 to-emerald-500/20",
      "from-orange-500/20 via-orange-500/10 to-red-500/20",
      "from-indigo-500/20 via-indigo-500/10 to-blue-500/20",
      "from-pink-500/20 via-pink-500/10 to-rose-500/20",
    ];
    return gradients[index % gradients.length];
  };

  // Calculate statistics with fallbacks
  const avgPackage = calculateAverage(
    filteredColleges,
    "placement.averagePackage",
  );
  const avgFees = calculateAverage(filteredColleges, "fees.annual");
  const avgRating = calculateAverage(filteredColleges, "rating");
  const avgPlacementPercentage = calculateAverage(
    filteredColleges,
    "placement.percentage",
  );

  // Get highest package safely
  const highestPackage =
    filteredColleges.length > 0
      ? Math.max(
          ...filteredColleges.map((college) =>
            getSafeValue(college, "placement.highestPackage", 0),
          ),
        )
      : 0;

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#050505] text-[#f3f4f6] px-4 sm:px-6 py-16 sm:py-20 selection:bg-[#4f46e5] selection:text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#4f46e5]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-[#10b981]/3 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Navigation Breadcrumb */}
      <div className="relative max-w-7xl mx-auto mb-6 sm:mb-8 animate-fade-in">
        <nav className="flex items-center flex-wrap gap-2 text-sm">
          <Link
            href="/"
            className="text-[#9ca3af] hover:text-[#f3f4f6] transition-colors duration-300 inline-flex items-center gap-1"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Streams
          </Link>
          <span className="text-[#4b5563]">›</span>
          <Link
            href={`/college-type?stream=${stream}`}
            className="text-[#9ca3af] hover:text-[#f3f4f6] transition-colors duration-300 inline-flex items-center gap-1"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            College Type
          </Link>
          <span className="text-[#4b5563]">›</span>
          <span className="text-[#f3f4f6] font-medium inline-flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            Colleges
          </span>
        </nav>
      </div>

      {/* Header Section */}
      <div className="relative max-w-7xl mx-auto mb-8 sm:mb-12 animate-fade-in">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {stream && (
                <span className="px-3 py-1.5 rounded-full bg-[#1f2937] border border-[#374151] text-[#9ca3af] text-sm font-medium inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  {streamDisplayNames[stream] || stream}
                </span>
              )}
              {type && (
                <span className="px-3 py-1.5 rounded-full bg-[#1f2937] border border-[#374151] text-[#9ca3af] text-sm font-medium inline-flex items-center gap-1.5 capitalize">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                  {typeDisplayNames[type] || type}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#f3f4f6] via-[#e5e7eb] to-[#9ca3af] bg-clip-text text-transparent mb-3">
              Top {stream && streamDisplayNames[stream]}{" "}
              {type && typeDisplayNames[type]} Colleges
            </h1>

            <p className="text-[#9ca3af] text-sm sm:text-base lg:text-lg font-light max-w-3xl leading-relaxed">
              Discover and compare leading institutions with detailed rankings,
              placement records, fees, and admission criteria
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
            <div className="px-4 py-3 rounded-xl bg-[#1f2937] border border-[#374151] text-[#9ca3af] text-sm">
              <div className="text-xs text-[#6b7280] mb-1">Showing</div>
              <div>
                <span className="font-bold text-xl text-[#f3f4f6]">
                  {filteredColleges.length}
                </span>
                <span className="ml-1.5">
                  College{filteredColleges.length !== 1 ? "s" : ""}
                </span>
              </div>
            </div>

            <div className="px-4 py-3 rounded-xl bg-gradient-to-r from-[#1f2937] to-[#111827] border border-[#374151] text-[#9ca3af] text-sm">
              <div className="text-xs text-[#6b7280] mb-1">Avg. Package</div>
              <div className="font-bold text-lg text-emerald-400">
                {avgPackage > 0 ? formatCurrency(avgPackage) : "N/A"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Sorting */}
      <div className="relative max-w-7xl mx-auto mb-8 animate-fade-in-delay">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#0f0f0f]/60 backdrop-blur-sm border border-[#1f2937]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-[#e5e7eb]">Sort by:</span>
            <div className="flex flex-wrap gap-2">
              {[
                { id: "ranking", label: "Ranking", icon: "🏆" },
                { id: "rating", label: "Rating", icon: "⭐" },
                { id: "placement", label: "Package", icon: "💰" },
                { id: "fees-low", label: "Fees Low to High", icon: "📉" },
                { id: "fees-high", label: "Fees High to Low", icon: "📈" },
              ].map((sortOption) => (
                <button
                  key={sortOption.id}
                  onClick={() => setSortBy(sortOption.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                    sortBy === sortOption.id
                      ? "bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] text-white border border-[#4f46e5]"
                      : "bg-[#1f2937] border border-[#374151] text-[#9ca3af] hover:border-[#4f46e5]/50 hover:text-[#e5e7eb]"
                  }`}
                >
                  <span>{sortOption.icon}</span>
                  <span>{sortOption.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-[#9ca3af]">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Data updated: Dec 2024</span>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="relative max-w-7xl mx-auto mb-10 animate-fade-in-delay">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              label: "Top Package",
              value:
                highestPackage > 0 ? formatCurrency(highestPackage) : "N/A",
              icon: "💰",
              color: "text-emerald-400",
            },
            {
              label: "Avg. Fees (Annual)",
              value: avgFees > 0 ? formatCurrency(avgFees) : "N/A",
              icon: "📊",
              color: "text-blue-400",
            },
            {
              label: "Avg. Rating",
              value: avgRating > 0 ? avgRating.toFixed(1) : "N/A",
              icon: "⭐",
              color: "text-yellow-400",
            },
            {
              label: "Avg. Placement %",
              value:
                avgPlacementPercentage > 0
                  ? `${Math.round(avgPlacementPercentage)}%`
                  : "N/A",
              icon: "📈",
              color: "text-green-400",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-[#1f2937] hover:border-[#374151] transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{stat.icon}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-[#1f2937] text-[#9ca3af]">
                  {stat.label}
                </span>
              </div>
              <div className={`text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* College Cards Grid */}
      <div className="relative max-w-7xl mx-auto grid gap-4 sm:gap-6">
        {filteredColleges.map((college, index) => {
          // Safely get all values
          const safeRating = getSafeValue(college, "rating", 0);
          const safeAvgPackage = getSafeValue(
            college,
            "placement.averagePackage",
            0,
          );
          const safeAnnualFees = getSafeValue(college, "fees.annual", 0);
          const safePlacementPercentage = getSafeValue(
            college,
            "placement.percentage",
            0,
          );
          const safeRanking = getSafeValue(college, "ranking", 9999);
          const safeTopRecruiters = getSafeValue(
            college,
            "placement.topRecruiters",
            
          );
          const safeAccreditation = getSafeValue(
            college,
            "accreditation",
          
          );
          const safeEstablished = getSafeValue(college, "established");
          const safeLocation = getSafeValue(college, "location"

          );

          return (
            <Link
              key={college.slug || index}
              href={`/colleges/${college.slug || "#"}`}
              className="group relative overflow-hidden rounded-2xl border border-[#1f2937] bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] backdrop-blur-sm transition-all duration-500 hover:border-[#4f46e5]/50 hover:bg-gradient-to-br hover:from-[#1a1a1a] hover:to-[#252525] hover:shadow-2xl hover:shadow-[#4f46e5]/10 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${getGradientForIndex(index)} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Ranking Badge */}
              {safeRanking !== 9999 && (
                <div
                  className={`absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full text-xs font-bold ${getRankingBadge(safeRanking)} border border-white/10`}
                >
                  #{safeRanking}
                </div>
              )}

              <div className="relative p-5 sm:p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Logo Section */}
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#1f2937] to-[#111827] flex items-center justify-center border border-[#374151] group-hover:border-[#4f46e5]/50 transition-all duration-300 group-hover:scale-105 group-hover:rotate-2 shadow-lg">
                      <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-br from-[#9ca3af] to-[#6b7280] bg-clip-text text-transparent">
                        {getCollegeInitials(college.name || "College")}
                      </span>
                    </div>
                    {/* Location Badge */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-lg bg-[#1f2937] border border-[#374151] text-xs text-[#9ca3af] whitespace-nowrap">
                      {safeLocation.city}, {safeLocation.state}
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 min-w-0">
                    {/* College Name and Basic Info */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                      <div className="flex-1">
                        <h2 className="text-xl sm:text-2xl font-semibold leading-tight group-hover:text-[#e5e7eb] transition-colors duration-300 mb-1">
                          {college.name || "College Name"}
                        </h2>
                        <p className="text-sm text-[#9ca3af] mb-3 line-clamp-2">
                          {college.overview || "No description available"}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-3 group-hover:translate-x-0">
                        <span className="text-sm text-[#4f46e5] font-medium whitespace-nowrap hidden sm:inline">
                          View Details
                        </span>
                        <svg
                          className="w-5 h-5 text-[#4f46e5] animate-bounce-right flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                      {/* Rating */}
                      <div className="p-3 rounded-xl bg-[#1f2937]/50 border border-[#374151] group-hover:border-[#374151]/70 transition-colors">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span
                            className={`text-lg font-bold ${getRatingColor(safeRating)}`}
                          >
                            {safeRating > 0 ? safeRating.toFixed(1) : "N/A"}
                          </span>
                          {safeRating > 0 && (
                            <svg
                              className="w-4 h-4 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          )}
                        </div>
                        <div className="text-xs text-[#9ca3af]">Rating</div>
                      </div>

                      {/* Average Package */}
                      <div className="p-3 rounded-xl bg-[#1f2937]/50 border border-[#374151] group-hover:border-[#374151]/70 transition-colors">
                        <div className="text-lg font-bold text-emerald-400 mb-1">
                          {safeAvgPackage > 0
                            ? formatCurrency(safeAvgPackage)
                            : "N/A"}
                        </div>
                        <div className="text-xs text-[#9ca3af]">
                          Avg. Package
                        </div>
                      </div>

                      {/* Annual Fees */}
                      <div className="p-3 rounded-xl bg-[#1f2937]/50 border border-[#374151] group-hover:border-[#374151]/70 transition-colors">
                        <div className="text-lg font-bold text-blue-400 mb-1">
                          {safeAnnualFees > 0
                            ? formatCurrency(safeAnnualFees)
                            : "N/A"}
                        </div>
                        <div className="text-xs text-[#9ca3af]">
                          Annual Fees
                        </div>
                      </div>

                      {/* Placement % */}
                      <div className="p-3 rounded-xl bg-[#1f2937]/50 border border-[#374151] group-hover:border-[#374151]/70 transition-colors">
                        <div className="text-lg font-bold text-green-400 mb-1">
                          {safePlacementPercentage > 0
                            ? `${safePlacementPercentage}%`
                            : "N/A"}
                        </div>
                        <div className="text-xs text-[#9ca3af]">Placement</div>
                      </div>
                    </div>

                    {/* Badges and Tags */}
                    <div className="flex flex-wrap gap-2">
                      {/* Stream Badge */}
                      <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 text-blue-300 capitalize inline-flex items-center gap-1.5">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {college.stream || "Stream"}
                      </span>

                      {/* Type Badge */}
                      <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20 text-purple-300 capitalize inline-flex items-center gap-1.5">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                        {college.type || "Type"}
                      </span>

                      {/* Accreditation Badge */}
                      {safeAccreditation !== "NA" && (
                        <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 text-green-300 inline-flex items-center gap-1.5">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                          {safeAccreditation}
                        </span>
                      )}

                      {/* Established Year */}
                      {safeEstablished !== "N/A" && (
                        <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-r from-gray-500/10 to-gray-600/10 border border-gray-500/20 text-gray-300 inline-flex items-center gap-1.5">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          Est. {safeEstablished}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Top Recruiters Preview */}
                {safeTopRecruiters.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-[#1f2937] group-hover:border-[#374151] transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-[#e5e7eb]">
                        Top Recruiters
                      </span>
                      <span className="text-xs text-[#9ca3af]">
                        {safeTopRecruiters.length}{" "}
                        {safeTopRecruiters.length === 1
                          ? "company"
                          : "companies"}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {safeTopRecruiters.slice(0, 5).map((recruiter: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, idx: Key | null | undefined) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1.5 rounded-lg text-xs bg-[#1f2937] border border-[#374151] text-[#9ca3af] hover:border-[#4f46e5]/30 hover:text-[#e5e7eb] transition-colors"
                        >
                          {recruiter}
                        </span>
                      ))}
                      {safeTopRecruiters.length > 5 && (
                        <span className="px-2.5 py-1.5 rounded-lg text-xs bg-gradient-to-r from-[#1f2937] to-[#111827] border border-[#374151] text-[#9ca3af]">
                          +{safeTopRecruiters.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#4f46e5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          );
        })}

        {/* Empty State */}
        {filteredColleges.length === 0 && (
          <div className="relative rounded-2xl border border-[#1f2937] bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] p-12 sm:p-16 text-center animate-fade-in">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#1f2937] to-[#111827] border border-[#374151] flex items-center justify-center">
              <svg
                className="w-10 h-10 text-[#6b7280]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#f3f4f6] mb-2">
              No Colleges Found
            </h3>
            <p className="text-[#9ca3af] mb-6 max-w-md mx-auto">
              We couldn't find any colleges matching your selected criteria. Try
              adjusting your filters or explore other options.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/college-type?stream=${stream}`}
                className="px-6 py-3 bg-gradient-to-r from-[#1f2937] to-[#111827] border border-[#374151] rounded-xl text-[#f3f4f6] hover:bg-gradient-to-r hover:from-[#374151] hover:to-[#1f2937] hover:border-[#4f46e5]/50 transition-all duration-300 font-medium inline-flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Change College Type
              </Link>
              <Link
                href="/"
                className="px-6 py-3 bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] border border-[#4f46e5] rounded-xl text-white hover:from-[#6366f1] hover:to-[#8b5cf6] transition-all duration-300 font-medium inline-flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Choose Different Stream
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Footer Navigation and Info */}
      {filteredColleges.length > 0 && (
        <div className="relative max-w-7xl mx-auto mt-10 sm:mt-12 pt-8 border-t border-[#1f2937] animate-fade-in-delay-long">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  className="w-4 h-4 text-[#4f46e5]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm font-medium text-[#e5e7eb]">
                  Important Information
                </span>
              </div>
              <p className="text-sm text-[#9ca3af] max-w-2xl">
                All data is collected from official sources and updated
                regularly. Fees mentioned are approximate annual tuition fees.
                Placement packages are average figures from the last placement
                season. Rankings are based on NIRF 2024 where applicable.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href={`/college-type?stream=${stream}`}
                className="inline-flex items-center gap-2 text-sm text-[#9ca3af] hover:text-[#f3f4f6] transition-colors group px-4 py-2 rounded-lg bg-[#1f2937] border border-[#374151] hover:border-[#4f46e5]/50"
              >
                <svg
                  className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Types
              </Link>

              <button className="inline-flex items-center gap-2 text-sm text-[#9ca3af] hover:text-[#f3f4f6] transition-colors px-4 py-2 rounded-lg bg-[#1f2937] border border-[#374151] hover:border-[#4f46e5]/50">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Export List
              </button>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-[#1f2937]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6b7280]">
              <div>
                Showing{" "}
                <span className="font-semibold text-[#f3f4f6]">
                  {filteredColleges.length}
                </span>{" "}
                out of{" "}
                <span className="font-semibold text-[#f3f4f6]">
                  {colleges.length}
                </span>{" "}
                total colleges
              </div>
              <div className="flex items-center gap-4">
                <span>
                  Need help?{" "}
                  <a
                    href="#"
                    className="text-[#4f46e5] hover:text-[#6366f1] transition-colors"
                  >
                    Contact our experts
                  </a>
                </span>
                <span>•</span>
                <span>Last updated: December 2024</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
