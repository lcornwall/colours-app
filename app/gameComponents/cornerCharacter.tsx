import React from 'react';

const cornerCharacter = ({ imageSrc }: { imageSrc: string }) => {
    return (
        <img src={imageSrc} alt="Character" style={{ width: '90px', height: '130px' }} />
    )
};

export default cornerCharacter;
