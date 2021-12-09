<template>
  <view class="nut-empty">
    <view class="nut-empty-image" :style="imgStl">
      <template v-if="$slots.image">
        <slot name="image"></slot>
      </template>
      <template v-else>
        <img v-if="image" class="img" :src="image" />
      </template>
    </view>
    <template v-if="$slots.description">
      <slot name="description"></slot>
    </template>
    <template v-else>
      <view class="nut-empty-description">{{ description }}</view>
    </template>
    <template v-if="$slots.default">
      <slot></slot>
    </template>
  </view>
</template>
<script lang="ts">
import { toRefs, computed } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('empty');

export default create({
  props: {
    image: {
      type: String,
      default: 'https://ftcms.jd.com/p/files/61a9e33ee7dcdbcc0ce62736.png'
    },
    imageSize: {
      type: [Number, String],
      default: ''
    },
    description: {
      type: String,
      default: '无数据'
    }
  },

  setup(props) {
    const { image, imageSize, description } = toRefs(props);

    /**
     * 根据imgSize计算行内样式
     */
    const imgStl = computed(() => {
      if (!imageSize.value) {
        return '';
      }
      if (typeof imageSize.value === 'number') {
        return `width:${imageSize.value}px;height:${imageSize.value}px`;
      }
      return `width:${imageSize.value};height:${imageSize.value}`;
    });

    return { image, description, imgStl };
  }
});
</script>
