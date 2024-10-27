import React from 'react';



const GoToFrameAction: React.FC<{ nextFrameId: string; onNavigate: (frameId: string) => void }> = ({ nextFrameId, onNavigate }) => {

    const execute = () => {

        console.log(`Navigating to frame ${nextFrameId}.`);

        onNavigate(nextFrameId); // Notify FrameManager to switch frames

    };



    return <button onClick={execute}>Go to Frame {nextFrameId}</button>;

};



export default GoToFrameAction;

