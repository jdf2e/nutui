# Tag 按钮

## 基本用法 

常规按钮

```html
<nut-tag 
  @click="clickHandler"
  :disabled='disabled'
>
  去结算
</nut-tag>

<nut-tag 
  disabled
>
  去结算（disabled）
</nut-tag>
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
<nut-tag 
  small
>
  去结算
</nut-tag>

<nut-tag 
  small 
  disabled
>
  去结算（disabled）
</nut-tag>
```


通栏按钮

```html
<nut-tag 
  block
>
  登录
</nut-tag>
```

通栏按钮-圆角

```html
<nut-tag 
  block 
  shape="circle"
>
  登录
</nut-tag>
```

圆角按钮-常规Button

```html
<nut-tag 
  type="red" 
  shape="circle" 
  small
>
  确认收货
</nut-tag>

<nut-tag 
  type="gray" 
  shape="circle" 
  small
>
  查看物流
</nut-tag>

<nut-tag 
  type="default" 
  shape="circle" 
  small
>
  再次购买
</nut-tag>

<nut-tag 
  type="light" 
  shape="circle" 
  small
>
  降价通知
</nut-tag>
```

圆角按钮-标签Button

```html
<nut-tag
  type="primary" 
  shape="circle" 
  small
>
  京东快递
</nut-tag>

<nut-tag 
  type="lightred" 
  shape="circle" 
  small
>
  好评 6.6万
</nut-tag>

<nut-tag 
  type="actived" 
  shape="circle" 
  icon="tick" 
  small
>
  全部 100万
</nut-tag>
```

图标按钮-小

```html 
<nut-tag 
  type="actived" 
  shape="circle" 
  icon="tick" 
  small
>
</nut-tag>
```

图标按钮-大

```html 
<nut-tag 
  type="actived" 
  shape="circle" 
  icon="tick"
>
</nut-tag>
```

圆角按钮-商品属性选择Button

```html
<nut-tag 
  type="actived" 
  shape="circle" 
  small
>
  象牙白
</nut-tag>

<nut-tag 
  type="light" 
  shape="circle" 
  small
>
  皓月灰
</nut-tag>

<nut-tag 
  type="dashed" 
  shape="circle" 
  small
>
  晶钻蓝
</nut-tag>
```

自定义颜色

```html
<nut-tag 
  type="actived" 
  shape="circle" 
  small 
  color="#fff"
>
  象牙白
</nut-tag>

<nut-tag 
  type="primary" 
  shape="circle" 
  small 
  color="rgb(0,0,0)"
>
  象牙白
</nut-tag>

<nut-tag 
  type="actived" 
  shape="circle" 
  icon="tick" 
  color="rgb(0,0,0)" 
  small
>
</nut-tag>

<nut-tag 
  type="actived" 
  shape="circle" 
  icon="tick" 
  color="rgb(0,0,0)" 
  small
>
  全部 100万
</nut-tag>
      
```


## Prop

| 字段  | 说明                                                                                      | 类型    | 默认值 |
| ----- | ----------------------------------------------------------------------------------------- | ------- | ------ |
| type  | 按钮类型，可选类型包含：空、red、gray、light、lightred、primary、default、actived、dashed | String  | -      |
| block | 是否为通栏                                                                                | Boolean | false  |
| small | 是否为小号组件                                                                            | Boolean | false  |
| shape | 形状配置，可选类型：空、circle                                                            | String  | -      |
| icon  | 按钮前的图标，参考Icon组件                                                                | String  | -      |
| color | 自定义颜色，包含文字与图片颜色                                                            | String  | -      |
