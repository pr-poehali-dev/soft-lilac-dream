import React, { useState, useEffect } from 'react';

interface FloatingEmojisProps {
  emojis: string[];
  count?: number;
}

const FloatingEmojis: React.FC<FloatingEmojisProps> = ({ 
  emojis, 
  count = 10 
}) => {
  const [floatingItems, setFloatingItems] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const newItems = [];
    
    for (let i = 0; i < count; i++) {
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      const delay = Math.random() * 10;
      const duration = 7 + Math.random() * 15;
      const size = 16 + Math.random() * 24;
      const leftPos = Math.random() * 100;
      
      newItems.push(
        <div 
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: `${leftPos}%`,
            bottom: '-20px',
            fontSize: `${size}px`,
            animation: `float ${duration}s ease-in-out ${delay}s infinite`,
            opacity: 0.6 + Math.random() * 0.4,
          }}
        >
          {randomEmoji}
        </div>
      );
    }
    
    setFloatingItems(newItems);
  }, [emojis, count]);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {floatingItems}
    </div>
  );
};

export default FloatingEmojis;
