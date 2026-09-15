import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, SKILLS, EDUCATION } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const markdownContent = `
# ${PERSONAL_INFO.fullName.toUpperCase()}
**${PERSONAL_INFO.role}**
- Email: ${PERSONAL_INFO.email}
- Phone: ${PERSONAL_INFO.phone}
- Location: ${PERSONAL_INFO.locationDetailed}
- Status: ${PERSONAL_INFO.availability} (${PERSONAL_INFO.workPreference})

---

### PROFESSIONAL SUMMARY
${PERSONAL_INFO.bio}

---

### EXPERIENCE ARCHITECTURE

${EXPERIENCES.map(
  (exp) => `
#### ${exp.title}
*${exp.tag} | ${exp.dateRange}*
${exp.description ? `${exp.description}\n` : ''}
${exp.capsules.map((c) => `- ${c.text}`).join('\n')}
`
).join('\n')}

---

### SKILLS & PROFICIENCIES
${SKILLS.map((s) => `- **${s.title}** (${s.percentage}%): ${s.subdescriptors}`).join('\n')}

---

### EDUCATION
${EDUCATION.map(
  (edu) => `
#### ${edu.institution}
*${edu.levelTag}*
- ${edu.subtitle}
- ${edu.location}
`
).join('\n')}
    `.trim();

    const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `M_Sumair_Jawwad_CV.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[#0f0a24] border border-[#2b1f66] shadow-[0_10px_50px_rgba(0,0,0,0.8)] overflow-hidden my-auto"
      >
        {/* Modal Top Controls Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#261b54] bg-[#140e2e]/90 shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>SYSTEM_NODE // RESUME_PARSER_V2.4</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#1f1545] hover:bg-purple-900/40 text-xs font-mono text-purple-200 border border-purple-700/40 transition-all cursor-pointer"
              title="Print document or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PRINT / PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#1f1545] hover:bg-purple-900/40 text-xs font-mono text-purple-200 border border-purple-700/40 transition-all cursor-pointer"
              title="Download structured Markdown / Plain text CV"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">EXPORT MD</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-purple-950/50 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Printable Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0b081a]">
          {/* Header */}
          <div className="border-b border-[#261b54]/80 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h2 className="text-2xl sm:text-3xl font-bold font-space text-white uppercase tracking-tight">
                {PERSONAL_INFO.fullName}
              </h2>
              <span className="text-xs font-mono text-purple-400">
                {PERSONAL_INFO.workPreference}
              </span>
            </div>
            <div className="text-sm font-mono text-purple-300">
              {PERSONAL_INFO.role}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 pt-2">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-purple-400" />
                {PERSONAL_INFO.phone}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                {PERSONAL_INFO.locationDetailed}
              </span>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono tracking-widest text-purple-400 uppercase">
              // EXECUTIVE SUMMARY
            </h3>
            <p className="text-sm font-manrope text-slate-300 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Experience Section */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-widest text-purple-400 uppercase">
              // EXPERIENCE ARCHITECTURE
            </h3>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-base font-bold font-space text-white">
                      {exp.title}
                    </h4>
                    <span className="text-xs font-mono text-slate-400">
                      {exp.dateRange}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-purple-300/80">
                    {exp.tag}
                  </div>
                  {exp.description && (
                    <p className="text-xs font-manrope text-slate-400">
                      {exp.description}
                    </p>
                  )}
                  <ul className="space-y-1 pt-1">
                    {exp.capsules.map((c) => (
                      <li
                        key={c.id}
                        className="text-xs font-manrope text-slate-300 flex items-start gap-2"
                      >
                        <span className="text-purple-400 mt-0.5">•</span>
                        <span>{c.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Matrix */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-widest text-purple-400 uppercase">
              // CORE PROFICIENCIES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SKILLS.map((skill) => (
                <div
                  key={skill.id}
                  className="p-3 rounded-lg bg-[#140e2e]/50 border border-[#261b54] flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs font-semibold text-white">
                      {skill.title}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400">
                      {skill.subdescriptors}
                    </div>
                  </div>
                  <span className="text-xs font-mono text-purple-300 font-bold ml-2">
                    {skill.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono tracking-widest text-purple-400 uppercase">
              // ACADEMIC FOUNDATIONS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.id}
                  className="p-3.5 rounded-lg bg-[#140e2e]/50 border border-[#261b54]"
                >
                  <div className="text-[10px] font-mono text-purple-400 uppercase">
                    {edu.levelTag}
                  </div>
                  <div className="text-sm font-bold text-white font-space">
                    {edu.institution}
                  </div>
                  <div className="text-xs text-slate-300">{edu.subtitle}</div>
                  <div className="text-xs font-mono text-slate-400 pt-1">
                    {edu.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
