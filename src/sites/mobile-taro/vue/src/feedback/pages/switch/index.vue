<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell>
      <nut-switch v-model="checked" />
    </nut-cell>

    <h2>禁用状态</h2>
    <nut-cell>
      <nut-switch v-model="checked" disable />
    </nut-cell>

    <h2>加载状态</h2>
    <nut-cell>
      <nut-switch v-model="checked" loading color="red" />
    </nut-cell>

    <h2>change事件</h2>
    <nut-cell>
      <nut-switch v-model="checked" @change="change" />
    </nut-cell>

    <h2>异步控制</h2>
    <nut-cell>
      <nut-switch :model-value="checkedAsync" @change="changeAsync" :loading="loadingAsync" />
    </nut-cell>

    <h2>自定义颜色</h2>
    <nut-cell>
      <nut-switch v-model="checked" @change="switchChange" active-color="blue" />
    </nut-cell>

    <h2>支持文字</h2>
    <nut-cell>
      <nut-switch v-model="checked" @change="switchChange" active-text="开" inactive-text="关" />
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { ref, getCurrentInstance } from 'vue';
export default {
  setup() {
    let { proxy } = getCurrentInstance() as any;
    const checked = ref(true);
    const checkedAsync = ref(true);
    const loadingAsync = ref(false);

    const change = (value: boolean, event: Event) => {
      console.log(`触发了change事件，开关状态：${value}`);
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
      checked,
      checkedAsync,
      loadingAsync,
      change,
      changeAsync
    };
  }
};
</script>
