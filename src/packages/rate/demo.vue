<template>
  <div class="demo">
    <h2>基本用法</h2>
    <div>
      <nut-cell>
        <nut-rate v-model:value="state.val"></nut-rate>
      </nut-cell>
      <nut-cell> 当前分数：{{ state.val }}分 </nut-cell>
    </div>

    <h2>只读</h2>
    <div>
      <nut-cell>
        <nut-rate v-model:value="state.val2" :readOnly="true"></nut-rate>
      </nut-cell>
      <nut-cell> 结果：{{ state.val2 }} </nut-cell>
    </div>

    <h2>自定义尺寸</h2>
    <div>
      <nut-cell>
        <nut-rate :size="30"></nut-rate>
      </nut-cell>
    </div>

    <h2>事件</h2>
    <div>
      <nut-cell>
        <nut-rate @click="onClick"></nut-rate>
      </nut-cell>
      <nut-cell> 结果：{{ state.result }} </nut-cell>
    </div>

    <h2>自定义ICON</h2>
    <div>
      <nut-cell>
        <nut-rate
          :checkedIcon="state.icon1"
          :uncheckedIcon="state.icon2"
        ></nut-rate>
      </nut-cell>
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
      result2: '',
      icon1: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='rgb(255,0,0)' d='M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM6.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm2.16 3H4.34a6 6 0 0 0 11.32 0z'/%3E%3C/svg%3E")`,
      icon2: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='rgb(255,0,0)' d='M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM7 13h6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2z'/%3E%3C/svg%3E")`
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
