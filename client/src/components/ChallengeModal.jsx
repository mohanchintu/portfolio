import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { useAudio } from '../context/AudioContext';
import { X, Flame, ShieldAlert, Award, Sparkles, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

const ChallengeModal = () => {
  const { modals, closeModal, awardCoins, notify } = useGame();
  const { playHover, playClick, playSuccess } = useAudio();

  const [form, setForm] = useState({
    challengerName: '',
    email: '',
    challengeTitle: '',
    challengeDetails: '',
    difficulty: 'EPIC'
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!modals.challenge) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.challengerName || !form.challengeTitle || !form.challengeDetails) return;

    playClick();
    setSubmitting(true);

    try {
      const res = await fetch('/api/challenges', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        playSuccess();
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.4 },
          colors: ['#ff2a3b', '#ffd700', '#00f0ff']
        });
        awardCoins(50, 'NEW_QUEST_INJECTED');
        notify('CHALLENGE ACCEPTED', 'MISSION LOGGED INTO ACTIVE ROSTER! +50 COINS GRANTED', 'reward');
        setTimeout(() => {
          setSubmitted(false);
          closeModal('challenge');
        }, 2400);
      }
    } catch (err) {
      // Offline fallback
      setSubmitted(true);
      playSuccess();
      awardCoins(50, 'NEW_QUEST_INJECTED');
      setTimeout(() => {
        closeModal('challenge');
      }, 2000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm select-none font-mono">
      <div className="relative w-full max-w-lg border border-[#ff2a3b] bg-[#0c0d14] p-6 space-y-6 bracket-box shadow-[0_0_30px_rgba(255,42,59,0.3)]">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#26151c] pb-3">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-[#ff2a3b] animate-bounce" />
            <span className="text-xs font-bold text-[#ff2a3b] uppercase tracking-wider font-orbitron">
              CHALLENGE PROTOCOL // ISSUE DIRECT TRIAL
            </span>
          </div>
          <button
            onClick={() => closeModal('challenge')}
            onMouseEnter={playHover}
            className="text-gray-400 hover:text-[#ff2a3b] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-[11px] text-gray-400 uppercase leading-relaxed text-left">
          THINK YOU HAVE A TRICKY CODING TRIAL, BUG INVESTIGATION, OR SYSTEM SCALING CHALLENGE FOR MOHAN? SUBMIT IT BELOW TO INJECT IT INTO THE MISSION QUEUE!
        </p>

        {/* Challenge Form */}
        <form onSubmit={handleSubmit} className="space-y-3 text-left">
          <div className="space-y-2">
            <div>
              <label className="text-[9px] text-gray-500 uppercase font-bold tracking-widest block mb-1">
                YOUR CODENAME / ENTITY
              </label>
              <input
                type="text"
                required
                placeholder="E.G. LEAD TECH RECRUITER / CTO / PEER ENGINEER"
                value={form.challengerName}
                onChange={e => setForm({ ...form, challengerName: e.target.value })}
                className="w-full bg-[#08090e] border border-[#2a171e] focus:border-[#ff2a3b] text-xs text-gray-200 px-3 py-2 outline-none uppercase font-mono"
              />
            </div>

            <div>
              <label className="text-[9px] text-gray-500 uppercase font-bold tracking-widest block mb-1">
                RETURN COMS (EMAIL - OPTIONAL)
              </label>
              <input
                type="email"
                placeholder="YOUR.NAME@COMPANY.COM"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full bg-[#08090e] border border-[#2a171e] focus:border-[#ff2a3b] text-xs text-gray-200 px-3 py-2 outline-none uppercase font-mono"
              />
            </div>

            <div>
              <label className="text-[9px] text-gray-500 uppercase font-bold tracking-widest block mb-1">
                CHALLENGE OBJECTIVE / TITLE
              </label>
              <input
                type="text"
                required
                placeholder="E.G. OPTIMIZE GRAPHQL PERSISTED QUERIES OR BENCHMARK KAFKA"
                value={form.challengeTitle}
                onChange={e => setForm({ ...form, challengeTitle: e.target.value })}
                className="w-full bg-[#08090e] border border-[#2a171e] focus:border-[#ff2a3b] text-xs text-gray-200 px-3 py-2 outline-none uppercase font-mono"
              />
            </div>

            <div>
              <label className="text-[9px] text-gray-500 uppercase font-bold tracking-widest block mb-1">
                DIFFICULTY TIER
              </label>
              <div className="grid grid-cols-4 gap-1.5">
                {['UNCOMMON', 'RARE', 'EPIC', 'LEGENDARY'].map(tier => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => {
                      playClick();
                      setForm({ ...form, difficulty: tier });
                    }}
                    className={`py-1 text-[9px] font-bold uppercase border transition-all ${
                      form.difficulty === tier
                        ? 'bg-[#ff2a3b] text-black border-[#ff2a3b]'
                        : 'border-[#2a171e] text-gray-400 hover:text-white bg-[#090a0f]'
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[9px] text-gray-500 uppercase font-bold tracking-widest block mb-1">
                SPECIFICATIONS & ACCEPTANCE CRITERIA
              </label>
              <textarea
                required
                rows={3}
                placeholder="DESCRIBE THE PROBLEM, CONSTRAINTS, TECH REQUIREMENTS..."
                value={form.challengeDetails}
                onChange={e => setForm({ ...form, challengeDetails: e.target.value })}
                className="w-full bg-[#08090e] border border-[#2a171e] focus:border-[#ff2a3b] text-xs text-gray-200 px-3 py-2 outline-none uppercase font-mono resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting || submitted}
            onMouseEnter={playHover}
            className="w-full py-2.5 border border-[#ff2a3b] bg-[#ff2a3b]/10 hover:bg-[#ff2a3b] text-[#ff2a3b] hover:text-black font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 mt-4"
          >
            {submitted ? (
              <>
                <CheckCircle className="w-4 h-4 text-[#00ff66]" />
                <span className="text-[#00ff66]">TRIAL ACCEPTED (+50 COINS)</span>
              </>
            ) : submitting ? (
              <span>ENROLLING MISSION IN NODE BACKEND...</span>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5" />
                <span>DISPATCH TRIAL TO ACTIVE QUESTS</span>
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  );
};

export default ChallengeModal;
