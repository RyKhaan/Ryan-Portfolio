export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  type: string;
  role?: string;
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
  liveUrl?: string;
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
      "Software Developer",
      "Computer Engineer",
      "Project Lead & Systems"
    ],
    location: "Cainta, Rizal / Manila, Philippines",
    bio: "I am a Computer Engineering student at ICCT Colleges specializing in software engineering, embedded systems, full-stack application development, and systems design. From architecting distributed church management platforms and municipal e-marketplaces to engineering IoT microcontrollers and smart parking systems, I bridge software and hardware with discipline and precision.",
    fullBio: [
      "I am a Computer Engineering student at the College of Engineering and Digital Technology, ICCT Colleges Foundation Inc., driven by understanding computing systems from physical silicon and microcontrollers up to modern full-stack application architectures.",
      "My technical journey bridges hardware, software, and engineering leadership. As Project Manager for Capstone project Synced N (a multi-role mobile management ecosystem for church music ministries), I led a 10-person multi-disciplinary engineering team through Agile sprints, UML system design, and Firebase deployment. In Palengke.com, I co-engineered an Object-Oriented agri-fishery e-marketplace in partnership with the LGU of Cainta to empower local producers.",
      "In hardware and embedded systems, I design and prototype embedded IoT solutions—including our Smart 3-Ball Digital Spirometer combining ESP32 microcontrollers, VL53L0X Time-of-Flight laser ranging sensors, and MAX30102 pulse oximetry for respiratory rehabilitation, as well as smart telemetry platforms like the Smart Management Parking System."
    ],
    contact: {
      email: "genturo.ryanlloyd@gmail.com",
      github: "https://github.com/ryanlloydgenturo-glitch",
      linkedin: "https://linkedin.com/in/ryan-lloyd-genturo",
      resume: "#",
    }
  },

  projects: [
    {
      id: "synced-n",
      slug: "synced-n-ministry-management",
      title: "Synced N: Ministry Management System",
      category: "Software",
      type: "Android Mobile Application",
      role: "Project Manager & Systems Designer",
      description: "Centralized Android scheduling, setlist management, and team availability coordination system engineered for church music ministries.",
      longDescription: "Capstone software engineering project (Project Nexus) at ICCT Colleges developed in collaboration with New Life Christian Church, Pasig. Implements role-based access control (Admin, Worship Leader, Musician, Vocalist), rehearsal and service scheduling, automatic conflict detection, team substitution workflows, and a centralized database for song lyrics and chord charts. Engineered using Kotlin and Android Studio with Firebase Authentication, Cloud Firestore, and Firebase Cloud Messaging (FCM).",
      architectureNotes: [
        "Role-Based Access Control (Admin, Worship Leader, Musician, Vocalist)",
        "Service & Rehearsal Scheduling Engine with automated team conflict detection",
        "Centralized Song Repertory with live transposable chord charts & lyrics",
        "Cloud Firestore event sync with Firebase Cloud Messaging (FCM) alerts",
        "Figma multi-screen design system spanning 6 core ministry workflows"
      ],
      tags: ["Kotlin", "Android Studio", "Firebase Firestore", "Firebase Auth", "FCM", "Agile / Scrum", "Figma UI/UX"],
      image: "/assets/synced-n-mobile-mockup.webp",
      architectureImage: "/assets/synced-n-architecture-overview.webp",
      featured: true,
      year: "2026",
      githubUrl: "https://github.com/ryanlloydgenturo-glitch/synced-n-mobile"
    },
    {
      id: "palengke-marketplace",
      slug: "palengke-com-farm-to-table",
      title: "Palengke.com: Farm-to-Table E-Marketplace",
      category: "Software",
      type: "E-Commerce Web Platform",
      role: "Co-Developer & Systems Designer",
      description: "Direct-to-consumer agri-fishery e-marketplace connecting local farmers and fisherfolk with Cainta consumers in partnership with LGU Cainta.",
      longDescription: "An Object-Oriented software engineering capstone developed in partnership with the Local Government Unit (LGU) of Cainta, Rizal. Bridges small-scale agricultural producers directly with local consumers to eliminate multi-tiered middleman markups, guarantee 70% direct producer earnings, and reduce post-harvest waste through pre-orders. Incorporates email verification, order management, cooperative origin tracing, shopping cart architecture, and an LGU administrative audit dashboard.",
      architectureNotes: [
        "Direct producer-to-consumer order pipeline eliminating multi-tiered middleman markups",
        "Session-backed shopping cart with dynamic pricing and item quantity management",
        "LGU Cainta administrative monitoring & market oversight audit dashboard",
        "Cooperative origin tracing ensuring direct 70% earnings to local producers"
      ],
      tags: ["OOP Architecture", "JavaScript", "Order Management", "LGU Systems", "UI/UX Design", "E-Commerce"],
      image: "/assets/palengke-marketplace-admin.webp",
      architectureImage: "/assets/palengke-cart-architecture.webp",
      featured: true,
      year: "2025",
      githubUrl: "https://github.com/ryanlloydgenturo-glitch/palengke-marketplace",
      liveUrl: "https://mnonan827-code.github.io/palengke.com/"
    },
    {
      id: "smart-spirometer",
      slug: "smart-3ball-incentive-spirometer",
      title: "Smart 3-Ball Incentive Spirometer",
      category: "Embedded Systems",
      type: "Medical Embedded IoT Device",
      role: "Embedded Systems Lead Developer",
      description: "Microcontroller-based respiratory recovery monitoring system augmenting an incentive spirometer with ToF laser sensing and SpO2 biometrics.",
      longDescription: "An embedded systems medical device designed to improve pulmonary rehabilitation and prevent post-surgical respiratory complications. Integrates an ESP32 microcontroller with three VL53L0X Time-of-Flight (ToF) laser ranging sensors to track real-time spirometry ball elevation, a MAX30102 pulse oximeter for SpO2 oxygen saturation and heart rate monitoring, an I2C multiplexer (TCA9548A), a 1.3-inch OLED interface, and tri-color LED indicators with audible threshold alarms.",
      architectureNotes: [
        "Triple VL53L0X Time-of-Flight (ToF) laser ranging sensors tracking individual chamber ball heights",
        "MAX30102 pulse oximetry sensor logging real-time SpO2 saturation and pulse rate during inhalation",
        "TCA9548A I2C multiplexer resolving fixed sensor addresses on a single microcontroller I2C bus",
        "ESP32 dual-core firmware running FreeRTOS tasks for sampling, OLED telemetry, and LED thresholds"
      ],
      tags: ["Embedded C++", "ESP32", "VL53L0X ToF", "MAX30102", "I2C Multiplexing", "Biometric Sensors", "FreeRTOS"],
      image: "/assets/smart-spirometer-prototype.webp",
      architectureImage: "/assets/smart-spirometer-schematic.webp",
      featured: true,
      year: "2026",
      githubUrl: "https://github.com/ryanlloydgenturo-glitch/smart-spirometer-esp32"
    },
    {
      id: "smart-parking-system",
      slug: "smart-management-parking-system",
      title: "Smart Management Parking System",
      category: "Embedded Systems",
      type: "Arduino Embedded Hardware Project",
      role: "Developer & Hardware Prototyper",
      description: "Arduino-based parking bay monitoring prototype using ultrasonic distance sensing, dynamic slot availability calculation, and a 16x2 LCD status display.",
      longDescription: "A hands-on student embedded systems project engineered on the Arduino Uno (ATmega328P) platform. The system implements automated parking space occupancy detection across a scaled multi-bay desktop parking layout using HC-SR04 ultrasonic sensors. Firmware polls distance readings per slot against calibrated empty/occupied thresholds, updates a 16x2 I2C LCD counter at the entry gate, and drives discrete bi-color LEDs per bay for immediate driver navigation. Engineered strictly as a standalone microcontroller hardware prototype without cloud or web dependencies.",
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
      image: "/assets/arduino-smart-parking-prototype.webp",
      architectureImage: "/assets/arduino-smart-parking-prototype.webp",
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
      media: "/assets/__Laptop_Scene_02.mp4",
      isVideo: true
    },
    {
      id: "mobile-cloud",
      number: "02",
      title: "mobile & cloud systems",
      description: "Native Android application development, cloud database architecture, real-time messaging, and agile engineering leadership across full product lifecycles.",
      skills: ["kotlin & android studio", "cloud firestore", "firebase auth", "fcm push notifications", "agile / scrum leadership", "figma ui/ux"],
      media: "/assets/synced-n-mobile-mockup.webp",
      isVideo: false
    },
    {
      id: "hardware-embedded",
      number: "03",
      title: "embedded systems & hardware",
      description: "Microcontroller firmware, multi-sensor I2C/SPI telemetry, biometric healthcare instrumentation, digital logic, and hardware-software prototyping.",
      skills: ["esp32 & arduino", "embedded c / c++", "tof laser sensors", "max30102 biometrics", "i2c multiplexing", "circuit prototyping"],
      media: "/assets/smart-spirometer-prototype.webp",
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
      description: "Pursuing Bachelor of Science in Computer Engineering (BSCpE) at the College of Engineering and Digital Technology. Specialized in software design, embedded systems, microprocessors, database management, and computer networks."
    },
    {
      period: "2026",
      role: "Project Manager & Engineering Lead",
      organization: "Project Nexus — Synced N",
      orgUrl: "#",
      location: "Cainta / Pasig, Philippines",
      type: "Capstone Project",
      description: "Led a 10-person multi-disciplinary engineering team across 4 Agile development sprints to deliver a production-ready Android church management application for New Life Christian Church, coordinating UML architecture, UI/UX, backend, QA, and deployment."
    },
    {
      period: "2025 — 2026",
      role: "Lead Developer & System Designer",
      organization: "Smart Management Parking System",
      orgUrl: "#",
      location: "Cainta, Rizal",
      type: "Systems Project",
      description: "Architected an automated parking bay monitoring and vehicle telemetry management system with real-time occupancy logging, slot allocation algorithms, and an administrative telemetry console."
    },
    {
      period: "2025",
      role: "Co-Researcher & Systems Developer",
      organization: "Palengke.com Agri-Fishery E-Marketplace",
      orgUrl: "https://mnonan827-code.github.io/palengke.com/",
      location: "Cainta, Rizal",
      type: "Academic Capstone",
      description: "Co-authored and engineered an Object-Oriented farm-to-table e-marketplace platform integrated with the Local Government Unit (LGU) of Cainta to eliminate middleman markups and reduce post-harvest waste."
    },
    {
      period: "2026",
      role: "Embedded Systems Lead Developer",
      organization: "Smart 3-Ball Incentive Spirometer Node",
      orgUrl: "#",
      location: "Cainta, Rizal",
      type: "Embedded Systems",
      description: "Engineered an IoT medical spirometry node integrating an ESP32 microcontroller, three VL53L0X Time-of-Flight laser distance sensors, and MAX30102 pulse oximetry for respiratory rehabilitation."
    }
  ]
};
