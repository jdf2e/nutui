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
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      customNumber: 618,
      bgImage: 'https://img10.360buyimg.com/imagetools/jfs/t1/133024/3/2251/2646/5ee7549aE8dc02d7e/de6901b6c72db396.png',
    };
  },
  methods: {
    run() {
      let timer = null;
      timer = setInterval(() => {
        this.customNumber = Math.floor(Math.random() * (700 - 100 + 1) + 100);
      }, 5000);
    },
  },
  mounted() {
    this.run();
  },
};
</script>

<style lang="scss" scoped>
.show-demo {
  background: #ffffff;
}
</style>
