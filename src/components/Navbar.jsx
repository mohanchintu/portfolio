import React, { useState, useEffect } from 'react';
import { 
  Layers, Sun, Moon, Download, Mail, Menu, X, Sparkles, 
  ExternalLink, Github, Linkedin, Smartphone 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ 
  viewMode, 
  setViewMode, 
  darkMode, 
  setDarkMode, 
  onOpenResume, 
  onOpenContact 
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/85 dark:bg-[#07130E]/85 backdrop-blur-md border-b border-slate-200 dark:border-emerald-500/20 py-3 shadow-sm' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-md shadow-emerald-500/50" />
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white font-display">
              MOHAN P
            </span>
          </div>
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
            SAP · MERN · ML
          </span>
        </div>

        {/* View Switcher: Figma Slides vs Web */}
        <div className="hidden md:flex items-center bg-slate-200/80 dark:bg-slate-900/90 p-1 rounded-2xl border border-slate-300 dark:border-slate-800">
          <button
            onClick={() => setViewMode('slides')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === 'slides'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Figma Deck (18 Slides)</span>
          </button>

          <button
            onClick={() => setViewMode('web')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === 'web'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Web Scroll Mode</span>
          </button>
        </div>

        {/* Quick Action Icons & Buttons */}
        <div className="flex items-center gap-2">
          
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-slate-200/80 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-300 transition-colors"
            title="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Resume PDF */}
          <button
            onClick={onOpenResume}
            className="hidden sm:flex px-3.5 py-1.5 bg-slate-200/80 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white text-xs font-semibold rounded-xl items-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-emerald-500" />
            <span>Resume</span>
          </button>

          {/* Contact Button */}
          <button
            onClick={onOpenContact}
            className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-md shadow-emerald-500/20 transition-all hover:scale-105"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 bg-slate-200 dark:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-5 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex flex-col gap-1.5">
            <button
              onClick={() => { setViewMode('slides'); setMobileMenuOpen(false); }}
              className={`p-2.5 rounded-xl text-xs font-bold text-left flex items-center gap-2 ${
                viewMode === 'slides' ? 'bg-emerald-500 text-slate-950' : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Figma Slide Deck (18 Slides)</span>
            </button>
            <button
              onClick={() => { setViewMode('web'); setMobileMenuOpen(false); }}
              className={`p-2.5 rounded-xl text-xs font-bold text-left flex items-center gap-2 ${
                viewMode === 'web' ? 'bg-emerald-500 text-slate-950' : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Continuous Web View</span>
            </button>
          </div>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex gap-2">
            <button
              onClick={() => { onOpenResume(); setMobileMenuOpen(false); }}
              className="flex-1 py-2 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-emerald-500" />
              <span>Resume PDF</span>
            </button>
            <button
              onClick={() => { onOpenContact(); setMobileMenuOpen(false); }}
              className="flex-1 py-2 bg-emerald-500 text-slate-950 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
