import React, { useState, useEffect } from 'react';
import { frames } from '../../public/lib/data/framesData';

interface FrameConfig {
    title: string;
    content: string;
    nextFrameId?: string;
}

interface FrameProps {
    ageRange: string;
}

const Frame: React.FC<FrameProps> = ({ ageRange }) => {
    const [currentFrameId, setCurrentFrameId] = useState<string | null>(null);
    const [frameData, setFrameData] = useState<{ [frameId: string]: FrameConfig } | null>(null);

    useEffect(() => {
        if (frames[ageRange]) {
            const availableFrames = frames[ageRange].frames;
            setCurrentFrameId(Object.keys(availableFrames)[0]);
            setFrameData(availableFrames);
        } else {
            console.error(`No frames available for age group: ${ageRange}`);
        }
    }, [ageRange]);

    const handleNavigate = (nextFrameId: string) => {
        if (frameData && frameData[nextFrameId]) {
            setCurrentFrameId(nextFrameId);
        }
    };

    if (!frameData || !currentFrameId) {
        return <div>Loading...</div>;
    }

    const { title, content, nextFrameId } = frameData[currentFrameId];

    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
            {nextFrameId && <button onClick={() => handleNavigate(nextFrameId)}>Next</button>}
        </div>
    );
};

export default Frame;
