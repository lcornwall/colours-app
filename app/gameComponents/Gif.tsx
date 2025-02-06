import React from 'react';

const Gif = ({ imageSrc }: { imageSrc: string }) => {
    return (
        <img src={imageSrc} alt="Character" style={{ width: '200px', height: '200px' }} />
    )
};

export default Gif;
