import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BackgroundAnimation from './components/BackgroundAnimation';
import ConfettiMessage from './components/ConfettiMessage';
import LoveButton from './components/LoveButton';

const App = () => {
  const sparkles = [
    { id: 1, x: '-20%', y: '-10%', size: '6xl', delay: 0 },
    { id: 2, x: '85%', y: '-8%', size: '5xl', delay: 0.5 },
    { id: 3, x: '-15%', y: '85%', size: '5xl', delay: 1 },
    { id: 4, x: '90%', y: '88%', size: '6xl', delay: 1.5 },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <BackgroundAnimation />
      
      {/* Main content with enhanced spacing */}
      <div className="relative z-10 text-center space-y-12 px-4">
        {/* Animated Sparkle decorations */}
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className={`absolute text-${sparkle.size}`}
            style={{
              left: sparkle.x,
              top: sparkle.y,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: sparkle.delay,
            }}
          >
            ✨
          </motion.div>
        ))}
        
        <ConfettiMessage />
        <LoveButton />
      </div>

      {/* Bottom decorative element */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm font-light tracking-widest"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          y: [0, -5, 0],
        }}
        transition={{
          opacity: { duration: 3, repeat: Infinity },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        Made with 💖 for you
      </motion.div>
    </div>
  );
};

export default App;
