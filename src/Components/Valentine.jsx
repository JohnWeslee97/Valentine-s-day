import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../css/Valentine.css";
import Couplesdate from "../assets/Couplesdate.gif";
import Couplelove from "../assets/Couplelove.gif";

const Valentine = () => {
  const navigate = useNavigate();

  const [accepted, setAccepted] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const noBtnRef = useRef(null);
  const timerRef = useRef(null);

  // 🔥 Escape Logic (Desktop + Mobile)
  const escapeButton = (clientX, clientY) => {
    if (!noBtnRef.current) return;

    const btnRect = noBtnRef.current.getBoundingClientRect();

    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;

    const distance = Math.hypot(
      clientX - btnCenterX,
      clientY - btnCenterY
    );

    const escapeDistance = 80;

    if (distance < escapeDistance) {
      const angle = Math.atan2(
        btnCenterY - clientY,
        btnCenterX - clientX
      );

      const moveDistance = 120;

      const newX = Math.cos(angle) * moveDistance;
      const newY = Math.sin(angle) * moveDistance;

      setNoPos({ x: newX, y: newY });

      // Reset position after 1 second
      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        setNoPos({ x: 0, y: 0 });
      }, 1000);
    }
  };

  const handleMouseMove = (e) => {
    escapeButton(e.clientX, e.clientY);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    escapeButton(touch.clientX, touch.clientY);
  };

  // 🧹 Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <div className="wrapper active">

      {/* 💖 Floating Hearts */}
      <div className="hearts">
        {[...Array(20)].map((_, i) => {
          const size = Math.random() * 20 + 10;
          const left = Math.random() * 100;
          const delay = Math.random() * 5;
          const duration = Math.random() * 5 + 5;

          return (
            <span
              key={i}
              className="heart"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}
      </div>

      <div
        className="container"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        <motion.div
          className="card"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <AnimatePresence mode="wait">
            {!accepted ? (
              <motion.div
                key="question"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h1>Will You Be My Valentine...? </h1>

                <img src={Couplesdate} alt="Couple Date" />

                <p className="romantic-line">
                  From the moment our love started, I fall in love with you more
                  and more every day, my Chella Kutti 💖
                </p>

                <div className="btn-group">
                  <motion.button
                    className="yes"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setAccepted(true)}
                  >
                    Yes 💖
                  </motion.button>

                  <motion.button
                    ref={noBtnRef}
                    className="no"
                    animate={{ x: noPos.x, y: noPos.y }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 20,
                    }}
                  >
                    No 😜
                  </motion.button>
                </div>

                <p className="sub">
                  Try to catch the No button 😜
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                className="result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h2>You Just Made My Heart Explode 🤍</h2>

                <img src={Couplelove} alt="Couple Love" />

                <h3>Happy Valentine's Day Chella Kutti 🫂</h3>

                <h4 className="forjemi">
                  Ne enoda partner ra kedichathucku enacku romba happy 🥹...
                  Love jemi pa 🤍
                </h4>

                <button
                  onClick={() => navigate("/journey")}
                  className="quiznav"
                >
                  Start Our Journey 💕
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Valentine;
