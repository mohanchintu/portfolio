import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

const AudioContextInstance = createContext(null);

export const AudioProvider = ({ children }) => {
  const [sfxEnabled, setSfxEnabled] = useState(true);
  const [musicEnabled, setMusicEnabled] = useState(false);
  const audioCtxRef = useRef(null);
  const musicNodesRef = useRef(null);

  // Initialize Audio Context on demand (handles browser autoplay policies)
  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  // Sound: UI Click Blip
  const playClick = () => {
    if (!sfxEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.06);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.06);
    } catch (e) {
      // Audio not permitted or interrupted
    }
  };

  // Sound: Subtle UI Hover
  const playHover = () => {
    if (!sfxEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(620, ctx.currentTime);

      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch (e) {}
  };

  // Sound: Success / Level Up / Quest Finish
  const playSuccess = () => {
    if (!sfxEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const startTime = ctx.currentTime + idx * 0.08;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.1, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.35);
      });
    } catch (e) {}
  };

  // Sound: Laser Fire (for mini game)
  const playLaser = () => {
    if (!sfxEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(1200, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(160, ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } catch (e) {}
  };

  // Sound: Impact / Explosion (for mini game)
  const playExplosion = () => {
    if (!sfxEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const bufferSize = ctx.sampleRate * 0.25;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.25);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start();
      noise.stop(ctx.currentTime + 0.25);
    } catch (e) {}
  };

  // Ambient Cyber Drone Music Synthesizer
  const startAmbientMusic = () => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.05, ctx.currentTime);

      // Low root drone (C2 - 65.4 Hz)
      const osc1 = ctx.createOscillator();
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(65.41, ctx.currentTime);

      // Fifth harmonic (G2 - 98 Hz)
      const osc2 = ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(98.0, ctx.currentTime);

      // Sub octave (C1 - 32.7 Hz)
      const osc3 = ctx.createOscillator();
      osc3.type = 'triangle';
      osc3.frequency.setValueAtTime(32.7, ctx.currentTime);

      // Filter with LFO modulation
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(350, ctx.currentTime);
      filter.Q.setValueAtTime(4, ctx.currentTime);

      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.15, ctx.currentTime); // slow sweep
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(150, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      osc1.connect(filter);
      osc2.connect(filter);
      osc3.connect(filter);
      filter.connect(masterGain);
      masterGain.connect(ctx.destination);

      osc1.start();
      osc2.start();
      osc3.start();
      lfo.start();

      musicNodesRef.current = {
        stop: () => {
          try {
            masterGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
            setTimeout(() => {
              osc1.stop();
              osc2.stop();
              osc3.stop();
              lfo.stop();
              osc1.disconnect();
              osc2.disconnect();
              osc3.disconnect();
              lfo.disconnect();
            }, 550);
          } catch (err) {}
        }
      };
    } catch (e) {}
  };

  const stopAmbientMusic = () => {
    if (musicNodesRef.current) {
      musicNodesRef.current.stop();
      musicNodesRef.current = null;
    }
  };

  // Toggle handlers
  const toggleSfx = () => {
    setSfxEnabled(prev => {
      const next = !prev;
      if (next) playClick();
      return next;
    });
  };

  const toggleMusic = () => {
    setMusicEnabled(prev => {
      const next = !prev;
      if (next) {
        startAmbientMusic();
      } else {
        stopAmbientMusic();
      }
      return next;
    });
  };

  useEffect(() => {
    return () => {
      stopAmbientMusic();
    };
  }, []);

  return (
    <AudioContextInstance.Provider
      value={{
        sfxEnabled,
        musicEnabled,
        toggleSfx,
        toggleMusic,
        playClick,
        playHover,
        playSuccess,
        playLaser,
        playExplosion
      }}
    >
      {children}
    </AudioContextInstance.Provider>
  );
};

export const useAudio = () => useContext(AudioContextInstance);
