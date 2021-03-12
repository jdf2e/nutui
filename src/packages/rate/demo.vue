<template>
  <div class="demo">
    <h2>基本用法</h2>
    <div>
      <nut-rate v-model:value="state.val"></nut-rate>
    </div>

    <h2>自定义 icon </h2>
    <div>
      <nut-rate
        checked-icon="heart-fill1"
        unchecked-icon="heart"
        v-model:value="state.val3"
      ></nut-rate>
    </div>

    <h2>自定义数量</h2>
    <div>
      <nut-rate :total="6" v-model:value="state.val4"></nut-rate>
    </div>

    <h2>自定义颜色</h2>
    <div>
      <nut-rate active-color="#FFC800" v-model:value="state.val5"></nut-rate>
    </div>

    <h2>禁用状态</h2>
    <div>
      <nut-rate :disabled="true" v-model:value="state.val6"></nut-rate>
    </div>

    <h2>只读状态</h2>
    <div>
      <nut-rate :value="2" :read-only="true"></nut-rate>
    </div>

    <h2>绑定事件,{{ state.result }}</h2>
    <div>
      <nut-rate @click="onClick"></nut-rate>
    </div>
    <h2>自定义尺寸</h2>
    <div>
      <nut-rate :size="35"></nut-rate>
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
      val3: 3,
      val4: 3,
      val5: 3,
      val6: 3,
      val7: 3,
      result: ''
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
}
h4 {
  padding: 0 10px;
}
</style>
