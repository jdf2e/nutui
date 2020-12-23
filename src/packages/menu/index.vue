<template>
  <view class="nut-menu">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { toRefs } from 'vue';
import { createComponent } from '@/utils/create';
import { useChildren } from '@/utils/useRelation/useChildren';
export const MENU_KEY = 'nutMenu';
const { componentName, create } = createComponent('menu');

export default create({
  props: {
    type: {
      //单选 simple  多选  multiple，暂留
      type: String,
      default: 'simple'
    }
  },
  components: {},

  setup(props, { emit }) {
    // const { autoClose } = toRefs(props);
    // const handleClick = (event: Event) => {
    //   emit('click', event);
    // };
    // return { autoClose };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
