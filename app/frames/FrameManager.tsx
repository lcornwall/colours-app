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
    const [startGameFrameIds, setStartGameFrameIds] = useState<string[]>([]);
    const [currentStartGameIndex, setCurrentStartGameIndex] = useState<number>(0);
    const [touchStartY, setTouchStartY] = useState<number | null>(null);

    useEffect(() => {
        if (frames[ageRange]) {
            const availableFrames = frames[ageRange].frames;
            setFrameData(availableFrames);

            const startGameIds = Object.entries(availableFrames)
                .filter(([_, frame]) => frame.objects.some(obj => obj.startGame))
                .map(([frameId]) => frameId);

            if (startGameIds.length > 0) {
                setStartGameFrameIds(startGameIds);
                setCurrentFrameId(startGameIds[0]);
            } else {
                console.warn('No frames with `startGame: true` found.');
            }
        } else {
            console.error(`No frames available for age group: ${ageRange}`);
        }
    }, [ageRange]);

    const navigateToNextStartGameFrame = () => {
        if (startGameFrameIds.length > 0) {
            const nextIndex = (currentStartGameIndex + 1) % startGameFrameIds.length;
            setCurrentStartGameIndex(nextIndex);

            setCurrentFrameId(startGameFrameIds[nextIndex]);
        } else {
            console.warn('No startGame frames to navigate to.');
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
            navigateToNextStartGameFrame();
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
            className="frame-manager bg-smiley-doodles min-h-screen bg-repeat bg-center bg-cover"
        >
            <Frame frame={frameData[currentFrameId]} onNavigate={setCurrentFrameId} />
            <button onClick={navigateToNextStartGameFrame} className="arrow-button">↑</button>
        </div>
    );
};

export default FrameManager;
