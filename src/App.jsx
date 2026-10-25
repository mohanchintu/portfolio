import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FigmaSlideViewer from './components/FigmaSlideViewer';
import WebViewMode from './components/WebViewMode';
import ResumeModal from './components/ResumeModal';
import ContactModal from './components/ContactModal';

export default function App() {
  const [viewMode, setViewMode] = useState('slides'); // 'slides' or 'web'
  const [darkMode, setDarkMode] = useState(true);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#F6FAF7] dark:bg-[#07130E] text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* Top Navbar */}
      <Navbar 
        viewMode={viewMode}
        setViewMode={setViewMode}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Main View Area */}
      {viewMode === 'slides' ? (
        <FigmaSlideViewer 
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenContact={() => setContactModalOpen(true)}
          onSwitchToWeb={() => setViewMode('web')}
        />
      ) : (
        <WebViewMode 
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenContact={() => setContactModalOpen(true)}
          onSwitchToSlides={() => setViewMode('slides')}
        />
      )}

      {/* Modals */}
      <ResumeModal 
        isOpen={resumeModalOpen} 
        onClose={() => setResumeModalOpen(false)} 
      />
      
      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />

    </div>
  );
}
