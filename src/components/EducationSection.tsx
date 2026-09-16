import React from 'react';
import { GraduationCap, School, Award, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { EDUCATION } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-20 scroll-mt-20 w-full overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#261b54]/50"
        >
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-slate-400 uppercase">
              <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
              <span>KNOWLEDGE MATRIX // ACADEMICS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space text-white tracking-tight">
              Education & Foundations
            </h2>
            <p className="text-xs sm:text-sm font-mono text-purple-400">
              Formal academic qualifications and structural discipline
            </p>
          </div>
          <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-[#171038] border border-purple-700/40 text-purple-300 self-start sm:self-auto">
            ACCREDITATION // VERIFIED
          </span>
        </motion.div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION.map((item, idx) => (
            <motion.div
              key={item.id}
              id={`edu-card-${item.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-6 sm:p-7 rounded-2xl bg-[#0f0a24]/90 border border-[#261b54] hover:border-purple-500/60 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_0_24px_rgba(168,85,247,0.2)] space-y-5"
            >
              {/* Card Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded bg-[#160f38] border border-purple-800/60 text-purple-300 uppercase">
                  {item.levelTag}
                </span>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-semibold flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  <span>{item.gradeBadge || 'Accredited'}</span>
                </span>
              </div>

              {/* Institution Title and Icon */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#191138] border border-purple-800/60 flex items-center justify-center shrink-0 group-hover:border-purple-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] transition-all">
                  {item.iconName === 'school' ? (
                    <School className="w-5 h-5 text-purple-400" />
                  ) : (
                    <Award className="w-5 h-5 text-cyan-400" />
                  )}
                </div>

                <div className="space-y-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold font-space text-white group-hover:text-purple-200 transition-colors">
                    {item.institution}
                  </h3>
                  <p className="text-xs sm:text-sm font-manrope text-slate-300">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Focus Area */}
              {item.focusArea && (
                <div className="text-xs font-mono text-cyan-300/90 flex items-center gap-2">
                  <span className="text-[10px] uppercase text-slate-400">Stream:</span>
                  <span>{item.focusArea}</span>
                </div>
              )}

              {/* Timeline & Location */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-2 border-t border-[#1f1642]">
                {item.period && (
                  <div className="flex items-center gap-1.5 text-purple-300">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{item.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
