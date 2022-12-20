<template src="./template.html"></template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { component } from './common';
import OverLay from '../overlay/index.taro.vue';
const { create } = createComponent('fixed-nav');
import { Left } from '@nutui/icons-vue-taro';
export default create(
  component({
    [OverLay.name]: OverLay,
    Left
  })
);
</script>
