<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell title="请选择城市" desc="北京" @click="sss"></nut-cell>
    <h2>多列样式</h2>
    <nut-cell title="请选择时间" desc="周三 下午" @click="sss"></nut-cell>
    <h2>多级联动</h2>
    <nut-cell title="请选择时间" desc="北京 朝阳" @click="sss"></nut-cell>
    <h2>带标题的样式</h2>
    <nut-cell title="请选择时间" desc="请选择城市" @click="sss"></nut-cell>
    <nut-picker :show="show" @close="close"></nut-picker>
  </div>
</template>
<script lang="ts">
import { toRefs, ref } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('picker');
export default createDemo({
  props: {},
  setup() {
    const show = ref(false);
    return {
      show,
      close: () => {
        show.value = false;
      },
      sss: () => {
        show.value = true;
      }
    };
  }
});
</script>

<style lang="scss" scoped>
.demo {
}
</style>
