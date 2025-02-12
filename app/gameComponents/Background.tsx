import React from 'react';

const Background = ({ imageSrc }: { imageSrc: string }) => {
    // Check if the src is a color (i.e., no file extension after a '/')
    const isColor = !/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(imageSrc);

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: isColor ? imageSrc : undefined,  // Apply color if it's a color string
                backgroundImage: isColor ? undefined : `url(${imageSrc})`,  // Apply image if it's an image URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 0,
            }}
        />
    );
};

export default Background;

