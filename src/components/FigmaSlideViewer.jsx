import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, ChevronRight, Maximize2, Minimize2, ExternalLink, 
  Layers, Sparkles, Download, Mail, Phone, Github, Linkedin,
  CheckCircle, ArrowRight, ShieldCheck, Dumbbell, Database, Activity,
  Sliders, User, Briefcase, Award, GraduationCap, Code2, Monitor
} from 'lucide-react';
import MobileDeviceMockup from './MobileDeviceMockup';
import { 
  PhishingScannerDemo, 
  MLClassificationDemo, 
  FitnessPlannerDemo, 
  VistexXmlPipelineDemo 
} from './InteractiveLiveDemo';
import { portfolioData } from '../data/portfolioData';

export default function FigmaSlideViewer({ onOpenResume, onOpenContact, onSwitchToWeb }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const totalSlides = 18;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#07130E] text-slate-100 flex flex-col font-sans select-none relative overflow-x-hidden pt-16">
      
      {/* Background ambient radial gradients */}
      <div className="fixed top-0 left-1/4 w-[750px] h-[750px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-1/4 w-[750px] h-[750px] bg-teal-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Floating Presentation Control Bar (Keen, Minimal, Non-Intrusive) */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-4 pb-2 flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-extrabold text-xs sm:text-sm tracking-wider uppercase text-white font-display">
              Figma Design Presentation
            </span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hidden sm:inline-block">
            Green Mobile UI Template (18 Pages)
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Slide Indicator */}
          <div className="px-3 py-1 bg-slate-900/90 border border-emerald-500/30 rounded-xl text-xs font-mono text-emerald-400 flex items-center gap-1.5 shadow-sm">
            <span className="font-bold text-white">{String(currentSlide).padStart(2, '0')}</span>
            <span className="text-slate-500">/</span>
            <span>{String(totalSlides).padStart(2, '0')}</span>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-1 bg-slate-900/90 border border-emerald-500/30 p-1 rounded-xl shadow-sm">
            <button
              onClick={prevSlide}
              title="Previous Page (← key)"
              className="p-1.5 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              title="Next Page (→ key)"
              className="p-1.5 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Fullscreen */}
          <button
            onClick={toggleFullscreen}
            className="p-2 bg-slate-900/90 hover:bg-slate-800 border border-emerald-500/30 text-slate-300 hover:text-white rounded-xl transition-colors hidden sm:flex items-center"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Switch to Web Scroll */}
          <button
            onClick={onSwitchToWeb}
            className="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-md shadow-emerald-500/20 transition-all hover:scale-105"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Switch to Web View</span>
          </button>
        </div>
      </div>

      {/* Main Full-Bleed Keen Stage (No Nested Card-on-Page) */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 flex flex-col justify-center">
        
        {/* Section Header Banner */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-emerald-500/20">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
              {portfolioData.slides[currentSlide - 1]?.category}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs font-semibold text-slate-300">
              {portfolioData.slides[currentSlide - 1]?.title}
            </span>
          </div>

          <span className="text-[11px] font-mono text-slate-400 hidden sm:inline-block">
            {portfolioData.slides[currentSlide - 1]?.sub}
          </span>
        </div>

        {/* Dynamic Slide Content */}
        <div className="flex-1 flex flex-col justify-center py-2">
          
          {/* SLIDE 1: COVER PAGE */}
          {currentSlide === 1 && (
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  2025 – 2026 OFFICIAL PORTFOLIO
                </div>

                <div>
                  <h1 className="text-4xl sm:text-6xl font-black text-white font-display tracking-tight leading-tight">
                    MOHAN P
                  </h1>
                  <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400 bg-clip-text text-transparent mt-1">
                    Associate Software Developer & Full-Stack Engineer
                  </h2>
                  <p className="text-slate-300 text-sm mt-3 leading-relaxed max-w-xl">
                    Specialized in SAP ABAP enterprise systems & MERN full-stack architectures. Designed with the modern Green Mobile UI Design System.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-emerald-500/20">
                    <p className="text-[11px] text-slate-400">Enterprise Role</p>
                    <p className="text-sm font-bold text-white">Vistex (March 2025 – Present)</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-emerald-500/20">
                    <p className="text-[11px] text-slate-400">Education Distinction</p>
                    <p className="text-sm font-bold text-emerald-400">8.7 CGPA · Data Science</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={nextSlide}
                    className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-emerald-500/25 transition-all"
                  >
                    <span>Explore Presentation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={onOpenResume}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-emerald-500/30 text-white font-semibold rounded-xl flex items-center gap-2 transition-colors"
                  >
                    <Download className="w-4 h-4 text-emerald-400" />
                    <span>Resume PDF</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <MobileDeviceMockup tilted={true} tag="Figma Mobile UI" theme="dark">
                  <div className="space-y-3 pt-1">
                    <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-3">
                      <img 
                        src={portfolioData.profile.photo} 
                        alt="Mohan P" 
                        className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500 shadow-md"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                      <div>
                        <h4 className="font-bold text-sm text-white">Mohan P</h4>
                        <p className="text-[10px] text-emerald-400 font-mono">SAP ABAP · MERN Stack</p>
                        <span className="inline-block mt-0.5 px-2 py-0.2 bg-emerald-500 text-slate-950 text-[9px] font-bold rounded">
                          Active @ Vistex
                        </span>
                      </div>
                    </div>

                    <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800 space-y-2">
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-slate-400">Featured Mobile App</span>
                        <span className="text-emerald-400 font-bold">MERN Fit</span>
                      </div>
                      <div className="p-2.5 bg-emerald-950/50 rounded-xl border border-emerald-500/30">
                        <p className="text-[11px] font-bold text-white">Daily Cardio & Strength</p>
                        <p className="text-[10px] text-slate-400">540 kcal · 45 mins completed</p>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                          <div className="bg-emerald-500 h-full w-4/5 rounded-full" />
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-900/60 rounded-2xl border border-slate-800/80 text-[10px] text-slate-300">
                      <p className="font-semibold text-white mb-1">Key Strengths</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-1.5 py-0.5 bg-slate-800 rounded">React.js</span>
                        <span className="px-1.5 py-0.5 bg-slate-800 rounded">Node.js</span>
                        <span className="px-1.5 py-0.5 bg-slate-800 rounded">C++ / Python</span>
                        <span className="px-1.5 py-0.5 bg-slate-800 rounded">XML Engine</span>
                      </div>
                    </div>
                  </div>
                </MobileDeviceMockup>
              </div>
            </div>
          )}

          {/* SLIDE 2: DIRECTORY / INDEX */}
          {currentSlide === 2 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase">CONTENTS · PORTFOLIO DIRECTORY</span>
                <h2 className="text-3xl font-extrabold text-white mt-1">Portfolio Architecture & Index</h2>
                <p className="text-slate-400 text-sm">Four structured pillars representing Mohan P's software engineering background.</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                {[
                  {
                    num: "01",
                    title: "Mobile & Full-Stack",
                    sub: "Client Apps & Web Systems",
                    desc: "Fitness Tracking MERN app, URL Phishing Detection, and Breast Cancer ML.",
                    slideTarget: 9,
                    color: "border-emerald-500/30 hover:border-emerald-400"
                  },
                  {
                    num: "02",
                    title: "Enterprise Architecture",
                    sub: "SAP ABAP & XML Pipelines",
                    desc: "Vistex Agreement Templates, Compressed XML serialization, and automated CRUD workflows.",
                    slideTarget: 6,
                    color: "border-teal-500/30 hover:border-teal-400"
                  },
                  {
                    num: "03",
                    title: "Technical Stack",
                    sub: "Languages & Frameworks",
                    desc: "C++, Python, React, Node, Express, MongoDB, MySQL, and ML algorithms.",
                    slideTarget: 17,
                    color: "border-green-500/30 hover:border-green-400"
                  },
                  {
                    num: "04",
                    title: "Honors & Contact",
                    sub: "Accreditations & Connect",
                    desc: "Oct-Coder Hackathon Finalist, HackerRank 4-Star, CGPA 8.7, and Direct Contact.",
                    slideTarget: 18,
                    color: "border-amber-500/30 hover:border-amber-400"
                  }
                ].map((cat, idx) => (
                  <div
                    key={idx}
                    onClick={() => setCurrentSlide(cat.slideTarget)}
                    className={`p-6 rounded-3xl bg-slate-900/80 border ${cat.color} cursor-pointer group hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden`}
                  >
                    <span className="text-3xl font-black text-emerald-400/30 group-hover:text-emerald-400 transition-colors font-mono">
                      {cat.num}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-3 group-hover:text-emerald-300 transition-colors">
                      {cat.title}
                    </h3>
                    <h4 className="text-xs text-emerald-400 font-semibold mb-2">{cat.sub}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{cat.desc}</p>
                    <div className="mt-4 flex items-center text-xs font-bold text-emerald-400 gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Jump to Section</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 3: EXECUTIVE BACKGROUND */}
          {currentSlide === 3 && (
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase">OVERVIEW · EXECUTIVE SUMMARY</span>
                <h2 className="text-3xl font-extrabold text-white">Full-Stack Precision & Enterprise Engineering</h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Mohan P is an Associate Software Developer at <strong>Vistex</strong> with proven accomplishments spanning SAP ABAP enterprise systems, high-performance XML pipelines, and modern full-stack web applications using the MERN stack.
                </p>
                
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {portfolioData.metrics.map((m, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-900/80 border border-emerald-500/20 rounded-2xl">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-slate-400">{m.label}</span>
                        <span className="px-1.5 py-0.2 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold rounded">
                          {m.badge}
                        </span>
                      </div>
                      <p className="text-2xl font-black text-white font-mono mt-1">{m.value}</p>
                      <p className="text-[11px] text-emerald-400/80">{m.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-slate-900/90 border border-emerald-500/30 rounded-3xl space-y-4">
                <h3 className="font-bold text-base text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-emerald-400" />
                  <span>Core Engineering Disciplines</span>
                </h3>
                <div className="space-y-3">
                  <div className="p-3.5 bg-slate-950/70 rounded-xl border border-slate-800">
                    <p className="text-xs font-bold text-emerald-300">1. Enterprise SAP ABAP & Backend</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Dynamic agreement settings, compressed XML serialization pipelines, and background copy control workflows.</p>
                  </div>
                  <div className="p-3.5 bg-slate-950/70 rounded-xl border border-slate-800">
                    <p className="text-xs font-bold text-emerald-300">2. Full-Stack MERN & Responsive UI</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Modular React.js, Express REST APIs, MongoDB, touch-optimized responsive mobile experiences.</p>
                  </div>
                  <div className="p-3.5 bg-slate-950/70 rounded-xl border border-slate-800">
                    <p className="text-xs font-bold text-emerald-300">3. Machine Learning & Predictive Modeling</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Scikit-Learn, PCA dimensionality reduction, and ensemble SVMs delivering 97.2% clinical accuracy.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 4: ARCHITECTURE & RESEARCH */}
          {currentSlide === 4 && (
            <div className="space-y-5">
              <div>
                <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase">SYSTEM ARCHITECTURE · 4-TIER MODEL</span>
                <h2 className="text-3xl font-extrabold text-white mt-1">4-Tier End-to-End Enterprise Stack</h2>
                <p className="text-slate-400 text-sm">Designed for high transaction throughput, minimal latency, and ironclad data consistency.</p>
              </div>

              <div className="grid md:grid-cols-4 gap-4 pt-2">
                {[
                  {
                    tier: "Tier 1: Client & Presentation",
                    tech: "React.js · Tailwind CSS",
                    desc: "Responsive Mobile & Desktop UI, dynamic components, real-time dirty-state validation.",
                    badge: "UI Layer"
                  },
                  {
                    tier: "Tier 2: API Gateway & Router",
                    tech: "Node.js · Express.js",
                    desc: "RESTful architecture, regex security filters, token authentication, and data routing.",
                    badge: "API Layer"
                  },
                  {
                    tier: "Tier 3: Enterprise Services",
                    tech: "SAP ABAP · XML Engine",
                    desc: "Custom function modules, multi-record management, compressed table serialization.",
                    badge: "Core Service"
                  },
                  {
                    tier: "Tier 4: Storage & Persistence",
                    tech: "MongoDB · MySQL · SAP DB",
                    desc: "Normalized schemas, indexed agreement tables, automated copy control persistence.",
                    badge: "Data Layer"
                  }
                ].map((t, idx) => (
                  <div key={idx} className="p-5 bg-slate-900/80 border border-emerald-500/20 rounded-2xl flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full">
                        {t.badge}
                      </span>
                      <h4 className="font-bold text-white text-sm mt-2">{t.tier}</h4>
                      <p className="text-xs font-mono text-emerald-300 mt-1">{t.tech}</p>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">{t.desc}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                      <span>Tier #{idx + 1}</span>
                      <span className="text-emerald-400 font-bold">Verified</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 5: DEVELOPER PERSONA */}
          {currentSlide === 5 && (
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="p-6 bg-slate-900/90 border border-emerald-500/30 rounded-3xl text-center space-y-3">
                <img 
                  src={portfolioData.profile.photo} 
                  alt="Mohan P" 
                  className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-emerald-500 shadow-xl"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div>
                  <h3 className="text-xl font-black text-white">{portfolioData.profile.name}</h3>
                  <p className="text-xs text-emerald-400 font-mono mt-0.5">{portfolioData.profile.role}</p>
                  <p className="text-[11px] text-slate-400">{portfolioData.profile.company} · Hyderabad, India</p>
                </div>
                <div className="pt-2 border-t border-slate-800 flex justify-center gap-2">
                  <span className="px-2 py-0.5 bg-slate-800 rounded text-[10px] text-slate-300 font-mono">B.Tech 8.7 CGPA</span>
                  <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded text-[10px] font-mono">Full-Time</span>
                </div>
              </div>

              <div className="md:col-span-2 space-y-4">
                <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase">DEVELOPER PROFILE · EXPERTISE RADAR</span>
                <h3 className="text-2xl font-bold text-white">Full-Stack & Systems Problem Solver</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Passionate about architecting clean backend pipelines, scalable full-stack web applications, and intuitive mobile interfaces. Thrives at the intersection of enterprise reliability (SAP) and modern web agility (MERN).
                </p>

                <div className="space-y-2.5 pt-2">
                  {[
                    { skill: "Frontend & Mobile UI (React.js, Tailwind)", level: 94 },
                    { skill: "Backend REST APIs & Node.js / Express", level: 92 },
                    { skill: "SAP ABAP & Enterprise XML Serialization", level: 88 },
                    { skill: "Data Structures & Problem Solving (HackerRank 4-Star)", level: 90 },
                    { skill: "Machine Learning & Scikit-Learn (SVM, PCA)", level: 88 }
                  ].map((s, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-xs text-slate-300 mb-1">
                        <span>{s.skill}</span>
                        <span className="font-mono text-emerald-400 font-bold">{s.level}%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-1000"
                          style={{ width: `${s.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 6: ENGINEERING CHALLENGES & SOLUTIONS */}
          {currentSlide === 6 && (
            <div className="space-y-5">
              <div>
                <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase">CASE STUDY · ENGINEERING CHALLENGES</span>
                <h2 className="text-3xl font-extrabold text-white mt-1">Vistex Enterprise Challenges Solved</h2>
                <p className="text-slate-400 text-sm">Key architectural hurdles addressed during Associate Developer tenure.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 pt-2">
                {portfolioData.experience.highlights.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="p-5 bg-slate-900/80 border border-emerald-500/20 rounded-2xl flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center">
                          0{idx + 1}
                        </span>
                        <h4 className="font-bold text-white text-sm">{item.title}</h4>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed mt-2">{item.desc}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-800">
                      <span className="text-[10px] text-slate-400 uppercase font-mono">Measurable Impact:</span>
                      <p className="text-xs font-bold text-emerald-400 mt-0.5">{item.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 7: CORE MODULES MATRIX */}
          {currentSlide === 7 && (
            <div className="space-y-5">
              <div>
                <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase">FEATURE MATRIX · CORE ENGINEERING MODULES</span>
                <h2 className="text-3xl font-extrabold text-white mt-1">Multi-Domain Engineering Matrix</h2>
                <p className="text-slate-400 text-sm">Balanced competency across frontend, enterprise backend, and predictive AI.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/40">
                  <div className="px-3 py-1 bg-emerald-500 text-slate-950 text-xs font-bold rounded-lg inline-block mb-3">
                    Full-Stack & Mobile UI
                  </div>
                  <h3 className="font-bold text-white text-base">Client Application Tier</h3>
                  <ul className="text-xs text-slate-300 space-y-2 mt-3">
                    <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> React.js SPA & Mobile touch flows</li>
                    <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Tailwind CSS responsive components</li>
                    <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Dynamic bio-metric tracking & cards</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/90 border border-amber-500/40">
                  <div className="px-3 py-1 bg-amber-500 text-slate-950 text-xs font-bold rounded-lg inline-block mb-3">
                    Enterprise & Backend
                  </div>
                  <h3 className="font-bold text-white text-base">SAP ABAP & Data Engine</h3>
                  <ul className="text-xs text-slate-300 space-y-2 mt-3">
                    <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-amber-400" /> Dynamic settings data area</li>
                    <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-amber-400" /> Compressed XML table serialization</li>
                    <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-amber-400" /> Automated copy control batching</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/90 border border-blue-500/40">
                  <div className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-lg inline-block mb-3">
                    AI & Cybersecurity
                  </div>
                  <h3 className="font-bold text-white text-base">Analytics & Heuristics</h3>
                  <ul className="text-xs text-slate-300 space-y-2 mt-3">
                    <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-blue-400" /> Regex phishing pattern detector</li>
                    <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-blue-400" /> PCA dimensionality reduction</li>
                    <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-blue-400" /> 97.2% Breast Cancer ensemble SVM</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 8: JOURNEY & PIPELINE MAP */}
          {currentSlide === 8 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase">JOURNEY MAP · CAREER PROGRESSION</span>
                <h2 className="text-3xl font-extrabold text-white mt-1">Career & Engineering Progression</h2>
                <p className="text-slate-400 text-sm">Academic foundation to full-time enterprise software engineering.</p>
              </div>

              <div className="relative pt-6">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-green-500 -translate-y-1/2 z-0 hidden md:block" />

                <div className="grid md:grid-cols-4 gap-4 relative z-10">
                  {[
                    {
                      year: "2020 – 2022",
                      title: "Intermediate MPC",
                      org: "Sri Chaitanya Junior College",
                      stat: "96.6% Percentage",
                      desc: "Rigorous analytical math and physics fundamentals."
                    },
                    {
                      year: "2022 – 2026",
                      title: "B.Tech CSE Data Science",
                      org: "VNR VJIET Hyderabad",
                      stat: "8.7 CGPA",
                      desc: "Data structures, algorithms, databases, and ML algorithms."
                    },
                    {
                      year: "2024",
                      title: "Hackathons & 4-Star",
                      org: "HackerRank & Oct-Coder",
                      stat: "Finalist & Gold Badge",
                      desc: "Developed diet & fitness web app; algorithmic problem-solving."
                    },
                    {
                      year: "2025 – Present",
                      title: "Associate Developer",
                      org: "Vistex",
                      stat: "Full-Time Engineer",
                      desc: "SAP ABAP agreement templates, XML pipelines, and CRUD synchronization."
                    }
                  ].map((step, idx) => (
                    <div key={idx} className="p-5 bg-slate-900/90 border border-emerald-500/30 rounded-2xl relative shadow-lg">
                      <span className="px-2 py-0.5 bg-emerald-500 text-slate-950 text-[10px] font-mono font-bold rounded-full">
                        {step.year}
                      </span>
                      <h4 className="font-bold text-white text-sm mt-2">{step.title}</h4>
                      <p className="text-xs text-emerald-400 font-semibold">{step.org}</p>
                      <p className="text-[11px] font-mono text-slate-300 mt-1 font-bold">{step.stat}</p>
                      <p className="text-xs text-slate-400 mt-2">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 9: PROJECT CHAPTER 01 */}
          {currentSlide === 9 && (
            <div className="flex flex-col items-center justify-center text-center space-y-4 py-8">
              <span className="text-7xl font-black text-emerald-400/30 font-display">01</span>
              <div className="inline-block px-3 py-1 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold rounded-full">
                FEATURED PROJECT SHOWCASE
              </div>
              <h2 className="text-4xl font-extrabold text-white">Fitness Tracking Application</h2>
              <h3 className="text-xl text-emerald-400 font-semibold">MERN Stack · Full-Stack Web & Mobile Architecture</h3>
              <p className="text-slate-300 text-sm max-w-xl leading-relaxed">
                Engineered with MongoDB, Express.js, React.js, and Node.js. Delivers real-time workout logging, calorie computation, and dynamic user interfaces.
              </p>
              <button
                onClick={nextSlide}
                className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl flex items-center gap-2 mt-4"
              >
                <span>View Mobile Screens Flow</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* SLIDE 10: FITNESS APP DESIGN FLOW */}
          {currentSlide === 10 && (
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase">UI FLOW · MOBILE DESIGN 01</span>
                <h2 className="text-3xl font-extrabold text-white">Fitness Tracking Application</h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  A mobile-first health platform engineered using the MERN stack with dynamic UI components and real-time state synchronization.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-emerald-500/20">
                    <h4 className="text-xs font-bold text-emerald-300">Biometric Dashboard</h4>
                    <p className="text-[11px] text-slate-400">Daily calorie burn, workout duration, and active hydration trackers.</p>
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-emerald-500/20">
                    <h4 className="text-xs font-bold text-emerald-300">Intelligent Recommendation</h4>
                    <p className="text-[11px] text-slate-400">Algorithmic workout suggestions tailored to previous performance and recovery.</p>
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-emerald-500/20">
                    <h4 className="text-xs font-bold text-emerald-300">RESTful Node/Express Backend</h4>
                    <p className="text-[11px] text-slate-400">Low-latency API architecture persisting records in MongoDB Atlas.</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <MobileDeviceMockup tag="Fitness MERN" theme="dark">
                  <div className="space-y-3 pt-1">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-[10px] text-slate-400">Daily Goal</span>
                        <h4 className="text-sm font-extrabold text-white">750 / 800 kcal</h4>
                      </div>
                      <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold rounded">
                        94%
                      </span>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/10 p-3 rounded-2xl border border-emerald-500/30 text-center">
                      <Dumbbell className="w-6 h-6 text-emerald-400 mx-auto mb-1 animate-bounce" />
                      <h5 className="font-bold text-white text-xs">HIIT Cardio Session</h5>
                      <p className="text-[10px] text-slate-300">35 mins · 380 kcal estimated</p>
                      <button className="mt-2 w-full py-1.5 bg-emerald-500 text-slate-950 font-bold rounded-lg text-[10px]">
                        Resume Workout
                      </button>
                    </div>

                    <div className="space-y-1.5">
                      <p className="text-[10px] font-semibold text-slate-400">Recent Exercises</p>
                      <div className="p-2 bg-slate-900/80 rounded-xl flex justify-between items-center text-[11px]">
                        <span>Barbell Bench Press</span>
                        <span className="text-emerald-400 font-mono font-bold">4 × 10 reps</span>
                      </div>
                      <div className="p-2 bg-slate-900/80 rounded-xl flex justify-between items-center text-[11px]">
                        <span>Incline Dumbbell Row</span>
                        <span className="text-emerald-400 font-mono font-bold">3 × 12 reps</span>
                      </div>
                    </div>
                  </div>
                </MobileDeviceMockup>
              </div>
            </div>
          )}

          {/* SLIDE 11: SCREEN DEEP DIVE: FITNESS */}
          {currentSlide === 11 && (
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase">SCREEN DEEP-DIVE · UI ANALYSIS 01</span>
                  <h2 className="text-2xl font-extrabold text-white mt-0.5">Interactive Fitness Calorie Engine</h2>
                </div>
                <span className="text-xs text-slate-400">Try the interactive simulator below:</span>
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-center">
                <FitnessPlannerDemo />

                <div className="space-y-3">
                  <div className="p-4 bg-slate-900/80 border border-emerald-500/20 rounded-2xl">
                    <h4 className="font-bold text-white text-sm">Key Implementation Details</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mt-1">
                      Utilized MongoDB aggregation pipelines to summarize user weekly metrics. Frontend built with dynamic React hooks for instant recalculation of MET expenditures.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
                      <span className="text-[10px] text-slate-400 uppercase">Retention Uplift</span>
                      <p className="text-lg font-bold text-emerald-400 font-mono">+42%</p>
                    </div>
                    <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
                      <span className="text-[10px] text-slate-400 uppercase">API Latency</span>
                      <p className="text-lg font-bold text-emerald-400 font-mono">&lt;120ms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 12: SCREEN DEEP DIVE: PHISHING DETECTION */}
          {currentSlide === 12 && (
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase">SECURITY UI · THREAT SCANNER</span>
                  <h2 className="text-2xl font-extrabold text-white mt-0.5">URL Phishing Threat Detection Platform</h2>
                </div>
                <span className="text-xs text-slate-400">Regex-based Lexical Pattern Matcher</span>
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-center">
                <PhishingScannerDemo />

                <div className="space-y-3">
                  <div className="p-4 bg-slate-900/80 border border-amber-500/20 rounded-2xl">
                    <h4 className="font-bold text-white text-sm">Threat Detection Architecture</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mt-1">
                      Combines Shannon entropy heuristics, deceptive keyword clustering (e.g. "verify", "secure", "login"), and raw IP host detection to identify malicious links in real-time.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl">
                    <h5 className="font-semibold text-xs text-amber-400 mb-1">Impact & Awareness</h5>
                    <p className="text-xs text-slate-400">
                      Significantly reduces phishing risk exposure by enabling instant URL validation with 96.4% threat catch rate and sub-50ms execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 13: DETAIL SCREEN SHOWCASE */}
          {currentSlide === 13 && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase">UI FLOW · MULTI-SCREEN SHOWCASE</span>
                <h2 className="text-2xl font-extrabold text-white mt-0.5">Multi-Screen Mobile Flow</h2>
                <p className="text-slate-400 text-xs">Smooth state transitions between Auth, Dashboard, and Analytics.</p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-2xl text-center">
                  <span className="text-[10px] font-mono text-emerald-400">Screen 01 · Auth & Profile</span>
                  <div className="mt-2 aspect-[9/15] bg-[#0A1510] rounded-xl p-3 border border-emerald-500/20 flex flex-col justify-between text-left">
                    <div className="space-y-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <User className="w-4 h-4" />
                      </div>
                      <p className="text-xs font-bold text-white">Welcome Back</p>
                      <p className="text-[9px] text-slate-400">Sign in to sync your biometrics</p>
                      <div className="h-6 bg-slate-800/80 rounded border border-slate-700 mt-2" />
                      <div className="h-6 bg-slate-800/80 rounded border border-slate-700" />
                    </div>
                    <div className="w-full py-1.5 bg-emerald-500 rounded text-slate-950 font-bold text-[10px] text-center">
                      Enter Workspace
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-slate-900/80 border border-emerald-500/30 rounded-2xl text-center shadow-lg">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">Screen 02 · Main Dashboard</span>
                  <div className="mt-2 aspect-[9/15] bg-[#0A1510] rounded-xl p-3 border border-emerald-500/40 flex flex-col justify-between text-left">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="text-emerald-400 font-bold">Live Tracker</span>
                        <span className="text-slate-400">Today</span>
                      </div>
                      <div className="p-2 bg-emerald-950/60 rounded border border-emerald-500/30">
                        <p className="text-[11px] font-mono font-bold text-white">2,450 kcal</p>
                        <p className="text-[8px] text-emerald-300">Target reached</p>
                      </div>
                      <div className="p-2 bg-slate-900 rounded border border-slate-800">
                        <p className="text-[10px] font-semibold text-slate-300">5.2 km Run</p>
                      </div>
                    </div>
                    <div className="w-full py-1 bg-emerald-500/20 text-emerald-400 text-[9px] font-bold text-center rounded">
                      Active Telemetry
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-2xl text-center">
                  <span className="text-[10px] font-mono text-emerald-400">Screen 03 · Analytics</span>
                  <div className="mt-2 aspect-[9/15] bg-[#0A1510] rounded-xl p-3 border border-emerald-500/20 flex flex-col justify-between text-left">
                    <div className="space-y-2">
                      <p className="text-xs font-bold text-white">Weekly Performance</p>
                      <div className="flex items-end justify-between h-14 pt-2 border-b border-slate-800 px-1">
                        {[40, 65, 80, 50, 95, 70, 85].map((h, i) => (
                          <div key={i} className="w-2 bg-emerald-500/80 rounded-t" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                      <p className="text-[9px] text-slate-400">Consistency: 7-day streak</p>
                    </div>
                    <div className="w-full py-1.5 bg-slate-800 rounded text-slate-300 font-semibold text-[9px] text-center">
                      Export Report
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 14: DESIGN SYSTEM & TOKENS */}
          {currentSlide === 14 && (
            <div className="space-y-5">
              <div>
                <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase">DESIGN SYSTEM · COMPONENT SPECIFICATIONS</span>
                <h2 className="text-3xl font-extrabold text-white mt-1">Design Tokens & Component Library</h2>
                <p className="text-slate-400 text-sm">Derived directly from the Green Mobile UI Design System.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-white">Color Tokens</h4>
                  <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
                    <div className="p-3 rounded-xl bg-[#00C274] text-slate-950 font-bold">
                      <span>#00C274</span>
                      <p className="text-[9px] opacity-80">Primary Green</p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#0D1F17] text-white border border-emerald-500/30 font-bold">
                      <span>#0D1F17</span>
                      <p className="text-[9px] text-slate-400">Obsidian Bg</p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F59E0B] text-slate-950 font-bold">
                      <span>#F59E0B</span>
                      <p className="text-[9px] opacity-80">Accent Gold</p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#3B82F6] text-white font-bold">
                      <span>#3B82F6</span>
                      <p className="text-[9px] opacity-80">Tech Blue</p>
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-white pt-2">Typography Hierarchy</h4>
                  <div className="space-y-1.5 p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 text-xs">
                    <p className="font-display font-black text-white text-base">Plus Jakarta Sans (Headings & Display)</p>
                    <p className="font-sans text-slate-300">Inter (Body text & Descriptions)</p>
                    <p className="font-mono text-emerald-400 text-[11px]">Fira Code (Metrics, Code & Telemetry)</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-white">Component Standards</h4>
                  <div className="space-y-2 text-xs">
                    <div className="p-3 bg-slate-900/80 rounded-xl border border-emerald-500/20 flex justify-between items-center">
                      <span className="font-semibold text-slate-300">Border Radius</span>
                      <span className="font-mono text-emerald-400">16px (Cards) / 44px (Devices)</span>
                    </div>
                    <div className="p-3 bg-slate-900/80 rounded-xl border border-emerald-500/20 flex justify-between items-center">
                      <span className="font-semibold text-slate-300">Glassmorphism Blur</span>
                      <span className="font-mono text-emerald-400">backdrop-blur-md (16px)</span>
                    </div>
                    <div className="p-3 bg-slate-900/80 rounded-xl border border-emerald-500/20 flex justify-between items-center">
                      <span className="font-semibold text-slate-300">Radiant Drop Shadows</span>
                      <span className="font-mono text-emerald-400">0 20px 40px rgba(0, 194, 116, 0.2)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 15: ML PIPELINE */}
          {currentSlide === 15 && (
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase">MACHINE LEARNING · CLINICAL DECISION SUPPORT</span>
                  <h2 className="text-2xl font-extrabold text-white mt-0.5">Breast Cancer Clinical Classifier</h2>
                </div>
                <span className="text-xs text-blue-400 font-mono font-bold">97.2% Ensemble Accuracy</span>
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-center">
                <MLClassificationDemo />

                <div className="space-y-3">
                  <div className="p-4 bg-slate-900/80 border border-blue-500/20 rounded-2xl">
                    <h4 className="font-bold text-white text-sm">Pipeline & Dimensionality Reduction</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mt-1">
                      Applied Principal Component Analysis (PCA) to condense 30+ multidimensional cellular parameters down to essential orthogonal eigenvectors, removing collinear noise.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
                      <span className="text-[10px] text-slate-400 uppercase">Baseline Model</span>
                      <p className="text-base font-bold text-slate-300 font-mono">95.0%</p>
                    </div>
                    <div className="p-3 bg-blue-950/40 border border-blue-500/40 rounded-xl">
                      <span className="text-[10px] text-blue-300 uppercase">Ensemble Boost</span>
                      <p className="text-base font-bold text-blue-400 font-mono">97.2%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 16: ENTERPRISE MERCHANT OFFICE (Vistex) */}
          {currentSlide === 16 && (
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase">ENTERPRISE SYSTEM · SAP BACKEND</span>
                  <h2 className="text-2xl font-extrabold text-white mt-0.5">Vistex Agreement Templates & XML Backend</h2>
                </div>
                <span className="text-xs text-emerald-400 font-mono font-bold">SAP ABAP Architecture</span>
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-center">
                <VistexXmlPipelineDemo />

                <div className="space-y-3">
                  <div className="p-4 bg-slate-900/80 border border-emerald-500/20 rounded-2xl">
                    <h4 className="font-bold text-white text-sm">Dynamic Settings Data Area</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mt-1">
                      Consolidated fragmented multi-record configuration into a single high-efficiency interface, reducing manual overhead and guaranteeing complete transactional atomicity.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl">
                    <h5 className="font-semibold text-xs text-emerald-400 mb-1">Automated Copy Control</h5>
                    <p className="text-xs text-slate-400">
                      Scheduled background execution eliminating duplicate manual contract generation for Master Agreements across global merchant accounts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 17: FULL SKILLS MATRIX */}
          {currentSlide === 17 && (
            <div className="space-y-5">
              <div>
                <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase">SKILLS PANORAMIC · TECHNICAL CAPABILITY</span>
                <h2 className="text-3xl font-extrabold text-white mt-1">Full Technical Matrix & Stack</h2>
                <p className="text-slate-400 text-sm">Comprehensive proficiency ratings across languages, frameworks, and databases.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 pt-2">
                <div className="p-5 bg-slate-900/80 border border-emerald-500/20 rounded-2xl space-y-3">
                  <h4 className="font-bold text-sm text-emerald-300">Languages & Core</h4>
                  {portfolioData.skills.programming.map((p, i) => (
                    <div key={i} className="text-xs">
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span>{p.name}</span>
                        <span className="font-mono text-emerald-400">{p.level}%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${p.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-5 bg-slate-900/80 border border-teal-500/20 rounded-2xl space-y-3">
                  <h4 className="font-bold text-sm text-teal-300">Frontend & Backend</h4>
                  {portfolioData.skills.frontend.slice(0, 2).concat(portfolioData.skills.backend.slice(0, 2)).map((p, i) => (
                    <div key={i} className="text-xs">
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span>{p.name}</span>
                        <span className="font-mono text-teal-400">{p.level}%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-teal-400 h-full rounded-full" style={{ width: `${p.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-5 bg-slate-900/80 border border-green-500/20 rounded-2xl space-y-3">
                  <h4 className="font-bold text-sm text-green-300">Enterprise & Systems</h4>
                  {portfolioData.skills.enterprise.slice(0, 2).concat(portfolioData.skills.database.slice(0, 2)).map((p, i) => (
                    <div key={i} className="text-xs">
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span>{p.name}</span>
                        <span className="font-mono text-green-400">{p.level}%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-green-400 h-full rounded-full" style={{ width: `${p.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 18: CONTACT & CLOSING */}
          {currentSlide === 18 && (
            <div className="flex flex-col items-center justify-center text-center space-y-5 py-6">
              <span className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-1">
                <Sparkles className="w-6 h-6 animate-spin" />
              </span>
              
              <div>
                <h2 className="text-4xl font-extrabold text-white">Thank You for Reviewing</h2>
                <p className="text-emerald-400 font-semibold text-base mt-1">Let's build scalable, high-impact software together.</p>
                <p className="text-slate-400 text-xs mt-2 max-w-md mx-auto">
                  Open to opportunities in Software Engineering, Full-Stack Web Development, and Enterprise Systems.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <a
                  href={`mailto:${portfolioData.profile.email}`}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-emerald-500/30 text-white text-xs font-semibold rounded-xl flex items-center gap-2 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{portfolioData.profile.email}</span>
                </a>

                <a
                  href={`tel:${portfolioData.profile.phone}`}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-emerald-500/30 text-white text-xs font-semibold rounded-xl flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{portfolioData.profile.phone}</span>
                </a>

                <a
                  href={portfolioData.profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-emerald-500/30 text-white text-xs font-semibold rounded-xl flex items-center gap-2 transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-emerald-400" />
                  <span>github.com/mohanchintu</span>
                </a>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={onOpenContact}
                  className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/25 transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Direct Message</span>
                </button>

                <button
                  onClick={onOpenResume}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold rounded-xl text-xs flex items-center gap-2 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Download Printable Resume</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </main>

      {/* Clean Bottom Navigation Strip */}
      <footer className="relative z-20 px-4 py-3 bg-slate-950/90 border-t border-emerald-500/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
          {portfolioData.slides.map((s) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(s.id)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-xl border text-left transition-all ${
                currentSlide === s.id 
                  ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-md shadow-emerald-500/20' 
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
              style={{ minWidth: '130px' }}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-mono font-bold ${currentSlide === s.id ? 'text-emerald-400' : 'text-slate-500'}`}>
                  #{String(s.id).padStart(2, '0')}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-slate-500">{s.category}</span>
              </div>
              <p className="text-[11px] font-bold truncate mt-0.5">{s.title}</p>
            </button>
          ))}
        </div>
      </footer>

    </div>
  );
}
