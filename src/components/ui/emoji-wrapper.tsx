
import React from 'react';

interface EmojiWrapperProps {
  emoji: string;
  animationClass?: 'float' | 'pulse' | 'wiggle' | 'sparkle';
  className?: string;
}

const EmojiWrapper: React.FC<EmojiWrapperProps> = ({ 
  emoji, 
  animationClass = 'float',
  className = ''
}) => {
  return (
    <span className={`emoji inline-block text-2xl ${animationClass === 'float' ? 'animate-float' : 
      animationClass === 'pulse' ? 'animate-pulse' : 
      animationClass === 'wiggle' ? 'animate-wiggle' : ''
    } ${className}`}>
      {emoji}
    </span>
  );
};

export default EmojiWrapper;
