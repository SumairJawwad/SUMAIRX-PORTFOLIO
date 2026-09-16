import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenSecurityLog: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenSecurityLog }) => {
  return (
    <footer
      id="main-footer"
      className="w-full overflow-hidden border-t border-[#261b54]/60 bg-[#070510] py-8 text-xs font-mono text-slate-400"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Name */}
        <div className="flex items-center gap-2 text-slate-200">
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          <span className="font-semibold tracking-wider uppercase font-space text-sm">
            {PERSONAL_INFO.fullName}
          </span>
        </div>

        {/* Center Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-[11px] uppercase tracking-wider text-slate-400">
          <a href="#about" className="hover:text-purple-300 transition-colors py-1">
            Dossier
          </a>
          <a href="#education" className="hover:text-purple-300 transition-colors py-1">
            Academics
          </a>
          <a href="#showcase" className="hover:text-purple-300 transition-colors py-1">
            Deployments
          </a>
          <button
            onClick={onOpenSecurityLog}
            className="hover:text-purple-300 transition-colors cursor-pointer py-1"
          >
            Security Log
          </button>
          <a href="#terminal" className="hover:text-purple-300 transition-colors py-1">
            Direct Interface
          </a>
          <button
            onClick={onOpenResume}
            className="hover:text-purple-300 transition-colors cursor-pointer py-1"
          >
            Network CV
          </button>
        </div>

        {/* Right System Node Copyright */}
        <div className="text-[10px] sm:text-[11px] text-slate-500 uppercase tracking-widest text-center md:text-right">
          SYSTEM NODE // 2026 M. SUMAIR JAWWAD. ALL PROTOCOLS RESERVED.
        </div>
      </div>
    </footer>
  );
};
