<template>
  <div :class="classes">
    <div class="nut-signature-inner" ref="wrap">
      <canvas
        ref="canvas"
        :height="canvasHeight"
        :width="canvasWidth"
        v-if="isCanvasSupported"
      ></canvas>
      <p class="nut-signature-unsopport" v-else>{{ unSupportTpl }}</p>
    </div>

    <nut-button class="nut-signature-btn" type="default" @click="clear()"
      >重签</nut-button
    >
    <nut-button class="nut-signature-btn" type="primary" @click="confirm()"
      >确认</nut-button
    >
  </div>
</template>
<script lang="ts">
import { ref, reactive, onMounted, computed } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('signature');

export default create({
  props: {
    customClass: {
      type: String,
      default: ''
    },
    lineWidth: {
      type: Number,
      default: 2
    },
    strokeStyle: {
      type: String,
      default: '#000'
    },
    type: {
      type: String,
      default: 'png'
    },
    unSupportTpl: {
      type: String,
      default: '对不起，当前浏览器不支持Canvas，无法使用本控件！'
    }
  },
  components: {},
  emits: ['confirm', 'clear'],

  setup(props, { emit }) {
    const canvas = ref<HTMLElement | null>(null);
    const wrap = ref<HTMLElement | null>(null);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${props.customClass}`]: props.customClass
      };
    });
    const state = reactive({
      canvasHeight: 0,
      canvasWidth: 0,
      ctx: null,
      isSupportTouch: 'ontouchstart' in window,
      events:
        'ontouchstart' in window
          ? ['touchstart', 'touchmove', 'touchend', 'touchleave']
          : ['mousedown', 'mousemove', 'mouseup', 'mouseleave']
    });
    const isCanvasSupported = () => {
      let elem = document.createElement('canvas');
      return !!(elem.getContext && elem.getContext('2d'));
    };
    const addEvent = () => {
      canvas.value.addEventListener(state.events[0], startEventHandler, false);
    };

    const startEventHandler = (event: MouseEvent) => {
      event.preventDefault();
      state.ctx.beginPath();
      state.ctx.lineWidth = props.lineWidth;
      state.ctx.strokeStyle = props.strokeStyle;

      canvas.value.addEventListener(state.events[1], moveEventHandler, false);
      canvas.value.addEventListener(state.events[2], endEventHandler, false);
      canvas.value.addEventListener(state.events[3], leaveEventHandler, false);
    };

    const moveEventHandler = (event) => {
      event.preventDefault();

      let evt = state.isSupportTouch ? event.touches[0] : event;
      let coverPos = canvas.value.getBoundingClientRect();
      let mouseX = evt.clientX - coverPos.left;
      let mouseY = evt.clientY - coverPos.top;

      state.ctx.lineTo(mouseX, mouseY);
      state.ctx.stroke();
    };

    const endEventHandler = (event) => {
      event.preventDefault();

      canvas.value.removeEventListener(
        state.events[1],
        moveEventHandler,
        false
      );
      canvas.value.removeEventListener(state.events[2], endEventHandler, false);
    };
    const leaveEventHandler = (event) => {
      event.preventDefault();
      canvas.value.removeEventListener(
        state.events[1],
        moveEventHandler,
        false
      );
      canvas.value.removeEventListener(state.events[2], endEventHandler, false);
    };
    const clear = () => {
      canvas.value.addEventListener(state.events[2], endEventHandler, false);
      state.ctx.clearRect(0, 0, state.canvasWidth, state.canvasHeight);
      state.ctx.closePath();
      emit('clear');
    };

    const confirm = () => {
      onSave(canvas.value);
    };

    const onSave = (canvas) => {
      let dataurl;
      switch (props.type) {
        case 'png':
          dataurl = canvas.toDataURL('image/png');
          break;
        case 'jpg':
          dataurl = canvas.toDataURL('image/jpeg', 0.8);
          break;
      }
      clear(true);
      emit('confirm', canvas, dataurl);
    };

    onMounted(() => {
      if (isCanvasSupported()) {
        state.ctx = canvas.value.getContext('2d');
        state.canvasWidth = wrap.value.offsetWidth;
        state.canvasHeight = wrap.value.offsetHeight;
        addEvent();
      }
    });

    return { canvas, wrap, isCanvasSupported, confirm, clear, classes };
  }
});
</script>
