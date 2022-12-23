<template>
  <div>
    <nut-overlay
      v-if="overlay"
      :visible="visible"
      :close-on-click-overlay="closeOnClickOverlay"
      :z-index="zIndex"
      :lock-scroll="lockScroll"
      :duration="duration"
      @click="onClickOverlay"
      v-bind="$attrs"
    />
    <Transition :name="transitionName" @after-enter="onOpened" @after-leave="onClosed">
      <view v-show="visible" :class="classes" :style="popStyle" @click="onClick">
        <slot v-if="showSlot"></slot>
        <view
          v-if="closed"
          @click="onClickCloseIcon"
          class="nut-popup__close-icon"
          :class="'nut-popup__close-icon--' + closeIconPosition"
        >
          <slot name="closeIcon">
            <Close height="12px"></Close>
          </slot>
        </view>
      </view>
    </Transition>
  </div>
</template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { component } from './common';
import OverLay from '../overlay/index.taro.vue';
import { Close } from '@nutui/icons-vue-taro';
const { componentName, create } = createComponent('popup');
export default create(
  component(componentName, {
    [OverLay.name]: OverLay,
    Close
  })
);
</script>
