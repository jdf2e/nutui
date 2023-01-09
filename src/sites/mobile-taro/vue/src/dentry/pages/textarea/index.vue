<template>
  <div class="demo full" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <h2>基础用法</h2>
    <nut-textarea v-model="value" />
    <h2>显示字数统计</h2>
    <nut-textarea v-model="value2" limit-show max-length="20" />
    <h2>高度自定义，拉伸</h2>
    <nut-textarea v-model="value3" autosize />
    <h2>只读、禁用</h2>
    <nut-textarea readonly model-value="textarea 只读状态" />
    <nut-textarea disabled model-value="textarea 禁用状态" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';

export default {
  props: {},
  components: {
    Header
  },
  setup() {
    const env = Taro.getEnv();
    const value = ref('');
    const value2 = ref('');
    const value3 = ref('');
    const value4 = ref('');

    return {
      value,
      value2,
      value3,
      value4,
      env
    };
  }
};
</script>

<style lang="scss">
.nut-textarea__textarea__readonly {
  background-color: #f9f9f9;
}
.nut-textarea--disabled {
  textarea {
    padding: 5px 10px;
    height: 30px;
    background-color: #f9f9f9;
  }
}
</style>
