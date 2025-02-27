
import React from 'react';
import { cn } from "@/lib/utils";

interface GameBoardProps {
  holes: boolean[];
  onHoleClick: (index: number) => void;
  activeHole: number | null;
}

const GameBoard: React.FC<GameBoardProps> = ({ holes, onHoleClick, activeHole }) => {
  return (
    <div className="grid grid-cols-3 gap-4 w-full max-w-[500px] aspect-square p-6 bg-gray-50 rounded-xl shadow-lg">
      {holes.map((_, index) => (
        <button
          key={index}
          onClick={() => onHoleClick(index)}
          className={cn(
            "relative w-full aspect-square rounded-full transition-all duration-200",
            "bg-gray-800/90 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400",
            "before:absolute before:inset-0 before:rounded-full before:shadow-inner",
            "overflow-hidden"
          )}
        >
          {activeHole === index && (
            <div className="absolute inset-0 flex items-center justify-center animate-fade-in">
              <div className="w-4/5 h-4/5 bg-gray-600 rounded-full animate-bounce transition-transform">
                <div className="w-full h-full relative">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full" />
                  <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full" />
                  <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-3 h-2 bg-pink-300 rounded-full" />
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
