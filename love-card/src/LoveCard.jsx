import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import "./LoveCard.css";

export default function LoveCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const audioRef = useRef(new Audio("/love-song.mp3"));

  const handleOpen = () => {
    setIsOpen(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const handlePlaySong = () => {
    if (!audioRef.current.paused) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    audioRef.current.play();
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
          <div className="card-front">Tap to Open 💌</div>
        ) : (
          <div className="card-back">
            <p className="message">Happy Valentine's Day! 💖</p>
            <p className="sub-message">
              You are my greatest adventure, my happiest moment, and my forever
              love.
            </p>
            <button className="play-button" onClick={handlePlaySong}>
              Play Song 🎶
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
