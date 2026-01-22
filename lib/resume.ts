interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
}

interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  details: string[];
}

interface Project {
  title: string;
  subtitle: string;
  org?: string;
  desc: string;
  tech: string;
  size: "small" | "medium" | "large";
}

interface Skills {
  languages: string[];
  frameworks: string[];
  dataAI: string[];
  databases: string[];
  tools: string[];
  security: string[];
}

interface Education {
  degree: string;
  school: string;
  year: string;
  grade: string;
  details: string;
}

interface Certification {
  name: string;
  issuer: string;
}

interface Resume {
  profile: Profile;
  experience: Experience[];
  projects: Project[];
  skills: Skills;
  education: Education[];
  certifications: Certification[];
}

export const RESUME = {
  profile: {
    name: "Ramasubramaniyan G",
    title: "Software Engineer | AI/ML & Full-Stack Specialist",
    email: "ramasubramaniyan@proton.me",
    phone: "+91-99434 68997",
    location: "Chennai, Tamil Nadu, IN",
    summary: "Highly motivated polyglot programmer with 5 years of experience seeking to leverage expertise in AI/ML (including classical and quantum), NLP, and full-stack development. Proficient in Python, Ruby, Java, TypeScript/JavaScript, and frameworks like Next.js/ReactJS, Angular, Svelte, and Django. Well-versed in backend frameworks (NestJS, Express, Node.js, GraphQL, FastAPI) and various databases. Eager to contribute to innovative projects and push the boundaries of technology."
  },
  experience: [
    {
      company: "Q-Rounds Inc.",
      role: "Software Engineer",
      duration: "Jun 2024 – Present",
      location: "Remote",
      details: [
        "Developing a full-stack web application for hospital queues and patient management.",
        "Implemented notifications via Twilio conference calls and WhatsApp API.",
        "Managed patient data in HL7 format using Golang and integrated with Epic (Fairview).",
        "Handled patient transfer, treatment history, and hospital management workflows.",
        "Collected metrics associated with patient data using Golang.",
        "Tech Stack: Django, Python, Rust, Go, jQuery, GCP, Prometheus, Docker, Linux"
      ]
    },
    {
      company: "Freelancer",
      role: "Freelance Full-Stack Developer",
      duration: "Freelancing",
      location: "Chennai, TN",
      details: [
        "Worked on several full-stack projects designing databases and secure APIs.",
        "Implemented role-based access control for clients.",
        "Achieved high client satisfaction with quality and pace of development.",
        "Tech Stack: Next.js, C#, C++, MongoDB, MySQL, PostgreSQL, GraphQL, Rails, Spring Boot"
      ]
    },
    {
      company: "DataTerrain Inc.",
      role: "Software Engineer",
      duration: "Aug 2023 – Sep 2023",
      location: "Chennai, TN",
      details: [
        "Developed and trained AI/ML & NLP models for HR solutions to rank resumes.",
        "Trained models on hundreds of resumes to identify best candidates based on job descriptions.",
        "Created a web application with an HR dashboard for applicant monitoring.",
        "Tech Stack: Python, Django, React, FastAPI, Pandas, NumPy, scikit-learn, PyTorch"
      ]
    },
    {
      company: "Citicorp",
      role: "C10 - Tech App Developer",
      duration: "Jul 2021 – Jul 2023",
      location: "Chennai, TN",
      details: [
        "Developed a web and desktop app for a complete workflow system (Dev, CI/CD, ALM, Automation), saving significant man-days.",
        "Built a customer onboarding web app for financial services.",
        "Created a CLI tool for validating customer financial records and alerts.",
        "Developed cryptographic services for secure data exchange.",
        "Received 'Innovation Award' for single-handedly developing the workflow system.",
        "Tech Stack: Next.js, TypeScript, Java, Spring Boot, Python, NestJS, Node.js, Tailwind, Redux"
      ]
    }
  ],
  projects: [
    {
      title: "AI/ML HR Solutions",
      subtitle: "Intelligent Resume Ranker",
      org: "DataTerrain Inc.",
      desc: "Python-based HR automation suite leveraging AI, ML, and NLP to streamline recruitment. Parses skills against job descriptions to rank candidates.",
      tech: "Python, Django, FastAPI, Pandas, PyTorch",
      size: "large" 
    },
    {
      title: "Eidetic",
      subtitle: "ALM Automation Suite",
      org: "Citibank",
      desc: "Cross-platform automation solution bridging test execution and Microfocus ALM. Enables bulk screenshot uploads and status updates.",
      tech: "Next.js, Python, Qt",
      size: "medium"
    },
    {
      title: "Bulk Alert System",
      subtitle: "Validation Engine",
      org: "Citibank",
      desc: "Java/Spring Boot MVC app to automate validation of banking alerts across global markets.",
      tech: "Java, Spring Boot",
      size: "small"
    },
    {
      title: "Quantum Cybersec",
      subtitle: "M. Tech Dissertation",
      desc: "Investigated convergence of classical AI, Quantum ML, and PQC. Benchmarked algorithms (QSVM, VQC, qGAN).",
      tech: "Python, TensorFlow, XGBoost", 
      size: "large"
    },
    {
      title: "NIDS AI",
      subtitle: "Intrusion Detection",
      org: "M. Tech Project",
      desc: "AI-integrated NIDS using deep learning for adaptive, real-time protection against zero-day vulnerabilities.",
      tech: "Python, TensorFlow",
      size: "medium"
    },
    {
      title: "Phishing Detection",
      subtitle: "Malicious URL Shield",
      org: "M. Tech Project",
      desc: "Real-time systems employing deep learning and lexical analysis to identify malicious URLs.",
      tech: "Python, scikit-learn",
      size: "medium"
    },
    {
      title: "Stroke Rehab",
      subtitle: "Unity 3D Gamification",
      org: "Dept of Science & Tech",
      desc: "Gamification project for stroke recovery. 3 Unity-based games integrated with a web portal.",
      tech: "Unity, Java, Spring Boot",
      size: "small"
    },
    {
      title: "Chocolate",
      subtitle: "Social Media Platform",
      org: "B.E. Project",
      desc: "Comprehensive social networking app with real-time messaging, privacy controls, and group management.",
      tech: "React, Node.js, MongoDB, Express",
      size: "medium"
    },
    {
      title: "COVID-19 Tracker",
      subtitle: "Global Visualization",
      org: "B.E. Project",
      desc: "React-based geospatial dashboard tracking real-time COVID-19 stats using Johns Hopkins data.",
      tech: "React, Firebase",
      size: "small"
    }
  ],
  skills: {
    languages: ["Python", "Ruby", "Rust", "Java", "C#", "C++", "TypeScript", "JavaScript", "Go", "Perl"],
    frameworks: ["Next.js", "React", "Svelte", "Angular", "Django", "NestJS", "Spring Boot", "FastAPI", "Rails", "GraphQL"],
    dataAI: ["PyTorch", "TensorFlow", "scikit-learn", "Pandas", "NumPy", "Keras"],
    databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Supabase"],
    tools: ["Docker", "Kubernetes", "Jenkins", "Git", "AWS", "Azure", "Linux", "Unity", "Neovim"],
    security: ["Wireshark", "Burp Suite", "Metasploit", "Kalilinux"]
  },
  education: [
    {
      degree: "M. Tech Software Systems",
      school: "BITS Pilani",
      year: "May 2024",
      grade: "GPA: 9.93",
      details: "Minors: Cybersecurity"
    },
    {
      degree: "B.E. EEE (Sandwich)",
      school: "PSG College of Technology",
      year: "Apr 2021",
      grade: "GPA: 9.81",
      details: "Sandwich Course"
    }
  ],
  certifications: [
    { name: "TOSCA Automation Specialist I & II", issuer: "Tricentis" },
    { name: "IBM z/OS Mainframe Practitioner", issuer: "IBM" },
    { name: "Apigee API Platform Fundamentals", issuer: "Google Cloud" },
    { name: "Advanced System Security", issuer: "Univ of Colorado" }
  ]
};
