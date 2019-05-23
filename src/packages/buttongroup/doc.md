# ButtonGroup 按钮

## 基本用法

常规按钮组

```html
<nut-buttongroup>
  <nut-button 
    type="light"
  >
    重置
  </nut-button>
  <nut-button>
    确定
  </nut-button>
</nut-buttongroup>
```

圆角按钮组

```html
<nut-buttongroup 
  shape="circle"
>
  <nut-button 
    type="light"
  >
    重置
  </nut-button>
  <nut-button>
    确定
  </nut-button>
</nut-buttongroup>
```

页面底部功能，配合Badge使用

``` html
<nut-buttongroup 
  type="menu"
>
  <nut-button 
    type="light" 
    icon="action" 
    color="#f00"
  >
    关于
  </nut-button>
  <nut-button 
    type="light" 
    icon="more" 
    color="#f00"
  >
    更多
  </nut-button>
  <nut-button 
    type="light" 
    icon="search" 
    color="#f00"
  >
    关闭
  </nut-button>
  <nut-badge 
    value="2" 
    top="0.5rem" 
    right="2rem"
  >
    <nut-button 
      type="light" 
      icon="trolley" 
      color="#f00"
    >
      购物车
    </nut-button>
  </nut-badge>      
  <nut-button 
    type="light" 
    icon="tick" 
    color="#f00"
  >
    成功
  </nut-button>
</nut-buttongroup>
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| shape | 设置按钮组形状，可选值：circle、无 | String | 无
| type | 设置按钮样式，可选值为：menu、无 | String | 无
