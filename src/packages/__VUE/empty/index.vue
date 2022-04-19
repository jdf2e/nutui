<template>
  <view class="nut-empty">
    <!-- 占位图 -->
    <view class="nut-empty-image" :style="imgStyle">
      <template v-if="$slots.image">
        <slot name="image"></slot>
      </template>
      <template v-else>
        <img v-if="imageUrl" class="img" :src="imageUrl" />
      </template>
    </view>

    <!-- 文本区 -->
    <template v-if="$slots.description">
      <slot name="description"></slot>
    </template>
    <template v-else>
      <view class="nut-empty-description">{{ description || translate('noData') }}</view>
    </template>

    <!-- 自定义slot -->
    <template v-if="$slots.default">
      <slot></slot>
    </template>
  </view>
</template>
<script lang="ts">
import { toRefs, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create, translate } = createComponent('empty');

type statusOptions = {
  [key: string]: string;
};

/**
 * 内置图片地址
 */
const defaultStatus: statusOptions = {
  empty: 'https://static-ftcms.jd.com/p/files/61a9e3183985005b3958672b.png',
  error: 'https://ftcms.jd.com/p/files/61a9e33ee7dcdbcc0ce62736.png',
  network: 'https://static-ftcms.jd.com/p/files/61a9e31de7dcdbcc0ce62734.png'
};

export default create({
  props: {
    image: {
      type: String,
      default: 'empty' //默认empty
    },
    imageSize: {
      type: [Number, String], // 图片大小，正方形
      default: ''
    },
    description: {
      type: String, // 文字区
      default: ''
    }
  },

  setup(props) {
    const { image, imageSize } = toRefs(props);

    /**
     * 根据imgSize计算行内样式
     */
    const imgStyle = computed(() => {
      if (!imageSize.value) {
        return '';
      }
      if (typeof imageSize.value === 'number') {
        return `width:${imageSize.value}px;height:${imageSize.value}px`;
      }
      return `width:${imageSize.value};height:${imageSize.value}`;
    });

    const isHttpUrl =
      image.value.startsWith('https://') || image.value.startsWith('http://') || image.value.startsWith('//');
    const imageUrl = isHttpUrl ? image.value : defaultStatus[image.value];

    return {
      imageUrl,
      imgStyle,
      translate
    };
  }
});
</script>
