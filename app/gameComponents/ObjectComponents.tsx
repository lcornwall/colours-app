import React, { useEffect, Suspense } from 'react';
import './ObjectStyling.css';

interface ObjectComponentProps {
    object: any;
    onNavigate: (frameId: string) => void;
}

const ObjectComponent: React.FC<ObjectComponentProps> = ({ object, onNavigate }) => {
    const Component = React.lazy(() => import(`./${object.type}`));

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;

        if (object.action === 'GoToFrame' && object.nextFrameId && object.time > 0) {
            console.log(`Setting up timeout for ${object.time} milliseconds to go to frame ${object.nextFrameId}.`);
            timer = setTimeout(() => {
                console.log(`Automatically navigating to frame ${object.nextFrameId} after ${object.time} milliseconds.`);
                onNavigate(object.nextFrameId);
            }, object.time);
        }

        return () => {
            if (timer) {
                console.log(`Clearing timeout for navigation to frame ${object.nextFrameId}.`);
                clearTimeout(timer);
            }
        };
    }, [object, onNavigate]);

    const handleClick = () => {
        if (object.action === 'GoToFrame' && object.nextFrameId) {
            console.log(`Navigating to frame ${object.nextFrameId} on click.`);
            onNavigate(object.nextFrameId);
        }
    };

    // Apply position class based on object.position property
    const positionClass = object.position ? object.position : '';

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div
                className={`frame-object ${positionClass}`}
                style={{
                    position: 'absolute',
                    zIndex: object.layer,
                }}
                onClick={handleClick}
            >
                <Component {...object} />
            </div>
        </Suspense>
    );
};

export default ObjectComponent;
