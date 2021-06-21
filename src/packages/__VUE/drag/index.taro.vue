<template>
  <movable-area>
    <movable-view
      :style="{ width: width + 'px', height: height + 'px' }"
      :direction="direction"
    >
      <slot></slot>
    </movable-view>
  </movable-area>
</template>
<script lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { createComponent } from '../../utils/create';
import requestAniFrame from '../../utils/raf';
const { componentName, create } = createComponent('drag');
export default create({
  props: {
    direction: {
      type: String,
      default: 'all'
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    }
  },

  setup(props, { emit }) {
    const direction = ref('all');

    function checkDirection() {
      if (props.direction == 'x') {
        direction.value = 'horizontal';
      }
      if (props.direction == 'y') {
        direction.value = 'vertical';
      }
    }
    onMounted(() => {
      checkDirection();
    });
    return {
      direction
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
