import React, { useEffect, useState } from 'react';

const ModernCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target;
      setIsHoveringClickable(
        target.closest('a, button, [role="button"], [onclick], [href]')
      );
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Configuration
  const baseSize = isHoveringClickable ? 48 : 32;
  const ringCount = 3;
  const color = 'rgba(255, 153, 51, 0.6)'; // #ff9933 with 60% opacity

  return (
    <div
      className="fixed pointer-events-none z-[1]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.2s ease-out, height 0.2s ease-out',
        willChange: 'transform'
      }}
    >
      {/* Concentric rings with reduced opacity */}
      {Array.from({ length: ringCount }).map((_, i) => {
        const size = baseSize + i * 16;
        const opacity = 0.5 - i * 0.15; // Reduced opacity
        return (
          <div
            key={`ring-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              border: `1px solid ${color}`,
              opacity: opacity,
              animation: `spin-${i % 2 === 0 ? 'cw' : 'ccw'} ${8 + i * 2}s linear infinite`
            }}
          />
        );
      })}

      {/* Center dot with exact #ff9933 color */}
      <div
        className="absolute rounded-full transition-all"
        style={{
          width: isHoveringClickable ? '12px' : '8px',
          height: isHoveringClickable ? '12px' : '8px',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#ff9933',
          opacity: 0.7 // Reduced opacity
        }}
      />

      {/* Crosshair lines with correct color */}
      <div
        className="absolute"
        style={{
          width: '2px',
          height: `${baseSize * 0.6}px`,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#ff9933',
          opacity: 0.5 // Reduced opacity
        }}
      />
      <div
        className="absolute"
        style={{
          width: `${baseSize * 0.6}px`,
          height: '2px',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#ff9933',
          opacity: 0.5 // Reduced opacity
        }}
      />
    </div>
  );
};

export default ModernCursor;