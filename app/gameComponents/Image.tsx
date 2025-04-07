import React from 'react';

const Image = ({ imageSrc }: { imageSrc: string }) => {
    return (
        <img
            src={imageSrc}
            alt="Image"
            style={{
                width: '150px',
                height: '150px',
                objectFit: 'contain',
                transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
            }}
        />
    );
};

export default Image;
