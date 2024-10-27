export interface ObjectConfig {

    type: string; // The type of the object (e.g., "Background", "BlueButton")

    layer: number; // Layer for z-index positioning

    action: string; // Action associated with the object

    nextFrameId?: string; // Optional, only for buttons that navigate

}



export interface FrameConfig {

    objects: ObjectConfig[]; // Array of objects in the frame

}



export interface FramesData {

    [ageGroup: string]: {

        frames: {

            [frameId: string]: FrameConfig; // Frames indexed by frame IDs

        };

    };

}

