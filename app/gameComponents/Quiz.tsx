import React, { useState } from 'react';

interface QuizProps {
    correctAnswer: number;
    text: string;
    nextFrameId: string;
    color?: string;
    onNavigate: (frameId: string) => void;
}

const Quiz: React.FC<QuizProps> = ({ correctAnswer, text, nextFrameId, color = 'blue', onNavigate }) => {
    const [input, setInput] = useState('');
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const value = parseInt(input.trim(), 10);

        if (isNaN(value)) {
            setError('Enter a valid number.');
            return;
        }

        if (value === correctAnswer) {
            setError('');
            setSubmitted(true);
            onNavigate(nextFrameId);
        } else {
            setError('Incorrect. Try again!');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label style={{ marginBottom: '10px', fontSize: '18px' }}>
                {text}
            </label>
            <input
                type="number"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{
                    padding: '10px',
                    fontSize: '16px',
                    borderRadius: '5px',
                    marginBottom: '10px',
                    width: '150px',
                }}
                required
            />
            <button
                type="submit"
                style={{
                    backgroundColor: color,
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Submit
            </button>
            {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
        </form>
    );
};

export default Quiz;
