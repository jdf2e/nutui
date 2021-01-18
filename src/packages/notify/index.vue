<template>
  <!-- <view class="nut-notify"> -->
  <Transition name="toast-fade">
    <view
      :class="toastBodyClass"
      v-show="state.mounted"
      :style="{
        bottom: center ? 'auto' : bottom + 'px',
        'background-color': coverColor
      }"
      @click="clickCover"
    >
      <template v-if="$slots.default">
        <slot></slot>
      </template>
      <template v-else>{{ msg }}</template>
    </view>
  </Transition>
  <!-- </view> -->
</template>
<script lang="ts">
import { toRefs, reactive, onMounted } from 'vue';
import { createComponent } from '@/utils/create';
import Popup from '@/packages/popup/index.vue';
const { componentName, create } = createComponent('notify');

export default create({
  props: {
    color: String,
    message: [Number, String],
    className: null,
    background: String,
    type: {
      type: String,
      default: 'danger'
    }
  },

  setup(props, { slots }) {
    const state = reactive({
      mounted: false
    });
    onMounted(() => {
      state.mounted = true;
    });
    return { state };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
