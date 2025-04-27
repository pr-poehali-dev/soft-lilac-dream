
import React, { useState, useCallback } from 'react';

interface SparkleTextProps {
  text: string;
  color?: string;
}

const SparkleText: React.FC<SparkleTextProps> = ({ 
  text,
  color = '#ffb6c1'
}) => {
  const [sparkles, setSparkles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
  }>>([]);
  
  const createSparkle = useCallback((x: number, y: number) => {
    const sparkle = {
      id: Date.now(),
      x,
      y,
      size: Math.random() * 10 + 5
    };
    
    setSparkles(current => [...current, sparkle]);
    
    // Remove sparkle after animation
    setTimeout(() => {
      setSparkles(current => current.filter(s => s.id !== sparkle.id));
    }, 1000);
  }, []);
  
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Create sparkle only occasionally for performance
    if (Math.random() > 0.9) {
      createSparkle(x, y);
    }
  }, [createSparkle]);

  return (
    <div 
      className="relative inline-block cursor-default"
      onMouseMove={handleMouseMove}
    >
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: color,
            borderRadius: '50%'
          }}
        />
      ))}
      <span className="relative z-10">{text}</span>
    </div>
  );
};

export default SparkleText;
