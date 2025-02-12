import React, { useEffect, useRef } from 'react';

interface Action {
    type: string;
    nextFrameId?: string;
}

interface ShakeToChangeFrameProps {
    action: Action;
    onNavigate: (frameId: string) => void;
}

const ShakeToChangeFrame: React.FC<ShakeToChangeFrameProps> = ({ action, onNavigate }) => {
    console.log("rendered");
    const lastMousePosition = useRef({ x: 0, y: 0 });
    const directionHistory = useRef<string[]>([]);
    const lastShakeTime = useRef(0);

    useEffect(() => {
        const handleMouseShake = (event: MouseEvent) => {
            console.log('Mouse moved:', event.clientX, event.clientY); // Debugging line

            const { x, y } = lastMousePosition.current;
            const deltaX = event.clientX - x;
            const deltaY = event.clientY - y;
            lastMousePosition.current = { x: event.clientX, y: event.clientY };

            let direction = '';
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                direction = deltaX > 0 ? 'right' : 'left';
            } else {
                direction = deltaY > 0 ? 'down' : 'up';
            }

            console.log('Direction:', direction); // Debugging line
            console.log('Direction History:', directionHistory.current); // Debugging line

            if (directionHistory.current.length > 0) {
                const lastDirection = directionHistory.current[directionHistory.current.length - 1];

                // Detect if the movement is alternating (left-right or up-down)
                if (
                    (lastDirection === 'left' && direction === 'right') ||
                    (lastDirection === 'right' && direction === 'left') ||
                    (lastDirection === 'up' && direction === 'down') ||
                    (lastDirection === 'down' && direction === 'up')
                ) {
                    directionHistory.current.push(direction);
                } else {
                    directionHistory.current = [direction]; // Reset if not alternating
                }

                if (directionHistory.current.length >= 3 && Date.now() - lastShakeTime.current > 300) {
                    console.log(`Mouse wiggle detected! Navigating to frame ${action.nextFrameId}.`);
                    if (action.nextFrameId) {
                        console.log('Calling onNavigate with:', action.nextFrameId); // Debugging line
                        onNavigate(action.nextFrameId);
                    }
                    directionHistory.current = [];
                    lastShakeTime.current = Date.now();
                }
            } else {
                directionHistory.current.push(direction);
            }
        };

        window.addEventListener('mousemove', handleMouseShake);

        return () => {
            window.removeEventListener('mousemove', handleMouseShake);
        };
    }, [action, onNavigate]);

    return null;
};

export default ShakeToChangeFrame;