import React from 'react';

interface QuizButtonProps {
    text: string;
    color: string;
    position: string;
    isCorrect: boolean;
    nextFrameId: string;
    onAnswer: (isCorrect: boolean, nextFrameId: string) => void;
}

const QuizButton: React.FC<QuizButtonProps> = ({ text, color, position, isCorrect, nextFrameId, onAnswer }) => {
    const handleClick = () => {
        onAnswer(isCorrect, nextFrameId);
    };

    return (
        <button
            style={{
                backgroundColor: color,
                position: 'absolute',
                [position]: '10px',
                padding: '10px 20px',
                borderRadius: '5px',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
            }}
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

export default QuizButton;
