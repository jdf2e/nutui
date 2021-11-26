<template>
  <nut-cascader-item />
</template>
<script lang="ts">
import { createComponent } from '../../utils/create';
const { create } = createComponent('cascader');
import CascaderItem from './cascader-item.vue';

export default create({
  components: {
    [CascaderItem.name]: CascaderItem
  }
});
</script>
