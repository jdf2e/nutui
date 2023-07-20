<template>
  <view class="nut-empty">
    <view class="nut-empty__box" :style="style">
      <slot name="image">
        <img v-if="src" class="nut-empty__box--img" :src="src" />
      </slot>
    </view>

    <slot name="description">
      <view class="nut-empty__description">{{ description || translate('noData') }}</view>
    </slot>

    <slot></slot>
  </view>
</template>
<script lang="ts">
import { computed, PropType } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { EmptyImage } from './types';
import { pxCheck } from '@/packages/utils/pxCheck';
const { create, translate } = createComponent('empty');

const defaultStatus: any = {
  empty: 'https://static-ftcms.jd.com/p/files/61a9e3183985005b3958672b.png',
  error: 'https://ftcms.jd.com/p/files/61a9e33ee7dcdbcc0ce62736.png',
  network: 'https://static-ftcms.jd.com/p/files/61a9e31de7dcdbcc0ce62734.png'
};

export default create({
  props: {
    image: {
      type: String as PropType<EmptyImage>,
      default: 'empty'
    },
    imageSize: {
      type: [Number, String],
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const style = computed(() => {
      if (props.imageSize) {
        return {
          width: pxCheck(props.imageSize),
          height: pxCheck(props.imageSize)
        };
      }
      return {};
    });

    const src = computed(() => {
      if (props.image.startsWith('https://') || props.image.startsWith('http://') || props.image.startsWith('//')) {
        return props.image;
      } else {
        return defaultStatus[props.image];
      }
    });

    return { src, style, translate };
  }
});
</script>
