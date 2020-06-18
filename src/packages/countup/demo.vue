<template>
    <div class="demo-list">
      <h4>基本用法</h4>
      <div class="show-demo">
        <nut-countup :initNum='0' :endNum='200'></nut-countup>

        <nut-countup
        :initNum='150.00' 
        :endNum='0.00' 
        :speed='6.18' 
        :toFixed='2'>
        </nut-countup>

        <nut-countup :initNum='1000.00' 
        :endNum='0.00'
        :speed='17'  
        :toFixed='2'>
        </nut-countup>
      </div>
      <h4>数字滚动</h4>
      <div class="show-demo">
        <nut-countup :scrolling="true" :initNum='17.618' :during="600">
        </nut-countup>
      </div>
      <h4>自定义滚动图片展示</h4>
      <div class="show-demo">
        <nut-countup
          :customChangeNum="customNumber"
          :customBgImg="bgImage"
          :customSpacNum="11"
          :numWidth="33"
          :numHeight="47"
          :during="5000"
        >
        </nut-countup>
      </div>
    </div>
</template>

<script>
export default {
  components: {

  },
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
</style>
