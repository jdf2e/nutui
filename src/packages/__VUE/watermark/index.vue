<template>
  <view :class="classes" @click="handleClick">
    <view>{{ data }}</view>
  </view>
</template>
<script lang="ts">
import { reactive, toRefs, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('watermark');
export default create({
  props: {
    name: {
      type: String,
      default: ''
    },
    gapY: {
      type: String,
      default: ''
    },
    gapX: {
      type: Number,
      default: ''
    }
    // gapY?: number
    // zIndex?: number
    // width?: number
    // height?: number
    // rotate?: number
    // image?: string
    // imageWidth?: number
    // imageHeight?: number
    // content?: string
    // fontColor?: string
    // fontStyle?: 'none' | 'normal' | 'italic' | 'oblique'
    // fontFamily?: string
    // fontWeight?: 'normal' | 'light' | 'weight' | number
    // fontSize?: number | string
    // fullPage?: boolean
  },
  emits: ['click'],

  setup(props, { emit }) {
    const state = reactive({
      data: 'Welcome to developing components'
    });
    const init = () => {
      const canvas = document.createElement('canvas');
      const ratio = window.devicePixelRatio;

      const ctx = canvas.getContext('2d');

      const canvasWidth = `${(gapX + width) * ratio}px`;
      const canvasHeight = `${(gapY + height) * ratio}px`;

      const markWidth = width * ratio;
      const markHeight = height * ratio;

      canvas.setAttribute('width', canvasWidth);
      canvas.setAttribute('height', canvasHeight);

      if (ctx) {
        if (image) {
          ctx.translate(markWidth / 2, markHeight / 2);
          ctx.rotate((Math.PI / 180) * Number(rotate));

          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.referrerPolicy = 'no-referrer';
          img.src = image;
          img.onload = () => {
            ctx.drawImage(
              img,
              (-imageWidth * ratio) / 2,
              (-imageHeight * ratio) / 2,
              imageWidth * ratio,
              imageHeight * ratio
            );
            ctx.restore();
            setBase64Url(canvas.toDataURL());
          };
        } else if (content) {
          ctx.textBaseline = 'middle';
          ctx.textAlign = 'center';
          // 文字绕中间旋转
          ctx.translate(markWidth / 2, markHeight / 2);
          ctx.rotate((Math.PI / 180) * Number(rotate));

          const markSize = Number(fontSize) * ratio;
          ctx.font = `${fontStyle} normal ${fontWeight} ${markSize}px/${markHeight}px ${fontFamily}`;
          ctx.fillStyle = fontColor;

          ctx.fillText(content, 0, 0);
          ctx.restore();
          setBase64Url(canvas.toDataURL());
        }
      } else {
        throw new Error('当前环境不支持Canvas');
      }
    };
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const handleClick = (event: Event) => {
      emit('click', event);
    };

    return { ...toRefs(state), classes, handleClick };
  }
});
</script>
