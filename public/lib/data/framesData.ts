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
                        newGameFrame: 3,
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
                        newGameFrame: 8,
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
            // NUMBERS COLOURS
            "8": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/Trees.jpg',
                        layer: 0,
                        newGameFrame: 8,
                        startGame: true,
                    },

                    {
                        type: 'Character',
                        imageSrc: '/characters/Gilgili.png',
                        position: 'centre',
                        layer: 1,
                    },
                    {
                        type: 'Speak',
                        text: "Hello, you can pick any colour to change your mouse and learn a number!",
                        position: 'top-centre',
                        layer: 2,
                        action: 'GoToFrame',
                        time: 2000,
                        nextFrameId: '9',
                    },


                ]
            },

            "9": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/cartoons.jpg',
                        layer: 0,
                        newGameFrame: 1,
                        startGame: true,
                    },

                    {
                        type: "Button",
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "10",
                        position: "top-left",
                        color: "white",
                    },
                    {
                        type: "Button",
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "11",
                        position: "top-right",
                        color: "black",

                    },

                    {
                        type: "Button",
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "12",
                        position: "top-centre",
                        color: "grey",

                    },
                    {
                        type: "Button",
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "13",
                        position: "centre-left",
                        color: "lightgreen",
                    },
                    {
                        type: "Button",
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "14",
                        position: "centre-right",
                        color: "darkgreen",
                    },
                    {
                        type: "Button",
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "15",
                        position: "centre",
                        color: "red",
                    },
                    {
                        type: "Button",
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "16",
                        position: "bottom-centre",
                        color: "darkred",
                    },
                    {
                        type: "Button",
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "17",
                        position: "bottom-left",
                        color: "lightblue",
                    },
                    {
                        type: "Button",
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "18",
                        position: "bottom-right",
                        color: "darkblue",
                    }
                ]
            },
            "10": {
                "objects": [
                    {
                        type: "Background",
                        imageSrc: "white",
                        layer: 0
                    },
                    {
                        type: "Speak",
                        text: "Safed, Ek!",
                        position: "top-centre",
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "95",
                        time: 3000,
                    }
                ]
            },
            "11": {
                "objects": [
                    {
                        type: "Background",
                        imageSrc: "black",
                        layer: 0
                    },
                    {
                        type: "Speak",
                        text: "Kala, do!",
                        position: "top-centre",
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "9",
                        time: 3000,
                    }
                ]
            },
            "12": {
                "objects": [
                    {
                        type: "Background",
                        imageSrc: "grey",
                        layer: 0
                    },
                    {
                        type: "Speak",
                        text: "Gre, teen!",
                        position: "top-centre",
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "9",
                        time: 3000,
                    }
                ]
            },
            "13": {
                "objects": [
                    {
                        type: "Background",
                        imageSrc: "lightgreen",
                        layer: 0
                    },
                    {
                        type: "Speak",
                        text: "Halka hara, char!",
                        position: "top-centre",
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "9",
                        time: 3000,
                    }
                ]
            },
            "14": {
                "objects": [
                    {
                        type: "Background",
                        imageSrc: "darkgreen",
                        layer: 0
                    },
                    {
                        type: "Speak",
                        text: "Gara hara, panch!",
                        position: "top-centre",
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "9",
                        time: 3000,
                    }
                ]
            },
            "15": {
                "objects": [
                    {
                        type: "Background",
                        imageSrc: "red",
                        layer: 0
                    },
                    {
                        type: "Speak",
                        text: "Halka lal, chhah!",
                        position: "top-centre",
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "9",
                        time: 3000,
                    }
                ]
            },
            "16": {
                "objects": [
                    {
                        type: "Background",
                        imageSrc: "darkred",
                        layer: 0
                    },
                    {
                        type: "Speak",
                        text: "Gara lal, saat!",
                        position: "top-centre",
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "9",
                        time: 3000,
                    }
                ]
            },
            "17": {
                "objects": [
                    {
                        type: "Background",
                        imageSrc: "lightblue",
                        layer: 0
                    },
                    {
                        type: "Speak",
                        text: "Halka neela, aath!",
                        position: "top-centre",
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "9",
                        time: 3000,
                    }
                ]
            },

            "18": {
                "objects": [
                    {
                        type: "Background",
                        imageSrc: "darkblue",
                        layer: 0
                    },
                    {
                        type: "Speak",
                        text: "Gahra neela, nau!",
                        position: "top-centre",
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "9",
                        time: 3000,
                    }
                ]
            },

        }
    },

    "7-8": {
        frames: {
            "1": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/Holi.jpg',
                        layer: 0,
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
                        text: "Hello, let's learn colour combinations, please pick my dress for the Holi festival!",
                        position: 'top-centre',
                        layer: 2,
                        action: 'GoToFrame',
                        time: 4000,
                        nextFrameId: '2',
                    },


                ]
            },

            "2": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: 'white',
                        layer: 0,
                    },


                    {
                        type: "Button",
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "3",
                        position: "centre-left",
                        color: "green",

                    },

                    {
                        type: "Button",
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "4",
                        position: "centre-right",
                        color: "orange",
                    },

                    {
                        type: "Button",
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "5",
                        position: "centre",
                        color: "violet",
                    }
                ]
            },
            "3": {
                "objects": [
                    {
                        type: "Background",
                        imageSrc: "/greenDress.jpg",
                        layer: 0
                    },
                    {
                        type: "Speak",
                        text: "You picked a green dress, what fun!",
                        position: "top-centre",
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "6",
                        time: 3000,
                    }
                ]
            },
            "4": {
                "objects": [
                    {
                        type: "Background",
                        imageSrc: "/orangeDress.jpg",
                        layer: 0
                    },
                    {
                        type: "Speak",
                        text: "You picked an orange dress, what fun!",
                        position: "top-centre",
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "6",
                        time: 3000,
                    }
                ]
            },
            "5": {
                "objects": [
                    {
                        type: "Background",
                        imageSrc: "/violetDress.jpg",
                        layer: 0
                    },
                    {
                        type: "Speak",
                        text: "You picked a violet dress, what fun!",
                        position: "top-centre",
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "6",
                        time: 3000,
                    }
                ]
            },

            "6": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/Holi.jpg',
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
                        text: "What fun. Now let's use these new colours to colour a house!",
                        position: 'top-centre',
                        layer: 2,
                        action: 'GoToFrame',
                        time: 4000,
                        nextFrameId: '7',
                    },


                ]
            },

            "7": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/blankHouse.png',
                        layer: 0,
                    },

                    {
                        type: "Button",
                        layer: 1,
                        position: "bottom-left",
                        action: "GoToFrame",
                        nextFrameId: "8",
                        color: "orange",
                    },
                    {
                        type: "Button",
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "9",
                        position: "bottom-centre",
                        color: "green",

                    },

                    {
                        type: "Button",
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "10",
                        position: "bottom-right",
                        color: "violet",

                    },
                ]

            },

            "8": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/orangeHouse.jpg',
                        layer: 0,
                    },

                    {
                        type: 'cornerCharacter',
                        imageSrc: '/characters/Didi.png',
                        position: 'bottom-centre',
                        layer: 1,
                    },
                    {
                        type: 'Speak',
                        text: "An orange house - bahut badiya! Thanks for playing",
                        position: 'top-centre',
                        layer: 2,
                    },


                ]
            },

            "9": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/greenHouse.jpg',
                        layer: 0,
                    },

                    {
                        type: 'cornerCharacter',
                        imageSrc: '/characters/Didi.png',
                        position: 'bottom-centre',
                        layer: 1,
                    },
                    {
                        type: 'Speak',
                        text: "A green house - bahut badiya! Thanks for playing",
                        position: 'top-centre',
                        layer: 2,
                    },


                ]
            },

            "10": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/violetHouse.jpg',
                        layer: 0,
                    },

                    {
                        type: 'Character',
                        imageSrc: '/characters/Didi.png',
                        position: 'bottom-centre',
                        layer: 1,
                    },
                    {
                        type: 'Speak',
                        text: "A violet house - bahut badiya! Thanks for playing",
                        position: 'top-centre',
                        layer: 2,
                    },


                ]
            },
        }
    },
    "5-6": {
        frames: {
            "1": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/Trees.jpg',
                        layer: 0,
                        startGame: true,
                    },

                    {
                        type: 'Character',
                        imageSrc: '/characters/Gilgili.png',
                        position: 'centre',
                        layer: 1,
                    },
                    {
                        type: 'Speak',
                        text: "Would you like to play a game related to primary colours?",
                        position: 'top-centre',
                        layer: 2,
                        action: 'GoToFrame',
                        nextFrameId: '2',
                        time: 4000,
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
                        type: 'Character',
                        imageSrc: '/characters/Larli.png',
                        position: 'centre',
                        layer: 1,
                    },
                    {
                        type: 'Speak',
                        text: "Help me pick a dress colour?",
                        position: 'top-centre',
                        layer: 1,
                    },

                    {
                        type: "Button",
                        layer: 1,
                        position: "bottom-left",
                        color: "blue",
                        text: "Neela",
                        action: "GoToFrame",
                        nextFrameId: "5",
                    },
                    {
                        type: "Button",
                        layer: 1,
                        position: "bottom-centre",
                        color: "yellow",
                        text: "Peela",
                        action: "GoToFrame",
                        nextFrameId: "6",

                    },
                    {
                        type: "Button",
                        layer: 1,
                        position: "bottom-right",
                        color: "red",
                        text: "Lal",
                        action: "GoToFrame",
                        nextFrameId: "7",
                    },
                ]
            },
            "5": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/blueDress.jpg',
                        layer: 0,
                    },

                    {
                        type: 'Character',
                        imageSrc: '/characters/Larli.png',
                        position: 'centre',
                        layer: 1,
                    },
                    {
                        type: 'Speak',
                        text: "Thanks for picking me a blue (neela) dress!",
                        position: 'top-centre',
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "8",
                        time: 4000
                    },
                ]
            },
            "6": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/yellowDress.webp',
                        layer: 0,
                    },

                    {
                        type: 'Character',
                        imageSrc: '/characters/Larli.png',
                        position: 'centre',
                        layer: 1,
                    },
                    {
                        type: 'Speak',
                        text: "Thanks for picking me a yellow (peela) dress!",
                        position: 'top-centre',
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "8",
                        time: 4000
                    },
                ]
            },
            "7": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/redDress.jpg',
                        layer: 0,
                    },

                    {
                        type: 'Character',
                        imageSrc: '/characters/Larli.png',
                        position: 'centre',
                        layer: 1,
                    },
                    {
                        type: 'Speak',
                        text: "Thanks for picking me a red (lal) dress!",
                        position: 'top-centre',
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "8",
                        time: 4000
                    },
                ]
            },
            "8": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/primaryColours.jpg',
                        layer: 0,
                    },

                    {
                        type: 'Character',
                        imageSrc: '/characters/Baubla.png',
                        position: 'centre',
                        layer: 1,
                    },
                    {
                        type: 'Speak',
                        text: "HMM you learned red, blue and yellow! The primary colours! Bye, I must clean!",
                        position: 'top-centre',
                        layer: 1,
                    },
                ]
            }
        }
    },
    "6-7": {
        frames: {
            "1": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/rainbow.webp',
                        layer: 0,
                        newGameFrame: 8, // CHANGE
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
                        text: "Would you like to play a game related to secondary colours orange, green, and purple?",
                        position: 'top-centre',
                        layer: 2,
                        action: 'GoToFrame',
                        nextFrameId: '2',
                        time: 4000,
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
                        type: 'Character',
                        imageSrc: '/characters/Baubla.png',
                        position: 'centre',
                        layer: 1,
                    },
                    {
                        type: 'Speak',
                        text: "Help me pick a dress colour?",
                        position: 'top-centre',
                        layer: 1,
                    },

                    {
                        type: "Button",
                        layer: 1,
                        position: "bottom-left",
                        color: "green",
                        text: "Hara",
                        action: "GoToFrame",
                        nextFrameId: "3",
                    },
                    {
                        type: "Button",
                        layer: 1,
                        position: "bottom-centre",
                        color: "orange",
                        text: "Narangi",
                        action: "GoToFrame",
                        nextFrameId: "4",

                    },
                    {
                        type: "Button",
                        layer: 1,
                        position: "bottom-right",
                        color: "purple",
                        text: "Baingani",
                        action: "GoToFrame",
                        nextFrameId: "5",
                    },
                ]
            },
            "3": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/greemDress.jpg',
                        layer: 0,
                    },

                    {
                        type: 'Character',
                        imageSrc: '/characters/Baubla.png',
                        position: 'centre',
                        layer: 1,
                    },
                    {
                        type: 'Speak',
                        text: "Thanks for picking me a green (hara) dress!",
                        position: 'top-centre',
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "6",
                        time: 4000
                    },
                ]
            },
            "4": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/orangeDress.jpg',
                        layer: 0,
                    },

                    {
                        type: 'Character',
                        imageSrc: '/characters/Baubla.png',
                        position: 'centre',
                        layer: 1,
                    },
                    {
                        type: 'Speak',
                        text: "Thanks for picking me an orange (narangi) dress!",
                        position: 'top-centre',
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "6",
                        time: 4000
                    },
                ]
            },
            "5": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/violetDress.jpg',
                        layer: 0,
                    },

                    {
                        type: 'Character',
                        imageSrc: '/characters/Larli.png',
                        position: 'centre',
                        layer: 1,
                    },
                    {
                        type: 'Speak',
                        text: "Thanks for picking me a purple (baingani) dress!",
                        position: 'top-centre',
                        layer: 1,
                        action: "GoToFrame",
                        nextFrameId: "6",
                        time: 4000
                    },
                ]
            },
            "6": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/primaryColours.jpg',
                        layer: 0,
                    },

                    {
                        type: 'Character',
                        imageSrc: '/characters/Didi.png',
                        position: 'centre',
                        layer: 1,
                    },
                    {
                        type: 'Speak',
                        text: "HMM you learned green, purple and orange! Some secondary colours! Bye!",
                        position: 'top-centre',
                        layer: 1,
                    },
                ]
            }
        }
    }
}