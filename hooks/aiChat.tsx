import { useState } from 'react';
import { RESUME } from '@/lib/resume';

export const useAIResponse = (query: string) => {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const ask = (q: string) => {
    setLoading(true);
    const lowerQ = q.toLowerCase();

    setTimeout(() => {
      let answer = "I'm analyzing your request against Ramasubramaniyan's neural profile...";

      if (lowerQ.includes('contact') || lowerQ.includes('email') || lowerQ.includes('hire')) {
        answer = `You can reach him at ${RESUME.profile.email} or ${RESUME.profile.phone}. He is currently open to new opportunities.`;
      } else if (lowerQ.includes('skills') || lowerQ.includes('stack')) {
        answer = "Rama is a polyglot engineer proficient in Python, Rust, Golang, Java, and TypeScript. He specializes in AI/ML (PyTorch, TensorFlow) and Full-Stack frameworks like Next.js and Django.";
      } else if (lowerQ.includes('quantum') || lowerQ.includes('research')) {
        answer = "His M.Tech dissertation focused on the convergence of Quantum ML and Post-Quantum Cryptography, achieving 97.75% accuracy in phishing detection using Quantum SVCs.";
      } else if (lowerQ.includes('experience') || lowerQ.includes('work')) {
        answer = "He has 5 years of experience, currently at Q-Rounds Inc. dealing with HL7 data. Previously at Citicorp, he won an Innovation Award for automating workflow systems.";
      } else if (lowerQ.includes('project')) {
        answer = "Key projects include an AI Resume Ranker, a Unity Stroke Rehab system, and a Quantum Cybersecurity framework.";
      } else {
        answer = "That's an interesting query. Based on his resume, Ramasubramaniyan is a problem solver with deep interests in Quantum Theory, AI, and Cybersecurity. Ask me about his projects or skills!";
      }

      setResponse(answer);
      setLoading(false);
    }, 1500);
  };

  return { response, loading, ask };
};
