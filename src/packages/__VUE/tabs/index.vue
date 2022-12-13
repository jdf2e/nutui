<template src="./template.html"></template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { component } from './common';
import Sticky from '../sticky/index.vue';
const { create } = createComponent('tabs');
export default create(
  component({
    [Sticky.name]: Sticky
  })
);
</script>
