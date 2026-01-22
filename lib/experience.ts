export interface Experience {
    company: string;
    role: string;
    duration: string;
    location: string;
    details: string[];
}


export const experience: Experience[] = [
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
            "Tech Stack: Python, Django, React, FastAPI, Pandas, NumPy, scikit-learn, PyTorch, LLMs, Spacy"
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
            "Tech Stack: Next.js, TypeScript, Java, Spring Boot, Python, PyQt, NestJS, Node.js, Tailwind, Redux"
        ]
    }
];