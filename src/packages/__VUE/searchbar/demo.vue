<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell>
      <nut-searchbar>
        <template v-slot:left>lalala</template>
        <template v-slot:left-in>2222</template>
        <template v-slot:right>rrr</template>
        <template v-slot:right-in>ririri</template>
      </nut-searchbar>
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('searchbar');
export default createDemo({
  props: {},
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.demo {
}
</style>
