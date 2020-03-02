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

## 关闭图标

设置closeable属性后，会在弹出层的右上角显示关闭图标，并且可以通过close-icon属性自定义图标，使用close-icon-position属性可以自定义图标位置

```html
<nut-popup position="bottom" closeable  close-icon="tick" v-model="showCloseIcon" :style="{ height: '20%' }" close-icon-position="top-left"></nut-popup>
```

## 圆角弹窗

设置 round 属性后，弹窗会根据弹出位置添加不同的圆角样式

```html
<nut-popup v-model="show" round position="bottom" :style="{ height: '20%' }" />
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
| closeable  | 是否显示关闭图标                        | Boolean  | false     |
| close-icon | 关闭图标名称                  | string  | cross     |
| close-icon-position | 关闭图标位置，可选值为top-left bottom-left bottom-right | string  | top-right  |
| overlay-class | 自定义遮罩层类名 | string  |   |
| overlay-style | 自定义遮罩层样式 | object  |   |
| lock-scroll | 是否锁定背景滚动 | boolean  |  true |
| close-on-click-overlay	 | 是否在点击遮罩层后关闭 | boolean  |  true |
| get-container | 指定挂载节点 | string   |   |


## Event

| 事件名       | 说明                                     |  
| ---------- | ---------------------------------------- |  
| click    |	点击弹出层时触发	                     | 
| open    |		打开弹出层时触发                     | 
| close    |	关闭弹出层时触发	                     | 
| opened    |	打开弹出层且动画结束后触发	                     | 
| closed    |	关闭弹出层且动画结束后触发	                     | 
| click-overlay    |	点击遮罩层时触发	                     | 
 