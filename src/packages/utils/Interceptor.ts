import { isPromise } from './util';

export type Interceptor = (...args: any[]) => Promise<boolean> | boolean | undefined | void;

export function funInterceptor(
  interceptor: Interceptor | undefined,
  {
    args = [],
    done,
    canceled
  }: {
    args?: unknown[];
    done: () => void;
    canceled?: () => void;
  }
) {
  if (interceptor) {
    const returnVal = interceptor.apply(null, args);

    if (isPromise(returnVal)) {
      returnVal
        .then((value) => {
          if (value) {
            done();
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
}
