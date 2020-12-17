<template>
  <view :style="styles" class="nut-switch">
    <view class="switch-button" @click="onClick"></view>
  </view>
</template>

<script lang="ts">
import { toRefs, computed } from 'vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('switch');

export default create({
  props: {
    checked: {
      type: Boolean,
      default: true
    },
    activeColor: {
      type: String,
      default:
        'linear-gradient(135deg, rgba(250,44,25,1) 0%,rgba(250,63,25,1) 45%,rgba(250,89,25,1) 83%,rgba(250,100,25,1) 100%);'
    },
    inactiveColor: {
      type: String,
      default: '#fff'
    }
  },

  setup(props, { emit }) {
    const { checked, activeColor, inactiveColor } = toRefs(props);

    const styles = computed(() => {
      return {
        backgroundColor: `${activeColor.value}`
      };
    });

    const onClick = () => {
      checked.value = !checked.value;
      emit('switch-change', event);
    };

    return {
      styles,
      onClick,
      checked
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
