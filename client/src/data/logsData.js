export const logsData = [
  {
    id: "log-001",
    title: "LOG ENTRY: SAP ABAP & MERN WORKFLOW SYNCHRONIZATION",
    date: "2025.10.25",
    location: "VISTEX CORP R&D FACILITY, HYDERABAD",
    projectStatus: "IN PRODUCTION",
    projectUpdate: "Engineered SAP ABAP enhancements for Agreement Templates, architecting a dynamic Settings data area that reduced manual configuration effort by enabling multi-record management in a single interface.",
    challenges: "Internal table data needed serialization into compressed XML using custom function modules. High-volume records caused latency and memory overhead. Optimized the compression pipeline and established robust transactional rollback safeguards.",
    nextSteps: "Architecting real-time WebSocket telemetry and automated regression testing pipelines for continuous integration into global client landscapes.",
    conclusion: "Delivered end-to-end UI-backend synchronization for full CRUD operations with real-time change tracking, ensuring data integrity across Agreement workflows and slashing agreement generation turnaround time by 60%.",
    visualRecords: [
      {
        title: "CRUD Synchronization Pipeline",
        description: "Bi-directional state sync architecture between custom React UI and SAP ABAP function modules.",
        badge: "ARCHITECTURE"
      },
      {
        title: "Compressed XML Serializer",
        description: "Benchmark showing 72% reduction in payload footprint and sub-50ms serialization timing.",
        badge: "PERFORMANCE"
      }
    ]
  },
  {
    id: "log-002",
    title: "LOG ENTRY: FULL-STACK FITNESS TRACKING SUITE",
    date: "2024.11.15",
    location: "NEURAL GRID LABS",
    projectStatus: "COMPLETED",
    projectUpdate: "Engineered a full-stack fitness tracking web application leveraging MongoDB, Express.js, React.js, and Node.js with RESTful API architecture.",
    challenges: "Structuring MongoDB aggregation pipelines to compute calorie burn, personalized workout splits, and weekly volume progression across hundreds of simultaneous user routines.",
    nextSteps: "Integrating computer vision posture detection via browser WebAssembly for live rep validation.",
    conclusion: "Implemented real-time user data tracking, personalized workout recommendations, and dynamic UI components, improving user retention and daily engagement by 45%.",
    visualRecords: [
      {
        title: "REST API Architecture Schema",
        description: "Decoupled microservice schema powering user authentication, telemetry logging, and metrics aggregation.",
        badge: "DATABASE"
      }
    ]
  },
  {
    id: "log-003",
    title: "LOG ENTRY: PHISHING URL THREAT DETECTION ENGINE",
    date: "2024.08.10",
    location: "CYBERSECURITY INCUBATOR",
    projectStatus: "DEPLOYED",
    projectUpdate: "Architected a phishing URL detection platform using React.js, integrating regex-based pattern matching algorithms for real-time threat analysis.",
    challenges: "Resolving deceptive obfuscation techniques including unicode homoglyphs, sub-domain cloaking, and multi-hop URL shorteners without inducing noticeable frontend latency.",
    nextSteps: "Training a lightweight neural network to cross-examine WHOIS domain registration age and SSL certificate anomalies in real time.",
    conclusion: "Enhanced cybersecurity awareness by enabling instant identification and classification of malicious URLs, reducing phishing risk exposure for over 1,200 active scans.",
    visualRecords: [
      {
        title: "Threat Vector Parsing Engine",
        description: "Lexical entropy evaluation and heuristic scoring matrix for suspected phishing domains.",
        badge: "SECURITY"
      }
    ]
  },
  {
    id: "log-004",
    title: "LOG ENTRY: BREAST CANCER DIAGNOSTIC CLASSIFICATION",
    date: "2024.04.05",
    location: "BIOMEDICAL AI RESEARCH GROUP",
    projectStatus: "VALIDATED",
    projectUpdate: "Built a high-accuracy classification system using Python, Scikit-learn, and Pandas; applied PCA for dimensionality reduction and Support Vector Machines for binary classification.",
    challenges: "Handling high-dimensional feature collinearity among microscopic nuclei attributes while mitigating class imbalance risks to guarantee minimal false negatives.",
    nextSteps: "Testing explainable AI (XAI) with SHAP and LIME to generate interpretable visual decision boundaries for pathologists.",
    conclusion: "Optimized model diagnostic accuracy from 95.0% to 97.2% utilizing ensemble learning techniques, significantly enhancing predictive reliability for clinical decision support.",
    visualRecords: [
      {
        title: "PCA Dimensionality Clustering",
        description: "Scatter plot projection displaying separable benign vs malignant clusters along principal axes.",
        badge: "MACHINE LEARNING"
      }
    ]
  },
  {
    id: "log-005",
    title: "LOG ENTRY: MASTER AGREEMENT COPY CONTROL ENGINE",
    date: "2025.06.20",
    location: "ENTERPRISE AUTOMATION TEAM",
    projectStatus: "COMPLETED",
    projectUpdate: "Automated a background Copy Control process for Master Agreements in SAP ABAP, eliminating error-prone manual duplicate entries.",
    challenges: "Navigating complex foreign key relational hierarchies, transactional integrity across multiple database tables, and executing in strict background scheduling cycles.",
    nextSteps: "Adding automated webhook notifications to Slack and Microsoft Teams upon agreement duplication completion.",
    conclusion: "Successfully eliminated manual duplication, accelerating the agreement generation lifecycle by 80% and achieving zero data corruption events.",
    visualRecords: [
      {
        title: "Automation State Machine",
        description: "Fault-tolerant background task lifecycle with atomic rollback on failure.",
        badge: "AUTOMATION"
      }
    ]
  }
];
