'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, Linkedin, Mail, Phone, MapPin, ExternalLink, 
  Code, Database, Cpu, Globe, BookOpen, 
  Award, Briefcase, GraduationCap, Layers, 
  Server, Shield, Brain, Menu, X, 
  ChevronRight, Star, Music, Send, Sparkles,
  Grid, Aperture, Bot, Trophy
} from 'lucide-react';

/* --- RESUME DATA --- */
const RESUME = {
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
      tech: "Python, TensorFlow, XGBoost", // Replaced IBM Qiskit with Python for icon availability
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

/* --- DYNAMIC ROLES CONFIG --- */
const ROLES = [
  "Cybersecurity Expert",
  "AI/ML Engineer",
  "Quantum Researcher",
  "Full Stack Developer", 
  "Polyglot Programmer",
  "NLP Specialist", 
  "Backend Architect",
  "Robotics Enthusiast"
];

/* --- UTILS: ICON MAPPING --- */
const getTechIcon = (techName) => {
  const map = {
    'c#': 'csharp',
    'c++': 'cplusplus',
    'next.js': 'nextdotjs',
    'node.js': 'nodedotjs',
    'reactjs': 'react',
    'react': 'react',
    'scikit-learn': 'scikitlearn',
    'spring boot': 'springboot',
    'ruby on rails': 'rubyonrails',
    'rails': 'rubyonrails',
    'aws': 'amazonwebservices',
    'gcp': 'googlecloud',
    'postgresql': 'postgresql',
    'linux admin': 'linux',
    'qt': 'qt',
    'pyqt6': 'qt',
    'express': 'express',
    'go': 'go',
    'golang': 'go',
    'unity3d': 'unity',
    'kalilinux': 'kalilinux',
    'burp suite': 'burpsuite',
    'wireshark': 'wireshark'
  };

  const normalized = techName.toLowerCase().trim();
  const slug = map[normalized] || normalized.replace(/\s+/g, '').replace(/\./g, 'dot');
  return `https://cdn.simpleicons.org/${slug}`;
};

/* --- WEBGL SHADERS --- */
const vertexShaderSource = `
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision highp float;
  uniform float time;
  uniform vec2 resolution;
  uniform vec2 mouse;
  
  // Pseudo-random function
  float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
  
  // Noise function
  float noise(vec2 x) {
    vec2 i = floor(x);
    vec2 f = fract(x);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }
  
  // Fractal Brownian Motion
  float fbm(vec2 x) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
    for (int i = 0; i < 5; ++i) {
      v += a * noise(x);
      x = rot * x * 2.0 + shift;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec2 p = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
    
    float t = time * 0.15;
    
    // Mouse influence
    vec2 m = mouse / resolution.xy;
    float dist = distance(uv, m);
    float interaction = smoothstep(0.4, 0.0, dist) * 0.5;
    
    // Quantum field effect
    float q = fbm(p + t * 0.5);
    float r = fbm(p + q + t * 0.2 + interaction);
    
    vec3 color = mix(
      vec3(0.02, 0.02, 0.05), // Deep space
      vec3(0.0, 0.8, 0.9),    // Cyan glow
      clamp(r * r * 1.2, 0.0, 1.0)
    );
    
    // Add neon purple pulse
    float pulse = sin(time + length(p) * 5.0) * 0.5 + 0.5;
    color += vec3(0.6, 0.0, 0.9) * pulse * 0.2 * (1.0 - length(p));
    
    // Vignette
    float vig = 1.0 - length(uv - 0.5) * 1.5;
    color *= vig;
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

/* --- HOOKS & UTILS --- */
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return { mousePosition, hovered, setHovered };
};

const useAmbientSound = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContext = useRef(null);
  const oscillators = useRef([]);

  const toggleSound = () => {
    if (isPlaying) {
      oscillators.current.forEach(osc => osc.stop());
      oscillators.current = [];
      audioContext.current?.close();
      audioContext.current = null;
      setIsPlaying(false);
    } else {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioContext.current = new AudioContext();
      
      const createOsc = (freq, type, vol, pan) => {
        const osc = audioContext.current.createOscillator();
        const gain = audioContext.current.createGain();
        const panner = audioContext.current.createStereoPanner();
        
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioContext.current.currentTime);
        gain.gain.setValueAtTime(vol, audioContext.current.currentTime);
        panner.pan.setValueAtTime(pan, audioContext.current.currentTime);
        
        osc.connect(gain);
        gain.connect(panner);
        panner.connect(audioContext.current.destination);
        osc.start();
        return osc;
      };

      oscillators.current.push(createOsc(130.81, 'sine', 0.05, -0.5)); 
      oscillators.current.push(createOsc(155.56, 'sine', 0.03, 0.5));  
      oscillators.current.push(createOsc(196.00, 'triangle', 0.02, 0)); 
      
      setIsPlaying(true);
    }
  };

  return { isPlaying, toggleSound };
};

// Typewriter Hook
const useTypewriter = (words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    const handleType = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setCharIndex(prev => prev - 1);
          setText(currentWord.substring(0, charIndex - 1));
        } else {
          setIsDeleting(false);
          setWordIndex(prev => prev + 1);
        }
      } else {
        if (charIndex < currentWord.length) {
          setCharIndex(prev => prev + 1);
          setText(currentWord.substring(0, charIndex + 1));
        } else {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timer = setTimeout(handleType, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

const useAIResponse = (query) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const ask = (q) => {
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
        answer = "Key projects include an AI Resume Ranker, a Unity Stroke Rehab system, and a Quantum Cybersec framework.";
      } else {
        answer = "That's an interesting query. Based on his resume, Ramasubramaniyan is a problem solver with deep interests in Quantum Theory, AI, and Cybersecurity. Ask me about his projects or skills!";
      }
      
      setResponse(answer);
      setLoading(false);
    }, 1500);
  };

  return { response, loading, ask };
};

/* --- SUB-COMPONENTS --- */

const TechBadge = ({ tech }) => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-950/50 border border-slate-800 text-slate-300 hover:text-white hover:border-white/30 hover:scale-105 transition-all duration-300 cursor-default group">
    <img 
      src={getTechIcon(tech)} 
      alt={tech} 
      className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity"
      onError={(e) => { e.target.style.display = 'none'; }} 
    />
    {tech}
  </span>
);

const WebGLBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl');
    if (!gl) return;

    let program;
    let positionAttributeLocation;
    let timeUniformLocation;
    let resolutionUniformLocation;
    let mouseUniformLocation;
    let buffer;

    const createShader = (gl, type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const createProgram = (gl, vertexShader, fragmentShader) => {
      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        gl.deleteProgram(program);
        return null;
      }
      return program;
    };

    const init = () => {
      const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
      const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
      program = createProgram(gl, vertexShader, fragmentShader);

      positionAttributeLocation = gl.getAttribLocation(program, "position");
      timeUniformLocation = gl.getUniformLocation(program, "time");
      resolutionUniformLocation = gl.getUniformLocation(program, "resolution");
      mouseUniformLocation = gl.getUniformLocation(program, "mouse");

      buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
        gl.STATIC_DRAW
      );
    };

    init();

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = canvas.height - e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    };
    window.addEventListener('resize', resize);
    resize();

    const render = (time) => {
      gl.useProgram(program);
      gl.enableVertexAttribArray(positionAttributeLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

      gl.uniform1f(timeUniformLocation, time * 0.001);
      gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);
      gl.uniform2f(mouseUniformLocation, mouseX, mouseY);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-0 opacity-40 pointer-events-none" />;
};

const TiltCard = ({ children, className = "", onClick }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.setProperty('--mx', `${x}px`);
    card.style.setProperty('--my', `${y}px`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    }
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative overflow-hidden transition-all duration-200 ease-out group ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-br from-white/5 to-white/0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at var(--mx) var(--my), rgba(6,182,212,0.1), transparent 40%)`
        }}
      />
      {children}
    </div>
  );
};

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ type: 'bot', text: "Hello! I'm Rama's AI Assistant. Ask me anything about his skills, experience, or quantum research." }]);
  const [input, setInput] = useState("");
  const { ask, response, loading } = useAIResponse();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (response) {
      setMessages(prev => [...prev, { type: 'bot', text: response }]);
    }
  }, [response]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { type: 'user', text: input }]);
    ask(input);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 h-96 bg-slate-900/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl flex flex-col shadow-[0_0_50px_-10px_rgba(6,182,212,0.3)] overflow-hidden animate-fade-in-up">
          <div className="p-4 bg-slate-800/50 border-b border-white/5 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-cyan-400" />
              <span className="font-bold text-white text-sm">Portfolio AI</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={16} className="text-slate-400 hover:text-white" /></button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-cyan-900 scrollbar-track-transparent">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed ${
                  msg.type === 'user' 
                    ? 'bg-cyan-600/20 text-cyan-100 border border-cyan-500/30 rounded-br-sm' 
                    : 'bg-slate-800/80 text-slate-200 border border-slate-700/50 rounded-bl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-slate-800/80 p-3 rounded-xl rounded-bl-sm flex gap-1">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-100" />
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t border-white/5 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about my projects..."
              className="flex-1 bg-slate-950/50 border border-slate-700/50 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
            <button 
              onClick={handleSend}
              className="p-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 bg-cyan-500 hover:bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all hover:scale-110 active:scale-95"
      >
        <div className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-50" />
        {isOpen ? <X className="text-white" /> : <Bot className="text-white" />}
      </button>
    </div>
  );
};

/* --- MAIN APP --- */

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mousePosition, setHovered } = useMousePosition();
  const { isPlaying, toggleSound } = useAmbientSound();
  const [scrolled, setScrolled] = useState(false);
  
  // Initialize dynamic text
  const dynamicRole = useTypewriter(ROLES);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'experience', 'projects', 'skills', 'education', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020205] text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-100 overflow-x-hidden">
      
      <WebGLBackground />

      <div 
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[100] hidden md:block mix-blend-screen"
        style={{ 
          transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)`,
          transition: 'transform 0.1s ease-out' 
        }}
      >
        <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-md" />
        <div className="absolute inset-2 bg-white rounded-full opacity-80" />
      </div>

      <button 
        onClick={toggleSound}
        className={`fixed top-24 right-6 z-40 p-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
          isPlaying 
            ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]' 
            : 'bg-slate-900/50 border-slate-700 text-slate-500 hover:text-slate-300'
        }`}
      >
        {isPlaying ? (
          <div className="flex gap-0.5 items-end h-4">
            <span className="w-1 bg-cyan-400 animate-[bounce_1s_infinite] h-2" />
            <span className="w-1 bg-cyan-400 animate-[bounce_1.2s_infinite] h-4" />
            <span className="w-1 bg-cyan-400 animate-[bounce_0.8s_infinite] h-3" />
          </div>
        ) : (
          <Music size={18} />
        )}
      </button>

      <nav className={`
        fixed top-0 w-full z-50 transition-all duration-500 border-b
        ${scrolled 
          ? 'bg-[#05050A]/80 backdrop-blur-xl border-slate-800/50 py-4 shadow-lg shadow-black/20' 
          : 'bg-transparent border-transparent py-6'}
      `}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-purple-500 group">
            <span className="group-hover:tracking-widest transition-all duration-500">RG</span>.
          </a>

          <div className="hidden md:flex gap-1">
            {['Home', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={`
                  relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full
                  ${activeSection === item.toLowerCase() ? 'text-white' : 'text-slate-400 hover:text-white'}
                `}
              >
                {activeSection === item.toLowerCase() && (
                  <span className="absolute inset-0 bg-white/5 rounded-full -z-10 animate-fade-in" />
                )}
                {item}
              </a>
            ))}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-300 p-2">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <div className={`md:hidden absolute top-full left-0 w-full bg-[#05050A] border-b border-slate-800 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="p-6 flex flex-col gap-4">
            {['Home', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-slate-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6">
        
        <section id="home" className="min-h-screen flex flex-col justify-center relative pt-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[150px] animate-pulse-slow pointer-events-none" />
          
          <div className="max-w-4xl space-y-8 animate-fade-in-up relative z-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-cyan-300 text-sm font-medium shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)] h-10">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span className="min-w-[20px]">{dynamicRole}<span className="animate-pulse text-cyan-400">|</span></span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
              Quantum <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 animate-gradient-x">Architect.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed font-light">
              Hi, I'm <strong className="text-white font-semibold">Ramasubramaniyan</strong>. 
              I build intelligent systems at the intersection of 
              <span className="text-cyan-400 font-medium"> Full-Stack</span>, 
              <span className="text-purple-400 font-medium"> AI/ML</span>, and 
              <span className="text-emerald-400 font-medium"> Post-Quantum Cryptography</span>.
            </p>

            <div className="flex flex-wrap gap-5 pt-6">
              <a 
                href="#contact" 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]"
              >
                Let's Connect <ChevronRight size={18} />
              </a>
              <a 
                href="#projects" 
                className="px-8 py-4 rounded-full bg-white/5 text-white font-bold hover:bg-white/10 transition-all border border-white/10 backdrop-blur-md flex items-center gap-2"
              >
                View Research
              </a>
            </div>

            <div className="flex gap-8 pt-12 border-t border-white/10 max-w-xl">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">5+</span>
                <span className="text-sm text-slate-500 uppercase tracking-wider mt-1">Years Exp</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">10+</span>
                <span className="text-sm text-slate-500 uppercase tracking-wider mt-1">Projects</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">97%</span>
                <span className="text-sm text-slate-500 uppercase tracking-wider mt-1">AI Accuracy</span>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-32">
          <div className="flex items-center gap-4 mb-16">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10">
              <Briefcase className="text-cyan-400" size={24} />
            </div>
            <h2 className="text-4xl font-bold text-white">Career Trajectory</h2>
          </div>
          
          <div className="relative border-l-2 border-slate-800 ml-4 md:ml-12 pl-8 md:pl-16 space-y-16">
            {RESUME.experience.map((job, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[57px] md:-left-[89px] top-0 p-3 bg-[#05050A] border-2 border-slate-700 rounded-full text-slate-500 group-hover:text-cyan-400 group-hover:border-cyan-500 transition-all z-10">
                  <Briefcase size={20} />
                </div>
                
                <TiltCard className="bg-slate-900/40 backdrop-blur-md border border-slate-800/50 rounded-2xl p-8 hover:border-cyan-500/30">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{job.role}</h3>
                      <p className="text-lg text-slate-300 mt-1">{job.company}</p>
                    </div>
                    <div className="text-sm font-mono text-cyan-400 bg-cyan-950/30 px-4 py-2 rounded-full border border-cyan-500/20 w-fit whitespace-nowrap">
                      {job.duration}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {job.details.slice(0, -1).map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-500/50 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                    {job.details[job.details.length - 1].replace("Tech Stack: ", "").split(", ").map((tech, i) => (
                      <TechBadge key={i} tech={tech} />
                    ))}
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-32">
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10">
                <Layers className="text-purple-400" size={24} />
              </div>
              <h2 className="text-4xl font-bold text-white">Innovation Lab</h2>
            </div>
            <div className="hidden md:flex gap-2">
              <button className="p-2 bg-white/5 rounded-lg text-slate-400 hover:text-white"><Grid size={20} /></button>
              <button className="p-2 rounded-lg text-slate-600 hover:text-white"><Aperture size={20} /></button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-6">
            {RESUME.projects.map((project, idx) => {
              const spanClass = project.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                              project.size === 'medium' ? 'md:col-span-2' : 'md:col-span-1';
              
              return (
                <TiltCard key={idx} className={`${spanClass} flex flex-col justify-between bg-slate-900/40 backdrop-blur-md border border-slate-800/50 rounded-3xl p-8 hover:border-purple-500/30 group`}>
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 rounded-lg bg-white/5 text-purple-400 group-hover:text-white group-hover:bg-purple-500 transition-all duration-300">
                        {project.title.includes('AI') ? <Brain size={24} /> : 
                         project.title.includes('Quantum') ? <Cpu size={24} /> : 
                         <Code size={24} />}
                      </div>
                      <ExternalLink size={20} className="text-slate-600 group-hover:text-white transition-colors" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:translate-x-1 transition-transform">{project.title}</h3>
                    <p className="text-sm font-medium text-purple-400 mb-4">{project.subtitle}</p>
                    
                    <p className={`text-slate-400 text-sm leading-relaxed line-clamp-3 ${project.size === 'large' ? 'text-base line-clamp-none' : ''}`}>
                      {project.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.split(', ').slice(0, project.size === 'small' ? 2 : 4).map((tech) => (
                      <TechBadge key={tech} tech={tech} />
                    ))}
                  </div>
                  
                  {project.size === 'large' && (
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none" />
                  )}
                </TiltCard>
              );
            })}
          </div>
        </section>

        <section id="skills" className="py-32">
          <div className="flex items-center gap-4 mb-16">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-white/10">
              <Cpu className="text-emerald-400" size={24} />
            </div>
            <h2 className="text-4xl font-bold text-white">Tech Constellation</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Languages", icon: Code, color: "cyan", skills: RESUME.skills.languages },
              { title: "Frameworks", icon: Globe, color: "purple", skills: RESUME.skills.frameworks },
              { title: "AI & Data", icon: Brain, color: "emerald", skills: RESUME.skills.dataAI },
              { title: "Databases", icon: Database, color: "rose", skills: RESUME.skills.databases },
              { title: "Infrastructure", icon: Server, color: "orange", skills: RESUME.skills.tools },
              { title: "Security", icon: Shield, color: "blue", skills: RESUME.skills.security }
            ].map((group, idx) => (
              <TiltCard key={idx} className="bg-slate-900/40 backdrop-blur-md border border-slate-800/50 rounded-2xl p-6 hover:border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <group.icon className={`text-${group.color}-400`} size={24} />
                  <h3 className="text-xl font-bold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <TechBadge key={skill} tech={skill} />
                  ))}
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        <section id="education" className="py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white">Education</h2>
              </div>
              
              {RESUME.education.map((edu, idx) => (
                <TiltCard key={idx} className="bg-slate-900/40 border border-slate-800/50 rounded-2xl p-8 hover:bg-slate-800/50">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                      <p className="text-cyan-400 font-medium mt-1">{edu.degree}</p>
                    </div>
                    <span className="text-sm font-mono text-slate-500">{edu.year}</span>
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                      {edu.grade}
                    </span>
                    <span className="text-sm text-slate-400">{edu.details}</span>
                  </div>
                </TiltCard>
              ))}
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <Award className="text-yellow-400" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white">Honors & Certs</h2>
              </div>

              <TiltCard className="bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-2xl p-6">
                <div className="flex gap-4">
                  <Star className="text-yellow-400 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-bold text-white">Innovation Award @ Citicorp</h3>
                    <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                      "For single-handedly developing the complete workflow system desktop and web apps."
                    </p>
                  </div>
                </div>
              </TiltCard>

              <TiltCard className="bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 rounded-2xl p-6">
                <div className="flex gap-4">
                  <BookOpen className="text-blue-400 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-bold text-white">Published Researcher</h3>
                    <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                      JCCE 2025: "A Hybrid Framework Integrating QML, AI, and Quantum-Safe Cryptography".
                    </p>
                  </div>
                </div>
              </TiltCard>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                 {RESUME.certifications.map((cert, i) => (
                    <TiltCard key={i} className="bg-slate-900/40 border border-slate-800/50 rounded-xl p-4 hover:border-cyan-500/30 flex items-center gap-3">
                       <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                         <Trophy size={20} />
                       </div>
                       <div>
                         <h4 className="text-sm font-bold text-white leading-tight">{cert.name}</h4>
                         <p className="text-xs text-slate-500 mt-1">{cert.issuer}</p>
                       </div>
                    </TiltCard>
                 ))}
              </div>
            </div>

          </div>
        </section>

        <section id="contact" className="py-32 pb-48">
          <TiltCard className="relative overflow-hidden max-w-4xl mx-auto rounded-[3rem] bg-gradient-to-b from-slate-900 to-black border border-slate-800 text-center p-12 md:p-24">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                Let's Build the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Future.</span>
              </h2>
              <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                I'm actively seeking opportunities in AI/ML Engineering and Full-Stack Development.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <a 
                  href={`mailto:${RESUME.profile.email}`} 
                  className="px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform flex items-center justify-center gap-3"
                >
                  <Mail size={20} />
                  Email Me
                </a>
                <a 
                  href={`tel:${RESUME.profile.phone}`} 
                  className="px-8 py-4 rounded-full bg-white/10 text-white font-bold backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all flex items-center justify-center gap-3"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              </div>
            </div>
          </TiltCard>
        </section>

        <footer className="py-12 border-t border-slate-900/50 text-center">
          <p className="text-slate-600 text-sm font-mono">
            ENGINEERED BY RAMASUBRAMANIYAN G • 2025
          </p>
          <div className="flex justify-center gap-6 mt-4 opacity-50">
            <Github size={20} className="hover:text-white transition-colors cursor-pointer" />
            <Linkedin size={20} className="hover:text-white transition-colors cursor-pointer" />
            <Globe size={20} className="hover:text-white transition-colors cursor-pointer" />
          </div>
        </footer>

      </main>

      <AIChatWidget />

      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
}