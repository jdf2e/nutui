<template>
  <div class="nut-rate"></div>
</template>
<script lang="ts">
import { toRefs, watch, reactive, inject } from 'vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('rate');

export default create({
  props: {},
  setup(props, { emit, slots }) {
    return {};
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
