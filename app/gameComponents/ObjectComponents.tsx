import React, { Suspense } from 'react';



const ObjectComponent = ({ object, onNavigate }: { object: any; onNavigate: (frameId: string) => void }) => {

    const Component = React.lazy(() => import(`./${object.type}`)); // Load object component dynamically

    const Action = object.action ? React.lazy(() => import(`../gameActions/${object.action}`)) : null; // Load action dynamically



    const handleClick = () => {

        if (Action) {

            const actionProps = {

                nextFrameId: object.nextFrameId,

                onNavigate, // Pass the onNavigate prop to the action

            };

            // Execute the action if it exists

            if (Action) {

                const ActionComponent = <Action {...actionProps} />;
                console.log(actionProps);

                ActionComponent.props.execute(); // Call the action's execute method

            }

        }

    };



    return (

        <Suspense fallback={<div>Loading...</div>}>

            <div style={{ position: 'absolute', zIndex: object.layer }}>

                <Component onClick={handleClick} />

            </div>

        </Suspense>

    );

};



export default ObjectComponent;