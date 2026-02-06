import { useEffect } from 'react';
import { triggerConfetti } from '@/lib/confetti';

export function ValentineSuccessView() {
  useEffect(() => {
    // Trigger confetti explosion when component mounts
    triggerConfetti();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center space-y-8 animate-scale-in px-4">
        {/* Celebratory GIF */}
        <div className="flex justify-center mb-8">
          <img 
            src="https://media.giphy.com/media/g5R9dok94mrIvplmZd/giphy.gif"
            alt="Celebration"
            className="w-full max-w-md h-auto rounded-3xl shadow-2xl"
          />
        </div>
        
        {/* Success message */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-display text-pink-600 animate-fade-in">
            Knew you would say yes! ❤️
          </h1>
        </div>
      </div>
    </div>
  );
}
