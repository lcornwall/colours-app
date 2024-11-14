"use client";
import FrameManager from '../../frames/FrameManager';

const GamePage = ({ params }: { params: { ageRange: string } }) => {
    const { ageRange } = params;

    return <FrameManager ageRange={ageRange} />;
};

export default GamePage;