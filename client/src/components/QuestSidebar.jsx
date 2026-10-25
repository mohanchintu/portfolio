import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { useAudio } from '../context/AudioContext';
import { CheckSquare, Square, Settings, Award, Shield, Zap, Sparkles } from 'lucide-react';

const QuestSidebar = () => {
  const { awardCoins, openModal, notify } = useGame();
  const { sfxEnabled, musicEnabled, toggleSfx, toggleMusic, playHover, playClick } = useAudio();

  const [questCompleted, setQuestCompleted] = useState(false);

  const handleClaimReward = () => {
    if (questCompleted) return;
    playClick();
    setQuestCompleted(true);
    awardCoins(30, 'REACT_QUEST_COMPLETED');
    notify('QUEST COMPLETED', 'THE REACT SKILL-UP LINE CONQUERED! +30 COINS CLAIMED', 'reward');
  };

  return (
    <aside className="w-full lg:w-64 flex-shrink-0 flex flex-col justify-between p-4 md:p-5 border-l border-[#26161b] bg-[#07080b]/70 backdrop-blur-sm select-none font-mono">
      
      {/* Top: Active Quest Panel */}
      <div className="space-y-4 text-left">
        
        {/* Active Quest Header */}
        <div className="flex items-center justify-between border-b border-[#ff2a3b]/40 pb-1.5">
          <span className="text-xs font-bold text-[#ff2a3b] uppercase tracking-wider font-orbitron">
            ACTIVE QUEST
          </span>
          {/* Hex insignia icon */}
          <div className="w-3.5 h-3.5 border border-[#ff2a3b] rotate-45 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-[#ff2a3b]" />
          </div>
        </div>

        {/* Quest Line Tag */}
        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
          THE REACT SKILL-UP LINE
        </div>

        {/* Quest Name */}
        <div>
          <div className="text-[10px] text-gray-500 uppercase tracking-widest">QUEST NAME</div>
          <div className="text-xs font-bold text-gray-100 uppercase tracking-wider">
            REACT WEBSITE
          </div>
        </div>

        {/* Goal */}
        <div>
          <div className="text-[10px] text-gray-500 uppercase tracking-widest">GOAL</div>
          <p className="text-[10px] text-gray-400 uppercase tracking-wider leading-relaxed mt-0.5">
            BUILD THIS WEBSITE. IMPLEMENT A FULL REACT WEBSITE WITH MULTIPLE ROUTERS, UI ELEMENTS AND TRICKY STYLING. MAKE IT ALL WORK GREAT!
          </p>
        </div>

        {/* Rewards Section */}
        <div>
          <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">REWARDS</div>
          <div className="flex items-center gap-3">
            
            {/* Reward 1 */}
            <div className="flex flex-col items-center justify-center p-2 bg-[#140b0f] border border-[#ff2a3b]/40 rounded-sm min-w-[55px]">
              <Sparkles className="w-4 h-4 text-[#ff2a3b] mb-1" />
              <span className="text-[10px] font-bold text-gray-300">+5</span>
            </div>

            {/* Reward 2 */}
            <div className="flex flex-col items-center justify-center p-2 bg-[#140b0f] border border-[#ff2a3b]/40 rounded-sm min-w-[55px]">
              <Award className="w-4 h-4 text-[#ffd700] mb-1" />
              <span className="text-[10px] font-bold text-gray-300">+25</span>
            </div>

          </div>
        </div>

        {/* Quest Claim / Status Button */}
        <div className="pt-2">
          <button
            onClick={handleClaimReward}
            disabled={questCompleted}
            onMouseEnter={playHover}
            className={`w-full py-1.5 px-3 text-[10px] font-bold uppercase tracking-widest border transition-all duration-200 ${
              questCompleted
                ? 'border-gray-700 bg-gray-900/60 text-gray-500 cursor-not-allowed'
                : 'border-[#ff2a3b] text-[#ff2a3b] hover:bg-[#ff2a3b] hover:text-black shadow-[0_0_10px_rgba(255,42,59,0.2)]'
            }`}
          >
            {questCompleted ? 'QUEST RESOLVED [COMPLETED]' : 'CLAIM QUEST REWARD'}
          </button>
        </div>

      </div>

      {/* Bottom: Sound Effects, Music, Visual Settings */}
      <div className="pt-6 border-t border-[#26161b] mt-6 space-y-3 text-left">
        
        {/* Sound Effects Toggle */}
        <div 
          onClick={toggleSfx}
          onMouseEnter={playHover}
          className="flex items-center justify-between cursor-pointer group text-xs text-gray-300 hover:text-white"
        >
          <span className="text-[10px] uppercase tracking-widest group-hover:text-[#ff2a3b]">
            SOUND EFFECTS
          </span>
          <div className="text-[#ff2a3b]">
            {sfxEnabled ? (
              <CheckSquare className="w-4 h-4" />
            ) : (
              <Square className="w-4 h-4 text-gray-600" />
            )}
          </div>
        </div>

        {/* Music Toggle */}
        <div 
          onClick={toggleMusic}
          onMouseEnter={playHover}
          className="flex items-center justify-between cursor-pointer group text-xs text-gray-300 hover:text-white"
        >
          <span className="text-[10px] uppercase tracking-widest group-hover:text-[#ff2a3b]">
            MUSIC
          </span>
          <div className="text-[#ff2a3b]">
            {musicEnabled ? (
              <CheckSquare className="w-4 h-4" />
            ) : (
              <Square className="w-4 h-4 text-gray-600" />
            )}
          </div>
        </div>

        {/* Visual Settings Button */}
        <button
          onClick={() => openModal('settings')}
          onMouseEnter={playHover}
          className="w-full flex items-center justify-between text-xs text-[#ff2a3b] hover:text-[#ff5262] transition-colors pt-1 group"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest">
            VISUAL SETTINGS
          </span>
          <Settings className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
        </button>

      </div>

    </aside>
  );
};

export default QuestSidebar;
