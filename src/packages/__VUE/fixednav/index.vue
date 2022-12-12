<template src="./template.html"></template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { component } from './common';
import OverLay from '../overlay/index.vue';
const { create } = createComponent('fixednav');
export default create(component({
  [OverLay.name]: OverLay
}));
</script>
