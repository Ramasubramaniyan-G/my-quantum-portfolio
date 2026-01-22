export interface Education {
    degree: string;
    school: string;
    year: string;
    grade: string;
    details: string;
}

export const education: Education[] = [
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
];