import React, { useState, useRef, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TelemetrySection } from './components/TelemetrySection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ShowcaseSection } from './components/ShowcaseSection';
import { EducationSection } from './components/EducationSection';
import { TerminalSection } from './components/TerminalSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { DeploymentModal } from './components/DeploymentModal';
import { SecurityLogModal } from './components/SecurityLogModal';
import { AvailabilityModal } from './components/AvailabilityModal';
import { Toast } from './components/Toast';
import { DeploymentItem } from './types';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedDeployment, setSelectedDeployment] = useState<DeploymentItem | null>(null);
  const [isSecurityLogOpen, setIsSecurityLogOpen] = useState(false);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const nameInputRef = useRef<HTMLInputElement | null>(null);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsResumeOpen(false);
        setSelectedDeployment(null);
        setIsSecurityLogOpen(false);
        setIsAvailabilityOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle clipboard copy
  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedLabel(label);
        setToastMessage(`COPIED TO CLIPBOARD: ${text}`);
        setTimeout(() => {
          setCopiedLabel(null);
        }, 2500);
        setTimeout(() => {
          setToastMessage(null);
        }, 3500);
      })
      .catch(() => {
        // Fallback
        setToastMessage(`Selected: ${text}`);
      });
  };

  // Scroll to terminal and focus input
  const handleInitiateTransmission = () => {
    const terminalElement = document.getElementById('terminal');
    if (terminalElement) {
      terminalElement.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-[#090714] text-[#e6dff4] flex flex-col selection:bg-purple-600 selection:text-white relative">
      {/* Background Cybernetic Grid Subtle Pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.035] -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, #a855f7 1px, transparent 1px), linear-gradient(to bottom, #a855f7 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      ></div>

      {/* Top Ambient Glow Orb */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-700/10 blur-[150px] pointer-events-none -z-10"></div>

      {/* Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAvailability={() => setIsAvailabilityOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onInitiateTransmission={handleInitiateTransmission}
          onCopyText={handleCopyText}
          copiedLabel={copiedLabel}
        />

        {/* Telemetry Metrics Section */}
        <TelemetrySection
          onSelectMetric={(idx) => {
            setToastMessage(`Viewing Verified Deployment Telemetry [Card 0${idx + 1}]`);
            setTimeout(() => setToastMessage(null), 2500);
          }}
        />

        {/* Experience Architecture Section */}
        <ExperienceTimeline />

        {/* Skills & Competencies Matrix Section */}
        <SkillsMatrix />

        {/* Upgraded Portfolio Showcase Section */}
        <ShowcaseSection
          onSelectDeployment={(deployment) => setSelectedDeployment(deployment)}
        />

        {/* Education & Foundations Section */}
        <EducationSection />

        {/* Initiate Transmission / Contact Terminal */}
        <TerminalSection
          onCopyText={handleCopyText}
          copiedLabel={copiedLabel}
          nameInputRef={nameInputRef}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenSecurityLog={() => setIsSecurityLogOpen(true)}
      />

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <DeploymentModal
        deployment={selectedDeployment}
        onClose={() => setSelectedDeployment(null)}
      />

      <SecurityLogModal
        isOpen={isSecurityLogOpen}
        onClose={() => setIsSecurityLogOpen(false)}
      />

      <AvailabilityModal
        isOpen={isAvailabilityOpen}
        onClose={() => setIsAvailabilityOpen(false)}
        onContactClick={handleInitiateTransmission}
      />

      {/* Interactive System Toast */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
