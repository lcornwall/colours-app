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
    const lastShakeTime = useRef(0);
    const shakeCount = useRef(0);
    const lastMousePosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleDeviceShake = (event: DeviceMotionEvent) => {
            const acceleration = event.acceleration;
            if (acceleration && acceleration.x && acceleration.y && acceleration.z) {
                const magnitude = Math.sqrt(acceleration.x ** 2 + acceleration.y ** 2 + acceleration.z ** 2);
                const now = Date.now();

                if (magnitude > 10 && now - lastShakeTime.current > 1000) {
                    lastShakeTime.current = now;
                    if (action.nextFrameId) {
                        console.log(`Shaking detected! Navigating to frame ${action.nextFrameId}.`);
                        onNavigate(action.nextFrameId);
                    }
                }
            }
        };

        const handleMouseShake = (event: MouseEvent) => {
            const { x, y } = lastMousePosition.current;
            const deltaX = Math.abs(event.clientX - x);
            const deltaY = Math.abs(event.clientY - y);

            lastMousePosition.current = { x: event.clientX, y: event.clientY };

            if (deltaX > 30 || deltaY > 30) {
                shakeCount.current++;
                if (shakeCount.current > 5) {
                    if (action.nextFrameId) {
                        console.log(`Mouse shaking detected! Navigating to frame ${action.nextFrameId}.`);
                        onNavigate(action.nextFrameId);
                        shakeCount.current = 0;
                    }
                }
            }
        };

        if ('DeviceMotionEvent' in window && 'requestPermission' in DeviceMotionEvent) {
            (DeviceMotionEvent as any).requestPermission()
                .then((permissionState: string) => {
                    if (permissionState === 'granted') {
                        window.addEventListener('devicemotion', handleDeviceShake);
                    }
                })
                .catch(console.error);
        } else {
            window.addEventListener('devicemotion', handleDeviceShake);
        }

        window.addEventListener('mousemove', handleMouseShake);

        return () => {
            window.removeEventListener('devicemotion', handleDeviceShake);
            window.removeEventListener('mousemove', handleMouseShake);
        };
    }, [action, onNavigate]);

    return null;
};

export default ShakeToChangeFrame;

