<template>
  <Demo class="bg-w">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('step') }}</h2>
    <Step />

    <h2>{{ t('limit') }}</h2>
    <Limit />

    <h2>{{ t('disabled') }}</h2>
    <Disabled />

    <h2>{{ t('readonly') }}</h2>
    <Readonly />

    <h2>{{ t('decimal') }}</h2>
    <Decimal />

    <h2>{{ t('size') }}</h2>
    <Size />

    <h2>{{ t('icon') }}</h2>
    <IconDemo />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils';
import Basic from './basic.vue';
import Step from './step.vue';
import Limit from './limit.vue';
import Disabled from './disabled.vue';
import Readonly from './readonly.vue';
import Decimal from './decimal.vue';
import Size from './size.vue';
import IconDemo from './icon.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    step: '步长设置',
    limit: '限制输入范围',
    disabled: '禁用操作',
    readonly: '只读禁用输入框',
    decimal: '支持小数',
    size: '自定义按钮大小',
    icon: '自定义图标'
  },
  'en-US': {
    basic: 'Basic Usage',
    step: 'Step size setting',
    limit: 'Limit input range',
    disabled: 'Disable operation',
    readonly: 'Read only disabled input box',
    decimal: 'Support decimal',
    size: 'Custom button size',
    icon: 'Custom icon name'
  }
});
</script>
