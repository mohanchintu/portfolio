import React from 'react';
import { Wifi, Battery, Signal, Sparkles } from 'lucide-react';

export default function MobileDeviceMockup({
  children,
  className = "",
  theme = "dark",
  glow = true,
  tilted = false,
  tag = "Mobile App UI",
  statusTime = "9:41"
}) {
  const isDark = theme === "dark";

  return (
    <div 
      className={`relative mx-auto transition-transform duration-500 ${
        tilted ? 'transform -rotate-2 hover:rotate-0 hover:scale-[1.02]' : ''
      } ${className}`}
      style={{ width: '100%', maxWidth: '320px' }}
    >
      {/* Outer ambient glow */}
      {glow && (
        <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/25 via-emerald-400/10 to-teal-500/20 rounded-[54px] blur-2xl -z-10 opacity-75 group-hover:opacity-100 transition-opacity" />
      )}

      {/* Floating Tag Badge */}
      {tag && (
        <div className="absolute -top-3 -right-3 z-30 px-3 py-1 bg-emerald-500 text-white text-[11px] font-bold rounded-full shadow-lg flex items-center gap-1 border border-emerald-300/40">
          <Sparkles className="w-3 h-3" />
          <span>{tag}</span>
        </div>
      )}

      {/* Phone Hardware Shell */}
      <div className={`relative rounded-[46px] p-3 shadow-2xl transition-all duration-300 ${
        isDark 
          ? 'bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border-[3px] border-slate-700/70 shadow-black/60' 
          : 'bg-gradient-to-b from-slate-200 via-slate-100 to-slate-300 border-[3px] border-slate-300/80 shadow-emerald-950/20'
      }`}>
        
        {/* Antenna bands */}
        <div className="absolute top-24 -left-[3px] w-[3px] h-3 bg-slate-600/40 rounded-l" />
        <div className="absolute top-36 -left-[3px] w-[3px] h-8 bg-slate-600/60 rounded-l" />
        <div className="absolute top-48 -left-[3px] w-[3px] h-8 bg-slate-600/60 rounded-l" />
        <div className="absolute top-32 -right-[3px] w-[3px] h-12 bg-slate-600/60 rounded-r" />

        {/* Inner Screen Bezel */}
        <div className={`relative rounded-[38px] overflow-hidden aspect-[9/19.5] flex flex-col justify-between select-none ${
          isDark ? 'bg-[#0B1510] text-slate-100' : 'bg-slate-50 text-slate-800'
        }`}>
          
          {/* Top Status Bar & Dynamic Island */}
          <div className="relative pt-2 px-5 pb-1 flex items-center justify-between text-[11px] font-medium z-30 opacity-90">
            <span className="font-semibold tracking-tight">{statusTime}</span>
            
            {/* Dynamic Island Pill */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 h-[22px] w-[92px] bg-black rounded-full flex items-center justify-between px-2 shadow-inner">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-slate-800" />
            </div>

            <div className="flex items-center gap-1.5">
              <Signal className="w-3 h-3" />
              <Wifi className="w-3 h-3" />
              <Battery className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Screen Content Body */}
          <div className="relative flex-1 overflow-y-auto overflow-x-hidden p-3.5 scrollbar-none flex flex-col">
            {children}
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="relative py-2 flex justify-center z-30">
            <div className={`w-32 h-1 rounded-full ${isDark ? 'bg-slate-500/60' : 'bg-slate-400/80'}`} />
          </div>

          {/* Screen Glass Reflection Gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-emerald-400/[0.06] pointer-events-none z-20" />
        </div>
      </div>
    </div>
  );
}
