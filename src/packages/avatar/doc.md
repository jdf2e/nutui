# Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。

## 基本用法

内置 **smal** / **normal** / **large** 三种尺寸规格

```html
<nut-avatar size="large"></nut-avatar>
<nut-avatar size="normal"></nut-avatar>
<nut-avatar size="small"></nut-avatar>
```

## 修改形状类型

```html
<nut-avatar size="large" shape="square"></nut-avatar>
<nut-avatar size="normal" shape="square"></nut-avatar>
<nut-avatar size="small" shape="square"></nut-avatar>
```

## 修改背景色

```html
<nut-avatar bg-color="#f0250f"></nut-avatar>
```

## 设置头像的文本内容

```html
<nut-avatar size="large" bg-icon>U</nut-avatar>
```

## 设置背景图片
```html
<nut-avatar
  bg-icon
  bg-image="http://img30.360buyimg.com/uba/jfs/t1/84318/29/2102/10483/5d0704c1Eb767fa74/fc456b03fdd6cbab.png"
></nut-avatar>
```

## 设置头像ICON图标
```html
<nut-avatar
  bg-icon="http://img10.360buyimg.com/uba/jfs/t1/69001/30/2126/550/5d06f947Effd02898/95f18e668670e598.png"
></nut-avatar>
```

## 点击头像有触发事件
```html
<nut-avatar @active-avatar="activeAvatar"></nut-avatar>
```


## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| bg-color | 设置头像背景色 | String | #eee
| size | 设置头像的大小，提供三种：large /normal/small | String | normal
| shape | 设置头像的形状，默认是圆形，可以设置为square方形 | String | round
| bg-image | 设置头像的背景图片 | String | --
| bg-icon | 设置头像的icon图标 | String | 默认based64格式的头像图片

## slot
| 字段 | 说明 |
|--|--|
|--|用户自定义icon或者文字|


## Event

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| active-avatar | 点击头像触发事件 | -- 