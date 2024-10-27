import React from 'react';

import ObjectComponent from '../gameComponents/ObjectComponents';



const Frame = ({ frame, onNavigate }: { frame: any; onNavigate: (frameId: string) => void }) => {

    return (

        <div style={{ position: 'relative', width: '100%', height: '100%' }}>

            {frame.objects

                .sort((a: any, b: any) => a.layer - b.layer) // Sort objects by layer

                .map((object: any, index: number) => (

                    <ObjectComponent key={index} object={object} onNavigate={onNavigate} />

                ))}

        </div>

    );

};



export default Frame;