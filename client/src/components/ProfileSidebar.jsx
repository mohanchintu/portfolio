import React from 'react';
import { useGame } from '../context/GameContext';
import { useAudio } from '../context/AudioContext';
import { Radio, Wifi, ExternalLink } from 'lucide-react';

const ProfileSidebar = () => {
  const { openModal } = useGame();
  const { playHover, playClick } = useAudio();

  const handleOpenConnection = () => {
    playClick();
    openModal('social');
  };

  return (
    <aside className="w-full lg:w-64 flex-shrink-0 flex flex-col justify-between p-4 md:p-5 border-r border-[#26161b] bg-[#07080b]/70 backdrop-blur-sm select-none font-mono">
      
      <div className="space-y-5">
        
        {/* Avatar Box with 4 Corner Brackets */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto lg:mx-0 p-1 group">
          {/* Cyber L-corner brackets */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#ff2a3b]" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#ff2a3b]" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#ff2a3b]" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#ff2a3b]" />

          {/* Avatar Image with Cyber Matrix Glow */}
          <div className="w-full h-full bg-[#12080d] overflow-hidden relative border border-[#ff2a3b]/40">
            <img
              src="https://images.unsplash.com/photo-1578632767115-351597cf2477?w=300&auto=format&fit=crop&q=80"
              alt="Mohan P Avatar"
              className="w-full h-full object-cover filter contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-300"
            />
            {/* Scanline line over avatar */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff2a3b]/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-1 right-1 px-1 py-0.5 bg-black/80 text-[8px] text-[#ff2a3b] font-bold">
              ID: MP-09
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="space-y-3 text-left">
          
          {/* Name */}
          <div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest">NAME</div>
            <div className="text-sm font-bold text-gray-100 uppercase tracking-wider font-orbitron">
              MOHAN P
            </div>
          </div>

          {/* Occupation */}
          <div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest">OCCUPATION</div>
            <div className="text-xs font-bold text-[#ff2a3b] uppercase tracking-wider glow-red">
              ASSOCIATE SOFTWARE DEVELOPER
            </div>
          </div>

          {/* Corporation */}
          <div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest">CORPORATION</div>
            <div className="text-xs font-bold text-gray-300 uppercase tracking-wider">
              VISTEX
            </div>
          </div>

          {/* Availability Pill */}
          <div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">AVAILABILITY</div>
            <div className="relative inline-flex items-center justify-between w-full max-w-[200px] bg-[#ff2a3b]/10 border border-[#ff2a3b] px-3 py-1.5 text-[11px] font-bold text-[#ff2a3b]">
              <span className="tracking-widest uppercase">OPEN FOR HIRE</span>
              {/* Hex sci-fi pattern indicator */}
              <div className="flex gap-0.5 text-[9px] text-[#ff2a3b]/80">
                <span>&#11041;</span>
                <span>&#11041;</span>
              </div>
            </div>
          </div>

          {/* Social / Open Connection Button */}
          <div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">SOCIAL</div>
            <button
              onClick={handleOpenConnection}
              onMouseEnter={playHover}
              className="w-full max-w-[200px] flex items-center justify-between border border-[#ff2a3b] bg-transparent hover:bg-[#ff2a3b] text-[#ff2a3b] hover:text-black px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest transition-all duration-200 shadow-[0_0_10px_rgba(255,42,59,0.2)] hover:shadow-[0_0_15px_rgba(255,42,59,0.7)]"
            >
              <span>OPEN CONNECTION</span>
              <Radio className="w-3.5 h-3.5 animate-pulse" />
            </button>
          </div>

        </div>

      </div>

      {/* Motto at the bottom of the sidebar */}
      <div className="pt-6 border-t border-[#26161b] mt-6 text-left">
        <div className="text-[10px] text-[#ff2a3b] font-bold uppercase tracking-widest mb-1">
          MOTTO:
        </div>
        <p className="text-[10px] text-gray-400 uppercase tracking-wider leading-relaxed font-mono">
          SAEPE OMNIS NEQUE NUMQUAM RECUSANDAE LAUDANTIUM. ARCHITECTING SCALABLE SYSTEMS & EXPLORING QUANTUM HORIZONS.
        </p>
      </div>

    </aside>
  );
};

export default ProfileSidebar;
