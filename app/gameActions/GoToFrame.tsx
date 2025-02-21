import next from 'next';
import React, { useEffect } from 'react';

interface Action {
    type: string;
    text?: string;
    time?: number;
    nextFrameId?: string;
}

interface GoToFrameActionProps {
    action: Action;
    onNavigate: (frameId: string) => void;
    triggerTimeout?: boolean;
}

const GoToFrameAction: React.FC<GoToFrameActionProps> = ({
    action,
    onNavigate,
    triggerTimeout = false
}) => {
    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
        const { time = 0, nextFrameId } = action;

        if (triggerTimeout && nextFrameId) {
            if (time > 0) {
                console.log(`Starting navigation timer to frame ${nextFrameId} for ${time} milliseconds.`);
                timer = setTimeout(() => {
                    console.log(`Navigating to frame ${nextFrameId} after ${time} milliseconds.`);
                    onNavigate(nextFrameId);
                }, time);
            } else {

                console.log(`Navigating to frame ${nextFrameId} immediately.`);
                console.log(nextFrameId);
                onNavigate(nextFrameId);
            }
        }

        return () => {
            if (timer) {
                console.log(`Clearing timer for navigation to frame ${nextFrameId}.`);
                clearTimeout(timer);
            }
        };
    }, [action, onNavigate, triggerTimeout]);

    return null;
};

export default GoToFrameAction;