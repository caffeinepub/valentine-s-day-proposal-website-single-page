import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ValentineProposalViewProps {
  onYes: () => void;
}

export function ValentineProposalView({ onYes }: ValentineProposalViewProps) {
  const [noCount, setNoCount] = useState(0);

  // List of increasingly desperate phrases for the No button
  const noButtonMessages = [
    "No",
    "Are you sure?",
    "Really?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You're breaking my heart"
  ];

  // Handle No button click
  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
  };

  // Get the current No button text based on click count
  const getNoButtonText = () => {
    if (noCount >= noButtonMessages.length) {
      return noButtonMessages[noButtonMessages.length - 1];
    }
    return noButtonMessages[noCount];
  };

  // Calculate Yes button size based on noCount (formula: fontSize = (noCount * 20) + 16)
  const yesFontSize = (noCount * 20) + 16;
  
  // Calculate No button size (shrinks slightly with each click)
  const noScale = Math.max(0.4, 1 - noCount * 0.1);

  // Determine which GIF to show (sad after 3 No clicks)
  const currentGif = noCount >= 3 
    ? "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif" // Sad/crying GIF
    : "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"; // Cute greeting GIF

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center space-y-8 animate-fade-in-up">
        {/* Greeting/Sad GIF */}
        <div className="flex justify-center mb-6">
          <img 
            src={currentGif}
            alt="Valentine's Day"
            className="w-full max-w-sm h-auto rounded-2xl shadow-lg"
          />
        </div>

        {/* Main question */}
        <div className="space-y-4 px-4">
          <h1 className="text-4xl md:text-5xl font-display text-gray-800 leading-tight">
            Will you be my Valentine?
          </h1>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6 px-4">
          <Button
            onClick={onYes}
            className="bg-pink-500 hover:bg-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-semibold rounded-full"
            style={{
              fontSize: `${yesFontSize}px`,
              padding: `${yesFontSize * 0.5}px ${yesFontSize * 1}px`,
            }}
          >
            Yes
          </Button>
          
          <Button
            onClick={handleNoClick}
            variant="outline"
            className="border-2 border-gray-400 text-gray-700 hover:bg-gray-100 transition-all duration-300 rounded-full font-semibold"
            style={{
              transform: `scale(${noScale})`,
              fontSize: '16px',
              padding: '12px 32px',
            }}
          >
            {getNoButtonText()}
          </Button>
        </div>
      </div>
    </div>
  );
}
