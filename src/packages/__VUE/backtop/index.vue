<template>
  <div :class="classes" :style="style" @click.stop="handleClick">
    <slot>
      <Top size="19" class="nut-backtop-main"></Top>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, onActivated, onDeactivated, ref } from 'vue';
import requestAniFrame, { cancelRaf } from '@/packages/utils/raf';
import { Top } from '@nutui/icons-vue';

defineOptions({
  name: 'NutBacktop'
});

export type BacktopProps = Partial<{
  bottom: number;
  right: number;
  elId: string;
  distance: number;
  zIndex: number;
  isAnimation: boolean;
  duration: number;
}>;

const props = withDefaults(defineProps<BacktopProps>(), {
  bottom: 20,
  right: 10,
  elId: 'body',
  distance: 200,
  zIndex: 10,
  isAnimation: true,
  duration: 1000
});

const emit = defineEmits(['click']);

const backTop = ref(false);
const scrollTop = ref(0);
const scrollEl = ref(window as HTMLElement | Window);
const startTime = ref(0);
const keepAlive = ref(false);

const classes = computed(() => {
  const prefixCls = 'nut-backtop';
  return {
    [prefixCls]: true,
    show: backTop.value
  };
});

const style = computed(() => {
  return {
    right: `${props.right}px`,
    bottom: `${props.bottom}px`,
    zIndex: props.zIndex
  };
});

function scrollListener() {
  if (scrollEl.value instanceof Window) {
    scrollTop.value = scrollEl.value.scrollY;
  } else {
    scrollTop.value = scrollEl.value.scrollTop;
  }
  backTop.value = scrollTop.value >= props.distance;
}

function scroll(y = 0) {
  if (scrollEl.value instanceof Window) {
    window.scrollTo(0, y);
  } else {
    scrollEl.value.scrollTop = y;
  }
}

function scrollAnimation() {
  let cid = requestAniFrame(function fn() {
    var t = props.duration - Math.max(0, startTime.value - +new Date() + props.duration);
    var y = (t * -scrollTop.value) / props.duration + scrollTop.value;
    scroll(y);
    cid = requestAniFrame(fn);
    if (t == props.duration || y == 0) {
      cancelRaf(cid);
    }
  });
}

function addEventListener() {
  scrollEl.value.addEventListener('scroll', scrollListener, false);
  scrollEl.value.addEventListener('resize', scrollListener, false);
}

function removeEventListener() {
  scrollEl.value.removeEventListener('scroll', scrollListener, false);
  scrollEl.value.removeEventListener('resize', scrollListener, false);
}

function handleClick(e: MouseEvent) {
  startTime.value = +new Date();
  props.isAnimation && props.duration > 0 ? scrollAnimation() : scroll();
  emit('click', e);
}

function init() {
  if (props.elId && document.getElementById(props.elId)) {
    scrollEl.value = document.getElementById(props.elId) as HTMLElement | Window;
  }

  addEventListener();
}

onMounted(() => {
  if (props.distance == 0) {
    backTop.value = true;
  }
  init();
});

onUnmounted(() => {
  removeEventListener();
});

onActivated(() => {
  if (keepAlive.value) {
    keepAlive.value = false;
    init();
  }
});

onDeactivated(() => {
  keepAlive.value = true;
  removeEventListener();
});
</script>
