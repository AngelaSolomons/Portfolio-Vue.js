export const sections = ['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Contact']

export const projects = [
  {
    title: 'City Pulse',
    kicker: 'Data experience',
    description: 'A visual dashboard turning live urban data into clear, human stories.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    accent: 'lime',
    code: 'CP',
    problem: 'Public city data is often fragmented, dense, and difficult to interpret at a glance.',
    solution: 'A modular API layer normalises source data while a responsive interface surfaces useful patterns and trends.',
    summary: 'A fast, accessible dashboard that makes complex local data feel clear and actionable.',
  },
  {
    title: 'Frame / Shift',
    kicker: 'Creative platform',
    description: 'An editorial home for emerging filmmakers, screenings, and visual essays.',
    tags: ['TypeScript', 'Express', 'Media'],
    accent: 'pink',
    code: 'FS',
    problem: 'Independent filmmakers need an identity-led space that treats their work with editorial care.',
    solution: 'A media-first publishing system balances cinematic visuals with practical event and creator discovery.',
    summary: 'A bold but usable platform connecting new voices, audiences, and opportunities.',
  },
  {
    title: 'Secure Loop',
    kicker: 'Security utility',
    description: 'A guided cyber-hygiene toolkit for small creative teams and studios.',
    tags: ['Python', 'Cisco', 'Automation'],
    accent: 'blue',
    code: 'SL',
    problem: 'Small teams often lack dedicated security support and a repeatable risk-checking workflow.',
    solution: 'A plain-language assessment flow generates prioritised actions and lightweight audit records.',
    summary: 'Practical security guidance without the enterprise complexity.',
  },
]

export const skillGroups = [
  { title: 'Frontend', icon: '01', skills: ['React', 'TypeScript', 'HTML / CSS', 'Responsive UI'] },
  { title: 'Backend', icon: '02', skills: ['Node.js', 'Python', 'REST APIs', 'PostgreSQL'] },
  { title: 'Tools', icon: '03', skills: ['Git & GitHub', 'Figma', 'VS Code', 'Adobe Suite'] },
  { title: 'Cisco', icon: '04', skills: ['Cybersecurity', 'Networking', 'Data Analytics', 'IoT'] },
]

export const certifications = [
  { issuer: 'Cisco', title: 'Introduction to Cybersecurity', type: 'Security', year: '2024', color: 'blue' },
  { issuer: 'Cisco', title: 'Networking Basics', type: 'Networks', year: '2024', color: 'lime' },
  { issuer: 'Cisco', title: 'Data Analytics Essentials', type: 'Data', year: '2024', color: 'pink' },
  { issuer: 'Film Production', title: 'Diploma in Media Production', type: 'Creative', year: '2022', color: 'orange' },
]

// SVG paths drawn across the screen during section transitions (one per origin section)
export const tracerPaths = [
  'M-40 650 C170 650 150 260 370 260 S590 690 790 510 S1030 130 1480 210',
  'M-40 710 H190 V530 H410 V250 H650 V600 H890 V340 H1130 V150 H1480',
  'M-40 470 C130 120 300 820 480 430 C650 70 820 790 990 410 C1140 110 1290 560 1480 260',
  'M-40 730 L180 520 L360 650 L570 260 L770 430 L980 160 L1160 390 L1480 110',
  'M-40 450 C170 450 160 190 360 190 H570 C760 190 680 690 890 690 H1080 C1260 690 1240 300 1480 300',
  'M-40 180 L230 180 L390 450 L230 720 L590 720 L760 450 L590 180 L980 180 L1150 450 L980 720 L1480 720',
]
