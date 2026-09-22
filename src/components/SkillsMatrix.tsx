import React, { useState } from 'react';
import { LayoutGrid, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'ALL PROFICIENCIES' },
    { id: 'sales', label: 'SALES & CLOSING' },
    { id: 'outreach', label: 'CRM & OUTREACH' },
    { id: 'tools', label: 'MS SUITE & DATA' },
    { id: 'marketing', label: 'SEO & STRATEGY' },
  ];

  const filteredSkills = SKILLS.filter((s) => {
    const matchesCategory = selectedCategory === 'all' || s.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.subdescriptors.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="matrix" className="py-16 sm:py-20 scroll-mt-20 w-full overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#261b54]/50"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-slate-400 uppercase">
              <LayoutGrid className="w-3.5 h-3.5 text-purple-400" />
              <span>CALIBRATED VECTORS // PROFICIENCY_INDEX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space text-white tracking-tight">
              Skills & Competencies Matrix
            </h2>
            <p className="text-xs sm:text-sm font-mono text-purple-400">
              Evaluated core proficiencies in customer acquisition, pipeline automation, and tech stacks
            </p>
          </div>

          {/* Quick filter tabs & Search box */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 md:pt-0">
            {/* Search Input */}
            <div className="relative shrink-0">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search competency..."
                className="w-full sm:w-48 pl-8 pr-8 py-1.5 rounded-lg bg-[#140e2e] border border-[#261b54] focus:border-purple-500 text-xs font-mono text-white placeholder-slate-500 focus:outline-none transition-all"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-mono tracking-wider uppercase transition-all cursor-pointer min-h-[36px] ${
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
        </motion.div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          <AnimatePresence>
            {filteredSkills.map((skill, idx) => {
              const isFullWidth = skill.id === 'skill-7' && selectedCategory === 'all';

              return (
                <motion.div
                  layout
                  key={skill.id}
                  id={`skill-card-${skill.id}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.15 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  whileHover={{ y: -3 }}
                  className={`group p-5 sm:p-6 rounded-2xl bg-[#0f0a24]/90 border border-[#261b54] hover:border-purple-500/50 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] ${
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

                  {/* Animated Progress Bar */}
                  <div className="w-full h-1.5 rounded-full bg-[#1c143d] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: false, amount: 0.15 }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-400 shadow-[0_0_10px_rgba(168,85,247,0.6)]"
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
