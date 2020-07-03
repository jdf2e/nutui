# Gesture 手势组件
基于[hammer.js](http://hammerjs.github.io/getting-started/)封装，支持移动端各种手势操作。包括'tap', 'pan', 'pinch', 'press', 'rotate', 'swipe'

## 基本用法
```html
<div class="item" v-gesture:pan="test1" v-gesture:panend="test2" :style="{ left: left, top: top }">
    平移
</div>
```
## 指定方向平移
```html
<div class="item" v-gesture:pan.left="test3">
    左移
</div>
```
## 指定方向滑动
```html
<div class="item" v-gesture:swipe.horizontal="test3">
    swipe
</div>
```
## 绑定多个事件
```html
<div class="item" v-gesture:press="test3" v-gesture:tap="test3" v-gesture:pan="test3">
    press、tap、pan
</div>
<script>
export default {
  data() {
    return {
      left: 0,
      top: 70,
      posX: 0,
      posY: 70
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
      console.log(e.deltaX, e.deltaY);
    }
  }
};
</script>

```
