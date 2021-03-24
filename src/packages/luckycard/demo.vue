<template>
  <div class="demo-list">
    <h4>基本用法</h4>
    <nut-luckycard content="1000万"></nut-luckycard>
    <h4>内容异步</h4>
    <nut-luckycard :content="val"></nut-luckycard>
    <h4>刮开层和背景层都支持自定义颜色，奖品信息支持HTML</h4>
    <nut-luckycard coverColor="#F9CC9D" backgroundColor="#C3D08B" content="<em>1000<em><strong>元</strong>"></nut-luckycard>
    <h4>刮开层支持图片</h4>
    <nut-luckycard content="1000万" :coverImg="coverImage"></nut-luckycard>
    <h4>事件回调</h4>
    <nut-luckycard content="1000万" @open="opencard"></nut-luckycard>
    <h4>设置刮开比列</h4>
    <nut-luckycard content="1000万" @open="opencard" ratio="0.2"></nut-luckycard>
    <p></p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      val: '谢谢惠顾',
      coverImage: ''
    };
  },
  mounted() {
    setTimeout(() => {
      this.val = '数据修改';
    }, 500);
  },
  methods: {
    opencard() {
      alert('callback');
    }
  }
};
</script>
