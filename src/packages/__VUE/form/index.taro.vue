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
import CellGroup from '../cellgroup/index.vue';
const { create } = createComponent('form');
export default create(component({
  [CellGroup.name]: CellGroup
}));
</script>
