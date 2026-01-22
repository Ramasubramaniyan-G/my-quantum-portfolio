import { icon_map } from '@/lib/icon_map';
import { getTechIcon } from '@/utils/getTechIcon';

export const TechBadge = ({ tech }: { tech: string }) => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-950/50 border border-slate-800 text-slate-300 hover:text-white hover:border-white/30 hover:scale-105 transition-all duration-300 cursor-default group">
    <img
      src={getTechIcon(tech)}
      alt={tech}
      className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity"
      onError={(e: any) => { e.target.style.display = 'none'; }}
    />
    {tech}
  </span>
);