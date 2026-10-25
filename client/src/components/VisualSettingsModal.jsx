import React from 'react';
import { useGame } from '../context/GameContext';
import { useAudio } from '../context/AudioContext';
import { X, Settings, CheckSquare, Square, Monitor, Sparkles, Volume2 } from 'lucide-react';

const VisualSettingsModal = () => {
  const { modals, closeModal, visualSettings, toggleVisualSetting } = useGame();
  const { sfxEnabled, toggleSfx, playHover, playClick } = useAudio();

  if (!modals.settings) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm select-none font-mono">
      <div className="relative w-full max-w-md border border-[#ff2a3b] bg-[#0c0d14] p-6 space-y-6 bracket-box shadow-[0_0_30px_rgba(255,42,59,0.3)]">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#26151c] pb-3">
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4 text-[#ff2a3b]" />
            <span className="text-xs font-bold text-[#ff2a3b] uppercase tracking-wider font-orbitron">
              VISUAL & HUD CALIBRATION
            </span>
          </div>
          <button
            onClick={() => closeModal('settings')}
            onMouseEnter={playHover}
            className="text-gray-400 hover:text-[#ff2a3b] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Settings List */}
        <div className="space-y-4 text-left">
          
          {/* Scanlines */}
          <div
            onClick={() => toggleVisualSetting('scanlines')}
            onMouseEnter={playHover}
            className="flex items-center justify-between p-3 border border-[#2a171e] bg-[#08090e] cursor-pointer hover:border-[#ff2a3b]/50 transition-all"
          >
            <div>
              <div className="text-xs font-bold text-gray-200 uppercase">CRT SCANLINES</div>
              <div className="text-[10px] text-gray-500 uppercase">AUTHENTIC RETRO CYBER CRT RASTER OVERLAY</div>
            </div>
            <div className="text-[#ff2a3b]">
              {visualSettings.scanlines ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5 text-gray-600" />}
            </div>
          </div>

          {/* CRT Flicker */}
          <div
            onClick={() => toggleVisualSetting('crtFlicker')}
            onMouseEnter={playHover}
            className="flex items-center justify-between p-3 border border-[#2a171e] bg-[#08090e] cursor-pointer hover:border-[#ff2a3b]/50 transition-all"
          >
            <div>
              <div className="text-xs font-bold text-gray-200 uppercase">CRT MICRO-FLICKER</div>
              <div className="text-[10px] text-gray-500 uppercase">ANALOG ELECTRON GUN PHOSPHOR STIMULATION</div>
            </div>
            <div className="text-[#ff2a3b]">
              {visualSettings.crtFlicker ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5 text-gray-600" />}
            </div>
          </div>

          {/* Bloom Glow */}
          <div
            onClick={() => toggleVisualSetting('bloomGlow')}
            onMouseEnter={playHover}
            className="flex items-center justify-between p-3 border border-[#2a171e] bg-[#08090e] cursor-pointer hover:border-[#ff2a3b]/50 transition-all"
          >
            <div>
              <div className="text-xs font-bold text-gray-200 uppercase">NEON BLOOM GLOW</div>
              <div className="text-[10px] text-gray-500 uppercase">HIGH DYNAMIC RANGE LASER ILLUMINATION</div>
            </div>
            <div className="text-[#ff2a3b]">
              {visualSettings.bloomGlow ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5 text-gray-600" />}
            </div>
          </div>

          {/* Audio SFX */}
          <div
            onClick={toggleSfx}
            onMouseEnter={playHover}
            className="flex items-center justify-between p-3 border border-[#2a171e] bg-[#08090e] cursor-pointer hover:border-[#ff2a3b]/50 transition-all"
          >
            <div>
              <div className="text-xs font-bold text-gray-200 uppercase">SYNTHESIZED UI SFX</div>
              <div className="text-[10px] text-gray-500 uppercase">PROCEDURAL WEB AUDIO FEEDBACK CHIRPS</div>
            </div>
            <div className="text-[#ff2a3b]">
              {sfxEnabled ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5 text-gray-600" />}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default VisualSettingsModal;
