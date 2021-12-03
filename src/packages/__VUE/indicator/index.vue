<template>
  <view :class="classes">
    <template v-for="item of ary" :key="item">
      <view v-if="item === current" :class="`${componentName}--number`">
        {{ fillZero && fillZero < 10 ? `0${item}` : item }}
      </view>
      <view v-else :class="`${componentName}--dot`"></view>
    </template>
  </view>
</template>
<script lang="ts">
import { toRefs, computed } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('indicator');

export default create({
  props: {
    size: {
      type: Number,
      default: 3,
      required: true
    },
    current: {
      type: Number,
      default: 1,
      required: true
    },
    block: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: 'center'
    },
    fillZero: {
      type: Boolean,
      default: true
    }
  },
  components: {},
  emits: ['click'],

  setup(props) {
    console.log('componentName', componentName);

    const { size, block, align } = toRefs(props);

    const ary = computed(() => [...Array(size.value).keys()].map((item) => ++item));

    console.log(ary.value, 'ary', size.value, 1, block.value);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}--block`]: block.value,
        [`${prefixCls}--align__${align.value}`]: block.value && align.value
      };
    });

    return { classes, componentName, ary };
  }
});
</script>
