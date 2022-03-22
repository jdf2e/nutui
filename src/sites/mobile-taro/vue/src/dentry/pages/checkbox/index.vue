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
        <nut-button type="info" @click="toggleAll(false)">取消</nut-button>
      </nut-cell>
    </nut-cell-group>
  </div>
</template>
<script lang="ts">
import { reactive, ref, toRefs, onMounted } from 'vue';
export default {
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
      checkboxgroup1: ['2', '3'],
      checkboxgroup2: ['2'],
      checkboxgroup3: ['2'],
      checkboxsource: [
        { label: '1', value: '组合复选框' },
        { label: '2', value: '组合复选框' }
      ]
    });
    const changeBox1 = (state: boolean, label: string) => {
      console.log(state, label);
    };

    const changeBox2 = (state: boolean, label: string) => {
      console.log(state, label);
    };

    const changeBox3 = (state: boolean, label: string) => {
      console.log(`您${state ? '选中' : '取消'}了${label}`);
    };

    const changeBox4 = (label: any[]) => {
      console.log(`${label.length === data.checkboxsource.length ? '全选' : '取消全选'}`);
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
