<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-cell>
      <nut-sticky top="57">
        <nut-button type="primary">{{ translate('content') }}</nut-button>
      </nut-sticky>
    </nut-cell>
    <h2>{{ translate('title1') }}</h2>
    <nut-cell>
      <nut-sticky top="120">
        <nut-button type="primary">{{ translate('title1') }} 120px</nut-button>
      </nut-sticky>
    </nut-cell>
    <h2>{{ translate('title2') }}</h2>
    <div class="sticky-container" ref="container">
      <nut-sticky top="100" :container="container" z-index="1">
        <nut-button type="info">{{ translate('title2') }}</nut-button>
      </nut-sticky>
    </div>
    <h2>{{ translate('title3') }}</h2>
    <nut-cell>
      <nut-sticky bottom="100" position="bottom">
        <nut-button type="primary">{{ translate('title3') }} 100px</nut-button>
      </nut-sticky>
    </nut-cell>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('sticky');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      title1: '吸顶距离',
      title2: '指定容器',
      title3: '吸底距离',
      content: '吸顶按钮'
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Ceiling distance',
      title2: 'Specify container',
      title3: 'Suction distance',
      content: 'Ceiling button'
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    const container = ref(null);
    return {
      container,
      translate
    };
  }
});
</script>
<style lang="scss" scoped>
.nut-theme-dark {
  .demo {
    .sticky-container {
      background-color: #1b1b1b;
    }
  }
}
.demo {
  height: 200vh !important;
}
.sticky-container {
  width: 100%;
  height: 300px;
  background-color: #fff;
}
</style>
<style lang="scss">
#app {
  height: auto !important;
}
</style>
