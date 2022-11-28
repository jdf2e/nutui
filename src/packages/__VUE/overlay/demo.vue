<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-cell>
      <nut-button type="primary" @click="show = true">{{ translate('btn1') }}</nut-button>
      <nut-overlay v-model:visible="show" :z-index="2020" lock-scroll></nut-overlay>
    </nut-cell>
    <h2>{{ translate('style') }}</h2>
    <nut-cell>
      <nut-button type="primary" @click="show3 = true">{{ translate('style') }}</nut-button>
      <nut-overlay v-model:visible="show3" :z-index="2000" :overlay-style="overlayStyle"></nut-overlay>
    </nut-cell>
    <h2>{{ translate('duration') }}</h2>
    <nut-cell>
      <nut-button type="primary" @click="show4 = true">{{ translate('duration') }}</nut-button>
      <nut-overlay v-model:visible="show4" :duration="2.5"></nut-overlay>
    </nut-cell>
    <h2>{{ translate('lockscroll') }}</h2>
    <nut-cell>
      <nut-button type="primary" @click="show5 = true">{{ translate('lockscroll') }}</nut-button>
      <nut-overlay v-model:visible="show5" lock-scroll></nut-overlay>
    </nut-cell>
    <h2>{{ translate('content') }}</h2>
    <nut-cell>
      <nut-button type="success" @click="show2 = true">{{ translate('btn2') }}</nut-button>
      <nut-overlay v-model:visible="show2" :z-index="2000">
        <div class="wrapper">
          <div class="content">{{ translate('text') }}</div>
        </div>
      </nut-overlay>
    </nut-cell>
    <h2>{{ translate('closeClickLay') }}</h2>
    <nut-cell>
      <nut-button type="primary" @click="show6 = true">{{ translate('closeClickLay') }}</nut-button>
      <nut-overlay v-model:visible="show6" lock-scroll :close-on-click-overlay="false">
        <div class="wrapper">
          <div class="content" @click.stop="show6 = false">close</div>
        </div>
      </nut-overlay>
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('overlay');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      style: '遮罩样式',
      duration: '设置动画时间',
      lockscroll: '锁定背景滚动',
      content: '嵌套内容',
      btn1: '显示遮罩层',
      btn2: '嵌套内容',
      text: '这里是正文',
      closeClickLay: '点击遮罩不关闭'
    },
    'en-US': {
      basic: 'Basic Usage',
      style: 'Mask style',
      duration: 'Set animation time',
      lockscroll: 'Lock Background Scroll',
      content: 'Nested content',
      btn1: 'Show mask layer',
      btn2: 'Nested content',
      text: 'Here is the text',
      closeClickLay: 'Click the mask not to close'
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
      show4: false,
      show5: false,
      show6: false,
      overlayStyle: {
        backgroundColor: 'rgba(0, 0, 0, .2)'
      }
    });
    return {
      ...toRefs(state),
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
