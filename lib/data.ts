export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    category: "research" | "ai-ml" | "systems" | "web";
    technologies: string[];
    githubUrl: string;
    featured: boolean;
    highlights: string[];
}

export const personalInfo = {
    name: "Manas Sharma",
    title: "Data Science & AI Engineer",
    tagline: "Internship Student specializing in Data Science",
    email: "ms9580@srmist.edu.in",
    phone: "+91 6265586868",
    github: "https://github.com/Manas8114",
    linkedin: "https://linkedin.com/in/manas8114",
    location: "India",
    education: {
        degree: "B.Tech",
        institution: "SRM Institute of Science & Technology",
        startYear: "2022",
        location: "India",
    },
    languages: [
        { name: "Hindi", level: "Native" },
        { name: "English", level: "Proficient" },
        { name: "German", level: "Advanced" },
    ],
    interests: ["Cycling", "Badminton", "Gaming"],
};

export const projects: Project[] = [
    {
        id: "6g-network",
        title: "6G Network AI System",
        description:
            "Enhanced Telecom AI System - a cutting-edge, production-ready telecommunications network management platform powered by 7 advanced AI agents.",
        longDescription:
            "A next-generation telecommunications system leveraging multiple AI agents for intelligent network management, optimization, and predictive maintenance.",
        category: "research",
        technologies: ["Python", "AI Agents", "Telecommunications", "FastAPI"],
        githubUrl: "https://github.com/Manas8114",
        featured: true,
        highlights: [
            "7 advanced AI agents for network management",
            "Production-ready architecture",
            "Real-time network optimization",
            "Predictive maintenance capabilities",
        ],
    },
    {
        id: "ev-adoption",
        title: "Uncertainty-Aware EV Adoption Analysis",
        description:
            "Bayesian hierarchical model with spatial ICAR for EV adoption prediction with rigorous uncertainty quantification.",
        longDescription:
            "A research-grade system that combines Bayesian hierarchical models with spatial Intrinsic Conditional Autoregressive (ICAR) components to predict electric vehicle adoption patterns across regions.",
        category: "research",
        technologies: [
            "Python",
            "PyMC",
            "Bayesian Statistics",
            "Spatial Modeling",
            "Next.js",
        ],
        githubUrl:
            "https://github.com/Manas8114/Uncertainty-Aware-EV-Adoption-Analysis",
        featured: true,
        highlights: [
            "Bayesian model stacking for ensemble predictions",
            "ICAR spatial autocorrelation modeling",
            "Policy simulation dashboard",
            "Uncertainty visualization",
        ],
    },
    {
        id: "atsc-slicing",
        title: "Intent-Driven ATSC Slicing",
        description:
            "AI-native network slicing for rural broadcasting over ATSC 3.0. Built for ITU FG-AINN Build-a-thon 4.0.",
        longDescription:
            "An intent-driven network slicing system for ATSC 3.0 broadcasting infrastructure, designed to optimize spectrum allocation for rural connectivity.",
        category: "research",
        technologies: [
            "TypeScript",
            "Next.js",
            "FastAPI",
            "Network Simulation",
            "AI/ML",
        ],
        githubUrl: "https://github.com/Manas8114/intent-driven-atsc-slicing",
        featured: true,
        highlights: [
            "ITU Build-a-thon 4.0 submission",
            "Intent-to-configuration translation",
            "Real-time telemetry dashboard",
            "Network operations center UI",
        ],
    },
    {
        id: "disaster-management",
        title: "Disaster Management System",
        description:
            "ML-powered platform for disaster prediction, resource allocation, and emergency response coordination.",
        longDescription:
            "Comprehensive disaster management solution using machine learning for early warning systems and optimized resource deployment.",
        category: "ai-ml",
        technologies: ["Python", "Machine Learning", "Data Analysis", "React"],
        githubUrl: "https://github.com/Manas8114",
        featured: true,
        highlights: [
            "Predictive disaster modeling",
            "Resource optimization algorithms",
            "Real-time coordination",
            "Emergency response planning",
        ],
    },
    {
        id: "medicure-app",
        title: "Medicure App",
        description:
            "Healthcare application for medical consultation, prescription management, and health tracking.",
        longDescription:
            "A comprehensive healthcare platform connecting patients with medical professionals, featuring appointment scheduling and health analytics.",
        category: "web",
        technologies: ["Java", "React", "Healthcare APIs", "SQL"],
        githubUrl: "https://github.com/Manas8114/Java-MediCure",
        featured: false,
        highlights: [
            "Patient-doctor connectivity",
            "Prescription management",
            "Health tracking dashboard",
            "Appointment scheduling",
        ],
    },
    {
        id: "legal-qa",
        title: "A-Q Legal System",
        description:
            "Domain-specific NLP system for legal document analysis and question answering.",
        longDescription:
            "A specialized question-answering system trained on legal documents, capable of extracting relevant information and providing cited answers.",
        category: "ai-ml",
        technologies: ["Python", "Transformers", "NLP", "LangChain"],
        githubUrl: "https://github.com/Manas8114/A-Q_legal",
        featured: false,
        highlights: [
            "Legal domain fine-tuning",
            "Citation extraction",
            "Document retrieval",
            "Multi-document synthesis",
        ],
    },
    {
        id: "virtual-cloth",
        title: "Gen AI Virtual Cloth Tryout",
        description:
            "Generative AI-powered virtual clothing try-on using image synthesis and body mapping.",
        longDescription:
            "An innovative virtual try-on solution using generative AI to realistically render clothing on user images.",
        category: "ai-ml",
        technologies: ["Python", "Generative AI", "Computer Vision", "Diffusion Models"],
        githubUrl: "https://github.com/Manas8114",
        featured: false,
        highlights: [
            "Realistic clothing rendering",
            "Body pose estimation",
            "Multiple garment support",
            "Real-time preview",
        ],
    },
    {
        id: "traffic-ai",
        title: "AI Traffic Management System",
        description:
            "Real-time traffic optimization using ML models for intelligent signal control.",
        longDescription:
            "An intelligent traffic management system that uses reinforcement learning to optimize traffic signal timing in real-time.",
        category: "systems",
        technologies: ["Python", "TensorFlow", "Reinforcement Learning", "OpenCV"],
        githubUrl: "https://github.com/Manas8114/AI-traffic-management-system",
        featured: false,
        highlights: [
            "Real-time vehicle detection",
            "Adaptive signal timing",
            "Congestion prediction",
            "Multi-intersection coordination",
        ],
    },
    {
        id: "ml-tree",
        title: "ML Tree for 0 CO₂ Increment",
        description:
            "Machine learning solution for carbon footprint tracking and environmental impact optimization.",
        longDescription:
            "An environmental technology project using ML to track, predict, and minimize carbon emissions across various activities.",
        category: "ai-ml",
        technologies: ["Python", "Machine Learning", "Data Analytics", "Visualization"],
        githubUrl: "https://github.com/Manas8114",
        featured: false,
        highlights: [
            "Carbon footprint calculation",
            "Emission prediction models",
            "Sustainability recommendations",
            "Impact visualization",
        ],
    },
];

export const skills = {
    languages: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 88 },
        { name: "SQL", level: 85 },
        { name: "Java", level: 80 },
        { name: "CSS", level: 85 },
        { name: "TypeScript", level: 82 },
    ],
    aiml: [
        { name: "Machine Learning", level: 90 },
        { name: "Data Analysis", level: 92 },
        { name: "Visualization", level: 88 },
        { name: "Bayesian Methods", level: 82 },
        { name: "NLP/Transformers", level: 80 },
        { name: "Computer Vision", level: 78 },
    ],
    backend: [
        { name: "FastAPI", level: 88 },
        { name: "Node.js", level: 82 },
        { name: "PostgreSQL", level: 80 },
        { name: "Docker", level: 78 },
        { name: "REST APIs", level: 90 },
    ],
    frontend: [
        { name: "React", level: 85 },
        { name: "Next.js", level: 82 },
        { name: "Tailwind CSS", level: 88 },
    ],
    tools: [
        { name: "GitHub", level: 92 },
        { name: "Docker", level: 78 },
        { name: "CI/CD", level: 75 },
        { name: "Statistical Software", level: 85 },
    ],
};

export const achievements = [
    {
        id: "buildathon-itu",
        title: "1st Prize - Build-a-thon 3.0 ITU IIT Delhi",
        type: "competition",
        description:
            "Won first place at the ITU Build-a-thon 3.0 held at IIT Delhi for innovative technology solutions.",
        year: "2024",
        highlight: true,
    },
    {
        id: "ai-agentic",
        title: "2nd Prize - AI Agentic Battle",
        type: "competition",
        description:
            "Secured second position in the AI Agentic Battle competition for developing advanced AI agent systems.",
        year: "2024",
        highlight: true,
    },
    {
        id: "1stop-internship",
        title: "Data Science Intern - 1stop",
        type: "experience",
        description:
            "Built machine learning models for classification and regression problems. Cleaned and manipulated raw data. Used statistical software to analyze large data sets.",
        year: "Jun 2024 - Jul 2024",
        highlight: false,
    },
    {
        id: "itu-buildathon-4",
        title: "ITU FG-AINN Build-a-thon 4.0 Participation",
        type: "competition",
        description:
            "Developed intent-driven AI-native network slicing for rural ATSC 3.0 broadcasting.",
        year: "2026",
        highlight: true,
    },
];

export const certificates = [
    {
        id: "oracle-ai",
        title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
        issuer: "Oracle University",
        date: "April 10, 2025",
        credentialId: "101210390OCI25AICFA",
        context: "Cloud AI fundamentals including machine learning, deep learning, and Oracle OCI services.",
    },
    {
        id: "sql-intermediate",
        title: "SQL (Intermediate)",
        issuer: "HackerRank",
        date: "April 10, 2025",
        credentialId: "5B17E63F18EA",
        context: "Advanced SQL queries, joins, subqueries, and database optimization.",
    },
    {
        id: "java-basic",
        title: "Java (Basic)",
        issuer: "HackerRank",
        date: "May 16, 2024",
        credentialId: "EEA1D0A98A83",
        context: "Core Java programming fundamentals for enterprise applications.",
    },
    {
        id: "python-basic",
        title: "Python (Basic)",
        issuer: "HackerRank",
        date: "October 26, 2023",
        context: "Foundational Python programming skills for data science applications.",
    },
    {
        id: "python-essentials",
        title: "Python Essentials 2 (PCAP Aligned)",
        issuer: "Cisco Networking Academy & OpenEDG Python Institute",
        context: "PCAP – Certified Associate in Python Programming aligned curriculum.",
    },
    {
        id: "java-nptel",
        title: "Programming in Java (Elite Certification)",
        issuer: "NPTEL",
        date: "Jul-Oct 2023",
        credentialId: "NPTEL23CS74S33357435",
        score: "63%",
        context: "Comprehensive Java programming covering OOP, data structures, and algorithms.",
    },
    {
        id: "networking-nptel",
        title: "Demystifying Networking",
        issuer: "NPTEL",
        date: "Jul-Oct 2023",
        score: "52%",
        context: "Understanding of network protocols, architecture, and infrastructure.",
    },
    {
        id: "bigdata-coursera",
        title: "Introduction to Big Data",
        issuer: "UC San Diego via Coursera",
        date: "July 31, 2020",
        verifyUrl: "https://coursera.org/verify/XE6RRLFEBB2A",
        context: "Big data concepts, Hadoop ecosystem, and distributed computing fundamentals.",
    },
    {
        id: "dbms",
        title: "Database Management System",
        issuer: "Great Learning Academy",
        date: "February 2024",
        context: "RDBMS concepts, SQL, normalization, and database design principles.",
    },
];

export const strengths = [
    {
        title: "Creativity and Adaptability",
        description: "Demonstrates creativity and adaptability in problem-solving",
        icon: "✨",
    },
    {
        title: "Problem-Solving",
        description: "Possesses strong problem-solving skills and technical knowledge in machine learning",
        icon: "🧩",
    },
    {
        title: "Data Analysis and Visualization",
        description: "Highly skilled in data analysis and visualization techniques",
        icon: "📊",
    },
];
