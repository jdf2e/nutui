<template>
    <div class="demo-list">
      <h4>基本用法</h4>
      <div>
        <nut-cell>
          <count-down slot="title" :rest="rest" />
        </nut-cell>
      </div>
      <h4>以服务端的时间为准</h4>
      <div>
        <nut-cell>
          <count-down slot="title" :rest="rest" :remoteCurrTime="1550134689373" />
        </nut-cell>
      </div>
      <h4>显示为 天时分秒</h4>
      <div>
        <nut-cell>
          <count-down slot="title" :rest="rest" :showPlainText="true" />
        </nut-cell>
      </div>
      <h4>控制开始和暂停的倒计时</h4>
      <div>
        <nut-cell>
          <count-down slot="title" :rest="rest" :paused="paused" />
          <div slot="desc">
            <nut-button type="default" small shape="circle" @click="toggle">
              <b style="font-size: 14px;">{{paused ? 'start': 'stop'}}</b>
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
      rest: 12345678,
      paused: false
    };
  },
  methods: {
    toggle() {
      this.paused = !this.paused;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
