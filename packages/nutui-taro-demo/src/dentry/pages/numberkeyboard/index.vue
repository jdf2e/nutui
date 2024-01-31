<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('right') }}</h2>
    <Right />

    <h2>{{ t('random') }}</h2>
    <Random />

    <h2>{{ t('title') }}</h2>
    <Title />

    <h2>{{ t('idcard') }}</h2>
    <Idcard />

    <h2>{{ t('value') }}</h2>
    <Value />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '../../../utils';
import Basic from './basic.vue';
import Right from './right.vue';
import Random from './random.vue';
import Title from './title.vue';
import Idcard from './idcard.vue';
import Value from './value.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '默认键盘',
    right: '带右侧栏键盘',
    random: '随机数键盘',
    title: '带标题栏键盘',
    idcard: '身份证键盘',
    value: '双向绑定：'
  },
  'en-US': {
    basic: 'Default',
    right: 'RightColumn',
    random: 'Random',
    title: 'Title',
    idcard: 'Idcard',
    value: 'v-model'
  }
});
</script>
