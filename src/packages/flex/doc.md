# Flex 布局

## 基本用法

```html
<nut-row>
    <nut-col :span="12">
        <div class="flex-content">span:12</div>
    </nut-col>
    <nut-col :span="12">
        <div class="flex-content flex-content-light">span:12</div>
    </nut-col>
</nut-row>
<nut-row>
    <nut-col :span="8">
        <div class="flex-content">span:8</div>
    </nut-col>
    <nut-col :span="8">
        <div class="flex-content flex-content-light">span:8</div>
    </nut-col>
    <nut-col :span="8">
        <div class="flex-content">span:8</div>
    </nut-col>
</nut-row>
<nut-row>
    <nut-col :span="6">
        <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
        <div class="flex-content flex-content-light">span:6</div>
    </nut-col>
    <nut-col :span="6">
        <div class="flex-content">span:6</div>
        </nut-col>
    <nut-col :span="6">
        <div class="flex-content flex-content-light">span:6</div>
    </nut-col>
</nut-row>
<nut-row>
    <nut-col :span="4">
        <div class="flex-content">span:4</div>
    </nut-col>
    <nut-col :span="4">
        <div class="flex-content flex-content-light">span:4</div>
    </nut-col>
    <nut-col :span="4">
        <div class="flex-content">span:4</div>
    </nut-col>
    <nut-col :span="4">
        <div class="flex-content flex-content-light">span:4</div>
    </nut-col>
    <nut-col :span="4">
        <div class="flex-content">span:4</div>
    </nut-col>
    <nut-col :span="4">
        <div class="flex-content flex-content-light">span:4</div>
    </nut-col>
</nut-row>

```

## 设置元素间距

```html
<nut-row :gutter="10">
    <nut-col :span="6">
        <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
        <div class="flex-content flex-content-light">span:6</div>
    </nut-col>
    <nut-col :span="6">
        <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
        <div class="flex-content flex-content-light">span:6</div>
    </nut-col>
</nut-row>
            
```

## Flex布局

### wrap（是否换行）

```html
<nut-row type="flex" flexWrap="nowrap" :gutter="10">
    <nut-col :span="6">
        <div class="flex-content">1</div>
    </nut-col>
    <nut-col :span="6">
        <div class="flex-content flex-content-light">2</div>
    </nut-col>
</nut-row>
<nut-row type="flex" flexWrap="wrap" :gutter="10">
    <nut-col :span="6">
        <div class="flex-content">1</div>
    </nut-col>
    <nut-col :span="6">
        <div class="flex-content flex-content-light">2</div>
    </nut-col>
</nut-row>
<nut-row type="flex" flexWrap="reverse" :gutter="10">
    <nut-col :span="6">
        <div class="flex-content">1</div>
    </nut-col>
    <nut-col :span="6">
        <div class="flex-content flex-content-light">2</div>
    </nut-col>
</nut-row>

```

### justify（主轴方向）

```html
<nut-row type="flex">
    <nut-col :span="6">
        <div class="flex-content">start</div>
    </nut-col>
</nut-row>
<nut-row type="flex" justify="center">
    <nut-col :span="6">
        <div class="flex-content">center</div>
    </nut-col>
</nut-row>
<nut-row type="flex" justify="end">
    <nut-col :span="6">
        <div class="flex-content">end</div>
    </nut-col>
</nut-row>
<nut-row type="flex" justify="space-between">
    <nut-col :span="6">
        <div class="flex-content">between</div>
    </nut-col>
</nut-row>
<nut-row type="flex" justify="space-around">
    <nut-col :span="6">
        <div class="flex-content">around</div>
    </nut-col>
</nut-row>

```

### align（侧轴方向）

```html
<nut-row type="flex" gutter="10" align="flex-start">
    <nut-col :span="12">
        <div class="flex-content flex-content-light">顶部对齐 - flex-start</div>
    </nut-col>
</nut-row>
<nut-row type="flex" gutter="10" align="center">
    <nut-col :span="12">
        <div class="flex-content flex-content-light">居中对齐 - center</div>
    </nut-col>
</nut-row>
<nut-row type="flex" gutter="10" align="flex-end">
    <nut-col :span="12">
        <div class="flex-content flex-content-light">底部对齐 - flex-end</div>
    </nut-col>
</nut-row>

```

## 分栏偏移

```html
<nut-row type="flex">
    <nut-col :offset="6" span="6">
        <div class="flex-content">offset:6</div>
    </nut-col>
    <nut-col :span="6">
        <div class="flex-content flex-content-light">span:6</div>
    </nut-col>
    <nut-col :span="6">
        <div class="flex-content">span:6</div>
    </nut-col>
</nut-row>
<nut-row type="flex">
    <nut-col span="6">
        <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :offset="8" :span="6">
        <div class="flex-content flex-content-light">offset:8</div>
    </nut-col>
    <nut-col :span="6">
        <div class="flex-content">span:6</div>
    </nut-col>
</nut-row>
<nut-row type="flex">
    <nut-col span="6" :offset="6">
        <div class="flex-content">offset:6</div>
    </nut-col>
    <nut-col :span="6" :offset="6">
        <div class="flex-content">offset:6</div>
    </nut-col>
</nut-row>

```

## Prop

### row

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| type | 布局方式，可选值为flex | String | -
| gutter | 列元素之间的间距（单位为px） | String/Number | -
| tag | 自定义元素标签 | String | div
| justify | Flex 主轴对齐方式，可选值为 start end center space-around space-between | String | start
| align | Flex 交叉轴对齐方式，可选值为 flex-start center flex-end | String | flex-start
| flexWrap | Flex是否换行，可选值为 nowrap wrap reverse | String | nowrap

### col

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| span | 列元素宽度 | String/Number | -
| offset | 列元素偏移距离 | String/Number | - 

