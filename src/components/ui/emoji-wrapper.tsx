import React from 'react';

interface EmojiWrapperProps {
  emoji: string;
  className?: string;
  animationClass?: 'float' | 'pulse' | 'wiggle' | 'sparkle';
}

const EmojiWrapper: React.FC<EmojiWrapperProps> = ({ 
  emoji, 
  className = "", 
  animationClass = "float" 
}) => {
  return (
    <span 
      className={`emoji text-2xl inline-block cursor-pointer animate-${animationClass} ${className}`}
      role="img"
      aria-label="emoji"
    >
      {emoji}
    </span>
  );
};

export default EmojiWrapper;
