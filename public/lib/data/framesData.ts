import { Frames } from './types';

export const frames: Frames = {
    "3-4": {
        frames: {
            "1": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/Trees.jpg',
                        layer: 0,
                        newGameFrame: 9,
                    },
                    {
                        type: 'Character',
                        imageSrc: '/Gilgili.png',
                        position: 'centre',
                        layer: 1,
                    },
                    {
                        type: 'Speak',
                        text: 'Do you want to play the roses game with me?',
                        position: 'top-centre',
                        layer: 2,
                    },
                    {
                        type: 'Button',
                        layer: 3,
                        action: 'GoToFrame',
                        nextFrameId: '2',
                        position: 'bottom-centre',
                        color: 'red',
                        text: 'Click to Play!',
                    },
                ],
            },
            "2": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/blankRose.png',
                        layer: 0,
                    },
                    {
                        type: 'Character',
                        imageSrc: '/Gilgili.png',
                        position: 'centre',
                        layer: 1,
                    },
                    {
                        type: 'Speak',
                        text: 'Click the colour of rose you would like!',
                        position: 'top-centre',
                        layer: 2,

                    },
                    {
                        type: 'Button',
                        layer: 3,
                        action: 'GoToFrame',
                        nextFrameId: '3',
                        color: 'red',
                        position: 'bottom-left',
                        text: 'Red',
                    },
                    {
                        type: 'Button',
                        layer: 4,
                        action: 'GoToFrame',
                        nextFrameId: '4',
                        color: 'orange',
                        position: 'bottom-centre',
                        text: 'Orange',
                    },
                    {
                        type: 'Button',
                        layer: 5,
                        action: 'GoToFrame',
                        nextFrameId: '5',
                        color: 'blue',
                        position: 'bottom-right',
                        text: 'Blue',
                    },
                ],
            },
            "3": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/redRose.jpg',
                        layer: 0,
                    },
                    {
                        type: 'Speak',
                        text: 'You picked me a red rose!',
                        layer: 1,
                        action: 'GoToFrame',
                        position: 'top-centre',
                        time: 5000,
                        nextFrameId: '6',
                    },

                ],
            },
            "4": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/orangeRose.jpg',
                        layer: 0,
                    },
                    {
                        type: 'Speak',
                        text: 'You picked me an orange rose!',
                        layer: 1,
                        action: 'GoToFrame',
                        position: 'top-centre',
                        time: 5000,
                        nextFrameId: '7',
                    },
                ],
            },
            "5": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/blueRose.png',
                        layer: 0,
                    },
                    {
                        type: 'Speak',
                        text: 'You picked me a blue rose!',
                        position: 'top-centre',
                        layer: 1,
                        action: 'GoToFrame',
                        time: 5000,
                        nextFrameId: '8',
                    },
                ],
            },
            "6": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/Trees.jpg',
                        layer: 0,
                    },
                    {
                        type: 'Character',
                        imageSrc: '/Gilgili.png',
                        position: 'bottom-centre',
                        layer: 1,
                    },
                    {
                        type: 'Speak',
                        text: 'Time for a quiz!',
                        position: 'bottom-left',
                        layer: 2,
                    },
                    {
                        type: 'Quiz',
                        question: 'What color rose did you pick?',
                        answers: [
                            { text: "The rose was red.", isCorrect: true },
                            { text: "The rose was blue.", isCorrect: false },
                            { text: "The rose was orange.", isCorrect: false },
                        ],
                        layer: 3,
                    },
                ],
            },
            "7": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/Trees.jpg',
                        layer: 0,
                    },
                    {
                        type: 'Character',
                        imageSrc: '/Gilgili.png',
                        position: 'bottom-centre',
                        layer: 1,
                    },
                    {
                        type: 'Speak',
                        text: 'Time for a quiz!',
                        position: 'bottom-left',
                        layer: 2,
                    },
                    {
                        type: 'Quiz',
                        question: 'What color rose did you pick?',
                        answers: [
                            { text: "The rose was red.", isCorrect: false },
                            { text: "The rose was blue.", isCorrect: false },
                            { text: "The rose was orange.", isCorrect: true },
                        ],
                        layer: 3,
                    },
                ],
            },
            "8": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/Trees.jpg',
                        layer: 0,
                    },
                    {
                        type: 'Character',
                        imageSrc: '/Gilgili.png',
                        position: 'bottom-centre',
                        layer: 1,
                    },
                    {
                        type: 'Speak',
                        text: 'Time for a quiz!',
                        position: 'bottom-left',
                        layer: 2,
                    },
                    {
                        type: 'Quiz',
                        question: 'What color rose did you pick?',
                        answers: [
                            { text: "The rose was red.", isCorrect: false },
                            { text: "The rose was blue.", isCorrect: true },
                            { text: "The rose was orange.", isCorrect: false },
                        ],
                        layer: 3,
                    },
                ],
            },
            "9":
            {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/Trees.jpg',
                        layer: 0,
                    },
                ],
            },
        },
    }
};

