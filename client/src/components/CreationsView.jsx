import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { useAudio } from '../context/AudioContext';
import { ExternalLink, Github, Code, CheckCircle, Terminal, Layers } from 'lucide-react';
import { creationsData as defaultCreations } from '../data/creationsData';

const CreationsView = () => {
  const { awardCoins } = useGame();
  const { playHover, playClick } = useAudio();

  const [creations, setCreations] = useState(defaultCreations);
  const [selectedTag, setSelectedTag] = useState('ALL');

  useEffect(() => {
    fetch('/api/creations')
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setCreations(data.data);
        }
      })
      .catch(() => {
        // Fallback to embedded creations seamlessly
      });
  }, []);

  const tags = ['ALL', 'FULL STACK', 'CYBERSECURITY', 'MACHINE LEARNING', 'ENTERPRISE'];

  const filterCreation = (item) => {
    if (selectedTag === 'ALL') return true;
    if (selectedTag === 'FULL STACK') return item.tech.some(t => ['MongoDB', 'React.js', 'Node.js'].includes(t));
    if (selectedTag === 'CYBERSECURITY') return item.category.includes('CYBERSECURITY');
    if (selectedTag === 'MACHINE LEARNING') return item.category.includes('MACHINE LEARNING');
    if (selectedTag === 'ENTERPRISE') return item.category.includes('ENTERPRISE');
    return true;
  };

  const filteredCreations = creations.filter(filterCreation);

  return (
    <div className="w-full flex-1 p-4 md:p-8 flex flex-col items-center justify-start select-none font-mono">
      <div className="w-full max-w-5xl space-y-6">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-xs md:text-sm text-gray-200 font-bold uppercase tracking-[0.25em] font-orbitron">
            CREATIONS & ENGINEERING ARTIFACTS
          </h2>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">
            DEPLOYED SYSTEMS // FULL-STACK ARCHITECTURES // ML MODELS
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap pb-2">
          {tags.map(tag => {
            const isSelected = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => {
                  playClick();
                  setSelectedTag(tag);
                }}
                onMouseEnter={playHover}
                className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider transition-all ${
                  isSelected
                    ? 'bg-[#ff2a3b] text-black border border-[#ff2a3b] shadow-[0_0_10px_rgba(255,42,59,0.4)]'
                    : 'bg-[#0f1017] text-gray-400 border border-[#2a171d] hover:text-white'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Creations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {filteredCreations.map((item) => (
            <div
              key={item.id}
              className="border border-[#2a171e] bg-[#0c0d13] p-5 space-y-4 hover:border-[#ff2a3b]/50 transition-all bracket-box group"
            >
              {/* Category & Status */}
              <div className="flex items-center justify-between border-b border-[#26151c] pb-2">
                <span className="text-[10px] text-[#ff2a3b] font-bold uppercase tracking-widest">
                  {item.category}
                </span>
                <span className="text-[9px] text-[#00ff66] font-bold px-2 py-0.5 bg-[#00ff66]/10 border border-[#00ff66]/30 uppercase tracking-wider">
                  {item.status}
                </span>
              </div>

              {/* Title & Summary */}
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-100 uppercase tracking-wider font-orbitron group-hover:text-[#ff2a3b] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-gray-400 uppercase leading-relaxed tracking-wide mt-1.5">
                  {item.summary}
                </p>
              </div>

              {/* Key Technical Highlights */}
              <div className="space-y-1 bg-[#07080c] p-3 border border-[#221319]">
                <div className="text-[9px] text-gray-500 uppercase font-bold tracking-widest mb-1">
                  SYSTEM HIGHLIGHTS:
                </div>
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-[9px] sm:text-[10px] text-gray-300 uppercase">
                    <span className="text-[#ff2a3b] font-bold">›</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex items-center gap-1.5 flex-wrap pt-1">
                {item.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] text-gray-300 bg-[#160c11] border border-[#ff2a3b]/20 px-2 py-0.5 uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-2 pt-2 border-t border-[#26151c]">
                {item.github && item.github !== '#' && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={playHover}
                    className="flex-1 py-1.5 px-3 text-[10px] font-bold uppercase tracking-widest border border-[#ff2a3b]/50 text-[#ff2a3b] hover:bg-[#ff2a3b] hover:text-black transition-all flex items-center justify-center gap-1.5 text-center"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>SOURCE CODE</span>
                  </a>
                )}

                {item.demo && item.demo !== '#' && (
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={playHover}
                    className="flex-1 py-1.5 px-3 text-[10px] font-bold uppercase tracking-widest border border-gray-700 text-gray-300 hover:border-[#00ff66] hover:text-[#00ff66] transition-all flex items-center justify-center gap-1.5 text-center"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>LAUNCH SYSTEM</span>
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CreationsView;
