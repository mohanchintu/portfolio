import React from 'react';
import { useGame } from '../context/GameContext';
import { useAudio } from '../context/AudioContext';
import { Sparkles, Coins, Info } from 'lucide-react';

const TopBar = () => {
  const { level, coins, localTime, serverTime, openModal, awardCoins } = useGame();
  const { playHover, playClick } = useAudio();

  const handlePlusLevel = () => {
    awardCoins(25, 'SYS_MANUAL_BOOST');
  };

  return (
    <header className="w-full flex flex-wrap items-center justify-between px-4 py-2.5 border-b border-[#26161b] bg-[#07080b]/90 backdrop-blur-md z-30 select-none text-xs font-mono">
      {/* Left: Level & Coins */}
      <div className="flex items-center gap-4 sm:gap-6">
        
        {/* Level Display */}
        <div className="flex items-center gap-1.5">
          <span className="text-[#00ff66] font-extrabold text-sm sm:text-base tracking-wider glow-green">
            {level}
          </span>
          <span className="text-gray-400 font-bold uppercase tracking-wider text-[11px]">
            LEVEL
          </span>

          <button
            onClick={handlePlusLevel}
            onMouseEnter={playHover}
            title="Inject manual coin booster (+25 coins)"
            className="ml-1 w-4 h-4 rounded-sm border border-[#00ff66]/60 text-[#00ff66] flex items-center justify-center hover:bg-[#00ff66] hover:text-black transition-colors text-[10px] font-bold"
          >
            +
          </button>
        </div>

        {/* Coins Awarded */}
        <div className="flex items-center gap-1.5 text-[#00ff66] glow-green">
          <span className="text-[11px] font-bold">+</span>
          <span className="font-extrabold tracking-wider text-xs sm:text-sm">
            {coins.toLocaleString()}
          </span>
          <span className="text-gray-400 uppercase font-bold text-[10px] tracking-wider">
            COINS AWARDED
          </span>
        </div>

      </div>

      {/* Right: Credits, Server Time, Local Time */}
      <div className="flex items-center gap-4 sm:gap-6 text-gray-400 text-[11px] tracking-wider mt-1 sm:mt-0">
        
        {/* Credits Button */}
        <button
          onClick={() => openModal('credits')}
          onMouseEnter={playHover}
          className="uppercase text-gray-300 hover:text-[#ff2a3b] transition-colors border-b border-dotted border-gray-600 hover:border-[#ff2a3b]"
        >
          CREDITS
        </button>

        {/* Server Time */}
        <div className="hidden md:flex items-center gap-1.5">
          <span className="text-gray-500 uppercase">SERVER TIME:</span>
          <span className="text-gray-200 font-semibold">{serverTime || '08:42:00'}</span>
        </div>

        {/* Local Time */}
        <div className="flex items-center gap-1.5">
          <span className="text-gray-500 uppercase">LOCAL TIME:</span>
          <span className="text-[#ff2a3b] font-semibold">{localTime || '15:24:10'}</span>
        </div>

      </div>
    </header>
  );
};

export default TopBar;
