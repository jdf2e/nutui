<template>
  <div class="demo-list">
    <h4>基本用法</h4>
    <div class="show-demo">
      <nut-countup :init-num="0" :end-num="200"></nut-countup>

      <nut-countup :init-num="150.0" :end-num="0.0" :speed="6.18" :to-fixed="2"> </nut-countup>

      <nut-countup :init-num="1000.0" :end-num="0.0" :speed="17" :to-fixed="2"> </nut-countup>
    </div>
    <h4>数字滚动</h4>
    <div class="show-demo">
      <nut-countup :scrolling="true" :init-num="17.618" :during="600"> </nut-countup>
    </div>
    <h4>自定义滚动图片展示</h4>
    <div class="show-demo">
      <nut-countup :custom-change-num="customNumber" :custom-bg-img="bgImage" :custom-spac-num="11" :num-width="33" :num-height="47" :during="5000">
      </nut-countup>
    </div>
    <h4>抽奖（模拟滚动抽奖）</h4>
    <div class="show-demo">
      <nut-countup
        ref="countup-machine"
        type="machine"
        :machine-num="machineNum"
        :machine-prize-num="5"
        :machine-prize-level="prizeLevel"
        :custom-bg-img="bgImage2"
        :num-width="100"
        :num-height="100"
        :during="3000"
        @scroll-end="scrollAniEnd"
      >
      </nut-countup>
      <nut-button @click="startRole" :disabled="startFlag">抽奖</nut-button>
      <nut-button @click="startRole2" :disabled="startFlag">不中奖</nut-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customNumber: 618,
      bgImage: 'https://img10.360buyimg.com/imagetools/jfs/t1/133024/3/2251/2646/5ee7549aE8dc02d7e/de6901b6c72db396.png',
      startFlag: false,
      startFlag2: false,
      machineNum: 3,
      bgImage2: 'https://img10.360buyimg.com/imagetools/jfs/t1/121466/20/6784/28830/5f06e7f2Edbb8998c/9bdd9e7b24dff9fe.png',
      prizeLevel: 0
    };
  },
  methods: {
    run() {
      let timer = null;
      timer = setInterval(() => {
        this.customNumber = Math.floor(Math.random() * (700 - 100 + 1) + 100);
      }, 5000);
    },
    startRole() {
      this.prizeLevel = Math.floor(Math.random() * 5 + 1);
      console.log(this.prizeLevel, '中奖');
      this.startFlag = true;
      // 实际运行情况下，开始滚动函数，需要放在奖品回调函数之后，如果异步操作会影响转动结果
      setTimeout(() => {
        this.$refs['countup-machine'].machineLuck();
      }, 500);
    },
    startRole2() {
      this.prizeLevel = -1;
      console.log(this.prizeLevel, '不中奖');
      this.startFlag = true;
      setTimeout(() => {
        this.$refs['countup-machine'].machineLuck();
      }, 500);
    },
    scrollAniEnd(val) {
      this.$toast.text(val ? '恭喜中奖！！！' : '很遗憾！没有中奖');
      setTimeout(() => {
        this.startFlag = false;
      }, 300);
    }
  },
  mounted() {
    this.run();
  }
};
</script>

<style lang="scss" scoped>
.show-demo {
  background: #ffffff;
}
.disabledClick {
  pointer-events: none !important;
  cursor: not-allowed !important;
  opacity: 0.6 !important;
}
</style>
