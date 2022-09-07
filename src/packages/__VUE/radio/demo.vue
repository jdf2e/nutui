<template>
  <div class="demo full">
    <nut-cell-group :title="translate('basic')">
      <nut-cell>
        <nut-radiogroup v-model="radioVal">
          <nut-radio label="1">{{ translate('option1') }}</nut-radio>
          <nut-radio disabled label="2">{{ translate('option2') }}</nut-radio>
          <nut-radio label="3">{{ translate('option3') }}</nut-radio>
        </nut-radiogroup>
      </nut-cell>
      <nut-cell>
        <nut-radiogroup v-model="radioVal" text-position="left">
          <nut-radio label="1">{{ translate('option1') }}</nut-radio>
          <nut-radio disabled label="2">{{ translate('option2') }}</nut-radio>
          <nut-radio label="3">{{ translate('option3') }}</nut-radio>
        </nut-radiogroup>
      </nut-cell>
      <nut-cell>
        <nut-radiogroup v-model="radioVal">
          <nut-radio shape="button" label="1">{{ translate('option1') }}</nut-radio>
          <nut-radio disabled shape="button" label="2">{{ translate('option2') }}</nut-radio>
          <nut-radio shape="button" label="3">{{ translate('option3') }}</nut-radio>
        </nut-radiogroup>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group :title="translate('vertical')">
      <nut-cell>
        <nut-radiogroup v-model="radioVal" direction="horizontal">
          <nut-radio label="1">{{ translate('option1') }}</nut-radio>
          <nut-radio label="2">{{ translate('option2') }}</nut-radio>
          <nut-radio label="3">{{ translate('option3') }}</nut-radio>
        </nut-radiogroup>
      </nut-cell>
      <nut-cell>
        <nut-radiogroup v-model="radioVal" text-position="left" direction="horizontal">
          <nut-radio label="1">{{ translate('option1') }}</nut-radio>
          <nut-radio label="2">{{ translate('option2') }}</nut-radio>
          <nut-radio label="3">{{ translate('option3') }}</nut-radio>
        </nut-radiogroup>
      </nut-cell>
      <nut-cell>
        <nut-radiogroup v-model="radioVal" direction="horizontal">
          <nut-radio shape="button" label="1">{{ translate('option1') }}</nut-radio>
          <nut-radio shape="button" label="2">{{ translate('option2') }}</nut-radio>
          <nut-radio shape="button" label="3">{{ translate('option3') }}</nut-radio>
        </nut-radiogroup>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group :title="translate('size')">
      <nut-cell>
        <nut-radiogroup v-model="radioVal4">
          <nut-radio label="1" icon-size="12">{{ translate('size') }} 12</nut-radio>
          <nut-radio label="2" icon-size="12">{{ translate('size') }} 12</nut-radio>
        </nut-radiogroup>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group :title="translate('icon')">
      <nut-cell>
        <nut-radiogroup v-model="radioVal5">
          <nut-radio label="1" icon-name="checklist" icon-active-name="checklist">{{ translate('icon') }}</nut-radio>
          <nut-radio label="2" icon-name="checklist" icon-active-name="checklist">{{ translate('icon') }}</nut-radio>
        </nut-radiogroup>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group :title="translate('trigger')">
      <nut-cell>
        <nut-radiogroup v-model="radioVal6" @change="handleChange">
          <nut-radio label="1">{{ translate('trigger') }}</nut-radio>
          <nut-radio label="2">{{ translate('trigger') }}</nut-radio>
        </nut-radiogroup>
      </nut-cell>
      <nut-cell :title="translate('current')" :desc="radioVal6"></nut-cell>
    </nut-cell-group>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { reactive, toRefs } from 'vue';
const { createDemo, translate } = createComponent('radio');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      option1: '选项1',
      option2: '选项2',
      option3: '选项3',
      vertical: '水平使用',
      size: '自定义尺寸',
      icon: '自定义图标',
      trigger: '触发事件',
      current: '当前选中值'
    },
    'en-US': {
      basic: 'Basic Usage',
      option1: 'Option 1',
      option2: 'Option 2',
      option3: 'Option 3',
      vertical: 'Horizontal use',
      size: 'Custom size',
      icon: 'Custom icon',
      trigger: 'Trigger event',
      current: 'Currently selected value'
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    const data = reactive({
      radioVal: 1,
      radioVal2: 2,
      radioVal3: 1,
      radioVal4: 1,
      radioVal5: 1,
      radioVal6: '1'
    });
    const handleChange = (value: any) => {
      console.log(value);
    };
    return {
      ...toRefs(data),
      handleChange,
      translate
    };
  }
});
</script>

<style lang="scss" scoped></style>
