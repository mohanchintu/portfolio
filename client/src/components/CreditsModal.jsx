import React from 'react';
import { useGame } from '../context/GameContext';
import { useAudio } from '../context/AudioContext';
import { X, ExternalLink, Code2, Heart, Award } from 'lucide-react';

const CreditsModal = () => {
  const { modals, closeModal } = useGame();
  const { playHover } = useAudio();

  if (!modals.credits) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm select-none font-mono">
      <div className="relative w-full max-w-md border border-[#ff2a3b] bg-[#0c0d14] p-6 space-y-5 bracket-box shadow-[0_0_30px_rgba(255,42,59,0.3)]">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#26151c] pb-3">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#ff2a3b]" />
            <span className="text-xs font-bold text-[#ff2a3b] uppercase tracking-wider font-orbitron">
              SYSTEM ATTRIBUTIONS & CREDITS
            </span>
          </div>
          <button
            onClick={() => closeModal('credits')}
            onMouseEnter={playHover}
            className="text-gray-400 hover:text-[#ff2a3b] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 text-left text-xs">
          <div>
            <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
              SYSTEM ARCHITECT & ENGINEER:
            </div>
            <div className="text-sm font-bold text-gray-100 uppercase tracking-wider font-orbitron mt-0.5">
              MOHAN P
            </div>
            <div className="text-[10px] text-[#ff2a3b] uppercase font-semibold">
              ASSOCIATE SOFTWARE DEVELOPER // VISTEX
            </div>
          </div>

          <div className="border-t border-[#221319] pt-3">
            <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">
              DESIGN INSPIRATION & TEMPLATE:
            </div>
            <p className="text-[11px] text-gray-300 uppercase leading-relaxed">
              ORIGINAL SCI-FI HUD PORTFOLIO CONCEPT INSPIRED BY FIGMA COMMUNITY FILE:
            </p>
            <a
              href="https://www.figma.com/design/tpXJJNFsj7Jqk3mxbJ2v7L/Web-Portfolio-Design--Community-?node-id=0-1&p=f&t=QDShFVUxEdzwQ8nv-0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-[#ff2a3b] hover:text-white underline inline-flex items-center gap-1 mt-1 break-all"
            >
              <span>FIGMA COMMUNITY: WEB PORTFOLIO DESIGN</span>
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
            </a>
          </div>

          <div className="border-t border-[#221319] pt-3">
            <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">
              CORE SYSTEM TECHNOLOGIES:
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[
                'REACT.JS 18',
                'NODE.JS',
                'EXPRESS.JS',
                'WEB AUDIO API',
                'HTML5 CANVAS',
                'RESTFUL APIS',
                'TAILWIND CSS'
              ].map(tech => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-[#150a0f] border border-[#ff2a3b]/30 text-[9px] text-gray-300 font-bold uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CreditsModal;
