# Popup 弹出层

介绍  
弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示

## 基本功能

```html
<nut-cell isLink title="展示弹出层" :showIcon="true" @click.native="show= true">
</nut-cell>
<nut-popup :style="{ padding: '30px 50px' }" v-model="show">正文</nut-popup>
```

```javascript
export default {
  data() {
    return {
      show: false
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
```

## 弹出位置

通过 position 属性设置弹出位置，默认居中弹出，可以设置为 top、bottom、left、right

```html
<nut-popup v-model="show" position="top" :style="{ height: '20%' }" />
```

## 圆角弹窗

设置 round 属性后，弹窗会根据弹出位置添加不同的圆角样式

```html
<van-popup v-model="show" round position="bottom" :style="{ height: '20%' }" />
```

## API

| 字段       | 说明                                     | 类型    | 默认值 |
| ---------- | ---------------------------------------- | ------- | ------ |
| v-model    | 当前组件是否显示                         | boolean | -      |
| overlay    | 是否显示遮罩层                           | boolean | true   |
| position   | 弹出位置，可选值为 top bottom right left | string  | center |
| duration   | 动画时长，单位秒                         | Number  | -      |
| round      | 是否显示圆角                             | boolean | -      |
| transition | 动画类名，等价于 transtion 的 name 属性  | string  | -      |
