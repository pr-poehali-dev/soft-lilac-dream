import React, { useState, useEffect } from 'react';

interface SparkleTextProps {
  text: string;
  className?: string;
}

const SparkleText: React.FC<SparkleTextProps> = ({ text, className = "" }) => {
  const [sparkles, setSparkles] = useState<React.ReactNode[]>([]);

  const createSparkle = () => {
    const sparkleColors = ['#ffb6c1', '#ffd700', '#9b87f5', '#87cefa'];
    
    return {
      id: Math.random(),
      color: sparkleColors[Math.floor(Math.random() * sparkleColors.length)],
      size: Math.random() * 10 + 5,
      style: {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        zIndex: 2,
      },
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const sparkle = createSparkle();
      setSparkles(prev => [...prev, 
        <span 
          key={sparkle.id} 
          className="sparkle" 
          style={{
            ...sparkle.style,
            backgroundColor: sparkle.color,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            borderRadius: '50%',
          }}
        />
      ]);

      setTimeout(() => {
        setSparkles(prev => prev.filter((_, i) => i !== 0));
      }, 2000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative inline-block ${className}`}>
      {sparkles}
      <span className="relative z-10">{text}</span>
    </div>
  );
};

export default SparkleText;
