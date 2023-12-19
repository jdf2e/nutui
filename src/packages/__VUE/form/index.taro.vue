<template>
  <form class="nut-form" action="#" @submit.prevent="() => false">
    <nut-cell-group>
      <slot></slot>
    </nut-cell-group>
  </form>
</template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { component } from './common';
import NutCellGroup from '../cellgroup/index.taro.vue';
const { create } = createComponent('form');
export default create(
  component({
    NutCellGroup
  })
);
</script>
