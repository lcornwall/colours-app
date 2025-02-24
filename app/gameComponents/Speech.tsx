import { useState, useEffect } from "react";

const useSpeechSynthesis = () => {
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

    useEffect(() => {
        if (typeof window !== "undefined" && "speechSynthesis" in window) {
            const synth = window.speechSynthesis;
            const loadVoices = () => {
                setVoices(synth.getVoices());
            };

            synth.onvoiceschanged = loadVoices;
            loadVoices();
        }
    }, []);

    const speak = (text: string) => {
        if (!window.speechSynthesis) return;
        const utterance = new SpeechSynthesisUtterance(text);
        if (voices.length > 0) utterance.voice = voices[0];

        window.speechSynthesis.speak(utterance);
    };

    return { speak, voices };
};

export default useSpeechSynthesis;
