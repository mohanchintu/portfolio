import React from 'react';
import { useAudio } from '../context/AudioContext';

const WelcomeScreen = ({ onEnter }) => {
  const { playClick, playHover } = useAudio();

  const handleEnter = () => {
    playClick();
    onEnter();
  };

  return (
    <div className="relative min-h-screen w-full bg-[#050608] flex items-center justify-center p-6 md:p-12 overflow-hidden select-none">
      {/* Background Ambience / Red Glow in top right */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#ff2a3b]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ff2a3b]/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(#26161b 1px, transparent 1px), linear-gradient(90deg, #26161b 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-5xl w-full flex flex-col md:flex-row items-center md:items-center justify-between gap-12 md:gap-20">
        
        {/* Massive Red Blocky "HI!" */}
        <div className="flex-shrink-0">
          <h1 
            className="text-[120px] sm:text-[180px] md:text-[230px] font-black text-[#ff2a3b] leading-none tracking-tight select-none font-orbitron"
            style={{
              textShadow: '0 0 35px rgba(255, 42, 59, 0.45), 0 0 70px rgba(255, 42, 59, 0.2)'
            }}
          >
            HI!
          </h1>
        </div>

        {/* Narrative & Entry Button */}
        <div className="flex flex-col space-y-6 max-w-xl text-left font-mono">
          <p className="text-sm md:text-base text-gray-200 tracking-widest font-semibold uppercase">
            WELCOME TO MY PERSONAL WEBSITE.
          </p>

          <p className="text-xs md:text-sm text-gray-400 tracking-wider leading-relaxed uppercase">
            I HAVE CREATED THIS WEBSITE TO FEEL LIKE A GAME/SCI-FI INTERFACE. ALL TEXT INSIDE TRIES TO REFLECT THIS.
          </p>

          <p className="text-xs md:text-sm text-gray-400 tracking-wider leading-relaxed uppercase">
            YOU WILL FIND &apos;ACHIEVEMENTS&apos; OR &apos;QUESTS&apos; THAT SHOW THE PROGRESS IN MY PROFESSIONAL LIFE AND ARE RELATED TO WHAT I AM WORKING ON.
          </p>

          <div className="pt-4">
            <button
              onClick={handleEnter}
              onMouseEnter={playHover}
              className="group relative inline-flex items-center justify-center px-8 py-3.5 text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-[#ff2a3b] border border-[#ff2a3b] bg-transparent hover:bg-[#ff2a3b] hover:text-black transition-all duration-200 active:scale-95 shadow-[0_0_15px_rgba(255,42,59,0.2)] hover:shadow-[0_0_30px_rgba(255,42,59,0.8)]"
            >
              <span className="relative z-10 flex items-center gap-2 font-bold">
                ENTER THE SYSTEM
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </span>
            </button>
          </div>

          {/* Quick Creator Tag */}
          <div className="pt-2 text-[11px] text-gray-500 tracking-wider">
            OPERATOR: <span className="text-gray-300">MOHAN P</span> // FULL-STACK ARCHITECT // LEVEL 48
          </div>
        </div>

      </div>

      {/* Subtle corner tech details */}
      <div className="absolute top-6 left-6 text-[10px] text-gray-600 font-mono tracking-widest uppercase">
        SYS.VER 2.6.4 // NEURAL PROTOCOL
      </div>
      <div className="absolute bottom-6 right-6 text-[10px] text-gray-600 font-mono tracking-widest uppercase">
        STATUS: STANDBY // READY FOR DISPATCH
      </div>
    </div>
  );
};

export default WelcomeScreen;
