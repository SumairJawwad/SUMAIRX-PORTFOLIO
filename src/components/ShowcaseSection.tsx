import React from 'react';
import { Bot, Globe, Mail, Bus, ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { DEPLOYMENTS } from '../data/portfolioData';
import { DeploymentItem } from '../types';

interface ShowcaseSectionProps {
  onSelectDeployment: (deployment: DeploymentItem) => void;
}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ onSelectDeployment }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'bot':
        return <Bot className="w-6 h-6 text-purple-300" />;
      case 'globe':
        return <Globe className="w-6 h-6 text-purple-300" />;
      case 'mail':
        return <Mail className="w-6 h-6 text-purple-300" />;
      case 'bus':
        return <Bus className="w-6 h-6 text-purple-300" />;
      default:
        return <Bot className="w-6 h-6 text-purple-300" />;
    }
  };

  return (
    <section id="showcase" className="py-16 sm:py-20 scroll-mt-20 w-full overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#261b54]/50"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-slate-400 uppercase">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>VERIFIED ARTIFACTS // REVENUE_OPS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space text-white tracking-tight">
              Upgraded Portfolio Showcase
            </h2>
            <p className="text-xs sm:text-sm font-mono text-purple-400">
              Active web ecosystems, automated pipelines, and operational ledgers
            </p>
          </div>
          <div className="text-xs font-mono tracking-wider text-purple-300 px-3 py-1 rounded-full bg-[#150e32] border border-[#2e1f60] self-start sm:self-auto">
            EXECUTION PARADIGMS (04)
          </div>
        </motion.div>

        {/* 2x2 Grid of 4 Nodes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {DEPLOYMENTS.map((item, idx) => (
            <motion.div
              key={item.id}
              id={`showcase-card-${item.id}`}
              onClick={() => onSelectDeployment(item)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -3 }}
              className="group flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#0e0a22]/95 border border-[#261b54] hover:border-purple-500/60 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] cursor-pointer relative overflow-hidden space-y-6"
            >
              {/* Subtle card top glow */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Top Status & Node Tag Bar */}
                <div className="flex items-center justify-between pb-4">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    <span className="tracking-wider">[ {item.status} ]</span>
                  </div>
                  <div className="px-2.5 py-0.5 rounded border border-[#342468] bg-[#140e2e]/90 text-[10px] font-mono text-slate-300 tracking-wider">
                    {item.code}
                  </div>
                </div>

                {/* Icon and Title / Subtitle Block */}
                <div className="flex items-start gap-4 pt-1 pb-3">
                  <div className="w-12 h-12 rounded-xl bg-[#19113a] border border-[#2d1f60] flex items-center justify-center shrink-0 group-hover:border-purple-400/60 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] transition-all">
                    {getIcon(item.iconName)}
                  </div>
                  <div className="space-y-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold font-space text-white group-hover:text-purple-100 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-manrope text-slate-300">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Narrative Description */}
                <p className="text-slate-300 text-xs sm:text-sm font-manrope leading-relaxed pt-2 pb-4">
                  {item.description}
                </p>

                {/* Tech Tags Pills */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-1 rounded-md bg-[#161036] border border-[#2b1f5e] text-[11px] font-mono text-slate-300 group-hover:border-purple-800/60 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom URL & Action Launch Bar */}
              <div className="pt-4 border-t border-[#211645] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="font-mono text-xs text-slate-400 group-hover:text-purple-300 transition-colors truncate">
                  {item.url}
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectDeployment(item);
                  }}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg border border-[#3b2a75] bg-[#171038]/90 hover:bg-[#251957] hover:border-purple-400/60 text-xs font-mono text-slate-200 hover:text-white transition-all shadow-sm active:scale-95 cursor-pointer shrink-0 min-h-[44px]"
                >
                  <span>Launch Application // Inspect Node</span>
                  <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
