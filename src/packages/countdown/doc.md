# CountDown 倒计时

## 基础用法

```html
<nut-countdown 
    :end-time="end"  
>
</nut-countdown>
```

显示天

```html
<nut-countdown 
    :end-time="end" 
    show-days 
>
</nut-countdown>
```

以服务端的时间为准

```html
<nut-countdown 
    :start-time="serverTime"
    :end-time="end" 
    show-days 
>
</nut-countdown>
```

显示为 天时分秒

```html
<nut-countdown 
    show-days 
    show-plain-text 
    :end-time="end" 
>
</nut-countdown>
```

异步更新结束时间

```html
<nut-countdown 
    show-days 
    show-plain-text 
    :end-time="asyncEnd" 
>
</nut-countdown>
```

控制开始和暂停的倒计时

```html
<nut-countdown 
    :end-time="end" 
    :paused="paused" 
>
</nut-countdown>
```

## Prop

| 字段 | 说明 | 类型 | 默认值
| ----- | ----- | ----- | -----
| start-time | 开始时间 | String, Number | Date.now()
| end-time | 结束时间 | String, Number | Date.now()
| show-days | 是否显示天 | Boolean | false
| show-plain-text | 显示为纯文本 | Boolean | false
| paused | 是否暂停 | Boolean | false


## Event

| 字段 | 说明 | 回调参数
| ----- | ----- | ----- 
| on-end | 倒计时结束时 | 剩余时间戳
| on-paused | 暂停时 | 剩余时间戳
| on-restart | 暂停时 | 剩余时间戳