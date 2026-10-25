import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useAudio } from './AudioContext';

const GameContext = createContext(null);

export const GameProvider = ({ children }) => {
  const { playSuccess, playClick } = useAudio();

  const [activeTab, setActiveTab] = useState('BEGINNING');
  const [level, setLevel] = useState(48);
  const [coins, setCoins] = useState(1425);
  const [xp, setXp] = useState(85);
  const [notification, setNotification] = useState(null);

  // Visual settings
  const [visualSettings, setVisualSettings] = useState({
    scanlines: true,
    crtFlicker: false,
    bloomGlow: true,
    audioSfx: true
  });

  // Modals state
  const [modals, setModals] = useState({
    social: false,
    challenge: false,
    settings: false,
    credits: false,
    visualRecords: false,
    recordsData: null
  });

  // Live clocks for HUD (Server time and local time)
  const [localTime, setLocalTime] = useState('');
  const [serverTime, setServerTime] = useState('');

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
      // Simulated UTC/Server time
      setServerTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'UTC',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  // Show temporary HUD notification
  const notify = (title, message, type = 'info') => {
    setNotification({ title, message, type });
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  // Add Coins & XP with gamified celebration
  const awardCoins = (amount, reason = 'SYSTEM PROTOCOL') => {
    setCoins(prev => prev + amount);
    setXp(prev => {
      const newXp = prev + Math.floor(amount / 2);
      if (newXp >= 100) {
        setLevel(lvl => lvl + 1);
        playSuccess();
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.2 },
          colors: ['#ff2a3b', '#00ff66', '#00f0ff']
        });
        notify('LEVEL ELEVATED', `ADVANCED TO LEVEL ${level + 1}! SYSTEM CAPACITY INCREASED`, 'level-up');
        return newXp - 100;
      }
      return newXp;
    });

    notify('REWARD GRANTED', `+${amount} COINS (${reason})`, 'reward');
    playSuccess();
  };

  const switchTab = (tab) => {
    playClick();
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openModal = (name, data = null) => {
    playClick();
    setModals(prev => ({ ...prev, [name]: true, recordsData: data }));
  };

  const closeModal = (name) => {
    playClick();
    setModals(prev => ({ ...prev, [name]: false }));
  };

  const toggleVisualSetting = (key) => {
    playClick();
    setVisualSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <GameContext.Provider
      value={{
        activeTab,
        switchTab,
        level,
        coins,
        xp,
        awardCoins,
        notification,
        notify,
        visualSettings,
        toggleVisualSetting,
        modals,
        openModal,
        closeModal,
        localTime,
        serverTime
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
