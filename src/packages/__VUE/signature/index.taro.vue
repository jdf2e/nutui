<template>
  <div :class="classes">
    <div :class="['nut-signature-inner', taroEnv === 'WEAPP' ? 'spcanvas_WEAPP' : '']">
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

    const moveEventHandler = (event) => {
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

      state.ctx?.lineTo(mouseX, mouseY);
      state.ctx?.stroke();
    };

    const endEventHandler = (event) => {
      event.preventDefault();
      emit('end');
    };
    const leaveEventHandler = (event) => {
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

          // Taro.canvasToTempFilePath({
          //   canvas: res[0].node,
          //   canvasId: 'spcanvas',
          //   fileType: props.type
          // })
          //   .then((res) => {
          //     emit('confirm', res.tempFilePath);
          //   })
          //   .catch((e) => {
          //     emit('confirm', e);
          //   });
        });
    };

    onMounted(() => {
      Taro.nextTick(() => {
        setTimeout(() => {
          if (Taro.getEnv() === 'WEAPP') {
            Taro.createSelectorQuery()
              .select('#spcanvas')
              .fields(
                {
                  node: true,
                  size: true
                },
                function (res) {
                  const canvas = res.node;
                  const ctx = canvas.getContext('2d');
                  state.canvas = canvas;
                  state.ctx = ctx;
                  state.canvasWidth = res.width;
                  state.canvasHeight = res.height;
                }
              )
              .exec();
          } else {
            console.log(document.getElementById('spcanvas')?.tagName);
            const canvasDom: HTMLElement | null = document.getElementById('spcanvas');
            let canvas: HTMLCanvasElement = canvasDom as HTMLCanvasElement;
            if (canvasDom?.tagName !== 'CANVAS') {
              canvas = canvasDom?.getElementsByTagName('canvas')[0] as HTMLCanvasElement;
            }
            // const canvas: any = document.getElementById('spcanvas')?.getElementsByTagName('canvas')[0];
            const ctx = canvas.getContext('2d');
            state.canvas = canvas;
            state.ctx = ctx;
            state.canvasWidth = canvas.width;
            state.canvasHeight = canvas.height;
          }
        }, 1000);
      });
    });
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
