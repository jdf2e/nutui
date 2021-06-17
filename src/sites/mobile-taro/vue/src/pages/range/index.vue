<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell class="cell">
      <nut-range v-model="value1" @change="onChange"></nut-range>
    </nut-cell>
    <h2>双滑块</h2>
    <nut-cell class="cell">
      <nut-range range v-model="value2" @change="onChange"></nut-range>
    </nut-cell>
    <h2>指定范围</h2>
    <nut-cell class="cell">
      <nut-range
        v-model="value3"
        :max="10"
        :min="-10"
        @change="onChange"
      ></nut-range>
    </nut-cell>
    <h2>设置步长</h2>
    <nut-cell class="cell">
      <nut-range v-model="value4" :step="5" @change="onChange"></nut-range>
    </nut-cell>
    <h2>隐藏范围</h2>
    <nut-cell class="cell">
      <nut-range hidden-range v-model="value5" @change="onChange"></nut-range>
    </nut-cell>
    <h2>隐藏标签</h2>
    <nut-cell class="cell">
      <nut-range hidden-tag v-model="value6" @change="onChange"></nut-range>
    </nut-cell>
    <h2>禁用</h2>
    <nut-cell class="cell">
      <nut-range disabled v-model="value7"></nut-range>
    </nut-cell>
    <h2>自定义样式</h2>
    <nut-cell class="cell">
      <nut-range
        v-model="value8"
        @change="onChange"
        inactive-color="rgba(163,184,255,1)"
        button-color="rgba(52,96,250,1)"
        active-color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
      ></nut-range>
    </nut-cell>
    <h2>自定义按钮</h2>
    <nut-cell class="cell">
      <nut-range v-model="value9" @change="onChange">
        <template #button>
          <div class="custom-button">{{ value10 }}</div>
        </template>
      </nut-range>
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { toRefs, reactive } from 'vue';
export default {
  props: {},
  setup() {
    const state = reactive({
      value1: 40,
      value2: [20, 80],
      value3: 0,
      value4: 20,
      value5: 30,
      value6: 40,
      value7: 50,
      value8: 40,
      value9: 60,
      value10: 50
    });
    const onChange = (value: number) => console.log('当前值：' + value);
    return {
      ...toRefs(state),
      onChange
    };
  }
};
</script>

<style lang="scss">
.cell {
  padding: 40px 18px;
}
.custom-button {
  width: 26px;
  color: #fff;
  font-size: 10px;
  line-height: 18px;
  text-align: center;
  background-color: #ee0a24;
  border-radius: 100px;
}
</style>
