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

## 无动画

``` html
<nut-backtop :bottom="120" :is-animation="false" @click="handleClick">
      <div
        style="background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    display: flex;
    height: 44px;
    width: 44px;
    align-items: center;
    justify-content: center;"
      >无</div>
    </nut-backtop>
```

## 自定义样式

``` html
<nut-backtop :bottom="70" @click="handleClick">
      <div
        style="background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    display: flex;
    height: 44px;
    width: 44px;
    align-items: center;
    justify-content: center;"
      >Top</div>
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
  :z-index="10"
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

| 字段         | 说明                         | 类型    | 默认值 |
|--------------|------------------------------|---------|--------|
| distance     | “页面垂直方向滚动高度”后出现 | Number  | 200    |
| is-animation | 是否有动画,和duration参数互斥 | Boolean | true   |
| duration     | 设置动画持续时间             | Number  | 1000   |
| z-index       | 设置层级                     | Number  | 1111   |
| el-id        | 设置滚动事件监听的容器id     | String  | -      |
| right        | 设置离页面右边距离           | Number  | 30     |
| bottom       | 设置离页面底部距离           | Number  | 30     |

> 常见问题 : 滚动监听对象默认为window对象，开发者页面布局高度100%布局场景下，请采用此参数el-id

## Event
| 字段  | 说明           | 回调参数 |
|-------|----------------|----------|
| click | 按钮点击时触发 | -        |