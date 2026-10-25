import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import HUDLayout from './components/HUDLayout';
import { AudioProvider } from './context/AudioContext';
import { GameProvider } from './context/GameContext';

function AppContent() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#050608]">
      {!entered ? (
        <WelcomeScreen onEnter={() => setEntered(true)} />
      ) : (
        <HUDLayout />
      )}
    </div>
  );
}

export default function App() {
  return (
    <AudioProvider>
      <GameProvider>
        <AppContent />
      </GameProvider>
    </AudioProvider>
  );
}
