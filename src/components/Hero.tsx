import React from 'react';
import { Play, Download, Plus, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onInitiateTransmission: () => void;
  onCopyText: (text: string, label: string) => void;
  copiedLabel: string | null;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenResume,
  onInitiateTransmission,
  onCopyText,
  copiedLabel,
}) => {
  return (
    <section id="hero-section" className="relative pt-12 pb-16 overflow-hidden">
      {/* Ambient background cyber glow */}
      <div className="absolute top-0 left-1/4 -z-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-20 right-1/4 -z-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          {/* System Status Banner */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#130e2e]/90 border border-[#2d1f66] text-xs font-mono text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{PERSONAL_INFO.status}</span>
          </div>

          {/* Role Header */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider text-purple-400">
            <Plus className="w-3.5 h-3.5 text-purple-400" />
            <span>{PERSONAL_INFO.role}</span>
          </div>

          {/* Hero Display Name */}
          <h1
            id="hero-name-title"
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-space uppercase"
          >
            {PERSONAL_INFO.name}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-fuchsia-300 drop-shadow-[0_0_30px_rgba(192,132,252,0.4)]">
              {PERSONAL_INFO.lastName}
            </span>
          </h1>

          {/* Bio Description */}
          <p
            id="hero-bio-text"
            className="text-slate-300 text-base sm:text-lg leading-relaxed font-manrope max-w-3xl pt-1 text-balance"
          >
            {PERSONAL_INFO.bio}
          </p>

          {/* Action Triggers */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              id="hero-initiate-transmission-btn"
              onClick={onInitiateTransmission}
              className="flex items-center gap-2 px-6 py-3 rounded-md text-xs sm:text-sm font-mono font-medium text-white bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-900/40 hover:shadow-purple-700/60 transition-all transform active:scale-95 cursor-pointer border border-purple-300/30"
            >
              <Play className="w-4 h-4 fill-white" />
              <span className="tracking-wider">INITIATE TRANSMISSION</span>
            </button>

            <button
              id="hero-download-cv-btn"
              onClick={onOpenResume}
              className="flex items-center gap-2 px-5 py-3 rounded-md text-xs sm:text-sm font-mono font-medium text-slate-200 bg-[#120d2a]/80 hover:bg-[#1b143d] border border-purple-500/30 hover:border-purple-400/60 shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4 text-purple-400" />
              <span className="tracking-wider">DOWNLOAD FULL CV (PDF)</span>
            </button>
          </div>

          {/* Coordinates Grid */}
          <div
            id="hero-coordinates-grid"
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 max-w-3xl"
          >
            {/* Communication Link */}
            <div
              onClick={() => onCopyText(PERSONAL_INFO.email, 'email')}
              className="group p-3.5 rounded-lg bg-[#110d29]/70 border border-[#261b54] hover:border-purple-500/50 transition-all cursor-pointer relative"
              title="Click to copy email address"
            >
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-slate-400 pb-1">
                <span>COMMUNICATION_LINK</span>
                <span className="text-purple-400 group-hover:text-purple-300">
                  {copiedLabel === 'email' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 opacity-60 group-hover:opacity-100" />}
                </span>
              </div>
              <div className="font-mono text-xs sm:text-sm text-slate-200 group-hover:text-purple-200 truncate">
                {PERSONAL_INFO.email}
              </div>
            </div>

            {/* Phone Network */}
            <div
              onClick={() => onCopyText(PERSONAL_INFO.phone, 'phone')}
              className="group p-3.5 rounded-lg bg-[#110d29]/70 border border-[#261b54] hover:border-purple-500/50 transition-all cursor-pointer relative"
              title="Click to copy phone number"
            >
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-slate-400 pb-1">
                <span>PHONE_NETWORK</span>
                <span className="text-purple-400 group-hover:text-purple-300">
                  {copiedLabel === 'phone' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 opacity-60 group-hover:opacity-100" />}
                </span>
              </div>
              <div className="font-mono text-xs sm:text-sm text-slate-200 group-hover:text-purple-200">
                {PERSONAL_INFO.phone}
              </div>
            </div>

            {/* Geo Coordinates */}
            <div className="p-3.5 rounded-lg bg-[#110d29]/70 border border-[#261b54]">
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 pb-1">
                GEO_COORDINATES
              </div>
              <div className="font-mono text-xs sm:text-sm text-slate-200">
                {PERSONAL_INFO.location}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
