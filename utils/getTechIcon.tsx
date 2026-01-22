import { simpleIcons } from '@/lib/icon_map';
import { devIcons, deviconSuffix, explicitIcons } from '@/lib/icon_map';

const getSimpleIcon = (techName: string) => {
  const normalized = techName.toLowerCase().trim();
  const slug = simpleIcons[normalized] || normalized.replace(/\s+/g, '').replace(/\./g, 'dot');
  return techName !== "LLMs" ? `https://cdn.simpleicons.org/${slug}` : `https://cdn.simpleicons.org/probot`;
}

const getDevIcon = (techName: string) => {
  const slug = devIcons[techName];
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original${techName in deviconSuffix ? deviconSuffix[techName] : ""}.svg`;
}

const getExplicitIcon = (techName: string) => {
  return explicitIcons[techName];
}

export const getTechIcon = (techName: string) => {
  if (techName in devIcons) {
    return getDevIcon(techName);
  } else if (techName in explicitIcons) {
    return getExplicitIcon(techName);
  }
  return getSimpleIcon(techName);
};