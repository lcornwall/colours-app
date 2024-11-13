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