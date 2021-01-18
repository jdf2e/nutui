<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell :showIcon="true" :isLink="true" @click="notify1('isVisible1')">
      <span>
        <label>基础用法</label>
      </span>
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { reactive, createApp } from 'vue';
import { createComponent } from '@/utils/create';
import { Notify } from './notify';
const { createDemo } = createComponent('notify');
// const app = createApp({});
// app.use(notify);
export default createDemo({
  setup() {
    const state = reactive({
      isVisible1: false,
      isVisible2: false,
      isVisible3: false,
      isVisible4: false
    });
    const notify1 = msg => {
      Notify.text('hello', {
        duration: 1000
      });
    };
    return {
      notify1
    };
  }
});
</script>

<style lang="scss" scoped>
.nut-temp {
}
</style>
