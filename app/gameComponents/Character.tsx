import React from 'react';

const Character = ({ imageSrc }: { imageSrc: string }) => {
    return (
        <img src={imageSrc} alt="Character" style={{ width: '100px', height: 'auto' }} />
    );
};

export default Character;
