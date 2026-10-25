import React from 'react';
import TopBar from './TopBar';
import ProfileSidebar from './ProfileSidebar';
import QuestSidebar from './QuestSidebar';
import BottomNav from './BottomNav';
import BeginningView from './BeginningView';
import LogsView from './LogsView';
import AchievementsView from './AchievementsView';
import CreationsView from './CreationsView';
import GamesView from './GamesView';
import SocialModal from './SocialModal';
import ChallengeModal from './ChallengeModal';
import VisualRecordsModal from './VisualRecordsModal';
import VisualSettingsModal from './VisualSettingsModal';
import CreditsModal from './CreditsModal';
import { useGame } from '../context/GameContext';
import { Bell, Sparkles } from 'lucide-react';

const HUDLayout = () => {
  const { activeTab, notification, visualSettings } = useGame();

  const renderActiveView = () => {
    switch (activeTab) {
      case 'LOGS':
        return <LogsView />;
      case 'ACHIEVEMENTS':
        return <AchievementsView />;
      case 'CREATIONS':
        return <CreationsView />;
      case 'GAMES':
        return <GamesView />;
      case 'BEGINNING':
      default:
        return <BeginningView />;
    }
  };

  return (
    <div
      className={`min-h-screen w-full flex flex-col justify-between bg-[#050608] text-gray-200 relative overflow-x-hidden ${
        visualSettings.crtFlicker ? 'crt-flicker' : ''
      }`}
    >
      {/* Scanlines Effect */}
      {visualSettings.scanlines && <div className="scanlines" />}

      {/* Floating HUD Notification */}
      {notification && (
        <div className="fixed top-12 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-5 py-2.5 bg-[#120509] border border-[#ff2a3b] text-white shadow-[0_0_20px_rgba(255,42,59,0.7)] animate-bounce font-mono">
          <Sparkles className="w-4 h-4 text-[#ffd700]" />
          <div className="text-left">
            <div className="text-[10px] font-black text-[#ff2a3b] uppercase tracking-wider font-orbitron">
              {notification.title}
            </div>
            <div className="text-[10px] text-gray-200 uppercase font-semibold">
              {notification.message}
            </div>
          </div>
        </div>
      )}

      {/* Outer Sci-Fi Border Frame */}
      <div className="flex-1 flex flex-col m-1 sm:m-3 border border-[#ff2a3b]/40 relative bg-[#07080b]/90 shadow-[0_0_25px_rgba(255,42,59,0.15)]">
        
        {/* Frame 4 Corner L-Brackets */}
        <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[#ff2a3b] pointer-events-none z-30" />
        <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-[#ff2a3b] pointer-events-none z-30" />
        <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-[#ff2a3b] pointer-events-none z-30" />
        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-[#ff2a3b] pointer-events-none z-30" />

        {/* Top Bar */}
        <TopBar />

        {/* Main 3-Column Core HUD Area */}
        <div className="flex-1 flex flex-col lg:flex-row w-full overflow-hidden">
          {/* Left Profile Sidebar */}
          <ProfileSidebar />

          {/* Central Interactive Viewport */}
          <main className="flex-1 flex flex-col overflow-y-auto bg-[#07080b] min-h-[500px]">
            {renderActiveView()}
          </main>

          {/* Right Quest & Status Sidebar */}
          <QuestSidebar />
        </div>

        {/* Bottom Navigation */}
        <BottomNav />

      </div>

      {/* Global Modals */}
      <SocialModal />
      <ChallengeModal />
      <VisualRecordsModal />
      <VisualSettingsModal />
      <CreditsModal />
    </div>
  );
};

export default HUDLayout;
