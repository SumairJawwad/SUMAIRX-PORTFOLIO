import React, { useState } from 'react';
import {
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  Loader2,
  Terminal,
  Shield,
  ChevronDown,
} from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface TerminalSectionProps {
  onCopyText: (text: string, label: string) => void;
  copiedLabel: string | null;
  nameInputRef: React.RefObject<HTMLInputElement | null>;
}

export const TerminalSection: React.FC<TerminalSectionProps> = ({
  onCopyText,
  copiedLabel,
  nameInputRef,
}) => {
  const [formData, setFormData] = useState({
    transmitterName: '',
    contactEmail: '',
    inquiryDomain: 'Customer Sales Executive / Outreach Role',
    payloadMessage: '',
  });

  const [dispatchStatus, setDispatchStatus] = useState<
    'idle' | 'transmitting' | 'success' | 'error'
  >('idle');
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDispatch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.transmitterName.trim() || !formData.contactEmail.trim() || !formData.payloadMessage.trim()) {
      setDispatchStatus('error');
      setConsoleLogs(['[ERR] VALIDATION_FAILURE: ALL FIELDS REQUIRED FOR SECURE HANDSHAKE']);
      return;
    }

    setDispatchStatus('transmitting');
    setConsoleLogs([
      '[INIT] INITIALIZING 256-BIT CYBERNETIC HANDSHAKE...',
      `[PACKET] TRANSMITTER IDENT: ${formData.transmitterName.toUpperCase()}`,
      `[ROUTE] TARGETING: ${PERSONAL_INFO.email} [PORT: SECURE-TELEMETRY]`,
    ]);

    setTimeout(() => {
      setConsoleLogs((prev) => [
        ...prev,
        '[ENCRYPT] AES-GCM PAYLOAD CYPHER COMPLETE',
        '[BROADCAST] DISPATCHING PACKET ACROSS NETWORK GRID...',
      ]);
    }, 600);

    setTimeout(() => {
      setConsoleLogs((prev) => [
        ...prev,
        '[ACK] 200 OK — TRANSMISSION RECEIVED & LOGGED ON ACTIVE TERMINAL',
        '[SLA] ESTIMATED RESPONSE TIME WINDOW: < 6 HOURS',
      ]);
      setDispatchStatus('success');
    }, 1200);
  };

  const handleResetTransmission = () => {
    setFormData({
      transmitterName: '',
      contactEmail: '',
      inquiryDomain: 'Customer Sales Executive / Outreach Role',
      payloadMessage: '',
    });
    setDispatchStatus('idle');
    setConsoleLogs([]);
  };

  return (
    <section id="terminal" className="py-16 sm:py-20 scroll-mt-20 w-full overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="pb-6 border-b border-[#261b54]/50"
        >
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-slate-400 uppercase pb-2">
            <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
            <span>COMMUNICATION TERMINAL // SECURE_HANDSHAKE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space text-white tracking-tight">
            Initiate Transmission
          </h2>
          <p className="text-xs sm:text-sm font-mono text-purple-400 pt-1">
            Direct encrypted messaging protocol and immediate contact channels
          </p>
        </motion.div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Connectivity Coordinates */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-3">
              <h3 className="text-xl font-bold font-space text-white">
                Direct Connectivity Coordinates
              </h3>
              <p className="text-slate-300 text-sm font-manrope leading-relaxed">
                Ready to deploy marketing acumen, analytical support, and relentless outreach
                performance to your team. Click below to copy or dial instantly.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {/* Primary Email */}
              <div className="p-4 rounded-xl bg-[#0f0a24]/90 border border-[#261b54] flex items-center justify-between gap-3 group hover:border-purple-500/50 transition-all">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#191138] border border-purple-900/50 flex items-center justify-center shrink-0 text-purple-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                      PRIMARY_EMAIL
                    </div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-mono text-slate-200 hover:text-purple-300 truncate block transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  id="copy-email-btn"
                  onClick={() => onCopyText(PERSONAL_INFO.email, 'email')}
                  className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#1c1440] hover:bg-purple-900/40 border border-purple-800/40 text-[11px] font-mono text-purple-300 hover:text-white transition-all shrink-0 cursor-pointer"
                >
                  {copiedLabel === 'email' ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct Line */}
              <div className="p-4 rounded-xl bg-[#0f0a24]/90 border border-[#261b54] flex items-center justify-between gap-3 group hover:border-purple-500/50 transition-all">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#191138] border border-purple-900/50 flex items-center justify-center shrink-0 text-purple-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                      DIRECT_LINE
                    </div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-xs sm:text-sm font-mono text-slate-200 hover:text-purple-300 truncate block transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  id="copy-phone-btn"
                  onClick={() => onCopyText(PERSONAL_INFO.phone, 'phone')}
                  className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#1c1440] hover:bg-purple-900/40 border border-purple-800/40 text-[11px] font-mono text-purple-300 hover:text-white transition-all shrink-0 cursor-pointer"
                >
                  {copiedLabel === 'phone' ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              {/* Headquarters */}
              <div className="p-4 rounded-xl bg-[#0f0a24]/90 border border-[#261b54] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#191138] border border-purple-900/50 flex items-center justify-center shrink-0 text-purple-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                      HEADQUARTERS
                    </div>
                    <div className="text-xs sm:text-sm font-mono text-slate-200 truncate">
                      {PERSONAL_INFO.locationDetailed}
                    </div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded text-[10px] font-mono tracking-wider text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 shrink-0">
                  {PERSONAL_INFO.workPreference}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dispatch Console */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="rounded-xl bg-[#0f0a24]/95 border border-[#261b54] shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden">
              {/* Console Header */}
              <div className="px-5 py-3.5 bg-[#140e2e] border-b border-[#261b54] flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                  <span className="font-semibold tracking-wider">
                    DATA_INPUT_TERMINAL // DISPATCH_CONSOLE
                  </span>
                </div>
                <div className="flex items-center gap-1 text-slate-400">
                  <Shield className="w-3 h-3 text-purple-400" />
                  <span>ENCRYPTION: 256-BIT</span>
                </div>
              </div>

              {/* Form Content */}
              {dispatchStatus === 'success' ? (
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="p-4 rounded-lg bg-purple-950/30 border border-purple-500/40 text-left space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 text-sm font-mono font-bold">
                      <Check className="w-4 h-4" />
                      <span>TRANSMISSION ACKNOWLEDGED & ARCHIVED</span>
                    </div>
                    <p className="text-xs text-slate-300 font-manrope">
                      Your transmission packet has been encrypted and delivered directly to M.
                      Sumair Jawwad. You can expect a response shortly at{' '}
                      <span className="text-purple-300 font-mono">{formData.contactEmail}</span>.
                    </p>
                  </div>

                  {/* Terminal Log Output */}
                  <div className="p-4 rounded-lg bg-[#070510] border border-purple-950 font-mono text-[11px] text-purple-300 space-y-1">
                    {consoleLogs.map((log, i) => (
                      <div key={i} className="leading-relaxed">
                        {log}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={handleResetTransmission}
                      className="px-4 py-2 rounded-md bg-[#191138] hover:bg-purple-900/40 text-xs font-mono text-purple-200 border border-purple-700/50 transition-all cursor-pointer"
                    >
                      SEND ANOTHER TRANSMISSION
                    </button>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry: ${encodeURIComponent(
                        formData.inquiryDomain
                      )}&body=${encodeURIComponent(
                        `From: ${formData.transmitterName} (${formData.contactEmail})\n\n${formData.payloadMessage}`
                      )}`}
                      className="px-4 py-2 rounded-md bg-purple-900/30 hover:bg-purple-800/40 text-xs font-mono text-slate-300 border border-purple-700/30 transition-all"
                    >
                      OPEN IN EMAIL CLIENT
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleDispatch} className="p-6 sm:p-7 space-y-5">
                  {/* Transmitter Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="transmitterName"
                        className="block text-[11px] font-mono tracking-wider text-slate-400 uppercase"
                      >
                        TRANSMITTER_NAME
                      </label>
                      <input
                        ref={nameInputRef}
                        id="transmitterName"
                        name="transmitterName"
                        type="text"
                        required
                        value={formData.transmitterName}
                        onChange={handleInputChange}
                        placeholder="e.g. Elena Rostova"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#140e2e]/80 border border-[#2b1f66] text-sm font-manrope text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="contactEmail"
                        className="block text-[11px] font-mono tracking-wider text-slate-400 uppercase"
                      >
                        CONTACT_EMAIL
                      </label>
                      <input
                        id="contactEmail"
                        name="contactEmail"
                        type="email"
                        required
                        value={formData.contactEmail}
                        onChange={handleInputChange}
                        placeholder="e.g. team@agency.io"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#140e2e]/80 border border-[#2b1f66] text-sm font-manrope text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Inquiry Domain / Role */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="inquiryDomain"
                      className="block text-[11px] font-mono tracking-wider text-slate-400 uppercase"
                    >
                      INQUIRY_DOMAIN / ROLE
                    </label>
                    <div className="relative">
                      <select
                        id="inquiryDomain"
                        name="inquiryDomain"
                        value={formData.inquiryDomain}
                        onChange={handleInputChange}
                        className="w-full appearance-none px-3.5 py-2.5 rounded-lg bg-[#140e2e]/80 border border-[#2b1f66] text-sm font-manrope text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all pr-10 cursor-pointer"
                      >
                        <option value="Customer Sales Executive / Outreach Role">
                          Customer Sales Executive / Outreach Role
                        </option>
                        <option value="Digital Marketing & SEO Lead">
                          Digital Marketing & SEO Lead
                        </option>
                        <option value="Social Media Outreach Coordinator">
                          Social Media Outreach Coordinator
                        </option>
                        <option value="Direct Telesales & Lead Acquisition">
                          Direct Telesales & Lead Acquisition
                        </option>
                        <option value="General Commercial Partnership">
                          General Commercial Partnership
                        </option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Payload Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="payloadMessage"
                      className="block text-[11px] font-mono tracking-wider text-slate-400 uppercase"
                    >
                      PAYLOAD_MESSAGE
                    </label>
                    <textarea
                      id="payloadMessage"
                      name="payloadMessage"
                      rows={4}
                      required
                      value={formData.payloadMessage}
                      onChange={handleInputChange}
                      placeholder="Detail your project or employment parameters here..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#140e2e]/80 border border-[#2b1f66] text-sm font-manrope text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Error state */}
                  {dispatchStatus === 'error' && (
                    <div className="text-xs font-mono text-rose-400 bg-rose-950/30 p-3 rounded border border-rose-800/40">
                      {consoleLogs[0]}
                    </div>
                  )}

                  {/* Submit Dispatch Button */}
                  <button
                    id="dispatch-transmission-btn"
                    type="submit"
                    disabled={dispatchStatus === 'transmitting'}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-md text-xs sm:text-sm font-mono font-medium text-white bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-900/40 hover:shadow-purple-700/60 transition-all active:scale-[0.99] cursor-pointer disabled:opacity-60 border border-purple-400/20"
                  >
                    {dispatchStatus === 'transmitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>DISPATCHING SECURE TELEMETRY...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 fill-white" />
                        <span className="tracking-wider">DISPATCH TRANSMISSION</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
