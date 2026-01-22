import React, { useState } from 'react';
import BackgroundAnimation from './components/BackgroundAnimation';
import ConfettiMessage from './components/ConfettiMessage';
import LoveButton from './components/LoveButton';

const App = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <BackgroundAnimation />
      
      {/* Main content with enhanced spacing */}
      <div className="relative z-10 text-center space-y-12 px-4">
        {/* Sparkle decorations */}
        <div className="absolute -top-20 left-0 text-6xl sparkle opacity-60">✨</div>
        <div className="absolute -top-16 right-4 text-5xl sparkle opacity-70" style={{ animationDelay: '0.5s' }}>⭐</div>
        <div className="absolute -bottom-16 left-8 text-5xl sparkle opacity-60" style={{ animationDelay: '1s' }}>💫</div>
        <div className="absolute -bottom-20 right-0 text-6xl sparkle opacity-70" style={{ animationDelay: '1.5s' }}>✨</div>
        
        <ConfettiMessage />
        <LoveButton />
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-50 font-light tracking-widest wave">
        Made with 💖 for you
      </div>
    </div>
  );
};

export default App;
