<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell title="展示弹出层" is-link @click="showBasic = true"></nut-cell>
    <nut-popup pop-class="popclass" :style="{ padding: '30px 50px' }" v-model:visible="showBasic" :z-index="100"
      >正文</nut-popup
    >
    <h2>弹出位置</h2>
    <nut-cell title="顶部弹出" is-link @click="showTop = true"></nut-cell>
    <nut-popup position="top" :style="{ height: '10%' }" v-model:visible="showTop"></nut-popup>
    <nut-cell title="底部弹出" is-link @click="showBottom = true"></nut-cell>
    <nut-popup position="bottom" :style="{ height: '20%' }" v-model:visible="showBottom"></nut-popup>
    <nut-cell title="左侧弹出" is-link @click="showLeft = true"></nut-cell>
    <nut-popup position="left" :style="{ width: '20%', height: '100%' }" v-model:visible="showLeft"></nut-popup>
    <nut-cell title="右侧弹出" is-link @click="showRight = true"></nut-cell>
    <nut-popup position="right" :style="{ width: '20%', height: '100%' }" v-model:visible="showRight"></nut-popup>
    <h2>关闭图标</h2>
    <nut-cell title="关闭图标" is-link @click="showIcon = true"></nut-cell>
    <nut-popup position="bottom" closeable :style="{ height: '20%' }" v-model:visible="showIcon"></nut-popup>
    <nut-cell title="图标位置" is-link @click="showIconPosition = true"></nut-cell>
    <nut-popup
      position="bottom"
      closeable
      close-icon-position="top-left"
      :style="{ height: '20%' }"
      v-model:visible="showIconPosition"
    ></nut-popup>
    <nut-cell title="自定义图标" is-link @click="showCloseIcon = true"></nut-cell>
    <nut-popup
      position="bottom"
      closeable
      close-icon-position="top-left"
      close-icon="heart"
      :style="{ height: '20%' }"
      v-model:visible="showCloseIcon"
    ></nut-popup>
    <h2>圆角弹框</h2>
    <nut-cell title="圆角弹框" is-link @click="showRound = true"></nut-cell>
    <nut-popup position="bottom" closeable round :style="{ height: '30%' }" v-model:visible="showRound"></nut-popup>
    <h2>多层堆叠</h2>
    <nut-cell title="多层堆叠" is-link @click="showPop1 = true"></nut-cell>
    <nut-popup :style="{ padding: '30px 50px' }" v-model:visible="showPop1">
      <div @click="showPop2 = true">点击它</div>
    </nut-popup>
    <nut-popup :style="{ padding: '30px 50px' }" v-model:visible="showPop2">正文</nut-popup>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
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
      showCombination: false,
      showPop1: false,
      showPop2: false
    });
    return { ...toRefs(state) };
  }
};
</script>

<style lang="scss"></style>
