import React from 'react';
import {
  MessageCircle,
  Mail,
  Code2,
  Sparkles,
  Rocket,
  Quote,
  Copy,
  Check,
  ArrowDown,
  ExternalLink,
  ChevronRight,
  Download,
  Terminal,
} from 'lucide-react';
import { motion } from 'motion/react';
import { BANNER_DATA, PERSONAL_INFO } from '../data/portfolioData';

interface BannerLandingProps {
  onOpenResume: () => void;
  onInitiateTransmission: () => void;
  onCopyText: (text: string, label: string) => void;
  copiedLabel: string | null;
}

export const BannerLanding: React.FC<BannerLandingProps> = ({
  onOpenResume,
  onInitiateTransmission,
  onCopyText,
  copiedLabel,
}) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="landing"
      className="relative w-full overflow-hidden scroll-mt-20 flex flex-col justify-center py-4 sm:py-6 lg:py-8 lg:min-h-[calc(100vh-4.5rem)]"
    >
      {/* Backwards compatibility anchor */}
      <div id="home" className="absolute -top-20" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner Visual Frame with Motion Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative rounded-2xl sm:rounded-3xl border border-[#2e2066] bg-[#070512] overflow-hidden shadow-[0_0_50px_rgba(79,40,180,0.25)] group"
        >
          {/* Ambient Background Glow and Realistic Banner Backdrop */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src={BANNER_DATA.bannerImage}
              alt="Sumair X Cybernetic Banner"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center opacity-40 sm:opacity-55 mix-blend-luminosity group-hover:scale-[1.01] transition-transform duration-700 ease-out"
            />
            {/* Multi-layered cinematic gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070512] via-[#070512]/85 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070512] via-transparent to-[#070512]/75" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(124,58,237,0.3),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(6,182,212,0.18),transparent_50%)]" />
          </div>

          {/* Cyber Specular Line Highlights */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />

          {/* Left Vertical HUD Track */}
          <div className="hidden xl:flex absolute left-3 top-1/2 -translate-y-1/2 -rotate-90 origin-center items-center gap-3 text-[9px] font-mono tracking-[0.3em] text-cyan-400/50 uppercase select-none z-10">
            <span>{BANNER_DATA.sideCoordinates}</span>
          </div>

          {/* Banner Inner Content Grid */}
          <div className="relative z-10 p-5 sm:p-8 lg:p-12 flex flex-col justify-between min-h-[500px] lg:min-h-[540px]">
            {/* Top Bar: Credo & Live Status */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center justify-between gap-3 pb-4"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                <span className="text-[11px] sm:text-xs font-mono tracking-[0.22em] text-cyan-300 font-semibold uppercase">
                  {BANNER_DATA.credo}
                </span>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#120a30]/80 border border-purple-800/60 text-[10px] sm:text-[11px] font-mono text-purple-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>OPERATIONAL</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/40 text-[10px] font-mono text-cyan-300">
                  SYS.ID: 2026.SX
                </span>
              </div>
            </motion.div>

            {/* Middle Section: Big Display Title & Quote Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center py-4 sm:py-6">
              {/* Left Column: Big Brand Heading & Contact Capsules */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="lg:col-span-7 space-y-5 sm:space-y-6"
              >
                <div>
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black font-space tracking-tight text-white flex items-baseline gap-2 sm:gap-3 drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
                    <span>{BANNER_DATA.headline}</span>
                    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 drop-shadow-[0_0_35px_rgba(34,211,238,0.7)] transform -skew-x-6 inline-block">
                      {BANNER_DATA.accentLetter}
                      {/* Cyan brush slash underlay */}
                      <span className="absolute -bottom-1 left-0 w-full h-1 bg-cyan-400/80 blur-xs rounded-full" />
                    </span>
                  </h1>

                  <p className="pt-2 sm:pt-3 text-xs sm:text-base lg:text-lg font-mono tracking-wider sm:tracking-widest text-slate-200 uppercase">
                    BUILDING THE <span className="text-cyan-400 font-bold">FUTURE</span>. ONE{' '}
                    <span className="text-purple-300 font-bold">IDEA</span> AT A TIME.
                  </p>
                </div>

                {/* Cyber Contact Capsules (WhatsApp & Email) */}
                <div className="space-y-2.5 sm:space-y-3 pt-1 max-w-md">
                  {/* WhatsApp Capsule */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    id="banner-whatsapp-capsule"
                    className="p-3 sm:p-3.5 rounded-xl bg-[#09071c]/90 border border-cyan-500/40 hover:border-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.15)] flex items-center justify-between gap-3 group/capsule min-h-[48px]"
                  >
                    <a
                      href={`https://wa.me/${BANNER_DATA.whatsappRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 min-w-0 flex-1 hover:opacity-95 transition-opacity"
                    >
                      <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-cyan-950/60 border border-cyan-500/50 flex items-center justify-center shrink-0 text-cyan-400 group-hover/capsule:scale-105 transition-transform shadow-[0_0_12px_rgba(6,182,212,0.4)]">
                        <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-semibold">
                          WHATSAPP
                        </div>
                        <div className="text-xs sm:text-sm font-mono text-white font-medium truncate">
                          {BANNER_DATA.whatsapp}
                        </div>
                      </div>
                    </a>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => onCopyText(BANNER_DATA.whatsapp, 'banner-wa')}
                        title="Copy WhatsApp Number"
                        className="p-1.5 rounded bg-[#161033] hover:bg-cyan-950 border border-cyan-900/60 text-cyan-300 hover:text-white transition-colors cursor-pointer text-xs flex items-center gap-1 min-h-[36px]"
                      >
                        {copiedLabel === 'banner-wa' ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                        <span className="text-[10px] font-mono hidden sm:inline">
                          {copiedLabel === 'banner-wa' ? 'COPIED' : 'COPY'}
                        </span>
                      </button>

                      <a
                        href={`https://wa.me/${BANNER_DATA.whatsappRaw}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 hover:text-white transition-colors min-h-[36px] flex items-center justify-center"
                        title="Open WhatsApp Chat"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </motion.div>

                  {/* Business Email Capsule */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    id="banner-email-capsule"
                    className="p-3 sm:p-3.5 rounded-xl bg-[#09071c]/90 border border-purple-500/40 hover:border-purple-400 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.15)] flex items-center justify-between gap-3 group/capsule min-h-[48px]"
                  >
                    <a
                      href={`mailto:${BANNER_DATA.businessEmail}`}
                      className="flex items-center gap-3 min-w-0 flex-1 hover:opacity-95 transition-opacity"
                    >
                      <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-purple-950/60 border border-purple-500/50 flex items-center justify-center shrink-0 text-purple-300 group-hover/capsule:scale-105 transition-transform shadow-[0_0_12px_rgba(168,85,247,0.4)]">
                        <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] font-mono tracking-widest text-purple-400 uppercase font-semibold">
                          EMAIL
                        </div>
                        <div className="text-xs sm:text-sm font-mono text-white font-medium truncate">
                          {BANNER_DATA.businessEmail}
                        </div>
                      </div>
                    </a>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => onCopyText(BANNER_DATA.businessEmail, 'banner-email')}
                        title="Copy Email Address"
                        className="p-1.5 rounded bg-[#161033] hover:bg-purple-950 border border-purple-900/60 text-purple-300 hover:text-white transition-colors cursor-pointer text-xs flex items-center gap-1 min-h-[36px]"
                      >
                        {copiedLabel === 'banner-email' ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                        <span className="text-[10px] font-mono hidden sm:inline">
                          {copiedLabel === 'banner-email' ? 'COPIED' : 'COPY'}
                        </span>
                      </button>

                      <a
                        href={`mailto:${BANNER_DATA.businessEmail}`}
                        className="p-2 rounded bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/40 text-purple-300 hover:text-white transition-colors min-h-[36px] flex items-center justify-center"
                        title="Send Email"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </motion.div>
                </div>

                {/* Badges: Developer, AI Enthusiast, Dreamer */}
                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#140e2e]/90 border border-[#2b1f60] text-xs font-mono text-slate-300">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>&lt;/&gt; DEVELOPER</span>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#140e2e]/90 border border-[#2b1f60] text-xs font-mono text-slate-300">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    <span>AI ENTHUSIAST</span>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#140e2e]/90 border border-[#2b1f60] text-xs font-mono text-slate-300">
                    <Rocket className="w-3.5 h-3.5 text-pink-400" />
                    <span>DREAMER</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Neon Cyber Quote Card with Floating Animation */}
              <div className="lg:col-span-5 flex justify-start lg:justify-end">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                  className="relative p-6 sm:p-7 rounded-2xl bg-[#0e0a26]/90 border border-purple-500/40 shadow-[0_0_30px_rgba(147,51,234,0.25)] max-w-sm backdrop-blur-md"
                >
                  {/* Cyber Corner brackets */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-purple-400" />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-purple-400" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />

                  <div className="text-purple-400 pb-2">
                    <Quote className="w-6 sm:w-7 h-6 sm:h-7 rotate-180" />
                  </div>

                  <p className="text-xs sm:text-sm font-space font-medium text-slate-200 tracking-wider uppercase leading-relaxed">
                    THE <span className="text-cyan-400 font-bold">FUTURE</span> IS NOT SOMETHING WE WAIT FOR.{' '}
                    IT’S SOMETHING <span className="text-purple-300 font-bold">WE BUILD</span>.
                  </p>

                  <div className="pt-4 flex items-center justify-between border-t border-purple-900/40 mt-4">
                    <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                      CREATIVE ETHOS
                    </span>
                    <span className="text-base sm:text-lg font-serif italic text-purple-300 font-bold drop-shadow-[0_0_10px_rgba(216,180,254,0.6)]">
                      {BANNER_DATA.signature}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Quick-Action Interactive Ribbon */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-5 sm:pt-6 border-t border-[#261b54]/60 flex flex-wrap items-center justify-between gap-3 sm:gap-4"
            >
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <button
                  id="banner-view-about-btn"
                  onClick={() => scrollToSection('about')}
                  className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-xs font-mono font-semibold text-white bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 shadow-md shadow-purple-900/40 hover:shadow-cyan-700/40 transition-all cursor-pointer border border-cyan-300/30 active:scale-95 min-h-[44px]"
                >
                  <span>VIEW FULL PROFILE / ABOUT</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  id="banner-view-deployments-btn"
                  onClick={() => scrollToSection('showcase')}
                  className="flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-lg text-xs font-mono text-slate-200 bg-[#140e33] hover:bg-[#1f164d] border border-purple-800/60 hover:border-purple-500 transition-all cursor-pointer active:scale-95 min-h-[44px]"
                >
                  <Rocket className="w-3.5 h-3.5 text-purple-400" />
                  <span>DEPLOYMENTS (04)</span>
                </button>

                <button
                  id="banner-terminal-btn"
                  onClick={onInitiateTransmission}
                  className="flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-lg text-xs font-mono text-slate-200 bg-[#140e33] hover:bg-[#1f164d] border border-cyan-800/60 hover:border-cyan-500 transition-all cursor-pointer active:scale-95 min-h-[44px]"
                >
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>TRANSMIT PACKET</span>
                </button>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={onOpenResume}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono text-purple-300 hover:text-white bg-[#100b29] hover:bg-purple-900/30 border border-purple-800/50 transition-colors cursor-pointer min-h-[40px]"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>CV.PDF</span>
                </button>

                <button
                  onClick={() => scrollToSection('about')}
                  className="flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors py-2"
                >
                  <span>Scroll to Dossier</span>
                  <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
