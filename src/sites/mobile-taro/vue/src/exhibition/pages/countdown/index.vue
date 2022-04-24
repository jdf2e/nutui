<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell>
      <nut-countdown :endTime="end" @on-end="onend"></nut-countdown>
    </nut-cell>
    <h2>自定义格式</h2>
    <nut-cell>
      <nut-countdown :endTime="end" format="DD 天 HH 时 mm 分 ss 秒" />
    </nut-cell>

    <h2>毫秒级渲染</h2>

    <nut-cell>
      <nut-countdown :endTime="end" millisecond format="HH:mm:ss:SS" />
    </nut-cell>

    <h2>以服务端的时间为准</h2>

    <nut-cell>
      <nut-countdown :startTime="serverTime" :endTime="end" />
    </nut-cell>

    <h2>异步更新结束时间</h2>

    <nut-cell>
      <nut-countdown :endTime="asyncEnd" />
    </nut-cell>

    <h2>控制开始和暂停的倒计时</h2>

    <nut-cell>
      <nut-countdown :endTime="end" :paused="paused" @on-paused="onpaused" @on-restart="onrestart" />
      <div style="position: absolute; right: 10px; top: 9px">
        <nut-button type="primary" size="small" @click="toggle">{{ paused ? 'start' : 'stop' }}</nut-button>
      </div>
    </nut-cell>

    <h2>自定义展示样式</h2>

    <nut-cell>
      <span>
        <nut-countdown v-model="resetTime" :endTime="end">
          <div class="countdown-part-box">
            <div class="part-item-symbol">{{ resetTime.d }}天</div>
            <div class="part-item h">{{ resetTime.h }}</div>
            <span class="part-item-symbol">:</span>
            <div class="part-item m">{{ resetTime.m }}</div>
            <span class="part-item-symbol">:</span>
            <div class="part-item s">{{ resetTime.s }}</div>
          </div>
        </nut-countdown>
      </span>
    </nut-cell>

    <h2>手动控制</h2>
    <nut-cell>
      <nut-countdown time="20000" ref="CountDown" :autoStart="false" format="ss:SS" />
    </nut-cell>

    <nut-grid :column-num="3">
      <nut-grid-item><nut-button type="primary" @click="start">开始</nut-button></nut-grid-item>
      <nut-grid-item><nut-button type="primary" @click="pause">暂停</nut-button></nut-grid-item>
      <nut-grid-item><nut-button type="primary" @click="reset">重置</nut-button></nut-grid-item>
    </nut-grid>
  </div>
</template>

<script lang="ts">
import { toRefs, onMounted, ref, reactive } from 'vue';

export default {
  props: {},
  setup() {
    const CountDown = ref(null);
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
      CountDown.value.start();
    };

    const pause = () => {
      CountDown.value.pause();
    };

    const reset = () => {
      CountDown.value.reset();
    };
    onMounted(() => {
      console.log(CountDown.value);
    });

    setTimeout(() => {
      state.asyncEnd = Date.now() + 30 * 1000;
    }, 3000);

    return {
      ...toRefs(state),
      toggle,
      onend,
      onpaused,
      onrestart,
      CountDown,
      start,
      pause,
      reset
    };
  }
};
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
