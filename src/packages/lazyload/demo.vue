<template>
  <div class="lazyloadDemo">
    <h4>基础使用</h4>
    <img v-lazy="imageArray[0]" />
    <h4>背景图懒加载</h4>
    <div v-lazy:background-image="imageArray[1]"></div>
    <h4>懒加载模块</h4>
    <lazy-component>
      <img :src="imageArray[2]" />
    </lazy-component>
    <h4>错误、加载中 图片设置</h4>
    <div v-lazy:background-image="imgObj"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgObj: {
        src: "//error.png",
        error: '//img12.360buyimg.com/imagetools/jfs/t1/75933/12/14706/2086/5dc142e4E62f88e83/2d68d4d25d87faa4.png',
        loading: '//img12.360buyimg.com/imagetools/jfs/t1/73967/28/14561/916/5dc142e4E0666555b/bf33454553c6035e.png'
      },
      imageArray: [
        "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg",
        "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png",
        "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>

</style>

