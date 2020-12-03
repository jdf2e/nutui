<template>
  <view :style="styles" :class="['nut-avatar', 'avatar-' + size, 'avatar-' + shape]" @click="activeAvatar">
    <i class="icon" :style="iconStyles"></i
    ><!--不使用icon组件，1:icon组件没有扩展维护；2:修改该图片不方便-->
    <view class="text" v-if="isShowText"><slot></slot></view>
  </view>
</template>
<script>
import { toRefs, computed } from 'vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('avatar');
export default create({
  props: {
    size: {
      type: String,
      default: 'normal'
    },
    shape: {
      type: String,
      default: 'round'
    },
    bgColor: {
      type: String,
      default: '#eee'
    },
    bgIcon: {
      type: String,
      default:
        'data:image/png;base64,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'
    },
    bgImage: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit, slots }) {
    // setup内部只能访问这4个属性，值得注意的是props必须在上面声明才能在这里取到
    // console.log('props', props, 'slots', slots);
    const { size, shape, bgColor, bgIcon, bgImage } = toRefs(props);
    console.log('bgIcon', bgIcon);
    //判断是否为小数点
    const activeAvatar = () => {
      emit('active-avatar', event);
    };
    const styles = computed(() => {
      return {
        width: size.value == 'large' || size.value == 'middle' || size.value == 'small' ? '' : `${size.value}px`,
        height: size.value == 'large' || size.value == 'middle' || size.value == 'small' ? '' : `${size.value}px`,
        backgroundImage: bgImage.value ? `url(${bgImage.value})` : null,
        backgroundColor: `${bgColor.value}`
      };
    });
    const iconStyles = computed(() => {
      return bgIcon.value ? { backgroundImage: `url(${bgIcon.value})` } : null;
    });
    const isShowText = computed(() => {
      return slots.default;
    });
    const classes = computed(() => {
      return {
        [componentName]: true
      };
    });
    return {
      styles,
      iconStyles,
      isShowText,
      classes,
      activeAvatar
    };
  }
});
</script>
<style lang="scss">
@import 'index.scss';
</style>
