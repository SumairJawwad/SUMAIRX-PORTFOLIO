import React from 'react';
import { X, ShieldCheck, Terminal, Server, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface SecurityLogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SecurityLogModal: React.FC<SecurityLogModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="security-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        id="security-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-2xl bg-[#0f0a24] border border-[#2b1f66] shadow-[0_10px_50px_rgba(0,0,0,0.8)] overflow-hidden"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#261b54] bg-[#140e2e]">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>SECURITY_LOG // SYSTEM_TELEMETRY</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 font-mono text-xs">
          <div className="p-3 rounded-lg bg-[#070510] border border-purple-950 text-slate-300 space-y-2">
            <div className="text-emerald-400 font-bold">[NODE STATUS: HEALTHY & ONLINE]</div>
            <div>[IDENTITY]: {PERSONAL_INFO.fullName}</div>
            <div>[LOCATION]: {PERSONAL_INFO.locationDetailed}</div>
            <div>[WORK PREFERENCE]: {PERSONAL_INFO.workPreference}</div>
            <div>[RECRUITMENT PROTOCOL]: OPERATIONAL</div>
            <div>[CURRENT ENCRYPTION]: TLS 1.3 // 256-BIT AES</div>
            <div>[DIRECT DIAL]: {PERSONAL_INFO.phone}</div>
            <div>[DIRECT MAIL]: {PERSONAL_INFO.email}</div>
          </div>

          <div className="space-y-1.5 text-slate-400 text-[11px]">
            <div className="flex items-center gap-2 text-purple-300">
              <Terminal className="w-3.5 h-3.5" />
              <span>DIAGNOSTIC AUDIT REPORT</span>
            </div>
            <p className="font-manrope text-slate-300">
              All career records, academic certifications, and revenue telemetry figures on this
              workstation are verified and ready for deployment review.
            </p>
          </div>
        </div>

        <div className="px-5 py-3.5 bg-[#140e2e] border-t border-[#261b54] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#1f1545] hover:bg-purple-900/40 text-xs font-mono text-purple-200 border border-purple-700/40 cursor-pointer"
          >
            CLOSE_TERMINAL
          </button>
        </div>
      </div>
    </div>
  );
};
