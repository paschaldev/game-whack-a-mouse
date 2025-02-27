
import React from 'react';
import { Button } from "@/components/ui/button";

export type Difficulty = 'easy' | 'medium' | 'hard';

interface LevelSelectProps {
  onSelect: (difficulty: Difficulty) => void;
}

const LevelSelect: React.FC<LevelSelectProps> = ({ onSelect }) => {
  return (
    <div className="flex flex-col items-center gap-4 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Select Difficulty</h2>
      <div className="flex gap-4">
        <Button
          onClick={() => onSelect('easy')}
          className="bg-green-500 hover:bg-green-600"
        >
          Easy (9 holes)
        </Button>
        <Button
          onClick={() => onSelect('medium')}
          className="bg-yellow-500 hover:bg-yellow-600"
        >
          Medium (25 holes)
        </Button>
        <Button
          onClick={() => onSelect('hard')}
          className="bg-red-500 hover:bg-red-600"
        >
          Hard (100 holes)
        </Button>
      </div>
    </div>
  );
};

export default LevelSelect;
