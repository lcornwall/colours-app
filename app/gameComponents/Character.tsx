import React from 'react';

const Character = ({ imageSrc }: { imageSrc: string }) => {
    return (
        <img src={imageSrc} alt="Character" style={{ width: '550px', height: '500px' }} />
    )
};

export default Character;
