import { Frames } from './types';

export const frames: Frames = {
    "3-4": {
        frames: {
            // Rose game
            "1": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/Trees.jpg',
                        layer: 0,
                        newGameFrame: 9,
                        startGame: true,
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

            // Sky Game
            "9": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/Trees.jpg',
                        layer: 0,
                        newGameFrame: 11,
                        startGame: true,
                    },
                    {
                        type: 'Character',
                        imageSrc: '/Gilgili.png',
                        position: 'centre',
                        layer: 1,
                    },
                    {
                        type: 'Speak',
                        text: 'Do you want to play the sky game with me?',
                        position: 'top-centre',
                        layer: 2,
                    },
                    {
                        type: 'Button',
                        layer: 3,
                        action: 'GoToFrame',
                        nextFrameId: '11',
                        position: 'bottom-centre',
                        color: 'blue',
                        text: 'Click to Play!',
                    },
                ],
            },
            "11": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/blankSky.jpg',
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
                        text: 'Click the colour of sky you would like!',
                        position: 'top-centre',
                        layer: 2,

                    },
                    {
                        type: 'Button',
                        layer: 3,
                        action: 'GoToFrame',
                        nextFrameId: '12',
                        color: 'red',
                        position: 'bottom-left',
                        text: 'Red',
                    },
                    {
                        type: 'Button',
                        layer: 4,
                        action: 'GoToFrame',
                        nextFrameId: '13',
                        color: 'green',
                        position: 'bottom-centre',
                        text: 'Green',
                    },
                    {
                        type: 'Button',
                        layer: 5,
                        action: 'GoToFrame',
                        nextFrameId: '14',
                        color: 'blue',
                        position: 'bottom-right',
                        text: 'Blue',
                    },
                ],
            },
            "12": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/redSky.jpg',
                        layer: 0,
                    },
                    {
                        type: 'Speak',
                        text: 'You picked me a red sky!',
                        layer: 1,
                        action: 'GoToFrame',
                        position: 'top-centre',
                        time: 5000,
                        nextFrameId: '15',
                    },

                ],
            },
            "13": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/greenSky.jpg',
                        layer: 0,
                    },
                    {
                        type: 'Speak',
                        text: 'You picked me a green sky!',
                        layer: 1,
                        action: 'GoToFrame',
                        position: 'top-centre',
                        time: 5000,
                        nextFrameId: '16',
                    },
                ],
            },
            "14": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/blueSky.jpg',
                        layer: 0,
                    },
                    {
                        type: 'Speak',
                        text: 'You picked me a blue sky!',
                        position: 'top-centre',
                        layer: 1,
                        action: 'GoToFrame',
                        time: 5000,
                        nextFrameId: '17',
                    },
                ],
            },
            "15": {
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
                        question: 'What color sky did you pick?',
                        answers: [
                            { text: "The sky was red.", isCorrect: true },
                            { text: "The sky was blue.", isCorrect: false },
                            { text: "The sky was green.", isCorrect: false },
                        ],
                        layer: 3,
                    },
                ],
            },
            "16": {
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
                        question: 'What color sky did you pick?',
                        answers: [
                            { text: "The sky was red.", isCorrect: false },
                            { text: "The sky was blue.", isCorrect: false },
                            { text: "The sky was green.", isCorrect: true },
                        ],
                        layer: 3,
                    },
                ],
            },
            "17": {
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
                        question: 'What color sky did you pick?',
                        answers: [
                            { text: "The rose was red.", isCorrect: false },
                            { text: "The rose was blue.", isCorrect: true },
                            { text: "The rose was green.", isCorrect: false },
                        ],
                        layer: 3,
                    },
                ],
            },
            // Sky Game
            "18": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/blueSky.jpg',
                        layer: 0,
                        newGameFrame: 1,
                        startGame: true,
                    },
                    {
                        type: 'Character',
                        imageSrc: '/Gilgili.png',
                        position: 'centre',
                        layer: 1,
                    },
                    {
                        type: 'Speak',
                        text: 'Do you want to play the leaf game with me?',
                        position: 'top-centre',
                        layer: 2,
                    },
                    {
                        type: 'Button',
                        layer: 3,
                        action: 'GoToFrame',
                        nextFrameId: '19',
                        position: 'bottom-centre',
                        color: 'green',
                        text: 'Click to Play!',
                    },
                ],
            },
            "19": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/blankLeaf.png',
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
                        text: 'Click the colour of leaf you would like!',
                        position: 'top-centre',
                        layer: 2,

                    },
                    {
                        type: 'Button',
                        layer: 3,
                        action: 'GoToFrame',
                        nextFrameId: '20',
                        color: 'red',
                        position: 'bottom-left',
                        text: 'Red',
                    },
                    {
                        type: 'Button',
                        layer: 4,
                        action: 'GoToFrame',
                        nextFrameId: '21',
                        color: 'green',
                        position: 'bottom-centre',
                        text: 'Green',
                    },
                    {
                        type: 'Button',
                        layer: 5,
                        action: 'GoToFrame',
                        nextFrameId: '22',
                        color: 'blue',
                        position: 'bottom-right',
                        text: 'Blue',
                    },
                ],
            },
            "20": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/redLeaf.png',
                        layer: 0,
                    },
                    {
                        type: 'Speak',
                        text: 'You picked me a red leaf!',
                        layer: 1,
                        action: 'GoToFrame',
                        position: 'top-centre',
                        time: 5000,
                        nextFrameId: '23',
                    },

                ],
            },
            "21": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/greenLeaf.png',
                        layer: 0,
                    },
                    {
                        type: 'Speak',
                        text: 'You picked me a green leaf!',
                        layer: 1,
                        action: 'GoToFrame',
                        position: 'top-centre',
                        time: 5000,
                        nextFrameId: '24',
                    },
                ],
            },
            "22": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/blueLeaf.jpg',
                        layer: 0,
                    },
                    {
                        type: 'Speak',
                        text: 'You picked me a blue leaf!',
                        position: 'top-centre',
                        layer: 1,
                        action: 'GoToFrame',
                        time: 5000,
                        nextFrameId: '25',
                    },
                ],
            },
            "23": {
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
                        question: 'What color leaf did you pick?',
                        answers: [
                            { text: "The leaf was red.", isCorrect: true },
                            { text: "The leaf was blue.", isCorrect: false },
                            { text: "The leaf was green.", isCorrect: false },
                        ],
                        layer: 3,
                    },
                ],
            },
            "24": {
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
                        question: 'What color leaf did you pick?',
                        answers: [
                            { text: "The leaf was red.", isCorrect: false },
                            { text: "The leaf was blue.", isCorrect: false },
                            { text: "The leaf was green.", isCorrect: true },
                        ],
                        layer: 3,
                    },
                ],
            },
            "25": {
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
                        question: 'What color leaf did you pick?',
                        answers: [
                            { text: "The leaf was red.", isCorrect: false },
                            { text: "The leaf was blue.", isCorrect: true },
                            { text: "The leaf was green.", isCorrect: false },
                        ],
                        layer: 3,
                    },
                ],
            },
        }
    }
};