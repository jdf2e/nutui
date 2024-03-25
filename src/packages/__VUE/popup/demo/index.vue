<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('position') }}</h2>
    <Position />

    <h2>{{ t('close') }}</h2>
    <Close />

    <h2>{{ t('round') }}</h2>
    <Round />

    <h2>{{ t('muti') }}</h2>
    <Multi />

    <h2>{{ t('port') }}</h2>
    <Port />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils'
import Basic from './basic.vue'
import Position from './position.vue'
import Close from './close.vue'
import Round from './round.vue'
import Multi from './multi.vue'
import Port from './port.vue'

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    position: '弹出位置',
    close: '关闭图标',
    round: '圆角弹框',
    muti: '多层堆叠',
    port: '指定挂载节点'
  },
  'en-US': {
    basic: 'Basic Usage',
    position: 'Position',
    close: 'Close Icon',
    round: 'Round Popup',
    muti: 'Multi Layers',
    port: 'Teleport'
  }
})
</script>
