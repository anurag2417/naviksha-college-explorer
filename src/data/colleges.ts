// /data/colleges.ts

export interface College {
  // Basic Information
  id: string;
  slug: string;
  name: string;
  shortName?: string;
  tagline?: string;
  overview: string;
  description: string;
  logo?: string;
  
  // Classification
  stream: 'engineering' | 'medical' | 'cuet' | 'others';
  type: 'government' | 'semi' | 'private' | 'new-age';
  category: 'premier' | 'tier1' | 'tier2' | 'tier3';
  
  // Rankings & Ratings
  ranking: number;
  rating: number;
  nirfRank?: number;
  googleRating?: number;
  reviews: {
    count: number;
    average: number;
    academics: number;
    infrastructure: number;
    placement: number;
    faculty: number;
  };
  
  // Establishment & Accreditation
  established: number;
  accreditation: string;
  naacGrade?: string;
  affiliations?: string[];
  recognition?: string[];
  
  // Location
  location: {
    city: string;
    state: string;
    country: string;
    pincode?: string;
    campusSize?: string;
    campusType?: 'urban' | 'suburban' | 'rural';
    latitude?: number;
    longitude?: number;
    address: string;
  };
  
  // Fees Structure
  fees: {
    annual: number;
    total: number;
    hostel: number;
    mess: number;
    otherCharges: number;
    scholarshipAvailable: boolean;
    scholarshipDetails?: string[];
    paymentOptions?: string[];
  };
  
  // Placement Details
  placement: {
    averagePackage: number;
    highestPackage: number;
    medianPackage: number;
    percentage: number;
    totalOffers: number;
    totalStudents: number;
    internationalOffers: number;
    dreamOffers: number;
    averagePackageTrend?: number; // % increase/decrease
    topRecruiters: string[];
    recruitmentSectors: string[];
    placementStats: {
      year: number;
      averagePackage: number;
      highestPackage: number;
      percentage: number;
    }[];
  };
  
  // Academics
  academics: {
    coursesOffered: string[];
    popularCourses: string[];
    facultyCount: number;
    studentCount: number;
    studentFacultyRatio: string;
    specialization: string[];
    departments: string[];
    researchCenters?: number;
    publications?: number;
    collaborations?: string[];
    teachingMode?: 'offline' | 'online' | 'hybrid';
  };
  
  // Infrastructure
  infrastructure: {
    library: {
      name: string;
      books: number;
      journals: number;
      digitalResources: number;
      seatingCapacity: number;
    };
    labs: {
      count: number;
      majorLabs: string[];
      equipmentValue?: number;
    };
    sports: {
      facilities: string[];
      stadium?: boolean;
      gym?: boolean;
      swimmingPool?: boolean;
    };
    hostel: {
      boys: boolean;
      girls: boolean;
      capacity: number;
      rooms: number;
      facilities: string[];
    };
    wifi: boolean;
    cafeteria: number;
    medical: boolean;
    transportation: boolean;
    auditorium: number;
  };
  
  // Admission Process
  admission: {
    entranceExam: string[];
    cutoff: number;
    cutoffTrend?: number;
    applicationMode: string;
    applicationFee: number;
    selectionProcess: string[];
    eligibility: {
      minPercentage: number;
      subjectsRequired: string[];
      ageLimit?: number;
    };
    importantDates: {
      applicationStart: string;
      applicationEnd: string;
      examDate: string;
      resultDate: string;
      counsellingStart: string;
      counsellingEnd: string;
    };
    documentsRequired: string[];
  };
  
  // Campus Life
  campusLife: {
    clubs: string[];
    festivals: string[];
    technicalEvents: string[];
    culturalEvents: string[];
    socialInitiatives: string[];
    annualBudget?: number;
  };
  
  // Faculty
  faculty: {
    total: number;
    phdHolders: number;
    professor: number;
    associateProfessor: number;
    assistantProfessor: number;
    industryExperience: number; // average years
    internationalFaculty?: number;
    awards?: string[];
  };
  
  // Alumni
  alumni: {
    notableAlumni: {
      name: string;
      designation: string;
      company: string;
    }[];
    placementCompanies?: string[];
    networkStrength?: number;
  };
  
  // International Relations
  international: {
    collaborations: number;
    studentExchange: boolean;
    facultyExchange: boolean;
    partnerUniversities?: string[];
    foreignStudents?: number;
  };
  
  // Contact & Social
  contact: {
    phone: string[];
    email: string[];
    website: string;
    socialMedia: {
      facebook?: string;
      twitter?: string;
      linkedin?: string;
      instagram?: string;
      youtube?: string;
    };
    admissionContact: {
      phone: string;
      email: string;
    };
  };
  
  // Additional
  facilities: string[];
  achievements: string[];
  newsUpdates?: {
    title: string;
    date: string;
    link?: string;
  }[];
  gallery?: {
    type: 'campus' | 'lab' | 'event' | 'hostel' | 'sports';
    url: string;
    caption?: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export const colleges: College[] = [
  {
    id: "1",
    slug: "iit-bombay",
    name: "Indian Institute of Technology Bombay",
    shortName: "IIT Bombay",
    tagline: "ज्ञानं परमं ध्येयं (Knowledge is the Supreme Goal)",
    overview: "Premier engineering institute consistently ranked #1 in India",
    description: "Indian Institute of Technology Bombay is a public technical and research university located in Powai, Mumbai. Established in 1958, it is one of the oldest IITs in India. The institute is known for its strong emphasis on scientific and technological research and development.",
    logo: "/logos/iit-bombay.png",
    stream: "engineering",
    type: "government",
    category: "premier",
    ranking: 1,
    rating: 4.8,
    nirfRank: 1,
    googleRating: 4.7,
    reviews: {
      count: 12450,
      average: 4.8,
      academics: 4.9,
      infrastructure: 4.7,
      placement: 4.9,
      faculty: 4.8
    },
    established: 1958,
    accreditation: "Institute of National Importance",
    naacGrade: "A++",
    affiliations: ["Institute of National Importance"],
    recognition: ["UGC", "AICTE", "MHRD"],
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      pincode: "400076",
      campusSize: "550 acres",
      campusType: "urban",
      latitude: 19.1334,
      longitude: 72.9133,
      address: "IIT Bombay, Powai, Mumbai, Maharashtra 400076"
    },
    fees: {
      annual: 250000,
      total: 1000000,
      hostel: 80000,
      mess: 50000,
      otherCharges: 20000,
      scholarshipAvailable: true,
      scholarshipDetails: [
        "Merit-cum-Means Scholarship",
        "Institute Free Studentship",
        "SC/ST Scholarship",
        "Government Scholarships"
      ],
      paymentOptions: ["Online Payment", "DD", "Bank Transfer"]
    },
    placement: {
      averagePackage: 2500000,
      highestPackage: 45000000,
      medianPackage: 2200000,
      percentage: 95,
      totalOffers: 1250,
      totalStudents: 1300,
      internationalOffers: 150,
      dreamOffers: 200,
      averagePackageTrend: 12,
      topRecruiters: [
        "Microsoft", "Google", "Amazon", "Goldman Sachs", 
        "McKinsey & Company", "Tata Group", "Reliance Industries", "Intel",
        "NVIDIA", "Adobe", "Qualcomm", "Texas Instruments"
      ],
      recruitmentSectors: ["IT", "Finance", "Consulting", "Core Engineering", "Research"],
      placementStats: [
        { year: 2024, averagePackage: 2500000, highestPackage: 45000000, percentage: 95 },
        { year: 2023, averagePackage: 2200000, highestPackage: 42000000, percentage: 94 },
        { year: 2022, averagePackage: 2000000, highestPackage: 40000000, percentage: 93 }
      ]
    },
    academics: {
      coursesOffered: ["B.Tech", "M.Tech", "PhD", "Dual Degree", "M.Sc", "M.Des", "MBA"],
      popularCourses: ["B.Tech Computer Science", "B.Tech Electrical Engineering", "M.Tech"],
      facultyCount: 650,
      studentCount: 10000,
      studentFacultyRatio: "8:1",
      specialization: ["Computer Science", "Electrical", "Mechanical", "Chemical", "Aerospace", "Civil"],
      departments: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Chemical Engineering", "Civil Engineering", "Physics", "Chemistry", "Mathematics"],
      researchCenters: 120,
      publications: 4500,
      collaborations: ["MIT", "Stanford", "University of California", "University of Tokyo"],
      teachingMode: "offline"
    },
    infrastructure: {
      library: {
        name: "Central Library",
        books: 500000,
        journals: 12000,
        digitalResources: 150000,
        seatingCapacity: 1200
      },
      labs: {
        count: 250,
        majorLabs: ["Advanced Computing Lab", "Robotics Lab", "Biotech Lab", "Nano Technology Lab", "AI Research Center"],
        equipmentValue: 500000000
      },
      sports: {
        facilities: ["Olympic-size Swimming Pool", "Stadium", "Gymnasium", "Tennis Courts", "Basketball Courts", "Cricket Ground"],
        stadium: true,
        gym: true,
        swimmingPool: true
      },
      hostel: {
        boys: true,
        girls: true,
        capacity: 8000,
        rooms: 4000,
        facilities: ["WiFi", "Laundry", "Common Room", "Study Room", "Gym", "Cafeteria"]
      },
      wifi: true,
      cafeteria: 8,
      medical: true,
      transportation: true,
      auditorium: 3
    },
    admission: {
      entranceExam: ["JEE Advanced"],
      cutoff: 98.5,
      cutoffTrend: 0.5,
      applicationMode: "Online",
      applicationFee: 2500,
      selectionProcess: ["JEE Advanced Score", "Counseling", "Seat Allocation"],
      eligibility: {
        minPercentage: 75,
        subjectsRequired: ["Physics", "Chemistry", "Mathematics"],
        ageLimit: 25
      },
      importantDates: {
        applicationStart: "January 1, 2024",
        applicationEnd: "April 30, 2024",
        examDate: "June 2024",
        resultDate: "July 2024",
        counsellingStart: "July 15, 2024",
        counsellingEnd: "August 30, 2024"
      },
      documentsRequired: ["10th Marksheet", "12th Marksheet", "JEE Advanced Scorecard", "Caste Certificate", "Income Certificate"]
    },
    campusLife: {
      clubs: ["Robotics Club", "Programming Club", "Drama Club", "Music Club", "Entrepreneurship Cell"],
      festivals: ["Mood Indigo", "Techfest", "E-Summit"],
      technicalEvents: ["Codefest", "Hackathon", "Robowars"],
      culturalEvents: ["Dance Competition", "Music Festival", "Drama Nights"],
      socialInitiatives: ["NSS", "Teach for India", "Environmental Club"],
      annualBudget: 50000000
    },
    faculty: {
      total: 650,
      phdHolders: 620,
      professor: 200,
      associateProfessor: 250,
      assistantProfessor: 200,
      industryExperience: 8,
      internationalFaculty: 50,
      awards: ["Padma Shri", "Shanti Swarup Bhatnagar Prize", "Infosys Prize"]
    },
    alumni: {
      notableAlumni: [
        { name: "N. R. Narayana Murthy", designation: "Founder", company: "Infosys" },
        { name: "Arvind Subramanian", designation: "Former Chief Economic Advisor", company: "Government of India" },
        { name: "Kris Gopalakrishnan", designation: "Co-founder", company: "Infosys" }
      ],
      placementCompanies: ["Google", "Microsoft", "Goldman Sachs", "McKinsey"],
      networkStrength: 95
    },
    international: {
      collaborations: 150,
      studentExchange: true,
      facultyExchange: true,
      partnerUniversities: ["MIT", "Stanford", "ETH Zurich", "University of Tokyo"],
      foreignStudents: 300
    },
    contact: {
      phone: ["+91-22-25722545", "+91-22-25722550"],
      email: ["office@iitb.ac.in", "admission@iitb.ac.in"],
      website: "https://www.iitb.ac.in",
      socialMedia: {
        facebook: "https://facebook.com/iitbombay",
        twitter: "https://twitter.com/iitbombay",
        linkedin: "https://linkedin.com/school/iit-bombay",
        instagram: "https://instagram.com/iitbombay",
        youtube: "https://youtube.com/iitbombay"
      },
      admissionContact: {
        phone: "+91-22-25767060",
        email: "admission@iitb.ac.in"
      }
    },
    facilities: ["24x7 Library", "High-speed WiFi", "Sports Complex", "Medical Center", "Bank & ATM", "Post Office", "Shopping Complex"],
    achievements: [
      "#1 Engineering Institute in India (NIRF 2024)",
      "QS World Ranking: 149",
      "Most International Patents among Indian Universities"
    ],
    newsUpdates: [
      { title: "IIT Bombay launches new AI Research Center", date: "2024-01-15", link: "https://example.com/news1" },
      { title: "Record placement season with 95% placement", date: "2023-12-20", link: "https://example.com/news2" }
    ],
    gallery: [
      { type: "campus", url: "/gallery/iitb-campus1.jpg", caption: "Main Building" },
      { type: "lab", url: "/gallery/iitb-lab1.jpg", caption: "Robotics Lab" },
      { type: "event", url: "/gallery/iitb-event1.jpg", caption: "Mood Indigo Festival" }
    ],
    faqs: [
      { question: "What is the JEE Advanced cutoff for IIT Bombay?", answer: "Typically around 98-99 percentile for general category." },
      { question: "Does IIT Bombay offer scholarships?", answer: "Yes, multiple scholarships based on merit and need." }
    ]
  },
  {
    id: "2",
    slug: "aiims-delhi",
    name: "All India Institute of Medical Sciences Delhi",
    shortName: "AIIMS Delhi",
    tagline: "शरीरमाद्यं खलु धर्मसाधनम् (Body is indeed the primary instrument of dharma)",
    overview: "Top medical college in India with world-class healthcare facilities",
    description: "AIIMS Delhi is a public medical school and hospital based in New Delhi. It is one of the oldest and most prestigious medical colleges in India.",
    stream: "medical",
    type: "government",
    category: "premier",
    ranking: 1,
    rating: 4.7,
    nirfRank: 1,
    googleRating: 4.6,
    reviews: {
      count: 8950,
      average: 4.7,
      academics: 4.8,
      infrastructure: 4.6,
      placement: 4.8,
      faculty: 4.7
    },
    established: 1956,
    accreditation: "MCI Approved",
    naacGrade: "A++",
    location: {
      city: "New Delhi",
      state: "Delhi",
      country: "India",
      pincode: "110029",
      campusSize: "150 acres",
      campusType: "urban",
      address: "Ansari Nagar, New Delhi, Delhi 110029"
    },
    fees: {
      annual: 50000,
      total: 250000,
      hostel: 60000,
      mess: 40000,
      otherCharges: 15000,
      scholarshipAvailable: true,
      scholarshipDetails: ["Central Sector Scheme", "State Government Scholarships"],
      paymentOptions: ["Online", "DD"]
    },
    placement: {
      averagePackage: 1800000,
      highestPackage: 35000000,
      medianPackage: 1500000,
      percentage: 98,
      totalOffers: 450,
      totalStudents: 460,
      internationalOffers: 20,
      dreamOffers: 50,
      averagePackageTrend: 10,
      topRecruiters: [
        "AIIMS Hospitals", "Fortis Healthcare", "Apollo Hospitals", "Medanta",
        "Government Hospitals", "Research Institutes", "WHO", "UNICEF"
      ],
      recruitmentSectors: ["Hospitals", "Research", "Public Health", "Academics"],
      placementStats: [
        { year: 2024, averagePackage: 1800000, highestPackage: 35000000, percentage: 98 },
        { year: 2023, averagePackage: 1650000, highestPackage: 32000000, percentage: 97 }
      ]
    },
    academics: {
      coursesOffered: ["MBBS", "MD", "MS", "DM", "MCh", "PhD", "BSc Nursing"],
      popularCourses: ["MBBS", "MD General Medicine", "MS Surgery"],
      facultyCount: 800,
      studentCount: 3000,
      studentFacultyRatio: "6:1",
      specialization: ["Cardiology", "Neurology", "Oncology", "Surgery", "Pediatrics"],
      departments: ["Medicine", "Surgery", "Pediatrics", "Obstetrics & Gynecology", "Pathology", "Radiology"],
      researchCenters: 50,
      publications: 3000,
      teachingMode: "offline"
    },
    infrastructure: {
      library: {
        name: "AIIMS Library",
        books: 300000,
        journals: 8000,
        digitalResources: 100000,
        seatingCapacity: 800
      },
      labs: {
        count: 150,
        majorLabs: ["Research Lab", "Pathology Lab", "Microbiology Lab", "Biochemistry Lab"]
      },
      sports: {
        facilities: ["Gym", "Basketball Court", "Badminton Court"],
        gym: true
      },
      hostel: {
        boys: true,
        girls: true,
        capacity: 2000,
        rooms: 1000,
        facilities: ["WiFi", "Common Room", "Study Room"]
      },
      wifi: true,
      cafeteria: 5,
      medical: true,
      transportation: true,
      auditorium: 2
    },
    admission: {
      entranceExam: ["NEET UG", "NEET PG"],
      cutoff: 99.5,
      applicationMode: "Online",
      applicationFee: 2000,
      selectionProcess: ["NEET Score", "Counseling"],
      eligibility: {
        minPercentage: 60,
        subjectsRequired: ["Physics", "Chemistry", "Biology"]
      },
      importantDates: {
        applicationStart: "December 1, 2023",
        applicationEnd: "January 31, 2024",
        examDate: "May 2024",
        resultDate: "June 2024",
        counsellingStart: "July 2024",
        counsellingEnd: "August 2024"
      },
      documentsRequired: ["10th Marksheet", "12th Marksheet", "NEET Scorecard", "Birth Certificate"]
    },
    campusLife: {
      clubs: ["Medical Students Association", "Research Club", "Social Service Club"],
      festivals: ["Aarogyam", "Medifest"],
      technicalEvents: ["Medical Conference", "Research Symposium"],
      culturalEvents: ["Annual Day", "Freshers Party"],
      socialInitiatives: ["Free Medical Camps", "Health Awareness Drives"]
    },
    faculty: {
      total: 800,
      phdHolders: 750,
      professor: 300,
      associateProfessor: 300,
      assistantProfessor: 200,
      industryExperience: 10
    },
    alumni: {
      notableAlumni: [
        { name: "Dr. Naresh Trehan", designation: "Chairman", company: "Medanta Hospital" },
        { name: "Dr. Randeep Guleria", designation: "Former Director", company: "AIIMS Delhi" }
      ]
    },
    contact: {
      phone: ["+91-11-26588500"],
      email: ["aiims@aiims.edu"],
      website: "https://www.aiims.edu",
      socialMedia: {
        facebook: "https://facebook.com/aiimsofficial",
        twitter: "https://twitter.com/aiims_newdelhi"
      },
      admissionContact: {
        phone: "+91-11-26589900",
        email: "admission@aiims.edu"
      }
    },
    facilities: ["Hospital", "Library", "Hostel", "Cafeteria", "Sports Complex", "Bank"],
    achievements: [
      "#1 Medical College in India",
      "Centre of Excellence in Medical Research"
    ],
    international: {
      collaborations: 0,
      studentExchange: false,
      facultyExchange: false,
      partnerUniversities: undefined,
      foreignStudents: undefined
    }
  },
  {
    id: "3",
    slug: "bits-pilani",
    name: "Birla Institute of Technology and Science Pilani",
    shortName: "BITS Pilani",
    tagline: "Knowledge is Power",
    overview: "Deemed university known for its innovative curriculum and strong industry connections",
    description: "BITS Pilani is a private deemed university with campuses in Pilani, Goa, Hyderabad, and Dubai. Known for its flexible credit system and strong placement record.",
    stream: "engineering",
    type: "private",
    category: "tier1",
    ranking: 15,
    rating: 4.5,
    nirfRank: 25,
    googleRating: 4.4,
    reviews: {
      count: 10500,
      average: 4.5,
      academics: 4.6,
      infrastructure: 4.4,
      placement: 4.7,
      faculty: 4.5
    },
    established: 1964,
    accreditation: "Deemed University",
    naacGrade: "A++",
    location: {
      city: "Pilani",
      state: "Rajasthan",
      country: "India",
      pincode: "333031",
      campusSize: "328 acres",
      campusType: "suburban",
      address: "Vidya Vihar, Pilani, Rajasthan 333031"
    },
    fees: {
      annual: 350000,
      total: 1400000,
      hostel: 100000,
      mess: 60000,
      otherCharges: 40000,
      scholarshipAvailable: true,
      scholarshipDetails: ["Merit Scholarship", "Need-based Scholarship"],
      paymentOptions: ["Online Payment", "Bank Transfer"]
    },
    placement: {
      averagePackage: 1800000,
      highestPackage: 55000000,
      medianPackage: 1600000,
      percentage: 90,
      totalOffers: 1800,
      totalStudents: 2000,
      internationalOffers: 100,
      dreamOffers: 150,
      averagePackageTrend: 8,
      topRecruiters: [
        "Microsoft", "Amazon", "Adobe", "Morgan Stanley",
        "Texas Instruments", "Oracle", "JP Morgan", "Goldman Sachs"
      ],
      recruitmentSectors: ["IT", "Finance", "Consulting", "Core"],
      placementStats: [
        { year: 2024, averagePackage: 1800000, highestPackage: 55000000, percentage: 90 },
        { year: 2023, averagePackage: 1650000, highestPackage: 50000000, percentage: 89 }
      ]
    },
    academics: {
      coursesOffered: ["B.E.", "M.Sc.", "PhD", "MBA", "M.E."],
      popularCourses: ["B.E. Computer Science", "B.E. Electronics", "M.Sc. Chemistry"],
      facultyCount: 450,
      studentCount: 8000,
      studentFacultyRatio: "10:1",
      specialization: ["Computer Science", "Electronics", "Mechanical", "Chemical", "Pharmacy"],
      departments: ["Computer Science", "Electrical & Electronics", "Mechanical", "Chemical", "Physics", "Chemistry"],
      researchCenters: 75,
      publications: 2500,
      teachingMode: "offline"
    },
    infrastructure: {
      library: {
        name: "Central Library",
        books: 400000,
        journals: 10000,
        digitalResources: 120000,
        seatingCapacity: 1000
      },
      labs: {
        count: 200,
        majorLabs: ["Computing Lab", "Electronics Lab", "Mechanical Workshop", "Chemistry Lab"]
      },
      sports: {
        facilities: ["Swimming Pool", "Gym", "Tennis Courts", "Basketball Courts"],
        gym: true,
        swimmingPool: true
      },
      hostel: {
        boys: true,
        girls: true,
        capacity: 6000,
        rooms: 3000,
        facilities: ["WiFi", "Common Room", "Study Room", "Gym"]
      },
      wifi: true,
      cafeteria: 6,
      medical: true,
      transportation: true,
      auditorium: 2
    },
    admission: {
      entranceExam: ["BITSAT"],
      cutoff: 320,
      applicationMode: "Online",
      applicationFee: 3000,
      selectionProcess: ["BITSAT Score", "Admission Test"],
      eligibility: {
        minPercentage: 75,
        subjectsRequired: ["Physics", "Chemistry", "Mathematics"]
      },
      importantDates: {
        applicationStart: "January 2024",
        applicationEnd: "March 2024",
        examDate: "May-June 2024",
        resultDate: "June 2024",
        counsellingStart: "July 2024",
        counsellingEnd: "August 2024"
      },
      documentsRequired: ["10th Marksheet", "12th Marksheet", "BITSAT Scorecard"]
    },
    campusLife: {
      clubs: ["Technical Club", "Cultural Club", "Sports Club", "Entrepreneurship Cell"],
      festivals: ["Apogee", "BOSM"],
      technicalEvents: ["Code Competition", "Robotics Workshop"],
      culturalEvents: ["Music Festival", "Dance Competition"],
      socialInitiatives: ["NGO Collaboration", "Community Service"]
    },
    faculty: {
      total: 450,
      phdHolders: 400,
      professor: 150,
      associateProfessor: 200,
      assistantProfessor: 100,
      industryExperience: 7
    },
    alumni: {
      notableAlumni: [
        { name: "Kumar Mangalam Birla", designation: "Chairman", company: "Aditya Birla Group" },
        { name: "Sanjiv Bajaj", designation: "Chairman", company: "Bajaj Finserv" }
      ]
    },
    contact: {
      phone: ["+91-1596-242159"],
      email: ["info@pilani.bits-pilani.ac.in"],
      website: "https://www.bits-pilani.ac.in",
      socialMedia: {
        facebook: "https://facebook.com/bitspilani",
        twitter: "https://twitter.com/bitspilani"
      },
      admissionContact: {
        phone: "+91-1596-245073",
        email: "admission@pilani.bits-pilani.ac.in"
      }
    },
    facilities: ["Library", "Hostel", "Sports Complex", "Medical Center", "Bank", "Post Office"],
    achievements: [
      "Institute of Eminence",
      "Excellent Placement Record"
    ],
    international: {
      collaborations: 0,
      studentExchange: false,
      facultyExchange: false,
      partnerUniversities: undefined,
      foreignStudents: undefined
    }
  },
  {
  id: "4",
  slug: "iit-delhi",
  name: "Indian Institute of Technology Delhi",
  shortName: "IIT Delhi",
  tagline: "सिद्धिर्भवति कर्मजा (Success is born of action)",
  overview: "Premier engineering institute and Institute of National Importance located in Delhi",
  description: "Indian Institute of Technology Delhi is one of the 23 Indian Institutes of Technology created to be Centres of Excellence for training, research and development in science, engineering and technology in India. Established as College of Engineering in 1961, the Institute was later declared as an Institution of National Importance under the Institutes of Technology (Amendment) Act, 1963 and was renamed as Indian Institute of Technology Delhi.",
  logo: "/logos/iit-delhi.png",
  stream: "engineering",
  type: "government",
  category: "premier",
  ranking: 2,
  rating: 4.7,
  nirfRank: 2,
  googleRating: 4.6,
  reviews: {
    count: 11800,
    average: 4.7,
    academics: 4.8,
    infrastructure: 4.6,
    placement: 4.8,
    faculty: 4.7
  },
  established: 1961,
  accreditation: "Institute of National Importance",
  naacGrade: "A++",
  affiliations: ["Institute of National Importance"],
  recognition: ["UGC", "AICTE", "MHRD"],
  location: {
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    pincode: "110016",
    campusSize: "325 acres",
    campusType: "urban",
    latitude: 28.5455,
    longitude: 77.1929,
    address: "Hauz Khas, New Delhi, Delhi 110016"
  },
  fees: {
    annual: 240000,
    total: 960000,
    hostel: 75000,
    mess: 45000,
    otherCharges: 18000,
    scholarshipAvailable: true,
    scholarshipDetails: [
      "Institute Merit-cum-Means Scholarship",
      "SC/ST Scholarship",
      "Ministry of Human Resource Development Scholarship",
      "Free Studentship for Economically Weaker Sections",
      "Sports Scholarship",
      "Cultural Scholarship"
    ],
    paymentOptions: ["Online Payment", "Demand Draft", "Bank Transfer", "Credit/Debit Card"]
  },
  placement: {
    averagePackage: 2350000,
    highestPackage: 42000000,
    medianPackage: 2100000,
    percentage: 94,
    totalOffers: 1100,
    totalStudents: 1150,
    internationalOffers: 120,
    dreamOffers: 180,
    averagePackageTrend: 11.5,
    topRecruiters: [
      "Microsoft", "Google", "Amazon", "Goldman Sachs", 
      "McKinsey & Company", "Boston Consulting Group", "Bain & Company",
      "Intel", "Qualcomm", "Texas Instruments", "Samsung Research",
      "JP Morgan", "Morgan Stanley", "Deutsche Bank", "Barclays",
      "Tata Consultancy Services", "Infosys", "Wipro", "Accenture"
    ],
    recruitmentSectors: ["Information Technology", "Finance & Banking", "Consulting", "Core Engineering", "Research & Development", "Analytics", "Product Management"],
    placementStats: [
      { year: 2024, averagePackage: 2350000, highestPackage: 42000000, percentage: 94 },
      { year: 2023, averagePackage: 2100000, highestPackage: 38000000, percentage: 93 },
      { year: 2022, averagePackage: 1900000, highestPackage: 35000000, percentage: 92 },
      { year: 2021, averagePackage: 1750000, highestPackage: 32000000, percentage: 91 }
    ]
  },
  academics: {
    coursesOffered: ["B.Tech", "M.Tech", "PhD", "Dual Degree", "M.Sc", "MBA", "M.Des", "Executive Programs"],
    popularCourses: ["B.Tech Computer Science", "B.Tech Electrical Engineering", "B.Tech Mechanical Engineering", "MBA", "M.Tech"],
    facultyCount: 600,
    studentCount: 9500,
    studentFacultyRatio: "9:1",
    specialization: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Chemical Engineering", "Civil Engineering", "Textile Technology", "Biotechnology", "Engineering Physics"],
    departments: [
      "Computer Science & Engineering",
      "Electrical Engineering",
      "Mechanical Engineering", 
      "Civil Engineering",
      "Chemical Engineering",
      "Textile Technology",
      "Biotechnology",
      "Physics",
      "Chemistry",
      "Mathematics",
      "Humanities & Social Sciences",
      "Management Studies"
    ],
    researchCenters: 110,
    publications: 4200,
    collaborations: [
      "Massachusetts Institute of Technology (MIT)",
      "Stanford University",
      "University of California, Berkeley",
      "University of Cambridge",
      "National University of Singapore",
      "University of Tokyo",
      "Technical University of Munich"
    ],
    teachingMode: "offline"
  },
  infrastructure: {
    library: {
      name: "Central Library",
      books: 450000,
      journals: 11000,
      digitalResources: 135000,
      seatingCapacity: 1100
    },
    labs: {
      count: 280,
      majorLabs: [
        "Advanced Computing Research Center",
        "Nanoscale Research Facility",
        "Center for Automotive Research",
        "Biomedical Engineering Lab",
        "Artificial Intelligence Research Lab",
        "Robotics Research Center",
        "Sustainable Energy Research Lab"
      ],
      equipmentValue: 480000000
    },
    sports: {
      facilities: [
        "Swimming Pool (Olympic-size)",
        "Cricket Stadium",
        "Football Ground",
        "Tennis Courts (Clay & Hard)",
        "Basketball Courts",
        "Badminton Courts",
        "Squash Courts",
        "Table Tennis Arena",
        "Gymnasium (Multi-level)",
        "Athletics Track",
        "Yoga & Meditation Center"
      ],
      stadium: true,
      gym: true,
      swimmingPool: true
    },
    hostel: {
      boys: true,
      girls: true,
      capacity: 7500,
      rooms: 3750,
      facilities: [
        "High-speed WiFi (Gigabit)",
        "Laundry Service",
        "Common Room with TV",
        "Study Room (24x7)",
        "Gym",
        "Indoor Games Room",
        "Music Room",
        "Dance Room",
        "Guest Rooms",
        "Medical Facility",
        "Cafeteria & Canteen"
      ]
    },
    wifi: true,
    cafeteria: 12,
    medical: true,
    transportation: true,
    auditorium: 4
  },
  admission: {
    entranceExam: ["JEE Advanced"],
    cutoff: 98.2,
    cutoffTrend: 0.4,
    applicationMode: "Online",
    applicationFee: 2500,
    selectionProcess: ["JEE Advanced Score", "JoSAA Counseling", "Seat Allocation", "Document Verification"],
    eligibility: {
      minPercentage: 75,
      subjectsRequired: ["Physics", "Chemistry", "Mathematics"],
      ageLimit: 25
    },
    importantDates: {
      applicationStart: "January 1, 2024",
      applicationEnd: "April 30, 2024",
      examDate: "June 2024",
      resultDate: "July 2024",
      counsellingStart: "July 15, 2024",
      counsellingEnd: "August 30, 2024"
    },
    documentsRequired: [
      "10th Marksheet & Certificate",
      "12th Marksheet & Certificate",
      "JEE Advanced Scorecard",
      "JEE Main Scorecard",
      "Category Certificate (if applicable)",
      "Income Certificate (for scholarship)",
      "Domicile Certificate",
      "Passport-size Photographs",
      "Medical Fitness Certificate"
    ]
  },
  campusLife: {
    clubs: [
      "Programming Club",
      "Robotics Club",
      "Entrepreneurship Development Cell",
      "Music Club (Swaranjali)",
      "Dance Club (Abhyas)",
      "Drama Club (Dramatics Society)",
      "Photography Club",
      "Debating Society",
      "Literary Society",
      "Astronomy Club",
      "Environmental Club",
      "Quiz Club"
    ],
    festivals: [
      "Rendezvous (Annual Cultural Festival)",
      "Tryst (Technical Festival)",
      "E-summit (Entrepreneurship Summit)"
    ],
    technicalEvents: [
      "Hackathons",
      "Coding Competitions",
      "Robotics Competitions",
      "Business Plan Competitions",
      "Research Symposiums",
      "Industry Interaction Programs"
    ],
    culturalEvents: [
      "Music Concerts",
      "Dance Performances",
      "Drama Nights",
      "Art Exhibitions",
      "Literary Events",
      "Film Screenings"
    ],
    socialInitiatives: [
      "National Service Scheme (NSS)",
      "Teach for India Program",
      "Blood Donation Camps",
      "Environmental Awareness Drives",
      "Community Development Programs",
      "Women Empowerment Initiatives"
    ],
    annualBudget: 45000000
  },
  faculty: {
    total: 600,
    phdHolders: 575,
    professor: 220,
    associateProfessor: 230,
    assistantProfessor: 150,
    industryExperience: 7.5,
    internationalFaculty: 45,
    awards: [
      "Padma Awards (3 recipients)",
      "Shanti Swarup Bhatnagar Prize (12 recipients)",
      "Infosys Prize",
      "TWAS Prize",
      "J.C. Bose Fellowship",
      "Swarnajayanti Fellowship"
    ]
  },
  alumni: {
    notableAlumni: [
      { name: "Vinod Khosla", designation: "Co-founder", company: "Sun Microsystems" },
      { name: "Pramod Bhasin", designation: "Founder", company: "Genpact" },
      { name: "Ashwani Kumar", designation: "Former Union Minister", company: "Government of India" },
      { name: "Kiran Bedi", designation: "Former Lieutenant Governor", company: "Puducherry" },
      { name: "Nikhil Nanda", designation: "Chairman & MD", company: "Escorts Limited" },
      { name: "M. S. Unnikrishnan", designation: "Former MD & CEO", company: "Thermax Limited" }
    ],
    placementCompanies: [
      "Google", "Microsoft", "Amazon", "Goldman Sachs",
      "McKinsey", "BCG", "Bain", "JP Morgan",
      "Morgan Stanley", "Intel", "Qualcomm", "Samsung"
    ],
    networkStrength: 94
  },
  international: {
    collaborations: 140,
    studentExchange: true,
    facultyExchange: true,
    partnerUniversities: [
      "Massachusetts Institute of Technology (MIT)",
      "Stanford University",
      "University of Cambridge",
      "National University of Singapore",
      "University of Tokyo",
      "Technical University of Munich",
      "University of Sydney"
    ],
    foreignStudents: 280
  },
  contact: {
    phone: ["+91-11-26597135", "+91-11-26591353", "+91-11-26591797"],
    email: ["deanacad@admin.iitd.ac.in", "registrar@admin.iitd.ac.in", "placement@admin.iitd.ac.in"],
    website: "https://home.iitd.ac.in",
    socialMedia: {
      facebook: "https://facebook.com/iitdelhi",
      twitter: "https://twitter.com/iitdelhi",
      linkedin: "https://linkedin.com/school/iit-delhi",
      instagram: "https://instagram.com/iitdelhi",
      youtube: "https://youtube.com/iitdelhi"
      
    },
    admissionContact: {
      phone: "+91-11-26591797",
      email: "admission@admin.iitd.ac.in"
    }
  },
  facilities: [
    "24x7 Central Library",
    "High-speed WiFi Campus",
    "Sports Complex with Indoor Stadium",
    "Medical Center with Ambulance",
    "Multiple Banks & ATMs",
    "Post Office",
    "Shopping Complex",
    "Book Store & Stationery",
    "Food Court with Multiple Cuisines",
    "Guest House",
    "Auditorium & Conference Halls",
    "Research Parks",
    "Incubation Center",
    "Career Development Center"
  ],
  achievements: [
    "Ranked #2 among Engineering Institutes in India (NIRF 2024)",
    "QS World University Rankings: 174 (2024)",
    "Times Higher Education: 201-250 band (2024)",
    "Institute of Eminence (IoE) status",
    "Maximum patents filed among IITs (2023)",
    "Highest international research collaborations",
    "Excellence in Sports (Multiple Inter-IIT trophies)"
  ],
  newsUpdates: [
    { 
      title: "IIT Delhi establishes new Center for Artificial Intelligence", 
      date: "2024-01-20", 
      link: "https://home.iitd.ac.in/news/ai-center" 
    },
    { 
      title: "Record 94% placement achieved with highest package of ₹4.2 crore", 
      date: "2023-12-15", 
      link: "https://home.iitd.ac.in/news/placement-2023" 
    },
    { 
      title: "IIT Delhi partners with MIT for joint research program", 
      date: "2023-11-10", 
      link: "https://home.iitd.ac.in/news/mit-partnership" 
    }
  ],
  gallery: [
    { type: "campus", url: "/gallery/iitd-campus1.jpg", caption: "Main Building (Kashmir Gate)" },
    { type: "campus", url: "/gallery/iitd-campus2.jpg", caption: "Central Library" },
    { type: "lab", url: "/gallery/iitd-lab1.jpg", caption: "Nanoscale Research Facility" },
    { type: "lab", url: "/gallery/iitd-lab2.jpg", caption: "Robotics Research Center" },
    { type: "hostel", url: "/gallery/iitd-hostel1.jpg", caption: "Student Hostels" },
    { type: "campus", url: "/gallery/iitd-sports1.jpg", caption: "Sports Complex" },
    { type: "event", url: "/gallery/iitd-event1.jpg", caption: "Rendezvous Cultural Festival" },
    { type: "event", url: "/gallery/iitd-event2.jpg", caption: "Tryst Technical Festival" }
  ],
  faqs: [
    { 
      question: "What is the JEE Advanced cutoff for IIT Delhi?", 
      answer: "The cutoff varies by branch and category. For General category, it typically ranges from 98-99 percentile. For Computer Science, it's usually around 99+ percentile." 
    },
    { 
      question: "Does IIT Delhi offer accommodation to all students?", 
      answer: "Yes, IIT Delhi provides hostel accommodation to all enrolled students. The campus has separate hostels for boys and girls with excellent facilities." 
    },
    { 
      question: "What are the popular branches at IIT Delhi?", 
      answer: "Computer Science & Engineering, Electrical Engineering, Mechanical Engineering, and Chemical Engineering are among the most popular branches." 
    },
    { 
      question: "Does IIT Delhi have an MBA program?", 
      answer: "Yes, IIT Delhi offers a full-time MBA program through its Department of Management Studies (DMS). It's one of the top MBA programs in India." 
    },
    { 
      question: "What is the campus size of IIT Delhi?", 
      answer: "The campus spans 325 acres in the heart of Delhi, making it one of the largest educational campuses in the capital." 
    }
  ]
}, 
{
  id: "16",
  slug: "scaler-school-of-technology",
  name: "Scaler School of Technology",
  shortName: "Scaler",
  tagline: "Learn. Build. Lead.",
  overview: "A new-age technology institution focusing on software engineering, entrepreneurship, and future-ready education",
  description: "Scaler School of Technology is an innovative, outcome-focused institution that combines academic rigor with industry relevance. Offering a 4-year residential undergraduate program in Computer Science, it focuses on building world-class software engineers and technology leaders through a curriculum designed in collaboration with industry experts and academic leaders.",
  logo: "/logos/scaler-school.png",
  stream: "engineering",
  type: "new-age",
  category: "premier",
  ranking: 45,
  rating: 4.6,
  
  googleRating: 4.7,
  reviews: {
    count: 850,
    average: 4.6,
    academics: 4.7,
    infrastructure: 4.8,
    placement: 4.9,
    faculty: 4.7
  },
  established: 2022,
  accreditation: "Institution of Eminence (Proposed)",
  naacGrade: "A",
  affiliations: ["UGC Approved"],
  recognition: ["Ministry of Education", "AICTE"],
  location: {
    city: "Greater Noida",
    state: "Uttar Pradesh",
    country: "India",
    pincode: "201310",
    campusSize: "50 acres",
    campusType: "urban",
    latitude: 28.4744,
    longitude: 77.5040,
    address: "Plot No. 1, Knowledge Park III, Greater Noida, Uttar Pradesh 201310"
  },
  fees: {
    annual: 900000,
    total: 3600000,
    hostel: 150000,
    mess: 80000,
    otherCharges: 70000,
    scholarshipAvailable: true,
    scholarshipDetails: [
      "Merit-based Scholarships (up to 100%)",
      "Need-based Scholarships",
      "Women in Tech Scholarship",
      "Entrepreneurship Scholarship",
      "Early Admission Scholarship",
      "Industry-sponsored Scholarships"
    ],
    paymentOptions: ["EMI Options", "Education Loan Assistance", "Online Payment", "Bank Transfer"]
  },
  placement: {
    averagePackage: 3200000,
    highestPackage: 75000000,
    medianPackage: 2800000,
    percentage: 98,
    totalOffers: 280,
    totalStudents: 285,
    internationalOffers: 35,
    dreamOffers: 60,
    averagePackageTrend: 25,
    topRecruiters: [
      "Google", "Microsoft", "Amazon", "Meta",
      "Uber", "Airbnb", "Stripe", "Goldman Sachs",
      "JP Morgan", "McKinsey Digital", "Boston Consulting Group",
      "Adobe", "Atlassian", "Directi", "Swiggy", "Zomato",
      "Razorpay", "Flipkart", "Myntra", "Ola", "Paytm"
    ],
    recruitmentSectors: ["Tech Startups", "FAANG Companies", "FinTech", "E-commerce", "Consulting", "Product Companies", "Investment Banks"],
    placementStats: [
      { year: 2025, averagePackage: 3200000, highestPackage: 75000000, percentage: 98 },
      { year: 2024, averagePackage: 2800000, highestPackage: 65000000, percentage: 96 },
      { year: 2023, averagePackage: 2400000, highestPackage: 55000000, percentage: 95 }
    ]
  },
  academics: {
    coursesOffered: ["B.Tech in Computer Science & Engineering", "Integrated M.Tech Programs", "Executive Programs"],
    popularCourses: ["B.Tech Computer Science", "Specialization in AI & ML", "Blockchain Technology", "Full Stack Development"],
    facultyCount: 85,
    studentCount: 1200,
    studentFacultyRatio: "6:1",
    specialization: [
      "Artificial Intelligence & Machine Learning",
      "Data Science",
      "Full Stack Development",
      "DevOps & Cloud Computing",
      "Cybersecurity",
      "Blockchain & Web3",
      "Product Management",
      "Entrepreneurship"
    ],
    departments: [
      "Computer Science & Engineering",
      "Artificial Intelligence",
      "Data Science",
      "Software Engineering",
      "Entrepreneurship & Innovation"
    ],
    researchCenters: 12,
    publications: 150,
    collaborations: [
      "Carnegie Mellon University",
      "Stanford University",
      "University of California, Berkeley",
      "Massachusetts Institute of Technology",
      "Indian Institute of Technology (Various)",
      "Indian Institute of Science"
    ],
    teachingMode: "hybrid"
  },
  infrastructure: {
    library: {
      name: "Digital Innovation Library",
      books: 75000,
      journals: 5000,
      digitalResources: 250000,
      seatingCapacity: 300
    },
    labs: {
      count: 35,
      majorLabs: [
        "AI & ML Research Lab",
        "Quantum Computing Lab",
        "Blockchain Innovation Lab",
        "Cybersecurity Operations Center",
        "IoT & Embedded Systems Lab",
        "AR/VR Experience Lab",
        "Cloud Computing Lab",
        "Data Science Research Center"
      ],
      equipmentValue: 150000000
    },
    sports: {
      facilities: [
        "Indoor Sports Complex",
        "Swimming Pool",
        "Rock Climbing Wall",
        "Gym with Modern Equipment",
        "Basketball Court",
        "Tennis Court",
        "Badminton Courts",
        "Table Tennis Arena",
        "Yoga & Meditation Studio"
      ],
      stadium: false,
      gym: true,
      swimmingPool: true
    },
    hostel: {
      boys: true,
      girls: true,
      capacity: 1000,
      rooms: 500,
      facilities: [
        "High-speed Fiber Internet",
        "Smart Rooms with IoT Devices",
        "Common Study Lounges",
        "Gaming Zone",
        "Music Room with Instruments",
        "Indoor Sports Area",
        "Laundry with App-based Service",
        "Pantry with Microwave",
        "24/7 Security & CCTV",
        "Medical Room with Nurse"
      ]
    },
    wifi: true,
    cafeteria: 3,
    medical: true,
    transportation: true,
    auditorium: 2
  },
  admission: {
    entranceExam: ["Scaler Aptitude Test (SAT)", "JEE Main", "Other National Level Tests"],
    cutoff: 85,
    cutoffTrend: 5,
    applicationMode: "Online",
    applicationFee: 1500,
    selectionProcess: [
      "Online Application",
      "Aptitude Test",
      "Technical Interview",
      "Personal Interview",
      "Portfolio Review (for innovators)",
      "Final Selection"
    ],
    eligibility: {
      minPercentage: 65,
      subjectsRequired: ["Mathematics", "Physics", "Chemistry/Computer Science"],
      ageLimit: 22
    },
    importantDates: {
      applicationStart: "September 1, 2024",
      applicationEnd: "December 31, 2024",
      examDate: "January 2025",
      resultDate: "February 2025",
      counsellingStart: "March 2025",
      counsellingEnd: "April 2025"
    },
    documentsRequired: [
      "10th Marksheet & Certificate",
      "12th Marksheet & Certificate",
      "Entrance Exam Scorecard",
      "Identity Proof",
      "Passport-size Photographs",
      "Portfolio (if applicable)",
      "Achievement Certificates"
    ]
  },
  campusLife: {
    clubs: [
      "Developer Student Clubs",
      "AI/ML Club",
      "Blockchain Society",
      "Entrepreneurship Cell",
      "Design & UX Club",
      "Open Source Community",
      "Competitive Programming Club",
      "Robotics Club",
      "Gaming & Esports Club",
      "Music & Arts Society",
      "Debate & Oratory Club",
      "Social Impact Club"
    ],
    festivals: [
      "TechStorm (Annual Tech Festival)",
      "Innovate (Startup Summit)",
      "CodeFest (Coding Marathon)",
      "HackVerse (National Hackathon)"
    ],
    technicalEvents: [
      "24-hour Hackathons",
      "AI/ML Competitions",
      "Blockchain Buildathons",
      "Product Design Sprints",
      "CTF (Capture The Flag) Events",
      "Startup Pitch Competitions",
      "Industry Workshops",
      "Tech Talks by Industry Leaders"
    ],
    culturalEvents: [
      "Freshers' Party",
      "Annual Cultural Night",
      "Music Concerts",
      "Talent Shows",
      "Theatre Performances",
      "Art Exhibitions",
      "Food Festivals"
    ],
    socialInitiatives: [
      "Tech for Good Projects",
      "Digital Literacy Drives",
      "Open Source Contributions",
      "Women in Tech Mentorship",
      "Rural Technology Adoption",
      "Environmental Sustainability Projects"
    ],
    annualBudget: 35000000
  },
  faculty: {
    total: 85,
    phdHolders: 65,
    professor: 25,
    associateProfessor: 30,
    assistantProfessor: 30,
    industryExperience: 12.5,
    internationalFaculty: 20,
    awards: [
      "Google Developer Expert Awards",
      "Microsoft MVP Awards",
      "Forbes 30 Under 30",
      "Industry Innovation Awards",
      "Open Source Contribution Awards"
    ]
  },
  alumni: {
    notableAlumni: [
      { name: "Anshuman Singh", designation: "Co-founder", company: "InterviewBit & Scaler" },
      { name: "Abhimanyu Saxena", designation: "Co-founder", company: "InterviewBit & Scaler" },
      { name: "Vineet Singh", designation: "Lead Engineer", company: "Google" },
      { name: "Priya Sharma", designation: "Product Manager", company: "Microsoft" },
      { name: "Rohan Mehta", designation: "Founder", company: "Tech Startup (Acquired)" }
    ],
    placementCompanies: [
      "Google", "Microsoft", "Amazon", "Meta",
      "Uber", "Stripe", "Goldman Sachs", "McKinsey",
      "Directi", "Razorpay", "Swiggy", "Zomato"
    ],
    networkStrength: 88
  },
  international: {
    collaborations: 25,
    studentExchange: true,
    facultyExchange: true,
    partnerUniversities: [
      "Carnegie Mellon University",
      "University of California, Berkeley",
      "University of Texas at Austin",
      "National University of Singapore"
    ],
    foreignStudents: 50
  },
  contact: {
    phone: ["+91-8448440101", "+91-9876543210"],
    email: ["admissions@scalerschool.com", "info@scalerschool.com", "placements@scalerschool.com"],
    website: "https://www.scalerschool.com",
    socialMedia: {
      facebook: "https://facebook.com/scalerschool",
      twitter: "https://twitter.com/scalerschool",
      linkedin: "https://linkedin.com/school/scaler-school-of-technology",
      instagram: "https://instagram.com/scalerschool",
      youtube: "https://youtube.com/scalerschool"
      
    },
    admissionContact: {
      phone: "+91-8448440101",
      email: "admissions@scalerschool.com"
    }
  },
  facilities: [
    "State-of-the-art Smart Classrooms",
    "High-speed Internet (1 Gbps)",
    "24x7 Access Labs",
    "Startup Incubation Center",
    "Career Development Center",
    "Mental Wellness Center",
    "Cafeteria with Multiple Cuisines",
    "Fitness Center",
    "Music & Arts Studio",
    "Conference Rooms",
    "Makerspace & Prototyping Lab",
    "Video Recording Studio",
    "Podcast Studio",
    "Quiet Study Zones",
    "Collaboration Spaces",
    "Indoor Games Arena"
  ],
  achievements: [
    "100% placement record since inception",
    "Highest package: ₹75 LPA (2024)",
    "Average package: ₹32 LPA (2024)",
    "Ranked #1 among new-age tech colleges",
    "Winner of National Hackathon 2023",
    "Recognized as 'Most Innovative Tech School' by Times of India",
    "Industry-academia collaboration award",
    "Maximum patents per student among new institutions"
  ],
  newsUpdates: [
    { 
      title: "Scaler School achieves 100% placement with highest package of ₹75 LPA", 
      date: "2024-03-15", 
      link: "https://scalerschool.com/news/placement-2024" 
    },
    { 
      title: "Launches India's first undergraduate program in Web3 & Blockchain", 
      date: "2023-11-20", 
      link: "https://scalerschool.com/news/web3-program" 
    },
    { 
      title: "Partners with Carnegie Mellon for research in Quantum Computing", 
      date: "2023-09-10", 
      link: "https://scalerschool.com/news/cmu-partnership" 
    },
    { 
      title: "Students develop AI solution that wins National Innovation Award", 
      date: "2023-07-05", 
      link: "https://scalerschool.com/news/ai-innovation-award" 
    }
  ],
  gallery: [
    { type: "campus", url: "/gallery/scaler-campus1.jpg", caption: "Modern Campus Architecture" },
    { type: "campus", url: "/gallery/scaler-campus2.jpg", caption: "Innovation Hub" },
    { type: "lab", url: "/gallery/scaler-lab1.jpg", caption: "AI & ML Research Lab" },
    { type: "lab", url: "/gallery/scaler-lab2.jpg", caption: "Blockchain Innovation Center" },
    { type: "hostel", url: "/gallery/scaler-hostel1.jpg", caption: "Smart Student Hostels" },
    { type: "sports", url: "/gallery/scaler-sports1.jpg", caption: "Indoor Sports Complex" },
    { type: "event", url: "/gallery/scaler-event1.jpg", caption: "TechStorm Festival" },
    { type: "event", url: "/gallery/scaler-event2.jpg", caption: "Startup Pitch Competition" }
  ],
  faqs: [
    { 
      question: "What makes Scaler School of Technology different from traditional engineering colleges?", 
      answer: "Scaler focuses on industry-relevant curriculum, 1:1 mentorship, project-based learning, and strong placement support with direct industry connections. The program is designed to create job-ready software engineers from day one." 
    },
    { 
      question: "What is the fee structure and scholarship opportunities?", 
      answer: "Annual fees are ₹9,00,000 with multiple scholarship options covering up to 100% of tuition fees based on merit, need, and diversity. EMI options and education loan assistance are also available." 
    },
    { 
      question: "What are the placement statistics?", 
      answer: "Scaler has maintained 100% placement record since inception with average package of ₹32 LPA and highest package of ₹75 LPA in 2024. Top recruiters include Google, Microsoft, Amazon, and leading startups." 
    },
    { 
      question: "Is Scaler School recognized by UGC/AICTE?", 
      answer: "Yes, Scaler School of Technology is approved by UGC and AICTE, offering a recognized B.Tech degree in Computer Science & Engineering." 
    },
    { 
      question: "What is the admission process?", 
      answer: "Admission is based on Scaler Aptitude Test (SAT) or JEE Main scores, followed by technical interview and personal interview. Portfolio review is considered for exceptional candidates." 
    },
    { 
      question: "Does Scaler provide hostel facilities?", 
      answer: "Yes, Scaler provides modern, smart hostel facilities on campus with high-speed internet, recreational areas, and 24/7 security. Separate hostels are available for boys and girls." 
    },
    { 
      question: "What specializations are offered?", 
      answer: "Specializations include AI & ML, Data Science, Full Stack Development, DevOps, Cybersecurity, Blockchain, Product Management, and Entrepreneurship." 
    },
    { 
      question: "Are there opportunities for entrepreneurship?", 
      answer: "Yes, Scaler has a dedicated Entrepreneurship Cell, startup incubation center, mentorship from successful founders, and opportunities to work on real startup projects." 
    }
  ]
}
];

// Helper functions
export const getCollegeBySlug = (slug: string): College | undefined => {
  return colleges.find(college => college.slug === slug);
};

export const filterColleges = (filters: {
  stream?: string;
  type?: string;
  minRanking?: number;
  maxFees?: number;
  category?: string;
}): College[] => {
  return colleges.filter(college => {
    if (filters.stream && college.stream !== filters.stream) return false;
    if (filters.type && college.type !== filters.type) return false;
    if (filters.category && college.category !== filters.category) return false;
    if (filters.minRanking && college.ranking > filters.minRanking) return false;
    if (filters.maxFees && college.fees.annual > filters.maxFees) return false;
    return true;
  });
};

export const getStatistics = () => {
  const totalColleges = colleges.length;
  
  const byStream = colleges.reduce((acc, college) => {
    acc[college.stream] = (acc[college.stream] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const byType = colleges.reduce((acc, college) => {
    acc[college.type] = (acc[college.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const avgPackage = colleges.reduce((sum, college) => sum + college.placement.averagePackage, 0) / totalColleges;
  const avgRating = colleges.reduce((sum, college) => sum + college.rating, 0) / totalColleges;
  const avgFees = colleges.reduce((sum, college) => sum + college.fees.annual, 0) / totalColleges;
  
  return {
    totalColleges,
    byStream,
    byType,
    avgPackage,
    avgRating,
    avgFees
  };
};

// Export default
export default colleges;