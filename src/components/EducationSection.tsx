import React from 'react';
import { GraduationCap, School, Award } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-8 border-b border-[#261b54]/40">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-slate-400 uppercase pb-2">
            <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
            <span>KNOWLEDGE MATRIX // ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-space text-white tracking-tight">
            Education & Foundations
          </h2>
        </div>

        {/* Education Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION.map((item) => (
            <div
              key={item.id}
              id={`edu-card-${item.id}`}
              className="group flex items-start gap-4 p-6 rounded-xl bg-[#0f0a24]/90 border border-[#261b54] hover:border-purple-500/50 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
            >
              <div className="w-12 h-12 rounded-lg bg-[#191138] border border-purple-900/50 flex items-center justify-center shrink-0 group-hover:border-purple-500/50 group-hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] transition-all">
                {item.iconName === 'school' ? (
                  <School className="w-5 h-5 text-purple-400" />
                ) : (
                  <Award className="w-5 h-5 text-purple-400" />
                )}
              </div>

              <div className="space-y-1.5 flex-1">
                <div className="text-[10px] sm:text-[11px] font-mono tracking-widest text-slate-400 uppercase">
                  {item.levelTag}
                </div>
                <h3 className="text-lg font-bold font-space text-white group-hover:text-purple-200 transition-colors">
                  {item.institution}
                </h3>
                <div className="text-xs sm:text-sm font-manrope text-slate-300">
                  {item.subtitle}
                </div>
                <div className="text-xs font-mono text-purple-300/80 pt-1">
                  {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
