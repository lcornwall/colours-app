import { FramesData } from './types'; // Import your types



export const frames: FramesData = {

    "3-4": {

        frames: {

            "1": {

                objects: [

                    {

                        type: 'BlueButton',

                        layer: 0,

                        action: 'DoNothingAction',

                    },

                    {

                        type: 'BlueButton',

                        layer: 1,

                        action: 'GoToFrameAction',

                        nextFrameId: '2',

                    },

                ],

            },

            "2": {

                objects: [

                    {

                        type: 'Background',

                        layer: 0,

                        action: 'DoNothingAction',

                    },

                    {

                        type: 'BlueButton',

                        layer: 1,

                        action: 'GoToFrameAction',

                        nextFrameId: '1',

                    },

                ],

            },

        },

    },

    "7-8": {

        frames: {

            "3": {

                objects: [

                    {

                        type: 'Background',

                        layer: 0,

                        action: 'DoNothingAction',

                    },

                    {

                        type: 'BlueButton',

                        layer: 1,

                        action: 'GoToFrameAction',

                        nextFrameId: '4',

                    },

                ],

            },

            "4": {

                objects: [

                    {

                        type: 'Background',

                        layer: 0,

                        action: 'DoNothingAction',

                    },

                    {

                        type: 'BlueButton',

                        layer: 1,

                        action: 'GoToFrameAction',

                        nextFrameId: '3',

                    },

                ],

            },

        },

    },

};
// export interface FrameComponent {
//     type: string;
//     props: {
//         color?: string;
//         position?: { x: number; y: number };
//         label?: string;
//         action?: {
//             type: string;
//             params?: { targetFrame: number };
//         };
//     };
// }

// export interface FrameData {
//     id: number;
//     ageTag: string;
//     components: FrameComponent[];
//     swipeToFrame?: number;
// }

// export const framesData: FrameData[] = [
//     {
//         id: 0,
//         ageTag: "3-4",
//         components: [
//             { type: 'Background', props: { color: 'lightblue' } },
//             {
//                 type: 'Button',
//                 props: {
//                     color: 'blue',
//                     position: { x: 100, y: 150 },
//                     label: 'Next',
//                     action: { type: 'GoToFrame', params: { targetFrame: 1 } },
//                 },
//             },
//         ],
//         swipeToFrame: 1,
//     },
//     {
//         id: 1,
//         ageTag: "3-4",
//         components: [
//             { type: 'Background', props: { color: 'lightgreen' } },
//             {
//                 type: 'Button',
//                 props: {
//                     color: 'green',
//                     position: { x: 50, y: 200 },
//                     label: 'Go Back',
//                     action: { type: 'GoToFrame', params: { targetFrame: 0 } },
//                 },
//             },
//         ],
//         swipeToFrame: 0,
//     },
// ];
