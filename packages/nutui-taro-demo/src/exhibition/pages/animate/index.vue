<template>
  <Demo class="demo-animate">
    <h2>{{ t('show') }}</h2>
    <Show />

    <h2>{{ t('loop') }}</h2>
    <Loop />

    <h2>{{ t('click') }}</h2>
    <Click />
  </Demo>
</template>
<script setup lang="ts">
import { useTranslate } from '../../../utils'
import Show from './show.vue'
import Loop from './loop.vue'
import Click from './click.vue'

const t = useTranslate({
  'zh-CN': {
    show: '通过 show 控制动画',
    loop: '循环动画',
    click: '点击触发'
  },
  'en-US': {
    show: 'Trigger animation through show',
    loop: 'Loop animation',
    click: 'Click'
  }
})
</script>
<style lang="scss">
.demo-animate {
  .nut-animate {
    margin-bottom: 10px;
    display: inline-block;
    width: 100%;
  }
}
</style>
