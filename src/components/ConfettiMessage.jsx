import React from 'react';
import { motion } from 'framer-motion';
import './ConfettiMessage.css';

const ConfettiMessage = () => {
  const hearts = [
    { id: 1, delay: 0, top: '10%', left: '10%' },
    { id: 2, delay: 1, top: '15%', right: '15%' },
    { id: 3, delay: 2, top: '60%', left: '5%' },
    { id: 4, delay: 0.5, top: '65%', right: '10%' },
  ];

  return (
    <div className="confetti-container relative">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-4xl"
          style={{
            top: heart.top,
            left: heart.left,
            right: heart.right,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: heart.delay,
          }}
        >
          💖
        </motion.div>
      ))}
      
      <motion.h1 
        className="fade-animation"
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
          duration: 1,
        }}
      >
        I Love You
      </motion.h1>
      
      <motion.h2 
        className="fade-animation"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          delay: 0.3,
        }}
      >
        from Norman
      </motion.h2>
    </div>
  );
};

export default ConfettiMessage;