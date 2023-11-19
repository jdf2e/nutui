<template>
  <div class="demo">
    <h2>{{ translate('show') }}</h2>
    <div class="demo-animate">
      <nut-animate type="slide-right" :show="show1">
        <nut-button type="primary" @click="onClick1">{{ translate('once') }}</nut-button>
      </nut-animate>
    </div>

    <div class="demo-animate">
      <nut-animate type="slide-right" :show="show2">
        <nut-button type="primary" @click="onClick2">{{ translate('times') }}</nut-button>
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
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useTranslate } from '@/sites/assets/util/useTranslate';

const translate = useTranslate({
  'zh-CN': {
    show: '通过 show 控制动画',
    once: '单次动画',
    times: '多次触发',
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
    once: 'Once',
    times: 'Several times',
    basic: 'Loop animation',
    click: 'Click',
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

const show1 = ref(false);
const onClick1 = () => {
  show1.value = true;
};

const show2 = ref(false);
const onClick2 = () => {
  show2.value = true;
  setTimeout(() => {
    show2.value = false;
  }, 500);
};
</script>
<style lang="scss" scoped>
.demo-animate {
  margin-bottom: 10px;
  display: inline-block;
  width: 100%;
}
</style>
