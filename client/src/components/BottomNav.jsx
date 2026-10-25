import React from 'react';
import { useGame } from '../context/GameContext';
import { useAudio } from '../context/AudioContext';

const BottomNav = () => {
  const { activeTab, switchTab } = useGame();
  const { playHover } = useAudio();

  const tabs = [
    { id: 'BEGINNING', label: 'BEGINNING', sub: 'SYS.ROOT // HUD' },
    { id: 'LOGS', label: 'LOGS', sub: 'CASE STUDIES // R&D' },
    { id: 'ACHIEVEMENTS', label: 'ACHIEVEMENTS', sub: 'MILESTONES // XP' },
    { id: 'CREATIONS', label: 'CREATIONS', sub: 'PROJECT MATRIX' },
    { id: 'GAMES', label: 'GAMES', sub: 'MINI ARCADE // HACK' },
  ];

  return (
    <nav className="w-full border-t border-[#26161b] bg-[#07080b]/90 backdrop-blur-md px-3 py-2 z-30 select-none">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-1.5 sm:gap-3 flex-wrap">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => switchTab(tab.id)}
              onMouseEnter={playHover}
              className={`relative px-3 sm:px-6 py-2 transition-all duration-200 font-mono text-left group ${
                isActive
                  ? 'bg-[#ff2a3b] text-black shadow-[0_0_15px_rgba(255,42,59,0.5)]'
                  : 'bg-[#0f1017] hover:bg-[#1a0e13] text-gray-400 hover:text-gray-100 border border-[#2a171d]'
              }`}
              style={{
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)'
              }}
            >
              {/* Corner tech notch */}
              <div className="flex flex-col">
                <span
                  className={`text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase font-orbitron ${
                    isActive ? 'text-black' : 'text-gray-200 group-hover:text-[#ff2a3b]'
                  }`}
                >
                  {tab.label}
                </span>
                <span
                  className={`text-[8px] tracking-wider uppercase mt-0.5 ${
                    isActive ? 'text-black/80 font-bold' : 'text-gray-600'
                  }`}
                >
                  {tab.sub}
                </span>
              </div>

              {/* Active Tab Accent Line */}
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-white" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
