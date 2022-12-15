<template>
  <div class="demo">
    <h2>{{ translate('title') }}</h2>
    <nut-cell class="cell">
      <nut-range v-model="value1" @change="onChange"></nut-range>
    </nut-cell>
    <h2>{{ translate('title1') }}</h2>
    <nut-cell class="cell">
      <nut-range range v-model="value2" @change="onChange"></nut-range>
    </nut-cell>
    <h2>{{ translate('title2') }}</h2>
    <nut-cell class="cell">
      <nut-range v-model="value3" :max="10" :min="-10" @change="onChange"></nut-range>
    </nut-cell>
    <h2>{{ translate('title3') }}</h2>
    <nut-cell class="cell">
      <nut-range v-model="value4" :step="5" @change="onChange"></nut-range>
    </nut-cell>
    <h2>{{ translate('title4') }}</h2>
    <nut-cell class="cell">
      <nut-range hidden-range v-model="value5" @change="onChange"></nut-range>
    </nut-cell>
    <h2>{{ translate('title5') }}</h2>
    <nut-cell class="cell">
      <nut-range hidden-tag v-model="value6" @change="onChange"></nut-range>
    </nut-cell>
    <h2>{{ translate('title6') }}</h2>
    <nut-cell class="cell">
      <nut-range disabled v-model="value7"></nut-range>
    </nut-cell>
    <h2>{{ translate('title7') }}</h2>
    <nut-cell class="cell">
      <nut-range
        v-model="value8"
        @change="onChange"
        inactive-color="rgba(163,184,255,1)"
        button-color="rgba(52,96,250,1)"
        active-color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
      ></nut-range>
    </nut-cell>
    <h2>{{ translate('title8') }}</h2>
    <nut-cell class="cell">
      <nut-range v-model="value9" @change="onChange">
        <template #button>
          <div class="custom-button">{{ value9 }}</div>
        </template>
      </nut-range>
    </nut-cell>

    <h2>{{ translate('title9') }}</h2>
    <nut-cell class="vertical_div">
      <view class="div">
        <nut-range v-model="value10" @change="onChange" :vertical="true"></nut-range>
      </view>
      <view class="div">
        <nut-range range v-model="value11" @change="onChange" :vertical="true"></nut-range>
      </view>
    </nut-cell>
    <h2>{{ translate('title10') }}</h2>
    <nut-cell class="cell">
      <nut-range v-model="value12" @change="onChange" :marks="marks" :hiddenRange="true"></nut-range>
    </nut-cell>
    <nut-cell class="cell">
      <nut-range range v-model="value13" @change="onChange" :marks="marks" :hiddenRange="true"></nut-range>
    </nut-cell>

    <nut-cell class="vertical_div">
      <view class="div">
        <nut-range v-model="value14" @change="onChange" :vertical="true" :marks="marks" :hiddenRange="true"></nut-range>
      </view>
      <view class="div">
        <nut-range
          range
          v-model="value15"
          @change="onChange"
          :vertical="true"
          :marks="marks"
          :hiddenRange="true"
        ></nut-range>
      </view>
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { toRefs, reactive } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { Toast } from '@/packages/nutui.vue';
const { createDemo, translate } = createComponent('range');
import { useTranslate } from '@/sites/assets/util/useTranslate';

const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      title: '基础用法',
      title1: '双滑块',
      title2: '指定范围',
      title3: '设置步长',
      title4: '隐藏范围',
      title5: '隐藏标签',
      title6: '禁用',
      title7: '自定义样式',
      title8: '自定义按钮',
      title9: '垂直方向',
      title10: '刻度标记'
    },
    'en-US': {
      title: 'Basic Usage',
      title1: 'Dual thumb',
      title2: 'Range',
      title3: 'Step Size',
      title4: 'Hidden Range',
      title5: 'Hidden Tag',
      title6: 'Disabled',
      title7: 'Custom Style',
      title8: 'Custom Button',
      title9: 'Vertical',
      title10: 'Marks'
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    const state = reactive({
      value1: 40,
      value2: [20, 80],
      value3: 0,
      value4: 20,
      value5: 30,
      value6: 40,
      value7: 50,
      value8: 40,
      value9: 60,
      value10: 20,
      value11: [20, 80],
      value12: 60,
      value13: [20, 80],
      value14: 60,
      value15: [20, 80],
      marks: {
        0: 0,
        20: 20,
        40: 40,
        60: 60,
        80: 80,
        100: 100
      }
    });

    const onChange = (value: number) => Toast.text('value：' + value);
    return {
      ...toRefs(state),
      onChange,
      translate
    };
  }
});
</script>

<style lang="scss" scoped>
.cell {
  padding: 40px 18px;
}
.custom-button {
  width: 26px;
  color: #fff;
  font-size: 10px;
  line-height: 18px;
  text-align: center;
  background-color: #ee0a24;
  border-radius: 100px;
}
.vertical_div {
  height: 180px;
  padding: 10px;
  .div {
    width: 150px;
  }
}
</style>
