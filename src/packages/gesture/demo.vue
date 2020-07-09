<template>
  <div class="container">
    <div class="item" v-gesture:pan="test1" v-gesture:panend="test2" :style="{ left: left, top: top }">
      <h4>基本操作</h4>
      <p>平移</p>
    </div>

    <div class="item" v-gesture:pan.left="test3">
      <h4>指定方向平移</h4>
      <p>左移</p>
    </div>

    <div class="item" v-gesture:swipe.horizontal="test3">
      <h4>指定方向滑动</h4>
      <p>swipe</p>
    </div>

    <div class="item" v-gesture:press="test3" v-gesture:tap="test3" v-gesture:pan="test3">
      <h4>绑定多个事件</h4>
      <p>press、tap、pan</p>
    </div>
    <div class="show">{{ text }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      left: 0,
      top: 70,
      posX: 0,
      posY: 70,
      text: ''
    };
  },
  mounted() {},
  methods: {
    test1(e) {
      this.left = parseInt(this.posX) + e.deltaX + 'px';
      this.top = parseInt(this.posY) + e.deltaY + 'px';
    },
    test2(e) {
      this.posX = this.left;
      this.posY = this.top;
    },
    test3(e) {
      this.text = 'x: ' + e.deltaX + ', y: ' + e.deltaY;
    }
  }
};
</script>

<style>
.item {
  position: absolute;
  left: 0;
  width: 200px;
  height: 80px;
  background-color: #ddd;
}

@for $i from 1 to 20 {
  .container .item:nth-child(#{$i}) {
    top: $i * 90 + px;
  }
}
.content {
  position: absolute;
  left: 0;
  top: 200px;
  width: 100px;
  height: 200px;
  background-color: red;
}
.show {
  position: fixed;
  bottom: 0;
}
</style>
