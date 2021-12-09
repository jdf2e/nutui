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
      />
    </div>
    <nut-button class="nut-signature-btn" type="default" @click="clear()">重签</nut-button>
    <nut-button class="nut-signature-btn" type="primary" @click="confirm()">确认</nut-button>
  </div>
</template>
<script lang="ts">
import Taro from '@tarojs/taro';
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
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${props.customClass}`]: props.customClass
      };
    });
    const state = reactive({
      canvas: null,
      canvasHeight: 0,
      canvasWidth: 0,
      ctx: null
    });

    const startEventHandler = (event: MouseEvent) => {
      event.preventDefault();
      state.ctx.beginPath();
      state.ctx.lineWidth = props.lineWidth;
      state.ctx.strokeStyle = props.strokeStyle;
    };

    const moveEventHandler = (event) => {
      event.preventDefault();

      let evt = event.changedTouches[0];
      let mouseX = evt.x;
      let mouseY = evt.y;
      state.ctx.lineTo(mouseX, mouseY);
      state.ctx.stroke();
    };

    const endEventHandler = (event) => {
      event.preventDefault();
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
      setTimeout(() => {
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
      }, 500);
    });
    return {
      confirm,
      clear,
      classes,
      startEventHandler,
      moveEventHandler,
      endEventHandler,
      leaveEventHandler
    };
  }
});
</script>
