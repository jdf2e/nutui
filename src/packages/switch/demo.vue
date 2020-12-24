<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell class="switch-adjust">
      {{ text }}
      <nut-switch
        @switch-change="switchChange"
        class="switch-decoration"
      ></nut-switch>
    </nut-cell>

    <h2>change事件</h2>
    <nut-cell class="switch-adjust">
      chane
      <nut-switch
        @switch-change="change"
        class="switch-decoration"
      ></nut-switch>
    </nut-cell>

    <h2>自定义颜色</h2>
    <nut-cell class="switch-adjust">
      color
      <nut-switch activeColor="blue" class="switch-decoration"></nut-switch>
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { toRefs, reactive } from 'vue';
import { createComponent } from '@/utils/create';
import { isObject } from '@vue/shared';
const { createDemo } = createComponent('switch');
export default createDemo({
  props: {},
  setup() {
    const response = reactive({
      text: '开'
    });
    const switchChange = (event: Event, isOpen: boolean) => {
      response.text = isOpen ? '开' : '关';
    };
    const change = (event: Event, isOpen: boolean) => {
      console.log('触发了change事件,开关状态：', isOpen);
    };

    return {
      ...toRefs(response),
      switchChange,
      change
    };
  }
});
</script>

<style lang="scss" scoped>
.switch-adjust {
  font-size: 18px;
  color: rgba(102, 102, 102, 1);
  justify-content: space-between;
  align-items: center;
}

.switch-decoration {
  cursor: pointer;
}
</style>
