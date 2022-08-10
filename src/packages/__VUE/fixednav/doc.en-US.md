# FixedNav

### Intro

Hover stow experience Interaction for quick navigation

### Install
    
``` javascript
import { createApp } from 'vue';
// vue
import { FixedNav,OverLay } from '@nutui/nutui';
// taro
import { FixedNav,OverLay } from '@nutui/nutui-taro';

const app = createApp();
app.use(FixedNav);
app.use(OverLay);

```


### Basic Usage

:::demo
```html
<template>
  <nut-fixednav :position="{top:'70px' }" v-model:visible="visible" :nav-list="navList" />
</template>
<script lang="ts">
import { ref,reactive } from 'vue';
export default {
 setup() {
    const visible = ref(false);
    const navList = reactive([
      {
        id: 1,
        text: 'Index',
        icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'
      },
      {
        id: 2,
        text: 'Category',
        icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'
      },
      {
        id: 3,
        text: 'Cart',
        num: 2,
        icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'
      },
      {
        id: 4,
        text: 'My',
        icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png'
      }
    ]);
    return {
      visible,
      navList
    };
 }
}
</script>
```
:::

### Left effect

``` html
<nut-fixednav type="left" :position="{top:'140px' }" v-model:visible="visible" :nav-list="navList" />
```


### Unmask background

``` html
<nut-fixednav :overlay="false"  :position="{top:'210px' }" v-model:visible="visible" :nav-list="navList" />
```

### Support drag and drop with drag

``` html
<nut-drag direction="y" :style="{right:'0px',bottom:'240px'}">
  <nut-fixednav un-active-text="drag" v-model:visible="visible" :nav-list="navList" />
</nut-drag>
```

### Custom use

:::demo
```html
<template>
<nut-fixednav :position="{top:'280px' }" type="left" v-model:visible="myActive">
    <template v-slot:list>
        <ul class="nut-fixednav__list">
            <li class="nut-fixednav__list-item">1</li>
            <li class="nut-fixednav__list-item">2</li>
            <li class="nut-fixednav__list-item">3</li>
            <li class="nut-fixednav__list-item">4</li>
            <li class="nut-fixednav__list-item">5</li>
        </ul>
    </template>
<template v-slot:btn>
    <nut-icon name="retweet" color="#fff">
    </nut-icon>
    <span class="text">{{ myActive ? 'Open' : 'Close' }}</span>
</template>
</nut-fixednav>
</template>
<script lang="ts">
import { ref,reactive } from 'vue';
export default {
 setup() {
    const myActive = ref(false);
    const navList = reactive([
      {
        id: 1,
        text: 'Index',
        icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'
      },
      {
        id: 2,
        text: 'Category',
        icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'
      },
      {
        id: 3,
        text: 'Cart',
        num: 2,
        icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'
      },
      {
        id: 4,
        text: 'My',
        icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png'
      }
    ]);
    return {
      myActive,
      navList
    };
 }
}
</script>
```
:::


### Prop
| Attribute           | Description                                         | Type    | Default                      |
|:--------------------|:----------------------------------------------------|:--------|:-----------------------------|
| visible             | visible is                                          | Boolean | false                        |
| nav-list            | Suspended list content data                         | Array   | []                           |
| active-color`3.2.1` | list active button color                            | String  | #fa2c19 Inherit theme color  |
| active-text         | Stow list button copy                               | String  | Close Nav                    |
| un-active-text      | Expand list button copy                             | String  | Open Nav                     |
| type                | Navigation direction, optional value `left` `right` | String  | right                        |
| overlay             | Whether to display the mask when expanding          | Boolean | true                         |
| position            | `fixed` Vertical position                           | Object  | {top: 'auto',bottom: 'auto'} |


### Event

| Event    | Description               | Arguments                |
|----------|---------------------------|--------------------------|
| selected | Triggered after selection | {item:item,$event:Event} |


### Slot

| Name | Description                       |
|------|-----------------------------------|
| btn  | slot custom button                |
| list | slot custom expanded list content |

    