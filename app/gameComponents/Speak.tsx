import React from 'react';

const Speak = ({ text }: { text: string }) => {
    return (
        <div style={{
            backgroundColor: 'white',
            padding: '10px',
            borderRadius: '5px',
            fontSize: '16px',
            maxWidth: '200px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
        }}>
            {text}
        </div>
    );
};

export default Speak;
