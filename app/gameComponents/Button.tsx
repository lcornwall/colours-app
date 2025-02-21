import React, { useState } from 'react';

const Button = ({ color, text, onClick }: { color: string; text?: string; onClick: () => void }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isTextEmpty = !text || text.trim() === '';

    return (
        <button
            style={{
                backgroundColor: color,
                color: 'white',
                padding: isTextEmpty ? '30px' : '10px 20px',
                border: 'none',
                borderRadius: isTextEmpty ? '50px' : '5px',
                width: isTextEmpty ? (isHovered ? '90px' : '80px') : 'auto',
                height: isTextEmpty ? (isHovered ? '90px' : '80px') : 'auto',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: isTextEmpty ? '0px' : '16px',
                transition: 'all 0.2s ease-in-out' // Smooth transition for hover effect
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;

