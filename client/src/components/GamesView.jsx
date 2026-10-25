import React, { useState, useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';
import { useAudio } from '../context/AudioContext';
import { Play, RotateCcw, Zap, Trophy, ShieldAlert } from 'lucide-react';

const GamesView = () => {
  const { awardCoins, notify } = useGame();
  const { playLaser, playExplosion, playSuccess, playClick, playHover } = useAudio();

  const canvasRef = useRef(null);
  const [gameState, setGameState] = useState('IDLE'); // IDLE, PLAYING, GAMEOVER
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [sessionCoins, setSessionCoins] = useState(0);

  const stateRef = useRef({
    playerX: 250,
    lasers: [],
    enemies: [],
    particles: [],
    keys: {},
    lastEnemyTime: 0,
    score: 0,
    isPlaying: false
  });

  const startGame = () => {
    playClick();
    setScore(0);
    setSessionCoins(0);
    stateRef.current = {
      playerX: 250,
      lasers: [],
      enemies: [],
      particles: [],
      keys: {},
      lastEnemyTime: Date.now(),
      score: 0,
      isPlaying: true
    };
    setGameState('PLAYING');
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      stateRef.current.keys[e.key] = true;
      if (e.key === ' ' && stateRef.current.isPlaying) {
        e.preventDefault();
        shootLaser();
      }
    };

    const handleKeyUp = (e) => {
      stateRef.current.keys[e.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const shootLaser = () => {
    if (!stateRef.current.isPlaying) return;
    const { playerX, lasers } = stateRef.current;
    lasers.push({
      x: playerX,
      y: 350,
      speed: 7
    });
    playLaser();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;

    const bugTypes = ['NULL_PTR', 'MEM_LEAK', 'RACE_COND', 'XSS_INJECT', 'SYNTAX_ERR'];

    const gameLoop = () => {
      const state = stateRef.current;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Cyber Grid Background
      ctx.strokeStyle = 'rgba(255, 42, 59, 0.08)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      if (state.isPlaying) {
        // Player Movement
        if (state.keys['ArrowLeft'] || state.keys['a'] || state.keys['A']) {
          state.playerX = Math.max(30, state.playerX - 6);
        }
        if (state.keys['ArrowRight'] || state.keys['d'] || state.keys['D']) {
          state.playerX = Math.min(width - 30, state.playerX + 6);
        }

        // Spawn Enemies (Bugs)
        const now = Date.now();
        if (now - state.lastEnemyTime > 900) {
          state.enemies.push({
            x: Math.random() * (width - 100) + 50,
            y: -20,
            speed: Math.random() * 1.5 + 1.2,
            label: bugTypes[Math.floor(Math.random() * bugTypes.length)],
            hp: 1
          });
          state.lastEnemyTime = now;
        }

        // Update Lasers
        for (let i = state.lasers.length - 1; i >= 0; i--) {
          const laser = state.lasers[i];
          laser.y -= laser.speed;

          if (laser.y < 0) {
            state.lasers.splice(i, 1);
            continue;
          }

          // Laser collision with enemies
          for (let j = state.enemies.length - 1; j >= 0; j--) {
            const enemy = state.enemies[j];
            if (
              laser.x > enemy.x - 30 &&
              laser.x < enemy.x + 30 &&
              laser.y > enemy.y - 15 &&
              laser.y < enemy.y + 15
            ) {
              // Destroy enemy & laser
              playExplosion();
              state.lasers.splice(i, 1);
              state.enemies.splice(j, 1);

              // Spawn particles
              for (let p = 0; p < 12; p++) {
                state.particles.push({
                  x: enemy.x,
                  y: enemy.y,
                  vx: (Math.random() - 0.5) * 6,
                  vy: (Math.random() - 0.5) * 6,
                  life: 1,
                  color: '#ff2a3b'
                });
              }

              state.score += 50;
              setScore(state.score);

              // Earn Coins at 150-point intervals
              if (state.score % 150 === 0) {
                awardCoins(10, 'BUG_PURGE_BOUNTY');
                setSessionCoins(c => c + 10);
              }
              break;
            }
          }
        }

        // Update Enemies
        for (let i = state.enemies.length - 1; i >= 0; i--) {
          const enemy = state.enemies[i];
          enemy.y += enemy.speed;

          // Bug passed defense line = Game Over
          if (enemy.y > 360) {
            state.isPlaying = false;
            setGameState('GAMEOVER');
            setHighScore(h => Math.max(h, state.score));
            notify('DEFENSE COMPROMISED', `FINAL SCORE: ${state.score} PTS`, 'level-up');
            break;
          }
        }

        // Update Particles
        for (let i = state.particles.length - 1; i >= 0; i--) {
          const p = state.particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.life -= 0.04;
          if (p.life <= 0) {
            state.particles.splice(i, 1);
          }
        }
      }

      // Render Player Turret
      const px = state.playerX;
      ctx.save();
      ctx.shadowColor = '#00ff66';
      ctx.shadowBlur = 10;
      ctx.fillStyle = '#00ff66';
      // Ship / Cannon
      ctx.beginPath();
      ctx.moveTo(px, 340);
      ctx.lineTo(px - 18, 370);
      ctx.lineTo(px + 18, 370);
      ctx.closePath();
      ctx.fill();

      // Core light
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(px, 355, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Render Lasers
      ctx.save();
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 12;
      ctx.fillStyle = '#00f0ff';
      state.lasers.forEach(laser => {
        ctx.fillRect(laser.x - 2, laser.y - 12, 4, 14);
      });
      ctx.restore();

      // Render Enemies (Bugs)
      ctx.save();
      state.enemies.forEach(enemy => {
        ctx.shadowColor = '#ff2a3b';
        ctx.shadowBlur = 8;
        ctx.strokeStyle = '#ff2a3b';
        ctx.strokeRect(enemy.x - 30, enemy.y - 12, 60, 24);
        ctx.fillStyle = '#16080e';
        ctx.fillRect(enemy.x - 30, enemy.y - 12, 60, 24);

        ctx.fillStyle = '#ff2a3b';
        ctx.font = '9px "Share Tech Mono", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(enemy.label, enemy.x, enemy.y);
      });
      ctx.restore();

      // Render Particles
      ctx.save();
      state.particles.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      animationId = requestAnimationFrame(gameLoop);
    };

    animationId = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="w-full flex-1 p-4 md:p-8 flex flex-col items-center justify-start select-none font-mono">
      <div className="w-full max-w-4xl space-y-6">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-xs md:text-sm text-[#ff2a3b] font-bold uppercase tracking-[0.25em] font-orbitron glow-red">
            CYBER MAINFRAME DEFENDER // SYSTEM PURGE
          </h2>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">
            INTERCEPT CORRUPTED KERNEL PACKETS TO SECURE THE CLOUD MAINFRAME
          </p>
        </div>

        {/* Game Stats Bar */}
        <div className="flex items-center justify-between border border-[#2a171e] bg-[#0c0d13] p-3 px-5 text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <span className="text-gray-500 uppercase">SCORE:</span>
            <span className="text-[#00ff66] font-bold text-sm glow-green">{score}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-500 uppercase">HIGH SCORE:</span>
            <span className="text-gray-100 font-bold">{highScore}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-500 uppercase">SESSION COINS:</span>
            <span className="text-[#ffd700] font-bold">+{sessionCoins}</span>
          </div>
        </div>

        {/* Game Screen Canvas with Overlay */}
        <div className="relative border border-[#ff2a3b]/40 bg-[#07080b] rounded-sm overflow-hidden bracket-box">
          
          <canvas
            ref={canvasRef}
            width={650}
            height={400}
            className="w-full h-[360px] md:h-[400px] block cursor-pointer"
            onClick={shootLaser}
          />

          {/* Idle / Start Overlay */}
          {gameState === 'IDLE' && (
            <div className="absolute inset-0 bg-black/85 flex flex-col items-center justify-center p-6 text-center space-y-4">
              <ShieldAlert className="w-12 h-12 text-[#ff2a3b] animate-bounce" />
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white uppercase font-orbitron">
                  MAINFRAME PURGE PROTOCOL
                </h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider max-w-md">
                  USE &larr; &rarr; OR A/D KEYS TO STEER. PRESS SPACEBAR OR CLICK TO FIRE LASERS. DESTROY CORRUPTED DATA PACKETS TO EARN HUD COINS!
                </p>
              </div>

              <button
                onClick={startGame}
                onMouseEnter={playHover}
                className="px-6 py-2.5 border border-[#00ff66] bg-[#00ff66]/10 text-[#00ff66] hover:bg-[#00ff66] hover:text-black font-bold uppercase tracking-widest text-xs transition-all shadow-[0_0_15px_rgba(0,255,102,0.4)]"
              >
                START DEFENSE PROTOCOL
              </button>
            </div>
          )}

          {/* Game Over Overlay */}
          {gameState === 'GAMEOVER' && (
            <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-6 text-center space-y-4">
              <div className="text-sm font-bold text-[#ff2a3b] uppercase font-orbitron glow-red">
                SYSTEM BUFFER OVERFLOW // GAME OVER
              </div>
              <div className="text-2xl font-black text-white font-orbitron">
                {score} <span className="text-xs text-gray-400 font-normal">POINTS</span>
              </div>
              <p className="text-[11px] text-[#ffd700] uppercase tracking-wider font-bold">
                +{sessionCoins} COINS ADDED TO YOUR SYSTEM WALLET
              </p>

              <button
                onClick={startGame}
                onMouseEnter={playHover}
                className="px-6 py-2 border border-[#ff2a3b] bg-transparent hover:bg-[#ff2a3b] text-[#ff2a3b] hover:text-black font-bold uppercase tracking-widest text-xs transition-all"
              >
                RESTART PURGE
              </button>
            </div>
          )}

        </div>

        {/* Mobile / Screen Controls */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            onClick={() => {
              stateRef.current.playerX = Math.max(30, stateRef.current.playerX - 25);
            }}
            className="px-4 py-2 border border-gray-700 bg-[#0d0e14] text-xs text-gray-300 uppercase active:bg-[#ff2a3b]"
          >
            &larr; STEER LEFT
          </button>

          <button
            onClick={shootLaser}
            className="px-6 py-2 border border-[#00f0ff] bg-[#00f0ff]/10 text-xs text-[#00f0ff] uppercase font-bold active:bg-[#00f0ff] active:text-black"
          >
            FIRE LASER (SPACE)
          </button>

          <button
            onClick={() => {
              stateRef.current.playerX = Math.min(620, stateRef.current.playerX + 25);
            }}
            className="px-4 py-2 border border-gray-700 bg-[#0d0e14] text-xs text-gray-300 uppercase active:bg-[#ff2a3b]"
          >
            STEER RIGHT &rarr;
          </button>
        </div>

      </div>
    </div>
  );
};

export default GamesView;
