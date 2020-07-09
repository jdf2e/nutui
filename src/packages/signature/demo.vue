<template>
  <div class="demo-list">
    <h4>基本用法</h4>
    <p>默认</p>
    <p><nut-signature @confirm="confirm" @clear="clear"></nut-signature></p>
    <p class="demo-tips demo1">Tips: 点击确认按钮,下方显示签名图片</p>
    <p class="margin-top">修改签字颜色和画笔粗细</p>
    <p><nut-signature @confirm="confirm1" @clear="clear1" :lineWidth="lineWidth" :strokeStyle="strokeStyle"></nut-signature></p>
    <p class="demo-tips demo2">Tips: 点击确认按钮,下方显示签名图片</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lineWidth: 4,
      strokeStyle: 'green'
    };
  },
  computed: {},
  methods: {
    confirm(canvas, data) {
      let img = document.createElement('img');
      img.src = data;
      document.querySelector('.demo1').appendChild(img);
    },

    clear() {
      let img = document.querySelector('.demo1 img');
      if (img) {
        img.remove();
      }
    },

    confirm1(canvas, data) {
      let img = document.createElement('img');
      img.src = data;
      document.querySelector('.demo2').appendChild(img);
    },

    clear1() {
      let img = document.querySelector('.demo2 img');
      if (img) {
        img.remove();
      }
    }
  }
};
</script>

<style lang="scss">
.demo-tips {
  font-size: 12px;
}
.margin-top {
  margin-top: 30px;
}
</style>
