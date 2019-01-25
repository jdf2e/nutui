# BackTop 回到顶部

用于较长的页面快捷回到顶部的组件。

## 基本用法

```html
<nut-backtop>
</nut-backtop>
```

## 设置出现位置

```html
<nut-backtop 
  :distance="400"
>
</nut-backtop>
```

> “页面垂直方向滚动高度”后出现

## click事件

```html
<nut-backtop 
  @click="onClick"
>
</nut-backtop>
```

```javascript
export default {
  methods: {
    onClick() {
      console.log("触发回到顶部按钮")
    }
  }
};
```

## 设置样式
```html
<nut-backtop 
  :bottom="20"
  :right="20"
  :zIndex="10"
>
</nut-backtop>
```


## 设置动画持续时间
```html
<nut-backtop 
  :duration="1000"  
>
</nut-backtop>
```


## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| duration | 设置动画持续时间 | Number | 1000
| distance | “页面垂直方向滚动高度”后出现 | Number | 200
| bottom | 设置离页面底部距离 | Number | 30
| right | 设置离页面右边距离 | Number | 30
| zIndex | 设置层级 | Number | 1111

## Event
| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| click | 按钮点击时触发 | -