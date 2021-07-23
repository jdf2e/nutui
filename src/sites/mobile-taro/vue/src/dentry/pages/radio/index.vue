<template>
  <div class="demo demo-nut-radio">
    <nut-cell-group title="基本用法-左右侧">
      <nut-cell>
        <nut-radiogroup v-model="radioVal" @change="handleChange1">
          <nut-radio :label="1">单选框1</nut-radio>
          <nut-radio :label="2">单选框2</nut-radio>
        </nut-radiogroup>
      </nut-cell>
      <nut-cell>
        <nut-radiogroup
          v-model="radioVal"
          text-position="left"
          @change="handleChange1"
        >
          <nut-radio :label="1">单选框1</nut-radio>
          <nut-radio :label="2">单选框2</nut-radio>
        </nut-radiogroup>
      </nut-cell>
      <nut-cell>
        <div class="demo-check">当前选中值</div>
        <div>{{ radioVal }}</div>
      </nut-cell>
    </nut-cell-group>

    <nut-cell-group title="单选框禁用">
      <nut-cell>
        <nut-radiogroup v-model="radioVal3">
          <nut-radio :label="1" disabled>禁用单选框</nut-radio>
          <nut-radio :label="2" disabled>禁用单选框</nut-radio>
        </nut-radiogroup>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group title="自定义尺寸">
      <nut-cell>
        <nut-radiogroup v-model="radioVal4">
          <nut-radio :label="1" icon-size="12">自定义尺寸12</nut-radio>
          <nut-radio :label="2" icon-size="12">自定义尺寸12</nut-radio>
        </nut-radiogroup>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group title="Radio自定义图标">
      <nut-cell>
        <nut-radiogroup v-model="radioVal5">
          <nut-radio
            :label="1"
            icon-name="checklist"
            icon-active-name="checklist"
            >自定义图标</nut-radio
          >
          <nut-radio
            :label="2"
            icon-name="checklist"
            icon-active-name="checklist"
            >自定义图标</nut-radio
          >
        </nut-radiogroup>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group title="触发事件">
      <nut-cell>
        <nut-radiogroup v-model="radioVal6" @change="handleChange3">
          <nut-radio :label="1">触发事件</nut-radio>
          <nut-radio :label="2">触发事件</nut-radio>
        </nut-radiogroup>
      </nut-cell>
      <nut-cell>
        <div class="demo-check">当前选中值</div>
        <div>{{ radioVal6 }}</div>
      </nut-cell>
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
    const handleChange1 = (value: any) => {
      console.log(value);
    };
    const handleChange2 = (value: any) => {
      console.log(value);
    };
    const handleChange3 = (value: any) => {
      console.log(`您选中了${value}`);
    };
    return {
      ...toRefs(data),
      handleChange1,
      handleChange2,
      handleChange3
    };
  }
};
</script>

<style lang="scss">
.demo-check {
  margin-right: 10px;
}
.demo-nut-radio {
  .nut-radio {
    margin-bottom: 8px;
  }
}
</style>
