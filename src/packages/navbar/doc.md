# NavBar 头部导航

## 基本用法

```html
<nut-navbar 
    @on-click-back="back" 
    @on-click-title="title" 
    @on-click-more="more" 
    :leftShow="false" 
    :rightShow="false"
>title</nut-navbar>
```

```javascript
export default {
    methods: {
        back(){
            alert('header头部， 点击返回')
        },
        title(){
            alert('header头部， 点击title')
        },
        more(){
            alert('header头部， 点击更多')
        }
    }
};
```
> 两侧按钮不显示状态下，on-click-back，on-click-more事件不触发

## 自定义样式

内置默认为白色，所有样式可自定义

```html
<nut-navbar 
    style="background-color:#000; color: #fff; height:60px; line-height: 60px;"
>
    NavBar5
</nut-navbar>
```

## 事件

内置 **on-click-back**，**on-click-title**，**on-click-more** 三种监听事件。

```html
<nut-navbar 
    @on-click-back="back" 
    @on-click-title="title" 
    @on-click-more="more"
>
</nut-navbar>
```
```javascript
export default {
    methods: {
        back(){
            alert('header头部， 点击返回')
        },
        title(){
            alert('header头部， 点击title')
        },
        more(){
            alert('header头部， 点击更多')
        }
    }
};
```

## 新增图标

通过slot **left**，**right** 增加左右两侧图标

```html
<nut-navbar>NavBar1
    <a slot="left" @click="close">关闭</a>
    <a slot="right" @click="edit">编辑</a>
</nut-navbar>
```

```javascript
export default {
    methods: {
        close(){
            alert('header头部， 点击关闭')
        },
        edit(){
            alert('header头部， 点击编辑')
        }
    }
};
```

## 修改默认图标

通过slot **back-icon**，**more-icon** 来修改组件两侧默认图标

```html
<nut-navbar>NavBar1
    <a slot="back-icon">返回</a>
    <a slot="more-icon">更多</a>
</nut-navbar>
```

## 自定义Class
```html
<nut-navbar 
    class="my-nav"
>title</nut-navbar>
```


## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| leftShow | 是否显示左侧按钮 | Boolean | true
| title | 中间显示文字内容 | String | NavBar
| rightShow | 是否显示右侧按钮 | Boolean | true
