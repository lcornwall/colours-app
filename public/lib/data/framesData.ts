export const frames = {
    "3-4": {
        frames: {
            "1": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/loadingDoodles.PNG',
                        layer: 0,
                        action: 'DoNothing',
                    },
                    {
                        type: 'BlueButton',
                        layer: 1,
                        action: 'DoNothing',
                    },
                    {
                        type: 'BlueButton',
                        layer: 2,
                        action: 'GoToFrame',
                        nextFrameId: '2',
                    },
                ],
            },
            "2": {
                objects: [
                    {
                        type: 'Background',
                        imageSrc: '/loadingDoodles.PNG',
                        layer: 0,
                        action: 'DoNothing',
                    },
                    {
                        type: 'BlueButton',
                        layer: 1,
                        action: 'DoNothing',
                    },
                ],
            },
        },
    },
};

