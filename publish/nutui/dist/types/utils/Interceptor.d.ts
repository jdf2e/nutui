export type Interceptor = (...args: any[]) => Promise<boolean> | boolean | undefined | void;
export declare const funInterceptor: (interceptor: Interceptor | undefined, { args, done, canceled }: {
    args?: unknown[];
    done: (val?: any) => void;
    canceled?: () => void;
}) => void;
