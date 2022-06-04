<template>
  <div class="demo">
    <nut-cell-group title="基本用法-左右">
      <nut-cell>
        <nut-checkbox v-model="checkbox1" label="复选框" @change="changeBox1">复选框</nut-checkbox>
      </nut-cell>
      <nut-cell>
        <nut-checkbox v-model="checkbox1" text-position="left" @change="changeBox1">复选框</nut-checkbox>
      </nut-cell>
      <nut-cell>
        <div class="demo-check">当前选中值</div>
        <div>{{ checkbox1 }}</div>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group title="半选状态">
      <nut-cell>
        <nut-checkbox v-model="checkbox9" :indeterminate="true" label="复选框">复选框</nut-checkbox>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group title="禁用状态">
      <nut-cell>
        <nut-checkbox v-model="checkbox3" disabled>未选时禁用状态</nut-checkbox>
      </nut-cell>
      <nut-cell>
        <nut-checkbox v-model="checkbox4" disabled>选中时禁用状态</nut-checkbox>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group title="自定义尺寸">
      <nut-cell>
        <nut-checkbox v-model="checkbox5" icon-size="25">自定义尺寸25</nut-checkbox>
      </nut-cell>
      <nut-cell>
        <nut-checkbox v-model="checkbox6" icon-size="10">自定义尺寸10</nut-checkbox>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group title="自定义图标">
      <nut-cell>
        <nut-checkbox v-model="checkbox7" icon-name="checklist" icon-active-name="checklist">自定义图标</nut-checkbox>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group title="点击触发change事件">
      <nut-cell>
        <nut-checkbox v-model="checkbox8" @change="changeBox3">change复选框</nut-checkbox>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group title="checkboxGroup使用">
      <nut-cell>
        <nut-checkboxgroup v-model="checkboxgroup1">
          <nut-checkbox label="1">组合复选框</nut-checkbox>
          <nut-checkbox label="2">组合复选框</nut-checkbox>
          <nut-checkbox label="3">组合复选框</nut-checkbox>
          <nut-checkbox label="4">组合复选框</nut-checkbox>
        </nut-checkboxgroup>
      </nut-cell>
      <nut-cell>
        <div class="demo-check">当前选中值</div>
        <div>{{ checkboxgroup1 }}</div>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group title="checkboxGroup禁用">
      <nut-cell>
        <nut-checkboxgroup v-model="checkboxgroup1" disabled>
          <nut-checkbox label="1">组合复选框</nut-checkbox>
          <nut-checkbox label="2">组合复选框</nut-checkbox>
          <nut-checkbox label="3">组合复选框</nut-checkbox>
          <nut-checkbox label="4">组合复选框</nut-checkbox>
        </nut-checkboxgroup>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group title="checkboxGroup 全选/取消">
      <nut-cell>
        <nut-checkboxgroup v-model="checkboxgroup3" ref="group" @change="changeBox4">
          <nut-checkbox :key="item.label" v-for="item in checkboxsource" :label="item.label">{{
            item.value
          }}</nut-checkbox>
        </nut-checkboxgroup>
      </nut-cell>
      <nut-cell>
        <nut-button type="primary" @click="toggleAll(true)" style="margin: 0 10px 0 0">全选</nut-button>
        <nut-button type="info" @click="toggleAll(false)" style="margin: 0 10px 0 0">取消</nut-button>
        <nut-button type="warning" @click="toggleReverse()">反选</nut-button>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group title="checkboxGroup使用，限制最大可选数（2个）">
      <nut-cell>
        <nut-checkboxgroup v-model="checkboxgroup4" :max="2">
          <nut-checkbox label="1" style="margin: 2px 20px 0 0">组合复选框</nut-checkbox>
          <nut-checkbox label="2">组合复选框</nut-checkbox>
          <nut-checkbox label="3" style="margin: 2px 20px 0 0">组合复选框</nut-checkbox>
          <nut-checkbox label="4">组合复选框</nut-checkbox>
        </nut-checkboxgroup>
      </nut-cell>
      <nut-cell>
        <div class="demo-check">当前选中值</div>
        <div>{{ checkboxgroup4 }}</div>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group title="全选/半选/取消">
      <nut-cell>
        <nut-checkbox :indeterminate="indeterminate" v-model="checkbox10" @change="changeBox5">全选</nut-checkbox>
      </nut-cell>
      <nut-checkboxgroup v-model="checkboxgroup5" ref="group2" @change="changeBox6">
        <nut-cell><nut-checkbox label="1" style="margin: 2px 20px 0 0">组合复选框</nut-checkbox></nut-cell>
        <nut-cell><nut-checkbox label="2">组合复选框</nut-checkbox></nut-cell>
        <nut-cell><nut-checkbox label="3">组合复选框</nut-checkbox></nut-cell>
        <nut-cell><nut-checkbox label="4">组合复选框</nut-checkbox></nut-cell>
      </nut-checkboxgroup>
    </nut-cell-group>
  </div>
</template>
<script lang="ts">
import { reactive, ref, toRefs, Ref } from 'vue';
export default {
  setup(props, context) {
    const group = ref(null) as Ref;
    const group2 = ref(null) as Ref;
    const data = reactive({
      checkbox1: true,
      checkbox2: false,
      checkbox3: false,
      checkbox4: true,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false,
      checkbox8: false,
      checkbox9: true,
      checkbox10: false,
      checkboxgroup1: ['2', '3'],
      checkboxgroup2: ['2'],
      checkboxgroup3: ['2'],
      checkboxgroup4: ['2'],
      checkboxgroup5: [],
      checkboxsource: [
        { label: '1', value: '组合复选框' },
        { label: '2', value: '组合复选框' },
        { label: '3', value: '组合复选框' },
        { label: '4', value: '组合复选框' },
        { label: '5', value: '组合复选框' },
        { label: '6', value: '组合复选框' }
      ],
      indeterminate: true
    });
    const changeBox1 = (state: boolean, label: string) => {
      console.log(state, label);
    };

    const changeBox2 = (state: boolean, label: string) => {
      console.log(state, label);
    };

    const changeBox3 = (state: boolean, label: string) => {
      console.log(`${state ? '选中' : '取消'} ${label}`);
    };

    const changeBox4 = (label: any[]) => {
      console.log(label);
    };

    const changeBox5 = (value: boolean) => {
      group2.value.toggleAll(value);
    };

    const changeBox6 = (label: string[]) => {
      if (label.length === 4) {
        data.indeterminate = false;
        data.checkbox10 = true;
      } else if (label.length && label.length < 4) {
        data.indeterminate = true;
        data.checkbox10 = true;
      } else {
        data.checkbox10 = false;
      }
    };

    const toggleAll = (f: boolean) => {
      console.log(`${f ? '全选' : '取消'}`);
      group.value.toggleAll(f);
    };

    const toggleReverse = () => {
      console.log(`反选`);
      group.value.toggleReverse();
    };

    return {
      changeBox1,
      changeBox2,
      changeBox3,
      changeBox4,
      changeBox5,
      changeBox6,
      toggleAll,
      toggleReverse,
      group,
      group2,
      ...toRefs(data)
    };
  }
};
</script>
<style lang="scss">
.demo-check {
  margin-right: 10px;
}
.nut-checkboxgroup {
  display: flex;
  flex-wrap: wrap;
}
.nut-checkbox {
  display: flex;
  margin-right: 20px;
  .nut-checkbox__label {
    margin-left: 10px;
  }
}
</style>
