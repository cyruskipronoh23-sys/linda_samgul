import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { motion, AnimatePresence } from 'framer-motion';

const LoveButton = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const messages = [
    "You're amazing! 💝",
    "You light up my world! ✨",
    "Forever and always! 💕",
    "You're my everything! 🌟",
    "Best person ever! 💖",
  ];

  const triggerConfetti = () => {
    setShowConfetti(true);
    setClicks(prev => prev + 1);
    setShowMessage(true);
    
    setTimeout(() => setShowConfetti(false), 5000);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <div className="flex flex-col items-center gap-8 relative mt-8">
      {/* Main Button - Clean Tailwind Design */}
      <div className="relative">
        {/* Glow effect layer */}
        <div className="absolute -inset-4 bg-gradient-to-r from-pink-600 via-rose-500 to-red-600 rounded-full opacity-75 blur-2xl animate-pulse"></div>
        
        {/* Button */}
        <button
          onClick={triggerConfetti}
          className="relative flex items-center gap-4 px-14 py-5 bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 hover:from-pink-600 hover:via-rose-600 hover:to-red-600 text-white text-2xl font-bold rounded-full shadow-2xl shadow-pink-500/50 hover:shadow-pink-600/60 transform hover:scale-105 active:scale-95 transition-all duration-200 ease-out border-2 border-pink-300/50"
        >
          <span className="text-3xl animate-bounce">❤️</span>
          <span className="tracking-wide">Click Me!</span>
          <span className="text-3xl animate-bounce delay-100">❤️</span>
        </button>
      </div>

      {/* Click counter */}
      <AnimatePresence>
        {clicks > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="px-10 py-4 bg-white/15 backdrop-blur-lg rounded-3xl border-2 border-white/30 shadow-2xl"
          >
            <motion.p 
              className="text-white text-xl font-bold flex items-center gap-3"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              Clicked {clicks} {clicks === 1 ? 'time' : 'times'}! 
              <motion.span 
                className="text-2xl"
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                💕
              </motion.span>
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pop-up message */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="absolute top-32 left-1/2 transform -translate-x-1/2 px-10 py-5 bg-gradient-to-r from-white to-pink-50 rounded-3xl shadow-2xl border-4 border-pink-300"
          >
            <motion.p 
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 text-2xl font-black whitespace-nowrap"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ backgroundSize: '200%' }}
            >
              {messages[clicks % messages.length]}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Love meter */}
      <AnimatePresence>
        {clicks > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
            className="w-96 px-8 py-6 bg-white/15 backdrop-blur-lg rounded-3xl border-2 border-white/30 shadow-2xl"
          >
            <motion.p 
              className="text-white text-lg font-bold mb-4 text-center flex items-center justify-center gap-2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
            >
              <span className="text-2xl">💘</span>
              Love Meter
              <span className="text-2xl">💘</span>
            </motion.p>
            
            <div className="w-full bg-black/40 rounded-full h-6 overflow-hidden border-2 border-white/30 shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-pink-400 via-red-500 to-rose-600 flex items-center justify-end pr-3 relative"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(clicks * 10, 100)}%` }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                />
                <span className="text-white text-sm font-bold drop-shadow-lg relative z-10">
                  {Math.min(clicks * 10, 100)}%
                </span>
              </motion.div>
            </div>
            
            <motion.p 
              className="text-white text-base text-center mt-4 font-semibold"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {clicks >= 10 ? '🔥 MAX LOVE! 🔥' : '✨ Keep clicking! ✨'}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced confetti */}
      <AnimatePresence>
        {showConfetti && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              numberOfPieces={800}
              recycle={false}
              colors={['#ff6b6b', '#ee5a6f', '#c44569', '#feca57', '#ff9ff3', '#a8dadc', '#f4a261']}
              gravity={0.15}
              wind={0.01}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoveButton;