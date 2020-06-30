# DatePicker 日期选择

## 选择年月日

每列不显示中文（年/月/日）

```html
<nut-cell 
    :showIcon="true"  
    title="每列不显示中文（年/月/日）"
    :desc="date ? date : '请选择'"
    @click.native="switchPicker('isVisible')">
</nut-cell>
<nut-datepicker
    :is-visible="isVisible"
    type="date"
    title="选择年月日"
    :is-show-chinese="false"
    @close="switchPicker('isVisible')"
    @choose="setChooseValue"
></nut-datepicker>
```
```javascript
export default {
  data() {
    return {
      isVisible: false,
      date: null
    };
  },
  methods: {
    switchPicker(param) {
      this[`${param}`] = !this[`${param}`];
    },
    setChooseValue(param) {
      this.date = param[3];
    }
  }
};
```

## 限制开始结束时间

```html
<nut-cell :showIcon="true" :isLink="true" @click.native="switchPicker('isVisible2')">
    <span slot="title">
    <label>日期时间选择</label>
    </span>
    <div slot="desc" class="selected-option">
    <span class="show-value">{{ datetime ? datetime : '请选择' }}</span>
    </div>
</nut-cell>
<nut-datepicker
    :is-visible="isVisible2"
    title="选择日期时间"
    type="datetime"
    startDate="2000-11-10 12:08"
    endDate="2030-10-05 10:04"
    defaultValue="2018-11-02 11:08"
    @close="switchPicker('isVisible2')"
    @choose="setChooseValue2"
></nut-datepicker>
```
```javascript
export default {
  data() {
    return {
      isVisible2: false,
      time: '01:07'
    };
  },
  methods: {
    switchPicker(param) {
      this[`${param}`] = !this[`${param}`];
    },
    setChooseValue2(param) {
      this.datetime = param[5];
    }
  }
};
```

## 选择时间

```html
<nut-cell :showIcon="true" :isLink="true" @click.native="switchPicker('isVisible3')">
    <span slot="title">
    <label>12时间制</label>
    </span>
    <div slot="desc" class="selected-option">
    <span class="show-value">{{ time ? `${time} ${amOrPm}` : '请选择' }}</span>
    </div>
</nut-cell>
<nut-datepicker
    :is-visible="isVisible3"
    type="time"
    title="选择时间"
    @close="switchPicker('isVisible3')"
    @choose="setChooseValue3"
    :is-use12-hours="true"
    defaultValue="01:07"
    :is-am="false"
></nut-datepicker>
```
```javascript
export default {
  data() {
    return {
      isVisible3: false,
      datetime: '2018-11-02 11:08',
      amOrPm: 'PM'
    };
  },
  methods: {
    switchPicker(param) {
      this[`${param}`] = !this[`${param}`];
    },
    setChooseValue3(param) {
      this.amOrPm = param[2] == '上午' ? 'AM' : 'PM';
      this.time = param[3];
    }
  }
};
```

## 限制开始结束小时

```html
<nut-cell :showIcon="true" :isLink="true" @click.native="switchPicker('isVisible4')">
    <span slot="title">
    <label>选择时间</label>
    </span>
    <div slot="desc" class="selected-option">
    <span class="show-value">{{ time1 ? time1 : '请选择' }}</span>
    </div>
</nut-cell>
<nut-datepicker
    :is-visible="isVisible4"
    type="time"
    title="选择时间"
    startHour="8"
    endHour="18"
    :default-value="time1"
    @close="switchPicker('isVisible4')"
    @choose="setChooseValue4"
    :is-set-second="true"
></nut-datepicker>
```
```javascript
export default {
  data() {
    return {
      isVisible4: false,
      time1: '09:06:02'
    };
  },
  methods: {
    switchPicker(param) {
      this[`${param}`] = !this[`${param}`];
    },
    setChooseValue4(param) {
      this.time1 = param[3];
    }
  }
};
```

## 分钟数递增步长设置

```html
<nut-cell :showIcon="true" :isLink="true" @click.native="switchPicker('isVisible5')">
    <span slot="title">
    <label>分钟数递增步长设置</label>
    </span>
    <div slot="desc" class="selected-option">
    <span class="show-value">{{ time2 ? time2 : '请选择时间' }}</span>
    </div>
</nut-cell>
<nut-datepicker
    :is-visible="isVisible5"
    type="time"
    title="选择时间"
    :minute-step="5"
    :default-value="time2"
    @close="switchPicker('isVisible5')"
    @choose="setChooseValue5"
></nut-datepicker>
```
```javascript
export default {
  data() {
    return {
      isVisible5: false,
      time2: '10:30'
    };
  },
  methods: {
    switchPicker(param) {
      this[`${param}`] = !this[`${param}`];
    },
    setChooseValue5(param) {
      this.time2 = param[2];
    }
  }
};
```


## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| type | 类型，日期'date'， 日期时间'datetime'，时间'time' | String | 'date'
| is-visible | 是否可见 | Boolean | false
| is-use12-hours | 是否十二小时制度，只限类型为'time'时使用 | Boolean | false
| is-am | 是否上午 | Boolean | true
| minute-step | 分钟步进值 | String | 1
| is-show-chinese | 每列是否展示中文 | Boolean | true
| title | 设置标题 | String | null
| default-value | 默认值 | String | null
| start-date | 开始日期 | String | '2000-01-01'
| end-date | 结束日期 | String | 今天
| start-hour | 开始小时 | Number | 1
| end-hour | 结束小时 | Number | 23
|is-set-second| 是否支持秒，仅限type类型为'time'时支持 | Boolean | false

## Event

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| choose | 点击确认按钮时候回调 | 返回日期时间 
| close | 关闭时触发 | -