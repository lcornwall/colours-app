// components/FrameManager.tsx

import React, { useState } from 'react';

import Frame from './Frame';



const FrameManager = ({ initialFrameId, frames }: { initialFrameId: string; frames: any }) => {

    const [currentFrameId, setCurrentFrameId] = useState(initialFrameId);



    const handleNavigate = (nextFrameId: string) => {

        setCurrentFrameId(nextFrameId); // Update the current frame

    };



    return (

        <div>

            <Frame frame={frames[currentFrameId]} onNavigate={handleNavigate} />

        </div>

    );

};



export default FrameManager;