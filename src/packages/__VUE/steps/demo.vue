<template>
  <div class="demo padding">
    <h2>{{ translate('basic') }}</h2>
    <div class="steps-wrapper">
      <nut-steps :current="current1" @click-step="handleClickStep">
        <nut-step :title="translate('step1')">
          1
          <template v-slot:title>{{ translate('step1') }}</template>
        </nut-step>
        <nut-step :title="translate('step2')">2</nut-step>
        <nut-step :title="translate('step3')">3</nut-step>
      </nut-steps>
      <div class="steps-button">
        <nut-button size="mini" type="primary" @click="handleStep('current1')">{{ translate('next') }}</nut-button>
      </div>
    </div>
    <h2>{{ translate('basicDot') }}</h2>
    <div class="steps-wrapper">
      <nut-steps :current="current2" progress-dot>
        <nut-step></nut-step>
        <nut-step></nut-step>
        <nut-step></nut-step>
      </nut-steps>
      <div class="steps-button">
        <nut-button size="mini" type="primary" @click="handleStep('current2')">{{ translate('next') }}</nut-button>
      </div>
    </div>
    <h2>{{ translate('desc') }}</h2>
    <div class="steps-wrapper">
      <nut-steps :current="current3">
        <nut-step :content="translate('stepdesc')" :title="translate('step1')">1</nut-step>
        <nut-step :content="translate('stepdesc')" :title="translate('step2')"></nut-step>
        <nut-step :content="translate('stepdesc')" :title="translate('step3')"></nut-step>
      </nut-steps>
      <div class="steps-button" style="margin-top: 10px">
        <nut-button size="mini" type="primary" @click="handleStep('current3')">{{ translate('next') }}</nut-button>
      </div>
    </div>
    <h2>{{ translate('cicon') }}</h2>
    <div class="steps-wrapper">
      <nut-steps current="1">
        <nut-step :title="translate('complete')" icon="service">1</nut-step>
        <nut-step :title="translate('progress')" icon="people">2</nut-step>
        <nut-step :title="translate('start')" icon="location2">3</nut-step>
      </nut-steps>
    </div>
    <h2>{{ translate('verstep') }}</h2>
    <div class="steps-wrapper" style="height: 300px; padding: 15px 30px">
      <nut-steps current="2" direction="vertical">
        <nut-step :content="translate('content1')" :title="translate('complete')">1</nut-step>
        <nut-step :content="translate('content2')" :title="translate('progress')">2</nut-step>
        <nut-step :content="translate('content3')" :title="translate('start')">3</nut-step>
      </nut-steps>
    </div>
    <h2>{{ translate('verstep') }}</h2>
    <div class="steps-wrapper" style="height: 350px; padding: 15px 40px">
      <nut-steps current="2" direction="vertical" progress-dot>
        <nut-step :content="translate('content1')" :title="translate('complete')">1</nut-step>
        <nut-step :content="translate('content2')" :title="translate('progress')">2</nut-step>
        <nut-step :title="translate('start')"
          >3
          <template v-slot:content>
            <p>{{ translate('content4') }}：</p>
            <p>{{ translate('content5') }}</p>
          </template>
        </nut-step>
      </nut-steps>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { useTranslate } from '@/sites/assets/util/useTranslate';

const { createDemo, translate } = createComponent('steps');
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      basicDot: '基本用法（点状）',
      step1: '步骤一',
      step2: '步骤二',
      step3: '步骤三',
      desc: '标题和描述信息',
      stepdesc: '步骤描述',
      next: '下一步',
      cicon: '自定义图标',
      complete: '已完成',
      progress: '进行中',
      start: '未开始',
      content1: '您的订单已经打包完成，商品已发出',
      content2: '您的订单正在配送途中',
      content3: '收货地址为：北京市经济技术开发区科创十一街18号院京东大厦',
      content4: '收货地址为',
      content5: '北京市经济技术开发区科创十一街18号院京东大厦',
      verstep: '竖向步骤条'
    },
    'en-US': {
      basic: 'Basic Usage',
      basicDot: 'Basic Usage(Dot)',
      step1: 'Step One',
      step2: 'Step Two',
      step3: 'Step Three',
      desc: 'Title and description information',
      stepdesc: 'Step description',
      next: 'next step',
      cicon: 'Custom Icon',
      complete: 'Completed',
      progress: 'In progress',
      start: 'Not started',
      content1: 'Your order has been packaged and the goods have been delivered',
      content2: 'Your order is in transit',
      content3:
        'The receiving address is Jingdong building, yard 18, Kechuang 11th Street, Beijing Economic and Technological Development Zone',
      content4: 'The receiving address is',
      content5: 'Jingdong building, yard 18, Kechuang 11th Street, Beijing Economic and Technological Development Zone',
      verstep: 'Vertical step bar'
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    const state = reactive({
      current1: 1,
      current2: 1,
      current3: 1,
      current4: 1,
      current5: 1
    });

    const handleStep = (params) => {
      if (state[params] >= 3) {
        state[params] = 1;
      } else {
        state[params] += 1;
      }
    };

    const handleClickStep = (index: number) => {
      console.log(index);
    };

    return {
      ...toRefs(state),
      handleStep,
      handleClickStep,
      translate
    };
  }
});
</script>

<style lang="scss">
.nut-theme-dark {
  .steps-wrapper {
    background-color: #1b1b1b;
  }
}
.padding {
  padding-left: 0 !important;
  padding-right: 0 !important;
  h2 {
    padding-left: 27px !important;
  }
}
.steps-wrapper {
  width: 100%;
  padding: 15px 0;
  background-color: #fff;
  .steps-button {
    text-align: center;
  }
}
</style>
