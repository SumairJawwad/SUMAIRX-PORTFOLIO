import React from 'react';
import {
  User,
  Download,
  Play,
  Copy,
  Check,
  MapPin,
  Mail,
  Phone,
  Briefcase,
} from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, BANNER_DATA } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResume: () => void;
  onInitiateTransmission: () => void;
  onCopyText: (text: string, label: string) => void;
  copiedLabel: string | null;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenResume,
  onInitiateTransmission,
  onCopyText,
  copiedLabel,
}) => {
  return (
    <section id="about" className="py-12 sm:py-16 scroll-mt-20 relative w-full overflow-hidden">
      {/* Anchor alias for info page */}
      <div id="info" className="absolute -top-20" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#261b54]/50"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#140e2e] border border-[#2e2060] text-xs font-mono text-purple-300">
              <User className="w-3.5 h-3.5 text-cyan-400" />
              <span className="tracking-wider">DOSSIER PROTOCOL // EXECUTIVE PROFILE & INFO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space text-white tracking-tight flex flex-wrap items-baseline gap-2 sm:gap-3">
              <span>About</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-cyan-300">
                {PERSONAL_INFO.fullName}
              </span>
            </h2>
            <p className="text-xs sm:text-sm font-mono text-purple-400">
              {PERSONAL_INFO.role} • {PERSONAL_INFO.status}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#18113b] hover:bg-purple-900/40 border border-purple-700/50 text-xs font-mono text-purple-200 hover:text-white transition-all cursor-pointer shadow-sm active:scale-95 min-h-[44px]"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>DOWNLOAD CV (PDF)</span>
            </button>
          </div>
        </motion.div>

        {/* 2-Column Dossier Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Biography, Narrative, Strategic Pillars & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Main Narrative Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0f0a24]/90 border border-[#261b54] shadow-[0_4px_24px_rgba(0,0,0,0.35)] space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#211746]">
                <div className="flex items-center gap-2.5 text-xs font-mono text-cyan-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold uppercase tracking-wider">CAREER NARRATIVE & BACKGROUND</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/60 border border-purple-800/40 text-purple-300">
                  EPOCH: {PERSONAL_INFO.epoch}
                </span>
              </div>

              {/* Bio text */}
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-manrope">
                {PERSONAL_INFO.bio}
              </p>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-manrope">
                Possessing cross-functional proficiency in digital campaign deployment, outbound lead generation pipelines, CRM management, and tech-driven market research. Experienced in building operational frontends and sales ecosystems designed to convert inbound and outbound prospects reliably.
              </p>

              {/* Core Strategic Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#140e2e] border border-[#261b54] space-y-1">
                  <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">FOCUS</div>
                  <div className="text-xs font-mono text-white font-semibold">Outbound Performance</div>
                  <div className="text-[11px] text-slate-400">High-converting cold outreach</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#140e2e] border border-[#261b54] space-y-1">
                  <div className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">DISCIPLINE</div>
                  <div className="text-xs font-mono text-white font-semibold">Cold Email & Lead Gen</div>
                  <div className="text-[11px] text-slate-400">Pipeline hygiene & CRM tracking</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#140e2e] border border-[#261b54] space-y-1">
                  <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">STRENGTH</div>
                  <div className="text-xs font-mono text-white font-semibold">Customer Relationships</div>
                  <div className="text-[11px] text-slate-400">Consultative objection handling</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-[#211746]">
                <button
                  id="about-initiate-btn"
                  onClick={onInitiateTransmission}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-medium text-white bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-900/40 transition-all cursor-pointer border border-purple-300/30 active:scale-95 min-h-[44px]"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>INITIATE TRANSMISSION</span>
                </button>

                <button
                  id="about-cv-btn"
                  onClick={onOpenResume}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono text-slate-200 bg-[#120d2a]/80 hover:bg-[#1b143d] border border-purple-500/30 hover:border-purple-400/60 shadow-sm transition-all cursor-pointer active:scale-95 min-h-[44px]"
                >
                  <Download className="w-3.5 h-3.5 text-purple-400" />
                  <span>DOWNLOAD DOSSIER (PDF)</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct Connectivity & Telemetry Coordinates */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Coordinates Matrix Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0f0a24]/90 border border-[#261b54] shadow-[0_4px_24px_rgba(0,0,0,0.35)] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#211746]">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                  DIRECT COORDINATES
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30">
                  {PERSONAL_INFO.availability}
                </span>
              </div>

              {/* Primary Email */}
              <div
                onClick={() => onCopyText(PERSONAL_INFO.email, 'about-email')}
                className="group p-3.5 rounded-xl bg-[#130d30]/70 border border-[#261b54] hover:border-purple-500/50 transition-all cursor-pointer flex items-center justify-between gap-3 min-h-[50px]"
                title="Click to copy primary email"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#1a1240] border border-purple-800/60 flex items-center justify-center shrink-0 text-purple-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                      PRIMARY EMAIL
                    </div>
                    <div className="font-mono text-xs sm:text-sm text-slate-200 group-hover:text-purple-200 truncate">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>
                <div className="text-purple-400 group-hover:text-purple-300 shrink-0">
                  {copiedLabel === 'about-email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                  )}
                </div>
              </div>

              {/* Direct Phone */}
              <div
                onClick={() => onCopyText(PERSONAL_INFO.phone, 'about-phone')}
                className="group p-3.5 rounded-xl bg-[#130d30]/70 border border-[#261b54] hover:border-purple-500/50 transition-all cursor-pointer flex items-center justify-between gap-3 min-h-[50px]"
                title="Click to copy phone number"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#1a1240] border border-purple-800/60 flex items-center justify-center shrink-0 text-purple-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                      DIRECT PHONE
                    </div>
                    <div className="font-mono text-xs sm:text-sm text-slate-200 group-hover:text-purple-200 truncate">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </div>
                <div className="text-purple-400 group-hover:text-purple-300 shrink-0">
                  {copiedLabel === 'about-phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                  )}
                </div>
              </div>

              {/* WhatsApp (from Banner) */}
              <div
                onClick={() => onCopyText(BANNER_DATA.whatsapp, 'about-wa')}
                className="group p-3.5 rounded-xl bg-[#130d30]/70 border border-[#261b54] hover:border-cyan-500/50 transition-all cursor-pointer flex items-center justify-between gap-3 min-h-[50px]"
                title="Click to copy WhatsApp"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center shrink-0 text-cyan-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                      WHATSAPP LINE
                    </div>
                    <div className="font-mono text-xs sm:text-sm text-slate-200 group-hover:text-cyan-200 truncate">
                      {BANNER_DATA.whatsapp}
                    </div>
                  </div>
                </div>
                <div className="text-cyan-400 group-hover:text-cyan-300 shrink-0">
                  {copiedLabel === 'about-wa' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                  )}
                </div>
              </div>

              {/* Geographic Coordinates */}
              <div className="p-3.5 rounded-xl bg-[#130d30]/70 border border-[#261b54] flex items-center gap-3 min-h-[50px]">
                <div className="w-9 h-9 rounded-lg bg-[#1a1240] border border-purple-800/60 flex items-center justify-center shrink-0 text-purple-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    GEOGRAPHIC LOCATION
                  </div>
                  <div className="font-mono text-xs sm:text-sm text-slate-200">
                    {PERSONAL_INFO.locationDetailed}
                  </div>
                </div>
              </div>

              {/* Work Preference */}
              <div className="p-3.5 rounded-xl bg-[#130d30]/70 border border-[#261b54] flex items-center justify-between min-h-[50px]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1a1240] border border-purple-800/60 flex items-center justify-center shrink-0 text-purple-400">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                      DEPLOYMENT MODE
                    </div>
                    <div className="font-mono text-xs sm:text-sm text-slate-200">
                      {PERSONAL_INFO.workPreference}
                    </div>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-cyan-300 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40">OPEN</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
