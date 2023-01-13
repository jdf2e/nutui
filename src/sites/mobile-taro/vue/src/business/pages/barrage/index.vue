<template>
  <div class="demo barrage-demo" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <h2>基础用法</h2>
    <nut-cell class="danmu-box">
      <nut-barrage ref="danmu" :danmu="list"></nut-barrage>
    </nut-cell>
    <div class="test">
      <nut-button @click="addDanmu" class="add nut-button--primary">随机添加</nut-button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';
export default {
  components: { Header },
  setup() {
    const env = Taro.getEnv();
    const inputVal = ref<any>('');
    const danmu = ref<any>(null);
    let list = ref(['画美不看', '不明觉厉', '喜大普奔', '男默女泪', '累觉不爱', '爷青结']);
    function addDanmu() {
      let n = Math.random();
      danmu.value.add('随机——' + String(n).substr(2, 10));
    }
    return {
      inputVal,
      danmu,
      list,
      addDanmu,
      env
    };
  }
};
</script>

<style lang="scss">
.barrage-demo {
  .danmu-box,
  .nut-barrage {
    padding: 20px 0;
    height: 150px;
  }
  .nut-button {
    width: 100%;
  }
}
</style>
