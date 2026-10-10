export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  type: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image: string;
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
      "Network & Systems"
    ],
    location: "Sydney / Brisbane, Australia",
    bio: "I'm a computer engineering student with a deep focus on software development, embedded hardware, networking, and low-level computer systems. Somewhere between wiring breadboard logic gates and writing high-performance code, I fell into the engineering rabbit hole and never looked back.",
    fullBio: [
      "I am a Computer Engineering student driven by understanding computing systems from physical silicon and logic gates all the way up to distributed software architectures.",
      "My technical journey bridges the gap between hardware and software. Rather than treating computers as black boxes, I design microarchitectures, write bare-metal firmware, configure robust network topologies, and engineer high-performance software applications.",
      "Whether developing high-efficiency systems in C++ and Rust, designing pipelined RISC-V processors in Verilog, or architecting home-lab network clusters with automated tunneling, I prioritize precision, reliability, and elegant engineering."
    ],
    contact: {
      email: "ryan.genturo@example.com",
      github: "https://github.com/ryangenturo",
      linkedin: "https://linkedin.com/in/ryangenturo",
      resume: "#",
    }
  },

  projects: [
    {
      id: "netscope-analyzer",
      slug: "netscope-packet-analyzer",
      title: "NetScope Packet Analyzer",
      category: "Networking",
      type: "Systems / Network Tool",
      description: "High-performance network packet sniffer, telemetry analyzer, and protocol parser engineered in C++ and Rust with real-time stream metrics.",
      longDescription: "NetScope is a low-overhead, multi-threaded network packet analyzer built for deep packet inspection and network security auditing. Utilizes AF_PACKET raw sockets and custom BPF filters to process high throughput traffic with zero packet drops.",
      tags: ["C++20", "Rust", "Networking", "TCP/IP", "Wireshark API", "Linux"],
      image: "/assets/portfolio-snapshot-laptop-1-1.png",
      video: "/assets/__Laptop_Scene_02.mp4",
      featured: true,
      year: "2025",
      githubUrl: "https://github.com/ryangenturo/netscope-packet-analyzer",
      liveUrl: "#"
    },
    {
      id: "riscv-omnicore",
      slug: "riscv-omnicore-processor",
      title: "RISC-V OmniCore Processor",
      category: "Hardware",
      type: "Computer Architecture",
      description: "32-bit pipelined RISC-V (RV32I) processor core designed in SystemVerilog with hazard detection, branch prediction, and FPGA emulation.",
      longDescription: "A complete 5-stage pipelined processor core featuring full hazard forwarding, data hazard stalling, branch resolution unit, and custom memory-mapped I/O controller verified through ModelSim testbenches and synthesized onto Altera Cyclone IV FPGA.",
      tags: ["SystemVerilog", "RISC-V", "FPGA", "Computer Architecture", "ModelSim"],
      image: "/assets/mockup-1600x1131-1.png",
      featured: true,
      year: "2024",
      githubUrl: "https://github.com/ryangenturo/riscv-omnicore",
      liveUrl: "#"
    },
    {
      id: "aerosense-iot",
      slug: "aerosense-embedded-node",
      title: "AeroSense Telemetry Node",
      category: "Embedded Systems",
      type: "Embedded Hardware & IoT",
      description: "Ultra-low power multi-sensor environmental telemetry node running FreeRTOS on ESP32 with LoRaWAN wireless transmission.",
      longDescription: "Custom embedded sensor module measuring particulate air quality, ambient pressure, temperature, and VOC levels. Implements deep-sleep duty cycling for 12+ month battery longevity and transmits encrypted payloads over 868MHz LoRaWAN.",
      tags: ["Embedded C", "FreeRTOS", "ESP32", "LoRaWAN", "I2C/SPI", "Hardware"],
      image: "/assets/DSCF0725_converted-1.webp",
      video: "/assets/Seoul-Hover.mp4",
      featured: true,
      year: "2024",
      githubUrl: "https://github.com/ryangenturo/aerosense-node",
      liveUrl: "#"
    },
    {
      id: "vanguard-cluster",
      slug: "vanguard-homelab-cluster",
      title: "Vanguard Infrastructure Cluster",
      category: "Networking",
      type: "Systems & Infrastructure",
      description: "Bare-metal high-availability home-lab infrastructure cluster with automated WireGuard mesh, redundant DNS, and telemetry monitoring.",
      longDescription: "Personal multi-node server cluster running Debian Linux, Proxmox VE, and lightweight Kubernetes. Configured with automated BGP routing, VLAN isolation for IoT segregation, centralized Prometheus/Grafana metrics, and automated encrypted backup routines.",
      tags: ["Linux", "Docker", "WireGuard", "VLAN", "Prometheus", "HomeLab"],
      image: "/assets/mainscreen-1440x760-1.png",
      featured: false,
      year: "2024",
      githubUrl: "https://github.com/ryangenturo/vanguard-cluster",
      liveUrl: "#"
    },
    {
      id: "kernelforge-os",
      slug: "kernelforge-microkernel",
      title: "KernelForge Microkernel",
      category: "Software",
      type: "Operating Systems",
      description: "Bare-metal x86 microkernel written from scratch in C and Assembly with paging, interrupt handling, preemptive scheduler, and shell.",
      longDescription: "A hobby operating system built to study OS internals. Implements protected mode initialization, GDT/IDT management, 2-level page tables, preemptive round-robin scheduler, PS/2 keyboard driver, and an interactive kernel debugging shell.",
      tags: ["C", "x86 Assembly", "OS Dev", "Paging", "QEMU", "GDB"],
      image: "/assets/maharani-final.jpeg",
      featured: false,
      year: "2024",
      githubUrl: "https://github.com/ryangenturo/kernelforge-os",
      liveUrl: "#"
    },
    {
      id: "logiclab-eda",
      slug: "logiclab-virtual-eda",
      title: "LogicLab Digital Simulator",
      category: "Software",
      type: "Web Application",
      description: "Interactive browser-based digital circuit designer and logic gate simulator built with TypeScript, Canvas, and WebGL rendering.",
      longDescription: "A performant circuit simulation workbench allowing students to visually assemble AND/OR/XOR gates, multiplexers, flip-flops, and sequential counters with propagation delay modeling and interactive truth-table verification.",
      tags: ["TypeScript", "React", "Canvas API", "Digital Logic", "WebGL"],
      image: "/assets/Still-2024-12-23-190718_1.18.2.png",
      featured: false,
      year: "2023",
      githubUrl: "https://github.com/ryangenturo/logiclab-simulator",
      liveUrl: "#"
    },
    {
      id: "hypersync-protocol",
      slug: "hypersync-reliable-udp",
      title: "HyperSync UDP Transport",
      category: "Networking",
      type: "Network Protocol",
      description: "Reliable, connection-oriented transport protocol built atop UDP featuring selective ACK, congestion control, and packet retransmission.",
      longDescription: "Engineered to deliver high throughput with minimal overhead compared to standard TCP. Implements sliding window flow control, RTT variance estimation, fast retransmit, and custom checksum verification.",
      tags: ["Rust", "UDP", "Socket API", "Congestion Control", "Algorithms"],
      image: "/assets/Still-2024-12-23-190730_1.25.1.png",
      featured: false,
      year: "2023",
      githubUrl: "https://github.com/ryangenturo/hypersync-protocol",
      liveUrl: "#"
    }
  ],

  services: [
    {
      id: "software-engineering",
      number: "01",
      title: "software development",
      description: "High-performance systems programming, responsive web applications, and robust developer tooling built for scalability and performance.",
      skills: ["systems programming", "c / c++ & rust", "full stack web", "react & typescript", "linux tooling", "api architecture"],
      media: "/assets/__Laptop_Scene_02.mp4",
      isVideo: true
    },
    {
      id: "hardware-embedded",
      number: "02",
      title: "computer hardware & embedded",
      description: "Digital circuit design, microarchitecture modeling, microcontroller firmware development, and hardware-software co-design.",
      skills: ["risc-v architecture", "systemverilog / fpga", "embedded c / freertos", "stm32 & esp32", "pcb prototyping", "hardware debugging"],
      media: "/assets/mainscreen-1440x760-1.png",
      isVideo: false
    },
    {
      id: "networking-systems",
      number: "03",
      title: "networking & infrastructure",
      description: "Network protocol engineering, traffic telemetry, linux systems administration, and secure isolated homelab cluster infrastructure.",
      skills: ["tcp/ip & raw sockets", "packet telemetry", "linux sysadmin", "wireguard & vpn", "docker & containers", "network security"],
      media: "/assets/Seoul-Hover.mp4",
      isVideo: true
    }
  ],

  toolkit: [
    {
      number: "01",
      title: "build",
      icon: "code",
      skills: [
        "c / c++",
        "rust",
        "python",
        "typescript",
        "react",
        "nextjs",
        "linux / posix",
        "git",
        "docker",
        "cmake",
        "gdb / lldb",
        "sql"
      ]
    },
    {
      number: "02",
      title: "hardware & embedded",
      icon: "cpu",
      skills: [
        "systemverilog",
        "risc-v architecture",
        "embedded c",
        "freertos",
        "stm32",
        "esp32",
        "arduino",
        "fpga emulation",
        "i2c / spi / uart",
        "digital logic",
        "oscilloscope",
        "kicad pcb"
      ]
    },
    {
      number: "03",
      title: "networks & systems",
      icon: "network",
      skills: [
        "tcp / ip protocol",
        "wireshark",
        "raw sockets",
        "packet routing",
        "wireguard vpn",
        "vlan segmentation",
        "linux kernel",
        "bash scripting",
        "dns & dhcp",
        "network security",
        "homelab clusters",
        "prometheus / grafana"
      ]
    }
  ],

  timeline: [
    {
      period: "2023 — Present",
      role: "Computer Engineering Student",
      organization: "University of Technology / QUT",
      orgUrl: "https://www.qut.edu.au/",
      location: "Brisbane, Australia",
      type: "Degree Program",
      description: "Focusing on digital computer systems, microprocessor architecture, operating system design, data structures & algorithms, and communications engineering."
    },
    {
      period: "2024 — Present",
      role: "Systems & Embedded Projects Lead",
      organization: "Autonomous Robotics & Embedded Lab",
      orgUrl: "#",
      location: "Brisbane",
      type: "Academic Team",
      description: "Architecting sensor telemetry firmware and CAN-bus communication links for microcontroller nodes."
    },
    {
      period: "2023 — 2024",
      role: "Junior Software & Web Developer",
      organization: "Technology Solutions Practice",
      orgUrl: "#",
      location: "Brisbane",
      type: "Part-time",
      description: "Developed frontend interfaces and RESTful APIs, optimized database queries, and managed deployment pipelines."
    },
    {
      period: "2023",
      role: "Hardware & Network Lab Assistant",
      organization: "Engineering Computing Facility",
      orgUrl: "#",
      location: "Brisbane",
      type: "Academic Assistant",
      description: "Assisted in configuring managed Cisco switches, testing logic analyzer setups, and troubleshooting breadboard circuits."
    }
  ]
};
