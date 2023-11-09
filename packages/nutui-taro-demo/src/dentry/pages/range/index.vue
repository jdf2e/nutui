<template>
  <div class="demo range-demo" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <h2>基础用法</h2>
    <nut-cell class="cell">
      <nut-range v-model="state.value1" @change="onChange"></nut-range>
    </nut-cell>
    <h2>双滑块</h2>
    <nut-cell class="cell">
      <nut-range v-model="state.value2" range @change="onChange"></nut-range>
    </nut-cell>
    <h2>指定范围</h2>
    <nut-cell class="cell">
      <nut-range v-model="state.value3" :max="10" :min="-10" @change="onChange"></nut-range>
    </nut-cell>
    <h2>设置步长</h2>
    <nut-cell class="cell">
      <nut-range v-model="state.value4" :step="5" @change="onChange"></nut-range>
    </nut-cell>
    <h2>隐藏范围</h2>
    <nut-cell class="cell">
      <nut-range v-model="state.value5" hidden-range @change="onChange"></nut-range>
    </nut-cell>
    <h2>隐藏标签</h2>
    <nut-cell class="cell">
      <nut-range v-model="state.value6" hidden-tag @change="onChange"></nut-range>
    </nut-cell>
    <h2>禁用</h2>
    <nut-cell class="cell">
      <nut-range v-model="state.value7" disabled></nut-range>
    </nut-cell>
    <h2>自定义样式</h2>
    <nut-cell class="cell">
      <nut-range
        v-model="state.value8"
        inactive-color="rgba(163,184,255,1)"
        button-color="rgba(52,96,250,1)"
        active-color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
        @change="onChange"
      ></nut-range>
    </nut-cell>
    <h2>自定义按钮</h2>
    <nut-cell class="cell">
      <nut-range v-model="state.value9" @change="onChange">
        <template #button>
          <div class="custom-button">{{ state.value9 }}</div>
        </template>
      </nut-range>
    </nut-cell>
    <h2>垂直方向</h2>
    <nut-cell class="vertical_div">
      <view class="div">
        <nut-range v-model="state.value10" :vertical="true" @change="onChange"></nut-range>
      </view>
      <view class="div">
        <nut-range v-model="state.value11" range :vertical="true" @change="onChange"></nut-range>
      </view>
    </nut-cell>
    <h2>刻度标记</h2>
    <nut-cell class="cell">
      <nut-range v-model="state.value12" :marks="state.marks" :hidden-range="true" @change="onChange"></nut-range>
    </nut-cell>
    <nut-cell class="cell">
      <nut-range v-model="state.value13" range :marks="state.marks" :hidden-range="true" @change="onChange"></nut-range>
    </nut-cell>

    <nut-cell class="vertical_div">
      <view class="div">
        <nut-range
          v-model="state.value14"
          :vertical="true"
          :marks="state.marks"
          :hidden-range="true"
          @change="onChange"
        ></nut-range>
      </view>
      <view class="div">
        <nut-range
          v-model="state.value15"
          range
          :vertical="true"
          :marks="state.marks"
          :hidden-range="true"
          @change="onChange"
        ></nut-range>
      </view>
    </nut-cell>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';
const env = Taro.getEnv();

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
  value10: 20,
  value11: [20, 80],
  value12: 60,
  value13: [20, 80],
  value14: 60,
  value15: [20, 80],
  marks: {
    0: 0,
    20: 20,
    40: 40,
    60: 60,
    80: 80,
    100: 100
  }
});
const onChange = (value: number) => console.log('当前值：' + value);
</script>

<style lang="scss">
.range-demo {
  .cell {
    padding: 40px 18px;
  }
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
.vertical_div {
  height: 180px;
  padding: 10px;
  .div {
    width: 150px;
  }
}
</style>
