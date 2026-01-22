import { simpleIcons } from '@/lib/icon_map';
import { devIcons, deviconSuffix } from '@/lib/icon_map';

const getSimpleIcon = (techName: string) => {
  const normalized = techName.toLowerCase().trim();
  const slug = simpleIcons[normalized] || normalized.replace(/\s+/g, '').replace(/\./g, 'dot');
  return techName !== "LLMs" ? `https://cdn.simpleicons.org/${slug}` : `https://cdn.simpleicons.org/probot`;
}

const getDevIcon = (techName: string) => {
  const slug = devIcons[techName];
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original${techName in deviconSuffix ? deviconSuffix[techName] : ""}.svg`;
}

export const getTechIcon = (techName: string) => {
  if (techName in devIcons) {
    return getDevIcon(techName);
  }
  return getSimpleIcon(techName);
};