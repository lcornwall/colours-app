import React from 'react';
import './Background.css';

const BlueButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <button
            style={{ backgroundColor: 'blue', color: 'white', padding: '10px', margin: '5px' }}
            onClick={onClick}
        >
            Click Me
        </button>
    );
};

export default BlueButton;
