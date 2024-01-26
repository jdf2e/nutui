<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('length') }}</h2>
    <Length />

    <h2>{{ t('forget') }}</h2>
    <Forget />

    <h2>{{ t('error') }}</h2>
    <Error />
  </Demo>
</template>
<script setup lang="ts">
import { useTranslate } from '../../../utils';
import Basic from './basic.vue';
import Length from './length.vue';
import Forget from './forget.vue';
import Error from './error.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    length: '自定义密码长度',
    forget: '忘记密码',
    error: '错误提示语'
  },
  'en-US': {
    basic: 'Basic Usage',
    length: 'Custom Password Length',
    forget: 'Forget Password',
    error: 'Error Message'
  }
});
</script>
