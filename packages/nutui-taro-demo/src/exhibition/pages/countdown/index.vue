<template>
  <div class="demo" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <h2>基础用法</h2>
    <nut-cell>
      <nut-countdown :endTime="state.end" @end="onend"></nut-countdown>
    </nut-cell>
    <h2>自定义格式</h2>
    <nut-cell>
      <nut-countdown :endTime="state.end" format="DD 天 HH 时 mm 分 ss 秒" />
    </nut-cell>

    <h2>毫秒级渲染</h2>

    <nut-cell>
      <nut-countdown :endTime="state.end" millisecond format="HH:mm:ss:SS" />
    </nut-cell>

    <h2>以服务端的时间为准</h2>

    <nut-cell>
      <nut-countdown :startTime="state.serverTime" :endTime="state.end" />
    </nut-cell>

    <h2>异步更新结束时间</h2>

    <nut-cell>
      <nut-countdown :endTime="state.asyncEnd" />
    </nut-cell>

    <h2>控制开始和暂停的倒计时</h2>

    <nut-cell>
      <nut-countdown :endTime="state.end" :paused="state.paused" @paused="onpaused" @restart="onrestart" />
      <div style="position: absolute; right: 10px; top: 9px">
        <nut-button type="primary" size="small" @click="toggle">{{ state.paused ? 'start' : 'stop' }}</nut-button>
      </div>
    </nut-cell>

    <h2>自定义展示样式</h2>

    <nut-cell>
      <span>
        <nut-countdown v-model="state.resetTime" :endTime="state.end">
          <div class="countdown-part-box">
            <div class="part-item-symbol">{{ state.resetTime.d }}天</div>
            <div class="part-item h">{{ state.resetTime.h }}</div>
            <span class="part-item-symbol">:</span>
            <div class="part-item m">{{ state.resetTime.m }}</div>
            <span class="part-item-symbol">:</span>
            <div class="part-item s">{{ state.resetTime.s }}</div>
          </div>
        </nut-countdown>
      </span>
    </nut-cell>

    <h2>手动控制</h2>
    <nut-cell>
      <nut-countdown time="20000" ref="Countdown" :autoStart="false" format="ss:SS" />
    </nut-cell>

    <nut-grid :column-num="3">
      <nut-grid-item><nut-button type="primary" @click="start">开始</nut-button></nut-grid-item>
      <nut-grid-item><nut-button type="primary" @click="pause">暂停</nut-button></nut-grid-item>
      <nut-grid-item><nut-button type="primary" @click="reset">重置</nut-button></nut-grid-item>
    </nut-grid>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';
const env = Taro.getEnv();
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
const onpaused = (v) => {
  console.log('paused: ', v);
};
const onrestart = (v) => {
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

<style lang="scss">
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
