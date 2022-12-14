<template src="./template.html"></template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { component } from './common';
import Sticky from '../sticky/index.taro.vue';
import { JoySmile } from '@nutui/icons-vue';
const { create } = createComponent('tabs');
export default create(
  component({
    [Sticky.name]: Sticky,
    JoySmile
  })
);
</script>
