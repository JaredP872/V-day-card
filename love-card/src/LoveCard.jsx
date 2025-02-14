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
        transition={{ duration: 1, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
      >
        {!isOpen ? (
          <div className="card-front gradient-bg shadow-lg">
            <p className="text-glow">Tap to Open 💌</p>
          </div>
        ) : (
          <div className="card-back gradient-bg shadow-lg">
            <p className="message neon-text">Happy Valentine's Day! 💖</p>
            <p className="sub-message">
              Roses are red, violets are blue, my heart is perfect because of
              you.🌹
            </p>
            <div className="spotify-container">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/2SyMl67slr9yJA9YJFC3mV?utm_source=generator"
                width="100%"
                height="150"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
