import { isPromise } from './util';
export type Interceptor = (...args: any[]) => Promise<boolean> | boolean | undefined | void;

export const funInterceptor = (
  interceptor: Interceptor | undefined,
  {
    args = [],
    done,
    canceled
  }: {
    args?: unknown[];
    done: (val?: any) => void;
    canceled?: () => void;
  }
) => {
  if (interceptor) {
    const returnVal = interceptor.apply(null, args);

    if (isPromise(returnVal)) {
      returnVal
        .then((value) => {
          if (value) {
            done(value);
          } else if (canceled) {
            canceled();
          }
        })
        .catch(() => {});
    } else if (returnVal) {
      done();
    } else if (canceled) {
      canceled();
    }
  } else {
    done();
  }
};
