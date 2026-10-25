import React, { useEffect, useRef } from 'react';

const CyberWhale = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight || 450);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight || 450;
    };
    window.addEventListener('resize', handleResize);

    // Particles system (bioluminescent embers & cyber data packets)
    const particles = [];
    const particleCount = 70;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.5 + 0.8,
        speedX: (Math.random() - 0.5) * 0.8 - 0.6,
        speedY: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.7 + 0.2,
        color: Math.random() > 0.4 ? '#ff2a55' : '#ff00aa'
      });
    }

    // Creature position and physics
    let time = 0;
    let targetX = width * 0.5;
    let targetY = height * 0.52;
    let posX = targetX;
    let posY = targetY;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    // Draw Cybernetic Whale Frame
    const drawWhale = (cx, cy, t) => {
      ctx.save();
      ctx.translate(cx, cy);

      const tilt = Math.sin(t * 1.5) * 0.05 + (targetY - posY) * 0.0008;
      ctx.rotate(tilt);

      const scale = Math.min(width / 800, 1) * 0.95;
      ctx.scale(scale, scale);

      // Bioluminescent Ambient Underglow
      const glowGrad = ctx.createRadialGradient(0, 20, 10, 0, 20, 220);
      glowGrad.addColorStop(0, 'rgba(255, 30, 90, 0.4)');
      glowGrad.addColorStop(0.5, 'rgba(230, 0, 70, 0.15)');
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.ellipse(0, 20, 240, 140, 0, 0, Math.PI * 2);
      ctx.fill();

      // Main Whale Silhouette & Armored Hull
      ctx.shadowColor = '#ff2a55';
      ctx.shadowBlur = 20;

      // Body gradient
      const bodyGrad = ctx.createLinearGradient(-220, -50, 180, 80);
      bodyGrad.addColorStop(0, '#15060b');
      bodyGrad.addColorStop(0.3, '#320d18');
      bodyGrad.addColorStop(0.7, '#600f28');
      bodyGrad.addColorStop(1, '#ff2a55');

      // Main Body Path
      ctx.beginPath();
      ctx.moveTo(-180, -20); // Snout
      // Top arch
      ctx.bezierCurveTo(-140, -90, 40, -85, 120, -30);
      // Towards tail
      const tailWag = Math.sin(t * 2.5) * 22;
      ctx.quadraticCurveTo(170, -10, 210, tailWag - 10);
      // Tail Fluke Top
      ctx.lineTo(245, tailWag - 38);
      ctx.quadraticCurveTo(230, tailWag, 255, tailWag + 10);
      ctx.lineTo(240, tailWag + 25);
      // Tail Fluke Bottom
      ctx.quadraticCurveTo(180, tailWag + 20, 130, 30);
      // Belly Curve
      ctx.bezierCurveTo(40, 85, -100, 80, -170, 25);
      // Snout lower jaw
      ctx.quadraticCurveTo(-185, 5, -180, -20);
      ctx.closePath();
      ctx.fillStyle = bodyGrad;
      ctx.fill();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#ff3366';
      ctx.stroke();

      // Rib & Armor Panel Cyber Stripes (Ventral Grooves)
      ctx.shadowBlur = 10;
      ctx.strokeStyle = '#ff2a66';
      ctx.lineWidth = 1.5;
      for (let i = -140; i <= 60; i += 22) {
        ctx.beginPath();
        const startY = -15 + Math.sin((i + 140) * 0.02) * 20;
        const endY = 45 - Math.sin((i + 140) * 0.02) * 15;
        ctx.moveTo(i, startY);
        ctx.quadraticCurveTo(i + 12, (startY + endY) / 2, i + 8, endY);
        ctx.stroke();
      }

      // Bioluminescent Cybernetic Eye
      const eyeX = -135;
      const eyeY = -22;
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 15;
      ctx.fillStyle = '#00f0ff';
      ctx.beginPath();
      ctx.arc(eyeX, eyeY, 4.5, 0, Math.PI * 2);
      ctx.fill();

      // Eye pupil slit
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(eyeX, eyeY, 2, 0, Math.PI * 2);
      ctx.fill();

      // Pectoral Fin (Armored Wing)
      ctx.shadowColor = '#ff2a55';
      ctx.shadowBlur = 25;
      const finWave = Math.sin(t * 2) * 12;
      ctx.beginPath();
      ctx.moveTo(-45, 15);
      ctx.bezierCurveTo(-15, 65, 45, 115 + finWave, -10, 135 + finWave);
      ctx.quadraticCurveTo(-35, 90, -55, 30);
      ctx.closePath();

      const finGrad = ctx.createLinearGradient(-45, 15, -10, 135);
      finGrad.addColorStop(0, '#360916');
      finGrad.addColorStop(0.6, '#b01438');
      finGrad.addColorStop(1, '#ff3366');
      ctx.fillStyle = finGrad;
      ctx.fill();
      ctx.strokeStyle = '#ff5c8a';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Dorsal Cyber Ridge Nodes
      ctx.fillStyle = '#00f0ff';
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 12;
      for (let d = -60; d <= 80; d += 35) {
        const ridgeY = -52 - Math.sin(t * 3 + d) * 3;
        ctx.beginPath();
        ctx.arc(d, ridgeY, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    // Render loop
    const render = () => {
      time += 0.02;

      // Soft ease towards target
      posX += (targetX - posX) * 0.035;
      posY += (targetY - posY) * 0.035;

      ctx.clearRect(0, 0, width, height);

      // Digital Grid Floor & Waves in bottom
      ctx.strokeStyle = 'rgba(255, 42, 85, 0.08)';
      ctx.lineWidth = 1;
      const horizonY = height * 0.78;
      for (let y = horizonY; y < height; y += 18) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Render Floating Embers & Data Packets
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY + Math.sin(time + p.x) * 0.2;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.save();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * (0.6 + Math.sin(time * 3 + p.x) * 0.4);
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Render Floating Cyber Whale with vertical float oscillation
      const floatY = posY + Math.sin(time * 1.6) * 14;
      drawWhale(posX, floatY, time);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[420px] md:min-h-[480px] flex flex-col items-center justify-center overflow-hidden select-none bg-gradient-to-b from-[#090a0f] via-[#0c060a] to-[#08090d]">
      
      {/* Top Banner Text as in Figma Design Image 3 */}
      <div className="absolute top-4 left-0 right-0 z-20 text-center px-4 pointer-events-none">
        <p className="text-[11px] md:text-xs text-gray-300 font-mono tracking-[0.22em] uppercase max-w-2xl mx-auto leading-relaxed">
          SWIMMING THROUGH A VAST NETWORK OF INTERCONNECTED DEVICES AND SERVERS, SPREADING CODE AND INNOVATION ACROSS THE GLOBE
        </p>
        <p className="text-[9px] text-[#ff2a3b]/70 font-mono tracking-[0.3em] uppercase mt-1">
          ARTWORK GENERATED WITH MIDJOURNEY // CYBERNETIC DATA CORE
        </p>
      </div>

      {/* Interactive Cyber Canvas */}
      <canvas 
        ref={canvasRef} 
        className="w-full h-full block cursor-crosshair z-10" 
      />

      {/* Cyber Corner HUD Brackets for the Viewport */}
      <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-[#ff2a3b] pointer-events-none z-20" />
      <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-[#ff2a3b] pointer-events-none z-20" />
      <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-[#ff2a3b] pointer-events-none z-20" />
      <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-[#ff2a3b] pointer-events-none z-20" />

      {/* Bottom Hint */}
      <div className="absolute bottom-3 left-4 text-[9px] font-mono text-gray-500 uppercase tracking-widest pointer-events-none z-20">
        INTERACTIVE NODE: MOVE POINTER TO STEER CYBER ENTITY
      </div>
    </div>
  );
};

export default CyberWhale;
