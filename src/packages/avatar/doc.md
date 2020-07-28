# Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。

## 默认用法

size-num 为头像的大小，表示宽高；bg-image表示引入头像图片的路径

```html
<nut-avatar size-num="80" bg-image="https://img14.360buyimg.com/imagetools/jfs/t1/130112/36/5492/38449/5f1f964cEfd6f41bf/bec836b48b55bb00.jpg"></nut-avatar>
<nut-avatar size-num="60" bg-image="https://img14.360buyimg.com/imagetools/jfs/t1/130112/36/5492/38449/5f1f964cEfd6f41bf/bec836b48b55bb00.jpg"></nut-avatar>
<nut-avatar size-num="40" bg-image="https://img14.360buyimg.com/imagetools/jfs/t1/130112/36/5492/38449/5f1f964cEfd6f41bf/bec836b48b55bb00.jpg"></nut-avatar>
<nut-avatar size-num="32" bg-image="https://img14.360buyimg.com/imagetools/jfs/t1/130112/36/5492/38449/5f1f964cEfd6f41bf/bec836b48b55bb00.jpg"></nut-avatar>
```

## 带徽标的头像

支持slot，需引入badge组件，点击头像有触发事件

```html
<nut-avatar size-num="40" bg-image="https://img14.360buyimg.com/imagetools/jfs/t1/130112/36/5492/38449/5f1f964cEfd6f41bf/bec836b48b55bb00.jpg" @active-avatar="activeAvatar">
  <nut-badge :value="9"  :max="99" class="item" top="5px" right="10px" ></nut-badge>
</nut-avatar>
<nut-avatar size-num="32" bg-image="https://img14.360buyimg.com/imagetools/jfs/t1/130112/36/5492/38449/5f1f964cEfd6f41bf/bec836b48b55bb00.jpg" @active-avatar="activeAvatar">
    <nut-badge :isDot="true" top="5px" right="6px" ></nut-badge>
</nut-avatar>
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| size-num | 设置头像的大小，表示宽高尺寸，单位是px| String/Number | 20
| bg-image | 设置头像的背景图片路径地址 | String | --

## slot
| 字段 | 说明 |
|--|--|
|--|用户自定义徽标区域|


## Event

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| active-avatar | 点击头像触发事件 | -- 