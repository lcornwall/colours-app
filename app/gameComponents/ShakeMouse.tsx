import React, { useEffect, useRef } from 'react';

interface ShakeMouseProps {
    nextFrameId: string;
    onNavigate: (frameId: string) => void;
}

const ShakeMouse: React.FC<ShakeMouseProps> = ({ nextFrameId, onNavigate }) => {
    const lastMousePosition = useRef({ x: 0, y: 0 });
    const directionHistory = useRef<string[]>([]);
    const lastShakeTime = useRef(0);

    // Reset on new frame
    useEffect(() => {
        directionHistory.current = [];
        lastShakeTime.current = 0;
        lastMousePosition.current = { x: 0, y: 0 };
    }, [nextFrameId]); // Trigger this when the frame (or ShakeMouse config) changes

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
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

            const history = directionHistory.current;
            const lastDirection = history[history.length - 1];

            if (
                (lastDirection === 'left' && direction === 'right') ||
                (lastDirection === 'right' && direction === 'left') ||
                (lastDirection === 'up' && direction === 'down') ||
                (lastDirection === 'down' && direction === 'up')
            ) {
                history.push(direction);
            } else {
                directionHistory.current = [direction];
            }

            if (history.length >= 2 && Date.now() - lastShakeTime.current > 200) {
                onNavigate(nextFrameId);
                directionHistory.current = [];
                lastShakeTime.current = Date.now();
            }
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [nextFrameId, onNavigate]);

    return null;
};

export default ShakeMouse;
