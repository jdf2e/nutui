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
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAMAAABNTyq8AAAASFBMVEUAAAAXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEcXIEdRCe4GAAAAF3RSTlMACSW88uTcQKeYWB7YOTB/xXdlkHFLzVTLks0AAAD+SURBVDjLjZILjoMwDAXzD5Q/LZ3733STbpYskoM6EkhBw7MdWV2JfYDQR9XGWArWtJzoOHGxkZOd56T11GdLzlrBz+rD7GEViwHJKRYgFexTrXp6Qi9IAaZ6miAIEqDrSQOC5L6Rxtp3YpbLdbDU0wKdID3A67Oah4cgpe916r78IUSdBRdKkNgV66H1sSJ3NGzW8x832s1clQ6RbqjO4Wjgzs5eJOxu9GVYs1sSrzrVGMXtGf+mHBxYrUS0BTf8Dj4mp2GNn8sYqHskMAGD2sCqGyxs+bXfSXsO8WDuJAO+bK1IXdH83FKkYHJsoIl6l6tf2s5bxVCSfMsJ8QdwfR4F9ZQcyQAAAABJRU5ErkJggg=='
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
