<template>
  <div class="demo" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <h2>基础用法</h2>
    <nut-cell>
      <nut-switch v-model="checked1" />
    </nut-cell>

    <h2>禁用状态</h2>
    <nut-cell>
      <nut-switch v-model="checked2" disable />
    </nut-cell>

    <h2>加载状态</h2>
    <nut-cell>
      <nut-switch v-model="checked3" loading activeColor="red" />
    </nut-cell>

    <h2>change事件</h2>
    <nut-cell>
      <nut-switch v-model="checked4" @change="change" />
    </nut-cell>

    <h2>异步控制</h2>
    <nut-cell>
      <nut-switch :model-value="checkedAsync" @change="changeAsync" :loading="loadingAsync" />
    </nut-cell>

    <h2>自定义颜色</h2>
    <nut-cell>
      <nut-switch v-model="checked6" active-color="blue" />
    </nut-cell>

    <h2>支持文字</h2>
    <nut-cell>
      <nut-switch v-model="checked7" active-text="开" inactive-text="关" />
    </nut-cell>

    <h2>自定义加载图标</h2>
    <nut-cell>
      <nut-switch v-model="checked8" loading><Loading name="loading" /></nut-switch>
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { ref, reactive, toRefs, getCurrentInstance } from 'vue';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';
import { Loading } from '@nutui/icons-vue-taro';
export default {
  components: { Loading, Header },
  setup() {
    const env = Taro.getEnv();
    let { proxy } = getCurrentInstance() as any;
    const data = reactive({
      checked1: true,
      checked2: true,
      checked3: true,
      checked4: true,
      checked6: true,
      checked7: true,
      checked8: true
    });
    const checkedAsync = ref(true);
    const loadingAsync = ref(false);

    const change = (value: boolean, event: Event) => {
      console.log(`value：${value}`);
    };
    const changeAsync = (value: boolean, event: Event) => {
      console.log(`2秒后异步触发 ${value}`);
      loadingAsync.value = true;
      setTimeout(() => {
        checkedAsync.value = value;
        loadingAsync.value = false;
      }, 2000);
    };

    return {
      ...toRefs(data),
      checkedAsync,
      loadingAsync,
      change,
      changeAsync,
      env
    };
  }
};
</script>
