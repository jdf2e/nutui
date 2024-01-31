<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('indeterminate') }}</h2>
    <Indeterminate />

    <h2>{{ t('disabled') }}</h2>
    <Disabled />

    <h2>{{ t('size') }}</h2>
    <Size />

    <h2>{{ t('icon') }}</h2>
    <IconDemo />

    <h2>{{ t('event') }}</h2>
    <Event />

    <h2>{{ t('group') }}</h2>
    <Group />

    <h2>{{ t('groupDisabled') }}</h2>
    <GroupDisabled />

    <h2>{{ t('methods') }}</h2>
    <Methods />

    <h2>{{ t('max') }}</h2>
    <Max />

    <h2>{{ t('methods2') }}</h2>
    <Methods2 />

    <h2>{{ t('shape') }}</h2>
    <Shape />
  </Demo>
</template>
<script setup lang="ts">
import { useTranslate } from '../../../utils';
import Basic from './basic.vue';
import Indeterminate from './indeterminate.vue';
import Disabled from './disabled.vue';
import Size from './size.vue';
import IconDemo from './icon.vue';
import Event from './event.vue';
import Group from './group.vue';
import GroupDisabled from './group-disabled.vue';
import Methods from './methods.vue';
import Max from './max.vue';
import Methods2 from './methods2.vue';
import Shape from './shape.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    indeterminate: '半选状态',
    disabled: '禁用状态',
    size: '自定义尺寸',
    icon: '自定义图标',
    event: 'Change 事件',
    group: 'CheckboxGroup',
    groupDisabled: 'CheckboxGroup 禁用',
    methods: 'CheckboxGroup 方法',
    max: 'CheckboxGroup 限制最大可选数',
    methods2: '全选/半选/取消',
    shape: '按钮形状'
  },
  'en-US': {
    basic: 'Basic Usage',
    indeterminate: 'Indeterminate',
    disabled: 'Disabled',
    size: 'Custom Size',
    icon: 'Custom Icon',
    event: 'Change Event',
    group: 'CheckboxGroup',
    groupDisabled: 'Disabled CheckboxGroup',
    methods: 'Checkboxgroup Methods',
    max: 'CheckboxGroup Limit the maximum number of options',
    methods2: 'Select all / half / cancel',
    shape: 'Button Shape'
  }
});
</script>
