# Drag 拖拽
实现可拖拽的任意元素

## 基本用法
```html
<nut-drag @click.native="click">
  <div class="touch-dom">可点击，可拖拽</div>
</nut-drag>
<script>
export default {
  methods: {
    click() {
      this.$toast.text("点击了拖拽元素");
    },
  },
};
</script>
```
## 限制拖拽方向
```html
<nut-drag direction="x">
  <div class="touch-dom">只能在X轴拖动</div>
</nut-drag>
```
## 自动吸边
```html
<nut-drag direction="x" :attract="true">
  <div class="touch-dom">拖动我</div>
</nut-drag>
```
## 限制拖拽边界
```html
<nut-drag
  :boundary="{ top: 401, left: 9, bottom: bottom(), right: right() }"
  :attract="true"
>
  <div class="touch-dom">拖动我</div>
</nut-drag>
<script>
export default {
  methods: {
    right() {
      return document.documentElement.clientWidth - 300 - 9;
    },
    bottom() {
      return document.documentElement.clientHeight - 601;
    },
  },
};
</script>
```
## Prop

| 字段      | 说明                                              | 类型           | 默认值                              |
| :-------- | :------------------------------------------------ | :------------- | :---------------------------------- |
| attract   | 是否开启自动吸边                                  | Boolean        | false                                |
| direction | 拖拽元素的拖拽方向限制，**x**/**y**/**all**三选一 | String         | 'all'                               |
| z-index   | 拖拽元素的堆叠顺序                                | Number, String | 11                                  |
| boundary  | 拖拽元素的拖拽边界                                | Object         | {top: 0,left: 0,right: 0,bottom: 0} |