<template>
  <div class="demo-list">
    <h4>基础用法</h4>
    <div class="show-demo">
      <nut-checkbox v-model="checkbox1" @change="changeBox1"
        >复选框</nut-checkbox
      >
      <span>{{ checkbox1 }}</span>
    </div>
    <h4>禁用状态</h4>
    <div class="show-demo show-demo-block">
      <nut-checkbox v-model="checkbox2" disabled>未选时禁用状态</nut-checkbox>
      <nut-checkbox v-model="checkbox3" disabled>已选时禁用状态</nut-checkbox>
    </div>
    <h4>自定义尺寸</h4>
    <div class="show-demo show-demo-block">
      <nut-checkbox v-model="checkbox4" size="small">小号1</nut-checkbox>
      <nut-checkbox v-model="checkbox5" size="base">默认</nut-checkbox>
      <nut-checkbox v-model="checkbox6" size="large">大号</nut-checkbox>
      <p>size可选值：'small', 'base', 'large'</p>
    </div>
    <h4>禁用动效</h4>
    <div class="show-demo">
      <nut-checkbox v-model="checkbox7" :animation="false"
        >没有动效</nut-checkbox
      >
      <p>animation属性值为false时，禁用自带动效</p>
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
        <p>值发生变化时，将触发change事件</p>
      </div>
    </div>
    <div class="show-demo">
      <div class="demo-box">
        <nut-checkbox
          v-model="checkbox10"
          :label="'选项值1'"
          @change="getChange"
          >change事件</nut-checkbox
        >
        <span>{{ result2 }}</span>
      </div>
      <div class="demo-box">
        <nut-checkbox
          v-model="checkbox11"
          :label="'选项值2'"
          @change="getChange2"
          >change事件</nut-checkbox
        >
        <span>{{ result3 }}</span>
      </div>
      <p>设置label时，可获取选项label值</p>
    </div>
    <h4>自定义Class</h4>
    <div class="show-demo">
      <nut-checkbox class="my-checkbox" v-model="checkbox12"
        >自定义Class:"my-checkbox"</nut-checkbox
      >
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
      checkbox2: true,
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
      checkbox13: false
    });
    const result = reactive({
      result1: '',
      result2: '',
      result3: ''
    });
    const changeBox1 = (state: boolean) => {
      data.checkbox1 = state;
    };
    const checkboxChange = (state: string, val: string) => {
      result.result1 = state;
    };
    const getChange = (state: boolean, val: string) => {
      result.result2 = '选中状态：' + state + '，选项：' + val;
    };
    const getChange2 = (state: boolean, val: string) => {
      result.result3 = '选中状态：' + state + '，选项：' + val;
    };
    return {
      changeBox1,
      checkboxChange,
      getChange,
      getChange2,
      ...toRefs(data),
      ...toRefs(result)
    };
  }
});
</script>

<style>
#app {
  background: #f7f8fa;
}
</style>
<style lang="scss" scoped>
.demo-list {
  margin: 60px 0;
  padding: 17px;
  h4 {
    margin-top: 10px;
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
      margin-top: 10px;
      font-size: 14px;
      color: #636363;
    }
    span {
      font-size: 12px;
    }
  }
  .show-demo-block {
    view {
      display: block;
      margin-bottom: 10px;
    }
  }
  .my-checkbox .nut-checkbox {
    input:checked {
      width: 14px;
      height: 10px;
      background: rgba(255, 255, 255, 1)
        linear-gradient(
          90deg,
          rgba(250, 32, 12, 1) 0%,
          rgba(250, 32, 12, 0.65) 100%
        )
        rgba(250, 32, 12, 1);
      background-image: none;
      background-size: 50% 50%;
      border: none;
    }
  }
}
</style>
