<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-rate v-model="state.val" />

    <h2>{{ translate('title1') }}</h2>
    <nut-rate allow-half v-model="state.val1"></nut-rate>

    <h2>{{ translate('title2') }}</h2>
    <nut-rate checked-icon="heart-fill1" unchecked-icon="heart" v-model="state.val2"></nut-rate>

    <h2>{{ translate('title3') }}</h2>
    <nut-rate :count="6" v-model="state.val3"></nut-rate>

    <h2>{{ translate('title4') }}</h2>
    <nut-rate active-color="#FFC800" v-model="state.val4"></nut-rate>

    <h2>{{ translate('title5') }}</h2>
    <nut-rate disabled v-model="state.val5"></nut-rate>

    <h2>{{ translate('title6') }}</h2>
    <nut-rate v-model="state.val6" readonly></nut-rate>

    <h2>{{ translate('title7') }}</h2>
    <nut-rate v-model="state.val7" @change="onChange"></nut-rate>

    <h2>{{ translate('title8') }}</h2>
    <nut-rate v-model="state.val8" icon-size="35"></nut-rate>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { useTranslate } from '@/sites/assets/util/useTranslate';
const { createDemo, translate } = createComponent('rate');
import { Toast } from '@/packages/nutui.vue';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      title1: '半星',
      title2: '自定义 icon',
      title3: '自定义数量',
      title4: '自定义颜色',
      title5: '禁用状态',
      title6: '只读状态',
      title7: '绑定事件',
      title8: '自定义尺寸 35px'
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Half Star',
      title2: 'Custom icon',
      title3: 'Custom quantity',
      title4: 'Custom color',
      title5: 'disabled state',
      title6: 'read-only status',
      title7: 'bind event',
      title8: 'Custom size 35px'
    }
  });
export default createDemo({
  setup() {
    initTranslate();
    const state = reactive({
      val: 3,
      val1: 3.5,
      val2: 3,
      val3: 3,
      val4: 3,
      val5: 3,
      val6: 3,
      val7: 3,
      val8: 3
    });
    const onChange = (val: string) => {
      Toast.text(val);
    };
    return {
      state,
      onChange,
      translate
    };
  }
});
</script>

<style lang="scss" scoped></style>
