<template>
  <div class="demo-list">
    <h4>基础用法</h4>
    <div class="show-demo">
      <nut-checkbox v-model="checkbox1" @change="changeBox1"
        >复选框</nut-checkbox
      >
      <span>{{ checkbox1 }}</span>
    </div>
    <h4>CheckboxGroup基本用法</h4>
    <div class="show-demo">
      <nut-checkboxgroup v-model="checkboxGroup1">
        <nut-checkbox label="选项一"></nut-checkbox>
        <nut-checkbox label="选项二"></nut-checkbox>
      </nut-checkboxgroup>
      <p>选择状态：{{ checkboxGroup1 }}</p>
    </div>
    <h4>禁用状态</h4>
    <div class="show-demo show-demo-block">
      <nut-checkbox v-model="checkbox2" disabled>未选时禁用状态</nut-checkbox>
      <nut-checkbox v-model="checkbox3" disabled>已选时禁用状态</nut-checkbox>
    </div>
    <h4>CheckboxGroup整体禁用</h4>
    <div class="show-demo">
      <nut-checkboxgroup v-model="checkboxGroup2" disabled>
        <nut-checkbox label="选项一"></nut-checkbox>
        <nut-checkbox label="选项二"></nut-checkbox>
      </nut-checkboxgroup>
      <p>选择状态：{{ checkboxGroup2 }}</p>
    </div>
    <h4>自定义尺寸</h4>
    <div class="show-demo show-demo-block">
      <nut-checkbox v-model="checkbox4" size="small">小号1</nut-checkbox>
      <nut-checkbox v-model="checkbox5" size="base">默认</nut-checkbox>
      <nut-checkbox v-model="checkbox6" size="large">大号</nut-checkbox>
      <p>size可选值：'small', 'base', 'large'</p>
    </div>
    <h4>CheckboxGroup整体尺寸</h4>
    <div class="show-demo">
      <nut-checkboxgroup v-model="checkboxGroup3" size="small">
        <nut-checkbox label="选项一"></nut-checkbox>
        <nut-checkbox label="选项二"></nut-checkbox>
      </nut-checkboxgroup>
    </div>
    <h4>禁用动效</h4>
    <div class="show-demo">
      <nut-checkbox v-model="checkbox7" :is-animation="false"
        >没有动效</nut-checkbox
      >
      <p>is-animation属性值为false时，禁用自带动效</p>
    </div>
    <h4>CheckboxGroup整体禁用动效</h4>
    <div class="show-demo">
      <nut-checkboxgroup v-model="checkboxGroup4" :is-animation="false">
        <nut-checkbox label="没有动效1"></nut-checkbox>
        <nut-checkbox label="没有动效2"></nut-checkbox>
      </nut-checkboxgroup>
    </div>
    <h4>事件</h4>
    <div class="show-demo">
      <div class="demo-box">
        <nut-checkbox
          v-model="checkbox9"
          :label="'change事件'"
          @change="checkboxChange"
          >备选项</nut-checkbox
        >
        <span>{{ result1 }}</span>
      </div>
    </div>
    <h4>CheckboxGroup整体事件</h4>
    <div class="show-demo">
      <div>
        <nut-checkboxgroup v-model="checkboxGroup5" @change="getChange">
          <nut-checkbox label="选项一"></nut-checkbox>
          <nut-checkbox label="选项二"></nut-checkbox>
        </nut-checkboxgroup>
      </div>
      <span>{{ result2 }}</span>
    </div>
    <h4>自定义Class</h4>
    <div class="show-demo">
      <nut-checkbox class="my-checkbox" v-model="checkbox12"
        >自定义Class:"my-checkbox"</nut-checkbox
      >
    </div>
    <h4>全选与反选</h4>
    <div class="show-demo">
      <div>
        <nut-checkboxgroup
          ref="checkboxGroupDemo"
          v-model="checkboxGroup6"
          @change="getChange2"
        >
          <nut-checkbox label="选项一"></nut-checkbox>
          <nut-checkbox label="选项二"></nut-checkbox>
          <nut-checkbox label="选项三"></nut-checkbox>
        </nut-checkboxgroup>
      </div>
      <div>
        <span>{{ result3 }}</span>
      </div>
      <nut-button size="small" type="primary" @click="chooseAll(true)"
        >全选</nut-button
      >
      <nut-button size="small" type="primary" @click="chooseAll()"
        >反选</nut-button
      >
      <nut-button size="small" type="primary" @click="chooseAll(false)"
        >取消</nut-button
      >
    </div>
    <h4>CheckboxGroup排列方向</h4>
    <div class="show-demo">
      <div>
        <nut-checkboxgroup
          v-model="checkboxGroup7"
          direction="vertical"
          @change="getChange3"
        >
          <nut-checkbox label="选项一"></nut-checkbox>
          <nut-checkbox label="选项二"></nut-checkbox>
          <nut-checkbox label="选项三"></nut-checkbox>
        </nut-checkboxgroup>
      </div>
      <span>{{ result4 }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, ref, toRefs } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('checkbox');
export default createDemo({
  setup(props, context) {
    const data = reactive({
      checkbox1: false,
      checkbox2: false,
      checkbox3: true,
      checkbox4: true,
      checkbox5: true,
      checkbox6: true,
      checkbox7: false,
      checkbox8: true,
      checkbox9: false,
      checkbox10: true,
      checkbox11: false,
      checkbox12: true,
      checkbox13: false,
      checkboxGroup1: ['选项一'],
      checkboxGroup2: ['选项一'],
      checkboxGroup3: [],
      checkboxGroup4: ['没有动效1'],
      checkboxGroup5: ['选项一'],
      checkboxGroup6: [],
      checkboxGroup7: []
    });
    const result = reactive({
      result1: 'false',
      result2: '选中状态选项：',
      result3: '选中状态选项：',
      result4: '选中状态选项：'
    });
    const changeBox1 = (state: boolean) => {
      data.checkbox1 = state;
    };
    const checkboxChange = (state: string, val: string) => {
      result.result1 = state;
    };
    const getChange = (val: string) => {
      result.result2 = '选中状态选项：' + val;
    };
    const getChange2 = (val: string) => {
      result.result3 = '选中状态选项：' + val;
    };
    const getChange3 = (val: string) => {
      result.result4 = '选中状态选项：' + val;
    };
    const checkboxGroupDemo = ref();
    const chooseAll = (val: boolean | string) => {
      (checkboxGroupDemo.value as any).toggleAll(val);
    };
    return {
      changeBox1,
      checkboxChange,
      checkboxGroupDemo,
      getChange,
      getChange2,
      getChange3,
      chooseAll,
      ...toRefs(data),
      ...toRefs(result)
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
    margin-top: 10px;
    padding: 15px;
    background-color: #ffffff;
    border-radius: 7px;
    box-shadow: 0px 1px 7px 0px rgba(237, 238, 241, 1);
    p,
    span {
      display: block;
      margin-top: 15px;
      font-size: 14px;
      color: #636363;
    }
    span {
      font-size: 12px;
    }
    .nut-button {
      margin: 10px 10px 0 0;
    }
  }
  .show-demo-block {
    view {
      display: block;
      margin-bottom: 10px;
    }
  }
  .my-checkbox::v-deep .nut-checkbox {
    input:checked {
      background-image: url('https://img13.360buyimg.com/imagetools/jfs/t1/154120/1/10623/372/5fe013e6E4694fbf9/fd38d389b3a3b9c6.png');
      background-size: 100%;
      border: none;
    }
  }
}
</style>
