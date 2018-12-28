# Skeleton 骨架屏

## 长方形

```html
    <skeleton-square width="200px"  ></skeleton-square>

```

## 圆形

```html
    <skeleton-circle  diameter="50px"></skeleton-circle>

```

## 横向排列

```html
<row padding="15px 10px 0 ">

    <skeleton-square width="200px"  ></skeleton-square>
    <skeleton-square width="50px" margin="0 0 0 40px"></skeleton-square>
    <skeleton-square width="50px"  margin="0 0 0 10px"></skeleton-square>
</row>

```

## 纵向排列

```html
 <column>
        <skeleton-square width="275px" :count="2" margin="5px 10px 5px 10px"></skeleton-square>
        <skeleton-square width="100px"    margin="5px 10px 5px 10px"></skeleton-square>
</column>
```

##  layout（row|column） Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| width | 宽度 | String | -
| padding | 填充间距 | String | -


## basic（square|circle）Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| width | 宽度 | String | -
| margin | 外部间距 | String | -