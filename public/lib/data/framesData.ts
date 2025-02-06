import { Frames } from './types';

export const frames: Frames = {
    "3-4": {
        frames: {
            // ROSE GAME
            "1": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/Trees.jpg',
                        layer: 0,
                        newGameFrame: 22,
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
            // SKY GAME
            "22": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/Trees.jpg',
                        layer: 0,
                        newGameFrame: 43,
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
                        text: "Hello! I'm Kakka! Gabbu will teach you about sky colour!",
                        position: 'top-centre',
                        layer: 2,
                    },

                    {
                        type: 'Button',
                        layer: 3,
                        action: 'GoToFrame',
                        nextFrameId: '23',
                        position: 'bottom-centre',
                        color: 'red',
                        text: 'Click to Play!',
                    },
                ]
            },
            "23": {
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
                        text: "Hello! I'm Gabbu! I will be teaching you sky colours!",
                        position: 'top-centre',
                        layer: 4,
                    },

                    {
                        type: 'Button',
                        layer: 5,
                        action: 'GoToFrame',
                        nextFrameId: '24',
                        time: 5000,
                    },
                ]
            },
            "24": {
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
                        nextFrameId: '25',
                        time: 5000,
                    },

                ]
            },
            "25": {
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
                        nextFrameId: '26',
                        time: 5000,
                        layer: 3,
                    },

                ]
            },
            "26": {
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
                        nextFrameId: '27',
                        layer: 3,
                        time: 5000,
                    },
                ]
            },
            "27": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/blankSky.jpg',
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
                        text: 'Click the colour of sky you would like!',
                        position: 'top-centre',
                        layer: 3,

                    },
                    {
                        type: 'Button',
                        layer: 4,
                        action: 'GoToFrame',
                        nextFrameId: '28',
                        color: 'red',
                        position: 'bottom-left',
                        text: 'Red',
                    },
                    {
                        type: 'Button',
                        layer: 5,
                        action: 'GoToFrame',
                        nextFrameId: '30',
                        color: 'green',
                        position: 'bottom-centre',
                        text: 'Green',
                    },
                    {
                        type: 'Button',
                        layer: 6,
                        action: 'GoToFrame',
                        nextFrameId: '29',
                        color: 'blue',
                        position: 'bottom-right',
                        text: 'Blue',
                    },
                ],
            },
            "28": {
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
                        nextFrameId: '31',
                    },

                ],
            },
            "29": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/blueSky.jpg',
                        layer: 0,
                    },
                    {
                        type: 'Speak',
                        text: 'You picked me a blue sky!',
                        layer: 1,
                        action: 'GoToFrame',
                        position: 'top-centre',
                        time: 5000,
                        nextFrameId: '31',
                    },
                ],
            },
            "30": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/greenSky.jpg',
                        layer: 0,
                    },
                    {
                        type: 'Speak',
                        text: 'You picked me a green sky!',
                        position: 'top-centre',
                        layer: 1,
                        action: 'GoToFrame',
                        time: 5000,
                        nextFrameId: '31',
                    },
                ],
            },
            "31": {
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
                        nextFrameId: '32',

                    },
                ]


            },
            "32": {
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
                        nextFrameId: '33',

                    },
                ]

            },
            "33": {
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
                        nextFrameId: '34',

                    },
                    {
                        type: 'Button',
                        color: 'blue',
                        position: 'bottom-right',
                        layer: 4,
                        action: 'GoToFrame',
                        nextFrameId: '35',

                    },
                    {
                        type: 'Button',
                        color: 'green',
                        position: 'bottom-centre',
                        layer: 5,
                        action: 'GoToFrame',
                        nextFrameId: '35',

                    },
                ]
            },
            "34": {
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
                        nextFrameId: '36',

                    },
                ]

            },
            "35": {
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
                        nextFrameId: '33',

                    },
                ]

            },
            "36": {
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
                        nextFrameId: '37',

                    },
                    {
                        type: 'Button',
                        color: 'blue',
                        position: 'bottom-right',
                        layer: 4,
                        action: 'GoToFrame',
                        nextFrameId: '38',

                    },
                    {
                        type: 'Button',
                        color: 'green',
                        position: 'bottom-centre',
                        layer: 5,
                        action: 'GoToFrame',
                        nextFrameId: '37',

                    },
                ]
            },
            "37": {
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
                        nextFrameId: '36',

                    },
                ]

            },
            "38": {
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
                        nextFrameId: '39',

                    },
                ]

            },
            "39": {
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
                        nextFrameId: '40',

                    },
                    {
                        type: 'Button',
                        color: 'blue',
                        position: 'bottom-right',
                        layer: 4,
                        action: 'GoToFrame',
                        nextFrameId: '40',

                    },
                    {
                        type: 'Button',
                        color: 'green',
                        position: 'bottom-centre',
                        layer: 5,
                        action: 'GoToFrame',
                        nextFrameId: '41',

                    },
                ]
            },
            "40": {
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
                        nextFrameId: '39',

                    },
                ]

            },
            "41": {
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
                        nextFrameId: '42',

                    },
                ]

            },
            "42": {
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
                        text: 'Well done for playing the sky game!',
                        position: 'top-centre',
                        layer: 2,
                    }
                ]
            },
            // LEAF GAME
            "43": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/Trees.jpg',
                        layer: 0,
                        newGameFrame: 1,
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
                        text: "Hello! I'm Kakka! Gabbu will teach you about leaf colour!",
                        position: 'top-centre',
                        layer: 2,
                    },

                    {
                        type: 'Button',
                        layer: 3,
                        action: 'GoToFrame',
                        nextFrameId: '44',
                        position: 'bottom-centre',
                        color: 'red',
                        text: 'Click to Play!',
                    },
                ]
            },
            "44": {
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
                        text: "Hello! I'm Gabbu! I will be teaching you leaf colours!",
                        position: 'top-centre',
                        layer: 4,
                    },

                    {
                        type: 'Button',
                        layer: 5,
                        action: 'GoToFrame',
                        nextFrameId: '45',
                        time: 5000,
                    },
                ]
            },
            "45": {
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
                        nextFrameId: '46',
                        time: 5000,
                    },

                ]
            },
            "46": {
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
                        nextFrameId: '47',
                        time: 5000,
                        layer: 3,
                    },

                ]
            },
            "47": {
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
                        nextFrameId: '48',
                        layer: 3,
                        time: 5000,
                    },
                ]
            },
            "48": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/blankLeaf.png',
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
                        text: 'Click the colour of leaf you would like!',
                        position: 'top-centre',
                        layer: 3,

                    },
                    {
                        type: 'Button',
                        layer: 4,
                        action: 'GoToFrame',
                        nextFrameId: '49',
                        color: 'red',
                        position: 'bottom-left',
                        text: 'Red',
                    },
                    {
                        type: 'Button',
                        layer: 5,
                        action: 'GoToFrame',
                        nextFrameId: '51',
                        color: 'green',
                        position: 'bottom-centre',
                        text: 'Green',
                    },
                    {
                        type: 'Button',
                        layer: 6,
                        action: 'GoToFrame',
                        nextFrameId: '50',
                        color: 'blue',
                        position: 'bottom-right',
                        text: 'Blue',
                    },
                ],
            },
            "49": {
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
                        nextFrameId: '52',
                    },

                ],
            },
            "50": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/blueLeaf.jpg',
                        layer: 0,
                    },
                    {
                        type: 'Speak',
                        text: 'You picked me a blue leaf!',
                        layer: 1,
                        action: 'GoToFrame',
                        position: 'top-centre',
                        time: 5000,
                        nextFrameId: '52',
                    },
                ],
            },
            "51": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/greenLeaf.png',
                        layer: 0,
                    },
                    {
                        type: 'Speak',
                        text: 'You picked me a green leaf!',
                        position: 'top-centre',
                        layer: 1,
                        action: 'GoToFrame',
                        time: 5000,
                        nextFrameId: '52',
                    },
                ],
            },
            "52": {
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
                        nextFrameId: '53',

                    },
                ]


            },
            "53": {
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
                        nextFrameId: '54',

                    },
                ]

            },
            "54": {
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
                        nextFrameId: '55',

                    },
                    {
                        type: 'Button',
                        color: 'blue',
                        position: 'bottom-right',
                        layer: 4,
                        action: 'GoToFrame',
                        nextFrameId: '56',

                    },
                    {
                        type: 'Button',
                        color: 'green',
                        position: 'bottom-centre',
                        layer: 5,
                        action: 'GoToFrame',
                        nextFrameId: '56',

                    },
                ]
            },
            "55": {
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
                        nextFrameId: '57',

                    },
                ]

            },
            "56": {
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
                        nextFrameId: '54',

                    },
                ]

            },
            "57": {
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
                        nextFrameId: '58',

                    },
                    {
                        type: 'Button',
                        color: 'blue',
                        position: 'bottom-right',
                        layer: 4,
                        action: 'GoToFrame',
                        nextFrameId: '59',

                    },
                    {
                        type: 'Button',
                        color: 'green',
                        position: 'bottom-centre',
                        layer: 5,
                        action: 'GoToFrame',
                        nextFrameId: '58',

                    },
                ]
            },
            "58": {
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
                        nextFrameId: '57',

                    },
                ]

            },
            "59": {
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
                        nextFrameId: '60',

                    },
                ]

            },
            "60": {
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
                        nextFrameId: '61',

                    },
                    {
                        type: 'Button',
                        color: 'blue',
                        position: 'bottom-right',
                        layer: 4,
                        action: 'GoToFrame',
                        nextFrameId: '61',

                    },
                    {
                        type: 'Button',
                        color: 'green',
                        position: 'bottom-centre',
                        layer: 5,
                        action: 'GoToFrame',
                        nextFrameId: '62',

                    },
                ]
            },
            "61": {
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
                        nextFrameId: '60',

                    },
                ]

            },
            "62": {
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
                        nextFrameId: '63',

                    },
                ]

            },
            "63": {
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
                        text: 'Well done for playing the leaf game!',
                        position: 'top-centre',
                        layer: 2,
                    }
                ]
            },

        }

    },
    "4-5": {
        frames: {
            // CROW GAME
            "1": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/kidsFlowers.webp',
                        layer: 0,
                        newGameFrame: 3, // change
                        startGame: true,
                    },

                    {
                        type: 'Gif',
                        imageSrc: '/crow.gif',
                        position: 'centre',
                        layer: 1,
                    },

                    {
                        type: 'Button',
                        layer: 2,
                        action: 'GoToFrame',
                        nextFrameId: '2',
                        position: 'bottom-centre',
                        color: 'black',
                    },
                ]
            },
            "2": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/kidsFlowers.webp',
                        layer: 0,
                    },

                    {
                        type: 'Gif',
                        imageSrc: '/crow.gif',
                        position: 'centre',
                        layer: 1,
                    },

                    {
                        type: 'Speak',
                        text: "Kala!",
                        position: 'top-centre',
                        layer: 2,
                        action: 'GoToFrame',
                        time: 1000,
                        nextFrameId: '1',
                    },

                ]
            },
            // COW GAME
            "3": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/kidsFlowers.webp',
                        layer: 0,
                        newGameFrame: 5,
                        startGame: true,
                    },

                    {
                        type: 'Gif',
                        imageSrc: '/cow.gif',
                        position: 'centre',
                        layer: 1,
                    },

                    {
                        type: 'Button',
                        layer: 2,
                        action: 'GoToFrame',
                        nextFrameId: '4',
                        position: 'bottom-centre',
                        color: 'white',
                    },
                ]
            },
            "4": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/kidsFlowers.webp',
                        layer: 0,
                    },

                    {
                        type: 'Gif',
                        imageSrc: '/cow.gif',
                        position: 'centre',
                        layer: 1,
                    },

                    {
                        type: 'Speak',
                        text: "Saved!",
                        position: 'top-centre',
                        layer: 2,
                        action: 'GoToFrame',
                        time: 1000,
                        nextFrameId: '3',
                    },

                ]
            },
            // SKY SHAKE GAME
            "5": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/Trees.jpg',
                        layer: 0,
                        newGameFrame: 3, // change
                        startGame: true,
                    },

                    {
                        type: 'Character',
                        imageSrc: '/characters/Larli.png',
                        position: 'centre',
                        layer: 1,
                    },
                    {
                        type: 'Speak',
                        text: "Hello, shake your mouse to change the sky!",
                        position: 'top-centre',
                        layer: 2,
                        action: 'ShakeMouse',
                        nextFrameId: '6',
                    },


                ]
            },
            "6": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/clouds.jpg',
                        layer: 0,
                    },

                    {
                        type: 'Speak',
                        text: "Halka neela!",
                        position: 'top-centre',
                        layer: 1,
                        action: 'ShakeMouse',
                        nextFrameId: '7',
                    },

                ]
            },
            "7": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/evening.avif',
                        layer: 0,
                    },

                    {
                        type: 'Speak',
                        text: "Gahra neela!",
                        position: 'top-centre',
                        layer: 1,
                        action: 'ShakeMouse',
                        nextFrameId: '6',
                    },

                ]
            },

        }
    }
}