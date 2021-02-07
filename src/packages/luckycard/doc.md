# Luckycard 刮刮卡抽奖

## 基本用法

```html
    <nut-luckycard 
    content="1000万"
    ></nut-luckycard>
```
## 异步数据

```html
    <nut-luckycard 
    :content="val"
    ></nut-luckycard>
```
## 支持自定义颜色

```html
    <nut-luckycard 
        coverColor="#F9CC9D" 
        backgroundColor="#C3D08B" 
        content="<em>1000<em><strong>元</strong>"
        ></nut-luckycard>
```
## 支持背景是图片

```html
    <nut-luckycard 
        content="1000万" 
        :coverImg="coverImage"
        ></nut-luckycard>
```

## 事件回调

```html
     <nut-luckycard 
        content="1000万"
        @open="opencard"
     ></nut-luckycard>
```
## 设置刮开比例

```html
   <nut-luckycard 
        content="1000万"
        @open="opencard"
        ratio="0.2"
    ></nut-luckycard>
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| content | 奖项信息，支持html | String | ''
| height | 卡片高度 | String | 50px
| width | 卡片高度 | String | 300px
| coverColor | 刮开层颜色 | String | ''
| coverImg | 刮开层是图片（不支持跨域。设置此项后coverColor失效） | String | ''
| fontSize | 中奖信息字号 | String | 20px
| backgroundColor | 内容层背景颜色 | String | '#FFFFFF'
| ratio | 触发事件的刮开比 | Number |0.8(介于0-1之间)

## 事件

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| open | 刮开后回调函数 | function | ''



