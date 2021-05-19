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
    <h4>checkboxGroup使用</h4>
    <div class="show-demo group1">
      <nut-checkboxgroup v-model="checkboxgroup1">
        <nut-checkbox v-model="checkbox9" label="1">组合复选框</nut-checkbox>
        <nut-checkbox v-model="checkbox10" label="2">组合复选框</nut-checkbox>
        <nut-checkbox v-model="checkbox11" label="3">组合复选框</nut-checkbox>
        <nut-checkbox v-model="checkbox12" label="4">组合复选框</nut-checkbox>
      </nut-checkboxgroup>
      <span>选中：{{ checkboxgroup1 }}</span>
    </div>
    <h4>checkboxGroup禁用</h4>
    <div class="show-demo group2">
      <nut-checkboxgroup v-model="checkboxgroup2" disabled>
        <nut-checkbox v-model="checkbox13" label="1">组合复选框</nut-checkbox>
        <nut-checkbox v-model="checkbox14" label="2">组合复选框</nut-checkbox>
      </nut-checkboxgroup>
    </div>
    <h4>checkboxGroup 全选/取消</h4>
    <div class="show-demo group1">
      <nut-checkboxgroup
        v-model="checkboxgroup3"
        ref="group"
        @change="changeBox4"
      >
        <nut-checkbox v-model="checkbox15" label="1">组合复选框</nut-checkbox>
        <nut-checkbox v-model="checkbox16" label="2">组合复选框</nut-checkbox>
      </nut-checkboxgroup>
      <span class="btn">
        <nut-button type="primary" @click="toggleAll(true)">全选</nut-button>
        <nut-button type="primary" @click="toggleAll(false)">取消</nut-button>
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, ref, toRefs, onMounted } from 'vue';
import { createComponent } from '@/utils/create';
import { Toast } from '@/nutui';
const { createDemo } = createComponent('checkbox');
export default createDemo({
  setup(props, context) {
    const group = ref(null);
    const data = reactive({
      checkbox1: true,
      checkbox2: false,
      checkbox3: false,
      checkbox4: true,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false,
      checkbox8: false,
      checkbox9: false,
      checkbox10: false,
      checkbox11: false,
      checkbox12: false,
      checkbox13: false,
      checkbox14: false,
      checkbox15: false,
      checkbox16: false,
      checkboxgroup1: ['2', '3'],
      checkboxgroup2: ['2'],
      checkboxgroup3: ['2']
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

    const changeBox4 = (label: any[]) => {
      Toast.text(`${label.length ? '全选' : '取消全选'}`);
    };

    const toggleAll = (f: boolean) => {
      (group.value as any).toggleAll(f);
    };

    return {
      changeBox1,
      changeBox2,
      changeBox3,
      changeBox4,
      toggleAll,
      group,
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
    &.group1 {
      flex-direction: column;
      ::v-deep(.nut-checkbox) {
        margin-left: 15px;
      }
    }
    &.group2 {
      ::v-deep(.nut-checkbox) {
        margin-left: 15px;
      }
    }
    p,
    span {
      display: block;
      font-size: 14px;
      color: #636363;
    }
    span {
      color: #1d1e1e;
      font-size: 16px;
      &.btn {
        margin-top: 20px;
        ::v-deep(.nut-button) {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
