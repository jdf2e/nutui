<template>
  <div :class="classes">
    <div class="nut-signature-inner" ref="wrap">
      <canvas ref="canvas" :height="canvasHeight" :width="canvasWidth" v-show="isCanvasSupported()"></canvas>
      <p class="nut-signature-unsopport" v-if="!isCanvasSupported()">{{ unSupportTpl || translate('unSupportTpl') }}</p>
    </div>

    <nut-button class="nut-signature-btn" type="default" @click="clear()">{{ translate('reSign') }}</nut-button>
    <nut-button class="nut-signature-btn" type="primary" @click="confirm()">{{ translate('confirm') }}</nut-button>
  </div>
</template>
<script lang="ts">
import { ref, reactive, onMounted, computed, toRefs } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create, translate } = createComponent('signature');

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
      default: () => {
        let bodyDom: any = document.getElementsByTagName('body');
        let clsName = bodyDom[0]['className'];
        if (clsName.indexOf('nut-theme-dark') == -1) {
          return '#000';
        } else {
          return '#fff';
        }
      }
    },
    type: {
      type: String,
      default: 'png'
    },
    unSupportTpl: {
      type: String,
      default: ''
    }
  },
  components: {},
  emits: ['start', 'end', 'signing', 'confirm', 'clear'],

  setup(props, { emit }) {
    const canvas: any = ref<HTMLElement | null>(null);
    const wrap: any = ref<HTMLElement | null>(null);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${props.customClass}`]: props.customClass
      };
    });
    const state: any = reactive({
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
      emit('start');
      canvas.value.addEventListener(state.events[1], moveEventHandler, false);
      canvas.value.addEventListener(state.events[2], endEventHandler, false);
      canvas.value.addEventListener(state.events[3], leaveEventHandler, false);
    };

    const moveEventHandler = (event: { preventDefault: () => void; touches: any[] }) => {
      event.preventDefault();

      let evt = state.isSupportTouch ? event.touches[0] : event;
      emit('signing', evt);
      let coverPos = canvas.value.getBoundingClientRect();
      let mouseX = evt.clientX - coverPos.left;
      let mouseY = evt.clientY - coverPos.top;

      state.ctx.lineTo(mouseX, mouseY);
      state.ctx.stroke();
    };

    const endEventHandler = (event: { preventDefault: () => void }) => {
      event.preventDefault();
      emit('end');
      canvas.value.removeEventListener(state.events[1], moveEventHandler, false);
      canvas.value.removeEventListener(state.events[2], endEventHandler, false);
    };
    const leaveEventHandler = (event: { preventDefault: () => void }) => {
      event.preventDefault();
      canvas.value.removeEventListener(state.events[1], moveEventHandler, false);
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

    const onSave = (canvas: { toDataURL: (arg0: string, arg1?: number | undefined) => any }) => {
      let dataurl;
      switch (props.type) {
        case 'png':
          dataurl = canvas.toDataURL('image/png');
          break;
        case 'jpg':
          dataurl = canvas.toDataURL('image/jpeg', 0.8);
          break;
      }
      clear();
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

    return { ...toRefs(state), canvas, wrap, isCanvasSupported, confirm, clear, classes, translate };
  }
});
</script>
