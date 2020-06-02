# Tag 标签

## 基本用法 

常规标签

```html
<nut-tag 
  @click="clickHandler"
  :disabled='disabled'
>
  标签
</nut-tag>

<nut-tag 
  disabled
>
  标签
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
            console.log(e, "我点击了标签");
            this.disabled = true;
            setTimeout(() => {
                this.disabled = false;
            }, 2000);
        }
    }
};
```

常规标签

```html
<nut-tag>
  标签
</nut-tag>

<nut-tag 
  disabled
>
  标签
</nut-tag>
```

标签-颜色(枚举)

默认京东红，可选颜色：jc-blue，orange，yellow，green，blue，purple，禁用状态 disabled

```html
<nut-tag circle>标签</nut-tag>
<nut-tag circle color="jc-blue">标签</nut-tag>
<nut-tag circle color="orange">标签</nut-tag>
<nut-tag circle color="yellow">标签</nut-tag>
<nut-tag circle color="green">标签</nut-tag>
<nut-tag circle color="blue">标签</nut-tag>
<nut-tag circle color="purple">标签</nut-tag>
<nut-tag circle disabled>标签</nut-tag>
```

标签-圆角

```html
<nut-tag circle> 登录 </nut-tag>
```

标签-空心

```html
<nut-tag hollow> 登录 </nut-tag>
```

标签型号-大小

```html
<nut-tag>标签</nut-tag>
<nut-tag size="middle">标签</nut-tag>
<nut-tag @click="clickHandler" size="big">标签</nut-tag>
```

## Prop

| 字段  | 说明                                                                                      | 类型    | 默认值 |
| ----- | ----------------------------------------------------------------------------------------- | ------- | ------ |
| color  | 按钮类型，可选类型包含：[red(默认), jc-blue, green, orange, yellow, blue, purple] | String  | red     |
| disabled | 是否禁用状态                                                                                | Boolean | false  |
| circle | 是否为圆角标签                                                                            | Boolean | false  |
| hollow | 是否为空心标签                                                          | Boolean  | false      |
| size  | 按钮型号，可选型号 small 默认，middle， big                                                            | String  | small     |
