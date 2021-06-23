<template>
  <div class="demo">
    <h2>基本用法</h2>
    <nut-rate v-model="state.val" />

    <h2>半星</h2>
    <nut-rate allow-half v-model="state.val1"></nut-rate>

    <h2>自定义 icon </h2>
    <nut-rate
      checked-icon="heart-fill1"
      unchecked-icon="heart"
      v-model="state.val2"
    ></nut-rate>

    <h2>自定义数量</h2>
    <nut-rate :count="6" v-model="state.val3"></nut-rate>

    <h2>自定义颜色</h2>
    <nut-rate active-color="#FFC800" v-model="state.val4"></nut-rate>

    <h2>禁用状态</h2>
    <nut-rate disabled v-model="state.val5"></nut-rate>

    <h2>只读状态</h2>
    <nut-rate v-model="state.val6" readonly></nut-rate>

    <h2>绑定事件</h2>
    <nut-rate v-model="state.val7" @change="onChange"></nut-rate>
    <h2>自定义尺寸 35px</h2>
    <nut-rate v-model="state.val8" icon-size="35"></nut-rate>
  </div>
</template>

<script>
import { reactive, getCurrentInstance } from 'vue';
export default {
  setup() {
    let { proxy } = getCurrentInstance();

    const state = reactive({
      val: 3,
      val1: 3.5,
      val2: 3,
      val3: 3,
      val4: 3,
      val5: 3,
      val6: 3,
      val7: 3,
      val8: 3
    });
    const onChange = (val) => {
      proxy.$toast.text(val);
    };
    return {
      state,
      onChange
    };
  }
};
</script>

<style lang="scss" scoped></style>
