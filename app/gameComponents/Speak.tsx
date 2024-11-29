import React from 'react';

const Speak = ({ text }: { text: string }) => {
    return (
        <div style={{
            position: 'relative',
            backgroundColor: 'white',
            padding: '5px',
            borderRadius: '10px',
            fontSize: '16px',
            maxWidth: '200px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            margin: '10px',
        }}>
            {text}
            <div style={{
                position: 'absolute',
                bottom: '-10px',
                left: '20px',
                width: '0',
                height: '0',
                borderStyle: 'solid',
                borderWidth: '10px 10px 0 10px',
                borderColor: 'white transparent transparent transparent',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            }}></div>
        </div>
    );
};

export default Speak;
