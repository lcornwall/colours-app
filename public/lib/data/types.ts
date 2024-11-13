// types.ts
export interface ObjectConfig {
    type: string;
    layer: number;
    position?: string;
    imageSrc?: string;
    text?: string;
    action?: string;
    nextFrameId?: string;
    color?: string;
    time?: number;
    question?: string;
    answers?: { text: string; isCorrect: boolean }[];
}

export interface FrameConfig {
    objects: ObjectConfig[];
}

// Add this new type to describe the structure of `frames`
export interface Frames {
    [key: string]: { frames: Record<string, FrameConfig> };
}