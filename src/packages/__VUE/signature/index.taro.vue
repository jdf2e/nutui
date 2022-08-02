<template>
  <div :class="classes">
    <div class="nut-signature-inner">
      <canvas
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
import Taro, { eventCenter, getCurrentInstance as getCurrentInstanceTaro } from '@tarojs/taro';
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
    const state: any = reactive({
      canvas: null,
      canvasHeight: 0,
      canvasWidth: 0,
      ctx: null
    });

    const startEventHandler = (event: MouseEvent) => {
      event.preventDefault();
      emit('start');
      state.ctx.beginPath();
      state.ctx.lineWidth = props.lineWidth;
      state.ctx.strokeStyle = props.strokeStyle;
    };

    const moveEventHandler = (event) => {
      event.preventDefault();

      let evt = event.changedTouches[0];
      emit('signing', evt);
      let mouseX = evt.x;
      let mouseY = evt.y;
      state.ctx.lineTo(mouseX, mouseY);
      state.ctx.stroke();
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
            fileType: props.type
          })
            .then((res) => {
              emit('confirm', res.tempFilePath);
            })
            .catch((e) => {
              emit('confirm', e);
            });
        });
    };

    onMounted(() => {
      eventCenter.once((getCurrentInstanceTaro() as any).router.onReady, () => {
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
      });
    });
    return {
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
