import React from 'react';
import { X, CheckCircle2, Calendar, MapPin, Briefcase, Clock, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AvailabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export const AvailabilityModal: React.FC<AvailabilityModalProps> = ({
  isOpen,
  onClose,
  onContactClick,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="availability-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        id="availability-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-2xl bg-[#0f0a24] border border-[#2b1f66] shadow-[0_10px_50px_rgba(0,0,0,0.8)] overflow-hidden"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#261b54] bg-[#140e2e]">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>CANDIDATE AVAILABILITY STATUS</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <div>
              <div className="text-sm font-bold font-space">IMMEDIATELY AVAILABLE</div>
              <div className="text-xs font-manrope text-emerald-200/80">
                Open to Full-Time, Part-Time & Contract Engagements
              </div>
            </div>
          </div>

          <div className="space-y-2.5 text-xs font-mono text-slate-300">
            <div className="flex items-center justify-between p-2.5 rounded bg-[#140e2e] border border-[#261b54]">
              <span className="flex items-center gap-2 text-slate-400">
                <Briefcase className="w-3.5 h-3.5 text-purple-400" />
                Target Roles:
              </span>
              <span className="text-white text-right">Sales Executive / Marketer</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded bg-[#140e2e] border border-[#261b54]">
              <span className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                Work Setup:
              </span>
              <span className="text-emerald-300">Remote / Hybrid / Onsite (Karachi)</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded bg-[#140e2e] border border-[#261b54]">
              <span className="flex items-center gap-2 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-purple-400" />
                Notice Period:
              </span>
              <span className="text-white">Immediate (0 Days)</span>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md text-xs font-mono font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-900/40 transition-all cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>DISPATCH IMMEDIATE INTERVIEW INVITATION</span>
          </button>
        </div>
      </div>
    </div>
  );
};
