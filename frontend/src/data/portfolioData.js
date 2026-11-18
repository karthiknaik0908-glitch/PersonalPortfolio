export const personalInfo = {
  name: "Karthik Janardhan Naik",
  role: "Computer Science Engineering Student",
  tagline: "Aspiring Software Engineer & Full-Stack Developer",
  college: "Canara Engineering College",
  location: "Mangalore, Karnataka, India",
  email: "karthiknaik0908@gmail.com", // Editable placeholder
  phone: "+91 8105997291", // Editable placeholder
  github: "https://github.com/karthiknaik0908-glitch", // Editable placeholder
  linkedin: "https://www.linkedin.com/in/karthik-janardhan-naik-2312113a2/", // Editable placeholder
  //leetcode: "https://leetcode.com/your-username", // Editable placeholder
  resumeFileName: "Karthik_Janardhan_Naik_Resume.pdf",
  bio: "Passionate Computer Science and Engineering student at Canara Engineering College, Mangalore. Driven by a love for building robust web applications, solving algorithmic problems, and architecting efficient, user-centric full-stack software solutions.",
  careerObjective: "Dedicated and detail-oriented Computer Science Engineering student seeking an impactful software engineering role or internship. Committed to leveraging strong fundamentals in algorithms, modern JavaScript frameworks, and database engineering to build scalable, high-performance web products that deliver exceptional value.",
};

export const stats = [
  { label: "Featured Projects", value: "3+", icon: "FolderGit2" },
  { label: "Core Technologies", value: "11+", icon: "Cpu" },
  { label: "Engineering Degree", value: "B.E. CSE", icon: "GraduationCap" },
  { label: "Institution", value: "Canara Engg. College", icon: "Building2" },
];

export const skillsData = [
  // Programming Languages
  {
    name: "C",
    category: "Languages",
    level: "Advanced",
    description: "Systems programming, pointers, data structures, and memory management.",
    badge: "Core Language",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Python",
    category: "Languages",
    level: "Proficient",
    description: "Scripting, algorithmic problem solving, automation, and backend utilities.",
    badge: "Core Language",
    color: "from-amber-500 to-yellow-600",
  },
  {
    name: "Java",
    category: "Languages",
    level: "Advanced",
    description: "Object-oriented programming, design patterns, collections, and multi-threading.",
    badge: "Core Language",
    color: "from-red-500 to-orange-600",
  },
  {
    name: "JavaScript",
    category: "Languages",
    level: "Proficient",
    description: "Modern ES6+ syntax, asynchronous programming, DOM manipulation, and promises.",
    badge: "Web Core",
    color: "from-yellow-400 to-amber-500",
  },

  // Frontend Development
  {
    name: "React",
    category: "Frontend",
    level: "Proficient",
    description: "Single-page applications, custom hooks, component lifecycles, and state management.",
    badge: "Frontend Framework",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "HTML",
    category: "Frontend",
    level: "Advanced",
    description: "Semantic HTML5 markup, accessibility (a11y), SEO-friendly structure, and forms.",
    badge: "Markup",
    color: "from-orange-500 to-amber-600",
  },
  {
    name: "CSS",
    category: "Frontend",
    level: "Proficient",
    description: "Modern CSS3 styling, Flexbox, CSS Grid, media queries, and animations.",
    badge: "Styling",
    color: "from-blue-400 to-indigo-500",
  },

  // Backend & Database
  {
    name: "Node.js",
    category: "Backend & Database",
    level: "Proficient",
    description: "Event-driven runtime, asynchronous server logic, and npm package ecosystem.",
    badge: "Runtime",
    color: "from-emerald-500 to-green-600",
  },
  {
    name: "MongoDB",
    category: "Backend & Database",
    level: "Proficient",
    description: "NoSQL document database, Mongoose schemas, Atlas cloud clusters, and aggregations.",
    badge: "Database",
    color: "from-green-500 to-emerald-700",
  },
  {
    name: "Firebase",
    category: "Backend & Database",
    level: "Proficient",
    description: "Cloud Firestore, real-time synchronization, user authentication, and hosting.",
    badge: "BaaS & Cloud",
    color: "from-amber-400 to-orange-500",
  },

  // Tools
  {
    name: "Git",
    category: "Tools",
    level: "Proficient",
    description: "Version control, branching strategies, conflict resolution, and collaborative GitHub workflows.",
    badge: "VCS",
    color: "from-orange-600 to-red-600",
  },
];

export const projectsData = [
  {
    id: "smartshop-ai",
    title: "SmartShop AI",
    tagline: "Intelligent Retail & Smart Commerce Assistant",
    description:
      "A modern AI-assisted retail shopping and product discovery platform designed to simplify consumer purchasing decisions through intelligent price comparisons, real-time store tracking, and an interactive shopping assistant.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST API"],
    category: "Full Stack / AI",
    status: "Completed",
    features: [
      "AI-driven product discovery and personalized shopping recommendations",
      "Dynamic price comparison engine across multiple vendors and stores",
      "Interactive conversational assistant for quick product inquiries",
      "Responsive, clean product catalog with real-time category filtering",
    ],
    githubUrl: "https://github.com/your-username/smartshop-ai", // Editable placeholder
    demoUrl: "https://smartshop-ai-demo.vercel.app", // Editable placeholder
    highlights: "Full-Stack MERN Architecture • Responsive Design • Clean REST APIs",
  },
  {
    id: "mediqueue",
    title: "MediQueue",
    tagline: "Real-Time Healthcare & Outpatient Queue Management System",
    description:
      "A clinic and hospital outpatient department (OPD) queue monitoring solution engineered to minimize patient waiting times, eliminate waiting room congestion, and provide transparent live token status tracking for doctors and patients.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "WebSocket / Realtime"],
    category: "Full Stack / HealthTech",
    status: "Completed",
    features: [
      "Live OPD token display board with real-time status progression",
      "Estimated consultation wait-time prediction algorithm",
      "Doctor and receptionist dashboard for queue control and call-outs",
      "Mobile-friendly patient portal to check queue status remotely",
    ],
    githubUrl: "https://github.com/your-username/mediqueue", // Editable placeholder
    demoUrl: "https://mediqueue-demo.vercel.app", // Editable placeholder
    highlights: "Queue Optimization • Real-Time Token Sync • Clinic Management",
  },
  {
    id: "medicine-finder",
    title: "Medicine Availability Finder",
    tagline: "Geolocation-Powered Neighborhood Pharmacy & Stock Locator",
    description:
      "A healthcare accessibility application that helps patients instantly locate urgent and prescription medicines in nearby verified pharmacies, utilizing GPS geolocation proximity calculations, Google Maps navigation, and inventory synchronization.",
    technologies: ["React", "Node.js", "Express", "Firebase", "MongoDB", "Tailwind CSS", "Google Maps API"],
    category: "Full Stack / Geolocation",
    status: "Completed",
    features: [
      "Geolocation search with Haversine formula calculating exact distance to pharmacies",
      "Direct turn-by-turn navigation link with Google Maps integration",
      "Real-time medicine stock status across verified local retail pharmacies",
      "Emergency contact & click-to-call integration for rapid pharmacy assistance",
    ],
    githubUrl: "https://github.com/your-username/medicine-availability-finder", // Editable placeholder
    demoUrl: "https://medifinder-demo.vercel.app", // Editable placeholder
    highlights: "GPS Distance Tracking • Pharmacy Network • Emergency Health Access",
  },
];

export const educationData = [
  {
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Science and Engineering",
    institution: "Canara Engineering College",
    location: "Benjanapadavu, Bantwal, Mangalore, Karnataka",
    period: "2022 - 2026 (Expected)", // Editable placeholder
    status: "Pursuing Undergraduation",
    highlights: [
      "Affiliated with Visvesvaraya Technological University (VTU) and recognized by AICTE.",
      "Comprehensive coursework in core computer science, software engineering, and web development.",
      "Hands-on technical project development with modern programming languages and frameworks.",
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java/C++)",
      "Database Management Systems (DBMS)",
      "Operating Systems & Systems Programming",
      "Computer Networks",
      "Software Engineering & Architecture",
      "Web Technologies & Full-Stack Development",
    ],
  },
];
