export interface CachedPosition {
    index: number;
    top: number;
    bottom: number;
    height: number;
    dValue: number;
}
export declare enum CompareResult {
    eq = 1,
    lt = 2,
    gt = 3
}
export declare function binarySearch<T, VT>(list: T[], value: VT, compareFunc: (current: T, value: VT) => CompareResult): number | null;
