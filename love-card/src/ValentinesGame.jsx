import { useState } from "react";
import "./ValentinesGame.css";

export default function ValentinesGame() {
  const [score, setScore] = useState(0);
  const [showHeart, setShowHeart] = useState(false);

  const handleClick = () => {
    setScore(score + 1);
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 500);
  };

  return (
    <div className="game-container">
      <h2 className="game-title">❤️ Valentine's Clicker Game ❤️</h2>
      <p className="game-instructions">
        Click the heart to earn love points! 💕
      </p>
      <div className="heart-container" onClick={handleClick}>
        <span className="heart">❤️</span>
      </div>
      {showHeart && <span className="floating-heart">❤️</span>}
      <p className="score">Love Points: {score}</p>
    </div>
  );
}
