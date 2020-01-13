# SearchBar 搜索栏

> 依赖 **Icon** 组件

## 基本用法

```html
<nut-searchbar
    placeText="请输入自定义文案"
></nut-searchbar>
```

## 右侧搜索按钮可根据需要进行配置

```html
<nut-searchbar
    placeText="请输入自定义文案"
    :hasSearchButton="false"
></nut-searchbar>
```

## 可配置输入框前面是否显示搜索图标、右侧是否显示文字按钮、显示文字、自定义 class

```html
<nut-searchbar
    placeText="ERP/姓名/邮箱"
    :hasIcon="true"
    :hasTextButton="true"
    textInfo="取消"
    customClass="search_demo"
></nut-searchbar>
```

## 事件

```html
<nut-searchbar
    placeText="请输入自定义文案"
    @focus="focusFun"
    @input="inputFun"
    @blur="blurFun"
    @submit="submitFun"
></nut-searchbar>
```
> 输入、失去焦点、提交事件都会返回当前输入值

```javascript
export default {
    data() {
        return {
        }
    },
    methods:{
        focusFun() {
            console.log('获取焦点操作！');
        },
        inputFun(value) {
            console.log(value);
            console.log('您正在输入...');
        },
        blurFun(value) {
            console.log(value);
            console.log('您已失去焦点！');
        },
        submitFun(value) {
            console.log(value);
            console.log('默认提交操作！');
        }
    }
}
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| hasIcon | 是否显示输入框前面的 icon | Boolean | false
| placeText | 输入框 placeholder 内容 | String | '请输入内容...'
| hasSearchButton | 是否显示右侧搜索按钮 | Boolean | true
| hasTextButton | 右侧搜索按钮是否为文字按钮 | Boolean | false
| textInfo | 右侧文字搜索按钮文案 | String | '搜索'
| animation | 是否需要默认的搜索框显示动画 | Boolean | true
| customClass | 自定义 class | String | ''
| searchIconSize | Search 图标的尺寸 | String | '20px'
| searchIconColor | Search 图标的颜色 | String | '#2e2d2d'
| searchBtnIconSize | 搜索按钮图标的尺寸 | String | '20px'
| searchBtnIconColor | 搜索按钮图标的颜色 | String | '#2e2d2d'
| clearIconSize | 清空按钮图标的尺寸 | String | '15px'
| clearIconColor | 清空按钮图标的颜色 | String | '#2e2d2d'

## Event

| 字段 | 说明 | 回调参数
|----- | ----- | -----
| focus | 输入框获取焦点时触发事件 | 无
| input | 输入框输入内容时触发事件 | 无
| blur | 输入框失去焦点时触发事件 | 无
| submit | 默认提交事件，点击右侧Icon或文字也会触发 | 无
