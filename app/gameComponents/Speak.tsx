"use client";

import React, { useEffect, useState } from "react";
import useSpeechSynthesis from "./Speech";

const Speak = ({ text }: { text: string }) => {
    const { speak } = useSpeechSynthesis();
    const [lastSpokenText, setLastSpokenText] = useState<string | null>(null);

    useEffect(() => {
        if (text && text !== lastSpokenText) {
            const timer = setTimeout(() => {
                speak(text);
                setLastSpokenText(text);
            }, 100);

            return () => clearTimeout(timer);
        }
    }, [text, speak, lastSpokenText]);

    return (
        <div
            style={{
                position: "relative",
                backgroundColor: "white",
                padding: "5px",
                borderRadius: "10px",
                fontSize: "16px",
                maxWidth: "200px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                margin: "10px",
            }}
        >
            {text}
            <div
                style={{
                    position: "absolute",
                    bottom: "-10px",
                    left: "20px",
                    width: "0",
                    height: "0",
                    borderStyle: "solid",
                    borderWidth: "10px 10px 0 10px",
                    borderColor: "white transparent transparent transparent",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                }}
            ></div>
        </div>
    );
};

export default Speak;
