<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-cell>
      <nut-button type="primary" @click="state.show = true">{{ translate('btn1') }}</nut-button>
      <nut-overlay v-model:visible="state.show" :z-index="2000"></nut-overlay>
    </nut-cell>
    <h2>{{ translate('style') }}</h2>
    <nut-cell>
      <nut-button type="primary" @click="state.show3 = true">{{ translate('btn1') }}</nut-button>
      <nut-overlay v-model:visible="state.show3" :z-index="2000" :overlay-style="state.overlayStyle"></nut-overlay>
    </nut-cell>
    <h2>{{ translate('content') }}</h2>
    <nut-cell>
      <nut-button type="success" @click="state.show2 = true">{{ translate('btn2') }}</nut-button>
      <nut-overlay v-model:visible="state.show2" :z-index="2000">
        <div class="wrapper">
          <div class="content">{{ translate('text') }}</div>
        </div>
      </nut-overlay>
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('overlay');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      style: '遮罩样式',
      content: '嵌套内容',
      btn1: '显示遮罩层',
      btn2: '嵌套内容',
      text: '这里是正文'
    },
    'en-US': {
      basic: 'Basic Usage',
      style: 'Mask style',
      content: 'Nested content',
      btn1: 'Show mask layer',
      btn2: 'Nested content',
      text: 'Here is the text'
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    const state = reactive({
      show: false,
      show2: false,
      show3: false,
      overlayStyle: {
        backgroundColor: 'rgba(0, 0, 0, .2)'
      }
    });
    return {
      state,
      translate
    };
  }
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  .content {
    display: flex;
    width: 150px;
    height: 150px;
    background: #fff;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    color: red;
  }
}
</style>
