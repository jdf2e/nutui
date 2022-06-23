<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-cell>
      <nut-watermark></nut-watermark>
    </nut-cell>
  </div>
</template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('watermark');
import { useTranslate } from '@/sites/assets/util/useTranslate';
useTranslate({
  'zh-CN': {
    basic: '基本用法'
  },
  'en-US': {
    basic: 'Basic Usage'
  }
});
export default createDemo({
  props: {},
  setup() {
    return { translate };
  }
});
</script>
<style lang="scss" scoped>
.demo {
}
</style>
