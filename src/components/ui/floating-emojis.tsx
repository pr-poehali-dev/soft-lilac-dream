
import React, { useState, useEffect } from 'react';

interface FloatingEmojisProps {
  emojis: string[];
  count?: number;
}

const FloatingEmojis: React.FC<FloatingEmojisProps> = ({ 
  emojis,
  count = 10
}) => {
  const [floatingEmojis, setFloatingEmojis] = useState<Array<{
    id: number;
    emoji: string;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
  }>>([]);
  
  useEffect(() => {
    const newEmojis = Array.from({ length: count }, (_, i) => ({
      id: i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.8,
      duration: Math.random() * 20 + 20,
      delay: -Math.random() * 20
    }));
    
    setFloatingEmojis(newEmojis);
  }, [emojis, count]);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingEmojis.map((item) => (
        <div
          key={item.id}
          className="absolute opacity-70"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            fontSize: `${item.size}rem`,
            animation: `float ${item.duration}s ease-in-out infinite`,
            animationDelay: `${item.delay}s`,
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingEmojis;
