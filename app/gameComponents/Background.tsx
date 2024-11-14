import React from 'react';

const Background = ({ imageSrc }: { imageSrc: string }) => {
    return (
        <img
            src={imageSrc}
            alt="Background"
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 0,
            }}
        />
    );
};

export default Background;
