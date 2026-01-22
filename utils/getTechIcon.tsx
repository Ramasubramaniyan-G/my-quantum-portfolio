import { icon_map } from '@/lib/icon_map';

const exceptions: Record<string, string> = {
  "C#": "csharp",
  "Java": "java",
  "AWS": "amazonwebservices",
  "Azure": "azure",
  "Tailwind CSS": "tailwindcss",
  "Tailwind": "tailwindcss",
  "TailwindCSS": "tailwindcss",
};

const deviconSuffix: Record<string, string> = {
  "AWS": "-wordmark",
}

const getSimpleIcon = (techName: string) => {
  const normalized = techName.toLowerCase().trim();
  if (exceptions[techName]) {
    return exceptions[techName];
  }
  const slug = icon_map[normalized] || normalized.replace(/\s+/g, '').replace(/\./g, 'dot');
  return techName !== "LLMs" ? `https://cdn.simpleicons.org/${slug}` : `https://cdn.simpleicons.org/probot` ;
}

const getDevIcon = (techName: string) => {
  const normalized = techName.toLowerCase().trim();
  const slug = exceptions[techName];
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original${techName in deviconSuffix ? deviconSuffix[techName] : ""}.svg`;
}

export const getTechIcon = (techName: string) => {
  if (techName in exceptions) {
    return getDevIcon(techName);
  }
  return getSimpleIcon(techName);
};