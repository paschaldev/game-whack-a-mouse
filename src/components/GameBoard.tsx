
import React from 'react';
import { cn } from "@/lib/utils";

interface GameBoardProps {
  holes: boolean[];
  onHoleClick: (index: number) => void;
  activeHole: number | null;
  difficulty: 'easy' | 'medium' | 'hard';
}

const GameBoard: React.FC<GameBoardProps> = ({ holes, onHoleClick, activeHole, difficulty }) => {
  const gridConfig = {
    easy: 'grid-cols-3',
    medium: 'grid-cols-5',
    hard: 'grid-cols-10'
  };

  const holeSize = {
    easy: 'aspect-square',
    medium: 'aspect-square scale-[0.6]',
    hard: 'aspect-square scale-75'
  };

  const ratSize = {
    easy: 'w-4/5 h-4/5',
    medium: 'w-4/5 h-4/5',
    hard: 'w-2/3 h-2/3'
  };

  return (
    <div className={cn(
      "grid gap-2 w-full h-full max-h-[calc(100vh-16rem)] aspect-square p-4 bg-gray-50 rounded-xl shadow-lg",
      gridConfig[difficulty]
    )}>
      {holes.map((_, index) => (
        <button
          key={index}
          onClick={() => onHoleClick(index)}
          className={cn(
            "relative transition-all duration-200",
            "bg-gray-800/90 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400",
            "before:absolute before:inset-0 before:rounded-full before:shadow-inner",
            "overflow-hidden rounded-full",
            holeSize[difficulty]
          )}
        >
          {activeHole === index && (
            <div className="absolute inset-0 flex items-center justify-center animate-fade-in">
              <div className={cn(
                "bg-gray-600 rounded-full animate-bounce transition-transform",
                ratSize[difficulty]
              )}>
                {/* Enhanced rat appearance */}
                <div className="w-full h-full relative bg-gray-500 rounded-full overflow-hidden">
                  {/* Body with fur texture */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.2),_transparent_1px)]"></div>
                  </div>
                  
                  {/* Eyes with shine */}
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-black rounded-full">
                    <div className="absolute top-0 right-0 w-1 h-1 bg-white rounded-full opacity-75"></div>
                  </div>
                  <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-black rounded-full">
                    <div className="absolute top-0 right-0 w-1 h-1 bg-white rounded-full opacity-75"></div>
                  </div>
                  
                  {/* Enhanced nose */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-3 h-2 bg-pink-300 rounded-full shadow-inner"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-400/30"></div>
                  </div>
                  
                  {/* Enhanced ears with inner detail */}
                  <div className="absolute -top-1 left-1/4 w-3 h-3 bg-gray-400 rounded-full transform -rotate-45 overflow-hidden">
                    <div className="absolute inset-[15%] bg-pink-200/50 rounded-full"></div>
                  </div>
                  <div className="absolute -top-1 right-1/4 w-3 h-3 bg-gray-400 rounded-full transform rotate-45 overflow-hidden">
                    <div className="absolute inset-[15%] bg-pink-200/50 rounded-full"></div>
                  </div>
                  
                  {/* Whiskers */}
                  <div className="absolute top-1/2 left-1/6 w-3 h-px bg-gray-300 transform -rotate-15"></div>
                  <div className="absolute top-1/2 right-1/6 w-3 h-px bg-gray-300 transform rotate-15"></div>
                </div>
              </div>
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

export default GameBoard;
