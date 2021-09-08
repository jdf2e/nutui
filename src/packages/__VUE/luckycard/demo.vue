<template>
  <div class="demo">
    <h2>基本用法</h2>
    <nut-luckycard content="1000万"></nut-luckycard>
    <h2>内容异步</h2>
    <nut-luckycard :content="val"></nut-luckycard>
    <h2>刮开层和背景层都支持自定义颜色，奖品信息支持HTML</h2>
    <nut-luckycard
      coverColor="#F9CC9D"
      backgroundColor="#C3D08B"
      content="<em>1000<em><strong>元</strong>"
    ></nut-luckycard>
    <h2>刮开层支持图片</h2>
    <nut-luckycard content="1000万" :coverImg="coverImage"></nut-luckycard>
    <h2>事件回调</h2>
    <nut-luckycard content="1000万" @open="opencard"></nut-luckycard>
    <h2>设置刮开比列</h2>
    <nut-luckycard
      content="1000万"
      @open="opencard"
      ratio="0.2"
    ></nut-luckycard>
    <p></p>
  </div>
</template>

<script lang="ts">
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('luckycard');
export default createDemo({
  props: {},
  setup() {
    const opencard = () => {
      alert('刮开事件完成');
    };
    return { opencard };
  }
});
</script>

<style lang="scss" scoped>
.demo {
}
</style>
