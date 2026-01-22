export interface Skills {
    languages: string[];
    frameworks: string[];
    dataAI: string[];
    databases: string[];
    tools: string[];
    security: string[];
    devOps: string[];
    sciptingAndMath: string[];
}


export const skills = {
    languages: ["Python", "Ruby", "Rust", "Java", "C#", "C++", "TypeScript", "JavaScript", "Go", "Perl"],
    frameworks: ["Next.js", "React", "Svelte", "Angular", "Django", "NestJS", "Spring Boot", "FastAPI", "Rails", "GraphQL", "jQuery", "Express", "Koa", "Axios", "Redux", "Prisma", "React Query", "Sinatra", "Streamlit"],
    dataAI: ["PyTorch", "TensorFlow", "scikit-learn", "Pandas", "NumPy", "Keras", "Polars", "Qiskit", "Bokeh", "Seaborn", "Matplotlib", "LLMs", "Plotly", "NLTK"],
    databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Supabase"],
    tools: ["Jenkins", "Git", "Unity", "Neovim", "Jira", "Confluence", "TOSCA", "Airtable", "Vim"],
    security: ["Wireshark", "Burp Suite", "Metasploit", "Kalilinux", "Nmap", "John the Ripper", "Aircrack-ng", "Snort", "BeEF", "OWASP ZAP", "hydra", "Bloodhound", "Shodan", "Maltego", "SQLMap", "LinPEAS"],
    devOps: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Jenkins", "Prometheus", "Ansible", "Gitlab CI/CD", "Github Actions", "Terraform"],
    sciptingAndMath: ["Bash", "PowerShell", "Zsh", "Fish", "Batch", "awk", "MATLAB", "Octave", "Scilab", "Mathematica", "SageMath"]
};