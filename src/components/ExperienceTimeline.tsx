import React from 'react';
import {
  Clock,
  Search,
  Share2,
  TrendingUp,
  UserCheck,
  ArrowLeftRight,
  Wrench,
  Users,
  PhoneCall,
  Leaf,
} from 'lucide-react';
import { EXPERIENCES, PERSONAL_INFO } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const getCapsuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'search':
        return <Search className="w-4 h-4 text-purple-400 shrink-0" />;
      case 'share':
        return <Share2 className="w-4 h-4 text-purple-400 shrink-0" />;
      case 'trending':
        return <TrendingUp className="w-4 h-4 text-purple-400 shrink-0" />;
      case 'userCheck':
        return <UserCheck className="w-4 h-4 text-purple-400 shrink-0" />;
      case 'refresh':
        return <ArrowLeftRight className="w-4 h-4 text-purple-400 shrink-0" />;
      case 'tool':
        return <Wrench className="w-4 h-4 text-purple-400 shrink-0" />;
      case 'users':
        return <Users className="w-4 h-4 text-purple-400 shrink-0" />;
      case 'phone':
        return <PhoneCall className="w-4 h-4 text-purple-400 shrink-0" />;
      case 'leaf':
        return <Leaf className="w-4 h-4 text-purple-400 shrink-0" />;
      default:
        return <Search className="w-4 h-4 text-purple-400 shrink-0" />;
    }
  };

  return (
    <section id="timeline" className="py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-12 border-b border-[#261b54]/40">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-slate-400 uppercase">
              <Clock className="w-3.5 h-3.5 text-purple-400" />
              <span>SYSTEM LOGS // CAREER_RECORD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-space text-white tracking-tight">
              Experience Architecture
            </h2>
          </div>
          <div className="text-xs font-mono tracking-wider text-purple-300/80 bg-[#140e2e] px-3 py-1.5 rounded border border-purple-900/40 self-start md:self-auto">
            EPOCH: {PERSONAL_INFO.epoch}
          </div>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative mt-12 pl-6 sm:pl-10">
          {/* Continuous Glowing Beam / Spine */}
          <div className="absolute left-[11px] sm:left-[19px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-purple-500/60 via-purple-700/40 to-transparent"></div>

          <div className="space-y-10">
            {EXPERIENCES.map((exp, idx) => (
              <div key={exp.id} id={`exp-node-${idx}`} className="relative group">
                {/* Timeline Pulse Node */}
                <div className="absolute -left-[24px] sm:-left-[32px] top-6 w-5 h-5 rounded-full bg-[#090714] border-2 border-purple-500 flex items-center justify-center shadow-[0_0_12px_rgba(168,85,247,0.6)] group-hover:scale-110 group-hover:border-purple-300 transition-all z-10">
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                </div>

                {/* Experience Card Container */}
                <div className="p-6 sm:p-7 rounded-xl bg-[#0f0a24]/90 border border-[#261b54] group-hover:border-purple-500/40 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]">
                  {/* Top Metadata Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3">
                    <span className="inline-block px-2.5 py-1 rounded text-[10px] font-mono tracking-wider text-purple-300 bg-[#1d1445]/80 border border-purple-800/50 uppercase">
                      {exp.tag}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {exp.dateRange}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3 className="text-xl sm:text-2xl font-bold font-space text-white tracking-tight group-hover:text-purple-100 transition-colors">
                    {exp.title}
                  </h3>

                  {/* Role Subtitle/Description (if exists) */}
                  {exp.description && (
                    <p className="text-slate-300 text-sm font-manrope leading-relaxed pt-2 pb-4">
                      {exp.description}
                    </p>
                  )}

                  {/* Capability Capsules Grid */}
                  <div
                    className={`grid gap-3 ${
                      exp.capsules.length > 2
                        ? 'grid-cols-1 md:grid-cols-2 pt-4'
                        : 'grid-cols-1 pt-4'
                    }`}
                  >
                    {exp.capsules.map((capsule) => (
                      <div
                        key={capsule.id}
                        className="flex items-start gap-3 p-3.5 rounded-lg bg-[#140e2e]/70 border border-[#211747] hover:border-purple-500/40 transition-colors"
                      >
                        <div className="p-1 rounded bg-[#1f1545] mt-0.5 shrink-0">
                          {getCapsuleIcon(capsule.iconName)}
                        </div>
                        <span className="text-xs sm:text-sm font-manrope text-slate-300 leading-snug">
                          {capsule.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
