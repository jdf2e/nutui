import { body } from '@/packages/utils/util';
let count = 0;

const CLSNAME = 'nut-overflow-hidden';

export const useLockScroll = (isLock: () => boolean) => {
  const lock = () => {
    if (isLock()) {
      try {
        !count && body.classList.add(CLSNAME);
        count++;
      } catch (error) {}
    }
  };

  const unlock = () => {
    if (isLock() && count) {
      try {
        count--;
        !count && body.classList.remove(CLSNAME);
      } catch (error) {}
    }
  };

  return [lock, unlock];
};
