<template>
  <div class="demo full">
    <h2>{{ translate('basic') }}</h2>
    <div class="demo__piece">
      <nut-circleprogress :progress="20"> </nut-circleprogress>
    </div>
    <h2>{{ translate('customWidth') }}</h2>
    <div class="demo__piece">
      <nut-circleprogress :progress="50" strokeWidth="10"> </nut-circleprogress>
    </div>

    <h2>{{ translate('Gradient') }}</h2>
    <div class="demo__piece">
      <nut-circleprogress :progress="50" color="red" />
      <nut-circleprogress :progress="100" :color="gradientColor" />
    </div>
    <h2>{{ translate('customSize') }}</h2>
    <div class="demo__piece">
      <nut-circleprogress :progress="50" radius="60"></nut-circleprogress>
    </div>
    <h2>{{ translate('customContent') }}</h2>
    <div class="demo__piece">
      <nut-circleprogress :progress="50" radius="60">{{ translate('custom') }}</nut-circleprogress>
    </div>
    <h2>{{ translate('dynamicChange') }}</h2>
    <div class="demo__piece">
      <nut-circleprogress :progress="percent"> </nut-circleprogress>
    </div>
    <div class="demo__btn">
      <nut-button type="primary" @click="setReduceVal">{{ translate('reduce') }}</nut-button>
      <nut-button type="primary" @click="setAddVal">{{ translate('add') }}</nut-button>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('circleprogress');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      customWidth: '自定义宽度',
      Gradient: '渐变色',
      customSize: '自定义尺寸',
      customContent: '自定义内容',
      custom: '自定义',
      dynamicChange: '动态改变',
      reduce: '减少',
      add: '增加'
    },
    'en-US': {
      basic: 'Basic Usage',
      customWidth: 'Custom Width',
      Gradient: 'Gradient',
      custom: 'custom',
      customContent: 'Custom Content',
      dynamicChange: 'Dynamic Change',
      reduce: 'reduce',
      add: 'add'
    }
  });
export default createDemo({
  setup() {
    initTranslate();
    const gradientColor = {
      '0%': '#FF5E5E',
      '100%': '#FFA062'
    };
    const percent = ref(30);
    const setAddVal = () => {
      if (percent.value >= 100) {
        return;
      }
      percent.value += 10;
    };
    const setReduceVal = () => {
      if (percent.value - 10 <= 0) {
        percent.value = 0;
        return;
      }
      percent.value -= 10;
    };
    return {
      setAddVal,
      setReduceVal,
      percent,
      gradientColor,
      translate
    };
  }
});
</script>

<style lang="scss" scoped>
.demo__btn {
  text-align: center;
  width: 100%;
  height: 50px;
  border-top: 1px solid rgba(234, 240, 251, 1);
  padding-top: 6px;
  background: rgba(255, 255, 255, 1);
  .nut-button {
    margin-right: 10px;
  }
}

.demo__piece {
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 1);
  padding: 10px 0;
}
.nut-theme-dark {
  .demo__piece,
  .demo__btn {
    background: black;
    border-top: none;
  }
}
</style>
