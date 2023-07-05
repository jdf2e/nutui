<template>
  <div class="demo" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <h2>基础用法</h2>
    <nut-cell class="cell">
      <nut-rate v-model="state.val" />
    </nut-cell>

    <h2>半星</h2>
    <nut-cell class="cell"><nut-rate allow-half v-model="state.val1"></nut-rate></nut-cell>

    <h2>自定义 icon </h2>
    <nut-cell class="cell"><nut-rate :custom-icon="HeartFill" v-model="state.val2"></nut-rate></nut-cell>

    <h2>自定义数量</h2>
    <nut-cell class="cell"><nut-rate count="10" v-model="state.val3"></nut-rate></nut-cell>

    <h2>自定义颜色</h2>
    <nut-cell class="cell"><nut-rate active-color="#FFC800" v-model="state.val4"></nut-rate></nut-cell>

    <h2>禁用状态</h2>
    <nut-cell class="cell"><nut-rate disabled v-model="state.val5"></nut-rate></nut-cell>

    <h2>只读状态</h2>
    <nut-cell class="cell"><nut-rate v-model="state.val6" readonly></nut-rate></nut-cell>

    <h2>绑定事件</h2>
    <nut-cell class="cell"><nut-rate v-model="state.val7" @change="onChange"></nut-rate></nut-cell>

    <h2>自定义尺寸 35px</h2>
    <nut-cell class="cell"><nut-rate v-model="state.val8" size="35"></nut-rate></nut-cell>
  </div>
</template>

<script>
import { reactive, getCurrentInstance } from 'vue';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';
import { HeartFill, StarFillN } from '@nutui/icons-vue-taro';

export default {
  components: { HeartFill, StarFillN, Header },
  setup() {
    const env = Taro.getEnv();

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
    return {
      state,
      onChange,
      HeartFill,
      StarFillN,
      env
    };
  }
};
</script>

<style lang="scss" scoped></style>
