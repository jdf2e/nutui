# CountDown 倒计时

## 基础用法

```html
<nut-countdown 
    :endTime="end"  
>
</nut-countdown>
```

显示天

```html
<nut-countdown 
    :endTime="end" 
    showDays 
>
</nut-countdown>
```

以服务端的时间为准

```html
<nut-countdown 
    :startTime="serverTime"
    :endTime="end" 
    showDays 
>
</nut-countdown>
```

显示为 天时分秒

```html
<nut-countdown 
    showDays 
    showPlainText 
    :endTime="end" 
>
</nut-countdown>
```

控制开始和暂停的倒计时

```html
<nut-countdown 
    :endTime="end" 
    :paused="paused" 
>
</nut-countdown>
```

## Prop

| 字段 | 说明 | 类型 | 默认值
| ----- | ----- | ----- | -----
| startTime | 开始时间 | String, Number | Date.now()
| endTime | 结束时间 | String, Number | Date.now()
| showDays | 是否显示天 | Boolean | false
| showPlainText | 显示为纯文本 | Boolean | false
| paused | 是否暂停 | Boolean | false
| interval | 间隔时间 | Number | 1000