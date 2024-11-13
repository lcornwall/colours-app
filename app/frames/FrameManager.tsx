import React, { useState, useEffect } from 'react';
import Frame from './Frame';
import { frames } from '../../public/lib/data/framesData';
import { FrameConfig } from '../../public/lib/data/types';

interface FrameManagerProps {
    ageRange: string;
}

const FrameManager: React.FC<FrameManagerProps> = ({ ageRange }) => {
    const [currentFrameId, setCurrentFrameId] = useState<string | null>(null);
    const [frameData, setFrameData] = useState<{ [frameId: string]: FrameConfig } | null>(null);

    useEffect(() => {
        // Works but has a type issue in future... maybe
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

    return <Frame frame={frameData[currentFrameId]} onNavigate={handleNavigate} />;
};

export default FrameManager;
