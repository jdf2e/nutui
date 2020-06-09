# Button 按钮

## 基本用法 

按钮状态
```html
    <div class="btn-state">
      <nut-button block>默认状态</nut-button>
      <nut-button block>点击状态</nut-button>
      <nut-button disabled block>不可点击状态</nut-button>
    </div>
```
```scss
.btn-state {
  button {
    margin-bottom: 10px;
  }
}
```
按钮尺寸
```html
    <div class="btn-size">
      <nut-button size="big">大号按钮</nut-button>
      <nut-button size="middle">中号按钮</nut-button>
      <nut-button size="small">小号按钮</nut-button>
    </div>
```
底部分栏按钮
```html
    <div class="btn-size two">
      <nut-button size="middle" type="bottom">按钮A</nut-button>
      <nut-button size="middle">按钮B</nut-button>
    </div>
    <div class="btn-size three">
      <nut-button size="middle" type="bottom">按钮A</nut-button>
      <nut-button size="middle" type="bottom">按钮B</nut-button>
      <nut-button size="middle" type="bottom">按钮C</nut-button>
    </div>
    <div class="btn-size four">
      <nut-button size="middle" type="bottom">按钮A</nut-button>
      <nut-button size="middle" type="bottom">按钮B</nut-button>
      <nut-button size="middle" type="bottom">按钮C</nut-button>
      <nut-button size="middle" type="bottom">更多</nut-button>
    </div>
```
```scss
.btn-state {
  button {
    margin-bottom: 10px;
  }
}
.btn-size {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  margin-top: 24px;
  &.two {
    button {
      width: 168px;
    }
  }
  &.three {
    button {
      width: 109px;
    }
  }
  &.four {
    button {
      width: 79px;
    }
    .middle {
      padding: 0;
    }
  }
}
```
常规按钮

```html
<nut-button 
  @click="clickHandler"
  :disabled='disabled'
>
  去结算
</nut-button>

<nut-button 
  disabled
>
  去结算（disabled）
</nut-button>
```

```javascript
export default {
    data() {
        return {
            disabled: false
        };
    },
    methods: {
        clickHandler(e) {
            // alert("我点击了按钮");
            console.log(e, "我点击了按钮");
            this.disabled = true;
            setTimeout(() => {
                this.disabled = false;
            }, 2000);
        }
    }
};
```

常规按钮-小

```html
<nut-button 
  size="small"
>
  去结算
</nut-button>

<nut-button 
  size="small" 
  disabled
>
  去结算（disabled）
</nut-button>
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
  size="small"
>
  确认收货
</nut-button>

<nut-button 
  type="gray" 
  shape="circle" 
  size="small"
>
  查看物流
</nut-button>

<nut-button 
  type="default" 
  shape="circle" 
  size="small"
>
  再次购买
</nut-button>

<nut-button 
  type="light" 
  shape="circle" 
  size="small"
>
  降价通知
</nut-button>
```

圆角按钮-标签Button

```html
<nut-button
  type="primary" 
  shape="circle" 
  size="small"
>
  京东快递
</nut-button>

<nut-button 
  type="lightred" 
  shape="circle" 
  size="small"
>
  好评 6.6万
</nut-button>

<nut-button 
  type="actived" 
  shape="circle" 
  icon="tick" 
  size="small"
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
  size="small"
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
  size="small"
>
  象牙白
</nut-button>

<nut-button 
  type="light" 
  shape="circle" 
  size="small"
>
  皓月灰
</nut-button>

<nut-button 
  type="dashed" 
  shape="circle" 
  size="small"
>
  晶钻蓝
</nut-button>
```

自定义颜色

```html
<nut-button 
  type="actived" 
  shape="circle" 
  size="small" 
  color="#fff"
>
  象牙白
</nut-button>

<nut-button 
  type="primary" 
  shape="circle" 
  size="small" 
  color="rgb(0,0,0)"
>
  象牙白
</nut-button>

<nut-button 
  type="actived" 
  shape="circle" 
  icon="tick" 
  color="rgb(0,0,0)" 
  size="small"
>
</nut-button>

<nut-button 
  type="actived" 
  shape="circle" 
  icon="tick" 
  color="rgb(0,0,0)" 
  size="small"
>
  全部 100万
</nut-button>
      
```


## Prop

| 字段  | 说明                                                                                     | 类型    | 默认值 |
| ----- | ---------------------------------------------------------------------------------------- | ------- | ------ |
| type  | 按钮类型，可选类型包含：空/bottom/red/gray/light/lightred/primary/default/actived/dashed | String  | -      |
| block | 是否为通栏                                                                               | Boolean | false  |
| size  | big /middle/small                                                                      | String  | big |
| shape | 形状配置，可选类型：空、circle                                                           | String  | -      |
| icon  | 按钮前的图标，参考Icon组件                                                               | String  | -      |
| color | 自定义颜色，包含文字与图片颜色                                                           | String  | -      |
