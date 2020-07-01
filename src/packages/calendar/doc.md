# Calendar 日历

## 基础样式

选择日期

```html
<nut-cell 
    :showIcon="true" 
    title="选择日期"
    :desc="date ? `${date} ${dateWeek}` : '请选择'"
    @click.native="openSwitch('isVisible')">
</nut-cell>
<nut-calendar
    :is-visible="isVisible"
    :default-value="date"
    @close="closeSwitch('isVisible')"
    @choose="setChooseValue"
    :start-date="`2019-10-11`"
    :end-date="`2020-11-11`"
    >
</nut-calendar>
```
```javascript
import Utils from '../../utils/date.js';
export default {
  data() {
    return {
      isVisible: false,
      date: null,
      dateWeek: null
    };
  },
  methods: {
    openSwitch(param) {
      this[`${param}`] = true;
    },

    closeSwitch(param) {
      this[`${param}`] = false;
    },

    setChooseValue(param) {
      this.date = param[3];
      this.dateWeek = param[4];
    }
  }
};
```

选择时间段

```html
<nut-cell 
    :showIcon="true"  
    title="选择时间段"
    :desc="date1 ? `${date1[0]}至${date1[1]}` : '请选择'"
    @click.native="openSwitch('isVisible1')">
</nut-cell>
<nut-calendar
    :is-visible="isVisible1"
    :default-value="date1"
    type="range"
    :start-date="`2019-12-22`"
    :end-date="`2021-01-08`"
    @close="closeSwitch('isVisible1')"
    @choose="setChooseValue1"
>
</nut-calendar>
```
```javascript
import Utils from '../../utils/date.js';
export default {
  data() {
    return {
      isVisible1: false,
      date1: ['2019-12-23', '2019-12-26']
    };
  },
  methods: {
    openSwitch(param) {
      this[`${param}`] = true;
    },

    closeSwitch(param) {
      this[`${param}`] = false;
    },

    setChooseValue1(param) {
      this.date1 = [...[param[0][3], param[1][3]]];
    }
  }
};
```

## 平铺样式

```html
<nut-calendar
    :poppable="false"
    :is-visible="isVisible2"
    :default-value="date2"
    :is-auto-back-fill="true"
    @choose="setChooseValue2"
    >
</nut-calendar>
```
```javascript
import Utils from '../../utils/date.js';
export default {
  data() {
    return {
      date2: '2020-07-08',
      isVisible2: true
    };
  },
  methods: {
    setChooseValue2(param) {
      this.date2 = param[3];
      console.log(this.date2);
    }
  }
};
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| type | 类型，日期选择'one'，区间选择'range' | String | 'one'
| is-visible | 是否可见 | Boolean | false
| poppable | 是否弹窗状态展示 | Boolean | true
| is-auto-back-fill | 自动回填,仅在poppable为true可用 | Boolean | false
| title | 显示标题 | String | ‘日期选择’
| default-value | 默认值，日期选择String格式，区间选择Array格式 | String / Array | null
| start-date | 开始日期， 如果不限制开始日期传null | String | 今天
| end-date | 结束日期，如果不限制结束日期传null | String | 距离今天365天


## Event

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| choose | 选择之后或是点击确认按钮触发 | 日期数组（包含年月日和星期） 
| close | 关闭时触发 | -
