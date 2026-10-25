import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { useAudio } from '../context/AudioContext';
import { Eye, ChevronDown, ChevronUp, Layers, CheckCircle2 } from 'lucide-react';
import { logsData as defaultLogs } from '../data/logsData';

const LogsView = () => {
  const { openModal } = useGame();
  const { playHover, playClick } = useAudio();

  const [logs, setLogs] = useState(defaultLogs);
  const [selectedLogId, setSelectedLogId] = useState(defaultLogs[0]?.id || 'log-001');
  const [expandedSection, setExpandedSection] = useState(null);

  // Fetch fresh logs if backend is running
  useEffect(() => {
    fetch('/api/logs')
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setLogs(data.data);
        }
      })
      .catch(() => {
        // Backend not accessible, static data seamlessly used
      });
  }, []);

  const activeLog = logs.find(l => l.id === selectedLogId) || logs[0];

  const handleSelectLog = (logId) => {
    playClick();
    setSelectedLogId(logId);
  };

  const toggleExpand = (sectionKey) => {
    playClick();
    setExpandedSection(prev => (prev === sectionKey ? null : sectionKey));
  };

  const handlePreviewVisualRecords = () => {
    playClick();
    openModal('visualRecords', activeLog?.visualRecords || []);
  };

  if (!activeLog) return null;

  return (
    <div className="w-full flex-1 p-4 md:p-8 flex flex-col items-center justify-start select-none font-mono">
      <div className="w-full max-w-5xl space-y-8">
        
        {/* Header Dump Initialized as in Figma Image 4 */}
        <div className="text-center">
          <div className="text-xs md:text-sm text-gray-300 font-mono tracking-[0.25em] uppercase glow-red">
            DATA LOG DUMP INITIALIZED.
          </div>
          <div className="text-[10px] text-gray-500 tracking-widest uppercase mt-1">
            PARSING SECURE SYSTEM ARCHIVE RECORDS // ENCRYPTION: SHA-256
          </div>
        </div>

        {/* Active Log Card Container */}
        <div className="relative border border-[#2a161d] bg-[#0c0d13]/90 p-5 md:p-7 space-y-6 bracket-box">
          
          {/* Active Log Banner Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#ff2a3b]/30 pb-3 gap-2">
            <div>
              <h2 className="text-xs sm:text-sm font-bold text-[#ff2a3b] uppercase tracking-wider font-orbitron">
                {activeLog.title}
              </h2>
            </div>
            <div className="text-[11px] text-[#ff2a3b] font-bold tracking-widest uppercase">
              DATE: {activeLog.date}
            </div>
          </div>

          {/* Sub metadata */}
          <div className="flex flex-wrap items-center gap-6 text-[10px] text-gray-400 uppercase tracking-widest border-b border-[#2a161d] pb-3">
            <div>
              <span className="text-gray-500">LOCATION: </span>
              <span className="text-gray-200">{activeLog.location}</span>
            </div>
            <div>
              <span className="text-gray-500">PROJECT STATUS: </span>
              <span className="text-[#00ff66] font-bold">{activeLog.projectStatus}</span>
            </div>
          </div>

          {/* 4 Cards Grid as in Figma Image 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Card 1: Project Update */}
            <div className="border border-[#2a171e] bg-[#08090e] p-4 text-left space-y-2 hover:border-[#ff2a3b]/40 transition-colors">
              <div className="text-[11px] font-bold text-[#ff2a3b] uppercase tracking-wider">
                PROJECT UPDATE
              </div>
              <p className="text-[10px] sm:text-[11px] text-gray-300 uppercase leading-relaxed tracking-wide">
                {activeLog.projectUpdate}
              </p>
            </div>

            {/* Card 2: Challenges */}
            <div className="border border-[#2a171e] bg-[#08090e] p-4 text-left space-y-2 hover:border-[#ff2a3b]/40 transition-colors">
              <div className="text-[11px] font-bold text-[#ff2a3b] uppercase tracking-wider">
                CHALLENGES
              </div>
              <p className="text-[10px] sm:text-[11px] text-gray-300 uppercase leading-relaxed tracking-wide">
                {expandedSection === 'challenges' 
                  ? activeLog.challenges 
                  : `${activeLog.challenges.slice(0, 140)}...`}
              </p>
              <button
                onClick={() => toggleExpand('challenges')}
                onMouseEnter={playHover}
                className="text-[10px] text-[#ff2a3b] hover:text-white uppercase font-bold tracking-wider inline-flex items-center gap-1 mt-1"
              >
                {expandedSection === 'challenges' ? '- COLLAPSE' : '+ EXPAND'}
              </button>
            </div>

            {/* Card 3: Next Steps */}
            <div className="border border-[#2a171e] bg-[#08090e] p-4 text-left space-y-2 hover:border-[#ff2a3b]/40 transition-colors">
              <div className="text-[11px] font-bold text-[#ff2a3b] uppercase tracking-wider">
                NEXT STEPS
              </div>
              <p className="text-[10px] sm:text-[11px] text-gray-300 uppercase leading-relaxed tracking-wide">
                {activeLog.nextSteps}
              </p>
            </div>

            {/* Card 4: Conclusion */}
            <div className="border border-[#2a171e] bg-[#08090e] p-4 text-left space-y-2 hover:border-[#ff2a3b]/40 transition-colors">
              <div className="text-[11px] font-bold text-[#ff2a3b] uppercase tracking-wider">
                CONCLUSION
              </div>
              <p className="text-[10px] sm:text-[11px] text-gray-300 uppercase leading-relaxed tracking-wide">
                {expandedSection === 'conclusion' 
                  ? activeLog.conclusion 
                  : `${activeLog.conclusion.slice(0, 140)}...`}
              </p>
              <button
                onClick={() => toggleExpand('conclusion')}
                onMouseEnter={playHover}
                className="text-[10px] text-[#ff2a3b] hover:text-white uppercase font-bold tracking-wider inline-flex items-center gap-1 mt-1"
              >
                {expandedSection === 'conclusion' ? '- COLLAPSE' : '+ EXPAND'}
              </button>
            </div>

          </div>

          {/* Centered Preview Visual Records Button as in Image 4 */}
          <div className="text-center pt-2">
            <button
              onClick={handlePreviewVisualRecords}
              onMouseEnter={playHover}
              className="inline-flex items-center justify-center gap-2 border border-[#ff2a3b] bg-transparent hover:bg-[#ff2a3b] text-[#ff2a3b] hover:text-black px-6 py-2 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-200 shadow-[0_0_12px_rgba(255,42,59,0.25)] hover:shadow-[0_0_20px_rgba(255,42,59,0.7)]"
            >
              <span>PREVIEW VISUAL RECORDS</span>
              <Layers className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Older Logs Section as in Figma Image 4 */}
        <div className="space-y-3 text-left">
          <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">
            OLDER LOGS:
          </div>

          <div className="space-y-1.5">
            {logs.map((log) => {
              const isCurrent = log.id === selectedLogId;
              return (
                <div
                  key={log.id}
                  onClick={() => handleSelectLog(log.id)}
                  onMouseEnter={playHover}
                  className={`w-full flex items-center justify-between p-3 border transition-all cursor-pointer ${
                    isCurrent
                      ? 'border-[#ff2a3b] bg-[#ff2a3b]/10 text-white'
                      : 'border-[#26151c] bg-[#090a0f] text-gray-400 hover:border-[#ff2a3b]/50 hover:text-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#ff2a3b] text-[10px] font-bold">
                      {isCurrent ? '▶' : '•'}
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                      {log.title}
                    </span>
                  </div>

                  <div className="text-[10px] text-[#ff2a3b] font-bold tracking-widest uppercase">
                    DATE: {log.date}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default LogsView;
