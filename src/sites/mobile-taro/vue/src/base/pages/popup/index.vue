<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell title="展示弹出层" is-link @click="state.showBasic = true"></nut-cell>
    <nut-popup pop-class="popclass" :style="{ padding: '30px 50px' }" v-model:visible="state.showBasic" :z-index="100"
      >正文</nut-popup
    >
    <h2>弹出位置</h2>
    <nut-cell title="顶部弹出" is-link @click="state.showTop = true"></nut-cell>
    <nut-popup position="top" :style="{ height: '20%' }" v-model:visible="state.showTop"></nut-popup>
    <nut-cell title="底部弹出" is-link @click="state.showBottom = true"></nut-cell>
    <nut-popup position="bottom" :style="{ height: '20%' }" v-model:visible="state.showBottom"></nut-popup>
    <nut-cell title="左侧弹出" is-link @click="state.showLeft = true"></nut-cell>
    <nut-popup position="left" :style="{ width: '20%', height: '100%' }" v-model:visible="state.showLeft"></nut-popup>
    <nut-cell title="右侧弹出" is-link @click="state.showRight = true"></nut-cell>
    <nut-popup position="right" :style="{ width: '20%', height: '100%' }" v-model:visible="state.showRight"></nut-popup>
    <h2>关闭图标</h2>
    <nut-cell title="关闭图标" is-link @click="state.showIcon = true"></nut-cell>
    <nut-popup position="bottom" closeable :style="{ height: '20%' }" v-model:visible="state.showIcon"></nut-popup>
    <nut-cell title="图标位置" is-link @click="state.showIconPosition = true"></nut-cell>
    <nut-popup
      position="bottom"
      closeable
      close-icon-position="top-left"
      :style="{ height: '20%' }"
      v-model:visible="state.showIconPosition"
    ></nut-popup>
    <nut-cell title="自定义图标" is-link @click="state.showCloseIcon = true"></nut-cell>
    <nut-popup
      position="bottom"
      closeable
      close-icon-position="top-left"
      close-icon="heart"
      :style="{ height: '20%' }"
      v-model:visible="state.showCloseIcon"
    ></nut-popup>
    <h2>圆角弹框</h2>
    <nut-cell title="圆角弹框" is-link @click="state.showRound = true"></nut-cell>
    <nut-popup
      position="bottom"
      closeable
      round
      :style="{ height: '30%' }"
      v-model:visible="state.showRound"
    ></nut-popup>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
export default {
  props: {},
  setup() {
    const state = reactive({
      showBasic: false,
      showTop: false,
      showBottom: false,
      showLeft: false,
      showRight: false,
      showIcon: false,
      showIconPosition: false,
      showCloseIcon: false,
      showRound: false,
      showCombination: false
    });
    return { state };
  }
};
</script>

<style lang="scss"></style>
