export const sections = [
  "Home",
  "About",
  "Skills",
  "Projects",
  // "Certifications",
  "Contact",
];

export const projects = [
  {
    title: "Lightning News",
    kicker: "Full-stack news platform",
    description:
      "A full-stack news platform that collects and presents news content through an interactive interface, combining a Vue frontend with a Python/Flask backend.",
    tags: ["Vue 3", "Flask", "Three.js"],
    accent: "pink",
    code: "LN",
    live: "https://lightning-news.netlify.app/",
    github: "https://github.com/Maiesha7-7Moohan/Team-Charlie",
    problem:
      "News content can be scattered across different sources, making it difficult to collect, organise, and explore in one place.",
    solution:
      "A Vue-based frontend works with a Flask backend to collect, process, and present news content through an interactive interface.",
    summary:
      "An interactive full-stack news platform combining modern frontend development with Python backend technologies.",
  },
  {
    title: "ModernTech",
    kicker: "HR management system",
    description:
      "A full-stack HR management system built for ModernTech Solutions, with dedicated interfaces for HR administrators and employees.",
    tags: ["Node.js", "Express", "MySQL"],
    accent: "blue",
    code: "MT",
    live: "https://hr-management-ujr8.onrender.com",
    github: "https://github.com/MattLCA/Module-2-Core-Project.git",
    problem:
      "Managing employee information and HR processes across separate systems can make everyday administration slow and difficult to manage.",
    solution:
      "A centralised HR system provides authentication, attendance, leave, payroll, performance, time-off, issue management, and employee self-service features.",
    summary:
      "A full-stack HR platform designed to bring essential employee and administrative processes into one system.",
  },
 {
  title: "TutorLink",
  kicker: "Student tutoring platform",
  description:
    "A responsive tutoring website designed to help tertiary students find verified, affordable tutors based on their academic needs and learning preferences.",
  tags: ["HTML5", "CSS3", "JavaScript"],
  accent: "lime",
  code: "TL",

  github:
    "https://github.com/nikitamullerr/HTML_CSS_JavaScript_Showcase.git",

  live:
    "https://nikitamullerr.github.io/HTML_CSS_JavaScript_Showcase/",

  problem:
    "Students often struggle to find tutors who are affordable, trustworthy, and suited to their course and individual learning preferences.",

  solution:
    "Our five-person team created TutorLink, a responsive multi-page website that lets students explore verified tutors and filter them by factors such as course, price, availability, and learning style.",

  summary:
    "A collaborative front-end project built with HTML, CSS, and JavaScript. I was responsible for the Testimonials section while contributing to the team's Git-based development workflow.",
},
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: "01",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Vue.js",
      "Vite",
    ],
  },

  {
    title: "Backend",
    icon: "02",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "Flask",
      "MySQL",
    ],
  },

  {
    title: "Tools",
    icon: "03",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
    ],
  },

  {
    title: "Additional Tools",
    icon: "04",
    skills: [
      "Adobe Premiere Pro",
      "Adobe Photoshop",
      "Inkscape",
      "Canva",
    ],
  },
];

export const certifications = [
  {
    issuer: "Cisco",
    title: "Introduction to Cybersecurity",
    type: "Security",
    year: "2024",
    color: "blue",
  },
  {
    issuer: "Cisco",
    title: "Networking Basics",
    type: "Networks",
    year: "2024",
    color: "lime",
  },
  {
    issuer: "Cisco",
    title: "Data Analytics Essentials",
    type: "Data",
    year: "2024",
    color: "pink",
  },
  {
    issuer: "Film Production",
    title: "Diploma in Media Production",
    type: "Creative",
    year: "2022",
    color: "orange",
  },
];

// SVG paths drawn across the screen during section transitions (one per origin section)
export const tracerPaths = [
  "M-40 650 C170 650 150 260 370 260 S590 690 790 510 S1030 130 1480 210",
  "M-40 710 H190 V530 H410 V250 H650 V600 H890 V340 H1130 V150 H1480",
  "M-40 470 C130 120 300 820 480 430 C650 70 820 790 990 410 C1140 110 1290 560 1480 260",
  "M-40 730 L180 520 L360 650 L570 260 L770 430 L980 160 L1160 390 L1480 110",
  "M-40 450 C170 450 160 190 360 190 H570 C760 190 680 690 890 690 H1080 C1260 690 1240 300 1480 300",
  "M-40 180 L230 180 L390 450 L230 720 L590 720 L760 450 L590 180 L980 180 L1150 450 L980 720 L1480 720",
];
