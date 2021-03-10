<template>
  <view :class="classes" @click="onClick" :style="style">
    <view class="switch-button">
      <view v-show="!isOpen" class="close-line"></view>
      <template v-if="label">
        <view class="nut-switch-label open" v-show="isOpen">{{
          label.split(/\s+/)[0]
        }}</view>
        <div class="nut-switch-label close" v-show="!isOpen">{{
          label.split(/\s+/)[1]
        }}</div>
      </template>
    </view>
  </view>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('switch');

export default create({
  props: {
    status: {
      type: Boolean,
      default: true
    },
    disable: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: 'rgba(250,63,25,1)'
    },
    inactiveColor: {
      type: String,
      default: 'rgba(235,235,235,1)'
    },
    label: {
      type: String,
      default: ''
    }
  },

  setup(props, { emit }) {
    let isOpen = ref(props.status ? props.status : true);

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [isOpen.value ? 'switch-open' : 'switch-close']: true,
        [`${prefixCls}-disable`]: props.disable,
        [`${prefixCls}-base`]: true
      };
    });

    const style = computed(() => {
      return {
        backgroundColor: isOpen.value ? props.activeColor : props.inactiveColor
      };
    });

    const onClick = () => {
      if (props.disable) return;
      isOpen.value = !isOpen.value;
      emit('switch-change', event, isOpen.value);
    };

    return {
      isOpen,
      classes,
      style,
      onClick
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
