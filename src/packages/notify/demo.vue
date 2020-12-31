<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell :showIcon="true" :isLink="true" @click="notify1('通知内容')">
      <span>
        <label>基础用法</label>
      </span>
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { createApp } from 'vue';
import { createComponent } from '@/utils/create';
import notify from './index';
const { createDemo } = createComponent('notify');
const app = createApp({});
app.use(notify);
export default createDemo({
  props: {},
  setup() {
    const notify1 = () => {
      notify('content');
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
