<template>
  <div class="demo-list">
    <h4>基础用法</h4>
    <div class="show-demo">
      <nut-checkbox v-model="checkbox1" label="复选框" @change="changeBox1"
        ><span>复选框</span></nut-checkbox
      >
      <span>{{ checkbox1 }}</span>
    </div>
    <div class="show-demo">
      <nut-checkbox
        v-model="checkbox2"
        text-position="left"
        @change="changeBox2"
        >复选框</nut-checkbox
      >
      <span>{{ checkbox2 }}</span>
    </div>
    <h4>禁用状态</h4>
    <div class="show-demo">
      <nut-checkbox v-model="checkbox3" disabled>未选时禁用状态</nut-checkbox>
      <nut-checkbox v-model="checkbox4" disabled>选中时禁用状态</nut-checkbox>
    </div>
    <h4>自定义尺寸</h4>
    <div class="show-demo">
      <nut-checkbox v-model="checkbox5" icon-size="25"
        >自定义尺寸25</nut-checkbox
      >
      <nut-checkbox v-model="checkbox6" icon-size="10"
        >自定义尺寸10</nut-checkbox
      >
    </div>
    <h4>自定义图标</h4>
    <div class="show-demo">
      <nut-checkbox
        v-model="checkbox7"
        icon-name="checklist"
        icon-active-name="checklist"
        >自定义图标</nut-checkbox
      >
    </div>
    <h4>点击触发change事件</h4>
    <div class="show-demo">
      <nut-checkbox v-model="checkbox8" @change="changeBox3"
        >change复选框</nut-checkbox
      >
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, ref, toRefs } from 'vue';
import { createComponent } from '@/utils/create';
import { Toast } from '@/nutui';
const { createDemo } = createComponent('checkbox');
export default createDemo({
  setup(props, context) {
    const data = reactive({
      checkbox1: true,
      checkbox2: false,
      checkbox3: false,
      checkbox4: true,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false,
      checkbox8: false
    });
    const changeBox1 = (state: boolean, label: string) => {
      console.log(state, label);
    };

    const changeBox2 = (state: boolean, label: string) => {
      console.log(state, label);
    };

    const changeBox3 = (state: boolean, label: string) => {
      Toast.text(`您${state ? '选中' : '取消'}了${label}`);
    };

    return {
      changeBox1,
      changeBox2,
      changeBox3,
      ...toRefs(data)
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
    p,
    span {
      display: block;
      font-size: 14px;
      color: #636363;
    }
    span {
      font-size: 12px;
    }
  }
}
</style>
