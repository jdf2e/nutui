<template>
  <div class="demo-list">
    <h4>Radio基本用法</h4>
    <div class="show-demo">
      <nut-radiogroup v-model="radioVal" @change="handleChange1">
        <nut-radio :label="1">单选框1</nut-radio>
        <nut-radio :label="2">单选框2</nut-radio>
      </nut-radiogroup>
      <span>{{ radioVal }}</span>
    </div>
    <div class="show-demo">
      <nut-radiogroup
        v-model="radioVal2"
        @change="handleChange2"
        text-position="left"
      >
        <nut-radio :label="1">单选框文本在左侧</nut-radio>
        <nut-radio :label="2">单选框文本在左侧</nut-radio>
      </nut-radiogroup>
      <span>{{ radioVal2 }}</span>
    </div>
    <h4>Radio单选框禁用</h4>
    <div class="show-demo">
      <nut-radiogroup v-model="radioVal3">
        <nut-radio :label="1" disabled>禁用单选框</nut-radio>
        <nut-radio :label="2" disabled>禁用单选框</nut-radio>
      </nut-radiogroup>
    </div>
    <h4>Radio自定义尺寸</h4>
    <div class="show-demo">
      <nut-radiogroup v-model="radioVal4">
        <nut-radio :label="1" icon-size="12">自定义尺寸12</nut-radio>
        <nut-radio :label="2" icon-size="12">自定义尺寸12</nut-radio>
      </nut-radiogroup>
    </div>
    <h4>Radio自定义图标</h4>
    <div class="show-demo">
      <nut-radiogroup v-model="radioVal5">
        <nut-radio :label="1" icon-name="checklist" icon-active-name="checklist"
          >自定义图标</nut-radio
        >
        <nut-radio :label="2" icon-name="checklist" icon-active-name="checklist"
          >自定义图标</nut-radio
        >
      </nut-radiogroup>
    </div>
    <h4>Radio触发change事件</h4>
    <div class="show-demo">
      <nut-radiogroup v-model="radioVal6" @change="handleChange3">
        <nut-radio :label="1">触发事件</nut-radio>
        <nut-radio :label="2">触发事件</nut-radio>
      </nut-radiogroup>
      <span>{{ radioVal6 }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { reactive, toRefs } from 'vue';
import { Toast } from '@/packages/nutui.vue';
const { createDemo } = createComponent('radio');
export default createDemo({
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
      Toast.text(`您选中了${value}`);
    };
    return {
      ...toRefs(data),
      handleChange1,
      handleChange2,
      handleChange3
    };
  }
});
</script>

<style lang="scss" scoped>
.demo-list {
  margin: 57px 0 60px 0;
  padding: 0 17px 17px;
  h4 {
    margin: 25px 0 10px;
    line-height: 20px;
    color: #909ca4;
    font-size: 14px;
  }
  .show-demo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    padding: 15px;
    background-color: #ffffff;
    border-radius: 7px;
    box-shadow: 0px 1px 7px 0px rgba(237, 238, 241, 1);
    ::v-deep(.nut-radio) {
      height: 25px;
      line-height: 25px;
    }
  }
}
</style>
