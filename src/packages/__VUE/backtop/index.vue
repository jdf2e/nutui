<template>
  <div :class="classes" :style="style" @click.stop="click">
    <slot>
      <nut-icon size="19px" class="nut-backtop-main" name="top"></nut-icon>
    </slot>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, onUnmounted, onActivated, onDeactivated, reactive } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('backtop');
export default create({
  props: {
    bottom: {
      type: Number,
      default: 20
    },
    right: {
      type: Number,
      default: 10
    },
    elId: {
      type: [String],
      default: 'body'
    },

    distance: {
      type: Number,
      default: 200
    },
    zIndex: {
      type: Number,
      default: 10
    },
    isAnimation: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const state = reactive({
      backTop: false,
      scrollTop: 0,
      scrollEl: window as HTMLElement | Window,
      startTime: 0,
      keepAlive: false
    });
    let scrollEl: Window | HTMLElement = window;
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        show: state.backTop
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
      if (state.scrollEl instanceof Window) {
        state.scrollTop = state.scrollEl.pageYOffset;
      } else {
        state.scrollTop = state.scrollEl.scrollTop;
      }
      state.backTop = state.scrollTop >= props.distance;
    }

    function scroll(y = 0) {
      if (state.scrollEl instanceof Window) {
        window.scrollTo(0, y);
      } else {
        state.scrollEl.scrollTop = y;
      }
    }

    function scrollAnimation() {
      let cid = requestAniFrame()(function fn() {
        var t = props.duration - Math.max(0, state.startTime - +new Date() + props.duration);
        var y = (t * -state.scrollTop) / props.duration + state.scrollTop;
        scroll(y);
        cid = requestAniFrame()(fn);
        if (t == props.duration || y == 0) {
          window.cancelAnimationFrame(cid);
        }
      });
    }

    function addEventListener() {
      state.scrollEl.addEventListener('scroll', scrollListener, false);
      state.scrollEl.addEventListener('resize', scrollListener, false);
    }

    function removeEventListener() {
      state.scrollEl.removeEventListener('scroll', scrollListener, false);
      state.scrollEl.removeEventListener('resize', scrollListener, false);
    }

    function initCancelAniFrame() {
      window.cancelAnimationFrame = window.webkitCancelAnimationFrame;
    }

    function requestAniFrame() {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    }

    function click(e: MouseEvent) {
      state.startTime = +new Date();
      props.isAnimation && props.duration > 0 ? scrollAnimation() : scroll();
      emit('click', e);
    }

    function init() {
      if (props.elId && document.getElementById(props.elId)) {
        state.scrollEl = document.getElementById(props.elId) as HTMLElement | Window;
      }

      addEventListener();
      initCancelAniFrame();
    }

    onMounted(() => {
      if (props.distance == 0) {
        state.backTop = true;
      }
      init();
    });

    onUnmounted(() => {
      removeEventListener();
    });

    onActivated(() => {
      if (state.keepAlive) {
        state.keepAlive = false;
        init();
      }
    });

    onDeactivated(() => {
      state.keepAlive = true;
      removeEventListener();
    });

    return {
      state,
      classes,
      style,
      click
    };
  }
});
</script>
