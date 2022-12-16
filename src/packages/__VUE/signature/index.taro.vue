<template>
  <div :class="classes">
    <div :class="['nut-signature-inner', 'spcanvas_WEAPP']">
      <canvas
        ref="spcanvas"
        class="spcanvas"
        id="spcanvas"
        canvasId="spcanvas"
        canvas-id="spcanvas"
        type="2d"
        disable-scroll="true"
        @touchstart="startEventHandler"
        @touchmove="moveEventHandler"
        @touchend="endEventHandler"
        @touchleave="leaveEventHandler"
      ></canvas>
    </div>
    <nut-button class="nut-signature-btn" type="default" @click="clear()">{{ translate('reSign') }}</nut-button>
    <nut-button class="nut-signature-btn" type="primary" @click="confirm()">{{ translate('confirm') }}</nut-button>
  </div>
</template>
<script lang="ts">
import Taro from '@tarojs/taro';
import { ref, reactive, onMounted, computed } from 'vue';
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
      default: '#000'
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
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${props.customClass}`]: props.customClass
      };
    });
    const spcanvas: any = ref<HTMLElement | null>(null);

    const state: any = reactive({
      canvas: null,
      canvasHeight: 0,
      canvasWidth: 0,
      ctx: null
    });

    const startEventHandler = (event: MouseEvent) => {
      event.preventDefault();
      if (!state.ctx) {
        return false;
      }
      emit('start');
      state.ctx.beginPath();
      state.ctx.lineWidth = props.lineWidth;
      state.ctx.strokeStyle = props.strokeStyle;
    };

    const moveEventHandler = (event: { preventDefault: () => void; changedTouches: any[] }) => {
      event.preventDefault();
      if (!state.ctx) {
        return false;
      }
      let evt = event.changedTouches[0];
      emit('signing', evt);
      let mouseX = evt.x || evt.clientX;
      let mouseY = evt.y || evt.clientY;

      if (Taro.getEnv() === 'WEB') {
        let coverPos = spcanvas.value.getBoundingClientRect();
        mouseX = evt.clientX - coverPos.left;
        mouseY = evt.clientY - coverPos.top;
      }
      Taro.nextTick(() => {
        state.ctx.lineCap = 'round';
        state.ctx.lineJoin = 'round';
        state.ctx?.lineTo(mouseX, mouseY);
        state.ctx?.stroke();
      });
    };

    const endEventHandler = (event: { preventDefault: () => void }) => {
      event.preventDefault();
      emit('end');
    };
    const leaveEventHandler = (event: { preventDefault: () => void }) => {
      event.preventDefault();
    };
    const clear = () => {
      state.ctx.clearRect(0, 0, state.canvasWidth, state.canvasHeight);
      state.ctx.closePath();

      emit('clear');
    };

    const confirm = () => {
      onSave();
    };

    const onSave = () => {
      if (!state.canvas) {
        return;
      }
      Taro.createSelectorQuery()
        .select('#spcanvas')
        .fields({
          node: true,
          size: true
        })
        .exec(async (res) => {
          Taro.canvasToTempFilePath({
            canvas: res[0].node,
            canvasId: 'spcanvas',
            fileType: props.type,
            success: function (result) {
              emit('confirm', state.canvas, result.tempFilePath);
            },
            fail: function (result) {
              emit('confirm', result);
            }
          });
        });
    };

    onMounted(() => {
      Taro.nextTick(() => {
        setTimeout(() => {
          if (Taro.getEnv() === 'WEAPP' || Taro.getEnv() === 'JD') {
            Taro.createSelectorQuery()
              .select('#spcanvas')
              .fields(
                {
                  node: true,
                  size: true
                },
                function (res) {
                  const canvas = res.node;
                  canvasSetting(canvas, res.width, res.height);
                  // const dpr = Taro.getSystemInfoSync().pixelRatio;
                  // const ctx = canvas.getContext('2d');
                  // canvas.width = res.width * dpr;
                  // canvas.height = res.height * dpr;
                  // state.canvas = canvas;
                  // ctx.scale(dpr, dpr);
                  // state.ctx = ctx;
                  // state.canvasWidth = res.width * dpr;
                  // state.canvasHeight = res.height * dpr;
                }
              )
              .exec();
          } else {
            const canvasDom: HTMLElement | null = document.getElementById('spcanvas');
            let canvas: HTMLCanvasElement = canvasDom as HTMLCanvasElement;
            if (canvasDom?.tagName !== 'CANVAS') {
              canvas = canvasDom?.getElementsByTagName('canvas')[0] as HTMLCanvasElement;
            }
            canvasSetting(canvas, canvasDom?.offsetWidth as number, canvasDom?.offsetHeight as number);

            //   const ctx: any = canvas.getContext('2d');
            //   const dpr = Taro.getSystemInfoSync().pixelRatio;
            //   const _w = (canvasDom?.offsetWidth as number) * dpr;
            //   const _h = (canvasDom?.offsetHeight as number) * dpr;

            //   canvas.width = _w;
            //   canvas.height = _h;
            //   state.canvas = canvas;
            //   ctx?.scale(dpr, dpr);
            //   state.ctx = ctx;
            //   state.canvasWidth = _w;
            //   state.canvasHeight = _h;
          }
        }, 1000);
      });
    });
    const canvasSetting = (canvasDom: any, width: number, height: number) => {
      const canvas = canvasDom;
      const dpr = Taro.getSystemInfoSync().pixelRatio;
      const ctx = canvas.getContext('2d');
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      state.canvas = canvas;
      ctx.scale(dpr, dpr);
      state.ctx = ctx;
      state.canvasWidth = width * dpr;
      state.canvasHeight = height * dpr;
    };
    return {
      taroEnv: Taro.getEnv(),
      spcanvas,
      confirm,
      clear,
      classes,
      startEventHandler,
      moveEventHandler,
      endEventHandler,
      leaveEventHandler,
      translate
    };
  }
});
</script>
