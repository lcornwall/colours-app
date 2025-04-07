import React from 'react';
import './Frames.css';
import ObjectComponent from '../gameComponents/ObjectComponents';
import Background from '../gameComponents/Background';

const Frame = ({ frame, onNavigate }: { frame: any; onNavigate: (frameId: string) => void }) => {
    const backgroundObject = frame.objects.find((obj: any) => obj.type === 'Background');

    return (
        <div className="frame-container">
            {backgroundObject && <Background imageSrc={backgroundObject.imageSrc} />}
            {frame.objects
                .filter((object: any) => object.type !== 'Background')
                .sort((a: any, b: any) => a.layer - b.layer)
                .map((object: any, index: number) => (
                    <ObjectComponent key={index} object={object} onNavigate={onNavigate} />
                ))}
        </div>
    );
};

export default Frame;