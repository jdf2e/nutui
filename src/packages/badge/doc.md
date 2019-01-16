# Badge 徽标

出现在图标或文字右上角的红色圆点、数字或者文字，表示有新内容或者待处理的信息。

## 基本用法

```html
<nut-badge 
    :value="9" 
    class="item"
>
    <div class="demo-svg"></div>
</nut-badge>

<nut-badge 
    :value="9" 
    class="item"
>
    购物车
</nut-badge>

<nut-badge 
    :value="9" 
    class="item"
>
    <nut-button>
        购物车
    </nut-button>
</nut-badge>
```

## Max用法

```html
<nut-badge 
    :value="200" 
    :max="99" 
    class="item"
>
    <div class="demo-svg"></div>
</nut-badge>

<nut-badge 
    :value="200" 
    :max="99" 
    class="item"
>
    购物车
</nut-badge>

<nut-badge 
    :value="200" 
    :max="99" 
    class="item"
>
    <nut-button>
        购物车
    </nut-button>
</nut-badge>
```

## 文字用法

```html
<nut-badge 
    value="new" 
    class="item"
>
    <div class="demo-svg"></div>
</nut-badge>

<nut-badge 
    value="new" 
    class="item"
>
    购物车
</nut-badge>

<nut-badge 
    value="new" 
    :max="99" 
    class="item"
>
    <nut-button>
        购物车
    </nut-button>
</nut-badge>
```

## 小圆点

```html
<nut-badge 
    :isDot="true" 
    class="item"
>
    <div class="demo-svg"></div>
</nut-badge>

<nut-badge 
    :isDot="true" 
    class="item"
>
    文字内容
</nut-badge>

<nut-badge 
    :isDot="true" 
    :max="99" 
    class="item"
>
    <nut-button>
        购物车
    </nut-button>
</nut-badge>
```

## 自定义位置

```html
<nut-badge 
    :value="200" 
    top="5px" 
    right="10px" 
    class="item"
>
    <div class="demo-svg">
    </div>
</nut-badge>
```


## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| value | 显示的内容 | String | -
| max | value为数值时，最大值 | Number | 10000
| zIndex | 徽标的z-index值 | Number | 10
| isDot | 是否为小点 | Boolean | false
| hidden | 是否隐藏 | Boolean | false
| top   | 上下偏移量，支持单位设置，可设置为：5px、5rem等 | String | 0
| left  | 左右偏移量，支持单位设置，可设置为：5px、5rem等 | String | 0
