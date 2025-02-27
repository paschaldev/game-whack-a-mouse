
import React, { useState, useEffect, useCallback } from 'react';
import GameBoard from '@/components/GameBoard';
import ScoreBoard from '@/components/ScoreBoard';
import GameOver from '@/components/GameOver';
import { toast } from 'sonner';

const INITIAL_SPEED = 1500;
const SPEED_DECREASE_RATE = 0.9;
const HOLES_COUNT = 9;

const Index = () => {
  const [holes] = useState<boolean[]>(new Array(HOLES_COUNT).fill(false));
  const [activeHole, setActiveHole] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [speed, setSpeed] = useState(INITIAL_SPEED);
  const [gameOver, setGameOver] = useState(false);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('whackARatHighScore');
    return saved ? parseInt(saved) : 0;
  });

  const updateHighScore = useCallback((newScore: number) => {
    if (newScore > highScore) {
      setHighScore(newScore);
      localStorage.setItem('whackARatHighScore', newScore.toString());
    }
  }, [highScore]);

  const handleHoleClick = (index: number) => {
    if (index === activeHole) {
      setScore(prev => {
        const newScore = prev + 1;
        if (newScore % 5 === 0) {
          setLevel(l => l + 1);
          setSpeed(s => s * SPEED_DECREASE_RATE);
          toast(`Level ${level + 1}!`);
        }
        return newScore;
      });
      setActiveHole(null);
    }
  };

  const startNewGame = useCallback(() => {
    setScore(0);
    setLevel(1);
    setSpeed(INITIAL_SPEED);
    setGameOver(false);
    setActiveHole(null);
    toast('Game Started! Click the rats to score points!');
  }, []);

  useEffect(() => {
    if (gameOver) return;

    const showRat = () => {
      const newHole = Math.floor(Math.random() * HOLES_COUNT);
      setActiveHole(newHole);

      const hideTimeout = setTimeout(() => {
        setActiveHole(null);
        setGameOver(true);
        updateHighScore(score);
      }, speed);

      return hideTimeout;
    };

    const moveInterval = setInterval(showRat, speed);
    const initialTimeout = showRat();

    return () => {
      clearInterval(moveInterval);
      clearTimeout(initialTimeout);
    };
  }, [speed, gameOver, score, updateHighScore]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-8 p-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <h1 className="text-3xl font-bold text-gray-900">Whack-a-Rat</h1>
      <ScoreBoard score={score} level={level} highScore={highScore} />
      <GameBoard
        holes={holes}
        onHoleClick={handleHoleClick}
        activeHole={activeHole}
      />
      {gameOver && (
        <GameOver
          score={score}
          highScore={highScore}
          onRestart={startNewGame}
        />
      )}
    </div>
  );
};

export default Index;
