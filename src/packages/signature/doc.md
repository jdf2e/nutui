# Signature 签名

基于Canvas的签名组件。

## 基本用法

默认
```html
<nut-signature  
    @confirm="confirm" 
    @clear="clear"
></nut-signature>
<p class="demo-tips demo">Tips: 点击确认按钮,下方显示签名图片</p>
```
```javascript
export default {
    data(){
        return{
        }
    },
    methods:{
        confirm(canvas, data) {
            let img = document.createElement('img');
            img.src = data;
            document.querySelector('.demo').appendChild(img);
        },

        clear() {
            let img = document.querySelector('.demo img'); 
            if (img) {
                img.remove();
            }
        }
    }
}
```

修改签字颜色和画笔粗细

```html
<nut-signature  
    @confirm="confirm1" 
    @clear="clear1" 
    :lineWidth="lineWidth" 
    :strokeStyle="strokeStyle"
></nut-signature>
<p class="demo-tips demo">Tips: 点击确认按钮,下方显示签名图片</p>
```
```javascript
export default {
    data(){
        return{
            lineWidth: 4,
            strokeStyle: 'green'
        }
    },
    methods:{
        confirm(canvas, data) {
            let img = document.createElement('img');
            img.src = data;
            document.querySelector('.demo').appendChild(img);
        },

        clear() {
            let img = document.querySelector('.demo img'); 
            if (img) {
                img.remove();
            }
        }
    }
}
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| custom-class | 自定义class | String | -
| line-width | 线条的宽度 | Number | 3
| stroke-style | 绘图笔触颜色 | String | '#000'
| type | 图片格式 | String | 'png'
| un-support-tpl | 不支持Canvas情况下的展示文案 | String | '对不起，当前浏览器不支持Canvas，无法使用本控件！'

## Event

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| confirm | 点击确认按钮触发事件回调函数 | canvas和签名图片展示的 data URI
| clear | 点击重签按钮触发事件回调函数 | 无