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
    <h4>自定义展示</h4>
    <div>
      <nut-cell>
        <span slot="title">
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
      paused: false,
      resetTime: {
        d: '1',
        h: '00',
        m: '00',
        s: '00'
      }
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
