<template>
  <div class="demo watermark-demo">
    <h2>基础用法</h2>
    <nut-cell class="wrap">
      <nut-button @click="showTextMark">文字水印</nut-button>
      <nut-button @click="showImageMark">图片水印</nut-button>
      <nut-watermark v-if="!flag" class="mark1" :z-index="1" content="nut-ui-water-mark"></nut-watermark>
      <nut-watermark
        v-if="flag"
        class="mark1"
        :image-width="60"
        :image-height="23"
        :z-index="1"
        :image="imgSrc"
      ></nut-watermark>
    </nut-cell>
    <h2>局部用法</h2>
    <nut-cell class="wrap wrap2">
      <img :src="src" alt="" />
      <nut-watermark :fullPage="false" font-color="#fa2c19" content="nut-ui"></nut-watermark>
    </nut-cell>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  props: {},
  setup() {
    const src = ref('//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg');
    const imgSrc = ref(
      'http://img11.360buyimg.com/imagetools/jfs/t1/57345/6/20069/8019/62b995cdEd96fef03/51d3302dfeccd1d2.png'
    );
    const flag = ref(false);
    const showTextMark = () => {
      flag.value = false;
    };
    const showImageMark = () => {
      flag.value = true;
    };
    return { src, imgSrc, showTextMark, showImageMark, flag };
  }
});
</script>
<style lang="scss">
.watermark-demo {
  .wrap {
    width: 100%;
    height: 240px;
    display: block;
    position: relative;
    background: #fff;
    > img {
      width: 100%;
    }
    .mark1 {
      width: 100%;
      top: 50px;
    }
    .nut-button {
      margin-right: 10px;
    }
  }
  .wrap2 {
    position: relative;
    z-index: 2;
  }
}
</style>
