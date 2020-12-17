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
    disabled: {
      //是否显示
      type: Boolean,
      default: false
    },
    type: {
      //单选 simple  多选  multiple
      type: String,
      default: 'simple'
    }
  },
  components: {},
  emits: ['click'],

  setup(props, { emit }) {
    console.log('componentName', componentName);

    // const { name, txt } = toRefs(props);

    const handleClick = (event: Event) => {
      emit('click', event);
    };

    // return { name, txt, handleClick };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
