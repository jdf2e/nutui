<template>
  <view
    :class="classes"
    :style="{
      zIndex,
      backgroundSize: `${gapX + width}px`,
      backgroundImage: `url('${base64Url}')`
    }"
  >
  </view>
</template>
<script lang="ts">
import { reactive, toRefs, computed, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('watermark');
export default create({
  props: {
    name: {
      type: String,
      default: ''
    },
    gapY: {
      type: Number,
      default: 48
    },
    gapX: {
      type: Number,
      default: 24
    },
    zIndex: {
      type: Number,
      default: 2000
    },
    width: {
      type: Number,
      default: 120
    },
    height: {
      type: Number,
      default: 64
    },
    rotate: {
      type: Number,
      default: -22
    },
    image: {
      type: String,
      default: ''
    },
    imageWidth: {
      type: Number,
      default: 120
    },
    imageHeight: {
      type: Number,
      default: 64
    },
    content: {
      type: String,
      default: ''
    },
    fontColor: {
      type: String,
      default: 'rgba(0,0,0,.15)'
    },
    fontStyle: {
      type: String,
      default: 'normal'
    },
    fontFamily: {
      type: String,
      default: 'PingFang SC'
    },
    fontWeight: {
      type: String,
      default: 'normal'
    },
    fontSize: {
      type: [String, Number],
      default: 14
    },
    fullPage: {
      type: Boolean,
      default: ''
    }
  },
  emits: ['click'],

  setup(props, { emit }) {
    const state = reactive({
      base64Url: ''
    });
    const {
      zIndex,
      gapX,
      gapY,
      width,
      height,
      rotate,
      image,
      imageWidth,
      imageHeight,
      content,
      fontStyle,
      fontWeight,
      fontColor,
      fontSize,
      fontFamily
    } = props;
    const init = () => {
      const canvas = document.createElement('canvas');
      const ratio = window.devicePixelRatio;
      // console.log(ratio);
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
            state.base64Url = canvas.toDataURL();
            // console.log(state.base64Url);
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
          state.base64Url = canvas.toDataURL();
          // console.log(state.base64Url);
        }
      } else {
        throw new Error('当前环境不支持Canvas');
      }
    };
    init();

    watch(
      () => [
        zIndex,
        gapX,
        gapY,
        width,
        height,
        rotate,
        image,
        imageWidth,
        imageHeight,
        content,
        fontStyle,
        fontWeight,
        fontColor,
        fontSize,
        fontFamily
      ],
      () => {
        init();
      }
    );
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}-full-page`]: props.fullPage
      };
    });

    return { ...toRefs(state), classes };
  }
});
</script>
