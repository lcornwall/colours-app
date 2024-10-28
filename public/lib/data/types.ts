export interface ObjectConfig {
    type: string;
    layer: number;
    action: string;
    nextFrameId?: string;
}

export interface FrameConfig {
    objects: ObjectConfig[];
}

export interface FramesData {

    [ageGroup: string]: {
        frames: {
            [frameId: string]: FrameConfig;
        };
    };
}

