
import React from 'react';

interface ScoreBoardProps {
  score: number;
  level: number;
  highScore: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, level, highScore }) => {
  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-[500px] p-6">
      <div className="flex justify-between w-full">
        <div className="flex flex-col items-center">
          <span className="text-sm font-medium text-gray-500">Level</span>
          <span className="text-2xl font-bold">{level}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm font-medium text-gray-500">Score</span>
          <span className="text-2xl font-bold">{score}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm font-medium text-gray-500">Best</span>
          <span className="text-2xl font-bold">{highScore}</span>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
