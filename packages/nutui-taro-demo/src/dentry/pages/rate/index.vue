<template>
  <Demo>
    <h2>基础用法</h2>
    <nut-cell class="cell">
      <nut-rate v-model="state.val" />
    </nut-cell>

    <h2>半星</h2>
    <nut-cell class="cell"><nut-rate v-model="state.val1" allow-half></nut-rate></nut-cell>

    <h2>自定义 icon </h2>
    <nut-cell class="cell"><nut-rate v-model="state.val2" :custom-icon="HeartFill"></nut-rate></nut-cell>

    <h2>自定义数量</h2>
    <nut-cell class="cell"><nut-rate v-model="state.val3" count="10"></nut-rate></nut-cell>

    <h2>自定义颜色</h2>
    <nut-cell class="cell"><nut-rate v-model="state.val4" active-color="#FFC800"></nut-rate></nut-cell>

    <h2>禁用状态</h2>
    <nut-cell class="cell"><nut-rate v-model="state.val5" disabled></nut-rate></nut-cell>

    <h2>只读状态</h2>
    <nut-cell class="cell"><nut-rate v-model="state.val6" readonly></nut-rate></nut-cell>

    <h2>绑定事件</h2>
    <nut-cell class="cell"><nut-rate v-model="state.val7" @change="onChange"></nut-rate></nut-cell>

    <h2>自定义尺寸 35px</h2>
    <nut-cell class="cell"><nut-rate v-model="state.val8" size="35"></nut-rate></nut-cell>
  </Demo>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { HeartFill } from '@nutui/icons-vue-taro';

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
  console.log(val);
};
</script>

<style lang="scss" scoped></style>
