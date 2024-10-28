import React from 'react';

interface BackgroundProps {
    imageSrc: string;
}

const Background: React.FC<BackgroundProps> = ({ imageSrc }) => {
    return (
        <div
            className="background-image"
            style={{ backgroundImage: `url(${imageSrc})` }}
        ></div>
    );
};

export default Background;
