<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2022-12-20 09:18:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-20 10:22:59
-->
<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2022-12-20 09:18:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-20 09:56:09
-->
<template>
  <Teleport :to="teleport" :disabled="!teleportDisable">
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
  </Teleport>
</template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { component } from './common';
import OverLay from '../overlay/index.vue';
import { Close } from '@nutui/icons-vue';
const { componentName, create } = createComponent('popup');
export default create(
  component(componentName, {
    [OverLay.name]: OverLay,
    Close
  })
);
</script>
