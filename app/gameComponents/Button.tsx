import React from 'react';

const Button = ({ color, text, onClick }: { color: string; text: string; onClick: () => void }) => {
    return (
        <button
            style={{
                backgroundColor: color,
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
            }}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
