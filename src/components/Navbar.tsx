import React, { useState } from 'react';
import { Terminal, FileText, Menu, X, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenAvailability: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenAvailability }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Banner', href: '#landing' },
    { label: 'About', href: '#about' },
    { label: 'Deployments', href: '#showcase' },
    { label: 'Telemetry', href: '#telemetry' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Matrix', href: '#matrix' },
    { label: 'Terminal', href: '#terminal' },
  ];

  return (
    <header
      id="main-navbar"
      className="sticky top-0 z-40 w-full bg-[#090714]/95 backdrop-blur-md border-b border-[#261b54]/60 transition-colors"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* Left Brand Identity */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <a
            id="brand-logo"
            href="#landing"
            className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider text-slate-100 hover:text-purple-300 transition-colors group"
          >
            <div className="w-7 h-7 rounded bg-[#191138] border border-purple-500/40 flex items-center justify-center text-purple-400 group-hover:border-purple-400 group-hover:shadow-[0_0_12px_rgba(168,85,247,0.4)] transition-all">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <span className="font-semibold tracking-widest hidden xs:inline sm:inline">[ M Sumair ]</span>
          </a>
          <span className="inline-block px-2 py-0.5 rounded bg-purple-900/50 border border-purple-500/40 text-[10px] font-mono font-bold text-purple-300 uppercase tracking-wider">
            SUMAIR X
          </span>
        </div>

        {/* Center Desktop Navigation - cleanly fitted */}
        <nav id="desktop-navigation" className="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-mono text-slate-400 hover:text-purple-300 transition-colors py-1 relative group tracking-wider"
            >
              <span className="text-purple-500/70 mr-1">//</span>
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Right Status Indicator & Action Trigger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            id="status-availability-pill"
            onClick={onOpenAvailability}
            title="Click to view availability details"
            className="hidden sm:flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/30 hover:border-emerald-400/50 transition-all cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="truncate max-w-[120px] sm:max-w-none">{PERSONAL_INFO.availability}</span>
          </button>

          <button
            id="nav-execute-resume-btn"
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs font-mono font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-900/30 hover:shadow-purple-700/50 transition-all active:scale-95 cursor-pointer border border-purple-400/20"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="tracking-wider">RESUME</span>
          </button>

          {/* Mobile Menu Button - min 44px touch target */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden min-w-[44px] min-h-[44px] p-2 rounded-lg bg-[#140e2e] border border-purple-900/40 text-slate-300 hover:text-white flex items-center justify-center cursor-pointer active:scale-95 transition-all"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-purple-400" /> : <Menu className="w-5 h-5 text-slate-200" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Drawer with motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden border-b border-purple-900/40 bg-[#0a0718]/98 backdrop-blur-xl px-4 pt-3 pb-5 space-y-4 overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-2 pb-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-mono uppercase text-slate-200 hover:text-purple-300 hover:bg-purple-950/40 border border-[#23184a] active:bg-purple-900/30 transition-all min-h-[44px]"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-purple-400/60" />
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-purple-900/40 flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAvailability();
                }}
                className="w-full min-h-[44px] flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-mono bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 active:scale-98 transition-all"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{PERSONAL_INFO.availability}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md active:scale-98 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>EXECUTE FULL RESUME</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
