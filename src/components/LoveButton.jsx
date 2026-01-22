import React from 'react';
import Confetti from 'react-confetti';
import { useState } from 'react';

const LoveButton = () => {
    const [showConfetti, setShowConfetti] = useState(false);

    const triggerConfetti = () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
    };

    return (
        <div>
            <button onClick={triggerConfetti} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', background: 'pink', border: 'none', borderRadius: '5px', }}> ❤️ Click Me! </button>
            {showConfetti && <Confetti numberOfPieces={300} recycle={false} />}
        </div>
    );
};

export default LoveButton;