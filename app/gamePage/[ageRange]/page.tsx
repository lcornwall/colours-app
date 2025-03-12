"use client";
import FrameManager from "../../frames/FrameManager";
import NavBar from "../NavBar";

const GamePage = ({ params }: { params: { ageRange: string } }) => {
    const { ageRange } = params;

    return (
        <div className="min-h-screen">
            <NavBar />
            <main className="p-4">
                <FrameManager ageRange={ageRange} />
            </main>
        </div>
    );
};

export default GamePage;