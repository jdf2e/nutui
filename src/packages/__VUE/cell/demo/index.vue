<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('size') }}</h2>
    <Size />

    <h2>{{ t('slot') }}</h2>
    <SlotDemo />

    <h2>{{ t('desc') }}</h2>
    <Desc />

    <h2>{{ t('title') }}</h2>
    <Title />

    <h2>{{ t('group') }}</h2>
    <Group />

    <h2>{{ t('link') }}</h2>
    <Link />

    <h2>{{ t('icon') }}</h2>
    <IconDemo />

    <h2>{{ t('align') }}</h2>
    <Align />

    <h2>{{ t('center') }}</h2>
    <Center />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils';
import Basic from './basic.vue';
import Size from './size.vue';
import SlotDemo from './slot.vue';
import Desc from './desc.vue';
import Title from './title.vue';
import Group from './group.vue';
import Link from './link.vue';
import IconDemo from './icon.vue';
import Align from './align.vue';
import Center from './center.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    size: '尺寸设置 large',
    slot: '默认插槽',
    title: '左侧 title 插槽',
    desc: '右侧 desc 插槽',
    group: 'CellGroup 分组用法',
    link: '右侧 link 插槽',
    icon: '左侧 icon 插槽',
    align: '设置 align',
    center: '垂直居中'
  },
  'en-US': {
    basic: 'Basic Usage',
    size: 'Size Large',
    slot: 'Default Slot',
    title: 'Title Slot',
    desc: 'Desc Slot',
    group: 'CellGroup',
    link: 'Link Slot',
    icon: 'Icon Slot',
    align: 'Align Left',
    center: 'Vertical Center'
  }
});
</script>
