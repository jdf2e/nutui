import { Ref, isRef, onMounted, onUnmounted } from 'vue';

type TargetType = Element | Ref<Element | undefined>;

export function useClickAway(onClickAway: () => void, target: TargetType | TargetType[], eventName = 'touchstart') {
  const handler = (event: Event) => {
    const targets = Array.isArray(target) ? target : [target];
    const inTarget = targets.some((item) => {
      const targetElement = isRef(item) ? item.value : item;
      return !targetElement || targetElement.contains(event.target as Node);
    });
    if (!inTarget) {
      onClickAway();
    }
  };

  onMounted(() => {
    window.addEventListener(eventName, handler, true);
  });

  onUnmounted(() => {
    window.removeEventListener(eventName, handler, true);
  });
}
