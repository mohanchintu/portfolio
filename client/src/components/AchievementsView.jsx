import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { useAudio } from '../context/AudioContext';
import { Trophy, Award, Shield, CheckSquare, Square, Zap, Flame, Sparkles } from 'lucide-react';
import { achievementsData as defaultAchievements } from '../data/achievementsData';

const AchievementsView = () => {
  const { openModal } = useGame();
  const { playHover, playClick } = useAudio();

  const [achievementsState, setAchievementsState] = useState(defaultAchievements);
  const [filters, setFilters] = useState({
    achieved: true,
    'in-progress': true,
    todo: false
  });

  useEffect(() => {
    fetch('/api/achievements')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setAchievementsState(data.data);
        }
      })
      .catch(() => {
        // Fallback to embedded data seamlessly
      });
  }, []);

  const toggleFilter = (key) => {
    playClick();
    setFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const allList = achievementsState.achievements || [];

  // Filtered lists
  const filteredList = allList.filter(item => filters[item.category]);
  const achievedItems = filteredList.filter(item => item.category === 'achieved');
  const toBeAchievedItems = filteredList.filter(item => item.category !== 'achieved');

  const total = achievementsState.total || 22;
  const completed = achievementsState.completedCount || 13;
  const progressPercent = Math.round((completed / total) * 100);

  // SVG circular gauge geometry
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * progressPercent) / 100;

  const getTierBadgeStyle = (tier) => {
    switch (tier) {
      case 'LEGENDARY':
        return 'border-[#ffd700] text-[#ffd700] bg-[#ffd700]/10 shadow-[0_0_10px_rgba(255,215,0,0.3)]';
      case 'EPIC':
        return 'border-[#ff2a3b] text-[#ff2a3b] bg-[#ff2a3b]/10 shadow-[0_0_10px_rgba(255,42,59,0.3)]';
      case 'RARE':
        return 'border-[#00f0ff] text-[#00f0ff] bg-[#00f0ff]/10 shadow-[0_0_10px_rgba(0,240,255,0.3)]';
      case 'UNCOMMON':
      default:
        return 'border-[#00ff66] text-[#00ff66] bg-[#00ff66]/10 shadow-[0_0_10px_rgba(0,255,102,0.3)]';
    }
  };

  return (
    <div className="w-full flex-1 p-4 md:p-8 flex flex-col items-center justify-start select-none font-mono">
      <div className="w-full max-w-5xl space-y-6">
        
        {/* Top Title as in Figma Image 5 */}
        <div className="text-center">
          <h2 className="text-xs md:text-sm text-gray-200 font-bold uppercase tracking-[0.25em] font-orbitron">
            ACHIEVEMENTS
          </h2>
        </div>

        {/* Top Control Section: Circular Progress + Narrative + Challenge Me + Filter Checkboxes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start border border-[#26151c] bg-[#0a0b10] p-6 bracket-box">
          
          {/* Progress Circular Meter (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-2 border-b lg:border-b-0 lg:border-r border-[#26151c] pb-4 lg:pb-0 lg:pr-6">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="w-24 h-24 -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r={radius}
                  className="stroke-[#221319]"
                  strokeWidth="6"
                  fill="none"
                />
                <circle
                  cx="48"
                  cy="48"
                  r={radius}
                  className="stroke-[#ff2a3b] transition-all duration-1000 ease-out"
                  strokeWidth="6"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-sm font-bold text-white font-orbitron">
                  {completed}/{total}
                </span>
                <span className="text-[8px] text-gray-400 uppercase tracking-widest font-bold">
                  PROGRESS
                </span>
              </div>
            </div>
            <span className="text-[10px] text-gray-500 uppercase tracking-wider">
              {progressPercent}% PROTOCOLS UNLOCKED
            </span>
          </div>

          {/* Narrative & Challenge Me Button (5 cols) */}
          <div className="lg:col-span-5 space-y-3 text-left">
            <p className="text-[10px] sm:text-[11px] text-gray-400 uppercase leading-relaxed tracking-wider">
              I HAVE CREATED A SET OF ACHIEVEMENTS FOR MYSELF AND I USE THIS PAGE TO TRACK THEM.
            </p>
            <p className="text-[10px] sm:text-[11px] text-gray-400 uppercase leading-relaxed tracking-wider">
              IF YOU WANT TO GIVE ME A CHALLENGE, PLEASE FEEL FREE TO SUBMIT IT WITH THE BUTTON BELOW!
            </p>

            <button
              onClick={() => openModal('challenge')}
              onMouseEnter={playHover}
              className="inline-flex items-center justify-center px-5 py-2 border border-[#ff2a3b] bg-transparent hover:bg-[#ff2a3b] text-[#ff2a3b] hover:text-black text-xs font-bold uppercase tracking-widest transition-all duration-200 shadow-[0_0_12px_rgba(255,42,59,0.25)] hover:shadow-[0_0_20px_rgba(255,42,59,0.8)] mt-2"
            >
              CHALLENGE ME
            </button>
          </div>

          {/* Filter Checkboxes as in Image 5 (3 cols) */}
          <div className="lg:col-span-3 space-y-2 text-left border-t lg:border-t-0 border-[#26151c] pt-4 lg:pt-0">
            <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">
              FILTER STATUS:
            </div>

            <div
              onClick={() => toggleFilter('achieved')}
              onMouseEnter={playHover}
              className="flex items-center gap-2 cursor-pointer text-xs text-gray-300 hover:text-white"
            >
              {filters.achieved ? (
                <CheckSquare className="w-4 h-4 text-[#ff2a3b]" />
              ) : (
                <Square className="w-4 h-4 text-gray-600" />
              )}
              <span className="text-[10px] uppercase font-bold tracking-wider">ACHIEVED</span>
            </div>

            <div
              onClick={() => toggleFilter('in-progress')}
              onMouseEnter={playHover}
              className="flex items-center gap-2 cursor-pointer text-xs text-gray-300 hover:text-white"
            >
              {filters['in-progress'] ? (
                <CheckSquare className="w-4 h-4 text-[#ff2a3b]" />
              ) : (
                <Square className="w-4 h-4 text-gray-600" />
              )}
              <span className="text-[10px] uppercase font-bold tracking-wider">IN PROGRESS</span>
            </div>

            <div
              onClick={() => toggleFilter('todo')}
              onMouseEnter={playHover}
              className="flex items-center gap-2 cursor-pointer text-xs text-gray-300 hover:text-white"
            >
              {filters.todo ? (
                <CheckSquare className="w-4 h-4 text-[#ff2a3b]" />
              ) : (
                <Square className="w-4 h-4 text-gray-600" />
              )}
              <span className="text-[10px] uppercase font-bold tracking-wider">TODO</span>
            </div>
          </div>

        </div>

        {/* Section: ACHIEVED Cards */}
        {filters.achieved && (
          <div className="space-y-3 text-left">
            <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
              ACHIEVED
            </div>

            <div className="space-y-2">
              {achievedItems.map(item => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-[#2a171e] bg-[#0b0c11] hover:border-[#ff2a3b]/50 transition-all gap-3"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    {/* Glowing insignia badge */}
                    <div className="w-9 h-9 border border-[#ff2a3b]/50 bg-[#150a0f] flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-[#ff2a3b]" />
                    </div>

                    <div className="space-y-1">
                      <div className="text-xs font-bold text-gray-100 uppercase tracking-wider font-orbitron">
                        {item.title}
                      </div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Tier Badge & Date */}
                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <span
                      className={`text-[9px] font-bold px-2 py-0.5 border uppercase tracking-widest ${getTierBadgeStyle(
                        item.tier
                      )}`}
                    >
                      {item.tier}
                    </span>
                    <span className="text-[9px] text-gray-500 uppercase tracking-widest whitespace-nowrap">
                      ACHIEVED: {item.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section: TO BE ACHIEVED */}
        {(filters['in-progress'] || filters.todo) && toBeAchievedItems.length > 0 && (
          <div className="space-y-3 text-left pt-4">
            <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
              TO BE ACHIEVED:
            </div>

            <div className="space-y-2">
              {toBeAchievedItems.map(item => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-[#221318] bg-[#090a0e] hover:border-gray-700 transition-all gap-3"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    {/* Insignia */}
                    <div className="w-9 h-9 border border-gray-800 bg-[#0c0d12] flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-4 h-4 text-gray-500" />
                    </div>

                    <div className="space-y-1">
                      <div className="text-xs font-bold text-gray-300 uppercase tracking-wider font-orbitron">
                        {item.title}
                      </div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wide">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <span
                      className={`text-[9px] font-bold px-2 py-0.5 border uppercase tracking-widest ${getTierBadgeStyle(
                        item.tier
                      )}`}
                    >
                      {item.tier}
                    </span>
                    <span className="text-[9px] text-gray-500 uppercase tracking-widest">
                      {item.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AchievementsView;
