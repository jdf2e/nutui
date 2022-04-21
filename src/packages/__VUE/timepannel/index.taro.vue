<template>
  <view :class="classes" @click="handlePannel(pannelKey)">{{ name }}</view>
</template>

<script lang="ts">
import { reactive, toRefs, inject, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('timepannel');
export default create({
  name: 'timepannel',
  props: {
    name: {
      type: String,
      default: ''
    },
    pannelKey: {
      type: [Number, String],
      default: 0
    }
  },
  emits: ['change'],
  setup: (props: any, context: any) => {
    const currentKey = inject('currentKey');

    const state = reactive({
      currentKey
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        'nut-timepannel--curr': state.currentKey == props.pannelKey
      };
    });

    const handlePannel = (pannelKey: number | string) => {
      context.emit('change', pannelKey);
    };

    return {
      ...toRefs(state),
      classes,
      handlePannel
    };
  }
});
</script>
