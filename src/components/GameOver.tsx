
import React from 'react';
import { Button } from "@/components/ui/button";

interface GameOverProps {
  score: number;
  highScore: number;
  onRestart: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ score, highScore, onRestart }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center animate-fade-in">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full mx-4 animate-scale-in">
        <h2 className="text-2xl font-bold text-center mb-6">Game Over!</h2>
        <div className="space-y-4 mb-8">
          <p className="text-center">
            Score: <span className="font-bold text-xl">{score}</span>
          </p>
          <p className="text-center">
            Best: <span className="font-bold text-xl">{highScore}</span>
          </p>
        </div>
        <Button 
          onClick={onRestart}
          className="w-full bg-gray-900 hover:bg-gray-800 text-white transition-colors"
        >
          Play Again
        </Button>
      </div>
    </div>
  );
};

export default GameOver;
