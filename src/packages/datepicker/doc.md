# DatePicker 日期选择

## 基本用法

日期选择（不显示中文）

```html
<nut-datepicker 
    :is-visible="isVisible"
    type="date"
    title="请选择日期" 
    :is-show-chinese="false"
    @close="switchPicker('isVisible')"
    @choose="setChooseValue"
>
</nut-datepicker>
```

日期选择（限制开始结束时间）

```html
<nut-datepicker 
    :is-visible="isVisible1"
    title="请选择日期" 
    type="date"
    startDate="1991-11-10"
    endDate="2019-10-05"
    @close="switchPicker('isVisible1')"
    @choose="setChooseValue1"
>
</nut-datepicker>
```

日期时间选择（有默认值，限制开始结束时间，限制到时分）

```html
<nut-datepicker 
    :is-visible="isVisible2"
    title="请选择日期时间" 
    type="datetime"
    startDate="2000-11-10 12:08"
    endDate="2030-10-05 10:04"
    defaultValue="2018-11-02 11:08"
    @close="switchPicker('isVisible2')"
    @choose="setChooseValue2"
>
</nut-datepicker>
```

时间选择（12小时制）

```html
<nut-datepicker 
    :is-visible="isVisible3" 
    type="time"
    title="请选择时间" 
    @close="switchPicker('isVisible3')"
    @choose="setChooseValue3"
    :is-use12-hours="true"
    defaultValue="01:07"
    :is-am="false"
>
</nut-datepicker>
```

时间选择（限制开始结束小时）

```html
<nut-datepicker 
    :is-visible="isVisible4"
    type="time"
    title="请选择时间" 
    startHour="8"
    endHour="18"
    defaultValue="09:06"
    @close="switchPicker('isVisible4')"
    @choose="setChooseValue4"
>
</nut-datepicker>
```

时间选择（分钟数递增步长设置）

```html
<nut-datepicker 
    :is-visible="isVisible5"
    type="time"
    title="请选择时间" 
    :minute-step="5"
    defaultValue="10:30"
    @close="switchPicker('isVisible5')"
    @choose="setChooseValue5"
>
</nut-datepicker>
```

```javascript
export default {
    data() {
        return {
            isVisible: false,
            isVisible1: false,
            isVisible2: false,
            isVisible3: false,
            isVisible4: false,
            isVisible5: false,
            date: null,
            date1: null,
            datetime: '2018-11-02 11:08',
            time: '01:07',
            time1: '09:06',
            time2: '10:30',
            amOrPm: 'PM'
        };
    },
    methods: {
        switchPicker(param) {
            this[`${param}`] = !this[`${param}`];
        },
        setChooseValue(param) {
            this.date = param[3];
        },
        setChooseValue1(param) {
            this.date1 = param[3];
        },
        setChooseValue2(param) {
            this.datetime = param[5];
        },
        setChooseValue3(param) {
            this.amOrPm = param[2] == '上午' ? 'AM' : 'PM';
            this.time = param[3];
        },
        setChooseValue4(param) {
            this.time1 = param[2];
        },
        setChooseValue5(param) {
            this.time2 = param[2];
        }
    }
}
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| type | 类型，日期'date'， 日期时间'datetime'，时间'time' | String | 'date'
| isVisible | 是否可见 | Boolean | false
| isUse12Hours | 是否十二小时制度，只限类型为'time'时使用 | Boolean | false
| isAm | 是否上午 | Boolean | true
| minuteStep | 分钟步进值 | String | 1
| isShowChinese | 每列是否展示中文 | Boolean | true
| title | 设置标题 | String | null
| defaultValue | 默认值 | String | null
| startDate | 开始日期 | String | '2000-01-01'
| endDate | 结束日期 | String | 今天
| startHour | 开始小时 | Number | 1
| endHour | 结束小时 | Number | 23

## Event

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| choose | 点击确认按钮时候回调 | 返回日期时间 
| close | 关闭时触发 | -