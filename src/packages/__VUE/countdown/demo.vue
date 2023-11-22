<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-cell>
      <nut-countdown :end-time="state.end" @end="onend"></nut-countdown>
    </nut-cell>
    <h2>{{ translate('format') }}</h2>
    <nut-cell>
      <nut-countdown
        :end-time="state.end"
        :format="`DD ${translate('day')} HH ${translate('hour')} mm ${translate('minute')} ss ${translate('second')}`"
      />
    </nut-cell>

    <h2>{{ translate('millisecond') }}</h2>

    <nut-cell>
      <nut-countdown :end-time="state.end" millisecond format="HH:mm:ss:SS" />
    </nut-cell>

    <h2>{{ translate('serverTime') }}</h2>

    <nut-cell>
      <nut-countdown :start-time="state.serverTime" :end-time="state.end" />
    </nut-cell>

    <h2>{{ translate('async') }}</h2>

    <nut-cell>
      <nut-countdown :end-time="state.asyncEnd" />
    </nut-cell>

    <h2>{{ translate('controlTime') }}</h2>

    <nut-cell>
      <nut-countdown :end-time="state.end" :paused="state.paused" @paused="onpaused" @restart="onrestart" />
      <div style="position: absolute; right: 10px; top: 9px">
        <nut-button type="primary" size="small" @click="toggle">{{ state.paused ? 'start' : 'stop' }}</nut-button>
      </div>
    </nut-cell>

    <h2>{{ translate('customStyle') }}</h2>

    <nut-cell>
      <span>
        <nut-countdown v-model="state.resetTime" :end-time="state.end">
          <div class="countdown-part-box">
            <div class="part-item-symbol">{{ state.resetTime.d }}{{ translate('day') }}</div>
            <div class="part-item h">{{ state.resetTime.h }}</div>
            <span class="part-item-symbol">:</span>
            <div class="part-item m">{{ state.resetTime.m }}</div>
            <span class="part-item-symbol">:</span>
            <div class="part-item s">{{ state.resetTime.s }}</div>
          </div>
        </nut-countdown>
      </span>
    </nut-cell>

    <h2>{{ translate('handleControl') }}</h2>
    <nut-cell>
      <nut-countdown ref="Countdown" time="20000" :auto-start="false" format="ss:SS" />
    </nut-cell>

    <nut-grid :column-num="3">
      <nut-grid-item
        ><nut-button type="primary" @click="start">{{ translate('start') }}</nut-button></nut-grid-item
      >
      <nut-grid-item
        ><nut-button type="primary" @click="pause">{{ translate('pause') }}</nut-button></nut-grid-item
      >
      <nut-grid-item
        ><nut-button type="primary" @click="reset">{{ translate('reset') }}</nut-button></nut-grid-item
      >
    </nut-grid>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue';
import { useTranslate } from '@/sites/utils';
const translate = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    format: '自定义格式',
    millisecond: '毫秒级渲染',
    serverTime: '以服务端的时间为准',
    async: '异步更新结束时间',
    controlTime: '控制开始和暂停的倒计时',
    customStyle: '自定义展示样式',
    handleControl: '手动控制',
    start: '开始',
    pause: '暂停',
    reset: '重置',
    day: '天',
    hour: '时',
    minute: '分',
    second: '秒'
  },
  'en-US': {
    basic: 'Basic Usage',
    format: 'Custom Format',
    millisecond: 'Millisecond',
    serverTime: 'Server Time Prevails',
    async: 'End-Time of Asyn Update',
    controlTime: 'Manual Control',
    customStyle: 'Custom Style',
    handleControl: 'Handle Control',
    start: 'Start',
    pause: 'Pause',
    reset: 'Reset',
    day: 'Day',
    hour: ':',
    minute: ':',
    second: ''
  }
});
const Countdown = ref<any>(null);
const state = reactive({
  serverTime: Date.now() - 20 * 1000,
  end: Date.now() + 60 * 1000,
  starttime: Date.now(),
  asyncEnd: 0,
  paused: false,
  resetTime: {
    d: '1',
    h: '00',
    m: '00',
    s: '00'
  }
});

const toggle = () => {
  state.paused = !state.paused;
};
const onend = () => {
  console.log('countdown: ended.');
};
const onpaused = (v: any) => {
  console.log('paused: ', v);
};
const onrestart = (v: any) => {
  console.log('restart: ', v);
};
const start = () => {
  Countdown.value.start();
};

const pause = () => {
  Countdown.value.pause();
};

const reset = () => {
  Countdown.value.reset();
};
onMounted(() => {
  console.log(Countdown.value);
});

setTimeout(() => {
  state.asyncEnd = Date.now() + 30 * 1000;
}, 3000);
</script>

<style lang="scss" scoped>
.countdown-part-box {
  display: flex;
  align-items: center;

  .part-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 25px;
    background: #e8220e;
    color: #fff;
    font-size: 14px;
    border-radius: 6px;
  }

  .part-item-symbol {
    margin: 0 5px;
  }
}
</style>
