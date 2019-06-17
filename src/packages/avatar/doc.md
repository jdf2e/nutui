# Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。

## 基本用法

```html
<nut-avatar></nut-avatar>
```

## 设置背景色

```html
<nut-avatar bgColor="#87d068"></nut-avatar>
```


## 设置大小

```html
<nut-avatar :size="30"></nut-avatar>
```

## 设置头像的形状类型
```html
<nut-avatar shape="square"></nut-avatar>
```


## 设置头像的文本内容
```html
<nut-avatar :size="30" bgIcon="">U</nut-avatar>
```

## 设置头像右上角的徽标
```html
<nut-avatar :dot="13"></nut-avatar>
```
## 设置头像背景图片
```html
<nut-avatar 
bgIcon="" bgImage="http://img30.360buyimg.com/uba/jfs/t1/84318/29/2102/10483/5d0704c1Eb767fa74/fc456b03fdd6cbab.png">
</nut-avatar>
```

## 设置头像icon图标
```html
<nut-avatar bgIcon="http://img10.360buyimg.com/uba/jfs/t1/69001/30/2126/550/5d06f947Effd02898/95f18e668670e598.png">
</nut-avatar>
```


## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| bgColor | 设置头像背景色 | String | #eee
| size | 设置头像的大小，也就是宽和高，单位是px | Number | 40
| shape | 设置头像的形状，默认是圆形，可以设置为square方形 | String | --
| doc | 设置带徽标的头像，默认为0，为0时不显示徽标 | Number | 0
| bgImage | 设置头像的背景图片 | String | --
| bgIcon | 设置头像的icon图标 | String | --
