import React, { Suspense } from 'react';

const ObjectComponent = ({ object, onNavigate }: { object: any; onNavigate: (frameId: string) => void }) => {
    const Component = React.lazy(() => import(`./${object.type}`));

    const handleClick = () => {
        if (object.action === 'GoToFrame' && object.nextFrameId) {
            onNavigate(object.nextFrameId);
        }
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div
                style={{
                    position: 'absolute',
                    zIndex: object.layer,
                    top: object.layer * 50,
                    left: 0,
                }}
            >
                <Component onClick={handleClick} />
            </div>
        </Suspense>
    );
};

export default ObjectComponent;
