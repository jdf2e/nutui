import { reactive } from 'vue';

const DISTANCE = 5;

type Direction = 'horizontal' | 'vertical' | '';

export function useTouch() {
  const state = reactive({
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    offsetX: 0,
    offsetY: 0,
    direction: '' as Direction
  });
  const getDirection = (x: number, y: number) => {
    if (x > y && x > DISTANCE) return 'horizontal';
    if (y > x && y > DISTANCE) return 'vertical';
    return '';
  };
  const reset = () => {
    state.startX = 0;
    state.startY = 0;
    state.deltaX = 0;
    state.deltaY = 0;
    state.offsetX = 0;
    state.offsetY = 0;
    state.direction = '';
  };

  const start = ((e: TouchEvent) => {
    reset();
    state.startX = e.touches[0].clientX;
    state.startY = e.touches[0].clientY;
  }) as EventListener;

  const move = ((e: TouchEvent) => {
    state.deltaX = e.touches[0].clientX - state.startX;
    state.deltaY = e.touches[0].clientY - state.startY;
    state.offsetX = Math.abs(state.deltaX);
    state.offsetY = Math.abs(state.deltaY);

    if (!state.direction) {
      state.direction = getDirection(state.offsetX, state.offsetY);
    }
  }) as EventListener;

  return {
    state,
    start,
    reset,
    move
  };
}
