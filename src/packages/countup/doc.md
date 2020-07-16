# CountUp 数字滚动

## 基本用法

```html
<nut-countup :init-num='0' :end-num='200'></nut-countup>

<nut-countup :init-num='150.00' :end-num='0.00' :speed='2.62' :to-fixed='2'></nut-countup>

<nut-countup :init-num='1000.00' :end-num='0.00' :speed='6.3' :start-flag='startNum' :to-fixed='2'></nut-countup>
```

## 数字滚动

```html
<nut-countup :scrolling="true" :init-num='17.618' :during="600"></nut-countup>
```

## 自定义数字图片展示

```html
<nut-countup
    :custom-change-num="customNumber"
    :custom-bg-img="bgImage"
    :custom-spac-num="11"
    :num-width="33"
    :num-height="47"
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

## 抽奖

```html
<nut-countup
    type="machine"
    :custom-change-num="customNumber"
    :custom-bg-img="bgImage"
    :custom-spac-num="11"
    :num-width="33"
    :num-height="47"
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
| init-num | 初始数字 | Number | 0
| end-num | 结束数字 | Number | 0
| speed | 间隔数字，目前仅支持基本用法 | Number | 1
| to-fixed | 保留小数点后几位 | Number | 以传入的数字为准
| start-flag | 触发数字滚动的标识 | Boolean | true
| during | 滚动一次运行时间 | Number | 1000
| num-width | 数字宽度，常用于自定义无缝滚动 | Number | 20
| num-height | 数字高度，常用于自定义无缝滚动（抽奖功能必传） | Number | 20
| scrolling | 用于数字滚动展示 | Boolean | false
| custom | 用于自定义图片数字滚动 | Boolean | false
| custom-change-num | 要变化的数字（用于自定义图片,initNum\endNum在此无效） | Number | 1
| custom-bg-img | 自定义图片（建议使用雪碧图实现，使用抽奖功能必须使用雪碧图） | - | -
| custom-spac-num | 图片中数字之间可能会存在间距 | Number | 0
| type | 使用抽奖功能必穿，“machine” | string | ''
| machine-prize-num | 奖项数，一共多少个奖品，必传 | number | 4
| machine-num | 抽奖位数，即几个图标，必传 | number | 3
| machine-prize-level | 中奖图标,图标在雪碧图中的位置 | number | 0
| machine-trun-more | 后面图标的滚动比前面多滚动次数 | number | 0

###### 说明：抽奖功能是根据图标的定位实现，需要传入雪碧图中单个图标的高度 num-height，




## Event

| 字段 | 说明 | 回调参数
|----- | ----- | -----
| scroll-end | 滚动结束后回调函数 | - 
