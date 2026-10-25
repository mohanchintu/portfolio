import React from 'react';
import { useGame } from '../context/GameContext';
import { useAudio } from '../context/AudioContext';
import { X, Layers, Cpu, Database, Network } from 'lucide-react';

const VisualRecordsModal = () => {
  const { modals, closeModal } = useGame();
  const { playHover } = useAudio();

  if (!modals.visualRecords) return null;

  const records = modals.recordsData || [
    {
      title: 'CRUD Synchronization Pipeline',
      description: 'Bi-directional state sync architecture between custom React UI and SAP ABAP function modules.',
      badge: 'ARCHITECTURE'
    },
    {
      title: 'Compressed XML Serializer',
      description: 'Benchmark showing 72% reduction in payload footprint and sub-50ms serialization timing.',
      badge: 'PERFORMANCE'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm select-none font-mono">
      <div className="relative w-full max-w-2xl border border-[#ff2a3b] bg-[#0c0d14] p-6 space-y-6 bracket-box shadow-[0_0_30px_rgba(255,42,59,0.3)]">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#26151c] pb-3">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#ff2a3b]" />
            <span className="text-xs font-bold text-[#ff2a3b] uppercase tracking-wider font-orbitron">
              VISUAL RECORDS & SYSTEM BLUEPRINTS
            </span>
          </div>
          <button
            onClick={() => closeModal('visualRecords')}
            onMouseEnter={playHover}
            className="text-gray-400 hover:text-[#ff2a3b] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Blueprint Visuals */}
        <div className="space-y-4 text-left max-h-[60vh] overflow-y-auto pr-1">
          {records.map((rec, index) => (
            <div
              key={index}
              className="border border-[#2a171e] bg-[#07080c] p-4 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-200 uppercase font-orbitron">
                  {rec.title}
                </span>
                <span className="text-[9px] text-[#00f0ff] font-bold px-2 py-0.5 border border-[#00f0ff]/40 bg-[#00f0ff]/10 uppercase tracking-widest">
                  {rec.badge || 'TELEMETRY'}
                </span>
              </div>

              {/* Simulated High-Tech Blueprint Canvas Diagram */}
              <div className="w-full h-36 bg-[#090b10] border border-[#221319] p-3 flex flex-col justify-between relative overflow-hidden">
                {/* Tech grid overlay */}
                <div 
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(#00f0ff 1px, transparent 1px), linear-gradient(90deg, #00f0ff 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}
                />

                {/* Node flow diagram */}
                <div className="relative z-10 flex items-center justify-between px-4 py-2">
                  <div className="px-3 py-1.5 border border-[#ff2a3b] bg-[#1a080f] text-[10px] text-[#ff2a3b] font-bold text-center">
                    CLIENT UI<br/><span className="text-[8px] text-gray-400">REACT.JS</span>
                  </div>

                  <div className="flex-1 flex items-center justify-center px-2">
                    <div className="w-full h-0.5 bg-gradient-to-r from-[#ff2a3b] via-[#00f0ff] to-[#00ff66] relative">
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-[8px] text-[#00f0ff] bg-black px-1 font-bold">
                        XML PAYLOAD
                      </div>
                    </div>
                  </div>

                  <div className="px-3 py-1.5 border border-[#00f0ff] bg-[#05151a] text-[10px] text-[#00f0ff] font-bold text-center">
                    REST ENDPOINT<br/><span className="text-[8px] text-gray-400">NODE.JS</span>
                  </div>

                  <div className="flex-1 flex items-center justify-center px-2">
                    <div className="w-full h-0.5 bg-gradient-to-r from-[#00f0ff] to-[#00ff66] relative">
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-[8px] text-[#00ff66] bg-black px-1 font-bold">
                        RFC COMPRESS
                      </div>
                    </div>
                  </div>

                  <div className="px-3 py-1.5 border border-[#00ff66] bg-[#04170d] text-[10px] text-[#00ff66] font-bold text-center">
                    DATA CORE<br/><span className="text-[8px] text-gray-400">SAP / MONGO</span>
                  </div>
                </div>

                <div className="relative z-10 text-[9px] text-gray-500 flex justify-between tracking-widest uppercase">
                  <span>TELEMETRY: VERIFIED 200 OK</span>
                  <span>ENCRYPTION: AES-256</span>
                </div>
              </div>

              <p className="text-[10px] sm:text-[11px] text-gray-400 uppercase leading-relaxed tracking-wide">
                {rec.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default VisualRecordsModal;
