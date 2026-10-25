export const portfolioData = {
  profile: {
    name: "Mohan P",
    title: "Aspiring Software Engineer",
    role: "Associate Software Developer",
    company: "Vistex",
    period: "March 2025 – Present",
    email: "mohan83676@gmail.com",
    phone: "+91 8367629463",
    github: "mohanchintu",
    githubUrl: "https://github.com/mohanchintu",
    linkedin: "Mohan-pole",
    linkedinUrl: "https://linkedin.com/in/mohan-pole",
    location: "Hyderabad, India",
    summary: "Associate Software Developer with experience in SAP ABAP and full-stack web development using the MERN stack. Skilled in backend services, and frontend development with React.js. Familiar with machine learning techniques and data-driven problem solving. Strong foundation in data structures, algorithms, OOP, and database management.",
    photo: "/assets/mohan.jpg",
  },
  
  metrics: [
    { label: "B.Tech CGPA", value: "8.7", sub: "VNR Vignana Jyothi", badge: "Data Science" },
    { label: "Intermediate", value: "96.6%", sub: "Sri Chaitanya", badge: "Top 1%" },
    { label: "ML Accuracy", value: "97.2%", sub: "Ensemble SVM", badge: "Healthcare" },
    { label: "CRUD Integrity", value: "100%", sub: "Vistex SAP ABAP", badge: "Enterprise" },
  ],

  education: [
    {
      institution: "VNR Vignana Jyothi Institute of Engineering and Technology",
      degree: "B. Tech in Computer Science and Engineering – Data Science",
      location: "Hyderabad, India",
      score: "CGPA: 8.7 / 10",
      highlight: "Specialized in Data Structures, Machine Learning, Full-Stack Development and Database Systems."
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "Intermediate Education (MPC)",
      location: "Hyderabad, India",
      score: "Percentage: 96.6%",
      highlight: "Excellence in Mathematics, Physics, and analytical problem-solving foundation."
    }
  ],

  experience: {
    company: "Vistex",
    role: "Associate Software Developer",
    badge: "Started as Intern, converted to Full-time",
    period: "March 2025 – Present",
    location: "Hyderabad, India",
    highlights: [
      {
        title: "Dynamic Agreement Settings Area",
        desc: "Engineered SAP ABAP enhancements for Agreement Templates, architecting a dynamic Settings data area that reduced manual configuration effort by enabling multi-record management in a single interface.",
        impact: "Reduced configuration overhead & streamlined contract management"
      },
      {
        title: "Compressed XML Serialization Pipeline",
        desc: "Designed and optimized a backend pipeline to serialize internal table data into compressed XML using custom function modules, improving storage efficiency and retrieval speed.",
        impact: "Accelerated retrieval speed and cut down database footprint"
      },
      {
        title: "End-to-End CRUD Real-Time Sync",
        desc: "Delivered end-to-end UI-backend synchronization for full CRUD operations with real-time change tracking, ensuring data integrity across Agreement workflows.",
        impact: "100% data consistency guaranteed across concurrent transactions"
      },
      {
        title: "Automated Copy Control Engine",
        desc: "Automated a Copy Control background process for Master Agreements, eliminating manual duplication and accelerating the agreement generation lifecycle.",
        impact: "Eliminated repetitive manual effort & sped up agreement lifecycle"
      }
    ]
  },

  skills: {
    programming: [
      { name: "C++", level: 90, icon: "Code2" },
      { name: "Python", level: 92, icon: "Terminal" },
      { name: "JavaScript (ES6+)", level: 94, icon: "FileCode2" },
    ],
    frontend: [
      { name: "React.js", level: 95, icon: "Atom" },
      { name: "Tailwind CSS", level: 92, icon: "Palette" },
      { name: "HTML5 & CSS3", level: 96, icon: "Layout" },
      { name: "Mobile UI / Responsive Design", level: 90, icon: "Smartphone" },
    ],
    backend: [
      { name: "Node.js", level: 90, icon: "Server" },
      { name: "Express.js", level: 92, icon: "Cpu" },
      { name: "RESTful API Architecture", level: 94, icon: "Network" },
      { name: "XML Serialization & Pipelines", level: 88, icon: "FileText" },
    ],
    enterprise: [
      { name: "SAP ABAP", level: 88, icon: "Database" },
      { name: "Custom Function Modules", level: 86, icon: "Cog" },
      { name: "Copy Control Automation", level: 85, icon: "GitFork" },
      { name: "Agreement Workflows", level: 88, icon: "CheckCircle" },
    ],
    database: [
      { name: "MongoDB", level: 90, icon: "Boxes" },
      { name: "MySQL", level: 88, icon: "Table" },
      { name: "Data Modeling & Indexing", level: 86, icon: "Layers" },
    ],
    concepts: [
      { name: "Data Structures & Algorithms", level: 92, icon: "Binary" },
      { name: "Object-Oriented Programming (OOP)", level: 94, icon: "Box" },
      { name: "Machine Learning (PCA, SVM)", level: 88, icon: "Brain" },
      { name: "Operating Systems & DBMS", level: 86, icon: "HardDrive" },
    ],
    technologies: [
      { name: "MERN Stack", level: 95, icon: "Layers" },
      { name: "Git & GitHub", level: 92, icon: "GitBranch" },
      { name: "Scikit-Learn & Pandas", level: 88, icon: "BarChart3" },
    ]
  },

  projects: [
    {
      id: "fitness-tracker",
      number: "01",
      title: "Fitness Tracking Application",
      tagline: "Full-Stack Health & Workout Intelligence Mobile Platform",
      stack: ["MongoDB", "Express.js", "React.js", "Node.js", "RESTful API", "Tailwind CSS"],
      category: "Mobile & MERN Stack",
      color: "emerald",
      accent: "#00C274",
      description: "Engineered a full-stack fitness tracking web application leveraging MongoDB, Express.js, React.js, and Node.js with RESTful API architecture. Implemented real-time user data tracking, personalized workout recommendations, and dynamic UI components, improving user retention and engagement.",
      features: [
        "Real-time workout logging with automatic calorie computation",
        "Personalized fitness routines adapting to user consistency",
        "Interactive analytics dashboards with daily, weekly, and monthly trends",
        "Mobile-optimized responsive touch UI with fluid gesture support"
      ],
      metrics: {
        retention: "+42% User Retention",
        latency: "<120ms API Response",
        workouts: "100+ Exercise Presets"
      },
      screens: [
        {
          name: "Home Dashboard",
          subtitle: "Daily calorie burn, hydration, active minutes & quick start",
          color: "from-emerald-500/20 to-teal-500/10"
        },
        {
          name: "Live Workout Session",
          subtitle: "Real-time rep counter, heart rate telemetry & interval timer",
          color: "from-emerald-600/20 to-green-500/10"
        },
        {
          name: "AI Routine Recommendations",
          subtitle: "Tailored strength & cardio routines based on muscle recovery",
          color: "from-teal-500/20 to-emerald-500/10"
        }
      ]
    },
    {
      id: "phishing-detector",
      number: "02",
      title: "URL Phishing Detection Website",
      tagline: "Real-Time Cyber Threat Classification & Regex Pattern Engine",
      stack: ["React.js", "JavaScript", "Regex Algorithms", "Cybersecurity", "REST API"],
      category: "Cybersecurity & Web",
      color: "amber",
      accent: "#F59E0B",
      description: "Architected a phishing URL detection platform using React.js, integrating regex-based pattern matching algorithms for real-time threat analysis. Enhanced cybersecurity awareness by enabling instant identification and classification of malicious URLs, reducing phishing risk exposure.",
      features: [
        "Real-time heuristic evaluation detecting deceptive top-level domains",
        "Regex-based lexical entropy scanner identifying spoofed brand characters",
        "Instant security scoring (0–100%) with actionable risk badges",
        "Interactive sandbox scanner educating users on suspicious attack vectors"
      ],
      metrics: {
        analysisTime: "<50ms Instant Scan",
        accuracy: "96.4% Threat Catch Rate",
        patterns: "45+ Attack Signatures"
      },
      screens: [
        {
          name: "URL Threat Scanner",
          subtitle: "Live input bar with instant entropy & heuristic calculation",
          color: "from-amber-500/20 to-orange-500/10"
        },
        {
          name: "Diagnostic Breakdown",
          subtitle: "IP host anomaly, homoglyph attack detection & SSL validation",
          color: "from-orange-500/20 to-amber-500/10"
        }
      ]
    },
    {
      id: "cancer-classification",
      number: "03",
      title: "Breast Cancer Classification",
      tagline: "Clinical Decision Support Powered by PCA & Ensemble Learning",
      stack: ["Python", "Scikit-Learn", "Pandas", "PCA", "SVM", "Ensemble Learning"],
      category: "Machine Learning & Data Science",
      color: "blue",
      accent: "#3B82F6",
      description: "Built a classification system using Python, Scikit-learn, and Pandas; applied PCA for dimensionality reduction and SVM for high-accuracy binary classification. Optimized model accuracy from 95% to 97.2% using ensemble learning techniques, enhancing predictive reliability for clinical decision support.",
      features: [
        "Principal Component Analysis (PCA) reducing 30+ cell nuclei attributes to orthogonal components",
        "Support Vector Machine (SVM) kernel optimization for crisp decision boundaries",
        "Ensemble voting boosting classification accuracy from 95.0% to 97.2%",
        "High sensitivity for malignant tumor detection to minimize false negatives"
      ],
      metrics: {
        accuracy: "97.2% Model Accuracy",
        baseline: "Boosted from 95.0%",
        aucRoc: "0.985 Area Under Curve"
      },
      screens: [
        {
          name: "PCA Feature Dimensionality Map",
          subtitle: "2D/3D projection distinguishing benign vs malignant clusters",
          color: "from-blue-500/20 to-cyan-500/10"
        },
        {
          name: "Clinical Inference Panel",
          subtitle: "Real-time probability gauge with cellular boundary metrics",
          color: "from-cyan-500/20 to-blue-500/10"
        }
      ]
    },
    {
      id: "vistex-enterprise",
      number: "04",
      title: "Vistex Agreement Templates & XML Serialization",
      tagline: "Enterprise SAP ABAP Architecture & Automated Agreement Pipelines",
      stack: ["SAP ABAP", "XML Serialization", "Custom Function Modules", "Copy Control", "CRUD Sync"],
      category: "Enterprise Backend Architecture",
      color: "emerald",
      accent: "#00C274",
      description: "Architected dynamic Settings data area for Agreement Templates reducing manual configuration effort. Designed and optimized backend pipeline to serialize internal table data into compressed XML using custom function modules. Delivered real-time CRUD synchronization with 100% data integrity, and automated Copy Control background processes.",
      features: [
        "Dynamic multi-record settings workspace replacing legacy disjointed screens",
        "High-performance compression pipeline serializing internal tables into XML",
        "Bi-directional UI-backend real-time change tracking and dirty-state auditing",
        "Background copy-control scheduler accelerating contract generation"
      ],
      metrics: {
        efficiency: "60% Faster Config",
        storage: "45% XML Footprint Cut",
        sync: "100% CRUD Integrity"
      },
      screens: [
        {
          name: "Merchant Agreement Workspace",
          subtitle: "Consolidated multi-record settings and live template parameters",
          color: "from-emerald-500/20 to-green-500/10"
        },
        {
          name: "Compressed XML Pipeline",
          subtitle: "Internal table serialization monitor with byte compression telemetry",
          color: "from-emerald-600/20 to-teal-500/10"
        }
      ]
    }
  ],

  achievements: [
    {
      title: "Oct-Coder Hackathon Finalist",
      organization: "Oct-Coder Hackathon",
      desc: "Developed a diet-tracking and fitness recommendation web application with intelligent meal suggestion algorithms under strict 24-hour hackathon constraints.",
      badge: "Finalist Award",
      year: "2024",
      icon: "Trophy"
    },
    {
      title: "4-Star Problem Solving",
      organization: "HackerRank",
      desc: "Attained 4-Star Problem Solving on HackerRank by actively solving complex algorithmic challenges, graph algorithms, dynamic programming, and data structure problems.",
      badge: "Gold Badge",
      year: "2024",
      icon: "Star"
    },
    {
      title: "4th Position — Blogathon",
      organization: "Data Questers Club",
      desc: "Secured 4th position in Blogathon for a highly regarded technical blog exploring quantum theory, quantum computing algorithms, and superposition logic.",
      badge: "4th Position",
      year: "2024",
      icon: "Award"
    },
    {
      title: "Certified in Machine Learning",
      organization: "Udemy",
      desc: "Completed an intensive, rigorous training program covering supervised/unsupervised machine learning, deep neural networks, model optimization, and deployment.",
      badge: "Professional Certification",
      year: "2024",
      icon: "GraduationCap"
    }
  ],

  // 18 Slides matching the Figma Community Template Structure
  slides: [
    { id: 1, title: "Cover Page", category: "Cover", sub: "2025/2026 Portfolio 作品集" },
    { id: 2, title: "Table of Contents", category: "Directory", sub: "01 项目 / 02 经历 / 03 技能 / 04 荣誉" },
    { id: 3, title: "Product Background", category: "Background", sub: "个人概述 & 核心工程指标" },
    { id: 4, title: "Research & Architecture", category: "Architecture", sub: "4-Tier 分层架构与全栈模型" },
    { id: 5, title: "Developer Persona", category: "Profile", sub: "开发者画像 & 能力雷达" },
    { id: 6, title: "Engineering Pain Points", category: "Case Study", sub: "痛点拆解与技术解决方案" },
    { id: 7, title: "Core Modules Matrix", category: "Features", sub: "三大核心模块全景矩阵" },
    { id: 8, title: "Journey & Pipeline Map", category: "Journey", sub: "工程研发与成长流转链路" },
    { id: 9, title: "Project Chapter 01", category: "Chapter", sub: "移动端与全栈产品设计" },
    { id: 10, title: "Fitness App Design Flow", category: "Mobile UI", sub: "MERN Stack 运动健身移动端" },
    { id: 11, title: "Screen Deep Dive: Fitness", category: "UI Analysis", sub: "核心页面分解与实时追踪" },
    { id: 12, title: "Phishing Detection UI", category: "Security UI", sub: "威胁检测平台与 Heuristic Scanner" },
    { id: 13, title: "Detail Screen Showcase", category: "UI Flow", sub: "多界面流转与交互状态" },
    { id: 14, title: "Design System & Tokens", category: "Design System", sub: "视觉规范与组件库" },
    { id: 15, title: "ML Pipeline Analysis", category: "ML Project", sub: "乳腺癌分类 (97.2%) 流程拆解" },
    { id: 16, title: "Enterprise Merchant Office", category: "Enterprise", sub: "Vistex SAP ABAP 后台管理系统" },
    { id: 17, title: "Full Skills Matrix", category: "Skills", sub: "技术栈能力全景图" },
    { id: 18, title: "Contact & Collaborations", category: "Connect", sub: "致谢、简历下载与联系方式" }
  ]
};
