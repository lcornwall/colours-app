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
                        newGameFrame: 10, //update
                        startGame: true,
                    },

                    {
                        type: 'Character',
                        imageSrc: '/characters/Kaka.png',
                        position: 'centre',
                        layer: 1,
                    },

                    {
                        type: 'Speak',
                        text: "Hello! I'm Kakka! Gabbu will teach you about rose colour!",
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
                ]
            },
            "2": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/Trees.jpg',
                        layer: 0,
                    },

                    {
                        type: 'cornerCharacter',
                        imageSrc: '/characters/Kaka.png',
                        position: 'top-left',
                        layer: 2,
                    },

                    {
                        type: 'Character',
                        imageSrc: '/characters/Gabbu.png',
                        position: 'centre',
                        layer: 3,
                    },

                    {
                        type: 'Speak',
                        text: "Hello! I'm Gabbu! I will be teaching you rose colours!",
                        position: 'top-centre',
                        layer: 4,
                    },

                    {
                        type: 'Button',
                        layer: 5,
                        action: 'GoToFrame',
                        nextFrameId: '3',
                        time: 5000,
                    },
                ]
            },
            "3": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/red.png',
                        layer: 0,
                    },

                    {
                        type: 'cornerCharacter',
                        imageSrc: '/characters/Kaka.png',
                        position: 'top-left',
                        layer: 1,
                    },

                    {
                        type: 'Character',
                        imageSrc: '/characters/Gabbu.png',
                        position: 'centre',
                        layer: 2,
                    },

                    {
                        type: 'Speak',
                        text: "You will learn: RED",
                        position: 'top-centre',
                        layer: 3,
                        action: 'GoToFrame',
                        nextFrameId: '4',
                        time: 5000,
                    },

                ]
            },
            "4": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/blue.png',
                        layer: 0,
                    },

                    {
                        type: 'cornerCharacter',
                        imageSrc: '/characters/Kaka.png',
                        position: 'top-left',
                        layer: 1,
                    },

                    {
                        type: 'Character',
                        imageSrc: '/characters/Gabbu.png',
                        position: 'centre',
                        layer: 2,
                    },

                    {
                        type: 'Speak',
                        text: "You will learn: BLUE",
                        position: 'top-centre',
                        action: 'GoToFrame',
                        nextFrameId: '5',
                        time: 5000,
                        layer: 3,
                    },

                ]
            },
            "5": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/green.png',
                        layer: 0,
                    },

                    {
                        type: 'cornerCharacter',
                        imageSrc: '/characters/Kaka.png',
                        position: 'top-left',
                        layer: 1,
                    },

                    {
                        type: 'Character',
                        imageSrc: '/characters/Gabbu.png',
                        position: 'centre',
                        layer: 2,
                    },

                    {
                        type: 'Speak',
                        text: "You will learn: GREEN",
                        position: 'top-centre',
                        action: 'GoToFrame',
                        nextFrameId: '6',
                        layer: 3,
                        time: 5000,
                    },
                ]
            },
            "6": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/blankRose.png',
                        layer: 0,
                    },
                    {
                        type: 'Character',
                        imageSrc: '/characters/Gabbu.png',
                        position: 'centre',
                        layer: 1,
                    },
                    {
                        type: 'cornerCharacter',
                        imageSrc: '/characters/Kaka.png',
                        position: 'top-left',
                        layer: 2,
                    },
                    {
                        type: 'Speak',
                        text: 'Click the colour of rose you would like!',
                        position: 'top-centre',
                        layer: 3,

                    },
                    {
                        type: 'Button',
                        layer: 4,
                        action: 'GoToFrame',
                        nextFrameId: '7',
                        color: 'red',
                        position: 'bottom-left',
                        text: 'Red',
                    },
                    {
                        type: 'Button',
                        layer: 5,
                        action: 'GoToFrame',
                        nextFrameId: '9',
                        color: 'green',
                        position: 'bottom-centre',
                        text: 'Green',
                    },
                    {
                        type: 'Button',
                        layer: 6,
                        action: 'GoToFrame',
                        nextFrameId: '8',
                        color: 'blue',
                        position: 'bottom-right',
                        text: 'Blue',
                    },
                ],
            },
            "7": {
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
                        nextFrameId: '10',
                    },

                ],
            },
            "8": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/blueRose.png',
                        layer: 0,
                    },
                    {
                        type: 'Speak',
                        text: 'You picked me a blue rose!',
                        layer: 1,
                        action: 'GoToFrame',
                        position: 'top-centre',
                        time: 5000,
                        nextFrameId: '10',
                    },
                ],
            },
            "9": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/greenRose.jpg',
                        layer: 0,
                    },
                    {
                        type: 'Speak',
                        text: 'You picked me a green rose!',
                        position: 'top-centre',
                        layer: 1,
                        action: 'GoToFrame',
                        time: 5000,
                        nextFrameId: '10',
                    },
                ],
            },
            "10": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/Trees.jpg',
                        layer: 0,
                    },
                    {
                        type: 'Character',
                        imageSrc: '/characters/Larli.png',
                        position: 'centre',
                        layer: 1,
                    },
                    {
                        type: 'cornerCharacter',
                        imageSrc: '/characters/Gabbu.png',
                        position: 'top-left',
                        layer: 2,
                    },
                    {
                        type: 'Speak',
                        text: 'Hi, it is Larli here - you learned GREEN, RED and BLUE. Let us see what you remember with Gilgili!',
                        position: 'top-centre',
                        layer: 3,
                        action: 'GoToFrame',
                        time: 6000,
                        nextFrameId: '11',

                    },
                ]


            },
            "11": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/Trees.jpg',
                        layer: 0,
                    },
                    {
                        type: 'cornerCharacter',
                        imageSrc: '/characters/Larli.png',
                        position: 'top-left',
                        layer: 1,
                    },
                    {
                        type: 'Character',
                        imageSrc: '/characters/Gilgili.png',
                        position: 'centre',
                        layer: 2,
                    },
                    {
                        type: 'Speak',
                        text: 'Oh - I am Gilgili - we shall go through a quiz now!',
                        position: 'top-centre',
                        layer: 3,
                        action: 'GoToFrame',
                        time: 5000,
                        nextFrameId: '12',

                    },
                ]

            },
            "12": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/Trees.jpg',
                        layer: 0,
                    },
                    {
                        type: 'Character',
                        imageSrc: '/characters/Gilgili.png',
                        position: 'centre',
                        layer: 1,
                    },
                    {
                        type: 'Speak',
                        text: 'What colour is RED?',
                        position: 'top-centre',
                        layer: 2,

                    },
                    {
                        type: 'Button',
                        color: 'red',
                        position: 'bottom-left',
                        layer: 3,
                        action: 'GoToFrame',
                        nextFrameId: '13',

                    },
                    {
                        type: 'Button',
                        color: 'blue',
                        position: 'bottom-right',
                        layer: 4,
                        action: 'GoToFrame',
                        nextFrameId: '14',

                    },
                    {
                        type: 'Button',
                        color: 'green',
                        position: 'bottom-centre',
                        layer: 5,
                        action: 'GoToFrame',
                        nextFrameId: '14',

                    },
                ]
            },
            "13": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/Trees.jpg',
                        layer: 0,
                    },
                    {
                        type: 'cornerCharacter',
                        imageSrc: '/characters/Larli.png',
                        position: 'top-left',
                        layer: 1,
                    },
                    {
                        type: 'Character',
                        imageSrc: '/characters/Gilgili.png',
                        position: 'centre',
                        layer: 2,
                    },
                    {
                        type: 'Speak',
                        text: 'Correct that is RED!',
                        position: 'top-centre',
                        layer: 3,
                        action: 'GoToFrame',
                        time: 5000,
                        nextFrameId: '15',

                    },
                ]

            },
            "14": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/Trees.jpg',
                        layer: 0,
                    },
                    {
                        type: 'cornerCharacter',
                        imageSrc: '/characters/Gilgili.png',
                        position: 'top-left',
                        layer: 1,
                    },
                    {
                        type: 'Character',
                        imageSrc: '/characters/Didi.png',
                        position: 'centre',
                        layer: 2,
                    },
                    {
                        type: 'Speak',
                        text: 'That is not RED but that is okay, let us try again!',
                        position: 'top-centre',
                        layer: 3,
                        action: 'GoToFrame',
                        time: 5000,
                        nextFrameId: '12',

                    },
                ]

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
                        imageSrc: '/characters/Gilgili.png',
                        position: 'centre',
                        layer: 1,
                    },
                    {
                        type: 'Speak',
                        text: 'What colour is BLUE?',
                        position: 'top-centre',
                        layer: 2,

                    },
                    {
                        type: 'Button',
                        color: 'red',
                        position: 'bottom-left',
                        layer: 3,
                        action: 'GoToFrame',
                        nextFrameId: '16',

                    },
                    {
                        type: 'Button',
                        color: 'blue',
                        position: 'bottom-right',
                        layer: 4,
                        action: 'GoToFrame',
                        nextFrameId: '17',

                    },
                    {
                        type: 'Button',
                        color: 'green',
                        position: 'bottom-centre',
                        layer: 5,
                        action: 'GoToFrame',
                        nextFrameId: '16',

                    },
                ]
            },
            "16": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/Trees.jpg',
                        layer: 0,
                    },
                    {
                        type: 'cornerCharacter',
                        imageSrc: '/characters/Gilgili.png',
                        position: 'top-left',
                        layer: 1,
                    },
                    {
                        type: 'Character',
                        imageSrc: '/characters/Didi.png',
                        position: 'centre',
                        layer: 2,
                    },
                    {
                        type: 'Speak',
                        text: 'That is not BLUE but that is okay, let us try again!',
                        position: 'top-centre',
                        layer: 3,
                        action: 'GoToFrame',
                        time: 5000,
                        nextFrameId: '15',

                    },
                ]

            },
            "17": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/Trees.jpg',
                        layer: 0,
                    },
                    {
                        type: 'cornerCharacter',
                        imageSrc: '/characters/Larli.png',
                        position: 'top-left',
                        layer: 1,
                    },
                    {
                        type: 'Character',
                        imageSrc: '/characters/Gilgili.png',
                        position: 'centre',
                        layer: 2,
                    },
                    {
                        type: 'Speak',
                        text: 'Correct that is BLUE!',
                        position: 'top-centre',
                        layer: 3,
                        action: 'GoToFrame',
                        time: 5000,
                        nextFrameId: '18',

                    },
                ]

            },
            "18": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/Trees.jpg',
                        layer: 0,
                    },
                    {
                        type: 'Character',
                        imageSrc: '/characters/Gilgili.png',
                        position: 'centre',
                        layer: 1,
                    },
                    {
                        type: 'Speak',
                        text: 'What colour is GREEN?',
                        position: 'top-centre',
                        layer: 2,

                    },
                    {
                        type: 'Button',
                        color: 'red',
                        position: 'bottom-left',
                        layer: 3,
                        action: 'GoToFrame',
                        nextFrameId: '20',

                    },
                    {
                        type: 'Button',
                        color: 'blue',
                        position: 'bottom-right',
                        layer: 4,
                        action: 'GoToFrame',
                        nextFrameId: '20',

                    },
                    {
                        type: 'Button',
                        color: 'green',
                        position: 'bottom-centre',
                        layer: 5,
                        action: 'GoToFrame',
                        nextFrameId: '19',

                    },
                ]
            },
            "20": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/Trees.jpg',
                        layer: 0,
                    },
                    {
                        type: 'cornerCharacter',
                        imageSrc: '/characters/Gilgili.png',
                        position: 'top-left',
                        layer: 1,
                    },
                    {
                        type: 'Character',
                        imageSrc: '/characters/Didi.png',
                        position: 'centre',
                        layer: 2,
                    },
                    {
                        type: 'Speak',
                        text: 'That is not GREEN but that is okay, let us try again!',
                        position: 'top-centre',
                        layer: 3,
                        action: 'GoToFrame',
                        time: 5000,
                        nextFrameId: '18',

                    },
                ]

            },
            "19": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/Trees.jpg',
                        layer: 0,
                    },
                    {
                        type: 'cornerCharacter',
                        imageSrc: '/characters/Larli.png',
                        position: 'top-left',
                        layer: 1,
                    },
                    {
                        type: 'Character',
                        imageSrc: '/characters/Gilgili.png',
                        position: 'centre',
                        layer: 2,
                    },
                    {
                        type: 'Speak',
                        text: 'Correct that is GREEN!',
                        position: 'top-centre',
                        layer: 3,
                        action: 'GoToFrame',
                        time: 5000,
                        nextFrameId: '21',

                    },
                ]

            },
            "21": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/Trees.jpg',
                        layer: 0,
                    },
                    {
                        type: 'Character',
                        imageSrc: '/characters/Kaka.png',
                        position: 'centre',
                        layer: 1,
                    },
                    {
                        type: 'Speak',
                        text: 'Well done for playing the rose game!',
                        position: 'top-centre',
                        layer: 2,
                    }
                ]
            },

        }
    }
}


// export const frames: Frames = {
//     "3-4": {
//         frames: {
//             // Rose game
//             "1": {
//                 objects: [
//                     {
//                         type: 'Background',
//                         imageSrc: '/Trees.jpg',
//                         layer: 0,
//                         newGameFrame: 9,
//                         startGame: true,
//                     },
//                     {
//                         type: 'Character',
//                         imageSrc: '/Gabbu.png',
//                         position: 'centre-left',
//                         layer: 1,
//                     },
//                     {
//                         type: 'Character',
//                         imageSrc: '/Kaka.png',
//                         position: 'centre-right',
//                         layer: 2,
//                     },
//                     {
//                         type: 'Speak',
//                         text: "Let's play the roses game?",
//                         position: 'top-centre',
//                         layer: 3,
//                     },
//                     {
//                         type: 'Button',
//                         layer: 4,
//                         action: 'GoToFrame',
//                         nextFrameId: '2',
//                         position: 'bottom-centre',
//                         color: 'red',
//                         text: 'Click to Play!',
//                     },
//                 ],
//             },
//             "2": {
//                 objects: [
//                     {
//                         type: 'Background',
//                         imageSrc: '/blankRose.png',
//                         layer: 0,
//                     },
//                     {
//                         type: 'Character',
//                         imageSrc: '/Gilgili.png',
//                         position: 'centre',
//                         layer: 1,
//                     },
//                     {
//                         type: 'Speak',
//                         text: 'Click the colour of rose you would like!',
//                         position: 'top-centre',
//                         layer: 2,

//                     },
//                     {
//                         type: 'Button',
//                         layer: 3,
//                         action: 'GoToFrame',
//                         nextFrameId: '3',
//                         color: 'red',
//                         position: 'bottom-left',
//                         text: 'Red',
//                     },
//                     {
//                         type: 'Button',
//                         layer: 4,
//                         action: 'GoToFrame',
//                         nextFrameId: '4',
//                         color: 'orange',
//                         position: 'bottom-centre',
//                         text: 'Orange',
//                     },
//                     {
//                         type: 'Button',
//                         layer: 5,
//                         action: 'GoToFrame',
//                         nextFrameId: '5',
//                         color: 'blue',
//                         position: 'bottom-right',
//                         text: 'Blue',
//                     },
//                 ],
//             },
//             "3": {
//                 objects: [
//                     {
//                         type: 'Background',
//                         imageSrc: '/redRose.jpg',
//                         layer: 0,
//                     },
//                     {
//                         type: 'Speak',
//                         text: 'You picked me a red rose!',
//                         layer: 1,
//                         action: 'GoToFrame',
//                         position: 'top-centre',
//                         time: 5000,
//                         nextFrameId: '6',
//                     },

//                 ],
//             },
//             "4": {
//                 objects: [
//                     {
//                         type: 'Background',
//                         imageSrc: '/orangeRose.jpg',
//                         layer: 0,
//                     },
//                     {
//                         type: 'Speak',
//                         text: 'You picked me an orange rose!',
//                         layer: 1,
//                         action: 'GoToFrame',
//                         position: 'top-centre',
//                         time: 5000,
//                         nextFrameId: '7',
//                     },
//                 ],
//             },
//             "5": {
//                 objects: [
//                     {
//                         type: 'Background',
//                         imageSrc: '/blueRose.png',
//                         layer: 0,
//                     },
//                     {
//                         type: 'Speak',
//                         text: 'You picked me a blue rose!',
//                         position: 'top-centre',
//                         layer: 1,
//                         action: 'GoToFrame',
//                         time: 5000,
//                         nextFrameId: '8',
//                     },
//                 ],
//             },
//             "6": {
//                 objects: [
//                     {
//                         type: 'Background',
//                         imageSrc: '/Trees.jpg',
//                         layer: 0,
//                     },
//                     {
//                         type: 'Character',
//                         imageSrc: '/Didi.png',
//                         position: 'bottom-right',
//                         layer: 1,
//                     },
//                     {
//                         type: 'Speak',
//                         text: 'Time for a quiz!',
//                         position: 'bottom-left',
//                         layer: 2,
//                     },
//                     {
//                         type: 'Quiz',
//                         question: 'What color rose did you pick?',
//                         answers: [
//                             { text: "The rose was red.", isCorrect: true },
//                             { text: "The rose was blue.", isCorrect: false },
//                             { text: "The rose was orange.", isCorrect: false },
//                         ],
//                         layer: 3,
//                     },
//                 ],
//             },
//             "7": {
//                 objects: [
//                     {
//                         type: 'Background',
//                         imageSrc: '/Trees.jpg',
//                         layer: 0,
//                     },
//                     {
//                         type: 'Character',
//                         imageSrc: '/Didi.png',
//                         position: 'bottom-right',
//                         layer: 1,
//                     },
//                     {
//                         type: 'Speak',
//                         text: 'Time for a quiz!',
//                         position: 'bottom-left',
//                         layer: 2,
//                     },
//                     {
//                         type: 'Quiz',
//                         question: 'What color rose did you pick?',
//                         answers: [
//                             { text: "The rose was red.", isCorrect: false },
//                             { text: "The rose was blue.", isCorrect: false },
//                             { text: "The rose was orange.", isCorrect: true },
//                         ],
//                         layer: 3,
//                     },
//                 ],
//             },
//             "8": {
//                 objects: [
//                     {
//                         type: 'Background',
//                         imageSrc: '/Trees.jpg',
//                         layer: 0,
//                     },
//                     {
//                         type: 'Character',
//                         imageSrc: '/Didi.png',
//                         position: 'bottom-right',
//                         layer: 1,
//                     },
//                     {
//                         type: 'Speak',
//                         text: 'Time for a quiz!',
//                         position: 'bottom-left',
//                         layer: 2,
//                     },
//                     {
//                         type: 'Quiz',
//                         question: 'What color rose did you pick?',
//                         answers: [
//                             { text: "The rose was red.", isCorrect: false },
//                             { text: "The rose was blue.", isCorrect: true },
//                             { text: "The rose was orange.", isCorrect: false },
//                         ],
//                         layer: 3,
//                     },
//                 ],
//             },

//             // Sky Game
//             "9": {
//                 objects: [
//                     {
//                         type: 'Background',
//                         imageSrc: '/Trees.jpg',
//                         layer: 0,
//                         newGameFrame: 11,
//                         startGame: true,
//                     },
//                     {
//                         type: 'Character',
//                         imageSrc: '/Gilgili.png',
//                         position: 'centre',
//                         layer: 1,
//                     },
//                     {
//                         type: 'Speak',
//                         text: 'Do you want to play the sky game with me?',
//                         position: 'top-centre',
//                         layer: 2,
//                     },
//                     {
//                         type: 'Button',
//                         layer: 3,
//                         action: 'GoToFrame',
//                         nextFrameId: '11',
//                         position: 'bottom-centre',
//                         color: 'blue',
//                         text: 'Click to Play!',
//                     },
//                 ],
//             },
//             "11": {
//                 objects: [
//                     {
//                         type: 'Background',
//                         imageSrc: '/blankSky.jpg',
//                         layer: 0,
//                     },
//                     {
//                         type: 'Character',
//                         imageSrc: '/Gilgili.png',
//                         position: 'centre',
//                         layer: 1,
//                     },
//                     {
//                         type: 'Speak',
//                         text: 'Click the colour of sky you would like!',
//                         position: 'top-centre',
//                         layer: 2,

//                     },
//                     {
//                         type: 'Button',
//                         layer: 3,
//                         action: 'GoToFrame',
//                         nextFrameId: '12',
//                         color: 'red',
//                         position: 'bottom-left',
//                         text: 'Red',
//                     },
//                     {
//                         type: 'Button',
//                         layer: 4,
//                         action: 'GoToFrame',
//                         nextFrameId: '13',
//                         color: 'green',
//                         position: 'bottom-centre',
//                         text: 'Green',
//                     },
//                     {
//                         type: 'Button',
//                         layer: 5,
//                         action: 'GoToFrame',
//                         nextFrameId: '14',
//                         color: 'blue',
//                         position: 'bottom-right',
//                         text: 'Blue',
//                     },
//                 ],
//             },
//             "12": {
//                 objects: [
//                     {
//                         type: 'Background',
//                         imageSrc: '/redSky.jpg',
//                         layer: 0,
//                     },
//                     {
//                         type: 'Speak',
//                         text: 'You picked me a red sky!',
//                         layer: 1,
//                         action: 'GoToFrame',
//                         position: 'top-centre',
//                         time: 5000,
//                         nextFrameId: '15',
//                     },

//                 ],
//             },
//             "13": {
//                 objects: [
//                     {
//                         type: 'Background',
//                         imageSrc: '/greenSky.jpg',
//                         layer: 0,
//                     },
//                     {
//                         type: 'Speak',
//                         text: 'You picked me a green sky!',
//                         layer: 1,
//                         action: 'GoToFrame',
//                         position: 'top-centre',
//                         time: 5000,
//                         nextFrameId: '16',
//                     },
//                 ],
//             },
//             "14": {
//                 objects: [
//                     {
//                         type: 'Background',
//                         imageSrc: '/blueSky.jpg',
//                         layer: 0,
//                     },
//                     {
//                         type: 'Speak',
//                         text: 'You picked me a blue sky!',
//                         position: 'top-centre',
//                         layer: 1,
//                         action: 'GoToFrame',
//                         time: 5000,
//                         nextFrameId: '17',
//                     },
//                 ],
//             },
//             "15": {
//                 objects: [
//                     {
//                         type: 'Background',
//                         imageSrc: '/Trees.jpg',
//                         layer: 0,
//                     },
//                     {
//                         type: 'Character',
//                         imageSrc: '/Gilgili.png',
//                         position: 'bottom-centre',
//                         layer: 1,
//                     },
//                     {
//                         type: 'Speak',
//                         text: 'Time for a quiz!',
//                         position: 'bottom-left',
//                         layer: 2,
//                     },
//                     {
//                         type: 'Quiz',
//                         question: 'What color sky did you pick?',
//                         answers: [
//                             { text: "The sky was red.", isCorrect: true },
//                             { text: "The sky was blue.", isCorrect: false },
//                             { text: "The sky was green.", isCorrect: false },
//                         ],
//                         layer: 3,
//                     },
//                 ],
//             },
//             "16": {
//                 objects: [
//                     {
//                         type: 'Background',
//                         imageSrc: '/Trees.jpg',
//                         layer: 0,
//                     },
//                     {
//                         type: 'Character',
//                         imageSrc: '/Gilgili.png',
//                         position: 'bottom-centre',
//                         layer: 1,
//                     },
//                     {
//                         type: 'Speak',
//                         text: 'Time for a quiz!',
//                         position: 'bottom-left',
//                         layer: 2,
//                     },
//                     {
//                         type: 'Quiz',
//                         question: 'What color sky did you pick?',
//                         answers: [
//                             { text: "The sky was red.", isCorrect: false },
//                             { text: "The sky was blue.", isCorrect: false },
//                             { text: "The sky was green.", isCorrect: true },
//                         ],
//                         layer: 3,
//                     },
//                 ],
//             },
//             "17": {
//                 objects: [
//                     {
//                         type: 'Background',
//                         imageSrc: '/Trees.jpg',
//                         layer: 0,
//                     },
//                     {
//                         type: 'Character',
//                         imageSrc: '/Gilgili.png',
//                         position: 'bottom-centre',
//                         layer: 1,
//                     },
//                     {
//                         type: 'Speak',
//                         text: 'Time for a quiz!',
//                         position: 'bottom-left',
//                         layer: 2,
//                     },
//                     {
//                         type: 'Quiz',
//                         question: 'What color sky did you pick?',
//                         answers: [
//                             { text: "The rose was red.", isCorrect: false },
//                             { text: "The rose was blue.", isCorrect: true },
//                             { text: "The rose was green.", isCorrect: false },
//                         ],
//                         layer: 3,
//                     },
//                 ],
//             },
//             // Sky Game
//             "18": {
//                 objects: [
//                     {
//                         type: 'Background',
//                         imageSrc: '/blueSky.jpg',
//                         layer: 0,
//                         newGameFrame: 1,
//                         startGame: true,
//                     },
//                     {
//                         type: 'Character',
//                         imageSrc: '/Gilgili.png',
//                         position: 'centre',
//                         layer: 1,
//                     },
//                     {
//                         type: 'Speak',
//                         text: 'Do you want to play the leaf game with me?',
//                         position: 'top-centre',
//                         layer: 2,
//                     },
//                     {
//                         type: 'Button',
//                         layer: 3,
//                         action: 'GoToFrame',
//                         nextFrameId: '19',
//                         position: 'bottom-centre',
//                         color: 'green',
//                         text: 'Click to Play!',
//                     },
//                 ],
//             },
//             "19": {
//                 objects: [
//                     {
//                         type: 'Background',
//                         imageSrc: '/blankLeaf.png',
//                         layer: 0,
//                     },
//                     {
//                         type: 'Character',
//                         imageSrc: '/Gilgili.png',
//                         position: 'centre',
//                         layer: 1,
//                     },
//                     {
//                         type: 'Speak',
//                         text: 'Click the colour of leaf you would like!',
//                         position: 'top-centre',
//                         layer: 2,

//                     },
//                     {
//                         type: 'Button',
//                         layer: 3,
//                         action: 'GoToFrame',
//                         nextFrameId: '20',
//                         color: 'red',
//                         position: 'bottom-left',
//                         text: 'Red',
//                     },
//                     {
//                         type: 'Button',
//                         layer: 4,
//                         action: 'GoToFrame',
//                         nextFrameId: '21',
//                         color: 'green',
//                         position: 'bottom-centre',
//                         text: 'Green',
//                     },
//                     {
//                         type: 'Button',
//                         layer: 5,
//                         action: 'GoToFrame',
//                         nextFrameId: '22',
//                         color: 'blue',
//                         position: 'bottom-right',
//                         text: 'Blue',
//                     },
//                 ],
//             },
//             "20": {
//                 objects: [
//                     {
//                         type: 'Background',
//                         imageSrc: '/redLeaf.png',
//                         layer: 0,
//                     },
//                     {
//                         type: 'Speak',
//                         text: 'You picked me a red leaf!',
//                         layer: 1,
//                         action: 'GoToFrame',
//                         position: 'top-centre',
//                         time: 5000,
//                         nextFrameId: '23',
//                     },

//                 ],
//             },
//             "21": {
//                 objects: [
//                     {
//                         type: 'Background',
//                         imageSrc: '/greenLeaf.png',
//                         layer: 0,
//                     },
//                     {
//                         type: 'Speak',
//                         text: 'You picked me a green leaf!',
//                         layer: 1,
//                         action: 'GoToFrame',
//                         position: 'top-centre',
//                         time: 5000,
//                         nextFrameId: '24',
//                     },
//                 ],
//             },
//             "22": {
//                 objects: [
//                     {
//                         type: 'Background',
//                         imageSrc: '/blueLeaf.jpg',
//                         layer: 0,
//                     },
//                     {
//                         type: 'Speak',
//                         text: 'You picked me a blue leaf!',
//                         position: 'top-centre',
//                         layer: 1,
//                         action: 'GoToFrame',
//                         time: 5000,
//                         nextFrameId: '25',
//                     },
//                 ],
//             },
//             "23": {
//                 objects: [
//                     {
//                         type: 'Background',
//                         imageSrc: '/Trees.jpg',
//                         layer: 0,
//                     },
//                     {
//                         type: 'Character',
//                         imageSrc: '/Gilgili.png',
//                         position: 'bottom-centre',
//                         layer: 1,
//                     },
//                     {
//                         type: 'Speak',
//                         text: 'Time for a quiz!',
//                         position: 'bottom-left',
//                         layer: 2,
//                     },
//                     {
//                         type: 'Quiz',
//                         question: 'What color leaf did you pick?',
//                         answers: [
//                             { text: "The leaf was red.", isCorrect: true },
//                             { text: "The leaf was blue.", isCorrect: false },
//                             { text: "The leaf was green.", isCorrect: false },
//                         ],
//                         layer: 3,
//                     },
//                 ],
//             },
//             "24": {
//                 objects: [
//                     {
//                         type: 'Background',
//                         imageSrc: '/Trees.jpg',
//                         layer: 0,
//                     },
//                     {
//                         type: 'Character',
//                         imageSrc: '/Gilgili.png',
//                         position: 'bottom-centre',
//                         layer: 1,
//                     },
//                     {
//                         type: 'Speak',
//                         text: 'Time for a quiz!',
//                         position: 'bottom-left',
//                         layer: 2,
//                     },
//                     {
//                         type: 'Quiz',
//                         question: 'What color leaf did you pick?',
//                         answers: [
//                             { text: "The leaf was red.", isCorrect: false },
//                             { text: "The leaf was blue.", isCorrect: false },
//                             { text: "The leaf was green.", isCorrect: true },
//                         ],
//                         layer: 3,
//                     },
//                 ],
//             },
//             "25": {
//                 objects: [
//                     {
//                         type: 'Background',
//                         imageSrc: '/Trees.jpg',
//                         layer: 0,
//                     },
//                     {
//                         type: 'Character',
//                         imageSrc: '/Gilgili.png',
//                         position: 'bottom-centre',
//                         layer: 1,
//                     },
//                     {
//                         type: 'Speak',
//                         text: 'Time for a quiz!',
//                         position: 'bottom-left',
//                         layer: 2,
//                     },
//                     {
//                         type: 'Quiz',
//                         question: 'What color leaf did you pick?',
//                         answers: [
//                             { text: "The leaf was red.", isCorrect: false },
//                             { text: "The leaf was blue.", isCorrect: true },
//                             { text: "The leaf was green.", isCorrect: false },
//                         ],
//                         layer: 3,
//                     },
//                 ],
//             },
//         }
//     }
// };