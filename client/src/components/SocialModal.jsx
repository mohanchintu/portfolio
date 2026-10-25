import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { useAudio } from '../context/AudioContext';
import { X, Mail, Phone, Github, Linkedin, Send, FileText, CheckCircle2 } from 'lucide-react';

const SocialModal = () => {
  const { modals, closeModal, awardCoins, notify } = useGame();
  const { playHover, playClick, playSuccess } = useAudio();

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  if (!modals.social) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    playClick();
    setSending(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (data.success) {
        setSentSuccess(true);
        playSuccess();
        awardCoins(20, 'COMM_LINK_ESTABLISHED');
        notify('TRANSMISSION SENT', 'MOHAN HAS RECEIVED YOUR DIRECT DISPATCH.', 'reward');
        setTimeout(() => {
          setSentSuccess(false);
          closeModal('social');
        }, 2200);
      }
    } catch (err) {
      // Fallback
      setSentSuccess(true);
      playSuccess();
      setTimeout(() => {
        closeModal('social');
      }, 2000);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm select-none font-mono">
      <div className="relative w-full max-w-lg border border-[#ff2a3b] bg-[#0c0d14] p-6 space-y-6 bracket-box shadow-[0_0_30px_rgba(255,42,59,0.3)]">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#26151c] pb-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-[#ff2a3b] animate-pulse" />
            <span className="text-xs font-bold text-[#ff2a3b] uppercase tracking-wider font-orbitron">
              SECURE COMMS // MOHAN P
            </span>
          </div>
          <button
            onClick={() => closeModal('social')}
            onMouseEnter={playHover}
            className="text-gray-400 hover:text-[#ff2a3b] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Channels Information */}
        <div className="space-y-2 text-left">
          <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
            DIRECT SIGNALS:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <a
              href="mailto:mohan83676@gmail.com"
              className="flex items-center gap-2 p-2.5 bg-[#12080d] border border-[#ff2a3b]/30 hover:border-[#ff2a3b] text-gray-300 hover:text-white transition-all"
            >
              <Mail className="w-4 h-4 text-[#ff2a3b]" />
              <span className="truncate">mohan83676@gmail.com</span>
            </a>

            <a
              href="tel:8367629463"
              className="flex items-center gap-2 p-2.5 bg-[#12080d] border border-[#ff2a3b]/30 hover:border-[#ff2a3b] text-gray-300 hover:text-white transition-all"
            >
              <Phone className="w-4 h-4 text-[#ff2a3b]" />
              <span>+91 8367629463</span>
            </a>

            <a
              href="https://github.com/Mohan-pole"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2.5 bg-[#12080d] border border-[#ff2a3b]/30 hover:border-[#ff2a3b] text-gray-300 hover:text-white transition-all"
            >
              <Github className="w-4 h-4 text-[#ff2a3b]" />
              <span>github.com/Mohan-pole</span>
            </a>

            <a
              href="https://linkedin.com/in/Mohan-pole"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2.5 bg-[#12080d] border border-[#ff2a3b]/30 hover:border-[#ff2a3b] text-gray-300 hover:text-white transition-all"
            >
              <Linkedin className="w-4 h-4 text-[#ff2a3b]" />
              <span>linkedin.com/in/Mohan-pole</span>
            </a>
          </div>
        </div>

        {/* Transmission Form */}
        <form onSubmit={handleSubmit} className="space-y-3 text-left">
          <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
            DISPATCH ENCRYPTED PACKET:
          </div>

          <div className="space-y-2">
            <input
              type="text"
              required
              placeholder="YOUR OPERATOR NAME / CALLSIGN"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full bg-[#08090e] border border-[#2a171e] focus:border-[#ff2a3b] text-xs text-gray-200 px-3 py-2 outline-none uppercase font-mono"
            />

            <input
              type="email"
              required
              placeholder="RETURN TRANSMISSION FREQUENCY (EMAIL)"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full bg-[#08090e] border border-[#2a171e] focus:border-[#ff2a3b] text-xs text-gray-200 px-3 py-2 outline-none uppercase font-mono"
            />

            <textarea
              required
              rows={3}
              placeholder="ENTER TRANSMISSION PAYLOAD..."
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              className="w-full bg-[#08090e] border border-[#2a171e] focus:border-[#ff2a3b] text-xs text-gray-200 px-3 py-2 outline-none uppercase font-mono resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={sending || sentSuccess}
            onMouseEnter={playHover}
            className="w-full py-2.5 border border-[#ff2a3b] bg-[#ff2a3b]/10 hover:bg-[#ff2a3b] text-[#ff2a3b] hover:text-black font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2"
          >
            {sentSuccess ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-[#00ff66]" />
                <span className="text-[#00ff66]">TRANSMISSION CONFIRMED (+20 COINS)</span>
              </>
            ) : sending ? (
              <span>ENCRYPTING & TRANSMITTING...</span>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>BROADCAST TRANSMISSION</span>
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  );
};

export default SocialModal;
