import { asset } from '../utils/asset';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  type: string;
  role?: string;
  status?: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image: string;
  architectureImage?: string;
  architectureNotes?: string[];
  isConceptualVisual?: boolean;
  conceptualDisclaimer?: string;
  video?: string;
  featured?: boolean;
  year: string;
  githubUrl?: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  skills: string[];
  description: string;
  media: string;
  isVideo?: boolean;
}

export interface TimelineItem {
  period: string;
  role: string;
  organization: string;
  orgUrl?: string;
  location: string;
  type: string;
  description?: string;
}

export interface SkillCategory {
  number: string;
  title: string;
  icon: string;
  skills: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Ryan Lloyd Genturo",
    shortName: "genturo.",
    tagline: "Computer Engineering Student",
    roles: [
      "Computer Engineering Student",
      "Software Developer",
      "Embedded Systems Enthusiast"
    ],
    location: "Pasig City, Philippines",
    bio: "I am a Computer Engineering student at ICCT Colleges passionate about learning and exploring software design, embedded hardware, and practical systems development. From collaborating on mobile applications and municipal web platforms to hands-on experimentation with microcontrollers and sensor circuits, I focus on building solid fundamentals and working alongside teams to solve real problems.",
    fullBio: [
      "I am a Computer Engineering student at the College of Engineering and Digital Technology, ICCT Colleges Foundation Inc., driven by understanding computing systems from physical silicon and microcontrollers up to modern full-stack application architectures.",
      "Outside of coursework and technical projects, I value downtime to reset and gain perspective—enjoying solo dates, exploring quiet spots and new places, and listening to music to refresh my thoughts. These simple routines give me clarity and focus when diving back into complex problems.",
      "As a student developer, I am continuously learning and expanding my practical skills. I enjoy collaborating on academic projects, exploring database management and system design, and experimenting with hardware components, microcontrollers, and sensor integration. Each project gives me an opportunity to apply what I have learned, solve problems, work with others, and continue growing as a developer."
    ],
    contact: {
      email: "ryanlloydgenturo@gmail.com",
      github: "https://github.com/RyKhaan",
      facebook: "https://www.facebook.com/share/1FFxX1MbXz/",
      instagram: "https://www.instagram.com/yanyan_0964?mdxt=MWF0d3V5aHJlaTJrYg==",
      resume: asset('/assets/Ryan_Lloyd_Genturo_Resume.pdf'),
      livePortfolio: "https://rykhaan.github.io/Ryan-Portfolio/",
    }
  },

  projects: [
    {
      id: "synced-n",
      slug: "synced-n-ministry-management",
      title: "Synced N: Ministry Management System",
      category: "Software",
      type: "Android Mobile Application (Software Design Project)",
      role: "Project Lead & Systems Design",
      status: "Currently in Development",
      githubUrl: "https://github.com/RyKhaan/Synced-N",
      description: "Centralized Android scheduling, setlist management, and team availability coordination system currently in development for church music ministries.",
      longDescription: "A collaborative software design project (Project Nexus) at ICCT Colleges currently in active development for New Life Christian Church, Pasig. Implements role-based access workflows (Admin, Worship Leader, Musician, Vocalist), rehearsal and service scheduling, automatic conflict detection, team substitution workflows, and a centralized database for song lyrics and chord charts. Engineered using Kotlin and Android Studio with Firebase Authentication, Cloud Firestore, and Firebase Cloud Messaging (FCM), managed through a disciplined GitHub branching and collaboration workflow.",
      architectureNotes: [
        "GitHub Architecture & Collaborative Lifecycle: Multi-branch workflow (main, develop, feature/bugfix branches) with semantic commits and peer-reviewed pull requests",
        "Role-Based Access Control (Admin, Worship Leader, Musician, Vocalist) across dynamic UI fragments",
        "Service & Rehearsal Scheduling Engine with automated team availability and conflict detection",
        "Centralized Song Repertory with live transposable chord charts & lyrics management",
        "Cloud Firestore real-time synchronization with Firebase Cloud Messaging (FCM) push alerts",
        "Figma design system spanning 6 core ministry workflows aligned with Android Studio layout assets"
      ],
      tags: ["GitHub Architecture", "Kotlin", "Android Studio", "Firebase Firestore", "Firebase Auth", "FCM", "Systems Design", "Figma UI/UX"],
      image: asset('/assets/synced-n-mobile-mockup.webp'),
      architectureImage: asset('/assets/synced-n-architecture-overview.webp'),
      featured: true,
      year: "2026"
    },
    {
      id: "palengke-marketplace",
      slug: "palengke-com-farm-to-table",
      title: "Palengke.com: Farm-to-Table E-Marketplace",
      category: "Software",
      type: "Web Application (Academic Project)",
      role: "Database Developer & Co-Author",
      description: "Direct-to-consumer agri-fishery e-marketplace connecting local farmers and fisherfolk with consumers in partnership with LGU Cainta.",
      longDescription: "An academic software engineering project developed in collaboration with the Local Government Unit (LGU) of Cainta, Rizal. Contributed as Database Developer and Co-Author, designing relational data structures, dynamic shopping cart logic, and administrative monitoring views to empower local producers and reduce middleman markups.",
      architectureNotes: [
        "Direct producer-to-consumer order pipeline eliminating multi-tiered middleman markups",
        "Session-backed shopping cart with dynamic pricing and item quantity management",
        "LGU Cainta administrative monitoring & market oversight audit dashboard",
        "Cooperative origin tracing ensuring direct 70% earnings to local producers"
      ],
      tags: ["Relational Databases", "JavaScript", "Order Management", "LGU Systems", "UI/UX Design", "E-Commerce"],
      image: asset('/assets/palengke-marketplace-admin.webp'),
      architectureImage: asset('/assets/palengke-cart-architecture.webp'),
      featured: true,
      year: "2025"
    },
    {
      id: "smart-spirometer",
      slug: "smart-3ball-incentive-spirometer",
      title: "Smart 3-Ball Incentive Spirometer",
      category: "Embedded Systems",
      type: "IoT Medical Device Prototype (Academic Project)",
      role: "Co-Engineer & Co-Author",
      description: "Microcontroller-based respiratory recovery monitoring prototype augmenting a 3-ball spirometer with ToF laser sensing and SpO2 biometrics.",
      longDescription: "A collaborative embedded systems research prototype designed to support pulmonary rehabilitation. Integrates an ESP32 microcontroller with three VL53L0X Time-of-Flight (ToF) laser ranging sensors to track real-time spirometry ball elevation, a MAX30102 pulse oximeter for SpO2 oxygen saturation and heart rate monitoring, an I2C multiplexer (TCA9548A), a 1.3-inch OLED interface, and tri-color LED indicators with audible threshold alarms.",
      architectureNotes: [
        "Triple VL53L0X Time-of-Flight (ToF) laser ranging sensors tracking individual chamber ball heights",
        "MAX30102 pulse oximetry sensor logging real-time SpO2 saturation and pulse rate during inhalation",
        "TCA9548A I2C multiplexer resolving fixed sensor addresses on a single microcontroller I2C bus",
        "ESP32 dual-core firmware running FreeRTOS tasks for sampling, OLED telemetry, and LED thresholds"
      ],
      tags: ["Embedded C++", "ESP32", "VL53L0X ToF", "MAX30102", "I2C Multiplexing", "Biometric Sensors", "Hardware Prototyping"],
      image: asset('/assets/smart-spirometer-prototype.webp'),
      architectureImage: asset('/assets/smart-spirometer-schematic.webp'),
      featured: true,
      year: "2026"
    },
    {
      id: "smart-parking-system",
      slug: "smart-management-parking-system",
      title: "Smart Management Parking System",
      category: "Embedded Systems",
      type: "Embedded Hardware Prototype (Academic Project)",
      role: "Developer & Hardware Prototyper",
      description: "Arduino-based parking bay monitoring prototype using ultrasonic distance sensing, slot availability calculation, and a 16x2 character LCD display.",
      longDescription: "A small hands-on student embedded systems project engineered on the Arduino Uno (ATmega328P) platform. The system implements automated parking space occupancy detection across a scaled multi-bay desktop parking layout using HC-SR04 ultrasonic sensors. Firmware polls distance readings per slot against calibrated empty/occupied thresholds, updates a 16x2 I2C LCD counter at the entry gate, and drives discrete bi-color LEDs per bay for immediate driver navigation. Engineered strictly as a standalone microcontroller hardware prototype without cloud or web dependencies.",
      architectureNotes: [
        "Arduino Uno (ATmega328P) microcontroller executing timed ultrasonic trigger and pulse timing routines",
        "HC-SR04 ultrasonic rangefinding modules mounted per parking bay to gauge vehicle presence",
        "Threshold-based occupancy logic determining slot state without external computational overhead",
        "16x2 Liquid Crystal Display over I2C showing live vacant slot count at the parking entry",
        "Discrete Red/Green LED indicator matrix signaling individual bay availability"
      ],
      isConceptualVisual: true,
      conceptualDisclaimer: "Representative hardware concept visualization. Developed as a student-level physical Arduino embedded prototype using breadboarding, ultrasonic distance sensors, and a character LCD.",
      tags: ["Arduino Uno", "Embedded C/C++", "HC-SR04 Ultrasonic", "16x2 I2C LCD", "LED Indicators", "Hardware Prototyping"],
      image: asset('/assets/arduino-smart-parking-prototype.webp'),
      architectureImage: asset('/assets/arduino-smart-parking-prototype.webp'),
      featured: true,
      year: "2025"
    }
  ] as Project[],

  services: [
    {
      id: "software-engineering",
      number: "01",
      title: "software development & web",
      description: "Full-stack web applications, Object-Oriented platforms, RESTful APIs, and responsive user interfaces engineered for reliability, scalability, and user-centered utility.",
      skills: ["full stack web", "react & typescript", "oop architecture", "tailwind css", "vite & node.js", "rest apis"],
      media: asset('/assets/service-software-web.webp'),
      isVideo: false
    },
    {
      id: "mobile-cloud",
      number: "02",
      title: "mobile & cloud systems",
      description: "Native Android application development, cloud database architecture, real-time messaging, and agile engineering leadership across full product lifecycles.",
      skills: ["kotlin & android studio", "cloud firestore", "firebase auth", "fcm push notifications", "agile / scrum leadership", "figma ui/ux"],
      media: asset('/assets/service-mobile-cloud.webp'),
      isVideo: false
    },
    {
      id: "hardware-embedded",
      number: "03",
      title: "embedded systems & hardware",
      description: "Microcontroller firmware, multi-sensor I2C/SPI telemetry, biometric healthcare instrumentation, digital logic, and hardware-software prototyping.",
      skills: ["esp32 & arduino", "embedded c / c++", "tof laser sensors", "max30102 biometrics", "i2c multiplexing", "circuit prototyping"],
      media: asset('/assets/smart-spirometer-prototype.webp'),
      isVideo: false
    }
  ],

  toolkit: [
    {
      number: "01",
      title: "software & web",
      icon: "code",
      skills: [
        "typescript",
        "react",
        "vite",
        "tailwind css",
        "kotlin",
        "java / oop",
        "c / c++",
        "python",
        "sql",
        "git / github",
        "rest apis",
        "linux / posix"
      ]
    },
    {
      number: "02",
      title: "mobile, cloud & design",
      icon: "cloud",
      skills: [
        "android studio",
        "firebase auth",
        "cloud firestore",
        "firebase cloud messaging",
        "figma ui/ux",
        "agile / scrum",
        "system architecture",
        "uml modeling",
        "docker"
      ]
    },
    {
      number: "03",
      title: "hardware & embedded iot",
      icon: "cpu",
      skills: [
        "esp32",
        "arduino",
        "embedded c / c++",
        "vl53l0x tof sensors",
        "max30102 pulse oximeter",
        "i2c / spi / uart",
        "tca9548a multiplexing",
        "oled displays",
        "circuit schematics",
        "digital logic"
      ]
    },
    {
      number: "04",
      title: "ai-assisted development & tools",
      icon: "sparkles",
      skills: [
        "claude",
        "gemini",
        "chatgpt",
        "google antigravity"
      ]
    }
  ],

  timeline: [
    {
      period: "2023 — Present",
      role: "Bachelor of Science in Computer Engineering",
      organization: "ICCT Colleges Foundation Inc.",
      orgUrl: "https://icct.edu.ph/",
      location: "Cainta, Rizal, Philippines",
      type: "Degree Program",
      description: "Pursuing Bachelor of Science in Computer Engineering (BSCpE) at the College of Engineering and Digital Technology. Developing fundamentals in software design, embedded systems, microprocessors, database management, and computer networks."
    },
    {
      period: "2026 (In Development)",
      role: "Project Lead & Systems Design",
      organization: "Project Nexus — Synced N",
      orgUrl: "#",
      location: "Pasig / Cainta, Philippines",
      type: "Software Design Project",
      description: "Collaborating on the software design and systems architecture for an Android church music ministry platform for New Life Christian Church, coordinating module workflows, Firestore schema, and UI design."
    },
    {
      period: "2025",
      role: "Developer & Hardware Prototyper",
      organization: "Smart Management Parking System",
      orgUrl: "#",
      location: "Cainta, Rizal",
      type: "Academic Project",
      description: "Built a standalone Arduino Uno hardware prototype utilizing ultrasonic range sensors, breadboard wiring, and a 16x2 I2C character LCD for slot vacancy monitoring."
    },
    {
      period: "2025",
      role: "Database Developer & Co-Author",
      organization: "Palengke.com Agri-Fishery E-Marketplace",
      orgUrl: "#",
      location: "Cainta, Rizal",
      type: "Academic Project",
      description: "Collaborated on an agri-fishery e-marketplace in partnership with LGU Cainta, architecting relational database structures and session-backed shopping cart workflows."
    },
    {
      period: "2026",
      role: "Co-Engineer & Co-Author",
      organization: "Smart 3-Ball Incentive Spirometer",
      orgUrl: "#",
      location: "Cainta, Rizal",
      type: "Academic Project",
      description: "Co-engineered an embedded IoT medical device prototype integrating an ESP32 microcontroller, three VL53L0X Time-of-Flight laser distance sensors, and MAX30102 pulse oximetry for respiratory rehabilitation."
    }
  ]
};
