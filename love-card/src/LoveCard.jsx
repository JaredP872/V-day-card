import { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import "./LoveCard.css";

export default function LoveCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <div className="card-container">
      {showConfetti && <Confetti />}
      <motion.div
        className={`card ${isOpen ? "flip" : ""}`}
        onClick={handleOpen}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isOpen ? 180 : 0 }}
        transition={{ duration: 1 }}
      >
        {!isOpen ? (
          <div className="card-front">Click to Open 💌</div>
        ) : (
          <div className="card-back">
            <p className="message">Happy Valentine's Day! 💖</p>
            <p className="sub-message">
              Roses are red, violets are blue, my heart is perfect because of
              you.🌹
            </p>
            <button
              className="play-button"
              onClick={() => new Audio("/love-song.mp3").play()}
            >
              Play Song 🎶
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
