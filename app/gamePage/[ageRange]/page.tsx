"use client";
import { useEffect, useState } from 'react';
import FrameManager from '../../frames/FrameManager';
import { frames } from '../../../public/lib/data/framesData';
import { FrameConfig } from '../../../public/lib/data/types'; // Import the FrameConfig type

const GamePage = ({ params }: { params: { ageRange: string } }) => {
    const [frameData, setFrameData] = useState<{ [frameId: string]: FrameConfig } | null>(null);
    const [initialFrameId, setInitialFrameId] = useState<string | null>(null);

    useEffect(() => {
        const ageRange = params.ageRange; // Extract ageRange from URL parameters
        console.log("Accessed age range:", ageRange); // Log the accessed age range

        // Check if frames exist for the given ageRange
        if (frames[ageRange]) {
            const availableFrames = frames[ageRange].frames;
            setInitialFrameId(Object.keys(availableFrames)[0]); // Get the first frame ID
            setFrameData(availableFrames); // Store the available frames
        } else {
            console.error(`No frames available for age group: ${ageRange}`);
        }
    }, [params.ageRange]); // Use ageRange directly as a dependency

    if (!frameData || !initialFrameId) {
        return <div>Loading...</div>; // Loading state
    }

    return <FrameManager initialFrameId={initialFrameId} frames={frameData} />;
};

export default GamePage;
