<template>
  <view class="nut-notify">
    <nut-popup
      v-model="curVisible"
      position="top"
      :style="{ color: color, background: background }"
      :overlay="false"
      :lockScroll="false"
      :class="['nut-notify', `nut-notify--${type}`, { className }]"
      @click="handleClick"
      @opened="handleOpened"
      @closed="handleClosed"
    >
      <template v-if="$slots.default">
        <slot></slot>
      </template>
      <template v-else>{{ msg }}</template>
    </nut-popup>
  </view>
</template>
<script lang="ts">
import { toRefs } from 'vue';
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
    return {};
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
