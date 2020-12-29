let count = 0;

const CLSNAME = 'nut-overflow-hidden';

export const useLockScroll = (isLock: () => boolean) => {
  const lock = () => {
    if (isLock()) {
      !count && document.body.classList.add(CLSNAME);
      count++;
    }
  };

  const unlock = () => {
    if (isLock() && count) {
      count--;
      !count && document.body.classList.remove(CLSNAME);
    }
  };

  return [lock, unlock];
};
