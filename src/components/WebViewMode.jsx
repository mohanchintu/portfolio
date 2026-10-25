import React, { useState } from 'react';
import { 
  Sparkles, Download, Mail, Phone, ExternalLink, Github, Linkedin, 
  ArrowRight, ShieldCheck, Dumbbell, Database, Activity, Code2, 
  CheckCircle2, Layers, Briefcase, GraduationCap, Award, ChevronDown,
  Terminal, Server, Cpu, Palette, Sliders, Check
} from 'lucide-react';
import MobileDeviceMockup from './MobileDeviceMockup';
import { 
  PhishingScannerDemo, 
  MLClassificationDemo, 
  FitnessPlannerDemo, 
  VistexXmlPipelineDemo 
} from './InteractiveLiveDemo';
import { portfolioData } from '../data/portfolioData';

export default function WebViewMode({ onOpenResume, onOpenContact, onSwitchToSlides }) {
  const [activeProjectTab, setActiveProjectTab] = useState('fitness');
  const [skillCategory, setSkillCategory] = useState('all');

  return (
    <div className="min-h-screen bg-[#F6FAF7] dark:bg-[#07130E] text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-emerald-500/10">
        
        {/* Glow ambient background elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-500/15 dark:bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headlines & Summary */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>GREEN MOBILE UI PORTFOLIO · 绿色移动端UI设计规范</span>
              </div>

              <div>
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white font-display leading-[1.1]">
                  MOHAN P
                </h1>
                <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-600 via-teal-500 to-green-600 dark:from-emerald-400 dark:via-teal-300 dark:to-green-400 bg-clip-text text-transparent mt-2">
                  Associate Software Developer & Full-Stack Engineer
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {portfolioData.profile.summary}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={onSwitchToSlides}
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-2xl text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/25 transition-all hover:scale-105"
                >
                  <Layers className="w-4 h-4" />
                  <span>Explore 18-Slide Deck Mode</span>
                </button>
                <button
                  onClick={onOpenResume}
                  className="px-5 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-emerald-500/30 text-slate-800 dark:text-white font-semibold rounded-2xl text-sm flex items-center gap-2 shadow-sm hover:shadow transition-all"
                >
                  <Download className="w-4 h-4 text-emerald-500" />
                  <span>Resume PDF</span>
                </button>
                <button
                  onClick={onOpenContact}
                  className="px-5 py-3 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-semibold rounded-2xl text-sm flex items-center gap-2 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact</span>
                </button>
              </div>

              {/* Metric Counters Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                {portfolioData.metrics.map((m, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 bg-white/80 dark:bg-slate-900/80 backdrop-blur border border-slate-200 dark:border-emerald-500/20 rounded-2xl shadow-sm text-left"
                  >
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 rounded-md">
                      {m.badge}
                    </span>
                    <p className="text-2xl font-black text-slate-900 dark:text-white font-mono mt-1.5">{m.value}</p>
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">{m.label}</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">{m.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Hero Mobile Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <MobileDeviceMockup tilted={true} tag="Mobile MERN App" theme="dark">
                <div className="space-y-3 pt-1">
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/25 rounded-2xl flex items-center gap-3">
                    <img 
                      src={portfolioData.profile.photo} 
                      alt="Mohan P" 
                      className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500 shadow-md"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <div>
                      <h4 className="font-bold text-sm text-white">{portfolioData.profile.name}</h4>
                      <p className="text-[10px] text-emerald-400 font-mono">SAP ABAP · MERN Stack</p>
                      <span className="inline-block mt-0.5 px-2 py-0.2 bg-emerald-500 text-slate-950 text-[9px] font-bold rounded">
                        Active @ Vistex
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800 space-y-2">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-slate-400">Weekly Health Goal</span>
                      <span className="text-emerald-400 font-bold">4/5 Days</span>
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
                    <p className="font-semibold text-white mb-1.5">Core Engineering Tools</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-0.5 bg-slate-800 rounded font-mono">React.js</span>
                      <span className="px-2 py-0.5 bg-slate-800 rounded font-mono">Node.js</span>
                      <span className="px-2 py-0.5 bg-slate-800 rounded font-mono">SAP ABAP</span>
                      <span className="px-2 py-0.5 bg-slate-800 rounded font-mono">Python/SVM</span>
                    </div>
                  </div>
                </div>
              </MobileDeviceMockup>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: VISTEX WORK EXPERIENCE & ENTERPRISE HIGHLIGHTS */}
      <section className="py-16 md:py-24 border-b border-emerald-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 tracking-wider uppercase font-bold">
              WORK EXPERIENCE · 企业工程经验
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              Associate Software Developer @ Vistex
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              March 2025 – Present | Started as Intern, converted to Full-Time based on high-impact contributions in SAP ABAP and XML data services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.experience.highlights.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 bg-white dark:bg-slate-900/80 rounded-3xl border border-slate-200 dark:border-emerald-500/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-xs flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Measurable Result:
                  </span>
                  <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                    {item.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: 4-TIER SYSTEM ARCHITECTURE */}
      <section className="py-16 md:py-24 bg-emerald-50/40 dark:bg-[#0A1A13]/40 border-b border-emerald-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 tracking-wider uppercase font-bold">
              ARCHITECTURE · 系统架构分层
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              End-to-End Enterprise Full-Stack Architecture
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              Clean separation of concerns with bi-directional synchronization, low latency, and zero data loss.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                step: "01",
                tier: "Presentation Tier",
                tech: "React.js · Tailwind CSS",
                desc: "Responsive mobile UI, fluid state transitions, dynamic biometrics & real-time change tracking.",
                badge: "Client Layer"
              },
              {
                step: "02",
                tier: "API Gateway Tier",
                tech: "Node.js · Express.js",
                desc: "RESTful endpoints, regex security pattern validators, token authentication, and data routing.",
                badge: "API Layer"
              },
              {
                step: "03",
                tier: "Enterprise Services",
                tech: "SAP ABAP · XML Engine",
                desc: "Custom function modules, agreement template data areas, and internal table serialization.",
                badge: "Core Service"
              },
              {
                step: "04",
                tier: "Storage & Persistence",
                tech: "MongoDB · MySQL · SAP DB",
                desc: "High-performance indexing, ACID transaction atomicity, and automated copy control batching.",
                badge: "Data Layer"
              }
            ].map((t, idx) => (
              <div 
                key={idx}
                className="p-5 bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-emerald-500/20 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-black text-emerald-500/30 font-mono">{t.step}</span>
                    <span className="px-2 py-0.5 bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-bold rounded">
                      {t.badge}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{t.tier}</h4>
                  <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mt-0.5 font-semibold">{t.tech}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">{t.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span>Architecture Tier #{idx + 1}</span>
                  <span className="text-emerald-500 font-bold">100% Synced</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: INTERACTIVE LIVE PROJECT SHOWCASE & DEMOS */}
      <section className="py-16 md:py-24 border-b border-emerald-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 tracking-wider uppercase font-bold">
                PROJECT PORTFOLIO · 核心项目实战
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
                Interactive Engineering Projects
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                Explore real, working simulators and screen flows designed for Mohan's key systems.
              </p>
            </div>

            {/* Project Selector Tabs */}
            <div className="flex flex-wrap gap-2 bg-slate-200/80 dark:bg-slate-900 p-1 rounded-2xl border border-slate-300 dark:border-slate-800">
              {[
                { id: 'fitness', label: '01 Fitness App (MERN)' },
                { id: 'phishing', label: '02 URL Phishing Detector' },
                { id: 'cancer', label: '03 Breast Cancer ML (97.2%)' },
                { id: 'vistex', label: '04 Vistex SAP ABAP XML' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveProjectTab(tab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeProjectTab === tab.id
                      ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* TAB 1: FITNESS TRACKING APP */}
          {activeProjectTab === 'fitness' && (
            <div className="grid lg:grid-cols-12 gap-8 items-center bg-white dark:bg-slate-900/60 p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-emerald-500/20 shadow-xl">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold rounded-full">
                    MERN STACK · MOBILE FIRST
                  </span>
                  <span className="text-xs text-slate-500">Node.js · Express.js · React.js · MongoDB</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Fitness Tracking Application
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {portfolioData.projects[0].description}
                </p>

                <div className="space-y-2 pt-1">
                  {portfolioData.projects[0].features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <FitnessPlannerDemo />
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <MobileDeviceMockup tag="Fitness Tracker UI" theme="dark">
                  <div className="space-y-3 pt-1">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-[10px] text-slate-400">Target Calories</span>
                        <h4 className="text-sm font-extrabold text-white">820 / 900 kcal</h4>
                      </div>
                      <span className="px-2 py-0.5 bg-emerald-500 text-slate-950 text-[10px] font-bold rounded">
                        91%
                      </span>
                    </div>

                    <div className="bg-emerald-950/50 p-3 rounded-2xl border border-emerald-500/30 text-center">
                      <Dumbbell className="w-6 h-6 text-emerald-400 mx-auto mb-1 animate-bounce" />
                      <h5 className="font-bold text-white text-xs">Recommended Routine</h5>
                      <p className="text-[10px] text-slate-300">Upper Body Hypertrophy</p>
                      <div className="mt-2 text-[10px] text-emerald-300 font-mono">
                        4 sets · 12 reps · 75kg
                      </div>
                    </div>

                    <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 text-[11px] space-y-1">
                      <div className="flex justify-between text-slate-300">
                        <span>Hydration Status</span>
                        <span className="text-emerald-400 font-mono">2.4L / 3.0L</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Heart Rate Zone</span>
                        <span className="text-emerald-400 font-mono">132 BPM (Fat Burn)</span>
                      </div>
                    </div>
                  </div>
                </MobileDeviceMockup>
              </div>
            </div>
          )}

          {/* TAB 2: URL PHISHING DETECTION */}
          {activeProjectTab === 'phishing' && (
            <div className="grid lg:grid-cols-12 gap-8 items-center bg-white dark:bg-slate-900/60 p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-amber-500/20 shadow-xl">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-amber-500/15 text-amber-600 dark:text-amber-400 text-xs font-mono font-bold rounded-full">
                    CYBERSECURITY · REACT.JS
                  </span>
                  <span className="text-xs text-slate-500">Regex Algorithms · Heuristic Analysis</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  URL Phishing Detection Platform
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {portfolioData.projects[1].description}
                </p>

                <div className="space-y-2 pt-1">
                  {portfolioData.projects[1].features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <PhishingScannerDemo />
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <MobileDeviceMockup tag="Security Scanner" theme="dark">
                  <div className="space-y-3 pt-1">
                    <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-center">
                      <ShieldCheck className="w-7 h-7 text-amber-400 mx-auto mb-1" />
                      <h5 className="font-bold text-white text-xs">Real-Time Threat Classifier</h5>
                      <p className="text-[10px] text-slate-400">Lexical Pattern & Entropy Check</p>
                    </div>

                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-[10px] space-y-1.5 text-slate-300">
                      <div className="flex justify-between">
                        <span>Homoglyph Spoofing:</span>
                        <span className="text-emerald-400 font-mono">None Detected</span>
                      </div>
                      <div className="flex justify-between">
                        <span>SSL Certificate:</span>
                        <span className="text-emerald-400 font-mono">Valid TLS 1.3</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domain Age:</span>
                        <span className="text-emerald-400 font-mono">Established</span>
                      </div>
                    </div>
                  </div>
                </MobileDeviceMockup>
              </div>
            </div>
          )}

          {/* TAB 3: BREAST CANCER ML */}
          {activeProjectTab === 'cancer' && (
            <div className="grid lg:grid-cols-12 gap-8 items-center bg-white dark:bg-slate-900/60 p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-blue-500/20 shadow-xl">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-blue-500/15 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold rounded-full">
                    MACHINE LEARNING · HEALTHCARE
                  </span>
                  <span className="text-xs text-slate-500">Python · Scikit-Learn · PCA · SVM Ensemble</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Breast Cancer Classification System
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {portfolioData.projects[2].description}
                </p>

                <div className="space-y-2 pt-1">
                  {portfolioData.projects[2].features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <MLClassificationDemo />
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <MobileDeviceMockup tag="ML Decision AI" theme="dark">
                  <div className="space-y-3 pt-1">
                    <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-2xl text-center">
                      <Activity className="w-7 h-7 text-blue-400 mx-auto mb-1" />
                      <h5 className="font-bold text-white text-xs">Clinical Inference Engine</h5>
                      <p className="text-[10px] text-blue-300 font-mono font-bold">97.2% Accuracy</p>
                    </div>

                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-[10px] space-y-1.5 text-slate-300">
                      <div className="flex justify-between">
                        <span>Model Type:</span>
                        <span className="text-blue-400 font-mono">SVM + Voting</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ROC-AUC Score:</span>
                        <span className="text-emerald-400 font-mono">0.985</span>
                      </div>
                      <div className="flex justify-between">
                        <span>False Negative Rate:</span>
                        <span className="text-emerald-400 font-mono">&lt; 1.2%</span>
                      </div>
                    </div>
                  </div>
                </MobileDeviceMockup>
              </div>
            </div>
          )}

          {/* TAB 4: VISTEX SAP ABAP XML */}
          {activeProjectTab === 'vistex' && (
            <div className="grid lg:grid-cols-12 gap-8 items-center bg-white dark:bg-slate-900/60 p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-emerald-500/20 shadow-xl">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold rounded-full">
                    ENTERPRISE BACKEND · SAP ABAP
                  </span>
                  <span className="text-xs text-slate-500">XML Serialization · Function Modules · Copy Control</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Agreement Templates & Compressed XML Pipeline
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {portfolioData.projects[3].description}
                </p>

                <div className="space-y-2 pt-1">
                  {portfolioData.projects[3].features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <VistexXmlPipelineDemo />
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <MobileDeviceMockup tag="Enterprise SAP" theme="dark">
                  <div className="space-y-3 pt-1">
                    <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center">
                      <Database className="w-7 h-7 text-emerald-400 mx-auto mb-1" />
                      <h5 className="font-bold text-white text-xs">Agreement Workspace</h5>
                      <p className="text-[10px] text-slate-400">Dynamic Multi-Record Area</p>
                    </div>

                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-[10px] space-y-1.5 text-slate-300">
                      <div className="flex justify-between">
                        <span>Payload Compression:</span>
                        <span className="text-emerald-400 font-mono font-bold">-75.6%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CRUD Sync:</span>
                        <span className="text-emerald-400 font-mono font-bold">100% Real-Time</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Background Job:</span>
                        <span className="text-emerald-400 font-mono">Automated Copy</span>
                      </div>
                    </div>
                  </div>
                </MobileDeviceMockup>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* SECTION: SKILLS & TECHNICAL PROFICIENCY */}
      <section className="py-16 md:py-24 border-b border-emerald-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 tracking-wider uppercase font-bold">
              TECH STACK · 技术栈与能力全景
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              Comprehensive Technical Competencies
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              Proficiency across programming languages, modern web frameworks, enterprise SAP systems, and data science.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Programming Languages */}
            <div className="p-6 bg-white dark:bg-slate-900/80 rounded-3xl border border-slate-200 dark:border-emerald-500/20 shadow-sm space-y-4">
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-emerald-500" />
                <span>Programming Languages</span>
              </h3>
              <div className="space-y-3">
                {portfolioData.skills.programming.map((s, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs text-slate-700 dark:text-slate-300 mb-1">
                      <span className="font-semibold">{s.name}</span>
                      <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">{s.level}%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${s.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend & Mobile */}
            <div className="p-6 bg-white dark:bg-slate-900/80 rounded-3xl border border-slate-200 dark:border-emerald-500/20 shadow-sm space-y-4">
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Palette className="w-5 h-5 text-teal-500" />
                <span>Frontend & Mobile</span>
              </h3>
              <div className="space-y-3">
                {portfolioData.skills.frontend.map((s, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs text-slate-700 dark:text-slate-300 mb-1">
                      <span className="font-semibold">{s.name}</span>
                      <span className="font-mono text-teal-600 dark:text-teal-400 font-bold">{s.level}%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-teal-500 h-full rounded-full" style={{ width: `${s.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend & REST APIs */}
            <div className="p-6 bg-white dark:bg-slate-900/80 rounded-3xl border border-slate-200 dark:border-emerald-500/20 shadow-sm space-y-4">
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Server className="w-5 h-5 text-green-500" />
                <span>Backend & APIs</span>
              </h3>
              <div className="space-y-3">
                {portfolioData.skills.backend.map((s, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs text-slate-700 dark:text-slate-300 mb-1">
                      <span className="font-semibold">{s.name}</span>
                      <span className="font-mono text-green-600 dark:text-green-400 font-bold">{s.level}%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full rounded-full" style={{ width: `${s.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise & SAP ABAP */}
            <div className="p-6 bg-white dark:bg-slate-900/80 rounded-3xl border border-slate-200 dark:border-emerald-500/20 shadow-sm space-y-4">
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Database className="w-5 h-5 text-emerald-500" />
                <span>Enterprise & SAP ABAP</span>
              </h3>
              <div className="space-y-3">
                {portfolioData.skills.enterprise.map((s, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs text-slate-700 dark:text-slate-300 mb-1">
                      <span className="font-semibold">{s.name}</span>
                      <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">{s.level}%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${s.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="p-6 bg-white dark:bg-slate-900/80 rounded-3xl border border-slate-200 dark:border-emerald-500/20 shadow-sm space-y-4">
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-teal-500" />
                <span>Databases & Models</span>
              </h3>
              <div className="space-y-3">
                {portfolioData.skills.database.map((s, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs text-slate-700 dark:text-slate-300 mb-1">
                      <span className="font-semibold">{s.name}</span>
                      <span className="font-mono text-teal-600 dark:text-teal-400 font-bold">{s.level}%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-teal-500 h-full rounded-full" style={{ width: `${s.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Concepts & ML */}
            <div className="p-6 bg-white dark:bg-slate-900/80 rounded-3xl border border-slate-200 dark:border-emerald-500/20 shadow-sm space-y-4">
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-amber-500" />
                <span>Algorithms & Concepts</span>
              </h3>
              <div className="space-y-3">
                {portfolioData.skills.concepts.map((s, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs text-slate-700 dark:text-slate-300 mb-1">
                      <span className="font-semibold">{s.name}</span>
                      <span className="font-mono text-amber-600 dark:text-amber-400 font-bold">{s.level}%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full rounded-full" style={{ width: `${s.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: ACHIEVEMENTS & CERTIFICATIONS */}
      <section className="py-16 md:py-24 bg-emerald-50/40 dark:bg-[#0A1A13]/40 border-b border-emerald-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 tracking-wider uppercase font-bold">
              HONORS & AWARDS · 成果荣誉与认证
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              Recognitions & Certifications
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              Validating algorithmic problem solving, competitive hackathons, and technical writing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.achievements.map((ach, idx) => (
              <div 
                key={idx}
                className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-emerald-500/20 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-10 h-10 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <Award className="w-5 h-5" />
                    </span>
                    <span className="px-2.5 py-0.5 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-bold rounded-full">
                      {ach.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    {ach.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                    {ach.organization}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                    {ach.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-right">
                  <span className="text-[11px] font-mono font-bold text-slate-400">Award Year: {ach.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: FOOTER & CONNECT */}
      <footer className="py-16 bg-white dark:bg-[#060F0B] text-slate-800 dark:text-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center pb-12 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <h3 className="text-2xl font-black text-slate-900 dark:text-white font-display">
                  MOHAN P
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md">
                Associate Software Developer with experience in SAP ABAP and full-stack web development using the MERN stack. Ready to create impact in modern software engineering.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-start md:justify-end gap-3">
              <button
                onClick={onOpenContact}
                className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 shadow-md shadow-emerald-500/20 transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Direct Message</span>
              </button>
              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white font-semibold rounded-xl text-xs flex items-center gap-2 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-emerald-500" />
                <span>Print Resume</span>
              </button>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
            <p>© {new Date().getFullYear()} Mohan P. Designed using Figma Green Mobile UI Template.</p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/mohanchintu" target="_blank" rel="noreferrer" className="hover:text-emerald-500 flex items-center gap-1">
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <a href="https://linkedin.com/in/mohan-pole" target="_blank" rel="noreferrer" className="hover:text-emerald-500 flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <a href="mailto:mohan83676@gmail.com" className="hover:text-emerald-500 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> mohan83676@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
