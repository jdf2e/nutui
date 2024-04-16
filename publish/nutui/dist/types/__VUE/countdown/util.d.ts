export declare const getTimeStamp: (timeStr?: string | number) => number;
export declare const parseFormat: (time: {
    d: number;
    h: number;
    m: number;
    s: number;
    ms: number;
}, format: string) => string;
export declare const formatRemainTime: (t: number, format: string, type?: string) => string | {
    d: number;
    h: number;
    m: number;
    s: number;
    ms: number;
};
