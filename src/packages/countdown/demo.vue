<template>
  <div class="demo-list">
    <h4>基本用法</h4>
    <div>
      <nut-cell>
        <nut-countdown slot="title" :endTime="end" @on-end="onend" />
      </nut-cell>
    </div>
    <h4>显示天</h4>
    <div>
      <nut-cell>
        <nut-countdown slot="title" :endTime="end" showDays />
      </nut-cell>
    </div>
    <h4>以服务端的时间为准</h4>
    <div>
      <nut-cell>
        <nut-countdown slot="title" :startTime="serverTime" :endTime="end" />
      </nut-cell>
    </div>
    <h4>显示为 天时分秒</h4>
    <div>
      <nut-cell>
        <nut-countdown slot="title" showDays showPlainText :endTime="end" />
      </nut-cell>
    </div>
    <h4>异步更新结束时间</h4>
    <div>
      <nut-cell>
        <nut-countdown slot="title" showPlainText :endTime="asyncEnd" />
      </nut-cell>
    </div>
    <h4>控制开始和暂停的倒计时</h4>
    <div>
      <nut-cell>
        <nut-countdown slot="title" :endTime="end" :paused="paused" @on-paused="onpaused" @on-restart="onrestart" />
        <div slot="desc">
          <nut-button type="default" small shape="circle" @click="toggle">
            <b style="font-size: 14px;">{{ paused ? 'start' : 'stop' }}</b>
          </nut-button>
        </div>
      </nut-cell>
    </div>
    <h4>自定义显示</h4>
    <div>
      <nut-cell>
        <span slot="title">可调用该组件提供的 restTime 方法获取 '天时分秒' 自定义显示</span>
      </nut-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      serverTime: Date.now() - 30 * 1000,
      end: Date.now() + 50 * 1000,
      asyncEnd: 0,
      paused: false
    };
  },
  methods: {
    toggle() {
      this.paused = !this.paused;
    },
    onend() {
      console.log('countdown: ended.');
    },
    onpaused(v) {
      console.log('paused: ', v);
    },
    onrestart(v) {
      console.log('restart: ', v);
    }
  },
  mounted() {
    setTimeout(() => {
      this.asyncEnd = Date.now() + 30 * 1000;
    }, 3000);
  }
};
</script>

<style lang="scss" scoped></style>
