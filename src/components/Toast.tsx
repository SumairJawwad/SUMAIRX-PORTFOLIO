import React from 'react';
import { Check, Info } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  if (!message) return null;

  return (
    <div
      id="system-toast-notification"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-[#140e2e] border border-purple-500/50 shadow-[0_4px_30px_rgba(168,85,247,0.3)] text-slate-100 text-xs font-mono animate-bounce"
    >
      <div className="w-5 h-5 rounded-full bg-emerald-950/60 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shrink-0">
        <Check className="w-3 h-3" />
      </div>
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-slate-400 hover:text-white"
        aria-label="Dismiss toast"
      >
        ✕
      </button>
    </div>
  );
};
