import React, { useState, useEffect } from 'react';
import Frame from './Frame';
import { frames } from '../../public/lib/data/framesData';
import { FrameConfig } from '../../public/lib/data/types';
import './Frames.css';

interface FrameManagerProps {
    ageRange: string;
}

const FrameManager: React.FC<FrameManagerProps> = ({ ageRange }) => {
    const [currentFrameId, setCurrentFrameId] = useState<string | null>(null);
    const [frameData, setFrameData] = useState<{ [frameId: string]: FrameConfig } | null>(null);
    const [newGameFrameId, setNewGameFrameId] = useState<string | null>(null);

    const [touchStartY, setTouchStartY] = useState<number | null>(null);

    useEffect(() => {
        if (frames[ageRange]) {
            const availableFrames = frames[ageRange].frames;
            setCurrentFrameId(Object.keys(availableFrames)[0]);
            setFrameData(availableFrames);

            const startFrame = availableFrames[Object.keys(availableFrames)[0]];
            const newGameFrameObject = startFrame.objects.find(obj => obj.newGameFrame);
            if (newGameFrameObject && newGameFrameObject.newGameFrame) {
                setNewGameFrameId(newGameFrameObject.newGameFrame.toString());
            } else {
                console.warn("No `newGameFrame` defined in the start frame.");
            }
        } else {
            console.error(`No frames available for age group: ${ageRange}`);
        }
    }, [ageRange]);

    const navigateToNewGameFrame = () => {
        if (frameData && newGameFrameId && frameData[newGameFrameId]) {
            setCurrentFrameId(newGameFrameId);
        } else {
            console.warn("New game frame is not available in the current frame data.");
        }
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartY === null) return;
        const touchEndY = e.changedTouches[0].clientY;
        const swipeDistance = touchStartY - touchEndY;
        if (swipeDistance > 50) {
            navigateToNewGameFrame();
        }
        setTouchStartY(null);
    };

    if (!frameData || !currentFrameId) {
        return <div>Loading...</div>;
    }

    return (
        <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="frame-manager"
        >
            <Frame frame={frameData[currentFrameId]} onNavigate={setCurrentFrameId} />
            <button onClick={navigateToNewGameFrame} className="arrow-button">↑</button>
        </div>
    );
};

export default FrameManager;

