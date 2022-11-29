import { body } from '@/packages/utils/util';
let count = 0;

const CLSNAME = 'nut-overflow-hidden';

export const useLockScroll = (isLock: () => boolean) => {
  const lock = () => {
    if (isLock()) {
      !count && body.classList.add(CLSNAME);
      count++;
    }
  };

  const unlock = () => {
    if (isLock() && count) {
      count--;
      !count && body.classList.remove(CLSNAME);
    }
  };

  return [lock, unlock];
};
