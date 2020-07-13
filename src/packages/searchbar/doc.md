# SearchBar 搜索栏

> 依赖 **Icon** 组件

## 基本用法

```html
<nut-searchbar 
    :hasIcon="true" 
    :hasSearchButton="false"
    :clearable='true'
></nut-searchbar>
```

## 搜索框对齐方式

```html
<nut-searchbar 
    :hasIcon="true"
    :hasSearchButton="false" 
    inputAlign="center"
></nut-searchbar>
```

## 自定义右侧按钮

```html

// 默认图标
<nut-searchbar placeText="右侧默认图标" @submit="searchIcon"></nut-searchbar>

// 自定义图标
<nut-searchbar placeText="右侧图标自定义" @submit="searchQR" :searchButtonIcon="require('../../assets/svg/qr.svg')"></nut-searchbar>

// 默认文案
<nut-searchbar placeText="右侧默认文字" :hasTextButton="true" @submit="submitFun"></nut-searchbar>

// 自定义文案
<nut-searchbar placeText="右侧文字自定义" :hasIcon="true" :hasTextButton="true" textInfo="取消" @submit="cancel"></nut-searchbar>

export default {
    methods:{
        submitFun(value) {
            this.$toast.text('您点击了搜索按钮');
            console.log('您输入的内容为：'+value);
            console.log('您触发了右侧按钮的事件，默认提交操作！');
        },
        searchIcon(value){
            this.$toast.text('您点击了搜索按钮');
            console.log('您输入的内容为：'+value);
        },
        searchQR(value){
            this.$toast.text('您点击了二维码按钮');
            console.log('您输入的内容为：'+value);
        },
        cancel(value){
            this.$toast.text('您点击了取消按钮');
            console.log('您输入的内容为：'+value);
        },
    }
}
```

## 自定义搜索框右侧按钮

```html

// 默认图标
<nut-searchbar :hasIcon="true" :hasSearchButton="false" :hasAction="true" @handleAction="handleAction"></nut-searchbar>

// 自定义图标
<nut-searchbar :hasIcon="true" :hasSearchButton="false" :hasAction="true" :actionIcon="require('../../assets/svg/rate-default-img.svg')" @handleAction="handleAction"></nut-searchbar>

export default {
    methods:{
        handleAction(value){
            this.$toast.text('您点击了input搜索框右侧的图标');
            console.log('您输入的内容为：'+value);
            console.log('您点击了input搜索框右侧的图标')
        }
    }
}
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

## 获取焦点与失去焦点

#### 注：由于移动设备的不同，第一次自动获取焦点并不一定能吊起键盘，需要手动吊起来一次，当再次进入时则正常吊起键盘

```html
<nut-searchbar
    placeText="请输入自定义文案"
    @submit="search"
    @focus="focusFun"
    ref="myInput"
></nut-searchbar>
```

> 输入、失去焦点、提交事件都会返回当前输入值

```javascript
export default {
    data() {
        return {
        }
    },
    mounted(){
        //设置获取焦点
        this.$nextTick(function() {
            this.$refs.myInput.focus()
        })
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
        },
        search(value) {
            //点击键盘中的’搜索‘时，失去焦点
            this.$refs.myInput.blur()
            console.log('搜索')
        }
    }
}
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| vaule | 当前input值，可使用 v-model 双向绑定数据 | String | ''
| hasIcon | 是否显示输入框前面的 icon | Boolean | false
| placeText | 输入框 placeholder 内容 | String | '请输入内容...'
| inputAlign | 输入框内容的对齐方式，可选值：left/center/right| String | left
| hasSearchButton | 是否显示右侧搜索按钮 | Boolean | true
| hasTextButton | 右侧搜索按钮是否为文字按钮 | Boolean | false
| textInfo | 右侧文字搜索按钮文案 | String | '搜索'
| animation | 是否需要默认的搜索框显示动画 | Boolean | true
| customClass | 自定义 class | String | ''
| searchIconSize | Search 图标的尺寸 | String | '20px'
| searchIconColor | Search 图标的颜色 | String | '#2e2d2d'
| searchBtnIcon | 自定义 Search 图标 | String | 默认 搜索图标
| searchBtnIconSize | 搜索按钮图标的尺寸 | String | '20px'
| searchBtnIconColor | 搜索按钮图标的颜色 | String | '#2e2d2d'
| clearable | 是否启用清除控件 | Boolean | true
| clearIconSize | 清空按钮图标的尺寸 | String | '15px'
| clearIconColor | 清空按钮图标的颜色 | String | '#2e2d2d'
| hasAction | 输入框右侧是否展示图标 | Boolean | false
| actionIcon | 自定义输入框右侧图标 | String | 二维码图标
| actionIconSize | 设置自定义输入框右侧图标的大小 | String | '20px'

## Event

| 字段 | 说明 | 回调参数
|----- | ----- | -----
| focus | 输入框获取焦点时触发事件 | 无
| input | 输入框输入内容时触发事件 | 无
| blur | 输入框失去焦点时触发事件 | 无
| submit | 默认提交事件，点击右侧Icon或文字也会触发 | 无
| handleAction | 点击输入框右侧图标触发 | 无
| clear | 清空事件 | 无

