import React from 'react';
import { Rocket, Cpu, ShieldCheck, ExternalLink, ArrowDownRight, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { TELEMETRY_METRICS, DEPLOYMENTS } from '../data/portfolioData';

interface TelemetrySectionProps {
  onSelectMetric?: (index: number) => void;
}

export const TelemetrySection: React.FC<TelemetrySectionProps> = ({ onSelectMetric }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'rocket':
        return <Rocket className="w-4 h-4 text-purple-400" />;
      case 'cpu':
        return <Cpu className="w-4 h-4 text-purple-400" />;
      case 'shield':
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      default:
        return <Layers className="w-4 h-4 text-purple-400" />;
    }
  };

  const handleCardClick = (idx: number) => {
    onSelectMetric?.(idx);
    const showcaseElem = document.getElementById('showcase');
    if (showcaseElem) {
      showcaseElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="telemetry" className="py-8 scroll-mt-20 w-full overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* 3 Truthful Verified Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {TELEMETRY_METRICS.map((metric, idx) => (
            <motion.div
              key={metric.category}
              id={`telemetry-card-${idx}`}
              onClick={() => handleCardClick(idx)}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative group p-6 rounded-2xl bg-[#0f0a24]/90 border border-[#261b54] hover:border-purple-500/60 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] cursor-pointer flex flex-col justify-between"
            >
              {/* Corner specular accent */}
              <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden rounded-tr-2xl">
                <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-purple-400/40 to-transparent rotate-45 transform origin-top-left" />
              </div>

              <div>
                {/* Metric Card Header */}
                <div className="flex items-center justify-between pb-3">
                  <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
                    {metric.category}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#191138] border border-purple-900/50 flex items-center justify-center group-hover:border-purple-500/60 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.3)] transition-all">
                    {getIcon(metric.iconName)}
                  </div>
                </div>

                {/* Stat Display */}
                <div className="flex items-baseline gap-2 py-1">
                  <div className="text-4xl sm:text-5xl font-bold font-space text-white tracking-tight group-hover:text-purple-100 transition-colors">
                    {metric.value}
                  </div>
                  <span className="text-xs font-mono text-purple-400/80 uppercase">
                    [ VERIFIED ]
                  </span>
                </div>

                {/* Footnote / Context */}
                <div className="pt-2 flex items-center gap-2 text-xs font-manrope text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span className="font-medium">{metric.description}</span>
                </div>
              </div>

              {/* Subtext Pills */}
              {metric.subtext && (
                <div className="pt-4 mt-2 border-t border-[#211645] flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono text-slate-400 group-hover:text-slate-200 transition-colors truncate">
                    {metric.subtext}
                  </span>
                  <ArrowDownRight className="w-3.5 h-3.5 text-purple-400/60 group-hover:text-purple-300 shrink-0" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Live System Status Sub-banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-3.5 rounded-xl bg-[#0b081c]/90 border border-[#211746] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-purple-300 font-semibold">VERIFIED PRODUCTION NODES:</span>
            <span className="text-slate-400">4 Active Systems</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {DEPLOYMENTS.map((dep) => (
              <a
                key={dep.id}
                href={dep.fullUrl || '#showcase'}
                target={dep.fullUrl ? '_blank' : '_self'}
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#150f33] hover:bg-[#20154d] border border-[#2c1f5e] hover:border-purple-500/50 text-[11px] font-mono text-slate-200 hover:text-white transition-all shadow-sm group min-h-[32px]"
              >
                <span className="text-emerald-400 text-[9px]">●</span>
                <span className="font-bold text-white group-hover:text-purple-200">{dep.title}</span>
                <span className="text-slate-500 text-[10px]">({dep.code})</span>
                <ExternalLink className="w-2.5 h-2.5 text-purple-400 opacity-60 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
