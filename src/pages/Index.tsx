
import React, { useState } from 'react';
import EmojiWrapper from '@/components/ui/emoji-wrapper';
import FloatingEmojis from '@/components/ui/floating-emojis';
import SparkleText from '@/components/ui/sparkle-text';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [showHeart, setShowHeart] = useState(false);
  
  const emojis = ['✨', '🐱', '❤️', '🌸', '🌟', '💜', '😊', '🦄', '🍬'];
  
  const toggleHeart = () => {
    setShowHeart(!showHeart);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-lavender-light to-background flex flex-col items-center justify-center px-4">
      <FloatingEmojis emojis={emojis} count={15} />
      
      <Card className="w-full max-w-2xl p-8 rounded-xl shadow-lg bg-white/80 backdrop-blur-md border-lavender z-10">
        <div className="text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <EmojiWrapper emoji="✨" animationClass="sparkle" />
            <h1 className="text-5xl font-bold text-lavender-dark">
              <SparkleText text="Это тебе, лучик" />
            </h1>
            <EmojiWrapper emoji="✨" animationClass="sparkle" />
          </div>
          
          <p className="text-xl italic text-foreground/80 max-w-md mx-auto mb-6 font-serif">
            Ты так хочешь раскрасить весь мир, но мне нужны краски.
            Убегу с тобой от всего, что с тобой натворили
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {emojis.map((emoji, index) => (
              <EmojiWrapper 
                key={index} 
                emoji={emoji} 
                animationClass={
                  index % 4 === 0 ? 'float' : 
                  index % 4 === 1 ? 'pulse' : 
                  index % 4 === 2 ? 'wiggle' : 'sparkle'
                }
                className="text-3xl"
              />
            ))}
          </div>
          
          <Button 
            onClick={toggleHeart}
            className="bg-lavender hover:bg-lavender-dark text-white font-semibold px-6 py-2 rounded-full transition-all transform hover:scale-105"
          >
            Нажми меня
          </Button>
          
          {showHeart && (
            <div className="mt-8 animate-float">
              <Heart className="w-20 h-20 mx-auto text-accent fill-accent" />
              <p className="mt-4 text-lg text-accent-foreground leading-relaxed max-w-lg mx-auto">
                И даже если я вдруг умру, не грусти, это лишь новый этап моей жизни. 
                Может я не всегда могу вечно давать тебе тепло, но я буду башлять тебе чем-то свыше. 
                Останусь тебе чем-то тёплым, прости если я могу быть от мира далёким
              </p>
            </div>
          )}
        </div>
      </Card>
      
      <footer className="mt-8 text-center text-sm text-foreground/60 z-10">
        <p>С заботой и нежностью, 2025 💜</p>
      </footer>
    </div>
  );
};

export default Index;
