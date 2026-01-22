import { icon_map } from '@/lib/icon_map';

export const getTechIcon = (techName: string) => {
  const normalized = techName.toLowerCase().trim();
  const slug = icon_map[normalized] || normalized.replace(/\s+/g, '').replace(/\./g, 'dot');
  return `https://cdn.simpleicons.org/${slug}`;
};