<template>
  <div class="demo full" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <nut-cell-group title="基础用法">
      <nut-cell>
        <nut-radio-group v-model="radioVal">
          <nut-radio label="1">选项1</nut-radio>
          <nut-radio disabled label="2">选项2</nut-radio>
          <nut-radio label="3">选项3</nut-radio>
        </nut-radio-group>
      </nut-cell>
      <nut-cell>
        <nut-radio-group v-model="radioVal" text-position="left">
          <nut-radio label="1">选项1</nut-radio>
          <nut-radio disabled label="2">选项2</nut-radio>
          <nut-radio label="3">选项3</nut-radio>
        </nut-radio-group>
      </nut-cell>
      <nut-cell>
        <nut-radio-group v-model="radioVal">
          <nut-radio shape="button" label="1">选项1</nut-radio>
          <nut-radio disabled shape="button" label="2">选项2</nut-radio>
          <nut-radio shape="button" label="3">选项3</nut-radio>
        </nut-radio-group>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group title="水平使用">
      <nut-cell>
        <nut-radio-group v-model="radioVal" direction="horizontal">
          <nut-radio label="1">选项1</nut-radio>
          <nut-radio label="2">选项2</nut-radio>
          <nut-radio label="3">选项3</nut-radio>
        </nut-radio-group>
      </nut-cell>
      <nut-cell>
        <nut-radio-group v-model="radioVal" text-position="left" direction="horizontal">
          <nut-radio label="1">选项1</nut-radio>
          <nut-radio label="2">选项2</nut-radio>
          <nut-radio label="3">选项3</nut-radio>
        </nut-radio-group>
      </nut-cell>
      <nut-cell>
        <nut-radio-group v-model="radioVal" direction="horizontal">
          <nut-radio shape="button" label="1">选项1</nut-radio>
          <nut-radio shape="button" label="2">选项2</nut-radio>
          <nut-radio shape="button" label="3">选项3</nut-radio>
        </nut-radio-group>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group title="自定义尺寸">
      <nut-cell>
        <nut-radio-group v-model="radioVal4">
          <nut-radio label="1" icon-size="12">自定义尺寸12</nut-radio>
          <nut-radio label="2" icon-size="12">自定义尺寸12</nut-radio>
        </nut-radio-group>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group title="自定义图标">
      <nut-cell>
        <nut-radio-group v-model="radioVal5">
          <nut-radio label="1">
            自定义图标
            <template #icon> <Checklist /> </template>
            <template #checkedIcon> <Checklist color="red" /> </template>
          </nut-radio>
          <nut-radio label="2">
            自定义图标
            <template #icon> <Checklist /> </template>
            <template #checkedIcon> <Checklist color="red" /> </template>
          </nut-radio>
        </nut-radio-group>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group title="触发事件">
      <nut-cell>
        <nut-radio-group v-model="radioVal6" @change="handleChange">
          <nut-radio label="1">触发事件</nut-radio>
          <nut-radio label="2">触发事件</nut-radio>
        </nut-radio-group>
      </nut-cell>
      <nut-cell title="当前选中值" :desc="radioVal6"></nut-cell>
    </nut-cell-group>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import { Checklist } from '@nutui/icons-vue-taro';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';
export default {
  props: {},
  components: {
    Checklist,
    Header
  },
  setup() {
    const env = Taro.getEnv();

    const data = reactive({
      radioVal: '1',
      radioVal2: '2',
      radioVal3: '1',
      radioVal4: '1',
      radioVal5: '1',
      radioVal6: '1'
    });
    const handleChange = (value: any) => {
      console.log(value);
    };
    return {
      ...toRefs(data),
      handleChange,
      env
    };
  }
};
</script>

<style lang="scss" scoped></style>
