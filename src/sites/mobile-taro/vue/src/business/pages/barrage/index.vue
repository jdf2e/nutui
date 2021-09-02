<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell>
      <nut-barrage ref="danmu" :danmu="list"></nut-barrage>
    </nut-cell>
    <div class="test">
      <nut-input label="文本" v-model="inputVal" />
      <nut-button type="primary" @click="addDanmu">添加</nut-button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  props: {},
  setup() {
    const inputVal = ref<any>('');
    const danmu = ref<any>(null);
    let list = ref([
      '画美不看',
      '不明觉厉',
      '喜大普奔',
      '男默女泪',
      '累觉不爱',
      '爷青结'
    ]);
    function addDanmu() {
      danmu.value.add(inputVal.value);
    }
    return {
      inputVal,
      danmu,
      list,
      addDanmu
    };
  }
};
</script>

<style lang="scss">
.nut-cell,
.nut-barrage {
  padding: 20px 0;
  height: 120px;
}
.test {
  display: flex;
  justify-content: space-between;
  .nut-input {
    width: 80%;
  }
}
</style>
