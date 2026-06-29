import React, { useEffect, useRef } from 'react';

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix falling code parameters
    const fontSize = 14;
    const columns = Math.ceil(canvas.width / 20);
    
    // An array of drops - one per column
    const drops: number[] = [];
    // Colors of columns (either blue or green)
    const dropColors: string[] = [];
    
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * -100; // random start above viewport
      dropColors[x] = Math.random() > 0.6 ? '#00f0ff' : '#39ff14'; // neon-blue or neon-green
    }

    // Binary characters to fall
    const chars = '01';

    const draw = () => {
      // Clear slightly with opacity to create trail effect
      ctx.fillStyle = 'rgba(2, 4, 10, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'Fira Code', monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Get a random binary character
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        const x = i * 20;
        const y = drops[i] * fontSize;

        // Draw character
        ctx.fillStyle = dropColors[i];
        
        // Add brightness to the head of the drop
        if (Math.random() > 0.98) {
          ctx.fillStyle = '#ffffff';
        }
        
        // Decrease opacity slightly based on position to make it fade
        ctx.fillText(text, x, y);

        // Reset drop to top if it goes off screen or randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
          dropColors[i] = Math.random() > 0.6 ? '#00f0ff' : '#39ff14';
        }

        // Increment drop y coordinate
        drops[i] += 0.85; // Speed multiplier
      }

      // Add a subtle scanline overlay or grid overlay directly on the canvas
      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-20"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
