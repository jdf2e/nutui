<template>
  <div class="demo">
    icon
  </div>
</template>

<script lang="ts">
import Icon from '@/packages/icon/index.vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('icon');
export default createDemo({
  props: {},
  components: { [Icon.name]: Icon },
  emits: ['click']
});
</script>

<style lang="scss" scoped></style>
