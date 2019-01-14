# Button 按钮

## 基本用法 

常规按钮

```html
<nut-button 
  @click="clickHandler"
>
  去结算
</nut-button>

<nut-button 
  disabled
>
  去结算（disabled）
</nut-button>
```

常规按钮-小

```html
<nut-button 
  small
>
  去结算
</nut-button>

<nut-button 
  small 
  disabled
>
  去结算（disabled）
</nut-button>
```

常规按钮组

```html
<nut-button-group>
  <nut-button 
    type="light"
  >
    重置
  </nut-button>
  <nut-button>
    确定
  </nut-button>
</nut-button-group>
```

通栏按钮

```html
<nut-button 
  block
>
  登录
</nut-button>
```

通栏按钮-圆角

```html
<nut-button 
  block 
  shape="circle"
>
  登录
</nut-button>
```

圆角按钮-常规Button

```html
<nut-button 
  type="red" 
  shape="circle" 
  small
>
  确认收货
</nut-button>

<nut-button 
  type="gray" 
  shape="circle" 
  small
>
  查看物流
</nut-button>

<nut-button 
  type="default" 
  shape="circle" 
  small
>
  再次购买
</nut-button>

<nut-button 
  type="light" 
  shape="circle" 
  small
>
  降价通知
</nut-button>
```

圆角按钮-标签Button

```html
<nut-button
  type="primary" 
  shape="circle" 
  small
>
  京东快递
</nut-button>

<nut-button 
  type="lightred" 
  shape="circle" 
  small
>
  好评 6.6万
</nut-button>

<nut-button 
  type="actived" 
  shape="circle" 
  icon="tick" 
  small
>
  全部 100万
</nut-button>
```

图标按钮-小

```html 
<nut-button 
  type="actived" 
  shape="circle" 
  icon="tick" 
  small
>
</nut-button>
```

图标按钮-大

```html 
<nut-button 
  type="actived" 
  shape="circle" 
  icon="tick"
>
</nut-button>
```

圆角按钮-商品属性选择Button

```html
<nut-button 
  type="actived" 
  shape="circle" 
  small
>
  象牙白
</nut-button>

<nut-button 
  type="light" 
  shape="circle" 
  small
>
  皓月灰
</nut-button>

<nut-button 
  type="dashed" 
  shape="circle" 
  small
>
  晶钻蓝
</nut-button>
```

自定义颜色

```html
<nut-button 
  type="actived" 
  shape="circle" 
  small 
  color="#fff"
>
  象牙白
</nut-button>

<nut-button 
  type="primary" 
  shape="circle" 
  small 
  color="rgb(0,0,0)"
>
  象牙白
</nut-button>

<nut-button 
  type="actived" 
  shape="circle" 
  icon="tick" 
  color="rgb(0,0,0)" 
  small
>
</nut-button>

<nut-button 
  type="actived" 
  shape="circle" 
  icon="tick" 
  color="rgb(0,0,0)" 
  small
>
  全部 100万
</nut-button>
      
```

```javascript
export default {
  methods: {
      clickHandler() {
        alert('我点击了按钮');
      }
  }
};
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| type | 按钮类型，可选类型包含：空、red、gray、light、lightred、primary、default、actived、dashed | String | -
| block | 是否为通栏 | Boolean | false
| small | 是否为小号组件 | Boolean | false
| shape | 形状配置，可选类型：空、circle | String | -
| icon  | 按钮前的图标，参考Icon组件 | String | -
| color | 自定义颜色，包含文字与图片颜色 | String | -
