<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <Basic />

    <h2>{{ translate('size') }}</h2>
    <Size />

    <h2>{{ translate('slot') }}</h2>
    <SlotDemo />

    <h2>{{ translate('desc') }}</h2>
    <Desc />

    <h2>{{ translate('title') }}</h2>
    <Title />

    <h2>{{ translate('group') }}</h2>
    <Group />

    <h2>{{ translate('link') }}</h2>
    <Link />

    <h2>{{ translate('icon') }}</h2>
    <Icon />

    <h2>{{ translate('align') }}</h2>
    <Align />

    <h2>{{ translate('center') }}</h2>
    <Center />
  </div>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/assets/util/useTranslate';
import Basic from './demo/basic.vue';
import Size from './demo/size.vue';
import SlotDemo from './demo/slot.vue';
import Desc from './demo/desc.vue';
import Title from './demo/title.vue';
import Group from './demo/group.vue';
import Link from './demo/link.vue';
import Icon from './demo/icon.vue';
import Align from './demo/align.vue';
import Center from './demo/center.vue';

const translate = useTranslate({
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
