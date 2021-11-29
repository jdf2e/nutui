<template>
  <div class="demo full">
    <nut-cell-group title="基本用法">
      <nut-cell>
        <nut-radiogroup v-model="radioVal">
          <nut-radio label="1">选项1</nut-radio>
          <nut-radio disabled label="2">选项2</nut-radio>
          <nut-radio label="3">选项3</nut-radio>
        </nut-radiogroup>
      </nut-cell>
      <nut-cell>
        <nut-radiogroup v-model="radioVal" text-position="left">
          <nut-radio label="1">选项1</nut-radio>
          <nut-radio disabled label="2">选项2</nut-radio>
          <nut-radio label="3">选项3</nut-radio>
        </nut-radiogroup>
      </nut-cell>
      <nut-cell>
        <nut-radiogroup v-model="radioVal">
          <nut-radio shape="button" label="1">选项1</nut-radio>
          <nut-radio disabled shape="button" label="2">选项2</nut-radio>
          <nut-radio shape="button" label="3">选项3</nut-radio>
        </nut-radiogroup>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group title="水平使用">
      <nut-cell>
        <nut-radiogroup v-model="radioVal" direction="horizontal">
          <nut-radio label="1">选项1</nut-radio>
          <nut-radio label="2">选项2</nut-radio>
          <nut-radio label="3">选项3</nut-radio>
        </nut-radiogroup>
      </nut-cell>
      <nut-cell>
        <nut-radiogroup v-model="radioVal" text-position="left" direction="horizontal">
          <nut-radio label="1">选项1</nut-radio>
          <nut-radio label="2">选项2</nut-radio>
          <nut-radio label="3">选项3</nut-radio>
        </nut-radiogroup>
      </nut-cell>
      <nut-cell>
        <nut-radiogroup v-model="radioVal" direction="horizontal">
          <nut-radio shape="button" label="1">选项1</nut-radio>
          <nut-radio shape="button" label="2">选项2</nut-radio>
          <nut-radio shape="button" label="3">选项3</nut-radio>
        </nut-radiogroup>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group title="自定义尺寸">
      <nut-cell>
        <nut-radiogroup v-model="radioVal4">
          <nut-radio label="1" icon-size="12">自定义尺寸12</nut-radio>
          <nut-radio label="2" icon-size="12">自定义尺寸12</nut-radio>
        </nut-radiogroup>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group title="Radio自定义图标">
      <nut-cell>
        <nut-radiogroup v-model="radioVal5">
          <nut-radio label="1" icon-name="checklist" icon-active-name="checklist">自定义图标</nut-radio>
          <nut-radio label="2" icon-name="checklist" icon-active-name="checklist">自定义图标</nut-radio>
        </nut-radiogroup>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group title="触发事件">
      <nut-cell>
        <nut-radiogroup v-model="radioVal6" @change="handleChange">
          <nut-radio label="1">触发事件</nut-radio>
          <nut-radio label="2">触发事件</nut-radio>
        </nut-radiogroup>
      </nut-cell>
      <nut-cell title="当前选中值" :desc="radioVal6"></nut-cell>
    </nut-cell-group>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
export default {
  props: {},
  setup() {
    const data = reactive({
      radioVal: 1,
      radioVal2: 2,
      radioVal3: 1,
      radioVal4: 1,
      radioVal5: 1,
      radioVal6: 1
    });
    const handleChange = (value: any) => {
      console.log(value);
    };
    return {
      ...toRefs(data),
      handleChange
    };
  }
};
</script>

<style lang="scss" scoped></style>
