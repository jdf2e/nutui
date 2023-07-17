<template>
  <div class="demo">
    <h2>{{ translate('show') }}</h2>
    <div class="demo-animate">
      <nut-animate type="slide-right" :show="show">
        <nut-button type="primary" @click="onClick">{{ translate('FRTL') }}</nut-button>
      </nut-animate>
    </div>

    <h2>{{ translate('click') }}</h2>

    <div class="demo-animate">
      <nut-animate type="slide-right" action="click">
        <nut-button type="primary">{{ translate('FRTL') }}</nut-button>
      </nut-animate>
    </div>

    <div class="demo-animate">
      <nut-animate type="slide-left" action="click">
        <nut-button type="primary">{{ translate('FLTR') }}</nut-button>
      </nut-animate>
    </div>

    <div class="demo-animate">
      <nut-animate type="slide-top" action="click">
        <nut-button type="primary">{{ translate('FTTB') }}</nut-button>
      </nut-animate>
    </div>

    <div class="demo-animate">
      <nut-animate type="slide-bottom" action="click">
        <nut-button type="primary">{{ translate('FBTT') }}</nut-button>
      </nut-animate>
    </div>

    <h2>{{ translate('basic') }}</h2>

    <div class="demo-animate">
      <nut-animate type="shake" :loop="true">
        <nut-button type="primary">{{ translate('shake') }}</nut-button>
      </nut-animate>
    </div>

    <div class="demo-animate">
      <nut-animate type="ripple" :loop="true">
        <nut-button type="primary">{{ translate('ripple') }}</nut-button>
      </nut-animate>
    </div>

    <div class="demo-animate">
      <nut-animate type="breath" :loop="true">
        <nut-button type="primary">{{ translate('breath') }}</nut-button>
      </nut-animate>
    </div>

    <div class="demo-animate">
      <nut-animate type="twinkle" :loop="true">
        <nut-button type="primary">{{ translate('twinkle') }}</nut-button>
      </nut-animate>
    </div>

    <div class="demo-animate">
      <nut-animate type="flicker" :loop="true">
        <nut-button type="primary">{{ translate('flicker') }}</nut-button>
      </nut-animate>
    </div>

    <div class="demo-animate">
      <nut-animate type="jump" :loop="true">
        <nut-button type="primary">{{ translate('jump') }}</nut-button>
      </nut-animate>
    </div>

    <div class="demo-animate">
      <nut-animate type="float" :loop="true">
        <nut-button type="primary">{{ translate('float') }}</nut-button>
      </nut-animate>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { translate } = createComponent('animate');
import { useTranslate } from '@/sites/assets/util/useTranslate';

const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      show: '通过 show 控制动画',
      basic: '循环动画',
      click: '点击触发',
      FRTL: '由右向左划入',
      FLTR: '由左向右划入',
      FTTB: '由上至下划入',
      FBTT: '由下至上划入',
      shake: 'shake-抖动',
      ripple: 'ripple-心跳',
      breath: 'breath-呼吸灯',
      twinkle: 'twinkle-水波',
      flicker: 'flicker-擦亮',
      jump: 'jump-跳跃',
      float: 'float-漂浮'
    },
    'en-US': {
      show: 'Trigger animation through show',
      basic: 'Loop animation',
      FRTL: 'From right to left',
      FLTR: 'From left to right',
      FTTB: 'From top to bottom',
      FBTT: 'From bottom to top',
      shake: 'shake',
      ripple: 'ripple',
      breath: 'breath',
      twinkle: 'twinkle',
      flicker: 'flicker',
      jump: 'jump',
      float: 'float'
    }
  });
initTranslate();

const show = ref(false);
const onClick = () => {
  show.value = true;
};
</script>
<style lang="scss" scoped>
.demo-animate {
  margin-bottom: 10px;
  display: inline-block;
  width: 100%;
}
</style>
