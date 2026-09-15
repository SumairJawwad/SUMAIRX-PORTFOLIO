import React, { useState } from 'react';
import { LayoutGrid, CheckCircle } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'ALL PROFICIENCIES' },
    { id: 'sales', label: 'SALES & CLOSING' },
    { id: 'outreach', label: 'CRM & OUTREACH' },
    { id: 'tools', label: 'MS SUITE & DATA' },
    { id: 'marketing', label: 'SEO & STRATEGY' },
  ];

  const filteredSkills =
    selectedCategory === 'all'
      ? SKILLS
      : SKILLS.filter((s) => s.category === selectedCategory);

  return (
    <section id="matrix" className="py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#261b54]/40">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-slate-400 uppercase">
              <LayoutGrid className="w-3.5 h-3.5 text-purple-400" />
              <span>CALIBRATED VECTORS // PROFICIENCY_INDEX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-space text-white tracking-tight">
              Skills & Competencies Matrix
            </h2>
          </div>

          {/* Quick filter tabs */}
          <div className="flex flex-wrap gap-2 pt-2 md:pt-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 rounded text-[11px] font-mono tracking-wider uppercase transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-purple-600/30 text-purple-200 border border-purple-500/60 shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                    : 'bg-[#140e2e]/60 text-slate-400 border border-[#261b54] hover:text-slate-200 hover:border-purple-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {filteredSkills.map((skill) => {
            const isFullWidth = skill.id === 'skill-7' && selectedCategory === 'all';

            return (
              <div
                key={skill.id}
                id={`skill-card-${skill.id}`}
                className={`group p-5 rounded-xl bg-[#0f0a24]/90 border border-[#261b54] hover:border-purple-500/50 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] ${
                  isFullWidth ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                {/* Title & Percentage */}
                <div className="flex items-baseline justify-between gap-2 pb-2">
                  <h3 className="text-base sm:text-lg font-bold font-space text-white group-hover:text-purple-200 transition-colors">
                    {skill.title}
                  </h3>
                  <span className="text-xs font-mono font-semibold text-purple-300 shrink-0">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Subdescriptors in uppercase */}
                <div className="text-[11px] font-mono tracking-wider text-slate-400 uppercase pb-4">
                  {skill.subdescriptors}
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1.5 rounded-full bg-[#1c143d] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-400 transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(168,85,247,0.6)]"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
