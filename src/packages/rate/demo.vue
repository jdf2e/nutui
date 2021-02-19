<template>
  <div class="demo">
    <h2>基本用法</h2>
    <div>
      <nut-rate v-model:value="state.val"></nut-rate>
    </div>

    <h2>自定义图标</h2>
    <div>
      <nut-rate checkedIcon="heart-fill1" uncheckedIcon="heart"></nut-rate>
    </div>

    <h2>自定义数量</h2>
    <div>
      <nut-rate :total="6"></nut-rate>
    </div>

    <h2>自定义颜色</h2>
    <div>
      <nut-rate activeColor="#FFC800"></nut-rate>
    </div>

    <h2>禁用状态</h2>
    <div>
      <nut-rate :disabled="true"></nut-rate>
    </div>

    <h2>只读状态</h2>
    <div>
      <nut-rate :value="2" :readOnly="true"></nut-rate>
    </div>

    <h2>监听 change 事件</h2>
    <div>
      <nut-rate @click="onClick"></nut-rate>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('rate');
export default createDemo({
  setup() {
    const state = reactive({
      val: 4,
      val2: 2,
      result: '',
      result2: ''
    });
    const onClick = idx => {
      state.result = '您点击了第' + idx + '个!';
    };
    return {
      state,
      onClick
    };
  }
});
</script>

<style lang="scss" scoped>
.demo {
  padding-left: 0;
  padding-right: 0;
}
h4 {
  padding: 0 10px;
}
</style>
