<template>
  <div class="demo">
    <nut-cell-group :title="translate('basic')">
      <nut-cell>
        <nut-checkbox v-model="checkbox1" :label="translate('checkbox')" @change="changeBox1">{{
          translate('checkbox')
        }}</nut-checkbox>
      </nut-cell>
      <nut-cell>
        <nut-checkbox v-model="checkbox1" text-position="left" @change="changeBox1">{{
          translate('checkbox')
        }}</nut-checkbox>
      </nut-cell>
      <nut-cell>
        <div class="demo-check">{{ translate('selected') }}</div>
        <div>{{ checkbox1 }}</div>
      </nut-cell>
    </nut-cell-group>

    <nut-cell-group :title="translate('disable')">
      <nut-cell>
        <nut-checkbox v-model="checkbox3" disabled>{{ translate('unselectDisable') }}</nut-checkbox>
      </nut-cell>
      <nut-cell>
        <nut-checkbox v-model="checkbox4" disabled>{{ translate('selectedDisable') }}</nut-checkbox>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group :title="translate('size')">
      <nut-cell>
        <nut-checkbox v-model="checkbox5" icon-size="25">{{ translate('size') }}25</nut-checkbox>
      </nut-cell>
      <nut-cell>
        <nut-checkbox v-model="checkbox6" icon-size="10">{{ translate('size') }} 10</nut-checkbox>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group :title="translate('icon')">
      <nut-cell>
        <nut-checkbox v-model="checkbox7" icon-name="checklist" icon-active-name="checklist">{{
          translate('icon')
        }}</nut-checkbox>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group :title="translate('change')">
      <nut-cell>
        <nut-checkbox v-model="checkbox8" @change="changeBox3">change {{ translate('checkbox') }}</nut-checkbox>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group :title="translate('useGroup')">
      <nut-cell>
        <nut-checkboxgroup v-model="checkboxgroup1">
          <nut-checkbox label="1" style="margin: 2px 20px 0 0">{{ translate('combine') }}</nut-checkbox>
          <nut-checkbox label="2">{{ translate('combine') }}</nut-checkbox>
          <nut-checkbox label="3" style="margin: 2px 20px 0 0">{{ translate('combine') }}</nut-checkbox>
          <nut-checkbox label="4">{{ translate('combine') }}</nut-checkbox>
        </nut-checkboxgroup>
      </nut-cell>
      <nut-cell>
        <div class="demo-check">{{ translate('selected') }}</div>
        <div>{{ checkboxgroup1 }}</div>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group :title="translate('disableGroup')">
      <nut-cell>
        <nut-checkboxgroup v-model="checkboxgroup1" disabled>
          <nut-checkbox label="1" style="margin: 2px 20px 0 0">{{ translate('combine') }}</nut-checkbox>
          <nut-checkbox label="2">{{ translate('combine') }}</nut-checkbox>
          <nut-checkbox label="3" style="margin: 2px 20px 0 0">{{ translate('combine') }}</nut-checkbox>
          <nut-checkbox label="4">{{ translate('combine') }}</nut-checkbox>
        </nut-checkboxgroup>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group :title="translate('selectGroup')">
      <nut-cell>
        <nut-checkboxgroup v-model="checkboxgroup3" ref="group" @change="changeBox4">
          <nut-checkbox v-for="item in checkboxsource" :key="item.label" :label="item.label">{{
            item.value
          }}</nut-checkbox>
        </nut-checkboxgroup>
      </nut-cell>
      <nut-cell>
        <nut-button type="primary" @click="toggleAll(true)" style="margin: 0 20px 0 0">{{
          translate('selectAll')
        }}</nut-button>
        <nut-button type="info" @click="toggleAll(false)">{{ translate('cancel') }}</nut-button>
      </nut-cell>
    </nut-cell-group>
  </div>
</template>
<script lang="ts">
import { reactive, ref, toRefs, onMounted } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { Toast } from '@/packages/nutui.vue';
const { createDemo, translate } = createComponent('checkbox');
import { useTranslate } from '@/sites/assets/util/useTranslate';
useTranslate({
  'zh-CN': {
    basic: '基本用法-左右',
    disable: '禁用状态',
    size: '自定义尺寸',
    icon: '自定义图标',
    change: '点击触发change事件',
    useGroup: 'checkboxGroup使用',
    disableGroup: 'checkboxGroup禁用',
    selectGroup: 'checkboxGroup 全选/取消',
    selectAll: '全选',
    cancel: '取消',
    combine: '组合复选框',
    selected: '当前选中值',
    select: '选中',
    checkbox: '复选框',
    selectedDisable: '选中时禁用状态',
    unselectDisable: '未选时禁用状态'
  },
  'en-US': {
    basic: 'Basic usage - left and right',
    disable: 'Disabled state',
    size: 'Custom size',
    icon: 'Custom icon',
    change: 'Click to trigger the change event',
    useGroup: 'use checkboxGroup',
    disableGroup: 'disable checkboxGroup',
    selectGroup: 'Checkboxgroup select all / cancel',
    selectAll: 'selectAll',
    cancel: 'cancel',
    combine: 'Combined check box',
    selected: 'Currently selected value',
    select: 'selected value',
    checkbox: 'check box',
    selectedDisable: 'Disabled when selected',
    unselectDisable: 'Disabled when not selected'
  }
});
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
      checkboxgroup1: ['2', '3'],
      checkboxgroup2: ['2'],
      checkboxgroup3: ['2'],
      checkboxsource: [
        { label: '1', value: translate('combine') },
        { label: '2', value: translate('combine') }
      ]
    });
    const changeBox1 = (state: boolean, label: string) => {
      console.log(state, label);
    };

    const changeBox2 = (state: boolean, label: string) => {
      console.log(state, label);
    };

    const changeBox3 = (state: boolean, label: string) => {
      Toast.text(`${state ? translate('select') : translate('cancel')} ${label}`);
    };

    const changeBox4 = (label: any[]) => {
      Toast.text(`${label.length === data.checkboxsource.length ? translate('selectAll') : translate('cancel')}`);
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
      translate,
      ...toRefs(data)
    };
  }
});
</script>
<style lang="scss" scoped>
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
