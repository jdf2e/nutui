# TabBar

### Intro

Bottom navigation bar
### Install

``` javascript
import { createApp } from 'vue';
//vue
import { Tabbar,TabbarItem,Icon } from '@nutui/nutui';
//taro
import { Tabbar,TabbarItem,Icon } from '@nutui/nutui-taro';

const app = createApp();
app.use(Tabbar);
app.use(TabbarItem);

```


### Basic Usage
If you need to use more icons based on the existing Icon, please refer to the Icon component custom icon introduction

:::demo
```html
<template>
<nut-tabbar @tab-switch="tabSwitch">
  <nut-tabbar-item tab-title="tab" icon="home"></nut-tabbar-item>
  <nut-tabbar-item tab-title="tab" icon="category"></nut-tabbar-item>
  <nut-tabbar-item tab-title="tab" icon="find"></nut-tabbar-item>
  <nut-tabbar-item tab-title="tab" icon="cart"></nut-tabbar-item>
  <nut-tabbar-item tab-title="tab" icon="my"></nut-tabbar-item>
</nut-tabbar>
</template>
<script>
  export default{
    setup() {
      function tabSwitch(item, index) {
        console.log(item, index);
      }
      return {
        tabSwitch,
      };
    },
  }
  
</script>
```
:::


### Custom Img
:::demo
```html
<template>
<nut-tabbar @tab-switch="tabSwitch">
      <nut-tabbar-item
        tab-title="tab"
        img="http://img13.360buyimg.com/uba/jfs/t1/29316/38/1115/3203/5c0f3d61E35d0c7da/9e557f2cb5c9dab6.jpg"
        activeImg="http://img20.360buyimg.com/uba/jfs/t1/9996/36/8646/4833/5c0f3d61E7c1b7e0f/c98ad61124172e93.jpg"
      ></nut-tabbar-item>
      <nut-tabbar-item
        tab-title="tab"
        img="http://img12.360buyimg.com/uba/jfs/t1/25443/23/1062/4600/5c0f3d61E2e9f1360/c9b3421fe18614e2.jpg"
        activeImg="http://img20.360buyimg.com/uba/jfs/t1/19241/12/1048/8309/5c0f3d61E17ed5a56/c3af0964cade47f8.jpg"
      ></nut-tabbar-item>
      <nut-tabbar-item
        tab-title="tab"
        img="http://img13.360buyimg.com/uba/jfs/t1/10361/35/4713/4643/5c0f3d62E437a3c94/273fd0fb90798f03.jpg"
        activeImg="http://img14.360buyimg.com/uba/jfs/t1/26604/35/1073/7896/5c0f3d61Eb9f5f184/5f01c938abe4216d.jpg"
      ></nut-tabbar-item>
      <nut-tabbar-item
        tab-title="tab"
        img="http://img11.360buyimg.com/uba/jfs/t1/14848/18/1066/3723/5c0f41bdE9f2a38fe/e6ed6768717297fb.jpg"
        activeImg="http://img30.360buyimg.com/uba/jfs/t1/17538/16/1070/6214/5c0f41bdE4bc9a1db/74cf978e5015454b.jpg"
      ></nut-tabbar-item>
      <nut-tabbar-item
        tab-title="tab"
        img="http://img20.360buyimg.com/uba/jfs/t1/20004/20/1045/3620/5c0f3d61Eaaec1670/9e59db63983b7b9f.jpg"
        activeImg="http://img14.360buyimg.com/uba/jfs/t1/23967/14/1072/6714/5c0f3d61E0ad8991e/8f741953f6e38f15.jpg"
      ></nut-tabbar-item>
    </nut-tabbar>
</template>
<script>
  export default{
    setup() {
      function tabSwitch(item, index) {
        console.log(item, index);
      }
      return {
        tabSwitch,
      };
    },
  }
  
</script>
```
:::

### Custom Check
:::demo
```html
<template>
<nut-tabbar v-model:visible="active" size="18px">
      <nut-tabbar-item tab-title="tab" icon="home"></nut-tabbar-item>
      <nut-tabbar-item tab-title="tab" icon="category"></nut-tabbar-item>
      <nut-tabbar-item tab-title="tab" icon="find"></nut-tabbar-item>
      <nut-tabbar-item tab-title="tab" icon="cart"></nut-tabbar-item>
      <nut-tabbar-item tab-title="tab" icon="my"></nut-tabbar-item>
    </nut-tabbar>
</template>
```
:::
### Show Badge
:::demo
```html
<template>
  <nut-tabbar>
    <nut-tabbar-item tab-title="tab" icon="home" num="11"></nut-tabbar-item>
    <nut-tabbar-item tab-title="tab" icon="category" :dot="true"></nut-tabbar-item>
    <nut-tabbar-item tab-title="tab" icon="find"></nut-tabbar-item>
    <nut-tabbar-item tab-title="tab" icon="cart" num="110"></nut-tabbar-item>
    <nut-tabbar-item tab-title="tab" icon="my"></nut-tabbar-item>
  </nut-tabbar>
</template>
```
:::
### Custom Color


:::demo
```html
<template>
 <nut-tabbar unactive-color="#7d7e80" active-color="#1989fa">
      <nut-tabbar-item tab-title="tab" icon="home"></nut-tabbar-item>
      <nut-tabbar-item tab-title="tab" icon="category"></nut-tabbar-item>
      <nut-tabbar-item tab-title="tab" icon="find"></nut-tabbar-item>
      <nut-tabbar-item tab-title="tab" icon="cart"></nut-tabbar-item>
      <nut-tabbar-item tab-title="tab" icon="my"></nut-tabbar-item>
    </nut-tabbar>
</template>
```
:::

### Custom Quantity


:::demo
```html
<template>
  <nut-tabbar unactive-color="#7d7e80" active-color="#1989fa">
    <nut-tabbar-item tab-title="tab" icon="home"></nut-tabbar-item>
    <nut-tabbar-item tab-title="tab" icon="category"></nut-tabbar-item>
    <nut-tabbar-item tab-title="tab" icon="find"></nut-tabbar-item>
  </nut-tabbar>
</template>
```
:::
### Fixed Bottom


:::demo
```html
<template>
  <nut-tabbar :bottom="true" :safeAreaInsetBottom="true">
    <nut-tabbar-item tab-title="tab" href="" icon="home"></nut-tabbar-item>
    <nut-tabbar-item tab-title="tab" icon="category"></nut-tabbar-item>
    <nut-tabbar-item tab-title="tab" icon="find"></nut-tabbar-item>
    <nut-tabbar-item tab-title="tab" href="https://m.jd.com" icon="cart"></nut-tabbar-item>
    <nut-tabbar-item tab-title="tab" href="######" icon="my"></nut-tabbar-item>
  </nut-tabbar>
</template>
```
:::
### Prop

### nut-tabbar

| Attribute            | Description               | Type   | Default  |
|-----------------|--------------------|--------|---------|
| v-model:visible | The index value of the selected label  | number | 0       |
| bottom          | Whether to fix the bottom | boolean | false   |
| size          | icon size | string | '20px'  |
| unactive-color  | Color of unactive tab item  | string | #7d7e80 |
| active-color    | Color of active tab item    | string | #1989fa |
| safe-area-inset-bottom   | Whether to enable bottom safe area adaptation    | boolean | false |
### tabbar-item

| Attribute      | Description                                      | Type   | Default |
|-----------|-------------------------------------------|--------|--------|
| tab-title | title                              | string | --     |
| name | Identifier                              | string | 	Item index     |
| icon      | icon name   | string | --     |
| font-class-name |Custom icon font base class name    | string           | `nutui-iconfont` |
| class-prefix | Custom icon class name prefix for using custom icons     | string           | `nut-icon` |
| img      | ImgUrl of unactive tab item | String | --     |
| active-img      | ImgUrl of active tab item（Only one icon and img can be selected in the same item） | string | --     |
| href      | Jump links for tabs                          | string | --     |
| to  `applet not supported`      | 	Target route of the link, same as to of vue-router | string｜object | --     |
| num       | Numbered corner label in the upper right corner of the tab    | number | --     |
| dot       | Whether to show red dot   | boolean | false    |


### Event

| Event | Description                  | Arguments    |
|------------|--------------------|--------------------|
| tab-switch | 	Emitted when changing active tab | item,index |



