export interface Project {
    title: string;
    subtitle: string;
    org?: string;
    desc: string;
    tech: string;
    size: "small" | "medium" | "large";
    links: string[];
}


export const projects: Project[] = [
    {
        title: "Eidetic",
        subtitle: "ALM Automation Suite",
        org: "Citibank",
        desc: `Eidetic is a cross-platform automation solution designed to bridge the gap between test execution
and Microfocus ALM. By leveraging ALM REST APIs, it eliminates manual bottlenecks, enabling testers
to perform bulk screenshot uploads, status updates, and defect logging seamlessly.
● Significant Efficiency Gain: Solves the critical limitation of Microfocus ALM by enabling bulk
screenshot attachments, saving hundreds of manual hours across thousands of test cases.
● End-to-End Automation: Streamlines the entire QA reporting workflow, handling everything
from updating case statuses to linking defects automatically.
● Dual-Platform Architecture: Developed as both a responsive web application using Next.js and
a robust desktop application using PyQt6.
● Advanced API Handling: Utilizes the Got library for primary REST API communication,
specifically chosen for its robust automatic cookie management to maintain secure sessions
with ALM.
● Sole Ownership: Architected, developed, and deployed entirely by me as the sole developer.`,
        tech: "Next.js, Python, Qt",
        size: "large",
        links: [],
    },
    {
        title: "AI/ML HR Solutions",
        subtitle: "Intelligent Resume Ranker",
        org: "DataTerrain Inc.",
        desc: "Python-based HR automation suite leveraging AI, ML, and NLP to streamline recruitment. Parses skills against job descriptions to rank candidates.",
        tech: "Python, Django, FastAPI, Pandas, PyTorch",
        size: "medium",
        links: [],
    },
    {
        title: "Bulk Alert System",
        subtitle: "Validation Engine",
        org: "Citibank",
        desc: "Java/Spring Boot MVC app to automate validation of banking alerts across global markets.",
        tech: "Java, Spring Boot",
        size: "medium",
        links: [],
    },
    {
        title: "Quantum Cybersecurity",
        subtitle: "M. Tech Dissertation",
        desc: `This dissertation investigates the convergence of classical AI, Quantum Machine Learning (QML),
and Post-Quantum Cryptography to fortify modern infrastructure. It focuses on benchmarking
algorithms to detect complex cyber threats, comparing the efficacy of traditional models against
emerging quantum methodologies.           

(i) Comprehensive Threat Detection: Developed detection logic for a wide spectrum of security
vectors, including malicious URLs, email/network phishing, and network intrusions (DDoS, SQL
Injection, XSS, Brute Force, and Probing).

(ii) Classical Model Benchmarking: Implemented and evaluated an extensive suite of classical
algorithms—including SVM, XGBoost, Random Forest, CNNs, RNNs, and Deep Learning
(TensorFlow/PyTorch)—selecting optimal models based on precision, recall, and F1-scores.

(iii) Quantum Machine Learning (QML) Implementation: Utilized IBM’s Qiskit library to
experiment with cutting-edge quantum models, including Variational Quantum Classifiers
(VQC), Quantum SVM (QSVM), Quantum GANs (qGAN), and Quantum Neural Networks (QNN).

(iv) Future-Proofing Architecture: Focused on the integration of Post-Quantum Cryptography
(PQC) alongside AI to prepare cybersecurity frameworks for the era of quantum computing.`,
        tech: "Python, TensorFlow, XGBoost",
        size: "large",
        links: ["https://doi.org/10.47852/bonviewJCCE52025121"]
    },
    {
        title: "NIDS AI",
        subtitle: "Intrusion Detection",
        org: "M. Tech Project",
        desc: "AI-integrated NIDS using deep learning for adaptive, real-time protection against zero-day vulnerabilities.",
        tech: "Python, TensorFlow",
        size: "medium",
        links: [],
    },
    {
        title: "Phishing Detection",
        subtitle: "Malicious URL Shield",
        org: "M. Tech Project",
        desc: "Real-time systems employing deep learning and lexical analysis to identify malicious URLs.",
        tech: "Python, scikit-learn",
        size: "medium",
        links: [],
    },
    {
        title: "Stroke Rehab",
        subtitle: "Unity 3D Gamification",
        org: "Dept of Science & Tech",
        desc: "Gamification project for stroke recovery. 3 Unity-based games integrated with a web portal.",
        tech: "Unity, Python, Django, Django REST Framework, C#, REST APIs, Bootstrap, JavaScript, jQuery",
        size: "small",
        links: [],
    },
    {
        title: "Full-Stack Application Clones",
        subtitle: "Clones of Disney+, Netflix, Hulu, and Amazon",
        org: "Hobby Projects",
        desc: `A suite of pixel-perfect, functional web application replicas of major streaming and ecommerce platforms. Built to demonstrate advanced frontend proficiency, these projects leverage
modern React ecosystems, real-time data integration via TMDB, and serverless Firebase deployment
for high performance and scalability.`,
        tech: "Next.js, React, Tailwind CSS, Firebase, TMDB API",
        size: "medium",
        links: ["https://disney---clone.web.app/", "https://netflix-clone-f2ad5.web.app/", "https://hulu-clone-97ec5.web.app/", "https://clone-26e4e.web.app/"]
    },
    {
        title: "COVID-19 Tracker",
        subtitle: "Global Visualization",
        org: "B.E. Project",
        desc: "React-based geospatial dashboard tracking real-time COVID-19 stats using Johns Hopkins data.",
        tech: "React, Firebase",
        size: "small",
        links: ["https://covid-19-tracker-d6142.web.app/"],
    },
    {
        title: "PoTS-Tracker",
        subtitle: "Digital Health Management for PoTS Patients",
        org: "Hobby Projects",
        desc: `POTS Tracker is a specialized digital health management platform designed to help patients
with Postural Orthostatic Tachycardia Syndrome (POTS) and Long Covid adhere to nonpharmacological treatment protocols. It is explicitly grounded in the research of Fu & Levine (2018),
digitizing the "Levine Protocol" and associated lifestyle modifications into a centralized dashboard for
tracking and education.`,
        tech: "Next.js, React, Tailwind CSS, Firebase, Redux",
        size: "medium",
        links: ["https://pots-tracker.vercel.app/"]
    },
    {
        title: "Chocolate",
        subtitle: "Social Media Platform",
        org: "B.E. Project",
        desc: "Comprehensive social networking app with real-time messaging, privacy controls, and group management.",
        tech: "React, Node.js, MongoDB, Express",
        size: "medium",
        links: [],
    },
];