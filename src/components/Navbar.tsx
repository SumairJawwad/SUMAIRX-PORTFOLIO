import React, { useState } from 'react';
import { Terminal, FileText, Menu, X, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenAvailability: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenAvailability }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Telemetry', href: '#telemetry' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Matrix', href: '#matrix' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Terminal', href: '#terminal' },
  ];

  return (
    <header
      id="main-navbar"
      className="sticky top-0 z-40 w-full bg-[#090714]/90 backdrop-blur-md border-b border-[#261b54]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left Brand Identity */}
        <div className="flex items-center gap-2.5">
          <a
            id="brand-logo"
            href="#"
            className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider text-slate-100 hover:text-purple-300 transition-colors group"
          >
            <div className="w-7 h-7 rounded bg-[#191138] border border-purple-500/40 flex items-center justify-center text-purple-400 group-hover:border-purple-400 group-hover:shadow-[0_0_12px_rgba(168,85,247,0.4)] transition-all">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <span className="font-semibold tracking-widest">[ M Sumair ]</span>
          </a>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-purple-900/50 border border-purple-500/40 text-[10px] font-mono font-bold text-purple-300 uppercase tracking-wider">
            SUMAIR X
          </span>
        </div>

        {/* Center Desktop Navigation */}
        <nav id="desktop-navigation" className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-mono text-slate-400 hover:text-purple-300 transition-colors py-1 relative group tracking-wider"
            >
              <span className="text-purple-500/70 mr-1">//</span>
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Right Status Indicator & Action Trigger */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            id="status-availability-pill"
            onClick={onOpenAvailability}
            title="Click to view availability details"
            className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/30 hover:border-emerald-400/50 transition-all cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{PERSONAL_INFO.availability}</span>
          </button>

          <button
            id="nav-execute-resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 rounded-md text-xs font-mono font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-900/30 hover:shadow-purple-700/50 transition-all active:scale-95 cursor-pointer border border-purple-400/20"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="tracking-wider">EXECUTE RESUME</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-resume-trigger"
            onClick={onOpenResume}
            className="p-2 rounded bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs flex items-center gap-1.5"
            aria-label="Resume"
          >
            <FileText className="w-3.5 h-3.5" />
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden border-b border-purple-900/30 bg-[#0c081d] px-4 pt-3 pb-5 space-y-3"
        >
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded text-xs font-mono uppercase text-slate-300 hover:text-purple-300 hover:bg-purple-950/30 border border-transparent hover:border-purple-800/40"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-purple-900/40 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAvailability();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded text-xs font-mono bg-emerald-950/40 border border-emerald-500/30 text-emerald-300"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.availability}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded text-xs font-mono font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600"
            >
              <FileText className="w-4 h-4" />
              <span>EXECUTE RESUME</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
