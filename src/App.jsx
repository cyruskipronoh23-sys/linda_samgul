import React, { useState } from 'react';
import './App.css'; // Assuming you have styles defined here

const App = () => {
    const [message, setMessage] = useState('');
    const [showConfetti, setShowConfetti] = useState(false);

    const handleLoveButtonClick = () => {
        setMessage('You are loved!');
        setShowConfetti(true);
        // Hide confetti after 3 seconds
        setTimeout(() => setShowConfetti(false), 3000);
    };

    return (
        <div className='app'>
            <h1>My React Component</h1>
            <button onClick={handleLoveButtonClick}>❤️ Love</button>
            {message && <p>{message}</p>}
            {showConfetti && <div className='confetti'>🎉🎉🎉</div>}
        </div>
    );
};

export default App;
