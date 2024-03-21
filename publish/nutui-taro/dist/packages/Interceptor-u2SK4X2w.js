import { d as isPromise } from "./util-CyCQsn5J.js";
const funInterceptor = (interceptor, {
  args = [],
  done,
  canceled
}) => {
  if (interceptor) {
    const returnVal = interceptor.apply(null, args);
    if (isPromise(returnVal)) {
      returnVal.then((value) => {
        if (value) {
          done(value);
        } else if (canceled) {
          canceled();
        }
      }).catch(() => {
      });
    } else if (returnVal) {
      done();
    } else if (canceled) {
      canceled();
    }
  } else {
    done();
  }
};
export {
  funInterceptor as f
};
