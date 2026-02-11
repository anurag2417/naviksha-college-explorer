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
  stream: "engineering" | "medical" | "cuet" | "others";
  type: "government" | "semi" | "private" | "new-age";
  category: "premier" | "tier1" | "tier2" | "tier3";

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
    campusType?: "urban" | "suburban" | "rural";
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
    teachingMode?: "offline" | "online" | "hybrid";
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
    type: "campus" | "lab" | "event" | "hostel" | "sports";
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
    id: "1001",
    slug: "iit-madras",
    name: "Indian Institute of Technology Madras",
    shortName: "IIT Madras",
    tagline: "सत्यमेव जयते (Truth Alone Triumphs)",
    overview:
      "India's top-ranked engineering institute and a premier center for technical education and research",
    description:
      "Indian Institute of Technology Madras is one of the foremost institutes of national importance for higher technical education in India. Established in 1959 with technical assistance from the Government of West Germany, it has grown into a premier center of teaching, research, and industrial consultancy. The institute is located in a beautiful wooded land of about 250 hectares, and has a self-contained campus with all amenities.",
    logo: "/logos/iit-madras.png",
    stream: "engineering",
    type: "government",
    category: "premier",
    ranking: 1,
    rating: 4.8,
    nirfRank: 1,
    googleRating: 4.7,
    reviews: {
      count: 13200,
      average: 4.8,
      academics: 4.9,
      infrastructure: 4.7,
      placement: 4.8,
      faculty: 4.8,
    },
    established: 1959,
    accreditation: "Institute of National Importance",
    naacGrade: "A++",
    affiliations: ["Institute of National Importance"],
    recognition: ["UGC", "AICTE", "MHRD"],
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
      pincode: "600036",
      campusSize: "617 acres",
      campusType: "urban",
      latitude: 12.9915,
      longitude: 80.2337,
      address: "IIT Madras, Chennai, Tamil Nadu 600036",
    },
    fees: {
      annual: 235000,
      total: 940000,
      hostel: 72000,
      mess: 48000,
      otherCharges: 15000,
      scholarshipAvailable: true,
      scholarshipDetails: [
        "Institute Merit-cum-Means Scholarship",
        "SC/ST Scholarship",
        "Free Studentship for Economically Weaker Sections",
        "Ministry of Education Scholarships",
        "Private Trust Scholarships",
        "Sports & Cultural Scholarships",
        "Research Fellowships",
      ],
      paymentOptions: [
        "Online Payment",
        "Demand Draft",
        "Bank Transfer",
        "Scholarship Deduction",
      ],
    },
    placement: {
      averagePackage: 2450000,
      highestPackage: 43000000,
      medianPackage: 2200000,
      percentage: 94,
      totalOffers: 1300,
      totalStudents: 1350,
      internationalOffers: 110,
      dreamOffers: 190,
      averagePackageTrend: 10.5,
      topRecruiters: [
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "McKinsey & Company",
        "Boston Consulting Group",
        "Bain & Company",
        "Intel",
        "Texas Instruments",
        "Qualcomm",
        "Samsung",
        "JP Morgan",
        "Morgan Stanley",
        "Deutsche Bank",
        "Tata Consultancy Services",
        "Infosys",
        "Wipro",
        "Adobe",
        "Oracle",
        "IBM",
        "Cisco",
        "NVIDIA",
      ],
      recruitmentSectors: [
        "Information Technology",
        "Finance & Consulting",
        "Core Engineering",
        "Research & Development",
        "Analytics",
        "Product Management",
        "Manufacturing",
      ],
      placementStats: [
        {
          year: 2024,
          averagePackage: 2450000,
          highestPackage: 43000000,
          percentage: 94,
        },
        {
          year: 2023,
          averagePackage: 2200000,
          highestPackage: 40000000,
          percentage: 93,
        },
        {
          year: 2022,
          averagePackage: 2000000,
          highestPackage: 38000000,
          percentage: 92,
        },
        {
          year: 2021,
          averagePackage: 1800000,
          highestPackage: 35000000,
          percentage: 91,
        },
      ],
    },
    academics: {
      coursesOffered: [
        "B.Tech",
        "M.Tech",
        "PhD",
        "Dual Degree",
        "M.Sc",
        "MBA",
        "MS",
        "Executive Programs",
      ],
      popularCourses: [
        "B.Tech Computer Science",
        "B.Tech Electrical Engineering",
        "B.Tech Mechanical Engineering",
        "MBA",
        "M.Tech",
      ],
      facultyCount: 680,
      studentCount: 10500,
      studentFacultyRatio: "8:1",
      specialization: [
        "Computer Science",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
        "Chemical Engineering",
        "Aerospace Engineering",
        "Ocean Engineering",
        "Metallurgical Engineering",
        "Biotechnology",
      ],
      departments: [
        "Computer Science & Engineering",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
        "Chemical Engineering",
        "Aerospace Engineering",
        "Ocean Engineering",
        "Metallurgical & Materials Engineering",
        "Biotechnology",
        "Physics",
        "Chemistry",
        "Mathematics",
        "Humanities & Social Sciences",
        "Management Studies",
      ],
      researchCenters: 125,
      publications: 4800,
      collaborations: [
        "Massachusetts Institute of Technology (MIT)",
        "Stanford University",
        "University of California, Berkeley",
        "University of Cambridge",
        "Technical University of Munich",
        "National University of Singapore",
        "University of Tokyo",
      ],
      teachingMode: "offline",
    },
    infrastructure: {
      library: {
        name: "Central Library",
        books: 500000,
        journals: 12000,
        digitalResources: 140000,
        seatingCapacity: 1200,
      },
      labs: {
        count: 300,
        majorLabs: [
          "Supercomputer Education and Research Centre",
          "National Centre for Catalysis Research",
          "Centre for Nondestructive Evaluation",
          "Robert Bosch Centre for Data Science and AI",
          "Centre for Innovation",
          "Healthcare Technology Innovation Centre",
          "Advanced Manufacturing Technology Development Centre",
        ],
        equipmentValue: 520000000,
      },
      sports: {
        facilities: [
          "Swimming Pool (Olympic-size)",
          "Cricket Stadium",
          "Football Ground",
          "Tennis Courts (Clay & Synthetic)",
          "Basketball Courts",
          "Badminton Courts (Wooden)",
          "Squash Courts",
          "Table Tennis Hall",
          "Gymnasium (Multi-level)",
          "Athletics Track",
          "Hockey Field",
          "Volleyball Courts",
          "Yoga Center",
        ],
        stadium: true,
        gym: true,
        swimmingPool: true,
      },
      hostel: {
        boys: true,
        girls: true,
        capacity: 8500,
        rooms: 4250,
        facilities: [
          "High-speed WiFi",
          "Laundry Service",
          "Common Rooms with TV",
          "Study Rooms (24x7)",
          "Gym",
          "Indoor Games Room",
          "Music Room",
          "Dance Room",
          "Guest Rooms",
          "Medical Facility",
          "Cafeteria & Canteen",
          "Cooperative Stores",
        ],
      },
      wifi: true,
      cafeteria: 15,
      medical: true,
      transportation: true,
      auditorium: 5,
    },
    admission: {
      entranceExam: ["JEE Advanced"],
      cutoff: 98.0,
      cutoffTrend: 0.3,
      applicationMode: "Online",
      applicationFee: 2500,
      selectionProcess: [
        "JEE Advanced Score",
        "JoSAA Counseling",
        "Seat Allocation",
        "Document Verification",
      ],
      eligibility: {
        minPercentage: 75,
        subjectsRequired: ["Physics", "Chemistry", "Mathematics"],
        ageLimit: 25,
      },
      importantDates: {
        applicationStart: "January 1, 2024",
        applicationEnd: "April 30, 2024",
        examDate: "June 2024",
        resultDate: "July 2024",
        counsellingStart: "July 15, 2024",
        counsellingEnd: "August 30, 2024",
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
        "Medical Fitness Certificate",
      ],
    },
    campusLife: {
      clubs: [
        "Programming Club",
        "Robotics Club",
        "Entrepreneurship Cell",
        "Music Club (Octaves)",
        "Dance Club (Abhinaya)",
        "Drama Club (Madras Players)",
        "Photography Club (Shutterbug)",
        "Debating Society",
        "Literary Society (Literati)",
        "Astronomy Club",
        "Environmental Club",
        "Quiz Club",
        "Film Club",
        "Fine Arts Club",
      ],
      festivals: [
        "Saarang (Annual Cultural Festival)",
        "Shaastra (Technical Festival)",
        "Sports Fest",
      ],
      technicalEvents: [
        "Hackathons",
        "Coding Competitions",
        "Robotics Competitions",
        "Business Plan Competitions",
        "Research Symposiums",
        "Industry Interaction Programs",
        "Innovation Challenges",
      ],
      culturalEvents: [
        "Music Concerts",
        "Dance Performances",
        "Drama Nights",
        "Art Exhibitions",
        "Literary Events",
        "Film Screenings",
        "Comedy Shows",
      ],
      socialInitiatives: [
        "National Service Scheme (NSS)",
        "Teach for India Program",
        "Blood Donation Camps",
        "Environmental Awareness Drives",
        "Community Development Programs",
        "Women Empowerment Initiatives",
        "Rural Development Projects",
      ],
      annualBudget: 50000000,
    },
    faculty: {
      total: 680,
      phdHolders: 650,
      professor: 240,
      associateProfessor: 260,
      assistantProfessor: 180,
      industryExperience: 8,
      internationalFaculty: 50,
      awards: [
        "Padma Awards (5 recipients)",
        "Shanti Swarup Bhatnagar Prize (15 recipients)",
        "Infosys Prize",
        "TWAS Prize",
        "J.C. Bose Fellowship",
        "Swarnajayanti Fellowship",
        "Ramanujan Fellowship",
      ],
    },
    alumni: {
      notableAlumni: [
        {
          name: "Kris Gopalakrishnan",
          designation: "Co-founder",
          company: "Infosys",
        },
        {
          name: "V. G. Siddhartha",
          designation: "Founder",
          company: "Cafe Coffee Day",
        },
        {
          name: "N. Chandrasekaran",
          designation: "Chairman",
          company: "Tata Sons",
        },
        {
          name: "Sachin Bansal",
          designation: "Co-founder",
          company: "Flipkart",
        },
        {
          name: "Binny Bansal",
          designation: "Co-founder",
          company: "Flipkart",
        },
        { name: "K. Sivan", designation: "Former Chairman", company: "ISRO" },
        {
          name: "T. V. Mohandas Pai",
          designation: "Former CFO",
          company: "Infosys",
        },
      ],
      placementCompanies: [
        "Google",
        "Microsoft",
        "Amazon",
        "Goldman Sachs",
        "McKinsey",
        "BCG",
        "Bain",
        "JP Morgan",
        "Morgan Stanley",
        "Intel",
        "Qualcomm",
        "Samsung",
      ],
      networkStrength: 96,
    },
    international: {
      collaborations: 150,
      studentExchange: true,
      facultyExchange: true,
      partnerUniversities: [
        "Massachusetts Institute of Technology (MIT)",
        "Stanford University",
        "University of Cambridge",
        "National University of Singapore",
        "University of Tokyo",
        "Technical University of Munich",
        "University of Sydney",
      ],
      foreignStudents: 320,
    },
    contact: {
      phone: ["+91-44-22578500", "+91-44-22578501"],
      email: [
        "deanacad@iitm.ac.in",
        "registrar@iitm.ac.in",
        "placement@iitm.ac.in",
      ],
      website: "https://www.iitm.ac.in",
      socialMedia: {
        facebook: "https://facebook.com/iitmadras",
        twitter: "https://twitter.com/iitmadras",
        linkedin: "https://linkedin.com/school/iit-madras",
        instagram: "https://instagram.com/iitmadras",
        youtube: "https://youtube.com/iitmadras",
      },
      admissionContact: {
        phone: "+91-44-22578570",
        email: "admission@iitm.ac.in",
      },
    },
    facilities: [
      "24x7 Central Library",
      "High-speed WiFi Campus",
      "Sports Complex with Stadium",
      "Medical Center with Ambulance",
      "Multiple Banks & ATMs",
      "Post Office",
      "Shopping Complex",
      "Book Store & Stationery",
      "Food Court with Multiple Cuisines",
      "Guest House",
      "Auditorium & Conference Halls",
      "Research Parks",
      "Incubation Center (IITM Incubation Cell)",
      "Career Development Center",
      "Transportation Services",
      "Recreational Centers",
    ],
    achievements: [
      "Ranked #1 among Engineering Institutes in India (NIRF 2024)",
      "QS World University Rankings: 250 (2024)",
      "Times Higher Education: 251-300 band (2024)",
      "Institute of Eminence (IoE) status",
      "Highest number of patents among IITs",
      "Excellence in Sports (Multiple Inter-IIT trophies)",
      "Leading research output in engineering",
      "Strongest alumni network among IITs",
    ],
    newsUpdates: [
      {
        title:
          "IIT Madras launches India's first medical drone delivery network",
        date: "2024-01-25",
        link: "https://iitm.ac.in/news/medical-drone-delivery",
      },
      {
        title: "Record placement season with highest package of ₹4.3 crore",
        date: "2023-12-18",
        link: "https://iitm.ac.in/news/placement-2023",
      },
      {
        title:
          "IIT Madras partners with Stanford for AI research collaboration",
        date: "2023-11-12",
        link: "https://iitm.ac.in/news/stanford-partnership",
      },
      {
        title:
          "Students develop low-cost water purification system for rural areas",
        date: "2023-09-20",
        link: "https://iitm.ac.in/news/water-purification-project",
      },
    ],
    gallery: [
      {
        type: "campus",
        url: "/gallery/iitm-campus1.jpg",
        caption: "Main Building",
      },
      {
        type: "campus",
        url: "/gallery/iitm-campus2.jpg",
        caption: "Central Library",
      },
      {
        type: "campus",
        url: "/gallery/iitm-campus3.jpg",
        caption: "Gajendra Circle",
      },
      {
        type: "lab",
        url: "/gallery/iitm-lab1.jpg",
        caption: "Supercomputer Centre",
      },
      {
        type: "lab",
        url: "/gallery/iitm-lab2.jpg",
        caption: "Research Laboratory",
      },
      {
        type: "hostel",
        url: "/gallery/iitm-hostel1.jpg",
        caption: "Student Hostels",
      },
      {
        type: "sports",
        url: "/gallery/iitm-sports1.jpg",
        caption: "Sports Complex",
      },
      {
        type: "event",
        url: "/gallery/iitm-event1.jpg",
        caption: "Saarang Cultural Festival",
      },
      {
        type: "event",
        url: "/gallery/iitm-event2.jpg",
        caption: "Shaastra Technical Festival",
      },
    ],
    faqs: [
      {
        question: "What is the JEE Advanced cutoff for IIT Madras?",
        answer:
          "The cutoff varies by branch and category. For General category, Computer Science typically requires 99+ percentile, while other branches range from 97-99 percentile. The exact cutoff changes annually based on competition.",
      },
      {
        question: "What are the most popular branches at IIT Madras?",
        answer:
          "Computer Science & Engineering is the most sought-after, followed by Electrical Engineering, Mechanical Engineering, and Engineering Design. The institute is also known for its unique programs in Ocean Engineering and Metallurgical Engineering.",
      },
      {
        question: "Does IIT Madras have a dedicated incubation center?",
        answer:
          "Yes, IIT Madras has one of India's largest and most successful incubation ecosystems - the IITM Incubation Cell. It has incubated over 300 startups with a cumulative valuation of over $10 billion.",
      },
      {
        question: "What is special about IIT Madras campus?",
        answer:
          "The 617-acre campus is India's largest IIT campus and is known as a 'deer park' due to its abundant green cover and wildlife. It's a self-contained township with all facilities within the campus.",
      },
      {
        question:
          "What research opportunities are available for undergraduates?",
        answer:
          "IIT Madras offers extensive undergraduate research opportunities through the Undergraduate Research Opportunities Program (UROP), summer internships with faculty, and access to state-of-the-art research facilities.",
      },
      {
        question: "How is the hostel accommodation at IIT Madras?",
        answer:
          "The institute provides excellent hostel accommodation for all students. There are 19 hostels (including 3 for girls) with modern amenities. First-year students typically get single rooms.",
      },
      {
        question: "What are the major festivals at IIT Madras?",
        answer:
          "Saarang is the annual cultural festival (one of Asia's largest), Shaastra is the technical festival (India's first ISO-certified student-run tech fest), and the institute also hosts Sports Fest.",
      },
      {
        question: "Does IIT Madras offer online degree programs?",
        answer:
          "Yes, IIT Madras offers online B.Sc degree in Programming and Data Science through its online portal. It's India's first online B.Sc degree from an IIT.",
      },
      {
        question: "What is the student-faculty ratio?",
        answer:
          "The student-faculty ratio is approximately 8:1, ensuring personalized attention and strong mentorship opportunities for students.",
      },
      {
        question: "How strong is the alumni network?",
        answer:
          "IIT Madras has one of the strongest alumni networks globally, with prominent leaders in technology, business, research, and entrepreneurship across the world.",
      },
    ],
  },
  {
    id: "1002",
    slug: "iit-delhi",
    name: "Indian Institute of Technology Delhi",
    shortName: "IIT Delhi",
    tagline: "सिद्धिर्भवति कर्मजा (Success is born of action)",
    overview:
      "Premier engineering institute and Institute of National Importance located in Delhi",
    description:
      "Indian Institute of Technology Delhi is one of the 23 Indian Institutes of Technology created to be Centres of Excellence for training, research and development in science, engineering and technology in India. Established as College of Engineering in 1961, the Institute was later declared as an Institution of National Importance under the Institutes of Technology (Amendment) Act, 1963 and was renamed as Indian Institute of Technology Delhi.",
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
      faculty: 4.7,
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
      address: "Hauz Khas, New Delhi, Delhi 110016",
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
        "Cultural Scholarship",
      ],
      paymentOptions: [
        "Online Payment",
        "Demand Draft",
        "Bank Transfer",
        "Credit/Debit Card",
      ],
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
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "McKinsey & Company",
        "Boston Consulting Group",
        "Bain & Company",
        "Intel",
        "Qualcomm",
        "Texas Instruments",
        "Samsung Research",
        "JP Morgan",
        "Morgan Stanley",
        "Deutsche Bank",
        "Barclays",
        "Tata Consultancy Services",
        "Infosys",
        "Wipro",
        "Accenture",
      ],
      recruitmentSectors: [
        "Information Technology",
        "Finance & Banking",
        "Consulting",
        "Core Engineering",
        "Research & Development",
        "Analytics",
        "Product Management",
      ],
      placementStats: [
        {
          year: 2024,
          averagePackage: 2350000,
          highestPackage: 42000000,
          percentage: 94,
        },
        {
          year: 2023,
          averagePackage: 2100000,
          highestPackage: 38000000,
          percentage: 93,
        },
        {
          year: 2022,
          averagePackage: 1900000,
          highestPackage: 35000000,
          percentage: 92,
        },
        {
          year: 2021,
          averagePackage: 1750000,
          highestPackage: 32000000,
          percentage: 91,
        },
      ],
    },
    academics: {
      coursesOffered: [
        "B.Tech",
        "M.Tech",
        "PhD",
        "Dual Degree",
        "M.Sc",
        "MBA",
        "M.Des",
        "Executive Programs",
      ],
      popularCourses: [
        "B.Tech Computer Science",
        "B.Tech Electrical Engineering",
        "B.Tech Mechanical Engineering",
        "MBA",
        "M.Tech",
      ],
      facultyCount: 600,
      studentCount: 9500,
      studentFacultyRatio: "9:1",
      specialization: [
        "Computer Science",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Chemical Engineering",
        "Civil Engineering",
        "Textile Technology",
        "Biotechnology",
        "Engineering Physics",
      ],
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
        "Management Studies",
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
        "Technical University of Munich",
      ],
      teachingMode: "offline",
    },
    infrastructure: {
      library: {
        name: "Central Library",
        books: 450000,
        journals: 11000,
        digitalResources: 135000,
        seatingCapacity: 1100,
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
          "Sustainable Energy Research Lab",
        ],
        equipmentValue: 480000000,
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
          "Yoga & Meditation Center",
        ],
        stadium: true,
        gym: true,
        swimmingPool: true,
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
          "Cafeteria & Canteen",
        ],
      },
      wifi: true,
      cafeteria: 12,
      medical: true,
      transportation: true,
      auditorium: 4,
    },
    admission: {
      entranceExam: ["JEE Advanced"],
      cutoff: 98.2,
      cutoffTrend: 0.4,
      applicationMode: "Online",
      applicationFee: 2500,
      selectionProcess: [
        "JEE Advanced Score",
        "JoSAA Counseling",
        "Seat Allocation",
        "Document Verification",
      ],
      eligibility: {
        minPercentage: 75,
        subjectsRequired: ["Physics", "Chemistry", "Mathematics"],
        ageLimit: 25,
      },
      importantDates: {
        applicationStart: "January 1, 2024",
        applicationEnd: "April 30, 2024",
        examDate: "June 2024",
        resultDate: "July 2024",
        counsellingStart: "July 15, 2024",
        counsellingEnd: "August 30, 2024",
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
        "Medical Fitness Certificate",
      ],
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
        "Quiz Club",
      ],
      festivals: [
        "Rendezvous (Annual Cultural Festival)",
        "Tryst (Technical Festival)",
        "E-summit (Entrepreneurship Summit)",
      ],
      technicalEvents: [
        "Hackathons",
        "Coding Competitions",
        "Robotics Competitions",
        "Business Plan Competitions",
        "Research Symposiums",
        "Industry Interaction Programs",
      ],
      culturalEvents: [
        "Music Concerts",
        "Dance Performances",
        "Drama Nights",
        "Art Exhibitions",
        "Literary Events",
        "Film Screenings",
      ],
      socialInitiatives: [
        "National Service Scheme (NSS)",
        "Teach for India Program",
        "Blood Donation Camps",
        "Environmental Awareness Drives",
        "Community Development Programs",
        "Women Empowerment Initiatives",
      ],
      annualBudget: 45000000,
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
        "Swarnajayanti Fellowship",
      ],
    },
    alumni: {
      notableAlumni: [
        {
          name: "Vinod Khosla",
          designation: "Co-founder",
          company: "Sun Microsystems",
        },
        { name: "Pramod Bhasin", designation: "Founder", company: "Genpact" },
        {
          name: "Ashwani Kumar",
          designation: "Former Union Minister",
          company: "Government of India",
        },
        {
          name: "Kiran Bedi",
          designation: "Former Lieutenant Governor",
          company: "Puducherry",
        },
        {
          name: "Nikhil Nanda",
          designation: "Chairman & MD",
          company: "Escorts Limited",
        },
        {
          name: "M. S. Unnikrishnan",
          designation: "Former MD & CEO",
          company: "Thermax Limited",
        },
      ],
      placementCompanies: [
        "Google",
        "Microsoft",
        "Amazon",
        "Goldman Sachs",
        "McKinsey",
        "BCG",
        "Bain",
        "JP Morgan",
        "Morgan Stanley",
        "Intel",
        "Qualcomm",
        "Samsung",
      ],
      networkStrength: 94,
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
        "University of Sydney",
      ],
      foreignStudents: 280,
    },
    contact: {
      phone: ["+91-11-26597135", "+91-11-26591353", "+91-11-26591797"],
      email: [
        "deanacad@admin.iitd.ac.in",
        "registrar@admin.iitd.ac.in",
        "placement@admin.iitd.ac.in",
      ],
      website: "https://home.iitd.ac.in",
      socialMedia: {
        facebook: "https://facebook.com/iitdelhi",
        twitter: "https://twitter.com/iitdelhi",
        linkedin: "https://linkedin.com/school/iit-delhi",
        instagram: "https://instagram.com/iitdelhi",
        youtube: "https://youtube.com/iitdelhi",
      },
      admissionContact: {
        phone: "+91-11-26591797",
        email: "admission@admin.iitd.ac.in",
      },
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
      "Career Development Center",
    ],
    achievements: [
      "Ranked #2 among Engineering Institutes in India (NIRF 2024)",
      "QS World University Rankings: 174 (2024)",
      "Times Higher Education: 201-250 band (2024)",
      "Institute of Eminence (IoE) status",
      "Maximum patents filed among IITs (2023)",
      "Highest international research collaborations",
      "Excellence in Sports (Multiple Inter-IIT trophies)",
    ],
    newsUpdates: [
      {
        title: "IIT Delhi establishes new Center for Artificial Intelligence",
        date: "2024-01-20",
        link: "https://home.iitd.ac.in/news/ai-center",
      },
      {
        title:
          "Record 94% placement achieved with highest package of ₹4.2 crore",
        date: "2023-12-15",
        link: "https://home.iitd.ac.in/news/placement-2023",
      },
      {
        title: "IIT Delhi partners with MIT for joint research program",
        date: "2023-11-10",
        link: "https://home.iitd.ac.in/news/mit-partnership",
      },
    ],
    gallery: [
      {
        type: "campus",
        url: "/gallery/iitd-campus1.jpg",
        caption: "Main Building (Kashmir Gate)",
      },
      {
        type: "campus",
        url: "/gallery/iitd-campus2.jpg",
        caption: "Central Library",
      },
      {
        type: "lab",
        url: "/gallery/iitd-lab1.jpg",
        caption: "Nanoscale Research Facility",
      },
      {
        type: "lab",
        url: "/gallery/iitd-lab2.jpg",
        caption: "Robotics Research Center",
      },
      {
        type: "hostel",
        url: "/gallery/iitd-hostel1.jpg",
        caption: "Student Hostels",
      },
      {
        type: "campus",
        url: "/gallery/iitd-sports1.jpg",
        caption: "Sports Complex",
      },
      {
        type: "event",
        url: "/gallery/iitd-event1.jpg",
        caption: "Rendezvous Cultural Festival",
      },
      {
        type: "event",
        url: "/gallery/iitd-event2.jpg",
        caption: "Tryst Technical Festival",
      },
    ],
    faqs: [
      {
        question: "What is the JEE Advanced cutoff for IIT Delhi?",
        answer:
          "The cutoff varies by branch and category. For General category, it typically ranges from 98-99 percentile. For Computer Science, it's usually around 99+ percentile.",
      },
      {
        question: "Does IIT Delhi offer accommodation to all students?",
        answer:
          "Yes, IIT Delhi provides hostel accommodation to all enrolled students. The campus has separate hostels for boys and girls with excellent facilities.",
      },
      {
        question: "What are the popular branches at IIT Delhi?",
        answer:
          "Computer Science & Engineering, Electrical Engineering, Mechanical Engineering, and Chemical Engineering are among the most popular branches.",
      },
      {
        question: "Does IIT Delhi have an MBA program?",
        answer:
          "Yes, IIT Delhi offers a full-time MBA program through its Department of Management Studies (DMS). It's one of the top MBA programs in India.",
      },
      {
        question: "What is the campus size of IIT Delhi?",
        answer:
          "The campus spans 325 acres in the heart of Delhi, making it one of the largest educational campuses in the capital.",
      },
    ],
  },
  {
    id: "1003",
    slug: "iit-bombay",
    name: "Indian Institute of Technology Bombay",
    shortName: "IIT Bombay",
    tagline: "ज्ञानं परमं ध्येयं (Knowledge is the Supreme Goal)",
    overview: "Premier engineering institute consistently ranked #1 in India",
    description:
      "Indian Institute of Technology Bombay is a public technical and research university located in Powai, Mumbai. Established in 1958, it is one of the oldest IITs in India. The institute is known for its strong emphasis on scientific and technological research and development.",
    logo: "/logos/iit-bombay.png",
    stream: "engineering",
    type: "government",
    category: "premier",
    ranking: 3,
    rating: 4.8,
    nirfRank: 1,
    googleRating: 4.7,
    reviews: {
      count: 12450,
      average: 4.8,
      academics: 4.9,
      infrastructure: 4.7,
      placement: 4.9,
      faculty: 4.8,
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
      address: "IIT Bombay, Powai, Mumbai, Maharashtra 400076",
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
        "Government Scholarships",
      ],
      paymentOptions: ["Online Payment", "DD", "Bank Transfer"],
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
        "Microsoft",
        "Google",
        "Amazon",
        "Goldman Sachs",
        "McKinsey & Company",
        "Tata Group",
        "Reliance Industries",
        "Intel",
        "NVIDIA",
        "Adobe",
        "Qualcomm",
        "Texas Instruments",
      ],
      recruitmentSectors: [
        "IT",
        "Finance",
        "Consulting",
        "Core Engineering",
        "Research",
      ],
      placementStats: [
        {
          year: 2024,
          averagePackage: 2500000,
          highestPackage: 45000000,
          percentage: 95,
        },
        {
          year: 2023,
          averagePackage: 2200000,
          highestPackage: 42000000,
          percentage: 94,
        },
        {
          year: 2022,
          averagePackage: 2000000,
          highestPackage: 40000000,
          percentage: 93,
        },
      ],
    },
    academics: {
      coursesOffered: [
        "B.Tech",
        "M.Tech",
        "PhD",
        "Dual Degree",
        "M.Sc",
        "M.Des",
        "MBA",
      ],
      popularCourses: [
        "B.Tech Computer Science",
        "B.Tech Electrical Engineering",
        "M.Tech",
      ],
      facultyCount: 650,
      studentCount: 10000,
      studentFacultyRatio: "8:1",
      specialization: [
        "Computer Science",
        "Electrical",
        "Mechanical",
        "Chemical",
        "Aerospace",
        "Civil",
      ],
      departments: [
        "Computer Science",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Chemical Engineering",
        "Civil Engineering",
        "Physics",
        "Chemistry",
        "Mathematics",
      ],
      researchCenters: 120,
      publications: 4500,
      collaborations: [
        "MIT",
        "Stanford",
        "University of California",
        "University of Tokyo",
      ],
      teachingMode: "offline",
    },
    infrastructure: {
      library: {
        name: "Central Library",
        books: 500000,
        journals: 12000,
        digitalResources: 150000,
        seatingCapacity: 1200,
      },
      labs: {
        count: 250,
        majorLabs: [
          "Advanced Computing Lab",
          "Robotics Lab",
          "Biotech Lab",
          "Nano Technology Lab",
          "AI Research Center",
        ],
        equipmentValue: 500000000,
      },
      sports: {
        facilities: [
          "Olympic-size Swimming Pool",
          "Stadium",
          "Gymnasium",
          "Tennis Courts",
          "Basketball Courts",
          "Cricket Ground",
        ],
        stadium: true,
        gym: true,
        swimmingPool: true,
      },
      hostel: {
        boys: true,
        girls: true,
        capacity: 8000,
        rooms: 4000,
        facilities: [
          "WiFi",
          "Laundry",
          "Common Room",
          "Study Room",
          "Gym",
          "Cafeteria",
        ],
      },
      wifi: true,
      cafeteria: 8,
      medical: true,
      transportation: true,
      auditorium: 3,
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
        ageLimit: 25,
      },
      importantDates: {
        applicationStart: "January 1, 2024",
        applicationEnd: "April 30, 2024",
        examDate: "June 2024",
        resultDate: "July 2024",
        counsellingStart: "July 15, 2024",
        counsellingEnd: "August 30, 2024",
      },
      documentsRequired: [
        "10th Marksheet",
        "12th Marksheet",
        "JEE Advanced Scorecard",
        "Caste Certificate",
        "Income Certificate",
      ],
    },
    campusLife: {
      clubs: [
        "Robotics Club",
        "Programming Club",
        "Drama Club",
        "Music Club",
        "Entrepreneurship Cell",
      ],
      festivals: ["Mood Indigo", "Techfest", "E-Summit"],
      technicalEvents: ["Codefest", "Hackathon", "Robowars"],
      culturalEvents: ["Dance Competition", "Music Festival", "Drama Nights"],
      socialInitiatives: ["NSS", "Teach for India", "Environmental Club"],
      annualBudget: 50000000,
    },
    faculty: {
      total: 650,
      phdHolders: 620,
      professor: 200,
      associateProfessor: 250,
      assistantProfessor: 200,
      industryExperience: 8,
      internationalFaculty: 50,
      awards: ["Padma Shri", "Shanti Swarup Bhatnagar Prize", "Infosys Prize"],
    },
    alumni: {
      notableAlumni: [
        {
          name: "N. R. Narayana Murthy",
          designation: "Founder",
          company: "Infosys",
        },
        {
          name: "Arvind Subramanian",
          designation: "Former Chief Economic Advisor",
          company: "Government of India",
        },
        {
          name: "Kris Gopalakrishnan",
          designation: "Co-founder",
          company: "Infosys",
        },
      ],
      placementCompanies: ["Google", "Microsoft", "Goldman Sachs", "McKinsey"],
      networkStrength: 95,
    },
    international: {
      collaborations: 150,
      studentExchange: true,
      facultyExchange: true,
      partnerUniversities: [
        "MIT",
        "Stanford",
        "ETH Zurich",
        "University of Tokyo",
      ],
      foreignStudents: 300,
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
        youtube: "https://youtube.com/iitbombay",
      },
      admissionContact: {
        phone: "+91-22-25767060",
        email: "admission@iitb.ac.in",
      },
    },
    facilities: [
      "24x7 Library",
      "High-speed WiFi",
      "Sports Complex",
      "Medical Center",
      "Bank & ATM",
      "Post Office",
      "Shopping Complex",
    ],
    achievements: [
      "#1 Engineering Institute in India (NIRF 2024)",
      "QS World Ranking: 149",
      "Most International Patents among Indian Universities",
    ],
    newsUpdates: [
      {
        title: "IIT Bombay launches new AI Research Center",
        date: "2024-01-15",
        link: "https://example.com/news1",
      },
      {
        title: "Record placement season with 95% placement",
        date: "2023-12-20",
        link: "https://example.com/news2",
      },
    ],
    gallery: [
      {
        type: "campus",
        url: "/gallery/iitb-campus1.jpg",
        caption: "Main Building",
      },
      { type: "lab", url: "/gallery/iitb-lab1.jpg", caption: "Robotics Lab" },
      {
        type: "event",
        url: "/gallery/iitb-event1.jpg",
        caption: "Mood Indigo Festival",
      },
    ],
    faqs: [
      {
        question: "What is the JEE Advanced cutoff for IIT Bombay?",
        answer: "Typically around 98-99 percentile for general category.",
      },
      {
        question: "Does IIT Bombay offer scholarships?",
        answer: "Yes, multiple scholarships based on merit and need.",
      },
    ],
  },
  {
  id: "1004",
  slug: "iit-kanpur",
  name: "Indian Institute of Technology Kanpur",
  shortName: "IIT Kanpur",
  tagline: "तमसो मा ज्योतिर्गमय (Lead me from darkness to light)",
  overview: "Premier engineering institute known for its academic excellence, research innovation, and strong industry connections",
  description: "Indian Institute of Technology Kanpur is one of the top engineering institutions in India, established in 1959 with assistance from a consortium of nine US research universities. Known for its pioneering academic programs, cutting-edge research, and strong emphasis on innovation, IIT Kanpur has consistently been among the top-ranked engineering institutes in India.",
  logo: "/logos/iit-kanpur.png",
  stream: "engineering",
  type: "government",
  category: "premier",
  ranking: 4,
  rating: 4.7,
  nirfRank: 4,
  googleRating: 4.6,
  reviews: {
    count: 11200,
    average: 4.7,
    academics: 4.8,
    infrastructure: 4.6,
    placement: 4.8,
    faculty: 4.7
  },
  established: 1959,
  accreditation: "Institute of National Importance",
  naacGrade: "A++",
  affiliations: ["Institute of National Importance"],
  recognition: ["UGC", "AICTE", "MHRD"],
  location: {
    city: "Kanpur",
    state: "Uttar Pradesh",
    country: "India",
    pincode: "208016",
    campusSize: "1055 acres",
    campusType: "suburban",
    latitude: 26.5123,
    longitude: 80.2329,
    address: "IIT Kanpur, Kalyanpur, Kanpur, Uttar Pradesh 208016"
  },
  fees: {
    annual: 230000,
    total: 920000,
    hostel: 70000,
    mess: 45000,
    otherCharges: 15000,
    scholarshipAvailable: true,
    scholarshipDetails: [
      "Institute Merit-cum-Means Scholarship",
      "SC/ST Scholarship",
      "Free Studentship",
      "Ministry of Education Scholarships",
      "Private Trust Scholarships",
      "Sports & Cultural Scholarships",
      "Research Fellowships"
    ],
    paymentOptions: ["Online Payment", "Demand Draft", "Bank Transfer", "Scholarship Deduction"]
  },
  placement: {
    averagePackage: 2400000,
    highestPackage: 41000000,
    medianPackage: 2150000,
    percentage: 93,
    totalOffers: 1150,
    totalStudents: 1200,
    internationalOffers: 95,
    dreamOffers: 170,
    averagePackageTrend: 11,
    topRecruiters: [
      "Microsoft", "Google", "Amazon", "Goldman Sachs",
      "McKinsey & Company", "Boston Consulting Group", "Bain & Company",
      "Intel", "Texas Instruments", "Qualcomm", "Samsung",
      "JP Morgan", "Morgan Stanley", "Barclays",
      "Tata Consultancy Services", "Infosys", "Wipro",
      "Adobe", "Oracle", "IBM", "Cisco", "NVIDIA"
    ],
    recruitmentSectors: ["Information Technology", "Finance & Consulting", "Core Engineering", "Research & Development", "Analytics", "Product Management", "Manufacturing"],
    placementStats: [
      { year: 2024, averagePackage: 2400000, highestPackage: 41000000, percentage: 93 },
      { year: 2023, averagePackage: 2150000, highestPackage: 38000000, percentage: 92 },
      { year: 2022, averagePackage: 1950000, highestPackage: 35000000, percentage: 91 },
      { year: 2021, averagePackage: 1750000, highestPackage: 32000000, percentage: 90 }
    ]
  },
  academics: {
    coursesOffered: ["B.Tech", "M.Tech", "PhD", "Dual Degree", "M.Sc", "MBA", "M.Des", "Executive Programs"],
    popularCourses: ["B.Tech Computer Science", "B.Tech Electrical Engineering", "B.Tech Mechanical Engineering", "MBA", "M.Tech"],
    facultyCount: 550,
    studentCount: 9000,
    studentFacultyRatio: "9:1",
    specialization: [
      "Computer Science",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Chemical Engineering",
      "Aerospace Engineering",
      "Materials Science",
      "Biological Sciences"
    ],
    departments: [
      "Computer Science & Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Chemical Engineering",
      "Aerospace Engineering",
      "Materials Science & Engineering",
      "Biological Sciences & Bioengineering",
      "Physics",
      "Chemistry",
      "Mathematics & Statistics",
      "Humanities & Social Sciences",
      "Management Sciences"
    ],
    researchCenters: 110,
    publications: 4500,
    collaborations: [
      "Massachusetts Institute of Technology (MIT)",
      "Stanford University",
      "University of California, Berkeley",
      "Purdue University",
      "University of Michigan",
      "National University of Singapore",
      "University of Tokyo"
    ],
    teachingMode: "offline"
  },
  infrastructure: {
    library: {
      name: "Central Library",
      books: 450000,
      journals: 11000,
      digitalResources: 130000,
      seatingCapacity: 1000
    },
    labs: {
      count: 280,
      majorLabs: [
        "Advanced Centre for Materials Science",
        "Centre for Mechatronics",
        "National Centre for Flexible Electronics",
        "Centre for Lasers & Photonics",
        "Samtel Centre for Display Technologies",
        "Centre for Environmental Science & Engineering",
        "P K Kelkar Library"
      ],
      equipmentValue: 480000000
    },
    sports: {
      facilities: [
        "Swimming Pool",
        "Cricket Stadium",
        "Football Ground",
        "Tennis Courts",
        "Basketball Courts",
        "Badminton Courts",
        "Squash Courts",
        "Table Tennis Hall",
        "Gymnasium",
        "Athletics Track",
        "Hockey Field",
        "Volleyball Courts",
        "Yoga Center"
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
        "High-speed WiFi",
        "Laundry Service",
        "Common Rooms with TV",
        "Study Rooms (24x7)",
        "Gym",
        "Indoor Games Room",
        "Music Room",
        "Dance Room",
        "Guest Rooms",
        "Medical Facility",
        "Cafeteria & Canteen",
        "Cooperative Stores"
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
    cutoff: 97.8,
    cutoffTrend: 0.3,
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
      "Entrepreneurship Cell",
      "Music Club (Dandiya)",
      "Dance Club (Footloose)",
      "Drama Club (Dramatics Society)",
      "Photography Club",
      "Debating Society",
      "Literary Society",
      "Astronomy Club",
      "Environmental Club",
      "Quiz Club",
      "Film Club",
      "Fine Arts Club"
    ],
    festivals: [
      "Antaragni (Annual Cultural Festival)",
      "Techkriti (Technical Festival)",
      "Udghosh (Sports Fest)"
    ],
    technicalEvents: [
      "Hackathons",
      "Coding Competitions",
      "Robotics Competitions",
      "Business Plan Competitions",
      "Research Symposiums",
      "Industry Interaction Programs",
      "Innovation Challenges"
    ],
    culturalEvents: [
      "Music Concerts",
      "Dance Performances",
      "Drama Nights",
      "Art Exhibitions",
      "Literary Events",
      "Film Screenings",
      "Comedy Shows"
    ],
    socialInitiatives: [
      "National Service Scheme (NSS)",
      "Teach for India Program",
      "Blood Donation Camps",
      "Environmental Awareness Drives",
      "Community Development Programs",
      "Women Empowerment Initiatives",
      "Rural Development Projects"
    ],
    annualBudget: 45000000
  },
  faculty: {
    total: 550,
    phdHolders: 520,
    professor: 200,
    associateProfessor: 220,
    assistantProfessor: 130,
    industryExperience: 8,
    internationalFaculty: 45,
    awards: [
      "Padma Awards (4 recipients)",
      "Shanti Swarup Bhatnagar Prize (12 recipients)",
      "Infosys Prize",
      "TWAS Prize",
      "J.C. Bose Fellowship",
      "Swarnajayanti Fellowship",
      "Ramanujan Fellowship"
    ]
  },
  alumni: {
    notableAlumni: [
      { name: "N. R. Narayana Murthy", designation: "Founder", company: "Infosys" },
      { name: "Manohar Parrikar", designation: "Former Defence Minister", company: "Government of India" },
      { name: "Kumar Mangalam Birla", designation: "Chairman", company: "Aditya Birla Group" },
      { name: "Arvind Kejriwal", designation: "Chief Minister", company: "Government of Delhi" },
      { name: "Rajat Sharma", designation: "Chairman", company: "India TV" },
      { name: "Vijay Shekhar Sharma", designation: "Founder", company: "Paytm" },
      { name: "Kunal Bahl", designation: "Co-founder", company: "Snapdeal" }
    ],
    placementCompanies: [
      "Google", "Microsoft", "Amazon", "Goldman Sachs",
      "McKinsey", "BCG", "Bain", "JP Morgan",
      "Morgan Stanley", "Intel", "Qualcomm", "Samsung"
    ],
    networkStrength: 94
  },
  international: {
    collaborations: 130,
    studentExchange: true,
    facultyExchange: true,
    partnerUniversities: [
      "Massachusetts Institute of Technology (MIT)",
      "Stanford University",
      "University of California, Berkeley",
      "Purdue University",
      "National University of Singapore",
      "University of Tokyo",
      "University of Sydney"
    ],
    foreignStudents: 280
  },
  contact: {
    phone: ["+91-512-2590151", "+91-512-2590152"],
    email: ["deanacad@iitk.ac.in", "registrar@iitk.ac.in", "placement@iitk.ac.in"],
    website: "https://www.iitk.ac.in",
    socialMedia: {
      facebook: "https://facebook.com/iitkanpur",
      twitter: "https://twitter.com/iitkanpur",
      linkedin: "https://linkedin.com/school/iit-kanpur",
      instagram: "https://instagram.com/iitkanpur",
      youtube: "https://youtube.com/iitkanpur"
    },
    admissionContact: {
      phone: "+91-512-2597631",
      email: "admission@iitk.ac.in"
    }
  },
  facilities: [
    "24x7 Central Library",
    "High-speed WiFi Campus",
    "Sports Complex with Stadium",
    "Medical Center with Ambulance",
    "Multiple Banks & ATMs",
    "Post Office",
    "Shopping Complex",
    "Book Store & Stationery",
    "Food Court with Multiple Cuisines",
    "Guest House",
    "Auditorium & Conference Halls",
    "Research Parks",
    "Incubation Center (Startup Incubation and Innovation Centre)",
    "Career Development Center",
    "Transportation Services",
    "Recreational Centers"
  ],
  achievements: [
    "Ranked #4 among Engineering Institutes in India (NIRF 2024)",
    "QS World University Rankings: 264 (2024)",
    "Times Higher Education: 301-350 band (2024)",
    "Institute of Eminence (IoE) status",
    "Pioneer in computer science education in India",
    "Excellence in Sports (Multiple Inter-IIT trophies)",
    "Leading research output in engineering",
    "Strongest alumni network among IITs"
  ],
  newsUpdates: [
    { 
      title: "IIT Kanpur develops India's first hyperloop prototype", 
      date: "2024-01-20", 
      link: "https://iitk.ac.in/news/hyperloop-prototype" 
    },
    { 
      title: "Record placement season with highest package of ₹4.1 crore", 
      date: "2023-12-15", 
      link: "https://iitk.ac.in/news/placement-2023" 
    },
    { 
      title: "IIT Kanpur partners with MIT for AI and robotics research", 
      date: "2023-11-10", 
      link: "https://iitk.ac.in/news/mit-partnership" 
    },
    { 
      title: "Students develop low-cost water purification system for rural areas", 
      date: "2023-09-18", 
      link: "https://iitk.ac.in/news/water-purification-project" 
    }
  ],
  gallery: [
    { type: "campus", url: "/gallery/iitk-campus1.jpg", caption: "Main Building" },
    { type: "campus", url: "/gallery/iitk-campus2.jpg", caption: "Central Library" },
    { type: "campus", url: "/gallery/iitk-campus3.jpg", caption: "Convocation Hall" },
    { type: "lab", url: "/gallery/iitk-lab1.jpg", caption: "Advanced Materials Lab" },
    { type: "lab", url: "/gallery/iitk-lab2.jpg", caption: "Robotics Research Center" },
    { type: "hostel", url: "/gallery/iitk-hostel1.jpg", caption: "Student Hostels" },
    { type: "sports", url: "/gallery/iitk-sports1.jpg", caption: "Sports Complex" },
    { type: "event", url: "/gallery/iitk-event1.jpg", caption: "Antaragni Cultural Festival" },
    { type: "event", url: "/gallery/iitk-event2.jpg", caption: "Techkriti Technical Festival" }
  ],
  faqs: [
    { 
      question: "What is the JEE Advanced cutoff for IIT Kanpur?", 
      answer: "The cutoff varies by branch and category. For General category, Computer Science typically requires 98.5+ percentile, while other branches range from 96-98 percentile. The exact cutoff changes annually based on competition." 
    },
    { 
      question: "What are the most popular branches at IIT Kanpur?", 
      answer: "Computer Science & Engineering is the most sought-after, followed by Electrical Engineering, Mechanical Engineering, and Aerospace Engineering. The institute is also known for its strong programs in Materials Science and Biological Sciences." 
    },
    { 
      question: "Does IIT Kanpur have a dedicated incubation center?", 
      answer: "Yes, IIT Kanpur has the Startup Incubation and Innovation Centre (SIIC), one of India's oldest and most successful incubation centers. It has incubated over 200 startups with significant funding and success stories." 
    },
    { 
      question: "What is special about IIT Kanpur campus?", 
      answer: "The 1055-acre campus is one of the largest among IITs and features state-of-the-art infrastructure. The campus is known for its academic freedom, research facilities, and vibrant student life." 
    },
    { 
      question: "What research opportunities are available for undergraduates?", 
      answer: "IIT Kanpur offers extensive undergraduate research opportunities through the Undergraduate Research Opportunities Program (UROP), summer internships with faculty, and access to state-of-the-art research facilities." 
    },
    { 
      question: "How is the hostel accommodation at IIT Kanpur?", 
      answer: "The institute provides excellent hostel accommodation for all students. There are 11 hostels (including 2 for girls) with modern amenities. Hostels are equipped with high-speed internet and recreational facilities." 
    },
    { 
      question: "What are the major festivals at IIT Kanpur?", 
      answer: "Antaragni is the annual cultural festival (one of North India's largest), Techkriti is the technical festival (focusing on innovation and technology), and Udghosh is the sports festival." 
    },
    { 
      question: "Does IIT Kanpur offer interdisciplinary programs?", 
      answer: "Yes, IIT Kanpur offers several interdisciplinary programs including Materials Science, Biological Sciences & Bioengineering, Environmental Engineering, and Data Science." 
    },
    { 
      question: "What is the student-faculty ratio?", 
      answer: "The student-faculty ratio is approximately 9:1, ensuring personalized attention and strong mentorship opportunities for students." 
    },
    { 
      question: "How strong is the alumni network?", 
      answer: "IIT Kanpur has one of the strongest alumni networks globally, with prominent leaders in technology, business, politics, and entrepreneurship across the world including founders of Infosys, Paytm, and Snapdeal." 
    }
  ]
},
{
  id: "1005",
  slug: "iit-kharagpur",
  name: "Indian Institute of Technology Kharagpur",
  shortName: "IIT Kharagpur",
  tagline: "योगः कर्मसु कौशलम् (Excellence in action is Yoga)",
  overview: "India's first and largest IIT, a premier institution known for its rich heritage, diverse academic programs, and pioneering research",
  description: "Indian Institute of Technology Kharagpur is the oldest and largest IIT in India, established in 1951 by the Government of India. Founded with assistance from UNESCO, it was the first IIT to be established and has since grown into a premier institution of national importance. Located in the historic Hijli Detention Camp, the institute combines a rich history with cutting-edge research and innovation across engineering, science, technology, law, and management.",
  logo: "/logos/iit-kharagpur.png",
  stream: "engineering",
  type: "government",
  category: "premier",
  ranking: 5,
  rating: 4.7,
  nirfRank: 3,
  googleRating: 4.6,
  reviews: {
    count: 12500,
    average: 4.7,
    academics: 4.8,
    infrastructure: 4.7,
    placement: 4.7,
    faculty: 4.7
  },
  established: 1951,
  accreditation: "Institute of National Importance",
  naacGrade: "A++",
  affiliations: ["Institute of National Importance"],
  recognition: ["UGC", "AICTE", "MHRD"],
  location: {
    city: "Kharagpur",
    state: "West Bengal",
    country: "India",
    pincode: "721302",
    campusSize: "2100 acres",
    campusType: "rural",
    latitude: 22.3460,
    longitude: 87.2320,
    address: "IIT Kharagpur, Kharagpur, West Bengal 721302"
  },
  fees: {
    annual: 225000,
    total: 900000,
    hostel: 65000,
    mess: 42000,
    otherCharges: 18000,
    scholarshipAvailable: true,
    scholarshipDetails: [
      "Institute Merit-cum-Means Scholarship",
      "SC/ST Scholarship",
      "Free Studentship",
      "Ministry of Education Scholarships",
      "Private Trust Scholarships",
      "Sports & Cultural Scholarships",
      "Research Fellowships",
      "Alumni Endowed Scholarships"
    ],
    paymentOptions: ["Online Payment", "Demand Draft", "Bank Transfer", "Scholarship Deduction"]
  },
  placement: {
    averagePackage: 2350000,
    highestPackage: 42000000,
    medianPackage: 2100000,
    percentage: 92,
    totalOffers: 1450,
    totalStudents: 1500,
    internationalOffers: 105,
    dreamOffers: 185,
    averagePackageTrend: 10.5,
    topRecruiters: [
      "Microsoft", "Google", "Amazon", "Goldman Sachs",
      "McKinsey & Company", "Boston Consulting Group", "Bain & Company",
      "Intel", "Texas Instruments", "Qualcomm", "Samsung",
      "JP Morgan", "Morgan Stanley", "Deutsche Bank",
      "Tata Consultancy Services", "Infosys", "Wipro",
      "Adobe", "Oracle", "IBM", "Cisco", "NVIDIA",
      "SAP Labs", "VMware", "Salesforce"
    ],
    recruitmentSectors: ["Information Technology", "Finance & Consulting", "Core Engineering", "Research & Development", "Analytics", "Product Management", "Manufacturing", "Law"],
    placementStats: [
      { year: 2024, averagePackage: 2350000, highestPackage: 42000000, percentage: 92 },
      { year: 2023, averagePackage: 2100000, highestPackage: 39000000, percentage: 91 },
      { year: 2022, averagePackage: 1900000, highestPackage: 36000000, percentage: 90 },
      { year: 2021, averagePackage: 1700000, highestPackage: 33000000, percentage: 89 }
    ]
  },
  academics: {
    coursesOffered: [
      "B.Tech", "M.Tech", "PhD", "Dual Degree",
      "M.Sc", "MBA", "M.Sc in Economics",
      "LLB (Hons)", "LLM", "MS", "Executive Programs"
    ],
    popularCourses: [
      "B.Tech Computer Science", "B.Tech Electrical Engineering",
      "B.Tech Mechanical Engineering", "MBA", "LLB (Hons)"
    ],
    facultyCount: 720,
    studentCount: 12000,
    studentFacultyRatio: "8:1",
    specialization: [
      "Computer Science",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Chemical Engineering",
      "Aerospace Engineering",
      "Ocean Engineering & Naval Architecture",
      "Metallurgical & Materials Engineering",
      "Biotechnology",
      "Geology & Geophysics",
      "Agriculture & Food Engineering"
    ],
    departments: [
      "Computer Science & Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Chemical Engineering",
      "Aerospace Engineering",
      "Ocean Engineering & Naval Architecture",
      "Metallurgical & Materials Engineering",
      "Biotechnology",
      "Geology & Geophysics",
      "Agricultural & Food Engineering",
      "Physics",
      "Chemistry",
      "Mathematics",
      "Humanities & Social Sciences",
      "Management Studies",
      "Law",
      "Medical Science & Technology",
      "Ranbir & Chitra Gupta School of Infrastructure",
      "Rajendra Mishra School of Engineering Entrepreneurship"
    ],
    researchCenters: 135,
    publications: 5000,
    collaborations: [
      "Massachusetts Institute of Technology (MIT)",
      "Stanford University",
      "University of California, Berkeley",
      "University of Cambridge",
      "Technical University of Munich",
      "National University of Singapore",
      "University of Tokyo",
      "University of Illinois at Urbana-Champaign"
    ],
    teachingMode: "offline"
  },
  infrastructure: {
    library: {
      name: "Central Library",
      books: 550000,
      journals: 15000,
      digitalResources: 180000,
      seatingCapacity: 1500
    },
    labs: {
      count: 350,
      majorLabs: [
        "Advanced Technology Development Centre",
        "Cryogenic Engineering Centre",
        "Rubber Technology Centre",
        "Reliability Engineering Centre",
        "Centre for Oceans, Rivers, Atmosphere and Land Sciences",
        "Centre for Theoretical Studies",
        "Kalpana Chawla Space Technology Cell",
        "G. S. Sanyal School of Telecommunications",
        "Subir Chowdhury School of Quality & Reliability"
      ],
      equipmentValue: 600000000
    },
    sports: {
      facilities: [
        "Olympic-size Swimming Pool",
        "Cricket Stadium",
        "Football Ground (Astroturf)",
        "Hockey Field",
        "Tennis Courts (Clay & Hard)",
        "Basketball Courts (Indoor & Outdoor)",
        "Badminton Courts (International Standard)",
        "Squash Courts",
        "Table Tennis Hall",
        "Gymnasium (Multi-level)",
        "Athletics Track (Synthetic)",
        "Volleyball Courts",
        "Yoga & Meditation Center",
        "Indoor Sports Complex"
      ],
      stadium: true,
      gym: true,
      swimmingPool: true
    },
    hostel: {
      boys: true,
      girls: true,
      capacity: 10000,
      rooms: 5000,
      facilities: [
        "High-speed WiFi (1 Gbps)",
        "Laundry Service",
        "Common Rooms with LCD TV",
        "Study Rooms (24x7)",
        "Gym",
        "Indoor Games Room",
        "Music Room",
        "Dance Room",
        "Guest Rooms",
        "Medical Facility",
        "Cafeteria & Canteen",
        "Cooperative Stores",
        "ATM",
        "Cycling Track"
      ]
    },
    wifi: true,
    cafeteria: 20,
    medical: true,
    transportation: true,
    auditorium: 6
  },
  admission: {
    entranceExam: ["JEE Advanced"],
    cutoff: 97.5,
    cutoffTrend: 0.2,
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
      "Programming Club (Kharagpur Open Source Society)",
      "Robotics Club",
      "Entrepreneurship Cell (E-Cell)",
      "Music Club (Srijan)",
      "Dance Club (Choreo)",
      "Drama Club (Dramatics Society)",
      "Photography Club",
      "Debating Society",
      "Literary Society (Expressions)",
      "Astronomy Club",
      "Environmental Club",
      "Quiz Club",
      "Film Club (Cine)",
      "Fine Arts Club",
      "AI & ML Club",
      "Blockchain Society"
    ],
    festivals: [
      "Spring Fest (Annual Cultural Festival)",
      "Kshitij (Asia's Largest Techno-Management Festival)",
      "Sports Fest"
    ],
    technicalEvents: [
      "Hackathons",
      "Coding Competitions",
      "Robotics Competitions",
      "Business Plan Competitions",
      "Research Symposiums",
      "Industry Interaction Programs",
      "Innovation Challenges",
      "Quizzing Events"
    ],
    culturalEvents: [
      "Music Concerts",
      "Dance Performances",
      "Drama Nights",
      "Art Exhibitions",
      "Literary Events",
      "Film Screenings",
      "Comedy Shows",
      "Fashion Show"
    ],
    socialInitiatives: [
      "National Service Scheme (NSS)",
      "National Cadet Corps (NCC)",
      "Teach for India Program",
      "Blood Donation Camps",
      "Environmental Awareness Drives",
      "Community Development Programs",
      "Women Empowerment Initiatives",
      "Rural Development Projects",
      "Literacy Programs"
    ],
    annualBudget: 60000000
  },
  faculty: {
    total: 720,
    phdHolders: 690,
    professor: 280,
    associateProfessor: 260,
    assistantProfessor: 180,
    industryExperience: 7.5,
    internationalFaculty: 60,
    awards: [
      "Padma Awards (6 recipients)",
      "Shanti Swarup Bhatnagar Prize (18 recipients)",
      "Infosys Prize",
      "TWAS Prize",
      "J.C. Bose Fellowship",
      "Swarnajayanti Fellowship",
      "Ramanujan Fellowship",
      "National Design Award"
    ]
  },
  alumni: {
    notableAlumni: [
      { name: "Arjun Malhotra", designation: "Co-founder", company: "HCL Technologies" },
      { name: "Subrata Roy", designation: "Founder & Chairman", company: "Sahara India Pariwar" },
      { name: "Vinod Dham", designation: "Father of Pentium Processor", company: "Intel" },
      { name: "S. Damodaran", designation: "Former Chairman", company: "SEBI" },
      { name: "Ajit Balakrishnan", designation: "Founder & CEO", company: "Rediff.com" },
      { name: "Purnendu Chatterjee", designation: "Chairman", company: "The Chatterjee Group" },
      { name: "Rajeev Chandrasekhar", designation: "Union Minister", company: "Government of India" },
      { name: "S. Shankar Sastry", designation: "Dean", company: "UC Berkeley Engineering" },
      { name: "Gopal Krishna Pillai", designation: "Former Home Secretary", company: "Government of India" }
    ],
    placementCompanies: [
      "Google", "Microsoft", "Amazon", "Goldman Sachs",
      "McKinsey", "BCG", "Bain", "JP Morgan",
      "Morgan Stanley", "Intel", "Qualcomm", "Samsung"
    ],
    networkStrength: 97
  },
  international: {
    collaborations: 160,
    studentExchange: true,
    facultyExchange: true,
    partnerUniversities: [
      "Massachusetts Institute of Technology (MIT)",
      "Stanford University",
      "University of Cambridge",
      "National University of Singapore",
      "University of Tokyo",
      "Technical University of Munich",
      "University of Sydney",
      "University of Waterloo",
      "Georgia Institute of Technology"
    ],
    foreignStudents: 350
  },
  contact: {
    phone: ["+91-3222-282221", "+91-3222-282222"],
    email: ["deanacad@iitkgp.ac.in", "registrar@iitkgp.ac.in", "placement@iitkgp.ac.in"],
    website: "https://www.iitkgp.ac.in",
    socialMedia: {
      facebook: "https://facebook.com/iitkharagpur",
      twitter: "https://twitter.com/iitkgp",
      linkedin: "https://linkedin.com/school/iit-kharagpur",
      instagram: "https://instagram.com/iitkgp",
      youtube: "https://youtube.com/iitkgp"
    },
    admissionContact: {
      phone: "+91-3222-282091",
      email: "admission@iitkgp.ac.in"
    }
  },
  facilities: [
    "24x7 Central Library",
    "High-speed WiFi Campus (1 Gbps)",
    "Sports Complex with Olympic Pool",
    "Medical Center with Hospital",
    "Multiple Banks & ATMs",
    "Post Office",
    "Shopping Complex",
    "Book Store & Stationery",
    "Food Court with Multiple Cuisines",
    "Guest House",
    "Auditorium & Conference Halls",
    "Technology Business Incubator",
    "Science & Technology Entrepreneurs' Park",
    "Career Development Center",
    "Transportation Services",
    "Recreational Centers",
    "Temple & Prayer Halls",
    "Community Radio Station"
  ],
  achievements: [
    "India's First IIT (Established 1951)",
    "Ranked #3 among Engineering Institutes in India (NIRF 2024)",
    "QS World University Rankings: 270 (2024)",
    "Times Higher Education: 301-350 band (2024)",
    "Institute of Eminence (IoE) status",
    "Largest Campus among all IITs (2100 acres)",
    "Asia's Largest Techno-Management Festival (Kshitij)",
    "First IIT to offer Law, Medical Science & Entrepreneurship programs",
    "Highest number of alumni in leadership positions"
  ],
  newsUpdates: [
    { 
      title: "IIT Kharagpur celebrates 75 years of excellence in technical education", 
      date: "2024-02-15", 
      link: "https://iitkgp.ac.in/news/75th-anniversary" 
    },
    { 
      title: "Record placement season with highest package of ₹4.2 crore", 
      date: "2023-12-20", 
      link: "https://iitkgp.ac.in/news/placement-2023" 
    },
    { 
      title: "IIT Kharagpur launches India's first undergraduate program in Medical Science & Technology", 
      date: "2023-11-25", 
      link: "https://iitkgp.ac.in/news/medical-program" 
    },
    { 
      title: "Students develop indigenous technology for clean water in rural Bengal", 
      date: "2023-10-10", 
      link: "https://iitkgp.ac.in/news/clean-water-project" 
    },
    { 
      title: "IIT Kharagpur partners with MIT for joint research in sustainable energy", 
      date: "2023-09-05", 
      link: "https://iitkgp.ac.in/news/mit-partnership" 
    }
  ],
  gallery: [
    { type: "campus", url: "/gallery/iitkgp-campus1.jpg", caption: "Main Building" },
    { type: "campus", url: "/gallery/iitkgp-campus2.jpg", caption: "Central Library" },
    { type: "campus", url: "/gallery/iitkgp-campus3.jpg", caption: "B C Roy Hall of Residence" },
    { type: "campus", url: "/gallery/iitkgp-campus4.jpg", caption: "Heritage Building" },
    { type: "lab", url: "/gallery/iitkgp-lab1.jpg", caption: "Advanced Technology Development Centre" },
    { type: "lab", url: "/gallery/iitkgp-lab2.jpg", caption: "Cryogenic Engineering Lab" },
    { type: "hostel", url: "/gallery/iitkgp-hostel1.jpg", caption: "Student Hostels" },
    { type: "sports", url: "/gallery/iitkgp-sports1.jpg", caption: "Sports Complex" },
    { type: "event", url: "/gallery/iitkgp-event1.jpg", caption: "Spring Fest" },
    { type: "event", url: "/gallery/iitkgp-event2.jpg", caption: "Kshitij" }
  ],
  faqs: [
    { 
      question: "What makes IIT Kharagpur unique among IITs?", 
      answer: "IIT Kharagpur is the oldest and largest IIT with the biggest campus (2100 acres). It offers the widest range of programs including unique courses in Law, Medical Science, Entrepreneurship, and Architecture. It also has Asia's largest techno-management festival, Kshitij." 
    },
    { 
      question: "What is the JEE Advanced cutoff for IIT Kharagpur?", 
      answer: "The cutoff varies by branch and category. For General category, Computer Science typically requires 98+ percentile, Electrical around 97, and other branches range from 95-97 percentile. Cutoffs are generally lower than IIT Bombay and Delhi due to location." 
    },
    { 
      question: "What are the most popular branches at IIT Kharagpur?", 
      answer: "Computer Science & Engineering is the most sought-after, followed by Electrical Engineering, Mechanical Engineering, and Aerospace Engineering. The institute is also known for its unique programs in Ocean Engineering, Metallurgical Engineering, and Agricultural & Food Engineering." 
    },
    { 
      question: "Does IIT Kharagpur have a dedicated incubation center?", 
      answer: "Yes, IIT Kharagpur has the Technology Business Incubator (TBI) and the Science & Technology Entrepreneurs' Park (STEP). These centers have incubated over 300 startups with significant funding and success stories." 
    },
    { 
      question: "What is special about IIT Kharagpur campus?", 
      answer: "The 2100-acre campus is India's largest educational campus. It has its own township with 21 hostels, schools, hospitals, banks, post office, community radio station, and even a railway station within the campus. The campus is known for its heritage buildings and deer park." 
    },
    { 
      question: "What unique academic programs does IIT Kharagpur offer?", 
      answer: "IIT Kharagpur is the only IIT offering LLB (Hons) and LLM programs through its Rajiv Gandhi School of Intellectual Property Law. It also offers unique programs in Medical Science & Technology, Entrepreneurship, Architecture & Regional Planning, and Quality & Reliability." 
    },
    { 
      question: "How is the hostel accommodation at IIT Kharagpur?", 
      answer: "The institute has 21 halls of residence (including 3 for girls) accommodating over 10,000 students. Hostels are equipped with high-speed internet, recreational facilities, gyms, and 24x7 study rooms. Each hall has its own mess and cultural identity." 
    },
    { 
      question: "What are the major festivals at IIT Kharagpur?", 
      answer: "Spring Fest is the annual cultural festival (one of India's oldest and largest), Kshitij is Asia's largest techno-management festival, and the institute also hosts Sports Fest and Illumi (social fest)." 
    },
    { 
      question: "Does IIT Kharagpur offer interdisciplinary programs?", 
      answer: "Yes, IIT Kharagpur offers several interdisciplinary programs including Artificial Intelligence, Data Science, Climate Science, Cognitive Science, and Sustainable Energy Engineering. It also has flexible dual degree programs." 
    },
    { 
      question: "What is the student-faculty ratio?", 
      answer: "The student-faculty ratio is approximately 8:1, with over 720 faculty members and 12,000 students. This ensures personalized attention and strong mentorship opportunities." 
    },
    { 
      question: "How strong is the alumni network?", 
      answer: "IIT Kharagpur has one of the strongest and most diverse alumni networks globally. Notable alumni include founders of HCL Technologies, 'Father of Pentium Processor', former SEBI chairman, and leaders across industry, government, and academia." 
    },
    { 
      question: "What research opportunities are available for undergraduates?", 
      answer: "IIT Kharagpur offers extensive undergraduate research opportunities through the Undergraduate Research Program (URP), summer internships with faculty, and access to state-of-the-art research facilities including supercomputing infrastructure." 
    }
  ]
},
  {
    id: "2",
    slug: "aiims-delhi",
    name: "All India Institute of Medical Sciences Delhi",
    shortName: "AIIMS Delhi",
    tagline:
      "शरीरमाद्यं खलु धर्मसाधनम् (Body is indeed the primary instrument of dharma)",
    overview:
      "Top medical college in India with world-class healthcare facilities",
    description:
      "AIIMS Delhi is a public medical school and hospital based in New Delhi. It is one of the oldest and most prestigious medical colleges in India.",
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
      faculty: 4.7,
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
      address: "Ansari Nagar, New Delhi, Delhi 110029",
    },
    fees: {
      annual: 50000,
      total: 250000,
      hostel: 60000,
      mess: 40000,
      otherCharges: 15000,
      scholarshipAvailable: true,
      scholarshipDetails: [
        "Central Sector Scheme",
        "State Government Scholarships",
      ],
      paymentOptions: ["Online", "DD"],
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
        "AIIMS Hospitals",
        "Fortis Healthcare",
        "Apollo Hospitals",
        "Medanta",
        "Government Hospitals",
        "Research Institutes",
        "WHO",
        "UNICEF",
      ],
      recruitmentSectors: [
        "Hospitals",
        "Research",
        "Public Health",
        "Academics",
      ],
      placementStats: [
        {
          year: 2024,
          averagePackage: 1800000,
          highestPackage: 35000000,
          percentage: 98,
        },
        {
          year: 2023,
          averagePackage: 1650000,
          highestPackage: 32000000,
          percentage: 97,
        },
      ],
    },
    academics: {
      coursesOffered: ["MBBS", "MD", "MS", "DM", "MCh", "PhD", "BSc Nursing"],
      popularCourses: ["MBBS", "MD General Medicine", "MS Surgery"],
      facultyCount: 800,
      studentCount: 3000,
      studentFacultyRatio: "6:1",
      specialization: [
        "Cardiology",
        "Neurology",
        "Oncology",
        "Surgery",
        "Pediatrics",
      ],
      departments: [
        "Medicine",
        "Surgery",
        "Pediatrics",
        "Obstetrics & Gynecology",
        "Pathology",
        "Radiology",
      ],
      researchCenters: 50,
      publications: 3000,
      teachingMode: "offline",
    },
    infrastructure: {
      library: {
        name: "AIIMS Library",
        books: 300000,
        journals: 8000,
        digitalResources: 100000,
        seatingCapacity: 800,
      },
      labs: {
        count: 150,
        majorLabs: [
          "Research Lab",
          "Pathology Lab",
          "Microbiology Lab",
          "Biochemistry Lab",
        ],
      },
      sports: {
        facilities: ["Gym", "Basketball Court", "Badminton Court"],
        gym: true,
      },
      hostel: {
        boys: true,
        girls: true,
        capacity: 2000,
        rooms: 1000,
        facilities: ["WiFi", "Common Room", "Study Room"],
      },
      wifi: true,
      cafeteria: 5,
      medical: true,
      transportation: true,
      auditorium: 2,
    },
    admission: {
      entranceExam: ["NEET UG", "NEET PG"],
      cutoff: 99.5,
      applicationMode: "Online",
      applicationFee: 2000,
      selectionProcess: ["NEET Score", "Counseling"],
      eligibility: {
        minPercentage: 60,
        subjectsRequired: ["Physics", "Chemistry", "Biology"],
      },
      importantDates: {
        applicationStart: "December 1, 2023",
        applicationEnd: "January 31, 2024",
        examDate: "May 2024",
        resultDate: "June 2024",
        counsellingStart: "July 2024",
        counsellingEnd: "August 2024",
      },
      documentsRequired: [
        "10th Marksheet",
        "12th Marksheet",
        "NEET Scorecard",
        "Birth Certificate",
      ],
    },
    campusLife: {
      clubs: [
        "Medical Students Association",
        "Research Club",
        "Social Service Club",
      ],
      festivals: ["Aarogyam", "Medifest"],
      technicalEvents: ["Medical Conference", "Research Symposium"],
      culturalEvents: ["Annual Day", "Freshers Party"],
      socialInitiatives: ["Free Medical Camps", "Health Awareness Drives"],
    },
    faculty: {
      total: 800,
      phdHolders: 750,
      professor: 300,
      associateProfessor: 300,
      assistantProfessor: 200,
      industryExperience: 10,
    },
    alumni: {
      notableAlumni: [
        {
          name: "Dr. Naresh Trehan",
          designation: "Chairman",
          company: "Medanta Hospital",
        },
        {
          name: "Dr. Randeep Guleria",
          designation: "Former Director",
          company: "AIIMS Delhi",
        },
      ],
    },
    contact: {
      phone: ["+91-11-26588500"],
      email: ["aiims@aiims.edu"],
      website: "https://www.aiims.edu",
      socialMedia: {
        facebook: "https://facebook.com/aiimsofficial",
        twitter: "https://twitter.com/aiims_newdelhi",
      },
      admissionContact: {
        phone: "+91-11-26589900",
        email: "admission@aiims.edu",
      },
    },
    facilities: [
      "Hospital",
      "Library",
      "Hostel",
      "Cafeteria",
      "Sports Complex",
      "Bank",
    ],
    achievements: [
      "#1 Medical College in India",
      "Centre of Excellence in Medical Research",
    ],
    international: {
      collaborations: 0,
      studentExchange: false,
      facultyExchange: false,
      partnerUniversities: undefined,
      foreignStudents: undefined,
    },
  },
  {
    id: "3",
    slug: "bits-pilani",
    name: "Birla Institute of Technology and Science Pilani",
    shortName: "BITS Pilani",
    tagline: "Knowledge is Power",
    overview:
      "Deemed university known for its innovative curriculum and strong industry connections",
    description:
      "BITS Pilani is a private deemed university with campuses in Pilani, Goa, Hyderabad, and Dubai. Known for its flexible credit system and strong placement record.",
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
      faculty: 4.5,
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
      address: "Vidya Vihar, Pilani, Rajasthan 333031",
    },
    fees: {
      annual: 350000,
      total: 1400000,
      hostel: 100000,
      mess: 60000,
      otherCharges: 40000,
      scholarshipAvailable: true,
      scholarshipDetails: ["Merit Scholarship", "Need-based Scholarship"],
      paymentOptions: ["Online Payment", "Bank Transfer"],
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
        "Microsoft",
        "Amazon",
        "Adobe",
        "Morgan Stanley",
        "Texas Instruments",
        "Oracle",
        "JP Morgan",
        "Goldman Sachs",
      ],
      recruitmentSectors: ["IT", "Finance", "Consulting", "Core"],
      placementStats: [
        {
          year: 2024,
          averagePackage: 1800000,
          highestPackage: 55000000,
          percentage: 90,
        },
        {
          year: 2023,
          averagePackage: 1650000,
          highestPackage: 50000000,
          percentage: 89,
        },
      ],
    },
    academics: {
      coursesOffered: ["B.E.", "M.Sc.", "PhD", "MBA", "M.E."],
      popularCourses: [
        "B.E. Computer Science",
        "B.E. Electronics",
        "M.Sc. Chemistry",
      ],
      facultyCount: 450,
      studentCount: 8000,
      studentFacultyRatio: "10:1",
      specialization: [
        "Computer Science",
        "Electronics",
        "Mechanical",
        "Chemical",
        "Pharmacy",
      ],
      departments: [
        "Computer Science",
        "Electrical & Electronics",
        "Mechanical",
        "Chemical",
        "Physics",
        "Chemistry",
      ],
      researchCenters: 75,
      publications: 2500,
      teachingMode: "offline",
    },
    infrastructure: {
      library: {
        name: "Central Library",
        books: 400000,
        journals: 10000,
        digitalResources: 120000,
        seatingCapacity: 1000,
      },
      labs: {
        count: 200,
        majorLabs: [
          "Computing Lab",
          "Electronics Lab",
          "Mechanical Workshop",
          "Chemistry Lab",
        ],
      },
      sports: {
        facilities: [
          "Swimming Pool",
          "Gym",
          "Tennis Courts",
          "Basketball Courts",
        ],
        gym: true,
        swimmingPool: true,
      },
      hostel: {
        boys: true,
        girls: true,
        capacity: 6000,
        rooms: 3000,
        facilities: ["WiFi", "Common Room", "Study Room", "Gym"],
      },
      wifi: true,
      cafeteria: 6,
      medical: true,
      transportation: true,
      auditorium: 2,
    },
    admission: {
      entranceExam: ["BITSAT"],
      cutoff: 320,
      applicationMode: "Online",
      applicationFee: 3000,
      selectionProcess: ["BITSAT Score", "Admission Test"],
      eligibility: {
        minPercentage: 75,
        subjectsRequired: ["Physics", "Chemistry", "Mathematics"],
      },
      importantDates: {
        applicationStart: "January 2024",
        applicationEnd: "March 2024",
        examDate: "May-June 2024",
        resultDate: "June 2024",
        counsellingStart: "July 2024",
        counsellingEnd: "August 2024",
      },
      documentsRequired: [
        "10th Marksheet",
        "12th Marksheet",
        "BITSAT Scorecard",
      ],
    },
    campusLife: {
      clubs: [
        "Technical Club",
        "Cultural Club",
        "Sports Club",
        "Entrepreneurship Cell",
      ],
      festivals: ["Apogee", "BOSM"],
      technicalEvents: ["Code Competition", "Robotics Workshop"],
      culturalEvents: ["Music Festival", "Dance Competition"],
      socialInitiatives: ["NGO Collaboration", "Community Service"],
    },
    faculty: {
      total: 450,
      phdHolders: 400,
      professor: 150,
      associateProfessor: 200,
      assistantProfessor: 100,
      industryExperience: 7,
    },
    alumni: {
      notableAlumni: [
        {
          name: "Kumar Mangalam Birla",
          designation: "Chairman",
          company: "Aditya Birla Group",
        },
        {
          name: "Sanjiv Bajaj",
          designation: "Chairman",
          company: "Bajaj Finserv",
        },
      ],
    },
    contact: {
      phone: ["+91-1596-242159"],
      email: ["info@pilani.bits-pilani.ac.in"],
      website: "https://www.bits-pilani.ac.in",
      socialMedia: {
        facebook: "https://facebook.com/bitspilani",
        twitter: "https://twitter.com/bitspilani",
      },
      admissionContact: {
        phone: "+91-1596-245073",
        email: "admission@pilani.bits-pilani.ac.in",
      },
    },
    facilities: [
      "Library",
      "Hostel",
      "Sports Complex",
      "Medical Center",
      "Bank",
      "Post Office",
    ],
    achievements: ["Institute of Eminence", "Excellent Placement Record"],
    international: {
      collaborations: 0,
      studentExchange: false,
      facultyExchange: false,
      partnerUniversities: undefined,
      foreignStudents: undefined,
    },
  },
  
  {
    id: "16",
    slug: "scaler-school-of-technology",
    name: "Scaler School of Technology",
    shortName: "Scaler",
    tagline: "Learn. Build. Lead.",
    overview:
      "A new-age technology institution focusing on software engineering, entrepreneurship, and future-ready education",
    description:
      "Scaler School of Technology is an innovative, outcome-focused institution that combines academic rigor with industry relevance. Offering a 4-year residential undergraduate program in Computer Science, it focuses on building world-class software engineers and technology leaders through a curriculum designed in collaboration with industry experts and academic leaders.",
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
      faculty: 4.7,
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
      longitude: 77.504,
      address:
        "Plot No. 1, Knowledge Park III, Greater Noida, Uttar Pradesh 201310",
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
        "Industry-sponsored Scholarships",
      ],
      paymentOptions: [
        "EMI Options",
        "Education Loan Assistance",
        "Online Payment",
        "Bank Transfer",
      ],
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
        "Google",
        "Microsoft",
        "Amazon",
        "Meta",
        "Uber",
        "Airbnb",
        "Stripe",
        "Goldman Sachs",
        "JP Morgan",
        "McKinsey Digital",
        "Boston Consulting Group",
        "Adobe",
        "Atlassian",
        "Directi",
        "Swiggy",
        "Zomato",
        "Razorpay",
        "Flipkart",
        "Myntra",
        "Ola",
        "Paytm",
      ],
      recruitmentSectors: [
        "Tech Startups",
        "FAANG Companies",
        "FinTech",
        "E-commerce",
        "Consulting",
        "Product Companies",
        "Investment Banks",
      ],
      placementStats: [
        {
          year: 2025,
          averagePackage: 3200000,
          highestPackage: 75000000,
          percentage: 98,
        },
        {
          year: 2024,
          averagePackage: 2800000,
          highestPackage: 65000000,
          percentage: 96,
        },
        {
          year: 2023,
          averagePackage: 2400000,
          highestPackage: 55000000,
          percentage: 95,
        },
      ],
    },
    academics: {
      coursesOffered: [
        "B.Tech in Computer Science & Engineering",
        "Integrated M.Tech Programs",
        "Executive Programs",
      ],
      popularCourses: [
        "B.Tech Computer Science",
        "Specialization in AI & ML",
        "Blockchain Technology",
        "Full Stack Development",
      ],
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
        "Entrepreneurship",
      ],
      departments: [
        "Computer Science & Engineering",
        "Artificial Intelligence",
        "Data Science",
        "Software Engineering",
        "Entrepreneurship & Innovation",
      ],
      researchCenters: 12,
      publications: 150,
      collaborations: [
        "Carnegie Mellon University",
        "Stanford University",
        "University of California, Berkeley",
        "Massachusetts Institute of Technology",
        "Indian Institute of Technology (Various)",
        "Indian Institute of Science",
      ],
      teachingMode: "hybrid",
    },
    infrastructure: {
      library: {
        name: "Digital Innovation Library",
        books: 75000,
        journals: 5000,
        digitalResources: 250000,
        seatingCapacity: 300,
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
          "Data Science Research Center",
        ],
        equipmentValue: 150000000,
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
          "Yoga & Meditation Studio",
        ],
        stadium: false,
        gym: true,
        swimmingPool: true,
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
          "Medical Room with Nurse",
        ],
      },
      wifi: true,
      cafeteria: 3,
      medical: true,
      transportation: true,
      auditorium: 2,
    },
    admission: {
      entranceExam: [
        "Scaler Aptitude Test (SAT)",
        "JEE Main",
        "Other National Level Tests",
      ],
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
        "Final Selection",
      ],
      eligibility: {
        minPercentage: 65,
        subjectsRequired: [
          "Mathematics",
          "Physics",
          "Chemistry/Computer Science",
        ],
        ageLimit: 22,
      },
      importantDates: {
        applicationStart: "September 1, 2024",
        applicationEnd: "December 31, 2024",
        examDate: "January 2025",
        resultDate: "February 2025",
        counsellingStart: "March 2025",
        counsellingEnd: "April 2025",
      },
      documentsRequired: [
        "10th Marksheet & Certificate",
        "12th Marksheet & Certificate",
        "Entrance Exam Scorecard",
        "Identity Proof",
        "Passport-size Photographs",
        "Portfolio (if applicable)",
        "Achievement Certificates",
      ],
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
        "Social Impact Club",
      ],
      festivals: [
        "TechStorm (Annual Tech Festival)",
        "Innovate (Startup Summit)",
        "CodeFest (Coding Marathon)",
        "HackVerse (National Hackathon)",
      ],
      technicalEvents: [
        "24-hour Hackathons",
        "AI/ML Competitions",
        "Blockchain Buildathons",
        "Product Design Sprints",
        "CTF (Capture The Flag) Events",
        "Startup Pitch Competitions",
        "Industry Workshops",
        "Tech Talks by Industry Leaders",
      ],
      culturalEvents: [
        "Freshers' Party",
        "Annual Cultural Night",
        "Music Concerts",
        "Talent Shows",
        "Theatre Performances",
        "Art Exhibitions",
        "Food Festivals",
      ],
      socialInitiatives: [
        "Tech for Good Projects",
        "Digital Literacy Drives",
        "Open Source Contributions",
        "Women in Tech Mentorship",
        "Rural Technology Adoption",
        "Environmental Sustainability Projects",
      ],
      annualBudget: 35000000,
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
        "Open Source Contribution Awards",
      ],
    },
    alumni: {
      notableAlumni: [
        {
          name: "Anshuman Singh",
          designation: "Co-founder",
          company: "InterviewBit & Scaler",
        },
        {
          name: "Abhimanyu Saxena",
          designation: "Co-founder",
          company: "InterviewBit & Scaler",
        },
        {
          name: "Vineet Singh",
          designation: "Lead Engineer",
          company: "Google",
        },
        {
          name: "Priya Sharma",
          designation: "Product Manager",
          company: "Microsoft",
        },
        {
          name: "Rohan Mehta",
          designation: "Founder",
          company: "Tech Startup (Acquired)",
        },
      ],
      placementCompanies: [
        "Google",
        "Microsoft",
        "Amazon",
        "Meta",
        "Uber",
        "Stripe",
        "Goldman Sachs",
        "McKinsey",
        "Directi",
        "Razorpay",
        "Swiggy",
        "Zomato",
      ],
      networkStrength: 88,
    },
    international: {
      collaborations: 25,
      studentExchange: true,
      facultyExchange: true,
      partnerUniversities: [
        "Carnegie Mellon University",
        "University of California, Berkeley",
        "University of Texas at Austin",
        "National University of Singapore",
      ],
      foreignStudents: 50,
    },
    contact: {
      phone: ["+91-8448440101", "+91-9876543210"],
      email: [
        "admissions@scalerschool.com",
        "info@scalerschool.com",
        "placements@scalerschool.com",
      ],
      website: "https://www.scalerschool.com",
      socialMedia: {
        facebook: "https://facebook.com/scalerschool",
        twitter: "https://twitter.com/scalerschool",
        linkedin: "https://linkedin.com/school/scaler-school-of-technology",
        instagram: "https://instagram.com/scalerschool",
        youtube: "https://youtube.com/scalerschool",
      },
      admissionContact: {
        phone: "+91-8448440101",
        email: "admissions@scalerschool.com",
      },
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
      "Indoor Games Arena",
    ],
    achievements: [
      "100% placement record since inception",
      "Highest package: ₹75 LPA (2024)",
      "Average package: ₹32 LPA (2024)",
      "Ranked #1 among new-age tech colleges",
      "Winner of National Hackathon 2023",
      "Recognized as 'Most Innovative Tech School' by Times of India",
      "Industry-academia collaboration award",
      "Maximum patents per student among new institutions",
    ],
    newsUpdates: [
      {
        title:
          "Scaler School achieves 100% placement with highest package of ₹75 LPA",
        date: "2024-03-15",
        link: "https://scalerschool.com/news/placement-2024",
      },
      {
        title:
          "Launches India's first undergraduate program in Web3 & Blockchain",
        date: "2023-11-20",
        link: "https://scalerschool.com/news/web3-program",
      },
      {
        title:
          "Partners with Carnegie Mellon for research in Quantum Computing",
        date: "2023-09-10",
        link: "https://scalerschool.com/news/cmu-partnership",
      },
      {
        title:
          "Students develop AI solution that wins National Innovation Award",
        date: "2023-07-05",
        link: "https://scalerschool.com/news/ai-innovation-award",
      },
    ],
    gallery: [
      {
        type: "campus",
        url: "/gallery/scaler-campus1.jpg",
        caption: "Modern Campus Architecture",
      },
      {
        type: "campus",
        url: "/gallery/scaler-campus2.jpg",
        caption: "Innovation Hub",
      },
      {
        type: "lab",
        url: "/gallery/scaler-lab1.jpg",
        caption: "AI & ML Research Lab",
      },
      {
        type: "lab",
        url: "/gallery/scaler-lab2.jpg",
        caption: "Blockchain Innovation Center",
      },
      {
        type: "hostel",
        url: "/gallery/scaler-hostel1.jpg",
        caption: "Smart Student Hostels",
      },
      {
        type: "sports",
        url: "/gallery/scaler-sports1.jpg",
        caption: "Indoor Sports Complex",
      },
      {
        type: "event",
        url: "/gallery/scaler-event1.jpg",
        caption: "TechStorm Festival",
      },
      {
        type: "event",
        url: "/gallery/scaler-event2.jpg",
        caption: "Startup Pitch Competition",
      },
    ],
    faqs: [
      {
        question:
          "What makes Scaler School of Technology different from traditional engineering colleges?",
        answer:
          "Scaler focuses on industry-relevant curriculum, 1:1 mentorship, project-based learning, and strong placement support with direct industry connections. The program is designed to create job-ready software engineers from day one.",
      },
      {
        question: "What is the fee structure and scholarship opportunities?",
        answer:
          "Annual fees are ₹9,00,000 with multiple scholarship options covering up to 100% of tuition fees based on merit, need, and diversity. EMI options and education loan assistance are also available.",
      },
      {
        question: "What are the placement statistics?",
        answer:
          "Scaler has maintained 100% placement record since inception with average package of ₹32 LPA and highest package of ₹75 LPA in 2024. Top recruiters include Google, Microsoft, Amazon, and leading startups.",
      },
      {
        question: "Is Scaler School recognized by UGC/AICTE?",
        answer:
          "Yes, Scaler School of Technology is approved by UGC and AICTE, offering a recognized B.Tech degree in Computer Science & Engineering.",
      },
      {
        question: "What is the admission process?",
        answer:
          "Admission is based on Scaler Aptitude Test (SAT) or JEE Main scores, followed by technical interview and personal interview. Portfolio review is considered for exceptional candidates.",
      },
      {
        question: "Does Scaler provide hostel facilities?",
        answer:
          "Yes, Scaler provides modern, smart hostel facilities on campus with high-speed internet, recreational areas, and 24/7 security. Separate hostels are available for boys and girls.",
      },
      {
        question: "What specializations are offered?",
        answer:
          "Specializations include AI & ML, Data Science, Full Stack Development, DevOps, Cybersecurity, Blockchain, Product Management, and Entrepreneurship.",
      },
      {
        question: "Are there opportunities for entrepreneurship?",
        answer:
          "Yes, Scaler has a dedicated Entrepreneurship Cell, startup incubation center, mentorship from successful founders, and opportunities to work on real startup projects.",
      },
    ],
  },
  {
    id: "17",
    slug: "newton-school-of-technology",
    name: "Newton School of Technology",
    shortName: "Newton School",
    tagline: "Engineering the Future",
    overview:
      "A next-generation technology institution focusing on industry-aligned education, innovation, and entrepreneurship",
    description:
      "Newton School of Technology is a forward-thinking institution that bridges the gap between traditional engineering education and industry requirements. With a curriculum designed by industry experts from Silicon Valley and top tech companies, it offers a 4-year residential B.Tech program with a strong emphasis on practical skills, project-based learning, and career readiness.",
    logo: "/logos/newton-school.png",
    stream: "engineering",
    type: "new-age",
    category: "tier1",
    ranking: 50,
    rating: 4.5,

    googleRating: 4.6,
    reviews: {
      count: 920,
      average: 4.5,
      academics: 4.6,
      infrastructure: 4.7,
      placement: 4.8,
      faculty: 4.6,
    },
    established: 2021,
    accreditation: "UGC Approved Institution",
    naacGrade: "A",
    affiliations: ["University Grants Commission"],
    recognition: ["Ministry of Education", "AICTE"],
    location: {
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
      pincode: "560102",
      campusSize: "40 acres",
      campusType: "urban",
      latitude: 12.9716,
      longitude: 77.5946,
      address:
        "Innovation Park, Electronics City Phase 2, Bangalore, Karnataka 560102",
    },
    fees: {
      annual: 850000,
      total: 3400000,
      hostel: 140000,
      mess: 75000,
      otherCharges: 65000,
      scholarshipAvailable: true,
      scholarshipDetails: [
        "Newton Scholarship (up to 100% tuition)",
        "Women in STEM Scholarship",
        "Merit-cum-Means Scholarship",
        "Early Bird Scholarship",
        "Sports & Cultural Scholarship",
        "Innovator Scholarship for Startup Ideas",
      ],
      paymentOptions: [
        "Flexible EMI",
        "Education Loan Partnership",
        "Online Payment",
        "Corporate Sponsorship",
      ],
    },
    placement: {
      averagePackage: 2800000,
      highestPackage: 65000000,
      medianPackage: 2500000,
      percentage: 96,
      totalOffers: 320,
      totalStudents: 330,
      internationalOffers: 28,
      dreamOffers: 45,
      averagePackageTrend: 22,
      topRecruiters: [
        "Amazon",
        "Microsoft",
        "Google",
        "Flipkart",
        "Goldman Sachs",
        "JP Morgan",
        "Morgan Stanley",
        "Uber",
        "Ola",
        "Swiggy",
        "Zomato",
        "Razorpay",
        "Paytm",
        "PhonePe",
        "Adobe",
        "Intuit",
        "Salesforce",
        "Myntra",
        "MakeMyTrip",
        "Byju's",
        "TCS Digital",
        "Infosys Specialized",
        "Wipro Elite",
      ],
      recruitmentSectors: [
        "E-commerce",
        "FinTech",
        "Product Companies",
        "Consulting",
        "Analytics",
        "SaaS",
        "Startups",
        "Banking",
      ],
      placementStats: [
        {
          year: 2024,
          averagePackage: 2800000,
          highestPackage: 65000000,
          percentage: 96,
        },
        {
          year: 2023,
          averagePackage: 2300000,
          highestPackage: 52000000,
          percentage: 94,
        },
        {
          year: 2022,
          averagePackage: 1900000,
          highestPackage: 45000000,
          percentage: 92,
        },
      ],
    },
    academics: {
      coursesOffered: [
        "B.Tech in Computer Science & Engineering",
        "B.Tech in Data Science",
        "B.Tech in AI & ML",
        "Integrated Programs",
      ],
      popularCourses: [
        "B.Tech CSE with AI Specialization",
        "Full Stack Development",
        "Data Science & Analytics",
        "Cloud Computing",
      ],
      facultyCount: 75,
      studentCount: 1500,
      studentFacultyRatio: "8:1",
      specialization: [
        "Full Stack Development",
        "Artificial Intelligence",
        "Data Science & Analytics",
        "Cloud & DevOps",
        "Cybersecurity",
        "Mobile App Development",
        "Product Management",
        "Business Analytics",
      ],
      departments: [
        "Computer Science & Engineering",
        "Data Science",
        "Artificial Intelligence",
        "Software Engineering",
        "Digital Product Management",
      ],
      researchCenters: 10,
      publications: 120,
      collaborations: [
        "Indian Institute of Science (IISc)",
        "International Institute of Information Technology (IIIT)",
        "Industry Partnerships",
        "Tech Startup Ecosystem",
      ],
    },
    infrastructure: {
      library: {
        name: "Digital Learning Commons",
        books: 60000,
        journals: 4000,
        digitalResources: 200000,
        seatingCapacity: 250,
      },
      labs: {
        count: 28,
        majorLabs: [
          "AI Innovation Lab",
          "Data Science Research Center",
          "Cloud Computing Lab",
          "Cybersecurity Operations Center",
          "IoT & Embedded Systems Lab",
          "Mobile App Development Studio",
          "UX/UI Design Studio",
          "Blockchain Research Lab",
        ],
        equipmentValue: 120000000,
      },
      sports: {
        facilities: [
          "Multi-purpose Gym",
          "Indoor Sports Arena",
          "Swimming Pool",
          "Basketball Court",
          "Badminton Courts",
          "Table Tennis",
          "Yoga & Meditation Center",
          "Outdoor Fitness Area",
        ],
        stadium: false,
        gym: true,
        swimmingPool: true,
      },
      hostel: {
        boys: true,
        girls: true,
        capacity: 1200,
        rooms: 600,
        facilities: [
          "High-speed WiFi (500 Mbps)",
          "Smart Room Controls",
          "Common Study Areas",
          "Recreation Room",
          "Indoor Games",
          "Laundry Service",
          "Pantry with Basic Amenities",
          "24/7 Security",
          "Medical Assistance",
        ],
      },
      wifi: true,
      cafeteria: 4,
      medical: true,
      transportation: true,
      auditorium: 2,
    },
    admission: {
      entranceExam: [
        "Newton Aptitude Test (NAT)",
        "JEE Main",
        "State Entrance Exams",
      ],
      cutoff: 80,
      cutoffTrend: 4,
      applicationMode: "Online",
      applicationFee: 1200,
      selectionProcess: [
        "Online Application",
        "Aptitude Test",
        "Coding Assessment",
        "Technical Interview",
        "Personal Interview",
        "Profile Evaluation",
      ],
      eligibility: {
        minPercentage: 60,
        subjectsRequired: [
          "Mathematics",
          "Physics",
          "Chemistry/Computer Science",
        ],
        ageLimit: 21,
      },
      importantDates: {
        applicationStart: "October 1, 2024",
        applicationEnd: "January 31, 2025",
        examDate: "February 2025",
        resultDate: "March 2025",
        counsellingStart: "April 2025",
        counsellingEnd: "May 2025",
      },
      documentsRequired: [
        "10th Marksheet",
        "12th Marksheet",
        "Entrance Exam Score",
        "ID Proof",
        "Passport Photos",
        "Extracurricular Certificates",
        "Statement of Purpose",
      ],
    },
    campusLife: {
      clubs: [
        "Coding Club (Newton Coders)",
        "AI & ML Enthusiasts",
        "Entrepreneurship Club",
        "Design & Innovation Club",
        "Open Source Community",
        "Competitive Programming Team",
        "Robotics Club",
        "Finance & Trading Club",
        "Music & Arts Society",
        "Debate & Literary Club",
        "Social Responsibility Club",
      ],
      festivals: [
        "Newton Hackfest (Annual Hackathon)",
        "TechXplore (Technical Festival)",
        "Startup Conclave",
        "Cultural Carnival",
      ],
      technicalEvents: [
        "48-hour Hackathons",
        "Data Science Competitions",
        "AI/ML Challenges",
        "Product Design Sprints",
        "Coding Marathons",
        "Industry Case Studies",
        "Tech Workshops",
        "Startup Pitch Events",
      ],
      culturalEvents: [
        "Annual Day Celebration",
        "Freshers Welcome",
        "Music & Dance Nights",
        "Talent Hunt",
        "Festival Celebrations",
        "Movie Nights",
        "Food Festival",
      ],
      socialInitiatives: [
        "Tech Education for Underprivileged",
        "Environmental Sustainability Projects",
        "Women in Tech Initiatives",
        "Community Coding Workshops",
        "Digital Literacy Drives",
      ],
      annualBudget: 28000000,
    },
    faculty: {
      total: 75,
      phdHolders: 55,
      professor: 20,
      associateProfessor: 25,
      assistantProfessor: 30,
      industryExperience: 10,
      internationalFaculty: 15,
      awards: [
        "Industry Excellence Awards",
        "Teaching Innovation Awards",
        "Research Recognition",
        "Student Choice Awards",
      ],
    },
    alumni: {
      notableAlumni: [
        {
          name: "Siddharth Maheshwari",
          designation: "Co-founder",
          company: "Newton School",
        },
        {
          name: "Nishant Chandra",
          designation: "Co-founder",
          company: "Newton School",
        },
        {
          name: "Ankit Sharma",
          designation: "Software Engineer",
          company: "Amazon",
        },
        {
          name: "Priya Reddy",
          designation: "Product Analyst",
          company: "Microsoft",
        },
        {
          name: "Rahul Verma",
          designation: "Founder",
          company: "EdTech Startup",
        },
      ],
      placementCompanies: [
        "Amazon",
        "Microsoft",
        "Flipkart",
        "Goldman Sachs",
        "Swiggy",
        "Zomato",
        "Razorpay",
        "Adobe",
      ],
      networkStrength: 85,
    },
    international: {
      collaborations: 18,
      studentExchange: true,
      facultyExchange: true,
      partnerUniversities: [
        "University of California, Irvine",
        "University of British Columbia",
        "University of Melbourne",
        "Technical University of Munich",
      ],
      foreignStudents: 40,
    },
    contact: {
      phone: ["+91-8041611111", "+91-9876543211"],
      email: [
        "admissions@newtonschool.tech",
        "info@newtonschool.tech",
        "career@newtonschool.tech",
      ],
      website: "https://www.newtonschool.tech",
      socialMedia: {
        facebook: "https://facebook.com/newtonschool",
        twitter: "https://twitter.com/newtonschool",
        linkedin: "https://linkedin.com/school/newton-school",
        instagram: "https://instagram.com/newtonschool",
        youtube: "https://youtube.com/newtonschool",
      },
      admissionContact: {
        phone: "+91-8041611111",
        email: "admissions@newtonschool.tech",
      },
    },
    facilities: [
      "Smart Classrooms with Digital Boards",
      "High-speed Internet Infrastructure",
      "24/7 Computer Labs",
      "Startup Incubation Center",
      "Career Guidance Center",
      "Wellness & Counseling Center",
      "Food Court with Multiple Options",
      "Fitness Center",
      "Music Room",
      "Conference Rooms",
      "Makerspace",
      "Video Conferencing Facilities",
      "Study Pods",
      "Collaboration Rooms",
      "Indoor Recreation Center",
    ],
    achievements: [
      "96% placement rate with average package of ₹28 LPA",
      "Highest package: ₹65 LPA (2024)",
      "Ranked among top new-age tech schools",
      "Winner of National Hackathon 2023",
      "Industry-Academia Excellence Award",
      "Innovation in Education Award",
      "Maximum startup launches by students",
    ],
    newsUpdates: [
      {
        title:
          "Newton School achieves 96% placement with ₹65 LPA highest package",
        date: "2024-03-10",
        link: "https://newtonschool.tech/news/placement-2024",
      },
      {
        title: "Launches India's first campus in Bangalore's Electronics City",
        date: "2023-12-15",
        link: "https://newtonschool.tech/news/bangalore-campus",
      },
      {
        title: "Partners with IISc for research in AI and Data Science",
        date: "2023-10-20",
        link: "https://newtonschool.tech/news/iisc-partnership",
      },
      {
        title: "Students develop award-winning solution for traffic management",
        date: "2023-08-05",
        link: "https://newtonschool.tech/news/traffic-solution-award",
      },
    ],
    gallery: [
      {
        type: "campus",
        url: "/gallery/newton-campus1.jpg",
        caption: "Modern Campus Building",
      },
      {
        type: "campus",
        url: "/gallery/newton-campus2.jpg",
        caption: "Learning Commons",
      },
      {
        type: "lab",
        url: "/gallery/newton-lab1.jpg",
        caption: "AI Innovation Lab",
      },
      {
        type: "lab",
        url: "/gallery/newton-lab2.jpg",
        caption: "Data Science Center",
      },
      {
        type: "hostel",
        url: "/gallery/newton-hostel1.jpg",
        caption: "Student Residence",
      },
      {
        type: "sports",
        url: "/gallery/newton-sports1.jpg",
        caption: "Sports Facilities",
      },
      {
        type: "event",
        url: "/gallery/newton-event1.jpg",
        caption: "Hackfest Competition",
      },
      {
        type: "event",
        url: "/gallery/newton-event2.jpg",
        caption: "Industry Interaction",
      },
    ],
    faqs: [
      {
        question:
          "What is Newton School of Technology and how is it different?",
        answer:
          "Newton School is a new-age technology institution focusing on industry-relevant education with guaranteed placements. It differs through its 1:1 mentorship, project-based curriculum, and strong industry connections.",
      },
      {
        question: "What is the fee structure and are scholarships available?",
        answer:
          "Annual tuition fee is ₹8,50,000 with multiple scholarship options including the Newton Scholarship (up to 100%), Women in STEM, and merit-based scholarships. EMI options and loan assistance are provided.",
      },
      {
        question: "What are the placement opportunities?",
        answer:
          "96% placement rate with average package of ₹28 LPA and highest of ₹65 LPA. Top recruiters include Amazon, Microsoft, Flipkart, Goldman Sachs, and leading startups.",
      },
      {
        question: "Is Newton School a recognized institution?",
        answer:
          "Yes, Newton School is approved by UGC and AICTE, offering recognized B.Tech degrees in Computer Science and related fields.",
      },
      {
        question: "What is the admission process?",
        answer:
          "Admission is through Newton Aptitude Test (NAT) or JEE Main scores, followed by coding assessment, technical interview, and personal interview.",
      },
      {
        question: "Are hostel facilities available?",
        answer:
          "Yes, modern hostel facilities are available on campus with high-speed internet, recreational areas, and 24/7 security for both boys and girls.",
      },
      {
        question: "What specializations are offered?",
        answer:
          "Specializations include Full Stack Development, AI & ML, Data Science, Cloud Computing, Cybersecurity, and Product Management.",
      },
      {
        question: "Does Newton School support entrepreneurship?",
        answer:
          "Yes, there's a dedicated startup incubation center, entrepreneurship curriculum, mentorship from founders, and opportunities to launch startups during the program.",
      },
      {
        question: "What is the student-faculty ratio?",
        answer:
          "The student-faculty ratio is 8:1, ensuring personalized attention and mentorship for every student.",
      },
      {
        question: "Are there international exposure opportunities?",
        answer:
          "Yes, through international collaborations, student exchange programs, global hackathons, and opportunities to work on international projects.",
      },
    ],
  },
  {
    id: "18",
    slug: "polaris-school-of-technology",
    name: "Polaris School of Technology",
    shortName: "Polaris Tech",
    tagline: "Navigating Future Technologies",
    overview:
      "A cutting-edge technology institution specializing in futuristic technologies and industry-ready education",
    description:
      "Polaris School of Technology is an innovative institution that focuses on emerging technologies and their practical applications. With a curriculum designed around industry 4.0 technologies, it offers a unique blend of theoretical knowledge and hands-on experience in areas like AI, Blockchain, Quantum Computing, and Space Technology.",
    logo: "/logos/polaris-tech.png",
    stream: "engineering",
    type: "new-age",
    category: "tier1",
    ranking: 55,
    rating: 4.4,

    googleRating: 4.5,
    reviews: {
      count: 780,
      average: 4.4,
      academics: 4.5,
      infrastructure: 4.6,
      placement: 4.7,
      faculty: 4.5,
    },
    established: 2020,
    accreditation: "UGC Recognized Institution",
    naacGrade: "A",
    affiliations: [
      "University Grants Commission",
      "Ministry of Electronics & IT",
    ],
    recognition: ["NASSCOM Member", "IBM Academic Initiative", "AWS Educate"],
    location: {
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
      pincode: "500081",
      campusSize: "35 acres",
      campusType: "urban",
      latitude: 17.385,
      longitude: 78.4867,
      address: "Tech Valley, HITEC City, Hyderabad, Telangana 500081",
    },
    fees: {
      annual: 950000,
      total: 3800000,
      hostel: 160000,
      mess: 85000,
      otherCharges: 75000,
      scholarshipAvailable: true,
      scholarshipDetails: [
        "North Star Scholarship (up to 100%)",
        "Women in Emerging Tech Scholarship",
        "Innovator Grant for Research Projects",
        "Early Admission Scholarship",
        "Defense Personnel Scholarship",
        "Startup Founder Scholarship",
      ],
      paymentOptions: [
        "Income Share Agreement",
        "EMI Options",
        "Corporate Sponsorship",
        "Scholarship-based",
      ],
    },
    placement: {
      averagePackage: 3000000,
      highestPackage: 80000000,
      medianPackage: 2700000,
      percentage: 95,
      totalOffers: 250,
      totalStudents: 260,
      internationalOffers: 40,
      dreamOffers: 50,
      averagePackageTrend: 28,
      topRecruiters: [
        "Google DeepMind",
        "Microsoft Research",
        "IBM Research",
        "NVIDIA",
        "Intel AI",
        "AMD",
        "Qualcomm",
        "SpaceX",
        "Blue Origin",
        "ISRO",
        "Goldman Sachs Quantitative",
        "Morgan Stanley Tech",
        "Palantir",
        "OpenAI",
        "Anthropic",
        "Coinbase",
        "Binance",
        "Kraken",
        "Tesla",
        "Rivian",
        "Cruise",
        "Meta Reality Labs",
        "Apple Special Projects",
      ],
      recruitmentSectors: [
        "AI Research",
        "Quantum Computing",
        "Space Tech",
        "Blockchain",
        "Autonomous Vehicles",
        "FinTech",
        "Defense Tech",
        "Climate Tech",
      ],
      placementStats: [
        {
          year: 2024,
          averagePackage: 3000000,
          highestPackage: 80000000,
          percentage: 95,
        },
        {
          year: 2023,
          averagePackage: 2350000,
          highestPackage: 65000000,
          percentage: 93,
        },
        {
          year: 2022,
          averagePackage: 1850000,
          highestPackage: 50000000,
          percentage: 90,
        },
      ],
    },
    academics: {
      coursesOffered: [
        "B.Tech in Artificial Intelligence",
        "B.Tech in Quantum Computing",
        "B.Tech in Blockchain Technology",
        "B.Tech in Space Technology",
        "B.Tech in Robotics & Autonomous Systems",
      ],
      popularCourses: [
        "B.Tech AI",
        "B.Tech Quantum Computing",
        "B.Tech Blockchain",
      ],
      facultyCount: 65,
      studentCount: 1000,
      studentFacultyRatio: "6:1",
      specialization: [
        "Artificial Intelligence Research",
        "Quantum Algorithms",
        "Blockchain Development",
        "Space Systems Engineering",
        "Robotics & Automation",
        "Cybersecurity (Quantum-safe)",
        "Climate Tech Solutions",
        "Biotechnology & Bioinformatics",
      ],
      departments: [
        "Artificial Intelligence Research",
        "Quantum Computing Center",
        "Blockchain Innovation Lab",
        "Space Technology Department",
        "Robotics & Autonomous Systems",
        "Emerging Technologies",
      ],
      researchCenters: 15,
      publications: 180,
      collaborations: [
        "MIT Media Lab",
        "Stanford AI Lab",
        "CERN",
        "NASA",
        "ISRO",
        "European Space Agency",
        "IBM Quantum",
        "Google Quantum AI",
      ],
    },
    infrastructure: {
      library: {
        name: "Future Tech Library",
        books: 45000,
        journals: 3500,
        digitalResources: 300000,
        seatingCapacity: 200,
      },
      labs: {
        count: 32,
        majorLabs: [
          "Quantum Computing Lab (IBM Q Network)",
          "AI Research Supercomputer Cluster",
          "Blockchain Development Studio",
          "Space Simulation Chamber",
          "Robotics & Drone Lab",
          "Biotech & Bioinformatics Lab",
          "Climate Tech Research Center",
          "AR/VR Metaverse Lab",
          "Autonomous Vehicle Testing Track",
          "Cybersecurity War Room",
        ],
        equipmentValue: 250000000,
      },
      sports: {
        facilities: [
          "Zero-gravity Simulation Pool",
          "Esports Arena with VR Setup",
          "Rock Climbing Wall with Tech Integration",
          "Smart Gym with Biometric Tracking",
          "Drone Racing Arena",
          "Augmented Reality Sports Court",
          "Meditation Pods with Brain Sensing",
        ],
        stadium: false,
        gym: true,
        swimmingPool: true,
      },
      hostel: {
        boys: true,
        girls: true,
        capacity: 800,
        rooms: 400,
        facilities: [
          "Quantum-secure Internet",
          "Smart Rooms with Voice AI",
          "3D Printing Studio",
          "VR Lounge",
          "Hackerspace",
          "Recording Studio",
          "Biohacking Lab",
          "Robotics Workshop Area",
          "24/7 Quantum Computer Access",
        ],
      },
      wifi: true,
      cafeteria: 2,
      medical: true,
      transportation: true,
      auditorium: 1,
    },
    admission: {
      entranceExam: [
        "Polaris Tech Aptitude Test (PTAT)",
        "International Olympiads",
        "Research Portfolio",
      ],
      cutoff: 85,
      cutoffTrend: 6,
      applicationMode: "Online",
      applicationFee: 1500,
      selectionProcess: [
        "Online Application & Portfolio",
        "Technical Aptitude Test",
        "Research Proposal Submission",
        "Technical Deep Dive Interview",
        "Innovation Challenge",
        "Final Selection Committee",
      ],
      eligibility: {
        minPercentage: 70,
        subjectsRequired: ["Mathematics", "Physics", "Computer Science"],
        ageLimit: 20,
      },
      importantDates: {
        applicationStart: "August 1, 2024",
        applicationEnd: "November 30, 2024",
        examDate: "December 2024",
        resultDate: "January 2025",
        counsellingStart: "February 2025",
        counsellingEnd: "March 2025",
      },
      documentsRequired: [
        "Academic Records",
        "Research Papers (if any)",
        "GitHub Portfolio",
        "Innovation Projects",
        "Recommendation Letters",
        "Statement of Purpose (Research-focused)",
        "Technical Achievements",
      ],
    },
    campusLife: {
      clubs: [
        "Quantum Computing Society",
        "AI Research Group",
        "Blockchain Developers Club",
        "Space Exploration Club",
        "Robotics & Drone Team",
        "Climate Tech Innovators",
        "Cybersecurity Collective",
        "Biotech Research Group",
        "Metaverse Builders",
        "Future Finance Club",
        "Tech Ethics & Society Forum",
      ],
      festivals: [
        "Quantum Leap (Annual Tech Fest)",
        "Future Frontier Expo",
        "Hack the Future (Global Hackathon)",
        "Research Symposium",
      ],
      technicalEvents: [
        "Quantum Algorithm Competitions",
        "AI Model Building Marathons",
        "Blockchain Protocol Design",
        "Space Mission Simulations",
        "Robotics Olympics",
        "Climate Tech Challenge",
        "Cybersecurity CTF",
        "Startup Pitch for Deep Tech",
      ],
      culturalEvents: [
        "Tech-Art Exhibition",
        "Future Music Festival",
        "Sci-Fi Film Festival",
        "Innovation Showcase",
        "International Tech Culture Day",
      ],
      socialInitiatives: [
        "Tech for Social Impact Projects",
        "Climate Change Solutions",
        "Digital Inclusion Programs",
        "STEM Education for Rural Areas",
        "Open Source for Public Good",
      ],
      annualBudget: 40000000,
    },
    faculty: {
      total: 65,
      phdHolders: 60,
      professor: 15,
      associateProfessor: 20,
      assistantProfessor: 30,
      industryExperience: 8,
      internationalFaculty: 25,
      awards: [
        "Nobel Laureate in Physics (Visiting)",
        "Turing Award Nominees",
        "Forbes 30 Under 30 in Science",
        "MIT Technology Review Innovators",
        "Breakthrough Prize Recipients",
      ],
    },
    alumni: {
      notableAlumni: [
        {
          name: "Dr. Arjun Mehta",
          designation: "Quantum Researcher",
          company: "Google Quantum AI",
        },
        {
          name: "Priya Sharma",
          designation: "AI Ethics Lead",
          company: "OpenAI",
        },
        {
          name: "Rohan Kapoor",
          designation: "Blockchain Architect",
          company: "Ethereum Foundation",
        },
        {
          name: "Ananya Reddy",
          designation: "Space Systems Engineer",
          company: "SpaceX",
        },
        {
          name: "Vikram Singh",
          designation: "Founder",
          company: "Quantum Computing Startup",
        },
      ],
      placementCompanies: [
        "Google DeepMind",
        "Microsoft Research",
        "IBM Quantum",
        "SpaceX",
        "Palantir",
        "OpenAI",
        "Coinbase",
      ],
      networkStrength: 90,
    },
    international: {
      collaborations: 30,
      studentExchange: true,
      facultyExchange: true,
      partnerUniversities: [
        "Massachusetts Institute of Technology",
        "Stanford University",
        "California Institute of Technology",
        "ETH Zurich",
        "University of Tokyo",
        "National University of Singapore",
      ],
      foreignStudents: 60,
    },
    contact: {
      phone: ["+91-4067890123", "+91-9876543212"],
      email: [
        "admissions@polaristech.edu",
        "research@polaristech.edu",
        "industry@polaristech.edu",
      ],
      website: "https://www.polaristech.edu",
      socialMedia: {
        twitter: "https://twitter.com/polaristech",
        linkedin: "https://linkedin.com/school/polaris-tech",
      },
      admissionContact: {
        phone: "+91-4067890123",
        email: "admissions@polaristech.edu",
      },
    },
    facilities: [
      "Quantum Computer Access (IBM Q Network)",
      "AI Supercomputing Cluster",
      "Satellite Ground Station",
      "Clean Room for Nanotech",
      "3D Bioprinting Lab",
      "Autonomous Vehicle Test Track",
      "Drone Development Zone",
      "Blockchain Node Infrastructure",
      "VR/AR Development Studio",
      "Biometric Research Facilities",
      "High-frequency Trading Simulator",
      "Climate Simulation Chamber",
      "Zero-gravity Training Setup",
      "Cyber Range for Security Training",
    ],
    achievements: [
      "First Indian institution with IBM Quantum Computer access",
      "Student team won International Quantum Computing Competition",
      "Patents filed: 45+ in emerging technologies",
      "Research published in Nature & Science journals",
      "ISRO collaboration for satellite projects",
      "NASA Space Apps Challenge winners",
      "Global recognition for climate tech innovations",
    ],
    newsUpdates: [
      {
        title:
          "Polaris Tech students launch India's first student-built satellite",
        date: "2024-02-20",
        link: "https://polaristech.edu/news/student-satellite",
      },
      {
        title: "Quantum computing team breaks encryption record",
        date: "2023-11-15",
        link: "https://polaristech.edu/news/quantum-breakthrough",
      },
      {
        title: "Collaboration with SpaceX for space tech research",
        date: "2023-09-10",
        link: "https://polaristech.edu/news/spacex-collaboration",
      },
      {
        title: "AI model developed at Polaris detects early-stage diseases",
        date: "2023-06-25",
        link: "https://polaristech.edu/news/ai-medical-breakthrough",
      },
    ],
    gallery: [
      {
        type: "campus",
        url: "/gallery/polaris-campus1.jpg",
        caption: "Futuristic Campus Architecture",
      },
      {
        type: "lab",
        url: "/gallery/polaris-lab1.jpg",
        caption: "Quantum Computing Lab",
      },
      {
        type: "lab",
        url: "/gallery/polaris-lab2.jpg",
        caption: "AI Research Center",
      },
      {
        type: "lab",
        url: "/gallery/polaris-lab3.jpg",
        caption: "Space Simulation Chamber",
      },
      {
        type: "event",
        url: "/gallery/polaris-event1.jpg",
        caption: "Quantum Leap Festival",
      },
      {
        type: "event",
        url: "/gallery/polaris-event2.jpg",
        caption: "Satellite Launch Event",
      },
      {
        type: "lab",
        url: "/gallery/polaris-research1.jpg",
        caption: "Student Research Project",
      },
    ],
    faqs: [
      {
        question: "What makes Polaris School of Technology unique?",
        answer:
          "Polaris focuses exclusively on frontier technologies like Quantum Computing, Space Tech, and AI Research. It offers access to cutting-edge infrastructure like quantum computers and has partnerships with global research institutions.",
      },
      {
        question: "What is the Income Share Agreement (ISA) option?",
        answer:
          "Students can opt for ISA where they pay a percentage of their income after placement instead of upfront fees, making education accessible regardless of financial background.",
      },
      {
        question:
          "What are the placement opportunities in emerging tech fields?",
        answer:
          "95% placement with average package of ₹30 LPA. Unique opportunities in quantum computing, space tech, AI research with companies like SpaceX, Google DeepMind, and IBM Quantum.",
      },
      {
        question: "Does Polaris have industry recognition?",
        answer:
          "Yes, recognized by NASSCOM, member of IBM Q Network, AWS Educate partner, and collaborations with ISRO, NASA, and global tech giants.",
      },
      {
        question:
          "What is the admission process for research-oriented students?",
        answer:
          "Admission focuses on research potential through technical aptitude tests, research proposals, innovation challenges, and portfolio review of technical projects.",
      },
      {
        question: "Are there opportunities for space technology studies?",
        answer:
          "Yes, unique Space Technology department with satellite ground station, space simulation chamber, and collaborations with ISRO and international space agencies.",
      },
      {
        question: "What infrastructure is available for quantum computing?",
        answer:
          "Access to IBM Quantum computers through Q Network, quantum algorithm development labs, and partnerships with leading quantum research institutions.",
      },
      {
        question: "Does Polaris support student startups in deep tech?",
        answer:
          "Yes, dedicated deep tech incubation program, access to venture capital for frontier tech, and mentorship from industry pioneers.",
      },
      {
        question: "What is the international exposure like?",
        answer:
          "30+ international collaborations, student exchange with MIT and Stanford, global research projects, and international internships at frontier tech companies.",
      },
      {
        question: "Are there prerequisites for admission?",
        answer:
          "Strong mathematics background, programming skills, and demonstrated interest in emerging technologies through projects or research.",
      },
    ],
  },
];

// Helper functions
export const getCollegeBySlug = (slug: string): College | undefined => {
  return colleges.find((college) => college.slug === slug);
};

export const filterColleges = (filters: {
  stream?: string;
  type?: string;
  minRanking?: number;
  maxFees?: number;
  category?: string;
}): College[] => {
  return colleges.filter((college) => {
    if (filters.stream && college.stream !== filters.stream) return false;
    if (filters.type && college.type !== filters.type) return false;
    if (filters.category && college.category !== filters.category) return false;
    if (filters.minRanking && college.ranking > filters.minRanking)
      return false;
    if (filters.maxFees && college.fees.annual > filters.maxFees) return false;
    return true;
  });
};

export const getStatistics = () => {
  const totalColleges = colleges.length;

  const byStream = colleges.reduce(
    (acc, college) => {
      acc[college.stream] = (acc[college.stream] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const byType = colleges.reduce(
    (acc, college) => {
      acc[college.type] = (acc[college.type] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const avgPackage =
    colleges.reduce(
      (sum, college) => sum + college.placement.averagePackage,
      0,
    ) / totalColleges;
  const avgRating =
    colleges.reduce((sum, college) => sum + college.rating, 0) / totalColleges;
  const avgFees =
    colleges.reduce((sum, college) => sum + college.fees.annual, 0) /
    totalColleges;

  return {
    totalColleges,
    byStream,
    byType,
    avgPackage,
    avgRating,
    avgFees,
  };
};

// Export default
export default colleges;
