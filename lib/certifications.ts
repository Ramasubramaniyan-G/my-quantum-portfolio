export interface Certification {
    name: string;
    issuer: string;
}

export const certifications: Certification[] = [
    { name: "TOSCA Automation Specialist I & II", issuer: "Tricentis" },
    { name: "IBM z/OS Mainframe Practitioner", issuer: "IBM" },
    { name: "Apigee API Platform Fundamentals", issuer: "Google Cloud" },
    { name: "Advanced System Security", issuer: "Univ of Colorado" }
];