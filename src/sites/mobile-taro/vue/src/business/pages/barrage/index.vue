<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell>
      <nut-barrage ref="danmu" :danmu="list"></nut-barrage>
    </nut-cell>
    <!-- <h2>slot 用法</h2>
    <nut-cell>
      <nut-barrage>
        <span>aaa</span>
        <span>bbb</span>
        <span>ccc</span>
        <span>ddd</span>
      </nut-barrage>
    </nut-cell> -->
    <div class="test">
      <button @click="addDanmu" class="add nut-button--primary">随机添加</button>
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
    let list = ref(['画美不看画美不看画美不看画美不看', '不明觉厉', '喜大普奔', '男默女泪', '累觉不爱', '爷青结']);
    function addDanmu() {
      let n = Math.random();
      danmu.value.add('随机——' + String(n).substr(2, 10));
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
  height: 150px;
}

.test {
  .add {
    display: block;
    padding: 5px 30px;
    margin: 20px auto;
    border-radius: 15px;
    font-size: 12px;
  }
}
</style>
