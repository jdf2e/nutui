<template>
  <div class="demo-list">
    <h4>基础用法</h4>
    <div class="show-demo">
      <nut-checkbox v-model="checkbox1" @change="changeBox1">选项</nut-checkbox>
      <nut-checkbox v-model="checkbox2" @change="changeBox1">选项</nut-checkbox>
    </div>
    <h4>基本用法</h4>
    <div class="show-demo"> </div>
  </div>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('checkbox');
export default createDemo({
  setup(props, context) {
    const data = reactive({
      checkbox1: false,
      checkbox2: true
    });
    const changeBox1 = (name: string) => {
      console.log(`点击了name是的面板`);
    };
    return {
      changeBox1,
      ...toRefs(data)
    };
  }
});
</script>

<style>
#app {
  background: #f7f8fa;
}
</style>
<style lang="scss" scoped>
.demo-list {
  margin: 60px 0;
  padding: 17px;
  h4 {
    line-height: 20px;
    color: #909ca4;
    font-size: 14px;
  }
  .show-demo {
    margin-top: 10px;
    padding: 15px;
    background-color: #ffffff;
    border-radius: 7px;
    box-shadow: 0px 1px 7px 0px rgba(237, 238, 241, 1);
  }
}
</style>
