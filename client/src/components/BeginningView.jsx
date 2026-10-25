import React from 'react';
import CyberWhale from './CyberWhale';
import { useGame } from '../context/GameContext';
import { useAudio } from '../context/AudioContext';
import { Terminal, Database, Shield, Cpu, ChevronRight } from 'lucide-react';

const BeginningView = () => {
  const { switchTab } = useGame();
  const { playHover, playClick } = useAudio();

  const handleNav = (tab) => {
    playClick();
    switchTab(tab);
  };

  return (
    <div className="w-full flex flex-col flex-1 relative overflow-hidden">
      {/* Center Interactive Cyber Creature Canvas */}
      <div className="flex-1 w-full min-h-[440px] md:min-h-[500px] relative border-b border-[#26161b]">
        <CyberWhale />
      </div>

      {/* Quick Telemetry Bar at bottom of viewport */}
      <div className="w-full bg-[#07080b]/95 border-t border-[#26161b] px-4 py-3 select-none">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          
          {/* Telemetry Stats */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <div className="flex items-center gap-1.5 text-gray-400">
              <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-ping" />
              <span className="text-gray-500 text-[10px] uppercase">STATUS:</span>
              <span className="text-[#00ff66] font-bold text-[11px]">CORE ONLINE</span>
            </div>

            <div className="flex items-center gap-1.5 text-gray-400">
              <span className="text-gray-500 text-[10px] uppercase">SPECIALTY:</span>
              <span className="text-gray-200 font-semibold text-[11px]">MERN & SAP ABAP</span>
            </div>

            <div className="flex items-center gap-1.5 text-gray-400">
              <span className="text-gray-500 text-[10px] uppercase">ACADEMIC:</span>
              <span className="text-gray-200 font-semibold text-[11px]">VNR VJIET // 8.7 CGPA</span>
            </div>
          </div>

          {/* Quick Direct Dispatches */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNav('LOGS')}
              onMouseEnter={playHover}
              className="px-2.5 py-1 text-[10px] uppercase tracking-wider text-[#ff2a3b] border border-[#ff2a3b]/60 hover:bg-[#ff2a3b] hover:text-black transition-all flex items-center gap-1"
            >
              <span>INSPECT LOGS</span>
              <ChevronRight className="w-3 h-3" />
            </button>

            <button
              onClick={() => handleNav('ACHIEVEMENTS')}
              onMouseEnter={playHover}
              className="px-2.5 py-1 text-[10px] uppercase tracking-wider text-gray-300 border border-gray-700 hover:border-[#ff2a3b] hover:text-[#ff2a3b] transition-all flex items-center gap-1"
            >
              <span>ACHIEVEMENTS</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BeginningView;
