# Skeleton 骨架屏

在页面上待加载区域填充灰色的占位图，本质上是界面加载过程中的过渡效果。

## 长方形

```html
<skeleton-square 
    width="200px"
>
</skeleton-square>
```

## 圆形

```html
<skeleton-circle 
    diameter="50px"
>
</skeleton-circle>
```

## 横向排列

```html
<row  padding="15px 10px 0">
    <skeleton-square 
        width="200px"
    ></skeleton-square>
    <skeleton-square 
        width="50px" 
        margin="0 0 0 40px"
    ></skeleton-square>
    <skeleton-square 
        width="50px" 
        margin="0 0 0 10px"
    ></skeleton-square>
</row>
```

## 纵向排列

```html
<column>
    <skeleton-square 
        width="275px" 
        :count="2" 
        margin="5px 10px 5px 10px"
    ></skeleton-square>
    <skeleton-square 
        width="100px" 
        margin="5px 10px 5px 10px"
    ></skeleton-square>
</column>
```

## 自定义

``` html
<nut-skeleton class="my-skeleton">
    <h4>基础样式</h4>
    <column padding="0px 16px">
    <skeleton-square margin="0 0 10px 0" width="350px"></skeleton-square>
    <skeleton-square margin="0 0 10px 0" width="300px"></skeleton-square>
    <skeleton-square margin="0 0 10px 0" width="300px"></skeleton-square>
    </column>
    <row padding="0px 16px">
    <skeleton-square width="200px"></skeleton-square>
    <skeleton-square width="50px" margin="0 0 0 40px"></skeleton-square>
    <skeleton-square width="50px" margin="0 0 0 10px"></skeleton-square>
    </row>
    <h4>显示头像</h4>
    <row padding="0px 16px">
    <skeleton-circle diameter="50px"></skeleton-circle>
    <column>
        <skeleton-square width="275px" :count="2" margin="5px 10px 5px 10px"></skeleton-square>
        <skeleton-square width="200px" margin="5px 10px 5px 10px"></skeleton-square>
    </column>
    </row>
    <row padding="0 16px">
    <skeleton-circle diameter="50px"></skeleton-circle>
    <column>
        <skeleton-square width="275px" :count="2" margin="5px 10px 5px 10px"></skeleton-square>
        <skeleton-square width="100px" margin="5px 10px 5px 10px"></skeleton-square>
    </column>
    </row>
    <h4>自定义</h4>
    <row padding="0 16px">
    <skeleton-square width="75px" height="75px"></skeleton-square>
    <column padding="0 0 0 0">
        <skeleton-square width="260px" height="10px" margin="0 0px 5px 10px"></skeleton-square>
        <skeleton-square width="100px" height="7.5px" margin="5px 10px 5px 10px"></skeleton-square>
        <skeleton-square width="275px" backColor="#ffffff" :count="2"></skeleton-square>
        <skeleton-square width="50px" margin="0 10px 5px 10px"></skeleton-square>
    </column>
    </row>
    <row padding="0 16px">
    <skeleton-square width="30px" height="30px" v-for="i in 5" :key="i" margin="15px 15px 0 0"></skeleton-square>
    </row>
</nut-skeleton>
```

## Prop

layout（row|column）

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| width | 宽度 | String | -
| padding | 填充间距 | String | -

basic（square|circle）

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| width | 宽度 | String | -
| margin | 外部间距 | String | -