# Card

### Intro

Used to display product pictures, prices and other information.

### Install

```javascript

import { createApp } from 'vue';
// vue
import { Card,Tag,Price} from '@nutui/nutui';
// taro
import { Card ,Tag,Price} from '@nutui/nutui-taro';

const app = createApp();
app.use(Card).use(Tag).use(Price);

```

### Usage

### Basic Usage

:::demo
```html
<template>
 <nut-card
  :img-url="state.imgUrl"
  :title="state.title"
  :price="state.price"
  :vipPrice="state.vipPrice"
  :shopDesc="state.shopDesc"
  :delivery="state.delivery"
  :shopName="state.shopName"
  >
</nut-card>
</template>
<script>
  import { reactive } from 'vue';
  export default{
    setup() {
    const state = reactive({
      imgUrl:
        '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
      title: 'title',
      price: '388',
      vipPrice: '378',
      shopDesc: 'desc',
      delivery: 'delivery',
      shopName: 'shopName>'
    });
    return {
      state
    };
  }
}
</script>
```
:::

### Custom Content
:::demo
```html
<template>
<nut-card
:img-url="state.imgUrl"
:title="state.title"
:price="state.price"
:vipPrice="state.vipPrice"
:shopDesc="state.shopDesc"
:delivery="state.delivery"
:shopName="state.shopName"
>
  <template #prolist>
    <div class="search_prolist_attr">
      <span class="word">word</span>
      <span class="word">word</span>
      <span class="word">word</span>
    </div>
  </template>
  <template #tag>
    <img
        class="tag" 
        src="https://img11.360buyimg.com/jdphoto/s58x28_jfs/t9451/359/415622649/15318/b0943e5d/59a78495N3bd2a9f8.png"
        alt=""
    />
  </template>
    <template #footer>
      <div class="customize">cuttom</div>
    </template>
</nut-card>
</template>
<script>
  import { reactive } from 'vue';
  export default{
    setup() {
    const state = reactive({
      imgUrl:
        '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
      title: 'title',
      price: '388',
      vipPrice: '378',
      shopDesc: 'desc',
      delivery: 'delivery',
      shopName: 'shopName>'
    });
    return {
      state
    };
  }
}
</script>
<style>
.search_prolist_attr {
  margin: 3px 0 1px;
  height: 15px;
  overflow: hidden;
 
}
.search_prolist_attr > span{
    float: left;
    padding: 0 5px;
    border-radius: 1px;
    font-size: 10px;
    height: 15px;
    line-height: 15px;
    color: #999;
    background-color: #f2f2f7;
    margin-right: 5px;
}
.tag {
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  margin-left: 2px;
  height: 14px;
}
.customize {
  font-size: 12px;
}
</style>

```
:::
### Prop  

| Attribute            | Description               | Type   | Default  |
|---------|--------------------------------------------|---------|-----------|
| img-url   | Left thumb image URL                                 | String  | -         |
| title     | Title                   | String  | -    |
| price | Price                         | String  | -      |
| vip-price     | vip-price                                | String | -    |
| shop-desc  | shop-desc                                | String | -    |
| delivery     | delivery | String  | -      |
| shop-name   | shop-name | String  | -      |
| is-need-price  | Whether price display is required| Boolean  | true   |


### Slots

| Name    | Description         |
|---------|--------------|
| prolist | 	Custom product introduction |
| price | 	Custom price |
| origin | 	Custom content behind the price |
| shop-tag | 	Custom shop introduction |
| footer | 	Customize bottom right content |
