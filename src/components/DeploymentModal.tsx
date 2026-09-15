import React from 'react';
import { X, Bot, Globe, Mail, Bus, ExternalLink, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react';
import { DeploymentItem } from '../types';

interface DeploymentModalProps {
  deployment: DeploymentItem | null;
  onClose: () => void;
}

export const DeploymentModal: React.FC<DeploymentModalProps> = ({ deployment, onClose }) => {
  if (!deployment) return null;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'bot':
        return <Bot className="w-5 h-5 text-purple-300" />;
      case 'globe':
        return <Globe className="w-5 h-5 text-purple-300" />;
      case 'mail':
        return <Mail className="w-5 h-5 text-purple-300" />;
      case 'bus':
        return <Bus className="w-5 h-5 text-purple-300" />;
      default:
        return <Bot className="w-5 h-5 text-purple-300" />;
    }
  };

  const openApp = () => {
    if (deployment.fullUrl) {
      window.open(deployment.fullUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      id="deployment-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="deployment-modal-content"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-2xl bg-[#0f0a24] border border-[#2b1f66] shadow-[0_10px_50px_rgba(0,0,0,0.85)] overflow-hidden my-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#261b54] bg-[#140e2e]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#191138] border border-purple-800/50 flex items-center justify-center">
              {getIcon(deployment.iconName)}
            </div>
            <div>
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-purple-400 uppercase">
                <span className="text-emerald-400">[ {deployment.status} ]</span>
                <span>•</span>
                <span>{deployment.code}</span>
              </div>
              <div className="text-base font-bold text-white font-space">
                {deployment.title}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-purple-950/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Subtitle & Narrative */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-purple-300 font-medium">
              {deployment.subtitle}
            </div>
            <p className="text-sm font-manrope text-slate-200 leading-relaxed">
              {deployment.description}
            </p>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <div className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              // ARCHITECTURAL STACK
            </div>
            <div className="flex flex-wrap gap-2">
              {deployment.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-[#171038] border border-[#2e2060] text-xs font-mono text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Host Endpoint Bar */}
          <div className="p-4 rounded-xl bg-[#120d2c] border border-purple-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase block">
                DEPLOYED ENDPOINT URL
              </span>
              <span className="text-sm font-mono text-purple-300 font-semibold select-all">
                {deployment.url}
              </span>
            </div>
            <button
              type="button"
              onClick={openApp}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-xs font-mono font-medium text-white transition-all shadow-md shadow-purple-950 cursor-pointer shrink-0"
            >
              <span>LAUNCH LIVE APP</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* KPIs */}
          {deployment.kpis && (
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono tracking-wider text-slate-400 uppercase">
                // SYSTEM TELEMETRY & SPECIFICATIONS
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {deployment.kpis.map((kpi, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#0b081a] border border-[#261b54] flex flex-col justify-between"
                  >
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      {kpi.label}
                    </span>
                    <span className="text-sm sm:text-base font-bold font-space text-white pt-1">
                      {kpi.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Detailed Bullet Points */}
          {deployment.details && (
            <div className="space-y-2">
              <h4 className="text-xs font-mono tracking-wider text-slate-400 uppercase">
                // IMPLEMENTED PROTOCOLS
              </h4>
              <ul className="space-y-2">
                {deployment.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs font-manrope text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#140e2e] border-t border-[#261b54] flex items-center justify-between">
          <span className="text-[10px] font-mono text-slate-500">
            NODE IDENTITY: {deployment.code} // VERIFIED
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#1f1545] hover:bg-purple-900/40 text-xs font-mono text-purple-200 border border-purple-700/40 transition-all cursor-pointer"
          >
            DISMISS
          </button>
        </div>
      </div>
    </div>
  );
};
