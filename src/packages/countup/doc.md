# CountUp 数字滚动

## 基本用法

```html
<nut-countup :initNum='0' :endNum='200'></nut-countup>

<nut-countup :initNum='150.00' :endNum='0.00' :speed='2.62' :toFixed='2'></nut-countup>

<nut-countup :initNum='1000.00' :endNum='0.00' :speed='6.3' :startFlag='startNum' :toFixed='2'></nut-countup>
```

## 数字滚动

```html
<nut-countup :scrolling="true" :initNum='17.618' :during="600"></nut-countup>
```

## 自定义数字图片展示

```html
<nut-countup
    :customChangeNum="customNumber"
    :customBgImg="bgImage"
    :customSpacNum="11"
    :numWidth="33"
    :numHeight="47"
    :during="5000"
>
</nut-countup>
```
```javascript
export default {
    data() {
        return {
            customNumber: 618, 
            bgImage: 'https://img10.360buyimg.com/imagetools/jfs/t1/133024/3/2251/2646/5ee7549aE8dc02d7e/de6901b6c72db396.png'
        };
    },
    methods: {
        run() {
            let timer = null;
            timer = setInterval(() => {
                this.customNumber = Math.floor(Math.random() * (700 - 100 + 1) + 100);
            }, 5000);
        }
    },
    mounted() {
        this.run();
    }
};
```


## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| initNum | 初始数字 | Number | 0
| endNum | 结束数字 | Number | 0
| speed | 间隔数字，目前仅支持基本用法 | Number | 1
| toFixed | 保留小数点后几位 | Number | 以传入的数字为准
| startFlag | 触发数字滚动的标识 | Boolean | true
| during | 滚动一次运行时间 | Number | 1000
| numWidth | 数字宽度，常用于自定义无缝滚动 | Number | 20
| numHeight | 数字高度，常用于自定义无缝滚动 | Number | 20
| scrolling | 用于数字滚动展示 | Boolean | false
| custom | 用于自定义图片数字滚动 | Boolean | false
| customChangeNum | 要变化的数字（用于自定义图片,initNum\endNum在此无效） | Number | 1
| customBgImg | 自定义图片（建议使用雪碧图实现） | - | -
| customSpacNum | 图片中数字之间可能会存在间距 | Number | 0






## Event

| 字段 | 说明 | 回调参数
|----- | ----- | -----
| scroll-end | 滚动结束后回调函数 | - 
