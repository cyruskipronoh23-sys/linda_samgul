import React from 'react';
import './ConfettiMessage.css'; // Ensure you create this CSS file for styles

const ConfettiMessage = () => {
  return (
    <div className="confetti-container">
      <h1 className="fade-animation">I Love You</h1>
      <h2 className="fade-animation">from Norman</h2>
    </div>
  );
};

export default ConfettiMessage;