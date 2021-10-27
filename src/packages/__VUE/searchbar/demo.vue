<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-searchbar class="wrap" v-model="searchValue" @search="search">
      <template v-slot:leftout>
        <nut-icon @click="clickLeft" size="20" name="left"></nut-icon>
      </template>
      <template v-slot:leftin>
        <nut-icon size="14" name="search2"></nut-icon>
      </template>
      <template v-slot:rightin>
        <nut-icon size="20" name="photograph"></nut-icon>
      </template>
      <template v-slot:rightout>
        <nut-icon size="20" name="message"></nut-icon>
      </template>
    </nut-searchbar>
  </div>
</template>

<script lang="ts">
import { toRefs, reactive } from 'vue';
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('searchbar');
export default createDemo({
  props: {},
  setup() {
    const state = reactive({
      searchValue: ''
    });

    const search = function (e: any) {
      console.log('search now', e);
    };

    const clickLeft = function () {
      console.log('left clicked');
    };

    return {
      clickLeft,
      search,
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
.wrap {
}
</style>
