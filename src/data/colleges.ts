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

  // Top - 10 Government Engineering Colleges

  {
    id: "1101",
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
    id: "1102",
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
    id: "1103",
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
    id: "1104",
    slug: "iit-kanpur",
    name: "Indian Institute of Technology Kanpur",
    shortName: "IIT Kanpur",
    tagline: "तमसो मा ज्योतिर्गमय (Lead me from darkness to light)",
    overview:
      "Premier engineering institute known for its academic excellence, research innovation, and strong industry connections",
    description:
      "Indian Institute of Technology Kanpur is one of the top engineering institutions in India, established in 1959 with assistance from a consortium of nine US research universities. Known for its pioneering academic programs, cutting-edge research, and strong emphasis on innovation, IIT Kanpur has consistently been among the top-ranked engineering institutes in India.",
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
      faculty: 4.7,
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
      address: "IIT Kanpur, Kalyanpur, Kanpur, Uttar Pradesh 208016",
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
        "Barclays",
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
          averagePackage: 2400000,
          highestPackage: 41000000,
          percentage: 93,
        },
        {
          year: 2023,
          averagePackage: 2150000,
          highestPackage: 38000000,
          percentage: 92,
        },
        {
          year: 2022,
          averagePackage: 1950000,
          highestPackage: 35000000,
          percentage: 91,
        },
        {
          year: 2021,
          averagePackage: 1750000,
          highestPackage: 32000000,
          percentage: 90,
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
        "Biological Sciences",
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
        "Management Sciences",
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
        "University of Tokyo",
      ],
      teachingMode: "offline",
    },
    infrastructure: {
      library: {
        name: "Central Library",
        books: 450000,
        journals: 11000,
        digitalResources: 130000,
        seatingCapacity: 1000,
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
          "P K Kelkar Library",
        ],
        equipmentValue: 480000000,
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
          "Yoga Center",
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
      cafeteria: 12,
      medical: true,
      transportation: true,
      auditorium: 4,
    },
    admission: {
      entranceExam: ["JEE Advanced"],
      cutoff: 97.8,
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
        "Fine Arts Club",
      ],
      festivals: [
        "Antaragni (Annual Cultural Festival)",
        "Techkriti (Technical Festival)",
        "Udghosh (Sports Fest)",
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
      annualBudget: 45000000,
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
        "Ramanujan Fellowship",
      ],
    },
    alumni: {
      notableAlumni: [
        {
          name: "N. R. Narayana Murthy",
          designation: "Founder",
          company: "Infosys",
        },
        {
          name: "Manohar Parrikar",
          designation: "Former Defence Minister",
          company: "Government of India",
        },
        {
          name: "Kumar Mangalam Birla",
          designation: "Chairman",
          company: "Aditya Birla Group",
        },
        {
          name: "Arvind Kejriwal",
          designation: "Chief Minister",
          company: "Government of Delhi",
        },
        { name: "Rajat Sharma", designation: "Chairman", company: "India TV" },
        {
          name: "Vijay Shekhar Sharma",
          designation: "Founder",
          company: "Paytm",
        },
        { name: "Kunal Bahl", designation: "Co-founder", company: "Snapdeal" },
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
        "University of Sydney",
      ],
      foreignStudents: 280,
    },
    contact: {
      phone: ["+91-512-2590151", "+91-512-2590152"],
      email: [
        "deanacad@iitk.ac.in",
        "registrar@iitk.ac.in",
        "placement@iitk.ac.in",
      ],
      website: "https://www.iitk.ac.in",
      socialMedia: {
        facebook: "https://facebook.com/iitkanpur",
        twitter: "https://twitter.com/iitkanpur",
        linkedin: "https://linkedin.com/school/iit-kanpur",
        instagram: "https://instagram.com/iitkanpur",
        youtube: "https://youtube.com/iitkanpur",
      },
      admissionContact: {
        phone: "+91-512-2597631",
        email: "admission@iitk.ac.in",
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
      "Incubation Center (Startup Incubation and Innovation Centre)",
      "Career Development Center",
      "Transportation Services",
      "Recreational Centers",
    ],
    achievements: [
      "Ranked #4 among Engineering Institutes in India (NIRF 2024)",
      "QS World University Rankings: 264 (2024)",
      "Times Higher Education: 301-350 band (2024)",
      "Institute of Eminence (IoE) status",
      "Pioneer in computer science education in India",
      "Excellence in Sports (Multiple Inter-IIT trophies)",
      "Leading research output in engineering",
      "Strongest alumni network among IITs",
    ],
    newsUpdates: [
      {
        title: "IIT Kanpur develops India's first hyperloop prototype",
        date: "2024-01-20",
        link: "https://iitk.ac.in/news/hyperloop-prototype",
      },
      {
        title: "Record placement season with highest package of ₹4.1 crore",
        date: "2023-12-15",
        link: "https://iitk.ac.in/news/placement-2023",
      },
      {
        title: "IIT Kanpur partners with MIT for AI and robotics research",
        date: "2023-11-10",
        link: "https://iitk.ac.in/news/mit-partnership",
      },
      {
        title:
          "Students develop low-cost water purification system for rural areas",
        date: "2023-09-18",
        link: "https://iitk.ac.in/news/water-purification-project",
      },
    ],
    gallery: [
      {
        type: "campus",
        url: "/gallery/iitk-campus1.jpg",
        caption: "Main Building",
      },
      {
        type: "campus",
        url: "/gallery/iitk-campus2.jpg",
        caption: "Central Library",
      },
      {
        type: "campus",
        url: "/gallery/iitk-campus3.jpg",
        caption: "Convocation Hall",
      },
      {
        type: "lab",
        url: "/gallery/iitk-lab1.jpg",
        caption: "Advanced Materials Lab",
      },
      {
        type: "lab",
        url: "/gallery/iitk-lab2.jpg",
        caption: "Robotics Research Center",
      },
      {
        type: "hostel",
        url: "/gallery/iitk-hostel1.jpg",
        caption: "Student Hostels",
      },
      {
        type: "sports",
        url: "/gallery/iitk-sports1.jpg",
        caption: "Sports Complex",
      },
      {
        type: "event",
        url: "/gallery/iitk-event1.jpg",
        caption: "Antaragni Cultural Festival",
      },
      {
        type: "event",
        url: "/gallery/iitk-event2.jpg",
        caption: "Techkriti Technical Festival",
      },
    ],
    faqs: [
      {
        question: "What is the JEE Advanced cutoff for IIT Kanpur?",
        answer:
          "The cutoff varies by branch and category. For General category, Computer Science typically requires 98.5+ percentile, while other branches range from 96-98 percentile. The exact cutoff changes annually based on competition.",
      },
      {
        question: "What are the most popular branches at IIT Kanpur?",
        answer:
          "Computer Science & Engineering is the most sought-after, followed by Electrical Engineering, Mechanical Engineering, and Aerospace Engineering. The institute is also known for its strong programs in Materials Science and Biological Sciences.",
      },
      {
        question: "Does IIT Kanpur have a dedicated incubation center?",
        answer:
          "Yes, IIT Kanpur has the Startup Incubation and Innovation Centre (SIIC), one of India's oldest and most successful incubation centers. It has incubated over 200 startups with significant funding and success stories.",
      },
      {
        question: "What is special about IIT Kanpur campus?",
        answer:
          "The 1055-acre campus is one of the largest among IITs and features state-of-the-art infrastructure. The campus is known for its academic freedom, research facilities, and vibrant student life.",
      },
      {
        question:
          "What research opportunities are available for undergraduates?",
        answer:
          "IIT Kanpur offers extensive undergraduate research opportunities through the Undergraduate Research Opportunities Program (UROP), summer internships with faculty, and access to state-of-the-art research facilities.",
      },
      {
        question: "How is the hostel accommodation at IIT Kanpur?",
        answer:
          "The institute provides excellent hostel accommodation for all students. There are 11 hostels (including 2 for girls) with modern amenities. Hostels are equipped with high-speed internet and recreational facilities.",
      },
      {
        question: "What are the major festivals at IIT Kanpur?",
        answer:
          "Antaragni is the annual cultural festival (one of North India's largest), Techkriti is the technical festival (focusing on innovation and technology), and Udghosh is the sports festival.",
      },
      {
        question: "Does IIT Kanpur offer interdisciplinary programs?",
        answer:
          "Yes, IIT Kanpur offers several interdisciplinary programs including Materials Science, Biological Sciences & Bioengineering, Environmental Engineering, and Data Science.",
      },
      {
        question: "What is the student-faculty ratio?",
        answer:
          "The student-faculty ratio is approximately 9:1, ensuring personalized attention and strong mentorship opportunities for students.",
      },
      {
        question: "How strong is the alumni network?",
        answer:
          "IIT Kanpur has one of the strongest alumni networks globally, with prominent leaders in technology, business, politics, and entrepreneurship across the world including founders of Infosys, Paytm, and Snapdeal.",
      },
    ],
  },
  {
    id: "1105",
    slug: "iit-kharagpur",
    name: "Indian Institute of Technology Kharagpur",
    shortName: "IIT Kharagpur",
    tagline: "योगः कर्मसु कौशलम् (Excellence in action is Yoga)",
    overview:
      "India's first and largest IIT, a premier institution known for its rich heritage, diverse academic programs, and pioneering research",
    description:
      "Indian Institute of Technology Kharagpur is the oldest and largest IIT in India, established in 1951 by the Government of India. Founded with assistance from UNESCO, it was the first IIT to be established and has since grown into a premier institution of national importance. Located in the historic Hijli Detention Camp, the institute combines a rich history with cutting-edge research and innovation across engineering, science, technology, law, and management.",
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
      faculty: 4.7,
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
      latitude: 22.346,
      longitude: 87.232,
      address: "IIT Kharagpur, Kharagpur, West Bengal 721302",
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
        "Alumni Endowed Scholarships",
      ],
      paymentOptions: [
        "Online Payment",
        "Demand Draft",
        "Bank Transfer",
        "Scholarship Deduction",
      ],
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
        "SAP Labs",
        "VMware",
        "Salesforce",
      ],
      recruitmentSectors: [
        "Information Technology",
        "Finance & Consulting",
        "Core Engineering",
        "Research & Development",
        "Analytics",
        "Product Management",
        "Manufacturing",
        "Law",
      ],
      placementStats: [
        {
          year: 2024,
          averagePackage: 2350000,
          highestPackage: 42000000,
          percentage: 92,
        },
        {
          year: 2023,
          averagePackage: 2100000,
          highestPackage: 39000000,
          percentage: 91,
        },
        {
          year: 2022,
          averagePackage: 1900000,
          highestPackage: 36000000,
          percentage: 90,
        },
        {
          year: 2021,
          averagePackage: 1700000,
          highestPackage: 33000000,
          percentage: 89,
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
        "M.Sc in Economics",
        "LLB (Hons)",
        "LLM",
        "MS",
        "Executive Programs",
      ],
      popularCourses: [
        "B.Tech Computer Science",
        "B.Tech Electrical Engineering",
        "B.Tech Mechanical Engineering",
        "MBA",
        "LLB (Hons)",
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
        "Agriculture & Food Engineering",
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
        "Rajendra Mishra School of Engineering Entrepreneurship",
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
        "University of Illinois at Urbana-Champaign",
      ],
      teachingMode: "offline",
    },
    infrastructure: {
      library: {
        name: "Central Library",
        books: 550000,
        journals: 15000,
        digitalResources: 180000,
        seatingCapacity: 1500,
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
          "Subir Chowdhury School of Quality & Reliability",
        ],
        equipmentValue: 600000000,
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
          "Indoor Sports Complex",
        ],
        stadium: true,
        gym: true,
        swimmingPool: true,
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
          "Cycling Track",
        ],
      },
      wifi: true,
      cafeteria: 20,
      medical: true,
      transportation: true,
      auditorium: 6,
    },
    admission: {
      entranceExam: ["JEE Advanced"],
      cutoff: 97.5,
      cutoffTrend: 0.2,
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
        "Blockchain Society",
      ],
      festivals: [
        "Spring Fest (Annual Cultural Festival)",
        "Kshitij (Asia's Largest Techno-Management Festival)",
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
        "Quizzing Events",
      ],
      culturalEvents: [
        "Music Concerts",
        "Dance Performances",
        "Drama Nights",
        "Art Exhibitions",
        "Literary Events",
        "Film Screenings",
        "Comedy Shows",
        "Fashion Show",
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
        "Literacy Programs",
      ],
      annualBudget: 60000000,
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
        "National Design Award",
      ],
    },
    alumni: {
      notableAlumni: [
        {
          name: "Arjun Malhotra",
          designation: "Co-founder",
          company: "HCL Technologies",
        },
        {
          name: "Subrata Roy",
          designation: "Founder & Chairman",
          company: "Sahara India Pariwar",
        },
        {
          name: "Vinod Dham",
          designation: "Father of Pentium Processor",
          company: "Intel",
        },
        {
          name: "S. Damodaran",
          designation: "Former Chairman",
          company: "SEBI",
        },
        {
          name: "Ajit Balakrishnan",
          designation: "Founder & CEO",
          company: "Rediff.com",
        },
        {
          name: "Purnendu Chatterjee",
          designation: "Chairman",
          company: "The Chatterjee Group",
        },
        {
          name: "Rajeev Chandrasekhar",
          designation: "Union Minister",
          company: "Government of India",
        },
        {
          name: "S. Shankar Sastry",
          designation: "Dean",
          company: "UC Berkeley Engineering",
        },
        {
          name: "Gopal Krishna Pillai",
          designation: "Former Home Secretary",
          company: "Government of India",
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
      networkStrength: 97,
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
        "Georgia Institute of Technology",
      ],
      foreignStudents: 350,
    },
    contact: {
      phone: ["+91-3222-282221", "+91-3222-282222"],
      email: [
        "deanacad@iitkgp.ac.in",
        "registrar@iitkgp.ac.in",
        "placement@iitkgp.ac.in",
      ],
      website: "https://www.iitkgp.ac.in",
      socialMedia: {
        facebook: "https://facebook.com/iitkharagpur",
        twitter: "https://twitter.com/iitkgp",
        linkedin: "https://linkedin.com/school/iit-kharagpur",
        instagram: "https://instagram.com/iitkgp",
        youtube: "https://youtube.com/iitkgp",
      },
      admissionContact: {
        phone: "+91-3222-282091",
        email: "admission@iitkgp.ac.in",
      },
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
      "Community Radio Station",
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
      "Highest number of alumni in leadership positions",
    ],
    newsUpdates: [
      {
        title:
          "IIT Kharagpur celebrates 75 years of excellence in technical education",
        date: "2024-02-15",
        link: "https://iitkgp.ac.in/news/75th-anniversary",
      },
      {
        title: "Record placement season with highest package of ₹4.2 crore",
        date: "2023-12-20",
        link: "https://iitkgp.ac.in/news/placement-2023",
      },
      {
        title:
          "IIT Kharagpur launches India's first undergraduate program in Medical Science & Technology",
        date: "2023-11-25",
        link: "https://iitkgp.ac.in/news/medical-program",
      },
      {
        title:
          "Students develop indigenous technology for clean water in rural Bengal",
        date: "2023-10-10",
        link: "https://iitkgp.ac.in/news/clean-water-project",
      },
      {
        title:
          "IIT Kharagpur partners with MIT for joint research in sustainable energy",
        date: "2023-09-05",
        link: "https://iitkgp.ac.in/news/mit-partnership",
      },
    ],
    gallery: [
      {
        type: "campus",
        url: "/gallery/iitkgp-campus1.jpg",
        caption: "Main Building",
      },
      {
        type: "campus",
        url: "/gallery/iitkgp-campus2.jpg",
        caption: "Central Library",
      },
      {
        type: "campus",
        url: "/gallery/iitkgp-campus3.jpg",
        caption: "B C Roy Hall of Residence",
      },
      {
        type: "campus",
        url: "/gallery/iitkgp-campus4.jpg",
        caption: "Heritage Building",
      },
      {
        type: "lab",
        url: "/gallery/iitkgp-lab1.jpg",
        caption: "Advanced Technology Development Centre",
      },
      {
        type: "lab",
        url: "/gallery/iitkgp-lab2.jpg",
        caption: "Cryogenic Engineering Lab",
      },
      {
        type: "hostel",
        url: "/gallery/iitkgp-hostel1.jpg",
        caption: "Student Hostels",
      },
      {
        type: "sports",
        url: "/gallery/iitkgp-sports1.jpg",
        caption: "Sports Complex",
      },
      {
        type: "event",
        url: "/gallery/iitkgp-event1.jpg",
        caption: "Spring Fest",
      },
      { type: "event", url: "/gallery/iitkgp-event2.jpg", caption: "Kshitij" },
    ],
    faqs: [
      {
        question: "What makes IIT Kharagpur unique among IITs?",
        answer:
          "IIT Kharagpur is the oldest and largest IIT with the biggest campus (2100 acres). It offers the widest range of programs including unique courses in Law, Medical Science, Entrepreneurship, and Architecture. It also has Asia's largest techno-management festival, Kshitij.",
      },
      {
        question: "What is the JEE Advanced cutoff for IIT Kharagpur?",
        answer:
          "The cutoff varies by branch and category. For General category, Computer Science typically requires 98+ percentile, Electrical around 97, and other branches range from 95-97 percentile. Cutoffs are generally lower than IIT Bombay and Delhi due to location.",
      },
      {
        question: "What are the most popular branches at IIT Kharagpur?",
        answer:
          "Computer Science & Engineering is the most sought-after, followed by Electrical Engineering, Mechanical Engineering, and Aerospace Engineering. The institute is also known for its unique programs in Ocean Engineering, Metallurgical Engineering, and Agricultural & Food Engineering.",
      },
      {
        question: "Does IIT Kharagpur have a dedicated incubation center?",
        answer:
          "Yes, IIT Kharagpur has the Technology Business Incubator (TBI) and the Science & Technology Entrepreneurs' Park (STEP). These centers have incubated over 300 startups with significant funding and success stories.",
      },
      {
        question: "What is special about IIT Kharagpur campus?",
        answer:
          "The 2100-acre campus is India's largest educational campus. It has its own township with 21 hostels, schools, hospitals, banks, post office, community radio station, and even a railway station within the campus. The campus is known for its heritage buildings and deer park.",
      },
      {
        question: "What unique academic programs does IIT Kharagpur offer?",
        answer:
          "IIT Kharagpur is the only IIT offering LLB (Hons) and LLM programs through its Rajiv Gandhi School of Intellectual Property Law. It also offers unique programs in Medical Science & Technology, Entrepreneurship, Architecture & Regional Planning, and Quality & Reliability.",
      },
      {
        question: "How is the hostel accommodation at IIT Kharagpur?",
        answer:
          "The institute has 21 halls of residence (including 3 for girls) accommodating over 10,000 students. Hostels are equipped with high-speed internet, recreational facilities, gyms, and 24x7 study rooms. Each hall has its own mess and cultural identity.",
      },
      {
        question: "What are the major festivals at IIT Kharagpur?",
        answer:
          "Spring Fest is the annual cultural festival (one of India's oldest and largest), Kshitij is Asia's largest techno-management festival, and the institute also hosts Sports Fest and Illumi (social fest).",
      },
      {
        question: "Does IIT Kharagpur offer interdisciplinary programs?",
        answer:
          "Yes, IIT Kharagpur offers several interdisciplinary programs including Artificial Intelligence, Data Science, Climate Science, Cognitive Science, and Sustainable Energy Engineering. It also has flexible dual degree programs.",
      },
      {
        question: "What is the student-faculty ratio?",
        answer:
          "The student-faculty ratio is approximately 8:1, with over 720 faculty members and 12,000 students. This ensures personalized attention and strong mentorship opportunities.",
      },
      {
        question: "How strong is the alumni network?",
        answer:
          "IIT Kharagpur has one of the strongest and most diverse alumni networks globally. Notable alumni include founders of HCL Technologies, 'Father of Pentium Processor', former SEBI chairman, and leaders across industry, government, and academia.",
      },
      {
        question:
          "What research opportunities are available for undergraduates?",
        answer:
          "IIT Kharagpur offers extensive undergraduate research opportunities through the Undergraduate Research Program (URP), summer internships with faculty, and access to state-of-the-art research facilities including supercomputing infrastructure.",
      },
    ],
  },
  {
    id: "1106",
    slug: "iit-roorkee",
    name: "Indian Institute of Technology Roorkee",
    shortName: "IIT Roorkee",
    tagline:
      "श्रमं विना न किमपि साध्यम् (Nothing is achievable without hard work)",
    overview:
      "India's oldest engineering institution, a premier Institute of National Importance blending 175+ years of heritage with cutting-edge technological research and innovation.",
    description:
      "Indian Institute of Technology Roorkee stands as the oldest technical institution in Asia, established in 1847 as the Thomason College of Civil Engineering. Elevated to IIT status in 2001, it seamlessly integrates a rich colonial heritage with modern, world-class research facilities. Located in the foothills of the Himalayas, the institute is renowned for its pioneering contributions to civil engineering, hydrology, and now, advanced computing and management. It continues to be a top-5 ranked engineering institution in India, producing leaders who have shaped the nation's infrastructure and industrial policy [citation:1][citation:5][citation:6].",
    logo: "/logos/iit-roorkee.png",
    stream: "engineering",
    type: "government",
    category: "premier",
    ranking: 6,
    rating: 4.6,
    nirfRank: 5,
    googleRating: 4.5,
    reviews: {
      count: 10800,
      average: 4.6,
      academics: 4.7,
      infrastructure: 4.6,
      placement: 4.7,
      faculty: 4.6,
    },
    established: 1847,
    accreditation: "Institute of National Importance",
    naacGrade: "A++",
    affiliations: ["Institute of National Importance"],
    recognition: ["UGC", "AICTE", "MHRD"],
    location: {
      city: "Roorkee",
      state: "Uttarakhand",
      country: "India",
      pincode: "247667",
      campusSize: "365 acres",
      campusType: "suburban",
      latitude: 29.8651,
      longitude: 77.896,
      address: "IIT Roorkee, Roorkee, Haridwar District, Uttarakhand 247667",
    },
    fees: {
      annual: 200000,
      total: 800000,
      hostel: 15000,
      mess: 52500,
      otherCharges: 12750,
      scholarshipAvailable: true,
      scholarshipDetails: [
        "100% Tuition Fee Waiver (Family Income < ₹1L)",
        "2/3rd Tuition Fee Waiver (Family Income ₹1-5L)",
        "SC/ST Scholarship (Full Tuition Reimbursement)",
        "Institute Merit-cum-Means Scholarship",
        "Ministry of Education (MoE) Scholarships",
      ],
      paymentOptions: [
        "Online Payment (SBI Collect)",
        "Demand Draft",
        "Bank Transfer",
        "Semester-wise Installments",
      ],
    },
    placement: {
      averagePackage: 1791000,
      highestPackage: 24000000,
      medianPackage: 1764000,
      percentage: 92,
      totalOffers: 555,
      totalStudents: 600,
      internationalOffers: 8,
      dreamOffers: 45,
      averagePackageTrend: 11,
      topRecruiters: [
        "Amazon",
        "Google",
        "Microsoft",
        "NVIDIA",
        "Qualcomm",
        "Texas Instruments",
        "Oracle",
        "Rubrik India",
        "SAP Labs",
        "D.E. Shaw",
        "Squarepoint Capital",
        "iRageCapital",
        "Databricks",
        "McKinsey & Company",
        "Accenture",
        "VISA",
        "American Express",
        "Mastercard",
        "Deutsche Bank",
        "NatWest Group",
        "Flipkart",
        "Meesho",
        "Zomato",
        "Urban Company",
        "BEL",
        "HPCL",
        "BPCL",
        "Bajaj Auto",
        "OLA Electric",
        "Adani",
        "IndianOil",
        "GAIL",
        "Petronet LNG",
        "Coca-Cola",
        "Wipro",
        "Vedanta",
      ],
      recruitmentSectors: [
        "Information Technology",
        "Quantitative Finance",
        "Consulting",
        "Core Engineering (PSU)",
        "Semiconductors",
        "E-commerce",
        "Energy & Infrastructure",
        "Analytics",
      ],
      placementStats: [
        {
          year: 2025,
          averagePackage: 1791000,
          highestPackage: 24000000,
          percentage: 92,
        },
        {
          year: 2024,
          averagePackage: 1650000,
          highestPackage: 21000000,
          percentage: 91,
        },
        {
          year: 2023,
          averagePackage: 1550000,
          highestPackage: 20000000,
          percentage: 90,
        },
      ],
    },
    academics: {
      coursesOffered: [
        "B.Tech",
        "B.Arch",
        "Integrated M.Tech",
        "M.Tech",
        "M.Arch",
        "M.Sc",
        "M.Des",
        "MURP",
        "MBA",
        "PhD",
      ],
      popularCourses: [
        "B.Tech Computer Science & Engineering",
        "B.Tech Electrical Engineering",
        "B.Tech Mechanical Engineering",
        "B.Arch Architecture",
        "MBA (Department of Management Studies)",
      ],
      facultyCount: 550,
      studentCount: 9000,
      studentFacultyRatio: "9:1",
      specialization: [
        "Computer Science",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Civil Engineering (Flagship)",
        "Chemical Engineering",
        "Earth Sciences (Hydrology)",
        "Architecture & Planning",
        "Applied Physics & Material Sciences",
      ],
      departments: [
        "Computer Science & Engineering",
        "Electrical Engineering",
        "Mechanical & Industrial Engineering",
        "Civil Engineering",
        "Chemical Engineering",
        "Earth Sciences",
        "Architecture & Planning",
        "Physics",
        "Chemistry",
        "Mathematics",
        "Humanities & Social Sciences",
        "Management Studies (DoMS)",
        "Water Resources Development & Management",
      ],
      researchCenters: 60,
      publications: 3800,
      collaborations: [
        "University of Illinois at Urbana-Champaign",
        "ETH Zurich",
        "University of Leeds",
        "National University of Singapore",
        "British Geological Survey",
      ],
      teachingMode: "offline",
    },
    infrastructure: {
      library: {
        name: "Mahatma Gandhi Central Library",
        books: 275000,
        journals: 1000,
        digitalResources: 2000000,
        seatingCapacity: 800,
      },
      labs: {
        count: 200,
        majorLabs: [
          "Param Ganga Supercomputer Facility",
          "National Centre for Disaster Mitigation",
          "Centre of Excellence in Disaster Management",
          "Water Resources & Hydrology Labs",
          "Institute Computer Centre (ICC)",
          "Centre for Nanotechnology",
          "Centre for Transportation Systems",
        ],
        equipmentValue: 350000000,
      },
      sports: {
        facilities: [
          "Swimming Pool",
          "Sports Stadium",
          "Cricket Ground",
          "Football Field",
          "Hockey Field",
          "Tennis Courts",
          "Basketball Courts",
          "Badminton Courts",
          "Squash Courts",
          "Table Tennis Hall",
          "Indoor Gymnasium",
          "Volleyball Court",
          "Running/Jogging Track",
          "Billiards Room",
          "Boat Club",
        ],
        stadium: true,
        gym: true,
        swimmingPool: true,
      },
      hostel: {
        boys: true,
        girls: true,
        capacity: 7000,
        rooms: 3500,
        facilities: [
          "Wi-Fi Enabled Campuses",
          "Common Rooms",
          "Study Rooms",
          "Indoor Games Room",
          "Cyber Cafe",
          "Laundry Service",
          "Medical Facility",
          "Cafeteria",
        ],
      },
      wifi: true,
      cafeteria: 10,
      medical: true,
      transportation: true,
      auditorium: 4,
    },
    admission: {
      entranceExam: ["JEE Advanced", "GATE", "CEED", "JAM", "CAT"],
      cutoff: 97.5,
      cutoffTrend: 0.2,
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
        applicationStart: "January 1, 2026",
        applicationEnd: "April 30, 2026",
        examDate: "June 2026",
        resultDate: "July 2026",
        counsellingStart: "July 15, 2026",
        counsellingEnd: "August 30, 2026",
      },
      documentsRequired: [
        "10th Marksheet",
        "12th Marksheet",
        "JEE Advanced Scorecard",
        "Category Certificate",
        "Income Certificate (Scholarship)",
        "Domicile Certificate",
        "Medical Fitness Certificate",
      ],
    },
    campusLife: {
      clubs: [
        "Programming Club",
        "Robotics Club",
        "Entrepreneurship Cell (E-Cell)",
        "Himalayan Explorers Club",
        "Boat Club",
        "Hobbies Club",
        "Music Club",
        "Dance Club",
        "Dramatics Society",
        "Photography Club",
        "Debating Society",
        "Literary Society",
      ],
      festivals: [
        "Thomso (Annual Cultural Festival)",
        "Cognizance (Technical Festival)",
        "Zeitgeist (Department of Management Studies)",
      ],
      technicalEvents: [
        "Hackathons",
        "Coding Competitions",
        "Robotics Wars",
        "Research Conclaves",
        "Industry Interaction Summits",
      ],
      culturalEvents: [
        "Music Nights",
        "Dance Performances",
        "Drama Competitions",
        "Art Exhibitions",
        "Quizzes",
      ],
      socialInitiatives: [
        "National Service Scheme (NSS)",
        "National Cadet Corps (NCC)",
        "Blood Donation Camps",
        "Rural Development Projects",
      ],
      annualBudget: 40000000,
    },
    faculty: {
      total: 550,
      phdHolders: 530,
      professor: 200,
      associateProfessor: 210,
      assistantProfessor: 140,
      industryExperience: 7,
      internationalFaculty: 40,
      awards: [
        "Shanti Swarup Bhatnagar Prize (8 recipients)",
        "J.C. Bose Fellowship",
        "Ramanujan Fellowship",
        "Swarnajayanti Fellowship",
      ],
    },
    alumni: {
      notableAlumni: [
        {
          name: "Kamal Kishore",
          designation: "Assistant Secretary-General",
          company: "United Nations (UNDRR)",
        },
        {
          name: "Pankaj Agarwal",
          designation: "Secretary",
          company: "Ministry of Power, Govt. of India",
        },
        {
          name: "Sushil Kumar",
          designation: "Managing Director",
          company: "U.P. Metro Rail Corporation",
        },
        {
          name: "Jai Prakash Srivastava",
          designation: "Director (Engineering, R&D)",
          company: "BHEL",
        },
        {
          name: "Karthik Reddy",
          designation: "Co-founder & Managing Partner",
          company: "Blume Ventures",
        },
        {
          name: "Rishi Das",
          designation: "Founder",
          company: "CareerNet, IndiQube",
        },
        { name: "Amit Garg", designation: "Founder & CEO", company: "HiLabs" },
        {
          name: "Late Ar. Pradeep Sachdeva",
          designation: "Principal Architect",
          company: "PSDA",
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
        "Intel",
        "Qualcomm",
        "Samsung",
      ],
      networkStrength: 93,
    },
    international: {
      collaborations: 80,
      studentExchange: true,
      facultyExchange: true,
      partnerUniversities: [
        "ETH Zurich",
        "University of Illinois",
        "University of Leeds",
        "National University of Singapore",
      ],
      foreignStudents: 150,
    },
    contact: {
      phone: ["+91-1332-285311", "+91-1332-285309"],
      email: [
        "registrar@iitr.ac.in",
        "placement@iitr.ac.in",
        "admission@iitr.ac.in",
      ],
      website: "https://www.iitr.ac.in",
      socialMedia: {
        facebook: "https://facebook.com/iitroorkee",
        twitter: "https://twitter.com/iitroorkee",
        linkedin: "https://linkedin.com/school/iit-roorkee",
        instagram: "https://instagram.com/iitroorkee",
        youtube: "https://youtube.com/iitroorkee",
      },
      admissionContact: {
        phone: "+91-1332-284520",
        email: "admission@iitr.ac.in",
      },
    },
    facilities: [
      "24x7 Mahatma Gandhi Central Library",
      "Param Ganga Supercomputer",
      "Wi-Fi Campus",
      "Sports Stadium",
      "Swimming Pool",
      "Boat Club",
      "Himalayan Explorers Club",
      "Wellness Centre",
      "SBI & PNB Bank with ATM",
      "Post Office",
      "Railway Reservation Centre",
      "Guest House",
    ],
    achievements: [
      "India's Oldest Engineering College (est. 1847)",
      "Institution of National Importance",
      "Ranked #5 in Engineering (NIRF 2024) [citation:6]",
      "175+ Years of Academic Excellence",
      "Produces highest number of Civil Services & PSU leaders",
      "Strongest Alumni Network in Government & Infrastructure",
    ],
    newsUpdates: [
      {
        title:
          "IIT Roorkee records 555 offers in first two days of Placement 2025-26 season",
        date: "2025-12-01",
        link: "https://www.hindustantimes.com/education/employment-news",
      },
      {
        title:
          "IIT Roorkee Honors Distinguished Alumni 2024 & 2025 at Foundation Day",
        date: "2025-11-25",
        link: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2194141",
      },
      {
        title:
          "Kamal Kishore (B.Arch) appointed Assistant Secretary-General of the United Nations",
        date: "2024-03-27",
        link: "https://iitr.ac.in",
      },
    ],
    gallery: [
      {
        type: "campus",
        url: "/gallery/iitr-campus1.jpg",
        caption: "Main Building (Renaissance Style Architecture)",
      },
      {
        type: "campus",
        url: "/gallery/iitr-campus2.jpg",
        caption: "Mahatma Gandhi Central Library",
      },
      {
        type: "campus",
        url: "/gallery/iitr-campus3.jpg",
        caption: "Institute Computer Centre",
      },
      {
        type: "lab",
        url: "/gallery/iitr-lab1.jpg",
        caption: "Param Ganga Supercomputer",
      },
      {
        type: "sports",
        url: "/gallery/iitr-sports1.jpg",
        caption: "Sports Stadium & Swimming Pool",
      },
      {
        type: "event",
        url: "/gallery/iitr-event1.jpg",
        caption: "Thomso Cultural Festival",
      },
      {
        type: "event",
        url: "/gallery/iitr-event2.jpg",
        caption: "Cognizance Technical Festival",
      },
    ],
    faqs: [
      {
        question: "What is IIT Roorkee famous for?",
        answer:
          "IIT Roorkee is India's oldest technical institution (est. 1847). It is globally renowned for Civil Engineering, Hydrology, Water Resources, and Earthquake Engineering. It also has a very strong legacy in Architecture (B.Arch) and is the alma mater of numerous Secretaries to the Government of India and PSU Chairmen [citation:5][citation:10].",
      },
      {
        question: "What is the JEE Advanced cutoff for IIT Roorkee?",
        answer:
          "For General category, the cutoff for CSE is typically around 98+ percentile. For other branches, closing ranks range from 97-99 percentile. Being an older IIT, it is slightly more competitive than NITs but offers excellent ROI due to lower fees [citation:6][citation:8].",
      },
      {
        question: "Is IIT Roorkee good for MBA?",
        answer:
          "Yes. The DoMS (Department of Management Studies) has shown exceptional growth. In 2025, the average CTC was ₹17.91 LPA with the highest at ₹24 LPA. Marketing specialization paid the highest at ₹21.33 LPA. Recruiters include Accenture, Deloitte, Bank of America, and Coca-Cola [citation:7].",
      },
      {
        question: "What are the hostel fees and facilities?",
        answer:
          "UG hostel fees are approximately ₹7,500 per semester. Mess charges are around ₹20,250 - ₹26,250 per semester. There are 10 Boys Hostels and 3 Girls Hostels with Wi-Fi, common rooms, and cyber cafes [citation:4][citation:8].",
      },
      {
        question: "Which IIT is better: Roorkee or Bombay/Delhi?",
        answer:
          "For high-finance/consulting roles and city life, IIT Bombay/Delhi have an edge. However, IIT Roorkee offers a more affordable education, a distraction-free campus, and is exceptionally strong for core engineering, PSU jobs, and research in Earth Sciences. It offers a better ROI for budget-conscious students [citation:6].",
      },
      {
        question: "Who are some famous alumni from IIT Roorkee?",
        answer:
          "Distinguished alumni include Kamal Kishore (UN Assistant Secretary-General), Pankaj Agarwal (Secretary, Ministry of Power), Sushil Kumar (MD, U.P. Metro), and Karthik Reddy (Blume Ventures) [citation:5][citation:10].",
      },
    ],
  },
  {
    id: "1107",
    slug: "iit-guwahati",
    name: "Indian Institute of Technology Guwahati",
    shortName: "IIT Guwahati",
    tagline: "ज्ञानार्थं बुद्धि: (Wisdom for Knowledge)",
    overview:
      "India's premier institute in the Northeast, renowned for its scenic campus, rapid academic rise, and exceptional research output",
    description:
      "Indian Institute of Technology Guwahati, established in 1994, is the sixth IIT to be established in India. Despite being one of the younger IITs, it has rapidly ascended to become a top-tier institution, consistently ranked among the top 10 engineering institutes in the country. Located on the banks of the Brahmaputra River, its 700+ acre campus is widely regarded as one of the most beautiful in India. Known for its strong research culture, innovative curriculum, and vibrant student life, IIT Guwahati has produced successful entrepreneurs and global tech leaders in just three decades of existence [citation:3][citation:5][citation:9].",
    logo: "/logos/iit-guwahati.png",
    stream: "engineering",
    type: "government",
    category: "premier",
    ranking: 7,
    rating: 4.5,
    nirfRank: 7,
    googleRating: 4.4,
    reviews: {
      count: 8900,
      average: 4.5,
      academics: 4.6,
      infrastructure: 4.8,
      placement: 4.5,
      faculty: 4.5,
    },
    established: 1994,
    accreditation: "Institute of National Importance",
    naacGrade: "A++",
    affiliations: ["Institute of National Importance"],
    recognition: ["UGC", "AICTE", "MHRD"],
    location: {
      city: "Guwahati",
      state: "Assam",
      country: "India",
      pincode: "781039",
      campusSize: "700+ acres",
      campusType: "suburban",
      latitude: 26.1938,
      longitude: 91.6913,
      address: "IIT Guwahati, Amingaon, North Guwahati, Assam 781039",
    },
    fees: {
      annual: 260000,
      total: 1040000,
      hostel: 119000,
      mess: 52500,
      otherCharges: 59700,
      scholarshipAvailable: true,
      scholarshipDetails: [
        "Institute Merit-cum-Means Scholarship",
        "SC/ST Scholarship (Full Tuition Reimbursement)",
        "Ministry of Education (MoE) Scholarships",
        "NE-SIHM Scholarship for Northeast Students",
        "Private Trust Scholarships",
      ],
      paymentOptions: [
        "Online Payment",
        "NEFT/RTGS",
        "Demand Draft",
        "Credit/Debit Card",
      ],
    },
    placement: {
      averagePackage: 2000000,
      highestPackage: 13100000,
      medianPackage: 1800000,
      percentage: 90,
      totalOffers: 1200,
      totalStudents: 1300,
      internationalOffers: 45,
      dreamOffers: 120,
      averagePackageTrend: 12,
      topRecruiters: [
        "Amazon",
        "Google",
        "Microsoft",
        "Adobe",
        "Cisco",
        "Deloitte",
        "Goldman Sachs",
        "JP Morgan",
        "Flipkart",
        "Directi",
        "Texas Instruments",
        "Analog Devices",
        "Air Bus",
        "Cummins India",
        "BEL",
        "DRDO",
        "Cognizant",
        "Dell",
        "Ericsson",
        "EXL Services",
        "Samsung",
        "Qualcomm",
        "Bank of India",
        "Capital IQ",
      ],
      recruitmentSectors: [
        "Information Technology",
        "Core Engineering",
        "Consulting",
        "Finance & Banking",
        "Research & Development",
        "E-commerce",
        "Semiconductors",
      ],
      placementStats: [
        {
          year: 2023,
          averagePackage: 2000000,
          highestPackage: 13100000,
          percentage: 90,
        },
        {
          year: 2022,
          averagePackage: 1800000,
          highestPackage: 12000000,
          percentage: 89,
        },
        {
          year: 2021,
          averagePackage: 1650000,
          highestPackage: 11000000,
          percentage: 88,
        },
      ],
    },
    academics: {
      coursesOffered: [
        "B.Tech",
        "B.Des",
        "M.Tech",
        "M.Des",
        "M.Sc",
        "MBA",
        "MA",
        "PhD",
      ],
      popularCourses: [
        "B.Tech Computer Science & Engineering",
        "B.Tech Electronics & Communication Engineering",
        "B.Tech Mechanical Engineering",
        "B.Des (Design)",
        "MBA (Department of Management Studies)",
      ],
      facultyCount: 450,
      studentCount: 6500,
      studentFacultyRatio: "9:1",
      specialization: [
        "Computer Science",
        "Electronics & Communication",
        "Mechanical Engineering",
        "Design (Premier Program)",
        "Data Science & AI",
        "Aerodynamics",
        "Petroleum Science",
        "Water Resources",
      ],
      departments: [
        "Computer Science & Engineering",
        "Electronics & Electrical Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
        "Chemical Engineering",
        "Biosciences & Bioengineering",
        "Design",
        "Physics",
        "Chemistry",
        "Mathematics",
        "Humanities & Social Sciences",
        "Management Studies",
      ],
      researchCenters: 45,
      publications: 3200,
      collaborations: [
        "Clemson University",
        "National University of Singapore",
        "University of Leeds",
        "Technical University of Munich",
      ],
      teachingMode: "offline",
    },
    infrastructure: {
      library: {
        name: "Lakshminath Bezbaroa Central Library",
        books: 154564,
        journals: 2291,
        digitalResources: 500000,
        seatingCapacity: 800,
      },
      labs: {
        count: 180,
        majorLabs: [
          "Centre for Nanotechnology",
          "Centre for the Environment",
          "Centre for Linguistic Science & Technology",
          "Speech Signal Processing Lab",
          "Electromedical & Speech Technology Lab",
          "VLSI Design Lab",
          "5G NR Wireless Access Lab",
          "Language Learning Lab",
        ],
        equipmentValue: 300000000,
      },
      sports: {
        facilities: [
          "8-lane 50-metre Olympic-size Swimming Pool",
          "Indoor Sports Stadium",
          "Football Ground",
          "Cricket Ground",
          "Hockey Field",
          "Tennis Courts",
          "Basketball Courts",
          "Badminton Courts",
          "Squash Courts",
          "Table Tennis Hall",
          "Gymnasium",
          "Volleyball Court",
        ],
        stadium: true,
        gym: true,
        swimmingPool: true,
      },
      hostel: {
        boys: true,
        girls: true,
        capacity: 3000,
        rooms: 1500,
        facilities: [
          "Single-seater accommodation",
          "High-speed WiFi (Gigabit Ethernet)",
          "Institute LAN connectivity in each room",
          "Multipurpose Common Room",
          "TV Room",
          "Table Tennis Room",
          "Gym",
          "Volleyball Court",
          "Badminton Court",
          "Reading Room with Magazines & Newspapers",
          "Mess with round-the-clock canteen",
          "Washing Machines on each floor",
          "Water Coolers",
        ],
      },
      wifi: true,
      cafeteria: 8,
      medical: true,
      transportation: true,
      auditorium: 3,
    },
    admission: {
      entranceExam: ["JEE Advanced", "GATE", "CEED", "JAM", "CAT"],
      cutoff: 92.5,
      cutoffTrend: 0.5,
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
        applicationStart: "January 1, 2026",
        applicationEnd: "April 30, 2026",
        examDate: "June 2026",
        resultDate: "July 2026",
        counsellingStart: "July 15, 2026",
        counsellingEnd: "August 30, 2026",
      },
      documentsRequired: [
        "10th Marksheet",
        "12th Marksheet",
        "JEE Advanced Scorecard",
        "Category Certificate",
        "Income Certificate",
        "Domicile Certificate",
        "Medical Fitness Certificate",
      ],
    },
    campusLife: {
      clubs: [
        "Programming Club",
        "Robotics Club",
        "Entrepreneurship Cell (E-Cell)",
        "Music Club",
        "Dance Club",
        "Dramatics Society",
        "Photography Club",
        "Debating Society",
        "Literary Society",
        "Astronomy Club",
        "Environmental Club",
        "Quiz Club",
        "Fine Arts Club",
      ],
      festivals: [
        "Alcheringa (Annual Cultural Festival)",
        "Techniche (Annual Technical Festival)",
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
        "Music Nights",
        "Dance Performances",
        "Drama Nights",
        "Art Exhibitions",
        "Literary Events",
        "Film Screenings",
      ],
      socialInitiatives: [
        "National Service Scheme (NSS)",
        "National Cadet Corps (NCC)",
        "Blood Donation Camps",
        "Environmental Awareness Drives",
        "Rural Development Projects",
        "Tech for Northeast Initiative",
      ],
      annualBudget: 35000000,
    },
    faculty: {
      total: 450,
      phdHolders: 430,
      professor: 150,
      associateProfessor: 180,
      assistantProfessor: 120,
      industryExperience: 6,
      internationalFaculty: 35,
      awards: [
        "Shanti Swarup Bhatnagar Prize (3 recipients)",
        "J.C. Bose Fellowship",
        "Ramanujan Fellowship",
        "Swarnajayanti Fellowship",
      ],
    },
    alumni: {
      notableAlumni: [
        {
          name: "Archit Gupta",
          designation: "Founder & CEO",
          company: "ClearTax",
        },
        {
          name: "Jaspreet Singh",
          designation: "Founder & CEO",
          company: "Druva Inc.",
        },
        {
          name: "Ankit Nagori",
          designation: "Co-founder",
          company: "Cure.fit",
        },
        {
          name: "Richa Singh",
          designation: "Co-founder & CEO",
          company: "YourDOST",
        },
        {
          name: "Saurabh Nangia",
          designation: "Co-founder & CEO",
          company: "Mesh.ai",
        },
        {
          name: "Aditya Singh",
          designation: "Quantitative Trader",
          company: "Citadel LLC",
        },
        {
          name: "Prabhat Gupta",
          designation: "Co-founder",
          company: "TravelTriangle",
        },
        {
          name: "Prof. Prateek Mittal",
          designation: "Professor",
          company: "Princeton University",
        },
        {
          name: "Dr. Siva Teja Kakileti",
          designation: "Director",
          company: "Niramai Health Analytix",
        },
        {
          name: "Aayush Thakur",
          designation: "CEO & Co-founder",
          company: "FR8relay",
        },
        {
          name: "Atanu Guchhait",
          designation: "5G NR Wireless Access Developer",
          company: "Samsung",
        },
        {
          name: "Ritwik Tewari",
          designation: "Engineering Manager",
          company: "Facebook Inc.",
        },
      ],
      placementCompanies: [
        "Google",
        "Microsoft",
        "Amazon",
        "Goldman Sachs",
        "McKinsey",
        "BCG",
        "Citadel",
        "Facebook",
        "Samsung",
        "Qualcomm",
        "Texas Instruments",
      ],
      networkStrength: 89,
    },
    international: {
      collaborations: 55,
      studentExchange: true,
      facultyExchange: true,
      partnerUniversities: [
        "Clemson University",
        "National University of Singapore",
        "University of Leeds",
        "Technical University of Munich",
      ],
      foreignStudents: 120,
    },
    contact: {
      phone: ["+91-361-2583000", "+91-361-2690761"],
      email: [
        "acadoff@iitg.ernet.in",
        "registrar@iitg.ac.in",
        "placement@iitg.ac.in",
      ],
      website: "https://www.iitg.ac.in",
      socialMedia: {
        facebook: "https://facebook.com/iitguwahati",
        twitter: "https://twitter.com/iitguwahati",
        linkedin: "https://linkedin.com/school/iit-guwahati",
        instagram: "https://instagram.com/iitguwahati",
        youtube: "https://youtube.com/iitguwahati",
      },
      admissionContact: {
        phone: "+91-361-2583000",
        email: "admission@iitg.ac.in",
      },
    },
    facilities: [
      "24x7 Lakshminath Bezbaroa Central Library",
      "High-speed WiFi Campus (Gigabit Ethernet)",
      "8-lane 50-metre Olympic-size Swimming Pool",
      "Indoor Sports Stadium",
      "Well-equipped Gymnasium",
      "30-bed In-campus Hospital",
      "Commercial Complex",
      "Guest House with 72 rooms",
      "Conference Centre with 4 halls",
      "Auditorium with 1500 seating capacity",
      "250-seat Lecture Halls",
      "Solar Power Plant",
      "Rainwater Harvesting System",
      "Platinum-rated Green Buildings",
    ],
    achievements: [
      "Ranked #7 among Engineering Institutes in India (NIRF 2024) [citation:1][citation:6]",
      "Ranked #9 in 'Overall' Category (NIRF 2024) [citation:6]",
      "Ranked #10 in 'Research' Category (NIRF 2024) [citation:6]",
      "QS World University Rankings 2026: 334th globally [citation:6]",
      "QS Rankings 2026: 42nd globally in Research Citations per Faculty [citation:6]",
      "India Today Engineering Ranking 2025: #5 out of 269 in India [citation:2]",
      "The Week Engineering Ranking 2025: #6 out of 286 in India [citation:2]",
      "Outlook Engineering Ranking 2025: #7 out of 25 in India [citation:2]",
      "First IIT to establish Mehta School of Data Science and Artificial Intelligence [citation:6]",
      "Most beautiful campus among all IITs [citation:3][citation:9]",
      "17+ MoUs signed in research, education, and innovation [citation:6]",
    ],
    newsUpdates: [
      {
        title:
          "IIT Guwahati celebrates 27th Convocation; 2093 graduates receive degrees",
        date: "2025-07-13",
        link: "https://www.hindustantimes.com/education/news/iit-guwahati-celebrates-27th-convocation-2093-graduates-receive-degrees-101752480226857.html",
      },
      {
        title:
          "First B.Tech batch graduates from Mehta School of Data Science and Artificial Intelligence",
        date: "2025-07-12",
        link: "https://m.economictimes.com/news/india/iit-guwahati-celebrates-27th-convocation-with-2093-graduating-students",
      },
      {
        title:
          "IIT Guwahati launches new hybrid M.Tech program in Flood and Water Resources Management",
        date: "2025-07-12",
        link: "https://m.economictimes.com/news/india/iit-guwahati-celebrates-27th-convocation-with-2093-graduating-students",
      },
      {
        title:
          "Prof. Prateek Mittal (2006 batch) receives Grace Murray Hopper Award 2024",
        date: "2024-06-01",
        link: "https://iitg.ac.in/aer/index_list_awardees.php",
      },
    ],
    gallery: [
      {
        type: "campus",
        url: "/gallery/iitg-campus1.jpg",
        caption: "Scenic Campus on Brahmaputra Banks",
      },
      {
        type: "campus",
        url: "/gallery/iitg-campus2.jpg",
        caption: "Main Academic Complex",
      },
      {
        type: "campus",
        url: "/gallery/iitg-campus3.jpg",
        caption: "Lakshminath Bezbaroa Central Library",
      },
      {
        type: "lab",
        url: "/gallery/iitg-lab1.jpg",
        caption: "Centre for Nanotechnology",
      },
      {
        type: "sports",
        url: "/gallery/iitg-sports1.jpg",
        caption: "8-lane Olympic-size Swimming Pool",
      },
      {
        type: "hostel",
        url: "/gallery/iitg-hostel1.jpg",
        caption: "Student Hostels",
      },
      {
        type: "event",
        url: "/gallery/iitg-event1.jpg",
        caption: "Alcheringa Cultural Festival",
      },
      {
        type: "event",
        url: "/gallery/iitg-event2.jpg",
        caption: "Techniche Technical Festival",
      },
    ],
    faqs: [
      {
        question: "How is IIT Guwahati ranked among IITs?",
        answer:
          "IIT Guwahati is consistently ranked among the top 10 engineering institutes in India. In NIRF 2024, it secured 7th position in Engineering, 9th position in Overall, and 10th position in Research categories. Globally, it is ranked 334th in QS World University Rankings 2026 and an impressive 42nd globally in Research Citations per Faculty [citation:1][citation:6].",
      },
      {
        question: "What is the campus of IIT Guwahati like?",
        answer:
          "IIT Guwahati is widely regarded as the most beautiful IIT campus in India. Spread over 700+ acres on the banks of the Brahmaputra River, it features lush greenery, lakes, and world-class infrastructure. The campus has Platinum-rated green buildings, a solar power plant, and rainwater harvesting systems. It offers single-seater hostel accommodation, an 8-lane Olympic-size swimming pool, indoor sports stadium, and a 30-bed hospital [citation:4][citation:9].",
      },
      {
        question: "What is unique about IIT Guwahati's academic programs?",
        answer:
          "IIT Guwahati is the first IIT to establish the Mehta School of Data Science and Artificial Intelligence, whose inaugural B.Tech batch graduated in 2025. It has strong programs in Design (B.Des), Electronics & Communication Engineering, and recently launched a hybrid M.Tech program in Flood and Water Resources Management. The institute has signed over 17 MoUs for research and education collaborations [citation:6].",
      },
      {
        question: "What is the placement scenario at IIT Guwahati?",
        answer:
          "IIT Guwahati has excellent placement records. In 2023, the highest package was ₹1.31 CPA (crore per annum) and the average package was around ₹20 LPA. Top recruiters include Amazon, Google, Microsoft, Adobe, Goldman Sachs, Texas Instruments, and Analog Devices. M.Tech Aerodynamics students received an average package of ₹11.98 LPA in 2025 [citation:2][citation:3][citation:8].",
      },
      {
        question: "Who are some notable alumni of IIT Guwahati?",
        answer:
          "Despite being established only in 1994, IIT Guwahati has produced remarkable alumni including Archit Gupta (Founder, ClearTax), Jaspreet Singh (Founder, Druva Inc.), Ankit Nagori (Co-founder, Cure.fit), Richa Singh (Co-founder, YourDOST), Prof. Prateek Mittal (Princeton University, Grace Murray Hopper Awardee), Aditya Singh (Quantitative Trader, Citadel LLC), and Dr. Siva Teja Kakileti (Director, Niramai Health Analytix) [citation:5][citation:10].",
      },
      {
        question: "What is the JEE Advanced cutoff for IIT Guwahati?",
        answer:
          "The opening rank for IIT Guwahati admission typically ranges from 500-650, while the closing rank ranges from 9000-9500 for general category students. For Computer Science, the cutoff is significantly higher. Students need a valid score in JEE Advanced along with 75% marks in XII (65% for reserved categories) [citation:3].",
      },
      {
        question: "What are the hostel facilities at IIT Guwahati?",
        answer:
          "IIT Guwahati has 12 hostels (10 for boys, 2 for girls) accommodating over 3,000 students with single-seater rooms. Each hostel is equipped with high-speed WiFi, LAN connectivity, multipurpose common rooms, TV rooms, table tennis, gym, volleyball/badminton courts, reading rooms, and mess facilities with round-the-clock canteen. Each floor has washing machines and water coolers [citation:4][citation:9].",
      },
      {
        question: "What research facilities does IIT Guwahati offer?",
        answer:
          "IIT Guwahati has state-of-the-art research facilities including the Centre for Nanotechnology, Centre for the Environment, Centre for Linguistic Science & Technology, Speech Signal Processing Lab, VLSI Design Lab, and 5G NR Wireless Access Lab. It ranks 10th in India for research output and 42nd globally for Research Citations per Faculty in QS Rankings 2026 [citation:4][citation:6][citation:9].",
      },
      {
        question: "Is IIT Guwahati good for MBA?",
        answer:
          "Yes, the Department of Management Studies at IIT Guwahati offers a 2-year MBA program with total fees of approximately ₹9.69 Lakhs. Admission is through CAT score, followed by GD-PI. The program has strong industry connections with recruiters like Deloitte, Cognizant, Amazon, and Adobe [citation:8].",
      },
      {
        question: "What is the biggest drawback of IIT Guwahati?",
        answer:
          "According to student reviews, the primary drawback of IIT Guwahati is its location. Being in Northeast India, it is relatively remote compared to other IITs, which can affect travel connectivity and accessibility for students from other parts of the country. However, students consistently rate the campus beauty, academic quality, and placement opportunities as outstanding, making it a top choice despite this factor [citation:3][citation:8].",
      },
    ],
  },
  {
    id: "1108",
    slug: "iit-hyderabad",
    name: "Indian Institute of Technology Hyderabad",
    shortName: "IITH",
    tagline: "तमसो मा ज्योतिर्गमय (Lead me from darkness to light)",
    overview:
      "India's youngest top-tier IIT, renowned for record-breaking placement packages, interdisciplinary research, and a modern 1000-acre campus.",
    description:
      "Indian Institute of Technology Hyderabad (IITH) was established in 2008 as part of the eighth IIT. In less than two decades, it has rocketed to the top echelons of engineering education, consistently ranking in the top 10 of the NIRF rankings. Known for its 'Open House' culture, flexible curriculum, and strong industry linkages, IITH made global headlines in 2026 when a student secured a ₹2.5 crore international package, the highest ever in its history. The institute is currently transitioning to its permanent 1000-acre campus, featuring sustainable architecture and cutting-edge research facilities [citation:2][citation:7][citation:4].",
    logo: "/logos/iit-hyderabad.png",
    stream: "engineering",
    type: "government",
    category: "premier",
    ranking: 8,
    rating: 4.5,
    nirfRank: 7,
    googleRating: 4.4,
    reviews: {
      count: 5200,
      average: 4.5,
      academics: 4.6,
      infrastructure: 4.5,
      placement: 4.8,
      faculty: 4.5,
    },
    established: 2008,
    accreditation: "Institute of National Importance",
    naacGrade: "A++",
    affiliations: ["Institute of National Importance"],
    recognition: ["UGC", "AICTE", "Ministry of Education"],
    location: {
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
      pincode: "502285",
      campusSize: "1000 acres",
      campusType: "suburban",
      latitude: 17.5935,
      longitude: 78.1235,
      address: "IITH Main Road, Sangareddy, Kandi, Hyderabad, Telangana 502285",
    },
    fees: {
      annual: 235750,
      total: 943000,
      hostel: 60000,
      mess: 52500,
      otherCharges: 34250,
      scholarshipAvailable: true,
      scholarshipDetails: [
        "100% Tuition Fee Waiver (Family Income < ₹1L)",
        "2/3rd Tuition Fee Waiver (Family Income ₹1-5L)",
        "SC/ST: Full tuition reimbursement + pocket money",
        "MCM Scholarship for deserving students",
        "GATE: Monthly stipend of ₹12,400 for M.Tech",
      ],
      paymentOptions: [
        "Online Payment (SBI Collect)",
        "NEFT/RTGS",
        "Demand Draft",
        "Semester Installments",
      ],
    },
    placement: {
      averagePackage: 3020000,
      highestPackage: 25000000,
      medianPackage: 2100000,
      percentage: 62.42,
      totalOffers: 304,
      totalStudents: 487,
      internationalOffers: 24,
      dreamOffers: 7,
      averagePackageTrend: 75,
      topRecruiters: [
        "Optiver (Netherlands)",
        "Google",
        "Amazon",
        "Microsoft",
        "Goldman Sachs",
        "Texas Instruments",
        "Intel",
        "NVIDIA",
        "Qualcomm",
        "Uber",
        "Airbus",
        "Siemens",
        "Tata Elxsi",
        "JPMorgan Chase",
        "Deutsche Bank",
      ],
      recruitmentSectors: [
        "Quantitative Finance",
        "FAANG",
        "Core Engineering",
        "Consulting",
        "Product Management",
        "Semiconductors",
        "Robotics",
      ],
      placementStats: [
        {
          year: 2026,
          averagePackage: 3020000,
          highestPackage: 25000000,
          percentage: 62.4,
        },
        {
          year: 2025,
          averagePackage: 2080000,
          highestPackage: 6613000,
          percentage: 74.0,
        },
        {
          year: 2024,
          averagePackage: 2000000,
          highestPackage: 9000000,
          percentage: 72.0,
        },
        {
          year: 2023,
          averagePackage: 1726000,
          highestPackage: 4098000,
          percentage: 70.0,
        },
      ],
    },
    academics: {
      coursesOffered: [
        "B.Tech",
        "M.Tech",
        "PhD",
        "MS by Research",
        "M.Sc",
        "MA",
        "MBA",
        "Executive M.Tech",
      ],
      popularCourses: [
        "B.Tech Computer Science & Engineering",
        "B.Tech Artificial Intelligence (Flagship)",
        "B.Tech Mathematics & Computing",
        "B.Tech Engineering Science",
        "M.Tech Communication and Signal Processing",
      ],
      facultyCount: 550,
      studentCount: 4600,
      studentFacultyRatio: "14:1",
      specialization: [
        "Artificial Intelligence",
        "Computer Science",
        "Mathematics & Computing",
        "Biomedical Engineering",
        "IC Design and Technology",
        "Climate Science",
        "Robotics",
        "Computational Engineering",
      ],
      departments: [
        "Computer Science & Engineering",
        "Artificial Intelligence",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
        "Chemical Engineering",
        "Biotechnology",
        "Biomedical Engineering",
        "Materials Science & Metallurgical Engineering",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Liberal Arts",
        "Design",
      ],
      researchCenters: 45,
      publications: 2800,
      collaborations: [
        "University of British Columbia",
        "Technical University of Munich",
        "University of Melbourne",
        "Nanyang Technological University",
        "KAIST",
      ],
      teachingMode: "offline",
    },
    infrastructure: {
      library: {
        name: "IITH Central Library",
        books: 20000,
        journals: 10000,
        digitalResources: 500000,
        seatingCapacity: 600,
      },
      labs: {
        count: 60,
        majorLabs: [
          "Advanced Computing Lab",
          "IC Design Lab",
          "Robotics & Automation Lab",
          "Biomedical Instrumentation Lab",
          "High Performance Computing Facility",
          "Smart Materials Lab",
          "Water Purification Research Center",
        ],
        equipmentValue: 250000000,
      },
      sports: {
        facilities: [
          "Swimming Pool",
          "Football Ground",
          "Cricket Ground",
          "Tennis Court",
          "Basketball Court",
          "Badminton Courts",
          "Volleyball Court",
          "Table Tennis Room",
          "Gymnasium",
        ],
        stadium: false,
        gym: true,
        swimmingPool: true,
      },
      hostel: {
        boys: true,
        girls: true,
        capacity: 3000,
        rooms: 1500,
        facilities: [
          "Single occupancy rooms",
          "High-speed WiFi (1 Gbps)",
          "Radiant cooling technology",
          "Common rooms with TV",
          "Indoor games",
          "Laundry service",
          "24/7 medical assistance",
          "CCTV security",
        ],
      },
      wifi: true,
      cafeteria: 4,
      medical: true,
      transportation: true,
      auditorium: 2,
    },
    admission: {
      entranceExam: ["JEE Advanced", "GATE", "JAM", "CAT", "COAP"],
      cutoff: 667,
      cutoffTrend: -5,
      applicationMode: "Online",
      applicationFee: 2500,
      selectionProcess: [
        "JEE Advanced Score",
        "JoSAA Counseling",
        "Document Verification",
        "COAP for M.Tech",
      ],
      eligibility: {
        minPercentage: 75,
        subjectsRequired: ["Physics", "Chemistry", "Mathematics"],
        ageLimit: 25,
      },
      importantDates: {
        applicationStart: "April 1, 2026",
        applicationEnd: "April 30, 2026",
        examDate: "May 17, 2026",
        resultDate: "June 15, 2026",
        counsellingStart: "June 20, 2026",
        counsellingEnd: "July 30, 2026",
      },
      documentsRequired: [
        "10th Marksheet",
        "12th Marksheet",
        "JEE Advanced Scorecard",
        "Category Certificate",
        "Income Certificate",
        "Domicile Certificate",
        "Medical Fitness Certificate",
      ],
    },
    campusLife: {
      clubs: [
        "Programming Club",
        "Robotics Club",
        "E-Cell",
        "AI & ML Club",
        "Music Club (Raag)",
        "Dance Club (Nritya)",
        "Dramatics Society (Abhinaya)",
        "Photography Club (Chhayachitra)",
        "Debating Society (Vaad-Vivaad)",
        "Astronomy Club",
        "Quizzing Club",
      ],
      festivals: [
        "Elan (Annual Techno-Cultural Festival)",
        "Abhinaya (Cultural Fest)",
        "E-Summit (Entrepreneurship Summit)",
      ],
      technicalEvents: [
        "Hackathons",
        "Coding Competitions",
        "Robotics Wars",
        "Research Conclave",
        "Industry Summit",
      ],
      culturalEvents: [
        "Pro Shows (Celebrity nights)",
        "Dance & Music Competitions",
        "Drama Fest",
        "Fashion Show",
      ],
      socialInitiatives: [
        "National Service Scheme (NSS)",
        "Blood Connect",
        "Teach for Telangana",
        "Sustainability Cell",
      ],
      annualBudget: 30000000,
    },
    faculty: {
      total: 550,
      phdHolders: 520,
      professor: 180,
      associateProfessor: 200,
      assistantProfessor: 170,
      industryExperience: 6,
      internationalFaculty: 60,
      awards: [
        "Shanti Swarup Bhatnagar Prize",
        "J.C. Bose Fellowship",
        "Ramanujan Fellowship",
        "Swarnajayanti Fellowship",
        "SERB Distinguished Fellowship",
        "IEEE Control Systems Award",
      ],
    },
    alumni: {
      notableAlumni: [
        {
          name: "Edward Nathan Varghese",
          designation: "Software Engineer",
          company: "Optiver (Netherlands)",
        },
        {
          name: "Rahul Ramesh",
          designation: "Co-founder & CEO",
          company: "Yellow Messenger",
        },
        {
          name: "Gaurav Gupta",
          designation: "Co-founder",
          company: "Navia Life Care",
        },
        {
          name: "Ankit Rathi",
          designation: "Co-founder",
          company: "Adloid Technologies",
        },
        {
          name: "Pratik Vaidya",
          designation: "Machine Learning Scientist",
          company: "Amazon",
        },
        {
          name: "Aditi Ramesh",
          designation: "Data Scientist",
          company: "Microsoft",
        },
        {
          name: "Ashwin Hebbar",
          designation: "Research Scientist",
          company: "NVIDIA",
        },
        {
          name: "Praveen Dhankani",
          designation: "Research Scientist",
          company: "IBM Research",
        },
        { name: "Harika Gurram", designation: "Founder", company: "H Labs" },
        {
          name: "Naveen Chintamaneni",
          designation: "Associate Director",
          company: "NestAway",
        },
      ],
      placementCompanies: [
        "Optiver",
        "Google",
        "Microsoft",
        "Amazon",
        "Goldman Sachs",
        "Intel",
        "NVIDIA",
        "Texas Instruments",
      ],
      networkStrength: 86,
    },
    international: {
      collaborations: 65,
      studentExchange: true,
      facultyExchange: true,
      partnerUniversities: [
        "Technical University of Munich",
        "University of British Columbia",
        "University of Melbourne",
        "Nanyang Technological University",
      ],
      foreignStudents: 90,
    },
    contact: {
      phone: ["+91-40-23016001", "+91-40-23016002"],
      email: [
        "deanacad@iith.ac.in",
        "registrar@iith.ac.in",
        "placement@iith.ac.in",
        "admission@iith.ac.in",
      ],
      website: "https://www.iith.ac.in",
      socialMedia: {
        facebook: "https://facebook.com/iithyderabad",
        twitter: "https://twitter.com/IITHyderabad",
        linkedin: "https://linkedin.com/school/iit-hyderabad",
        instagram: "https://instagram.com/iithyderabad",
        youtube: "https://youtube.com/IITHyderabad",
      },
      admissionContact: {
        phone: "+91-40-23016666",
        email: "admission@iith.ac.in",
      },
    },
    facilities: [
      "1000-acre green campus",
      "Radiant cooling hostels (energy efficient)",
      "High-speed WiFi (1 Gbps backbone)",
      "Olympic-size swimming pool",
      "State-of-the-art gym",
      "24x7 Medical clinic",
      "Banking & ATM complex",
      "Shopping center",
      "Central library with digital repository",
      "Sustainability initiatives: Rainwater harvesting, solar panels",
    ],
    achievements: [
      "Youngest IIT to break into top 10 NIRF rankings",
      "Highest ever international package in IITH history: ₹2.5 crore (2026)",
      "Average package surge: 75% increase in one year (2025-26)",
      "Ranked #7 in NIRF Engineering Rankings 2025",
      "1st IIT to have dedicated B.Tech in Artificial Intelligence",
      "India's first 'Open House' research exposition",
      "24 international offers in a single placement season (2026)",
    ],
    newsUpdates: [
      {
        title:
          "IIT Hyderabad student Edward Nathan Varghese secures record ₹2.5 crore package from Optiver, Netherlands",
        date: "2026-01-01",
        link: "https://economictimes.indiatimes.com/jobs/fresher/iit-hyderabad-student-makes-history",
      },
      {
        title:
          "304 of 487 B.Tech students placed in Phase I; average CTC exceeds ₹30 lakh",
        date: "2026-01-05",
        link: "https://www.thehindu.com/news/national/telangana/iit-hyderabad-reports-6242-placement-rate",
      },
      {
        title: "JEE Advanced 2026 exam date announced: May 17",
        date: "2025-12-06",
        link: "https://jeeadv.ac.in",
      },
    ],
    gallery: [
      {
        type: "campus",
        url: "/gallery/iith-campus1.jpg",
        caption: "Permanent Campus Entrance",
      },
      {
        type: "campus",
        url: "/gallery/iith-campus2.jpg",
        caption: "Academic Block",
      },
      { type: "lab", url: "/gallery/iith-lab1.jpg", caption: "IC Design Lab" },
      {
        type: "sports",
        url: "/gallery/iith-sports1.jpg",
        caption: "Swimming Pool",
      },
      {
        type: "hostel",
        url: "/gallery/iith-hostel1.jpg",
        caption: "Radiant Cooling Hostels",
      },
      {
        type: "event",
        url: "/gallery/iith-event1.jpg",
        caption: "Elan Festival",
      },
    ],
    faqs: [
      {
        question: "Is IIT Hyderabad better than IIIT Hyderabad?",
        answer:
          "This is a common confusion. IIT Hyderabad (est. 2008) and IIIT Hyderabad (est. 1998) are different institutes. IIT Hyderabad is an Institute of National Importance with NIRF rank #7 in engineering. IIIT Hyderabad is a private autonomous institute (NIRF #38). IITH generally has higher cutoffs and is the preferred choice for JEE Advanced rankers [citation:1][citation:3].",
      },
      {
        question: "What is the highest package at IIT Hyderabad in 2026?",
        answer:
          "The highest international package is ₹2.5 crore per annum, secured by Edward Nathan Varghese (CSE) at Optiver, Netherlands. The highest domestic package is ₹1.1 crore [citation:2][citation:7].",
      },
      {
        question: "What is the average package at IIT Hyderabad?",
        answer:
          "As of January 2026, the average CTC for B.Tech students stands at over ₹30 lakh per annum. This represents a 75% increase from the previous year's average of ₹20.8 lakh [citation:2][citation:7].",
      },
      {
        question: "What is the JEE Advanced cutoff for IIT Hyderabad?",
        answer:
          "For general category, the closing rank in 2025 was approximately 6,000-10,000 depending on the branch. Computer Science requires ~1,000-1,500 rank, Artificial Intelligence ~1,500-2,000 [citation:3].",
      },
      {
        question: "What is the campus size of IIT Hyderabad?",
        answer:
          "The permanent campus is 1000 acres in Kandi, Sangareddy. The temporary campus in Gachibowli is 66 acres and houses some research facilities [citation:4].",
      },
      {
        question: "Does IIT Hyderabad have hostel guarantee?",
        answer:
          "Yes, all B.Tech and M.Tech students are guaranteed single-seat hostel accommodation. The hostels feature radiant cooling technology, which is unique among IITs [citation:4].",
      },
      {
        question: "Who is the most famous faculty at IIT Hyderabad?",
        answer:
          "Prof. Mathukumalli Vidyasagar is a Distinguished Professor and Fellow of the Royal Society (FRS). He has won the IEEE Control Systems Award and the Rufus Oldenburger Medal, and has an Erdős number of 2 and an Einstein number of 3 [citation:5].",
      },
      {
        question: "What is unique about IIT Hyderabad's curriculum?",
        answer:
          "IITH follows a flexible credit system with an 'Open House' culture where students can work on interdisciplinary projects across departments. It was the first IIT to introduce a dedicated B.Tech in Artificial Intelligence [citation:3].",
      },
      {
        question: "What are the internship opportunities at IIT Hyderabad?",
        answer:
          "The B.Tech 2027 internship season saw 279 offers with stipends up to ₹7.5 lakh per month, including 15 international internships [citation:2].",
      },
      {
        question: "Who are the top recruiters for core engineering branches?",
        answer:
          "Texas Instruments, Intel, NVIDIA, Airbus, Siemens, and Tata Elxys actively recruit from Mechanical, Electrical, and Civil departments [citation:2][citation:3].",
      },
    ],
  },
  {
    "id": "1109",
    "slug": "nit-trichy",
    "name": "National Institute of Technology Tiruchirappalli",
    "shortName": "NITT",
    "tagline": "सिद्धिर्भवति कर्मजा (Success is born of action)",
    "overview": "India's premier NIT, consistently ranked the #1 NIT in India and the only non-IIT institution in the NIRF Engineering top 10, renowned for its 1964 legacy, vast alumni network, and 777-acre green campus.",
    "description": "National Institute of Technology Tiruchirappalli (NIT Trichy), formerly known as Regional Engineering College (REC), was established in 1964 through a collaboration between the Government of India and the Government of Tamil Nadu. In less than six decades, it has established itself as the undisputed leader among all NITs, earning the title of 'Rank 1 NIT' nationwide. NIT Trichy stands as the only non-IIT institution to break into the elite top 10 of the NIRF Engineering rankings, securing the 9th position in 2025 and consistently outperforming several IITs. The institute is celebrated for its remarkable alumni network, producing leaders like N. Chandrasekaran (Chairperson of Tata Group) and K. R. Sridhar (CEO of Bloom Energy). Spread across a sprawling 777.77-acre campus, NIT Trichy features sustainable infrastructure including Miyawaki forests, teak wood farms, sewage treatment plants, and dual-source power supply. Alumni contributions have funded transformative projects like the ₹150 crore innovation hub, reflecting the institute's enduring impact [citation:2][citation:5][citation:6].",
    "logo": "/logos/nit-trichy.png",
    "stream": "engineering",
    "type": "government",
    "category": "premier",
    "ranking": 9,
    "rating": 4.4,
    "nirfRank": 9,
    "googleRating": 4.3,
    "reviews": {
        "count": 3100,
        "average": 4.4,
        "academics": 4.5,
        "infrastructure": 4.3,
        "placement": 4.6,
        "faculty": 4.4
    },
    "established": 1964,
    "accreditation": "Institute of National Importance",
    "naacGrade": "A++",
    "affiliations": ["Institute of National Importance"],
    "recognition": ["UGC", "AICTE", "Ministry of Education"],
    "location": {
        "city": "Tiruchirappalli",
        "state": "Tamil Nadu",
        "country": "India",
        "pincode": "620015",
        "campusSize": "777.77 acres",
        "campusType": "suburban",
        "latitude": 10.7589,
        "longitude": 78.7132,
        "address": "National Institute of Technology, Tanjore Main Road, National Highway 83, Thuvakudi, Tiruchirappalli, Tamil Nadu 620015"
    },
    "fees": {
        "annual": 165000,
        "total": 660000,
        "hostel": 40000,
        "mess": 45000,
        "otherCharges": 25000,
        "scholarshipAvailable": true,
        "scholarshipDetails": [
            "100% Tuition Fee Waiver for SC/ST students",
            "Full tuition reimbursement for economically weaker sections",
            "Merit-cum-Means Scholarship for deserving students",
            "GATE: Monthly stipend of ₹12,400 for M.Tech",
            "Alumni-funded scholarships through RECAL"
        ],
        "paymentOptions": [
            "Online Payment",
            "NEFT/RTGS",
            "Demand Draft",
            "Semester Installments"
        ]
    },
    "placement": {
        "averagePackage": 1576000,
        "highestPackage": 40000000,
        "medianPackage": 1576000,
        "percentage": 88.90,
        "totalOffers": 809,
        "totalStudents": 910,
        "internationalOffers": 15,
        "dreamOffers": 24,
        "averagePackageTrend": 46,
        "topRecruiters": [
            "Microsoft",
            "Google",
            "Intel",
            "Oracle",
            "Infosys",
            "Samsung",
            "Sony",
            "Volvo",
            "ITC",
            "Yahoo",
            "HONEYWELL",
            "Wipro",
            "Aricent",
            "Ashok Leyland",
            "PepsiCo"
        ],
        "recruitmentSectors": [
            "Information Technology",
            "Core Engineering",
            "Consulting",
            "Product Management",
            "Automobile",
            "Manufacturing",
            "FMCG"
        ],
        "placementStats": [
            {
                "year": 2024,
                "averagePackage": 1576000,
                "highestPackage": 2700000,
                "percentage": 88.9
            },
            {
                "year": 2023,
                "averagePackage": 1576000,
                "highestPackage": 4000000,
                "percentage": 90.6
            },
            {
                "year": 2022,
                "averagePackage": 1200000,
                "highestPackage": 4000000,
                "percentage": 90.9
            },
            {
                "year": 2021,
                "averagePackage": 1080000,
                "highestPackage": 4000000,
                "percentage": 89.5
            }
        ]
    },
    "academics": {
        "coursesOffered": [
            "B.Tech",
            "M.Tech",
            "PhD",
            "MCA",
            "MBA",
            "M.Sc",
            "M.Arch",
            "B.Arch"
        ],
        "popularCourses": [
            "B.Tech Computer Science & Engineering",
            "B.Tech Electronics & Communication Engineering",
            "B.Tech Electrical & Electronics Engineering",
            "B.Tech Mechanical Engineering",
            "B.Tech Instrumentation & Control Engineering"
        ],
        "facultyCount": 400,
        "studentCount": 6500,
        "studentFacultyRatio": "16:1",
        "specialization": [
            "Computer Science",
            "Electronics & Communication",
            "Electrical & Electronics",
            "Mechanical Engineering",
            "Civil Engineering",
            "Chemical Engineering",
            "Instrumentation & Control",
            "Metallurgical & Materials Engineering"
        ],
        "departments": [
            "Computer Science & Engineering",
            "Electronics & Communication Engineering",
            "Electrical & Electronics Engineering",
            "Mechanical Engineering",
            "Civil Engineering",
            "Chemical Engineering",
            "Metallurgical & Materials Engineering",
            "Production Engineering",
            "Instrumentation & Control Engineering",
            "Architecture",
            "Management Studies",
            "Sciences",
            "Humanities & Social Sciences"
        ],
        "researchCenters": 25,
        "publications": 2200,
        "collaborations": [
            "Technical University of Munich",
            "University of British Columbia",
            "Nanyang Technological University",
            "KAIST"
        ],
        "teachingMode": "offline"
    },
    "infrastructure": {
        "library": {
            "name": "Central Library",
            "books": 150000,
            "journals": 500,
            "digitalResources": 300000,
            "seatingCapacity": 800
        },
        "labs": {
            "count": 75,
            "majorLabs": [
                "High Voltage Engineering Lab",
                "VLSI Design Lab",
                "Robotics & Automation Lab",
                "Advanced Computing Lab",
                "Materials Characterization Lab",
                "Fluid Mechanics Lab",
                "Control Systems Lab"
            ],
            "equipmentValue": 350000000
        },
        "sports": {
            "facilities": [
                "Football Ground",
                "Cricket Ground",
                "Tennis Court",
                "Basketball Court",
                "Badminton Courts",
                "Volleyball Court",
                "Hockey Field",
                "Table Tennis Room",
                "Gymnasium",
                "Athletic Track"
            ],
            "stadium": false,
            "gym": true,
            "swimmingPool": false
        },
        "hostel": {
            "boys": true,
            "girls": true,
            "capacity": 4000,
            "rooms": 2000,
            "facilities": [
                "Single and double occupancy rooms",
                "High-speed WiFi",
                "Common rooms with TV",
                "Indoor games",
                "Laundry service",
                "24/7 medical assistance",
                "CCTV security",
                "Mess with diverse cuisine"
            ]
        },
        "wifi": true,
        "cafeteria": 6,
        "medical": true,
        "transportation": true,
        "auditorium": 3
    },
    "admission": {
        "entranceExam": ["JEE Main", "GATE", "JAM", "CAT", "CMAT"],
        "cutoff": 5362,
        "cutoffTrend": -8,
        "applicationMode": "Online",
        "applicationFee": 2500,
        "selectionProcess": [
            "JEE Main Score",
            "JoSAA Counseling",
            "Document Verification",
            "COAP for M.Tech",
            "CCMT for Central Counselling"
        ],
        "eligibility": {
            "minPercentage": 75,
            "subjectsRequired": ["Physics", "Chemistry", "Mathematics"],
            "ageLimit": 25
        },
        "importantDates": {
            "applicationStart": "March 1, 2026",
            "applicationEnd": "April 15, 2026",
            "examDate": "May 5, 2026",
            "resultDate": "June 10, 2026",
            "counsellingStart": "June 15, 2026",
            "counsellingEnd": "July 25, 2026"
        },
        "documentsRequired": [
            "10th Marksheet",
            "12th Marksheet",
            "JEE Main Scorecard",
            "Category Certificate",
            "Income Certificate",
            "Domicile Certificate",
            "Medical Fitness Certificate"
        ]
    },
    "campusLife": {
        "clubs": [
            "Programming Club",
            "Robotics Club",
            "E-Cell",
            "Music Club",
            "Dance Club",
            "Dramatics Society",
            "Photography Club",
            "Debating Society",
            "Astronomy Club",
            "Quizzing Club",
            "Fine Arts Club"
        ],
        "festivals": [
            "Festember (Annual Cultural Festival)",
            "Pragyan (Annual Techno-Management Festival)",
            "Sportsem (Annual Sports Festival)"
        ],
        "technicalEvents": [
            "Hackathons",
            "Coding Competitions",
            "Robotics Challenge",
            "Research Conclave",
            "Industry Conclave"
        ],
        "culturalEvents": [
            "Pro Shows (Celebrity nights)",
            "Dance & Music Competitions",
            "Drama Fest",
            "Fashion Show",
            "Literary Events"
        ],
        "socialInitiatives": [
            "National Service Scheme (NSS)",
            "National Cadet Corps (NCC)",
            "Spastics Society of Tamil Nadu Collaboration",
            "Sustainability Cell",
            "Green Campus Initiative"
        ],
        "annualBudget": 45000000
    },
    "faculty": {
        "total": 400,
        "phdHolders": 380,
        "professor": 140,
        "associateProfessor": 130,
        "assistantProfessor": 130,
        "industryExperience": 5,
        "internationalFaculty": 25,
        "awards": [
            "Shanti Swarup Bhatnagar Prize",
            "J.C. Bose Fellowship",
            "Ramanujan Fellowship",
            "Swarnajayanti Fellowship",
            "SERB Distinguished Fellowship",
            "Young Scientist Award"
        ]
    },
    "alumni": {
        "notableAlumni": [
            {
                "name": "N. Chandrasekaran",
                "designation": "Chairperson",
                "company": "Tata Group"
            },
            {
                "name": "K. R. Sridhar",
                "designation": "CEO & Co-founder",
                "company": "Bloom Energy"
            },
            {
                "name": "Ravi Shankar",
                "designation": "Senior Vice President",
                "company": "Microsoft"
            },
            {
                "name": "Vijay Govindarajan",
                "designation": "Professor",
                "company": "Tuck School of Business, Dartmouth"
            },
            {
                "name": "Sriram Rajamani",
                "designation": "Distinguished Scientist",
                "company": "Microsoft Research India"
            },
            {
                "name": "Sundararajan Mahalingam",
                "designation": "Executive Vice President",
                "company": "Oracle"
            },
            {
                "name": "Shankar Narayanan",
                "designation": "Managing Director",
                "company": "Goldman Sachs"
            },
            {
                "name": "Venkatesh Subramaniam",
                "designation": "Senior Vice President",
                "company": "Infosys"
            },
            {
                "name": "Thillaikarasi Ranganathan",
                "designation": "Director",
                "company": "Amazon"
            },
            {
                "name": "Ganesh Natarajan",
                "designation": "Founder & Chairman",
                "company": "5F World"
            }
        ],
        "placementCompanies": [
            "Microsoft",
            "Google",
            "Intel",
            "Oracle",
            "Samsung",
            "Volvo",
            "Sony"
        ],
        "networkStrength": 92
    },
    "international": {
        "collaborations": 40,
        "studentExchange": true,
        "facultyExchange": true,
        "partnerUniversities": [
            "Technical University of Munich",
            "University of British Columbia",
            "Nanyang Technological University",
            "KAIST"
        ],
        "foreignStudents": 120
    },
    "contact": {
        "phone": [
            "+91-431-2503XXX",
            "+91-431-2504135 (Boys Hostel)",
            "+91-431-2503907 (Girls Hostel)",
            "+91-431-2503846 (Power House - Emergency)"
        ],
        "email": [
            "director@nitt.edu",
            "registrar@nitt.edu",
            "placement@nitt.edu",
            "admission@nitt.edu",
            "cworks@nitt.edu (Chief of Works)",
            "ee@nitt.edu (Executive Engineer)"
        ],
        "website": "https://www.nitt.edu",
        "socialMedia": {
            "facebook": "https://facebook.com/NITTrichy",
            "twitter": "https://twitter.com/NITT_Official",
            "linkedin": "https://linkedin.com/school/nit-trichy",
            "instagram": "https://instagram.com/nittrichy",
            "youtube": "https://youtube.com/NITTrichy"
        },
        "admissionContact": {
            "phone": "+91-431-2503666",
            "email": "admission@nitt.edu"
        }
    },
    "facilities": [
        "777.77-acre green campus with Miyawaki forest",
        "Dual-source 11 kV power supply with 3072.5 kVA DG backup",
        "24 lifts with electro-mechanical maintenance",
        "1600+ split air conditioners across campus",
        "Sewage Treatment Plants (300 KLD and 800 KLD)",
        "Reverse Osmosis plant",
        "Water supply with overhead tanks (4-5 lakh litres capacity)",
        "State-of-the-art gymnasium",
        "24x7 Medical clinic",
        "Banking complex",
        "613 staff quarters with full maintenance",
        "Shopping center",
        "Central library with digital repository",
        "Sustainability initiatives: Rainwater harvesting, solar panels, compost yard",
        "Teak wood farm and coconut farm"
    ],
    "achievements": [
        "Ranked #1 NIT in India consistently across all rankings",
        "Only non-IIT institution in NIRF Engineering Top 10 (Rank #9 in 2025)",
        "Alumni Chairperson of Tata Group: N. Chandrasekaran",
        "Alumni CEO of Bloom Energy (NASA Mars mission technologist): K. R. Sridhar",
        "₹150 crore innovation hub funded by alumni network through RECAL",
        "Over 80% placement rate sustained for two decades",
        "BTech median package growth: ₹10.8 LPA (2021) → ₹15.76 LPA (2023)",
        "One of the oldest RECs established in 1964, transforming to NIT in 2002",
        "Home State cutoff for CSE: Rank 5362 (2025)",
        "MSc students offered packages up to ₹27 LPA in 2024"
    ],
    "newsUpdates": [
        {
            "title": "NIT Trichy remains only non-IIT in NIRF Engineering Top 10, secures 9th rank in 2025",
            "date": "2025-09-04",
            "link": "https://indianexpress.com/article/education/nirf-ranking-2025"
        },
        {
            "title": "NIT Trichy BTech placements 2024: 88.9% students placed, median package holds at ₹15.76 LPA",
            "date": "2024-12-15",
            "link": "https://www.nitt.edu/placement"
        },
        {
            "title": "Alumni-funded ₹150 crore innovation hub project underway at NIT Trichy",
            "date": "2025-01-03",
            "link": "https://www.linkedin.com/posts/dr-rajmohan-palanivelu"
        }
    ],
    "gallery": [
        {
            "type": "campus",
            "url": "/gallery/nitt-campus1.jpg",
            "caption": "Main Building - Administrative Block"
        },
        {
            "type": "campus",
            "url": "/gallery/nitt-campus2.jpg",
            "caption": "Academic Complex"
        },
        {
            "type": "lab",
            "url": "/gallery/nitt-lab1.jpg",
            "caption": "High Voltage Engineering Lab"
        },
        {
            "type": "sports",
            "url": "/gallery/nitt-sports1.jpg",
            "caption": "Cricket Ground"
        },
        {
            "type": "hostel",
            "url": "/gallery/nitt-hostel1.jpg",
            "caption": "Boys Hostel Complex"
        },
        {
            "type": "event",
            "url": "/gallery/nitt-event1.jpg",
            "caption": "Festember Cultural Festival"
        }
    ],
    "faqs": [
        {
            "question": "Is NIT Trichy better than other NITs?",
            "answer": "Yes, NIT Trichy is consistently ranked as the #1 NIT in India. In NIRF 2025, it is the only NIT in the top 10 engineering colleges (ranked 9th), outperforming NIT Surathkal, NIT Warangal, and NIT Rourkela. It has the highest cutoffs, strongest alumni network (Tata Group Chairperson), and highest placement median among all NITs [citation:2][citation:4][citation:8]."
        },
        {
            "question": "What is the highest package at NIT Trichy?",
            "answer": "The highest international package recorded is ₹40 LPA (2022-23). The highest package for MSc students reached ₹27 LPA in 2024. The median BTech package is ₹15.76 LPA (2023) [citation:9]."
        },
        {
            "question": "What is the average package at NIT Trichy?",
            "answer": "The median package for BTech is ₹15.76 LPA (2023). For MTech, the median package is ₹10 LPA. For MBA, the median package is ₹8.70 LPA. The CSE branch consistently achieves the highest placements with 98% placement rate [citation:9]."
        },
        {
            "question": "What is the JEE Main cutoff for NIT Trichy?",
            "answer": "For CSE (Home State, Open Gender-Neutral), the closing rank was 5362 in 2025. For ECE: 8127, EEE: 9826, Mechanical: 11347. For Other State quota, CSE closes around Rank 1200. These are the highest among all NITs [citation:4][citation:10]."
        },
        {
            "question": "What is the campus size of NIT Trichy?",
            "answer": "The campus is spread over 777.77 acres in Thuvakudi, Trichy. It features Miyawaki forest, teak wood farms, coconut farms, dual-source power supply, sewage treatment plants (300 KLD + 800 KLD), and 613 staff quarters. It is one of the largest NIT campuses [citation:5]."
        },
        {
            "question": "Does NIT Trichy have hostel guarantee?",
            "answer": "Yes, NIT Trichy provides on-campus hostel accommodation for boys and girls with a capacity of over 4000 students. Facilities include Wi-Fi, mess, common rooms, indoor games, and 24/7 medical assistance. Hostel fees are approximately ₹40,000 per annum [citation:8][citation:9]."
        },
        {
            "question": "Who are the most famous alumni of NIT Trichy?",
            "answer": "N. Chandrasekaran (Chairperson, Tata Group), K. R. Sridhar (CEO, Bloom Energy - former NASA scientist), Ravi Shankar (SVP, Microsoft), Sriram Rajamani (Distinguished Scientist, Microsoft Research India). NIT Trichy's alumni network (RECAL) is considered the strongest among all NITs and funds major institute projects including a ₹150 crore innovation hub [citation:6]."
        },
        {
            "question": "What is unique about NIT Trichy's curriculum?",
            "answer": "NIT Trichy offers 10 undergraduate, 28 postgraduate, and doctoral programs. It is known for its flexible credit system, strong industry collaborations, and emphasis on core engineering disciplines. The institute has maintained over 85% placement rates consistently and has one of the oldest engineering traditions among NITs (est. 1964) [citation:9][citation:10]."
        },
        {
            "question": "What is the fee structure at NIT Trichy?",
            "answer": "Annual tuition fees for BTech range from ₹1.5-2 Lakhs. Total course fees for MTech (Construction Technology) are ₹2.18 Lakhs. SC/ST students receive full tuition fee waiver. Hostel and mess fees are additional (approx ₹85,000 per annum) [citation:3][citation:8]."
        },
        {
            "question": "Who are the top recruiters for core engineering branches?",
            "answer": "Intel, Texas Instruments, Volvo, Ashok Leyland, Samsung, Sony, Honeywell, Aricent, and ITC actively recruit from Mechanical, ECE, EEE, and Civil departments. Microsoft, Google, Oracle, and Infosys recruit from CSE and IT branches [citation:9]."
        }
    ]
},
{
    "id": "1110",
    "slug": "iit-bhu-varanasi",
    "name": "Indian Institute of Technology (Banaras Hindu University) Varanasi",
    "shortName": "IIT BHU",
    "tagline": "ज्ञान परमं ध्येयम् (Knowledge is the supreme goal)",
    "overview": "India's first-century-old IIT, blending a 1919 pre-independence legacy with modern IIT dynamism, ranked #10 in NIRF Engineering 2025, and home to the PARAM SHIVAY supercomputer.",
    "description": "Indian Institute of Technology (BHU) Varanasi, founded in 1919 as the Banaras Engineering College (BENCO), is a testament to Mahamana Pandit Madan Mohan Malaviya's vision. It is the only IIT that existed before Indian independence, merging a centurion heritage with the IIT system's prestige since its conversion in 2012. Spread across a sprawling 1,300-acre campus within the Banaras Hindu University enclave, IIT BHU is not just an engineering college but a cultural and research ecosystem. The institute made headlines in 2025 by smashing its own decade-old placement records, achieving a domestic highest package of ₹2.2 crore and an average of ₹22.8 LPA [citation:1][citation:10]. Prime Minister Shri Narendra Modi inaugurated the PARAM SHIVAY Supercomputer here in 2019, a testament to its research prowess. Known for its unique 'Minor' and 'Second Major' flexible curriculum and the discontinuation of branch change to ensure merit-based specialization, IIT BHU stands as a bridge between ancient wisdom and cutting-edge technology [citation:6].",
    "logo": "/logos/iit-bhu.png",
    "stream": "engineering",
    "type": "government",
    "category": "premier",
    "ranking": 10,
    "rating": 4.3,
    "nirfRank": 10,
    "googleRating": 4.2,
    "reviews": {
        "count": 4100,
        "average": 4.3,
        "academics": 4.3,
        "infrastructure": 3.9,
        "placement": 4.5,
        "faculty": 4.2
    },
    "established": 1919,
    "accreditation": "Institute of National Importance",
    "naacGrade": "A++",
    "affiliations": ["Institute of National Importance"],
    "recognition": ["UGC", "AICTE", "Ministry of Education"],
    "location": {
        "city": "Varanasi",
        "state": "Uttar Pradesh",
        "country": "India",
        "pincode": "221005",
        "campusSize": "1300 acres",
        "campusType": "urban",
        "latitude": 25.3176,
        "longitude": 82.9739,
        "address": "Indian Institute of Technology (BHU), Hindu University Campus, Varanasi, Uttar Pradesh 221005"
    },
    "fees": {
        "annual": 227300,
        "total": 909200,
        "hostel": 10200,
        "mess": 30000,
        "otherCharges": 6350,
        "scholarshipAvailable": true,
        "scholarshipDetails": [
            "100% Tuition Fee Waiver (Family Income < ₹1L) for GEN/OBC",
            "2/3rd Tuition Fee Waiver (Family Income ₹1-5L) for GEN/OBC",
            "SC/ST/PH: Full tuition reimbursement + pocket money",
            "Merit-Cum-Means (MCM): 25% of UG/PG students, full tuition waiver (Income < ₹5L, 12th >60%)",
            "Top Class Education Scheme for SC Students",
            "NFSHE for ST Students (formerly Rajiv Gandhi National Fellowship)",
            "Endowment & State Scholarships",
            "GATE: Monthly stipend of ₹12,400 for M.Tech"
        ],
        "paymentOptions": [
            "Online Payment (Institute Portal)",
            "NEFT/RTGS",
            "Demand Draft",
            "Semester Installments"
        ]
    },
    "placement": {
        "averagePackage": 2280000,
        "highestPackage": 22000000,
        "medianPackage": 1576000,
        "percentage": 88.50,
        "totalOffers": 1128,
        "totalStudents": 1280,
        "internationalOffers": 11,
        "dreamOffers": 25,
        "averagePackageTrend": 36,
        "topRecruiters": [
            "Google",
            "Microsoft",
            "Goldman Sachs",
            "Qualcomm",
            "Uber",
            "Amazon",
            "JP Morgan",
            "Paytm",
            "Walmart",
            "Oracle",
            "Samsung",
            "Cisco",
            "EXL Services",
            "ZS Associates",
            "Bosch",
            "Adani",
            "TCS",
            "Infosys",
            "L&T",
            "Tata Motors"
        ],
        "recruitmentSectors": [
            "Information Technology",
            "Quantitative Finance",
            "Core Engineering",
            "Consulting",
            "Product Management",
            "R&D",
            "Manufacturing",
            "Pharmaceuticals"
        ],
        "placementStats": [
            {
                "year": 2025,
                "averagePackage": 2280000,
                "highestPackage": 22000000,
                "percentage": 88.5
            },
            {
                "year": 2024,
                "averagePackage": 2256000,
                "highestPackage": 16800000,
                "percentage": 88.9
            },
            {
                "year": 2023,
                "averagePackage": 1200000,
                "highestPackage": 12000000,
                "percentage": 85.0
            },
            {
                "year": 2022,
                "averagePackage": 1150000,
                "highestPackage": 21500000,
                "percentage": 84.0
            }
        ]
    },
    "academics": {
        "coursesOffered": [
            "B.Tech",
            "B.Arch",
            "M.Tech",
            "M.Pharm",
            "M.Sc",
            "PhD",
            "Integrated Dual Degree (IDD) B.Tech+M.Tech"
        ],
        "popularCourses": [
            "B.Tech Computer Science & Engineering",
            "B.Tech Electronics Engineering",
            "B.Tech Electrical Engineering",
            "B.Tech Mechanical Engineering",
            "B.Tech Mathematics & Computing",
            "IDD in Biochemical Engineering"
        ],
        "facultyCount": 353,
        "studentCount": 6030,
        "studentFacultyRatio": "17:1",
        "specialization": [
            "Ceramic Engineering (Legacy)",
            "Pharmaceutical Engineering & Technology",
            "Mining Engineering",
            "Metallurgical Engineering",
            "Biomedical Engineering",
            "Materials Science & Technology",
            "Industrial Chemistry"
        ],
        "departments": [
            "Ceramic Engineering",
            "Chemical Engineering & Technology",
            "Civil Engineering",
            "Computer Science & Engineering",
            "Electrical Engineering",
            "Electronics Engineering",
            "Mechanical Engineering",
            "Metallurgical Engineering",
            "Mining Engineering",
            "Pharmaceutical Engineering & Technology",
            "Biochemical Engineering (School)",
            "Biomedical Engineering (School)",
            "Materials Science & Technology (School)",
            "Chemistry",
            "Mathematical Sciences",
            "Physics",
            "Humanistic Studies",
            "Architecture, Planning & Design"
        ],
        "researchCenters": 18,
        "publications": 1800,
        "collaborations": [
            "Technical University of Munich (Germany)",
            "Max Planck Institute (Germany)",
            "University of Applied Sciences (Germany)",
            "Technical University Dresden (Germany)",
            "IMEM-CNR, Parma (Italy)",
            "Rutherford Appleton Laboratory (UK)",
            "EMAT-University of Antwerp (Belgium)",
            "Paul Scherrer Institute (Switzerland)",
            "Kyushu Institute of Technology (Japan)"
        ],
        "teachingMode": "offline"
    },
    "infrastructure": {
        "library": {
            "name": "Shreenivas Deshpande Library",
            "books": 150000,
            "journals": 15000,
            "digitalResources": 22000,
            "seatingCapacity": 700
        },
        "labs": {
            "count": 60,
            "majorLabs": [
                "PARAM SHIVAY Supercomputing Centre (833 TeraFLOPS)",
                "Central Instrumentation Facility (CIF)",
                "VLSI Design Lab",
                "Advanced Manufacturing Lab",
                "Biomedical Instrumentation Lab",
                "High Voltage Engineering Lab",
                "Main Workshop"
            ],
            "equipmentValue": 450000000
        },
        "sports": {
            "facilities": [
                "ADV Athletic Ground",
                "Football Ground",
                "Cricket Ground",
                "Tennis Court",
                "Basketball Court",
                "Badminton Courts",
                "Volleyball Court",
                "Table Tennis Room",
                "Gymnasium"
            ],
            "stadium": false,
            "gym": true,
            "swimmingPool": false
        },
        "hostel": {
            "boys": true,
            "girls": true,
            "capacity": 4500,
            "rooms": 2200,
            "facilities": [
                "Single/Double occupancy rooms",
                "Prafulla Chandra Ray Hostel (Boys)",
                "GSMC Extension Hostel (Girls)",
                "High-speed WiFi",
                "Common rooms with TV",
                "Indoor games",
                "Laundry service",
                "24/7 medical assistance (BHU Student Health Centre)",
                "CCTV security"
            ]
        },
        "wifi": true,
        "cafeteria": 6,
        "medical": true,
        "transportation": true,
        "auditorium": 3
    },
    "admission": {
        "entranceExam": ["JEE Advanced", "GATE", "JAM", "GPAT", "CSIR-NET", "UGC-NET"],
        "cutoff": 1364,
        "cutoffTrend": 2,
        "applicationMode": "Online",
        "applicationFee": 2500,
        "selectionProcess": [
            "JEE Advanced Score",
            "JoSAA Counseling",
            "COAP for M.Tech",
            "GPAT + Interview for M.Pharm",
            "IIT JAM for M.Sc"
        ],
        "eligibility": {
            "minPercentage": 75,
            "subjectsRequired": ["Physics", "Chemistry", "Mathematics"],
            "ageLimit": 25
        },
        "importantDates": {
            "applicationStart": "April 1, 2026",
            "applicationEnd": "April 30, 2026",
            "examDate": "May 17, 2026",
            "resultDate": "June 15, 2026",
            "counsellingStart": "June 20, 2026",
            "counsellingEnd": "July 30, 2026"
        },
        "documentsRequired": [
            "10th Marksheet",
            "12th Marksheet",
            "JEE Advanced Scorecard",
            "Category Certificate",
            "Income Certificate (for Fee Waiver)",
            "Domicile Certificate",
            "Medical Fitness Certificate",
            "OBC(NCL) Affidavit (₹10 Stamp Paper)"
        ]
    },
    "campusLife": {
        "clubs": [
            "Programming Club",
            "Robotics Club",
            "E-Cell",
            "Electronics Club",
            "Music Club",
            "Dance Club",
            "Dramatics Society",
            "Photography Club",
            "Debating Society",
            "Astronomy Club",
            "Quizzing Club"
        ],
        "festivals": [
            "Kashiyatra (Annual Socio-Cultural Festival)",
            "Technex (Annual Techno-Management Festival)",
            "Spardha (Annual Sports Festival)"
        ],
        "technicalEvents": [
            "Hackathons",
            "Coding Competitions",
            "Robotics Challenge",
            "Research Conclave",
            "Industry Conclave"
        ],
        "culturalEvents": [
            "Pro Shows (Celebrity nights)",
            "Dance & Music Competitions",
            "Drama Fest",
            "Fashion Show",
            "Literary Events",
            "Heritage Walks (Varanasi)"
        ],
        "socialInitiatives": [
            "National Service Scheme (NSS)",
            "National Cadet Corps (NCC)",
            "Teach for Varanasi",
            "Sustainability Cell",
            "Blood Connect"
        ],
        "annualBudget": 35000000
    },
    "faculty": {
        "total": 353,
        "phdHolders": 330,
        "professor": 120,
        "associateProfessor": 115,
        "assistantProfessor": 118,
        "industryExperience": 5,
        "internationalFaculty": 20,
        "awards": [
            "Shanti Swarup Bhatnagar Prize",
            "J.C. Bose Fellowship",
            "Ramanujan Fellowship",
            "Swarnajayanti Fellowship",
            "SERB Distinguished Fellowship",
            "Young Scientist Award"
        ]
    },
    "alumni": {
        "notableAlumni": [
            {
                "name": "Nikesh Arora",
                "designation": "CEO & Chairman",
                "company": "Palo Alto Networks"
            },
            {
                "name": "Krishan Kant",
                "designation": "10th Vice President of India",
                "company": "Government of India"
            },
            {
                "name": "Pawan Kumar",
                "designation": "CTO",
                "company": "Adobe"
            },
            {
                "name": "Sanjay Nayak",
                "designation": "CEO & Co-founder",
                "company": "Tejas Networks"
            },
            {
                "name": "Rajeev Madhavan",
                "designation": "Founder",
                "company": "Magma Design Automation"
            },
            {
                "name": "Rajnish Kumar",
                "designation": "Non-Executive Chairman",
                "company": "BharatPe"
            },
            {
                "name": "Vibha Parthasarathi",
                "designation": "Former Ambassador",
                "company": "Indian Foreign Service"
            },
            {
                "name": "Shantanu Narayen",
                "designation": "Chairman & CEO",
                "company": "Adobe (Honorary)"
            }
        ],
        "placementCompanies": [
            "Google",
            "Microsoft",
            "Goldman Sachs",
            "Qualcomm",
            "Amazon",
            "Uber"
        ],
        "networkStrength": 89
    },
    "international": {
        "collaborations": 25,
        "studentExchange": true,
        "facultyExchange": true,
        "partnerUniversities": [
            "Technical University of Munich",
            "Max Planck Institute",
            "Kyushu Institute of Technology",
            "University of Antwerp"
        ],
        "foreignStudents": 80
    },
    "contact": {
        "phone": [
            "+91-542-2367042",
            "+91-542-2368428 (Fax)"
        ],
        "email": [
            "doaa@iitbhu.ac.in",
            "academics@iitbhu.ac.in",
            "placement@iitbhu.ac.in",
            "admission@iitbhu.ac.in"
        ],
        "website": "https://www.iitbhu.ac.in",
        "socialMedia": {
            "facebook": "https://facebook.com/iitbhu",
            "twitter": "https://twitter.com/IITBHU",
            "linkedin": "https://linkedin.com/school/iit-bhu",
            "instagram": "https://instagram.com/iitbhu",
            "youtube": "https://youtube.com/IITBHU"
        },
        "admissionContact": {
            "phone": "+91-542-2367042",
            "email": "doaa@iitbhu.ac.in"
        }
    },
    "facilities": [
        "1,300-acre heritage campus within BHU",
        "PARAM SHIVAY Supercomputer (833 TFLOPS)",
        "Central Instrumentation Facility (CIF)",
        "High-speed WiFi campus",
        "State-of-the-art gymnasium",
        "24x7 Medical clinic (BHU Student Health Centre)",
        "Banking complex",
        "Shopping center",
        "Shreenivas Deshpande Library with 1.5L+ books",
        "Sustainability initiatives: Rainwater harvesting",
        "Supercomputing Centre under National Supercomputing Mission",
        "Lecture Theatre Complexes (LT-1, LT-3)"
    ],
    "achievements": [
        "Only IIT established pre-independence (1919); Centenary celebrated in 2019",
        "Record-breaking highest domestic package: ₹2.2 crore (2025)",
        "11 students secured offers above ₹1 crore in 2025",
        "Average package surge to ₹22.8 LPA (2025) - highest in a decade",
        "Ranked #10 in NIRF Engineering Rankings 2025 (consistent top 10)",
        "Home to PARAM SHIVAY Supercomputer inaugurated by PM Modi",
        "First IIT to have dedicated departments in Ceramic, Mining, and Pharmaceutical Engineering",
        "Only IIT physically located within a Central University (BHU) campus",
        "NIRF Overall Rank #31 (2025), QS World Rank #531 (2025)"
    ],
    "newsUpdates": [
        {
            "title": "IIT BHU achieves record-breaking ₹2.2 crore highest package and ₹22.8 LPA average package in 2025 placements",
            "date": "2025-11-14",
            "link": "https://www.getmyuni.com/college/indian-institute-of-technology-iit-varanasi"
        },
        {
            "title": "IIT BHU maintains 10th rank in NIRF Engineering 2025, 31st Overall",
            "date": "2025-09-04",
            "link": "https://education.indianexpress.com"
        },
        {
            "title": "JoSAA 2025: IIT BHU CSE closing rank at 1364, Mathematics & Computing at 1842",
            "date": "2025-07-25",
            "link": "https://josaa.admissions.nic.in"
        }
    ],
    "gallery": [
        {
            "type": "campus",
            "url": "/gallery/iitbhu-campus1.jpg",
            "caption": "Main Building - IIT BHU"
        },
        {
            "type": "campus",
            "url": "/gallery/iitbhu-campus2.jpg",
            "caption": "Swantantrata Bhawan"
        },
        {
            "type": "lab",
            "url": "/gallery/iitbhu-lab1.jpg",
            "caption": "PARAM SHIVAY Supercomputing Centre"
        },
        {
            "type": "sports",
            "url": "/gallery/iitbhu-sports1.jpg",
            "caption": "ADV Athletic Ground"
        },
        {
            "type": "hostel",
            "url": "/gallery/iitbhu-hostel1.jpg",
            "caption": "Prafulla Chandra Ray Hostel"
        },
        {
            "type": "event",
            "url": "/gallery/iitbhu-event1.jpg",
            "caption": "Kashiyatra - Cultural Festival"
        }
    ],
    "faqs": [
        {
            "question": "Is IIT BHU a 'real' IIT or part of BHU?",
            "answer": "IIT BHU is a full-fledged Indian Institute of Technology, designated by an Act of Parliament in 2012. While it is physically located within the Banaras Hindu University campus and shares some facilities (like the health centre), it is an autonomous institute of national importance with its own director, senate, and administration, distinct from BHU [citation:4][citation:6]."
        },
        {
            "question": "What is the highest package at IIT BHU in 2025?",
            "answer": "The highest domestic package in 2025 is ₹2.2 crore per annum, surpassing the previous record of ₹2.15 crore (2021). This marks the best placement performance in the past decade [citation:1][citation:10]."
        },
        {
            "question": "What is the average package at IIT BHU?",
            "answer": "As of 2025, the average CTC stands at ₹22.8 Lakh per annum, a significant jump from previous years [citation:1][citation:10]."
        },
        {
            "question": "What is the JEE Advanced cutoff for IIT BHU?",
            "answer": "For 2025 (Round 4), the closing rank for CSE was 1364, Mathematics & Computing 1842, Electronics Engineering 2511, Electrical Engineering 3493, and Mechanical Engineering 6697. IIT BHU discontinued branch change from 2025-26, so cutoffs are now more rigid [citation:3][citation:6]."
        },
        {
            "question": "What is the campus size of IIT BHU?",
            "answer": "There is conflicting data: most official and recent sources state 400+ acres, but several sources and FAQs claim 1,300 acres. The discrepancy arises because IIT BHU is situated *within* the 1,300-acre BHU campus, while the IIT's exclusive academic/residential zone is approximately 400 acres. The institute utilizes the larger BHU ecosystem [citation:2][citation:8][citation:10]."
        },
        {
            "question": "Can I change my branch at IIT BHU?",
            "answer": "No. As per the JoSAA 2025 official profile, the 'Branch Change option for UG Programme is discontinued from the session 2025-26'. Students must now choose their specialization at admission [citation:6]."
        },
        {
            "question": "What is unique about IIT BHU's curriculum?",
            "answer": "IIT BHU offers a highly flexible curriculum with options for 'Minor' in another discipline, 'Second Major' (extending degree by 1 year), and Integrated Dual Degree (IDD) B.Tech+M.Tech in 5 years. The 6th semester is reserved for industrial/research internships [citation:6]."
        },
        {
            "question": "What is PARAM SHIVAY?",
            "answer": "PARAM SHIVAY is a supercomputer at IIT BHU with a peak processing speed of 833 TeraFLOPS, inaugurated by Prime Minister Narendra Modi in February 2019. It was built under the 'Make in India' initiative and is utilized by researchers across the country [citation:6]."
        },
        {
            "question": "Who are the top recruiters for core engineering branches?",
            "answer": "IIT BHU has strong legacy departments. Qualcomm, Texas Instruments, and Samsung hire from Electronics/Electrical. Tata Motors, L&T, and Bosch recruit from Mechanical/Civil. Adani, Jindal, and Hindalco recruit heavily from Metallurgical and Mining Engineering [citation:2][citation:7]."
        },
        {
            "question": "What is the fee waiver scheme at IIT BHU?",
            "answer": "Students with family income < ₹1L get 100% tuition fee exemption. Students with income ₹1-5L get 2/3rd fee exemption. SC/ST/PH students are fully exempted from tuition fees regardless of income. Additionally, 25% of students receive Merit-cum-Means (MCM) scholarships [citation:1][citation:6]."
        }
    ]
},

  // Top 10 - Semi Government Engineering Colleges

  {
    "id": "1201",
    "slug": "jadavpur-university-kolkata",
    "name": "Jadavpur University",
    "shortName": "JU",
    "tagline": "To Know Is To Grow",
    "overview": "West Bengal's premier public technical university, ranked #1 among State Public Universities and #9 among all Universities in India by NIRF 2025. Known for its strong research output, it is recognized as the top university in India by the Nature Index and is one of the few state universities with an 'A+' NAAC grade.",
    "description": "Jadavpur University, established in 1906 as the Bengal Technical Institute, is a testament to the Swadeshi movement's vision for indigenous education. It was officially converted into Jadavpur University in 1955 and has since grown into a prestigious research university. The university has a unique distinction of being a state university with a national impact, consistently ranked among the top 10 universities in India . In 2025, JU celebrated a major achievement by being ranked 1st in the State Public University category by NIRF, a testament to its academic excellence, research output, and affordable education model . Its strong research focus is highlighted by its Experimental High Energy Physics Group being part of the CERN ALICE-INDIA Collaboration, which shared the prestigious 2025 Breakthrough Prize in Fundamental Physics . With a sprawling main campus in South Kolkata and a modern second campus in Salt Lake, JU blends a rich heritage with cutting-edge research, particularly in engineering, science, and interdisciplinary studies.",
    "logo": "/logos/jadavpur-university.png",
    "stream": "engineering",
    "type": "semi",
    "category": "tier1",
    "ranking": 1,
    "rating": 4.2,
    "nirfRank": 1,
    "googleRating": 4.1,
    "reviews": {
        "count": 3800,
        "average": 4.2,
        "academics": 4.5,
        "infrastructure": 3.5,
        "placement": 4.1,
        "faculty": 4.4
    },
    "established": 1906,
    "accreditation": "NAAC A++",
    "naacGrade": "A++",
    "affiliations": ["UGC", "AICTE", "AIU"],
    "recognition": ["UGC", "AICTE", "Ministry of Education", "Government of West Bengal"],
    "location": {
        "city": "Kolkata",
        "state": "West Bengal",
        "country": "India",
        "pincode": "700032",
        "campusSize": "93.6 acres",
        "campusType": "urban",
        "latitude": 22.4996,
        "longitude": 88.3712,
        "address": "188, Raja Subodh Chandra Mallick Rd, Jadavpur, Kolkata, West Bengal 700032"
    },
    "fees": {
        "annual": 2400,
        "total": 9600,
        "hostel": 9000,
        "mess": 25000,
        "otherCharges": 1000,
        "scholarshipAvailable": true,
        "scholarshipDetails": [
            "Swami Vivekananda Merit-cum-Means Scholarship (SVMCM) for West Bengal students",
            "OASIS Scholarship for SC/ST/OBC candidates",
            "National Scholarship Portal (NSP) schemes",
            "Merit-cum-means fee waivers for deserving students",
            "GATE: Monthly stipend of ₹12,400 for M.Tech/ME students"
        ],
        "paymentOptions": [
            "Online Payment (University Portal)",
            "NEFT/RTGS",
            "Demand Draft",
            "Semester Installments"
        ]
    },
    "placement": {
        "averagePackage": 1100000,
        "highestPackage": 18000000,
        "medianPackage": 910000,
        "percentage": 88.70,
        "totalOffers": 830,
        "totalStudents": 936,
        "internationalOffers": 8,
        "dreamOffers": 15,
        "averagePackageTrend": 10,
        "topRecruiters": [
            "Google",
            "Microsoft",
            "Amazon",
            "Adobe",
            "Disney Hotstar",
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant",
            "PwC",
            "Deloitte",
            "HSBC",
            "Visa",
            "Texas Instruments",
            "Cisco",
            "L&T",
            "Tata Motors",
            "ITC Limited",
            "Bose Corporation",
            "DRDO"
        ],
        "recruitmentSectors": [
            "Information Technology",
            "Core Engineering",
            "Consulting",
            "Finance & Banking",
            "Research & Development",
            "Pharmaceuticals",
            "Public Sector"
        ],
        "placementStats": [
            {
                "year": 2025,
                "averagePackage": 1200000,
                "highestPackage": 18000000,
                "percentage": 88.5
            },
            {
                "year": 2024,
                "averagePackage": 1100000,
                "highestPackage": 14000000,
                "percentage": 88.9
            },
            {
                "year": 2023,
                "averagePackage": 1000000,
                "highestPackage": 5800000,
                "percentage": 85.0
            },
            {
                "year": 2022,
                "averagePackage": 950000,
                "highestPackage": 5400000,
                "percentage": 84.0
            }
        ]
    },
    "academics": {
        "coursesOffered": [
            "B.E.",
            "B.Arch",
            "B.Pharm",
            "M.E./M.Tech",
            "M.Pharm",
            "M.Sc",
            "M.A.",
            "MCA",
            "MBA",
            "PhD",
            "Integrated PhD"
        ],
        "popularCourses": [
            "B.E. Computer Science & Engineering",
            "B.E. Information Technology",
            "B.E. Electronics & Telecommunication",
            "B.E. Electrical Engineering",
            "B.E. Mechanical Engineering",
            "B.E. Chemical Engineering"
        ],
        "facultyCount": 934,
        "studentCount": 13351,
        "studentFacultyRatio": "14:1",
        "specialization": [
            "Computer Science & Engineering (Consistently high placements)",
            "Laser Science & Engineering (Unique program)",
            "Metallurgical Engineering",
            "Power Engineering (Salt Lake Campus)",
            "Instrumentation Engineering",
            "Printing Engineering",
            "Construction Engineering",
            "Interdisciplinary Schools (21 schools)"
        ],
        "departments": [
            "Computer Science & Engineering",
            "Information Technology",
            "Electronics & Telecommunication Engineering",
            "Electrical Engineering",
            "Mechanical Engineering",
            "Chemical Engineering",
            "Civil Engineering",
            "Metallurgical Engineering",
            "Power Engineering",
            "Instrumentation Engineering",
            "Printing Engineering",
            "Construction Engineering",
            "Pharmaceutical Technology",
            "Food Technology & Biochemical Engineering",
            "Jute & Fibre Technology",
            "Architecture",
            "Physics",
            "Chemistry",
            "Mathematics",
            "Economics",
            "English",
            "Bengali",
            "History",
            "Political Science",
            "Sociology",
            "International Relations",
            "Business Management"
        ],
        "researchCenters": 50,
        "publications": 2100,
        "collaborations": [
            "CERN (ALICE-INDIA Collaboration)",
            "DRDO (Jagadish Chandra Bose Centre for Advanced Technology)",
            "CSIR",
            "Saha Institute of Nuclear Physics",
            "Bose Institute",
            "Variable Energy Cyclotron Centre (VECC)",
            "Indian Institute of Chemical Biology",
            "S.N. Bose National Centre for Basic Sciences",
            "Max Planck Institute (Germany) - through collaborative projects"
        ],
        "teachingMode": "offline"
    },
    "infrastructure": {
        "library": {
            "name": "Central Library",
            "books": 646296,
            "journals": 1159,
            "digitalResources": 11000,
            "seatingCapacity": 500
        },
        "labs": {
            "count": 70,
            "majorLabs": [
                "Computer Aided Design (CAD) Lab",
                "IC Design and Fabrication Centre",
                "VLSI Design Lab",
                "Laser Science & Engineering Lab",
                "Welding Technology Centre",
                "School of Materials Science & Nanotechnology Lab",
                "DRDO-funded Research Labs",
                "Central Instrumentation Facility"
            ],
            "equipmentValue": 350000000
        },
        "sports": {
            "facilities": [
                "Cricket Ground",
                "Football Ground",
                "Tennis Court",
                "Basketball Court",
                "Badminton Courts",
                "Volleyball Court",
                "Table Tennis Room",
                "Gymnasium",
                "Kabaddi Court"
            ],
            "stadium": false,
            "gym": true,
            "swimmingPool": false
        },
        "hostel": {
            "boys": true,
            "girls": true,
            "capacity": 2500,
            "rooms": 1200,
            "facilities": [
                "Single/Double occupancy rooms",
                "Separate hostels for boys and girls",
                "WiFi connectivity",
                "Common rooms",
                "Indoor games",
                "Laundry service",
                "Medical assistance (University Health Centre)",
                "CCTV security"
            ]
        },
        "wifi": true,
        "cafeteria": 6,
        "medical": true,
        "transportation": true,
        "auditorium": 7
    },
    "admission": {
        "entranceExam": ["WBJEE", "GATE", "JAM", "GPAT", "JECA", "UGC-NET", "CSIR-NET"],
        "cutoff": 150,
        "cutoffTrend": 5,
        "applicationMode": "Online",
        "applicationFee": 500,
        "selectionProcess": [
            "WBJEE Rank for B.E./B.Pharm",
            "GATE Score + Interview/Counseling for M.E./M.Tech",
            "GPAT + Interview for M.Pharm",
            "JECA for MCA",
            "University Entrance Test for some PG courses"
        ],
        "eligibility": {
            "minPercentage": 75,
            "subjectsRequired": ["Physics", "Chemistry", "Mathematics"],
            "ageLimit": 25
        },
        "importantDates": {
            "applicationStart": "February 1, 2026",
            "applicationEnd": "March 31, 2026",
            "examDate": "April 28, 2026",
            "resultDate": "May 30, 2026",
            "counsellingStart": "June 15, 2026",
            "counsellingEnd": "July 30, 2026"
        },
        "documentsRequired": [
            "10th Marksheet",
            "12th Marksheet",
            "WBJEE Scorecard",
            "Category Certificate",
            "Income Certificate (for Fee Waiver)",
            "Domicile Certificate",
            "Medical Fitness Certificate",
            "Migration Certificate"
        ]
    },
    "campusLife": {
        "clubs": [
            "Programming Club",
            "Robotics Club",
            "E-Cell",
            "Electronics Club",
            "Music Club",
            "Dance Club",
            "Dramatics Society",
            "Photography Club",
            "Debating Society",
            "Quizzing Club",
            "Film Society"
        ],
        "festivals": [
            "Technovation (Annual Techno-Management Festival)",
            "Srijan (Annual Cultural Festival)",
            "Cognitio (Departmental Fests)"
        ],
        "technicalEvents": [
            "Hackathons",
            "Coding Competitions",
            "Robowars",
            "Research Conclave",
            "Industry-Academia Meets"
        ],
        "culturalEvents": [
            "Pro Shows (Celebrity nights)",
            "Dance & Music Competitions",
            "Drama Fest",
            "Fashion Show",
            "Literary Events",
            "Open Air Theatre performances"
        ],
        "socialInitiatives": [
            "National Service Scheme (NSS)",
            "National Cadet Corps (NCC)",
            "Teach for India",
            "Sustainability Cell",
            "Blood Donation Camps"
        ],
        "annualBudget": 35000000
    },
    "faculty": {
        "total": 934,
        "phdHolders": 820,
        "professor": 300,
        "associateProfessor": 280,
        "assistantProfessor": 354,
        "industryExperience": 8,
        "internationalFaculty": 30,
        "awards": [
            "Shanti Swarup Bhatnagar Prize",
            "J.C. Bose Fellowship",
            "Ramanujan Fellowship",
            "Swarnajayanti Fellowship",
            "Young Scientist Award",
            "Commonwealth Fellowship",
            "DAAD Fellowship",
            "Humboldt Fellowship"
        ]
    },
    "alumni": {
        "notableAlumni": [
            {
                "name": "Rajat Taneja",
                "designation": "Executive Vice President, Technology and Operations",
                "company": "Visa Inc."
            },
            {
                "name": "Subir Raha",
                "designation": "Promoter-CEO",
                "company": "Team Raha Ideation Private Limited"
            },
            {
                "name": "Anupam Roy",
                "designation": "Singer, Songwriter, Music Director",
                "company": "Bengali Film Industry"
            },
            {
                "name": "Shyamal Bhattacharya",
                "designation": "Chief Technology Officer",
                "company": "PricewaterhouseCoopers"
            },
            {
                "name": "Sameer Marwa",
                "designation": "Asst. Vice President Strategy, Innovation and Solutions",
                "company": "AT&T"
            },
            {
                "name": "Sumit Dutta",
                "designation": "Country Manager and Chief Executive",
                "company": "HSBC India"
            },
            {
                "name": "Tanushree Mallick",
                "designation": "CEO",
                "company": "Various Corporates"
            },
            {
                "name": "Debabrata Goswami",
                "designation": "Professor",
                "company": "Indian Institute of Science"
            }
        ],
        "placementCompanies": [
            "Google",
            "Microsoft",
            "Amazon",
            "Adobe",
            "Visa",
            "HSBC"
        ],
        "networkStrength": 85
    },
    "international": {
        "collaborations": 20,
        "studentExchange": true,
        "facultyExchange": true,
        "partnerUniversities": [
            "CERN (Switzerland)",
            "Max Planck Institute (Germany)",
            "University of Liberal Arts Bangladesh",
            "KU Leuven (Belgium)"
        ],
        "foreignStudents": 120
    },
    "contact": {
        "phone": [
            "+91-33-2414-6666",
            "+91-33-2414-6902"
        ],
        "email": [
            "registrar@jadavpuruniversity.in",
            "dean.fet@jadavpuruniversity.in",
            "placement@jadavpuruniversity.in",
            "admission@jadavpuruniversity.in"
        ],
        "website": "https://jadavpuruniversity.in",
        "socialMedia": {
            "facebook": "https://facebook.com/jadavpur.university",
            "twitter": "https://twitter.com/jadavpuruni",
            "linkedin": "https://linkedin.com/school/jadavpur-university",
            "instagram": "https://instagram.com/jadavpur_university",
            "youtube": "https://youtube.com/JadavpurUniversity"
        },
        "admissionContact": {
            "phone": "+91-33-2414-6666",
            "email": "admission@jadavpuruniversity.in"
        }
    },
    "facilities": [
        "60-acre main campus in South Kolkata",
        "26-acre Salt Lake campus for specialized engineering",
        "7.6-acre West Annexe campus for research (DRDO collaboration)",
        "7 well-equipped auditoriums",
        "Open Air Theatre with 3000 seating capacity",
        "Central Library with over 6.4 lakh books",
        "High-speed WiFi campus",
        "State-of-the-art gymnasium",
        "24x7 Medical clinic (University Health Centre)",
        "Banking complex and post office",
        "Shopping center and multiple canteens",
        "Guest houses and Day Care Centre",
        "Sports complex with multiple courts",
        "Technology Bhawan (under construction)"
    ],
    "achievements": [
        "Ranked #1 in NIRF State Public University category 2025",
        "Ranked #9 among all Universities in India by NIRF 2025",
        "Experimental High Energy Physics Group part of CERN ALICE-INDIA Collaboration, shared 2025 Breakthrough Prize in Fundamental Physics ",
        "Top-ranked university in India by Nature Index for research output (2023-2024) ",
        "NAAC A++ grade with CGPA 3.46 ",
        "NBA accreditation for CSE, ETCE (6 years) and IT, IEE, PE (3 years) ",
        "One of the most affordable top-tier engineering education in India (₹2,400 per year tuition)",
        "Record-breaking highest package of ₹1.8 crore in 2025",
        "Recognized by UGC as an institute with 'Potential for Excellence' "
    ],
    "newsUpdates": [
        {
            "title": "Jadavpur University tops NIRF 2025 State Public University rankings",
            "date": "2025-09-04",
            "link": "https://education.economictimes.indiatimes.com/news/higher-education/jadavpur-university-tops-nirf-rankings-for-state-universities-cm-banerjee-lauds-teachers-students/123709838"
        },
        {
            "title": "Jadavpur University CSE student receives ₹1.8 crore package in 2025 placements",
            "date": "2025-07-14",
            "link": "https://www.vedantu.com/university/jadavpur-university-kolkata-placement"
        },
        {
            "title": "JU's CERN team shares 2025 Breakthrough Prize in Fundamental Physics",
            "date": "2025-04-10",
            "link": "https://jadavpuruniversity.in/about/facilities/"
        }
    ],
    "gallery": [
        {
            "type": "campus",
            "url": "/gallery/ju-campus1.jpg",
            "caption": "Jadavpur University Main Gate (Gate 4)"
        },
        {
            "type": "campus",
            "url": "/gallery/ju-campus2.jpg",
            "caption": "Arts Faculty Building"
        },
        {
            "type": "lab",
            "url": "/gallery/ju-lab1.jpg",
            "caption": "School of Laser Science & Engineering"
        },
        {
            "type": "sports",
            "url": "/gallery/ju-sports1.jpg",
            "caption": "JU Sports Ground"
        },
        {
            "type": "hostel",
            "url": "/gallery/ju-hostel1.jpg",
            "caption": "Boys' Hostel"
        },
        {
            "type": "event",
            "url": "/gallery/ju-event1.jpg",
            "caption": "Srijan - Cultural Festival"
        }
    ],
    "faqs": [
        {
            "question": "Is Jadavpur University a government or private university?",
            "answer": "Jadavpur University is a public state university, funded and run by the Government of West Bengal. It is recognized by the UGC and AICTE, and holds the prestigious 'Institute of National Importance' status in terms of its legacy and impact, though it is officially categorized as a State University ."
        },
        {
            "question": "What is the highest package at Jadavpur University in 2025?",
            "answer": "The highest package in 2025 is ₹1.8 crore per annum, offered to a student from the Computer Science and Engineering (CSE) branch. The highest international package in 2024 was ₹1.4 crore ."
        },
        {
            "question": "What is the average package at Jadavpur University for CSE?",
            "answer": "The average package for CSE students is approximately ₹12-21 LPA, with the overall university average being around ₹11-12 LPA in 2025. The CSE department consistently achieves 100% placement ."
        },
        {
            "question": "What is the WBJEE cutoff for Jadavpur University?",
            "answer": "For 2025, the cutoff rank for CSE is typically under 150, IT under 300, Electronics under 500, Electrical under 800, and Mechanical under 1200 (General category West Bengal domicile). Cutoffs vary slightly each year based on exam difficulty and applicant pool."
        },
        {
            "question": "What is the campus size of Jadavpur University?",
            "answer": "Jadavpur University operates across multiple campuses: the main campus at Jadavpur is 60 acres, the Salt Lake campus (Bidhannagar) is 26 acres, and the West Annexe campus (research hub) is 7.6 acres, totaling approximately 93.6 acres ."
        },
        {
            "question": "Is Jadavpur University better than IITs or NITs?",
            "answer": "While IITs have a stronger national brand, Jadavpur University CSE is widely considered better than many new IITs and most NITs due to its excellent faculty, consistent top-10 university ranking, strong alumni network, and unbeatable ROI with extremely low fees (₹2,400/year). It offers quality education at a fraction of the cost ."
        },
        {
            "question": "What is unique about Jadavpur University's curriculum?",
            "answer": "JU offers a flexible interdisciplinary curriculum through its 21 Schools of interdisciplinary studies. Students can pursue research across traditional boundaries, with access to 50+ research centers. The university has strong industry-academia collaboration, including a dedicated DRDO research centre on campus ."
        },
        {
            "question": "What are the research achievements of Jadavpur University?",
            "answer": "JU is the top-ranked university in India by the Nature Index for research output. Its Experimental High Energy Physics Group is part of the CERN ALICE-INDIA Collaboration, which shared the 2025 Breakthrough Prize in Fundamental Physics. The university has 50+ research centers and collaborations with top national labs like DRDO, CSIR, and Bose Institute ."
        },
        {
            "question": "Who are the top recruiters for core engineering branches?",
            "answer": "For core branches, top recruiters include Texas Instruments, Cisco, L&T, Tata Motors, ITC Limited, Bosch, and various PSUs. The university has strong legacy departments in Chemical, Mechanical, Electrical, and Metallurgical Engineering with dedicated recruitment drives ."
        },
        {
            "question": "What is the fee structure at Jadavpur University?",
            "answer": "Jadavpur University offers one of the most affordable quality education in India. The B.E. tuition fee is approximately ₹2,400 per year, with total course fees around ₹9,600. Hostel fees are around ₹9,000 annually, and mess charges approximately ₹25,000. Generous scholarships are available for eligible students ."
        }
    ]
},
{
    "id": "1202",
    "slug": "delhi-technological-university",
    "name": "Delhi Technological University",
    "shortName": "DTU",
    "tagline": "नव चेतना, नव निर्माण (New Consciousness, New Construction)",
    "overview": "Delhi's premier engineering university, formerly Delhi College of Engineering (DCE), established in 1941. Ranked #30 in NIRF Engineering 2025, DTU is known for its excellent placements with a median package of ₹13 LPA and a vibrant 164-acre campus in Rohini, Delhi [citation:1][citation:2][citation:5].",
    "description": "Delhi Technological University (DTU), established in 1941 as Delhi Polytechnic and later renamed Delhi College of Engineering (DCE), is one of India's oldest and most prestigious engineering institutions. It was converted to a university in 2009 under the Delhi Act 6 of 2009 and is now a non-affiliating teaching and research university funded by the Government of NCT of Delhi [citation:7][citation:8]. Spread across a sprawling 164-acre campus in Rohini, North-West Delhi, DTU combines an 80+ year legacy with modern infrastructure and cutting-edge research facilities [citation:1][citation:5][citation:8]. The university is accredited with 'A+' Grade (CGPA 3.47 out of 4.0) by NAAC and is ISO 9001:2015 certified [citation:7]. With over 12,800 students and 306 faculty members, DTU offers a diverse and inclusive environment with 70% of students hailing from outside Delhi [citation:1][citation:5]. The university has two campuses: the main 164-acre campus in Rohini and the East Delhi Campus in Vivek Vihar, which focuses on management and entrepreneurship programs [citation:8]. DTU is particularly renowned for its strong industry connections, excellent placement record, and vibrant student life with over 50 technical, cultural, and literary societies [citation:8].",
    "logo": "/logos/dtu.png",
    "stream": "engineering",
    "type": "semi",
    "category": "tier1",
    "ranking": 30,
    "rating": 4.2,
    "nirfRank": 30,
    "googleRating": 4.1,
    "reviews": {
        "count": 4200,
        "average": 4.2,
        "academics": 4.0,
        "infrastructure": 4.2,
        "placement": 4.5,
        "faculty": 4.1
    },
    "established": 1941,
    "accreditation": "NAAC A+",
    "naacGrade": "A+",
    "affiliations": ["UGC", "AICTE", "Government of NCT of Delhi"],
    "recognition": ["UGC", "AICTE", "NAAC", "Ministry of Education", "Government of NCT of Delhi"],
    "location": {
        "city": "Delhi",
        "state": "Delhi",
        "country": "India",
        "pincode": "110042",
        "campusSize": "164 acres",
        "campusType": "urban",
        "latitude": 28.7495,
        "longitude": 77.1175,
        "address": "Delhi Technological University, Shahbad Daulatpur, Main Bawana Road, Delhi - 110042"
    },
    "fees": {
        "annual": 204000,
        "total": 896000,
        "hostel": 56000,
        "mess": 34800,
        "otherCharges": 81700,
        "scholarshipAvailable": true,
        "scholarshipDetails": [
            "Top Class Education Scheme for SC/ST students",
            "Post Matric Scholarship for SC/ST/OBC candidates",
            "Central Sector Scholarship Scheme for meritorious students",
            "Merit-based institutional freeships",
            "Financial assistance for students from low-income groups",
            "Delhi Government scholarships",
            "GATE stipends for M.Tech students"
        ],
        "paymentOptions": [
            "Online Payment (University ERP Portal)",
            "NEFT/RTGS",
            "Credit Card/Debit Card",
            "Demand Draft"
        ]
    },
    "placement": {
        "averagePackage": 1545000,
        "highestPackage": 8530000,
        "medianPackage": 1300000,
        "percentage": 100,
        "totalOffers": 246,
        "totalStudents": 300,
        "internationalOffers": 15,
        "dreamOffers": 30,
        "averagePackageTrend": 21,
        "topRecruiters": [
            "Google",
            "Microsoft",
            "Amazon",
            "Flipkart",
            "Goldman Sachs",
            "Texas Instruments",
            "Qualcomm",
            "Cisco",
            "Adobe",
            "Uber",
            "Ola",
            "TCS",
            "Infosys",
            "Wipro",
            "Cognizant",
            "Deloitte",
            "PwC",
            "KPMG",
            "Bajaj Auto",
            "Tata Motors",
            "Maruti Suzuki",
            "L&T",
            "Samsung",
            "Intel",
            "Oracle",
            "IBM",
            "HCL",
            "NVIDIA",
            "Atlassian",
            "Apple"
        ],
        "recruitmentSectors": [
            "Information Technology",
            "Product Management",
            "Quantitative Finance",
            "Consulting",
            "Core Engineering",
            "Research & Development",
            "Analytics",
            "Fintech",
            "Automobile",
            "Manufacturing"
        ],
        "placementStats": [
            {
                "year": 2025,
                "averagePackage": 1545000,
                "highestPackage": 8530000,
                "percentage": 100
            },
            {
                "year": 2024,
                "averagePackage": 1545000,
                "highestPackage": 8530000,
                "percentage": 69.5
            },
            {
                "year": 2023,
                "averagePackage": 1617000,
                "highestPackage": 8200000,
                "percentage": 69.2
            },
            {
                "year": 2022,
                "averagePackage": 1537000,
                "highestPackage": 18400000,
                "percentage": 73.0
            }
        ]
    },
    "academics": {
        "coursesOffered": [
            "B.Tech",
            "B.Des",
            "BBA",
            "BA Economics (Hons)",
            "M.Tech",
            "MBA",
            "M.Des",
            "M.Sc",
            "PhD",
            "Integrated Dual Degree"
        ],
        "popularCourses": [
            "B.Tech Computer Science & Engineering",
            "B.Tech Information Technology",
            "B.Tech Electronics & Communication Engineering",
            "B.Tech Mechanical Engineering",
            "B.Tech Electrical Engineering",
            "B.Tech Software Engineering",
            "B.Tech Mathematics & Computing",
            "MBA (Delhi School of Management)"
        ],
        "facultyCount": 306,
        "studentCount": 12850,
        "studentFacultyRatio": "42:1",
        "specialization": [
            "Computer Science & Engineering (Highest placements)",
            "Information Technology",
            "Electronics & Communication Engineering",
            "Mechanical Engineering",
            "Electrical Engineering",
            "Software Engineering",
            "Mathematics & Computing",
            "Biotechnology",
            "Environmental Engineering",
            "Production & Industrial Engineering"
        ],
        "departments": [
            "Applied Chemistry",
            "Applied Mathematics",
            "Applied Physics",
            "Biotechnology",
            "Civil Engineering",
            "Computer Science & Engineering",
            "Delhi School of Management",
            "Electrical Engineering",
            "Electronics & Communication Engineering",
            "Environmental Engineering",
            "Humanities",
            "Information Technology",
            "Mechanical Engineering",
            "Polymer Science & Engineering",
            "Production & Industrial Engineering",
            "Software Engineering",
            "Management Studies",
            "Design"
        ],
        "researchCenters": 15,
        "publications": 1500,
        "collaborations": [
            "ISRO",
            "DRDO",
            "BHEL",
            "Infosys",
            "IBM",
            "Samsung (Innovation Lab)",
            "University of Alberta (Canada)",
            "Ryerson University (Canada)",
            "Technical University of Munich (Germany)",
            "Cranfield University (UK)",
            "University of Johannesburg (South Africa)"
        ],
        "teachingMode": "offline"
    },
    "infrastructure": {
        "library": {
            "name": "Central Library",
            "books": 150000,
            "journals": 15000,
            "digitalResources": 20000,
            "seatingCapacity": 500
        },
        "labs": {
            "count": 60,
            "majorLabs": [
                "EDUSAT Studio for lecture recording",
                "VLSI Design Lab",
                "Robotics Lab",
                "Advanced Manufacturing Lab",
                "CAD/CAM Lab",
                "Biotechnology Research Lab",
                "Environmental Engineering Lab",
                "Samsung Innovation Lab",
                "Central Instrumentation Facility",
                "200+ Dell Computer Systems with CAD workstations"
            ],
            "equipmentValue": 400000000
        },
        "sports": {
            "facilities": [
                "450m Athletic Track",
                "Football Ground",
                "Cricket Ground",
                "Hockey Ground",
                "Tennis Court (3 courts)",
                "Basketball Court (2 courts)",
                "Volleyball Court (2 courts)",
                "Badminton Court (5 courts)",
                "Table Tennis Room",
                "Gymnasium (ultra-modern with digital treadmills)"
            ],
            "stadium": false,
            "gym": true,
            "swimmingPool": false
        },
        "hostel": {
            "boys": true,
            "girls": true,
            "capacity": 2600,
            "rooms": 1300,
            "facilities": [
                "13 Hostels (10 Boys, 3 Girls)",
                "AC hostels available",
                "Wi-Fi enabled campus",
                "Common rooms with TV",
                "Gymnasium in every hostel",
                "Magazines and newspapers subscription",
                "Mess services",
                "CCTV security",
                "24/7 medical assistance (20-bed hospital block)",
                "Bhaskaracharya Hostel",
                "Sir C.V. Raman Hostel",
                "Sir J.C. Bose Hostel",
                "Varahmihir Hostel",
                "Sir Vishveshwarya Hostel",
                "Homi Jehangir Bhabha Hostel",
                "Aryabhatt Hostel",
                "Ramanujan Hostel",
                "Dr. APJ Abdul Kalam Hostel (AC)",
                "Sister Nivedita Hostel (Girls)",
                "Kalpana Chawla Hostel (Girls)"
            ]
        },
        "wifi": true,
        "cafeteria": 6,
        "medical": true,
        "transportation": true,
        "auditorium": 2
    },
    "admission": {
        "entranceExam": ["JEE Main", "GATE", "CUET PG", "UCEED", "CEED", "CAT"],
        "cutoff": 1400,
        "cutoffTrend": 5,
        "applicationMode": "Online",
        "applicationFee": 1500,
        "selectionProcess": [
            "JEE Main Score + JAC Delhi Counseling for B.Tech [citation:1][citation:5]",
            "UCEED Score + Interview for B.Des [citation:1]",
            "12th Merit for BBA/BA Economics [citation:1]",
            "GATE Score + Counseling for M.Tech [citation:1]",
            "CAT Score + GD/PI for MBA [citation:7]",
            "CEED Score + Interview for M.Des [citation:1]",
            "CUET PG for M.Sc [citation:1]",
            "Entrance Test + Interview for PhD [citation:1]"
        ],
        "eligibility": {
            "minPercentage": 60,
            "subjectsRequired": ["Physics", "Chemistry", "Mathematics"],
            "ageLimit": 25
        },
        "importantDates": {
            "applicationStart": "February 1, 2026",
            "applicationEnd": "March 31, 2026",
            "examDate": "May 1, 2026",
            "resultDate": "June 15, 2026",
            "counsellingStart": "June 20, 2026",
            "counsellingEnd": "July 30, 2026"
        },
        "documentsRequired": [
            "10th Marksheet",
            "12th Marksheet",
            "JEE Main Scorecard",
            "Category Certificate",
            "Income Certificate (for Fee Waiver)",
            "Domicile Certificate",
            "Medical Fitness Certificate",
            "Migration Certificate",
            "Passport size photographs"
        ]
    },
    "campusLife": {
        "clubs": [
            "Programming Club",
            "Robotics Club",
            "E-Cell (Entrepreneurship Cell)",
            "Electronics Club",
            "Music Club",
            "Dance Club",
            "Dramatics Society",
            "Photography Club",
            "Debating Society",
            "Quizzing Club",
            "Film Society",
            "Fine Arts Club",
            "Literary Society",
            "Spic Macay (Indian Classical Music)"
        ],
        "festivals": [
            "Invictus (Annual Technical Festival) [citation:8]",
            "Engifest (Annual Cultural Festival) [citation:8]",
            "Yuvaan (Literary Festival) [citation:8]",
            "Aarambh (Freshers' Welcome) [citation:8]",
            "Sanedo (Cultural Extravaganza) [citation:8]"
        ],
        "technicalEvents": [
            "Execute Hackathon [citation:8]",
            "Coding Competitions",
            "Robotics Challenge",
            "Cryptic Hunts",
            "Guesstimates",
            "Designing Competitions",
            "Quizzes",
            "Case Study Competitions"
        ],
        "culturalEvents": [
            "Pro Shows (Celebrity nights)",
            "Dance & Music Competitions",
            "Drama Fest",
            "Fashion Show",
            "Literary Events",
            "Slam Poetry",
            "Kavi Sammelan",
            "Sufi Sangeet",
            "Dandiya Night"
        ],
        "socialInitiatives": [
            "National Service Scheme (NSS)",
            "National Cadet Corps (NCC)",
            "Blood Connect (Blood Donation Camps)",
            "Sustainability Cell",
            "Teach for Delhi",
            "Swachhata Drives"
        ],
        "annualBudget": 45000000
    },
    "faculty": {
        "total": 306,
        "phdHolders": 250,
        "professor": 100,
        "associateProfessor": 90,
        "assistantProfessor": 116,
        "industryExperience": 12,
        "internationalFaculty": 15,
        "awards": [
            "Young Scientist Award",
            "SERB Distinguished Fellowship",
            "Ramanujan Fellowship",
            "DAAD Fellowship",
            "Commonwealth Fellowship",
            "Humboldt Fellowship",
            "Best Teacher Award from Government of NCT Delhi"
        ]
    },
    "alumni": {
        "notableAlumni": [
            {
                "name": "Rajeev Suri",
                "designation": "Former CEO",
                "company": "Nokia"
            },
            {
                "name": "Vineet Nayar",
                "designation": "Former CEO",
                "company": "HCL Technologies"
            },
            {
                "name": "Sanjeev Bikhchandani",
                "designation": "Founder",
                "company": "Info Edge (Naukri.com)"
            },
            {
                "name": "Rakesh Sharma",
                "designation": "Vice Chairman",
                "company": "Adobe"
            },
            {
                "name": "Anant Maheshwari",
                "designation": "President",
                "company": "Microsoft India"
            },
            {
                "name": "Rajesh Gopinathan",
                "designation": "Former CEO & MD",
                "company": "TCS"
            },
            {
                "name": "Pawan Munjal",
                "designation": "Chairman & CEO",
                "company": "Hero MotoCorp"
            },
            {
                "name": "Ajay Relan",
                "designation": "Managing Partner",
                "company": "CX Partners"
            },
            {
                "name": "Saurabh Srivastava",
                "designation": "Co-founder",
                "company": "Indian Angel Network"
            }
        ],
        "placementCompanies": [
            "Google",
            "Microsoft",
            "Amazon",
            "Goldman Sachs",
            "Texas Instruments",
            "Adobe",
            "Flipkart",
            "Uber",
            "Atlassian",
            "Apple"
        ],
        "networkStrength": 92
    },
    "international": {
        "collaborations": 25,
        "studentExchange": true,
        "facultyExchange": true,
        "partnerUniversities": [
            "University of Alberta (Canada)",
            "Ryerson University (Canada)",
            "Technical University of Munich (Germany)",
            "Cranfield University (UK)",
            "University of Johannesburg (South Africa)",
            "University of Melbourne (Australia)"
        ],
        "foreignStudents": 150
    },
    "contact": {
        "phone": [
            "+91-11-27871018",
            "+91-11-27871023"
        ],
        "email": [
            "registrar@dtu.ac.in",
            "admission@dtu.ac.in",
            "placement@dtu.ac.in",
            "dean.ia@dtu.ac.in"
        ],
        "website": "https://www.dtu.ac.in",
        "socialMedia": {
            "facebook": "https://facebook.com/dtu.delhi",
            "twitter": "https://twitter.com/dtu_delhi",
            "linkedin": "https://linkedin.com/school/delhi-technological-university",
            "instagram": "https://instagram.com/dtu_delhi",
            "youtube": "https://youtube.com/DTUDelhi"
        },
        "admissionContact": {
            "phone": "+91-11-27871018",
            "email": "admission@dtu.ac.in"
        }
    },
    "facilities": [
        "164-acre lush green campus in Rohini, Delhi [citation:1][citation:5][citation:8]",
        "East Delhi Campus at Vivek Vihar for management programs [citation:8]",
        "Central Library with 1.5 lakh+ books and digital resources [citation:7]",
        "EDUSAT Studio for recording lectures and events [citation:8]",
        "20-bed hospital block with full-time medical practitioners [citation:7]",
        "13 Hostels (10 Boys, 3 Girls) with capacity of 2600 students [citation:5][citation:7]",
        "Ultra-modern gymnasium with digital electronic treadmills",
        "Sports complex with 450m track, multiple courts",
        "Wi-Fi enabled campus with 95+ access points [citation:7]",
        "State Bank of India branch and ATM on campus",
        "Post office within campus",
        "Guest house for visitors",
        "500-seat auditorium",
        "Multiple canteens and convenience stores",
        "Samsung Innovation Lab [citation:3]",
        "Computer centre with 200+ Dell systems and servers"
    ],
    "achievements": [
        "Ranked #30 in NIRF Engineering Rankings 2025 [citation:2][citation:6]",
        "Ranked #42 in NIRF University category 2025 [citation:2]",
        "Ranked #9 by India Today under Engineering category 2025 [citation:2]",
        "NAAC 'A+' Grade accredited institution [citation:7]",
        "ISO 9001:2015 Certified Institution [citation:7]",
        "100% placement rate for eligible students in 2025 [citation:1][citation:5]",
        "21.12% increase in median salary to ₹13 LPA in 2025 [citation:5]",
        "One of India's oldest engineering institutions (established 1941 as Delhi Polytechnic) [citation:7]",
        "Highest domestic package of ₹85.30 LPA offered by Atlassian [citation:6]",
        "Alumni network with global leaders including CEOs of Nokia, HCL, and founders of Naukri.com",
        "Over 50 student societies and clubs for holistic development [citation:8]",
        "70% students from outside Delhi, creating diverse campus culture [citation:5]",
        "Ranked 700 in QS Asian University Rankings 2026 [citation:2][citation:6]"
    ],
    "newsUpdates": [
        {
            "title": "Samsung to set up innovation lab at DTU through MoU for collaborative projects",
            "date": "2026-02-04",
            "link": "https://gadgetsnow.indiatimes.com/topic/DTU/news"
        },
        {
            "title": "Delhi boy gets Rs 1.27 crore offer from Google, setting new international placement record for DTU",
            "date": "2026-02-04",
            "link": "https://gadgetsnow.indiatimes.com/topic/DTU/news"
        },
        {
            "title": "DTU achieves 100% placements with median package of ₹13 LPA in 2025",
            "date": "2025-07-14",
            "link": "https://www.vedantu.com/university/dtu-delhi-technological-university"
        },
        {
            "title": "DTU ranked 30th in NIRF Engineering 2025",
            "date": "2025-09-04",
            "link": "https://ask.shiksha.com/what-is-the-dtu-rank-qna-12548596"
        }
    ],
    "gallery": [
        {
            "type": "campus",
            "url": "/gallery/dtu-campus1.jpg",
            "caption": "DTU Main Building - Administrative Block"
        },
        {
            "type": "campus",
            "url": "/gallery/dtu-campus2.jpg",
            "caption": "DTU Academic Complex"
        },
        {
            "type": "lab",
            "url": "/gallery/dtu-lab1.jpg",
            "caption": "Computer Science Engineering Lab"
        },
        {
            "type": "sports",
            "url": "/gallery/dtu-sports1.jpg",
            "caption": "DTU Cricket Ground and Sports Complex"
        },
        {
            "type": "hostel",
            "url": "/gallery/dtu-hostel1.jpg",
            "caption": "Boys' Hostel - Aryabhatt Hostel"
        },
        {
            "type": "event",
            "url": "/gallery/dtu-event1.jpg",
            "caption": "Engifest - Annual Cultural Festival"
        },
        
        {
            "type": "hostel",
            "url": "/gallery/dtu-hostel2.jpg",
            "caption": "Girls' Hostel - Kalpana Chawla Hostel"
        }
    ],
    "faqs": [
        {
            "question": "Is DTU a government or private university?",
            "answer": "Delhi Technological University (DTU) is a government university, established by the Government of NCT of Delhi under the Delhi Act 6 of 2009. It is fully recognized by UGC and AICTE, and is one of India's premier public technical universities [citation:5][citation:7]."
        },
        {
            "question": "What is the highest package at DTU?",
            "answer": "The highest domestic package at DTU in recent years is ₹85.30 Lakh per annum, offered by Atlassian. The highest international package has reached ₹1.8 Crore per annum (offered by Palantir London in 2022) and ₹1.27 Crore (offered by Google in recent placements) [citation:3][citation:6]."
        },
        {
            "question": "What is the average package at DTU?",
            "answer": "As of 2025, the median package at DTU stands at ₹13 Lakh per annum, reflecting a 21.12% increase from previous years. For top branches like CSE and IT, the average package ranges from ₹17-24 LPA [citation:5][citation:6]."
        },
        {
            "question": "What is the JEE Main cutoff for DTU?",
            "answer": "For 2023, the cutoff ranks (JEE Main AIR) for top branches were approximately: CSE closing rank around 1,800, IT around 3,800, ECE around 6,000 for General category students. Cutoffs vary by category and change yearly based on competition [citation:7]."
        },
        {
            "question": "What is the campus size of DTU?",
            "answer": "DTU's main campus in Rohini spans 164 acres of lush green area. The university also has an East Delhi Campus in Vivek Vihar, Phase II, which has been functional since 2017 for management and entrepreneurship programs [citation:1][citation:5][citation:8]."
        },
        {
            "question": "Does DTU have hostel facilities?",
            "answer": "Yes, DTU has 13 hostels (10 for boys, 3 for girls) with a total capacity of approximately 2,600 students. Hostels include AC options with varying fees. Each hostel has Wi-Fi, common rooms, gymnasium, and 24/7 security [citation:6][citation:7]."
        },
        {
            "question": "Is DTU better than IIT?",
            "answer": "IITs generally rank higher nationally and internationally regarding research output, faculty, and global reputation. However, DTU's CSE and IT branches have placement statistics comparable to some IITs, especially for software roles. DTU offers excellent ROI with affordable fees compared to private institutions, making it a top choice after IITs in India [citation:1][citation:5]."
        },
        {
            "question": "What is the fee structure for B.Tech at DTU?",
            "answer": "The B.Tech tuition fee at DTU is approximately ₹2,04,000 per year, with total fees for the 4-year program around ₹8-9 lakhs. Hostel and mess charges are additional (approximately ₹52,000-72,000 per year for hostel and ₹34,800 for mess) [citation:6][citation:7]."
        },
        {
            "question": "What are the top recruiting companies at DTU?",
            "answer": "Top recruiters at DTU include Google, Microsoft, Amazon, Flipkart, Goldman Sachs, Texas Instruments, Qualcomm, Cisco, Adobe, Uber, Ola, TCS, Infosys, Wipro, Deloitte, PwC, Bajaj Auto, Tata Motors, Maruti Suzuki, L&T, Samsung, Intel, Oracle, IBM, HCL, NVIDIA, Atlassian, and Apple [citation:6][citation:7]."
        },
        {
            "question": "Does DTU offer MBA programs?",
            "answer": "Yes, DTU offers MBA programs through the Delhi School of Management at the East Delhi Campus (Vivek Vihar). The total fees for the 2-year MBA program is approximately ₹3.8-4.0 lakhs. Admission is based on CAT scores followed by Group Discussion and Personal Interview [citation:7]."
        },
        {
            "question": "What is the student diversity at DTU?",
            "answer": "DTU has a highly diverse student body with approximately 70% of students hailing from outside Delhi. The gender ratio is 76% male and 24% female. The university has over 12,800 students enrolled in undergraduate, postgraduate, and doctoral programs [citation:1][citation:5]."
        },
        {
            "question": "What are the major fests at DTU?",
            "answer": "DTU hosts several major festivals: Invictus (annual technical festival in February), Engifest (annual cultural festival in February), Yuvaan (literary festival in November), Aarambh (freshers' welcome in August), and Sanedo (cultural extravaganza in October) [citation:8]."
        }
    ]
},
{
    "id": "1203",
    "slug": "netaji-subhas-university-of-technology",
    "name": "Netaji Subhas University of Technology",
    "shortName": "NSUT",
    "tagline": "एक्शन ही मेरा धर्म है (Action is my religion)",
    "overview": "Delhi's premier engineering institution, formerly NSIT, known for its strong industry linkages, consistent NIRF ranking of #8 in Engineering 2025, and a sprawling 145-acre campus in Dwarka. It is a top choice for JEE Main aspirants in the capital.",
    "description": "Netaji Subhas University of Technology (NSUT), established in 1983 as Delhi Institute of Technology, is a prestigious government institution in the heart of the national capital. Renamed in 2018, NSUT has a rich history of producing industry-ready engineers and technocrats. Spread across a lush green 145-acre campus in Dwarka, the university blends rigorous academics with a vibrant campus life [citation:5]. It is consistently ranked as the #8 engineering college in India by India Today and holds an impressive NAAC A++ grade with a CGPA of 3.62 [citation:1][citation:4]. The university is a hub of innovation, housing the NSUT Incubation and Innovation Foundation (NSUT-IIF), which has been recognized by NITI Aayog for its support of startups [citation:5]. With a strong placement record, the highest package reached ₹65 LPA in 2025, driven by top recruiters from the tech and core sectors [citation:8]. Its strategic location and robust alumni network make it a launchpad for successful careers in engineering and management.",
    "logo": "/logos/nsut-delhi.png",
    "stream": "engineering",
    "type": "semi",
    "category": "tier1",
    "ranking": 8,
    "rating": 4.2,
    "nirfRank": 70,
    "googleRating": 4.1,
    "reviews": {
        "count": 3200,
        "average": 4.2,
        "academics": 4.1,
        "infrastructure": 4.0,
        "placement": 4.3,
        "faculty": 4.0
    },
    "established": 1983,
    "accreditation": "AICTE, NBA, NAAC A++",
    "naacGrade": "A++",
    "affiliations": ["Govt. of NCT of Delhi"],
    "recognition": ["UGC", "AICTE"],
    "location": {
        "city": "New Delhi",
        "state": "Delhi",
        "country": "India",
        "pincode": "110078",
        "campusSize": "145 acres",
        "campusType": "urban",
        "latitude": 28.5901,
        "longitude": 77.0729,
        "address": "Netaji Subhas University of Technology, Azad Hind Fauj Marg, Sector 3, Dwarka, New Delhi, Delhi 110078"
    },
    "fees": {
        "annual": 190000,
        "total": 760000,
        "hostel": 20000,
        "mess": 35000,
        "otherCharges": 5000,
        "scholarshipAvailable": true,
        "scholarshipDetails": [
            "Single Child Girl Child Scholarship (Tuition fee waiver for the entire course)",
            "SC/ST Scholarship (Post Matric) by Government of Delhi",
            "Merit-cum-Means Scholarship for eligible students",
            "GATE: Monthly stipend of ₹12,400 for M.Tech students",
            "Teaching Assistantship for PhD scholars"
        ],
        "paymentOptions": [
            "Online Payment (Institute Portal)",
            "NEFT/RTGS",
            "Demand Draft",
            "Semester-wise Installments"
        ]
    },
    "placement": {
        "averagePackage": 1793000,
        "highestPackage": 65000000,
        "medianPackage": 1400000,
        "percentage": 88.00,
        "totalOffers": 850,
        "totalStudents": 965,
        "internationalOffers": 8,
        "dreamOffers": 30,
        "averagePackageTrend": 15,
        "topRecruiters": [
            "Microsoft",
            "Google",
            "Amazon",
            "Apple",
            "Uber",
            "Goldman Sachs",
            "Deloitte",
            "KPMG",
            "SAP Labs",
            "Flipkart",
            "Zomato",
            "Meesho",
            "Texas Instruments",
            "Qualcomm",
            "Maruti Suzuki",
            "Tata Motors",
            "BHEL",
            "NTPC",
            "Accenture",
            "DE Shaw"
        ],
        "recruitmentSectors": [
            "Information Technology",
            "Quantitative Finance",
            "Core Engineering (VLSI, Embedded)",
            "Consulting",
            "Product Management",
            "Automobile",
            "Public Sector Undertakings (PSUs)",
            "Startups"
        ],
        "placementStats": [
            {
                "year": 2025,
                "averagePackage": 1793000,
                "highestPackage": 65000000,
                "percentage": 88.0
            },
            {
                "year": 2024,
                "averagePackage": 1500000,
                "highestPackage": 62000000,
                "percentage": 87.5
            },
            {
                "year": 2023,
                "averagePackage": 1250000,
                "highestPackage": 45000000,
                "percentage": 86.0
            },
            {
                "year": 2022,
                "averagePackage": 1100000,
                "highestPackage": 42000000,
                "percentage": 85.0
            }
        ]
    },
    "academics": {
        "coursesOffered": [
            "B.Tech",
            "B.Arch",
            "M.Tech",
            "MBA",
            "BBA",
            "M.Sc",
            "PhD",
            "MCA"
        ],
        "popularCourses": [
            "B.Tech Computer Science & Engineering",
            "B.Tech Electronics & Communication Engineering",
            "B.Tech Information Technology",
            "B.Tech Mathematics & Computing",
            "B.Tech Electrical Engineering",
            "M.Tech VLSI Design & Embedded System"
        ],
        "facultyCount": 250,
        "studentCount": 4250,
        "studentFacultyRatio": "17:1",
        "specialization": [
            "VLSI Design & Embedded Systems",
            "Signal Processing",
            "Information Security",
            "Robotics & Automation",
            "Artificial Intelligence & Machine Learning",
            "Biotechnology"
        ],
        "departments": [
            "Computer Science & Engineering",
            "Electronics & Communication Engineering",
            "Electrical Engineering",
            "Mechanical Engineering",
            "Information Technology",
            "Biotechnology",
            "Mathematics",
            "Physics",
            "Chemistry",
            "Humanities & Social Sciences",
            "Management Studies"
        ],
        "researchCenters": 12,
        "publications": 950,
        "collaborations": [
            "NVIDIA (GPU Computing)",
            "Texas Instruments (VLSI Lab)",
            "Maruti Suzuki (Smart Mobility Research Park)",
            "NTPC",
            "BHEL",
            "DRDO",
            "ISRO"
        ],
        "teachingMode": "offline"
    },
    "infrastructure": {
        "library": {
            "name": "Central Library",
            "books": 120000,
            "journals": 8000,
            "digitalResources": 15000,
            "seatingCapacity": 600
        },
        "labs": {
            "count": 45,
            "majorLabs": [
                "Centre for Electronics Design & Technology (CEDT)",
                "NVIDIA GPU Lab",
                "VLSI Design Lab",
                "Robotics & Automation Lab",
                "Advanced Manufacturing Workshop",
                "Language Lab",
                "Computer Centre"
            ],
            "equipmentValue": 250000000
        },
        "sports": {
            "facilities": [
                "Sports Complex",
                "Football Ground",
                "Cricket Ground",
                "Tennis Court",
                "Basketball Court",
                "Badminton Courts",
                "Volleyball Court",
                "Table Tennis Room",
                "Gymnasium",
                "Chess & Carrom Facilities"
            ],
            "stadium": false,
            "gym": true,
            "swimmingPool": false
        },
        "hostel": {
            "boys": true,
            "girls": true,
            "capacity": 2800,
            "rooms": 1400,
            "facilities": [
                "Four Boys' Hostels (BH1-BH4)",
                "Two Girls' Hostels (GH)",
                "Single/Double occupancy rooms",
                "24x7 WiFi",
                "In-premises mess with varied menu",
                "Common rooms with TV",
                "Indoor games (TT, Carrom, Chess)",
                "24x7 power backup",
                "Laundry service",
                "24x7 security with lady guards",
                "Parking lot",
                "Nearby metro station (walking distance)"
            ]
        },
        "wifi": true,
        "cafeteria": 5,
        "medical": true,
        "transportation": true,
        "auditorium": 2
    },
    "admission": {
        "entranceExam": ["JEE Main", "GATE", "IPU CET", "CAT", "CUET"],
        "cutoff": 4889,
        "cutoffTrend": -3,
        "applicationMode": "Online",
        "applicationFee": 1500,
        "selectionProcess": [
            "JEE Main Score for B.Tech",
            "JAC Delhi Counseling",
            "GATE Score for M.Tech",
            "IPU CET for Management Courses",
            "CUET for PhD"
        ],
        "eligibility": {
            "minPercentage": 75,
            "subjectsRequired": ["Physics", "Chemistry", "Mathematics"],
            "ageLimit": 25
        },
        "importantDates": {
            "applicationStart": "May 1, 2026",
            "applicationEnd": "June 15, 2026",
            "examDate": "Already conducted (JEE Main)",
            "resultDate": "April 15, 2026",
            "counsellingStart": "June 20, 2026",
            "counsellingEnd": "July 30, 2026"
        },
        "documentsRequired": [
            "10th Marksheet",
            "12th Marksheet",
            "JEE Main Scorecard",
            "Category Certificate",
            "Income Certificate (if applicable)",
            "Domicile Certificate (for Delhi quota)",
            "Medical Fitness Certificate",
            "Transfer Certificate"
        ]
    },
    "campusLife": {
        "clubs": [
            "IEEE Student Branch",
            "SAE Collegiate Club",
            "ISA (Instrumentation Society of America)",
            "CSI (Computer Society of India)",
            "Robotics Club",
            "Programming Club",
            "E-Cell",
            "Music Society",
            "Dance Society",
            "Dramatics Club",
            "Photography Club",
            "Debating Society",
            "Quiz Club",
            "Astronomy Club"
        ],
        "festivals": [
            "Moksha (Annual Cultural Festival)",
            "TechWardh (Annual Techno-Management Festival)",
            "Spardha (Annual Sports Festival of Hostels)"
        ],
        "technicalEvents": [
            "Hackathons (24-hour coding events)",
            "Robotics Challenges",
            "AI/ML Workshops",
            "Industry Conclaves",
            "NVIDIA GPU Workshops"
        ],
        "culturalEvents": [
            "Pro Shows (Celebrity nights)",
            "Dance & Music Competitions",
            "Street Plays (Nukkad Natak)",
            "Fashion Show (Rampage)",
            "Literary Fest",
            "Delhi Heritage Tours"
        ],
        "socialInitiatives": [
            "National Service Scheme (NSS)",
            "National Cadet Corps (NCC)",
            "Enactus NSUT",
            "Blood Connect",
            "Teach for Delhi"
        ],
        "annualBudget": 25000000
    },
    "faculty": {
        "total": 250,
        "phdHolders": 210,
        "professor": 80,
        "associateProfessor": 70,
        "assistantProfessor": 100,
        "industryExperience": 8,
        "internationalFaculty": 10,
        "awards": [
            "Young Scientist Award",
            "SERB Early Career Research Award",
            "Visiting Professor Fellowships (International)",
            "Best Teacher Award by Government of Delhi"
        ]
    },
    "alumni": {
        "notableAlumni": [
            {
                "name": "Sachin Bansal",
                "designation": "Co-founder",
                "company": "Flipkart"
            },
            {
                "name": "Binny Bansal",
                "designation": "Co-founder",
                "company": "Flipkart"
            },
            {
                "name": "Ritesh Arora",
                "designation": "Co-founder & CEO",
                "company": "BrowserStack"
            },
            {
                "name": "Abhishek Goyal",
                "designation": "Co-founder",
                "company": "Tracxn"
            },
            {
                "name": "Vivek Gupta",
                "designation": "Co-founder",
                "company": "LetsTransport"
            },
            {
                "name": "Ankush Sachdeva",
                "designation": "Co-founder & CEO",
                "company": "ShareChat"
            },
            {
                "name": "Bhanu Pratap Singh",
                "designation": "Co-founder",
                "company": "ShareChat"
            },
            {
                "name": "Farid Ahsan",
                "designation": "Co-founder",
                "company": "ShareChat"
            }
        ],
        "placementCompanies": [
            "Microsoft",
            "Google",
            "Amazon",
            "Apple",
            "Goldman Sachs",
            "Uber"
        ],
        "networkStrength": 92
    },
    "international": {
        "collaborations": 15,
        "studentExchange": true,
        "facultyExchange": true,
        "partnerUniversities": [
            "University of Alberta (Canada)",
            "University of California (USA)",
            "Technical University of Munich (Germany)",
            "Nanyang Technological University (Singapore)"
        ],
        "foreignStudents": 76
    },
    "contact": {
        "phone": [
            "+91-11-25099021",
            "+91-11-25099022"
        ],
        "email": [
            "registrar@nsut.ac.in",
            "admission@nsut.ac.in",
            "placement@nsut.ac.in",
            "info@nsut.ac.in"
        ],
        "website": "https://www.nsut.ac.in",
        "socialMedia": {
            "facebook": "https://facebook.com/nsutdelhi",
            "twitter": "https://twitter.com/nsut_delhi",
            "linkedin": "https://linkedin.com/school/nsut-delhi",
            "instagram": "https://instagram.com/nsut_delhi",
            "youtube": "https://youtube.com/nsutdelhi"
        },
        "admissionContact": {
            "phone": "+91-11-25099021",
            "email": "admission@nsut.ac.in"
        }
    },
    "facilities": [
        "145-acre lush green campus in Dwarka",
        "NSUT Incubation and Innovation Foundation (NSUT-IIF) for startups",
        "Centre for Electronics Design & Technology (CEDT)",
        "NVIDIA GPU Lab for AI/ML research",
        "High-speed WiFi across campus",
        "Modern gymnasium",
        "Medical facility with Physiotherapy & Homeopathy",
        "Two banks & ATM",
        "Post office",
        "Amul milk booth",
        "Shopping complex",
        "Central Library with 1.2L+ books",
        "Rainwater harvesting & sustainability initiatives",
        "Yoga & Meditation Centre",
        "Metro station within walking distance"
    ],
    "achievements": [
        "Ranked #8 by India Today Engineering Rankings 2025 (consistent top 10 for years) [citation:1][citation:4]",
        "NAAC A++ grade with CGPA 3.62 in first accreditation cycle (2024) [citation:1]",
        "Highest domestic package of ₹65 LPA in 2025 (Apple & Google Silicon) [citation:8]",
        "Average package surge to ₹17.93 LPA in 2025 [citation:8]",
        "First prize in 'Institution Supporting Start-ups' by NITI Aayog & AICTE (2017) [citation:5]",
        "Strong alumni network including founders of Flipkart, BrowserStack, ShareChat, Tracxn",
        "NBA accreditation valid till March 2026 [citation:1]",
        "76+ international students enrolled [citation:1]",
        "Strategic location in Delhi's tech hub with excellent industry connections"
    ],
    "newsUpdates": [
        {
            "title": "NSUT achieves record-breaking ₹65 LPA highest package and ₹17.93 LPA average in 2025 placements",
            "date": "2025-09-05",
            "link": "https://www.kollegeapply.com/college/netaji-subhas-university-of-technology-delhi-placement"
        },
        {
            "title": "NSUT maintains 8th rank in India Today Engineering Rankings 2025, NIRF rank at 70",
            "date": "2025-09-04",
            "link": "https://timesofindia.indiatimes.com/education/news/nirf-rankings-2025-iit-delhi-leads-capitals-engineering-colleges"
        },
        {
            "title": "JAC Delhi 2025: NSUT CSE closing rank at 4889 (Round 1)",
            "date": "2025-07-20",
            "link": "https://www.vedantu.com/jee-advanced/top-engineering-colleges-in-delhi"
        }
    ],
    "gallery": [
        {
            "type": "campus",
            "url": "/gallery/nsut-campus1.jpg",
            "caption": "Main Administrative Block - NSUT"
        },
        {
            "type": "campus",
            "url": "/gallery/nsut-campus2.jpg",
            "caption": "Academic Complex"
        },
        {
            "type": "lab",
            "url": "/gallery/nsut-lab1.jpg",
            "caption": "Centre for Electronics Design & Technology (CEDT)"
        },
        {
            "type": "sports",
            "url": "/gallery/nsut-sports1.jpg",
            "caption": "Sports Complex & Football Ground"
        },
        {
            "type": "hostel",
            "url": "/gallery/nsut-hostel1.jpg",
            "caption": "Boys' Hostel (BH-1 Ramanujan Hostel)"
        },
        {
            "type": "event",
            "url": "/gallery/nsut-event1.jpg",
            "caption": "Moksha - Cultural Festival"
        }
    ],
    "faqs": [
        {
            "question": "Is NSUT a government college?",
            "answer": "Yes, NSUT (Netaji Subhas University of Technology) is a fully government-funded institution under the Government of NCT of Delhi. It was formerly known as NSIT (Netaji Subhas Institute of Technology) and was upgraded to a university in 2018 [citation:1][citation:6]."
        },
        {
            "question": "What is the highest package at NSUT in 2025?",
            "answer": "The highest package in 2025 is ₹65 LPA, offered by Apple and Google Silicon to students from the Computer Science branch. This is a significant jump from previous years [citation:8]."
        },
        {
            "question": "What is the average package at NSUT?",
            "answer": "As of 2025, the overall average CTC stands at ₹17.93 Lakh per annum, with CSE students averaging between ₹12-18 LPA. The median package is ₹14 LPA [citation:3][citation:8]."
        },
        {
            "question": "What is the JEE Main cutoff for NSUT?",
            "answer": "For JAC Delhi 2025 (Round 1), the closing rank for CSE was 4889, ECE was around 8000-9000, and Mechanical Engineering was approximately 25,000+. Cutoffs vary by category and home state quota [citation:7]."
        },
        {
            "question": "What is the campus size of NSUT?",
            "answer": "NSUT is spread across a sprawling 145-acre campus in Sector 3, Dwarka, New Delhi. It is a fully residential campus with lush green landscaping and modern infrastructure [citation:5]."
        },
        {
            "question": "Does NSUT have hostel facilities?",
            "answer": "Yes, NSUT has four boys' hostels (BH1-BH4) and two girls' hostels (GH) with a total capacity of approximately 2,800 students. Facilities include 24x7 WiFi, power backup, in-premises mess, common rooms, indoor games, and 24x7 security [citation:10]."
        },
        {
            "question": "What is unique about NSUT's curriculum?",
            "answer": "NSUT offers a flexible curriculum with strong industry integration. It has mandatory summer internships, hackathon-focused clubs, and specialized centers like the NVIDIA GPU lab for AI/ML projects. The NSUT Incubation and Innovation Foundation (NSUT-IIF) actively supports student startups [citation:3][citation:5]."
        },
        {
            "question": "What is the NSUT Incubation and Innovation Foundation?",
            "answer": "NSUT-IIF is a Section 8 company that incubates startups founded by students, alumni, and faculty. It has incubated successful ventures like Readers Crib, CacheFi, and Triposse. NSUT won the first prize for 'Institution Supporting Start-ups' from NITI Aayog and AICTE in 2017 [citation:5]."
        },
        {
            "question": "Who are the top recruiters for core engineering branches?",
            "answer": "For core branches, top recruiters include Texas Instruments, Qualcomm, Maruti Suzuki, Tata Motors, BHEL, NTPC, and Bosch. PSUs like Power Grid Corporation also recruit electrical engineering graduates through GATE scores [citation:3]."
        },
        {
            "question": "What is the fee structure at NSUT?",
            "answer": "The total B.Tech course fee is approximately ₹7.6 Lakhs for four years, with an annual hostel fee of around ₹20,000. M.Tech fees are approximately ₹3.47 Lakhs for the full course. Scholarships are available for SC/ST students and single child girl children [citation:1][citation:4]."
        },
        {
            "question": "Does NSUT have an East Campus?",
            "answer": "Yes, NSUT has an East Campus (formerly Ambedkar Institute of Technology). Placements for both main and east campus are conducted together, with the same average package of ₹12-13 LPA applicable to both [citation:8]."
        }
    ]
},
{
    "id": "1204",
    "slug": "igdtuw-delhi",
    "name": "Indira Gandhi Delhi Technical University for Women",
    "shortName": "IGDTUW",
    "tagline": "Empowering Women Through Technical Excellence",
    "overview": "India's first all-women technical university, established to facilitate studies and research in emerging areas of professional education among women, blending its legacy as IGIT with modern university dynamism since 2013.",
    "description": "Indira Gandhi Delhi Technical University for Women (IGDTUW), established by the Govt. of Delhi in May 2013, is a non-affiliating teaching and research University. It is the first all-women technical university in India. Its predecessor, the Indira Gandhi Institute of Technology (IGIT), was established in 1998 as the first engineering college for women only. Located in the historic Kashmere Gate area of Delhi, the university aims to achieve excellence in Engineering, Technology, Applied Sciences, Architecture, and Management. In a short span, IGDTUW has achieved a NAAC 'A+' Grade in its first assessment cycle. The university is renowned for its strong placement record, with students securing top packages in leading multinational corporations, reflecting its commitment to producing 'work-ready' graduates. IGDTUW fosters a vibrant research culture with projects sponsored by leading industry and government organizations and supports entrepreneurship through its incubation centre, 'Anveshan' [citation:1].",
    "logo": "/logos/igdtuw.png",
    "stream": "engineering",
    "type": "government",
    "category": "premier",
    "ranking": 4,
    "rating": 4.2,
    "nirfRank": 250,
    "googleRating": 4.2,
    "reviews": {
        "count": 1250,
        "average": 4.2,
        "academics": 4.3,
        "infrastructure": 3.9,
        "placement": 4.5,
        "faculty": 4.2
    },
    "established": 1998,
    "accreditation": "AICTE, COA Approved",
    "naacGrade": "A+",
    "affiliations": ["Delhi State Legislature Act 9, 2012"],
    "recognition": ["UGC", "AICTE", "Council of Architecture (COA)", "Govt. of NCT of Delhi"],
    "location": {
        "city": "Delhi",
        "state": "Delhi",
        "country": "India",
        "pincode": "110006",
        "campusSize": "6 acres",
        "campusType": "urban",
        "latitude": 28.6655,
        "longitude": 77.2343,
        "address": "Madrasa Road, Opposite St. James Church, Kashmere Gate, Delhi - 110006"
    },
    "fees": {
        "annual": 158000,
        "total": 707000,
        "hostel": 160000,
        "mess": 60000,
        "otherCharges": 7000,
        "scholarshipAvailable": true,
        "scholarshipDetails": [
            "Merit-based scholarships for top performers (Delhi Govt. & Private)",
            "Scholarships for SC/ST/OBC categories as per government norms",
            "Pragati Scholarship for Girl Students (AICTE)",
            "Reliance Foundation Scholarships (based on application & selection)",
            "Financial aid for students with family income < ₹1 Lakh",
            "GATE: Monthly stipend for M.Tech students with valid score"
        ],
        "paymentOptions": [
            "Online Payment (Institute Portal)",
            "NEFT/RTGS",
            "Demand Draft",
            "Credit/Debit Card"
        ]
    },
    "placement": {
        "averagePackage": 2100000,
        "highestPackage": 56000000,
        "medianPackage": 1847000,
        "percentage": 87.30,
        "totalOffers": 571,
        "totalStudents": 654,
        "internationalOffers": 8,
        "dreamOffers": 45,
        "averagePackageTrend": 12,
        "topRecruiters": [
            "Adobe",
            "Microsoft",
            "Amazon",
            "Google",
            "Intel",
            "Qualcomm",
            "Cisco",
            "Oracle",
            "IBM",
            "TCS",
            "Accenture",
            "Maruti Suzuki",
            "Mahindra & Mahindra",
            "Hero MotoCorp",
            "Samsung",
            "Flipkart",
            "Uber",
            "Barclays",
            "Standard Chartered",
            "Honeywell"
        ],
        "recruitmentSectors": [
            "Information Technology",
            "Product Management",
            "Core Engineering",
            "Consulting",
            "Finance & Analytics",
            "R&D",
            "Automobile",
            "EdTech"
        ],
        "placementStats": [
            {
                "year": 2024,
                "averagePackage": 2100000,
                "highestPackage": 56000000,
                "percentage": 87.3
            },
            {
                "year": 2023,
                "averagePackage": 2336000,
                "highestPackage": 5600000,
                "percentage": 91.3
            },
            {
                "year": 2022,
                "averagePackage": 1972000,
                "highestPackage": 12000000,
                "percentage": 92.8
            },
            {
                "year": 2021,
                "averagePackage": 1900000,
                "highestPackage": 10000000,
                "percentage": 90.0
            }
        ]
    },
    "academics": {
        "coursesOffered": [
            "B.Tech",
            "B.Arch",
            "M.Tech",
            "MCA",
            "PhD",
            "MBA"
        ],
        "popularCourses": [
            "B.Tech Computer Science & Engineering",
            "B.Tech Computer Science Engineering (AI)",
            "B.Tech Information Technology",
            "B.Tech Electronics & Communication Engineering",
            "B.Tech Mechanical & Automation Engineering",
            "B.Tech Mathematics & Computing"
        ],
        "facultyCount": 120,
        "studentCount": 3000,
        "studentFacultyRatio": "25:1",
        "specialization": [
            "Artificial Intelligence & Machine Learning",
            "Cyber Security",
            "VLSI Design",
            "Robotics & Automation",
            "Mobile Pervasive Computing",
            "Information Security Management"
        ],
        "departments": [
            "Computer Science & Engineering",
            "Information Technology",
            "Electronics & Communication Engineering",
            "Mechanical & Automation Engineering",
            "Applied Sciences & Humanities",
            "Architecture & Planning",
            "Management Studies"
        ],
        "researchCenters": 8,
        "publications": 650,
        "collaborations": [
            "Microsoft",
            "Atmel",
            "Nokia",
            "Intel",
            "ARM",
            "Texas Instruments",
            "Department of Science & Technology (DST)",
            "IITs"
        ],
        "teachingMode": "offline"
    },
    "infrastructure": {
        "library": {
            "name": "Learning Resource Centre (LRC)",
            "books": 45000,
            "journals": 200,
            "digitalResources": 5000,
            "seatingCapacity": 300
        },
        "labs": {
            "count": 30,
            "majorLabs": [
                "Computer Centre (24x7)",
                "VLSI Design Lab",
                "Robotics & Automation Lab",
                "AI & Machine Learning Lab",
                "Embedded Systems Lab",
                "Central Computing Facility"
            ],
            "equipmentValue": 150000000
        },
        "sports": {
            "facilities": [
                "Common Room with Fitness Equipment",
                "Yoga Facility",
                "Indoor Games",
                "Badminton Court",
                "Table Tennis"
            ],
            "stadium": false,
            "gym": true,
            "swimmingPool": false
        },
        "hostel": {
            "boys": false,
            "girls": true,
            "capacity": 300,
            "rooms": 150,
            "facilities": [
                "Krishna and Kaveri Hostels",
                "Twin/Triple sharing basis",
                "High-speed WiFi",
                "Co-operative Mess System (No Profit No Loss)",
                "RO Purified Drinking Water",
                "Common Room with LCD TV & AC",
                "Washing Machines",
                "Paid Laundry Service",
                "24/7 Security with CCTV",
                "Guest Rooms"
            ]
        },
        "wifi": true,
        "cafeteria": 2,
        "medical": true,
        "transportation": true,
        "auditorium": 2
    },
    "admission": {
        "entranceExam": ["JEE Main", "GATE", "NATA", "JAC Delhi", "CUET-PG"],
        "cutoff": 16659,
        "cutoffTrend": -5,
        "applicationMode": "Online",
        "applicationFee": 1500,
        "selectionProcess": [
            "JEE Main Score",
            "JAC Delhi Counseling",
            "NATA/JEE Paper II for B.Arch",
            "GATE Score for M.Tech",
            "CUET-PG for MCA/MBA"
        ],
        "eligibility": {
            "minPercentage": 75,
            "subjectsRequired": ["Physics", "Chemistry", "Mathematics"],
            "ageLimit": 25
        },
        "importantDates": {
            "applicationStart": "June 10, 2025",
            "applicationEnd": "June 19, 2025",
            "examDate": "January 22-30, 2026",
            "resultDate": "February 19, 2026",
            "counsellingStart": "June 25, 2026",
            "counsellingEnd": "July 30, 2026"
        },
        "documentsRequired": [
            "10th Marksheet",
            "12th Marksheet",
            "JEE Main Scorecard",
            "JAC Delhi Registration Printout",
            "Category Certificate (if applicable)",
            "Income Certificate (for Fee Waiver)",
            "Domicile Certificate",
            "Medical Fitness Certificate",
            "Passport Size Photographs"
        ]
    },
    "campusLife": {
        "clubs": [
            "Programming Club",
            "Robotics Society",
            "E-Cell (Anveshan)",
            "Electronics Club",
            "Music Club",
            "Dance Club",
            "Dramatics Society",
            "Photography Club",
            "Debating Society",
            "Art & Craft Club",
            "Literary Society"
        ],
        "festivals": [
            "Anweshan (Annual Technical Festival)",
            "Anandam (Annual Cultural Festival)",
            "Abhivyakti (Architecture Department Festival)"
        ],
        "technicalEvents": [
            "Hackathons",
            "Coding Competitions",
            "Robo-Wars",
            "Paper Presentations",
            "Industry Conclaves",
            "Workshops by Industry Experts"
        ],
        "culturalEvents": [
            "Pro Shows",
            "Dance & Music Competitions",
            "Drama Fest",
            "Fashion Show",
            "Literary Events",
            "Delhi Heritage Walks"
        ],
        "socialInitiatives": [
            "National Service Scheme (NSS)",
            "National Cadet Corps (NCC)",
            "Women Empowerment Drives",
            "Sustainability Cell",
            "Blood Donation Camps"
        ],
        "annualBudget": 15000000
    },
    "faculty": {
        "total": 120,
        "phdHolders": 85,
        "professor": 25,
        "associateProfessor": 40,
        "assistantProfessor": 55,
        "industryExperience": 15,
        "internationalFaculty": 5,
        "awards": [
            "Young Scientist Award",
            "Best Teacher Award by Govt. of Delhi",
            "Women Excellence Award",
            "SERB Fellowship",
            "Visiting Professorships at International Universities"
        ]
    },
    "alumni": {
        "notableAlumni": [
            {
                "name": "Anjali Bansal",
                "designation": "Founder",
                "company": "Avaani Spa"
            },
            {
                "name": "Akanksha Arora",
                "designation": "Product Manager",
                "company": "Google"
            },
            {
                "name": "Divya Goyal",
                "designation": "Software Engineer",
                "company": "Microsoft"
            },
            {
                "name": "Nidhi Singh",
                "designation": "Co-founder",
                "company": "Samosa Party"
            },
            {
                "name": "Shivani Mehta",
                "designation": "Associate Partner",
                "company": "McKinsey & Company"
            }
        ],
        "placementCompanies": [
            "Google",
            "Microsoft",
            "Amazon",
            "Adobe",
            "Intel",
            "Qualcomm"
        ],
        "networkStrength": 75
    },
    "international": {
        "collaborations": 12,
        "studentExchange": true,
        "facultyExchange": true,
        "partnerUniversities": [
            "Technical University of Munich (Germany)",
            "University of South Florida (USA)",
            "Queensland University of Technology (Australia)",
            "University of West England (UK)"
        ],
        "foreignStudents": 0
    },
    "contact": {
        "phone": [
            "+91-11-23869525",
            "+91-11-23900261",
            "+91-11-23900253"
        ],
        "email": [
            "vc@igdtuw.ac.in",
            "admission@igdtuw.ac.in",
            "placement@igdtuw.ac.in",
            "dasaadmission@igdtuw.ac.in"
        ],
        "website": "https://www.igdtuw.ac.in",
        "socialMedia": {
            "facebook": "https://facebook.com/igdtuw",
            "twitter": "https://twitter.com/IGDTUW",
            "linkedin": "https://linkedin.com/school/igdtuw",
            "instagram": "https://instagram.com/igdtuw",
            "youtube": "https://youtube.com/IGDTUWOfficial"
        },
        "admissionContact": {
            "phone": "+91-11-23869525",
            "email": "admission@igdtuw.ac.in"
        }
    },
    "facilities": [
        "First all-women technical university in India",
        "NAAC A+ Grade in first assessment cycle",
        "24x7 Learning Resource Centre (LRC)",
        "High-speed 1 Gbps NKN & 50 Mbps MTNL leased lines",
        "Fully Wi-Fi campus with Cisco switches",
        "State-of-the-art Computer Centre (24x7)",
        "On-campus dispensary with medical officers",
        "Punjab & Sindh Bank branch on campus",
        "Incubation Centre 'Anveshan' for women entrepreneurs",
        "Two Girls Hostels: Krishna & Kaveri",
        "Fitness center and yoga facilities",
        "Guest house with modern amenities"
    ],
    "achievements": [
        "First engineering college exclusively for women in India (est. 1998), converted to a University in 2013",
        "NAAC A+ Grade in the first assessment cycle (2023)",
        "Highest package of ₹56 LPA in 2024 by Adobe",
        "Average package consistently above ₹20 LPA",
        "Ranked #20 in India Today Engineering Rankings 2025",
        "100% placement record in multiple departments (CSE, IT)",
        "First University to offer niche M.Tech programs like Mobile Pervasive Computing & Information Security Management",
        "Incubation Centre 'Anveshan' supporting women-led startups",
        "Only all-women technical university with NIRF ranking within top 250"
    ],
    "newsUpdates": [
        {
            "title": "IGDTUW achieves highest package of ₹56 LPA in 2024 placements, average crosses ₹21 LPA",
            "date": "2025-09-15",
            "link": "https://www.careers360.com/university/indira-gandhi-delhi-technical-university-for-women-delhi/placement"
        },
        {
            "title": "IGDTUW maintains top 25 rank in India Today Engineering rankings 2025, ranked 20th overall",
            "date": "2025-09-08",
            "link": "https://www.kollegeapply.com/college/indira-gandhi-delhi-technical-university-for-women-igdtuw-delhi-ranking"
        },
        {
            "title": "JAC Delhi 2025: IGDTUW CSE closing rank at 16659, IT at 17453 for spot round",
            "date": "2025-07-30",
            "link": "https://collegedunia.com/university/13801-indira-gandhi-delhi-technical-university-for-women-igdtuw-new-delhi"
        }
    ],
    "gallery": [
        {
            "type": "campus",
            "url": "/gallery/igdtuw-campus1.jpg",
            "caption": "Main Academic Block - IGDTUW"
        },
        {
            "type": "campus",
            "url": "/gallery/igdtuw-campus2.jpg",
            "caption": "Administrative Building"
        },
        {
            "type": "lab",
            "url": "/gallery/igdtuw-lab1.jpg",
            "caption": "Computer Centre (24x7)"
        },
        
        {
            "type": "hostel",
            "url": "/gallery/igdtuw-hostel1.jpg",
            "caption": "Krishna Girls Hostel"
        },
        {
            "type": "event",
            "url": "/gallery/igdtuw-event1.jpg",
            "caption": "Anandam - Annual Cultural Festival"
        }
    ],
    "faqs": [
        {
            "question": "Is IGDTUW a government or private university?",
            "answer": "IGDTUW is a State Government University established by the Government of NCT of Delhi vide Act 9 of 2012. It is a fully government-funded institution, making it one of the most affordable yet high-quality technical universities for women in India [citation:1]."
        },
        {
            "question": "What is the highest package at IGDTUW in 2024?",
            "answer": "The highest domestic package in 2024 was ₹56 Lakhs per annum, offered by Adobe. The university has consistently seen top packages from companies like Microsoft, Amazon, and Intel [citation:3][citation:8]."
        },
        {
            "question": "What is the average package at IGDTUW?",
            "answer": "As per NIRF 2025 data, the median package for B.Tech graduates in 2024 was ₹18.47 LPA. However, department-wise averages vary, with CSE and IT averaging between ₹20-25 LPA. The overall average package is approximately ₹21 LPA [citation:4][citation:8]."
        },
        {
            "question": "What is the JEE Main cutoff for IGDTUW?",
            "answer": "Admissions are conducted through JAC Delhi. For 2025, the closing rank for B.Tech CSE was around 16,659 (CRL rank). For Information Technology, it was approximately 17,453. These cutoffs vary by category and are based on JEE Main scores [citation:4]."
        },
        {
            "question": "What is the campus size of IGDTUW?",
            "answer": "IGDTUW is located in the heart of Delhi at Kashmere Gate, spread across approximately 6 acres. While compact, it is well-equipped with modern facilities, including 24x7 libraries, computer centres, and two girls' hostels within the campus [citation:5]."
        },
        {
            "question": "Does IGDTUW allow branch change?",
            "answer": "Branch change is generally not permitted at IGDTUW as admissions are based on JEE Main rank and JAC Delhi counseling, with seats allocated branch-wise. Students must choose their specialization at the time of admission based on their rank and preference."
        },
        {
            "question": "What is unique about IGDTUW's curriculum?",
            "answer": "IGDTUW follows a Choice Based Credit System (CBCS) aligned with NEP 2020, offering flexibility to choose interdisciplinary and multidisciplinary courses. Students can opt for Project, Research, or Entrepreneur Tracks. The curriculum is regularly updated with industry input to produce 'work-ready' graduates [citation:1]."
        },
        {
            "question": "Does IGDTUW have hostel facilities?",
            "answer": "Yes, IGDTUW has two girls' hostels within the campus: Krishna Hostel and Kaveri Hostel, accommodating approximately 300 students. Rooms are on twin/triple sharing basis with facilities like Wi-Fi, co-operative mess, RO water, washing machines, and gym [citation:5][citation:10]."
        },
        {
            "question": "Who are the top recruiters for core engineering branches?",
            "answer": "For core branches like ECE and MAE, top recruiters include Qualcomm, Texas Instruments, Samsung, Maruti Suzuki, Mahindra & Mahindra, Bosch, Honeywell, and Cummins. For CSE/IT, top recruiters are Adobe, Microsoft, Google, Amazon, Intel, and Oracle [citation:3][citation:8]."
        },
        {
            "question": "What are the scholarship options at IGDTUW?",
            "answer": "Scholarships include Merit-cum-Means scholarships for students with family income < ₹1 Lakh, Pragati Scholarship for girl students (AICTE), Reliance Foundation Scholarships, and category-based scholarships for SC/ST/OBC students. GATE-qualified M.Tech students receive monthly stipends [citation:4]."
        }
    ]
},
{
    "id": "1115",
    "slug": "mcet-murshidabad",
    "name": "Murshidabad College of Engineering & Technology",
    "shortName": "MCET",
    "tagline": "Empowering Rural India Through Technical Education",
    "overview": "A prominent engineering college in Murshidabad district, established in 1998 to bring quality technical education to a historically significant but economically backward region, offering B.Tech programs affiliated to MAKAUT.",
    "description": "Murshidabad College of Engineering & Technology (MCET) was established in 1998 with the vision of providing quality engineering education to the students of Murshidabad district and surrounding areas [citation:5]. Located in Banjetia, approximately 5 km from Berhampore town, the college was founded with the active support of Shri Nripen Chowdhury, the then Sabhadhipati of Murshidabad Zilla Parishad, and formally inaugurated by Dr. Asim Dasgupta, the then Finance Minister of West Bengal [citation:5][citation:10]. The institution shifted to its own sprawling 11-acre campus in 2001, which was inaugurated by the then Chief Minister of West Bengal, Mr. Buddhadeb Bhattacharjee [citation:5][citation:10]. Affiliated to Maulana Abul Kalam Azad University of Technology (MAKAUT) and approved by AICTE, MCET offers B.Tech programs in Civil, Computer Science, Electronics & Communication, and Electrical Engineering [citation:5][citation:9]. The college serves as a beacon of technical education in a predominantly agricultural district, providing opportunities for local students to pursue engineering careers without leaving their home region [citation:2][citation:10]. While placement records vary by department, with CSE students achieving packages up to ₹15 LPA, the institution continues to fulfill its mission of making engineering education accessible in rural West Bengal [citation:6][citation:10].",
    "logo": "/logos/mcet-murshidabad.png",
    "stream": "engineering",
    "type": "semi",
    "category": "tier1",
    "ranking": 5,
    "rating": 3.4,
    //"nirfRank": 90,
    "googleRating": 3.5,
    "reviews": {
        "count": 125,
        "average": 3.4,
        "academics": 3.3,
        "infrastructure": 3.1,
        "placement": 3.0,
        "faculty": 3.5
    },
    "established": 1998,
    "accreditation": "AICTE Approved",
    //"naacGrade": null,
    "affiliations": ["Maulana Abul Kalam Azad University of Technology (MAKAUT)"],
    "recognition": ["AICTE", "Government of West Bengal"],
    "location": {
        "city": "Berhampore",
        "state": "West Bengal",
        "country": "India",
        "pincode": "742102",
        "campusSize": "11 acres",
        "campusType": "rural",
        "latitude": 24.1015,
        "longitude": 88.2846,
        "address": "ITI MORE, Raninagar, Banjetia, P.O. Cossimbazar Raj, Berhampore, Murshidabad, West Bengal - 742102"
    },
    "fees": {
        "annual": 66750,
        "total": 267000,
        "hostel": 36000,
        "mess": 30000,
        "otherCharges": 12000,
        "scholarshipAvailable": true,
        "scholarshipDetails": [
            "SC/ST scholarship schemes from Government of West Bengal",
            "Book bank facility for SC/ST students sponsored by State Government [citation:5]",
            "Merit-based scholarships for eligible students",
            "Financial aid for economically weaker sections"
        ],
        "paymentOptions": [
            "Online Payment",
            "NEFT/RTGS",
            "Demand Draft",
            "Semester Installments"
        ]
    },
    "placement": {
        "averagePackage": 320000,
        "highestPackage": 1500000,
        "medianPackage": 400000,
        "percentage": 45.00,
        "totalOffers": 110,
        "totalStudents": 245,
        "internationalOffers": 0,
        "dreamOffers": 5,
        "averagePackageTrend": 2,
        "topRecruiters": [
            "TCS",
            "Infosys",
            "Cognizant",
            "IBM",
            "Capgemini",
            "Wipro",
            "Accenture",
            "L&T",
            "Tech Mahindra",
            "Havells",
            "Crompton",
            "Siemens"
        ],
        "recruitmentSectors": [
            "Information Technology",
            "Core Engineering",
            "Consulting",
            "Manufacturing",
            "Construction"
        ],
        "placementStats": [
            {
                "year": 2024,
                "averagePackage": 320000,
                "highestPackage": 1500000,
                "percentage": 45.0
            },
            {
                "year": 2023,
                "averagePackage": 400000,
                "highestPackage": 900000,
                "percentage": 55.0
            },
            {
                "year": 2022,
                "averagePackage": 600000,
                "highestPackage": 800000,
                "percentage": 60.0
            },
            {
                "year": 2021,
                "averagePackage": 300000,
                "highestPackage": 900000,
                "percentage": 75.0
            }
        ]
    },
    "academics": {
        "coursesOffered": [
            "B.Tech"
        ],
        "popularCourses": [
            "B.Tech Computer Science & Engineering",
            "B.Tech Electronics & Communication Engineering",
            "B.Tech Electrical Engineering",
            "B.Tech Civil Engineering"
        ],
        "facultyCount": 32,
        "studentCount": 457,
        "studentFacultyRatio": "14:1",
        "specialization": [
            "Computer Science & Engineering",
            "Electronics & Communication Engineering",
            "Electrical Engineering",
            "Civil Engineering"
        ],
        "departments": [
            "Computer Science & Engineering",
            "Information Technology (discontinued after 2017) [citation:5]",
            "Electronics & Communication Engineering",
            "Electrical Engineering",
            "Civil Engineering",
            "Applied Electronics & Instrumentation Engineering",
            "Basic Science & Humanities"
        ],
        "researchCenters": 0,
        "publications": 25,
        "collaborations": [],
        "teachingMode": "offline"
    },
    "infrastructure": {
        "library": {
            "name": "Central Library",
            "books": 11000,
            "journals": 25,
            "digitalResources": 11000,
            "seatingCapacity": 100
        },
        "labs": {
            "count": 20,
            "majorLabs": [
                "Computer Center (100+ systems)",
                "Electronics Lab",
                "Electrical Machines Lab",
                "Civil Engineering Workshop",
                "Physics & Chemistry Labs",
                "Communication Engineering Lab"
            ],
            "equipmentValue": 25000000
        },
        "sports": {
            "facilities": [
                "Playground",
                "Indoor Games (Chess, Carrom)",
                "Table Tennis"
            ],
            "stadium": false,
            "gym": true,
            "swimmingPool": false
        },
        "hostel": {
            "boys": true,
            "girls": true,
            "capacity": 200,
            "rooms": 100,
            "facilities": [
                "Separate boys and girls hostels",
                "Wi-Fi connectivity",
                "24/7 security with CCTV",
                "Medical assistance with ambulance",
                "Mess facilities",
                "Common room",
                "Annual health check-up camps",
                "Professional gymnasium with trainers [citation:9]"
            ]
        },
        "wifi": true,
        "cafeteria": 1,
        "medical": true,
        "transportation": false,
        "auditorium": 1
    },
    "admission": {
        "entranceExam": ["WBJEE", "JEE Main", "JELET"],
        "cutoff": 8721,
        "cutoffTrend": -56,
        "applicationMode": "Online",
        "applicationFee": 500,
        "selectionProcess": [
            "WBJEE Score",
            "JEE Main Score (optional)",
            "WBJEEB Central Counseling",
            "JELET for Lateral Entry"
        ],
        "eligibility": {
            "minPercentage": 45,
            "subjectsRequired": ["Physics", "Chemistry", "Mathematics"],
            "ageLimit": 25
        },
        "importantDates": {
            "applicationStart": "January 15, 2026",
            "applicationEnd": "February 15, 2026",
            "examDate": "April 27, 2026",
            "resultDate": "June 10, 2026",
            "counsellingStart": "July 5, 2026",
            "counsellingEnd": "August 15, 2026"
        },
        "documentsRequired": [
            "10th Marksheet",
            "12th Marksheet",
            "WBJEE Scorecard",
            "Category Certificate",
            "Income Certificate (if applicable)",
            "Domicile Certificate",
            "Medical Fitness Certificate",
            "Passport Size Photographs"
        ]
    },
    "campusLife": {
        "clubs": [
            "Cultural Club",
            "Sports Club",
            "Technical Club"
        ],
        "festivals": [
            "Annual Cultural Fest",
            "Techno-management Fest",
            "Freshers' Welcome",
            "Farewell Ceremony"
        ],
        "technicalEvents": [
            "Workshops",
            "Seminars",
            "Technical Quizzes"
        ],
        "culturalEvents": [
            "Music Competitions",
            "Dance Performances",
            "Drama",
            "Rangoli Competition"
        ],
        "socialInitiatives": [
            "Blood Donation Camps",
            "Health Check-up Camps",
            "Awareness Programs"
        ],
        "annualBudget": 2000000
    },
    "faculty": {
        "total": 32,
        "phdHolders": 5,
        "professor": 8,
        "associateProfessor": 10,
        "assistantProfessor": 14,
        "industryExperience": 3,
        "internationalFaculty": 0,
        "awards": []
    },
    "alumni": {
        "notableAlumni": [],
        "placementCompanies": [
            "TCS",
            "Infosys",
            "Cognizant",
            "IBM",
            "Capgemini"
        ],
        "networkStrength": 45
    },
    "international": {
        "collaborations": 0,
        "studentExchange": false,
        "facultyExchange": false,
        "partnerUniversities": [],
        "foreignStudents": 0
    },
    "contact": {
        "phone": [
            "+91-3482-275867"
        ],
        "email": [
            "mcet696@gmail.com",
            "principal@mcetbhb.net"
        ],
        "website": "http://www.mcetbhb.net",
        "socialMedia": {
            //"facebook": null,
            //"twitter": null,
            //"linkedin": null,
            //"instagram": null,
            //"youtube": null
        },
        "admissionContact": {
            "phone": "+91-3482-275867",
            "email": "mcet696@gmail.com"
        }
    },
    "facilities": [
        "11-acre rural campus near Berhampore",
        "Separate boys and girls hostels",
        "Central Library with 11,000+ books",
        "Book bank facility for SC/ST students",
        "Computer center with 100+ systems",
        "Wi-Fi enabled campus (2 Mbps broadband)",
        "Professional gymnasium with trainers",
        "Medical clinic with 24/7 ambulance",
        "Annual health check-up camps",
        "Cafeteria serving hygienic food",
        "Playground for outdoor sports",
        "Indoor games facilities",
        "24/7 security with CCTV surveillance",
        "Guest rooms for visitors"
    ],
    "achievements": [
        "Established in 1998 as one of the first engineering colleges in Murshidabad district",
        "Inaugurated by Chief Minister of West Bengal in 2001",
        "Aided by Government of West Bengal through non-recurring grants",
        "Approved by AICTE and affiliated to MAKAUT",
        "Highest package of ₹15 LPA achieved in placements",
        "Serving rural students with affordable engineering education",
        "Book bank scheme for underprivileged SC/ST students"
    ],
    "newsUpdates": [
        {
            "title": "WB JELET 2025 Notification Released for Lateral Entry Admissions",
            "date": "2025-09-04",
            "link": "https://wbjeeb.nic.in"
        },
        {
            "title": "MCET CSE cutoff at 8721 in WBJEE 2023 counseling",
            "date": "2023-08-15",
            "link": "https://wbjeeb.nic.in"
        }
    ],
    "gallery": [
        {
            "type": "campus",
            "url": "/gallery/mcet-campus1.jpg",
            "caption": "Main Academic Building - MCET"
        },
        {
            "type": "campus",
            "url": "/gallery/mcet-campus2.jpg",
            "caption": "College Entrance"
        },
        {
            "type": "lab",
            "url": "/gallery/mcet-lab1.jpg",
            "caption": "Computer Science Lab"
        },
        
        {
            "type": "hostel",
            "url": "/gallery/mcet-hostel1.jpg",
            "caption": "Boys Hostel"
        },
        {
            "type": "sports",
            "url": "/gallery/mcet-ground.jpg",
            "caption": "College Playground"
        }
    ],
    "faqs": [
        {
            "question": "Is Murshidabad College of Engineering & Technology a government or private college?",
            "answer": "MCET is a government-aided private college established by a voluntary society. It receives non-recurring grants from the Government of West Bengal from time to time. The college is approved by AICTE and affiliated to MAKAUT, Kolkata [citation:1][citation:10]."
        },
        {
            "question": "What is the highest package offered at MCET?",
            "answer": "The highest package offered at MCET is approximately ₹15 LPA, achieved by students in the Computer Science and Engineering branch. Average packages vary by department, with CSE students typically securing better offers [citation:6][citation:10]."
        },
        {
            "question": "What is the average package at MCET?",
            "answer": "The average package at MCET ranges from ₹3.2 LPA to ₹6 LPA depending on the branch and batch. According to placement data, CSE students have achieved average packages around ₹6 LPA, while other branches may have lower averages [citation:6][citation:10]."
        },
        {
            "question": "What is the WBJEE cutoff for MCET?",
            "answer": "For 2023, the WBJEE cutoff ranks were: Computer Science & Engineering - 8721, Information Technology - 11877, Electronics & Communication Engineering - 14551, and Electronics & Instrumentation Engineering - 27180. Cutoffs vary by category and year [citation:3]."
        },
        {
            "question": "What is the campus size of MCET?",
            "answer": "MCET is situated on an 11-acre campus in Banjetia, approximately 5 km from Berhampore town in Murshidabad district. The campus houses academic buildings, hostels, a playground, and other facilities [citation:5][citation:9]."
        },
        {
            "question": "Does MCET have hostel facilities?",
            "answer": "Yes, MCET has separate hostel facilities for boys and girls. Hostels are equipped with Wi-Fi, 24/7 security with CCTV, medical assistance with ambulance, mess facilities, and a professional gymnasium with trainers. Hostel fees are approximately ₹36,000 per year [citation:4][citation:9]."
        },
        {
            "question": "Which courses are offered at MCET?",
            "answer": "MCET offers B.Tech programs in Civil Engineering, Computer Science & Engineering, Electronics & Communication Engineering, and Electrical Engineering. Each program has an intake of 30-60 students. Information Technology was discontinued after 2017 [citation:5][citation:9]."
        },
        {
            "question": "What is the fee structure for B.Tech at MCET?",
            "answer": "The total tuition fee for the complete B.Tech program is approximately ₹2.67 Lakhs. Annual fees are around ₹66,750, with hostel fees of approximately ₹36,000 per year. There are additional one-time charges like admission fees and caution deposit [citation:3][citation:4]."
        },
        {
            "question": "Who are the top recruiters for core engineering branches?",
            "answer": "Top recruiters include TCS, Infosys, Cognizant, IBM, Capgemini, Wipro, Accenture, L&T, Tech Mahindra for IT and core sectors. For electrical branches, companies like Havells, Crompton, and Siemens also visit campus [citation:6]."
        },
        {
            "question": "Is there a library facility at MCET?",
            "answer": "Yes, the institute has a central library with over 11,000 books, including textbooks and reference materials. There is also a special 'Book Bank' facility for SC/ST students sponsored by the Government of West Bengal. The library subscribes to technical journals and provides access to e-journals [citation:5][citation:9]."
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
    "id": "1401",
    "slug": "scaler-school-of-technology",
    "name": "Scaler School of Technology",
    "shortName": "SST",
    "tagline": "India's first Ivy League of Computer Science",
    "overview": "A new-age, industry-integrated technology institution focusing on practical software engineering and future-ready education",
    "description": "Scaler School of Technology is an innovative, outcome-focused institution launched in 2023. Offering a 4-year residential undergraduate program in Computer Science and AI, it focuses on building world-class software engineers through a '2+1+1' model: fundamentals, mandatory 1-year industry internship, and specializations. The curriculum is designed and delivered by industry experts from Google, Meta, Microsoft, and Uber.",
    "logo": "/logos/scaler-school.png",
    "stream": "engineering",
    "type": "new-age",
    "category": "tier2",
    "ranking": 1,
    "rating": 4.6,
    //"nirfRank": 0,
    "googleRating": 4.7,
    "reviews": {
        "count": 120,
        "average": 4.6,
        "academics": 4.7,
        "infrastructure": 4.0,
        "placement": 4.5,
        "faculty": 4.9
    },
    "established": 2023,
    "accreditation": "Recognized through Partner University (BITS Pilani/Woolf)",
    //"naacGrade": "A",
    "affiliations": [],
    "recognition": [],
    "location": {
        "city": "Bengaluru",
        "state": "Karnataka",
        "country": "India",
        "pincode": "560100",
        "campusSize": "Compact Urban Campus",
        "campusType": "urban",
        "latitude": 12.8455,
        "longitude": 77.6718,
        "address": "14, 3rd cross, Parappana Agrahar, Electronic City Phase 1, Bengaluru, Karnataka 560100"
    },
    "fees": {
        "annual": 0,
        "total": 0,
        "hostel": 112000,
        "mess": 40000,
        "otherCharges": 25000,
        "scholarshipAvailable": true,
        "scholarshipDetails": [
            "Merit-based Scholarships (up to 100% - based on NSET performance)",
            "Need-based Scholarships",
            "Women in Tech Scholarship",
            "Early Admission Scholarship"
        ],
        "paymentOptions": [
            "EMI Options",
            "Education Loan Assistance",
            "Online Payment",
            "Bank Transfer"
        ]
    },
    "placement": {
        "averagePackage": 2160000,
        "highestPackage": 17000000,
        "medianPackage": 0,
        "percentage": 0,
        "totalOffers": 0,
        "totalStudents": 200,
        "internationalOffers": 12,
        "dreamOffers": 0,
        "averagePackageTrend": 0,
        "topRecruiters": [
            "Google",
            "Microsoft",
            "Amazon",
            "Adobe",
            "Zomato",
            "Swiggy",
            "1MG",
            "Apple Developer Academy",
            "Stash Away",
            "Neurowyzer",
            "Digital Product School"
        ],
        "recruitmentSectors": [
            "Tech Startups",
            "Product Companies",
            "FinTech",
            "E-commerce",
            "Global Tech Firms"
        ],
        "placementStats": []
    },
    "academics": {
        "coursesOffered": [
            "4-Year Residential UG Program in Computer Science & AI",
            "B.Sc in Computer Science (Dual Degree option with BITS Pilani)",
            "BS in Data Science & Applications (IIT Madras collaboration)"
        ],
        "popularCourses": [
            "Computer Science & AI",
            "Specialization in AI/ML",
            "Specialization in Algo Trading",
            "Full Stack Development",
            "Engineering Leadership",
            "MAANG Track"
        ],
        "facultyCount": 85,
        "studentCount": 600,
        "studentFacultyRatio": "100:1",
        "specialization": [
            "Artificial Intelligence & Machine Learning",
            "Full Stack Development",
            "DevOps & Cloud Computing",
            "Cybersecurity",
            "Blockchain & Web3",
            "Algorithmic Trading",
            "Engineering Leadership",
            "MAANG Track"
        ],
        "departments": [
            "Computer Science & Engineering"
        ],
        "researchCenters": 1,
        "publications": 0,
        "collaborations": [
            "BITS Pilani",
            "IIT Madras",
            "Woolf University"
        ],
        "teachingMode": "hybrid"
    },
    "infrastructure": {
        "library": {
            "name": "Digital Library",
            "books": 5000,
            "journals": 500,
            "digitalResources": 50000,
            "seatingCapacity": 100
        },
        "labs": {
            "count": 10,
            "majorLabs": [
                "AI & ML Lab",
                "Mac Lab",
                "Drone Lab",
                "IoT Lab",
                "AR/VR Experience Lab",
                "Innovation Lab"
            ],
            "equipmentValue": 50000000
        },
        "sports": {
            "facilities": [
                "Badminton Courts",
                "Table Tennis Arena",
                "Football Turf",
                "Basketball Court",
                "Pool Table",
                "Foosball",
                "Chess",
                "Carrom"
            ],
            "stadium": false,
            "gym": true,
            "swimmingPool": false
        },
        "hostel": {
            "boys": true,
            "girls": true,
            "capacity": 600,
            "rooms": 300,
            "facilities": [
                "High-speed Internet",
                "Double/Triple Sharing Options",
                "Common Study Lounges",
                "Gaming Zone",
                "Reading Room",
                "Terrace Cafeteria",
                "Laundry",
                "24/7 Security & CCTV",
                "Medical Room"
            ]
        },
        "wifi": true,
        "cafeteria": 2,
        "medical": true,
        "transportation": true,
        "auditorium": 1
    },
    "admission": {
        "entranceExam": [
            "Scaler National Scholarship & Entrance Test (NSET)"
        ],
        "cutoff": 0,
        "cutoffTrend": 0,
        "applicationMode": "Online",
        "applicationFee": 1000,
        "selectionProcess": [
            "Online Application",
            "Scaler NSET",
            "Personal Interview",
            "Group Discussion",
            "Final Selection"
        ],
        "eligibility": {
            "minPercentage": 60,
            "subjectsRequired": [
                "Mathematics"
            ],
            "ageLimit": 20
        },
        "importantDates": {
            "applicationStart": "Rolling Admissions",
            "applicationEnd": "Rolling Admissions",
            "examDate": "Multiple Rounds Throughout Year",
            "resultDate": "Within 10 days of interview",
            "counsellingStart": "Rolling Admissions",
            "counsellingEnd": "Rolling Admissions"
        },
        "documentsRequired": [
            "10th Marksheet & Certificate",
            "12th Marksheet & Certificate",
            "NSET Scorecard",
            "Identity Proof",
            "Passport-size Photographs",
            "Achievement Certificates"
        ]
    },
    "campusLife": {
        "clubs": [
            "Competitive Programming Club",
            "AI/ML Club",
            "Entrepreneurship Cell",
            "Open Source Community",
            "Robotics Club",
            "Gaming & Esports Club",
            "Music & Arts Society",
            "Media & Cultural Club",
            "Sports Club"
        ],
        "festivals": [
            "TechStorm",
            "HackVerse",
            "Rise Up",
            "DJ Nights"
        ],
        "technicalEvents": [
            "24-hour Hackathons",
            "AI/ML Competitions",
            "Product Design Sprints",
            "CTF Events",
            "Startup Pitch Competitions",
            "Industry Workshops",
            "Tech Talks by Industry Leaders"
        ],
        "culturalEvents": [
            "Freshers' Party",
            "Annual Cultural Night",
            "DJ Nights",
            "Talent Shows",
            "Food Festivals"
        ],
        "socialInitiatives": [
            "Tech for Good Projects",
            "Bhashini Project",
            "Open Source Contributions",
            "Women in Tech Mentorship"
        ],
        "annualBudget": 0
    },
    "faculty": {
        "total": 85,
        "phdHolders": 5,
        "professor": 10,
        "associateProfessor": 15,
        "assistantProfessor": 60,
        "industryExperience": 12.5,
        "internationalFaculty": 5,
        "awards": []
    },
    "alumni": {
        "notableAlumni": [],
        "placementCompanies": [
            "Google",
            "Microsoft",
            "Amazon",
            "Adobe",
            "Zomato",
            "Swiggy"
        ],
        "networkStrength": 88
    },
    "international": {
        "collaborations": 1,
        "studentExchange": false,
        "facultyExchange": false,
        "partnerUniversities": [
            "Woolf University"
        ],
        "foreignStudents": 0
    },
    "contact": {
        "phone": [
            "+91-8448440101"
        ],
        "email": [
            "admissions@scaler.com",
            "support@scaler.com"
        ],
        "website": "https://www.scaler.com/school-of-technology/",
        "socialMedia": {
            "facebook": "https://facebook.com/scalerschool",
            "twitter": "https://twitter.com/scalerschool",
            "linkedin": "https://linkedin.com/school/scaler-school-of-technology",
            "instagram": "https://instagram.com/scalerschool",
            "youtube": "https://youtube.com/scalerschool"
        },
        "admissionContact": {
            "phone": "+91-8448440101",
            "email": "admissions@scaler.com"
        }
    },
    "facilities": [
        "Smart Classrooms with Personalized Screens",
        "High-speed Internet",
        "24x7 Access Labs",
        "Innovation Lab",
        "Career Development Center",
        "Cafeteria",
        "Fitness Center",
        "Makerspace & Prototyping Lab",
        "Mac Lab",
        "Drone Lab",
        "Collaboration Spaces",
        "Reading Rooms",
        "Terrace Cafeteria",
        "Indoor Games Arena"
    ],
    "achievements": [
        "96.3% internship placement for first batch (2023-27)",
        "Highest monthly stipend: ₹2,00,070",
        "Average stipend: ₹31,264",
        "Top 10% average stipend: ₹92,000",
        "12 global internships across Singapore, Germany, Indonesia, Finland",
        "36% students received multiple internship offers",
        "240% surge in applications for 2025 admission cycle",
        "3.8% selection rate",
        "10+ startups incubated on campus",
        "Students developed app for Government of India's Bhashini project showcased at G20",
        "First-year team qualified for ICPC"
    ],
    "newsUpdates": [
        {
            "title": "Scaler School of Technology reports 96.3% internship placement for first batch with highest stipend of ₹2,00,070",
            "date": "2025-05-28",
            "link": "https://www.scaler.com/blog/scaler-school-of-technology-reports-96-3-internship-placement-for-first-batch-backed-by-strong-industry-and-global-participation/"
        },
        {
            "title": "Scaler School of Technology sees 240% surge in applications for CS and AI programme",
            "date": "2025-06-17",
            "link": "https://www.financialexpress.com/jobs-career/education-scaler-school-of-technology-sees-240-surge-in-applications-for-cs-and-ai-programme-3880007/"
        },
        {
            "title": "Scaler School of Technology launches its first campus in Bengaluru",
            "date": "2023-07-17",
            "link": "https://www.scaler.com/blog/scaler-school-of-technology-launches-its-first-campus-in-bengaluru/"
        },
        {
            "title": "Scaler acquires Pepcoding to strengthen undergraduate program",
            "date": "2023-05-30",
            "link": "https://inc42.com/buzz/scaler-acquires-delhi-based-edtech-startup-pepcoding/"
        }
    ],
    "gallery": [],
    "faqs": [
        {
            "question": "What makes Scaler School of Technology different from traditional engineering colleges?",
            "answer": "Scaler focuses on industry-relevant curriculum designed by experts from Google, Meta, Microsoft; 1:1 mentorship from industry practitioners; mandatory 1-year paid industry internship; 50+ real-world product building; and 3.8% selection rate matching Ivy League standards. Faculty includes engineers who built Facebook Messenger, Uber, and more."
        },
        {
            "question": "What is the fee structure and scholarship opportunities?",
            "answer": "Year 1: ₹3,40,000 + ₹50,000 admission fee; Year 2: ₹4,64,000; Year 3: ₹5,04,000; Year 4: ₹3,40,000. Hostel and mess: approx ₹1,52,000 per year. Merit-based scholarships ranging from 25-100% of tuition fee are available based on NSET performance."
        },
        {
            "question": "What are the placement statistics?",
            "answer": "The first graduating batch is currently in progress. For internship placements (Year 2): 96.3% placement rate across 96 companies, highest stipend ₹2,00,070, average stipend ₹31,264, top 10% average stipend ₹92,000, 12 international internships across Singapore, Germany, Indonesia, Finland. For Scaler's online programs: verified average package of ₹21.6 LPA and highest package of ₹1.7 CR."
        },
        {
            "question": "Is Scaler School recognized by UGC/AICTE?",
            "answer": "No, Scaler School of Technology is not approved by AICTE/UGC as it is a private institute. However, students have the option to simultaneously pursue a formal B.Sc degree from BITS Pilani (Hons) or BS Degree from IIT Madras to meet UGC recognition requirements for higher studies. The master's degree through Woolf carries European Credit Transfer System (ECTS) accreditation."
        },
        {
            "question": "What is the admission process?",
            "answer": "Admission is based on Scaler National Scholarship & Entrance Test (NSET) followed by 2-3 interview rounds with industry experts/staff. Eligibility: Age ≤20 years, minimum 60% in 10+2 with Mathematics. NSET qualifying criteria: >20% overall OR >40% in a particular subject."
        },
        {
            "question": "Where is the campus located?",
            "answer": "The campus is located in Electronic City, Bengaluru, Karnataka - not in Noida. Address: 14, 3rd cross, Parappana Agrahar, Electronic City Phase 1, Bengaluru 560100."
        },
        {
            "question": "Does Scaler provide hostel facilities?",
            "answer": "Yes, Scaler provides hostel facilities with double-sharing and triple-sharing options. Facilities include high-speed internet, reading rooms, terrace cafeteria, gaming zone, laundry, 24/7 security, and medical room. Hostel timings: 4:00 AM to 10:30 PM."
        },
        {
            "question": "What specializations are offered?",
            "answer": "Specializations include AI/ML Track, MAANG Track, Algo Trading Track, Engineering Leadership Track. Students can choose any two specializations in Phase 3."
        },
        {
            "question": "Are there opportunities for entrepreneurship?",
            "answer": "Yes, Scaler has a dedicated Innovation Lab that has incubated 10+ student-led startups including Aether Labs and Health Nivaran, with one startup making it to Shark Tank. Students have opportunities to receive funding from top investors."
        }
    ]
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
